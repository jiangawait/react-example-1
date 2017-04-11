import React, {
	Component
} from 'react'
import CommentInput1 from './CommentInput1'

class CommentInput extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			content: '',
			tel: '',
			mail: ''
		}
	}
	handleUsernameChange(event) {
		this.setState({
			username: event.target.value
		})
	}
	handleContentChange(event) {
		this.setState({
			content: event.target.value
		})
	}
	handleSubmit() {
		if (this.props.onSubmit) {
			const {
				username,
				content,
				tel,
				mail
			} = this.state
			this.props.onSubmit({
				username,
				content,
				tel,
				mail
			})
		}
		this.setState({
			content: ''
		})
	}

	handleCommentInfo(text) {
		if (!text) return
		this.setState({
			username: text
		})
	}
	handleTelInfo(text) {
		if (!text) return
		this.setState({
			tel: text
		})
	}
	handleMailInfo(text) {
		if (!text) return
		this.setState({
			mail: text
		})
	}

	render() {
		return (
			<div className='comment-input'>
        <CommentInput1 name='用户名：' onSubmit={this.handleCommentInfo.bind(this)} />
        <CommentInput1 name='电话：' onSubmit={this.handleTelInfo.bind(this)} />
         <CommentInput1 name='邮箱：' onSubmit={this.handleMailInfo.bind(this)} />
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content}
             onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
		)
	}
}

export default CommentInput