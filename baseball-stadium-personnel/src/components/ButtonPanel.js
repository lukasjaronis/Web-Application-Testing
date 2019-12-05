import React from "react";
import styled from "styled-components";

// <ButtonPanel handleStrikes={this.handleStrikes} handleBalls={this.handleBalls} handleHit={this.handleHit} handleFoul={this.handleFoul}  />

const ButtonPanelStyles = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 30rem;
    height: 5rem;

    .button-div {
      width: 100%;
      button {
          letter-spacing: 2px;
        font-size: 1.2rem;
        background: none;
        border: 1px solid #5d001e;
        padding: 5px;
        border-radius: 15px;
        font-weight: 900;

        &:hover {
          background: #5d001e;
          color: #fff;
          border: #fff;
        }

        &:focus {
            text-decoration: none;
        }
      }
    }
  }
`;

const ButtonPanel = props => {
  return (
    <ButtonPanelStyles>
      <div className="container">
        <div className="button-div">
          <button onClick={props.handleStrikes}>Strike</button>
        </div>
        <div className="button-div">
          <button onClick={props.handleBalls}>Ball</button>
        </div>
        <div className="button-div">
          <button onClick={props.handleHit}>Hit</button>
        </div>
        <div className="button-div">
          <button onClick={props.handleFoul}>Foul</button>
        </div>
      </div>
    </ButtonPanelStyles>
  );
};

export default ButtonPanel;
