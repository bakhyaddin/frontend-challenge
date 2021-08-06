export class SlideAnimation {
    isDragging = false;

    startPos = 0;

    currentTranslate = 0;

    prevTranslate = 0;

    animationID: any;

    currentIndex = 0;

    slider: any = document.querySelector<HTMLElement>('.slider-container');

    slides: any = Array.from<HTMLElement>(document.querySelectorAll('.page'));

    constructor() {
        // make responsive to viewport changes
        window.addEventListener('resize', this.setPositionByIndex)

        // adding touch and mouse events
        this.slides.forEach((slide: any, index: number) => {
            // touch events (mobile)
            slide.addEventListener('touchstart', this.touchStart(index))
            slide.addEventListener('touchend', this.touchEnd)
            slide.addEventListener('touchmove', this.touchMove)
            // mouse events (web)
            slide.addEventListener('mousedown', this.touchStart(index))
            slide.addEventListener('mouseup', this.touchEnd)
            slide.addEventListener('mousemove', this.touchMove)
            slide.addEventListener('mouseleave', this.touchEnd)
        })
    }


    touchStart = (index: number) => (event: any) => {
        this.currentIndex = index
        this.startPos = this.getPositionX(event)
        this.isDragging = true
        // start animation
        this.animationID = requestAnimationFrame(this.animation)
    }

    touchMove = (event: any) => {
        if (this.isDragging) {
            const currentPosition = this.getPositionX(event)
            this.currentTranslate = this.prevTranslate + currentPosition - this.startPos
            // this.getMovementDirection()
        }
    }

    touchEnd = () => {
        // cancel animation
        cancelAnimationFrame(this.animationID)
        this.isDragging = false

        // how far the page is moved on X axis
        const movedBy = this.currentTranslate - this.prevTranslate

        // if moved enough negative then snap to next slide if there is one
        if (movedBy < -100 && this.currentIndex < this.slides.length - 1) {
            this.currentIndex += 1
        }

        // if moved enough positive then snap to previous slide if there is one
        if (movedBy > 100 && this.currentIndex > 0) {
            this.currentIndex -= 1
        }

        this.setPositionByIndex()
    }

    animation = () => {
        this.getMovementDirection()
        this.setSliderPosition()
        if (this.isDragging) {
            requestAnimationFrame(this.animation)
        }
    }

    // current translate setter
    setSliderPosition = () => {
        this.slider.style.transform = `translateX(${this.currentTranslate}px)`
    }

    setPositionByIndex = () => {
        this.currentTranslate = this.currentIndex * -window.innerWidth
        this.prevTranslate = this.currentTranslate
        this.setSliderPosition()
    }

    getMovementDirection = () => {
        if (this.currentTranslate >= this.prevTranslate) {
            console.log("LEFT");
        } else {
            console.log("RIGTH");
        }
    }

    // gets x axis position
    getPositionX = (event: any) => event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}