/**
 * @description Item-list component
 * @author      Jiners Enoheart
 * @published   Jul 07, 2023
 * @modified    Jul 16, 2023
 */

import React from "react"
import "./style.css"

export default (props) => {
  return <div className="switch" onClick={() => props.set ? props.set(!props.value) : false}>
    <div className="true"
      style={props.value ? { "visibility": "visible" } : { "visibility": "hidden" }}>
      {props.icons.true}
    </div>
    <div className="false"
      style={props.value ? { "visibility": "hidden" } : { "visibility": "visible" }}>
      {props.icons.false}</div>
    <div style={{ "clear": "both" }}></div>
  </div>
}