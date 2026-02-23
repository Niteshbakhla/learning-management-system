import rateLimit from "express-rate-limit";

export const globalLimiter = rateLimit({
            windowMs: 15 * 60 * 1000, // 15 min
            max: 300, // max requests per IP
            message: "Too many requests, try again later",
});


export const authLimiter = rateLimit({
            windowMs: 15 * 60 * 1000,
            max: 20,
            message: "Too many login attempts",
});