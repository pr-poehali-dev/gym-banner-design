import Icon from "@/components/ui/icon";
import { useReveal } from "./NavbarFooter";

export function Programs() {
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

export function Pricing() {
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
