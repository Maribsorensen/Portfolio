export function Footer() {
  return (
    <footer className="bg-cta text-highlight h-24 flex items-center justify-center mt-12">
      <p className="font-paragraphs text-sm">
        © {new Date().getFullYear()} Mari Berg Sørensen — Built with ❤️ in
        React & Tailwind
      </p>
    </footer>
  );
}
