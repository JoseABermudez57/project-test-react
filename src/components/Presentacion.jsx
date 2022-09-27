import imagen from '../assets/imgs/ImgPresentacion.png'

function Presentacion() {

  return (
    <>
      <img src={imagen} alt="" className='img-presentacion'/>    
      <h2>¡Buenas!</h2>
      <p>
        En esta página puedes conocer un pequeño resumen sobre cada evento relevante en la
        historia de <strong>México</strong>.
      </p>
    </>
  );
}

export default Presentacion;
