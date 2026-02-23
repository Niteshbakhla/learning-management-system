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

export const completeLessonSchema = Joi.object({
            course: Joi.string()
                        .custom(objectId)
                        .required()
                        .messages({
                                    "any.required": "Course ID is required",
                        }),

            lesson: Joi.string()
                        .custom(objectId)
                        .required()
                        .messages({
                                    "any.required": "Lesson ID is required",
                        }),
})
            .unknown(false);




export const courseIdSchema = Joi.object({
            courseId: Joi.string()
                        .custom(objectId)
                        .required()
                        .messages({
                                    "any.required": "Course ID is required",
                        }),
});


export const markSchema = Joi.object({
            lessonId: Joi.string()
                        .custom(objectId)
                        .required()
                        .messages({
                                    "any.required": "Lesson ID is required",
                        }),
})
            .unknown(false);