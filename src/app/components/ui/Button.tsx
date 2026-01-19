'use client';

type Props = {
  children: React.ReactNode;
  onAction?: () => void;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

export default function Button({ children, onAction, ...props }: Props) {
  return (
    <button
      {...props}
      className='flex gap-2 items-center px-4 py-2 rounded-xl bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-300 cursor-pointer border-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2'
      onClick={onAction}>
      {children}
    </button>
  );
}
