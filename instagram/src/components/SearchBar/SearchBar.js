import React, { Component } from 'react';
import styled from 'styled-components';

//Styled Components
const SearchBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2%;
`;
const SearchLeft = styled.div`
  display: flex;
	align-items: center;
`;
const Bar = styled.input`
  margin: 0 16%;
	text-align: center;
  border-radius: 4px;
  background-color: floralwhite;
`;
const SearchRight = styled.div`
  display: flex;
	align-items: center;
`;

class SearchBar extends Component {

    render() {
      return (
        <SearchBarStyle>
            <SearchLeft>
                <i className="fab fa-instagram fa-lg"></i>
                <img src="/instagram.png" alt="Instagram" width='100px' className='logo'></img>
            </SearchLeft>
            <Bar type='text' placeholder='search here' onChange={this.props.searchHandler} />
            <SearchRight>
                <i className="far fa-compass fa-lg compass"></i>
                <i className="far fa-heart fa-lg topHeart"></i>
                <i className="far fa-user fa-lg userIcon"></i>
            </SearchRight>
        </SearchBarStyle>
      );
    }
  }
  
  export default SearchBar;