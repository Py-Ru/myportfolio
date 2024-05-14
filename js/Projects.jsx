function Projects() {
    const owlCarouselRef = React.useRef(null);

    React.useEffect(() => {
        // initialize Owl Carousel
        $(owlCarouselRef.current).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    }, []);

    // const goToPrevSlide = () => {
    //     if (owlCarouselRef.current) {
    //         $(owlCarouselRef.current).trigger('prev.owl.carousel');
    //     }
    // };

    // const goToNextSlide = () => {
    //     if (owlCarouselRef.current) {
    //         $(owlCarouselRef.current).trigger('next.owl.carousel');
    //     }
    // };

    return (
        <section className="projects">
            <h2 className="head-2 text-center">Some cool things I have done.</h2>
            <div ref={owlCarouselRef} className="owl-carousel mx-auto">
                <div className="item"><img src="https://via.placeholder.com/300" alt="Slide 1" /></div>
                <div className="item"><img src="https://via.placeholder.com/300" alt="Slide 2" /></div>
                <div className="item"><img src="https://via.placeholder.com/300" alt="Slide 3" /></div>
                {/* Add more slides as needed */}
            </div>

            {/* <div className="flex justify-between">
                <button onClick={goToPrevSlide} className="rounded-full bg-blue-500 text-white px-4 py-2 mr-2">Prev</button>
                <button onClick={goToNextSlide} className="rounded-full bg-blue-500 text-white px-4 py-2">Next</button>
            </div> */}
        </section>
    );
}