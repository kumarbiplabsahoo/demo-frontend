import React, { useEffect, useState } from 'react'
import { Avatar, Typography } from '@mui/material'

const ProfileDilog = () => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Retrieve data from localStorage
        const storedData = localStorage.getItem('user');
        // Check if data is available
        if (storedData) {
            // Parse the JSON string if the data is stored as JSON
            const parsedData = JSON.parse(storedData);
            // Update the state with the retrieved data
            setUserData(parsedData);
        }
    }, []);

    return (
        <>
            <Avatar alt="User Avatar" sx={{ width: 64, height: 64, mb: 2 }} />
            <Typography variant="subtitle1">First Name: {userData?.firstName}</Typography>
            <Typography variant="subtitle1">Last Name: {userData?.lastName}</Typography>
            <Typography variant="subtitle1">Email: {userData?.email}</Typography>
            <Typography variant="subtitle1">Phone: +{userData?.phone}</Typography>
        </>
    )
}

export default ProfileDilog