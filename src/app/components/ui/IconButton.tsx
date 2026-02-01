'use client';

type Props = {
  children: React.ReactNode;
  onAction?: () => void;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

export default function IconButton({ children, onAction, ...props }: Props) {
  return (
    <button
      {...props}
      className="flex gap-2 items-center px-2 py-2 rounded-xl text-gray-800 dark:text-gray-200 transition-colors duration-300 cursor-pointer"
      onClick={onAction}
    >
      {children}
    </button>
  );
}
