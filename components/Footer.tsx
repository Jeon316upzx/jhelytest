
const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="row">

                    <div className="col-md-3 col-lg-3">
                        <div className="footer_logo">
                            <h4> JHELY </h4>
                        </div>
                    </div>

                    <div className="col-md-3 col-lg-3">
                        <div className="footer_section">
                            <div> About </div>
                            <div> Agents </div>
                            <div> Contact </div>
                        </div>
                    </div>


                    <div className="col-md-3 col-lg-3">
                        <div className="footer_section">
                            <div> Courses </div>
                            <div> Blog </div>
                            <div> Download </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-lg-3">
                        <div className="footer_section">
                            <div> Add property </div>
                            <div> Buy us coffee </div>
                            <div> FAQ </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="bottom">
                <div className="socials_copyright">
                    <div className="copyright">
                        @copyrigh 2021
                    </div>

                    <div className="socials">
                        <div> Instagram</div>
                        <div> Facebook </div>
                        <div> Youtube </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;