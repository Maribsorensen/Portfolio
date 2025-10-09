export function Footer() {
  return (
    <footer className="bg-cta text-background h-24 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-12">
      <p className="font-paragraphs text-sm text-center">
        © {new Date().getFullYear()} Mari Berg Sørensen — Built with ❤️ in
        React & Tailwind
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://no.linkedin.com/in/mari-berg-s%C3%B8rensen-b63425156"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM9 8h3.7v2.3h.05c.52-.98 1.8-2 3.7-2 4 0 4.75 2.63 4.75 6v9.7h-4v-8.6c0-2.05 0-4.7-2.85-4.7-2.85 0-3.3 2.2-3.3 4.55v8.75h-4V8z" />
          </svg>
        </a>
        <a
          href="https://github.com/Maribsorensen"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.727-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.47-2.382 1.236-3.222-.124-.303-.536-1.524.116-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3-.404c1.02.005 2.045.137 3 .404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.096.823 2.21 0 1.595-.015 2.878-.015 3.27 0 .32.215.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
