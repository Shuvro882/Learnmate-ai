"use client";

import { useState } from "react";
import AINotesForm from "@/app/Components/ai/AINotesForm";
import AIResponse from "@/app/Components/ai/AIResponse";
import { Sparkles } from "lucide-react";

export default function AINotesPage() {
  const [response, setResponse] = useState("");
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-blue-600" />
          AI Notes Generator
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Generate well-structured study notes instantly with AI.
        </p>
      </div>

      {/* Generate Notes Section */}
      <div className="rounded-xl border p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Generate Notes</h2>

        <AINotesForm setResponse={setResponse} />
      </div>

      {/* AI Response Section */}
  <AIResponse
    title="Generated Notes"
    content={response}
  />

    </div>
  );
}