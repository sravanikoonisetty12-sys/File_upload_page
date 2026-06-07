// =========================
// Sidebar Active Menu
// =========================

const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        item.classList.add("active");

    });

});


// =========================
// File Upload Elements
// =========================

const fileInput = document.getElementById("fileInput");
const uploadBtn = document.querySelector(".upload-btn");
const clearBtn = document.querySelector(".clear-btn");
const fileTable = document.getElementById("fileTable");


// =========================
// Upload Button
// =========================

uploadBtn.addEventListener("click", function () {

    if (!fileInput.files.length) {

        alert("Please select at least one file.");
        return;
    }

    // Clear previous rows
    fileTable.innerHTML = "";

    // Add selected files to table
    Array.from(fileInput.files).forEach(file => {

        const row = document.createElement("tr");

        const fileName = file.name;
        const fileType = file.name.split(".").pop().toUpperCase();
        const fileSize = (file.size / 1024).toFixed(2) + " KB";

        row.innerHTML = `
            <td>${fileName}</td>
            <td>${fileType}</td>
            <td>${fileSize}</td>
            <td>Just Now</td>
        `;

        fileTable.appendChild(row);

    });

    alert("Files Uploaded Successfully!");

});


// =========================
// Clear Button
// =========================

clearBtn.addEventListener("click", function () {

    fileInput.value = "";
    fileTable.innerHTML = "";

    alert("Files Cleared Successfully!");

});


// =========================
// Drag & Drop Support
// =========================

const uploadBox = document.querySelector(".upload-box");

if (uploadBox) {

    uploadBox.addEventListener("dragover", function (e) {

        e.preventDefault();
        uploadBox.style.background = "#9bb7ec";

    });

    uploadBox.addEventListener("dragleave", function () {

        uploadBox.style.background = "#b2cff5";

    });

    uploadBox.addEventListener("drop", function (e) {

        e.preventDefault();

        uploadBox.style.background = "#f8fbff";

        fileInput.files = e.dataTransfer.files;

    });

}


// =========================
// Page Loaded
// =========================

window.addEventListener("load", function () {

    console.log("File Upload Page Loaded Successfully");

});