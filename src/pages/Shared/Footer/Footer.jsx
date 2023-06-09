

const Footer = () => {
    return (
        <div>
            <footer className="footer text-white p-10 bg-[#7cc051]">
                <div>
                    <h3 className="font-bold text-3xl">Saucy Culinary</h3>
                    <p>Our Cooking School<br />Creating best chefs since 1950</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>

        </div>
    );
};

export default Footer;