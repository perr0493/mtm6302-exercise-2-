const $grid = document.getElementById('gallery');

const imageArray = ['beer', 'coffee', 'colors','door','fire','food','icecream','large-building','lemons','owl','seashell','waterfront', ] ;

// code 

for (i = 0 ; i < 12 ; i++){


    $grid.innerHTML += (`<img class="image" src="images/${imageArray[i]}.jpg" alt = "${imageArray[i]}">`)
} 


// event listener
$grid.addEventListener('mouseover', function (e) {

    // if class = .image
      const $image = e.target.closest('.image');
  
      // If true:
      if ($image){
  
        // what you want it to do

        $image.classList.toggle('big')
        $image.classList.toggle('hide')

      }
  });

  // event listener
$grid.addEventListener('mouseout', function (e) {

    // if class = .image
      const $image = e.target.closest('.image');
  
      // If true:
      if ($image){
  
        // what you want it to do

        $image.classList.toggle('big')
        $image.classList.toggle('hide')


  
      }
  });

   // event listener
$grid.addEventListener('click', function (e) {

    // if class = .image
      const $image = e.target.closest('.image');
      const $title = document.getElementById('title');
  
  
      // If true:
      if ($image){
  
        // what you want it to do

        $title.innerHTML = (`Title: ${$image.alt}`)


  
      }
  });






