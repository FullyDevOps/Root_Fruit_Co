// HPI 1.7-G
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { Sparkles, Leaf, FlaskConical, ShoppingBag, Blend, Apple, Salad, Package, ArrowRight, Check, Plus, Minus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  // ---------------------------------------------------------------------------
  // DATA FIDELITY PROTOCOL: CANONICAL DATA SOURCES
  // ---------------------------------------------------------------------------
  const valueCards = [
    {
      icon: Sparkles,
      title: 'Single-ingredient powders',
      description: 'Pure, real produce with nothing added'
    },
    {
      icon: Leaf,
      title: 'No added sugar or fillers',
      description: 'Just the fruit or vegetable, finely milled'
    },
    {
      icon: FlaskConical,
      title: 'Quality-focused sourcing',
      description: 'Batch testing and transparent processes'
    }
  ];

  const categories = [
    {
      title: 'Fruit Powders',
      icon: Apple,
      link: '/store',
      image: "https://static.wixstatic.com/media/59e798_2b4b4247052647139afed2444d65904d~mv2.png?originWidth=896&originHeight=640"
    },
    {
      title: 'Vegetable Powders',
      icon: Salad,
      link: '/store',
      image: "https://static.wixstatic.com/media/59e798_179f8c478de248afbeb64afa316d60b1~mv2.png?originWidth=896&originHeight=640"
    },
    {
      title: 'Blends',
      icon: Blend,
      link: '/store',
      image: "https://static.wixstatic.com/media/59e798_7e49262b2500431c9f2408b36be91fb1~mv2.png?originWidth=896&originHeight=640"
    },
    {
      title: 'Bundles',
      icon: Package,
      link: '/bundles',
      image: "https://static.wixstatic.com/media/59e798_62a8746cc025478f9b110123d855805c~mv2.png?originWidth=896&originHeight=640"
    }
  ];

  const howToUse = [
    { title: 'Smoothies', description: 'Blend into your daily shake' },
    { title: 'Baking', description: 'Add natural color and nutrition' },
    { title: 'Yogurt & Oatmeal', description: 'Stir in for extra goodness' },
    { title: 'Drinks', description: 'Mix into water, juice, or lattes' }
  ];

  const whyUs = [
    {
      title: 'Low-temperature dehydration',
      description: 'Preserves nutrients and natural flavors'
    },
    {
      title: 'Finely milled',
      description: 'Smooth texture that blends easily'
    },
    {
      title: 'Freshness-focused packaging',
      description: 'Sealed to maintain quality'
    },
    {
      title: 'Quality Promise',
      description: 'COA and lab reports available upon request'
    }
  ];

  const faqs = [
    {
      question: 'What exactly are dehydrated powders?',
      answer: 'Our powders are made from real fruits and vegetables that have been gently dehydrated and finely milled. Nothing is added—just pure produce in a convenient, shelf-stable form.'
    },
    {
      question: 'How do I use them?',
      answer: 'Add a scoop to smoothies, yogurt, oatmeal, baking recipes, or drinks. Start with 1 teaspoon and adjust to taste. They blend easily and add nutrition without changing texture much.'
    },
    {
      question: 'Are they organic or non-GMO?',
      answer: 'We source high-quality produce and prioritize non-GMO options. Specific certifications vary by product—check individual product pages for details.'
    },
    {
      question: 'How long do they last?',
      answer: 'When stored in a cool, dry place, our powders typically last 12-18 months. Each package includes a best-by date.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Currently, we ship within the United States only. We\'re working on expanding to other countries soon.'
    }
  ];

  // ---------------------------------------------------------------------------
  // ANIMATION HOOKS & REFS
  // ---------------------------------------------------------------------------
  
  // Hero Parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

  // Horizontal Scroll Section (How To Use)
  const horizontalRef = useRef(null);
  const { scrollYProgress: horizontalScroll } = useScroll({
    target: horizontalRef,
  });
  const horizontalX = useTransform(horizontalScroll, [0, 1], ["0%", "-75%"]);

  // Why Us Stagger
  const whyUsRef = useRef(null);
  const isWhyUsInView = useInView(whyUsRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background font-paragraph text-foreground overflow-clip selection:bg-primary/20 selection:text-primary">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .text-stroke {
          -webkit-text-stroke: 1px rgba(0,0,0,0.1);
          color: transparent;
        }
      `}</style>

      <main>
        {/* ---------------------------------------------------------------------------
            HERO SECTION: Asymmetrical Split with Parallax
           --------------------------------------------------------------------------- */}
        <section ref={heroRef} className="relative w-full min-h-[95vh] flex flex-col lg:flex-row overflow-hidden">
          {/* Left Content */}
          <div className="w-full lg:w-[40%] relative z-20 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-24 bg-background">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wider uppercase mb-8">
                <Sparkles className="w-3 h-3" />
                <span>Grade A Nutrition</span>
              </div>
              
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground mb-8">
                Real fruits <br />
                <span className="text-primary italic">& veggies.</span> <br />
                Finely milled.
              </h1>
              
              <p className="font-paragraph text-lg text-foreground/70 mb-10 max-w-md leading-relaxed">
                Clean powders made from real produce. Scoopable plant nutrition for everyday life, simplified for the modern routine.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-base font-medium transition-all duration-300 hover:scale-105"
                >
                  <Link to="/store">Shop Powders</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border border-foreground/20 text-foreground hover:bg-secondary/20 rounded-full px-10 h-14 text-base font-medium transition-all duration-300"
                >
                  <Link to="/bundles">View Bundles</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Image Parallax */}
          <div className="w-full lg:w-[60%] relative h-[60vh] lg:h-auto overflow-hidden">
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity }}
              className="absolute inset-0 w-full h-[120%]"
            >
              <Image
                src="https://static.wixstatic.com/media/59e798_dfcfc5ef059a4dcc9f0d44ac2cab6684~mv2.png?originWidth=1280&originHeight=704"
                alt="Fresh fruit and vegetable powders"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent lg:from-background lg:via-transparent" />
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-12 right-12 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/50 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider font-bold">Purity Promise</p>
                  <p className="text-sm font-medium text-foreground">100% Single Ingredient</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ---------------------------------------------------------------------------
            TICKER: Infinite Scroll
           --------------------------------------------------------------------------- */}
        <div className="w-full bg-primary py-4 overflow-hidden whitespace-nowrap border-y border-primary/20">
          <motion.div 
            className="inline-block"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="inline-flex items-center mx-8 text-primary-foreground/90 font-heading text-xl tracking-wide">
                NO FILLERS <span className="mx-4 text-primary-foreground/40">•</span> 
                NON-GMO <span className="mx-4 text-primary-foreground/40">•</span> 
                VEGAN <span className="mx-4 text-primary-foreground/40">•</span> 
                GLUTEN FREE <span className="mx-4 text-primary-foreground/40">•</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* ---------------------------------------------------------------------------
            VALUE PROPOSITION: Staggered Cards
           --------------------------------------------------------------------------- */}
        <section className="w-full max-w-[120rem] mx-auto px-6 py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {valueCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index === 1 ? 'md:mt-16' : index === 2 ? 'md:mt-32' : ''}`}
              >
                <div className="mb-6 p-4 w-16 h-16 rounded-2xl bg-secondary/30 flex items-center justify-center text-primary">
                  <card.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-3">{card.title}</h3>
                <p className="font-paragraph text-foreground/60 leading-relaxed">{card.description}</p>
                <div className="w-12 h-[1px] bg-primary/30 mt-6" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------------------
            CATEGORIES: Full Bleed Grid with Hover Reveal
           --------------------------------------------------------------------------- */}
        <section className="w-full py-20 bg-secondary/10">
          <div className="max-w-[120rem] mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Shop by Category</h2>
              <p className="text-foreground/60 max-w-md">Explore our range of premium powders designed for your specific nutritional needs.</p>
            </div>
            <Button variant="link" asChild className="text-primary p-0 h-auto font-medium text-lg group">
              <Link to="/store" className="flex items-center gap-2">
                View All Products 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="w-full max-w-[120rem] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <Link key={index} to={category.link} className="group relative block overflow-hidden rounded-3xl aspect-[4/3] md:aspect-[16/9]">
                  <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/0 transition-colors duration-500 z-10" />
                  
                  {/* Image with Zoom Effect */}
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <Image 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-between bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90">
                    <div className="self-end bg-white/20 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2 text-white/80">
                        <category.icon className="w-5 h-5" />
                        <span className="text-sm uppercase tracking-widest font-medium">Collection</span>
                      </div>
                      <h3 className="font-heading text-3xl md:text-4xl text-white">{category.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------------------
            HOW TO USE: Horizontal Scroll Section
           --------------------------------------------------------------------------- */}
        <section ref={horizontalRef} className="relative h-[300vh] bg-foreground text-background">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            <div className="absolute top-12 left-6 md:left-12 z-10">
              <h2 className="font-heading text-4xl md:text-6xl text-background mb-2">How to Use</h2>
              <p className="text-background/60 text-lg">Versatile nutrition for every meal.</p>
            </div>

            <motion.div style={{ x: horizontalX }} className="flex gap-12 px-6 md:px-12 lg:px-20 items-center h-full pt-20">
              {howToUse.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw] h-[60vh] relative group">
                  <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-3xl transform transition-transform duration-500 group-hover:-rotate-2" />
                  <div className="absolute inset-0 bg-background rounded-3xl overflow-hidden flex flex-col">
                    <div className="h-2/3 bg-secondary/20 relative p-8 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                        <ShoppingBag className="w-12 h-12 text-primary" />
                      </div>
                      <div className="absolute top-4 right-4 text-9xl font-heading text-foreground/5 font-bold">
                        0{index + 1}
                      </div>
                    </div>
                    <div className="h-1/3 p-8 flex flex-col justify-center bg-white">
                      <h3 className="font-heading text-2xl text-foreground mb-2">{item.title}</h3>
                      <p className="font-paragraph text-foreground/60">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* End spacer */}
              <div className="w-[10vw] flex-shrink-0" />
            </motion.div>
          </div>
        </section>

        {/* ---------------------------------------------------------------------------
            WHY SUNMILLED: Sticky Feature List
           --------------------------------------------------------------------------- */}
        <section ref={whyUsRef} className="w-full max-w-[120rem] mx-auto px-6 py-32">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Sticky Header */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-8 leading-tight">
                  Why <br /> SunMilled?
                </h2>
                <p className="font-paragraph text-lg text-foreground/70 mb-12 leading-relaxed">
                  We're committed to quality at every step—from sourcing to your scoop. Our process is transparent, clean, and focused on preserving nature's best.
                </p>
                <Button asChild variant="outline" className="rounded-full border-foreground/20 hover:bg-foreground hover:text-background transition-colors">
                  <Link to="/about">Read Our Story</Link>
                </Button>
              </div>
            </div>

            {/* List */}
            <div className="lg:w-2/3 flex flex-col gap-16">
              {whyUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group border-b border-foreground/10 pb-16 last:border-0"
                >
                  <div className="flex items-start gap-6 md:gap-10">
                    <span className="font-heading text-4xl md:text-5xl text-primary/40 group-hover:text-primary transition-colors duration-300">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-300">
                        {item.title}
                      </h3>
                      <p className="font-paragraph text-lg text-foreground/60 max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------------------
            FAQ: Minimalist Accordion
           --------------------------------------------------------------------------- */}
        <section className="w-full bg-secondary/10 py-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Common Questions</h2>
              <p className="text-foreground/60">Everything you need to know about our powders.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------------------
            NEWSLETTER: Zen Box
           --------------------------------------------------------------------------- */}
        <section className="w-full px-6 py-24 md:py-32">
          <div className="max-w-[100rem] mx-auto bg-primary rounded-[3rem] overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
               <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
               </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 md:py-32">
              <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-6">
                Join the movement.
              </h2>
              <p className="font-paragraph text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl">
                Get 10% off your first order, plus weekly recipes and wellness tips delivered to your inbox.
              </p>
              
              <form className="w-full max-w-md flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:bg-primary-foreground/20 transition-colors"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-primary-foreground text-primary hover:bg-white rounded-full px-8 py-4 h-auto font-bold text-base transition-transform hover:scale-105"
                >
                  Subscribe
                </Button>
              </form>
              <p className="mt-6 text-xs text-primary-foreground/40">
                No spam, ever. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// Helper Component for FAQ Accordion
function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-foreground/10 rounded-2xl bg-background overflow-hidden transition-all duration-300 hover:border-primary/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left"
      >
        <span className="font-heading text-lg md:text-xl font-medium text-foreground pr-8">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-primary border-primary text-white' : 'bg-transparent'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 md:px-8 pb-8 pt-0">
              <p className="font-paragraph text-foreground/70 leading-relaxed border-t border-foreground/5 pt-4">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}