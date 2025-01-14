'use client'

import { useState } from 'react';

export default function HelpPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Welcome to the Help Page</h1>

            <section className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-medium text-lg">How do I reset my password?</h3>
                        <p className="text-gray-700">
                            To reset your password, go to the login page, click on "Forgot Password", and follow the instructions sent to your email.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">How can I contact customer support?</h3>
                        <p className="text-gray-700">
                            You can contact our customer support via the "Support" page or by sending an email to support@example.com.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg">Where can I find tutorials?</h3>
                        <p className="text-gray-700">
                            We provide tutorials on our blog and help section. You can also find video tutorials on our YouTube channel.
                        </p>
                    </div>
                </div>
            </section>

            <button
                onClick={toggleModal}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
                Open More Help
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-96 max-w-full">
                        <h2 className="text-xl font-semibold mb-4">Need More Help?</h2>
                        <p className="text-gray-700 mb-4">
                            If you're still having trouble or need more detailed assistance, don't hesitate to contact us.
                            We're here to help!
                        </p>
                        <button
                            onClick={toggleModal}
                            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <footer className="mt-8 bg-white p-6 w-full text-center">
                <p className="text-sm text-gray-600">© 2025 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}
