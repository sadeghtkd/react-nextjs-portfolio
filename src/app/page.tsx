import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sadegh Ghanbari Shohani - Portfolio</title>
        <meta name="description" content="Portfolio of Sadegh Ghanbari Shohani" />
      </Head>
      
      <main className="p-6">
        <section className="flex flex-col items-center md:flex-row md:items-start gap-8">
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <Image
              src="/images/green_profile.jpg"
              alt="Sadegh Ghanbari Shohani"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold">Welcome to My Portfolio</h2>
            <p className="mt-2">Experienced AI Product Manager with a strong background in Android development, software engineering, and web development.</p>
          </div>
        </section>
      </main>
    </div>
  );
}