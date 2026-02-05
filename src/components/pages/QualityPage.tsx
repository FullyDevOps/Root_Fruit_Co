import { motion } from 'framer-motion';
import { Leaf, Droplet, Wind, Package, FileCheck, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function QualityPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const processSteps = [
    {
      icon: Leaf,
      title: 'Source',
      description: 'We select Grade A produce from trusted suppliers, prioritizing quality and freshness.'
    },
    {
      icon: Droplet,
      title: 'Dehydrate',
      description: 'Low-temperature dehydration preserves nutrients, color, and natural flavors.'
    },
    {
      icon: Wind,
      title: 'Mill',
      description: 'Finely milled to a smooth, consistent powder that blends easily.'
    },
    {
      icon: Package,
      title: 'Pack',
      description: 'Sealed in freshness-focused packaging to maintain quality.'
    },
    {
      icon: FileCheck,
      title: 'Test',
      description: 'Batch testing ensures consistency and purity in every product.'
    }
  ];

  const certifications = [
    {
      icon: Shield,
      title: 'Non-GMO',
      description: 'We prioritize non-GMO produce in our sourcing.'
    },
    {
      icon: Leaf,
      title: 'Vegan',
      description: '100% plant-based, no animal products or by-products.'
    },
    {
      icon: FileCheck,
      title: 'Lab Tested',
      description: 'Third-party testing for quality assurance.'
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
            Our Quality Process
          </h1>
          <p className="font-paragraph text-lg text-foreground/70">
            From farm to scoop, we're committed to delivering the highest quality dehydrated powders. Here's how we do it.
          </p>
        </motion.div>
      </section>

      {/* Process Timeline */}
      <section className="w-full max-w-[100rem] mx-auto px-6 pb-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="p-6 text-center border border-foreground/10 h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-paragraph text-sm text-foreground/70">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* No Additives Policy */}
      <section className="w-full bg-secondary/20 py-16">
        <div className="max-w-[100rem] mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              No Additives Policy
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 mb-8">
              Our powders contain only one ingredient: the fruit or vegetable listed on the label. No added sugars, no fillers, no preservatives, no artificial colors or flavors. Just pure, real produce.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-lg">
                <p className="font-heading text-2xl font-bold text-foreground mb-2">0</p>
                <p className="font-paragraph text-sm text-foreground/70">Added Sugars</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <p className="font-heading text-2xl font-bold text-foreground mb-2">0</p>
                <p className="font-paragraph text-sm text-foreground/70">Fillers</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <p className="font-heading text-2xl font-bold text-foreground mb-2">0</p>
                <p className="font-paragraph text-sm text-foreground/70">Preservatives</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full max-w-[100rem] mx-auto px-6 py-20">
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
          <motion.h2 
            className="font-heading text-3xl md:text-4xl text-center text-foreground mb-12"
            variants={fadeIn}
          >
            Quality Standards
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="p-8 text-center border border-foreground/10 h-full">
                  <cert.icon className="w-12 h-12 mx-auto mb-4 text-primary" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {cert.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/70">
                    {cert.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Lab Reports */}
      <section className="w-full bg-secondary/20 py-16">
        <div className="max-w-[100rem] mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Certificates of Analysis
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 mb-8">
              We maintain detailed records for every batch. COA and lab reports are available upon request. Contact us with your batch number for specific documentation.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
