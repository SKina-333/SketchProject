const container = document.querySelector(".container");



document.addEventListener("DOMContentLoaded", function(e){
    createPixels(16);
    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", function(){
            pixel.style.backgroundColor = "blue";
        });
    });
});

function createPixels(pixels) {
    let pixelCount = rowCount = parseInt(pixels)*1;
    
    while (rowCount>0){
        let newRow = document.createElement("div");
       
        newRow.classList.add("row");
        newRow.id = "row-"+(Math.abs(pixels-rowCount)+1);
        newRow.style.width = "100%";
        newRow.style.height = "100%";
        newRow.style.backgroundColor = "white"
        newRow.style.display = "flex";
        newRow.style.flexDirection = "row";
        newRow.style.justifyContent = "space-between";
        newRow.style.border = "1px solid grey";
        

        container.appendChild(newRow);
        while (pixelCount>0){    
            let newDiv = document.createElement("div");
            newDiv.classList.add("pixel");
            newDiv.id = "pixel-"+(Math.abs(pixels-rowCount)+1)+"-"+(Math.abs(pixels-pixelCount)+1);
            newDiv.style.backgroundColor = "white";
            newDiv.style.width =  "100%";
            newDiv.style.height = "100%";
            newDiv.style.backgroundColor = "rgba(220, 20, 60, 0)";
            newDiv.style.border = "1px solid grey";
            
            newRow.appendChild(newDiv);
            pixelCount -= 1;
        }
        rowCount -= 1;
        pixelCount = parseInt(pixels)*1;
    }
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.border = "solid 5px black";
    
}




function setColor(){
    console.log("setColor");
}



