function ArtCard({ image, title, onClick}) {
    return (
        <div className="art-card" onClick={onClick}>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    );
}
export default ArtCard;