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