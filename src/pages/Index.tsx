import { Navbar, Footer } from "@/components/gym/NavbarFooter";
import { Hero, About } from "@/components/gym/HeroAbout";
import { Programs, Pricing } from "@/components/gym/ProgramsPricing";
import { Contacts } from "@/components/gym/Contacts";

const Index = () => {
  return (
    <div className="min-h-screen bg-gym-dark">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Pricing />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
