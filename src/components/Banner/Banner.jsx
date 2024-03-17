

const Banner = () => {
    return (
        <div className="mb-20" >
            <div className="hero min-h-screen rounded-3xl" style={{backgroundImage: 'url(https://i.ibb.co/gjMdbS8/banner.jpg)'}}>
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-white space-y-10 ">
                        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking <br />class tailored for you!</h1>
                        <p className="mb-5 font-normal ">These classes provide an invaluable opportunity for participants to sharpen their culinary skills,<br /> regardless of their level of expertise, from novice to seasoned home cooks.</p>
                        <button className="btn bg-[#0BE58A] rounded-full text-black border-none mr-5">Explore Now</button>
                        <button className="btn bg-transparent text-white rounded-full">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;