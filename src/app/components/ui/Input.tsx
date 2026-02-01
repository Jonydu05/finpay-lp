'use client';
import React from 'react';

type Props = React.PropsWithChildren<
  React.InputHTMLAttributes<HTMLInputElement>
>;

export default function Input({ children, ...props }: Props) {
  const [invalidInput, setInvalidInput] = React.useState(false);

  const handleInput = (ev: React.FormEvent<HTMLInputElement>) => {
    if (ev.target instanceof HTMLInputElement && ev.target.validity.valid) {
      setInvalidInput(false);
    } else {
      setInvalidInput(true);
    }
  };

  React.useEffect(() => {
    console.log('Invalid input state changed:', invalidInput);
  }, [invalidInput]);

  return (
    <div
      className={
        'flex items-center justify-between gap-2 border border-gray-300 rounded-xl bg-gray-50 dark:bg-gray-950 dark:border-gray-700 p-1 transition-colors duration-300 ease-in-out' +
        (invalidInput ? ' border-red-600' : '')
      }
    >
      <input
        onInput={handleInput}
        className="border-none outline-none p-2 flex-1 placeholder:text-gray-400 text-gray-800 dark:placeholder:text-gray-500 dark:text-white"
        {...props}
      />
      {children}
    </div>
  );
}
