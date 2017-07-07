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

    // Iterate through cats object and create a div forEach cat. Set display = none by default
    cats.cats.forEach(function(cat) {

    // Create navbar from cats object
        $("#navbar").append('<li>' + cat.catName + '</li>');
        // Create a div for each cat
        var catDiv = '<picture class="target-photo1"><img src="%data%"></picture>';
        var displayedName = '<h2 class="cat-name-1">%data%</h2>';
        var formattedCatDiv = catDiv.replace("%data%", cat.catImage);
        var formattedDisplayedName = displayedName.replace("%data%", cat.catName);
        $(".displayColumn").append(formattedCatDiv);
        $(".target-photo1:last").append(formattedDisplayedName);

    });

// // onClick of navbar to select cat picture and cat name to display
//     $("li").click(function(){
//         $("#cat-name-1").append(catList[0]);
//         var catPic = '<img src="%data%" alt="Picture of a cat trying to shake your hand">';
//         var formattedImage = catPic.replace("%data%", "images/"+catList[0]+".jpg");
//         $("picture").append(formattedImage);
//     });
});

// // Check for click event on target photo. Increment count and display new count.
// $(function(){
//     var count = 0;
//     $(".target-photo1").click(function() {
//         count++;
//         $("#click-counter1").html("Number of clicks is "+count);
//     });
// });


