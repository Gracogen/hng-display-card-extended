import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/))
      errs.email = "Valid email is required.";
    if (!formData.subject.trim()) errs.subject = "Subject is required.";
    if (formData.message.length < 10)
      errs.message = "Message must be at least 10 characters.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else setSuccess(false);
  };

  return (
    <main className="contact-page">
      <form onSubmit={handleSubmit} aria-label="Contact form">
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            data-testid="test-contact-name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            aria-describedby="error-name"
          />
          {errors.name && (
            <span
              id="error-name"
              data-testid="test-contact-error-name"
              role="alert"
            >
              {errors.name}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            data-testid="test-contact-email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            aria-describedby="error-email"
          />
          {errors.email && (
            <span
              id="error-email"
              data-testid="test-contact-error-email"
              role="alert"
            >
              {errors.email}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            data-testid="test-contact-subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            aria-describedby="error-subject"
          />
          {errors.subject && (
            <span
              id="error-subject"
              data-testid="test-contact-error-subject"
              role="alert"
            >
              {errors.subject}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            data-testid="test-contact-message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            aria-describedby="error-message"
          />
          {errors.message && (
            <span
              id="error-message"
              data-testid="test-contact-error-message"
              role="alert"
            >
              {errors.message}
            </span>
          )}
        </div>

        <button type="submit" data-testid="test-contact-submit">
          Submit
        </button>

        {success && (
          <p data-testid="test-contact-success" role="status">
            Message sent successfully!
          </p>
        )}
      </form>
    </main>
  );
}
