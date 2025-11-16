export default function Contact() {
  'use client';
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Ready to elevate your brand? Let's discuss how we can help.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <ContactInfo />
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}