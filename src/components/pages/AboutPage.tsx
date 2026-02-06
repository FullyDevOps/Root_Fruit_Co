import { motion } from 'framer-motion';
import { Heart, Target, Sparkles, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: Heart,
      title: 'Quality First',
      description: 'We never compromise on the quality of our ingredients or processes.'
    },
    {
      icon: Sparkles,
      title: 'Simplicity',
      description: 'Single-ingredient powders with nothing added—just pure produce.'
    },
    {
      icon: Target,
      title: 'Transparency',
      description: "We're open about our sourcing, processes, and testing."
    },
    {
      icon: Users,
      title: 'Customer-Focused',
      description: 'Your wellness goals drive everything we do.'
    }
  ];

  const differentiators = [
    {
      title: 'Grade A Sourcing',
      description: 'We select only the highest quality produce from trusted suppliers.'
    },
    {
      title: 'Low-Temperature Processing',
      description: 'Our gentle dehydration method preserves nutrients and natural flavors.'
    },
    {
      title: 'Fine Milling',
      description: 'Smooth, consistent texture that blends easily into any recipe.'
    },
    {
      title: 'Batch Testing',
      description: 'Every batch is tested to ensure quality and consistency.'
    },
    {
      title: 'No Additives',
      description: 'Just the fruit or vegetable—no sugars, fillers, or preservatives.'
    },
    {
      title: 'US-Based',
      description: 'Proudly serving health-conscious customers across the United States.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full max-w-[100rem] mx-auto px-6 py-16 md:py-24">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
            About SunMilled Naturals
          </h1>
          <p className="font-paragraph text-lg text-foreground/70">
            We believe that adding fruits and vegetables to your daily routine should be simple, convenient, and delicious.
          </p>
        </motion.div>
      </section>

      {/* Brand Story */}
      <section className="w-full max-w-[100rem] mx-auto px-6 pb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-secondary/20 p-12 rounded-lg">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 font-paragraph text-base text-foreground/70">
              <p>
                SunMilled Naturals was born from a simple observation: people want to eat more fruits and vegetables, but busy lives make it challenging. Fresh produce spoils quickly, preparation takes time, and it's not always convenient to carry around.
              </p>
              <p>
                We saw an opportunity to make plant nutrition more accessible. By carefully dehydrating and finely milling high-quality produce, we created powders that preserve the goodness of real fruits and vegetables in a form that's shelf-stable, portable, and incredibly easy to use.
              </p>
              <p>
                Our commitment is straightforward: source the best produce, process it gently to preserve nutrients, and deliver it to you with complete transparency. No shortcuts, no additives, no compromises.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission */}
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
              Our Mission
            </h2>
            <p className="font-paragraph text-lg text-foreground/70">
              To make it effortless for health-conscious individuals to add real fruits and vegetables to their daily routine—one scoop at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="p-8 text-center border border-foreground/10 h-full">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/70">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What Makes Us Different */}
      <section className="w-full bg-secondary/20 py-20">
        <div className="max-w-[100rem] mx-auto px-6">
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
              What Makes Us Different
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-background rounded-lg border-l-4 border-primary"
                  variants={fadeIn}
                >
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-sm text-foreground/70">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
