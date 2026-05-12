import { Wrench, Zap, Droplets } from "lucide-react";
import { CheckCircle, Clock, MessageSquare } from "lucide-react";
import SEO from "@/components/SEO";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-korteruhistu.jpg";

const Korteruhistutele = () => (
  <>
  <SEO
    title="Korteriühistutele"
    description="Lahendused korteriühistutele — hooldus ja remont, elektritööd ning torutööd. Usaldusväärne partner teie majale."
    path="/korteruhistutele"
    keywords="korteriühistu, hooldus, elektritööd, torutööd, hoolduslepingud, Eesti"
  />
  <ServicePageLayout
    title="Korteriühistutele"
    subtitle="Pakume korteriühistutele terviklahendusi — hoolduse, elektri- ja torutööd ühest kohast."
    heroImage={heroImg}
    breadcrumb="Korteriühistutele"
    servicesIntro="Meie lahendused korteriühistutele:"
    services={[
      { icon: Wrench, title: "Hooldus ja remont", desc: "Kiire reageerimine, igapäevased remonditööd ja tehniline hooldus." },
      { icon: Zap, title: "Elektritööd", desc: "Elektripaigaldised, valgustus ja juhtmestik — paigaldus ja hooldus." },
      { icon: Droplets, title: "Torutööd", desc: "Vee- ja kanalisatsioonisüsteemide paigaldus, remont ja hooldus." },
    ]}
    whyItems={[
      { icon: CheckCircle, title: "Kiire töö", desc: "Reageerime väljakutsetele kiirelt." },
      { icon: MessageSquare, title: "Sõbralik suhtlus", desc: "Hoiame sind kursis kogu tööprotsessiga." },
      { icon: Clock, title: "Kogemustega meeskond", desc: "Kutsetunnistusega spetsialistid." },
    ]}
    ctaTitle="Vajad lahendust korteriühistule?"
    ctaSubtitle="Võta ühendust — aitame kiirelt lahenduse leida."
  />
  </>
);

export default Korteruhistutele;
