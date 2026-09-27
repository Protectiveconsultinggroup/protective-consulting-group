import Link from "next/link";
import Image from "next/image";

const navigation = [
  ["Home", "/"],
  ["Who We Are", "/who-we-are"],
  ["Security Services", "/security-services"],
  ["Individual Protection", "/individual-protection"],
  ["Residential Security", "/protection-plan/residential"],
  ["Firearms Training", "/protection-plan/firearms"],
];

const differences = [
  {
    title: "Beyond Observe & Report",
    description:
      "Our Associates are expected to think, communicate, and respond professionally — not simply occupy a post.",
  },
  {
    title: "Built Around The Assignment",
    description:
      "Security coverage is developed around the people, property, environment, and concerns specific to each assignment.",
  },
  {
    title: "Professional Presence",
    description:
      "Our Associates can maintain a discreet presence when appropriate while remaining visible and identifiable when the situation requires it.",
  },
];

const services = [
  {
    title: "Security Services",
    description:
      "Professional security coverage for businesses, organizations, properties, events, and temporary security needs.",
    link: "/security-services",
  },
  {
    title: "Individual Protection",
    description:
      "Discreet protective services for individuals, executives, families, travel, and special circumstances.",
    link: "/individual-protection",
  },
  {
    title: "Residential Security",
    description:
      "Practical security planning designed around your home, property, vulnerabilities, and specific concerns.",
    link: "/protection-plan/residential",
  },
  {
    title: "Firearms Training & CPL",
    description:
      "Professional firearms instruction, Michigan CPL courses, and practical defensive fundamentals.",
    link: "/protection-plan/firearms",
  },
];

export default function Home() {
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
                  name === "Home" ? "text-[#9aaa4d]" : "text-white/80"
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CONTACT */}
          <a
            href="mailto:protectiveconsultinggroup@outlook.com"
            className="hidden border border-[#9aaa4d] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#9aaa4d] transition hover:bg-[#9aaa4d] hover:text-black xl:inline-flex"
          >
            Contact PCG
          </a>

          {/* WORKING MOBILE HAMBURGER MENU */}
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
                      name === "Home" ? "text-[#9aaa4d]" : "text-white"
                    }`}
                  >
                    {name}
                  </Link>
                ))}
              </nav>

              <div className="p-3">
                <a
                  href="mailto:protectiveconsultinggroup@outlook.com"
                  className="block bg-[#9aaa4d] px-4 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-[#b0c25a]"
                >
                  Contact PCG
                </a>
              </div>
            </div>
          </details>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[480px] overflow-hidden sm:min-h-[520px] md:min-h-[600px]">
        <Image
          src="/security-hero.png"
          alt="Protective Consulting Group security services"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* LEFT-SIDE GRADIENT FOR TEXT READABILITY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[480px] max-w-[1500px] items-center px-5 py-10 sm:min-h-[520px] sm:px-6 md:min-h-[600px] lg:px-12">
          <div className="max-w-4xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9aaa4d]"
              style={{
                textShadow: "0 2px 8px rgba(0,0,0,0.95)",
              }}
            >
              Veteran Owned &amp; Operated
            </p>

            <h1
              className="mt-4 text-4xl font-semibold uppercase leading-[1.06] tracking-[0.03em] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                textShadow: "0 3px 14px rgba(0,0,0,0.95)",
              }}
            >
              A Different
              <br />
              Standard Of Security
            </h1>

            <p
              className="mt-5 max-w-2xl text-base font-medium leading-7 text-white sm:text-lg"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,1)",
              }}
            >
              Professional security services, individual protection,
              residential security planning, and firearms training.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#services"
                className="inline-flex w-full items-center justify-center bg-[#9aaa4d] px-7 py-4 text-sm font-semibold uppercase tracking-[0.13em] text-black transition hover:bg-[#b0c25a] sm:w-auto"
              >
                View Our Services
              </Link>

              <a
                href="mailto:protectiveconsultinggroup@outlook.com"
                className="inline-flex w-full items-center justify-center border border-white/60 bg-black/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.13em] text-white transition hover:border-[#9aaa4d] hover:text-[#9aaa4d] sm:w-auto"
              >
                Contact PCG
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PCG IS DIFFERENT */}
      <section className="bg-[#090909] px-5 py-12 sm:px-6 md:py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9aaa4d]">
              Why PCG Is Different
            </p>

            <h2 className="mt-3 text-3xl font-semibold uppercase leading-tight tracking-[0.03em] sm:text-4xl md:text-5xl">
              Protection Beyond Presence
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
              Effective security requires more than simply placing someone at a
              post. PCG focuses on capable Associates, professional judgment,
              and security tailored to the assignment.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {differences.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 bg-black p-5 transition hover:border-[#9aaa4d] sm:p-6"
              >
                <div className="mb-4 h-1 w-10 bg-[#9aaa4d]" />

                <h3 className="text-lg font-semibold uppercase tracking-[0.04em] sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="scroll-mt-20 bg-black px-5 py-12 sm:px-6 md:py-16 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9aaa4d]">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-semibold uppercase tracking-[0.03em] sm:text-4xl md:text-5xl">
            How We Can Help
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="group border border-white/10 bg-[#090909] p-5 transition hover:border-[#9aaa4d] sm:p-6"
              >
                <h3 className="text-xl font-semibold uppercase tracking-[0.03em] sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                  {service.description}
                </p>

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#9aaa4d] transition group-hover:text-white">
                  Learn More →
                </p>
              </Link>
            ))}
          </div>
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