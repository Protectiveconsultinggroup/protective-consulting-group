"use client";

import Link from "next/link";
import { useState } from "react";

const cplClassDates = [
  {
    label: "10/24",
    value: "Saturday, October 24, 2026",
  },
  {
    label: "11/07",
    value: "Saturday, November 7, 2026",
  },
  {
    label: "11/21",
    value: "Saturday, November 21, 2026",
  },
  {
    label: "12/05",
    value: "Saturday, December 5, 2026",
  },
  {
    label: "12/19",
    value: "Saturday, December 19, 2026",
  },
  {
    label: "01/02",
    value: "Saturday, January 2, 2027",
  },
  {
    label: "01/16",
    value: "Saturday, January 16, 2027",
  },
  {
    label: "01/30",
    value: "Saturday, January 30, 2027",
  },
  {
    label: "02/13",
    value: "Saturday, February 13, 2027",
  },
  {
    label: "02/27",
    value: "Saturday, February 27, 2027",
  },
  {
    label: "03/13",
    value: "Saturday, March 13, 2027",
  },
  {
    label: "03/27",
    value: "Saturday, March 27, 2027",
  },
];

export default function FirearmsTrainingPage() {
  const [trainingInterest, setTrainingInterest] = useState("");

  const isCplCourse = trainingInterest === "Michigan CPL Course";

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 px-5 py-14 text-white sm:px-6 md:py-20">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/firearms-training.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/60" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* BACK TO HOME */}
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-[#8AAE45]"
          >
            ← Back to Home
          </Link>
        </div>

        {/* INTRO */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#8AAE45] md:text-sm">
          Firearms Training
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[0.04em] text-white md:text-6xl">
          Build Confidence, Proficiency, And Discipline
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-white/90 md:text-lg">
          Professional firearms instruction focused on safety, responsible
          ownership, practical proficiency, and confident decision-making.
        </p>

        {/* TRAINING OPTIONS */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md">
            <h2 className="text-2xl font-medium text-white">
              Training Options
            </h2>

            <div className="mt-5 space-y-3 text-white/90">
              <p>Michigan CPL Course</p>
              <p>Private Firearms Instruction</p>
              <p>Marksmanship Training</p>
              <p>Home Defense Fundamentals</p>
              <p>General Firearms Guidance</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md">
            <h2 className="text-2xl font-medium text-white">
              Why Train With PCG?
            </h2>

            <div className="mt-5 space-y-3 text-white/90">
              <p>Veteran-owned and operated</p>

              <p>
                Instruction focused on safety, responsibility, confidence, and
                practical skill development
              </p>

              <p>
                Training options for new shooters as well as individuals
                looking to improve existing skills
              </p>

              <p>
                Private instruction available for students who prefer
                individualized training
              </p>
            </div>
          </div>
        </div>

        {/* CPL SCHEDULE */}
        <div className="mt-6 rounded-2xl border border-[#8AAE45]/40 bg-black/35 p-6 backdrop-blur-md">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8AAE45]">
            Michigan CPL Courses
          </p>

          <h2 className="mt-3 text-2xl font-medium text-white">
            Scheduled Every Other Saturday
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-white/80">
            Michigan CPL courses begin October 24, 2026. Select an available
            class date when submitting your training inquiry.
          </p>
        </div>

        {/* CONTACT FORM */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-md sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8AAE45]">
            Training Inquiry
          </p>

          <h2 className="mt-3 text-2xl font-medium text-white md:text-3xl">
            Tell Us What Training You&apos;re Interested In
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-white/80">
            Submit your information and PCG will follow up to confirm
            availability and next steps.
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

            {/* FULL NAME */}
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
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-[#8AAE45]"
              />
            </div>

            {/* TRAINING TYPE */}
            <div className="md:col-span-2">
              <label
                htmlFor="trainingInterest"
                className="mb-2 block text-sm font-medium text-white/90"
              >
                What Are You Interested In?
              </label>

              <select
                id="trainingInterest"
                name="trainingInterest"
                required
                value={trainingInterest}
                onChange={(event) =>
                  setTrainingInterest(event.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#8AAE45]"
              >
                <option value="" disabled>
                  Select a training option
                </option>

                <option value="Michigan CPL Course">
                  Michigan CPL Course
                </option>

                <option value="Private Firearms Lesson">
                  Private Firearms Lesson
                </option>

                <option value="Marksmanship Training">
                  Marksmanship Training
                </option>

                <option value="General Firearms Inquiry">
                  General Firearms Inquiry
                </option>
              </select>
            </div>

            {/* CPL DATE DROPDOWN */}
            {isCplCourse && (
              <div className="md:col-span-2">
                <label
                  htmlFor="classDate"
                  className="mb-2 block text-sm font-medium text-white/90"
                >
                  Select Your CPL Course Date
                </label>

                <select
                  id="classDate"
                  name="classDate"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-[#8AAE45]/50 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#8AAE45]"
                >
                  <option value="" disabled>
                    Select an available date
                  </option>

                  {cplClassDates.map((date) => (
                    <option key={date.value} value={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Your class date will be confirmed after your registration
                  request is received.
                </p>
              </div>
            )}

            {/* OTHER TRAINING */}
            {trainingInterest && !isCplCourse && (
              <div className="md:col-span-2">
                <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-4">
                  <p className="text-sm leading-6 text-white/75">
                    No date selection is required. PCG will contact you
                    directly to discuss your training needs and scheduling.
                  </p>
                </div>
              </div>
            )}

            {/* COMMUNICATION */}
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
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#8AAE45]"
              >
                <option value="" disabled>
                  Select one
                </option>

                <option value="phone">Phone Call</option>
                <option value="text">Text Message</option>
                <option value="email">Email</option>
              </select>
            </div>

            {/* ZIP */}
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
                placeholder="e.g. 49503"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-[#8AAE45]"
              />
            </div>

            {/* PHONE */}
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
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-[#8AAE45]"
              />
            </div>

            {/* EMAIL */}
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
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-[#8AAE45]"
              />
            </div>

            {/* MESSAGE */}
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white/90"
              >
                Additional Information
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Experience level, questions, training goals, or anything else you would like us to know."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/45 outline-none transition focus:border-[#8AAE45]"
              />
            </div>

            {/* SUBMIT */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-full bg-[#8AAE45] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#a3c85a] sm:w-auto"
              >
                Request Training Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}