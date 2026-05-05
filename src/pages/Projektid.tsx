import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLanguage } from "@/i18n/LanguageContext";

const Projektid = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="Projektid | Saul Project"
        description="Vaata meie teostatud projekte — korteriühistud, eraisikud ja taristu."
        path="/projektid"
      />
      <Navbar />
      <main className="pt-20 lg:pt-24">
        {/* Hero banner */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-4"
            >
              {t("projectsPage.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
            >
              {t("projectsPage.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Filter tabs placeholder */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {[
                t("projectsPage.filterAll"),
                t("projectsPage.filterAssociations"),
                t("projectsPage.filterPrivate"),
                t("projectsPage.filterInfra"),
              ].map((filter, i) => (
                <button
                  key={filter}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    i === 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Empty state */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-6">
                <FolderOpen size={36} className="text-muted-foreground" />
              </div>
              <h2 className="font-heading font-semibold text-xl text-foreground mb-2">
                {t("projectsPage.emptyTitle")}
              </h2>
              <p className="text-muted-foreground max-w-md">
                {t("projectsPage.emptyDesc")}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projektid;
