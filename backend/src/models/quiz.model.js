import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
            question: { type: String, required: true },

            options: [
                        {
                                    text: String,
                                    isCorrect: Boolean,
                        },
            ],
});

const quizSchema = new mongoose.Schema(
            {
                        course: {
                                    type: mongoose.Schema.Types.ObjectId,
                                    ref: "Course",
                                    required: true,
                                    unique: true,
                        },

                        questions: [questionSchema],
                        passingScore: {
                                    type: Number,
                                    default: 50,
                        },
            },
            { timestamps: true }
);

const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;
