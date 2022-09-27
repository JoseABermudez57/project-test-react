import '../assets/styles/contenedor.css'
import Presentacion from './Presentacion';
import Eventos from './Eventos'

function Contenedor() {
    return ( 
        <>
        <center>
            <div className="wrapper">
                <Presentacion />
                <Eventos />
            </div>
        </center>
        
        </>
     );
}

export default Contenedor;