import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Employee Terminations",
    description:
      "Professional security presence during sensitive personnel separations where additional safety measures may be required.",
    details:
      "Risk assessment • Management support • Employee separation coverage • Property protection",
  },
  {
    title: "Workplace Violence Prevention",
    description:
      "Security planning and professional presence designed to help organizations address potential workplace threats.",
    details:
      "Threat awareness • Prevention planning • Security recommendations • Incident preparation",
  },
  {
    title: "Elevated Risk Response & Mitigation",
    description:
      "Short-term security support for organizations experiencing increased security concerns requiring professional attention.",
    details:
      "Risk reduction • Security coordination • Protective measures • Incident support",
  },
  {
    title: "Temporary Security Coverage",
    description:
      "Flexible security solutions when organizations need additional protection without long-term commitments.",
    details:
      "Special events • Operational disruptions • Increased security needs • Short-term assignments",
  },
];

const navigation = [
  ["Home", "/"],
  ["Who We Are", "/who-we-are"],
  ["Security Services", "/security-services"],
  ["Individual Protection", "/individual-protection"],
  ["Residential Security", "/protection-plan/residential"],
  ["Firearms Training", "/protection-plan/firearms"],
];

export default function SecurityServices() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* BRAND */}
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/Logo.png"
              alt="Protective Consulting Group"
              width={52}
              height={52}
              priority
              className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
            />

            <div className="min-w-0 leading-tight">
              <p className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.11em] sm:text-sm sm:tracking-[0.15em]">
                Protective Consulting
              </p>

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9aaa4d] sm:text-xs">
                Group
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center lg:flex">
            {navigation.map(([name, href]) => (
              <Link
                key={name}
                href={href}
                className={`px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] transition hover:text-[#9aaa4d] ${
                  name === "Security Services"
                    ? "text-[#9aaa4d]"
                    : "text-white/80"
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CONTACT */}
          <Link
            href="#inquiry"
            className="hidden border border-[#9aaa4d] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#9aaa4d] transition hover:bg-[#9aaa4d] hover:text-black xl:inline-flex"
          >
            Request Services
          </Link>

          {/* MOBILE MENU */}
          <details className="group relative lg:hidden">
            <summary
              aria-label="Open navigation menu"
              className="flex h-11 w-12 cursor-pointer list-none items-center justify-center border border-white/20 bg-black text-white transition hover:border-[#9aaa4d] [&::-webkit-details-marker]:hidden"
            >
              <div className="flex w-6 flex-col gap-[5px]">
                <span className="block h-[2px] w-full bg-white transition group-open:translate-y-[7px] group-open:rotate-45" />
                <span className="block h-[2px] w-full bg-white transition group-open:opacity-0" />
                <span className="block h-[2px] w-full bg-white transition group-open:-translate-y-[7px] group-open:-rotate-45" />
              </div>
            </summary>

            <div className="absolute right-0 top-[calc(100%+12px)] z-[100] w-[min(92vw,340px)] border border-white/10 bg-[#080808] shadow-2xl">
              <div className="border-b border-[#9aaa4d]/40 px-5 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9aaa4d]">
                  Protective Consulting Group
                </p>
              </div>

              <nav className="p-2">
                {navigation.map(([name, href]) => (
                  <Link
                    key={name}
                    href={href}
                    className={`block border-b border-white/10 px-4 py-4 text-sm font-semibold uppercase tracking-[0.11em] transition last:border-b-0 hover:bg-white/5 hover:text-[#9aaa4d] ${
                      name === "Security Services"
                        ? "text-[#9aaa4d]"
                        : "text-white"
                    }`}
                  >
                    {name}
                  </Link>
                ))}
              </nav>

              <div className="p-3">
                <Link
                  href="#inquiry"
                  className="block bg-[#9aaa4d] px-4 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-black"
                >
                  Request Services
                </Link>
              </div>
            </div>
          </details>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <Image
          src="/Security-services-background.png"
          alt="Professional security environment"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-6xl flex-col items-center justify-center px-5 py-14 text-center sm:px-6 md:min-h-[620px]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9aaa4d] md:text-sm">
            Security Services
          </p>

          <h1 className="mt-5 text-4xl font-semibold uppercase leading-tight tracking-[0.06em] md:text-6xl">
            Professional Security
            <br />
            Solutions
          </h1>

          <p className="mt-5 text-base font-semibold uppercase tracking-[0.22em] text-[#9aaa4d] md:text-xl">
            Prepared. Professional. Proven.
          </p>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white md:text-lg md:leading-8">
            Professional security support for organizations facing elevated
            risk, sensitive situations, or temporary security needs.
          </p>

          <Link
            href="#inquiry"
            className="mt-8 inline-flex w-full items-center justify-center bg-[#8a9a3f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#a2b24f] sm:w-auto"
          >
            Request Security Services
          </Link>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-[#090909] px-5 py-14 sm:px-6 md:py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9aaa4d]">
            Security Services
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">
            Coverage For Situations That Require More
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-white/10 bg-[#0d0d0d] p-6 transition hover:border-[#8a9a3f]"
              >
                <h3 className="text-xl font-semibold sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-white/65">
                  {service.description}
                </p>

                <p className="mt-4 text-sm leading-6 text-[#9aaa4d]">
                  {service.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section
        id="inquiry"
        className="scroll-mt-24 border-t border-white/10 bg-black px-5 py-14 sm:px-6 md:py-16"
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9aaa4d]">
            Request Security Services
          </p>

          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.03em] sm:text-4xl">
            Tell Us What You Need
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-white/65">
            Provide a brief description of the situation and the best way to
            reach you. PCG will contact you to discuss the appropriate next
            step.
          </p>

          <form
            action="https://formspree.io/f/YOUR_FORMSPREE_FORM_ID"
            method="POST"
            className="mt-8 grid gap-5"
          >
            <input
              type="hidden"
              name="serviceType"
              value="Security Services"
            />

            {/* COMPANY / INDIVIDUAL NAME */}
            <div>
              <label
                htmlFor="requesterName"
                className="mb-2 block text-sm font-medium text-white/90"
              >
                Company / Individual Name
              </label>

              <input
                id="requesterName"
                name="requesterName"
                type="text"
                required
                placeholder="Company or individual name"
                className="w-full rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-4 text-base text-white placeholder:text-white/40 outline-none transition focus:border-[#9aaa4d]"
              />
            </div>

            {/* BEST CONTACT */}
            <div>
              <label
                htmlFor="bestContact"
                className="mb-2 block text-sm font-medium text-white/90"
              >
                Best Form Of Contact
              </label>

              <input
                id="bestContact"
                name="bestContact"
                type="text"
                required
                placeholder="Phone number or email address"
                className="w-full rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-4 text-base text-white placeholder:text-white/40 outline-none transition focus:border-[#9aaa4d]"
              />
            </div>

            {/* REQUEST */}
            <div>
              <label
                htmlFor="requestedService"
                className="mb-2 block text-sm font-medium text-white/90"
              >
                General Description Of Requested Service
              </label>

              <textarea
                id="requestedService"
                name="requestedService"
                required
                rows={6}
                placeholder="Tell us briefly what is happening, what type of security support you are looking for, and any important details."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-4 text-base text-white placeholder:text-white/40 outline-none transition focus:border-[#9aaa4d]"
              />
            </div>

            {/* SUBMIT */}
            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center bg-[#9aaa4d] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-[#b0c25a] sm:w-auto"
              >
                Submit Security Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#090909] px-5 py-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.18em] text-white/40 sm:text-xs">
          © 2026 Protective Consulting Group
        </p>
      </footer>
    </main>
  );
}