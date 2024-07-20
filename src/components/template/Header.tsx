import Cart from "./Cart";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-zinc-800 h-20 px-8">
      <Logo/>
      <Cart/>
    </header>
  )
}