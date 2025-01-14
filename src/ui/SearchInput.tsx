import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

export default function SearchInput() {
    return (
        <form className={`flex items-center justify-center w-full max-w-3xl mx-auto ${montserrat.className}`}>
            <div className="relative flex items-center w-full">
                <input
                    type="text"
                    placeholder="Search your task here..."
                    className="w-full h-14 px-6 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg shadow-lg focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 transition-all duration-200"
                />
                <button
                    type="submit"
                    className="absolute right-3 px-6 h-10 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                    
                    <span>Search</span>
                </button>
            </div>
        </form>
    );
}