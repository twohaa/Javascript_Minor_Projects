//HackerMan

let a = [
    "Initializing hack tool....",
    "Connecting to facebook...",
    "Connecting to Server 1...",
    "Connection Failed..Retrying..",
    "Connecting to Server 2...",
    "Connected Successfully...",
    "username mahfuzztwohaa",
    "retrying brute force",
    "200k password tried...",
    "Match not found!",
    "Another 200k password tried...",
    "Match not found!",
    "Another 200k password tried...",
    "Match found...",
    "accessing account....",
    "hack successfull...."
]

const sleep = async (seconds)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(true)
        },seconds*1000)
    })
}
const showHack = async(messages)=>{
    await sleep(2)
    // console.log(messages)
    text.innerHTML = text.innerHTML + messages + "</br>"
}

//IIFE
(async()=>{
    for(let i=0; i<a.length; i++){
        await showHack(a[i])
    }
})()