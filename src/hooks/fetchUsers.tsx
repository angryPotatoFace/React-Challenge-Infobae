/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { getUsers } from '../services/Users';


interface IUser {
  firstName: string,
  id: string,
  lastName: string,
  picture: string,
  title: string,
}

const useFetchUsers = () => {
  const [users, setUsers] = useState<[IUser] | null>() ;
  const [Uloading, setLoading] = useState(true);
  const [Uerror, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
        console.log(response);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { users, Uloading, Uerror };
};

export default useFetchUsers;