import React ,{ useRef, useEffect } from 'react';
import dir from '../videoDirectory';

export default ({buttonChecked, startClick, choiceClick, choices, addButtonRef}) => {

    const buttonA = useRef(null)
    const buttonB = useRef(null)

    const onButtonClick = (side,e) => {
        if (!buttonChecked) {
            choiceClick(side)
        }
    }

    useEffect(() => {
        addButtonRef(buttonA, 'A')
        addButtonRef(buttonB, 'B')
        // eslint-disable-next-line
    }, [])

    return (

        <div className={`controlsContainer ${choices ? 'space' : 'center'}`}>

            {
                choices ?
                <button 
                    ref={buttonA}
                    className='left-button hidden'
                    onClick={e => onButtonClick('left',e)}
                >{dir[choices[0]].label}
                </button> : null
            }

            <button className="start-button" onClick={startClick}>Start</button>

            {
                choices ?
                <button 
                    ref={buttonB}
                    className='right-button hidden'
                    onClick={e => onButtonClick('right',e)}
                >{dir[choices[1]].label}
                </button> : null
            }  

        </div>

    )

}