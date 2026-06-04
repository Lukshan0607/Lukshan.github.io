import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-label">Contact</span>
        <h2>Send your message</h2>
      </div>

      <div className="contact-grid">
        <form
          className="contact-form"
          action="https://formsubmit.co/lukshansadeepa@gmail.com"
          method="POST"
          target="_blank"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New portfolio message" />

          <div className="form-row">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="Your email" required />
            </label>
          </div>

          <label>
            Subject
            <input type="text" name="subject" placeholder="Subject" required />
          </label>

          <label>
            Message
            <textarea name="message" rows="6" placeholder="Your message" required />
          </label>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

        <div className="contact-card card">
          <h3>Contact details</h3>
          <p>
            Use the form to send me a message directly. If your browser opens a
            new page, follow the service instructions to complete the submission.
          </p>
          <a className="contact-email" href="mailto:lukshansadeepa@gmail.com">
            lukshansadeepa@gmail.com
          </a>

          <div className="contact-links">
            <a
              href="https://github.com/Lukshan0607"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lukshan-karunarathna-219b58320/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:lukshansadeepa@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
