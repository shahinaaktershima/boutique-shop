
import { useEffect, useState } from 'react';
import UseAuth from './UseAuth';
import UseAxios from './UseAxios';

//he
const UseAdmin = () => {
    const [userInfo,setUserInfo] = useState([])
    const {user} = UseAuth();
    const axios = UseAxios();
    useEffect(()=>{
        axios.get(`/user/admin/${user?.email}`)
        .then(res=>{
            setUserInfo(res.data)
        })
    },[axios, user?.email])
    return [userInfo]
};

export default UseAdmin;