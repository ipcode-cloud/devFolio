import { motion } from 'framer-motion';
import { useState, FormEvent, ChangeEvent } from 'react';

// Types for Form Data and Status
type FormData = {
  name: string;
  email: string;
  message: string;
};

type SubmitStatus = 'idle' | 'success' | 'error';

// Reusable Input Component
interface InputProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, id, type = "text", ...props }) => (
  <div>
    <label htmlFor={id} className="block text-white mb-2">{label}</label>
    <input
      id={id}
      type={type}
      className="w-full px-4 py-3 bg-[#1E1B2C] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      {...props}
    />
  </div>
);

// Reusable Textarea Component
interface TextareaProps {
  label: string;
  id: string;
  value: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({ label, id, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-white mb-2">{label}</label>
    <textarea
      id={id}
      className="w-full px-4 py-3 bg-[#1E1B2C] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
      {...props}
    />
  </div>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target as HTMLFormElement);
    
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY as string);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      console.log('Error', data);
      setErrorMessage(data.message || 'Failed to send message. Please try again or email me directly.');
      setSubmitStatus('error');
    }
  };

  return (
    <section className="py-20 bg-[#13111C]" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
            <Textarea
              label="Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Your message..."
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-colors ${
                isSubmitting
                  ? 'bg-purple-700 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500 rounded-lg"
              >
                <p className="text-green-500 text-center">Message sent successfully! I'll get back to you soon.</p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500 rounded-lg"
              >
                <p className="text-red-500 text-center">
                  {errorMessage || 'Failed to send message. Please try again or email me directly.'}
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
