
export const create = (tag, token) => {
    return fetch(`${process.env.API_URL}/tag`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(tag)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const getTags = () => {
    return fetch(`${process.env.API_URL}/tags`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          
        },
        
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const getTag = (slug) => {
    return fetch(`${process.env.API_URL}/tag/${slug}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify(slug)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const deleteTag = (slug,token) => {
  
    
    return fetch(`${process.env.API_URL}/tag/${slug}`, {
        method: 'DELETE',
        headers: {
            mode: 'cors',
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};