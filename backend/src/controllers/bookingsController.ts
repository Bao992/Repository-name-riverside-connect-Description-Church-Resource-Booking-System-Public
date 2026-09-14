import { Request, Response } from "express";
import { bookingSchema } from "../validators/bookingValidator";

import supabase from "../config/supabase";

export const getBookings = async (
    req: Request,
    res: Response
) => {

    const {
    status,
    member_id,
    resource_id,
    sortBy,
    order
} = req.query;
        
    let query = supabase
        .from("bookings")
        .select(`
            *,
            resources(
            id,
            name,
            type,
            capacity
            ),
            profiles (
                id,
                full_name,
                role
            )
            `);

    if (status) {
        query = query.eq("status", status);
        }

     if (member_id) {
        query = query.eq("member_id", member_id);
        }
    
     if (resource_id) {
        query = query.eq("resource_id", resource_id);
        }

    if (sortBy) {
    query = query.order(
        sortBy as string,
        {
            ascending: order !== "desc"
        }
    );
}

    const { data, error } = await query
    
    if (error) {
        return res.status(500).json({
            error: error.message,
        });
    }

    res.json(data);
};

export const getBookingById= async (
    req: Request,
    res: Response
) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from("bookings")
        .select(`
            *,
            resources (
            id,
            name,
            type,
            capacity
            ),
            profiles(
                id,
                full_name,
                role
            )

        `)
        .eq("id", id)
        .single();

    if (error) {
        return res.status(404). json({
            error: error.message,
        });
    }
    res.json(data);
};

export const createBooking = async (
    req: Request,
    res: Response
) => {

    const validation = bookingSchema.safeParse(req.body);

    if (!validation.success) {
        return res.status(400).json({
            error: "Validation failed",
            details: validation.error.issues
        });
    }

    const {
        resource_id,
        member_id,
        start_time,
        end_time,
        status
    
} = validation.data;

// Check for overlapping bookings
const { data: conflicts, error: conflictError } = await supabase
    .from("bookings")
    .select("*")
    .eq("resource_id", resource_id)
    .lt("start_time", end_time)
    .gt("end_time", start_time);

if (conflictError) {
    return res.status(500).json({
        error: conflictError.message,
    });
}    

if (conflicts && conflicts.length > 0) {
    return res.status(400).json({
        error: "Resource already booked for this time slot",
    });
}

const { data, error } = await supabase
    .from("bookings")
    .insert([
        {
            resource_id,
            member_id,
            start_time,
            end_time,
            status
        }
    ])
    .select()
    .single();

    if (error) {
        return res.status(500).json({
            error:error.message,
        });
    }

    res.status(201).json(data);

};

export const updateBookingStatus = async (
    req: Request,
    res: Response
) => {
    const { id } = req.params;
    const { status } = req.body;

    const { data, error } = await supabase
        .from("bookings")
        .update({ status })
        .eq("id", id)
        .select()
        .single();

    if(error) {
        return res.status(500).json({
            error: error.message,
        });
    }

    res.json(data);
};

export const deleteBooking = async (
    req: Request,
    res: Response
) => {
    const { id } = req.params;

    const { error } = await supabase
        .from("bookings")
        .delete()
        .eq("id", id);

    if (error) {
        return res.status(500).json({
            error: error.message,    
        });
    }

    res.json({
        message: " Booking deleted successfully",
    });
};

export const getBookingStats = async (
    _req: Request,
    res: Response
) => {

    const { data, error } = await supabase
        .from("bookings")
        .select("status");

    if (error) {
        return res.status(500).json({
            error: error.message,
        });
    }

    const stats = {
        total: data.length,
        pending: data.filter(
            (b: any) => b.status === "pending"
        ).length,
        approved: data.filter(
            (b: any) => b.status === "approved"
        ).length,
        rejected: data.filter(
            (b: any) => b.status === "rejected"
        ).length,
    };

    res.json(stats);
};