import Link from 'next/link'

export default function Header() {
  return(
    <nav className="navbar">
      <Link href="/"><img src="/images/car_wayway_logo.svg" /></Link>
      <Link href="/radars"><a>Liste des radars</a></Link>
    </nav>
  );
}