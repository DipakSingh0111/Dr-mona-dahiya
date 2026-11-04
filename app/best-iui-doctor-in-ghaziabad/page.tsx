import type { Metadata } from "next";

import IuiGhaziabadHero from "@/components/sections/iui-ghaziabad/IuiGhaziabadHero";
import MedicalRegistration from "@/components/sections/MedicalRegistration";
import IuiGhaziabadAbout from "@/components/sections/iui-ghaziabad/IuiGhaziabadAbout";
import IuiGhaziabadDoctorGlance from "@/components/sections/iui-ghaziabad/IuiGhaziabadDoctorGlance";
import IuiGhaziabadWhy from "@/components/sections/iui-ghaziabad/IuiGhaziabadWhy";
import IuiGhaziabadTests from "@/components/sections/iui-ghaziabad/IuiGhaziabadTests";
import IuiGhaziabadSteps from "@/components/sections/iui-ghaziabad/IuiGhaziabadSteps";
import IuiGhaziabadCost from "@/components/sections/iui-ghaziabad/IuiGhaziabadCost";
import IuiGhaziabadLocation from "@/components/sections/iui-ghaziabad/IuiGhaziabadLocation";
import IuiGhaziabadFaq from "@/components/sections/iui-ghaziabad/IuiGhaziabadFaq";
import IuiGhaziabadConsultation from "@/components/sections/iui-ghaziabad/IuiGhaziabadConsultation";
import AboutParenthoodCta from "@/components/sections/about-mona-dahiya/AboutParenthoodCta";

import { SectionReveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "IUI Treatment in Ghaziabad | Best IUI Doctor in Ghaziabad — Dr. Mona Dahiya",
  description:
    "IUI by Dr. Mona Dahiya in Ghaziabad. Dr Mona has over 25 years of experience performing IUI. She will guide you on if you should go for IUI or not and customise your IUI cycles based on your test reports.",
};

export default function BestIuiDoctorInGhaziabadPage() {
  return (
    <main className="flex min-h-screen flex-col bg-pink">
      {/* 1. Hero: IUI Treatment in Ghaziabad */}
      <IuiGhaziabadHero />

      {/* 2. Medical Council Registration Numbers */}
      <SectionReveal>
        <MedicalRegistration />
      </SectionReveal>

      {/* 3. IUI in simple words */}
      <SectionReveal delay={0.04}>
        <IuiGhaziabadAbout />
      </SectionReveal>

      {/* 4. Doctor you will meet: Dr. Mona Dahiya */}
      <SectionReveal delay={0.04}>
        <IuiGhaziabadDoctorGlance />
      </SectionReveal>

      {/* 5. Why choose Dr. Mona Dahiya for IUI */}
      <SectionReveal delay={0.04}>
        <IuiGhaziabadWhy />
      </SectionReveal>

      {/* 6. Tests you need to do before starting IUI */}
      <SectionReveal delay={0.04}>
        <IuiGhaziabadTests />
      </SectionReveal>

      {/* 7. Steps involved in doing IUI */}
      <SectionReveal delay={0.04}>
        <IuiGhaziabadSteps />
      </SectionReveal>

      {/* 8. What is the cost of IUI in Ghaziabad? */}
      <SectionReveal delay={0.04}>
        <IuiGhaziabadCost />
      </SectionReveal>

      {/* 9. Consult Dr Mona in Ghaziabad */}
      <SectionReveal delay={0.04}>
        <IuiGhaziabadLocation />
      </SectionReveal>

      {/* 10. Questions about IUI in Ghaziabad */}
      <SectionReveal delay={0.04}>
        <IuiGhaziabadFaq />
      </SectionReveal>

      {/* 11. Begin your conception journey / Request an appointment */}
      <SectionReveal delay={0.04}>
        <IuiGhaziabadConsultation />
      </SectionReveal>

      {/* 12. Take your first step towards parenthood CTA banner */}
      <AboutParenthoodCta />
    </main>
  );
}
