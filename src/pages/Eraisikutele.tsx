import { Home, Paintbrush, Layers, Wrench } from "lucide-react";
import { CheckCircle, Clock, MessageSquare } from "lucide-react";
import SEO from "@/components/SEO";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-eraisikutele.jpg";

const Eraisikutele = () => (
  <>
  <SEO
    title="Korterite ja kodude remont"
    description="Korterite ja kodude remont — täielik või osaline remont, sisetööd, viimistlus, põrandad, värvimine. Kiiresti, korrektselt ja kokkulepitud ajaga."
    path="/eraisikutele"
    keywords="korteri remont, kodu remont, sisetööd, viimistlus, põrandatööd, värvimine, plaatimine, Eesti"
  />
  <ServicePageLayout
    title="Korterite ja kodude remont"
    subtitle="Teostame remonditöid kiiresti, korrektselt ja kokkulepitud ajaga. Sinu kodu uueneb meie käe all — kvaliteetselt ja muretult."
    heroImage={heroImg}
    breadcrumb="Eraisikutele"
    servicesIntro="Pakume laia valikut remondi- ja viimistlustöid, nii suuremaid projekte kui ka väiksemaid parandusi."
    services={[
      { icon: Home, title: "Korteri remont", desc: "Täielik või osaline remont — planeerimisest viimistluseni." },
      { icon: Paintbrush, title: "Sisetööd ja viimistlus", desc: "Seinad, laed, põrandad, plaatimine, värvimine ja muud siseviimistlustööd." },
      { icon: Wrench, title: "Väiksemad parandustööd", desc: "Uste paigaldus, pistikute vahetus, väikesed remonditööd ja kiire abi." },
    ]}
    whyItems={[
      { icon: Clock, title: "Peame kinni tähtaegadest", desc: "Tööd valmivad kokkulepitud ajaks — austame sinu aega." },
      { icon: Layers, title: "Töötame puhtalt", desc: "Hoiame sinu kodu puhta ja korras kogu tööprotsessi jooksul." },
      { icon: MessageSquare, title: "Sõbralik suhtlus", desc: "Hoiame sind kursis kogu tööprotsessiga." },
    ]}
    ctaTitle="Vajad kodu remonti?"
    ctaSubtitle="Võta ühendust — aitame leida parima lahenduse!"
  />
  </>
);

export default Eraisikutele;
