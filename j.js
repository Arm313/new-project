let country = document.getElementsByClassName('cont')[0];
let title = document.getElementsByClassName('name')[0];
let capital = document.getElementsByClassName('capital')[0];
let language = document.getElementsByClassName('language')[0];
let population = document.getElementsByClassName('population')[0];
let area = document.getElementsByClassName('area')[0];
let flag = document.getElementsByClassName('flag')[0];

country.addEventListener("keyup", async function (event) {
    if (event.key === 'Enter') {
        let cont = event.target.value
        const response = await fetch(`https://restcountries.com/v3.1/name/${cont}`)
            const data = await response.json()


                title.textContent = data[0].name.common
                flag.src = data[0].flags.png
                capital.textContent = "Capital: " + data[0].capital[0]
                language.textContent = "language: " + [Object.values(data[0].languages)[0]]
                population.textContent = "Population: " + data[0].population
                area.textContent = "Area: " + data[0].area

            
                
            }})



