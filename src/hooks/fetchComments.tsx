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
  
  const [data, setData] = useState<[IComments] | null>() ;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getComments();
        setData(response.data);
        console.log(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchComments;