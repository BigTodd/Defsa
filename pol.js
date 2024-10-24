const pier = document.querySelector('input[name="pier"]')
const drug = document.querySelector('input[name="drug"]')
const rad1 = document.querySelector("#dodaj")
const rad2 = document.querySelector("#razy")
const rad3 = document.querySelector("#odej")
const rad4 = document.querySelector("#przez")
const but = document.querySelector('button')
const span = document.querySelector('span')

function dzadza(){
    if(rad1.checked){
        const first = Number(pier.value) + Number(drug.value)
        span.innerHTML = first
        span.style.color = "#cbeef3"
    }
    else if(rad2.checked){
        const second = Number(pier.value) * Number(drug.value)
        span.innerHTML = second
        span.style.color = "#cbeef3"
    }
    else if(rad3.checked){
        const third = Number(pier.value) - Number(drug.value)
        span.innerHTML = third
        span.style.color = "#cbeef3"
    }
    else if(rad4.checked){
        const fourth = Number(pier.value) / Number(drug.value)
        span.innerHTML = fourth
        span.style.color = "#cbeef3"
    }
}
but.addEventListener('click', dzadza)