import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Tag, ArrowRight, FolderOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLanguage } from "@/i18n/LanguageContext";

// ─── Types ────────────────────────────────────────────────────────────────────
type ProjectCategory = "renovation" | "electrical" | "plumbing" | "ev" | "association";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  description: string;
  img?: string;
  tags: string[];
}

// ─── Sample data — replace / extend as real projects are added ─────────────
const projects: Project[] = [
  // Add real projects here. Example structure:
  // {
  //   id: 1,
  //   title: "Mustamäe kortermaja trepikoja remont",
  //   category: "association",
  //   location: "Mustamäe, Tallinn",
  //   year: 2024,
  //   description: "Täielik trepikoja renoveerimine: põrandad, seinad, valgustus ja postkastid.",
  //   img: "/projects/mustamae-trepikoda.jpg",
  //   tags: ["Korteriühistu", "Trepikoda", "Remont"],
  // },
];

// ─── Category filter config ────────────────────────────────────────────────
const CATEGORIES: { key: "all" | ProjectCategory; labelKey: string }[] = [
  { key: "all", labelKey: "projectsPage.all" },
  { key: "renovation", labelKey: "projectsPage.renovation" },
  { key: "electrical", labelKey: "projectsPage.electrical" },
  { key: "plumbing", labelKey: "projectsPage.plumbing" },
  { key: "ev", labelKey: "projectsPage.ev" },
  { key: "association", labelKey: "projectsPage.association" },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Projektid = () => {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");

  const filtered =
    activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  const seoMeta = {
    ET: {
      title: "Projektid | Saul Project",
      description: "Vaata Saul Projecti tehtud töid — renoveerimis-, elektri-, toru- ja EV laadimisprojektid üle Eesti.",
    },
    EN: {
      title: "Projects | Saul Project",
      description: "Browse Saul Project's completed work — renovation, electrical, plumbing and EV charging projects across Estonia.",
    },
    RU: {
      title: "Проекты | Saul Project",
      description: "Ознакомьтесь с выполненными работами Saul Project — ремонт, электромонтаж, сантехника и зарядные станции по всей Эстонии.",
    },
  }[lang];

  return (
    <>
      <SEO
        title={seoMeta.title}
        description={seoMeta.description}
        path="/projektid"
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
          >
            <Link to="/" className="hover:text-primary transition-colors">
              {t("servicePages.home")}
            </Link>
            <span>/</span>
            <span className="text-foreground">{t("nav.projects")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4"
          >
            {t("projectsPage.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl"
          >
            {t("projectsPage.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <section className="py-6 bg-background sticky top-16 lg:top-20 z-30 border-b border-border/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(({ key, labelKey }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {t(labelKey)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects grid / empty state ── */}
      <section className="py-16 bg-background min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {filtered.length === 0 ? (
            /* Empty state */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center py-24"
            >
              <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-6">
                <FolderOpen size={36} className="text-muted-foreground" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-3">
                {t("projectsPage.comingSoon")}
              </h2>
              <p className="text-muted-foreground max-w-md mb-8">
                {t("projectsPage.comingSoonDesc")}
              </p>
              <Link
                to="/pakkumine"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors duration-200"
              >
                {t("projectsPage.cta")}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ) : (
            /* Project cards */
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="rounded-xl overflow-hidden border border-border bg-card flex flex-col group hover:shadow-md transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-muted">
                    {project.img ? (
                      <img
                        src={project.img}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FolderOpen size={40} className="text-muted-foreground/40" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Meta */}
                    <div className="space-y-1.5 mb-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin size={12} className="text-primary shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar size={12} className="text-primary shrink-0" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Tag size={12} className="text-primary shrink-0" />
                        <span>{project.tags.join(", ")}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="py-20 bg-muted/40 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              {t("contact.title")}{" "}
              <span className="text-primary">{t("contact.titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {t("contact.subtitle")}
            </p>
            <Link
              to="/pakkumine"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium text-base hover:bg-secondary transition-colors duration-200"
            >
              {t("projectsPage.cta")}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Projektid;
