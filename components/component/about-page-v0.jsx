/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/hhswF8OlT31
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import globalData from "@/app/data";

export function AboutPageV0() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {globalData?.aboutPageSections.map((section, index) => (
          <section key={index} className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
              <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                <div>
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    {section?.aboutSectionBadgeText}
                  </div>
                  <h1 className="mt-2 lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    {section?.aboutSectionTitle}
                  </h1>
                  {section?.aboutSectionDescriptions &&
                    section?.aboutSectionDescriptions.map((desc) => (
                      <p
                        key={desc}
                        className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-2"
                      >
                        {desc}
                      </p>
                    ))}
                </div>
                <img
                  alt="Raichur Hardware Store"
                  className="rounded-lg"
                  height="400"
                  src={section?.aboutSectionImageUrl}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
            </div>
          </section>
        ))}
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Raichur Hardware. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href={`${globalData?.termsOfService}`}
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href={`${globalData?.privacy}`}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function HammerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
      <path d="m18 15 4-4" />
      <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
    </svg>
  );
}
