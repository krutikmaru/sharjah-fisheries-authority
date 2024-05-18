import Image from "next/image";

function Footer() {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <Image
                src="/images/logo.png"
                alt="Logo image"
                width={120}
                height={30}
                className="inline-block"
              />
            </div>
            <div className="mb-6 md:mb-8">
              <div>
                <p className="mb-1 text-sm font-semibold">Address:</p>
                <p className="mb-5 text-sm md:mb-6">
                  Level 1, 12 Sample St, Sydney NSW 2000
                </p>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold">Contact:</p>
                <p className="flex flex-col text-sm underline decoration-black underline-offset-1 md:mb-6">
                  <a
                    href="tel:1800 123 4567"
                    className="focus-visible:outline-none"
                  >
                    1800 123 4567
                  </a>
                  <a
                    href="mailto:info@relume.io"
                    className="focus-visible:outline-none"
                  >
                    info@relume.io
                  </a>
                </p>
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3 gap-y-0">
              <a href="#" className="focus-visible:outline-none">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="size-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Add SVG path */}
                </svg>
              </a>
              {/* Add more SVG icons */}
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>{/* Add list items for links */}</ul>
            <ul>{/* Add list items for links */}</ul>
          </div>
        </div>
        <div className="h-px w-full bg-black"></div>
        <div className="flex flex-col-reverse items-start justify-between pt-6 text-sm md:flex-row md:items-center md:pt-8">
          <p className="mt-8 md:mt-0">© 2024 Relume. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#" className="focus-visible:outline-none">
                Privacy Policy
              </a>
            </li>
            <li className="underline">
              <a href="#" className="focus-visible:outline-none">
                Terms of Service
              </a>
            </li>
            <li className="underline">
              <a href="#" className="focus-visible:outline-none">
                Cookies Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
