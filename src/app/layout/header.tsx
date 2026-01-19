'use client';
import { CardholderIcon, MoonIcon, SunIcon } from '@phosphor-icons/react';
import React from 'react';
import Button from '../components/ui/Button';
import ButtonOutline from '../components/ui/ButtonOutline';
import IconButton from '../components/ui/IconButton';

export default function Header() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  const handleLogin = () => {};

  const handleSignUp = () => {};

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  React.useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const links = [
    { href: '#products', label: 'Products' },
    { href: '#customers', label: 'Customers' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#learn', label: 'Learn' },
  ];

  return (
    <header className='layout bg-amber-50 dark:bg-amber-950 sticky top-0 z-50 shadow-md'>
      <div className='container flex justify-between gap-4 items-center p-4'>
        <a href='#home' className='flex gap-2 items-center font-extrabold text-2xl font-serif'>
          <CardholderIcon size={48} />
          <span>Finpay</span>
        </a>
        <nav>
          <ul className='list-none p-0 m-0 flex gap-2 items-center'>
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className='px-4 py-2 no-underline text-inherit rounded-md transition-all duration-300 ease-in-outs hover:bg-amber-200 dark:hover:bg-amber-800 cursor-pointer'>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex gap-2 items-center'>
          <IconButton onAction={handleThemeChange}>
            {theme === 'light' ? <MoonIcon size={32} /> : <SunIcon size={32} />}
          </IconButton>
          <ButtonOutline onAction={handleLogin}>Login</ButtonOutline>
          <Button onAction={handleSignUp}>Sign up</Button>
        </div>
      </div>
    </header>
  );
}
