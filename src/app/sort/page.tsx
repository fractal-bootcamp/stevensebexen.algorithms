import Link from "next/link";
import NavBar from "~/component/NavBar";

export default function Sort() {
  return (
    <>
      <NavBar />
      <div className='flex gap-2'>
        <Link href='/sort/bubble'>Bubble</Link>
        <Link href='/sort/selection'>Selection</Link>
      </div>
    </>
  )
}