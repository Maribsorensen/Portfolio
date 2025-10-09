import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { usePageMeta } from '../hooks/usePageMeta';

export function ProjectsPage() {
  usePageMeta();
  return (
    <div>
      <section>
        <h1 className="font-heading text-cta text-4xl md:text-5xl  text-center mb-6">
          All my featured projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-bg border border-highlight/20 rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
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
