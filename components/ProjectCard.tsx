/**
 * ProjectCard Component (UI-Agent)
 * Displays project information with responsive grid layout
 * Follows design tokens for spacing and typography
 * No absolute positioning for layout
 */

interface ProjectCardProps {
  title: string;
  type?: string;
  period?: string;
  description: string;
  accomplishments?: string[];
  technologies?: string[];
  githubUrl?: string;
  stars?: number;
  lastUpdated?: string;
  featured?: boolean;
  images?: Array<{ alt: string; src?: string }>;
}

export default function ProjectCard({
  title,
  type,
  period,
  description,
  accomplishments = [],
  technologies = [],
  githubUrl,
  stars,
  featured = false,
  images = []
}: ProjectCardProps) {
  return (
    <article className="bg-card-bg p-6 md:p-8 lg:p-10 rounded-2xl border-2 border-secondary hover:border-accent transition-all duration-300 shadow-2xl hover:shadow-accent/20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div className="text-left flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-h2 font-bold text-white">
              {title}
            </h2>
            {featured && (
              <span className="px-2 py-1 bg-accent/20 text-accent text-small font-bold rounded border border-accent/50">
                Featured
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2 items-center text-small text-accent/80">
            {type && <span>{type}</span>}
            {type && period && <span>|</span>}
            {period && <span>{period}</span>}
            {stars !== undefined && (
              <>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {stars}
                </span>
              </>
            )}
          </div>
        </div>

        {/* GitHub Link */}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/50 shrink-0"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-body text-text/90 mb-6 leading-relaxed text-left">
        {description}
      </p>

      {/* Key Accomplishments */}
      {accomplishments.length > 0 && (
        <div className="mb-6 text-left">
          <h3 className="text-h3 text-accent font-semibold mb-3">Key Accomplishments:</h3>
          <ul className="space-y-2">
            {accomplishments.map((accomplishment, i) => (
              <li key={i} className="flex items-start gap-3 text-body text-text/90">
                <span className="text-accent mt-1 shrink-0">▹</span>
                <span>{accomplishment}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 text-left mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-secondary/50 text-accent border border-accent/30 rounded-lg text-small font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Image Gallery */}
      {images.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, i) => (
            <div
              key={i}
              className="aspect-video bg-secondary/30 rounded-lg border border-secondary flex items-center justify-center text-accent/50 hover:border-accent/50 transition-all cursor-pointer group"
            >
              {image.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <span className="text-small group-hover:text-accent">
                  {image.alt || `Project Image ${i + 1}`}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
