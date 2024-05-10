// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the loader element
    var loader = document.getElementById("loader");
  
    // Hide the loader after 6 seconds (adjust as needed)
    setTimeout(function() {
      loader.parentElement.style.display = "none"; // Hide the loader container
    }, 5000); // 5000 milliseconds = 5 seconds
  });

//loader animation refresh
    function hideLoaderAndRefresh(){
        document.getElementById('loader-container').classList.remove('loader-active');

        //refresh the page
        location.reload();

        setTimeout(hideLoaderAndRefresh, 5000);
    }

//lazy load

window.addEventListener('load', function(){

  //set timeout to simulate delay from a real page load
  this.setTimeout(lazyLoad, 1000);
})

function lazyLoad() {
  var card_images =  document.querySelectorAll('.card-image');

  //loop over each card image
  card_images.forEach(function(card_image){
    var image_url = card_image.getAttribute('data-image-full');
    var content_image = card_image.querySelector('img')

    //change the src content image to load new high res photo
    content_image.src = image_url;

    //listen for load event when the new photo is finished loading
    content_image.addEventListener('load', function(){
      //swap out visible bg image with fully res photo
      card_image.style.backgroundImage = 'url(' + image_url + ')';
      //add class to remove  blur filter to smoothly transition the image change
      card_image.className = card_image.className + 'is-loaded';
    });
  });
}
