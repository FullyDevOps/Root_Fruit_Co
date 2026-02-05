import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="space-y-8 font-paragraph text-base text-foreground/70">
            <p className="text-sm">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Agreement to Terms
              </h2>
              <p>
                By accessing or using the SunMilled Naturals website and purchasing our products, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or purchase our products.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Use of Website
              </h2>
              <p className="mb-4">
                You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the website's operation</li>
                <li>Use automated systems to access the website without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Product Information
              </h2>
              <p>
                We strive to provide accurate product descriptions and information. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, or error-free. We reserve the right to correct errors and update information at any time.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Orders and Pricing
              </h2>
              <p className="mb-4">
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Product unavailability</li>
                <li>Pricing errors</li>
                <li>Suspected fraudulent activity</li>
                <li>Issues with payment authorization</li>
              </ul>
              <p className="mt-4">
                Prices are subject to change without notice. The price charged will be the price displayed at the time of order placement.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Payment
              </h2>
              <p>
                Payment is due at the time of order. We accept major credit cards and other payment methods as displayed on our website. You represent that you have the legal right to use any payment method you provide.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Health Disclaimer
              </h2>
              <p className="mb-4">
                <strong>Important:</strong> These statements have not been evaluated by the Food and Drug Administration. Our products are not intended to diagnose, treat, cure, or prevent any disease.
              </p>
              <p>
                Our products are dietary supplements and should not replace a balanced diet or medical treatment. Consult with a healthcare professional before using our products, especially if you are pregnant, nursing, taking medication, or have a medical condition.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Intellectual Property
              </h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of SunMilled Naturals and protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, SunMilled Naturals shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless SunMilled Naturals from any claims, damages, losses, or expenses arising from your use of our website or products, or your violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Contact Information
              </h2>
              <p>
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                Email: <a href="mailto:hello@sunmillednaturals.com" className="text-primary hover:underline">hello@sunmillednaturals.com</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
