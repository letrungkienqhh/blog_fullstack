
export const create = (category, token) => {
    return fetch(`${process.env.API_URL}/category`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const getCategories = () => {
    return fetch(`${process.env.API_URL}/categories`, {
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
export const getCategory = (slug) => {
    return fetch(`${process.env.API_URL}/category/${slug}`, {
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


export const deleteCategory = (slug,token) => {
    console.log(`deleteCategory dang o day`)
    console.log(slug,token)
    console.log(`${process.env.API_URL}/category/${slug}`)
    return fetch(`${process.env.API_URL}/category/${slug}`, {
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