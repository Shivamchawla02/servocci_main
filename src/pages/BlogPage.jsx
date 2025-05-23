import React from 'react'
import TopNavbar from '../components/TopNavbar.jsx'
import MainNavbar from '../components/MainNavbar.jsx'
import BlogSection from '../components/blog/BlogSection.jsx'
import ChatBotIcon from '../components/ChatBotIcon.jsx'

const BlogPage = () => {
  return (
    <>
      <TopNavbar />
      <MainNavbar />

      <div className="bg-light">
        <BlogSection />
      </div>

      {/* Floating Chatbot Icon */}
      <ChatBotIcon />
    </>
  )
}

export default BlogPage
