import Logo from "../assets/logo.png";
import People from "../assets/svg.injected-svg.png";
import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
import './main.css'
import './responsive.css'
export default function Main() {
  return (
    <div className="page">
        <div className="circle"></div>
        <div className="logo">
        <img src={Logo} alt="" />
        </div>
      <div className="people">
        <img src={People} alt="" />
      </div>
      <div className="components">
        <h1>Falta pouco para matar sua fome!</h1>
        <p>Como deseja continuar?</p>
        <div className="btn">
          <button id="blue">
            {" "}
            <img src={Facebook} alt="" /> Continuar com Facebook
          </button>
          <button id="white">
            {" "}
            <img src={Google} alt="" /> Sign in with Google
          </button>
        </div>
        <div className="btntwo">
          <button>Celular</button>
          <button>E-mail</button>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}
