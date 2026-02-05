import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, TrendingUp, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    estimatedVolume: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Wholesale form submitted:', formData);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const benefits = [
    {
      icon: Package,
      title: 'Bulk Pricing',
      description: 'Competitive wholesale rates for larger orders'
    },
    {
      icon: TrendingUp,
      title: 'Quality Products',
      description: 'Same premium quality, larger quantities'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personal account management for wholesale partners'
    },
    {
      icon: Clock,
      title: 'Flexible Terms',
      description: 'Custom ordering schedules to fit your needs'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
            Wholesale Partnerships
          </h1>
          <p className="font-paragraph text-lg text-foreground/70">
            Partner with SunMilled Naturals to bring premium dehydrated powders to your customers. Perfect for cafes, gyms, health food stores, and wellness centers.
          </p>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="w-full max-w-[100rem] mx-auto px-6 pb-16">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="p-6 text-center border border-foreground/10 h-full">
                  <benefit.icon className="w-12 h-12 mx-auto mb-4 text-primary" strokeWidth={1.5} />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-paragraph text-sm text-foreground/70">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Form and Info */}
      <section className="w-full max-w-[100rem] mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Wholesale Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border border-foreground/10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Request Wholesale Information
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-paragraph text-sm font-semibold text-foreground mb-2 block">
                    Business Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="font-paragraph text-sm font-semibold text-foreground mb-2 block">
                    Contact Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-paragraph text-sm font-semibold text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="font-paragraph text-sm font-semibold text-foreground mb-2 block">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-paragraph text-sm font-semibold text-foreground mb-2 block">
                    Business Type *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="e.g., Cafe, Gym, Health Food Store"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="font-paragraph text-sm font-semibold text-foreground mb-2 block">
                    Estimated Monthly Volume
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., 50-100 units"
                    value={formData.estimatedVolume}
                    onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="font-paragraph text-sm font-semibold text-foreground mb-2 block">
                    Additional Information
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[120px]"
                    placeholder="Tell us about your business and wholesale needs"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-6 font-paragraph font-bold"
                >
                  Submit Inquiry
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Wholesale Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card className="p-8 border border-foreground/10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Wholesale Details
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-paragraph text-base font-semibold text-foreground mb-2">
                    Minimum Order
                  </h3>
                  <p className="font-paragraph text-sm text-foreground/70">
                    Minimum order quantities vary by product. We'll work with you to find the right volume for your business.
                  </p>
                </div>

                <div>
                  <h3 className="font-paragraph text-base font-semibold text-foreground mb-2">
                    Lead Time
                  </h3>
                  <p className="font-paragraph text-sm text-foreground/70">
                    Standard lead time is 2-3 weeks for wholesale orders. Rush orders may be available upon request.
                  </p>
                </div>

                <div>
                  <h3 className="font-paragraph text-base font-semibold text-foreground mb-2">
                    Payment Terms
                  </h3>
                  <p className="font-paragraph text-sm text-foreground/70">
                    Flexible payment terms available for established accounts. Net 30 terms for qualified businesses.
                  </p>
                </div>

                <div>
                  <h3 className="font-paragraph text-base font-semibold text-foreground mb-2">
                    Product Range
                  </h3>
                  <p className="font-paragraph text-sm text-foreground/70">
                    Full access to our complete product line including single-ingredient powders, blends, and custom formulations.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border border-foreground/10 bg-secondary/20">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Ideal Partners
              </h3>
              <ul className="space-y-2 font-paragraph text-sm text-foreground/70">
                <li>• Juice bars and smoothie shops</li>
                <li>• Coffee shops and cafes</li>
                <li>• Gyms and fitness centers</li>
                <li>• Health food stores</li>
                <li>• Wellness centers and spas</li>
                <li>• Meal prep services</li>
                <li>• Online retailers</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
