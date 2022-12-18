import axios from "axios";
import { getParamsAndHeaders } from "../Utilities/commonUtils";


export const getData=async(inputData, paramData, headerData, jsonText )=>{
    const apiType = inputData.type.toLowerCase();
    const apiURL = inputData.url;
    const apiParams = getParamsAndHeaders(paramData);
    const apiHeaders = getParamsAndHeaders(headerData);
    try{
            return await axios({
                method: apiType,
                url: apiURL,
                body: jsonText,
                headers : apiHeaders,
                params : apiParams

            })
    }
    catch(error){
        console.log('Error while calling getData API'+ error );
        return 'error';

    }

}