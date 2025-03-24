import Head from "next/head";
import { FaTwitter, FaLinkedin, FaTelegram, FaPhone } from 'react-icons/fa';
export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact - Sadegh Ghanbari Shohani</title>
            </Head>

            <header className="p-6 bg-gray-800 text-white">
                <h1 className="text-3xl font-bold">Contact Me</h1>
            </header>

            <main className="p-4">
                <section>
                    <ul className="space-y-16">
                        <li className="flex items-center space-x-2">
                            <FaTwitter className="text-blue-500" />
                            <a href="https://x.com/ghanbari_88" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaLinkedin className="text-blue-700" />
                            <a href="https://www.linkedin.com/in/shohani" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaTelegram className="text-blue-400" />
                            <a href="https://ghanbari_88" target="_blank" rel="noopener noreferrer">Telegram</a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaPhone className="text-green-500" />
                            <span>+989157690095</span>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}