import Link from "next/link";

export default function ProtectionPlanPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 px-6 py-20 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/protection-bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
          >
            ← Back
          </Link>
        </div>

        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#8AAE45] md:text-sm">
            Protective Consulting Group
          </p>

          <h1 className="text-4xl font-semibold tracking-[0.06em] text-white md:text-6xl">
            Develop Your Protection Plan
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/85 md:text-lg">
            Select the area of protection you want to focus on first. We will
            use this to guide your consultation and build a more tailored
            strategy around your priorities.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Link
            href="/protection-plan/residential"
            className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-xl transition hover:scale-[1.01]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{
                backgroundImage: "url('/residential-security.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 p-8 backdrop-blur-[1px]">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8AAE45]">
                Residential Security Plan
              </p>

              <h2 className="text-2xl font-medium text-white md:text-3xl">
                Home protection planning built around prevention, response, and
                evidence.
              </h2>

              <p className="mt-5 text-base leading-7 text-white/90">
                Ideal for homeowners looking to strengthen their overall security
                posture through planning and system design.
              </p>

              <div className="mt-6 space-y-3 text-sm leading-6 text-white/95">
                <p>Camera system planning and placement</p>
                <p>Intrusion prevention and deterrence strategy</p>
                <p>Evidence gathering and coverage planning</p>
                <p>Safety, shelter, and evacuation planning</p>
              </div>

              <div className="mt-8 inline-flex rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition group-hover:scale-[1.02]">
                Select Residential Security
              </div>
            </div>
          </Link>

          <Link
            href="/protection-plan/firearms"
            className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-xl transition hover:scale-[1.01]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{
                backgroundImage: "url('/firearms-training.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-black/42" />

            <div className="relative z-10 p-8 backdrop-blur-[1px]">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8AAE45]">
                Firearms Training
              </p>

              <h2 className="text-2xl font-medium text-white md:text-3xl">
                Master confidence, proficiency, and discipline for when it
                really matters
              </h2>

              <p className="mt-5 text-base leading-7 text-white/90">
                Ideal for individuals seeking structured training with a focus on
                confidence, legal awareness, and responsible ownership.
              </p>

              <div className="mt-6 space-y-3 text-sm leading-6 text-white/95">
                <p>USCCA Concealed Pistol License Course</p>
                <p>Home defense fundamentals</p>
                <p>Safety-focused instruction</p>
                <p>Preparedness and mindset development</p>
              </div>

              <div className="mt-8 inline-flex rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition group-hover:scale-[1.02]">
                Select Firearms Training
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}