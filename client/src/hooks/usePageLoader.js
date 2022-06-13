import React, {useState, useEffect} from "react";
import LoaderWrapper from "../components/loader-wrapper/loader-wrapper.component";

const usePageLoader = () => {
    const [loading,setLoading] = useState(false);
    return [
        loading? <LoaderWrapper/> : null,
        ()=>setLoading(true),
        ()=>setLoading(false)
    ]
}

export default usePageLoader