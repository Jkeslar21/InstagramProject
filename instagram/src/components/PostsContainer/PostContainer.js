import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';

 class PostContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          dummyData: [],
          posts: [],
          filteredPosts: []
        };
      }
      componentDidMount() {
        this.setState({ posts: dummyData })
      }
      searchHandler = (e) => {
          const filtered = this.state.posts.filter((post) => {
            console.log(post)  
            return post.username.toLowerCase().includes(e.target.value.toLowerCase()) || post.likes.toString().includes(e.target.value.toString()) 
          })
          this.setState({ filteredPosts: filtered})
      }
    increaseLikeHeandler = index => {
        const newPost = [...this.state.posts]
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
        
        return (
        <div className='postContainer'>
            <SearchBar searchHandler={this.searchHandler} />
            {this.state.filteredPosts.length === 0 ?
        this.state.posts.map((dummyData, index) => ( 
            <div key={dummyData.timestamp} className='userHeader'>
                <div className='profileHeader'>
                    <img src={dummyData.thumbnailUrl} alt={dummyData.username} width='30px' height='30px' className='imgThumb' />
                    <p className='userName'>{dummyData.username}</p>
                </div>
                    <img src={dummyData.imageUrl} alt={dummyData.username} />
                 <div className='postText'>
                        <div className='icons'>
                            <i onClick={()=>this.increaseLikeHeandler(index)} class="far fa-heart fa-lg"></i>
                            <i class="far fa-comment fa-lg"></i>
                        </div>
                    <p className='likes'>{dummyData.likes} likes</p>
                    <CommentSection commentData={dummyData.comments} />
                    <p className='stamp'>{dummyData.timestamp}</p>
                </div>
            </div>
        )) :
        this.state.filteredPosts.map((dummyData, index) => ( 
            <div key={dummyData.timestamp} className='userHeader'>
                <div className='profileHeader'>
                    <img src={dummyData.thumbnailUrl} alt={dummyData.username} width='30px' height='30px' className='imgThumb' />
                    <p className='userName'>{dummyData.username}</p>
                </div>
                    <img src={dummyData.imageUrl} alt={dummyData.username} />
                 <div className='postText'>
                        <div className='icons'>
                            <i onClick={()=>this.increaseLikeHeandler(index)} class="far fa-heart fa-lg"></i>
                            <i class="far fa-comment fa-lg"></i>
                        </div>
                    <p className='likes'>{dummyData.likes} likes</p>
                    <CommentSection commentData={dummyData.comments} />
                    <p className='stamp'>{dummyData.timestamp}</p>
                </div>
            </div>
        ))    
        }
        </div>
    );
};
}




// render() {
//     return (
//     <div className='postContainer'>
//         {this.state.posts.map((dummyData, index) => ( 
//             <div key={dummyData.timestamp} className='userHeader'>
//                 <div className='profileHeader'>
//                     <img src={dummyData.thumbnailUrl} alt={dummyData.username} width='30px' height='30px' className='imgThumb' />
//                     <p className='userName'>{dummyData.username}</p>
//                 </div>
//                     <img src={dummyData.imageUrl} alt={dummyData.username} />
//                  <div className='postText'>
//                         <div className='icons'>
//                             <i onClick={()=>this.increaseLikeHeandler(index)} class="far fa-heart fa-lg"></i>
//                             <i class="far fa-comment fa-lg"></i>
//                         </div>
//                     <p className='likes'>{dummyData.likes} likes</p>
//                     <CommentSection commentData={dummyData.comments} />
//                     <p className='stamp'>{dummyData.timestamp}</p>
//                 </div>
//             </div>
//         ))}
//     </div>
// );
// };
// }

// function PostContainer (props) {
//     return (
//         <div className='postContainer'>
//             {props.dummyData.map(dummyData => ( 
//                 <div key={dummyData.timestamp} className='userHeader'>
//                     <div className='profileHeader'>
//                         <img src={dummyData.thumbnailUrl} alt={dummyData.username} width='30px' height='30px' className='imgThumb' />
//                         <p className='userName'>{dummyData.username}</p>
//                     </div>
//                         <img src={dummyData.imageUrl} alt={dummyData.username} />
//                      <div className='postText'>
//                             <div className='icons'>
//                                 <i onClick={this.likeMe} class="far fa-heart fa-lg"></i>
//                                 <i class="far fa-comment fa-lg"></i>
//                             </div>
//                         <p className='likes'>{dummyData.likes} likes</p>
//                         <CommentSection commentData={dummyData.comments} />
//                         <p className='stamp'>{dummyData.timestamp}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };


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
