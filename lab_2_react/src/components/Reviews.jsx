import { useEffect, useState } from 'react';

function Reviews() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const variant = 14; // Твій номер варіанту

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
            .then(response => response.json())
            .then(data => {
                setComments(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Помилка:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-orange-500 pl-4 mb-4">
                    Відгуки роботодавців
                </h2>
                <p className="text-gray-500 text-center py-8">Завантаження відгуків...</p>
            </section>
        );
    }

    return (
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-orange-500 pl-4 mb-4">
                Відгуки роботодавців
            </h2>
            {comments.length === 0 ? (
                <p className="text-gray-500">Немає відгуків</p>
            ) : (
                <div className="space-y-4">
                    {comments.map(comment => (
                        <div key={comment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-2">
                                <strong className="text-slate-800">{comment.name}</strong>
                                <span className="text-sm text-gray-500">{comment.email}</span>
                            </div>
                            <p className="text-gray-600">{comment.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Reviews;