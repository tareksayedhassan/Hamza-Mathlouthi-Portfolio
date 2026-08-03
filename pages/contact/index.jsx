import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants";
import { useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { direction, t } = useI18n();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert(t("contact.success"));
        } else {
          alert(t("contact.error"));
        }
      })
      .catch(() => alert(t("contact.error")))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="page-section flex items-center">
      <div className="page-container flex items-center justify-center text-center">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-4"
          >
            {t("contact.title")} <span className="text-accent">{t("contact.accent")}</span>
          </motion.h2>
          <motion.div variants={fadeIn("up", 0.3)} initial="hidden" animate="show" className="text-center text-white/60 mb-8">
            <div>{t("contact.location")}</div>
            <a className="hover:text-accent transition-colors" href={`tel:${t("contact.phone").replace(/[^+\d]/g, "")}`}>{t("contact.phone")}</a>
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            name="contact"
          >
            {/* input group */}
            <div className="flex w-full flex-col gap-6 sm:flex-row">
              <input type="hidden" name="form-name" value="contact" />

              <label className="sr-only" htmlFor="contact-name">{t("contact.name")}</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder={t("contact.name")}
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <label className="sr-only" htmlFor="contact-email">{t("contact.email")}</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder={t("contact.email")}
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <label className="sr-only" htmlFor="contact-subject">{t("contact.subject")}</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder={t("contact.subject")}
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <label className="sr-only" htmlFor="contact-message">{t("contact.message")}</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder={t("contact.message")}
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <button
              type="submit"
              className="btn group relative min-w-[170px] max-w-full self-center overflow-hidden rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent sm:self-start"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {t("contact.submit")}
              </span>

              <BsArrowRight
                className={`absolute text-[22px] opacity-0 transition-all duration-300 group-hover:opacity-100 ${direction === "rtl" ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
