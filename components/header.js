export default function Header({children, bgImage}) {
    return (
        <header className="intro-header" style={{
            backgroundImage: `url(${bgImage})`,
          }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        {children}
                    </div>
                </div>
            </div>
        </header>
    )
}