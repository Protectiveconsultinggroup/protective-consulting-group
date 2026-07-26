import Link from "next/link";
import Image from "next/image";

const standards = [
  {
    title: "Preparation",
    description:
      "Effective security begins before an incident occurs. We focus on understanding risks, developing strategies, and creating solutions tailored to each environment.",
  },
  {
    title: "Professionalism",
    description:
      "Our Associates represent our clients with discipline, integrity, and sound judgment while maintaining the standards expected from PCG.",
  },
  {
    title: "People",
    description:
      "Exceptional security starts with exceptional people. We invest in our Associates because the quality of our team directly impacts the quality of protection we provide.",
  },
];


const experience = [
  {
    title: "Military Leadership",
    description:
      "Military service developed the discipline, leadership, and decision-making skills required to operate effectively in demanding environments.",
  },
  {
    title: "Executive Protection",
    description:
      "Experience with Gavin de Becker & Associates provided exposure to high-level protective operations where preparation, discretion, and professionalism were essential.",
  },
  {
    title: "Security Operations",
    description:
      "Managing security operations reinforced the importance of strong leadership, accountability, and maintaining high standards.",
  },
];


export default function WhoWeAre() {
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
                ${name === "Who We Are" ? "text-[#9aaa4d]" : "text-white"}
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
          src="/who-we-are.jpeg"
          alt="Protective Consulting Group"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />


        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />



        <div className="relative z-10 mx-auto flex min-h-[700px] max-w-[1500px] items-center px-6 lg:px-12">


          <div className="max-w-4xl">


            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9aaa4d]">
              Who We Are
            </p>



            <h1 className="mt-6 text-5xl font-semibold uppercase leading-tight tracking-[0.05em] md:text-7xl">

              Built On Experience.
              <br />
              Driven By Standards.

            </h1>



            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/80">

              Protective Consulting Group was founded to provide security
              solutions built around preparation, professionalism, and
              accountability — not simply a presence.

            </p>


          </div>


        </div>


      </section>      {/* WHY PCG EXISTS */}
      <section className="bg-[#090909] px-6 py-24 lg:px-10">


        <div className="mx-auto max-w-6xl">


          <div className="max-w-5xl">


            <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
              Why PCG Exists
            </p>



            <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">

              More Than A
              <br />
              Security Presence

            </h2>



            <div className="mt-10 space-y-6 text-lg leading-8 text-white/70">


              <p>
                Throughout my career, I have experienced multiple facets of
                the security industry — from private security operations to
                military leadership, executive protection, and security
                management.
              </p>



              <p>
                Those experiences revealed a gap between simply providing a
                security presence and providing true protection.
              </p>



              <p>
                Protective Consulting Group was created to provide clients
                with security solutions built around preparation,
                professionalism, and accountability.
              </p>


            </div>


          </div>


        </div>


      </section>





      {/* WHAT WE BELIEVE */}
      <section className="bg-black px-6 py-24 lg:px-10">


        <div className="mx-auto max-w-7xl">


          <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
            What We Believe
          </p>



          <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">

            Our Standards Define
            <br />
            Our Service

          </h2>




          <div className="mt-14 grid gap-6 md:grid-cols-3">


            {standards.map((item) => (

              <div
                key={item.title}
                className="border border-white/10 bg-[#090909] p-8 transition hover:border-[#9aaa4d]"
              >


                <div className="mb-6 h-1 w-12 bg-[#9aaa4d]" />



                <h3 className="text-2xl font-semibold uppercase">
                  {item.title}
                </h3>



                <p className="mt-5 leading-7 text-white/65">

                  {item.description}

                </p>


              </div>


            ))}


          </div>


        </div>


      </section>





      {/* WHY CLIENTS CHOOSE PCG */}
      <section className="border-t border-white/10 bg-[#090909] px-6 py-24 lg:px-10">


        <div className="mx-auto max-w-6xl">


          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">


            <div>


              <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
                Why Clients Choose PCG
              </p>



              <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">

                Experience That
                <br />
                Matters

              </h2>


            </div>




            <div className="space-y-6 text-lg leading-8 text-white/70">


              <p>
                Security decisions require experience, judgment, and the
                ability to remain composed when circumstances change.
              </p>



              <p>
                PCG brings together experience from private security,
                military leadership, executive protection, and security
                operations to provide a level of service beyond traditional
                observe and report security.
              </p>



              <p>
                Our goal is simple: provide clients with Associates who
                understand the responsibility entrusted to them.
              </p>


            </div>


          </div>


        </div>


      </section>      {/* EXPERIENCE */}
      <section className="bg-black px-6 py-24 lg:px-10">


        <div className="mx-auto max-w-7xl">


          <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
            Experience That Shapes Our Approach
          </p>



          <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">

            Built Through
            <br />
            Experience

          </h2>




          <div className="mt-14 grid gap-6 md:grid-cols-3">


            {experience.map((item) => (

              <div
                key={item.title}
                className="border border-white/10 bg-[#090909] p-8 transition hover:border-[#9aaa4d]"
              >


                <div className="mb-6 h-1 w-12 bg-[#9aaa4d]" />


                <h3 className="text-xl font-semibold uppercase">
                  {item.title}
                </h3>



                <p className="mt-5 leading-7 text-white/65">

                  {item.description}

                </p>


              </div>


            ))}


          </div>


        </div>


      </section>





      {/* ASSOCIATES PHILOSOPHY */}
      <section className="border-t border-white/10 bg-[#090909] px-6 py-24 lg:px-10">


        <div className="mx-auto max-w-5xl text-center">


          <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
            Our Associates
          </p>



          <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">

            The Standard Starts
            <br />
            With Our Team

          </h2>



          <p className="mt-10 text-lg leading-8 text-white/70">

            The foundation of quality security begins with the people
            representing our company.

          </p>



          <p className="mt-6 text-lg leading-8 text-white/70">

            At PCG, we believe our Associates should be supported,
            respected, and held to a higher standard. By investing in the
            people responsible for protecting our clients, we create a
            stronger level of service.

          </p>



          <div className="mx-auto mt-10 max-w-3xl border-l-4 border-[#9aaa4d] px-8 text-left">


            <p className="text-2xl font-semibold uppercase leading-relaxed">

              Take care of our Associates,
              <br />
              so they can take care of you.

            </p>


          </div>


        </div>


      </section>





      {/* FINAL CTA */}
      <section className="bg-black px-6 py-24 text-center">


        <div className="mx-auto max-w-5xl">


          <p className="text-xs uppercase tracking-[0.35em] text-[#9aaa4d]">
            Work With PCG
          </p>



          <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.05em] md:text-6xl">

            Security Built
            <br />
            Around Your Needs

          </h2>



          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/65">

            Every situation requires a different approach. Contact
            Protective Consulting Group to discuss a security solution
            tailored to your environment and objectives.

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