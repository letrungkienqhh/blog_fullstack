
import cookie from "js-cookie";
// import fetch from 'isomorphic-fetch'
export const signup=(user)=>{
   
    return fetch(`${process.env.API_URL}/signup`,{
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'

        },
        body:JSON.stringify(user)
    })
    .then(response =>{
        
        return response.json()
    })
    .catch(e=>console.log(e))
}

export const signin=user=>{
   
    return fetch(`${process.env.API_URL}/signin`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(response=>{
        
        return response.json()

    })
    .catch(e=>console.log(e))
}

export const setCookie=(key,value)=>{
    if (typeof window !=='undefined'){
        cookie.set(key,value,{expires:1})
    }
}
export const removeCookie=(key)=>{
    if (typeof window !=='undefined'){
        cookie.set(key,{expires:1})
    }
}
export const getCookie=(key)=>{
    if (typeof window !=='undefined'){
        return cookie.get(key)
    }
}

export const setLocalStorage=(key,value)=>{
     if (typeof window !=='undefined'){
         localStorage.setItem(key,JSON.stringify(value))
     }
}
export const removeLocalStorage=(key)=>{
    if (typeof window !=='undefined'){
        localStorage.removeItem(key)
    }
}

export const authenticate =(data,next)=>{
    console.log('dang authenticate')
    setCookie('token',data.token)
    setLocalStorage('user',data.user)
    next()
}

export const isAuth=()=>{
    if (typeof window !=='undefined'){
        const cookieChecked=getCookie('token')
        if (cookieChecked){
            if (localStorage.getItem('user')){
                return JSON.parse(localStorage.getItem('user'))
            }
            else 
                return false
        }
    }
}

export const signout=(next)=>{
    removeCookie('token')
    removeLocalStorage('user')
    next()
    return fetch(`${process.env.API_URL}/signout`,{
        method:'GET',

    })
    .then(response=>console.log(`Signout sucessfully`))
    .catch(error=>console.log(error))
}
