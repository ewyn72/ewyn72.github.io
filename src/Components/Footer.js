import React, { Component } from "react";

class Footer extends Component {
    render() {
        if (this.props.data) {
            var networks = this.props.data.social.map(function (network) {
                return (
                    <li key={network.name}>
                        <a href={network.url}>
                            <i className={network.className}></i>
                        </a>
                    </li>
                );
            });
            var name = this.props.data.name;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
        }

        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <div className="widget widget_contact">
                            <h4 style={{color:'white'}}>Contact Me</h4>
                            <p style={{color:'grey'}} className="address">
                                {name}
                                <br />
                                {email}
                                <br />
                                <span>{phone}</span>
                            </p>
                        </div>

                        <ul className="social-links">{networks}</ul>

                        <ul className="copyright">
                            <li>&copy; Copyright 2021 Ethan Ng</li>
                            <li>
                                site designed by{" "}
                                <a
                                    title="Styleshout"
                                    href="http://www.styleshout.com/"
                                >
                                    Styleshout
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="go-top">
                        <a
                            className="smoothscroll"
                            title="Back to Top"
                            href="#home"
                        >
                            <i className="icon-up-open"></i>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
