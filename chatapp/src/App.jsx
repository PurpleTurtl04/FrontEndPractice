import './App.css';

function App() {
    return (
        <div className="font-roboto">
            <header className='bg-chatappblue text-white'>
                <Navbar/>
            </header>
            <main>
                <Hero/>
                <Mockup/>
                <SignUp/>
            </main>
            <Footer />
        </div>
    );
}

function Navbar(){
    return(
        <div className='flex justify-between items-center pt-10 pb-36 xl:px-10 container mx-auto'>
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
        <section className='bg-chatappblue text-white'>
            <div className='flex justify-around items-center container mx-auto pb-40'>
                <div className='max-w-lg'>
                    <h1 className='text-7xl/tight font-semibold pr-10 mb-5 font-poppins'>Have your best chat</h1>
                    <h3 className='text-lg mb-15'>Fast, easy & unlimited team chat.</h3>
                    <div className='flex gap-8'>
                        <button className='bg-white rounded-4xl px-12 py-4 text-chatappblue'>Try It Free</button>
                        <button className='border rounded-4xl px-12 py-4'>Get a Demo</button>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src="src/assets/hero.png" alt="Hero Image" />
                </div>
            </div>
        </section>
    )
}

function Mockup(){
    return(
        <section className='flex flex-col mx-auto container items-center mt-23 mb-25'>
            <h2 className='text-4xl font-poppins font-medium mb-10'>Instant Team Chats</h2>
            <p className='text-chatappgray/70 max-w-lg text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa.</p>
            <img src="src/assets/mockup.jpg" alt="Chat App Mockup" />
        </section>
    )
}

function SignUp(){
    return(
        <section className='bg-chatappblue/10 pt-31 pb-25'>
            <div className='flex'>
                <div className='w-1/2'>
                    <img className='lg:max-w-9/10' src="src/assets/signup.png" alt="People in a coffee shop" />
                </div>
                <div className='flex flex-col md:mx-auto justify-center'>
                    <h2 className='text-4xl font-poppins font-medium mb-8 max-w-md'>Perfect Solution for Small Businesses</h2>
                    <p className='text-chatappgray/70 mb-15'>Pricing plans that fit like a glove.</p>
                    <div className='flex gap-8'>
                        <button className='bg-chatappblue rounded-4xl px-11 py-4 text-white'>Try It Free</button>
                        <button className='border border-chatappblue text-chatappblue rounded-4xl px-11 py-4'>Get a Demo</button>
                    </div>
                    <hr className='border-chatappgray/15 mt-23 mb-8 w-41' />
                    <div className='flex gap-6'>
                        <img src="src/assets/stars.svg" alt="star rating" />
                        <p className='text-chatappgray/70 lg:max-w-68'><span className='font-bold'>5,200 businesses</span> use ChatApp and they rate it as <span className='font-bold'>5-stars</span>.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Footer(){
    return (
        <footer className='mt-22 mb-8 container'>
            <div className='flex justify-between'>
                <div className='flex flex-col justify-start mx-auto'>
                    <p className='font-poppins text-chatappblue text-xl mb-4'><span className='font-bold'>chat</span><span className='font-extralight'>app</span></p>
                    <p className='text-chatappgray/70 max-w-40 text-sm'>The last team chat you will ever need.</p>
                    <p className='text-chatappgray/70 text-xs pt-63'>© Copyright ChatApp Inc.</p>
                </div>
                <div className='flex justify-between gap-30 lg:mx-auto'>
                    <div className="flex flex-col gap-3">
                        <h3 className='font-poppins text-lg pb-2'>Help</h3>
                        <p className='text-chatappgray/70 text-xs'>Support</p>
                        <p className='text-chatappgray/70 text-xs'>Knowledge base</p>
                        <p className='text-chatappgray/70 text-xs'>Tutorials</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className='font-poppins text-lg pb-2'>Features</h3>
                        <p className='text-chatappgray/70 text-xs'>Screen Sharing</p>
                        <p className='text-chatappgray/70 text-xs'>iOS & Android Apps</p>
                        <p className='text-chatappgray/70 text-xs'>File Sharing</p>
                        <p className='text-chatappgray/70 text-xs'>User Management</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className='font-poppins text-lg pb-2'>Company</h3>
                        <p className='text-chatappgray/70 text-xs'>About Us</p>
                        <p className='text-chatappgray/70 text-xs'>Careers</p>
                        <p className='text-chatappgray/70 text-xs'>Contact Us</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className='font-poppins text-lg pb-2'>Contact Us</h3>
                        <p className='text-chatappgray/70 text-xs'>info@chatapp.com</p>
                        <p className='text-chatappgray/70 text-xs'>1-800-200-300</p>
                        <p className='text-chatappgray/70 text-xs max-w-24'>3500 Deer Creek Rd
    Palo Alto, CA</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default App;
