import { z } from "zod";

export const bookingSchema = z.object({
    resource_id: z.uuid(),
    member_id: z.uuid(),

    start_time: z.string().datetime(),
    end_time: z.string().datetime(),

    status: z.enum([
        "pending",
        "approved",
        "rejected"
    ])
})
.refine(
    (data) =>
        new Date(data.end_time) >
        new Date(data.start_time),
    {
        message:
            "end_time must be after start_time",
        path: ["end_time"]
    }
);