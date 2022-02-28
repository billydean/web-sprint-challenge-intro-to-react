import Character from './Character';
// need Routes, React
import React from 'react';
import styled from 'styled-components';


const CharacterList = (props) => {
    const { characters } = props;
    // const characters = bucket.concat(character);

    return(
        <div className="container">
                { characters.map((character, index) => {
                    console.log(character);
                    return <Character char={character} key={character.id} />
                    })}
        </div>
    )
}

export default CharacterList;