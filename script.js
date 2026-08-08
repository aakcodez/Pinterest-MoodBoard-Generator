// ==========================================
// DOM Element Selection
// ==========================================

const moodBoardForm = document.getElementById("mood-board-form");
const boardGrid = document.getElementById("board-grid");
const boardTitle = document.getElementById("board-title");
const boardCaption = document.getElementById("board-caption");
const imageUpload = document.getElementById("image-upload");
const searchInput = document.getElementById("search-input");

// ==========================================
// Test DOM Selection
// ==========================================

console.log(moodBoardForm);

// ==========================================
// Form Submit Event
// ==========================================

moodBoardForm.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Form submitted!");

    // Read title and caption
    const titleValue = boardTitle.value.trim();
    const captionValue = boardCaption.value.trim();

    console.log("Title:", titleValue);
    console.log("Caption:", captionValue);

    // Get the selected image file
    const selectedFile = imageUpload.files[0];

    // Check whether an image was selected
    if (!selectedFile) {
        console.log("Please select an image.");
        return;
    }

    // Create a FileReader
    const reader = new FileReader();

    // Run when the image has finished loading
    reader.onload = function () {
        const newBoard = {
            id: Date.now(),
            image: reader.result,
            title: titleValue,
            caption: captionValue
        };

        console.log(newBoard);
    };

    // Start reading the image
    reader.readAsDataURL(selectedFile);
});