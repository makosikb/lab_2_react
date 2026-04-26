function Skills() {
  const skills = [
    "Робота з SQL та базами даних",
    "Володіння Excel на просунутому рівні",
    "Основи мови Python для аналізу даних",
    "Візуалізація в Tableau або Power BI"
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 mb-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
      <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-orange-500 pl-4 mb-4">Навички</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
export default Skills;