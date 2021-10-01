let url = "https://api.adviceslip.com/advice";
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");

const getAdvice = async () => {
try {
    h2.innerHTML = "Loading...";
    let res = await fetch(url);
    let joke = await res.json();
    let advice = joke.slip.advice;
    h2.innerHTML = advice;
} catch (error) {
    let internet = navigator.onLine;
    console.log("error : ",error)
    internet?h2.innerHTML="Something went wrong 🙄":h2.innerHTML=" 📡 Connect to Internet !";
}
};

btn.addEventListener("click", () => {
  getAdvice();
});

getAdvice();
