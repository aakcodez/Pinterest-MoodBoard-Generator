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
// Boards Array
// ==========================================

const boards = [];

// ==========================================
// Test DOM Selection
// ==========================================

console.log(moodBoardForm);

// ==========================================
// Render Boards
// ==========================================

function renderBoards() {

    // Clear existing board cards
    boardGrid.innerHTML = "";

    // Loop through all boards
    boards.forEach(function (board) {

        // Create board card
        const card = document.createElement("article");
        card.classList.add("board-card");

        // Create image
        const image = document.createElement("img");
        image.src = board.image;
        image.alt = board.title;

        // Create title
        const title = document.createElement("h3");
        title.textContent = board.title;

        // Create caption
        const caption = document.createElement("p");
        caption.textContent = board.caption;

        // Put elements inside the card
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(caption);

        // Put card inside the board grid
        boardGrid.appendChild(card);
    });
}

// ==========================================
// Form Submit Event
// ==========================================

moodBoardForm.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log("Form submitted!");

    // ==========================================
    // Read Title and Caption
    // ==========================================

    const titleValue = boardTitle.value.trim();
    const captionValue = boardCaption.value.trim();

    console.log("Title:", titleValue);
    console.log("Caption:", captionValue);

    // ==========================================
    // Get Selected Image
    // ==========================================

    const selectedFile = imageUpload.files[0];

    if (!selectedFile) {
        console.log("Please select an image.");
        return;
    }

    // ==========================================
    // Create FileReader
    // ==========================================

    const reader = new FileReader();

    // ==========================================
    // Image Loaded
    // ==========================================

    reader.onload = function () {

        const newBoard = {
            id: Date.now(),
            image: reader.result,
            title: titleValue,
            caption: captionValue
        };

        console.log("New board:", newBoard);

        // Add board to array
        boards.push(newBoard);

        console.log("All boards:", boards);

        // Render boards on the page
        renderBoards();
    };

    // ==========================================
    // Read Image
    // ==========================================

    reader.readAsDataURL(selectedFile);
});