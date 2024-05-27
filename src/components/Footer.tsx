import moment from "moment";

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 text-white py-10 mt-5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4">Infobae</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Sobre nosotros</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Carrera</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Noticias</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contactanos</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Resources</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Centro ayuda</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Politicas</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Bases y condiciones</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Seguinos</h2>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p>&copy; { moment().format('YYYY')} Infobae Challenge. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;