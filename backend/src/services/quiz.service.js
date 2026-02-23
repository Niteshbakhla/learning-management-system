import Attempt from "../models/attempt.model.js";
import Quiz from "../models/quiz.model.js"
import CustomError from "../utils/customError.js";


export const createQuiz = async (courseId, quizData) => {
            const { questions, passingScore } = quizData;
            const quiz = await Quiz.create({ course: courseId, questions, passingScore })
            return quiz;
}


export const getQuiz = async (courseId) => {
            const quiz = await Quiz.findOne({ course: courseId });

            if (!quiz) {
                        throw new CustomError("Quiz not found", 404);
            }

            const sanitizedQuiz = quiz.questions.map((q) => ({
                        question: q.question,
                        options: q.options.map((opt) => ({
                                    text: opt.text
                        }))
            }));

            return { questions: sanitizedQuiz, passingScore: quiz.passingScore };
}

export const submitQuiz = async (userId, courseId, answers) => {

            const quiz = await Quiz.findOne({ course: courseId });

            if (!quiz) {
                        throw new CustomError("Quiz not found", 404);
            }
            
            const answerMap = new Map();
            answers.forEach(a => {
                        answerMap.set(a.questionIndex, a.selectedOptionIndex);
            });

            let score = 0;

            quiz.questions.forEach((question, index) => {
                        const correctOptionIndex = question.options.findIndex(
                                    (opt) => opt.isCorrect
                        );
                        const studentAnswer = answerMap.get(index);

                        if (studentAnswer === correctOptionIndex) {
                                    score++;
                        }
            });

            const percent = Math.round((score / quiz.questions.length) * 100);

            const attempts = await Attempt.countDocuments({
                        user: userId,
                        course: courseId
            })

            if (attempts >= 3) {
                        throw new CustomError("Max attempts reached", 400)
            }

            await Attempt.create({
                        user: userId,
                        course: courseId,
                        score: percent,
                        totalQuestions: quiz.questions.length,
                        answers,
            });

            return { score: percent, passed: percent >= quiz.passingScore };
};