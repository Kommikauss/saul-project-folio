import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const QuotePage = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    propertyType: "",
    address: "",
    timeline: "",
    budget: "",
    description: "",
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const serviceOptions = [
    t("services.eraisikutele"),
    t("services.korteruhistutele"),
    t("services.hooldus"),
    t("services.elektritood"),
    t("services.torutood"),
    t("services.ev"),
  ];

  const propertyOptions = [
    t("quotePage.apartment"),
    t("quotePage.house"),
    t("quotePage.commercial"),
    t("quotePage.association"),
  ];

  const timelineOptions = [
    t("quotePage.asap"),
    t("quotePage.month1"),
    t("quotePage.month3"),
    t("quotePage.flexible"),
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <>
        <SEO
          title="Pakkumine saadetud"
          description="Teie pakkumise taotlus on edukalt saadetud. Võtame teiega ühendust 24 tunni jooksul."
          path="/pakkumine"
        />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md mx-auto px-6"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-primary" />
            </div>
            <h1 className="font-heading font-extrabold text-3xl text-foreground mb-4">
              {t("quotePage.successTitle")}
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              {t("quotePage.successMessage")}
            </p>
            <Link
              to="/"
              className="bg-foreground text-background px-8 py-4 rounded-lg font-heading font-bold text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-block"
            >
              {t("quotePage.backHome")}
            </Link>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title="Küsi pakkumist"
        description="Küsi tasuta pakkumist remondi-, elektri-, toru- või hooldustöödeks. Täida vorm ja võtame teiega ühendust 24 tunni jooksul."
        path="/pakkumine"
        keywords="pakkumine, hinnapakkumine, tasuta pakkumine, remont, elektritööd, torutööd, Eesti"
      />
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Home size={14} />
              {t("servicePages.home")}
            </Link>
            <ChevronRight size={14} />
            <span className="text-foreground font-medium">{t("quotePage.breadcrumb")}</span>
          </nav>
        </div>
      </div>

      <section className="bg-background pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 pt-8"
          >
            <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4">
              {t("quotePage.title")}
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              {t("quotePage.subtitle")}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-background rounded-2xl border border-border p-8 shadow-sm"
          >
            {/* Name & Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("quotePage.name")} <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("quotePage.namePlaceholder")}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("quotePage.email")} <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("quotePage.emailPlaceholder")}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* Phone & Service */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("quotePage.phone")} <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={t("quotePage.phonePlaceholder")}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("quotePage.serviceType")} <span className="text-primary">*</span>
                </label>
                <select
                  name="serviceType"
                  required
                  value={form.serviceType}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                >
                  <option value="">{t("quotePage.serviceTypePlaceholder")}</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Property type & Address */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("quotePage.propertyType")}
                </label>
                <select
                  name="propertyType"
                  value={form.propertyType}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                >
                  <option value="">{t("quotePage.propertyTypePlaceholder")}</option>
                  {propertyOptions.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("quotePage.address")}
                </label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder={t("quotePage.addressPlaceholder")}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* Timeline & Budget */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("quotePage.timeline")}
                </label>
                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                >
                  <option value="">{t("quotePage.timelinePlaceholder")}</option>
                  {timelineOptions.map((tl) => (
                    <option key={tl} value={tl}>{tl}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("quotePage.budget")}
                </label>
                <input
                  type="text"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  placeholder={t("quotePage.budgetPlaceholder")}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("quotePage.description")} <span className="text-primary">*</span>
              </label>
              <textarea
                name="description"
                required
                rows={5}
                value={form.description}
                onChange={handleChange}
                placeholder={t("quotePage.descriptionPlaceholder")}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-foreground text-background px-8 py-4 rounded-lg font-heading font-bold text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-60 inline-flex items-center justify-center gap-2"
            >
              {sending ? t("quotePage.sending") : t("quotePage.submit")}
              {!sending && <ArrowRight size={18} />}
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default QuotePage;
