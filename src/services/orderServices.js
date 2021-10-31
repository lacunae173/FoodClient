import { apiUrl } from "./config";

export const getAllOrders =  (token) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token.access
        },
    }
    return fetch(`${apiUrl}/orders/`, requestOptions).then( async (response) => {
        try {
            let text = await response.text();
            if (response.ok) {
                return JSON.parse(text);
            } else {
                throw new Error(text)
            }
        } catch(err) {
            return Promise.reject(err.message)
        }
    })
        // try {
        //     let text = await response.text();
        //     if (response.ok) {
        //         return JSON.parse(text);
        //     } else {
        //         throw new Error(text)
        //     }

        // } catch (err) {
        //     return Promise.reject(err.message)
        // })
    
}

export const addOrder = (data, token) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token.access
        },
        body: JSON.stringify(data)
    }
    return fetch(`${apiUrl}/orders/`, requestOptions).then(async (response) => {
        try {
            let text = await response.text();
            if (response.ok) {
                return JSON.parse(text);
            } else {
                throw new Error(text)
            }
        } catch (err) {
            return Promise.reject(err.message)
        }
    })
}