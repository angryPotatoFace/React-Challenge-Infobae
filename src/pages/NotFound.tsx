import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="text-lg text-gray-600 mb-8">Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" className="text-indigo-600 hover:text-indigo-800">Volver a la página de inicio</Link>
    </div>
  );
};

export default NotFoundPage;