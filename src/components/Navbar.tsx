import { formatDate, getDayOfWeek } from "@/utils/dateUtils";
import Image from "next/image";

export default function Navbar() {
    const currentDate = new Date();

    const dayOfWeek = getDayOfWeek(currentDate);
    const formattedDate = formatDate(currentDate);

    return (
        <div className="fixed top-0 h-[94px] left-0 right-0 z-50 bg-white shadow-md px-4 py-3 md:px-6 flex items-center justify-between">
            <h1 className="text-2xl md:text-4xl font-bold flex-shrink-0">
                <span className="text-red-500">Dash</span>board
            </h1>

            <div className="flex-1 hidden sm:flex justify-center">
                <div className="relative w-full max-w-sm">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 border rounded-lg bg-gray-50 pr-12 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        aria-label="Search"
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
                <Image
                    src="/notification.svg"
                    alt="Notifications"
                    width={42}
                    height={42}
                    className="cursor-pointer hover:scale-105 transition-transform"
                />
                <Image
                    src="/calendar.svg"
                    alt="Calendar"
                    width={42}
                    height={42}
                    className="cursor-pointer hover:scale-105 transition-transform"
                />
            </div>

            <div className="text-right hidden lg:block">
                <p className="text-gray-700">{dayOfWeek}</p>
                <p className="text-cyan-400 text-sm">{formattedDate}</p>
            </div>
        </div>
    );
}
