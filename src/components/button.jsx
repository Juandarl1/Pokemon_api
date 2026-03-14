
import '../sass/Button.scss';

const Button = (props) =>{
    return (
        <div className='btnbox'>
            <button className="btn">{props.text}</button>
        </div>
    )
}

export {Button};