import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[#f9f7d9] min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left: Info Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <img
            src="https://cdn.pixabay.com/photo/2020/05/19/17/51/contact-us-5191532_1280.jpg"
            alt="Contact Us"
            className="rounded-xl mb-6 w-full"
          />
          <h2 className="text-2xl font-bold text-[#001b48] mb-4">Let's Connect</h2>
          <p className="text-[#430000] mb-6">
            Our friendly business psychologists are always here to support your assessment needs.
            Get professional support on everything from setup to choosing assessments or any other
            questions you may have.
          </p>
          <ul className="space-y-3 text-[#001b48]">
            <li>📞 <strong>+91-9958-21-9958</strong></li>
            <li>📞 <strong>+91-11-4161-8389</strong></li>
            <li>📧 hello@servocci.com</li>
            <li>📍 Kalkaji, New Delhi, 110019</li>
          </ul>

          {/* Google Maps Embed */}
          <div className="mt-6 rounded-xl overflow-hidden">
            <iframe
              title="Servocci Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.4982541298743!2d77.25197385804386!3d28.536180987942615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b388556db9%3A0xe83cd8f621389c6!2sKalkaji%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1689947648744!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right: Form Section */}
        <div className="bg-[#001b48] p-8 rounded-2xl shadow-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6 text-[#f9e7a6]">
            For personalized guidance and expert advice, schedule a consultation with our experienced team.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#ff4f00]"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#ff4f00]"
              required
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full px-4 py-2 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#ff4f00]"
            />
            <textarea
              rows="4"
              placeholder="Write your message"
              className="w-full px-4 py-2 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#ff4f00]"
              required
            ></textarea>
            <div className="flex items-center space-x-4 text-[#f9e7a6]">
              <label className="flex items-center space-x-2">
                <input type="radio" name="terms" value="yes" required />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="terms" value="no" />
                <span>No</span>
              </label>
              <span className="text-sm">Accept terms and privacy policy.</span>
            </div>
            <button
              type="submit"
              className="bg-[#ff4f00] hover:bg-[#ff9d3d] text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
