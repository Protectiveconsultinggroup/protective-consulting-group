import Link from "next/link";

export default function FirearmsTrainingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 px-6 py-20 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/firearms-training.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/38 via-black/24 to-black/46" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-12">
          <Link
            href="/protection-plan"
            className="text-sm uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
          >
            ← Back
          </Link>
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#8AAE45] md:text-sm">
          Firearms Training
        </p>

        <h1 className="text-4xl font-semibold tracking-[0.06em] text-white md:text-6xl">
          Master confidence, proficiency, and discipline for when it really
          matters
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-white/90 md:text-lg">
          Courses are developed carefully to prioritize students safety,
          responsibility, and comfortability.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/22 p-6 backdrop-blur-md">
            <h2 className="text-2xl font-medium text-white">
              Training options may include
            </h2>

            <div className="mt-5 space-y-3 text-white/90">
              <p>USCCA Concealed Pistol License Course</p>
              <p>Home defense fundamentals</p>
              <p>Preparedness and mindset development</p>
              <p>Foundational guidance for responsible ownership</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/22 p-6 backdrop-blur-md">
            <h2 className="text-2xl font-medium text-white">
              Why train with us?
            </h2>

            <div className="mt-5 space-y-3 text-white/90">
              <p>Veteran-owned company</p>
              <p>
                Instructors are required to have military or law enforcement
                experience
              </p>
              <p>
                Experience drawn from some of the most exclusive executive
                protection firms in the country
              </p>
              <p>
                Instruction built around confidence, responsibility, and sound
                decision-making
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-black/22 p-6 backdrop-blur-md">
          <h2 className="text-2xl font-medium text-white">
            Enter your contact information below for more information
          </h2>

          <p className="mt-4 max-w-3xl text-white/90">
            Share a few details and we will follow up with one outreach attempt
            only, so you do not receive repeated calls or messages.
          </p>

          <form
            action="https://formspree.io/f/xojkglwd"
            method="POST"
            className="mt-8 grid gap-5 md:grid-cols-2"
          >
            <input
              type="hidden"
              name="serviceType"
              value="Firearms Training"
            />

            <div className="md:col-span-2">
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-white/90"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-[#8AAE45]"
              />
            </div>

            <div>
              <label
                htmlFor="preferredMethod"
                className="mb-2 block text-sm font-medium text-white/90"
              >
                Preferred Method of Communication
              </label>
              <select
                id="preferredMethod"
                name="preferredMethod"
                required
                defaultValue=""
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[#8AAE45]"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="phone">Phone Call</option>
                <option value="text">Text Message</option>
                <option value="email">Email</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="zipCode"
                className="mb-2 block text-sm font-medium text-white/90"
              >
                ZIP Code
              </label>
              <input
                id="zipCode"
                name="zipCode"
                type="text"
                inputMode="numeric"
                required
                placeholder="e.g. 37221"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-[#8AAE45]"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="mb-2 block text-sm font-medium text-white/90"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-[#8AAE45]"
              />
            </div>

            <div>
              <label
                htmlFor="emailAddress"
                className="mb-2 block text-sm font-medium text-white/90"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-[#8AAE45]"
              />
            </div>

            <div className="md:col-span-2">
              <p className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-white/80">
                Notice: We will attempt contact one time only to avoid any
                unnecessary annoyance or repeated outreach.
              </p>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:scale-[1.02]"
              >
                Request More Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}