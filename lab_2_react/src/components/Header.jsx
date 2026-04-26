function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-800 to-blue-900 text-white text-center py-16 px-4 border-b-4 border-orange-500 shadow-xl mb-8">
      <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-3 hover:scale-105 transition-transform duration-300">
        Bogdan Makovskyi
      </h1>
      <p className="text-xl md:text-2xl opacity-90 hover:opacity-100 transition-opacity duration-300">
        Data Analyst | Спеціаліст із візуалізації та обробки даних
      </p>
    </header>
  );
}
export default Header;