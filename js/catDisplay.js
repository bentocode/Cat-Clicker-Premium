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
    // Declared variable for tracking which cat is currently being viewed
    var currentCat;
    // Iterate through cats object and create a div forEach cat. Set display = none by default
    cats.cats.forEach(function(cat, i) {

    // Create navbar from cats object where the id for each list element is the index from the cats object
        $("#navbar").append('<li id='+i+'>' + cat.catName + '</li>');
        // Create a div for each cat
        var catDiv = '<picture class="target-photo"><img src="%data%" id="'+i+'-photo"></picture>';
        var displayedName = '<h2 id="'+i+'-title">%data%</h2>';
        var counterName = '<h2 id="'+i+'-counter" class="click-counter">' + cat.catClicks + '</h2>';
        var formattedCatDiv = catDiv.replace("%data%", cat.catImage);
        var formattedDisplayedName = displayedName.replace("%data%", cat.catName);
        // Display hidden divs on the page with image, name and count
        $(".displayColumn").append(formattedCatDiv);
        $(".target-photo:last").append(formattedDisplayedName, counterName);
    });

// onClick of navbar to select cat picture and cat name to display
    $("li").click(function(){
        var id = $(this).attr('id');
        var photoId = "#" + id + "-photo";
        var nameId = "#" + id + "-title";
        var counterId = "#" + id + "-counter";

        console.log(photoId);
        // hide all images and names
        $("img").attr("style", "display:none");
        $("h2").attr("style", "display:none");
        // display the selected photo and name
        $(photoId).attr("style", "display:block");
        $(nameId).attr("style", "display:block");
        $(counterId).attr("style", "display:block");
        // set the currentCat equal to the id of the list item
        currentCat = id;
        // console.log(photoId, nameId);
    });


// Check for click event on target photo. Increment count and display new count.
    $(function(){
        $(".target-photo").click(function() {
            var clickCount = cats.cats[currentCat].catClicks;
            var clickId = '#' + currentCat + '-counter';
            // increment the count
            clickCount++;
            // display the count
            $(clickId).html(clickCount);
            console.log(clickId);
            // push the new count value to the cats object
            cats.cats[currentCat].catClicks = clickCount;
        });
    });
});

