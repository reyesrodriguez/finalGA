// $(document).ready(function(){
// //-----------sliders---------------------//

// $('#slider').slider({
// 	range: "max",
// 	max:50,
// 	min:1,
// 	value: 1,
// 	slide: function(event, ui){
// 		$('.amount').val(ui.value)
// 		if(ui.value > 25){
// 			$("#slider").attr("style","border:0; background-color:#660000; font-weight:bold;");
			
// 		}
// 		else{
// 			$('#slider').css('background-color', '#230000')
// 		}

// 	}
// });
// $('.amount').val($('#slider').slider("value"));

// $('#slider2').slider({
// 	range: "max",
// 	max:50,
// 	min:1,
// 	value: 1,
// 	slide: function(event, ui){
// 		$('.amount2').val(ui.value)
// 	}
// });
// $('.amount2').val($('#slider2').slider("value"));

// $('#slider3').slider({
// 	range: "max",
// 	max:50,
// 	min:1,
// 	value: 1,
// 	slide: function(event, ui){
// 		$('.amount3').val(ui.value)
// 	}
// });
// $('.amount3').val($('#slider3').slider("value"));

// //----------------tooltip for sliders input info-----------
// $(function(){
// 	$(document).tooltip({
// 		position: {
// 			my: "center bottom-20",
// 			at: "center top",
// 			using: function(position, feedback){
// 				$(this).css(position);
// 				$('<div>')
// 					.addClass("arrow")
// 					.addClass( feedback.vertical)
// 					.addClass( feedback.horizontal)
// 					.appendTo(this)
// 				}
// 			}
// 		})
// 	});

// $(function(){
// 	$(document).tooltip({
// 		track:true
// 	})
// })







// });