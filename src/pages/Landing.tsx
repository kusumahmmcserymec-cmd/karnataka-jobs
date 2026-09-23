import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Jobs from "@/components/Jobs";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";

export default function Landing() {
  const [search, setSearch] = useState("");

  const handleApply = useCallback(() => {
    toast.success("Application submitted!", {
      description: "The recruiter will review your profile shortly.",
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Navbar />
      <main>
        <Hero search={search} onSearchChange={setSearch} />
        <Jobs search={search} onApply={handleApply} />
        <About />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
