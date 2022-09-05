import { useState } from 'react'
import styled from 'styled-components';

const List = styled.div `
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    max-width: 300px;
    height: 100px;
    overflow: hidden;
    img {
        width: 35%;
        object-fit: cover;
        margin-right: 15px;
        border-radius: 50%;
        height: 100%;
    }
    h3 {
        margin: 0 auto 5px;
        font-size: 17px;
        letter-spacing: 0.05em;
    }
    p {
        margin: 0 auto;
    }
`

function Link({people}) {

  return (
    <>
       {people.map(({id, name,age, avatar})=>(
            <List key={id}>   
                <img src={avatar} alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <p>{age} years</p>
                </div>
            </List>
       ))}
    </>
  )
}

export default Link
