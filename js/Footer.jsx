function Footer() {
    return (
        <footer className="bg-[#ba68c8] mt-9 text-white py-6">
            <h2 className="text-center mb-4">Have something in mind? Let's talk!</h2>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                    {/* Social Media Links */} 
                    <a href="#" className="social-link text-white hover:text-white transition duration-300">
                        <i class="devicon-facebook-plain social-link"></i>
                    </a>
                    <a href="#" className="text-white hover:text-white transition duration-300">
                        <i class="devicon-twitter-original social-link"></i>
                    </a>
                    <a href="#" className="text-white hover:text-white transition duration-300">
                        <i class="devicon-linkedin-plain social-link"></i>
                    </a>
                    <a href="#" className="text-white hover:text-white transition duration-300">
                        <i class="devicon-github-original social-link"></i>
                    </a>
                </div>
                <div className="text-sm text-white mt-4 md:mt-0">© 2024 Your Company. All rights reserved.</div>
            </div>
        </footer>
    );
}