export const BUSINESS_INFO = {
    name: "Pindi Traders",
    tagline: "Luxury Sanitaryware, Bathroom Fittings, Tiles & Water Solutions",
    brands: [
        "Hindware", "Cera", "Sona", "Essco", "Plumber", "L&K",
        "Ganga by Vectus", "Sintex", "Supreme", "Prince",
        "Nirali", "Deepali", "Orientbell", "Suzlon Tiles"
    ],
    address: "Main Rani Bazar Circle, Rani Bazar, Bikaner, Rajasthan 334001",
    phone: "+91 93767 51264",
    email: "pinditrader@gmail.com",
    instagram: "https://www.instagram.com/pinditraders_bkn/",
    maps: "https://maps.app.goo.gl/32RmGgez3pcscxp56",
    rating: 4.8,
    reviewsCount: 16,
    hours: "9:30 AM - 7:30 PM",
};

export const CATEGORY_DETAILS = {
    "sanitary": {
        name: "Sanitaryware",
        brands: ["Hindware", "Cera", "Sona"],
        slug: "sanitary"
    },
    "basins": {
        name: "Basins",
        brands: ["Hindware", "Cera"],
        slug: "basins"
    },
    "taps": {
        name: "Taps",
        brands: ["Essco", "Plumber"],
        slug: "taps"
    },
    "showers": {
        name: "Showers",
        brands: ["Hindware", "L&K", "Plumber"],
        slug: "showers"
    },
    "water-storage": {
        name: "Water Storage",
        brands: ["Ganga by Vectus", "Sintex"],
        slug: "water-storage"
    },
    "cpvc-pipes": {
        name: "CPVC Pipes & Fittings",
        brands: ["Supreme", "Prince"],
        slug: "cpvc-pipes"
    },
    "kitchen-sinks": {
        name: "Kitchen Sinks",
        brands: ["Nirali", "Deepali"],
        slug: "kitchen-sinks"
    },
    "tiles": {
        name: "Tiles",
        brands: ["Orientbell", "Suzlon Tiles"],
        slug: "tiles"
    },
    "bathtubs": {
        name: "Bathtubs",
        brands: ["Hindware", "Cera"],
        slug: "bathtubs"
    }
};

export const CATEGORIES = Object.values(CATEGORY_DETAILS).map(c => c.name);

