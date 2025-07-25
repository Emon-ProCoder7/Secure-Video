import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black bg-opacity-50 text-white")}>
      <div className="container mx-auto flex h-20 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src="/assets/logo.png" alt="Beige Corporation" className="h-8" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about">About</Link>
          <Link to="/our-brands">Our Brands</Link>
          <Link to="/creative-partners">Creative Partners</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
        <Button className="hidden md:block bg-[#F5F5DC] text-black hover:bg-[#e4e4c5]">
          Book a Shoot
        </Button>
      </div>
    </header>
  );
};

export default Header;