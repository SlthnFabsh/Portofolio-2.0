import { FaMoon, FaSun } from "react-icons/fa";

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function DarkModeToggle({ darkMode, toggleDarkMode }: DarkModeToggleProps) {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-8 left-8 z-40 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
    </button>
  );
}
