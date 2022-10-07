let divCharacters = document.getElementById("characters")
const container = document.querySelector('#marvel-row');
let contentHTML = '';
fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=100&apikey=b7435ed77525d56614b10d327173ed03&hash=4487e27d542c8c40dc4bb341f7b658a4")
.then(res => res.json())
.then((json)=> {
    console.log(json)
    for (const hero of json.data.results) {
        let urlHero = hero.urls[0].url;
        contentHTML += `
          <div class="col-md-4">
              <a href="${urlHero}" target="_blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
              </a>
              <h3 class="title">${hero.name}</h3>
          </div>`;
      }
      container.innerHTML = contentHTML;
    })




