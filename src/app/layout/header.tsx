'use client';
import Button from '../components/ui/Button';

export default function Header() {
  const handleLogin = () => {};

  const handleSignUp = () => {};

  return (
    <header>
      <div className='logo'></div>
      <nav>
        <ul>
          <li>
            <a href='#products'>Products</a>
          </li>
          <li>
            <a href='#customers'>Customers</a>
          </li>
          <li>
            <a href='#pricing'>Pricing</a>
          </li>
        </ul>
      </nav>
      <div>
        <Button onAction={handleLogin} label='Login'></Button>
        <Button onAction={handleSignUp} label='Sign up'></Button>
      </div>
    </header>
  );
}
