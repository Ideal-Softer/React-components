/**
 * @description: Message component that users send or receive
 * @author	 	 Jiners Enoheart & Gunderson Paul
 * @published    July 31 2023
 */

import React from "react"

const readUser = (id, readers) => {
	let i = readers.findIndex((reader) => reader === id), readStatus
	i > -1 ? readStatus = "unread" : readStatus = "read"
	return readStatus
}

const Message = ({ sender, msg, time, receivers, userNumber, getUserName, readers }) => {
	let user = sessionStorage.getItem("aff-id")
	return (
		<div className={Number(user) === Number(sender) ? "post in" : "post out"}>
			<div className="avatar">
				<img alt="" src={`store/avatars/User/User-` + sender} />
			</div>
			<div className="message">
				<span className="arrow"></span>
				<div className="user-name">
					{Number(sender) !== Number(user) ? (<span className={`read`}>{getUserName(sender)}</span>) : (receivers.length === (userNumber - 2) ? (<span className={`read`}>{`To all`}</span>) : (!receivers || receivers.length <= 0 ? "" : receivers.map((rec, i) => (<span className={readUser(rec, readers)} key={i}>{getUserName(rec) + ", "}</span>))))}
				</div>
				<div className="date">{time}</div>
				<div className="content">{msg}</div>
			</div>
		</div>
	)
}

export default Message