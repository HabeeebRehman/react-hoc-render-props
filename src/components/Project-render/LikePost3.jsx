import React from "react";

const LikePost3 = (props) => {
    return (
        <div>
            <button onClick={props.handelCount}>Like Post{props.count}</button>
        </div>
    )    
}
export default LikePost3;