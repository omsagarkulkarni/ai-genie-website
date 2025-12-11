export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16 lg:py-20">
      <div className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-2xl font-semibold text-dark-gray md:text-3xl">
            Contact
          </h1>
        </header>

        <section className="space-y-6 rounded-soft-xl bg-white p-6 shadow-sm md:p-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-dark-gray md:text-xl">
              Contact Form
            </h2>
            <form className="space-y-4 text-sm">
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-dark-gray/80"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-full border border-dark-gray/15 bg-light-gray px-4 py-2.5 text-sm text-dark-gray outline-none ring-0 placeholder:text-dark-gray/40 focus:border-primary/60 focus:bg-white focus:ring-1 focus:ring-primary/50"
                  placeholder="Email"
                  disabled
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-dark-gray/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-3xl border border-dark-gray/15 bg-light-gray px-4 py-2.5 text-sm text-dark-gray outline-none ring-0 placeholder:text-dark-gray/40 focus:border-primary/60 focus:bg-white focus:ring-1 focus:ring-primary/50"
                  placeholder="Message"
                  disabled
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-primary/90"
                disabled
              >
                Submit
              </button>
            </form>
            <p className="text-xs text-dark-gray/50">Contact Email: Placeholder</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-dark-gray md:text-xl">
              Social Links
            </h2>
            <ul className="space-y-1.5 text-sm text-dark-gray/80">
              <li>LinkedIn</li>
              <li>Twitter X</li>
              <li>GitHub</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}


