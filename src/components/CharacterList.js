import Character from './Character';
// need Routes, React
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 60%;
    justify-content: center;
    margin 1.5vh auto 3vh auto;
    gap: 1.5vh;
`

const CharacterList = (props) => {
    const { characters } = props;
    // const characters = bucket.concat(character);

    return(
        <Container>
                { characters.map((character, index) => {
                    console.log(character);
                    return <Character char={character} key={character.id} />
                    })}
        </Container>
    )
}

export default CharacterList;