// // function f(n) {
// //     if(n==0){
// //         return 1;
// //     }else if(n==1){
// //         return 1;
// //     }else if(n==2){
// //         return 2;
// //     }
// //     return f(n-1) + f(n-2);
// // }

// let result=f(6);
// console.log(result);





var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//mat cuoi ben trai
ctx.strokeStyle = "yellow";
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(130, 125, 100, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// mat trai
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "purple";
ctx.fillStyle = "black";
ctx.arc(100, 80, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// mat phai
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "purple";
ctx.fillStyle = "black";
ctx.arc(150, 80, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// nu cuoi
ctx.beginPath();
ctx.strokeStyle = "purple";
ctx.fillStyle = "black";
ctx.arc(120, 140, 20, 0, 1 * Math.PI);
ctx.stroke();
ctx.fill();



let x = "cuoi";
c.addEventListener("mousedown", () => {
    // hinh tron
    // ctx.strokeStyle = "yellow";
    // ctx.fillStyle = "yellow";
    // ctx.beginPath();
    // ctx.arc(130, 125, 100, 0, 2 * Math.PI);
    // ctx.stroke();
    // ctx.fill();

    // // mat trai
    // ctx.beginPath();
    // ctx.strokeStyle = "purple";
    // ctx.fillStyle = "black";
    // ctx.arc(100, 80, 10, 0, 2 * Math.PI);
    // ctx.stroke();
    // ctx.fill();

    // // mat phai
    // ctx.beginPath();
    // ctx.strokeStyle = "purple";
    // ctx.fillStyle = "black";
    // ctx.arc(150, 80, 10, 0, 2 * Math.PI);
    // ctx.stroke();
    // ctx.fill();

    // // nu cuoi
    // ctx.beginPath();
    // ctx.strokeStyle = "purple";
    // ctx.fillStyle = "black";
    // ctx.arc(120, 140, 20, 0, 1 * Math.PI);
    // ctx.stroke();
    // ctx.fill();
    // x = "khoc";
    let currentTime = Date.now();
    let cryY = 100;
    var ctx = c.getContext("2d");

    // mat khoc
    ctx.strokeStyle = "yellow";
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(400, 125, 100, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    // mat trai
    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.fillStyle = "black";
    ctx.arc(400, 80, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();


    // mat phai
    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.fillStyle = "black";
    ctx.arc(450, 80, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    // nu cuoi
    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.fillStyle = "black";
    ctx.arc(430, 140, 20, 0, 1 * Math.PI);
    ctx.stroke();
    ctx.fill();

    setInterval(() => {
        let delta = (Date.now() - currentTime) / 1000;
        let fps = 1 / delta;

        currentTime = Date.now();
        ctx.fillText("FPS: " + Math.round(fps), 15, 30);
        //draw here


        if (cryY <= 200) {
            //nuoc mat trai 1
            ctx.beginPath();
            ctx.strokeStyle = "purple";
            ctx.fillStyle = "blue";
            ctx.arc(400, cryY + 15, 10, 0, 1 * Math.PI);
            ctx.stroke();
            ctx.fill();

            // nuoc mat phai 1
            ctx.beginPath();
            ctx.strokeStyle = "purple";
            ctx.fillStyle = "blue";
            ctx.arc(450, cryY, 10, 0, 1 * Math.PI);
            ctx.stroke();
            ctx.fill();

            cryY++;
        }




    }, 1000 / 60);

}
)








