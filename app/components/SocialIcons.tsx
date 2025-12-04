import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function SocialIcons() {
  const socials = [
    { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaInstagram, href: 'https://instagram.com/yourusername', label: 'Instagram' },
    { icon: FaEnvelope, href: 'mailto:swayamgode@gmail.com', label: 'Email' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
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
            className="text-[#666666] hover:text-[#1a1a1a] transition-colors"
            aria-label={social.label}
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  );
}