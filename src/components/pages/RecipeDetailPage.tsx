import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Recipes } from '@/entities';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipes | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadRecipe();
  }, [id]);

  const loadRecipe = async () => {
    if (!id) return;
    setIsLoading(true);
    const data = await BaseCrudService.getById<Recipes>('recipes', id);
    setRecipe(data);
    setIsLoading(false);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="w-full max-w-[100rem] mx-auto px-6 py-12 min-h-[600px]">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <LoadingSpinner />
          </div>
        ) : !recipe ? (
          <div className="text-center py-20">
            <h2 className="font-heading text-2xl text-foreground mb-4">Recipe not found</h2>
            <Button asChild variant="outline">
              <Link to="/recipes">Back to Recipes</Link>
            </Button>
          </div>
        ) : (
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/recipes" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Recipes
              </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image */}
              <div>
                {recipe.mainImage && (
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={recipe.mainImage}
                      alt={recipe.title || 'Recipe'}
                      className="w-full h-full object-cover"
                      width={800}
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                {recipe.category && (
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-paragraph font-semibold rounded-full mb-4">
                    {recipe.category}
                  </span>
                )}
                
                <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                  {recipe.title}
                </h1>

                {/* Ingredients */}
                {recipe.ingredients && (
                  <div className="mb-8">
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      Ingredients
                    </h2>
                    <div className="bg-secondary/20 p-6 rounded-lg">
                      <p className="font-paragraph text-base text-foreground whitespace-pre-line">
                        {recipe.ingredients}
                      </p>
                    </div>
                  </div>
                )}

                {/* Preparation Steps */}
                {recipe.preparationSteps && (
                  <div className="mb-8">
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      Preparation
                    </h2>
                    <div className="space-y-4">
                      <p className="font-paragraph text-base text-foreground/70 whitespace-pre-line">
                        {recipe.preparationSteps}
                      </p>
                    </div>
                  </div>
                )}

                {/* Related Products */}
                {recipe.relatedProducts && (
                  <div className="mb-8">
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      Products Used
                    </h2>
                    <p className="font-paragraph text-base text-foreground/70">
                      {recipe.relatedProducts}
                    </p>
                    <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link to="/store">Shop Products</Link>
                    </Button>
                  </div>
                )}

                {/* Disclaimer */}
                <div className="mt-8 p-4 bg-secondary/20 rounded-lg">
                  <p className="font-paragraph text-xs text-foreground/60">
                    Nutritional information is approximate. These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
