import { useState, useEffect } from "react";
import { Svgs } from "./components/common/Svgs.jsx";
import Rest from "./Rest.jsx";
const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <div>
      <main id="home" className="min-h-screen bg-slate-950 text-white">
        <header className="border-b border-white/10">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
          >
            <a
              href="#home"
              className="flex items-center gap-2 font-semibold tracking-tight"
            >
              <span
                aria-hidden="true"
                className="grid size-8 place-items-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950"
              >
                N
              </span>
              <span>Navbar</span>
            </a>
            <div className="hidden items-center gap-8 md:flex">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="hidden rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 md:inline-flex"
            >
              Get in touch
            </a>
            <button
              type="button"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-md p-2 text-slate-200 hover:bg-white/10 md:hidden"
            >
              <Svgs name={isMenuOpen ? "close" : "menu"} className="size-6" />
            </button>
          </nav>
          {isMenuOpen && (
            <div
              id="mobile-navigation"
              className="border-t border-white/10 px-6 py-4 md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1">
                {LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-md px-3 py-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 rounded-full bg-cyan-400 px-4 py-2 text-center text-sm font-semibold text-slate-950"
                >
                  Get in touch
                </a>
              </div>
            </div>
          )}
        </header>
      </main>
      <Rest></Rest>
    </div>
  );
}

export default App;
