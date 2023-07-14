const fboolArr = [{
    id: 1,
    name: "Erling Haaland",
    age: 22,
    photo: 'img/holland.jpg',
    club: 'Manchester Citi',
    position: 'Forward',
    price: '100$',
},

{
    id: 2,
    name: "Kylian Mbappé",
    age: 24,
    photo: 'img/mbape.jpg',
    club: 'FC Paris Saint-Germain',
    position: 'Forward',
    price: '100$',
},

{
    id: 3,
    name: "Vinicius Junior",
    age: 23,
    photo: 'img/vinicius.jpg',
    club: 'Real Madrid',
    position: 'Forward',
    price: '95$',
},

{
    id: 4,
    name: "Bukayo Saka",
    age: 21,
    photo: 'img/saka.jpg',
    club: 'FC Arsenal',
    position: 'Forward',
    price: '92$',
},

{
    id: 5,
    name: "Victor Osimhen",
    age: 24,
    photo: 'img/osimhen.jpg',
    club: 'Napoli',
    position: 'Defender',
    price: '90$',
},

{
    id: 6,
    name: "Jamal Musiala",
    age: 20,
    photo: 'img/musiala.jpg',
    club: 'Bayern München',
    position: 'Defender',
    price: '88$',
},

{
    id: 7,
    name: "Pedri",
    age: 24,
    photo: 'img/pedri.jpg',
    club: 'FC Barcelona',
    position: 'Midfielder',
    price: '88$',
},

{
    id: 8,
    name: "Federico Valverde",
    age: 24,
    photo: 'img/valverde.jpg',
    club: 'Real Madrid',
    position: 'Midfielder',
    price: '85$',
},

{
    id: 9,
    name: "Rafael Leão",
    age: 24,
    photo: 'img/leao.jpg',
    club: 'AC Milan',
    position: 'Midfielder',
    price: '80$',
},

{
    id: 10,
    name: "Milan Skriniar",
    age: 28,
    photo: 'img/skriniar.jpg',
    club: 'FC Paris Saint-Germain',
    position: 'Defender',
    price: '55$',
},

{
    id: 11,
    name: "Alessandro Bastoni",
    age: 24,
    photo: 'img/bastoni.jpg',
    club: 'Inter Milan',
    position: 'Defender',
    price: '60$',
},

{
    id: 12,
    name: "Neymar",
    age: 31,
    photo: 'img/neymar.jpg',
    club: 'FC Paris Saint-Germain',
    position: 'Forward',
    price: '52$',
},

{
    id: 13,
    name: "Oleksandr Zinchenko",
    age: 26,
    photo: 'img/zina.jpg',
    club: 'FC Arsenal',
    position: 'Midfielder',
    price: '42$',
},

{
    id: 14,
    name: "Fabinho",
    age: 27,
    photo: 'img/holland.jpg',
    club: 'Liverpool',
    position: 'Defender',
    price: '38$',
},

{
    id: 15,
    name: "Max Kilman",
    age: 26,
    photo: 'img/kilman.jpg',
    club: 'Wolverhampton',
    position: 'Defender',
    price: '30$',
},

{
    id: 16,
    name: "Eljif Elmas",
    age: 23,
    photo: 'img/elmas.jpg',
    club: 'Napoli',
    position: 'Midfielder',
    price: '25$',
},

{
    id: 17,
    name: "Vitaliy Mykolenko",
    age: 24,
    photo: 'img/mykolenko.jpg',
    club: 'FC Everton',
    position: 'Defender',
    price: '23$',
},

{
    id: 18,
    name: "Joe Gomez",
    age: 26,
    photo: 'img/gomes.jpg',
    club: 'Liverpool',
    position: 'Midfielder',
    price: '20$',
},

{
    id: 19,
    name: "Mykola Matvienko",
    age: 27,
    photo: 'img/matvienko.jpg',
    club: 'Shakhtar Donetsk',
    position: 'Midfielder',
    price: '18$',
},

{
    id: 20,
    name: "Lautaro Martínez",
    age: 25,
    photo: 'img/martinez.jpg',
    club: 'Inter Milan',
    position: 'Forward',
    price: '16$',
},

]


window.addEventListener('load', function () {
    const usersContainer = document.querySelector('.users-container');
    const positionRadio = document.querySelectorAll('[type="radio"]');
    const searchRange = document.querySelector('#nameFilter');
    const priceRange = document.querySelector('#priceFilter');

    const renderPerson = (persons) => {
        const list = persons.map(person => {
            return (
                `
                    <div class="user">
                        <div class="person-card">
                            <img src="${person.card}" class="img-fluid" alt="${person.card}">
                        </div>
                        <div class="person-name">${person.name}</div>
                        <div class="person-age">${person.age}</div>
                        <div class="person-club">${person.club}</div>
                        <div class="person-position">${person.position}</div>
                        <div class="person-club">${person.price}</div>
                    </div>
                `
            )
        }).join("")
        usersContainer.innerHTML = list
    }
    renderPerson(fboolArr)

    const state = {
        position: "all",
        price: '100$',
        name: ""
    }

    function getPositionValue() {
        positionRadio.forEach(item => {
            item.addEventListener('click', (event) => {

                let val = event.target.value
                state.position = val

                const filteredForPosition = mainFilter()
                renderPerson(filteredForPosition)
            })
            
        }) 
    }
    getPositionValue()


    function getPriceValue() {
            priceRange.addEventListener('click', (event) => {
                let val = event.target.value;
                state.price = val
                
                const filteredForPrice = mainFilter()
                renderPerson(filteredForPrice)
        
        })
    }
    getPriceValue()

    function getNameSearch() {
        searchRange.addEventListener('input', (event) => {

            let val = event.target.value.toLowerCase()
            state.name = val

            const filteredForName = mainFilter()
            renderPerson(filteredForName)
        })
    }
    getNameSearch()

    /*function priceFilter() {
        return fboolArr.filter(item => item.price <= state.price)
    }

    function positionFilter() {
        return (state.position === "all" ? fboolArr : fboolArr.filter(item => item.position === state.position))
    } */

    function mainFilter() {
        const filtered = fboolArr.filter(item => {
            const setPrice = item.price <= state.price

            const setPosition = state.position === "all" ? fboolArr : 
                item.position === state.position

            const setName = state.name === "" ? fboolArr :
                item.name.toLowerCase().includes(state.name)

            return setPrice && setPosition && setName
        })
        return filtered
    }

})


