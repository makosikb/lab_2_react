import SystemInfo from './SystemInfo';

function Footer() {
    return (
        <footer className="text-center py-8 bg-slate-800 text-gray-300 mt-8">
            <div className="max-w-4xl mx-auto px-4">
                <hr className="border-gray-600 mb-6" />
                <p>
                    Контакти:{' '}
                    <a 
                        href="mailto:makosikb4@gmail.com" 
                        className="text-orange-400 hover:text-orange-300 hover:underline transition-all duration-200"
                    >
                        makosikb4@gmail.com
                    </a>
                </p>
                <SystemInfo />
            </div>
        </footer>
    );
}

export default Footer;