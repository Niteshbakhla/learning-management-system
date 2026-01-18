import express from "express"
import cors from "cors"
import indexRoutes from "./routes/index.js"
import errorHandler from "./middleware/errorHandler.js"



const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to LMS Backend API' });
});


app.use("/api", indexRoutes)

// Global error handler (must be last)
app.use(errorHandler);

export default app;