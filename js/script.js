const searchButtonElem = document.querySelector(".search__block-button")
const searchInputElem = document.querySelector(".search__block input")
const searchElem = document.querySelector(".search")
const contentElem = document.querySelector(".content")
    const searchHistory = document.querySelector(".search__history")

searchButtonElem.addEventListener("click", searchFun)

function searchFun(){
    const newElem = document.createElement("div");

    newElem.className = "search__history-block"

    newElem.innerHTML = `
    <div class="history__text">
    ${searchInputElem.value}</div>
    <button class="history__block-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <g opacity="0.5">
            <path d="M8.27232 24.817L24.817 8.27232" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24.817 24.817L8.27232 8.27232" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
    </button>`

    searchHistory.prepend(newElem)
    searchInputElem.value = ""

    const historyButtonElem = document.querySelector(".history__block-button")
    const historyText = document.querySelector(".history__text")

        historyButtonElem.addEventListener("click", function() {
            newElem.remove()
        })

        historyText.addEventListener("click", function(){
            searchInputElem.value = historyText.innerText
        })

}
contentElem.addEventListener("mouseout", function(){
    searchHistory.classList.add("search__history")
})

contentElem.addEventListener("mouseover", function(){
    searchHistory.classList.remove("search__history")
})