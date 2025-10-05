import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export function ProjectArticle() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="text-cta mb-4 inline-block font-paragraph">
        Project not found
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link
        to="/projects"
        className="text-cta underline mb-4 inline-block font-paragraph"
      >
        ← Back to Projects
      </Link>

      <img
        src={project.image}
        alt={project.title}
        className="rounded-2xl mb-4"
      />
      <h1 className="text-3xl font-bold font-heading text-cta mb-2">
        {project.title}
      </h1>

      <div className="text-cta font-paragraph whitespace-pre-line mb-4">
        {project.description}
      </div>

      <div className="flex gap-3">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            className="text-cta underline font-paragraph"
          >
            GitHub
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            className="text-cta underline font-paragraph"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
