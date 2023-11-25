import React from "react";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <div
      className="flex flex-col md:flex-row justify-around gap-12 items-center"
      id="section-container"
    >
      <div className="md:w-1/2">
        <img src="/public/images/home/testimonials/testimonials.png" alt="" />
      </div>
      <div className="md:w-1/2 ">
        <div className="text-left md:w-4/5">
          <p className="" id="subtitle">
            Testimonials
          </p>
          <h2 className="" id="title">
            What Our Customers Say About Us
          </h2>
          <blockquote className="text-secondary my-5 leading-[30px]">
            “I had the pleasure of dining at AmesaEats last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable”
          </blockquote>

          {/* avatars */}

          <div className="flex items-center gap-7 flex-wrap">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="/public/images/home/testimonials/testimonial1.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="/public/images/home/testimonials/testimonial2.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="/public/images/home/testimonials/testimonial3.png" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                  <span>+99</span>
                </div>
              </div>
            </div>
         

          <div className="space-y-1">
            <h5 className="font-semibold text-lg">Customer Feedback</h5>
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold text-[#454545]">4.9</span>{" "}
              <span className="text-[#807E7E]">(18.6k Reviews)</span>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
