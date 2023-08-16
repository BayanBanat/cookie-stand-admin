
import Link from 'next/link';

export default function Header({ Overview }) {
  return (
    <header className="flex items-center justify-between p-5 bg-green-600 text-black-50">

      <h1 className="text-5xl font-medium">Cookie Stand Admin</h1>
      <Link className="p-1 text-black bg-gray-200" href={'/overview'}>
        Overview
      </Link>
    </header>

  )
}