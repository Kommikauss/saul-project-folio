import { Wrench, Zap, FileText } from "lucide-react";
import { CheckCircle, Clock, MessageSquare } from "lucide-react";
import SEO from "@/components/SEO";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-hooldus.jpg";

const HooldusJaRemont = () => (
  <>
  <SEO
    title="Hooldus ja remont"
    description="Kiire reageerimine ja hoolduslepingud korteriühistutele. Väiksemad remonditööd, avariitööd ja regulaarne hooldus."
    path="/hooldus-ja-remont"
    keywords="hooldus, remont, korteriühistu hooldus, hoolduslepingud, avariitööd, kiire reageerimine, Eesti"
  />
  <ServicePageLayout
    title="Hooldus ja väiksemad remonditööd"
    subtitle="Pakume kiret reageerimist, väiksemate remonttööde tegemist ja hoolduslepinguid korteriühistutele."
    heroImage={heroImg}
    breadcrumb="Hooldus ja remont"
    servicesIntro="Korteriühistutele regulaarsed hooldusteenused, kiire väljakutse, väiksematteks remonttöödeks ja lepingud."
    services={[
      { icon: Zap, title: "Kiire reageerimine", desc: "Tuleme kohale kiiresti ja lahendame probleemi." },
      { icon: Wrench, title: "Väiksemad parandustööd", desc: "Lekete parandamine, pistikute ja lukkude vahetus, muud väiksemaltööd." },
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

export default HooldusJaRemont;
