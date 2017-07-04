// // Create an object containing data for the available cats
// var cats = [{
//     "catName": "Fluffy",
//     "catImage": "images/fluffy.jpg" ,
//     "catClicks": 0,
// }, {
//     "catName": "Whiskers",
//     "catImage": "images/whiskers.jpg",
//     "catClicks": 0,
// },{
//     "catName": "Mittens",
//     "catImage": "images/mittens.jpg",
//     "catClicks": 0,
// },{
//     "catName": "Tiger",
//     "catImage": "images/tiger.jpg",
//     "catClicks": 0,
// },{
//     "catName": "Sam",
//     "catImage": "images/sam.jpg",
//     "catClicks": 0,
// }];


$(function(){
    var count = 0;
    var catName1 = "Whiskers";

// Check for click event on target photo. Increment count and display new count.
    $(".target-photo1").click(function() {
        count++;
        $("#click-counter1").html("Number of clicks is "+count);
    });

// Add the cat name to the page
    $("#cat-name-1").append(catName1);
});


