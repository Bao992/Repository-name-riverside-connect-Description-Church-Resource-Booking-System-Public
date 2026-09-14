import { Request, Response } from "express";

const supabase = require("../config/supabase");

export const getResources = async (
    _req: Request,
    res: Response
) => {    
    const { data, error } = await supabase
    .from("resources")
    .select("*");
   

    if(error) {
        return res.status(500).json({
            error: error.message,
        });
    }

    res.json(data);
};

export const getResourcesById = async (
    req: Request,
    res: Response
) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from("resources")
        .select("*")
        .eq("id", id)
        .single();

    if(error) {
        return res.status(404).json({
            error: error.message,
        });
    }

    res.json(data);
}

export const createResource = async (
    req: Request,
    res: Response

) => {

    const {
        name,
        type,
        capacity,
        description,
        image_url,
        is_active
    } = req.body;

    const { data, error } = await supabase
        .from("resources")
        .insert([
            {
                name,
                type,
                capacity,
                description,
                image_url,
                is_active
            }
        ])
        .select()
        .single();


    if (error) {
        return res.status(500).json({
            error: error.message,
        });


    }
    res.status(201).json(data);
};
