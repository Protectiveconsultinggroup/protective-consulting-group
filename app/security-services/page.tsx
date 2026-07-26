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

export default function SecurityServices() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-md">

        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-3 lg:px-8">

          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/logo.png"
              alt="Protective Consulting Group"
              width={56}
              height={56}
              className="object-contain"
            />

            <div className="leading-tight">

              <p className="text-sm font-semibold uppercase tracking-[0.15em]">
                Protective Consulting
              </p>

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9aaa4d]">
                Group
              </p>

              <p className="mt-2 hidden text-[10px] uppercase tracking-[0.18em] text-white/50 xl:block">
                Professional Security Solutions
              </p>

              <p className="hidden text-[10px] uppercase tracking-[0.18em] text-white/50 xl:block">
                Tailored To Your Needs
              </p>

            </div>

          </Link>


          <nav className="hidden overflow-hidden border-x border-white/10 lg:flex">

            {[
              ["Home", "/"],
              ["Security Services", "/security-services"],
              ["Individual Protection", "/individual-protection"],
              ["Security Solutions", "/protection-plan/residential"],
              ["Firearms Training", "/protection-plan/firearms"],
            ].map(([name, href], index) => (

              <Link
                key={name}
                href={href}
                className={`px-5 py-6 text-xs font-semibold uppercase tracking-[0.14em] transition hover:bg-white/5 hover:text-[#9aaa4d]
                ${index !== 4 ? "border-r border-white/10" : ""}
                `}
              >
                {name}
              </Link>

            ))}

          </nav>


          <a
            href="mailto:protectiveconsultinggroup@outlook.com"
            className="hidden border border-[#8a9a3f] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#a4b454] transition hover:bg-[#8a9a3f] hover:text-black md:block"
          >
            Contact PCG
          </a>


          <button className="border border-white/20 px-4 py-2 text-xl lg:hidden">
            ☰
          </button>

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


        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-6xl flex-col items-center justify-center px-6 text-center">


          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9aaa4d] md:text-sm">
            Security Services
          </p>


          <h1 className="mt-6 text-4xl font-semibold uppercase leading-tight tracking-[0.08em] md:text-6xl">

            Professional Security
            <br />
            Solutions

          </h1>


          <p className="mt-5 text-lg font-semibold uppercase tracking-[0.28em] text-[#9aaa4d] md:text-2xl">
            Prepared. Professional. Proven.
          </p>


          <p className="mt-8 max-w-3xl text-base leading-8 text-white md:text-lg">

            Protective Consulting Group provides professional security
            solutions for organizations facing changing circumstances,
            elevated risks, and situations requiring additional support.

          </p>


          <Link
            href="/contact"
            className="mt-10 bg-[#8a9a3f] px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#a2b24f]"
          >
            Request Security Consultation
          </Link>


        </div>

      </section>



      {/* CAPABILITIES */}
      <section className="bg-[#090909] px-6 py-20 lg:px-10">

        <div className="mx-auto max-w-7xl">


          <p className="text-xs uppercase tracking-[0.3em] text-[#8a9a3f]">
            Our Capabilities
          </p>


          <h2 className="mt-5 max-w-4xl text-3xl font-semibold md:text-5xl">
            Safety And Assurance When You Need It Most
          </h2>


          <p className="mt-6 max-w-3xl leading-8 text-white/65">

            Organizations and individuals may encounter situations where
            additional preparation, planning, and professional support are
            needed. Protective Consulting Group provides tailored solutions
            designed around your environment, concerns, and level of risk.

          </p>


          <div className="mt-14 grid gap-5 md:grid-cols-2">


            {services.map((service) => (

              <div
                key={service.title}
                className="border border-white/10 bg-[#0d0d0d] p-8 transition hover:border-[#8a9a3f]"
              >

                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>


                <p className="mt-5 leading-7 text-white/65">
                  {service.description}
                </p>


                <p className="mt-5 text-sm text-[#9aaa4d]">
                  {service.details}
                </p>

              </div>

            ))}


          </div>


        </div>

      </section>



      {/* APPROACH */}
      <section className="border-t border-white/10 bg-black px-6 py-20">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-[#8a9a4d]">
            Our Approach
          </p>


          <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
            Solutions Built Around Your Needs
          </h2>


          <p className="mt-8 text-lg leading-8 text-white/65">

            Every situation is different. Protective Consulting Group
            evaluates your environment, concerns, and requirements to
            develop a professional security solution tailored to your needs.

          </p>

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