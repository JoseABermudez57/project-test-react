import "../assets/styles/eventos.css"
import Card from './Card';

function Eventos() {
    
    const eventos=[
        {
            imagen: '/img/1.jpeg',
            nombre: "Independencia",
            descripcion: "La independencia es el nombre con el que se conoce al movimiento político y armado que se inició en 1810 y terminó en 1821 con el reconocimiento de México como nación libre e independiente."
        },
        {
            imagen: '/img/2.jpeg',
            nombre: <h3>Guerra de reforma</h3>,
            descripcion: <p> <strong>La Guerra de Reforma</strong>, también conocida como la Guerra de los tres años, fue una guerra civil que aconteció en México desde 11 de enero de 1858 al 11 de enero de 1861. La nación estaba dividida en dos grandes grupos: Liberales y Conservadores; ambos luchaban por sus ideales.</p>
        },
        {
            imagen: '/img/3.jpeg',
            nombre: <h3>2da Intervención Francesa</h3>,
            descripcion: <p> <strong>La segunda intervención francesa</strong> en México fue un conflicto armado entre México y Francia entre los años 1862 y 1867. Tuvo lugar después de que el Gobierno mexicano, encabezado por Benito Juárez, anunciara la suspensión de los pagos de la deuda externa en 1861.</p>
        },
        {
            imagen: '/img/4.jpeg',
            nombre: <h3>Revolución</h3>,
            descripcion: <p> <strong>La Revolución Mexicana</strong> fue un conflicto armado que se inició en México el 20 de noviembre de 1910. La Revolución Francesa fue el cambio político más importante que se produjo en Europa, a fines del siglo XVIII.</p>
        }

    ]

    return ( 
        <div className='evento'>
            {eventos.map((eventos) => {
                return(<Card img={eventos.imagen} name={eventos.nombre} desc={eventos.descripcion}/>)
            })}
        </div>
     );
}

export default Eventos;