const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++ ) {
            if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs'|| towns[i].name == 'Fish Haven') {
                
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p1');
                let p2 = document.createElement('p2');
                let p3 = document.createElement('p3');
                let p4 = document.createElement('p4');
                let img = document.createElement('img');
               

            

                h2.textContent = towns[i].name;          
                p1.innerHTML = ' Motto: ' +towns[i].motto;
                p2.innerHTML = 'Year Founded: ' + towns[i].yearFounded;        
                p3.innerHTML= 'Population: ' + towns[i].currentPopulation;
                p4.innerHTML = 'Annual Rain Fall: ' + towns[i].averageRainfall;
                img.src = "images/town3.jpg"
 
               
               
                card.appendChild(h2);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);
                card.appendChild(p4);
                card.appendChild(img);
                
               
                
                document.querySelector('div.towns').appendChild(card);
            }

        
        }
        
      });

   