import React,{useEffect, useState} from 'react'
import {signin,authenticate, isAuth} from '../../actions/auth'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
const SignInComponent = () => {
        const router = useRouter()
        const [values,setValues]=useState({
          email:'tomkien123@gmail.com', 
          password:'kien123',
          error:'', 
          loading:false,
          message:'', 
          showForm:true
        })
        
        const {email,password,error,loading,message,showForm} =values
        useEffect(()=>{
            isAuth() && router.push('/')
        },[])
        const handleSumit=  (e)=>{
            e.preventDefault()
            
            setValues({...values,loading:true,error:false})
            const user={email,password} 
         
        
            signin(user).then(data => {
               

                
                if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
                } else {
                    //save token to cookie
                    //save user info to localStorage
                    //authenticate.user
                    authenticate(data,()=>{
                        if (isAuth() && isAuth().role==1){
                            router.push('/admin')
                        }
                        else if (isAuth()&& isAuth().role==0){
                            router.push('/user')
                        }
                    })
                }
            
            })
   
        }
        const handleChange = name =>(e) => {
            setValues({...values,error:false,[name]:e.target.value})
          }
      


        
       
        const showError = () => (error ? <div className="bg-red-500 text-xl">{error}</div> : '');
        const showMessage=() => (message? <div className="bg-blue-500">{message}</div>:'')
        const showLoading=() => (loading? <div className="bg-green-500">Loading...</div>:<div></div>)
        const signInForm=()=>{
            return(
                <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign In</h1>
                   
                    <input  type="text" 
                            className="block border border-grey-light w-full p-3 rounded mb-4" 
                            value={email}
                            placeholder="Email" 
                            onChange={handleChange('email')}
                            />
                    <input  type="password" 
                            className="block border border-grey-light w-full p-3 rounded mb-4" 
                            value={password}
                            placeholder="Password" 
                            onChange={handleChange('password')}
                            />
                   
                     {error!='' && showError()}
                    <button type="submit" 
                            onClick={handleSumit}
                            className="bg-blue-500 w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1">
                                Sign In
                    </button>
                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Privacy Policy
                        </a>
                    </div>
                    </div>
                    <div className="text-grey-dark mt-6">
                    You dont't have an account? 
                    <Link href="../signup/">
                            <a className="no-underline border-b border-blue text-blue" >
                               Sign Up
                            </a>
                    </Link>
                    
                    </div>
                </div>
            </div>

            )
            
        }
    return(
        <>  
            {showLoading()}
            {showError()}
            {showMessage()}
             { showForm && signInForm()}
        </>
    )
  
}

export default SignInComponent