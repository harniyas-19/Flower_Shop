function FlowerDisplay({ flower }) {
  let imageUrl = "";
  let name = "";

  if (flower === "rose") {
    imageUrl =
      "https://images.pexels.com/photos/954050/pexels-photo-954050.jpeg";
    name = "Rose";
  } else if (flower === "lily") {
    imageUrl =
      "https://images.pexels.com/photos/1141673/pexels-photo-1141673.jpeg";
    name = "Lily";
  } else if (flower === "jasmine") {
    imageUrl =
      "https://images.pexels.com/photos/947202/pexels-photo-947202.jpeg";
    name = "Jasmine";
  }

  return (
    <div className="flower-display">
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
    </div>
  );
}

export default FlowerDisplay;