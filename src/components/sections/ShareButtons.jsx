import React from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function ShareButtons() {
  const portfolioUrl = "https://junaedportfolio.vercel.app/";
  const encodedUrl = encodeURIComponent(portfolioUrl);
  const text = encodeURIComponent("🚀 Check out my portfolio!");

  return (
    <div className="w-full flex flex-col items-center mt-8">
      {/* Encouraging text */}
      <p className="mb-4 text-lg font-semibold text-gray-200 text-center">
        💡 Enjoyed my work? Share my portfolio with your friends!
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600/20 transition"
        >
          <FaFacebook size={16} />
        </a>

        {/* Twitter (X) */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-400 hover:bg-gray-400/20 transition"
        >
          <FaTwitter size={16} />
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400/20 transition"
        >
          <FaLinkedinIn size={16} />
        </a>

        {/* Instagram (profile link only) */}
        <a
          href="https://www.instagram.com/yourprofile/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Instagram profile"
          className="flex text-sm items-center justify-center w-10 h-10 rounded-full border border-pink-400 text-pink-400 hover:bg-pink-400/20 transition"
        >
          <FaInstagram size={16} />
        </a>
      </div>
    </div>
  );
}
