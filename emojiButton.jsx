/**
 * @author      Jiners Enoheart & Gunderson Paul
 * @published   July 21 2023
 * @description Emoji component
 */

import React from "react"

class EmojiButton extends React.Component {
	render() {
		return (
			<div style={{ cursor: "pointer" }} onClick={this.props.onclick}>
				{this.props.emoji[1]}
			</div>
		)
	}
}

export default EmojiButton