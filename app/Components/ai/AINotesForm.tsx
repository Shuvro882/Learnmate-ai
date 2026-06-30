"use client";
import { useState } from "react";
import { generateNotes } from "@/lib/ai";


type AINotesFormProps = {
  setResponse: React.Dispatch<React.SetStateAction<string>>;
};

export default function AINotesForm({
  setResponse,
}: AINotesFormProps) {

  const [formData, setFormData] = useState({
    topic: "",
    level: "Beginner",
    length: "Short",
    instructions: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      console.log(formData);
      const result = await generateNotes(formData);

setResponse(result.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Topic */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Study Topic
        </label>

        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          placeholder="e.g. React Hooks, JavaScript, Database"
          className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Study Level */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Study Level
        </label>

        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>

      {/* Notes Length */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Notes Length
        </label>

        <select
          name="length"
          value={formData.length}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option>Short</option>
          <option>Medium</option>
          <option>Detailed</option>
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
          placeholder="Example: Explain with examples, use simple language..."
          className="w-full rounded-lg border px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-indigo-600 py-3 text-white font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate AI Notes"}
      </button>
    </form >
  );
}