import React, {useState, useEffect} from "react";
import LoaderWrapper from "../components/loader-wrapper/loader-wrapper.component";

export const IsLoadingHOC = (WrappedComponent,loadingMessage) => {
    function HOC(props){
        const [loading, setLoading] = useState(true);


        return (
            <>
                {loading && <LoaderWrapper/>}
                <WrappedComponent {...props} setLoading={(prev)=>!prev}/>
            </>
        )
    }
    return HOC

}
export default IsLoadingHOC

// const isLoadingHOC = ({component}) => {
//   const [loading, setLoading] = useState(true);

//   useEffect(()=>{
//     setLoading(prev=> !prev)
//   },[]);


//   return (
//     <div>isLoadingHOC</div>
//   )
// }

// export default isLoadingHOC