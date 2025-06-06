import React from "react";
import { FaUser } from "react-icons/fa"; // Icon instead of avatar image

const posts = [
  {
    id: 1,
    title: "Top 10 Careers to Watch Out for in 2025 and Beyond",
    href: "https://res.cloudinary.com/dhpm7jmyy/image/upload/v1749196509/Blog_1_-_Top_10_Careers_afmf5a.pdf",
    description:
      "Explore the top emerging career paths of 2025, including tech, sustainability, biotech, creative fields, and cybersecurity, and prepare for the future job market.",
    date: "June 6, 2025",
    datetime: "2025-06-06",
    category: { title: "Career Guidance", href: "#" },
    author: { name: "Shubham Malik", role: "Director of Servocci Counsellors" },
  },
  {
    id: 2,
    title: "How Mock Tests Can Boost Your Exam Success: Tips from Experts",
    href: "https://res.cloudinary.com/dhpm7jmyy/image/upload/v1749196509/Blog_2_-_Mock_Tests_vowqgi.pdf",
    description:
      "Understand how mock tests improve performance, time management, and confidence, with tips from top exam performers and Servocci resources.",
    date: "June 6, 2025",
    datetime: "2025-06-06",
    category: { title: "Exam Strategy", href: "#" },
    author: { name: "Shubham Malik", role: "Director of Servocci Counsellors" },
  },
  {
    id: 3,
    title: "The 5C’s of College Admissions: A Student’s Ultimate Guide",
    href: "https://res.cloudinary.com/dhpm7jmyy/image/upload/v1749196509/Blog_3_-_5C_s_of_admission.docx_nnzdjz.pdf",
    description:
      "Discover how to choose the right course, college, city, cost structure, and career options with Servocci’s expert-backed 5C framework for smart admission decisions.",
    date: "June 6, 2025",
    datetime: "2025-06-06",
    category: { title: "Admission Guidance", href: "#" },
    author: { name: "Shubham Malik", role: "Director of Servocci Counsellors" },
  },
  {
    id: 4,
    title: "Why Online Degrees Are the Future of Education",
    href: "https://res.cloudinary.com/dhpm7jmyy/image/upload/v1749196509/Blog_4_-_Online_Learning_stv1bf.pdf",
    description:
      "Explore how online degrees offer unmatched flexibility, cost-effectiveness, and global access—reshaping the future of education with Servocci at the forefront.",
    date: "June 6, 2025",
    datetime: "2025-06-06",
    category: { title: "Online Learning", href: "#" },
    author: { name: "Shubham Malik", role: "Director of Servocci Counsellors" },
  },
];

export default function BlogSection() {
  return (
    <div className="bg-[#f9f7d9] dark:bg-[#1a1a1a] py-24 sm:py-32 w-full transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
          <h2 className="text-4xl font-bold tracking-tight text-[#001b48] dark:text-[#f7d088] sm:text-5xl">
            From the Blog
          </h2>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
            Learn how to grow your career and discover insights from our experts.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 sm:gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="h-full bg-white dark:bg-[#2b2b2b] rounded-2xl shadow-md hover:shadow-xl dark:hover:shadow-[#f7d088]/30 transition-shadow p-6 flex flex-col justify-between">
                {/* Meta */}
                <div>
                  <div className="flex items-center gap-x-4 text-xs text-gray-500 dark:text-gray-400">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span className="bg-[#f7d088] dark:bg-[#ff9d3d] text-[#001b48] dark:text-[#1a1a1a] px-3 py-1 rounded-full font-medium">
                      {post.category.title}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-[#001b48] dark:text-[#f7d088] group-hover:text-[#ff4f00] dark:group-hover:text-[#ff9d3d]">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                    {post.description}
                  </p>
                </div>

                {/* Author */}
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-[#001b48] dark:text-white">
                    <FaUser className="text-lg" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-[#001b48] dark:text-white">
                      {post.author.name}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {post.author.role}
                    </p>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
