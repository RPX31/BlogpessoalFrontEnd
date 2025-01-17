import { useNavigate } from 'react-router-dom';

function Cadastro() {
  
    const navigate = useNavigate();

  function handleSubmit() {
    navigate('/login');
  }

  return (
    <button onClick={handleSubmit}>
      Ir para o Componente Login
    </button>
  );
}

export default Cadastro;