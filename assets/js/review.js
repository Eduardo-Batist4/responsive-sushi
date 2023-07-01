const review = [
    {
        id: 1,
        img: "assets/img/review1.png",
        start: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        person: 'Bruna Lima',
        user: '@bruuL',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sapiente asperiores inventore error commodi.'
    },
    {
        id: 2,
        img: "assets/img/review2.png",
        start: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-regular fa-star'></i>",
        person: 'luisa Alcantra',
        user: '@Luisa_alcantra',
        text:'expedita voluptatibus libero atque earum, ipsum perferendis eos molestias, ratione aliquam. Optio, adipisci'
    },
    {
        id: 3,
        img: "assets/img/review3.png",
        start: "<i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>",
        person: 'Quando Rondo',
        user: '@quandoRondo',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sapiente asperiores inventore error commodi, inventore error commodi.'
    }
]

const img = document.getElementById('photo-user')
const person = document.getElementById('person')
const user = document.getElementById('user')
const text = document.getElementById('text')
const x = document.querySelector('.stars-review')

const prevButton = document.getElementById('prev-button')
const nextButton = document.getElementById('next-button')

let currentItem = 0


export function showPerson(personReview){

    const item = review[personReview]
    
    img.src = item.img;
    x.innerHTML = item.start;
    person.textContent = item.person;
    user.textContent = item.user;
    text.textContent = item.text;
}

export function switchPerson() {

    nextButton.addEventListener('click', () => {
        currentItem++
        if(currentItem > review.length - 1){
            currentItem = 0
        }
        showPerson(currentItem)
        // console.log(currentItem)
    })

    prevButton.addEventListener("click", () =>{
        currentItem--
        if(currentItem < 0 ){
            currentItem = review.length - 1
        }
        showPerson(currentItem)
        // console.log(currentItem)
    })
}


switchPerson()
showPerson(currentItem)








