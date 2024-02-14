import filter from './filter'
describe('filter',()=>{
    describe('Given a callback function and an array',()=>{
        it('invokes the callback function once per item in the array',()=>{
            const arrayToFilter = [1,2,3]
            const numberOfItemsInArrayToFilter = arrayToFilter.length
            const callbackFunction = jest.fn()

            filter(callbackFunction,arrayToFilter)
            expect(callbackFunction).toHaveBeenCalledTimes(numberOfItemsInArrayToFilter)
        })
        it('invoke the callback function passing it an item from the array as a parameter', ()=>{
            const arrayToFilter = [1,2]
            const callbackFunction = jest.fn()
            
            filter(callbackFunction, arrayToFilter)
            expect(callbackFunction).toHaveBeenNthCalledWith(1, 1)
            expect(callbackFunction).toHaveBeenNthCalledWith(2, 2)
        })
        it.skip('returns an array', ()=>{})
        it.skip('returns a new array', ()=>{})
        it.skip('returns an array of items for which the callback function is truthy', ()=>{})
    })
})