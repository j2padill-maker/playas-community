// ── LANGUAGE SYSTEM ── Spanish default, English toggle
// Playas de Tijuana Community Hub
// Business names, addresses, and specialties are NEVER translated.

const translations = {
  es: {
    lang_btn: '🌐 English',

    // NAV
    nav_events:     'Eventos',
    nav_kids:       'Niños',
    nav_adults:     'Adultos',
    nav_eats:       'Restaurantes',
    nav_services:   'Servicios',
    nav_realestate: 'Bienes Raíces',

    // HERO
    hero_badge: 'Tu comunidad · Your community',
    hero_sub:   'Tu centro de información para eventos, comida, bienestar, salud y todo lo que hace brillar a nuestra comunidad.',
    btn_events:      'Ver Eventos ▾',
    btn_restaurants: 'Restaurantes ▾',
    btn_services:    'Servicios ▾',
    btn_kids:        'Clases y Actividades para Niños ▾',
    btn_adults:      'Clases y Actividades para Adultos ▾',

    // DROPDOWNS
    drop_upcoming:      '📅 Próximos Eventos',
    drop_submit_event:  '➕ Enviar un Evento',
    drop_mariscos:      '🦞 Mariscos y Pescados',
    drop_carnes:        '🌮 Carnes a las Brasas y Tacos',
    drop_cafes:         '☕ Cafés y Brunch',
    drop_submit_rest:   '➕ Agregar Restaurante',
    drop_gyms:          '💪 Gimnasios',
    drop_mechanics:     '🔧 Mecánicos',
    drop_dentists:      '🦷 Dentistas',
    drop_doctors:       '🩺 Médicos',
    drop_vets:          '🐾 Veterinarios',
    drop_realestate:    '🏠 Bienes Raíces',
    drop_dance:         '💃 Clases de Baile',
    drop_martial:       '🥋 Artes Marciales',
    drop_art:           '🎨 Arte y Creatividad',
    drop_submit_kids:   '➕ Enviar Actividad',
    drop_yoga:          '🧘 Yoga y Bienestar',
    drop_music:         '🎸 Clases de Música',
    drop_surf:          '🏄 Escuela de Surf',
    drop_submit_adults: '➕ Enviar Actividad',

    // EVENTS SECTION
    sec_events_tag:   'Lo que está pasando',
    sec_events_title: 'Eventos Comunitarios',
    sec_events_desc:  'Mantente conectado con lo que pasa en el vecindario. Envía tu evento — todas las propuestas se revisan antes de publicarse.',
    submit_event_h3:  'Enviar un Evento',
    submit_event_p:   'Comparte algo que pase en el vecindario. Revisamos los envíos antes de publicarlos.',
    label_event_name: 'Nombre del Evento',
    ph_event_name:    'ej. Yoga en la Playa',
    label_date:       'Fecha',
    label_location:   'Lugar',
    ph_location:      '¿Dónde es?',
    label_category:   'Categoría',
    opt_community:    'Comunidad',
    opt_sports:       'Deportes y Fitness',
    opt_food:         'Comida y Bebidas',
    opt_kids_cat:     'Niños y Familias',
    opt_arts:         'Arte y Cultura',
    opt_other:        'Otro',
    label_desc:       'Descripción',
    ph_desc:          'Cuéntanos sobre el evento...',
    upload_p:         'Haz clic para subir una foto del evento (JPG, PNG — máx 5MB)',
    label_contact:    'Tu Nombre y Contacto',
    ph_contact:       'Nombre · correo o teléfono (no se publica)',
    btn_submit_event: 'Enviar para Revisión',
    mod_notice:       '⚠️ Todos los envíos son revisados por moderadores antes de aparecer en el sitio. ¡Gracias por mantener nuestra comunidad segura!',

    // KIDS SECTION
    sec_kids_tag:   'Para los más pequeños',
    sec_kids_title: 'Clases y Actividades para Niños',
    sec_kids_desc:  'Actividades divertidas y clases enriquecedoras para niños en Playas — desde baile hasta karate y artes creativas.',

    // Kids card tags & descriptions
    ctag_academia_de_danza_playas: 'Baile',
    ctext_academia_de_danza_playas: 'Ballet, folklórico y hip-hop para edades 4–16. Clases lun–sáb. ¡Primera clase gratis!',
    ctag_karate_kids_dojo: 'Artes Marciales',
    ctext_karate_kids_dojo: 'Karate Shotokan tradicional que construye disciplina y confianza. Niveles principiante–avanzado.',
    ctag_taller_de_arte_infantil: 'Arte y Creatividad',
    ctext_taller_de_arte_infantil: 'Pintura, cerámica y técnicas mixtas para niños de 5–12 años. Grupos pequeños, mucha creatividad.',

    // ADULTS SECTION
    sec_adults_tag:   'Para adultos',
    sec_adults_title: 'Clases y Actividades para Adultos',
    sec_adults_desc:  'Enriquece tu vida — fitness, cultura, aprendizaje y actividades sociales para adultos en Playas.',

    ctag_beach_yoga_collective: 'Bienestar',
    ctext_beach_yoga_collective: 'Sesiones matutinas en la arena. Todos los niveles. Tapetes disponibles. Respira, estírate, relájate.',
    ctag_escuela_de_m_sica_pac_fico: 'Música',
    ctext_escuela_de_m_sica_pac_fico: 'Clases de guitarra, bajo, piano y canto. Tardes entre semana y fines de semana.',
    ctag_escuela_de_surf_playas: 'Surf',
    ctext_escuela_de_surf_playas: 'Aprende a surfear o mejora tu técnica. Equipo incluido. Ideal para principiantes.',

    // RESTAURANTS SECTION
    sec_eats_tag:   'Los mejores sabores',
    sec_eats_title: 'Restaurantes',
    sec_eats_desc:  'Los mejores lugares para comer en Playas — curados por la comunidad, con menús, especialidades y fotos.',

    ctag_mariscos: 'Mariscos · Seafood',
    ctag_tacos: 'Tacos · Mexicano',
    ctag_cafe: 'Café · Brunch',
    ctext_mariscos_ensenada: 'Famosos por sus tostadas de ceviche y tacos de pescado. Vistas al mar, ambiente casual.',
    ctext_mariscos_vallarta: 'Próximamente — mariscos frescos en el corazón de Playas. Menú y detalles en breve.',
    spec_coming_soon: 'Especialidad: Próximamente',
    addr_coming_soon: 'Dirección: Próximamente',
    ctext_tacos_el_poblano: 'Asada, adobada, birria, tripas, lengua y cabeza. Tortillas hechas a mano y aguas frescas.',
    ctext_cafe_ilustre: 'Café de especialidad, tostadas con aguacate y chilaquiles con brisa marina. Perfectas mañanas de domingo.',

    // GYMS SECTION
    sec_gyms_tag:   'Mantente en forma',
    sec_gyms_title: 'Gym Rats 💪',
    sec_gyms_desc:  'Encuentra tu gimnasio ideal en Playas — desde MMA y CrossFit hasta estudios de yoga y levantamiento olímpico.',

    ctag_arena_playas_mma: 'MMA · Deportes de Combate',
    ctext_arena_playas_mma: 'Programa completo de MMA: BJJ, Muay Thai, lucha. Octágono profesional, entrenadores de élite.',
    ctag_studio_sol: 'Yoga · Pilates',
    ctext_studio_sol: 'Hot yoga, vinyasa, yin y pilates. Clases en azotea los fines de semana. Vistas al mar.',
    ctag_box_pacifico: 'CrossFit · Fuerza',
    ctext_box_pacifico: 'CrossFit comunitario. WODs diarios, levantamiento olímpico, horas de gym abierto.',

    // MECHANICS SECTION
    sec_mechanics_tag:   'Siempre en movimiento',
    sec_mechanics_title: 'Mecánicos',
    sec_mechanics_desc:  'Talleres de confianza en Playas — sus especialidades, dónde encontrarlos y lo que dicen los clientes.',

    ctag_el_tubo_tama: 'General · Eléctrico',
    ctext_el_tubo_tama: '20 años en Playas. Especialista en sistemas eléctricos, diagnóstico y vehículos japoneses/coreanos.',
    ctag_llantera_pacifico: 'Llantas · Suspensión',
    ctext_llantera_pacifico: 'Llantas, alineación, trabajo de suspensión. Servicio rápido, precios competitivos. Abierto domingos.',
    ctag_carroceria_playa: 'Hojalatería · Pintura',
    ctext_carroceria_playa: 'Hojalatería experta y pintura personalizada. Se trabaja con seguros. Presupuesto sin costo.',

    // HEALTH SECTION
    sec_health_tag:   'Tu bienestar',
    sec_health_title: 'Salud y Bienestar',
    sec_health_desc:  'Dentistas, médicos y veterinarios de confianza — aquí mismo en Playas.',
    health_h3_dentists: '🦷 Dentistas',
    health_h3_doctors:  '🩺 Médicos',
    health_h3_vets:     '🐾 Veterinarios',

    ctag_dental_playas: 'General · Cosmético',
    ctext_dental_playas: 'Clínica dental completa. Se habla inglés. Implantes, blanqueamiento, ortodoncia. Precios accesibles.',
    ctag_clinica_familiar: 'General · Medicina Familiar',
    ctext_clinica_familiar: 'Medicina preventiva, pediatría, laboratorio y urgencias. Sin cita previa.',
    ctag_vet_playas: 'Mascotas · Animales',
    ctext_vet_playas: 'Vacunas, cirugía, estética y urgencias para perros, gatos y animales pequeños.',

    // REAL ESTATE SECTION
    sec_re_tag:   'Encuentra tu lugar',
    sec_re_title: 'Bienes Raíces',
    sec_re_desc:  'Renta o compra en Playas de Tijuana. Explora los anuncios de la comunidad o publica el tuyo.',

    badge_rent_1:    'En Renta',
    listing_title_1: '2 recámaras amuebladas cerca de la playa',
    listing_desc_1:  'Departamento luminoso a 3 cuadras del malecón. Totalmente amueblado, servicios incluidos, estacionamiento disponible.',
    badge_sale_1:    'En Venta',
    listing_title_2: 'Casa con vista al mar',
    listing_desc_2:  'Impresionantes vistas al mar desde la sala y la suite principal. Terraza en azotea, cocina moderna, garaje para dos autos.',

    submit_listing_h3:  'Publicar un Anuncio',
    submit_listing_p:   'Renta o venta — publica tu propiedad gratis. Se revisa antes de publicar.',
    label_listing_type: 'Tipo de Anuncio',
    opt_for_rent:       'En Renta',
    opt_for_sale:       'En Venta',
    label_price:        'Precio (USD)',
    ph_price:           'ej. 800/mes o 150,000',
    label_bedrooms:     'Recámaras',
    ph_bedrooms:        '# de recámaras',
    label_bathrooms:    'Baños',
    ph_bathrooms:       '# de baños',
    label_address:      'Dirección / Colonia',
    ph_address:         'Dirección o zona general',
    label_prop_desc:    'Descripción',
    ph_prop_desc:       'Describe la propiedad, características, contacto...',
    upload_p_listing:   'Haz clic para subir fotos de la propiedad (JPG, PNG — hasta 10 imágenes)',
    btn_submit_listing: 'Enviar Anuncio para Revisión',
    mod_notice_listing: '⚠️ Todos los anuncios se revisan antes de publicarse. No cobramos — es un servicio comunitario gratuito.',

    // VIDEO PLACEHOLDERS
    yt_placeholder: 'Agrega un video de YouTube en el Panel de Administración',

    // FOOTER
    footer_tagline: 'Tu centro comunitario — hecho con amor para Playas.',

    // REVIEWS (class-based)
    rev_be_first:  '— ¡sé el primero!',
    rev_write_btn: '✏️ Escribir Reseña',
    rev_submit:    'Publicar Reseña',
    rev_ph_name:   'Tu nombre (opcional)',
    rev_ph_text:   'Comparte tu experiencia...',
  },

  en: {
    lang_btn: '🌐 Español',

    nav_events:     'Events',
    nav_kids:       'Kids',
    nav_adults:     'Adults',
    nav_eats:       'Eats',
    nav_services:   'Services',
    nav_realestate: 'Real Estate',

    hero_badge: 'Tu comunidad · Your community',
    hero_sub:   'Your neighborhood hub for events, food, fitness, health, and everything that makes our community shine.',
    btn_events:      'Explore Events ▾',
    btn_restaurants: 'Find Restaurants ▾',
    btn_services:    'Services ▾',
    btn_kids:        'Classes & Activities for Kids ▾',
    btn_adults:      'Classes & Activities for Adults ▾',

    drop_upcoming:      '📅 Upcoming Events',
    drop_submit_event:  '➕ Submit an Event',
    drop_mariscos:      '🦞 Mariscos & Seafood',
    drop_carnes:        '🌮 Carnes a las Brasas y Tacos',
    drop_cafes:         '☕ Cafés & Brunch',
    drop_submit_rest:   '➕ Submit a Restaurant',
    drop_gyms:          '💪 Gyms',
    drop_mechanics:     '🔧 Mechanics',
    drop_dentists:      '🦷 Dentists',
    drop_doctors:       '🩺 Doctors',
    drop_vets:          '🐾 Veterinarians',
    drop_realestate:    '🏠 Real Estate',
    drop_dance:         '💃 Dance Classes',
    drop_martial:       '🥋 Martial Arts',
    drop_art:           '🎨 Art & Creativity',
    drop_submit_kids:   '➕ Submit an Activity',
    drop_yoga:          '🧘 Yoga & Wellness',
    drop_music:         '🎸 Music Lessons',
    drop_surf:          '🏄 Surf School',
    drop_submit_adults: '➕ Submit an Activity',

    sec_events_tag:   "What's happening",
    sec_events_title: 'Community Events',
    sec_events_desc:  'Stay connected with local happenings. Submit your event below — all submissions are reviewed before publishing.',
    submit_event_h3:  'Submit an Event',
    submit_event_p:   'Share something happening in the neighborhood. We review submissions before posting.',
    label_event_name: 'Event Name',
    ph_event_name:    'e.g. Yoga on the Beach',
    label_date:       'Date',
    label_location:   'Location',
    ph_location:      'Where is it?',
    label_category:   'Category',
    opt_community:    'Community',
    opt_sports:       'Sports & Fitness',
    opt_food:         'Food & Drinks',
    opt_kids_cat:     'Kids & Families',
    opt_arts:         'Arts & Culture',
    opt_other:        'Other',
    label_desc:       'Description',
    ph_desc:          'Tell us about the event...',
    upload_p:         'Click to upload an event photo (JPG, PNG — max 5MB)',
    label_contact:    'Your Name & Contact',
    ph_contact:       'Name · email or phone (not published)',
    btn_submit_event: 'Submit for Review',
    mod_notice:       '⚠️ All submissions are reviewed by moderators before appearing on the site. Thank you for keeping our community safe!',

    sec_kids_tag:   'For the little ones',
    sec_kids_title: 'Classes & Activities for Kids',
    sec_kids_desc:  'Fun things to do and enriching classes for children in Playas — from dance to karate to creative arts.',

    ctag_academia_de_danza_playas: 'Dance',
    ctext_academia_de_danza_playas: 'Ballet, folklórico, and hip-hop for ages 4–16. Classes Mon–Sat. First class free!',
    ctag_karate_kids_dojo: 'Martial Arts',
    ctext_karate_kids_dojo: 'Traditional Shotokan karate building discipline and confidence. Beginner–advanced levels.',
    ctag_taller_de_arte_infantil: 'Art & Creativity',
    ctext_taller_de_arte_infantil: 'Painting, ceramics, and mixed media for kids 5–12. Small groups, big creativity.',

    sec_adults_tag:   'For Adults',
    sec_adults_title: 'Classes & Activities for Adults',
    sec_adults_desc:  'Enrich your life — fitness, culture, learning, and social activities for adults in Playas.',

    ctag_beach_yoga_collective: 'Wellness',
    ctext_beach_yoga_collective: 'Morning sessions on the sand. All levels. Mats provided. Breathe, stretch, unwind.',
    ctag_escuela_de_m_sica_pac_fico: 'Music',
    ctext_escuela_de_m_sica_pac_fico: 'Guitar, bass, piano, and singing lessons. Weekday evenings and weekends.',
    ctag_escuela_de_surf_playas: 'Surf',
    ctext_escuela_de_surf_playas: 'Learn to surf or improve your skills. Equipment included. Beginner-friendly.',

    sec_eats_tag:   'Favorite flavors',
    sec_eats_title: 'Restaurants',
    sec_eats_desc:  'The best places to eat in Playas — curated by the community, featuring menus, specialties, and photos.',

    ctag_mariscos: 'Mariscos · Seafood',
    ctag_tacos: 'Tacos · Mexican',
    ctag_cafe: 'Café · Brunch',
    ctext_mariscos_ensenada: 'Famous for their ceviche tostadas and fish tacos. Ocean views, casual vibe.',
    ctext_mariscos_vallarta: 'Coming soon — fresh seafood in the heart of Playas. Menu and details being added shortly.',
    spec_coming_soon: 'Specialty: Coming soon',
    addr_coming_soon: 'Address: Coming soon',
    ctext_tacos_el_poblano: 'Asada, adobada, birria, tripas, lengua y cabeza. Fresh handmade tortillas and aguas frescas.',
    ctext_cafe_ilustre: 'Artisan coffee, avocado toast, and chilaquiles with a sea breeze. Perfect Sunday mornings.',

    sec_gyms_tag:   'Stay fit',
    sec_gyms_title: 'Gym Rats 💪',
    sec_gyms_desc:  'Find your perfect gym in Playas — from MMA and CrossFit to yoga studios and Olympic lifting.',

    ctag_arena_playas_mma: 'MMA · Combat Sports',
    ctext_arena_playas_mma: 'Full MMA program: BJJ, Muay Thai, wrestling. Professional octagon, pro coaches.',
    ctag_studio_sol: 'Yoga · Pilates',
    ctext_studio_sol: 'Hot yoga, vinyasa, yin, and pilates. Rooftop classes on weekends. Ocean views.',
    ctag_box_pacifico: 'CrossFit · Strength',
    ctext_box_pacifico: 'Community-driven CrossFit box. Daily WODs, Olympic lifting, open gym hours.',

    sec_mechanics_tag:   'Keep rolling',
    sec_mechanics_title: 'Mechanics',
    sec_mechanics_desc:  'Trusted shops in Playas — what they specialize in, where to find them, and what others say.',

    ctag_el_tubo_tama: 'General · Electrical',
    ctext_el_tubo_tama: '20 years in Playas. Specializes in electrical systems, diagnostics, and Japanese/Korean vehicles.',
    ctag_llantera_pacifico: 'Tires · Suspension',
    ctext_llantera_pacifico: 'Tires, alignment, suspension work. Fast service, competitive prices. Open Sundays.',
    ctag_carroceria_playa: 'Body Shop · Paint',
    ctext_carroceria_playa: 'Expert body work and custom paint. Insurance repairs accepted. Free estimates.',

    sec_health_tag:   'Your wellbeing',
    sec_health_title: 'Health & Wellness',
    sec_health_desc:  'Dentists, doctors, and veterinarians you can trust — right here in Playas.',
    health_h3_dentists: '🦷 Dentists',
    health_h3_doctors:  '🩺 Doctors',
    health_h3_vets:     '🐾 Veterinarians',

    ctag_dental_playas: 'General · Cosmetic',
    ctext_dental_playas: 'Full-service dental clinic. English spoken. Implants, whitening, orthodontics. Affordable rates.',
    ctag_clinica_familiar: 'General · Family Medicine',
    ctext_clinica_familiar: 'Preventive care, pediatrics, lab services, and urgent care. Walk-ins welcome.',
    ctag_vet_playas: 'Pets · Animals',
    ctext_vet_playas: 'Vaccines, surgery, grooming, and emergency care for dogs, cats, and small animals.',

    sec_re_tag:   'Find your place',
    sec_re_title: 'Real Estate',
    sec_re_desc:  'Rent or buy in Playas de Tijuana. Browse community listings or submit your own.',

    badge_rent_1:    'For Rent',
    listing_title_1: 'Furnished 2BR near beach',
    listing_desc_1:  'Bright apartment 3 blocks from the malecón. Fully furnished, utilities included, parking available.',
    badge_sale_1:    'For Sale',
    listing_title_2: 'Casa with ocean view',
    listing_desc_2:  'Stunning ocean views from the living room and master suite. Rooftop terrace, modern kitchen, two-car garage.',

    submit_listing_h3:  'Submit a Listing',
    submit_listing_p:   'Rent or sale — post your property for free. Reviewed before publishing.',
    label_listing_type: 'Listing Type',
    opt_for_rent:       'For Rent',
    opt_for_sale:       'For Sale',
    label_price:        'Price (USD)',
    ph_price:           'e.g. 800/mo or 150,000',
    label_bedrooms:     'Bedrooms',
    ph_bedrooms:        '# of bedrooms',
    label_bathrooms:    'Bathrooms',
    ph_bathrooms:       '# of bathrooms',
    label_address:      'Address / Neighborhood',
    ph_address:         'Street address or general area',
    label_prop_desc:    'Description',
    ph_prop_desc:       'Describe the property, features, contact info...',
    upload_p_listing:   'Click to upload property photos (JPG, PNG — up to 10 images)',
    btn_submit_listing: 'Submit Listing for Review',
    mod_notice_listing: '⚠️ All listings are reviewed before publishing. We do not charge for listings — this is a free community service.',

    yt_placeholder: 'Add a YouTube video via the Admin Panel',

    footer_tagline: 'Your neighborhood community hub — built with love for Playas.',

    rev_be_first:  '— be the first!',
    rev_write_btn: '✏️ Write a Review',
    rev_submit:    'Post Review',
    rev_ph_name:   'Your name (optional)',
    rev_ph_text:   'Share your experience...',
  }
};

// ── ID map: translation key → element id ──
const idMap = {
  lang_btn:       'lang-toggle-btn',
  nav_events:     'nav-link-events',
  nav_kids:       'nav-link-kids',
  nav_adults:     'nav-link-adults',
  nav_eats:       'nav-link-eats',
  nav_services:   'nav-link-services',
  nav_realestate: 'nav-link-realestate',
  hero_badge:     'hero-badge',
  hero_sub:       'hero-sub',
  btn_events:      'events-btn',
  btn_restaurants: 'restaurants-btn',
  btn_services:    'services-btn',
  btn_kids:        'kids-btn',
  btn_adults:      'adults-btn',
  drop_upcoming:      'drop-upcoming',
  drop_submit_event:  'drop-submit-event',
  drop_mariscos:      'drop-mariscos',
  drop_carnes:        'drop-carnes',
  drop_cafes:         'drop-cafes',
  drop_submit_rest:   'drop-submit-rest',
  drop_gyms:          'drop-gyms',
  drop_mechanics:     'drop-mechanics',
  drop_dentists:      'drop-dentists',
  drop_doctors:       'drop-doctors',
  drop_vets:          'drop-vets',
  drop_realestate:    'drop-realestate',
  drop_dance:         'drop-dance',
  drop_martial:       'drop-martial',
  drop_art:           'drop-art',
  drop_submit_kids:   'drop-submit-kids',
  drop_yoga:          'drop-yoga',
  drop_music:         'drop-music',
  drop_surf:          'drop-surf',
  drop_submit_adults: 'drop-submit-adults',
  sec_events_tag:   'sec-events-tag',
  sec_events_title: 'sec-events-title',
  sec_events_desc:  'sec-events-desc',
  submit_event_h3:  'submit-event-h3',
  submit_event_p:   'submit-event-p',
  label_event_name: 'label-event-name',
  label_date:       'label-date',
  label_location:   'label-location',
  label_category:   'label-category',
  opt_community:    'opt-community',
  opt_sports:       'opt-sports',
  opt_food:         'opt-food',
  opt_kids_cat:     'opt-kids',
  opt_arts:         'opt-arts',
  opt_other:        'opt-other',
  label_desc:       'label-desc',
  upload_p:         'upload-p',
  label_contact:    'label-contact',
  btn_submit_event: 'btn-submit-event',
  mod_notice:       'mod-notice',
  sec_kids_tag:   'sec-kids-tag',
  sec_kids_title: 'sec-kids-title',
  sec_kids_desc:  'sec-kids-desc',
  ctag_academia_de_danza_playas:  'ctag-academia_de_danza_playas',
  ctext_academia_de_danza_playas: 'ctext-academia_de_danza_playas',
  ctag_karate_kids_dojo:  'ctag-karate_kids_dojo',
  ctext_karate_kids_dojo: 'ctext-karate_kids_dojo',
  ctag_taller_de_arte_infantil:  'ctag-taller_de_arte_infantil',
  ctext_taller_de_arte_infantil: 'ctext-taller_de_arte_infantil',
  sec_adults_tag:   'sec-adults-tag',
  sec_adults_title: 'sec-adults-title',
  sec_adults_desc:  'sec-adults-desc',
  ctag_beach_yoga_collective:  'ctag-beach_yoga_collective',
  ctext_beach_yoga_collective: 'ctext-beach_yoga_collective',
  ctag_escuela_de_m_sica_pac_fico:  'ctag-escuela_de_m_sica_pac_fico',
  ctext_escuela_de_m_sica_pac_fico: 'ctext-escuela_de_m_sica_pac_fico',
  ctag_escuela_de_surf_playas:  'ctag-escuela_de_surf_playas',
  ctext_escuela_de_surf_playas: 'ctext-escuela_de_surf_playas',
  sec_eats_tag:   'sec-eats-tag',
  sec_eats_title: 'sec-eats-title',
  sec_eats_desc:  'sec-eats-desc',
  ctag_mariscos: 'ctag-mariscos',
  ctag_tacos:    'ctag-tacos',
  ctag_cafe:     'ctag-cafe',
  ctext_mariscos_ensenada: 'ctext-mariscos_ensenada',
  ctext_mariscos_vallarta: 'ctext-mariscos_vallarta',
  spec_coming_soon: 'spec-coming-soon',
  addr_coming_soon: 'addr-coming-soon',
  ctext_tacos_el_poblano: 'ctext-tacos_el_poblano',
  ctext_cafe_ilustre:     'ctext-cafe_ilustre',
  sec_gyms_tag:   'sec-gyms-tag',
  sec_gyms_title: 'sec-gyms-title',
  sec_gyms_desc:  'sec-gyms-desc',
  ctag_arena_playas_mma:  'ctag-arena_playas_mma',
  ctext_arena_playas_mma: 'ctext-arena_playas_mma',
  ctag_studio_sol:  'ctag-studio_sol',
  ctext_studio_sol: 'ctext-studio_sol',
  ctag_box_pacifico:  'ctag-box_pacifico',
  ctext_box_pacifico: 'ctext-box_pacifico',
  sec_mechanics_tag:   'sec-mechanics-tag',
  sec_mechanics_title: 'sec-mechanics-title',
  sec_mechanics_desc:  'sec-mechanics-desc',
  ctag_el_tubo_tama:  'ctag-el_tubo_tama',
  ctext_el_tubo_tama: 'ctext-el_tubo_tama',
  ctag_llantera_pacifico:  'ctag-llantera_pacifico',
  ctext_llantera_pacifico: 'ctext-llantera_pacifico',
  ctag_carroceria_playa:  'ctag-carroceria_playa',
  ctext_carroceria_playa: 'ctext-carroceria_playa',
  sec_health_tag:   'sec-health-tag',
  sec_health_title: 'sec-health-title',
  sec_health_desc:  'sec-health-desc',
  health_h3_dentists: 'health-h3-dentists',
  health_h3_doctors:  'health-h3-doctors',
  health_h3_vets:     'health-h3-vets',
  ctag_dental_playas:  'ctag-dental_playas',
  ctext_dental_playas: 'ctext-dental_playas',
  ctag_clinica_familiar:  'ctag-clinica_familiar',
  ctext_clinica_familiar: 'ctext-clinica_familiar',
  ctag_vet_playas:  'ctag-vet_playas',
  ctext_vet_playas: 'ctext-vet_playas',
  sec_re_tag:   'sec-re-tag',
  sec_re_title: 'sec-re-title',
  sec_re_desc:  'sec-re-desc',
  badge_rent_1:    'badge-rent-1',
  listing_title_1: 'listing-title-1',
  listing_desc_1:  'listing-desc-1',
  badge_sale_1:    'badge-sale-1',
  listing_title_2: 'listing-title-2',
  listing_desc_2:  'listing-desc-2',
  submit_listing_h3:  'submit-listing-h3',
  submit_listing_p:   'submit-listing-p',
  label_listing_type: 'label-listing-type',
  opt_for_rent:       'opt-for-rent',
  opt_for_sale:       'opt-for-sale',
  label_price:        'label-price',
  label_bedrooms:     'label-bedrooms',
  label_bathrooms:    'label-bathrooms',
  label_address:      'label-address',
  label_prop_desc:    'label-prop-desc',
  upload_p_listing:   'upload-p-listing',
  btn_submit_listing: 'btn-submit-listing',
  mod_notice_listing: 'mod-notice-listing',
  footer_tagline: 'footer-tagline',
};

// Placeholder (attr) map: translation key → element id
const placeholderMap = {
  ph_event_name: 'ph-event-name',
  ph_location:   'ph-location',
  ph_desc:       'ph-desc',
  ph_contact:    'ph-contact',
  ph_price:      'ph-price',
  ph_bedrooms:   'ph-bedrooms',
  ph_bathrooms:  'ph-bathrooms',
  ph_address:    'ph-address',
  ph_prop_desc:  'ph-prop-desc',
};

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Set all text content by ID
  for (const [key, elId] of Object.entries(idMap)) {
    const el = document.getElementById(elId);
    if (el && t[key] !== undefined) el.textContent = t[key];
  }

  // Set placeholder attributes
  for (const [key, elId] of Object.entries(placeholderMap)) {
    const el = document.getElementById(elId);
    if (el && t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  }

  // Class-based: review buttons, "be the first", placeholders
  document.querySelectorAll('.write-review-btn').forEach(btn => {
    btn.textContent = t.rev_write_btn;
  });
  document.querySelectorAll('.review-submit-btn').forEach(btn => {
    btn.textContent = t.rev_submit;
  });
  document.querySelectorAll('.review-name-input').forEach(el => {
    el.setAttribute('placeholder', t.rev_ph_name);
  });
  document.querySelectorAll('.review-input').forEach(el => {
    el.setAttribute('placeholder', t.rev_ph_text);
  });
  document.querySelectorAll('[id^="rev-count-"]').forEach(el => {
    // Only update if it still shows the default text (not actual count)
    if (el.textContent.includes('be the first') || el.textContent.includes('sé el primero')) {
      el.textContent = t.rev_be_first;
    }
  });

  // YouTube placeholder text
  document.querySelectorAll('.yt-placeholder-text').forEach(el => {
    el.textContent = t.yt_placeholder;
  });

  // Save preference & update html lang
  localStorage.setItem('preferredLang', lang);
  document.documentElement.lang = lang;
}

function toggleLanguage() {
  const current = localStorage.getItem('preferredLang') || 'es';
  applyLanguage(current === 'es' ? 'en' : 'es');
}

// On load: default Spanish unless user previously chose English
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(localStorage.getItem('preferredLang') || 'es');
});
