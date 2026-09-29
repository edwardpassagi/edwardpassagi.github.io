interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <p
      className={`text-center text-[10px] text-gray-400 dark:text-gray-500 ${className}`}
    >
      © {new Date().getFullYear()} Edward Passagi • Built with Next.js &
      Tailwind
    </p>
  );
}
