import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>TravelNow</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/destination">Destinations</Link>
        <Link href="/booking">Booking</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
