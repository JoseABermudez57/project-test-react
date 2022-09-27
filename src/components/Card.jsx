function Card({img, name, desc}) {
    return ( 
        <>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{desc}</p><br />
        </>
     );
}

export default Card;