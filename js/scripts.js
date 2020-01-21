$(document).ready(function() {
  
  $('#formy').submit(function(event) {
    console.log('hello')
    event.preventDefault(); 

    var thing1 = $('#favorite1').val();
    var thing2 = $('#favorite2').val();
    var thing3 = $('#favorite3').val();
    var thing4 = $('#favorite4').val();

    var favoritesList = [ thing1, thing2, thing3, thing4 ];
    console.log('favoriteList:', favoritesList);

    var newArray = favoritesList[1] + ", " + favoritesList[2];
    console.log("newArray: " + newArray);

    var otherNewArray = [];
    otherNewArray.push(favoritesList[1], favoritesList[2]);
    console.log("otherNewArray: " + otherNewArray);

    // $('#list').append("<li>"+favoritesList[1]+"</li>");
    // $('#list').append("<li>"+favoritesList+"</li>");

    favoritesList.forEach(listing => {
      return $('#list').append("<li>"+listing+"</li>");
      console.log('running')
    } );
  });

});