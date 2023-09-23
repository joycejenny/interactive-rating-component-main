const rating_cards = document.querySelectorAll(".ratings span");
const submit_btn = document.querySelector(".submit_btn");
const rate_point = document.getElementById("rate");
const rating_section = document.querySelector(".rating_section");
const thank_section = document.querySelector(".thank_section");
const go_back = document.getElementById('go_back')

let rate = null;

rating_cards.forEach((rating_card) => {
    rating_card.addEventListener("click", (e) => {
        const active = document.querySelector('.checked');
        if(active){
            active.classList.remove("checked");
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
        // card.classList.remove("checked");
    });
})

submit_btn.addEventListener("click", () => {
    if(rate){
        rate_point.innerText = rate;
        rating_section.classList.add("hidden");   
        thank_section.classList.remove("hidden")     
    }
    
})
go_back.addEventListener("click", () => {
    // rating_section();
    
    rating_section.classList.remove("hidden");   
    thank_section.classList.add("hidden")  

    // card.classList.remove("checked"); 
    
    // in this part above i'm trying to add a code that'll make the selected rate to become null or unselected once i click on "go back" but i don't know how to do that yet, i will try to learn that soon
} )