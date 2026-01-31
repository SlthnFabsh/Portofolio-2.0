import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700 py-12">
      <div className="container-custom">
        <div className="text-center space-y-6">
          {/* Name */}
          <h2 className="text-2xl font-bold gradient-text">Sulthon Farizudin a.b</h2>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-6">
            <li>
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#certificates"
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium"
              >
                Certificates
              </a>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/soullthn/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-100 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://github.com/SlthnFabsh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-100 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/sulthon-farizudin-al-bashir-020b7a3a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-100 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Sulthon Farizudin a.b. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
