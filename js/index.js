$( document ).ready(function(){
  //matriz de colores
  var colors={
    title:["#009B0A","#3D04F2","#FF0000","#9B8000","#0289F0","#F000F0","#FF9200","#7B9500"],
    marco:["#97F99D","#B5A0F7","#FF9A9A","#FFEE9A","#9BCEF5","#F695F6","#FFD49A","#EDFE9A"],
    quote:["#116416","#13073A","#550000","#554600","#042037","#370037","#553100","#445200"],
    btn:["#00F610","#5F31F3","#FF1919","#FFD819","#2699F2","#F217F2","#FF9D19","#D7FE19"], 
    fondo:["#55F760","#8866F4","#FF5858","#FFE258","#5EB2F2","#F353F3","#FFB858","#E1FE57"]
  }
  
  
  $("#newQuote").on("click",function(){
    //cambio de colores
    var i= Math.floor(Math.random()*9);
    $("h1").css("color",colors.title[i]);
    $(".marco").css("background-color",colors.marco[i]);
    $("h2,h3").css("color",colors.quote[i]);
    $(".btn").css("background-color",colors.btn[i]);
    $("body").css("background-color",colors.fondo[i]);
    
    //cambio de frase
    $.getJSON("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1&mashape-key=pbqSta4eQvmshsBrlfoqlt24U27ap1WzKqwjsnoc26NOZ2qM7z",function(result){
      $("h2").addClass("animated fadeIn").html('"'+result["quote"]+'"');
      $("h3").addClass("animated fadeIn").html('-'+result["author"]);
      setTimeout(function(){$("h2,h3").removeClass("fadeIn")},1000);
      //cambio link de twitter
      $(".twitter-share-button").attr("href","https://twitter.com/intent/tweet?text=" +'"'+result["quote"]+'"'+'-'+result["author"]+'&hashtags=QuotesVendingMachine');
    });
    
    
  });
   
});