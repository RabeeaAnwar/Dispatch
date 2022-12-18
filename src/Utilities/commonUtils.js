const checkValidJson =(text)=>{
    if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            return true;
    }else{
        return false;
    }
}

export const checkParams=(inputData, paramData,headerData,jsonText,setErrorMsg)=>{
    if(!inputData.url){
        setErrorMsg('Request URL missing');
        return false;
    }

    if(!checkValidJson(jsonText)){
        setErrorMsg('Text is not a valid JSON');
        return false;
    }

    return true;
}



export const getParamsAndHeaders =(objArr) =>{
    let obj = {}
    objArr.forEach(data => {
        if(data.hasOwnProperty('checked') && data.checked){
            obj = {...obj , [data.key]: data.value}
        }
        
    });

    return obj;

}

export function uuid() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
 


    //Converting response data into JSON format
export const objToJson=(data)=>{
    let obj = data;
    let readableObj = '{\n';
    for (let key in obj) {
      readableObj += '\t'
      readableObj += (typeof obj[key] === 'string') ? `${key}: "${obj[key]}"` :
        `${key} : ${obj[key]}`;
      if (Object.keys(obj).pop() !== key.toString()) {
        readableObj += ',\n'
      }
  
    }
    readableObj += '\n}'
return readableObj;
}