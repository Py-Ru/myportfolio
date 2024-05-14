function App () {
    return (
        <>
            <Navbar />
            <Banner />
            <Projects />
            <Experience />
            <Skills />
            <Footer />
        </>
        
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));