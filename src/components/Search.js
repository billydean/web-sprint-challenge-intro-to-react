import React from 'react';
import styled from 'styled-components';

const SearchBox = styled.div`
    display: flex;
    justify-content: center;
    width: 48%;
    margin: auto;
    overflow: hidden;
    border-radius: 0 10px 10px 0;
`
const Field = styled.input`
    flex: auto;
`
const Button = styled.button`
    background-color: #707071;
    height: 30px;
    width: 30px;
    border-radius: 0 10px 10px 0;
    &:hover {
        background-color: #d9d2c9;
        border-color: #d9d2c9;
        border-style: inset;
    }
`

const Search = (props) => {
    const changeHandler = event => {
        props.setSearchTerm(event.target.value);
    }

    return(
        <SearchBox>
            <Field type="text" placeholder="Search..." name="search" onChange={changeHandler} />
            <Button type="submit"></Button>
        </SearchBox>
    )
}

export default Search;