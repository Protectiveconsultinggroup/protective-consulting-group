import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Security Services",
    description:
      "Professional security solutions designed for organizations requiring experienced personnel and dependable protection.",
    link: "/security-services",
  },
  {
    title: "Individual Protection",
    description:
      "Discreet protective solutions tailored for individuals, executives, and families with unique security concerns.",
    link: "/individual-protection",
  },
  {
    title: "Security Solutions",
    description:
      "Customized security planning designed around your environment, risks, and specific requirements.",
    link: "/protection-plan/residential",
  },
  {
    title: "Firearms Training",
    description:
      "Professional instruction focused on responsible ownership, confidence, and defensive preparation.",
    link: "/protection-plan/firearms",
  },
];


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">


      {/* HEADER */}
      <header className="absolute top-0 z-30 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">

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



          <nav className="hidden overflow-hidden border-x border-white/20 lg:flex">

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
                ${name === "Home" ? "text-[#9aaa4d]" : "text-white"}
                ${index !== 5 ? "border-r border-white/20" : ""}
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



          <button className="border border-white/20 px-4 py-2 text-xl lg:hidden">
            ☰
          </button>


        </div>

      </header>





      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">


        <Image
          src="/security-hero.png"
          alt="Protective Consulting Group"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />


        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />



        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 lg:px-12">


          <div className="max-w-3xl">


            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9aaa4d]">
              Protective Consulting Group
            </p>



            <h1 className="mt-6 text-5xl font-semibold uppercase leading-[1.05] tracking-[0.06em] md:text-7xl">

              Security Built To
              <br />
              Prevent, Respond,
              <br />
              And Protect

            </h1>



            <div className="mt-8 border-l-4 border-[#9aaa4d] pl-6">

              <p className="text-xl font-semibold uppercase tracking-[0.25em] text-white md:text-2xl">
                Protection Beyond Presence
              </p>

            </div>



            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">

              Protective Consulting Group provides experienced professionals
              focused on prevention, sound decision making, and effective
              response — delivering a level of protection beyond traditional
              observe and report security.

            </p>



            <Link
              href="/contact"
              className="mt-10 inline-block bg-[#9aaa4d] px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#b0c25a]"
            >
              Request Security Consultation
            </Link>


          </div>


        </div>


      </section>      {/* EXPERIENCE SECTION */}
      <section className="bg-[#090909] px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-6xl">


          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">


            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
                Veteran Owned & Operated
              </p>



              <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">

                Experience Built
                <br />
                Around Service

              </h2>


            </div>




            <div>

              <p className="text-lg leading-8 text-white/70">

                Protective Consulting Group was founded on a foundation of
                military leadership, executive protection experience, and
                private security operations.

              </p>



              <p className="mt-6 text-lg leading-8 text-white/70">

                Our approach is built around preparation, accountability,
                and professionalism. We believe effective security begins
                with understanding risk, making sound decisions, and
                developing solutions tailored to each client's needs.

              </p>


            </div>


          </div>


        </div>


      </section>





      {/* APPROACH SECTION */}
      <section className="bg-black px-6 py-24 lg:px-10">


        <div className="mx-auto max-w-7xl">


          <div className="max-w-4xl">


            <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
              Our Approach
            </p>



            <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">

              Security Built To
              <br />
              Prevent, Respond,
              <br />
              And Protect

            </h2>



            <p className="mt-8 text-lg leading-8 text-white/65">

              Security is not one-size-fits-all. PCG develops solutions
              designed around your environment, your concerns, and your
              objectives.

            </p>


          </div>





          <div className="mt-14 grid gap-6 md:grid-cols-3">


            {/* PREVENT */}
            <div className="border border-white/10 bg-[#0b0b0b] p-8 transition hover:border-[#9aaa4d]">


              <div className="mb-6 h-1 w-12 bg-[#9aaa4d]" />


              <h3 className="text-2xl font-semibold uppercase">
                Prevent
              </h3>



              <p className="mt-5 leading-7 text-white/65">

                Identify vulnerabilities, evaluate potential threats, and
                implement proactive measures designed to reduce risk before
                incidents occur.

              </p>


            </div>





            {/* RESPOND */}
            <div className="border border-white/10 bg-[#0b0b0b] p-8 transition hover:border-[#9aaa4d]">


              <div className="mb-6 h-1 w-12 bg-[#9aaa4d]" />


              <h3 className="text-2xl font-semibold uppercase">
                Respond
              </h3>



              <p className="mt-5 leading-7 text-white/65">

                Provide experienced professionals capable of making sound
                decisions, adapting quickly, and responding effectively when
                circumstances change.

              </p>


            </div>





            {/* PROTECT */}
            <div className="border border-white/10 bg-[#0b0b0b] p-8 transition hover:border-[#9aaa4d]">


              <div className="mb-6 h-1 w-12 bg-[#9aaa4d]" />


              <h3 className="text-2xl font-semibold uppercase">
                Protect
              </h3>



              <p className="mt-5 leading-7 text-white/65">

                Deliver professional security solutions focused on protecting
                people, property, and operations through preparation and
                professionalism.

              </p>


            </div>


          </div>


        </div>


      </section>      {/* WHO WE ARE */}
      <section className="bg-[#090909] px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-6xl">


          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">


            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
                Who We Are
              </p>



              <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">

                A Different
                <br />
                Standard Of Security

              </h2>


            </div>




            <div>

              <p className="text-lg leading-8 text-white/70">

                Protective Consulting Group was created to provide a higher
                standard of security through experienced professionals,
                disciplined preparation, and solutions tailored to each
                client's needs.

              </p>



              <p className="mt-6 text-lg leading-8 text-white/70">

                With experience spanning private security, military
                leadership, executive protection, and security operations,
                PCG approaches every engagement with professionalism,
                accountability, and purpose.

              </p>



              <Link
                href="/who-we-are"
                className="mt-8 inline-block border border-[#9aaa4d] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#9aaa4d] transition hover:bg-[#9aaa4d] hover:text-black"
              >
                Learn More About PCG
              </Link>


            </div>


          </div>


        </div>


      </section>





      {/* SERVICES */}
      <section className="bg-black px-6 py-24 lg:px-10">


        <div className="mx-auto max-w-7xl">


          <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
            Our Capabilities
          </p>



          <h2 className="mt-5 max-w-4xl text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">

            Professional Solutions
            <br />
            For Unique Needs

          </h2>



          <div className="mt-14 grid gap-6 md:grid-cols-2">


            {services.map((service) => (

              <Link
                key={service.title}
                href={service.link}
                className="group border border-white/10 bg-[#090909] p-8 transition hover:border-[#9aaa4d]"
              >


                <h3 className="text-2xl font-semibold uppercase">
                  {service.title}
                </h3>



                <p className="mt-5 leading-7 text-white/65">

                  {service.description}

                </p>



                <p className="mt-6 text-sm uppercase tracking-[0.15em] text-[#9aaa4d] transition group-hover:text-white">

                  Learn More →

                </p>


              </Link>


            ))}


          </div>


        </div>


      </section>





      {/* FINAL CTA */}
      <section className="border-t border-white/10 bg-[#090909] px-6 py-24 text-center">


        <div className="mx-auto max-w-5xl">


          <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
            Contact PCG
          </p>



          <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">

            Security Built
            <br />
            Around Your Needs

          </h2>



          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/65">

            Every situation requires a different approach. Contact
            Protective Consulting Group to discuss a professional security
            solution tailored to your environment, concerns, and objectives.

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