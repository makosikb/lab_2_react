function Experience() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 mb-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
      <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-orange-500 pl-4 mb-4">Досвід роботи</h2>
      <ul className="space-y-4">
        <li className="p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
          <strong className="text-slate-800 block mb-1">Junior Data Analyst</strong>
          <span className="text-gray-600">Збір та чистка даних, створення автоматизованих звітів.</span>
        </li>
        <li className="p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
          <strong className="text-slate-800 block mb-1">Freelance Analyst</strong>
          <span className="text-gray-600">Проектування інтерактивних дашбордів для бізнес-показників.</span>
        </li>
      </ul>
    </section>
  );
}
export default Experience;