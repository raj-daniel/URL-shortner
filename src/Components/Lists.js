import React from "react";
import ListItem from "./ListItem"


const Lists = ({lists}) =>{
    return (
        lists.map((listItem,index)=>{
            return <ListItem key={index} ListItem = {listItem}/>
        })
    )
}

export default Lists