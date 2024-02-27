export default function JoinUs() {
    const images = [process.env.PUBLIC_URL + "/images/home_img/sign.png"];
    const reasons = ["Worldwide Contribution.", "Varified by the people.", "2 is plenty."];

    return (
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-8 p-4 animate-fadeIn">
            {/* Image Section */}
            <div className="flex flex-col items-center justify-center">
                {images.map((src, index) => (
                    <img key={index} src={src} alt="Sign" className="w-full md:w-auto"/>
                ))}
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold mb-4">Join The Fatties!</h1>
                <p className="mb-4">Why, you ask? <br/></p>
                
                {
                    reasons.map((item, index) => (
                        <p className="mb-2" key={index}>{item}</p>
                    ))
                }

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
            </div>
        </div>
    );
}