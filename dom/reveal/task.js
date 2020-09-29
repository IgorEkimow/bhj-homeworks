function scrollPage(){
    const revealBlocks = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    revealBlocks.forEach(reveal => {
        const element = reveal.getBoundingClientRect().top;
        if (element < windowHeight) {
            reveal.classList.add("reveal_active");
        }
    });
}
document.addEventListener("scroll", scrollPage);