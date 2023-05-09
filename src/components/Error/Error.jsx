import React from 'react'
import errorImg from '../../assets/errorImg.jpg'

const Error = () => {
  return (
    <img src={errorImg} alt="Error" style={{width: '50%',
        transform: 'translate(50%,50%)',
        borderRadius: '25%'
      }} />
  )
}

export default Error