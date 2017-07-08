// Create an object containing data for the available cats
var cats =  {
    "cats": [{
        "catName": "Fluffy",
        "catImage": "images/fluffy.jpg" ,
        "catClicks": 0,
        "clickId": "id"
    }, {
        "catName": "Whiskers",
        "catImage": "images/whiskers.jpg",
        "catClicks": 0,
        "clickId": "id"
    },{
        "catName": "Mittens",
        "catImage": "images/mittens.jpg",
        "catClicks": 0,
        "clickId": "id"
    },{
        "catName": "Tiger",
        "catImage": "images/tiger.jpg",
        "catClicks": 0,
        "clickId": "id"
    },{
        "catName": "Sam",
        "catImage": "images/sam.jpg",
        "catClicks": 0,
        "clickId": "id"
    }]
};



$(function() {

    // Iterate through cats object and create a div forEach cat. Set display = none by default
    cats.cats.forEach(function(cat) {

    // Create navbar from cats object
        $("#navbar").append('<li id='+cat.catName+'>' + cat.catName + '</li>');
        // Create a div for each cat
        var catDiv = '<picture class="target-photo"><img src="%data%" id="'+cat.catName+'-photo"></picture>';
        var displayedName = '<h2 id="'+cat.catName+'-title">%data%</h2>';
        var counterName = '<h2 id="'+cat.catName+'-counter" class="click-counter">' + cat.catClicks + '</h2>';
        var formattedCatDiv = catDiv.replace("%data%", cat.catImage);
        var formattedDisplayedName = displayedName.replace("%data%", cat.catName);
        // Display hidden divs on the page with image, name and count
        $(".displayColumn").append(formattedCatDiv);
        $(".target-photo:last").append(formattedDisplayedName, counterName);
        // Update the clickId in cats object
        var clickId = cat.catName + "-photo";
        cat.clickId = clickId;
        console.log(clickId);
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

        // console.log(photoId, nameId);
    });


// Check for click event on target photo. Increment count and display new count.
    $(function(){
        $(".target-photo").click(function() {
            // Get the id from the photo you clicked on
            var clickId = $("img").attr('id');
            // Use the id to get the catClicks value from the cats object
            var clickCount = ;
            // increment the count
            clickCount++;
            // display the count
            $(clickId).html(clickCount);
            // push the new count value to the cats object
            cat.clickId.catClicks = clickCount;
        });
    });
});

