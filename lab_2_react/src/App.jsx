import Header from './components/Header';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './App.css'; // Переконайся, що стилі підключені

function App() {
  return (
    <div className="resume-container">
      <Header />
      <div className="resume-body">
        <aside className="left-column">
          <section>
            <h3>Contact</h3>
            <p>makosikb4@gmail.com</p>
            <p>Lviv, Ukraine</p>
          </section>
          <section>
            <h3>Education</h3>
            <p><strong>Університет</strong><br/>Спеціальність: Аналітика</p>
          </section>
          <section>
            <h3>Key Skills</h3>
            <ul>
              <li>Data Analysis</li>
              <li>SQL / Python</li>
              <li>Power BI</li>
            </ul>
          </section>
        </aside>
        
        <main className="right-column">
          <section>
            <h3>Objective</h3>
            <p>Прагну використовувати навички аналізу даних для оптимізації бізнес-процесів.</p>
          </section>
          <Experience />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;