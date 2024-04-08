"use client"

import Statistic from '@/components/Statistic/page'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React, { useEffect } from 'react'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Profile = () => {
    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            const session = await getSession()
            if (!session) {
                localStorage.removeItem('user_data')
                router.push('/')
            }
        }
        fetchData()
    }, [router])

    useEffect(() => {
        const localData: any = localStorage.getItem('user_data')
        const data = JSON.parse(localData)
    }, [])

    return (
        <>
            <div className='px-20 py-10'>
                <div className='flex items-center gap-8'>
                    <Avatar className='h-32 w-32'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className=''>
                        <h1 className='text-3xl font-bold'>Name</h1>
                        <h6 className='text-xl'>Location | Bio | Role/Title</h6>
                    </div>
                </div>
            </div>
            <hr />
            <Statistic />
            <hr />
        </>
    )
}

export default Profile