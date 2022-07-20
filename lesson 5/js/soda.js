const requestURL ='https://byui-cit230.github.io/weather/data/towndata.json';

      fetch(requestURL)
            .then(function (response) {
              return response.json();
            })
            .then(function (jsonObject) {
              console.table(jsonObject); 
              const towns = jsonObject['towns'];
              console.log(towns)
      
              towns.forEach(town => {     
                if (towns[i].name == 'Soda Springs') {
                 
               
      
                  
                }
            });     
          });