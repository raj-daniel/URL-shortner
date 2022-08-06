import React from "react";
import './listItem.css'

const ListItem =({ListItem})=>{
    return (
        <div className="individualList">
        <span>{ListItem.originalURL}</span>
        <span>{ListItem.shortURL}</span>
        </div>
    )
}

export default ListItem;