"use client"

import React, { useEffect } from 'react'
import { signIn, useSession, signOut } from "next-auth/react"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const LoginButton = () => {
    const { data, status } = useSession<boolean>();
    const router = useRouter();

    useEffect(() => {
        if (data) {
            localStorage.setItem("user_data", JSON.stringify(data))
        }
    }, [data])

    if (status === 'authenticated') {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger>Profile</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => router.push('/profile')}><Image src={data.user?.image || ''} width={40} height={40} className='rounded-full' alt='' /> Profile</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }
    
    return (
        <button onClick={() => signIn("github")}>Continue with GitHub</button>
    )
}

export default LoginButton