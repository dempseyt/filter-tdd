function filter(callbackFunction, arrayToFilter){
    for(let i = 0; i < arrayToFilter.length; i++) {
        callbackFunction()
    }
}
export default filter