import { Facebook, Twitter, Pinterest, Instagram, Linkedin, Youtube, Tiktok, Reddit } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="/assets/logo.png" alt="Beige Corporation" className="h-8 mb-4" />
          <p className="text-sm">
            Beige Corporation was founded in Los Angeles, California back in 2017 in order to make it seamless for anyone, anywhere to book a video or photo shoot at any given time.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="/beige-video-photo">Beige Video + Photo</a></li>
            <li><a href="/bw-weddings">BW Weddings</a></li>
            <li><a href="/beige-app">Beige App</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Get In Touch</h3>
          <p>Email: marketing@beigecorporation.io</p>
          <p>Phone: 323-826-7230</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-[#F5F5DC]"><Facebook /></a>
            <a href="#" className="text-white hover:text-[#F5F5DC]"><Twitter /></a>
            <a href="#" className="text-white hover:text-[#F5F5DC]"><Pinterest /></a>
            <a href="#" className="text-white hover:text-[#F5F5DC]"><Instagram /></a>
            <a href="#" className="text-white hover:text-[#F5F5DC]"><Linkedin /></a>
            <a href="#" className="text-white hover:text-[#F5F5DC]"><Youtube /></a>
            <a href="#" className="text-white hover:text-[#F5F5DC]"><Tiktok /></a>
            <a href="#" className="text-white hover:text-[#F5F5DC]"><Reddit /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-16 text-sm">
        © 2025 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
