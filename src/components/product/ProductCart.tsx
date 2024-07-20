import useCart from "@/data/hooks/useCart"
import Product from "@/data/model/Product"
import Image from "next/image"

export interface ProductCardProps {
  product: Product
}

export default function ProductCard(props: ProductCardProps) {
  const {add} = useCart()
  const {name, price, description, image} = props.product
  return (
    <div className="flex flex-col w-72 bg-zinc-900 rounded-md">
      <div className="relative w-72 h-52">
        <Image src={image} alt={name} fill className="object-cover"/>
      </div>
      <div className="flex-1 flex flex-col gap-4 p-5">
        <h2 className="text-lg font-bold cursor-default">{name}</h2>
        <p className=" flex-1 text-sm text-zinc-400 cursor-default">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold mt-2 cursor-default">R${price.toFixed(2)}</span>
          <button onClick={() => add(props.product)}  className="border border-pink-50 rounded-lg px-5 py-1 text-sm bg-transparent hover:bg-pink-600 hover:border-pink-600 active:bg-pink-700 focus:outline-none ">Adicionar</button>
        </div>
      </div>
    </div>
  )
}