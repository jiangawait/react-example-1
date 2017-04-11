import React, {
  Component
} from 'react'

class Comment extends Component {
  render() {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
          <span>{this.props.comment.tel} </span>：
          <span>{this.props.comment.mail} </span>：
        </div>
        <p>{this.props.comment.content}</p>
      </div>
    )
  }
}

export default Comment