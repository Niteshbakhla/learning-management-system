import express from "express"
import cors from "cors"
import indexRoutes from "./routes/index.js"
import errorHandler from "./middleware/errorHandler.js"
import cookieParser from "cookie-parser";
import { globalLimiter } from "./middleware/ratelimiter.js";
import helmet from "helmet"
import mongoSanitize from "express-mongo-sanitize";

const app = express();
app.use((req, res, next) => {
    Object.defineProperty(req, 'query', {
        value: { ...req.query },
        writable: true,
        configurable: true,
        enumerable: true,
    });
    next();
});

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(globalLimiter)
app.use(helmet());
app.use(mongoSanitize());


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to LMS Backend API' });
});


app.post("/set-token", (req, res) => {
    const { token } = req.body;
    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000
    });

    res.status(200).json({ message: "Token stored in cookie" })
})


app.use("/api", indexRoutes)


app.use(errorHandler);

export default app;