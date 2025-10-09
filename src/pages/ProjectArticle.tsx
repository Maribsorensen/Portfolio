import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export function ProjectArticle() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="text-cta mb-4 font-paragraph text-center">
        Project not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 lg:flex lg:gap-10">
      {project.image && (
        <img
          src={project.image}
          alt={project.title || 'Project screenshot'}
          className="rounded-2xl mb-6 lg:mb-0 lg:w-1/2 object-cover shadow-lg"
        />
      )}
      <div className="lg:w-1/2 flex flex-col">
        <Link
          to="/projects"
          className="text-cta hover:underline mb-4 font-paragraph"
        >
          ← Back to Projects
        </Link>
        {project.id && (
          <div className="flex gap-2 mb-4">
            <span className="bg-highlight text-cta text-xs px-2 py-1 rounded-full">
              {project.id}
            </span>
          </div>
        )}
        <h1 className="text-4xl mb-4 font-heading text-cta">{project.title}</h1>
        <p className="text-lg mb-6 whitespace-pre-line font-paragraph text-cta">
          {project.description}
        </p>
        {project.features && (
          <div className="mb-6">
            <h2 className="font-heading text-xl mb-2 text-cta">Features</h2>
            <ul className="list-disc list-inside font-paragraph text-cta">
              {Object.entries(project.features).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
          </div>
        )}
        {project.techstack && (
          <div className="mb-6">
            <h2 className="font-heading text-xl mb-2 text-cta">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {Object.entries(project.techstack).map(([key, value]) => (
                <span
                  key={key}
                  className="bg-highlight text-cta px-2 py-1 rounded-full text-sm font-paragraph"
                >
                  {key}: {value}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="flex gap-4 mt-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-highlight hover:bg-cta hover:text-background text-cta px-4 py-2 rounded-lg transition font-paragraph"
            >
              GitHub
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-highlight hover:bg-cta hover:text-background text-cta px-4 py-2 rounded-lg transition font-paragraph"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
