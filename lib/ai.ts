import axiosPublic from "./axios";

type NotesPayload = {
  topic: string;
  level: string;
  length: string;
  instructions: string;
};

type QuizPayload = {
  topic: string;
  difficulty: string;
  totalQuestions: number;
  instructions: string;
};

export const generateNotes = async (data: NotesPayload) => {
  const response = await axiosPublic.post("/api/ai/notes", data);
  return response.data;
};

export const generateQuiz = async (data: QuizPayload) => {
  const response = await axiosPublic.post("/api/ai/quiz", data);
  return response.data;
};