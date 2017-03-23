// Business (or back-end) logic:


// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {

  $("#mainform").submit(function(event) {
    event.preventDefault();
    //grab question answers
    var question1 = $("#drop1select :selected").val();
    var question2 = $("#drop2select :selected").val();

    $("#out1").text(question1);
    $("#out2").text(question2);

    $(".formoutput").show();

    //if you answered Attack helicopter for q1
    if (question1 === "Attack helicopter"){
      $("#axe").hide();
      $("#drow").hide();
      $("#pa").hide();
    } else if (question1 === "Platapus"){
      $("#pho").hide();
      $("#daz").hide();
      $("#enig").hide();
    } else if (question1 === "Ethereal Spirit"){
      $("#drow").hide();
      $("#pa").hide();
      $("#cm").hide();
    } else if (question1 === "Non-dimensional being"){
      $("#daz").hide();
      $("#enig").hide();
      $("#wind").hide();
    } else {
      alert("question 1 is empty!");
    }

    if (question2 === "Battleaxe"){
      $("#axe").hide();
      $("#pho").hide();
      $("#drow").hide();
    } else if (question2 === "Bowstaff"){
      $("#pho").hide();
      $("#enig").hide();
      $("#wind").hide();
    } else if (question2 === "Glaive"){
      $("#cm").hide();
      $("#daz").hide();
      $("#pho").hide();
    } else if (question2 === "Daggars"){
      $("#wind").hide();
      $("#drow").hide();
      $("#cm").hide();
    } else {
      alert("question 2 is empty!");
    }

  });

  $("#resetme").click(function() {
    location.reload();
    // alert("stuff");
    // $(".img").show();
  });

});
