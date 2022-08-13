const jokeText = document.querySelector("#jokeText");
const errorMsg = document.querySelector("#errorMsg");
const btn = document.querySelector("#btn");
let category = "dev";
document.getElementById("errorMsg").style.display= "none"
const setHeader = {
    headers : {
        Accept : "application/json"
    }
}
const getJoke = () => {
  fetch(`https://icanhazdadjoke.com/`,setHeader)
    .then((res) => res.json())
    .then((data) => { 
        jokeText.innerHTML = data.joke;
    }).catch((error)=> {
        document.getElementById("errorMsg").style.display= ""
        errorMsg.innerHTML= "Sorry! some error has been occured"
    })
    
};
btn.addEventListener("click", getJoke);
