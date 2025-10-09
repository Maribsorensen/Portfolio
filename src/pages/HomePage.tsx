import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { usePageMeta } from '../hooks/usePageMeta';

export function HomePage() {
  const featuredProjects = [
    projects.find((p) => p.id === 'Javascript Frameworks'),
    projects.find((p) => p.id === 'Semester Project 2'),
    projects.find((p) => p.id === 'CSS Frameworks'),
  ].filter((p): p is (typeof projects)[number] => Boolean(p));
  usePageMeta();

  return (
    <div className="px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-heading mb-4 text-cta">
          Welcome to My Portfolio🌿
        </h1>
        <p className="max-w-2xl mx-auto text-lg font-paragraph text-cta">
          Hi! My name is Mari. In my portfolio you can explore my projects and
          get the information you need about me.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-heading text-cta mb-4 underline">
          Recent highlighted projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-bg border border-highlight/20 rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-4 flex flex-col flex-grow">
                {project.id && (
                  <span className="bg-highlight text-cta text-xs px-2 py-1 rounded-full mb-2">
                    {project.id}
                  </span>
                )}
                <h2 className="font-heading text-2xl mb-2 text-cta">
                  {project.title}
                </h2>
                {project.teaser && (
                  <p className="font-paragraph flex-grow text-cta">
                    {project.teaser}
                  </p>
                )}
                <Link
                  to={`/projects/${project.id}`}
                  className="mt-4 inline-block text-cta hover:underline font-heading uppercase tracking-wider text-sm"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
