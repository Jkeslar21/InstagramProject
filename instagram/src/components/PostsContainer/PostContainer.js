import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import styled from 'styled-components';

//Styled Components
const UserHeader = styled.div`
    border: 1px solid #00618c;;
    margin-bottom: 3%;
    background-color: floralwhite;
`;
const ProfileHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 3%;
`;
const ImgThumb = styled.img`
    border-radius: 50%;
`;
const UserNamePost = styled.p`
    font-weight: bold;
	padding-left: 1%;
    font-size: 1rem;
    position: relative;
    top: 6.5px;
    &:hover{
        color: #00618c;
        cursor: pointer;
    }
`;
const PostText = styled.div`
    padding: 2%;
`;
const Likes = styled.p`
    font-weight: bold;
    padding: 2% 0;
    
`;
const Stamp = styled.p`
    color: grey;
	font-size: .7rem;
	margin-left: 40%;
`;

 class PostContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          dummyData: [],
          posts: [],
          filteredPosts: [],          
        };
      }
      componentDidMount() {
            console.log('cdm', this.state.posts)
        this.setState({ posts: dummyData })
      }
      searchHandler = (e) => {
          const filtered = this.state.posts.filter((post) => {  
              console.log(post)
            return post.username.toLowerCase().includes(e.target.value.toLowerCase()) || post.likes.toString().includes(e.target.value.toString()) 
          })
          this.setState({ filteredPosts: filtered})
      }
    increaseLikeHandler = index => {
        const newPost = [...this.state.posts]
        console.log(newPost[index].liked)
        if (newPost[index].liked) {
            newPost[index].likes--
            newPost[index].liked = false;
        } 
        else {
            newPost[index].likes++
            newPost[index].liked = true;
        } this.setState({ posts: newPost })
    }
    render() {
        console.log('render', this.state.posts)
        return (
        <>
            <SearchBar searchHandler={this.searchHandler} />
            {this.state.filteredPosts.length === 0 ?
        this.state.posts.map((dummyData, index) => ( 
            <UserHeader key={dummyData.timestamp}>
                <ProfileHeader>
                    <ImgThumb src={dummyData.thumbnailUrl} alt={dummyData.username} width='30px' height='30px' />
                    <UserNamePost>{dummyData.username}</UserNamePost>
                </ProfileHeader>
                    <img src={dummyData.imageUrl} alt={dummyData.username} />
                 <PostText>
                        <>
                            <i onClick={()=>this.increaseLikeHandler(index)} className={dummyData.liked ? "fas fa-heart fa-lg" : "far fa-heart fa-lg"}></i>
                            <i className="far fa-comment fa-lg"></i>
                        </>
                    <Likes><span className='blueLikes'>{dummyData.likes}</span> <span className='blackLikes'>likes</span></Likes>
                    <CommentSection commentData={dummyData.comments} />
                    <Stamp>{dummyData.timestamp}</Stamp>
                </PostText>
            </UserHeader>
        )) :
        this.state.filteredPosts.map((dummyData, index) => ( 
            <UserHeader key={dummyData.timestamp}>
                <ProfileHeader>
                    <ImgThumb src={dummyData.thumbnailUrl} alt={dummyData.username} width='30px' height='30px' />
                    <UserNamePost>{dummyData.username}</UserNamePost>
                </ProfileHeader>
                    <img src={dummyData.imageUrl} alt={dummyData.username} />
                 <PostText>
                        <>
                            <i onClick={()=>this.increaseLikeHandler(index)} className={dummyData.liked ? "fas fa-heart fa-lg" : "far fa-heart fa-lg"}></i>
                            <i className="far fa-comment fa-lg"></i>
                        </>
                    <Likes>{dummyData.likes} likes</Likes>
                    <CommentSection commentData={dummyData.comments} />
                    <Stamp>{dummyData.timestamp}</Stamp>
                </PostText>
            </UserHeader>
        ))    
        }
        </>
    );
};
}

//PropTypes
PostContainer.propTypes = {
    dummyData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired
        })
        )
    }
    
PostContainer.defaultProps = {
        dummyData: []
};

export default PostContainer;