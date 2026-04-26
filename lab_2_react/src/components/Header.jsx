function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-900 via-slate-800 to-blue-900 text-white text-center py-16 px-4 border-b-4 border-orange-400 shadow-xl mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
      <h1 className="relative text-5xl md:text-6xl font-bold tracking-wide mb-3 hover:scale-105 transition-transform duration-300 drop-shadow-lg">
        Bogdan Makovskyi
      </h1>
      <p className="relative text-xl md:text-2xl opacity-90 hover:opacity-100 transition-opacity duration-300 mb-4">
        Data Analyst | Спеціаліст із візуалізації та обробки даних
      </p>
      <span className="relative inline-block bg-orange-500/80 text-white text-sm font-semibold px-4 py-1 rounded-full tracking-wider uppercase shadow">
        Відкрито онлайн
      </span>
    </header>
  );
}
export default Header;