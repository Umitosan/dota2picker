// Business (or back-end) logic:


// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {

  $("#mainform").submit(function(event) {

    //grab question answers
    var question1 = $("#drop1select :selected").val();
    var question2 = $("#drop2select :selected").val();
    var question3 = $("#drop3select :selected").val();
    var question4 = $("#drop4select :selected").val();


    $("#out1").text(question1);
    $("#out2").text(question2);
    $("#out3").text(question3);
    $("#out4").text(question4);
    $(".formoutput").show();

    event.preventDefault();

  });

});
