$(document).ready(function() {

var colors = ['#009c61', '#cc0099', '#cc9900', '#cc0033', '#0099cc', '#6600cc', '#66cc00', '#f9f60d', '#14087a', 'black', 'white', '#f60808', '#2abf0b'];
var index = 0;

$('.styleone').click(function() {
	if (index >= colors.length)
  	index = 0;
            $(this).css('background-color',colors[index]);
            index++;
        });

});