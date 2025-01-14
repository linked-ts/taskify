'use client'
import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface SidebarProps {
  userName: string;
  userEmail: string;
}

const Sidebar: FC<SidebarProps> = ({ userName, userEmail }) => {

  return (
    <>
      <aside className={`
        fixed left-0 top-0 h-full w-[240px] bg-[#FF4C60] text-white flex flex-col
        transform transition-transform duration-300 ease-in-out z-40ы
        md:translate-x-0
        md:top-[95px] md:h-[calc(100vh-89px)]
      `}>
        <div className="flex flex-col items-center pt-8 pb-6">
          <div className="w-20 h-20 bg-white rounded-full overflow-hidden mb-4">
            <div className="w-full h-full bg-gray-200" />
          </div>
          <h2 className="text-lg font-medium">{userName}</h2>
          <p className="text-sm opacity-80">{userEmail}</p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-1 px-4">
            <li>
              <Link 
                href="/dashboard" 
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white bg-opacity-10"

              >
                <Image src="/dashboard.svg" width={24} height={24} alt="Dashboard" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                href="/vital-tasks" 
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10"

              >
                <Image src="/viral_task.svg" width={11} height={11} alt="Vital Task" />
                Vital Task
              </Link>
            </li>
            <li>
              <Link 
                href="/my-task" 
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10"

              >
                <Image src="/my task.svg" width={24} height={24} alt="My Task" />
                My Task
              </Link>
            </li>
            <li>
              <Link 
                href="/task-categories" 
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10"
 
              >
                <Image src="/taskCategories.svg" width={24} height={24} alt="Task Categories" />
                Task Categories
              </Link>
            </li>
            <li>
              <Link 
                href="/settings" 
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10"
              >
                <Image src="/settings.svg" width={24} height={24} alt="Settings" />
                Settings
              </Link>
            </li>
            <li>
              <Link 
                href="/help" 
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10"
              >
                <Image src="/help.svg" width={24} height={24} alt="Help" />
                Help
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg hover:bg-white hover:bg-opacity-10">
            <Image src="/logout.svg" width={24} height={24} alt="Logout" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;