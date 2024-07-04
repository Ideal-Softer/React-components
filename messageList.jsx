/**
 * @author      Jiners Enoheart & Gunderson Paul
 * @published   July 21 2023
 * @description MessageList Component for Chat page
 */

import React, { useEffect } from "react"
import Message from "./message"
import { connect } from "react-redux"
import { setMsgCnt } from "../../actions/messageStatus"
import { dispatcher } from "../../reducers/store"

const MessageList = ({ messages, userNumber, getUserName, onHandlerScroll }) => {
	useEffect(() => {
		dispatcher(setMsgCnt(messages.length))
	})
	
	return (
		<div onScroll={onHandlerScroll} id="message_list" className="message-list">
			{messages && messages.length > 0  
				? messages.map((msg, i) => {
					let receivers = getReceivers(msg.receivers), readers
					readers = getReceivers(msg.readers)
					return (<Message getUserName={getUserName} key={i} userNumber={userNumber} sender={msg.sender} receivers={receivers} readers={readers} time={msg.time} msg={msg.msg}></Message>)})
				: ""
				}
		</div>
	)
}

/**
 * Function to convert array
 * init array: [{ ID: 1, ID: 2, ... }]
 * @param {Array} receivers 
 * @returns [1, 2, ...]
 */
const getReceivers = (receivers) => {
	let receiver = []
	for (let i = 0; i < receivers.length; i++) {
		receiver.push(receivers[i].ID)
	}
	return receiver
}

const mapStateToProps = (state) => ({
	messages: state.messageList
})

export default connect(mapStateToProps)(MessageList)
