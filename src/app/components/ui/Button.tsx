'use client';

type Props = {
  label: string;
  onAction?: () => void;
};

export default function Button({ label, onAction }: Props) {
  return (
    <button
      className='flex px-4 py-2 rounded-xl bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-300 cursor-pointer border-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2'
      onClick={onAction}>
      {label}
    </button>
  );
}
