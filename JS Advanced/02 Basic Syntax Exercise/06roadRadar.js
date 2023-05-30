function roadRadar (speed, area){

    let areaSpeed = 0;

    switch(area) {
        case `motorway`: areaSpeed = 130; break;
        case `interstate`: areaSpeed = 90; break;
        case `city`: areaSpeed = 50; break;
        case `residential`: areaSpeed = 20; break;
        default : break;
    }

    let overSpeed = speed - areaSpeed;
    
   
    if(speed <= areaSpeed){
        console.log(`Driving ${speed} km/h in a ${areaSpeed} zone`);
    }

    if(speed > areaSpeed && overSpeed <= 20){
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${areaSpeed} - speeding` );
    }
    if(speed > areaSpeed && overSpeed <= 40 && overSpeed > 20){
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${areaSpeed} - excessive speeding` );
    }
    if(speed > areaSpeed && overSpeed > 40){
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${areaSpeed} - reckless driving` );
    }
    
}
roadRadar(40, 'city');