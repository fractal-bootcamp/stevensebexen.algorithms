import Link from "next/link";
import NavBar from "~/component/NavBar";

export default function Sort() {
  return (
    <>
      <NavBar />
      <Link href='/sort/bubble'>Bubble</Link>
    </>
  )
}