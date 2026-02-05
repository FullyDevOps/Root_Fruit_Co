import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    wholesaleInquiry: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const faqs = [
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping typically takes 3-5 business days within the US.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day satisfaction guarantee on all unopened products.'
    },
    {
      question: 'Are your products organic?',
      answer: 'We prioritize high-quality, non-GMO produce. Specific certifications vary by product.'
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
            Get in Touch
          </h1>
          <p className="font-paragraph text-lg text-foreground/70">
            Have a question about our products or want to explore wholesale options? We're here to help.
          </p>
        </motion.div>
      </section>

      <div className="w-full max-w-[100rem] mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border border-foreground/10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-paragraph text-sm font-semibold text-foreground mb-2 block">
                    Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                  />
                </div>

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
                    Subject *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="font-paragraph text-sm font-semibold text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[150px]"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="wholesale"
                    checked={formData.wholesaleInquiry}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, wholesaleInquiry: checked as boolean })
                    }
                  />
                  <label 
                    htmlFor="wholesale"
                    className="font-paragraph text-sm text-foreground cursor-pointer"
                  >
                    This is a wholesale inquiry
                  </label>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-6 font-paragraph font-bold"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info & FAQs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <Card className="p-8 border border-foreground/10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="font-paragraph text-sm font-semibold text-foreground mb-1">
                      Email
                    </p>
                    <p className="font-paragraph text-sm text-foreground/70">
                      hello@sunmillednaturals.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="font-paragraph text-sm font-semibold text-foreground mb-1">
                      Response Time
                    </p>
                    <p className="font-paragraph text-sm text-foreground/70">
                      We typically respond within 24-48 hours during business days
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-primary mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="font-paragraph text-sm font-semibold text-foreground mb-1">
                      Wholesale Inquiries
                    </p>
                    <p className="font-paragraph text-sm text-foreground/70">
                      Interested in bulk orders? Check the wholesale inquiry box above or visit our wholesale page.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick FAQs */}
            <Card className="p-8 border border-foreground/10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Quick Answers
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="pb-4 border-b border-foreground/10 last:border-0 last:pb-0">
                    <p className="font-paragraph text-sm font-semibold text-foreground mb-2">
                      {faq.question}
                    </p>
                    <p className="font-paragraph text-sm text-foreground/70">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
