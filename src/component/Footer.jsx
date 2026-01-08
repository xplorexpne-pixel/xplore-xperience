
export default function Footer() {
  return (
<footer className="footer">
  <div className="footer-container">

                {/* LEFT */}
                <div className="footer-left">
                    <h3>Xplore Xperience</h3>
                    <p>Curated travel experiences for explorers.</p>
                </div>

                {/* RIGHT */}
                <div className="footer-right">

                    <div className="footer-col">                        <h4>About Us</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Our Story</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Social Media</h4>
                        <div className="footer-socials">
                            <a className="icon-btn" href="https://www.instagram.com/xplorexp/"><i className="ri-instagram-line"></i></a>
                            <a className="icon-btn" href="https://www.facebook.com/Xplorexpne"><i className="ri-facebook-line"></i></a>
                        </div>
                    </div>

                </div>
            </div>

  <div className="footer-bottom" >
   <a className="footer-link" href="https://www.instagram.com/codemysite_/">© {new Date().getFullYear()} Code My Site. All rights reserved.</a> 
  </div>
</footer>);
}