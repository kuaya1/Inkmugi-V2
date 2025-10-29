import React, { useState } from 'react';
import { PMU_QUIZ_QUESTIONS } from '../constants';

const Quiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const currentQuestion = PMU_QUIZ_QUESTIONS[currentQuestionIndex];

    const handleAnswer = (answer: string) => {
        if (showResult) return;
        setSelectedAnswer(answer);
        setShowResult(true);
        if (answer === currentQuestion.correctAnswer) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < PMU_QUIZ_QUESTIONS.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            // End of quiz
             setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
    }

    if (currentQuestionIndex >= PMU_QUIZ_QUESTIONS.length) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <h2 className="text-3xl font-bold text-[#4F4A45] mb-4 font-serif">Quiz Complete!</h2>
                <p className="text-xl text-[#8A817C] mb-6">Your score: {score} out of {PMU_QUIZ_QUESTIONS.length}</p>
                <button
                    onClick={handleRestart}
                    className="px-8 py-3 bg-[#4F4A45] text-white font-bold rounded-lg hover:bg-[#6b625c] transition-colors"
                >
                    Take Quiz Again
                </button>
            </div>
        );
    }

    return (
        <div className="p-8 flex flex-col h-full">
            <h2 className="text-2xl font-bold text-center mb-2 text-[#4F4A45] font-serif">PMU Knowledge Check</h2>
            <p className="text-center text-[#8A817C] mb-8">Question {currentQuestionIndex + 1} of {PMU_QUIZ_QUESTIONS.length}</p>

            <div className="bg-[#F9F7F5]/50 border border-[#EBE3DD] p-6 rounded-lg flex-grow">
                <h3 className="text-xl font-semibold mb-6 text-[#4F4A45]">{currentQuestion.question}</h3>
                <div className="space-y-3">
                    {currentQuestion.options.map(option => {
                        const isCorrect = option === currentQuestion.correctAnswer;
                        const isSelected = option === selectedAnswer;
                        let buttonClass = 'w-full text-left p-4 rounded-lg border-2 border-[#EBE3DD] bg-white hover:bg-[#F9F7F5] transition-all';
                        if (showResult && isCorrect) {
                            buttonClass = 'w-full text-left p-4 rounded-lg border-2 border-[#a3b18a] bg-[#f0f3eb] text-[#4f622d]';
                        } else if (showResult && isSelected && !isCorrect) {
                            buttonClass = 'w-full text-left p-4 rounded-lg border-2 border-[#e07a5f] bg-[#faebe7] text-[#9d442a]';
                        }
                        return (
                            <button key={option} onClick={() => handleAnswer(option)} disabled={showResult} className={buttonClass}>
                                {option}
                            </button>
                        );
                    })}
                </div>
            </div>
            
            {showResult && (
                <div className="mt-6 p-4 bg-[#F9F7F5]/50 rounded-lg text-center">
                    <p className="text-[#4F4A45] mb-4">{currentQuestion.explanation}</p>
                    <button
                        onClick={handleNext}
                        className="px-8 py-3 bg-[#4F4A45] text-white font-bold rounded-lg hover:bg-[#6b625c] transition-colors"
                    >
                        {currentQuestionIndex < PMU_QUIZ_QUESTIONS.length - 1 ? "Next Question" : "Finish Quiz"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;