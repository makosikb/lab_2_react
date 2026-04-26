import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactModal from './components/ContactModal';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 transition-colors duration-300">
            <ThemeSwitcher />
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-8">
                <About />
                <Experience />
                <Skills />
                <Reviews />
            </main>
            <Footer />
            <ContactModal />
        </div>
    );
}

export default App;