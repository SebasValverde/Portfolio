"use client";

import { FormEvent, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

type FormStatus = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqjlbjg";

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isSubmitting = status === "submitting";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("The message could not be sent. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message."
      );
    }
  };

  const contactItems = [
    {
      label: "Phone",
      value: "+506 8534 1498",
      href: "tel:+50685341498",
      icon: MdCall,
      external: false,
    },
    {
      label: "Email",
      value: "sebasvala28@gmail.com",
      href: "mailto:sebasvala28@gmail.com",
      icon: MdEmail,
      external: false,
    },
    {
      label: "Location",
      value: "San Jose, Costa Rica",
      href: "https://maps.google.com/?q=San+Jose,+Costa+Rica",
      icon: MdLocationOn,
      external: true,
    },
  ];

  return (
    <section id="contact" className="pt-16 pb-16 text-white scroll-mt-28">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100">
            Let&apos;s build something useful together.
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-xl">
            I&apos;m open to Front-End and Full-Stack roles. If you
            have a role, project, or idea in mind, send a message and I&apos;ll get
            back to you.
          </p>

          <ul className="space-y-4" aria-label="Contact details">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-3 text-gray-200 transition-colors duration-200 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/45 rounded-md"
                  >
                    <Icon className="h-5 w-5 text-cyan-200" aria-hidden="true" />
                    <span className="text-lg font-medium">{item.value}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="pt-2 flex items-center gap-4">
            <a
              href="https://github.com/SebasValverde"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="h-12 w-12 rounded-full border border-white/15 bg-white/5 transition-all duration-200 hover:ring-1 hover:ring-cyan-200/40 hover:border-cyan-200/30 hover:shadow-[0_0_28px_rgba(103,232,249,0.22)] active:scale-95 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/45 focus-visible:shadow-[0_0_32px_rgba(103,232,249,0.25)] flex items-center justify-center"
            >
              <FaGithub className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/sebastian-valverdearias/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-12 w-12 rounded-full border border-white/15 bg-white/5 transition-all duration-200 hover:ring-1 hover:ring-cyan-200/40 hover:border-cyan-200/30 hover:shadow-[0_0_28px_rgba(103,232,249,0.22)] active:scale-95 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/45 focus-visible:shadow-[0_0_32px_rgba(103,232,249,0.25)] flex items-center justify-center"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>
        </div>

        <form
          className="rounded-2xl border border-white/10 bg-[#0f1d42]/60 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          onSubmit={handleSubmit}
          noValidate
          data-aos="fade-right"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-white/15 bg-[#0b1736]/80 px-4 py-3 text-gray-100 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/45"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-white/15 bg-[#0b1736]/80 px-4 py-3 text-gray-100 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/45"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="subject" className="mb-2 block text-sm text-gray-300">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="w-full rounded-xl border border-white/15 bg-[#0b1736]/80 px-4 py-3 text-gray-100 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/45"
              placeholder="What is this about?"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="mb-2 block text-sm text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-xl border border-white/15 bg-[#0b1736]/80 px-4 py-3 text-gray-100 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/45"
              placeholder="Tell me about your project or role"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl border border-cyan-200/20 bg-blue-800 px-6 py-3 font-medium transition-all duration-300 hover:ring-1 hover:ring-cyan-200/40 hover:border-cyan-200/30 hover:shadow-[0_0_24px_rgba(103,232,249,0.22)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/45 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </div>

          {status === "success" && (
            <p
              className="mt-4 rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-200"
              role="status"
            >
              Message sent successfully. I&apos;ll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p
              className="mt-4 rounded-xl border border-rose-300/30 bg-rose-300/10 px-4 py-3 text-sm text-rose-200"
              role="alert"
            >
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
