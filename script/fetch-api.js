'use strict'
// *************** Async definition without passing any argument *****************************
// getResponse=(callback)=>{
//     const request=new XMLHttpRequest()
//     request.addEventListener('readystatechange',(e)=>{
//         if(e.target.readyState === 4 && e.target.status===200){
//            const data=JSON.parse(e.target.responseText)
//            callback(undefined,data.puzzle)
//         }
//         else if(e.target.readyState === 4){
//             callback('there is an status error', undefined)
//         }
//     })
//     request.open('GET','http://puzzle.mead.io/puzzle')
//     request.send()
// }

// *************** synchronus definition with zero agrument passing *****************************
// getResponse=()=>{
//         const request=new XMLHttpRequest()
//         request.open('GET','http://puzzle.mead.io/puzzle')
//         request.send()
//             if(request.readyState === 4 && request.status===200){
//                const data=JSON.parse(request.responseText)
//                return data.puzzle
//             }
//             else if(request.readyState === 4){
//                 throw new Error('there is an status error')
//             }          
//         }
       
// *************** Async promise definiton without passing any extra argument *****************************
// const getResponse = new Promise((resolve,reject)=>{
//     const request=new XMLHttpRequest
//     request.addEventListener('readystatechange',(e)=>{
//         if(e.target.readyState===4 && e.target.status){
//             const data=JSON.parse(e.target.responseText)
//             resolve(data.puzzle)
//         }
//         else if(e.target.readyState===4)
//         {
//             reject('Their is an error')
//         }
//     })
//     request.open('GET','http://puzzle.mead.io/puzzle')
//     request.send()
// })

// *************** Async promise definiton with passing any extra argument *****************************
// const getResponse=(wordCount)=>{
//     return new Promise((resolve,reject)=>{
//         const request=new XMLHttpRequest
//         request.addEventListener('readystatechange',(e)=>{
//             if(e.target.readyState===4 && e.target.status){
//                 const data=JSON.parse(e.target.responseText)
//                 resolve(data.puzzle)
//             }
//             else if(e.target.readyState===4)
//             {
//                 reject('Their is an error')
//             }
//         })
//         request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//         request.send()
//     })
// } 

//*************** Asyn fetch chaining fucntion *****************************
// const getPuzzle=fetch('http://puzzle.mead.io/puzzle?').then((response)=>{
//         if(response.status===200){
//!            return response.json()    
//         }
//         else{
//             throw new error('thier is a problem')
//         }
//!     }).then((data)=>{
//        return data.puzzle
//     })

// *************** Async-await chaning with passing an argument *****************************
const getResponse= async (wordCount)=>{
    const response= await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status===200){
        const data= await response.json()
        return data.puzzle
    }
    else {
        throw new error ('unable to get puzzle')
    }
}

    