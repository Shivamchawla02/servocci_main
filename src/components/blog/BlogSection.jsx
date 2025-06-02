import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Master SEO to grow your business',
    href: '#',
    description:
      'Learn how to use SEO to drive traffic and grow your business online. We dive deep into keyword research, on-page SEO, and backlink strategies.',
    date: 'Apr 5, 2021',
    datetime: '2021-04-05',
    category: { title: 'SEO', href: '#' },
    author: {
      name: 'Sarah Lee',
      role: 'Marketing Specialist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1607748734537-712019de9dbf?crop=entropy&cs=tinysrgb&fit=max&q=80&w=400',
    },
  },
  {
    id: 3,
    title: 'Email marketing tips for high engagement',
    href: '#',
    description:
      'Discover the best practices for email marketing that lead to higher open rates and click-through rates. Boost your engagement today!',
    date: 'May 10, 2021',
    datetime: '2021-05-10',
    category: { title: 'Email Marketing', href: '#' },
    author: {
      name: 'John Doe',
      role: 'Email Campaign Manager',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1504003566817-876b21001764?crop=entropy&cs=tinysrgb&fit=max&q=80&w=400',
    },
  },
  {
    id: 4,
    title: 'How to build your personal brand',
    href: '#',
    description:
      'Building a strong personal brand is crucial in the digital world. Learn the steps to create your personal brand and stand out from the crowd.',
    date: 'Jun 20, 2021',
    datetime: '2021-06-20',
    category: { title: 'Branding', href: '#' },
    author: {
      name: 'Alice Stone',
      role: 'Branding Expert',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1503378322837-b781b2871913?crop=entropy&cs=tinysrgb&fit=max&q=80&w=400',
    },
  },
  {
    id: 5,
    title: 'Why UX/UI is crucial for your website',
    href: '#',
    description:
      'UX/UI design directly affects how users interact with your website. Learn the principles behind good design and how it impacts user experience.',
    date: 'Jul 15, 2021',
    datetime: '2021-07-15',
    category: { title: 'UX/UI Design', href: '#' },
    author: {
      name: 'Ella Green',
      role: 'UX Designer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1563201548-03266e517ec4?crop=entropy&cs=tinysrgb&fit=max&q=80&w=400',
    },
  },
  {
    id: 6,
    title: 'Increase your reach with social media ads',
    href: '#',
    description:
      'Social media advertising is one of the fastest ways to increase your reach. This guide will teach you how to set up your first campaign.',
    date: 'Aug 4, 2021',
    datetime: '2021-08-04',
    category: { title: 'Social Media', href: '#' },
    author: {
      name: 'Tommy Gill',
      role: 'Social Media Strategist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1571767281458-bff2f5684e56?crop=entropy&cs=tinysrgb&fit=max&q=80&w=400',
    },
  },
];

export default function BlogSection() {
  return (
    <div className="bg-[#f9f7d9] dark:bg-[#1a1a1a] py-24 sm:py-32 w-full transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
          <h2 className="text-4xl font-bold tracking-tight text-[#001b48] dark:text-[#f7d088] sm:text-5xl transition-colors duration-300">
            From the Blog
          </h2>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Learn how to grow your career and discover insights from our experts.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 sm:gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-[#2b2b2b] rounded-2xl shadow-md hover:shadow-xl dark:hover:shadow-[#f7d088]/30 transition-shadow duration-300 p-6 flex flex-col justify-between transition-colors duration-300"
            >
              <div>
                <div className="flex items-center gap-x-4 text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  <time dateTime={post.datetime}>{post.date}</time>
                  <a
                    href={post.category.href}
                    className="bg-[#f7d088] dark:bg-[#ff9d3d] text-[#001b48] dark:text-[#1a1a1a] px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300"
                  >
                    {post.category.title}
                  </a>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#001b48] dark:text-[#f7d088] hover:text-[#ff4f00] dark:hover:text-[#ff9d3d] transition-colors duration-300">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 line-clamp-3 transition-colors duration-300">
                  {post.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 transition-colors duration-300"
                />
                <div className="text-sm">
                  <p className="font-semibold text-[#001b48] dark:text-white transition-colors duration-300">
                    {post.author.name}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    {post.author.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
