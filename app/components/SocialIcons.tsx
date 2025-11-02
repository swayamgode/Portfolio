import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="flex space-x-4 justify-center items-center oa">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
        <FaGithub size={34} />
      </a>
      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
        <FaInstagram size={34} />
      </a>
      <a href="mailto:your@email.com" className="text-gray-600 hover:text-red-600 transition-colors">
        <FaEnvelope size={34} />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
        <FaLinkedin size={34} />
      </a>
    </div>
  );
}