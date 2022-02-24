import React,{useState} from 'react'
import Image from 'next/image'
import SignUpComponent from '../components/auth/SignUpComponent'

// const styles ={
//   wrapper:'w-1/4 flex justify-center bg-gray-200 grid mx-auto my-10',
//   title:'font-semibold text-blue-500 text-3xl',
//   bodyContainer: 'grid',

// }
const signup = () => {
      return(
        <div>
               
              <SignUpComponent/>
        </div>
      
      )
}
  


export default signup