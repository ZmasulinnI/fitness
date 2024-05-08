import "./Footer.css"
import FooterButton from "../FooterButton/FooterButton";

function Footer() {

    return (
        <div className="footer">
            <FooterButton>Главная</FooterButton>
            <FooterButton>Посетители</FooterButton>
            <FooterButton>Настройки</FooterButton>
        </div>
    )
}

export default Footer;