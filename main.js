document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('file-input');
    const image = document.getElementById('uploaded');
    const inputSlider = document.getElementById('inputSlider')
    const sliderValue = document.getElementById('sliderValue')
    let canvas =  document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    let range;
    let pixelation;

    inputSlider.addEventListener('input', () => {
        range = inputSlider.value
        //console.log(range)

        sliderValue.textContent = range;
        pixelation = range;
    });

    imageInput.addEventListener('change', () => {
        // Function to read and display the selected image
        function readURL(input) {
            if (input.files && input.files[0]) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    image.src = e.target.result;
                    image.style.display = 'block'; // Show the image element

                    image.onload = function() {
                        const aspecRatio = image.width/image.height
                        let canvasWidth = canvas.clientWidth;
                        let canvasHeight = canvasWidth/aspecRatio

                        canvas.width = canvasWidth;
                        canvas.height = canvasHeight;
                        // Clear the canvas before drawing the new image
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
                        // Draw the image onto the canvas with desired width and height
                        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                    };
                };

                reader.readAsDataURL(input.files[0]);
            }

        }

        // Call readURL function with the selected file input
        readURL(imageInput);
    });

});

function pixelator () {
    
}