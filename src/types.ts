import { z } from "zod";

const product_types = [
  "Mobile & Laptops",
  "Gaming Entertainment",
  "Image & Video",
  "Vehicle",
  "Furnitures",
  "Sport",
  "Food & Drinks",
  "Fashion Accessories",
  "Toilet & Sanitation",
  "Makeup Corner",
  "Baby Items",
  "popular",
] as const;

export const ZProduct = z.object({
  id: z.string(),
  image: z.string(),
  brand: z.string(),
  review: z.number(),
  title: z.string(),
  offer_price: z.number().optional(),
  price: z.number(),
  campaingn_product: z.boolean().optional(),
  cam_product_available: z.number().optional(),
  cam_product_sale: z.number().optional(),
  product_type: z.enum(product_types),
});

export type TProduct = z.infer<typeof ZProduct>;
