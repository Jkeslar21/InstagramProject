import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//Styled Components
const Comments = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 2%;
`;
const CommentName = styled.p`
    font-weight: bold;
	padding-right: 1%;
`;
const CommentText = styled.p`
    color: #00618c;
`;
const CommentStyle = styled.form`
    border-top: 1px solid lightgrey;
	padding: 3% 0;
`;
const CommentInput = styled.input`
    border: none;
    background-color: floralwhite;
    color: #00618c;
`;

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
            <div>
            {this.state.comments.map(comment => (
                <Comments key={comment.text}>
                    <CommentName>{comment.username}</CommentName>
                    <CommentText>{comment.text}</CommentText>
                </Comments>
            ))}
                <CommentStyle onSubmit={this.addNewComment}>
                    <CommentInput type='text' placeholder='Add a comment...' value={this.state.newComment} onChange={this.changeHandler} name='newComment' />
                </CommentStyle>
            </div>
        );
    }
  }

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
