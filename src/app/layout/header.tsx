'use client';
import { SignInIcon } from '@phosphor-icons/react';
import Button from '../components/ui/Button';
import ButtonOutline from '../components/ui/ButtonOutline';

export default function Header() {
  const handleLogin = () => {};

  const handleSignUp = () => {};

  const links = [
    { href: '#products', label: 'Products' },
    { href: '#customers', label: 'Customers' },
    { href: '#pricing', label: 'Pricing' },
  ];

  return (
    <header className='flex justify-between gap-4 items-center p-4'>
      <div className='logo'></div>
      <nav>
        <ul className='list-none p-0 m-0 flex gap-2 items-center'>
          {links.map(link => (
            <li key={link.href} className='p-1 rounded-md hover:bg-gray-200 cursor-pointer'>
              <a href={link.href} className='no-underline text-inherit'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex gap-2 items-center'>
        <ButtonOutline onAction={handleLogin}>
          <SignInIcon size={24} /> Login
        </ButtonOutline>
        <Button onAction={handleSignUp}>Sign up</Button>
      </div>
    </header>
  );
}
