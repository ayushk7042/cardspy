// import Card from "../models/Card.js";

// export const getCards = async (req, res) => {
//   try {
//     const cards = await Card.find().populate("category");
//     res.json(cards);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch cards" });
//   }
// };


// export const createCard = async (req, res) => {
//   try {
//     console.log("🧾 Incoming card data:", req.body);
//     console.log("📸 Cloudinary upload info:", req.file);

//     const { title, bank, category, fees, benefits, applyLink, description } = req.body;

//     if (!title || !bank || !category) {
//       return res.status(400).json({ message: "Title, bank, and category are required fields." });
//     }

//     // Use uploaded file from Cloudinary if present
//     const image = req.file?.path || null;

//     const card = new Card({
//       title,
//       bank,
//       category,
//       fees,
//       benefits: benefits ? benefits.split(",").map(b => b.trim()) : [],
//       applyLink,
//       description,
//       image,
//     });

//     await card.save();
//     console.log("✅ Card created successfully:", card);
//     res.status(201).json(card);

//   } catch (error) {
//     console.error("❌ Error creating card:", error);
//     res.status(500).json({
//       message: "Failed to create card",
//       error: error.message,
//       stack: error.stack,
//     });
//   }
// };

// export const getCardById = async (req, res) => {
//   try {
//     const card = await Card.findById(req.params.id).populate("category");
//     if (!card) {
//       return res.status(404).json({ message: "Card not found" });
//     }
//     res.json(card);
//   } catch (error) {
//     console.error("Error fetching card:", error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };




import Card from "../models/Card.js";

// Get all cards
export const getCards = async (req, res) => {
  try {
    const cards = await Card.find().populate("category");
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cards", error: error.message });
  }
};

// Get single card by ID
export const getCardById = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id).populate("category");
    if (!card) return res.status(404).json({ message: "Card not found" });
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Create card
export const createCard = async (req, res) => {
  try {
    const { 
      title, 
      bank, 
      category, 
      description, 
      applyLink, 
      rewards, 
      benefits, 
      offers, 
      interestRate 
    } = req.body;

    if (!title || !bank || !category) {
      return res.status(400).json({ message: "Title, bank, and category are required." });
    }

    const image = req.file?.path || null;

    const card = new Card({
      title,
      bank,
      category,
      description,
      applyLink,
      rewards: rewards ? rewards.split(",").map(r => r.trim()) : [],
      benefits: benefits ? benefits.split(",").map(b => b.trim()) : [],
      offers: offers ? offers.split(",").map(o => o.trim()) : [],
      interestRate,
      image,
    });

    await card.save();
    res.status(201).json(card);

  } catch (error) {
    res.status(500).json({ message: "Failed to create card", error: error.message });
  }
};

// Update card
export const updateCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) return res.status(404).json({ message: "Card not found" });

    const { 
      title, 
      bank, 
      category, 
      description, 
      applyLink, 
      rewards, 
      benefits, 
      offers, 
      interestRate 
    } = req.body;

    card.title = title || card.title;
    card.bank = bank || card.bank;
    card.category = category || card.category;
    card.description = description || card.description;
    card.applyLink = applyLink || card.applyLink;
    card.rewards = rewards ? rewards.split(",").map(r => r.trim()) : card.rewards;
    card.benefits = benefits ? benefits.split(",").map(b => b.trim()) : card.benefits;
    card.offers = offers ? offers.split(",").map(o => o.trim()) : card.offers;
    card.interestRate = interestRate || card.interestRate;
    card.image = req.file?.path || card.image;

    await card.save();
    res.json(card);

  } catch (error) {
    res.status(500).json({ message: "Failed to update card", error: error.message });
  }
};

// Delete card
export const deleteCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) return res.status(404).json({ message: "Card not found" });

    await card.remove();
    res.json({ message: "Card deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Failed to delete card", error: error.message });
  }
};
