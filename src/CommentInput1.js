import React, {
	Component
} from 'react'

class CommentInput1 extends Component {
	constructor() {
		super()
		this.state = {
			text: ''
		}
	}
	handleUsernameChange(event) {
		this.setState({
			text: event.target.value
		})
		if (this.props.onSubmit) {
			this.props.onSubmit(
				event.target.value
			)
		}
	}


	render() {
		return (
			<div className='comment-field'>
          <span className='comment-field-name'>{this.props.name}</span>
          <div className='comment-field-input'>
            <input value={this.state.text}
             onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
		)
	}
}

export default CommentInput1