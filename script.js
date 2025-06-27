
function displayImage() {
    const photos = ["images/Chichén Itzá.jpg",
        "images/Christ the Redeemer.jpg",
        "images/Colosseum.jpg",
        "images/Great wall of China.jpg",
        "images/Machu Picchu.jpg",
        "images/Petra.jpg",
        "images/Taj Mahal.jpg"];

    let i = 0;
    setInterval(() => {
        document.getElementsByTagName("img")[0].setAttribute("src", photos[i]);
        document.getElementById("place").innerText = photos[i].slice(7, -4);
        i++;
        if (i == photos.length) {
            i = 0;
        }
    }, 3000);
}

