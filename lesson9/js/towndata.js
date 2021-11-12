const requestURL ='https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
  }})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    towns.forEach((town) => {
        let card = document.createElement('section');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');
        
        h3.textContent = town.name;
        h4.textContent = town.motto;
        p.textContent = `Year Founded: ${town.yearFounded}`;
        p2.textContent = `Population: ${town.currentPopulation}`;
        p3.textContent = `Annual Rain Fall: ${town.averageRainfall}`;

        image.setAttribute('src', town.photo);
        // image.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);
        card.setAttribute('id', town.name)
        card.appendChild(h3);
        card.appendChild(image);
        card.appendChild(h4);
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(p3);
        
        document.querySelector('div.cards').appendChild(card);
  });
});