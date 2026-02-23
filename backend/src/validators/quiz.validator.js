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
 * Option Schema
 */
const optionSchema = Joi.object({
            text: Joi.string()
                        .trim()
                        .min(1)
                        .required()
                        .messages({
                                    "string.empty": "Option text is required",
                        }),

            isCorrect: Joi.boolean().required(),
});

/**
 * Question Schema
 */
const questionSchema = Joi.object({
            question: Joi.string()
                        .trim()
                        .min(5)
                        .required()
                        .messages({
                                    "string.min": "Question must be at least 5 characters",
                        }),

            options: Joi.array()
                        .items(optionSchema)
                        .min(2)
                        .required()
                        .custom((options, helpers) => {
                                    const correctAnswers = options.filter(
                                                (opt) => opt.isCorrect
                                    );

                                    if (correctAnswers.length === 0) {
                                                return helpers.message(
                                                            "Each question must have at least one correct answer"
                                                );
                                    }

                                    return options;
                        }),
});

/**
 * Create Quiz Schema
 */
export const createQuizSchema = Joi.object({
            course: Joi.string()
                        .custom(objectId)
                        .required(),

            questions: Joi.array()
                        .items(questionSchema)
                        .min(1)
                        .required(),

            passingScore: Joi.number()
                        .min(0)
                        .max(100)
                        .default(50),
})
            .options({ abortEarly: false })
            .unknown(false);