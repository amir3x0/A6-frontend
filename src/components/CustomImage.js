export default function CustomImage({imgsrc, pt}) {
    return (
        <div className="custom-img" style={{paddingTop: pt}}>
            <img src={imgsrc} alt="" />
        </div>
    )
}