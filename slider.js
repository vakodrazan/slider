function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error("No slider passed in");
    }

    // create some variables for working with the slider
    let prev;
    let current;
    let next;



    // select the elements needed for the slider
    const slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector(".goToPrev");
    const nextButton = slider.querySelector(".goToNext");

    // future function
    function startSlider() {
        current = slider.querySelector(".current") || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
    }

    function applyClasses() {
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
    }

    function move(direction) {
        const classesToRemove = ['prev', 'current', 'next'];
        prev.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);

        if (direction === 'back') {
            // swap the variable when we go backwards
            [prev, current, next] = [
                prev.previousElementSibling || slides.lastElementChild, 
                prev, 
                current
            ];
        } else {
            // swap the variable when we go backwards
            [prev, current, next] = [
                current, 
                next, 
                next.nextElementSibling || slides.firstElementChild,
            ];
        }
        applyClasses()
    }

    startSlider();
    applyClasses();

    prevButton.addEventListener('click', () => move('back'));
    nextButton.addEventListener('click', move);
};

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));