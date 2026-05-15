import { GaleriaContainer } from "./styles";
import Header from "../Header";
import Fundo from "../Fundo";
import Subheader from "../Subheader";
import food1 from "../../assets/galeria/food1.png";
import food2 from "../../assets/galeria/food2.png";
import wine from "../../assets/galeria/wine.png";
import food3 from "../../assets/galeria/food3.png";
import desert from "../../assets/galeria/desert.png";

function Gallery() {
  return (
    <>
      <Header />
      <Fundo />
      <Subheader />
      
      <GaleriaContainer>
        {/* O Overlay fica FIXO aqui, como filho direto do GaleriaContainer */}
        <div className="overlay">
          <h1>GALLERY</h1>
        </div>

        {/* A track é a esteira que desliza por baixo do overlay */}
        <div className="gallery-track">
          {/* Grupo 1 */}
          <div className="gallery-item"><img src={food1} alt="" /></div>
          <div className="gallery-item"><img src={food2} alt="" /></div>
          <div className="gallery-item"><img src={wine} alt="" /></div>
          <div className="gallery-item"><img src={food3} alt="" /></div>
          <div className="gallery-item"><img src={desert} alt="" /></div>

          {/* Grupo 2 (Cópias para o loop infinito) */}
          <div className="gallery-item"><img src={food1} alt="" /></div>
          <div className="gallery-item"><img src={food2} alt="" /></div>
          <div className="gallery-item"><img src={wine} alt="" /></div>
          <div className="gallery-item"><img src={food3} alt="" /></div>
          <div className="gallery-item"><img src={desert} alt="" /></div>
        </div>
      </GaleriaContainer>
    </>
  );
}

export default Gallery;