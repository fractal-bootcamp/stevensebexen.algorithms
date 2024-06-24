import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex gap-2">
      <Link href="/">Home</Link>
      <Link href="/sort">Sort</Link>
    </div>
  )
}