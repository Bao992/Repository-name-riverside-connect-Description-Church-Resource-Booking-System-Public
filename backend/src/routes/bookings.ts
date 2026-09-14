import { Router } from "express";

import {
    getBookings,
    getBookingById,
    createBooking,
    updateBookingStatus,
    deleteBooking,
    getBookingStats
} from "../controllers/bookingsController";

const router = Router();

router.get("/", getBookings);

router.get("/stats", getBookingStats);

router.get("/:id", getBookingById);

router.post("/", createBooking);

router.patch("/:id", updateBookingStatus);

router.delete("/:id", deleteBooking);

export default router;