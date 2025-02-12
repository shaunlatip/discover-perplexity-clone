export type Category = 'Tech & Science' | 'Finance' | 'Arts & Culture' | 'Sports' | 'Entertainment'

export interface Card {
  title: string
  description: string
  author: {
    name: string
    avatarUrl: string
  }
  imageUrl: string
  category: Category
}

export const CARDS: Card[] = [
  // Tech & Science
  {
    title: "Quantum Computing Breakthrough",
    description: "Scientists achieve room-temperature quantum supremacy, marking a pivotal moment in computing history...",
    author: { name: "quantumleap", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=quantumleap" },
    imageUrl: "https://picsum.photos/seed/quantum/800/400",
    category: "Tech & Science"
  },
  {
    title: "Mars Colony Construction Begins",
    description: "SpaceX and NASA break ground on the first permanent human settlement on Mars, scheduled for completion in 2030...",
    author: { name: "spacepioneer", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=spacepioneer" },
    imageUrl: "https://picsum.photos/seed/mars/800/400",
    category: "Tech & Science"
  },
  {
    title: "Flying Cars Finally Take Off",
    description: "Japanese startup unveils first commercially viable flying car, with pre-orders starting next month...",
    author: { name: "skydriver", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=skydriver" },
    imageUrl: "https://picsum.photos/seed/flyingcar/800/400",
    category: "Tech & Science"
  },
  {
    title: "Brain-Computer Interface Goes Mainstream",
    description: "Neuralink receives FDA approval for human trials of their next-gen neural implant technology...",
    author: { name: "neurotech", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=neurotech" },
    imageUrl: "https://picsum.photos/seed/brain/800/400",
    category: "Tech & Science"
  },
  {
    title: "Self-Healing Materials Revolution",
    description: "New nanomaterial technology enables phones and devices to automatically repair scratches and cracks...",
    author: { name: "materialscience", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=materialscience" },
    imageUrl: "https://picsum.photos/seed/selfheal/800/400",
    category: "Tech & Science"
  },
  {
    title: "Artificial Photosynthesis Breakthrough",
    description: "Scientists develop efficient method to convert CO2 into oxygen and clean fuel using artificial leaves...",
    author: { name: "cleantech", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=cleantech" },
    imageUrl: "https://picsum.photos/seed/photosynthesis/800/400",
    category: "Tech & Science"
  },
  {
    title: "Underwater Cities Take Shape",
    description: "First subsea residential complex begins construction off the coast of Dubai, promising new frontier in urban living...",
    author: { name: "oceanarch", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=oceanarch" },
    imageUrl: "https://picsum.photos/seed/underwater/800/400",
    category: "Tech & Science"
  },
  {
    title: "Memory Enhancement Chip Success",
    description: "Clinical trials show 300% improvement in recall abilities with new neural memory enhancement implant...",
    author: { name: "braintech", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=braintech" },
    imageUrl: "https://picsum.photos/seed/memory/800/400",
    category: "Tech & Science"
  },
  {
    title: "Teleportation Breakthrough",
    description: "Scientists successfully teleport complex organic molecules, paving way for quantum transportation...",
    author: { name: "quantumport", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=quantumport" },
    imageUrl: "https://picsum.photos/seed/teleport/800/400",
    category: "Tech & Science"
  },
  {
    title: "Weather Control System Success",
    description: "First localized weather modification system demonstrates successful rain prevention over Dubai...",
    author: { name: "weathertech", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=weathertech" },
    imageUrl: "https://picsum.photos/seed/weather/800/400",
    category: "Tech & Science"
  },
  {
    title: "Robotic Evolution Milestone",
    description: "Self-improving AI creates next generation of robots without human intervention...",
    author: { name: "robotics", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=robotics" },
    imageUrl: "https://picsum.photos/seed/robots/800/400",
    category: "Tech & Science"
  },

  // Finance
  {
    title: "Cryptocurrency Revolution in Banking",
    description: "Major banks adopt blockchain technology for instant, zero-fee international transfers...",
    author: { name: "cryptowhiz", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=cryptowhiz" },
    imageUrl: "https://picsum.photos/seed/crypto/800/400",
    category: "Finance"
  },
  {
    title: "AI Trading Algorithms Surge",
    description: "New generation of AI-powered trading bots outperform human traders by 300% in annual returns...",
    author: { name: "aitrader", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=aitrader" },
    imageUrl: "https://picsum.photos/seed/trading/800/400",
    category: "Finance"
  },
  {
    title: "Universal Basic Income Experiment Success",
    description: "Nordic countries report positive results from their 5-year UBI trial, with surprising economic benefits...",
    author: { name: "econofuture", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=econofuture" },
    imageUrl: "https://picsum.photos/seed/ubi/800/400",
    category: "Finance"
  },
  {
    title: "Quantum Encryption Banking",
    description: "Banks implement quantum-safe security protocols to protect against future cyber threats...",
    author: { name: "quantumbank", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=quantumbank" },
    imageUrl: "https://picsum.photos/seed/quantumbank/800/400",
    category: "Finance"
  },
  {
    title: "Space Mining Stocks Soar",
    description: "Asteroid mining company debuts on NYSE, becomes most valuable space venture overnight...",
    author: { name: "spaceminer", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=spaceminer" },
    imageUrl: "https://picsum.photos/seed/asteroidmine/800/400",
    category: "Finance"
  },
  {
    title: "DNA-Based Credit Scoring",
    description: "Controversial new credit system uses genetic markers to predict financial responsibility...",
    author: { name: "futurebank", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=futurebank" },
    imageUrl: "https://picsum.photos/seed/dnacredit/800/400",
    category: "Finance"
  },
  {
    title: "Global Carbon Credit Market Explodes",
    description: "Carbon trading becomes world's most active commodity market as climate regulations tighten...",
    author: { name: "greenfinance", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=greenfinance" },
    imageUrl: "https://picsum.photos/seed/carbon/800/400",
    category: "Finance"
  },
  {
    title: "Mind-Based Payment System",
    description: "New payment technology authenticates transactions through unique brainwave patterns...",
    author: { name: "mindpay", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=mindpay" },
    imageUrl: "https://picsum.photos/seed/mindpay/800/400",
    category: "Finance"
  },
  {
    title: "AI Central Bank Governor",
    description: "Singapore appoints AI system as assistant central bank governor, marking historic first...",
    author: { name: "aibank", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=aibank" },
    imageUrl: "https://picsum.photos/seed/aibank/800/400",
    category: "Finance"
  },
  {
    title: "Time-Based Currency Launch",
    description: "New economic system using time as currency gains traction in major European cities...",
    author: { name: "timemoney", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=timemoney" },
    imageUrl: "https://picsum.photos/seed/timecoin/800/400",
    category: "Finance"
  },

  // Arts & Culture
  {
    title: "Virtual Reality Art Galleries Boom",
    description: "Digital art spaces attract millions as collectors embrace VR exhibitions and NFT masterpieces...",
    author: { name: "artfuture", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=artfuture" },
    imageUrl: "https://picsum.photos/seed/vrart/800/400",
    category: "Arts & Culture"
  },
  {
    title: "AI Symphony Tops Classical Charts",
    description: "First AI-composed symphony performed by London Philharmonic receives standing ovation...",
    author: { name: "aicomposer", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=aicomposer" },
    imageUrl: "https://picsum.photos/seed/symphony/800/400",
    category: "Arts & Culture"
  },
  {
    title: "Holographic Museum Tours Launch",
    description: "Louvre partners with tech giant to offer interactive holographic museum experiences from home...",
    author: { name: "museumtech", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=museumtech" },
    imageUrl: "https://picsum.photos/seed/museum/800/400",
    category: "Arts & Culture"
  },
  {
    title: "Dream-to-Canvas AI Artist",
    description: "New neural interface allows artists to paint directly from their dreams and imagination...",
    author: { name: "dreamart", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=dreamart" },
    imageUrl: "https://picsum.photos/seed/dreamcanvas/800/400",
    category: "Arts & Culture"
  },
  {
    title: "Time-Travel Tourism Exhibition",
    description: "Historical reenactments reach new level with full-sensory VR experiences of ancient civilizations...",
    author: { name: "timetravel", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=timetravel" },
    imageUrl: "https://picsum.photos/seed/timetravel/800/400",
    category: "Arts & Culture"
  },
  {
    title: "Emotion-Reactive Architecture",
    description: "Smart buildings that change color and shape based on occupants' collective mood debut in Tokyo...",
    author: { name: "smartarch", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=smartarch" },
    imageUrl: "https://picsum.photos/seed/emotive/800/400",
    category: "Arts & Culture"
  },
  {
    title: "4D Cinema Revolution",
    description: "New movie format allows audiences to experience full sensory immersion including thoughts and emotions...",
    author: { name: "cinema4d", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=cinema4d" },
    imageUrl: "https://picsum.photos/seed/4dmovie/800/400",
    category: "Arts & Culture"
  },
  {
    title: "Memory Museums Open",
    description: "Revolutionary museums let visitors experience historical events through shared memories...",
    author: { name: "memoryart", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=memoryart" },
    imageUrl: "https://picsum.photos/seed/memmuseum/800/400",
    category: "Arts & Culture"
  },
  {
    title: "Living Architecture Movement",
    description: "Bioengineered buildings that grow and adapt to environmental changes become architectural trend...",
    author: { name: "bioarch", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=bioarch" },
    imageUrl: "https://picsum.photos/seed/livearch/800/400",
    category: "Arts & Culture"
  },

  // Sports
  {
    title: "Bionic Athletes Set New Records",
    description: "Paralympic games introduce new category for athletes with advanced prosthetics as records shatter...",
    author: { name: "sportsfuture", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=sportsfuture" },
    imageUrl: "https://picsum.photos/seed/bionics/800/400",
    category: "Sports"
  },
  {
    title: "Zero-Gravity Olympics Announced",
    description: "IOC reveals plans for first-ever space-based Olympic events in collaboration with space agencies...",
    author: { name: "spaceolympian", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=spaceolympian" },
    imageUrl: "https://picsum.photos/seed/spacesports/800/400",
    category: "Sports"
  },
  {
    title: "Virtual Reality Sports League Launches",
    description: "Professional gamers and athletes compete in hybrid physical-virtual sporting events...",
    author: { name: "vrsports", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=vrsports" },
    imageUrl: "https://picsum.photos/seed/vrsport/800/400",
    category: "Sports"
  },
  {
    title: "Neural-Enhanced Training",
    description: "Athletes achieve perfect form through direct neural feedback training systems...",
    author: { name: "neuralsport", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=neuralsport" },
    imageUrl: "https://picsum.photos/seed/neural/800/400",
    category: "Sports"
  },
  {
    title: "Underwater Marathon Success",
    description: "First deep-sea marathon completed using new underwater breathing technology...",
    author: { name: "aquasport", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=aquasport" },
    imageUrl: "https://picsum.photos/seed/underwaterrun/800/400",
    category: "Sports"
  },
  {
    title: "Anti-Gravity Skateboarding League",
    description: "Magnetic field technology enables extreme sports to defy gravity in controlled environments...",
    author: { name: "hoverskate", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=hoverskate" },
    imageUrl: "https://picsum.photos/seed/antigrav/800/400",
    category: "Sports"
  },
  {
    title: "Telekinetic Sports League",
    description: "Mind-controlled sports competition becomes newest Olympic category for 2036...",
    author: { name: "mindsport", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=mindsport" },
    imageUrl: "https://picsum.photos/seed/telekinetic/800/400",
    category: "Sports"
  },
  {
    title: "Holographic Team Players",
    description: "Professional sports teams integrate AI hologram players in mixed-reality matches...",
    author: { name: "holosports", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=holosports" },
    imageUrl: "https://picsum.photos/seed/holoteam/800/400",
    category: "Sports"
  },
  {
    title: "Climate-Adaptive Olympics",
    description: "2040 Olympics to feature new category for sports in extreme environmental conditions...",
    author: { name: "futuresport", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=futuresport" },
    imageUrl: "https://picsum.photos/seed/climatesports/800/400",
    category: "Sports"
  },

  // Entertainment
  {
    title: "AI Actors Win Film Awards",
    description: "Groundbreaking movie featuring AI-generated lead performers receives critical acclaim at Cannes...",
    author: { name: "moviebuff", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=moviebuff" },
    imageUrl: "https://picsum.photos/seed/aimedia/800/400",
    category: "Entertainment"
  },
  {
    title: "Holographic Concerts Go Global",
    description: "Deceased music legends return to stage through advanced holographic technology, selling out worldwide...",
    author: { name: "musictech", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=musictech" },
    imageUrl: "https://picsum.photos/seed/holoconcert/800/400",
    category: "Entertainment"
  },
  {
    title: "Mind-Reading Game Console Released",
    description: "Nintendo's new gaming system controlled purely by thought patterns revolutionizes gaming industry...",
    author: { name: "gamerguru", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=gamerguru" },
    imageUrl: "https://picsum.photos/seed/mindgame/800/400",
    category: "Entertainment"
  },
  {
    title: "Dream Streaming Service Launches",
    description: "New platform allows subscribers to share and watch recorded dreams as entertainment...",
    author: { name: "dreamstream", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=dreamstream" },
    imageUrl: "https://picsum.photos/seed/dreams/800/400",
    category: "Entertainment"
  },
  {
    title: "Taste-O-Vision Finally Real",
    description: "Revolutionary TV technology lets viewers taste and smell what they're watching...",
    author: { name: "sensemedia", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=sensemedia" },
    imageUrl: "https://picsum.photos/seed/tastevision/800/400",
    category: "Entertainment"
  },
  {
    title: "AI Theme Park Opens",
    description: "Disney unveils first fully AI-operated theme park with personalized experiences for each visitor...",
    author: { name: "themepark", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=themepark" },
    imageUrl: "https://picsum.photos/seed/aipark/800/400",
    category: "Entertainment"
  },
  {
    title: "Memory Entertainment Network",
    description: "New streaming service offers direct-to-brain entertainment experiences...",
    author: { name: "brainflix", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=brainflix" },
    imageUrl: "https://picsum.photos/seed/memstream/800/400",
    category: "Entertainment"
  },
  {
    title: "AI Comedian Tops Charts",
    description: "Artificial Intelligence stand-up comedian sells out virtual world tour...",
    author: { name: "aihumor", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=aihumor" },
    imageUrl: "https://picsum.photos/seed/aicomedy/800/400",
    category: "Entertainment"
  },
  {
    title: "Quantum Reality Shows",
    description: "Television enters new era with shows filmed across multiple parallel universes...",
    author: { name: "quantumtv", avatarUrl: "https://api.dicebear.com/7.x/bottts/png?seed=quantumtv" },
    imageUrl: "https://picsum.photos/seed/quantumtv/800/400",
    category: "Entertainment"
  }
] 