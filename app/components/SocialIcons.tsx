import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="flex space-x-4 justify-center md:justify-start items-center oa">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <FaGithub size={34} />
      </a>
      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
        <FaInstagram size={34} />
      </a>
      <a href="mailto:swayamgode@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
        <FaEnvelope size={34} />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
        <FaLinkedin size={34} />
      </a>
    </div>
  );
}