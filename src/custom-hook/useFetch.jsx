
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import AxiosUserInstance from '../api/AxiosUserInstance';
import AxiosInstance from '../api/AxiosInstance';

function useFetch(url, dataName, hasToken = false) {

    const fetchData = async () => {
        let response;
        try {
            if (hasToken) {
                response = await AxiosUserInstance.get(url);
            } else {
                response = await AxiosInstance.get(url);
            }
        }catch(error) {
            console.log(error)
        }

        return response;
    }
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [dataName],
        queryFn: fetchData,
        staleTime: 1000 * 60 * 5
    })




    return { data, isLoading, isError, error };

}

export default useFetch;