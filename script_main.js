$(document).ready(function() {
  $("#projects").hide();
  $("#about").hide();
  $("#resume").hide();
  $("#projectsLink").click(function() {
    if($(this).css("background")==colStrings["chrome_Red"]){
      $("#projects").hide(300);
      $(this).css("background","#FFF");
      $(this).css("color","#000");
      $("#bluebar").css("background","#000");
      $("#topBuffer").animate({height:200},300); 
    }
    else{
        $("#resume").hide(300);
        $("#about").hide(300);
        $("#projects").show(300);
        $("#resumeLink").css("background","#FFF");
        $("#resumeLink").css("color","#000");
        $("#aboutLink").css("background","#FFF");
        $("#aboutLink").css("color","#000");
        $(this).css("background","#C63D0F");
        $(this).css("color","#FFF");
        $("#bluebar").css("background","#C63D0F");
        $("#topBuffer").animate({height:30},300);
    }
  });
  $("#aboutLink").click(function() {
    if($(this).css("background")==colStrings["chrome_Green"]){
      $("#about").hide(300);
      $(this).css("background","#FFF");
      $(this).css("color","#000");
      $("#bluebar").css("background","#000");
      $("#topBuffer").animate({height:200},300); 
    }
    else{
        $("#projects").hide(300);
        $("#resume").hide(300);
        $("#about").show(300);
        $("#resumeLink").css("background","#FFF");
        $("#resumeLink").css("color","#000");
        $("#projectsLink").css("background","#FFF");
        $("#projectsLink").css("color","#000");
        $(this).css("background","#7E8F7C");
        $(this).css("color","#FFF");
        $("#bluebar").css("background","#7E8F7C");
        $("#topBuffer").animate({height:30},300);
    }
  });
  $("#resumeLink").click(function() {
    if($(this).css("background")==colStrings["chrome_Blue"]){
      $("#resume").hide(300);
      $(this).css("background","#FFF");
      $(this).css("color","#000");
      $("#bluebar").css("background","#000");
      $("#topBuffer").animate({height:200},300); 
    }
    else{
        $("#projects").hide(300);
        $("#about").hide(300);
        $("#resume").show(300);
        $("#projectsLink").css("background","#FFF");
        $("#projectsLink").css("color","#000");
        $("#aboutLink").css("background","#FFF");
        $("#aboutLink").css("color","#000");
        $(this).css("background","#446791");
        $(this).css("color","#FFF");
        $("#bluebar").css("background","#446791");
        $("#topBuffer").animate({height:30},300);
    }
  });
});
// red = #C63D0F
// green = #7E8F7C
// darkGreen = #005A31
// blue = #446791
// offwhite = #FFF
// darkGreen = rgb(0,90,49)
var colStrings = {
  "chrome_Red":"rgb(198, 61, 15) none repeat scroll 0% 0% / auto padding-box border-box",
  "chrome_Green":"rgb(126, 143, 124) none repeat scroll 0% 0% / auto padding-box border-box",
  "chrome_Blue":"rgb(68, 103, 145) none repeat scroll 0% 0% / auto padding-box border-box",
  "chrome_OffWhite":"rgb(253, 243, 231) none repeat scroll 0% 0% / auto padding-box border-box",
  "rgb_Red":"rgb(198, 61, 15)",
  "rgb_Green":"rgb(126, 143, 124)",
  "rgb_Blue":"rgb(68, 03, 145)",
  "rgb_OffWhite":"rgb(253, 243, 231)",
  "rgba_Red":"rgba(198, 61, 15, 1)",
  "rgba_Green":"rgba(126, 143, 124, 1)",
  "rgba_Blue":"rgba(68, 03, 145, 1)",
  "rgba_OffWhite":"rgba(253, 243, 231, 1)"
};
