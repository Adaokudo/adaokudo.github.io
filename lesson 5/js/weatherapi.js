
    

      const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a7a69781fb409f3db2c4caeba2acd42a";
     
      
      fetch(apiURL)
          .then ((response)=> response.json())
          .then ((jsObject)=> {
            console.log(jsObject)

            const currentWeather=jsObject.list[0].weather[0].main;
            const temp = jsObject.list[0].main.temp;
            const humidity = jsObject.list[0].main.humidity;
            const windSpeed = jsObject.list[0].wind.speed;

            
            
            
              document.getElementById("currently").textContent = currentWeather;
              document.getElementById("current-temp").textContent = temp; 
              document.getElementById("humidity").textContent = humidity;   
              document.getElementById("windspeed").textContent = windSpeed;
              
             
              const desc = jsObject.weather[0].description;  // note how we reference the weather array
       

              
              document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
              document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
              document.getElementById('icon').setAttribute('alt', desc);
         });
             
       
           console.log(jsObject)
    
            let day = 0;
            day.filter (data => {
              if (data.dt_txt.includes("18:00:00")){
                const sun = document.getElementsByClassName(day);
                const info = document.getElementsByClassName(forcast);
                const imagesrc = 'https://openweathermap.org/img/w/' + jsObject[0].weather[0].icon + '.png';  
                sun[day].setAttribute('src', dayIcon);
                info[day].innerHTML = data.weather[0].main;
                day += 1;
              }
            });
      
        
      
      
      
          