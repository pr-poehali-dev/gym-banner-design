import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/9d2b856b-d137-4409-946c-57127fc8903a/files/7129ebd6-601e-4280-9f28-be381acc242d.jpg";

function useReveal() {
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

function Navbar() {
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

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gym-dark"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gym-green/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gym-red/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-8 items-center pt-24 pb-20">
        <div>
          <div className="inline-flex items-center gap-2 border border-gym-green/40 bg-gym-green/10 px-4 py-2 mb-6 animate-slide-up">
            <div className="w-2 h-2 bg-gym-green rounded-full animate-pulse" />
            <span className="font-roboto text-gym-green text-sm tracking-widest uppercase">
              Лучший зал города
            </span>
          </div>

          <h1 className="font-oswald text-6xl md:text-8xl font-bold leading-none mb-4 animate-slide-up delay-100">
            <span className="text-white block">ТВОЁ</span>
            <span className="text-gradient-green block">ТЕЛО —</span>
            <span className="text-white block">ТВОЯ</span>
            <span className="text-gradient-red block">КРЕПОСТЬ</span>
          </h1>

          <p className="font-roboto text-gray-400 text-lg leading-relaxed mb-8 max-w-md animate-slide-up delay-200">
            Профессиональное оборудование, опытные тренеры и атмосфера, которая заставит тебя выложиться на 100%
          </p>

          <div className="flex flex-wrap gap-4 mb-10 animate-slide-up delay-300">
            <a
              href="#pricing"
              className="btn-gym bg-gym-green text-white px-8 py-4 text-base font-oswald tracking-wider hover:bg-gym-green-bright transition-all hover:scale-105 animate-pulse-glow"
            >
              Выбрать абонемент
            </a>
            <a
              href="#programs"
              className="btn-gym border border-gym-green/50 text-gym-green px-8 py-4 text-base font-oswald tracking-wider hover:bg-gym-green/10 transition-all hover:border-gym-green"
            >
              Программы
            </a>
          </div>

          <div className="flex gap-8 animate-slide-up delay-400">
            {[
              { num: "500+", label: "Клиентов" },
              { num: "15", label: "Тренеров" },
              { num: "3", label: "Зала" },
            ].map((s) => (
              <div key={s.num}>
                <div className="font-oswald text-3xl font-bold text-gym-green">{s.num}</div>
                <div className="font-roboto text-gray-500 text-sm uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center items-end">
          <div className="absolute inset-0 rounded-full bg-gym-green/5 blur-[60px]" />
          <div className="relative animate-float">
            <div
              className="absolute -inset-4 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.3) 0%, transparent 50%, rgba(220,38,38,0.3) 100%)",
                filter: "blur(30px)",
              }}
            />
            <img
              src={HERO_IMAGE}
              alt="Накачанный атлет"
              className="relative w-full max-w-md md:max-w-lg object-cover rounded-2xl"
              style={{
                filter: "contrast(1.1) saturate(1.2)",
                maskImage: "linear-gradient(to top, transparent 0%, black 20%)",
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%)",
              }}
            />
            <div className="absolute top-8 -left-6 bg-gym-red border border-gym-red-bright px-4 py-2 rounded animate-scale-in delay-500">
              <div className="font-oswald text-white font-bold text-sm">СКИДКА 30%</div>
              <div className="font-roboto text-red-200 text-xs">на первый месяц</div>
            </div>
            <div className="absolute bottom-16 -right-6 bg-gym-green/20 border border-gym-green px-4 py-2 rounded animate-scale-in delay-600">
              <div className="font-oswald text-gym-green font-bold text-sm">БЕСПЛАТНО</div>
              <div className="font-roboto text-green-300 text-xs">первое занятие</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gym-red py-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            "🔥 Абонемент от 1990 руб/мес",
            "⚡ Первое занятие БЕСПЛАТНО",
            "💪 Тренер в подарок",
            "📍 2 минуты от метро",
          ].map((item) => (
            <span key={item} className="font-oswald text-white text-sm tracking-wider">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useReveal();
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gym-green/5 rounded-full blur-[120px]" />
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-oswald text-gym-green text-sm tracking-[0.3em] uppercase">О нас</span>
          <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white mt-2">
            МЫ — ЭТО <span className="text-gradient-green">РЕЗУЛЬТАТ</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "Dumbbell",
              title: "Профи оборудование",
              desc: "Более 200 единиц современного оборудования от мировых брендов. Кардиозона, свободные веса, тренажёрный зал.",
              color: "green",
            },
            {
              icon: "Users",
              title: "Опытные тренеры",
              desc: "15 сертифицированных тренеров с опытом 5+ лет. Персональные программы под любую цель.",
              color: "red",
            },
            {
              icon: "Trophy",
              title: "Реальный результат",
              desc: "Более 500 клиентов уже достигли своих целей. Гарантируем результат или вернём деньги.",
              color: "green",
            },
          ].map((card) => (
            <div key={card.title} className="border-gradient p-8 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${
                card.color === "green" ? "bg-gym-green/20 glow-green" : "bg-gym-red/20 glow-red"
              }`}>
                <Icon name={card.icon} size={28} className={card.color === "green" ? "text-gym-green" : "text-gym-red"} />
              </div>
              <h3 className="font-oswald text-xl text-white font-bold mb-3">{card.title}</h3>
              <p className="font-roboto text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const ref = useReveal();
  const programs = [
    { emoji: "🏋️", name: "Силовые тренировки", level: "Все уровни", sessions: "3 раза/нед", desc: "Базовые и изолирующие упражнения для роста мышечной массы" },
    { emoji: "🔥", name: "Кроссфит", level: "Средний+", sessions: "5 раз/нед", desc: "Высокоинтенсивные тренировки для выносливости и силы" },
    { emoji: "⚡", name: "HIIT кардио", level: "Любой", sessions: "2-4 раза/нед", desc: "Интервальные тренировки для сжигания жира и рельефа" },
    { emoji: "🥊", name: "Бокс и единоборства", level: "Начинающий+", sessions: "3 раза/нед", desc: "Техника бокса, самооборона и работа на снарядах" },
    { emoji: "🧘", name: "Функциональный тренинг", level: "Все уровни", sessions: "3 раза/нед", desc: "Упражнения с весом тела и TRX для баланса и координации" },
    { emoji: "🏃", name: "Беговые программы", level: "Любой", sessions: "Ежедневно", desc: "Программы подготовки к забегам от 5 до 42 км" },
  ];

  return (
    <section id="programs" className="py-24 bg-gym-dark relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gym-red/5 rounded-full blur-[100px]" />
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-oswald text-gym-green text-sm tracking-[0.3em] uppercase">Тренировки</span>
          <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white mt-2">
            ПРОГРАММЫ <span className="text-gradient-red">ТРЕНИРОВОК</span>
          </h2>
          <p className="font-roboto text-gray-400 mt-4 max-w-xl mx-auto">
            Выбери программу под свою цель — мы поможем составить индивидуальный план
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p) => (
            <div
              key={p.name}
              className="group bg-gym-gray border border-white/5 rounded-xl p-6 hover:border-gym-green/40 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="text-4xl mb-4">{p.emoji}</div>
              <h3 className="font-oswald text-xl text-white font-bold mb-2 group-hover:text-gym-green transition-colors">{p.name}</h3>
              <p className="font-roboto text-gray-500 text-sm mb-4">{p.desc}</p>
              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <span className="font-roboto text-xs text-gym-green bg-gym-green/10 px-3 py-1 rounded">{p.level}</span>
                <span className="font-roboto text-xs text-gray-500">{p.sessions}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const ref = useReveal();
  const plans = [
    {
      name: "СТАРТ",
      subtitle: "Для начинающих",
      price: "1 990",
      color: "gray",
      popular: false,
      features: ["Тренажёрный зал", "Раздевалка и душ", "Безлимитные посещения", "Консультация тренера"],
      notIncluded: ["Групповые занятия", "Персональный тренер", "Спортивное питание -10%"],
    },
    {
      name: "ПРОФИ",
      subtitle: "Самый популярный",
      price: "3 490",
      color: "green",
      popular: true,
      features: ["Тренажёрный зал", "Раздевалка и душ", "Безлимитные посещения", "Групповые занятия (все виды)", "1 персональная тренировка", "Спортивное питание -10%"],
      notIncluded: ["Персональный тренер"],
    },
    {
      name: "ЭЛИТА",
      subtitle: "Максимум возможностей",
      price: "6 990",
      color: "red",
      popular: false,
      features: ["Всё из ПРОФИ", "4 персональных тренировки", "Индивидуальный план питания", "Спортивное питание -20%", "VIP раздевалка", "Гость 2 раза/мес"],
      notIncluded: [],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gym-green/3 rounded-full blur-[150px]" />
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-oswald text-gym-green text-sm tracking-[0.3em] uppercase">Цены</span>
          <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white mt-2">
            ТАРИФНЫЕ <span className="text-gradient-fire">ПЛАНЫ</span>
          </h2>
          <p className="font-roboto text-gray-400 mt-4">
            При оплате за 3 месяца — скидка <span className="text-gym-green font-bold">15%</span>
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`price-card relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-b from-gym-green/20 to-gym-green/5 border-2 border-gym-green glow-green"
                  : plan.color === "red"
                  ? "bg-gradient-to-b from-gym-red/10 to-transparent border border-gym-red/30"
                  : "bg-gym-gray border border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gym-green text-white font-oswald text-xs tracking-widest px-6 py-1 rounded-full">
                  ХИТ ПРОДАЖ
                </div>
              )}
              <div className="mb-6">
                <div className={`font-oswald text-2xl font-bold mb-1 ${
                  plan.popular ? "text-gym-green" : plan.color === "red" ? "text-gym-red" : "text-white"
                }`}>
                  {plan.name}
                </div>
                <div className="font-roboto text-gray-400 text-sm">{plan.subtitle}</div>
              </div>
              <div className="mb-8">
                <div className="flex items-end gap-2">
                  <span className="font-oswald text-5xl font-bold text-white">{plan.price}</span>
                  <span className="font-roboto text-gray-400 mb-2">руб/мес</span>
                </div>
              </div>
              <div className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-gym-green flex-shrink-0" />
                    <span className="font-roboto text-gray-200 text-sm">{f}</span>
                  </div>
                ))}
                {plan.notIncluded.map((f) => (
                  <div key={f} className="flex items-center gap-3 opacity-40">
                    <Icon name="X" size={16} className="text-gray-500 flex-shrink-0" />
                    <span className="font-roboto text-gray-500 text-sm line-through">{f}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contacts"
                className={`btn-gym w-full py-4 text-center font-oswald text-sm tracking-widest transition-all ${
                  plan.popular
                    ? "bg-gym-green text-white hover:bg-gym-green-bright"
                    : plan.color === "red"
                    ? "bg-gym-red text-white hover:bg-gym-red-bright"
                    : "border border-white/20 text-white hover:border-white/50 hover:bg-white/5"
                }`}
              >
                Выбрать план
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 border border-gym-red/30 bg-gym-red/5 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-oswald text-xl text-white font-bold">🔥 ГОДОВОЙ АБОНЕМЕНТ</div>
            <div className="font-roboto text-gray-400 text-sm mt-1">Любой тариф на 12 месяцев — скидка 30%. Экономия до 25 000 руб!</div>
          </div>
          <a href="#contacts" className="btn-gym bg-gym-red text-white px-8 py-3 font-oswald text-sm tracking-wider whitespace-nowrap hover:bg-gym-red-bright transition-colors">
            Узнать подробнее
          </a>
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
  }

  return (
    <section id="contacts" className="py-24 bg-gym-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gym-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gym-red/5 rounded-full blur-[100px]" />
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-oswald text-gym-green text-sm tracking-[0.3em] uppercase">Контакты</span>
          <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white mt-2">
            НАЧНИ <span className="text-gradient-green">СЕГОДНЯ</span>
          </h2>
          <p className="font-roboto text-gray-400 mt-4">Оставь заявку — перезвоним за 5 минут</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-oswald text-2xl text-white font-bold mb-6">ИНФОРМАЦИЯ</h3>
              <div className="space-y-5">
                {[
                  { icon: "MapPin", title: "Адрес", lines: ["ул. Спортивная, 42, корп. 1", "2 мин от метро Спортивная"], color: "green" },
                  { icon: "Phone", title: "Телефон", lines: ["+7 (495) 123-45-67", "+7 (495) 765-43-21"], color: "red" },
                  { icon: "Clock", title: "Режим работы", lines: ["Пн–Пт: 07:00 – 23:00", "Сб–Вс: 08:00 – 22:00"], color: "green" },
                  { icon: "Mail", title: "Email", lines: ["info@powergym.ru", "trainer@powergym.ru"], color: "red" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.color === "green" ? "bg-gym-green/15 border border-gym-green/30" : "bg-gym-red/15 border border-gym-red/30"
                    }`}>
                      <Icon name={item.icon} size={20} className={item.color === "green" ? "text-gym-green" : "text-gym-red"} />
                    </div>
                    <div>
                      <div className="font-oswald text-gray-400 text-xs tracking-widest uppercase mb-1">{item.title}</div>
                      {item.lines.map((l) => (
                        <div key={l} className="font-roboto text-white text-sm">{l}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-oswald text-gray-400 text-xs tracking-widest uppercase mb-4">Мы в соцсетях</div>
              <div className="flex gap-3">
                {[
                  { icon: "MessageCircle", label: "VK", color: "green" },
                  { icon: "Send", label: "TG", color: "red" },
                  { icon: "Instagram", label: "IG", color: "green" },
                ].map((s) => (
                  <button
                    key={s.label}
                    className={`w-12 h-12 rounded-lg border flex items-center justify-center transition-all hover:scale-110 ${
                      s.color === "green" ? "border-gym-green/30 bg-gym-green/10 hover:bg-gym-green/20 text-gym-green" : "border-gym-red/30 bg-gym-red/10 hover:bg-gym-red/20 text-gym-red"
                    }`}
                  >
                    <Icon name={s.icon} size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-gradient rounded-2xl p-8">
            <h3 className="font-oswald text-2xl text-white font-bold mb-6">
              БЕСПЛАТНАЯ <span className="text-gym-green">КОНСУЛЬТАЦИЯ</span>
            </h3>
            {sent ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">💪</div>
                <div className="font-oswald text-2xl text-gym-green font-bold mb-2">ОТЛИЧНО!</div>
                <div className="font-roboto text-gray-300 text-sm">Мы получили вашу заявку и перезвоним в течение 5 минут</div>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 btn-gym border border-gym-green/40 text-gym-green px-6 py-2 text-sm font-oswald tracking-wider hover:bg-gym-green/10 transition-colors"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-oswald text-xs text-gray-400 tracking-widest uppercase block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full bg-white/5 border border-white/10 text-white font-roboto px-4 py-3 rounded-lg focus:outline-none focus:border-gym-green transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label className="font-oswald text-xs text-gray-400 tracking-widest uppercase block mb-2">Телефон</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-white/5 border border-white/10 text-white font-roboto px-4 py-3 rounded-lg focus:outline-none focus:border-gym-green transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label className="font-oswald text-xs text-gray-400 tracking-widest uppercase block mb-2">Цель тренировок</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Похудеть, набрать массу, улучшить выносливость..."
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 text-white font-roboto px-4 py-3 rounded-lg focus:outline-none focus:border-gym-green transition-colors placeholder:text-gray-600 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gym w-full bg-gym-green text-white py-4 font-oswald text-sm tracking-widest hover:bg-gym-green-bright transition-all hover:scale-[1.02] animate-pulse-glow"
                >
                  ЗАПИСАТЬСЯ БЕСПЛАТНО
                </button>
                <p className="font-roboto text-gray-600 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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

const Index = () => {
  return (
    <div className="min-h-screen bg-gym-dark">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Pricing />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
