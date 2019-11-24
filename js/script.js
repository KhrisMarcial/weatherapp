$.ajax({
    url:'http://www.omdbapi.com/?apikey=7da7fde3&t=Frozen',
    success: function(movieData) {
        console.log(movieData);
    },
    error: function (error){
        console.log('bad request: ', error);
    }
});


$('form').on('submit', (event)=>{
    event.preventDefault();
    const userInput = $('input[type="text"]').val();
    const iconurls = 

    $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather?appid=a45de781122604d008ec137b51af5d05&q=' + userInput
    }).then((data) => {
    
    var iconCode = data.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    $('#weather').html(data.weather[0].description);
    $('#temp').html(data.main.temp + ' Kelvin');
    $('#wicon').attr('src', iconUrl);
    },
    (error) => {
    console.log('bad request: ', error);
    })
})
