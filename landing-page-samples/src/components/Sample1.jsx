function Sample1(){
    return (
        <div className="text-white w-full h-screen bg-cover bg-center bg-no-repeat bg-[url(./assets/patrick-schneider-yw1y-alKGrg-unsplash%201.jpg)]">
            <nav className="flex justify-between container mx-auto pt-9 items-center mb-35">
                <div>
                    <a href="#" className="text-2xl">medino</a>
                </div>
                <div className="flex justify-between items-center gap-7 font-semibold text-xs">
                    <a href="#">Product</a>
                    <a href="#">Pricing</a>
                    <a href="#">Features</a>
                    <a href="#">Blog</a>
                    <button className="bg-white/30 px-6 py-2 rounded-3xl">Sing Up</button>
                </div>
            </nav>
            <div className="flex flex-col container mx-auto">
                <h1 className="text-6xl font-extralight mb-5">Mindful breathing & meditation</h1>
                <h3 className="text-xl max-w-xl mb-15">A refreshing, delightful, and distraction-free mindful breathing companion to get you through the day. And more.</h3>
                <div className="flex gap-10">
                    <button type="button" className="bg-white text-black rounded-3xl px-13 py-3">Try Now</button>
                    <button className="border border-white rounded-3xl px-13 py-3">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Sample1