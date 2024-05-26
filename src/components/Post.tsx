
function Post({
    title1,
    description1,
    author1,
    img1,
}){

    const title = "Macri tomó el control del PRO en Buenos Aires y Bullrich romperá el bloque parlamentario como respuesta";
    const description = "El ex Presidente impulsó a Ritondo para presidir el partido bonaerense y aislar al bullrichismo. Busca impedir una fusión con La Libertad Avanza. La ministra de Seguridad responderá este martes con una jugada que busca sacudir el tablero";
    const author = "Robertino Sánchez Flecha";
    const img = "https://www.infobae.com/new-resizer/U42qF6AP4uxagpgFgUytJiNknOo=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/XUVQCBPHPVDPDI2W2C55AEBK2I.jpg"

    return ( 
        <div className="mt-12">
            <h1 className="font-bold">{ title }</h1>
            <p className="text-2xl mt-6">{ description}</p>
            <p className="mt-6">Por <span className="font-bold">{author}</span></p>
            <img className="image mt-6" src={img} />
        </div> 
    );
}

export default Post;