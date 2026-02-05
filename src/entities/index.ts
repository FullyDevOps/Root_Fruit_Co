/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: brandvalues
 * Interface for BrandValues
 */
export interface BrandValues {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  valueTitle?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  illustration?: string;
  /** @wixFieldType text */
  callToActionText?: string;
  /** @wixFieldType url */
  callToActionLink?: string;
}


/**
 * Collection ID: faqs
 * Interface for FrequentlyAskedQuestions
 */
export interface FrequentlyAskedQuestions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  question?: string;
  /** @wixFieldType text */
  answer?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType boolean */
  isFeatured?: boolean;
  /** @wixFieldType number */
  displayOrder?: number;
}


/**
 * Collection ID: labreports
 * Interface for LabReports
 */
export interface LabReports {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  batchNumber?: string;
  /** @wixFieldType text */
  productName?: string;
  /** @wixFieldType date */
  dateOfTesting?: Date | string;
  /** @wixFieldType url */
  reportLink?: string;
  /** @wixFieldType text */
  testedParameters?: string;
}


/**
 * Collection ID: recipes
 * Interface for Recipes
 */
export interface Recipes {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  mainImage?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType text */
  ingredients?: string;
  /** @wixFieldType text */
  preparationSteps?: string;
  /** @wixFieldType text */
  relatedProducts?: string;
}


/**
 * Collection ID: testimonials
 * Interface for Testimonials
 */
export interface Testimonials {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  customerName?: string;
  /** @wixFieldType text */
  testimonialText?: string;
  /** @wixFieldType number */
  starRating?: number;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  customerPhoto?: string;
  /** @wixFieldType date */
  submissionDate?: Date | string;
}
