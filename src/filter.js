function filter(callbackFunction, arrayToFilter){
    for(let i = 0; i < arrayToFilter.length; i++) {
        callbackFunction(arrayToFilter[i])
    }
    return []
}
export default filter