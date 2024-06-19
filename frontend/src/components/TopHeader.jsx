const TopHeader = () => {
    return (
        <div className="container-fluid top-bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="contact-details float-start">
                            <li>
                                <i className="fa fa-map-marker"></i>Mall Road, Amritsar
                            </li>
                            <li>
                                <i className="fa fa-envelope"></i>
                                <a href="mailto:support@unitedpets.com">support@unitedpets.com</a>
                            </li>
                            <li>
                                <i className="fa fa-phone"></i>+91 1234567890
                            </li>
                        </ul>

                        <ul className="social-list float-end list-inline">
                            <li className="list-inline-item">
                                <a title="Facebook" href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a title="Twitter" href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a title="Instagram" href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;