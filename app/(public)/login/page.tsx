"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { signInUser, signInGoogle } = useAuth();

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  // EMAIL LOGIN
  const onSubmit = async (data: FormData) => {
    setSuccess("");
    setError("");

    try {
      await signInUser(data.email, data.password);

      setSuccess("Login successful 🎉");

      // form clear
      reset();

      router.push(redirect || "/");
      
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  // GOOGLE LOGIN
  const handleGoogleSignIn = async () => {
    try {
      await signInGoogle();
      setSuccess("Google login successful 🎉");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-10 px-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="w-full max-w-md">
        <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8">

          {/* TITLE */}
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome Back
            </h1>
            <p className="text-gray-500 mt-2">
              Login to continue your learning journey
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

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium">Password</label>

              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
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

            {/* FORGOT PASSWORD */}
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-indigo-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>

          {/* DIVIDER */}
          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-sm text-gray-500">or continue with</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* GOOGLE LOGIN */}
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="mt-4 w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
          >
            {/* Google Icon */}
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff" />
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
              </g>
            </svg>

            <span className="text-sm font-medium text-gray-700">
              Login with Google
            </span>
          </button>

          {/* REGISTER LINK */}
          <p className="text-sm text-center mt-6 text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="text-indigo-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}