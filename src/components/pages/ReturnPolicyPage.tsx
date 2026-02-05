import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ReturnPolicyPage() {
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
            Return & Refund Policy
          </h1>
          
          <div className="space-y-8 font-paragraph text-base text-foreground/70">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                30-Day Satisfaction Guarantee
              </h2>
              <p>
                We stand behind the quality of our products. If you're not completely satisfied with your purchase, we offer a 30-day satisfaction guarantee on all unopened products.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Return Eligibility
              </h2>
              <p className="mb-4">
                To be eligible for a return, your item must be:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Unopened and in its original packaging</li>
                <li>In the same condition that you received it</li>
                <li>Returned within 30 days of delivery</li>
                <li>Accompanied by proof of purchase</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Non-Returnable Items
              </h2>
              <p className="mb-4">
                For health and safety reasons, we cannot accept returns on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Opened products</li>
                <li>Products with broken seals</li>
                <li>Sale or clearance items (unless defective)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                How to Initiate a Return
              </h2>
              <p className="mb-4">
                To start a return, please contact us at:
              </p>
              <p className="mb-4">
                Email: <a href="mailto:hello@sunmillednaturals.com" className="text-primary hover:underline">hello@sunmillednaturals.com</a>
              </p>
              <p>
                Please include your order number and reason for return. We will provide you with return instructions and a return authorization number.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Return Shipping
              </h2>
              <p className="mb-4">
                Customers are responsible for return shipping costs unless the return is due to our error (wrong item shipped, defective product, etc.).
              </p>
              <p>
                We recommend using a trackable shipping service for returns. We are not responsible for items lost in return transit.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Refunds
              </h2>
              <p className="mb-4">
                Once we receive and inspect your return, we will notify you of the approval or rejection of your refund.
              </p>
              <p className="mb-4">
                If approved, your refund will be processed and a credit will automatically be applied to your original method of payment within 5-10 business days.
              </p>
              <p>
                Original shipping costs are non-refundable unless the return is due to our error.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Exchanges
              </h2>
              <p>
                We do not offer direct exchanges. If you need a different product, please return the original item for a refund and place a new order.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Damaged or Defective Products
              </h2>
              <p className="mb-4">
                If you receive a damaged or defective product, please contact us immediately with photos of the damage. We will arrange for a replacement or full refund at no cost to you.
              </p>
              <p>
                Email: <a href="mailto:hello@sunmillednaturals.com" className="text-primary hover:underline">hello@sunmillednaturals.com</a>
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Questions
              </h2>
              <p>
                If you have any questions about our return policy, please contact us at <a href="mailto:hello@sunmillednaturals.com" className="text-primary hover:underline">hello@sunmillednaturals.com</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
