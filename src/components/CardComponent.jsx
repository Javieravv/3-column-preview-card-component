import { useState } from 'react'
import './css-components/card-component.css'


export const CardComponent = ({
    icono,
    title,
    description,
    color
}) => {
    const [colorButton, setColorButton] = useState(color)

    const styles = {
        "card-container": {
            backgroundColor: color
        } ,
        "button": {
            color: colorButton
        },
    }

    const onMouseEnterButton = () => {
        setColorButton ("white")
    }
    const onMouseLeaveButton = () => {
        setColorButton ( color )
    }


    return (
        <div 
            className="card-container"
            style={styles['card-container']}
        >
            <img className="img-card"
                src={`./images/${ icono }`}
                alt="Imagen"
            />
            <h2 className="title-card"> { title }</h2>
            <p className="description-card">{ description }</p>
            <button 
                className="button-card"
                style={styles['button']}
                onMouseEnter={ onMouseEnterButton }
                onMouseLeave={ onMouseLeaveButton }
            >Learn More</button>
        </div>
    )
}
