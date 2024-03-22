// asynchronous code:
// Browser event handlers, network calls, buffers / streams, 
// working with file / directories, setTimeout / setInterval,
// databases

// JavaScript one thread - the main thread 

// Solution 1. Callbacks
// Problem: Callback hell - nestede callbacks - also known as Pyramid of doom

// Solution 2. Promises - syntax sugar for callbacks
// States: 
// 1. Pending
// 2. Fulfilled
//   - resolved
//   - rejected
//
// Solution 3. Async/Await
// syntactic sugar
//
//
//
//
new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve("Everything ok")
        }catch(error) {
            reject(error);
        }
    }, 2000)
})
// resolve other functions inside then if you need a respons to the resolve
.then(successMessage => console.log(successMessage)) 
.catch(errorMessage => console.log(errorMessage));
console.log("I'm walking here...")


// assignment: Create a promisified function
// that is, a function that returns a new promise
// it should be called myPromise
// and it should either resolve "Something good" or reject as "Something bad"
// create a 3 second timeout to simulate asynchronous behavior

function myPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                resolve("Value is true")
            }catch(error) {
                reject("Value is false")
            }
        }, 3000)
    })
}
// console.log(myPromise())
// myPromise(value)
// .then(success => console.log(success))
// .catch(fail => console.log(fail));

// assignment - try to simulate a fetch function
// call it myFetch
// it should return the promise json() so that you can call rsponse.json on it
// as much as possible try to imagine how fetch works and simulate the underlying code
//
// function myFetch(){
//     return new Promise((reject, resolve) =>{
//         setTimeout(() => {
//             try{
//                 resolve({
//                     json: () => new Promise((reject, resolve) => resolve("Response from server"))
//                     })
//                 } catch(error) {
//                 console.log(error)
//                 reject("No data found")
//             }
//         }, 3000)
//     })
// }

// myFetch()
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

// IIFE - wrapping function in paranthesis and calling it - Immediate Invoked Function Expression
// doesnt need function name nor does it need functionname
(async () => {
    try{
        const myPromiseResult = await myPromise().catch(error => error);
        console.log(myPromiseResult);
    }catch(error) {
        console.log(error)
    }
})()