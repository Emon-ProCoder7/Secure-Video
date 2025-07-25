import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const CareersPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-32 text-center">
        <h1 className="text-5xl font-bold">Join a team that's building the future of media.</h1>
        <p className="mt-4 text-lg">
          We believe that everyone has unlimited potential despite where they come from or their personal academic achievements and experience level.
        </p>
      </section>

      {/* University Logos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex justify-center items-center space-x-8">
          <img src="/assets/logo-usc.svg" alt="USC" className="h-12" />
          <img src="/assets/logo-ucla.svg" alt="UCLA" className="h-12" />
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-8">We’re always searching for the world’s top talent.</h2>
          <form className="space-y-4">
            <Input placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
            <Input placeholder="Phone Number" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
              </SelectContent>
            </Select>
            <div>
              <p>Are you currently a college student?</p>
              {/* Radio buttons for Yes/No */}
            </div>
            <Input placeholder="University Name" />
            <Textarea placeholder="Message/Cover Letter" />
            <Input type="file" />
            <Button className="w-full bg-black text-white hover:bg-gray-800">Submit</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
