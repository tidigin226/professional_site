
$(document).ready(function() {
  $("#projects").hide();
  $("#about").hide();
  $("#resume").hide();
  // -------------------------------------------------------------------------------------------------------------------------
  function print(param) {
    console.log(param);
  }
  var colStrings = {
    "chrome204":"rgb(204, 204, 204) none repeat scroll 0% 0% / auto padding-box border-box",
    "chrome238":"rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box",
    "chrome255":"rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box",
    "rgb204":"rgb(204, 204, 204)",
    "rgb238":"rgb(238, 238, 238)",
    "rgb255":"rgb(255, 255, 255)",
    "rgba204":"rgba(204, 204, 204, 1)",
    "rgba238":"rgba(204, 204, 204, 1)",
    "rgba255":"rgba(204, 204, 204, 1)",
  };
  //Ï -------------------------------------------------------------------------------------------------------------------------
  $("#projectsLink").click(function() {
    if($("#topBuffer").css("height")=="50px"){
      if($(this).css("background")==colStrings["chrome204"]){
        $("#topBuffer").animate({height:200},300);
      }
      else{
        $("#resumeLink").css("background","");
        $("#aboutLink").css("background","");
      }
    }
    else{
      $("#topBuffer").animate({height:50},300); 
    }
    if($(this).css("background")==colStrings["chrome238"]){
      $(this).css("background","#ccc");
      $("#resume").hide(300);
      $("#about").hide(300);
      $("#projects").show(300);
    }
    else if($(this).css("background")==colStrings["chrome255"]){
      $(this).css("background","#ccc");
      $("#resume").hide(300);
      $("#about").hide(300);
      $("#projects").show(300);
    }
    else{
      $(this).css("background","");
      $("#projects").hide(300);
    }
  });
  // -------------------------------------------------------------------------------------------------------------------------
  $("#aboutLink").click(function() {
    if($("#topBuffer").css("height")=="50px"){
      if($(this).css("background")==colStrings["chrome204"]){
        $("#topBuffer").animate({height:200},300);
      }
      else{
        $("#resumeLink").css("background","");
        $("#projectsLink").css("background","");
      }
    }
    else{
      $("#topBuffer").animate({height:50},300); 
    }
    if($(this).css("background")==colStrings["chrome238"]){
      $(this).css("background","#ccc");
      $("#resume").hide(300);
      $("#projects").hide(300); 
      $("#about").show(300); 
    }
    else if($(this).css("background")==colStrings["chrome255"]){
      $(this).css("background","#ccc");
      $("#resume").hide(300);
      $("#projects").hide(300);
      $("#about").show(300);
    }
    else{
      $(this).css("background","");
      $("#about").hide(300);
    }
  });
  // -------------------------------------------------------------------------------------------------------------------------
  $("#resumeLink").click(function() {
    if($("#topBuffer").css("height")=="50px"){
      if($(this).css("background")==colStrings["chrome204"]){
        $("#topBuffer").animate({height:200},300);
      }
      else{
        $("#aboutLink").css("background","");
        $("#projectsLink").css("background","");
      }
    }
    else{
      $("#topBuffer").animate({height:50},300); 
    }
    if($(this).css("background")==colStrings["chrome238"]){
      $(this).css("background","#ccc");
      $("#about").hide(300);
      $("#projects").hide(300);
      $("#resume").show(300);
    }
    else if($(this).css("background")==colStrings["chrome255"]){
      $(this).css("background","#ccc");
      $("#about").hide(300);
      $("#projects").hide(300);
      $("#resume").show(300);
    }
    else{
      $(this).css("background","");
      $("#resume").hide(300);
    }
  });
});