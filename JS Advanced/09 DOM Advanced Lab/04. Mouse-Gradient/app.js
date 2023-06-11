function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', hoverHandler);
    gradient.addEventListener('mouseout', clearHandler)
    let res = document.getElementById('result');

    function hoverHandler(e) {
        let offsetX = e.offsetX;
        let el = e.target;
        let elX = el.clientWidth;

        let xPercent = Math.trunc((offsetX / elX) * 100);
        res.textContent = `${xPercent}%`;
    }

    function clearHandler() {
        res.textContent = '';
    }
}