
// Start Tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
// End Tooltip

new WOW().init();
$(document).ready(function () {
    $('#countdown').countdown('2021/12/30 00:00:00', function (event) {
        $('#count-hours').html(event.strftime('%H'));
        $('#count-minutes').html(event.strftime('%M'));
        $('#count-seconds').html(event.strftime('%S'));
    });
});

//Start Copy To Clipboard
function Copy2Clipboard(id, btn_id) {
    /* Get the text field */
    var copyText = document.getElementById(id);

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");
    /* Alert the copied text */
    //alert("Copied the text: " + copyText.value);
    $(document).ready(function(){
        // Change text of button
        //$("#"+btn_id).html("کپی شد!");
        $("#"+btn_id).fadeOut(150, function() {
            $(this).html("کپی شد!").fadeIn(150);
        });

        setTimeout(() => {  $("#"+btn_id).html("<i class=\"fa fa-copy\"></i> کپی کد  <i class=\"fa fa-copy\"></i>"); }, 1000);
    });

}
//End Copy To Clipboard





// Start Timer
// Set the date we're counting down to
var countDownDate = new Date("Nov 28, 2020 23:23:23").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    // Display the result in the element with id="demo"
    document.getElementById("daily-counter1").innerHTML =  hours + " : "
        + minutes + " : " + seconds + " ";

    document.getElementById("daily-counter2").innerHTML =  hours + " : "
        + minutes + " : " + seconds + " ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("daily-counter1").innerHTML = "! زمان تخفیف تمام شد ";
        document.getElementById("daily-counter2").innerHTML = "! پایان تخفیف ";
    }
}, 1000);

// End Timer
