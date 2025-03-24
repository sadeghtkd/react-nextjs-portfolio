import Head from "next/head";

export default function Projects() {
    return (
      <div>
        <Head>
          <title>Projects - Sadegh Ghanbari Shohani</title>
        </Head>
        
        <header className="p-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold">Projects</h1>
        </header>
        
        <main className="p-6">
          <section>
            <h2 className="text-xl font-semibold">Completed Projects</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>AI Chatbot for Customer Ticket Responses</li>
              <li>AI-Based Ticket Categorization System</li>
              <li>Stock Market Web Services (Oghab Bourse App)</li>
              <li>Cryptocurrency Market Web Services</li>
              <li>TeleMember Web Services</li>
              <li>City Map Services for Mashhad</li>
              <li>Various Mobile Applications for Windows, Java, and Android</li>
              <li>Multiple Web-Based Projects including CMS, eCommerce, and Data Management</li>
              <li>Windows-based Applications including Virtual Radio, Accounting Software, and GPS Tracking</li>
            </ul>
          </section>
        </main>
      </div>
    );
  }