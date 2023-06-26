export const menu = [
    {
        id: 1,
        category: "niguiri",
        img: "assets/img/catalog-sushi-rolls.png",
        description: "Japonese Food",
        price: 30,
    },
    {
        id: 2,
        category: "uramaki",
        img: "assets/img/catalog-spring-rols.png",
        description: "Japonese Food",
        price: 40,
    },
    {
        id: 3,
        category: "temaki",
        img: "assets/img/catalog-onigiri.png",
        description: "Japonese Food",
        price: 20,
    },
    {
        id: 4,
        category: "uramaki",
        img: "assets/img/catalog-spring-rols.png",
        description: "Japonese Food",
        category: 'uramaki',
        price: 310,
    },
    {
        id: 5,
        category: "temaki",
        img: "assets/img/catalog-onigiri.png",
        description: "Japonese Food",
        price: 420,
    },
    {
        id: 6,
        category: "niguiri",
        img: "assets/img/catalog-sushi-rolls.png",
        description: "Japonese Food",
        price: 230,
    },
    {
        id: 7,
        category: "uramaki",
        img: "assets/img/catalog-spring-rols.png",
        description: "Japonese Food",
        price: 40,
    },
    {
        id: 8,
        category: "temaki",
        img: "assets/img/catalog-onigiri.png",
        description: "Japonese Food",
        price: 20,
    }
]

// filter buttons menu
export function filterDishes(){
    const filterBtn = document.querySelectorAll('.filter-btn')
    
    filterBtn.forEach(function(btn){
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id
            const menuCategory = menu.filter(function (menuItem){
                if(menuItem.category === category){
                    return menuItem
                }
            })
            if(category === 'all'){
                display(menu)
            }else{
                display(menuCategory)
            }
        })
    })
}



export function display(menuItem){
    const menuDishes = document.querySelector('.menu-dishes')

    let displayMenu = menuItem.map(function(item){
        return `<div class="card-dishes">
                    <div class="photo-dishes">
                        <img src="${item.img}" alt="">
                    </div>
                    <h5>${item.nameDish}</h5>
                    <p>${item.description}</p>
                    <div class="price-box">
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="btn-buy">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </button>
                    </div>
                </div>`
    })
    let menuDisplay = displayMenu.join('')
    menuDishes.innerHTML = menuDisplay
}

















