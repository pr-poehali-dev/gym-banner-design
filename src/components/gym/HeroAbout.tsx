import Icon from "@/components/ui/icon";
import { useReveal } from "./NavbarFooter";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/9d2b856b-d137-4409-946c-57127fc8903a/files/7129ebd6-601e-4280-9f28-be381acc242d.jpg";

export function Hero() {
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

export function About() {
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
