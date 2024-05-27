import moment from "moment";

function HeaderApp() {
    const countries = ['Argentina','Colombia','España','Mexico','Peru','Mundo']

    return ( 
    <div className="drop-shadow-md border-b p-2 flex text-m">
        <h3 className="text-center mr-6 ml-6 font-medium my-auto">{ moment().format('Do MMMM, YY') }</h3>
        <div className="ml-24">
            {
                countries.map( (elem:string) => <button className="gap-2 bg-transparent" key={elem} >{elem}</button>)
            }
        </div>
        <button className="ml-auto bg-orange-100 border-full">Registracion</button>
        <button className="ml-2 mr-2 bg-transparent">Inicio Session</button>
    </div> 
    );
}

export default HeaderApp;