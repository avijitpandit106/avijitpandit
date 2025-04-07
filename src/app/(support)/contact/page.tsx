'use client';
// import { assets } from '../../../../public/assets/assets';
import Link from 'next/link';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState([]);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        subject,
        email,
        message,
      }),
    });
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFirstName('');
      setLastName('');
      setSubject('');
      setEmail('');
      setMessage('');

      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  };

  return (
    <section className="flex flex-col lg:flex-row items-stretch p-6 rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] max-w-5xl mx-auto">
      {/* Form Section */}
      <div className="bg-white p-8 rounded-t-lg lg:rounded-none lg:rounded-l-lg shadow-lg w-full lg:w-1/2 flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Chat with me</h2>
        <p className="text-gray-600 mb-6">
          Need help with something? Want a demo? Get in touch with me and
          I&apos;ll get back to you as soon as possible.
        </p>

        {error.length > 0 && (
          <div className="mb-4 space-y-2">
            {error.map((err, index) => (
              <p
                key={index}
                className={`${
                  success ? 'text-green-500' : 'text-red-500'
                } text-sm`}
              >
                {err}
              </p>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
          <div className="flex space-x-4">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              placeholder="First name"
              className="w-1/2 p-3 border rounded-lg"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              placeholder="Last name"
              className="w-1/2 p-3 border rounded-lg"
            />
          </div>
          <input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            type="text"
            placeholder="Subject"
            className="w-full p-3 border rounded-lg"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
          />
          <h3 className="text-gray-700 font-semibold">Message</h3>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Write your message here..."
            className="w-full p-3 border rounded-lg h-32 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-tr from-cyan-600 to-teal-600 rounded-b-lg lg:rounded-none lg:rounded-r-lg text-white p-10">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Or follow me on my socials
          </h2>
          <p className="text-lg mb-6 text-center">Stay connected with me on:</p>
          <div className="flex flex-col gap-8 items-center w-full">
            {[
              {
                href: 'https://github.com/avijitpandit106',
                icon: <FaGithubSquare />,
                text: 'GitHub',
                bg: 'bg-gray-900 hover:bg-gray-700',
              },
              {
                href: 'https://www.linkedin.com/in/avijit-pandit-917947335/',
                icon: <FaLinkedin />,
                text: 'LinkedIn',
                bg: 'bg-blue-600 hover:bg-blue-500',
              },
              {
                href: 'https://www.instagram.com/avijitpandit106/',
                icon: <FaInstagramSquare />,
                text: 'Instagram',
                bg: 'bg-pink-600 hover:bg-pink-500',
              },
              {
                href: 'https://x.com/avijitpandit106',
                icon: <FaSquareXTwitter />,
                text: 'Twitter',
                bg: 'bg-black hover:bg-gray-800',
              },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                className={`flex items-center gap-2 p-2 rounded-lg text-white ${social.bg} transition-all duration-300 w-52 justify-center`}
              >
                <IconContext.Provider value={{ size: '1.5em' }}>
                  <div>{social.icon}</div>
                </IconContext.Provider>
                <div>{social.text}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
