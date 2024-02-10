import CustomImage from "./CustomImage"

export default function JoinUs() {
    
    const images = ["/images/home_img/sign.png"]
    const reasons = ["Worldwide Contribution.",
                     "Varified by the people.",
                     "2 is plenty."]
    return (
        <div className="section home">

            <div className="col join-gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgsrc={src} pt={"90%"} />
                ))}
            </div>

            <div className="col join">
                <h1 className="title">Join The Fatties!</h1>
                <p className="info">Why, you ask? <br></br></p>
                
                {
                    reasons.map((item, index) => (
                        <p className="join-reasons" key={index}>{item}</p>
                    ))
                }

                <button className="btn">Sign Up</button>
            </div>
        </div>
    )
}