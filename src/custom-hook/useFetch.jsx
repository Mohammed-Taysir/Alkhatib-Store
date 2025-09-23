
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import AxiosUserInstance from '../api/AxiosUserInstance';
import AxiosInstance from '../api/AxiosInstance';

function useFetch(url, dataName, hasToken = false, id = null) {

    const fetchData = async () => {
        let response;

        if (hasToken) {
            response = await AxiosUserInstance.get(url);
        } else {
            response = await AxiosInstance.get(url);
        }


        return response;
    }
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [dataName, id],
        queryFn: fetchData,
        staleTime: 1000 * 60 * 5
    })




    return { data, isLoading, isError, error };

}

export default useFetch;