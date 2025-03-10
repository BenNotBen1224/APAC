'use client';

interface QuoteButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function QuoteButton({ onClick, className = '' }: QuoteButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors ${className}`}
    >
      Get a Quote
    </button>
  );
}