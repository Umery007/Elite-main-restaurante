import { Section1div } from "./styles";

const Section1 = ({
  title,
  text,
  image,
  images,
  reverse = false,
  imageWidth = 420
}) => {

  // 🔥 GARANTE QUE SEMPRE É ARRAY
  const imagesArray = Array.isArray(images)
    ? images
    : images
    ? [images]
    : [];

  return (
    <Section1div className={reverse ? "reverse" : ""}>
      
      {/* TEXTO */}
      <div className="text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      {/* IMAGEM OU GRID */}
      {imagesArray.length > 0 ? (
        <div className="images-grid">
          {imagesArray.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              style={{ width: imageWidth }}
            />
          ))}
        </div>
      ) : (
        <img
          src={image}
          alt=""
          style={{ width: imageWidth }}
        />
      )}

    </Section1div>
  );
};

export default Section1;