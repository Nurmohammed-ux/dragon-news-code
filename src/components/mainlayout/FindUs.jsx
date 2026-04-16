import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-5">Find Us</h3>

      <div className="join join-vertical w-full">
        {/* Facebook */}
        <button className="btn bg-base-100 py-6 text-accent justify-start gap-3 join-item">
          <span className="p-2 rounded-full  bg-base-200">
            <FaFacebookF size={16} className="text-blue-800" />
          </span>
          Facebook
        </button>

        {/* Twitter */}
        <button className="btn bg-base-100 py-6 text-accent justify-start gap-3 join-item">
          <span className="p-2 rounded-full bg-base-200">
            <FaTwitter size={16} className="text-blue-500" />
          </span>
          Twitter
        </button>

        {/* Instagram */}
        <button className="btn bg-base-100 py-6 text-accent justify-start gap-3 join-item">
          <span className="p-2 rounded-full  bg-base-200">
            <FaInstagram size={16} className="text-pink-700" />
          </span>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
