import React from'react';
import Hoc from './HOC';

const LikePost2 = (props)=>{
    const {count,handleCount} = props;

    return (
        <div>
            <button onClick={handleCount}>Like Post {count}</button>
        </div>
    )
}
export default Hoc(LikePost2);