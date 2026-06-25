"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

type FormData = {
  name: string;
  email: string;
  password: string;
  role: "student" | "tutor";
};

export default function Register() {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { registerUser, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSuccess("");
    setError("");

    try {
      const result = await registerUser(data.email, data.password);
      const user = result.user;

      // 2. Update profile
      await updateUserProfile({
        displayName: data.name,
      });

      // 3. Save user to MongoDB
      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          role: data.role,
          createdAt: new Date(),
        }),
      });

      console.log("REGISTER SUCCESS:", user);

      setSuccess("🎉 Registration successful!");

    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
    }finally{
      reset();
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-12 px-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="w-full max-w-md">
        <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8">

          {/* TITLE */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Create Account
            </h1>
            <p className="text-gray-500 mt-2">
              Join LearnMate AI and start learning smarter
            </p>
          </div>

          {/* SUCCESS / ERROR */}
          {success && (
            <p className="text-green-600 text-sm text-center mb-2">
              {success}
            </p>
          )}

          {error && (
            <p className="text-red-500 text-sm text-center mb-2">
              {error}
            </p>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* NAME */}
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                {...register("name", { required: true })}
                className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>

            {/* ROLE */}
            <div>
              <label className="text-sm font-medium">Role</label>

              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    value="student"
                    {...register("role", { required: true })}
                  />
                  Student
                </label>

                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    value="tutor"
                    {...register("role", { required: true })}
                  />
                  Tutor
                </label>
              </div>

              {errors.role && (
                <p className="text-red-500 text-sm">Role is required</p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium">Password</label>

              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Create password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {show ? <IoEyeOff /> : <FaEye />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm">
                  Password must be 6+ characters
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Create Account
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="text-sm text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}