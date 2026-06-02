// Course object
let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,

    sections: [
        {
            section: "001",
            enrolled: 35,
            instructor: "Brother Smith"
        },
        {
            section: "002",
            enrolled: 28,
            instructor: "Sister Jones"
        }
    ]
};

// Display course code and title
function setCourseInformation(course) {
    document.getElementById("courseName").textContent =
        `${course.code} - ${course.title}`;
}

// Display sections in the table
function renderSections(course) {
    const tbody = document.querySelector("#sections tbody");

    course.sections.forEach(section => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${section.section}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
        `;

        tbody.appendChild(row);
    });
}

// Call the functions
setCourseInformation(aCourse);
renderSections(aCourse);