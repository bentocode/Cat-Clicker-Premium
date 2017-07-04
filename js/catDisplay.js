// Create an object containing data for the available cats
var cats =  {
    "cats": [{
        "catName": "Fluffy",
        "catImage": "images/fluffy.jpg" ,
        "catClicks": 0,
    }, {
        "catName": "Whiskers",
        "catImage": "images/whiskers.jpg",
        "catClicks": 0,
    },{
        "catName": "Mittens",
        "catImage": "images/mittens.jpg",
        "catClicks": 0,
    },{
        "catName": "Tiger",
        "catImage": "images/tiger.jpg",
        "catClicks": 0,
    },{
        "catName": "Sam",
        "catImage": "images/sam.jpg",
        "catClicks": 0,
    }]
};



$(function() {

// Create navbar from cats object
    cats.cats.forEach(function(cat) {
        $("#navbar").append('<li>' + cat.catName + '</li>');
    });

// function changeImg(image){
//   var imghol = document.getElementByClass("target-photo1");
//   imghol.src = image;
// }

// onClick of navbar to select initial cat picture and cat name to display
    $("li").click(function(){
        $("#cat-name-1").append(catList[0]);
        var catPic = '<img src="%data%" alt="Picture of a cat trying to shake your hand">';
        var formattedImage = catPic.replace("%data%", "images/"+catList[0]+".jpg");
        $("picture").append(formattedImage);
    });
});

// // Check for click event on target photo. Increment count and display new count.
// $(function(){
//     var count = 0;
//     $(".target-photo1").click(function() {
//         count++;
//         $("#click-counter1").html("Number of clicks is "+count);
//     });
// });


