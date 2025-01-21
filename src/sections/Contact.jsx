import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
    const formRef = useRef();

    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_mrhyjmi', // Your service ID
                'template_7l5mynr', // Your template ID
                {
                  from_name: form.name, // Sender's name (User input)
                  from_email: form.email, // Sender's email (User input)
                  to_name: 'Harsh', // Your name
                  to_email: 'kaloliyaharsh00@gmail.com', // Your email (Recipient)
                  message: form.message, // Message content
                },
                'DgVxDA2A_OTLpfJGt' // Public key
              );
              

            setLoading(false);
            showAlert({
                show: true,
                text: 'Thank you for your message 😃',
                type: 'success',
            });

            setTimeout(() => {
                hideAlert();
                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            }, 3000);
        } catch (error) {
            setLoading(false);
            console.error(error);

            showAlert({
                show: true,
                text: "I didn't receive your message 😢. Please try again later.",
                type: 'danger',
            });
        }
    };

    return (
        <section className="c-space my-20" id="contact">
            {alert.show && <Alert {...alert} />}

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="Terminal background" className="absolute inset-0 min-h-screen" />

                <div className="contact-container">
                    <h3 className="head-text mt-10">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-10">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
                        life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., John Doe"
                                aria-label="Full Name"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                                aria-label="Email address"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                                aria-label="Your message"
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading} aria-busy={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="Arrow icon" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
