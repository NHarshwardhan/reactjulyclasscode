//test suite

import counterReducer, { decrement, increment, incrementByAmount } from "../redux/counterSlice"

describe('counter reducer',()=>{
     
    const initialState = {value :0}

    // it('should handle initial state',()=>{
    //     expect(counterReducer(undefined,{type:'unknown'})).toEqual(initialState)
    // })

    it('should handle increment',()=>{
          const actual =  counterReducer(initialState,increment())
          expect(actual.value).toEqual(1);

    })

    it('should handle decrement',()=>{
        const actual =  counterReducer({value:1},decrement())
        expect(actual.value).toEqual(0);

     })

     it('should handle increment by amount',()=>{
        const actual =  counterReducer(initialState,incrementByAmount(5))
        expect(actual.value).toEqual(6);

     })


 
})