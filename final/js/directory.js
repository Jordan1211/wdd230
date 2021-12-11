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
        let link = document.createElement('a');
        
        h2.textContent = business.name;
        p.textContent = business.phone;
        p2.textContent = business.address;
        p3.textContent = business.city;
        link.textContent = business.link;
        image.setAttribute('src', `images/${business.logo}.jpg`);
        image.setAttribute('alt', `${business.name} - ${business.order}`);
        link.setAttribute('href', business.link);
        card.appendChild(image);
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(link);
        document.querySelector('div.cards').appendChild(card);
  });
});

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
        let list = document.createElement('section');
        let h2 = document.createElement('p');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');
        let link = document.createElement('a');
        
        h2.textContent = `${business.name} / Phone: ${business.phone} / Address: ${business.address} ${business.city} `;
        link.textContent = business.link;
        image.setAttribute('src', `images/${business.logo}.jpg`);
        image.setAttribute('alt', `${business.name} - ${business.order}`);
        link.setAttribute('href', business.link);
        list.appendChild(image);
        list.appendChild(h2);
        list.appendChild(p);
        list.appendChild(p2);
        list.appendChild(p3);
        list.appendChild(link);
        document.querySelector('div.lists').appendChild(list);
  });
});

