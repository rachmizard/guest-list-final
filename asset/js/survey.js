 $(document).ready(function(){
    $('.modal').modal({
      opacity: 0.4, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '25%', // Starting top style attribute
      endingTop: '25%', // Ending top style attribute
    });
      
});

$('#submit').click(function(){
    $('#formfield').submit();
    alert('Sukses Mengirim !');
});