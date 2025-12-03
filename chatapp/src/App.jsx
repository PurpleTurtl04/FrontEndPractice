import './App.css';

function App() {
    return (
        <div className="font-roboto">
            <header className='bg-chatappblue text-white'>
                <Navbar/>
            </header>
            <main className=' bg-chatappblue text-white '>
                <Hero/>
            </main>
            <footer></footer>
            
        </div>
    );
}

function Navbar(){
    return(
        <div className='flex justify-between items-center pt-10 pb-36 container mx-auto'>
            <p className='font-poppins text-3xl'><span className='font-semibold'>chat</span><span className='font-extralight'>app</span></p>
            <nav className='font-medium text-sm flex justify-around items-center gap-10'>
                <a href="#">Product</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
                <a href="#">Log In</a>
                <button className='bg-white/20 rounded-4xl px-6 py-3'>Try It Free</button>
            </nav>
        </div>
    )
}

function Hero(){
    return(
        <section className='flex justify-between container mx-auto'>
            <div className='w-1/3'>
                <h1 className='text-7xl font-semibold pr-10 mb-5'>Have your best chat</h1>
                <h3 className='text-lg mb-15'>Fast, easy & unlimited team chat.</h3>
                <div className='flex gap-8'>
                    <button className='bg-white rounded-4xl px-12 py-4 text-chatappblue'>Try It Free</button>
                    <button className='border rounded-4xl px-12 py-4'>Try It Free</button>
                </div>
            </div>
            <div className='w-2/3'>
                <h1 className='text-7xl font-semibold'>Have your best chat</h1>
                <h3>Fast, easy & unlimited team chat.</h3>
                <div className='flex gap-8'>
                    <button className='bg-white rounded-4xl px-12 py-4 text-chatappblue'>Try It Free</button>
                    <button className='border rounded-4xl px-12 py-4'>Try It Free</button>
                </div>
            </div>
        </section>
    )
}

export default App;
