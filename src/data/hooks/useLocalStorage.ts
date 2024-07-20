'use client'
import { useCallback } from 'react'

export default function useLocalStorage() {
    const get = useCallback((hey: string) => {
        const value = localStorage.getItem(hey)
        return value ? JSON.parse(value) : null
    }, [])

    const set = useCallback((hey: string, value: any) => {
        localStorage.setItem(hey, JSON.stringify(value))
    }, [])

    const remove = useCallback((hey: string) => {
        localStorage.removeItem(hey)
    }, [])

    return { get, set, remove }
}