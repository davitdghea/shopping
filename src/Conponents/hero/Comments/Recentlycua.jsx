import React from "react";

function Recentlycua(){
    useEffect(()=>{
        setArraywish(prev=>({...prev,idWish}))
    },[idWish])
    console.log(arywissh)
 
    return(
        <>
        {ArrayRcent.map((e)=>{
            <img src={e.img}/>
        })}
        </>
    )
}
export default Recentlycua();