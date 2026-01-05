export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Xplore Xperience</h3>
                <p>Curated travel experiences for explorers.</p>

                <div className="footer-links">
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">WhatsApp</a>
                </div>

                <p className="footer-copy">
                    © {new Date().getFullYear()} Xplore Xperience. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
