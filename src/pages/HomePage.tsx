import HeaderApp from "../components/HeaderApp";
import ModalComments from "../components/ModalComments";
import Post from "../components/Post";
import useFetchData from "../hooks/fetchData";

function HomePage() {

    const {data, loading, error } = useFetchData();

    if (loading) return ;
    if (error) return <p>Error: {error.message}</p>;

    return ( 
    <>
        <HeaderApp />
        <h1 className=" mt-10 text-orange-500 text-center font-semibold text-7xl">InfoBae</h1>
        
        <div className="ml-8">
            {
                loading?
                <p>Loading...</p>
                :
                data!.map( p => <Post title={p.text} tags={p.tags} author={`${p.owner.firstName} ${p.owner.lastName}`} img={p.image}/>)
            }
        </div>
    </> 
    );
}

export default HomePage;