document.addEventListener("DOMContentLoaded", function () {
    const topStrip = document.querySelector(".top-strip");
    const colors = [
        "rgba(0, 0, 128, 0.8)",  // Deep Navy Blue
        "rgba(0, 20, 140, 0.8)", 
        "rgba(0, 40, 160, 0.8)", 
        "rgba(0, 60, 180, 0.8)", 
        "rgba(0, 80, 200, 0.8)",  // Rich Royal Blue
        "rgba(0, 100, 220, 0.8)", 
        "rgba(0, 120, 240, 0.8)", 
        "rgba(0, 140, 255, 0.8)", 
        "rgba(20, 160, 255, 0.8)",  // Vivid Azure
        "rgba(40, 180, 255, 0.8)", 
        "rgba(60, 200, 255, 0.8)", 
        "rgba(80, 220, 255, 0.8)", 
        "rgba(100, 240, 255, 0.8)", 
        "rgba(120, 255, 255, 0.8)",  // Light Cyan Blue
        "rgba(140, 255, 250, 0.8)", 
        "rgba(160, 255, 240, 0.8)", 
        "rgba(180, 255, 230, 0.8)", 
        "rgba(200, 255, 220, 0.8)", 
        "rgba(220, 255, 210, 0.8)", 
        "rgba(240, 255, 200, 0.8)"  // Soft Ice Blue
    ];
   
    
    let colorIndex = 0;

    function changeColor() {
        topStrip.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }

    // Set the color change interval
    setInterval(changeColor, 5000);
});
  