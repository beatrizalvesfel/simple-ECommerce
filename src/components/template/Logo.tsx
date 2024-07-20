import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-col items-center">
        <img className="h-8 w-8" src="./icon.png" alt="Logo" />
      </div>
    </Link>
  )
}