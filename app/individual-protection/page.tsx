import Link from "next/link";
import Image from "next/image";

const protectionServices = [
  {
    title: "Executive Protection",
    description:
      "Professional protective solutions designed around the unique responsibilities, schedules, and risks associated with executive lifestyles.",
  },
  {
    title: "Residential Protection",
    description:
      "Security solutions designed to enhance safety at home through planning, assessment, and protective strategies.",
  },
  {
    title: "Travel Protection",
    description:
      "Prepared support for domestic and international travel where additional awareness and security planning are required.",
  },
  {
    title: "Special Event Protection",
    description:
      "Discreet protective support for events, appearances, and situations requiring additional security measures.",
  },
];

export default function IndividualProtection() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Protective Consulting Group"
              width={55}
              height={55}
              className="object-contain"
            />

            <div className="leading-tight">
              <p className="text-sm font-semibold uppercase tracking-[0.15em]">
                Protective Consulting
              </p>

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9aaa4d]">
                Group
              </p>
            </div>
          </Link>

          <nav className="hidden overflow-hidden border-x border-white/10 lg:flex">
            {[
              ["Home", "/"],
              ["Who We Are", "/who-we-are"],
              ["Security Services", "/security-services"],
              ["Individual Protection", "/individual-protection"],
              ["Security Solutions", "/protection-plan/residential"],
              ["Firearms Training", "/protection-plan/firearms"],
            ].map(([name, href], index) => (
              <Link
                key={name}
                href={href}
                className={`
                  px-5 py-5 text-xs font-semibold uppercase tracking-[0.12em]
                  transition hover:text-[#9aaa4d]
                  ${
                    name === "Individual Protection"
                      ? "text-[#9aaa4d]"
                      : "text-white"
                  }
                  ${index !== 5 ? "border-r border-white/10" : ""}
                `}
              >
                {name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden border border-[#9aaa4d] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#9aaa4d] transition hover:bg-[#9aaa4d] hover:text-black md:block"
          >
            Contact PCG
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[700px] overflow-hidden">
        <Image
          src="/individual-protection.png"
          alt="Individual protection services"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />

        <div className="relative z-10 mx-auto flex min-h-[700px] max-w-[1500px] items-center px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9aaa4d]">
              Individual Protection
            </p>

            <h1 className="mt-6 text-5xl font-semibold uppercase leading-tight tracking-[0.05em] md:text-7xl">
              Protection Designed
              <br />
              Around Your Life
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/85">
              Discreet protective solutions for individuals and families
              requiring a higher level of preparation, awareness, and security.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-block bg-[#9aaa4d] px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#b0c25a]"
            >
              Request Security Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* PROTECTION BUILT AROUND YOU */}
      <section className="bg-[#090909] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
            Our Approach
          </p>

          <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">
            Protection Built
            <br />
            Around You
          </h2>

          <div className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-white/70">
            <p>
              Personal protection requires more than visibility. It requires
              understanding the individual, their environment, and the risks
              they may face.
            </p>

            <p>
              PCG develops protective solutions designed around each
              client&apos;s lifestyle, responsibilities, and specific security
              needs.
            </p>

            <p>
              Our goal is to provide confidence through preparation while
              allowing clients to continue their daily lives with minimal
              disruption.
            </p>
          </div>
        </div>
      </section>

      {/* PROTECTIVE SOLUTIONS */}
      <section className="bg-black px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
            Protective Solutions
          </p>

          <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">
            Security Designed
            <br />
            Around Your Needs
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {protectionServices.map((service) => (
              <div
                key={service.title}
                className="border border-white/10 bg-[#090909] p-8 transition hover:border-[#9aaa4d]"
              >
                <div className="mb-6 h-1 w-12 bg-[#9aaa4d]" />

                <h3 className="text-2xl font-semibold uppercase">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-white/65">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL APPROACH */}
      <section className="border-t border-white/10 bg-[#090909] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
            A Professional Approach
          </p>

          <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">
            Confidence Through
            <br />
            Preparation
          </h2>

          <p className="mt-10 text-lg leading-8 text-white/70">
            Personal protection should provide confidence without unnecessary
            interference. PCG develops protective strategies that allow clients
            to maintain their routines while knowing experienced Associates are
            prepared to support their security needs.
          </p>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Every engagement begins with understanding the individual, their
            environment, and the circumstances that require additional
            protection.
          </p>
        </div>
      </section>

      {/* WHY PCG */}
      <section className="bg-black px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
                Why PCG
              </p>

              <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">
                Experience When
                <br />
                It Matters Most
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-white/70">
              <p>
                Personal protection requires individuals who understand
                responsibility, remain composed under pressure, and can make
                informed decisions when circumstances change.
              </p>

              <p>
                Protective Consulting Group brings experience from private
                security operations, military leadership, executive
                protection, and security management to every engagement.
              </p>

              <p>
                Our approach allows clients to receive protection built around
                their unique circumstances rather than a standard solution
                designed for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROTECTIVE EXPERIENCE */}
      <section className="border-t border-white/10 bg-[#090909] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
            Protective Experience
          </p>

          <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">
            A Higher Level Of
            <br />
            Responsibility
          </h2>

          <p className="mt-10 text-lg leading-8 text-white/70">
            Experience supporting executive protection operations for high-risk
            clients reinforced the importance of trust, preparation, and
            attention to detail in every protective environment.
          </p>

          <p className="mt-6 text-lg leading-8 text-white/70">
            PCG applies those same principles to individual protection
            engagements, creating solutions designed around the client&apos;s
            lifestyle, responsibilities, and security requirements.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
            Begin A Conversation
          </p>

          <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">
            Your Safety
            <br />
            Deserves Preparation
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/65">
            Contact Protective Consulting Group to discuss a discreet security
            solution developed around your individual needs.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block bg-[#9aaa4d] px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#b0c25a]"
          >
            Request Security Consultation
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
          © 2026 Protective Consulting Group
        </p>
      </footer>
    </main>
  );
}