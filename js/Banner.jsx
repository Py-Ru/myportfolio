function Banner() {
    React.useEffect(() => {
        let typed = new Typed('.animated-text', {
            strings: ['Junior Web Developer', 'Scribe', 'and Cool Guy'],
            typeSpeed: 60,
            backSpeed: 60,
            loop: true,
            loopCount: Infinity,
            startDelay: 500,
        })

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <section id="banner">
            <div>I am</div>
            <div className="animated-text inline"></div>
        </section>
    );
}