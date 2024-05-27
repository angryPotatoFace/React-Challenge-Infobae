/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { getComments } from '../services/Comments';


interface IComments {
    id: string,
    message: string
    owner: {
        firstName: string,
        id: string,
        lastName: string
        picture: string,
        title:string
    }
    post: string,
    publishDate: string
}

const useFetchComments = () => {
  
  const [CData, setData] = useState<[IComments] | null>() ;
  const [CLoading, setLoading] = useState(true);
  const [CError, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getComments();
        setData(response.data);
        console.log(response);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { CData, CLoading, CError };
};

export default useFetchComments;