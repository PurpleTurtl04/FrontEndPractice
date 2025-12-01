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
            <div className="flex flex-col">
                <img
                    src="/src/assets/designers_image-min.jpg"
                    alt="Designer Example"
                    className="mb-9 size-80"
                />
                <h3 className="mb-4 pl-px text-xl">Your designers</h3>
                <p className="pl-px">
                    Collaborate in context and in real time. Never worry about
                    your files being out of date or overwriting each other’s
                    work.
                </p>
            </div>
            <div>
                <img
                    src="/src/assets/stakeholders_image-min.jpg"
                    alt="Stakeholder Example"
                    className="mb-9 size-80"
                />
                <h3 className="mb-4 pl-px text-xl">Your stakeholders</h3>
                <p className="pl-px">
                    Engineers always have access to the current source-of-truth
                    and can inspect elements, export assets, and copy code.
                </p>
            </div>
            <div>
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
        <section className="flex w-lvw flex-col items-center bg-white pt-31 text-center text-black">
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
        </section>
    );
}

export default App;
