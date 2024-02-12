import CustomImage from "./CustomImage";

export default function HomeSection() {
  document.title = "Home";
  const images = [
    process.env.PUBLIC_URL + "/images/home_img/pasta.png",
    process.env.PUBLIC_URL + "/images/home_img/hamburger.png",
    process.env.PUBLIC_URL + "/images/home_img/Healthy.jpg",
    process.env.PUBLIC_URL + "/images/home_img/HungryHungry.jpg",
    process.env.PUBLIC_URL + "/images/home_img/shakshuka.png",
    process.env.PUBLIC_URL + "/images/home_img/toast.png",
    process.env.PUBLIC_URL + "/images/home_img/hummus.png",
    process.env.PUBLIC_URL + "/images/home_img/shrimp.png",
    process.env.PUBLIC_URL + "/images/home_img/snails.png",
  ];

  return (
    <div className="section home">
      <div className="col welcome">
        <h1 className="title">Welcome!</h1>
        <p className="info">
          You can search and explore many kind of recipes here including the
          required ingridients and their nutritional propreties. Have fun
          exploring. You can select any of the desire tabs to start.
          <br></br>
          <br></br>Popular Recipe: Homemade Shakkshuka for 5 people.
          <br></br>
          <br></br>This website was created by Amir, Dana, Lital and Michael.
        </p>
        <button className="btn">Explore Now</button>
      </div>

      <div className="col gallery">
        {images.map((src, index) => (
          <CustomImage key={index} imgsrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
}
