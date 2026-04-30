import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Главная", href: "#hero" },
    { label: "О нас", href: "#about" },
    { label: "Программы", href: "#programs" },
    { label: "Тарифы", href: "#pricing" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-gym-green/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gym-green rounded flex items-center justify-center">
            <span className="font-oswald font-bold text-white text-lg">P</span>
          </div>
          <span className="font-oswald font-bold text-white text-2xl tracking-widest">
            POWER<span className="text-gym-green">GYM</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contacts"
          className="hidden md:block btn-gym bg-gym-green text-white px-6 py-2 text-sm font-oswald font-semibold tracking-widest hover:bg-gym-green-bright transition-colors"
        >
          Записаться
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={28} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gym-green/20 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-base py-2"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contacts" className="btn-gym bg-gym-green text-white px-6 py-3 text-sm text-center font-oswald tracking-widest">
            Записаться
          </a>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gym-green rounded flex items-center justify-center">
            <span className="font-oswald font-bold text-white text-sm">P</span>
          </div>
          <span className="font-oswald font-bold text-white text-xl tracking-widest">
            POWER<span className="text-gym-green">GYM</span>
          </span>
        </div>
        <div className="font-roboto text-gray-600 text-sm">
          © 2024 POWER GYM. Все права защищены.
        </div>
        <div className="flex gap-6">
          {["Главная", "Тарифы", "Контакты"].map((l) => (
            <a key={l} href="#" className="font-oswald text-gray-500 text-xs tracking-wider uppercase hover:text-gym-green transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
