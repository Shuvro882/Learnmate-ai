"use client";

type AIResponseProps = {
  title?: string;
  content?: string;
};

export default function AIResponse({
  title = "Generated Result",
  content,
}: AIResponseProps) {
  return (
    <div className="rounded-xl border p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      {content ? (
        <div className="space-y-4">
          <div className="rounded-lg border bg-gray-50 dark:bg-gray-900 p-4 whitespace-pre-wrap leading-7">
            {content}
          </div>

          <div className="flex gap-3">
            <button
              className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition"
              onClick={() => navigator.clipboard.writeText(content)}
            >
              Copy
            </button>

            <button
              className="rounded-lg border px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Download
            </button>
          </div>
        </div>
      ) : (
        <div className="h-60 flex items-center justify-center rounded-lg border border-dashed">
          <p className="text-gray-500 text-center">
            Your AI generated content will appear here.
          </p>
        </div>
      )}
    </div>
  );
}