//Var Icon//
$("#food").emotionsRating({
      //background emoji
      bgEmotion: "happy",
      //emoji array
      emotions: ['disappointed','meh', 'happy', 'inlove'],
      //number of emoji
      count: 5,
      //color of emoji gold, red, blue, green, black, brown, pink, purple, orange
      color: "gold",
      //size of emoji
      emotionSize: 30,
      //input name
      inputName: "makananRating",
      //initialize the rating number
      initialRating: 1,
 });
$("#musik").emotionsRating({
    //background emoji
      bgEmotion: "happy",
      //emoji array
      emotions: ['angry','disappointed','meh', 'happy', 'inlove'],
      //number of emoji
      count: 5,
      //color of emoji gold, red, blue, green, black, brown, pink, purple, orange
      color: "gold",
      //size of emoji
      emotionSize: 30,
      //input name
      inputName: "musicRating",
      //initialize the rating number
      initialRating: null,
 });
$("#dekorasi").emotionsRating({
    //background emoji
      bgEmotion: "happy",
      //emoji array
      emotions: ['angry','disappointed','meh', 'happy', 'inlove'],
      //number of emoji
      count: 5,
      //color of emoji gold, red, blue, green, black, brown, pink, purple, orange
      color: "gold",
      //size of emoji
      emotionSize: 30,
      //input name
      inputName: "dekorasiRating",
    //initialize the rating number
      initialRating: null,
 });
$("#pelayanan").emotionsRating({
    //background emoji
      bgEmotion: "happy",
      //emoji array
      emotions: ['angry','disappointed','meh', 'happy', 'inlove'],
      //number of emoji
      count: 5,
      //color of emoji gold, red, blue, green, black, brown, pink, purple, orange
      color: "gold",
      //size of emoji
      emotionSize: 30,
      //input name
      inputName: "pelayananRating",
    //initialize the rating number
      initialRating: null,
 });

/*FORM
======*/
$(document).ready(function(){
    $('.modal').modal({
      opacity: 0.4, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '25%', // Starting top style attribute
      endingTop: '25%', // Ending top style attribute
    });
      
});

// $('#submit').click(function(){
//     // $('#formfield').submit();
//     alert('Sukses Mengirim !');
// });

$(document).ready(function(){
    /* Display change 
    =================*/
    $('.next-1').click(function(){
        $('.ea-1').hide(1000);
        $('.ea-2').show(1000);
    });
    
    /*LAYER2*/
    $('.back-2').click(function(){
        $('.ea-2').hide(1000);
        $('.ea-1').show(1000);
    });
    $('.next-2').click(function(){
        $('.ea-2').hide(1000);
        $('.ea-3').show(1000);
    });
    
    /*LAYER3*/
    $('.back-3').click(function(){
        $('.ea-3').hide(1000);
        $('.ea-2').show(1000);
    });
    $('.next-3').click(function(){
        $('.ea-3').hide(1000);
        $('.ea-4').show(1000);
    });
    
     /*LAYER4*/
    $('.back-4').click(function(){
        $('.ea-4').hide(1000);
        $('.ea-3').show(1000);
    });
});/* END */
