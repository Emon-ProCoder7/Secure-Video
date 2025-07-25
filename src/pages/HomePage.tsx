import { Button } from "@/components/ui/button";
import { Card, CardContent, CardMedia } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://vimeo.com/941706856"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold">A Global Leader in Media Technology.</h1>
          <p className="mt-4 text-xl">
            At the forefront of innovation through cultural diversity, visionary technology, and creative empowerment.
          </p>
          <Button
            className="mt-8 bg-[#F5F5DC] text-black hover:bg-[#e4e4c5]"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Partner with Beige
          </Button>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardMedia>
                <img src="/assets/our-brands-beige.png" alt="Beige Video + Photo" />
              </CardMedia>
              <CardContent>
                <p>Our pioneering video production company specializing in nationwide videography + photography.</p>
              </CardContent>
            </Card>
            <Card>
              <CardMedia>
                <img src="/assets/our-brands-bw.png" alt="BW Weddings" />
              </CardMedia>
              <CardContent>
                <p>Our leading nationwide wedding videography and photography vertical.</p>
              </CardContent>
            </Card>
            <Card>
              <CardMedia>
                <img src="/assets/our-brands-app.png" alt="Beige App" />
              </CardMedia>
              <CardContent>
                <p>An on-demand marketplace enabling users to book shoots at their fingertips.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">TRUSTED BY THE WORLD’S TOP BRANDS</h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              <img src="/assets/trusted-chase.png" alt="Chase" className="h-12 mx-8" />
              {/* Add other logos here */}
            </div>
          </div>
        </div>
      </section>

      {/* Ambassador Program Section */}
      <section
        className="py-32 bg-cover bg-fixed"
        style={{ backgroundImage: "url(/assets/ambassador-program.png)" }}
      >
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold">Join Our Creative Partners Ambassador Program</h2>
          <p className="mt-4 text-lg">
            Join a growing community of passionate creators. This initiative is designed to empower videographers and photographers to grow their careers...
          </p>
          <Button className="mt-8 bg-[#F5F5DC] text-black hover:bg-[#e4e4c5]">
            Learn More
          </Button>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Worked with the best</h2>
          {/* Carousel will be implemented here */}
          <div className="flex justify-center items-center">
            <img src="/assets/testimonial-client.png" alt="Suzy Koontz" className="w-24 h-24 rounded-full mx-4" />
            <div>
              <p className="italic">"The best of the best!"</p>
              <p className="font-bold mt-2">- Suzy Koontz</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className="py-24 bg-cover"
        style={{ backgroundImage: "url(/assets/contact-us-bg.png)" }}
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white">We'd Love To Hear From You</h2>
            <form className="mt-8 space-y-4">
              <Input placeholder="First Name" />
              <Input placeholder="Phone Number" />
              <Input placeholder="Email" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Intent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="client">Become A Client</SelectItem>
                  <SelectItem value="team">Join The Team</SelectItem>
                  <SelectItem value="investment">Investment</SelectItem>
                  <SelectItem value="press">Press</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full bg-[#F5F5DC] text-black hover:bg-[#e4e4c5]">Let's Talk</Button>
            </form>
          </div>
          <div className="text-white text-right">
            <p>Phone: 323-826-7230</p>
            <p>Email: marketing@beigecorporation.io</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
