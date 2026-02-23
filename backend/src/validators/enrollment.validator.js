import Joi from "joi";
import mongoose from "mongoose";

const objectId = (value, helpers) => {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                        return helpers.message("Invalid MongoDB ObjectId");
            }
            return value;
};

export const enrollCourseSchema = Joi.object({
            course: Joi.string()
                        .custom(objectId)
                        .required()
                        .messages({
                                    "any.required": "Course ID is required",
                        }),
})
            .unknown(false);