"use client";

import { useState } from "react";
import AIQuizForm from "@/app/Components/ai/AIQuizForm";
import AIResponse from "@/app/Components/ai/AIResponse";

export default function AIQuizPage() {
    const [response, setResponse] = useState("");
    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold">
                    AI Quiz Generator
                </h1>

                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Generate AI-powered quizzes from any topic to test your knowledge.
                </p>
            </div>

            {/* Generate Quiz Section */}
            <div className="rounded-xl border p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">
                    Generate Quiz
                </h2>

                <AIQuizForm setResponse={setResponse} />
            </div>

            {/* Quiz Result Section */}
            <div className="rounded-xl border p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">
                    Generated Quiz
                </h2>

                <AIResponse
                    title="Generated Quiz"
                    content={response}
                />
            </div>
        </div>
    );
}