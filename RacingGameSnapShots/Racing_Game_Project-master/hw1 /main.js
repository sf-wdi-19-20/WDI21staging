
$(document).ready(function(){

	$('.dawg img').on('click', function() {
    $(this).toggleClass('clicked1');
});
	$('.gator img').on('click', function() {
    $(this).toggleClass('clicked2');
});





// var timerid = null;


// function race()
// {
// document.getElementById('dawg1').left= 
//     parseInt(document.getElementById('dawg1').left) + 1 + 'px';    
// }

// window.onload=function()
// {   



// document.getElementById('button1').onclick=function(){

//     if(timerid == null){
//         timerid = setInterval("move()", 10);
//     }else{
//         clearInterval(timerid);
//         timerid = null;
//     }
// }   


var button2 = document.getElementById('button2');
button2.onclick= reloadPage;

    function reloadPage(){
        window.location.reload();
    }

});



