import React,{useState} from'react';

const Hoc = (OrginalComponent)=>{
    const newComponent = ()=>{
        const [count,setCount] = useState(0);

        const handleCount = ()=>{
            setCount((prev)=> prev+1);
        };

        return <OrginalComponent count={count} handleCount={handleCount}/>
}
    return newComponent;
}
export default Hoc;