let order = []
console.log();

let cardContainer = document.querySelector('[data-cards]');
fetch('https://randomuser.me/api?results=20').then(data=> data.json())
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

order.push(people)

        });
    });
    document.querySelector('[data-submit2]').addEventListener('click', function ascend(){
        document.querySelector('[data-submit1]').addEventListener('click', function searchName() {
        
            let personName = document.querySelector('[data-input]').value.toLowerCase();
            let content = document.querySelector('[data-submit1]');
            if (content.toLowerCase().includes(personName)) {
                document.querySelector('[data-input]').innerHTML = personName + "found";
            } else {
                document.getElementById('result').innerHTML = "Name not found";
            }

})
});
