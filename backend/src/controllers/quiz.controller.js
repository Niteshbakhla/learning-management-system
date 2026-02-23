import * as Quiz from "../services/quiz.service.js";
import asyncHandler from "../utils/asyncHandler.js";


export const createQuizController = asyncHandler(
            async (req, res, next) => {
                        const quiz = await Quiz.createQuiz(req.params.courseId, req.body);
                        res.status(201).json({ success: true, quiz });
            }
)


export const getQuizController = asyncHandler(
            async (req, res, next) => {
                        const quiz = await Quiz.getQuiz(req.params.courseId);
                        res.status(200).json({ success: true, quiz });
            }
)


export const submitQuizController = asyncHandler(
            async (req, res, next) => {
                        const quiz = await Quiz.submitQuiz(req.dbUser._id, req.params.courseId, req.body.answers);
                        res.status(200).json({ success: true, quiz });
            }
)
