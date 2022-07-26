const coord = document.getElementById(`coord`);
document.addEventListener(`click`, (event) => {
    coord.innerHTML = `X:${event.clientX} Y:${event.clientY}`
});