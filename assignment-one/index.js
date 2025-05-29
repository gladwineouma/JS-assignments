function sendRemainder(email){
    setTimeout(()=>{
        console.log(`Remainder to ${email}`)
    },5000)
}
sendRemainder("gladwine@gmail.com");
sendRemainder("akirachix@gmail.com");
sendRemainder("codehive@gmail.com");


function countDown(){
    let count = 5;
    const interval = setInterval(()=>{
        console.log(count);
        if (count === 0){
            clearInterval(interval)
            console.log("Time is up")
        }
        count --;
    },1000)
}
countDown();


