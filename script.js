// IN GOD, WE TRUST //
let arrowBtn = document.querySelector(".uil");
let wrapper = document.querySelector(".wrapper");
let spanContent = document.querySelector("span");
let inputBox = document.querySelector("input");
let optionsContent = document.querySelector(".options");


let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan", "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia", "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan", "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam",];

arrowBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active")
    optionGenerator()
})

let optionGenerator = () => {
    countries.forEach((option) => {
        optionsContent.insertAdjacentHTML(
          "afterbegin",
          `
          <li onclick="liFunc(this)">${option}</li>
        `,
        );
    })
}
let liFunc = (event) => {   
    let liValue = event.innerHTML
    spanContent.innerHTML = liValue
    wrapper.classList.remove("active");
}

inputBox.addEventListener("keyup", (event) => {
    let value = event.target.value.trim().toLowerCase();
    if (value && value.length > 0) {
        let searched = countries.filter((countrie) => {
          return countrie.toLowerCase().startsWith(value);
        });
        optionsContent.innerHTML = ""
        searched.forEach((result) => {
            optionsContent.insertAdjacentHTML(
              "afterbegin",
              `
              <li onclick="liFunc(this)">${result}</li>
            `,
            );
        })

    }
    
})