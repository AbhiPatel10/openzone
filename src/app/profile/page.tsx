"use client"

import Statistic from '@/components/Statistic/page'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React, { useEffect, useState } from 'react'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Profile = () => {
    const router = useRouter()
    const [user_data, setUser_data] = useState<any>("")

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
        userDetails(data.accessToken)
    }, [])

    const userDetails = async(token:string) =>{
        const response = await fetch('https://api.github.com/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userData = await response.json();
          setUser_data(userData)
    }

    return (
        <>
            <div className='px-20 py-10'>
                <div className='flex items-center gap-8'>
                    <Avatar className='h-32 w-32'>
                        <AvatarImage src={user_data?.avatar_url || "https://github.com/shadcn.png"} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className=''>
                        <h1 className='text-3xl font-bold'>{user_data?.name}</h1>
                        <h6 className='text-xl'>{user_data?.bio}</h6>
                    </div>
                </div>
            </div>
            <hr />
            <Statistic user_data={user_data}/>
            <hr />
        </>
    )
}

export default Profile