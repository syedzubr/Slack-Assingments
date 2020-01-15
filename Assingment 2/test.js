// window.onload = function exampleFunction() { 
//     alert('The Script will load now.'); 
// } 

var namee = document.querySelector('.placename');
var temp = document.querySelector('.num2col');
var desc = document.querySelector('.winter2col');
var date = document.querySelector('.currentdate');
var imge = document.querySelector('.dataimage');
var inputt = document.querySelector('.inputval');
var button = document.querySelector('.button');

var fulldata;

button.addEventListener('click',function() { 
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputt.value + '&appid=b90a2ec7a6ae2b6d6c59ce17ef9ac1a1')
    .then(response => response.json())
    .then(data => {
        fulldata = data;

        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var weather = data['weather'][0]['id'];

        console.log(fulldata);
    
        namee.innerHTML = nameValue;
        
        temp.innerHTML = (tempValue - 273.15).toFixed(2);

        desc.innerHTML = descValue;
        var d = new Date();
        date.innerHTML = d;
        imge.src = "imgs/codes/" + weather + ".png"
    })

.catch(err => this.alert("Wrong city name !!"))

})