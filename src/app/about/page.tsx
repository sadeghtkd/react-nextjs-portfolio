import Head from "next/head";

export default function About() {
    return (
      <div>
        <Head>
          <title>About Me - Sadegh Ghanbari Shohani</title>
        </Head>
        
        <header className="p-6 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold">About Me</h1>
        </header>
        
        <main className="p-6">
          <section>
            <p className="mt-2">
              I am <strong>Sadegh Ghanbari Shohani</strong>, an experienced <strong>AI Product Manager</strong> with a deep background in software development, Android engineering, and web technologies. Over the years, I have honed my skills in <strong>machine learning, AI-driven product management, and software architecture</strong>, bringing innovative solutions to life.
            </p>
            <p className="mt-4">
              Currently, I work at <strong>IranServer</strong> as an <strong>AI Product Manager</strong>, where I focus on integrating <strong>Artificial Intelligence</strong> into products, leading <strong>road mapping, project management</strong>, and optimizing AI-driven solutions.
            </p>
            <p className="mt-4">
              Previously, I spent nearly <strong>a decade</strong> as a <strong>Tech Leader & Senior Android Developer</strong> at <strong>Part Silicon</strong>, spearheading mobile development initiatives and building robust Android applications. Additionally, I have worked as a <strong>Software Developer</strong> at <strong>Mashhad University of Medical Sciences</strong>, a <strong>Programmer</strong> at <strong>Shokoofa System</strong>, and a <strong>Web Developer</strong> at <strong>GreenWeb</strong>, gaining hands-on experience in diverse technological domains.
            </p>
            <p className="mt-4">
              With a passion for <strong>technology, innovation, and problem-solving</strong>, I thrive on creating high-impact solutions that bridge the gap between user needs and technical excellence.
            </p>
          </section>
        </main>
      </div>
    );
  }