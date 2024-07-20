'use client'
import CarrinhoEmpty from "@/components/cart/CarrinhoEmpty";
import ItemCartArea from "@/components/cart/ItemCartArea";
import TotalCart from "@/components/cart/TotalCart";
import Page from "@/components/template/Page";
import useCart from "@/data/hooks/useCart";

export default function CartPage() {
    const { items, add, remove } = useCart()
    return (
        <Page className="flex flex-col gap-10">
            {items.length === 0 ? (
                <CarrinhoEmpty />
            ) : (
                <>
                    <div className="flex flex-col gap-5">
                        {items.map((item) => (
                            <ItemCartArea
                                key={item.product.id}
                                item={item}
                                add={(item) => add(item.product)}
                                remove={(item) => remove(item.product)}
                            />
                        ))}
                    </div>
                    <TotalCart items={items} />
                </>
            )}
        </Page>
    )
}