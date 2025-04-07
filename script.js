var temp,sky,wind,skyIcon,loc,desc,country,feelsLike,humidity;

let apikey="68efa0885519a6f01d76917c463ada68";
  async function getWeatherData(cityName){   

   //alert(cityName) 
    if(cityName==null){
      
      cityName=document.getElementById('city').value;
    }

     // var cityName=document.getElementById('city').value;  
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`)
      .then(res=> res.json())
      .then(data=>{
      console.log(data);
      temp=data.main.temp;
      desc=data.weather[0].description;
      loc=data.name;     
      sky=data.weather[0].main;//image name stored
      feelsLike=data.main.feels_like;
      humidity=data.main.humidity;
      country=data.sys.country;
      console.log(sky)
      

      skyIcon=document.querySelector("#skyIcon")
      skyIcon.src="./images/"+sky+".gif"
      document.querySelector("#desc").innerHTML=desc;
      document.querySelector("#temp").innerHTML=Math.floor((temp-273.15))
      document.querySelector("#loc").innerHTML=" " +loc+","+ country;
      // document.querySelector("#wind").innerHTML=wind;
      document.querySelector("#feelsLike").innerHTML=" "+Math.floor(feelsLike-273.15)+"°C";
      document.querySelector("#humidity").innerHTML=" "+" "+humidity+"%";
       
  })
      
}
getWeatherData("Mumbai");



