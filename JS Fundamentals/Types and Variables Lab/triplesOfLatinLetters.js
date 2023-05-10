function solve(num) {

    for (let i = 0; i <= num-1; i++) {
        for (let j = 0; j <= num-1; j++) {
            for (let k = 0; k <= num-1; k++) {
                let char1 = String.fromCharCode(`a`.charCodeAt(0) + i);
                let char2 = String.fromCharCode(`a`.charCodeAt(0) + j);
                let char3 = String.fromCharCode(`a`.charCodeAt(0) + k);
                console.log(`${char1}${char2}${char3}`);
            }
        }
    }

}
solve(3);