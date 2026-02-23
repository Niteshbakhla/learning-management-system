import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema(
            {
                        user: {
                                    type: mongoose.Schema.Types.ObjectId,
                                    ref: "User",
                                    required: true,
                        },

                        course: {
                                    type: mongoose.Schema.Types.ObjectId,
                                    ref: "Course",
                                    required: true,
                        },

                        score: Number,

                        totalQuestions: Number,

                        answers: [
                                    {
                                                questionIndex: Number,
                                                selectedOptionIndex: Number,
                                    },
                        ],
            },
            { timestamps: true }
);

const Attempt = mongoose.model("Attempt", attemptSchema);
export default Attempt;
