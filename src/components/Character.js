// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-color: #2f3844;
    width: 80%;
    margin: auto;
    border-radius: 15px;
    overflow: hidden;
`;
const Name = styled.div`
    background-color: #707071;
    border-radius: 0px;
    margin: 0;
    & h3{
        font-size: 1.8rem;
        margin: 0;
        padding: .8rem 0 .5rem 0;
        text-transform: uppercase;
        letter-spacing: 1vw;
        color: #d9d2c9;
        text-shadow: 1px 1px 5px #2f3844, -1px -1px 5px #2f3844, 1px -1px 5px #2f3844, -1px 1px 5px #2f3844;
    }
`;
const Info = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
const Basic = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100px;
    gap: 15px;
    width: 300px;
    margin: 15px 0;
    padding: 0 0 0 1%;
`;
const Item = styled.li`
    color: #d9d2c9;
    flex: 3 0 auto;
    font-size: 1rem;
    line-height: 100%;
    overflow-wrap: normal;
    min-width: 20%;
    list-style-type: none;
    & span{
        text-transform: capitalize;
    }

`;
const Flavor = styled.div`
    flex: 1;
    padding: 10px;
    color: #d9d2c9;
    font-size: 1.2rem;
    font-style: italic;
    min-width: 50%;
`;

const Character = (props) => {
    const {char} = props;

    return (
        <Card>
            <Name><h3>{ char.name }</h3></Name>
            <Info>
                <Basic>
                   
                        <Item><span>{ char.gender }</span></Item>
                        <Item>{ char.height } cm</Item>
                        <Item>{ char.mass } kg</Item>
                        <Item><span>{ char.hair_color }</span> hair</Item>
                        <Item><span>{ char.skin_color }</span> skin</Item>
                        <Item><span>{ char.eye_color }</span> eyes</Item>
                    
                </Basic>
                <Flavor>
                    This character has some flavor! They sure do.
                </Flavor>
            </Info>
        </Card>
    )
}

export default Character;