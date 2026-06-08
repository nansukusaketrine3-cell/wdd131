// =========================
// SELECT ELEMENTS
// =========================
const input = document.querySelector("#chapter");
const addButton = document.querySelector("#addChapter");
const list = document.querySelector("#list");

// =========================
// CHAPTER ARRAY (LOCAL STORAGE SAFE)
// =========================
let chaptersArray = getChapterList() || [];

// =========================
// DISPLAY SAVED CHAPTERS ON LOAD
// =========================
chaptersArray.forEach((chapter) => {
    displayList(chapter);
});

// =========================
// ADD BUTTON EVENT
// =========================
addButton.addEventListener("click", () => {
    if (input.value !== "") {

        displayList(input.value);

        chaptersArray.push(input.value);

        setChapterList();

        input.value = "";

        input.focus();
    }
});

// =========================
// DISPLAY FUNCTION
// =========================
function displayList(item) {
    const li = document.createElement("li");

    const deleteButton = document.createElement("button");

    li.textContent = item;

    deleteButton.textContent = "❌";

    li.appendChild(deleteButton);

    list.appendChild(li);

    // delete event
    deleteButton.addEventListener("click", () => {
        deleteChapter(item);
        list.removeChild(li);
    });
}

// =========================
// SAVE TO LOCAL STORAGE
// =========================
function setChapterList() {
    localStorage.setItem("chapters", JSON.stringify(chaptersArray));
}

// =========================
// GET FROM LOCAL STORAGE
// =========================
function getChapterList() {
    return JSON.parse(localStorage.getItem("chapters"));
}

// =========================
// DELETE FUNCTION
// =========================
function deleteChapter(chapter) {

    // remove ❌ from string if it exists
    chapter = chapter.slice(0, chapter.length - 1);

    // filter out deleted chapter
    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    // update storage
    setChapterList();
}