directory= "json/directory.json"

fetch(directory)
  .then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
  }})
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    console.log(jsonObject);
    const directory = jsonObject['directory'];
    directory.forEach((business) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');
        
        h2.textContent = business.name;
        p.textContent = business.phone;
        p2.textContent = business.address;
        p3.textContent = business.city;
        image.setAttribute('src', business.logo);
        image.setAttribute('alt', `${business.name} - ${business.order}`);
        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(p);
        card.appendChild(p2);
        
        document.querySelector('div.cards').appendChild(card);
  });
});