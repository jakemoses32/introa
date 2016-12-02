
var imageArray= ["https://bestanimations.com/Holidays/Birthday/black-calligraphy-happy-birthday-fireworks-wishes-animated-gif.gif", "https://media.giphy.com/media/lVul5STF9gYqk/giphy.gif", "https://s-media-cache-ak0.pinimg.com/736x/56/4b/b8/564bb83e5ffafad70a4806ecd2c8ab6f.jpg", "http://www.memecreator.org/static/images/memes/4182209.jpg",
	"https://s3.amazonaws.com/cdn.teachersource.com/images/products/pop/spc200.jpg",
	"https://plusquotes.com/images/quotes-img/Happy_birthday.jpg",
	"http://www.zastavki.com/pictures/originals/2013/Holidays___Birthday_Cheerful_dog_on_birthday_052382_.jpg", 
	"https://orig01.deviantart.net/f4e2/f/2016/138/2/6/kk_by_tana_jo_d7ebzd3_by_birthdays_d89l6n0_by_birthdays-da2wqa3.png",
	"http://happybirthdaywishes-image.com/wp-content/uploads/2016/08/Happy-Birthday-Meme-funny-images-pictures.jpg",

];
var currentIndex= 0;
function renderImage(){
	if (currentIndex<0) {
		currentIndex=imageArray.length-1;
	}
	else if (currentIndex>=imageArray.length) {
		currentIndex=0;
	}
	$('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();


function forwardImage(){
	currentIndex++;
	renderImage();
}

function backImage(){
	currentIndex--;
	renderImage();
}
$('#forwardButton').on('click', forwardImage)
$('#backButton').on('click', backImage)
$('h2').append('p')
	
 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Activities', 'Years Spent'],
          ['Sleeping',     2],
          ['Eating Oreos',      2],
          ['Bowling',  0.5],
          ['Playing Waterpolo', 7],
          ['Being a Cool Kid',    6.5]
        ]);

        var chartWidth = $('body').width()*0.7;

var options = {
  title: 'Jareds Past 18 Years',
  titleTextStyle: {
  	color: 'black', fontName: 'Arial', fontSize: 24},
 backgroundColor: '#210cff',
  width: chartWidth,
  colors: ['#006327']
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));

chart.draw(data, options);
}

