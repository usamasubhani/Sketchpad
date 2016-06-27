var rows = 16;
var columns = 16;
var $row = $("<div />", {
    class: 'row'
});
var $square = $("<div />", {
    class: 'square'
});

$(document).ready(function () {
    //add columns to the the temp row object
    for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i < rows; i++) {
        $("#wrapper").append($row.clone());
    }
});

$(document).ready(function(){
    $(".square").mouseenter(function(){
        $(this).css("background-color", "#4CAF50");
    });
});

$(document).ready(function(){
	$(".clear").click(function(){
		$(".square").css("background-color","#fff");
	});
});