import React, { useEffect } from 'react';
import { Header } from '../common/header';
import { Footer } from '../common/footer';

import Api from '../helpers/Api'

export const User = () => {

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const fetchData = await Api.get(`getAllUsers`);
                // setUserListings(fetchData?.data)
                console.log('fetchData', fetchData?.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUserData()
    }, [])

    return (
        <>
            <Header />
            <div>User</div>
            <Footer />
        </>
    )
}
