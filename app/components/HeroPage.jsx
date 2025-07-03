"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar'; 
import Image from 'next/image'; 
import styles from '../../styles/HeroPage.module.css';;

export default function Home() {
  const phrases = [
    "🌼 Greater Purpose in Your Life Direction",
    "❤️ Greater Love in Your Relationships",
    "✌️ Greater Peace in Your Heart",
  ];

  const [years, setYears] = useState(0);
  const [sessions, setSessions] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(null);

  const faqData = [
    { question: "Are online sessions available?", answer: " Yes—all virtual sessions via Zoom." },
    { question: "Do you accept insurance?", answer: "No, but a superbill is provided for self-submission." },
    { question: "What is your cancellation policy?", answer: " 24-hour notice required." },
    { question: "What are your office hours?", answer: "In-person: Tue & Thu, 10 AM–6 PM, Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM" },
    { question: "What are your session fees?", answer: "$200 / individual session, $240 / couples session" },
  ];

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredTime: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e) => {
    setForm((prev) => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.includes('@')) newErrors.email = 'Valid email required.';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    if (!form.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required.';
    if (!form.consent) newErrors.consent = 'Consent is required.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted! ✅'); // Replace with backend call
      setForm({ name: '', email: '', phone: '', message: '', preferredTime: '', consent: false });
    }
  };

  useEffect(() => {
    if (inView) {
      let y = 0;
      let s = 0;

      const countInterval = setInterval(() => {
        if (y < 8) setYears(++y);
        if (s < 500) setSessions((prev) => {
          const next = prev + 10;
          return next > 500 ? 500 : next;
        });

        if (y >= 8 && s >= 500) clearInterval(countInterval);
      }, 50);
    }
  }, [inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.heroContainer}>
        <Navbar />
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Christian Counseling Services in Los Angeles</p>
          <h1>Professional Counseling for Christian Healing and Growth</h1>
          <p className={styles.heroDescription}>
            Begin your journey today towards spiritual growth, deeper relationships,
            <br />
            and lasting inner peace.
          </p>
          
          <div className={styles.ctaSection}>
            <p className={styles.ctaText}>I want to work with you for...</p>
            <div className={styles.slideWrapper}>
              <h2 key={index} className={styles.ctaHeading}>
                {phrases[index]}
              </h2>
            </div>
          </div>
          
          <div className={styles.badges}>
            <span>⭐ Top Rated</span>
            <span>•<u> 8+ Years Practice</u></span>
            <span>•<u> Testimonials</u></span>
            <span>•<u> Media Mentions</u></span>
          </div>
          
          <button className={styles.ctaButton}>
            ✤ Start Healing Today
          </button>
        </div>
      </div>

      <section className={styles.statsSection} ref={ref}>
        <div className={styles.statBox}>
          <h2>{years}<span>+</span></h2>
          <h1>Years Experience</h1>
          <p>Providing compassionate and effective Individual and Couples Therapy</p>
        </div>
        <div className={styles.statBox}>
          <h2>{sessions.toLocaleString()}<span>+</span></h2>
          <h1>Individual Client Sessions</h1>
          <p>Helping individuals and couples heal, grow, and find purpose</p>
        </div>
      </section>

      <section className={styles.servicesSection} id="services">
        <h2>How I Help</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <Image src="/ind.webp" alt="Individual Counseling" width={340} height={200} style={{ objectFit: 'cover', borderRadius: '6px', marginBottom: '15px' }} />
            <h3>Anxiety & Stress Management</h3>
            <p>Manage Anxiety, Reduce Stress, and Find Lasting Peace Through Christian Counseling.</p>
            <button>Learn More</button>
          </div>

          <div className={styles.serviceCard}>
            <Image src="/couple.jpg" alt="Couples Counseling" width={340} height={200} style={{ objectFit: 'cover', borderRadius: '6px', marginBottom: '15px' }} />
            <h3>Christian Couples Counseling in Los Angeles</h3>
            <p>Heal Your Relationship, Grow Closer to God Together in Richmond.</p>
            <button>Learn More</button>
          </div>

          <div className={styles.serviceCard}>
            <Image src="/trauma.webp" alt="Trauma Recovery" width={340} height={200} style={{ objectFit: 'cover', borderRadius: '6px', marginBottom: '15px' }} />
            <h3>Trauma Recovery</h3>
            <p>Heal from Past Wounds and Rebuild Your Life with Compassionate, Faith-Based Support.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImage}>
            <Image src="/serena.png" alt="Serena Blake" width={260} height={260} style={{ borderRadius: '10px' }} />
            <p className={styles.aboutLabel}>Serena Blake<br /><span>⭐ Top Rated | 8+ Years Practice</span></p>
          </div>
          <div className={styles.aboutContent}>
            <span className={styles.aboutBadge}>About Serena Blake PsyD (Clinical Psychologist) • Experienced Christian Therapist in Los Angeles</span>
            <h2>Serena Blake</h2>
            <p>
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions.
            </p>
            <p>
              She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
            <p>
              Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection} id="faqs">
        <h2>Frequently Asked Questions</h2>
        <div className={styles.accordion}>
          {faqData.map((item, i) => (
            <div key={i} className={styles.accordionItem}>
              <button
                className={styles.accordionHeader}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.question}
                <span>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <div className={styles.accordionBody}>{item.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contactSection} id="contact">
        <h2>Get In Touch</h2>
        <p className={styles.contactSubtitle}>
          Simply fill out the brief fields below and I will be in touch with you soon — safely, privately, and free of cost.
        </p>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}

          <textarea
            name="message"
            placeholder="What brings you here?"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <span className={styles.error}>{errors.message}</span>}

          <input
            type="text"
            name="preferredTime"
            placeholder="Preferred time to reach you"
            value={form.preferredTime}
            onChange={handleChange}
          />
          {errors.preferredTime && <span className={styles.error}>{errors.preferredTime}</span>}

          <label className={styles.checkbox}>
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleCheckbox}
            />
            I agree to be contacted
          </label>
          {errors.consent && <span className={styles.error}>{errors.consent}</span>}

          <button type="submit">Submit</button>
        </form>
      </section>
      <footer className={styles.foot}>All rights reserved 2025 serena@blakepsychology.com</footer>
    </>
  );
}