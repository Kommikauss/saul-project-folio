import { BatteryCharging, FileText, Wrench } from "lucide-react";
import { CheckCircle, Clock, Zap } from "lucide-react";
import SEO from "@/components/SEO";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-ev.jpg";

const EvLaadimine = () => (
  <>
  <SEO
    title="Elektriauto laadimistaristu"
    description="Elektriautode laadimistaristu korteriühistutele. Projekteerimine, kooskõlastamine ja paigaldus — terviklahendus alates ideest kuni valmimiseni."
    path="/elektriauto-laadimistaristu"
    keywords="elektriauto laadimistaristu, EV laadimine, elektriautode laadimine, korteriühistu, elektrilaadija paigaldus, Eesti"
  />
  <ServicePageLayout
    title="Elektriauto laadimistaristu"
    subtitle="Pakume terviklikke elektriauto laadimistaristu lahendusi korteriühistutele — alates projekteerimisest kuni paigalduseni."
    heroImage={heroImg}
    breadcrumb="Elektriauto laadimistaristu"
    servicesIntro="Täislahendus alates projektist kuni paigalduseni."
    services={[
      { icon: FileText, title: "Projekteerimine ja kooskõlastamine", desc: "Koostame projekti ja aitame kõik vajalikud kooskõlastused." },
      { icon: BatteryCharging, title: "Ehitus ja paigaldus", desc: "Paigaldame laadimistaristut ja teostame kõik vajalikud ehitustööd." },
      { icon: Wrench, title: "Ühendamine ja käivitamine", desc: "Ühendame süsteemi ja seadistame töövalmis lahenduse." },
    ]}
    whyItems={[
      { icon: CheckCircle, title: "Kogenud meeskond", desc: "Kvalifitseeritud spetsialistid." },
      { icon: Clock, title: "Kiire ja kindel töö", desc: "Reageerime kiiresti ja teeme tööd õigeaegselt." },
      { icon: Zap, title: "Täislahendus", desc: "Projektist kuni paigalduseni — kõik ühest kohast." },
    ]}
    ctaTitle="Vajate elektriauto laadimistaristut?"
    ctaSubtitle="Võta ühendust — aitame kiirelt lahenduse leida."
  />
  </>
);

export default EvLaadimine;
