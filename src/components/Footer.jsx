
function Footer() {
    return (
        <footer className="page-footer light-blue darken-1">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
            </div>
        </footer>
    )
}

export {Footer}