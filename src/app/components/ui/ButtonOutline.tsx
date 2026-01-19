'use client';

type Props = {
  children: React.ReactNode;
  onAction?: () => void;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

export default function ButtonOutline({ children, onAction, ...props }: Props) {
  return (
    <button
      {...props}
      className='flex gap-2 items-center px-4 py-2 rounded-xl bg-transparent text-amber-600 hover:text-amber-700 transition-all duration-300 cursor-pointer border border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2'
      onClick={onAction}>
      {children}
    </button>
  );
}
