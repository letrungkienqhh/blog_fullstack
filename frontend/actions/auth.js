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
        console.log(response);
        return response.json()
    })
    .catch(e=>console.log(e))
}