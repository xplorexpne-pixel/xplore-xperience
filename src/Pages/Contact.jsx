export default function Contact () {
    return (
        <section className="section">
            <h2 className="section-title">Contact</h2>

            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message"></textarea>
                <button className="btn-primary">Send Message</button>
            </form>
        </section>
    );
}
