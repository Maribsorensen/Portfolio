import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function HomePage() {
  return (
    <div>
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-heading mb-4">
          Welcome to My Portfolio🌿
        </h1>
        <p className="max-w-2xl mx-auto text-lg font-paragraph">
          Explore my projects, learn about me, and enjoy the peaceful vibes.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-bg border border-highlight/20 rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="font-heading text-2xl mb-2">{project.title}</h2>
              <p className="font-paragraph flex-grow">{project.teaser}</p>
              <Link
                to={`/projects/${project.id}`}
                className="mt-4 inline-block text-cta hover:underline font-heading uppercase tracking-wider text-sm"
              >
                View Project →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
