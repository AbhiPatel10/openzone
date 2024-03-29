"use client"

import React from 'react'
import { signIn, useSession, signOut } from "next-auth/react"
import Image from 'next/image';
import { Session } from "next-auth";

const LoginButton = () => {
    const { data: session, status } = useSession<boolean>();

    if (status === 'authenticated') {
        return (
            <div className='flex gap-4'>
                <Image src={session.user?.image || ''} width={40} height={40} className='rounded-full' alt='' />
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    }

    return (
        <button onClick={() => signIn("github")}>Continue with GitHub</button>
    )
}

export default LoginButton