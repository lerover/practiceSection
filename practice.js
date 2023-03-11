let people = []

let count = 0
const counting_number = document.querySelector('.counting_number')
counting_number.innerText = count

function increase() {
    count = count + 1
    counting_number.innerText = count
}

function decrease() {
    count = count - 1
    counting_number.innerText = count
}

function save() {
    const newArray = people.push(count)
    console.log(people)
}

function reset() {
    count = count - count
    counting_number.innerText = count

}





