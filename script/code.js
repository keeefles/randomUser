let friends = []
function add(){
    let name = document.querySelector('[data-entry]').value
    friends.push(name)

    localStorage.setItem('friendsNames',
    JSON.stringify(friends))
    displayFriends()
}
document.querySelector('[data-submit]').addEventListener('click', add)

function displayFriends(){
    let listWrapper = document.querySelector('[data-friends]');
    let cFriends = JSON.parse(localStorage.getItem('friendNames'));
    listWrapper.innerHTML = ""
    if(cFriends) {
        cFriends.forEach(people => {
            listWrapper.innerHTML +=
            `<li>${people}</li>`
        });
    }
}
let cardContainer = document.querySelector('[data-cards]');
fetch('https://randomuser.me/api?results=20')
.then(data=> data.json())
.then(result=> {
    let {results} = result
    results.forEach( people =>{
        console.log(people);
        cardContainer.innerHTML +=
        `
        <div class="card" style="width: 18rem;">
            <img src="${people.picture.large}" class="card-img-top img-fluid" alt="${people.name.first}">
            <div class="card-body">
            <h5 class="card-title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
            <p class="card-text">Age: ${people.registered.age}</p>
        </div>
        `
    });
});