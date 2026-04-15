import { Zap, Cable, LayoutGrid } from "lucide-react";
import { CheckCircle, Clock, MessageSquare } from "lucide-react";
import SEO from "@/components/SEO";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-elektritood.jpg";

const Elektritood = () => (
  <>
  <SEO
    title="Elektritööd"
    description="Professionaalsed elektritööd korterites ja korteriühistutes. Elektri paigaldus, kaablite vedamine, kilpide uuendamine. Kiire ja usaldusväärne teenus."
    path="/elektritood"
    keywords="elektritööd, elektri paigaldus, kaablite vedamine, elektrikilbid, korteri elektritööd, Eesti"
  />
  <ServicePageLayout
    title="Elektritööd"
    subtitle="Pakume korterite ja korteriühistute elektritöid professionaalselt ja usaldusväärselt."
    heroImage={heroImg}
    breadcrumb="Elektritööd"
    servicesIntro="Korteriühistutele regulaarsed hooldusteenused, kiire väljakutse, väiksematteks remonttöödeks ja lepingud."
    services={[
      { icon: Zap, title: "Korterite elektritööd", desc: "Elektri paigaldus või uuendamine korterites." },
      { icon: Cable, title: "Kaablite paigaldus", desc: "Elektrikaablite vedamine senittle, lakke ja põrandatele, üksutunaltööd." },
      { icon: LayoutGrid, title: "Elektrikilbid", desc: "Elektrikilpide uuendamine ja paigaldus korterites ja trepikodades." },
    ]}
    whyItems={[
      { icon: CheckCircle, title: "Kogenud elektrikud", desc: "Kvalifitseeritud spetsialistid." },
      { icon: Clock, title: "Kiire ja kindel töö", desc: "Reageerime kiiresti ja teeme tööd täntaegselt." },
      { icon: MessageSquare, title: "Selge hinnastamine", desc: "Selge ja läbipaistev hinnastamine — ilma varjatud kuludeta." },
    ]}
    ctaTitle="Vajate elektritööd?"
    ctaSubtitle="Võta ühendust — aitame kiirelt lahenduse leida."
  />
  </>
);

export default Elektritood;
