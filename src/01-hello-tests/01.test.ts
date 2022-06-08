import {multiply, splitIntoWords, sum} from "./01";
//data
let a: number;
let b: number;
let c: number;

beforeEach ( () => {
    a = 1;
    b = 2;
    c = 3;
})

test("sum should be correct", () => {
    //data
    // const a = 1;
    // const b = 2;
    // const c = 3;
    //action
    const result1 = sum(a,b);
    const result2 = sum(b,c);
    // expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test("multiply should be correct", () => {
    //data

    //action
    const result1 = multiply(a,b);
    const result2 = multiply(b,c);
    // expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test ('split into words', () => {
    //data
    const split1 = 'Hello my friend!'
    const split2 = 'JS - programming language.'
    //action
    const result1 = splitIntoWords(split1);
    const result2 = splitIntoWords(split2);
    // expect result1
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')
    // expect result2
    expect(result2.length).toBe(3)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('programming')
    expect(result2[2]).toBe('language')

})
