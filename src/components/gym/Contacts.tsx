import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useReveal } from "./NavbarFooter";

export function Contacts() {
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
