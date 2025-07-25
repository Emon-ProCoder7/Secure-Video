import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, DollarSign, Star } from "lucide-react";

const CreativePartnersPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" // Placeholder video
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold">Welcome to the Beige Creative Partners Ambassador Program</h1>
          <p className="mt-4 text-xl">
            Join a growing global movement of passionate creators...
          </p>
          <Button className="mt-8 bg-[#F5F5DC] text-black hover:bg-[#e4e4c5]">
            Join Us Today
          </Button>
        </div>
      </section>

      {/* Why Join? Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Join?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <DollarSign className="h-12 w-12 mx-auto text-[#F5F5DC]" />
              <h3 className="font-bold mt-4">Earn More</h3>
              <p>Refer clients and earn bonuses...</p>
            </div>
            <div>
              <Star className="h-12 w-12 mx-auto text-[#F5F5DC]" />
              <h3 className="font-bold mt-4">Access Exclusive Benefits</h3>
              <p>Let Beige manage the logistics, client communications, insurance...</p>
            </div>
            <div>
              <Camera className="h-12 w-12 mx-auto text-[#F5F5DC]" />
              <h3 className="font-bold mt-4">Focus on Your Craft</h3>
              <p>Progress through our tiered program to unlock higher rates...</p>
            </div>
          </div>
          <img src="/assets/creative-partners-why-join.png" alt="Why Join Beige" className="mt-8 mx-auto" />
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Milestones: Your Path to Success</h2>
          <div className="relative">
            {/* Stepper line */}
            <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gray-300" />
            <div className="space-y-16">
              {/* Tier 1 */}
              <div className="md:flex items-center md:space-x-8">
                <img src="/assets/milestones-tier1.png" alt="Entry Level" className="md:w-1/2" />
                <div className="md:w-1/2 text-left">
                  <h3 className="text-2xl font-bold">Tier 1: Entry Level</h3>
                  <p>Complete onboarding... receive your Beige shirt...</p>
                </div>
              </div>
              {/* Tier 2 */}
              <div className="md:flex flex-row-reverse items-center md:space-x-8 md:space-x-reverse">
                <img src="/assets/milestones-tier2.png" alt="Fully Onboarded" className="md:w-1/2" />
                <div className="md:w-1/2 text-right">
                  <h3 className="text-2xl font-bold">Tier 2: Fully Onboarded</h3>
                  <p>Complete 3 shoots, refer 1 client...</p>
                </div>
              </div>
              {/* Tier 3 */}
              <div className="md:flex items-center md:space-x-8">
                <img src="/assets/milestones-tier3.png" alt="Gold Standard" className="md:w-1/2" />
                <div className="md:w-1/2 text-left">
                  <h3 className="text-2xl font-bold">Tier 3: Gold Standard</h3>
                  <p>Complete 5+ shoots, refer 2+ clients...</p>
                </div>
              </div>
              {/* Tier 4 */}
              <div className="md:flex flex-row-reverse items-center md:space-x-8 md:space-x-reverse">
                <img src="/assets/milestones-tier4.png" alt="Platinum Standard" className="md:w-1/2" />
                <div className="md:w-1/2 text-right">
                  <h3 className="text-2xl font-bold">Tier 4: Platinum Standard</h3>
                  <p>Complete 10+ shoots, refer 5+ clients...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Program Highlight Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Earn More! Book More! Grow More!</h2>
          <p className="mt-4 text-lg">
            Join the Beige Video Creative Partner Referral Program and turn your connections into cash! Earn up to $250 per referral...
          </p>
          <img src="/assets/referral-program.jpeg" alt="Referral Program" className="mt-8 mx-auto" />
          <Button className="mt-8 bg-[#F5F5DC] text-black hover:bg-[#e4e4c5]">
            Start Earning Today!
          </Button>
        </div>
      </section>

      {/* Meet Our Top Creative Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Top Creative Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="transform hover:scale-105 hover:border-beige-400 transition-transform duration-300">
              <img src="/assets/creative-partner-jean-paul.jpg" alt="JEAN PAUL LAPORTE" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">JEAN PAUL LAPORTE</h3>
                <p>Texas</p>
                <p className="text-sm mt-2">A passionate creative with a knack for storytelling.</p>
              </div>
            </Card>
            {/* Add more partner cards here */}
          </div>
        </div>
      </section>

      {/* Ambassador Training Videos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Become Our Creative Partner!</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Introduction: Video 1</AccordionTrigger>
              <AccordionContent>
                <div className="aspect-video">
                  <iframe
                    src="https://player.vimeo.com/video/your-video-id" // Replace with actual Vimeo video ID
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="mt-4">Descriptive text for the introduction video.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Accepting a Shoot: Video 2</AccordionTrigger>
              <AccordionContent>
                {/* Video 2 */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Day of Shoot: Video 3</AccordionTrigger>
              <AccordionContent>
                {/* Video 3 */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>After the Shoot: Video 4</AccordionTrigger>
              <AccordionContent>
                {/* Video 4 */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default CreativePartnersPage;
