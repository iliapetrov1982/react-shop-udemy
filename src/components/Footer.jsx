
function Footer() {
    return (
        <footer className="page-footer light-blue darken-1">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a
                    className="grey-text text-lighten-4 right"
                    href="https://github.com/iliapetrov1982/react-shop-udemy/settings"
                    target="_blank"
                    rel="noreferrer"
                >Repo
                </a>
            </div>
        </footer>
    )
}

export {Footer}