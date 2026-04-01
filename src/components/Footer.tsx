export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Takuma Matsumoto. All rights
        reserved.
      </div>
    </footer>
  );
}
