const NewsLetter = () => {
    return (
        <div className="container-fluid footer-bg block-padding overlay">
            <div className="container">
                <div className="col-lg-5 text-light text-center">
                    <h4>Subscribe to our newsletter</h4>
                    <p>We send e-mails once a month, we never send Spam!</p>
                    <div id="mc_embed_signup">
                        <form
                            action="http://yourlist.us12.list-manage.com/subscribe/post?u=04e646927a196552aaee78a7b&amp;id=111"
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="validate"
                            target="_blank"
                            noValidate>
                            <div id="mc_embed_signup_scroll">
                                <div className="mc-field-group">
                                    <div className="input-group">
                                        <input
                                            className="form-control border2 input-lg required email"
                                            type="email"
                                            value=""
                                            name="EMAIL"
                                            placeholder="Your email here"
                                            id="mce-EMAIL"
                                        />
                                        <span className="input-group-btn">
                        <button
                            className="btn btn-primary btn-sm"
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="mc-embedded-subscribe">
                          Subscribe
                        </button>
                      </span>
                                    </div>
                                    <div id="mce-responses" className="mailchimp">
                                        <div
                                            className="alert alert-danger response"
                                            id="mce-error-response"></div>
                                        <div
                                            className="alert alert-success response"
                                            id="mce-success-response"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;