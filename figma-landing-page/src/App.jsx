import './App.css';

function App() {
    return (
        <div className='bg-black'>
            <heade>
                <NavBar />
            </heade>
            <main className='container mx-auto'>
                <Hero />
                <Customers />
            </main>
        </div>
    );
}

function NavBar() {
    return (
        <div className='container my-0 mx-auto pt-5 pb-29 flex justify-between items-center'>
            <div>
                <img src='./public/Figmalogo.svg' alt='Figma Logo' />
            </div>
            <nav className='flex justify-between items-center gap-5 text-gray-400'>
                <a href='#'>Features</a>
                <a href='#'>Pricing</a>
                <a href='#'>Customers</a>
                <a href='#'>Blog</a>
                <a href='#'>Sign In</a>
                <button className='bg-green-400 text-white py-1.25 px-5.75 rounded-sm'>
                    Sign Up
                </button>
            </nav>
        </div>
    );
}

function Hero() {
    return (
        <section className='pb-20'>
            <div className='flex justify-between items-center gap-10'>
                <div className='w-1/3'>
                    <h1 className='text-white text-7xl font-bold'>
                        A better way to design.
                    </h1>
                    <p className='text-gray-400 mt-13'>
                        Design, prototype, and collaborate all in the
                        browser—with Figma.
                    </p>
                    <button className='bg-green-400 text-white mt-8 py-3 px-10 rounded-sm'>
                        Try Figma for free
                    </button>
                </div>
                <div className='w-2/3'>
                    <img src='src/assets/HeroShot-min.jpg' alt='FigmaSample' />
                </div>
            </div>
        </section>
    );
}

function Customers() {
    return <section></section>;
}

export default App;
