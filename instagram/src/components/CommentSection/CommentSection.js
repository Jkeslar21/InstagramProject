import React, {Component} from 'react';
import PropTypes from 'prop-types';


class CommentSection extends Component {
    constructor(props) {
      super(props);
      this.state = {
        newComment: '',
        comments: this.props.commentData
      };
    }
    addNewComment = e => {
        e.preventDefault();
        const newComment = {
            username: 'joshDiamond',
            text: this.state.newComment
        }
        this.setState({ comments: [...this.state.comments, newComment], newComment:''});
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
  
    render() {
        return (
            <div className='commentSection'>
            {this.state.comments.map(comment => (
                <div key={comment.text} className='comments'>
                    <p className='commentName'>{comment.username}</p>
                    <p>{comment.text}</p>
                </div>
            ))}
                <form className='commentStyle' onSubmit={this.addNewComment}>
                    <input type='text' placeholder='Add a comment...' className='commentInput' value={this.state.newComment} onChange={this.changeHandler} name='newComment' />
                </form>
            </div>
        );
    }
  }
  



// function CommentSection (props) {
//     return (
//         <div className='commentSection'>
//         {props.commentData.map(comment => (
//             <div key={comment.text} className='comments'>
//                 <p className='commentName'>{comment.username}</p>
//                 <p>{comment.text}</p>
//             </div>
//         ))}
//             <div className='commentStyle'>
//                 <input type='text' placeholder='Add a comment...' className='commentInput' />
//             </div>
//         </div>
//     );
// };

export default CommentSection;

//PropTypes
CommentSection.propTypes = {
    commentData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired, 
            text: PropTypes.string.isRequired
        })
        )
    }
    
CommentSection.defaultProps = {
        commentData: []
};
