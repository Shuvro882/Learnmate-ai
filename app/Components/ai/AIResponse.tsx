"use client";
import { useState } from "react";

type AIResponseProps = {
  title?: string;
  content?: string;
};

export default function AIResponse({
  title = "Generated Result",
  content,
}: AIResponseProps) {
  const [copied, setCopied] = useState(false);
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
              onClick={async () => {
                await navigator.clipboard.writeText(content);

                setCopied(true);

                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            >
              {copied ? "Copied ✅" : "Copy"}
            </button>

            <button
              className="rounded-lg border px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => {
                if (!content) return;

                const blob = new Blob([content], {
                  type: "text/plain",
                });

                const url = URL.createObjectURL(blob);

                const link = document.createElement("a");

                link.href = url;
                link.download = "AI-Notes.txt";

                document.body.appendChild(link);

                link.click();

                document.body.removeChild(link);

                URL.revokeObjectURL(url);
              }}
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