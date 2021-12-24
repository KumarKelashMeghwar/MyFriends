import './card.css';

const Card = (props) =>{
    
    return (
        <div className="card">
            <img src={props.name.imgsrc} alt='Milton'/>
            <div className="card-info">
                <h3>{props.name.data}</h3>
                <p>
                    {props.name.info}
                </p>
                <a href={props.name.href} target="_blank">
                    <button className='btn'>Profile</button>
                </a>
            </div>
        </div>
    );
}


const Component = (props) => {
    return (
       <>
            <Card name={props} />
       </>
    )
}


export default Component;