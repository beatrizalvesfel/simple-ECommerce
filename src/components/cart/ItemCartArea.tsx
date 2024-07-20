import CartItem from "@/data/model/CartItem";
import { IconMinus, IconPlus, IconX } from '@tabler/icons-react'
import Image from 'next/image'

export interface ItemCartAreaProps {
    item: CartItem
    add?: (item: CartItem) => void
    remove?: (item: CartItem) => void
}

export default function ItemCartArea(props: ItemCartAreaProps) {
    return (
        <div className="flex items-center gap-5 bg-zinc-900 rounded-md overflow-hidden">
            <div className="relative w-28 h-28">
                <Image
                    src={props.item.product.image}
                    alt={props.item.product.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col justify-center flex-1">
                <span className="text-xl font-bold">{props.item.product.name}</span>
                <span className="text-sm text-zinc-400">{props.item.product.description}</span>
                <div className="flex items-center gap-2 mt-2 text-zinc-400 text-lg font-bold">
                    <span>R$ {props.item.product.price.toFixed(2)}</span>
                    <IconX size={20} />
                    <span>{props.item.amount}</span>
                    <span>=</span>
                    <span className="text-pink-600">
                        R$ {(props.item.product.price * props.item.amount).toFixed(2)}
                    </span>
                </div>
            </div>
            <div className="flex gap-2 items-center px-5">
                <button onClick={() => props.remove?.(props.item)}>
                    <IconMinus />
                </button>
                <span className="flex px-4 py-2 rounded-md bg-black">{props.item.amount}</span>
                <button onClick={() => props.add?.(props.item)}>
                    <IconPlus />
                </button>
            </div>
        </div>
    )
}