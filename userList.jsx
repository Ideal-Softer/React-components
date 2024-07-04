/**
 * @author      Jiners Enoheart & Gunderson Paul
 * @published   July 21 2023 
 * @description UserList Component for Chat page
 */

import React from "react"

const UserList = ({ users, setSelectedUser, allState, checkUser }) => {
	let userId = sessionStorage.getItem("aff-id")
	return (
		<div className="user-list">
			<div className="user-list-ul">
				{users.length > 0 
					? users
						.sort(((a, b) => {
							if (a.socket === "all") return -1;
							if (b.socket === "all") return 1;
							if (a.socket === null && b.socket !== null) return 1;
							else if (a.socket !== null && b.socket === null) return -1;
							else return 0;
						}))
						.map((user, i) => {
							let check = checkUser(user.ID)
							return (
								Number(user.ID) !== Number(userId) ? (<div key={i} className={user.socket !== null ? "users logged" : "users"} onClick={() => setSelectedUser({ ID: user.ID })}>
									<img className="avatar" src={!user.ID ? `store/avatars/User/default`: `store/avatars/User/User-` + user.ID} alt="..." />
									<span className={user.ID !== 0 ? (check ? "select" : allState ? "select" : "") : ""}></span>
									<div className="user-name">
										{user.Name}
									</div>
								</div>) : ("")
							)
						})
					: ""}
			</div>
		</div>
	)
}

export default UserList