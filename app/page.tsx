import { Hero } from "@/components/sections/Hero";
import { Definition } from "@/components/sections/Definition";
import { Problem } from "@/components/sections/Problem";
import { Pitch } from "@/components/sections/Pitch";
import { ProgramFacts } from "@/components/sections/ProgramFacts";
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

      {/* Ornamental divider — Problem ↔ What is Money Coven? */}
      <div className="mx-auto max-w-5xl flex items-center gap-4 px-6">
        <div
          className="flex-1 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(156,89,209,0.35), rgba(224,64,124,0.25))" }}
        />
        <div className="flex items-center gap-2.5 select-none" aria-hidden>
          <span className="text-white/20 text-[9px] tracking-[0.5em]">· · ·</span>
          <span className="text-fuchsia/50 text-sm">✦</span>
          <span className="text-lilac/60 text-base leading-none">☽</span>
          <span className="text-fuchsia/50 text-sm">✦</span>
          <span className="text-white/20 text-[9px] tracking-[0.5em]">· · ·</span>
        </div>
        <div
          className="flex-1 h-px"
          style={{ background: "linear-gradient(270deg, transparent, rgba(156,89,209,0.35), rgba(224,64,124,0.25))" }}
        />
      </div>

      <Pitch />
      <ProgramFacts />
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
