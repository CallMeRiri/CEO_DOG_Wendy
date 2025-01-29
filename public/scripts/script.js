$(document).ready(function () {
  console.log("ready!");

  const fetchDogBreeds = async () => {
      try {
          const response = await fetch("https://dog.ceo/api/breeds/list/all");
          const data = await response.json();
          if (data.status === "success") {
              populateDogSelect(data.message);
          }
      } catch (error) {
          console.error("Error fetching dog breeds:", error);
      }
  };

  const populateDogSelect = (breeds) => {
      const select = document.querySelector("#breed-select");
      Object.keys(breeds).forEach((breed) => {
          const option = document.createElement("option");
          option.text = breed;
          option.value = breed;
          select.appendChild(option);
      });
  };

  // DC.php line 21
  const getDogByBreed = async (breed) => {
      showLoading(); //I added loading as per sir's oral instruction :>

      try {
          const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
          const data = await response.json();
          if (data.status === "success") {
              displayDogImage(data.message);
          }
      } catch (error) {
          console.error("Error fetching dog image:", error);
          displayError();
      } finally {
          hideLoading(); 
      }
  };

  const showLoading = () => {
      const container = document.querySelector("#image-container");
      container.innerHTML = `<p class="loading-text">Loading...</p>`;
  };

  const hideLoading = () => {
      const loadingText = document.querySelector(".loading-text");
      if (loadingText) loadingText.remove();
  };

  const displayDogImage = (imageUrl) => {
      const container = document.querySelector("#image-container");
      container.innerHTML = `<img src="${imageUrl}" alt="Dog Image" class="dog-image">`;
  };

  const displayError = () => {
      const container = document.querySelector("#image-container");
      container.innerHTML = `<p class="error-text">Failed to load image. Try again!</p>`;
  };

  window.changeDog = (event) => {
      const breed = event.target.value;
      console.log("Selected breed:", breed);
      if (breed) {
          getDogByBreed(breed);
      }
  };

  fetchDogBreeds();
});




 /*    $('.generate-dog').change(() => {
        $.ajax({
          url: '/fetch_dog', // URL of the Laravel endpoint
          type: 'GET',
          success: function(response) {
            if (response.image_url) {
                // Clear previous images
                $('#image-container').html('');

                // Create a new img element with the fetched URL
                const imgElement = $('<img>').attr('src', response.image_url).attr('alt', 'Random Dog');

                // Append the img element to the container
                $('#image-container').append(imgElement);
            } else {
                console.error('Failed to fetch image:', response.error);
            }

            console.log(response);

          },
          error: function(xhr) {
            console.error('Error:', xhr.responseText);
          }
        });
      }); */


 