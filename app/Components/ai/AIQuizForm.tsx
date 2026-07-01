"use client";
import { useState } from "react";
import { generateQuiz } from "@/lib/ai";


type AIQuizFormProps = {
  setResponse: React.Dispatch<React.SetStateAction<string>>;
};

export default function AIQuizForm({
  setResponse,
}: AIQuizFormProps) {

  const [formData, setFormData] = useState({
  topic: "",
  difficulty: "Easy",
  totalQuestions: 5,
  instructions: "",
});
const [loading, setLoading] = useState(false);

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]:
      name === "totalQuestions"
        ? Number(value)
        : value,
  }));
};

const handleSubmit = async (e: any) => {
  e.preventDefault();

  try {
  setLoading(true);

  const result = await generateQuiz(formData);

  setResponse(result.data);
} catch (error) {
  console.error(error);
} finally {
  setLoading(false);
}
};
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Topic */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Quiz Topic
        </label>

        <input
  type="text"
  name="topic"
  value={formData.topic}
  onChange={handleChange}
  placeholder="e.g. React, JavaScript, HTML, CSS"
  className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
/>
      </div>

      {/* Difficulty */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Difficulty Level
        </label>

        <select
  name="difficulty"
  value={formData.difficulty}
  onChange={handleChange}
  className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      {/* Number of Questions */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Number of Questions
        </label>

        <select
  name="totalQuestions"
  value={formData.totalQuestions}
  onChange={handleChange}
  className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
>
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </select>
      </div>

      {/* Additional Instructions */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Additional Instructions
        </label>

        <textarea
  name="instructions"
  value={formData.instructions}
  onChange={handleChange}
  rows={5}
  placeholder="Example: Include multiple-choice questions only, avoid very difficult questions..."
  className="w-full rounded-lg border px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-indigo-500"
/>
      </div>

      {/* Submit Button */}
      <button
  type="submit"
  disabled={loading}
  className="w-full rounded-lg bg-indigo-600 py-3 text-white font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
>
  {loading ? "Generating Quiz..." : "Generate AI Quiz"}
</button>
    </form>
  );
}