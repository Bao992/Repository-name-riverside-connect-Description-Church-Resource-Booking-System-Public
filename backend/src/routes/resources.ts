import { Router } from "express";
import { getResources, getResourcesById, createResource } from "../controllers/resourcesController";

const router = Router();

router.get("/", getResources);

router.get("/:id", getResourcesById);

router.post("/", createResource);

export default router;