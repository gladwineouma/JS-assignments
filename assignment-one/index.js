// pseudocode
// create an async function that that sends remainder to new users
// set a time out where emails will be sent after intervals of 5 seconds

async function sendRemainder(email){
   await new Promise(resolve => setTimeout(resolve,5000));
   console.log(`Reminder send to ${email}`);
   
}
sendRemainder("gladwine@gmail.com");
sendRemainder("akirachix@gmail.com");
sendRemainder("codehive@gmail.com");

// Pseudocode
// Create a function that take in log in attempts
// Initialize login attempt at 0
// Increment count as the login attempt continues
// Stimulate a condition when the attempt has passed or failed
// Handle successful result using resolve
// Handle failed using catch


function tryLogin() {
    let loginAttempt = 0;
    return new Promise((resolve, reject) => {
        function attemptLogin() {
            loginAttempt++;
            setTimeout(() => {
                if (loginAttempt < 3) {
                    console.log(`Attempt ${loginAttempt}: Login failed`);
                    attemptLogin();
                } else if (loginAttempt === 3) {
                    console.log("Login successful");
                    resolve();
                }else{
                    reject (`Login failed after 3 attempts`)
                }
            }, 1000);
        }
        attemptLogin();
    });
}
tryLogin()
    .catch(() => {
        console.log("Login failed after 3 attempts");
    });


// Pseudocode
// create a function for countdown
// Initialize count at 5 and decrement the count to 0
// Set the countdown to occur after every 1sec

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





// Pseudocode
// Create a function thatreturns a Promise
// Create a promise with a setTimeout
// Create an async function
// return the content after the time specified time.


function pageLoading(section){
    return new Promise(resolve=>setTimeout(resolve,section))
}

async function loadPage() {
    console.log("Loading header...")
    await pageLoading(2000)
    console.log("Loading content...")
    await pageLoading(2000)
    console.log("Loading footer...");
    await pageLoading(1000)
    console.log("Fully loaded page");
    clearInterval(pageLoading)    
}
loadPage();


// Pseudocode
// create a function to fetch prices and return with a promise that has a timeout of the prices to be displayed after a certain timeout
// Create an asynch function that that returns the values of the symbol after the time set has been reached.


function fetchPrice(symbol){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(`Price for ${symbol} retrieved`)
        },2000);
    });
};
async function getPrices() {
    const price1 = await fetchPrice ("AAPL")
    console.log(price1);
    const price2 = await fetchPrice("GOOG");
    console.log(price2)    
};
getPrices();














