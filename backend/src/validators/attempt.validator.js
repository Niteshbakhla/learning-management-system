import Joi from "joi";
import mongoose from "mongoose";

/**
 * ObjectId validator
 */
const objectId = (value, helpers) => {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                        return helpers.message("Invalid MongoDB ObjectId");
            }
            return value;
};

/**
 * Answer Schema
 */
const answerSchema = Joi.object({
            questionIndex: Joi.number()
                        .integer()
                        .min(0)
                        .required()
                        .messages({
                                    "number.base": "Question index must be a number",
                        }),

            selectedOptionIndex: Joi.number()
                        .integer()
                        .min(0)
                        .required()
                        .messages({
                                    "number.base": "Selected option index must be a number",
                        }),
});

/**
 * Submit Attempt Schema
 */
export const submitAttemptSchema = Joi.object({
            course: Joi.string()
                        .custom(objectId)
                        .required(),

            answers: Joi.array()
                        .items(answerSchema)
                        .min(1)
                        .required()
                        .messages({
                                    "array.min": "At least one answer is required",
                        }),
})
            .options({ abortEarly: false })
            .unknown(false);