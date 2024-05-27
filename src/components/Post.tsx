import { useState } from "react";
import ModalComments from "./ModalComments";

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

interface IPost {
    title: string,
    tags: [string],
    author: string,
    img: string,
    CLoading: boolean,
    CError: { 
        message: string
    }
    CData: [IComments]
}

function Post({
    title,
    tags,
    author,
    img,
    CLoading,
    CError,
    CData,
}:IPost){
   
    const [modalOpen, setModalComments] = useState(false);

    if (CLoading) return ;
    if (CError) return <p>Error: {CError.message}</p>;

    return ( 
        <div className="mt-12">
            <h1 className="font-bold capitalize">{ title }</h1>
            <p className="mt-6">
                Por <span className="font-bold">{author}</span>
                <span className="ml-3">Tags:  <span className="font-bold">{tags}</span></span>
            </p>
            <img className="image mt-6" onClick={ () => setModalComments(!modalOpen)} src={img} />
            <ModalComments show={modalOpen} onClose={ () =>setModalComments(false)} comments={CData!} />
        </div> 
    );
}

export default Post;