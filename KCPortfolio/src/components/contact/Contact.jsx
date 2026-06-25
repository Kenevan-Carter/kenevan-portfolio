import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <p className="section-label">Contact</p>
        <h2>Let&apos;s build something together.</h2>
        <p>
          Want to turn your Figma design into a React app? Send a message and I&apos;ll
          get back to you soon.
        </p>
        <a className="button button-primary" href="mailto:hello@example.com">
          Email me
        </a>
      </div>
    </section>
  );
}

export default Contact;
