import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header page-scroll">
                    <a className="navbar-brand" href="index.html">
                        Luat Blog
                    </a>
                </div>

                <div className="navbar" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
