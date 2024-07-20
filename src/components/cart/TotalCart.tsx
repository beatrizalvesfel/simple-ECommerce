import CartItem from "@/data/model/CartItem"

export interface TotalCarrinhoProps {
    items: CartItem[]
}

export default function TotalCarrinho(props: TotalCarrinhoProps) {
    const total = props.items.reduce((acc, item) => acc + item.product.price * item.amount, 0)
    return (
        <div className="flex items-center justify-between bg-zinc-900 rounded-md p-7">
            <div className="flex flex-col justify-between">
                <span className=" text-zinc-500">Total</span>
                <span className="text-3xl font-bold text-pink-600">R$ {total.toFixed(2)}</span>
            </div>
            <button className="bg-green-600 px-4 py-2 rounded-md text-xl">Finalizar</button>
        </div>
    )
}