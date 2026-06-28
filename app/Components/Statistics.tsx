"use client";

import axiosPublic from "@/lib/axios";
import { useEffect, useState } from "react";

type StatsData = {
  students: number;
  tutors: number;
  resources: number;
  aiGenerations: number;
};

export default function Statistics() {
  const [stats, setStats] = useState<StatsData>({
    students: 0,
    tutors: 0,
    resources: 0,
    aiGenerations: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStatistics = async () => {
      try {
        const res = await axiosPublic.get("/statistics");

        setStats(res.data);
      } catch (error) {
        console.error("Failed to fetch statistics:", error);
      } finally {
        setLoading(false);
      }
    };

    getStatistics();
  }, []);

  const statsItems = [
    {
      title: "Active Students",
      value: stats.students,
      description: "Students actively learning on LearnMate AI",
    },
    {
      title: "Expert Tutors",
      value: stats.tutors,
      description: "Verified tutors helping learners succeed",
    },
    {
      title: "Learning Resources",
      value: stats.resources,
      description: "Study materials and educational content",
    },
    {
      title: "AI Generations",
      value: stats.aiGenerations,
      description: "AI-powered notes, quizzes, and recommendations",
    },
  ];

  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          Learning Insights
        </h2>

        <p className="mt-3 text-muted-foreground">
          Real-time statistics from the LearnMate AI platform.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-40 animate-pulse rounded-2xl border"
              />
            ))
          : statsItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-primary text-3xl font-bold">
                  {item.value.toLocaleString()}+
                </h3>

                <p className="mt-2 font-semibold">
                  {item.title}
                </p>

                <p className="text-muted-foreground mt-2 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
      </div>
    </section>
  );
}