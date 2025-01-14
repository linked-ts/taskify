'use client'

import { useState } from 'react';

export default function SettingsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleToggleNotification = () => {
        setIsNotificationEnabled(!isNotificationEnabled);
    };

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} flex flex-col items-center pt-12`}>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Settings</h1>

            <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
                <div className="space-y-4">
                    <div>
                        <label className="font-medium text-lg">Username</label>
                        <input
                            type="text"
                            className="w-full mt-2 px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label className="font-medium text-lg">Email</label>
                        <input
                            type="email"
                            className="w-full mt-2 px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            placeholder="Enter your email"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-lg">Email Notifications</span>
                        <input
                            type="checkbox"
                            checked={isNotificationEnabled}
                            onChange={handleToggleNotification}
                            className="toggle-checkbox"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-lg">SMS Notifications</span>
                        <input
                            type="checkbox"
                            checked={isNotificationEnabled}
                            onChange={handleToggleNotification}
                            className="toggle-checkbox"
                        />
                    </div>
                </div>
            </div>
            <button
                onClick={toggleModal}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
                Save Changes
            </button>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-96 max-w-full">
                        <h2 className="text-xl font-semibold mb-4">Confirm Changes</h2>
                        <p className="text-gray-700 mb-4">
                            Are you sure you want to save the changes to your settings? These changes will be applied immediately.
                        </p>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={toggleModal}
                                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={toggleModal}
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <footer className="mt-8 bg-white p-6 w-full text-center">
                <p className="text-sm text-gray-600">© 2025 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}
