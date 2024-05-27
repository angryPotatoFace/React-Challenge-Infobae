import { useState, useEffect } from 'react';
import { getPost } from '../services/Post';


type Data = {
    id: string;
    image: string;
    likes: number;
    owner: {
        firstName: string,
        id: string,
        lastName: string,
        picture: string,
        title: string,
    }
    text: string;
    body: string;
    tags: [string]
};


const useFetchData = () => {
  
  const [data, setData] = useState<[Data] | null>() ;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPost();
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

export default useFetchData;