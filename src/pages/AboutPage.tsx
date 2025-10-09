import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export function AboutPage() {
  usePageMeta();
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Intro */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading mb-4 text-cta">
          About Me
        </h1>
        <p className="text-lg md:text-xl font-paragraph text-cta">
          Hi! I’m Mari, 29, finishing my 2-year frontend education in October
          2025. I’m so excited to continue learning about frontend after my
          course is finished and explore new opurtunities in my future work.
        </p>
      </section>

      {/* Background */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading mb-4 text-cta">Background</h2>
        <p className="font-paragraph text-cta mb-2">
          I have a bachelor’s degree in Occupational Therapy and several years
          of experience in healthcare, including manager, coordination, and
          counseling roles.
        </p>
        <p className="font-paragraph text-cta">
          After discovering my passion for frontend development, I enrolled in a
          2-year frontend education program where I learned modern HTML, CSS,
          CSS frameworks, JavaScript, TypeScript, React, and working with
          Git/GitHub.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading mb-4 text-cta">Skills & Tools</h2>
        <div className="flex flex-wrap gap-2">
          {[
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'React',
            'CSS Frameworks',
            'Git/GitHub',
            'Agile/Sprints',
          ].map((skill) => (
            <span
              key={skill}
              className="bg-highlight text-cta px-3 py-1 rounded-full font-paragraph text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading mb-4 text-cta">
          Work Experience Highlights
        </h2>
        <ul className="list-disc list-inside font-paragraph text-cta space-y-1">
          <li>Manager roles in healthcare</li>
          <li>Coordination and organizational roles</li>
          <li>Counseling and patient support</li>
        </ul>
      </section>

      {/* Personal Note */}
      <section className="text-center">
        <p className="font-paragraph text-cta mb-4">
          Frontend development is my passion — React is fun, and I love crafting
          user-friendly interfaces.
        </p>
        <Link
          to="/projects"
          className="inline-block bg-highlight hover:bg-cta hover:text-background text-cta px-6 py-3 rounded-lg font-heading transition"
        >
          Check out my projects →
        </Link>
      </section>
    </div>
  );
}
