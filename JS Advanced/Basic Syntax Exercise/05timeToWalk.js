// function walk(steps, foot, speed){

//         let meters = steps * foot

//         let hours = 0
//         let minutes = 0;
//         let seconds = 0;

//         let mps= speed / 3.6

//         let time = meters / mps

//         let breik = Math.floor(meters / 500) * 60

//         time += breik

//         minutes = Math.floor(time/60)
//         seconds = Math.floor(time - minutes*60)
//         hours = Math.floor(time / 3600)

//         hh = hours < 10 ? "0": "";
//         mm = minutes < 10 ? "0": "";
//         ss = seconds < 10 ? "0": "";

//         console.log(`${hh + hours}:${Number(mm) + minutes}:${ss + seconds}`);

// }



function walk(steps, footprintLength, speedKmH) {

    let distance = steps * footprintLength;
    let speed = speedKmH * 1000 / 3600;
    let restTime = Math.floor(distance / 500) * 60;
    let totalTime = (distance / speed) + restTime;

    let hours = Math.floor(totalTime / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(totalTime / 60).toFixed(0).padStart(2, '0');
    let seconds = (totalTime % 60).toFixed(0).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}
walk(4000, 0.60, 5);
walk(2564, 0.70, 5.5); 