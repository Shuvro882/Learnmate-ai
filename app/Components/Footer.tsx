import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-16 bg-white">
      
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-800">
            LearnMate AI
          </h2>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            AI-powered learning platform to generate notes, quizzes,
            and improve study efficiency.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-indigo-800">Home</Link></li>
            <li><Link href="/explore" className="hover:text-indigo-800">Explore</Link></li>
            <li><Link href="/about" className="hover:text-indigo-800">About</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-800">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/blog" className="hover:text-indigo-800">Blog</Link></li>
            <li><Link href="/help" className="hover:text-indigo-800">Help Center</Link></li>
            <li><Link href="/privacy" className="hover:text-indigo-800">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Email: support@learnmate.ai</li>
            <li>Location: Bangladesh</li>
            <li className="mt-3 flex gap-3 text-sm">
              <a href="#" className="hover:text-indigo-800">Facebook</a>
              <a href="#" className="hover:text-indigo-800">GitHub</a>
              <a href="#" className="hover:text-indigo-800">LinkedIn</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LearnMate AI. All rights reserved.
      </div>

    </footer>
  );
}