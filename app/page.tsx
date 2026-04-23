import { Hero } from "@/components/sections/Hero";
import { Definition } from "@/components/sections/Definition";
import { Problem } from "@/components/sections/Problem";
import { Pitch } from "@/components/sections/Pitch";
import { Curriculum } from "@/components/sections/Curriculum";
import { Coven } from "@/components/sections/Coven";
import { Signup } from "@/components/sections/Signup";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Hero />
      <div className="mx-auto h-px max-w-5xl divider-gradient" />
      <Definition />
      <div className="mx-auto h-px max-w-5xl divider-gradient" />
      <Problem />
      <div className="mx-auto h-px max-w-5xl divider-gradient" />
      <Pitch />
      <div className="mx-auto h-px max-w-5xl divider-gradient" />
      <Curriculum />
      <div className="mx-auto h-px max-w-5xl divider-gradient" />
      <Coven />
      <div className="mx-auto h-px max-w-5xl divider-gradient" />
      <Signup />
      <Footer />
    </main>
  );
}
