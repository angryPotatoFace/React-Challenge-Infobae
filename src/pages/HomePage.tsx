import Footer from "../components/Footer";
import HeaderApp from "../components/HeaderApp";
import PostList from "../components/PostList";
import UserList from "../components/UserList";


function HomePage() {

    return ( 
    <>
        <HeaderApp />
        <h1 className=" mt-10 text-orange-500 text-center font-semibold text-7xl">InfoBae</h1>

        <div className="flex">
            <PostList />
            {/* Dejo este componente visible dado que no puedo crear proyecto en Google Cloud*/}
            <UserList />
        </div>
     

        <Footer/>
    </> 
    );
}

export default HomePage;