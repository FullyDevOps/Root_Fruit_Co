import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { Recipes } from '@/entities';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Smoothies', 'Lattes', 'Baking', 'Quick Meals'];

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    setIsLoading(true);
    const result = await BaseCrudService.getAll<Recipes>('recipes');
    setRecipes(result.items);
    setIsLoading(false);
  };

  const filteredRecipes = selectedCategory === 'All' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === selectedCategory);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
            Recipes & Inspiration
          </h1>
          <p className="font-paragraph text-lg text-foreground/70">
            Discover delicious ways to use our powders. From energizing smoothies to nutritious baked goods, find your next favorite recipe.
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="w-full max-w-[100rem] mx-auto px-6 pb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`rounded-lg px-6 py-2 font-paragraph ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'border-2 border-primary text-primary hover:bg-primary/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="w-full max-w-[100rem] mx-auto px-6 pb-20 min-h-[600px]">
        {isLoading ? null : filteredRecipes.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredRecipes.map((recipe) => (
              <motion.div key={recipe._id} variants={fadeIn}>
                <Link to={`/recipes/${recipe._id}`}>
                  <Card className="overflow-hidden border border-foreground/10 hover:border-primary transition-colors h-full">
                    {recipe.mainImage && (
                      <div className="aspect-[4/3] overflow-hidden">
                        <Image
                          src={recipe.mainImage}
                          alt={recipe.title || 'Recipe'}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          width={400}
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {recipe.category && (
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-paragraph font-semibold rounded-full mb-3">
                          {recipe.category}
                        </span>
                      )}
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        {recipe.title}
                      </h3>
                      {recipe.relatedProducts && (
                        <p className="font-paragraph text-sm text-foreground/60">
                          Uses: {recipe.relatedProducts}
                        </p>
                      )}
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <p className="font-paragraph text-lg text-foreground/60">
              No recipes found in this category.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
