import moment from "moment";
import { Link } from "react-router-dom";

function HeaderApp() {
    const countries = ['Argentina','Colombia','España','Mexico','Peru','Mundo']

    return ( 
    <div className="drop-shadow-md border-b p-2 flex text-m">
        <Link className="text-center text-orange-500 text-2xl mr-6 ml-6 my-auto" to={"/"}>InfoBae</Link>
        <h3 className="text-center mr-6 ml-6 font-medium my-auto">{ moment().format('Do MMMM, YY') }</h3>
        <div className="ml-24">
            {
                countries.map( (elem:string) => <button className="gap-2 bg-transparent" key={elem} >{elem}</button>)
            }
        </div>
        <Link className="ml-auto normal-case" to={'./registration'} replace={true}>
            <button className="bg-orange-100 border-full">Registracion</button>
            <button className="ml-2 mr-2 bg-transparent">Inicio Session</button>
        </Link>
    </div> 
    );
}

export default HeaderApp;