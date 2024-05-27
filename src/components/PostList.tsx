import useFetchComments from "../hooks/fetchComments";
import useFetchData from "../hooks/fetchData";
import Post from "./Post";


function PostList() {
    const {data, loading, error } = useFetchData();
    const {CData, CLoading, CError } = useFetchComments();
    
    if (loading) return ;
    if (error) return <p>Error: {error.message}</p>;

    return ( 
        <div className="ml-8">
        {
            loading?
            <p>Loading...</p>
            :
            data!.map( p => <Post 
                key={p.id} 
                title={p.text} 
                tags={p.tags} 
                author={`${p.owner.firstName} ${p.owner.lastName}`} 
                img={p.image}
                CData={ CData!}
                CError={ CError!}
                CLoading={ CLoading}
                />
            )
        }
        </div> 
    );
}

export default PostList;