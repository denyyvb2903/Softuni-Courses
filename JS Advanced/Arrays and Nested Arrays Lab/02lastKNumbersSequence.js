function lastKNumbersSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let  startIndex = Math.max(0, i - k); 
        let  sum = sequence.slice(startIndex, i).reduce((a, b) => a + b, 0); 
        sequence.push(sum); 
    }

    return sequence
}

lastKNumbersSequence(6, 3)
