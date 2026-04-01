const Sidebar = () => {
    return (
        <div className="sidenav">
            <header className="sidenav__header"><button role="button" data-sidenav-toggle="" data-sidenav-button="" className="sidenav__button">
                <div className="sidenav__button-text">
                    <p data-sidenav-label="" className="sidenav__button-label">Menu</p>
                    <p data-sidenav-label="" className="sidenav__button-label">Close</p>
                </div>
                <div data-sidenav-icon="" className="sidenav__button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" className="sidenav__button-icon-svg">
                        <path d="M7.33333 16L7.33333 -3.2055e-07L8.66667 -3.78832e-07L8.66667 16L7.33333 16Z" fill="currentColor"></path>
                        <path d="M16 8.66667L-2.62269e-07 8.66667L-3.78832e-07 7.33333L16 7.33333L16 8.66667Z" fill="currentColor"></path>
                        <path d="M6 7.33333L7.33333 7.33333L7.33333 6C7.33333 6.73637 6.73638 7.33333 6 7.33333Z" fill="currentColor"></path>
                        <path d="M10 7.33333L8.66667 7.33333L8.66667 6C8.66667 6.73638 9.26362 7.33333 10 7.33333Z" fill="currentColor"></path>
                        <path d="M6 8.66667L7.33333 8.66667L7.33333 10C7.33333 9.26362 6.73638 8.66667 6 8.66667Z" fill="currentColor"></path>
                        <path d="M10 8.66667L8.66667 8.66667L8.66667 10C8.66667 9.26362 9.26362 8.66667 10 8.66667Z" fill="currentColor"></path>
                    </svg>
                </div>
            </button>
            </header>
            <div data-sidenav-wrap="" data-nav-state="closed" className="sidenav__nav">
                <div data-sidenav-overlay="" data-sidenav-toggle="" className="sidenav__overlay"></div>
                <nav data-sidenav-menu="" className="sidenav__menu">
                    <div className="sidenav__menu-bg">
                        <div data-sidenav-panel="" className="sidenav__menu-bg-panel is--first"></div>
                        <div data-sidenav-panel="" className="sidenav__menu-bg-panel is--second"></div>
                        <div data-sidenav-panel="" className="sidenav__menu-bg-panel"></div>
                    </div>
                    <div className="sidenav__menu-inner">
                        <ul className="sidenav__menu-list">
                            <li className="sidenav__menu-list-item">
                                <a data-sidenav-link="" href="#" className="sidenav__menu-link">
                                    <p className="sidenav__menu-link-heading">About us</p>
                                    <p className="sidenav__menu-link-eyebrow">01</p>
                                </a>
                            </li>
                            <li className="sidenav__menu-list-item">
                                <a data-sidenav-link="" href="#" className="sidenav__menu-link">
                                    <p className="sidenav__menu-link-heading">Our work</p>
                                    <p className="sidenav__menu-link-eyebrow">02</p>
                                </a>
                            </li>
                            <li className="sidenav__menu-list-item">
                                <a data-sidenav-link="" href="#" className="sidenav__menu-link">
                                    <p className="sidenav__menu-link-heading">Services</p>
                                    <p className="sidenav__menu-link-eyebrow">03</p>
                                </a>
                            </li>
                            <li className="sidenav__menu-list-item">
                                <a data-sidenav-link="" href="#" className="sidenav__menu-link">
                                    <p className="sidenav__menu-link-heading">Blog</p>
                                    <p className="sidenav__menu-link-eyebrow">04</p>
                                </a>
                            </li>
                            <li className="sidenav__menu-list-item">
                                <a data-sidenav-link="" href="#" className="sidenav__menu-link">
                                    <p className="sidenav__menu-link-heading">Contact us</p>
                                    <p className="sidenav__menu-link-eyebrow">05</p>
                                </a>
                            </li>
                        </ul>
                        <div className="sidenav__menu-details">
                            <p data-sidenav-fade="" className="sidenav__button-label">Socials</p>
                            <div className="sidenav__menu-socials">
                                <a data-sidenav-fade="" href="#" className="sidenav__button-label">Instagram</a>
                                <a data-sidenav-fade="" href="#" className="sidenav__button-label">LinkedIn</a>
                                <a data-sidenav-fade="" href="#" className="sidenav__button-label">X/Twitter</a>
                                <a data-sidenav-fade="" href="#" className="sidenav__button-label">Awwwards</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;