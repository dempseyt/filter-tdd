function filter(callbackFunction, arrayToFilter){
    let filteredArray = []
    for(let i = 0; i < arrayToFilter.length; i++) {
        if(callbackFunction(arrayToFilter[i])) {
            filteredArray.push(arrayToFilter[i])
        }
    }
    return filteredArray
}
export default filter