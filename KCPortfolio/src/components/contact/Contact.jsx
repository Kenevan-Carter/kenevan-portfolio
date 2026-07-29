import './Contact.css';
import princeLogo from '../../assets/images/prince.png';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">

        {/* Top-right Prince logo */}
        <div className="contact-logo contact-logo-top-right" aria-hidden="true">
          <img src={princeLogo} alt="" />
        </div>

        <div className="contact-content">
          <p className="section-label">_ Contact _</p>

          <h2>Wanna Learn More?</h2>

          <a
            className="button button-primary"
            href="mailto:hello@example.com"
          >
            Email me
          </a>
        </div>

        {/* Bottom-left Prince logo */}
        <div className="contact-logo contact-logo-bottom-left" aria-hidden="true">
          <img src={princeLogo} alt="" />
        </div>

      </div>
    </section>
  );
}

export default Contact;