// UI Var
const buttons = document.querySelectorAll('.btn');

//Creates function to input result from the API to the DOM
const UIPaint = (index, result, resultWrapper) => {
  let resultTemplate;
  resultTemplate = `
        <div class="card mt-5 relative card--${index}">
          <img src="${result.image.url}" alt="${result.name}">
          <h2 class="card-heading card-heading--${index}">${result.name}</h2>
        </div>
        <div class="powerstats mt-5">
          <h3 class="stats-heading stats-heading--${index} relative">Powerstats</h3>
          <p class="stats stats--${index}"><span>Speed</span> :  ${result.powerstats.speed}%</p>
          <p class="stats stats--${index}"><span>Intelligence</span> :  ${result.powerstats.intelligence}%</p>
          <p class="stats stats--${index}"><span>Power</span> :  ${result.powerstats.power}%</p>
          <p class="stats stats--${index}"><span>Durability</span> :  ${result.powerstats.durability}%</p>
          <p class="stats stats--${index}"><span>Combat</span> :  ${result.powerstats.combat}%</p>
          <p class="stats stats--${index}"><span>Strength</span> :  ${result.powerstats.strength}%</p>
        </div>
        <div class="appearance mt-5">
          <h3 class="stats-heading stats-heading--${index} relative">Appearance</h3>
          <p class="stats stats--${index}"><span>Height</span> :  ${result.appearance.height[1]}</p>
          <p class="stats stats--${index}"><span>Weight</span> :  ${result.appearance.weight[1]}</p>
        </div>
        <div class="biography mt-5">
          <h3 class="stats-heading stats-heading--${index} relative">Biography</h3>
          <p class="stats stats--${index}"><span>Alignment</span> :  ${result.biography.alignment}</p>
          <p class="stats stats--${index}"><span>Aliases</span> :  ${result.biography.aliases}</p>
        </div>
        <div class="connections mt-5">
          <h3 class="stats-heading stats-heading--${index} relative">Work</h3>
          <p class="stats stats--${index}"><span>Group Affiliations</span> :  ${result.work.base}</p>
  `
  resultWrapper.innerHTML = resultTemplate;
}
// Main Function
const saveTheDay = (e) => {
  // API KEY
  const apiKey = '610051173215297';
  let index;
  // Determines the value of index based on the button ID clicked
  e.target.id === 'btn-1' ? index = 1 : index = 2;
  // INPUT of the button clicked AND RESULT container
  let inputValue = e.target.previousElementSibling.value;
  const resultWrapper = document.getElementById(`result-${index}`);
  document.querySelector(`.loader-${index}`).classList.remove('none');
  // Fetches data from superhero API
  fetch(`https://superheroapi.com/api/${apiKey}/search/${inputValue}`)
  .then(res => res.json())
  .then(res => {
    // Data from API
    let result = res.results[0];
    UIPaint(index, result, resultWrapper);
  })
  .catch((err) => {
    // Shows error message
    document.querySelector(`.error-${index}`).classList.remove('none');
    document.querySelector(`.error-${index}`).innerHTML = 'Evil &#128520; has struck, try again'
  })
  // Hides Loader
  .finally(() => {
    document.querySelector(`.loader-${index}`).classList.add('none');
    e.target.previousElementSibling.value = '';
});
  
}

//Adds Event Listener to the two buttons
buttons.forEach(button =>  button.addEventListener('click', saveTheDay));


/********** 
 MAY THE FORCE BE WITH YOU :) 
 ************/
