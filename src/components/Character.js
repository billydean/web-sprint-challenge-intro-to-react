// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Character = (props) => {
    const {char} = props;

    return (
        <div className="card">
            <h3 className="name">{ char.name }</h3>
            <div className="charinfo">
                <div className="basic-data">
                    <ul>
                        <li>{`${char.gender}`}</li>
                        <li>{ char.height }</li>
                        <li>{ char.mass }</li>
                        <li>{ char.hair_color }</li>
                        <li>{ char.skin_color }</li>
                        <li>{ char.eye_color }</li>
                    </ul>
                </div>
                <div className="flavor">
                    This character has some flavor! They sure do.
                </div>
            </div>
        </div>
    )
}

export default Character;