import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Camera, Heart, X, ShoppingBag, ArrowRight } from 'lucide-react';

export default function MaisonLookbook({ onSelectProductByTag }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const lookbookItems = [
    {
      id: 1,
      title: "Launching Soon... Save This Date Poster Flatlay",
      category: "Bespoke Flatlays",
      filterCategory: "Bespoke Flatlays",
      image: "/images/lunore_user_launching_soon_poster.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "Smartphone displaying LuNoRe official app lying on 'LAUNCHING SOON... SAVE THIS DATE...' printed campaign poster sheets."
    },
    {
      id: 2,
      title: "Luxury Car Console Quintet Flacon Collection",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_car_quintet_flacons.jpg",
      taggedProduct: "Santal Céleste",
      caption: "Luxury dark wood car center console holding 5 LUNORE flacons together (sky blue cap, royal blue cap, black marble cap, wooden cap, rose pink cap) with a diamond star pendant necklace."
    },
    {
      id: 3,
      title: "Range Rover Wood Console & Bakhoor Incense",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_rangerover_bakhoor.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "Range Rover luxury wood console with Bakhoor incense burner smoke rising, raw agarwood chips, Louis Vuitton dustbag, and 2 LUNORE blue cap flacons."
    },
    {
      id: 4,
      title: "Carbon Fiber Supercar Console & Labubu Toy",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_carbon_labubu.jpg",
      taggedProduct: "Santal Céleste",
      caption: "Carbon fiber supercar console playing Spotify '93 'til Infinity', holding Labubu plush charm toy and 2 LUNORE flacons."
    },
    {
      id: 5,
      title: "Porsche Steering Wheel & Van Cleef & Arpels",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_porsche_vancleef.jpg",
      taggedProduct: "Rose Impériale",
      caption: "Woman wearing Rolex watch & Van Cleef & Arpels gold Alhambra bracelet holding LUNORE blush pink spherical cap flacon in front of Porsche steering wheel."
    },
    {
      id: 6,
      title: "Mercedes G-Wagon G63 AMG Cockpit Console",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_gwagon_console.jpg",
      taggedProduct: "Nuit d'Or",
      caption: "Mercedes G-Class / G63 AMG dark piano black center console with round air vents, holding 2 LUNORE 50ml flacons."
    },
    {
      id: 7,
      title: "Goyard Monogram Pouch & Car Leather Seat",
      category: "Bespoke Flatlays",
      filterCategory: "Bespoke Flatlays",
      image: "/images/lunore_user_goyard_car_seat.jpg",
      taggedProduct: "Santal Céleste",
      caption: "Goyard monogram leather clutch pouch, Goyard green cardholder, sunglasses, Rimowa power bank, and 2 LUNORE flacons on brown car seat."
    },
    {
      id: 8,
      title: "Crater Lunar Surface & White Clay Stone",
      category: "Artisan Sculptures",
      filterCategory: "Artisan Sculptures",
      image: "/images/lunore_user_lunar_crater_clay.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "LUNORE white marble cap flacon resting inside a textured crater lunar surface and cracked white clay stone sculpture."
    },
    {
      id: 9,
      title: "Classic Vintage Chrome Headlight Bonnet",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_vintage_chrome_headlight.jpg",
      taggedProduct: "Soleil Absolu",
      caption: "Sage green classic vintage luxury car bonnet with chrome double round headlights and LUNORE wooden cap flacon."
    },
    {
      id: 10,
      title: "Ocean Wave Sea Foam & Wet Sand Sunset",
      category: "Artisan Sculptures",
      filterCategory: "Artisan Sculptures",
      image: "/images/lunore_user_ocean_foam_wave.jpg",
      taggedProduct: "Santal Céleste",
      caption: "LUNORE wooden spherical stopper flacon lying in wet golden beach sand surrounded by bubbling sea foam ocean waves."
    },
    {
      id: 11,
      title: "Red Leather Supercar Console & Blush Pink Cap",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_red_leather_console.jpg",
      taggedProduct: "Rose Impériale",
      caption: "Red leather supercar gear shift console (P/R/N/D/M) with LUNORE blush-pink spherical cap flacon in cup holder."
    },
    {
      id: 12,
      title: "Ferrari Supercar Cockpit & Black Leather Seat",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_ferrari_cockpit.jpg",
      taggedProduct: "Nuit d'Or",
      caption: "Ferrari yellow badge steering wheel cockpit view with black leather sports seat holding LUNORE white marble cap flacon, sunglasses & pink cap."
    },
    {
      id: 13,
      title: "Magenta Velvet & Jasmine Blossom Sanctuary",
      category: "Artisan Sculptures",
      filterCategory: "Artisan Sculptures",
      image: "/images/lunore_user_magenta_velvet_jasmine.jpg",
      taggedProduct: "Rose Impériale",
      caption: "LUNORE Extrait de Parfum blush-pink spherical cap flacon lying on textured magenta pink velvet surrounded by delicate white jasmine blossoms."
    },
    {
      id: 14,
      title: "Desert Dune Sand Wave & Sunbeams",
      category: "Artisan Sculptures",
      filterCategory: "Artisan Sculptures",
      image: "/images/lunore_user_dune_sand_wave.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "LUNORE brown marble cap flacon resting inside a wave of fine golden desert sand with dramatic sunbeam shadow lines."
    },
    {
      id: 15,
      title: "Quad Flacon Collection — Chocolate Silk & Rope",
      category: "Bespoke Flatlays",
      filterCategory: "Bespoke Flatlays",
      image: "/images/lunore_user_quad_flacons_silk.jpg",
      taggedProduct: "Santal Céleste",
      caption: "4 signature LUNORE flacons lying together on draped chocolate brown silk velvet encircled by nautical rope."
    },
    {
      id: 16,
      title: "Floating Liquid Resin Gel & Metallic Backdrop",
      category: "Nocturne & Dark",
      filterCategory: "Nocturne & Dark",
      image: "/images/lunore_user_resin_gel_liquid.jpg",
      taggedProduct: "Ambre Nocturne",
      caption: "LUNORE black marble cap flacon suspended inside crystal clear flowing resin liquid gel droplets on a metallic backdrop."
    },
    {
      id: 17,
      title: "Braided Nautical Rope & Volcanic Stone",
      category: "Artisan Sculptures",
      filterCategory: "Artisan Sculptures",
      image: "/images/lunore_user_rope_volcanic_stone.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "LUNORE wooden spherical stopper flacon wrapped in thick braided hemp nautical rope resting on jagged volcanic rock."
    },
    {
      id: 18,
      title: "Crochet Beach Dress Model & Dune Sand",
      category: "Artisan Sculptures",
      filterCategory: "Artisan Sculptures",
      image: "/images/lunore_user_crochet_beach_model.jpg",
      taggedProduct: "Soleil Absolu",
      caption: "Model wearing white open-knit crochet beach dress laying on sun-drenched coastal sand dune holding LUNORE white marble cap flacon."
    },
    {
      id: 19,
      title: "Summer Breeze — Coastal Sand Twin Flacons",
      category: "Artisan Sculptures",
      filterCategory: "Artisan Sculptures",
      image: "/images/lunore_user_summer_coastal_poster.jpg",
      taggedProduct: "Santal Céleste",
      caption: "Asian haute campaign poster featuring twin sky-blue spherical cap LUNORE flacons resting on a warm stone podium with braided coastal rope."
    },
    {
      id: 20,
      title: "Louis Vuitton Metallic Monogram Wallet Flatlay",
      category: "Bespoke Flatlays",
      filterCategory: "Bespoke Flatlays",
      image: "/images/lunore_user_lv_metallic_wallet.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "Silver metallic Louis Vuitton monogram wallet, iPhone Pro Max, and double LUNORE flacons on white marble slab."
    },
    {
      id: 21,
      title: "Shattered Mirror Shard & Driftwood Art",
      category: "Artisan Sculptures",
      filterCategory: "Artisan Sculptures",
      image: "/images/lunore_user_glass_shard_driftwood.jpg",
      taggedProduct: "Rose Impériale",
      caption: "Triangular sharp glass shard mirror reflecting LUNORE amber wooden cap flacon suspended inside dark intertwined organic tree branches."
    },
    {
      id: 22,
      title: "Gentleman in Oxford Shirt & Iced Coffee Caddy",
      category: "Paris & London Salons",
      filterCategory: "Paris & London Salons",
      image: "/images/lunore_user_oxford_iced_coffee.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "Gentleman in crisp white Oxford shirt with watch holding cardboard coffee caddy with iced espresso & LUNORE white marble cap flacon."
    },
    {
      id: 23,
      title: "Haute Model Portrait — Sky Blue Cap Flacon",
      category: "Paris & London Salons",
      filterCategory: "Paris & London Salons",
      image: "/images/lunore_user_model_headscarf.jpg",
      taggedProduct: "Santal Céleste",
      caption: "High-fashion model portrait in white linen wrap & headscarf holding LUNORE sky-blue spherical cap flacon in sunlight against ancient stone walls."
    },
    {
      id: 24,
      title: "Spilled Coffee & Le Monde Newspaper",
      category: "Paris & London Salons",
      filterCategory: "Paris & London Salons",
      image: "/images/lunore_user_coffee_lemonde.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "Overturned espresso cup splashing coffee on white linen next to Le Monde newspaper, stacked vintage books, butter cookies, and LUNORE wooden cap flacon."
    },
    {
      id: 25,
      title: "Hotel Suite Bathrobe & Cobalt Blue Cap",
      category: "Bespoke Flatlays",
      filterCategory: "Bespoke Flatlays",
      image: "/images/lunore_user_bathrobe_cobalt.jpg",
      taggedProduct: "Santal Céleste",
      caption: "Elegantly styled woman in plush white bathrobe with red manicure holding LUNORE cobalt blue cap flacon against her neck."
    },
    {
      id: 26,
      title: "Desert Dune Sand & Driftwood Sculpture",
      category: "Artisan Sculptures",
      filterCategory: "Artisan Sculptures",
      image: "/images/lunore_user_dune_sand_wood.jpg",
      taggedProduct: "Rose Impériale",
      caption: "LUNORE marble cap flacon elevated on bark driftwood perched atop fine desert sand dune in warm golden light."
    },
    {
      id: 27,
      title: "Supercar Cockpit & Suede Jacket Driver",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_suede_car_interior.jpg",
      taggedProduct: "Nuit d'Or",
      caption: "Driver in warm suede jacket inside luxury car cockpit holding LUNORE black marble cap flacon over cognac leather seats."
    },
    {
      id: 28,
      title: "Don't Gatekeep Your Perfume — Paris Reader",
      category: "Paris & London Salons",
      filterCategory: "Paris & London Salons",
      image: "/images/lunore_user_newspaper_gatekeep.jpg",
      taggedProduct: "Rose Impériale",
      caption: "Person reading Paris Gazette newspaper titled 'LuNorE - don't gatekeep your perfume' with a full page featuring the marble cap LUNORE flacon."
    },
    {
      id: 29,
      title: "PS5 Controller & Cobalt Blue Rolex Flatlay",
      category: "Bespoke Flatlays",
      filterCategory: "Bespoke Flatlays",
      image: "/images/lunore_user_ps5_cobalt.jpg",
      taggedProduct: "Santal Céleste",
      caption: "PS5 DualSense controller flatlay with AirPods Pro, gaming mouse, blue Rolex watch, Goyard blue cardholder, and LUNORE cobalt-blue marble cap flacon."
    },
    {
      id: 30,
      title: "Smoked Dark Red Flacon in Ice Cubes",
      category: "Nocturne & Dark",
      filterCategory: "Nocturne & Dark",
      image: "/images/lunore_user_red_flacon_ice.jpg",
      taggedProduct: "Nuit d'Or",
      caption: "Smoked dark red LUNORE flacon submerged in ice cubes with water droplets. Inspired by Raw Nature 30ml / 1.0 fl oz."
    },
    {
      id: 31,
      title: "Land Rover Defender Leather Interior",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_defender_leather.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "Land Rover Defender luxury tan leather interior with Rimowa phone case, Goyard green cardholder, sunglasses, and 2 LUNORE flacons."
    },
    {
      id: 32,
      title: "Mercedes-Benz Star & Lorenzi Coffee Cup",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_mercedes_lorenzi.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "Mercedes-Benz bonnet star emblem with Lorenzi coffee cup in cardboard holder and LUNORE wooden cap flacon."
    },
    {
      id: 33,
      title: "Men Essential — MacBook Pro & AirPods Max",
      category: "Bespoke Flatlays",
      filterCategory: "Bespoke Flatlays",
      image: "/images/lunore_user_macbook_essential.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "Apple MacBook Pro flatlay with black AirPods Max, Hermes cardholder, Louis Vuitton passport cover, Le Labo hand pomade & LUNORÉ flacon."
    },
    {
      id: 34,
      title: "Paris Morning Cafe & Sourdough Toast",
      category: "Paris & London Salons",
      filterCategory: "Paris & London Salons",
      image: "/images/lunore_user_paris_toast_cafe.jpg",
      taggedProduct: "Santal Céleste",
      caption: "Paris morning outdoor cafe setting with white tablecloth, hot cappuccino, toasted sourdough bread, silver tray & LUNORÉ dark marble cap flacon."
    },
    {
      id: 35,
      title: "LuNore x Rimowa — Porsche Seat Flatlay",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_porsche_rimowa.jpg",
      taggedProduct: "Santal Céleste",
      caption: "Porsche car seat flatlay with black cap, Rimowa power bank, iPhone with Rimowa case & blush-pink spherical cap flacon."
    },
    {
      id: 36,
      title: "Dior Jacquard & Mercedes-AMG Key Suite",
      category: "Bespoke Flatlays",
      filterCategory: "Bespoke Flatlays",
      image: "/images/lunore_user_dior_amg.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "Dior Jacquard canvas cardholder with Amex Gold & Business cards, Rolex Submariner watch, stack of $100 bills, Mercedes-AMG key & wooden stopper flacon."
    },
    {
      id: 37,
      title: "BMW M Steering Wheel & Monogram Box",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_bmw_leather_box.jpg",
      taggedProduct: "Nuit d'Or",
      caption: "BMW M steering wheel interior view, driver holding smoked red LUNORÉ flacon alongside a burgundy leather gold embossed L luxury box."
    },
    {
      id: 38,
      title: "Ralph's Coffee London — Green Marble Table",
      category: "Paris & London Salons",
      filterCategory: "Paris & London Salons",
      image: "/images/lunore_user_ralphs_coffee.jpg",
      taggedProduct: "Nuit d'Or",
      caption: "Ralph's Coffee London green marble table with Ralph Lauren coffee cup, leather cardholder, money clip with Euros, black sunglasses & smoked red LUNORÉ flacon."
    },
    {
      id: 39,
      title: "BMW M-Performance & Santos de Cartier",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_bmw_cartier.jpg",
      taggedProduct: "Nuit d'Or",
      caption: "BMW M-Performance steering wheel interior view, driver wearing pink linen shirt & Santos de Cartier watch holding smoked red LUNORÉ flacon."
    },
    {
      id: 40,
      title: "Unconditional Magazine & Pearl Jewelry",
      category: "Bespoke Flatlays",
      filterCategory: "Bespoke Flatlays",
      image: "/images/lunore_user_magazine_pearl.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "Unconditional magazine flatlay, glass of wine, pearl drop earrings, gold hoop earrings, seashell dish & marble cap LUNORÉ flacon."
    },
    {
      id: 41,
      title: "Maison LUNORÉ Shopping Bag & Gift Suite",
      category: "Bespoke Flatlays",
      filterCategory: "Bespoke Flatlays",
      image: "/images/lunore_user_shopping_bag.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "Black LUNORÉ embossed paper shopping bag, velvet pouch, gift box & dark smoked flacon with marble cap on hotel linen."
    },
    {
      id: 42,
      title: "Car Gear Shift Duo — Blue & Pink Caps",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_car_duo_caps.jpg",
      taggedProduct: "Santal Céleste",
      caption: "Car gear shift console holding 2 LUNORÉ 50ml flacons side by side (sky-blue spherical cap & blush-pink spherical cap)."
    },
    {
      id: 43,
      title: "Soul for a Soul — CHOOSE WISELY",
      category: "Paris & London Salons",
      filterCategory: "Paris & London Salons",
      image: "/images/lunore_user_soul_cafe.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "Sun-drenched Paris outdoor cafe terrace table with Illy espresso, tortoiseshell sunglasses & wooden spherical stopper flacon."
    },
    {
      id: 44,
      title: "Mon Essential — Silver Rimowa Suite",
      category: "Bespoke Flatlays",
      filterCategory: "Bespoke Flatlays",
      image: "/images/lunore_user_rimowa_flatlay.jpg",
      taggedProduct: "Santal Céleste",
      caption: "Mon Essential. Metallic silver Rimowa cabin trolley flatlay with black marble, amber wood & white marble stopper flacons."
    },
    {
      id: 45,
      title: "Rare Nature — Black Scorpion & Volcanic Rock",
      category: "Nocturne & Dark",
      filterCategory: "Nocturne & Dark",
      image: "/images/lunore_user_scorpion.jpg",
      taggedProduct: "Ambre Nocturne",
      caption: "Black scorpion & barbed wire resting on charred volcanic rock with black marble stopper LUNORÉ flacon."
    },
    {
      id: 46,
      title: "Porsche Interior & Louis Vuitton Duffle",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_porsche_lv.jpg",
      taggedProduct: "L'Or Absolu",
      caption: "Porsche luxury leather console featuring Louis Vuitton Monogram duffle bag, Rolex chronograph watch & LUNORÉ marble flacon."
    },
    {
      id: 47,
      title: "Sculptural Wood & Amber Resin Stone",
      category: "Artisan Sculptures",
      filterCategory: "Artisan Sculptures",
      image: "/images/lunore_user_rose_wood.jpg",
      taggedProduct: "Rose Impériale",
      caption: "Blush-pink spherical stopper flacon gracefully resting on carved organic driftwood alongside a glowing amber resin stone."
    },
    {
      id: 48,
      title: "Aimé Leon Dore & AirPods Max Cashmere",
      category: "Bespoke Flatlays",
      filterCategory: "Bespoke Flatlays",
      image: "/images/lunore_user_aime_sweater.jpg",
      taggedProduct: "Santal Céleste",
      caption: "Aimé Leon Dore cap, space gray AirPods Max, UGG suede slippers, knit sweater & double LUNORÉ flacons."
    },
    {
      id: 49,
      title: "Vaporisateur Natural Spray — Burning Flame",
      category: "Nocturne & Dark",
      filterCategory: "Nocturne & Dark",
      image: "/images/lunore_user_burning_wax.jpg",
      taggedProduct: "Nuit d'Or",
      caption: "Smoked burgundy glass flacon with white melting candle wax dripping down and flame burning at the crown."
    },
    {
      id: 50,
      title: "Weekend Escape — Paris Balcony Bed",
      category: "Travel & Escapes",
      filterCategory: "Travel & Escapes",
      image: "/images/lunore_user_weekend_escape.jpg",
      taggedProduct: "Santal Céleste",
      caption: "Weekend Escape. Sky-blue spherical cap flacon on Paris balcony bed with silk scarf and leather travel tag."
    },
    {
      id: 51,
      title: "WHERE SOUL MEETS ANOTHER SOUL",
      category: "Bespoke Flatlays",
      filterCategory: "Bespoke Flatlays",
      image: "/images/lunore_user_handbag.jpg",
      taggedProduct: "Nuit d'Or",
      caption: "WHERE SOUL MEETS ANOTHER SOUL. Hand holding wooden spherical cap flacon over luxury leather handbag & Cartier bracelet."
    },
    {
      id: 52,
      title: "Vintage Car Bonnet & Paris Flowers",
      category: "Artisan Sculptures",
      filterCategory: "Artisan Sculptures",
      image: "/images/lunore_user_car_bonnet.jpg",
      taggedProduct: "Soleil Absolu",
      caption: "Vintage car bonnet flatlay with fresh artisan baguette, burgundy chrysanthemum bouquet & marble stopper flacon."
    }
  ];

  const filters = ["All", "Bespoke Flatlays", "Nocturne & Dark", "Travel & Escapes", "Artisan Sculptures", "Paris & London Salons"];

  const filteredItems = activeFilter === "All"
    ? lookbookItems
    : lookbookItems.filter(item => item.filterCategory === activeFilter);

  return (
    <section id="lookbook" className="py-32 sm:py-40 bg-[#141111] relative z-10 px-6 sm:px-12 lg:px-16 border-t border-[#B88A44]/20">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.35em] uppercase text-[#D9C2A3]">
            <Camera className="w-4 h-4 text-[#B88A44]" />
            Le Lookbook Privé LUNORÉ
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
            Visual Exhibition & Campaign Archives
          </h2>
          <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/75 leading-relaxed font-light">
            Explore our 52 curated haute-couture campaign photographs featuring Launching Soon campaign flatlays, 5-flacon luxury car console suites & diamond star pendant jewelry.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-6 font-inter text-xs">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full border transition-all ${
                  activeFilter === f
                    ? 'bg-[#B88A44] text-black font-semibold border-[#D9C2A3] shadow-lg'
                    : 'bg-[#3B2A2A]/40 text-[#D9C2A3] border-[#B88A44]/30 hover:border-[#B88A44]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.008 }}
                onClick={() => setSelectedImage(item)}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-[#B88A44]/25 hover:border-[#B88A44] transition-all shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Mask Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1717]/90 via-[#1B1717]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-[#F8F5F2]">
                  <span className="font-inter text-[10px] text-[#B88A44] uppercase tracking-widest font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-cormorant text-lg font-semibold text-white truncate">
                    {item.title}
                  </h4>
                  <span className="font-inter text-[11px] text-[#D9C2A3] flex items-center gap-1 mt-2">
                    Inspect Photo <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl glass-card rounded-2xl overflow-hidden border border-[#B88A44]/50 z-10 text-[#F8F5F2] shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2 text-white bg-black/70 rounded-full hover:bg-black border border-[#B88A44]/30"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-96 sm:h-[480px]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-7 space-y-4 bg-[#1B1717]">
                <div className="flex justify-between items-center text-xs font-inter text-[#D9C2A3]">
                  <span className="uppercase tracking-widest font-semibold text-[#B88A44]">
                    {selectedImage.category}
                  </span>
                  <span className="text-white/60">Maison LUNORÉ Exhibition</span>
                </div>

                <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-white">
                  {selectedImage.title}
                </h3>

                <p className="font-inter text-xs text-[#F8F5F2]/80 leading-relaxed font-light">
                  {selectedImage.caption}
                </p>

                {selectedImage.taggedProduct && (
                  <div className="pt-4 border-t border-[#B88A44]/20 flex items-center justify-between">
                    <span className="font-inter text-xs text-[#D9C2A3]">
                      Featured Flacon: <span className="font-semibold text-white">{selectedImage.taggedProduct}</span>
                    </span>
                    <button
                      onClick={() => {
                        const name = selectedImage.taggedProduct;
                        setSelectedImage(null);
                        if (onSelectProductByTag) onSelectProductByTag(name);
                      }}
                      className="px-5 py-2.5 bg-[#B88A44] text-black font-inter text-xs font-semibold rounded-full hover:bg-[#D9C2A3] transition-colors flex items-center gap-1.5 shadow-lg"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Shop Creation
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B88A44]/50 to-transparent" />
    </section>
  );
}
