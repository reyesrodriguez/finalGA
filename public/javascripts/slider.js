console.log('linked');
$(document).ready(function(){
//-----------sliders---------------------//

$('#slider').slider({
	range: "max",
	max:50,
	min:1,
	value:1,
	slide: function(event, ui){
		$('.amount').val(ui.value)
	}
});

var val = $('.amount').val($('#numbers').slider("value"));

$('#slider2').slider({
	range: "max",
	max:50,
	min:1,
	value:1,
	slide: function(event, ui){
		$('.amount2').val(ui.value)
	}
});
$('.amount2').val($('#slider2').slider("value"));

$('#slider3').slider({
	range: "max",
	max:50,
	min:1,
	value: $("#amount").val(),
	slide: function(event, ui){
		$('.amount3').val(ui.value)
	}
});
$('.amount3').val($('#slider3').slider("value"));

//----------------tooltip for sliders input info-----------
$(function(){
	$(document).tooltip({
		position: {
			my: "center bottom-20",
			at: "center top",
			using: function(position, feedback){
				$(this).css(position);
				$('<div>')
					.addClass("arrow")
					.addClass( feedback.vertical)
					.addClass( feedback.horizontal)
					.appendTo(this)
				}
			}
		})
	});

$(function(){
	$(document).tooltip({
		track:true
	})
})
function updateTextInput(val) {
    document.getElementById('textInput').value=val;
     
    }
    function updateTextInputTwo(val) {
     document.getElementById('textInputTwo').value=val;
    }
    function updateTextInputThree(val) {
    document.getElementById('textInputThree').value=val;
     
    }
    function updateTextInputFour(val) {
     document.getElementById('textInputFour').value=val;
    }
    function updateTextInputFive(val) {
     document.getElementById('textInputFive').value=val;
     
    }
    function updateTextInputSix(val) {
     document.getElementById('textInputSix').value=val;
    }




});