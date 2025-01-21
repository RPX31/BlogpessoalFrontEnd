import { useContext } from 'react';
 
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

function Home() {

  const { nome } = useContext(UserContext);

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen">
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4"> Usuário: <span>{nome}</span></h1>
      <h2 className="text-lg mb-6">Seja Bem Vinde </h2>
      <Link 
        to="/login" 
        className="botao bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Voltar
      </Link>
    </div>
  </div>
  
  );
}

export default Home;


