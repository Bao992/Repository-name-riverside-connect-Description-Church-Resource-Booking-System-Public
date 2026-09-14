import express from "express";
import cors from "cors";
import resourcesRoutes from "./routes/resources";
import bookingsRoutes from "./routes/bookings";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./docs/swagger";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resources", resourcesRoutes);
app.use("/api/bookings", bookingsRoutes);

app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);


app.get("/", (_req, res) => {

    
    res.json({
        message: "Riverside Connect API Running",        
    });
});



const PORT = 5000;



app.listen(PORT, () => {
    console.log(`🚀  Riverside Connect API running on port ${PORT}`);
});