'use client'

import { ProviderCart } from "@/data/contexts/CartContext"

export default function Layout(props: any) {
  return (
    <ProviderCart>{props.children}</ProviderCart>
  )
}