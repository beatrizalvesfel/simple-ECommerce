import useCart from "@/data/hooks/useCart";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function Cart() {
  const {amountItems} = useCart()
  return (
    <Link href="/cart">
      <div className="flex relative">
        <IconShoppingCart size={28} stroke={1} />
        <div className="absolute -top-2.5 -right-2.5 w-5 h-5 bg-red-500 
        rounded-full flex justify-center items-center text-xs p-1"
        >
          {amountItems}
        </div>
      </div>
    </Link>
  )
}