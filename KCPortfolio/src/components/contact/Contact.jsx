import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <p className="section-label">Contact</p>
        <h2>Wanna Learn More?</h2>
        <a className="button button-primary" href="mailto:hello@example.com">
          Email me
        </a>
      </div>
    </section>
  );
}

export default Contact;
