import { motion } from 'framer-motion';
import { Package, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BundlesPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const bundles = [
    {
      name: 'Smoothie Starter Pack',
      description: 'Everything you need to supercharge your morning smoothies',
      products: ['Beetroot Powder', 'Spinach Powder', 'Lemon Powder', 'ABC Blend'],
      regularPrice: 89.96,
      bundlePrice: 74.99,
      savings: 14.97
    },
    {
      name: 'Daily Greens Pack',
      description: 'A complete collection of nutrient-dense vegetable powders',
      products: ['Spinach Powder', 'Carrot Powder', 'Tomato Powder', 'Greens Blend'],
      regularPrice: 84.96,
      bundlePrice: 69.99,
      savings: 14.97
    },
    {
      name: 'Beet + Lemon Combo',
      description: 'Perfect pair for pre-workout drinks and wellness shots',
      products: ['Beetroot Powder', 'Lemon Powder'],
      regularPrice: 44.98,
      bundlePrice: 39.99,
      savings: 4.99
    },
    {
      name: 'Complete Wellness Bundle',
      description: 'Our most comprehensive collection for total nutrition',
      products: ['Beetroot Powder', 'Lemon Powder', 'Carrot Powder', 'Spinach Powder', 'Ginger Powder', 'ABC Blend'],
      regularPrice: 134.94,
      bundlePrice: 109.99,
      savings: 24.95
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
          <Package className="w-16 h-16 mx-auto mb-6 text-primary" strokeWidth={1.5} />
          <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
            Curated Bundles
          </h1>
          <p className="font-paragraph text-lg text-foreground/70">
            Save on our carefully selected powder combinations. Each bundle is designed to support your wellness goals with complementary flavors and benefits.
          </p>
        </motion.div>
      </section>

      {/* Bundles Grid */}
      <section className="w-full max-w-[100rem] mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bundles.map((bundle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col border border-foreground/10 hover:border-primary transition-colors">
                <div className="mb-6">
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                    {bundle.name}
                  </h2>
                  <p className="font-paragraph text-base text-foreground/70 mb-4">
                    {bundle.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <p className="font-paragraph text-sm font-semibold text-foreground">
                      Includes:
                    </p>
                    {bundle.products.map((product, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="font-paragraph text-sm text-foreground/70">
                          {product}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="mb-4">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-heading text-3xl font-bold text-foreground">
                        ${bundle.bundlePrice}
                      </span>
                      <span className="font-paragraph text-lg text-foreground/50 line-through">
                        ${bundle.regularPrice}
                      </span>
                    </div>
                    <p className="font-paragraph text-sm text-primary font-semibold">
                      Save ${bundle.savings.toFixed(2)}
                    </p>
                  </div>

                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-6 font-paragraph font-bold"
                  >
                    Add Bundle to Cart
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Bundles Section */}
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
              Why Choose Bundles?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Save Money
                </h3>
                <p className="font-paragraph text-base text-foreground/70">
                  Get more for less with bundle pricing
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Curated Selection
                </h3>
                <p className="font-paragraph text-base text-foreground/70">
                  Expertly paired for maximum benefit
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Try More
                </h3>
                <p className="font-paragraph text-base text-foreground/70">
                  Discover new favorites together
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
