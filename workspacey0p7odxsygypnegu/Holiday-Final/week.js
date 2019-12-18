$(".box") .click(
    function(){
         
         var title = $(".title",this).text();
         var number= $(".number",this).text();
         var description= $(".description",this).text();
         
         console.log(description);
         console.log(title);
         console.log(number);
         
         $(".description",".popup").text(description); 
         $(".title",".popup").text(title);
         $(".number",".popup").text(number); 
         
         
        $('.popup').fadeIn();
        $('.popup').delay(4000).fadeOut();
        
    }

);


