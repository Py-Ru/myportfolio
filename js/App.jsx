function App () {
    return (
        <>
            <Navbar />
            <Banner />
            <Projects />
            <Experience />
        </>
        
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));