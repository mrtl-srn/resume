// filepath: /cv-website/cv-website/src/components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="contact">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <form className="mt-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                    <textarea id="message" className="mt-1 block w-full border border-gray-300 rounded-md p-2" rows={4} required></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
            </form>
        </section>
    );
};

export default Contact;