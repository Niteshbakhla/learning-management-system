import Joi from "joi";
import mongoose from "mongoose";

/**
 * Custom ObjectId validator
 */
const objectId = (value, helpers) => {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                        return helpers.message("Invalid MongoDB ObjectId");
            }
            return value;
};

export const createCourseSchema = Joi.object({
            title: Joi.string()
                        .trim()
                        .min(5)
                        .max(120)
                        .pattern(/^[a-zA-Z0-9\s:,-]+$/)
                        .required()
                        .messages({
                                    "string.empty": "Course title is required",
                                    "string.min": "Title must be at least 5 characters",
                                    "string.max": "Title cannot exceed 120 characters",
                                    "string.pattern.base":
                                                "Title contains invalid characters",
                        }),

            description: Joi.string()
                        .trim()
                        .min(20)
                        .max(2000)
                        .required()
                        .messages({
                                    "string.min":
                                                "Description should be at least 20 characters",
                        }),

            price: Joi.number()
                        .min(0)
                        .max(10000)
                        .precision(2)
                        .default(0)
                        .messages({
                                    "number.base": "Price must be a number",
                                    "number.min": "Price cannot be negative",
                        }),

            isPublished: Joi.boolean().default(false),

            instructor: Joi.string()
                        .custom(objectId)
                        .required(),

            // Future-ready optional fields 👇

            category: Joi.string()
                        .valid(
                                    "web development",
                                    "app development",
                                    "data science",
                                    "design",
                                    "marketing"
                        )
                        .optional(),

            thumbnail: Joi.string()
                        .uri()
                        .optional(),
})
            .options({ abortEarly: false }) // return all errors
            .unknown(false); // block extra fields




export const updateCourseSchema = Joi.object({
            title: Joi.string().trim().min(5).max(120),

            description: Joi.string().trim().min(20),

            price: Joi.number().min(0).precision(2),

            isPublished: Joi.boolean(),

            category: Joi.string().valid(
                        "web development",
                        "app development",
                        "data science",
                        "design",
                        "marketing"
            ),

            thumbnail: Joi.string().uri(),
})
            .min(1) // at least one field required
            .unknown(false);