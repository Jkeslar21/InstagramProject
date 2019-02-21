import React from 'react';
import PostContainer from './PostContainer';
import styled from 'styled-components';

//Styled Components
const PostPageStyle = styled.div`
display: flex;
flex-direction: column;
max-width: 642px;
margin: auto;
`;

class PostsPage extends React.Component {
    
    render() {
        return (
            <PostPageStyle>
                <PostContainer />
            </PostPageStyle>
        );
    }
}

export default PostsPage;