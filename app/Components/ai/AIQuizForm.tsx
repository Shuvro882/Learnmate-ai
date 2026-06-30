"use client";

export default function AIQuizForm() {
  return (
    <form className="space-y-5">
      {/* Topic */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Quiz Topic
        </label>

        <input
          type="text"
          placeholder="e.g. React, JavaScript, HTML, CSS"
          className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Difficulty */}
      <div>
        <label className="block mb-2 text-sm font-medium">
          Difficulty Level
        </label>

        <select className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500">
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

        <select className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500">
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
          rows={5}
          placeholder="Example: Include multiple-choice questions only, avoid very difficult questions..."
          className="w-full rounded-lg border px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 py-3 text-white font-semibold hover:bg-indigo-700 transition"
      >
        Generate AI Quiz
      </button>
    </form>
  );
}