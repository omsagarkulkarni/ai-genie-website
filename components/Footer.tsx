import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/20 bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <div className="text-lg font-semibold tracking-tight">AI Genie</div>
          <div className="text-sm text-dark-gray/70">
            Placeholder email address
          </div>
          <div className="text-xs text-dark-gray/50">
            © {new Date().getFullYear()} AI Genie. All rights reserved.
          </div>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-8 text-sm md:grid-cols-3">
          <div className="space-y-3">
            <div className="font-medium text-dark-gray">Navigate</div>
            <ul className="space-y-2 text-dark-gray/70">
              <li>
                <Link href="/" className="hover:text-dark-gray">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-dark-gray">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-dark-gray">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-dark-gray">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-dark-gray">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="font-medium text-dark-gray">Social</div>
            <ul className="space-y-2 text-dark-gray/70">
              <li>LinkedIn</li>
              <li>Twitter X</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="font-medium text-dark-gray">Legal</div>
            <ul className="space-y-2 text-dark-gray/70">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}


