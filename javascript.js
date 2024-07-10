const container = document.querySelector(".container");



document.addEventListener("DOMContentLoaded", function(e){
    createPixels(16);
});

function createPixels(pixels) {
    let pixelCount = rowCount = parseInt(pixels)*1;
    const pixelWidth = container.style.width / pixels + "px";
    const pixelHeight = container.style.height / pixels + "px";
    while (rowCount>0){
        let newRow = document.createElement("div");
       
        newRow.classList.add("row");
        newRow.id = "row-"+(Math.abs(pixels-rowCount)+1);
        newRow.style.width = "100%";
        newRow.style.height = "100%";
        newRow.style.backgroundColor = "white"
        newRow.style.display = "flex";
        newRow.style.flexDirection = "row";
        container.appendChild(newRow);
        while (pixelCount>0){    
            let newDiv = document.createElement("div");
            newDiv.classList.add("pixel");
            newDiv.id = "pixel-"+(Math.abs(pixels-rowCount)+1)+"-"+(Math.abs(pixels-pixelCount)+1);
            newDiv.style.backgroundColor = "white";
            newDiv.style.width =  "100px";
            newDiv.style.height = "100%";
            newDiv.style.border = "0.5px solid black";
            
            newRow.appendChild(newDiv);
            pixelCount -= 1;
        }
        rowCount -= 1;
        pixelCount = parseInt(pixels)*1;
    }
    container.style.display = "flex";
    container.style.flexDirection = "column";
    
    

}


