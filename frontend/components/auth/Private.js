import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { isAuth } from '../../actions/auth'

const Private = ({children}) => {
    const router=useRouter()
    console.log(isAuth())
    useEffect(()=>{
        if (!isAuth()){
           
            router.push('/signin')
        }
    },)
  return (
    <>
        {children}
    </>
  )
}

export default Private