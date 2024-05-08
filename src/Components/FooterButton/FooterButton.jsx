import "./FooterButton.css"

function FooterButton({children}) {

    return (
        <div className="button">
            <button className="btn-form">
                <div className="btn-circle"/>
            </button>
            <p>{children}</p>
        </div>
    )
}

export default FooterButton;