function openForm() {
    document.getElementById("formPopup").style.display = "block";
}

function closeForm() {
    document.getElementById("formPopup").style.display = "none";
}

function addEvent() {
    const name = document.getElementById("eventName").value;
    const date = document.getElementById("eventDate").value;
    const desc = document.getElementById("eventDescription").value;

    if (!name || !date) {
        alert("Please enter event name & date!");
        return;
    }

    const eventList = document.getElementById("events");

    const li = document.createElement("li");
    li.innerHTML = `
        <strong>${name}</strong> - ${date} <br>
        <small>${desc}</small>
    `;

    eventList.appendChild(li);

    closeForm();
    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";
    document.getElementById("eventDescription").value = "";
}

