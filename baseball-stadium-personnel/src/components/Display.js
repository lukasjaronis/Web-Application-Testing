import React from 'react';
import styled from 'styled-components';


const DisplayStyles = styled.div`

.outerContainer {
    display: flex;
    flex-direction: row;
    width: 30rem;
    height: 10rem;
    margin-top: 10%;
   


    .spanInnerContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
        margin: 0 auto;

        h1 { 
            font-weight: 900;
            color: #1a1a1d;
        }

        span {
            font-weight: 900;
            color: #ee4c7c;
            font-size: 2rem;
        }
   
    }
}

`;


//strikes={this.state.strikes} balls={this.state.balls}

const Display = props => {
    return(
        <DisplayStyles>
        <div className="outerContainer">

        <div className="spanInnerContainer">
        <h1>Strike</h1>
        <span>{props.strikes}</span>
        </div>

        <div className="spanInnerContainer">  
        <h1>Ball</h1>
        <span>{props.balls}</span>
        </div>  
        </div>
        </DisplayStyles>
    )
}

export default Display;