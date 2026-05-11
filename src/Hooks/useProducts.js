import getProducts from './../Services/api.js';
import {useState } from 'react';

export function useProducts(){

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try{
            setLoading(true);
            setError(null);
            return await getProducts();
        } catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    };

    return {
        getData,
        error,
        loading
    };
}