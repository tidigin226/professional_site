$(document).ready(function() {
  $("#projectsLink").click(function() {
    console.log($(this).css("background"));
    console.log($("#topBuffer").css("height"));
    if($("#topBuffer").css("height")=="0px"){
      console.log($(this).css("background"));
    console.log($("#topBuffer").css("height"));
      if($(this).css("background")==="rgb(204, 204, 204) none repeat scroll 0% 0% / auto padding-box border-box"){
        $("#topBuffer").animate({height:150},400);
      }
      else{
        $("#resumeLink").css("background","");
        $("#aboutLink").css("background","");
      }
    }
    else{
      $("#topBuffer").animate({height:0},400); 
    }
    if($(this).css("background")==="rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box"){
      $(this).css("background","#ccc");
    }
    else if($(this).css("background")==="rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box"){
      $(this).css("background","#ccc");
    }
    else{
      $(this).css("background","");
    }
    
  });
  $("#aboutLink").click(function() {
    console.log($(this).css("background"));
    if($("#topBuffer").css("height")=="0px"){
      if($(this).css("background")==="rgb(204, 204, 204) none repeat scroll 0% 0% / auto padding-box border-box"){
        $("#topBuffer").animate({height:150},400);
      }
      else{
        $("#resumeLink").css("background","");
        $("#projectsLink").css("background","");
      }
    }
    else{
      $("#topBuffer").animate({height:0},400); 
    }
    if($(this).css("background")==="rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box"){
      $(this).css("background","#ccc");
    }
    else if($(this).css("background")==="rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box"){
      $(this).css("background","#ccc");
    }
    else{
      $(this).css("background","");
    }
    
  });
  $("#resumeLink").click(function() {
    console.log($(this).css("background"));
    if($("#topBuffer").css("height")=="0px"){
      if($(this).css("background")==="rgb(204, 204, 204) none repeat scroll 0% 0% / auto padding-box border-box"){
        $("#topBuffer").animate({height:150},400);
      }
      else{
        $("#aboutLink").css("background","");
        $("#projectsLink").css("background","");
      }
    }
    else{
      $("#topBuffer").animate({height:0},400); 
    }
    if($(this).css("background")==="rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box"){
      $(this).css("background","#ccc");
    }
    else if($(this).css("background")==="rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box"){
      $(this).css("background","#ccc");
    }
    else{
      $(this).css("background","");
    }
    
  });
});

// $("div.menuItem").click(function() {
//   alert("Your book is overdue.");
//   $("#topBuffer").toggle(function(){
//     $(this).animate({height:0},200);
//   },function(){
//     $(this).animate({height:100},200);
//   });
// });
// $("#resumeLink").click(function() {
//   // Your code here...
// });
// $("#aboutLink").click(function() {
//   // Your code here...
// });