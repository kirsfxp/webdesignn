const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    const label = box.querySelector('.label');

    label.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});