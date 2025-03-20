async function curdOperation(endURL, body={}) {
    let apiPath = process.env.REACT_APP_API_PATH;
    let result = await fetch(apiPath+endURL, body);
    let responseData = await result.json();

    return responseData
}

export default curdOperation;