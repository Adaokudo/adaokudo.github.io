const requestURL ='https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        console.log(towns)

        for (let i = 0; i < towns.length; i++ ) {
         
          if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven') { 
            let card = document.createElement('section');       
            let h2 = document.createElement('h2'); 
            let moto = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let img = document.createElement('img');


            h2.textContent = towns[i].name
            h2.setAttribute('class', 'h2');
            card.appendChild(h2);

  
            moto.innerHTML = towns[i].motto;
            moto.setAttribute('class', 'moto');
            card.appendChild(moto);
        
    
            p2.innerHTML = 'Year Founded: ' + towns[i].yearFounded;
            p2.setAttribute('class', towns[i].name + 'year');
          

            p3.innerHTML = 'Population: ' + towns[i].currentPopulation;
            p3.setAttribute('class', towns[i].name + 'population');
            
          
            p4.innerHTML = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            p4.setAttribute('class', towns[i].name + 'rainfall');

           

            img.setAttribute('src',"/lesson 5/images/town3.jpg");
            card.appendChild(img);
            


          
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(p4);
          
          
            document.querySelector("div.towns").appendChild(card);
          }
        }
    }
      );


           
            