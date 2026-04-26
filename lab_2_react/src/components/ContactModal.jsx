import { useState, useEffect } from 'react';

function ContactModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasBeenClosed, setHasBeenClosed] = useState(false);

    useEffect(() => {
        // Перевіряємо, чи вже закривали модалку під час цієї сесії
        const modalClosed = sessionStorage.getItem('modalClosed');
        if (!modalClosed) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 60000); // 1 хвилина = 60000 мс
            
            return () => clearTimeout(timer);
        }
    }, []);

    const closeModal = () => {
        setIsOpen(false);
        sessionStorage.setItem('modalClosed', 'true');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 relative">
                <button 
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                >
                    &times;
                </button>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Зворотній зв'язок</h3>
                
                <form 
                    action="https://formspree.io/f/meepvver" 
                    method="POST"
                    className="space-y-4"
                >
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Ім'я" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Номер телефону" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <textarea 
                        name="message" 
                        placeholder="Ваше повідомлення" 
                        required
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    ></textarea>
                    <button 
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        Відправити
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactModal;