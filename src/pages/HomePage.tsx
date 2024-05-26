import { useEffect, useState } from "react";
import HeaderApp from "../components/HeaderApp";
import Post from "../components/Post";
import { getPost } from "../services/Post";

function HomePage() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await getPost()
              console.log(response);
            } catch (err) {
              setError(err);
            } finally {
              setLoading(false);
            }
        };
      
        fetchData();
    }, []);

    return ( 
    <>
        <HeaderApp />
        <h1 className=" mt-10 text-orange-500 text-center font-semibold text-7xl">InfoBae</h1>
        <div className="ml-8">
            <Post title1={undefined} description1={undefined} author1={undefined} img1={undefined}/>
        </div>

    </> 
    );
}

export default HomePage;