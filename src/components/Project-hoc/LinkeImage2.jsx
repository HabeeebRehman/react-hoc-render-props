import React, { useState } from'react'
import Hoc from './HOC';

const LikeImage2 = (props)=>{
    const {count,handleCount} = props;

    return (
        <div>
            <button onClick={handleCount}>Like Image {count}</button>
        </div>
    )
}
export default Hoc(LikeImage2);