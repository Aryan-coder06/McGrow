

export type Product = {
  slug: string;
  name: string;
  type: string;
  price: string;
  image: string; // path under /public
};

export const PRODUCTS: Product[] = [
  { slug: "zelio-primer",        name: "ZELIO PRIMER",         type: "Cement Primer",        price: "₹5 / 1 Ltr",  image: "/products/zelio_primer.jpg" }, 
  { slug: "boss-emulsion",       name: "BOSS EMULSION",        type: "Interior Emulsion",    price: "₹10 / 1 Ltr", image: "/products/boss_emulsion.png" },
  { slug: "scott-emulsion",      name: "SCOTT EMULSION",       type: "Emulsion",             price: "₹10 / 1 Ltr", image: "/products/scott_emulsion.png" },
  { slug: "crown-primer",        name: "CROWN PRIMER",         type: "Exterior Wall Primer", price: "₹25 / 1 Ltr", image: "/products/crown_primer.png" },
  { slug: "signature-hi-gloss",  name: "SIGNATURE HI-GLOSS",   type: "Hi-Gloss Enamel",      price: "₹25 / 1 Ltr", image: "/products/signature_higloss.png" },
  { slug: "bravo",               name: "BRAVO",                type: "Luxury Emulsion",      price: "₹20 / 1 Ltr", image: "/products/bravo_emulsion.png" },
  { slug: "mcgrow-int-primer",   name: "MCGROW INT PRIMER",    type: "Interior Primer",      price: "₹15 / 1 Ltr", image: "/products/mcgrow_int_primer.png" },
  { slug: "mcgrow-ext-primer",   name: "MCGROW EXT PRIMER",    type: "Exterior Primer",      price: "₹15 / 1 Ltr", image: "/products/mcgrow_ext_primer.jpg" }, 
  { slug: "kohinoor-int",        name: "KOHINOOR INT",         type: "Interior Paint",       price: "₹15 / 1 Ltr", image: "/products/kohinoor_int.png" },
  { slug: "kohinoor-xp-ext",     name: "KOHINOOR XP EXT",      type: "Exterior Paint",       price: "₹15 / 1 Ltr", image: "/products/kohinoor_xp_ext.png" },
  { slug: "mcgrow-easy-wash",    name: "MCGROW EASY WASH",     type: "Washable Emulsion",    price: "₹25 / 1 Ltr", image: "/products/mcgrow_easy_wash.jpg" }, 
  { slug: "mcgrow-non-metallic", name: "MCGROW NON-METALLIC",  type: "Non-Metallic Finish",  price: "₹50",         image: "/products/mcgrow_non_metallic.png" },
  { slug: "hd-wall-putty",       name: "HD WALL PUTTY",        type: "Wall Putty",           price: "₹50 / 20 KG", image: "/products/hd_wall_putty.png" }
];
