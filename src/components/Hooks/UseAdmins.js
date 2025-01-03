
import UseAuth from "./UseAuth";
import UseAxios from "./UseAxios";
import { useEffect, useState } from "react";

const UseAdmins = () => {
  const axios = UseAxios();
  const { user } = UseAuth();
  const [isAdmin, setIsAdmin] = useState();
  useEffect(() => {
    axios.get(`/user/admin/${user.email}`).then((res) => {
      setIsAdmin(res.data?.admin);
    });
  }, [axios, user?.email]);
  return [isAdmin];
};

export default UseAdmins;
