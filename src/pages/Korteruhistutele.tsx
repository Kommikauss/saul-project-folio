import { Building2, Hammer, FileText } from "lucide-react";
import { CheckCircle, Clock, MessageSquare } from "lucide-react";
import SEO from "@/components/SEO";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-korteruhistu.jpg";

const Korteruhistutele = () => (
  <>
  <SEO
    title="Korteriühistutele"
    description="Teenused korteriühistutele — regulaarne hooldus, kiire väljakutse, remonditööd ja hoolduslepingud. Usaldusväärne partner teie majale."
    path="/korteruhistutele"
    keywords="korteriühistu, korteriühistu teenused, hoolduslepingud, maja hooldus, remonditööd, Eesti"
  />
  <ServicePageLayout
    title="Korteriühistutele"
    subtitle="Pakume korteriühistutele regulaarseid hooldusteenuseid, kiiret väljakutset, väiksematteks remonttöödeks ja lepinguid."
    heroImage={heroImg}
    breadcrumb="Korteriühistutele"
    servicesIntro="Korteriühistutele regulaarsed hooldusteenused, kiire väljakutse, väiksematteks remonttöödeks ja lepingud."
    services={[
      { icon: Hammer, title: "Kiire reageerimine", desc: "Tuleme kohale kiiresti ja lahendame probleemi." },
      { icon: Building2, title: "Väiksemad parandustööd", desc: "Lekete parandamine, pistikute ja lukkude vahetus, muud väiksemaltööd." },
      { icon: FileText, title: "Hoolduslepingud korteriühistutele", desc: "Regulaarsed hooldustööd, et hoida maja korras ja ennetada suuremaid probleeme." },
    ]}
    whyItems={[
      { icon: CheckCircle, title: "Kiire töö", desc: "Hoiame reageerime väljakutsetele." },
      { icon: MessageSquare, title: "Sõbralik suhtlus", desc: "Hoiame sind kursis kogu tööprotsessiga." },
      { icon: Clock, title: "Kogemustega meeskond", desc: "Kutsetunnistusega spetsialistid." },
    ]}
    ctaTitle="Vajad väiksemat remonditööd?"
    ctaSubtitle="Võta ühendust — aitame kiirelt lahenduse leida."
  />
  </>
);

export default Korteruhistutele;
