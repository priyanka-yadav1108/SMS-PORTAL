import { useEffect, useState } from "react";
import curdOperation from "../utilities/curdOperation";


function useApihooks(path=''){
    let[data, setData] = useState();

    useEffect(()=>{
        let apiResult = curdOperation(path);

        apiResult.then(res=>{
            setData(res.data);
        })

    },[])

    return data;
}

export default useApihooks;