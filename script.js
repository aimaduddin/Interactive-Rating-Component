const ratingCardEl = document.querySelector(".rating-card")
const resultCardEl = document.querySelector(".result-card")
const submitButtonEl = document.getElementById("submit");
const restartButtonEl = document.getElementById("revote")
const ratingButtonEl = document.querySelectorAll(".btn")
const userSelectionEl = document.querySelector(".rating-selected")

submitButtonEl.addEventListener("click", () => {
    ratingCardEl.classList.add("hidden")
    resultCardEl.classList.remove("hidden")
})

restartButtonEl.addEventListener("click", () => {
    ratingCardEl.classList.remove("hidden")
    resultCardEl.classList.add("hidden")
})

ratingButtonEl.forEach(rating => {
    rating.addEventListener("click", () => {
        userSelectionEl.innerHTML = rating.innerHTML
    })
});