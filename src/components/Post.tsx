import { useState } from "react";
import useFetchComments from "../hooks/fetchComments";
import ModalComments from "./ModalComments";

interface IPost {
    title: string,
    tags: [string],
    author: string,
    img: string
}

function Post({
    title,
    tags,
    author,
    img,
}:IPost){
   
    const {data, loading, error } = useFetchComments();
    const [modalOpen, setModalComments] = useState(false);

    if (loading) return ;
    if (error) return <p>Error: {error.message}</p>;

    return ( 
        <div className="mt-12">
            <h1 className="font-bold capitalize">{ title }</h1>
            <p className="mt-6">
                Por <span className="font-bold">{author}</span>
                <span className="ml-3">Tags:  <span className="font-bold">{tags}</span></span>
            </p>
            <img className="image mt-6" onClick={ () => setModalComments(!modalOpen)} src={img} />
            <ModalComments show={modalOpen} onClose={ () =>setModalComments(false)} comments={data!} />
        </div> 
    );
}

export default Post;