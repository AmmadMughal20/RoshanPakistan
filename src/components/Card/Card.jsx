import React from 'react'
import './Card.scss'

const Card = (props) => {
    return (
        <div className='card-container'>
            <div className='image-div'>
                <img src={props.image} alt='image' style={{ width: '100%', height:'100%' }} />
            </div>
            <div className='content-div'>
                <h2 >
                    {props.title}
                </h2>
                <p >
                    {props.description}
                </p>
                <button style={{ backgroundColor: '#01411c', borderRadius: '5px', padding: '10px', color: 'white', border: 'none', width: '150px' }}>
                    Login Here
                </button>
            </div>
        </div >
    )
}

export default Card