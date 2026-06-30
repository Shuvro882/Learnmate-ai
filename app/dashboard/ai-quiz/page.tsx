import AIQuizForm from "@/app/Components/ai/AIQuizForm";
import AIResponse from "@/app/Components/ai/AIResponse";

export default function AIQuizPage() {
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

                <AIQuizForm />
            </div>

            {/* Quiz Result Section */}
            <div className="rounded-xl border p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">
                    <AIResponse
                        title="Generated Notes"
                        content=""
                    />
                </h2>

                {/* পরে এখানে Quiz Response Component বসবে */}
                <div className="h-72 flex items-center justify-center border border-dashed rounded-lg">
                    <p className="text-gray-500">
                        AI generated quiz will appear here.
                    </p>
                </div>
            </div>
        </div>
    );
}