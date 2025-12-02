import './App.css';

function App() {
    return (
        <div className="container max-w-full bg-black text-white">
            <header>
                <NavBar />
            </header>
            <main className="mx-auto flex max-w-7xl flex-col items-center px-10">
                <Hero />
                <Brands />
                <Collaborate />
                <SignUpForm />
            </main>
            <Footer />
        </div>
    );
}

function NavBar() {
    return (
        <div className="mx-auto my-0 flex max-w-screen items-center justify-between px-8 pt-5 pb-34">
            <div>
                <img src="./Figmalogo.svg" alt="Figma Logo" />
            </div>
            <nav className="flex items-center justify-between gap-11 text-gray-400">
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Customers</a>
                <a href="#">Blog</a>
                <a href="#">Sign In</a>
                <button className="rounded-sm bg-green-400 px-5.75 py-1.25 text-white">
                    Sign Up
                </button>
            </nav>
        </div>
    );
}

function Hero() {
    return (
        <section className="mb-48">
            <div className="flex items-center justify-between gap-10">
                <div className="w-1/3">
                    <h1 className="text-5xl font-bold">
                        A better way to design.
                    </h1>
                    <p className="mt-13 text-gray-400">
                        Design, prototype, and collaborate all in the
                        browser—with Figma.
                    </p>
                    <button className="mt-8 rounded-sm bg-green-400 px-10 py-3">
                        Try Figma for free
                    </button>
                </div>
                <div className="w-2/3">
                    <img src="src/assets/HeroShot-min.jpg" alt="FigmaSample" />
                </div>
            </div>
        </section>
    );
}

function Brands() {
    return (
        <section className="mb-48">
            <p className="mb-20 text-center">Empowering innovative brands</p>
            <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-x-19 gap-y-13">
                <img
                    className="size-15"
                    src="src/assets/Slack.svg"
                    alt="Slack Logo"
                />
                <img
                    className="size-15"
                    src="src/assets/Twitter.svg"
                    alt="Twitter Logo"
                />
                <img
                    className="size-15"
                    src="src/assets/Uber.svg"
                    alt="Uber Logo"
                />
                <img
                    className="size-15"
                    src="src/assets/Zoom.svg"
                    alt="Zoom Logo"
                />
                <img
                    className="size-15"
                    src="src/assets/Deliveroo.svg"
                    alt="Deliveroo Logo"
                />
                <img
                    className="size-15"
                    src="src/assets/NY_Times.svg"
                    alt="NY Times Logo"
                />
                <img
                    className="size-15"
                    src="src/assets/Github.svg"
                    alt="Github Logo"
                />
                <img
                    className="size-15"
                    src="src/assets/Class_Pass.svg"
                    alt="Class Pass Logo"
                />
                <img
                    className="size-15"
                    src="src/assets/Dropbox.svg"
                    alt="Dropbox Logo"
                />
                <img
                    className="size-15"
                    src="src/assets/Square.svg"
                    alt="Square Logo"
                />
                <img
                    className="size-15"
                    src="src/assets/Walgreens.svg"
                    alt="Walgreens Logo"
                />
                <img
                    className="size-15"
                    src="src/assets/Microsoft.svg"
                    alt="Microsoft Logo"
                />
            </div>
        </section>
    );
}

function Collaborate() {
    return (
        <section className="mb-15">
            <div className="mb-22 flex flex-col items-center text-center">
                <h3 className="mb-7 text-xl">
                    Collaborate with everyone, at every phase
                </h3>
                <p className="max-w-lg">
                    Each contributor owns their part of the creative process and
                    stays in sync along the way—across any platform.
                </p>
            </div>
            <Collaborators />
            <div className="text-center">
                <button className="mx-auto rounded-sm bg-green-400 px-5.75 py-3 text-white">
                    Try Figma for free
                </button>
            </div>
        </section>
    );
}

function Collaborators() {
    return (
        <div className="mb-10 flex justify-between gap-8">
            <div className="flex max-w-80 flex-col">
                <img
                    src="/src/assets/designers_image-min.jpg"
                    alt="Designer Example"
                    className="mb-9"
                />
                <h3 className="mb-4 pl-px text-xl">Your designers</h3>
                <p className="pl-px">
                    Collaborate in context and in real time. Never worry about
                    your files being out of date or overwriting each other’s
                    work.
                </p>
            </div>
            <div className="flex max-w-80 flex-col">
                <img
                    src="/src/assets/stakeholders_image-min.jpg"
                    alt="Stakeholder Example"
                    className="mb-9 size-80"
                />
                <h3 className="mb-4 pl-px text-xl">Your stakeholders</h3>
                <p className="pl-px">
                    Simply send a link to collect feedback, get change requests,
                    and allow stakeholders to make copy updates in your designs.
                </p>
            </div>
            <div className="flex max-w-80 flex-col">
                <img
                    src="/src/assets/developers_image-min.jpg"
                    alt="Developer Example"
                    className="mb-9 size-80"
                />
                <h3 className="mb-4 pl-px text-xl">Your developers</h3>
                <p className="pl-px">
                    Engineers always have access to the current source-of-truth
                    and can inspect elements, export assets, and copy code.
                </p>
            </div>
        </div>
    );
}

function SignUpForm() {
    return (
        <section className="0 flex w-lvw flex-col items-center bg-white pt-31 pb-42 text-center text-black">
            <p className="mb-11 font-semibold">Try Figma for Free</p>
            <button className="mb-5 flex w-sm items-center justify-center rounded-sm border border-solid border-gray-300 px-25 py-4">
                <img src="/src/assets/Google.svg" alt="Google Logo" /> Sign up
                with Google
            </button>
            <p className="mb-5 text-gray-300">or</p>
            <button className="mb-5 flex w-sm rounded-sm border border-solid border-gray-300 py-4 pl-5 text-gray-300">
                Email
            </button>
            <button className="mb-5 flex w-sm rounded-sm border border-solid border-gray-300 py-4 pl-5 text-gray-300">
                Password
            </button>
            <button className="mb-5 w-sm rounded-sm border border-solid bg-green-400 py-4 pl-5 text-center text-white">
                Create account...
            </button>
            <p className="mb-5 text-blue-300">Sign up with SAML SSO</p>
            <p className="text-gray-400">
                Already have an account?{' '}
                <span className="text-blue-300">Sing in</span>
            </p>
        </section>
    );
}

function Footer() {
    return (
        <footer className="mb-30 flex justify-between bg-white pl-20 text-black">
            <div className="flex w-1/5 flex-col gap-3">
                <div className="mb-4">
                    <img
                        src="/src/assets/figma logo footer.svg"
                        alt="Figma Logo"
                    />
                </div>
                <div className="flex gap-2">
                    <img
                        src="/src/assets/Instagram-dark.svg"
                        alt="Instagram Logo"
                    />
                    <p>Instagram</p>
                </div>
                <div className="flex gap-2">
                    <img
                        src="/src/assets/Facebook-dark.svg"
                        alt="Instagram Logo"
                    />
                    <p>Facebook</p>
                </div>
                <div className="flex gap-2">
                    <img
                        src="/src/assets/Twitter-dark.svg"
                        alt="Instagram Logo"
                    />
                    <p>Twitter</p>
                </div>
            </div>
            <div className="flex w-1/5 flex-col gap-2">
                <h4 className="mb-2 font-semibold">Use Cases</h4>
                <p>UI Design</p>
                <p>UX Design</p>
                <p>Prototyping</p>
                <p>Graphic Design</p>
                <p>Wireframing</p>
                <p>Brainstorming</p>
            </div>
            <div className="flex w-1/5 flex-col gap-2">
                <h4 className="mb-2 font-semibold">Explore</h4>
                <p>Figma</p>
                <p>Customers</p>
                <p>Why I Love Figma</p>
                <p>Blog</p>
                <p>Pricing</p>
                <p>Features</p>
                <p>Contact</p>
                <p>Learn Design</p>
            </div>
            <div className="flex w-1/5 flex-col gap-2">
                <h4 className="mb-2 font-semibold">Resources</h4>
                <p>Community Resources Hub</p>
                <p>Support</p>
                <p>Education</p>
                <p>Developers</p>
                <p>Downloads</p>
                <p>Releases</p>
                <p>Careers</p>
                <p>Legal</p>
                <p>Design Dictionary</p>
            </div>
            <div className="flex w-1/5 flex-col gap-2">
                <h4 className="mb-2 font-semibold">Compare</h4>
                <p>Sketch</p>
                <p>Adobe XD</p>
                <p>Invision Studio</p>
                <p>Framer</p>
                <p>Design on Windows</p>
            </div>
        </footer>
    );
}

export default App;
