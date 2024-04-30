document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('file-input');
    const image = document.getElementById('uploaded');
    const inputSlider = document.getElementById('inputSlider')
    const sliderValue = document.getElementById('sliderValue')
    let range;

    imageInput.addEventListener('change', () => {
        // Function to read and display the selected image
        function readURL(input) {
            if (input.files && input.files[0]) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    image.src = e.target.result;
                    image.style.display = 'block'; // Show the image element
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

        // Call readURL function with the selected file input
        readURL(imageInput);
    });

    inputSlider.addEventListener('input', () => {
        range = inputSlider.value
        //console.log(range)

        sliderValue.textContent = range;
    });
});