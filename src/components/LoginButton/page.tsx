"use client"

import React, { useEffect } from 'react'
import { signIn, useSession, signOut } from "next-auth/react"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const LoginButton = () => {
    const { data, status } = useSession<boolean>();
    const router = useRouter();

    useEffect(() => {
        if (data) {
            localStorage.setItem("user_data", JSON.stringify(data))
            if (status === 'authenticated') {
                router.push('/profile');
            }
        }
    }, [data])

    if (status === 'authenticated') {
        return (
            <div className='flex gap-4'>
                <Image src={data.user?.image || ''} width={40} height={40} className='rounded-full' alt='' />
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    }

    return (
        <button onClick={() => signIn("github")}>Continue with GitHub</button>
    )
}

export default LoginButton