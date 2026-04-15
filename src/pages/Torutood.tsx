import { Droplets, Wrench, RefreshCw } from "lucide-react";
import { CheckCircle, Clock, MessageSquare } from "lucide-react";
import SEO from "@/components/SEO";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-torutood.jpg";

const Torutood = () => (
  <>
  <SEO
    title="Torutööd"
    description="Professionaalsed torutööd korterites ja korteriühistutes. Torude paigaldus, lekete parandamine, veetorustike uuendamine. Kiire reageerimine."
    path="/torutood"
    keywords="torutööd, torude paigaldus, lekete parandamine, veetorustik, sanitaartehnilised tööd, Eesti"
  />
  <ServicePageLayout
    title="Torutööd"
    subtitle="Pakume korterite ja korteriühistute torutöid professionaalselt ja usaldusväärselt."
    heroImage={heroImg}
    breadcrumb="Torutööd"
    servicesIntro="Korteriühistutele regulaarsed torutööd teenused, kiire väljakutse, torutu tõutöödeks ja lepingud kulu säätmiseks."
    services={[
      { icon: Droplets, title: "Torude paigaldus", desc: "Uute torude ja süsteemide paigaldamine korterites ja trepikodades." },
      { icon: Wrench, title: "Rikketööd", desc: "Lekete tuvastamine ja parandamine." },
      { icon: RefreshCw, title: "Toruvahetus", desc: "Kulunud torude vahetus uute ja onutute vestu." },
    ]}
    whyItems={[
      { icon: CheckCircle, title: "Kogenud torumehed", desc: "Kutsetunnistusega spetsialistid." },
      { icon: Clock, title: "Kiire töö", desc: "Hoiame reageerime väljakutsetele." },
      { icon: MessageSquare, title: "Selge hinnastamine", desc: "Selge ja läbipaistev hinnastamine — ilma varjatud kuludeta." },
    ]}
    ctaTitle="Vajate torumeest?"
    ctaSubtitle="Võta ühendust — aitame kiirelt lahenduse leida."
  />
  </>
);

export default Torutood;
