export const business = {
  brandName: "Fruit Vault",
  legalName: "TODO_LEGAL_NAME",
  tagline: "Real fruits. Pure goodness. All year round.",
  shortDescription: "Premium freeze-dried and dehydrated fruits and vegetables for homes, cafes, restaurants and retailers.",
  foundedYear: 2026,
  website: "https://fruitvault.netlify.app",
  contact: {
    phoneDisplay: "TODO_PHONE_DISPLAY",
    phoneTel: "TODO_PHONE_E164",
    whatsappNumber: "TODO_WHATSAPP_DIGITS_ONLY",
    whatsappDefaultMessage: "Hello Fruit Vault team, I would like to enquire about your products.",
    email: "TODO_EMAIL"
  },
  address: {
    line1: "TODO_ADDRESS_LINE",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pincode: "TODO_PINCODE"
  },
  hours: "TODO_BUSINESS_HOURS",
  responseTime: "We reply within 24 hours",
  social: {
    instagram: "TODO_INSTAGRAM_URL",
    facebook: "TODO_FACEBOOK_URL",
    linkedin: "TODO_LINKEDIN_URL"
  },
  compliance: {
    fssai: "TODO_FSSAI_NUMBER",
    gst: "TODO_GST_NUMBER"
  },
  serviceAreas: ["TODO_AREA_1", "TODO_AREA_2"],
  customers: ["Homes", "Cafes", "Restaurants", "Retailers"]
};

export const whatsappLink = (text) =>
  `https://wa.me/${business.contact.whatsappNumber}?text=${encodeURIComponent(
    text || business.contact.whatsappDefaultMessage
  )}`;

export default business;
