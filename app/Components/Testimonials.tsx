type Testimonial = {
  name: string;
  role: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Student User",
    role: "University Learner",
    review:
      "AI-generated study materials helped organize learning resources more efficiently.",
  },
  {
    name: "Online Learner",
    role: "Self-Learner",
    review:
      "Quiz generation made practice sessions faster and more structured.",
  },
  {
    name: "Exam Candidate",
    role: "Competitive Exam Student",
    review:
      "Personalized recommendations helped identify important topics to review.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          Learner Experiences
        </h2>

        <p className="mt-3 text-gray-600">
          Discover how AI-assisted learning can improve study workflows.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex h-full flex-col rounded-2xl border p-6"
          >
            <p className="flex-grow text-sm text-gray-600">
              "{item.review}"
            </p>

            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}