import Joi from "joi";
import mongoose from "mongoose";

/**
 * Reusable ObjectId validator
 */
const objectId = (value, helpers) => {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                        return helpers.message("Invalid MongoDB ObjectId");
            }
            return value;
};

export const createLessonSchema = Joi.object({
            title: Joi.string()
                        .trim()
                        .min(3)
                        .max(120)
                        .pattern(/^[a-zA-Z0-9\s:,-]+$/)
                        .required()
                        .messages({
                                    "string.empty": "Lesson title is required",
                                    "string.min": "Title must be at least 3 characters",
                        }),

            videoUrl: Joi.string()
                        .uri()
                        .required()
                        .messages({
                                    "string.uri": "Video URL must be valid",
                        }),

            course: Joi.string()
                        .custom(objectId)
                        .required(),

            order: Joi.number()
                        .integer()
                        .min(1)
                        .required()
                        .messages({
                                    "number.base": "Order must be a number",
                                    "number.min": "Order must be at least 1",
                        }),
})
            .options({ abortEarly: false })
            .unknown(false);



export const updateLessonSchema = Joi.object({
            title: Joi.string().trim().min(3).max(120),

            videoUrl: Joi.string().uri(),

            order: Joi.number().integer().min(1),
})
            .min(1)
            .unknown(false);