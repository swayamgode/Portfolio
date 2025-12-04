import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function SocialIcons() {
  const socials = [
    { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub', color: 'hover:text-white' },
    { icon: FaInstagram, href: 'https://instagram.com/yourusername', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: FaEnvelope, href: 'mailto:swayamgode@gmail.com', label: 'Email', color: 'hover:text-accent' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn', color: 'hover:text-blue-400' },
  ];

  return (
    <div className="flex gap-4 justify-center md:justify-start items-center">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            target={social.href.startsWith('mailto') ? undefined : '_blank'}
            rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
            aria-label={social.label}
          >
            <Icon size={28} />
          </a>
        );
      })}
    </div>
  );
}