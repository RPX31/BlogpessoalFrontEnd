import { useParams } from 'react-router-dom';

function Perfil() {

  const { id } = useParams();

  return (
   
      <div>
        `Parâmetro id: ${id}`;
      </div>
   
  );
}

export default Perfil;