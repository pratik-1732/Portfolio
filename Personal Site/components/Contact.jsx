import React from "react";
import {
  Mail,
  PhoneCall,
  MapPin,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="relative text-white py-20 mt-20 overflow-hidden min-h-screen">
      {/* video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* content over video */}
      <div className="relative z-10 container mx-auto max-w-5xl pt-10">
        <h1 className="text-5xl text-center font-bold hover:cursor-pointer underline decoration-yellow-500 decoration-2 underline-offset-6 text-white duration-300">
          Get In <span className="text-primary"> Touch</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">
          {/* Left section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:dev.pratik35@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    dev.pratik35@gmail.com
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PhoneCall />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    +91-8875243247
                  </p>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Kolhapur, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>
            {/* Social icons */}
            <div className="pt-8 flex flex-col items-center">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-8 justify-center">
                <Linkedin className="hover:text-yellow-600 h-8 w-8 transition-colors duration-300 cursor-pointer" />
                <Instagram className="hover:text-yellow-600 h-8 w-8 transition-colors duration-300 cursor-pointer" />
                <Github className="hover:text-yellow-600 h-8 w-8 transition-colors duration-300 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  placeholder="write your name..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  placeholder="write your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="cosmic-button w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md hover:cursor-pointer hover:bg-blue-800 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
