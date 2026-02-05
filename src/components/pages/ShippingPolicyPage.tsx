import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ShippingPolicyPage() {
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
            Shipping Policy
          </h1>
          
          <div className="space-y-8 font-paragraph text-base text-foreground/70">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Shipping Methods & Times
              </h2>
              <p className="mb-4">
                We currently ship within the United States only. All orders are processed within 1-2 business days (excluding weekends and holidays).
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Standard Shipping:</strong> 3-5 business days</li>
                <li><strong>Expedited Shipping:</strong> 2-3 business days</li>
                <li><strong>Express Shipping:</strong> 1-2 business days</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Shipping Costs
              </h2>
              <p className="mb-4">
                Shipping costs are calculated at checkout based on your location and selected shipping method.
              </p>
              <p>
                <strong>Free Standard Shipping</strong> on orders over $50 within the continental United States.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Order Tracking
              </h2>
              <p>
                Once your order ships, you will receive a confirmation email with tracking information. You can track your package using the provided tracking number.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                International Shipping
              </h2>
              <p>
                We do not currently offer international shipping. We are working to expand our shipping options in the future.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Shipping Delays
              </h2>
              <p>
                While we strive to meet estimated delivery times, delays may occur due to carrier issues, weather conditions, or other unforeseen circumstances. We are not responsible for delays caused by shipping carriers.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Lost or Damaged Packages
              </h2>
              <p className="mb-4">
                If your package is lost or arrives damaged, please contact us within 48 hours of the expected delivery date. We will work with the carrier to resolve the issue and ensure you receive your order.
              </p>
              <p>
                Email us at: <a href="mailto:hello@sunmillednaturals.com" className="text-primary hover:underline">hello@sunmillednaturals.com</a>
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Address Changes
              </h2>
              <p>
                If you need to change your shipping address, please contact us immediately. Once an order has shipped, we cannot modify the delivery address.
              </p>
            </section>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
