import React from 'react'
import './CounterCard.scss'

const CounterCard = (props) => {
  return (
    <div style={{ padding: '2%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#01411c', textAlign: 'center', color: 'white', fontFamily: 'Arial', borderRadius: '10px', width: '100px', height: '100px' }}>
      <h2 style={{ padding: '5px 5px', margin: 0 }}>
        {props.counter}+
      </h2>
      <p style={{}}>
        {props.title}
      </p>
    </div>
  )
}

export default CounterCard