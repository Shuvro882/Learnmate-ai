export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">

      <div className="text-center">

        {/* OUTER PULSE CIRCLE */}
        <div className="relative flex items-center justify-center">

          {/* Pulsing ring */}
          <div className="absolute w-24 h-24 rounded-full bg-white/20 animate-ping"></div>

          {/* Spinning border */}
          <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

          {/* Inner dot */}
          <div className="absolute w-3 h-3 bg-white rounded-full animate-pulse"></div>

        </div>

        {/* TEXT */}
        <h1 className="mt-6 text-white text-xl font-semibold tracking-wide animate-pulse">
          Loading your experience...
        </h1>

        <p className="text-white/80 text-sm mt-2">
          Please wait a moment
        </p>

      </div>
    </div>
  );
}