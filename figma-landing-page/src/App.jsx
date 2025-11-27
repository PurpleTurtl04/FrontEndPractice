import './App.css';

function App() {
    return (
        <>
            <NavBar />
            <Hero />
        </>
    );
}

function NavBar() {
    return <div>Nav Section</div>;
}

function Hero() {
    return (
        <div className='flex justify-between items-center m-4'>
            <h1 className='text-5xl font-bold'>Hero Section</h1>
            <div className='m-4'>
                <img src='src/assets/HeroShot-min.jpg' alt='FigmaSample' />
            </div>
        </div>
    );
}

export default App;
