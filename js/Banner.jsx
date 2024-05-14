function Banner() {
    React.useEffect(() => {
        let typed = new Typed('.animated-text', {
            strings: ['Junior Web Developer', 'Scribe', 'and a Cool Guy'],
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
        <section id="banner" className="flex flex-col justify-center items-center mx-auto">
            <div id="full-name" className="w-full my-[24px] font-bold text-[3rem] text-center leading-[1.2] break-words">I am Amyr Yousufzai <br /> 
                <span className="animated-text inline text-[24px] text-[#ba68c8] font-[400px] leading-[1.2]"></span>
            </div>

            <p className="text-center">To put into practice what I have accumulated during my learning process while expanding my experience, knowledge and expertise in web development.</p>
            
            <div class="w-full mt-10">
                <a href=".\assets\amyr-cv.docx" download class="block text-center bg-white-300 hover:bg-blue-600 border border-violet-950 text-black font-semibold mb-[10px] py-2 px-4 rounded-full shadow">
                    Download CV
                </a>
                <button onClick="getRandomQuote()" class="block w-full mb-[60px] text-white text-center bg-[#ba68c8] hover:bg-blue-600 border text-black font-semibold py-2 px-4 rounded-full shadow">
                    Get a quote
                </button>

                <img src="assets/images/coding-bro.svg" alt="" />
                
            </div>
        </section>
    );
}