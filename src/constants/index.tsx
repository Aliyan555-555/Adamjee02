// import SliderCard from "@/src/components/UI/SliderCard";
export const FAQs = [
  {
    id: 1,
    question: "What is the purpose of the Level Term Rider (LTR)?",
    answer: "",
  },
  {
    id: 2,
    question: "What does the Monthly Income Benefit (MI B) cover?",
    answer: "",
  },
  {
    id: 3,
    question: "How does the Waiver of Premium - Disability (WOP) work?",
    answer: "",
  },
  {
    id: 4,
    question: "What is the Waiver of premium - Death (WOP)?",
    answer: "",
  },
  {
    id: 5,
    question: "What is the Spouse Rider (SR)?",
    answer: "",
  },
  {
    id: 6,
    question:
      "What illnesses are covered under the Critical Illness (CI) rider?",
    answer: "",
  },
  {
    id: 7,
    question: "What does the Accidental Death Benefit (ADB) cover?",
    answer: "",
  },
  {
    id: 8,
    question: "What is the Accidental Death and Disability Benefit (AD&D)?",
    answer: "",
  },
  {
    id: 9,
    question:
      "How does the Hospital Cash Back (HCB) rider benefit policyholders?",
    answer: "",
  },
  {
    id: 10,
    question: "Can multiple riders be added to the same policy?",
    answer: "",
  },
  {
    id: 11,
    question: "Is there a maximum coverage limit for riders?",
    answer: "",
  },
  {
    id: 12,
    question: "Do I need a medical check-up to add riders?",
    answer: "",
  },
  {
    id: 13,
    question: "Can riders be renewed after the benefit term ends?",
    answer: "",
  },
];

export const hashTags = [
  {
    id: 1,
    hashTag: "#AdamjeeLife",
  },
  {
    id: 2,
    hashTag: "#TrustedPartner",
  },
  {
    id: 3,
    hashTag: "#KahaniSuno",
  },
];

export const RiderTabsData = [
  {
    id: 1,
    title: "Level Term Rider (LTR)",
    EntryAge: "18 - 60 Years",
    ExpiryAge: "65 Years",
    IncidentsCovered: "Any kind of death",
    Benefits: "Min 100,000 to Max 10 Million",
    ConditionsApplicable: [],
    Note: "In Mustakil Yaqeen Plan and Pay Smart Plan, Maximum sum assured including death benefit under the basic plan and riders is Rs.20M*",
    image: "/images/rider/01.jpg"
  },
  {
    id: 2,
    title: "Monthly Income Benefit (MIB)",
    EntryAge: "18 - 60 Years",
    ExpiryAge: "65 Years",
    IncidentsCovered: "Death or permanent and total disability due to Accident or Sickness",
    Benefits: "Min 1,000 and Max: 50% of Annual Basic Premium (up to Rs. 100,000)",
    ConditionsApplicable: ["After 90 days of issuance of plan"],
    Note: "In Roshan Aaj Aur Kal Plan Min: one thousand rupees and Max: 50% of Annual Basic Premium or 50% of average monthly income (whichever is less) up to Rs. 100,000",
    image: "/images/rider/02.jpg"
  },
  {
    id: 3,
    title: "Waiver of Premium - Disability (WOP)",
    EntryAge: "18 - 55 Years",
    ExpiryAge: "60 Years",
    IncidentsCovered: "Permanent and total disability due to Accident or Sickness",
    Benefits: "Basic premium will be paid by rider till expiry of rider term.",
    BenefitTerm: "25 years",
    ConditionsApplicable: ["After 90 days of issuance of plan", "In case of PTD persists for 180 Days"],
    Note: "In Roshan Aaj Aur Kal Plan Min: one thousand rupees and Max: 50% of Annual Basic Premium or 50% of average monthly income (whichever is less) up to Rs. 100,000",
    image: "/images/rider/03.jpg"
  },
  {
    id: 4,
    title: "Waiver of Premium - Death (WOP)",
    EntryAge: "18 - 60 Years",
    ExpiryAge: "65 Years",
    IncidentsCovered: "Permanent and total disability due to Accident or Sickness",
    Benefits: "Basic premium will be paid by rider till expiry of rider term.",
    BenefitTerm: "25 years",
    ConditionsApplicable: [],
    Note: "",
    image: "/images/rider/04.jpg"
  },
  {
    id: 5,
    title: "Spouse Rider (SR)",
    EntryAge: "18 - 60 Years",
    ExpiryAge: "65 Years",
    IncidentsCovered: "Any kind of death of spouse.",
    Benefits: "Sum Assured of spouse life in this benefit will not exceed main life",
    ConditionsApplicable: [],
    Note: "",
    image: "/images/rider/05.jpg"
  },
  {
    id: 6,
    title: "Critical Illness (CI)",
    EntryAge: "18 - 55 Years",
    ExpiryAge: "60 Years",
    IncidentsCovered: "Upon being diagnosed of any one of the below-mentioned 12 diseases",
    Benefits: "Coverage from 100,000 up to 5M",
    BenefitTerm: "05 or 10 years",
    ConditionsApplicable: ["After 90 days of issuance of plan", "30 days survival period is must after diagnoses of disease"],
    Note: "A prior medical check-up is mandatory to avail this rider.",
    image: "/images/rider/06.jpg"
  },
  {
    id: 7,
    title: "Accidental Death Benefit (ADB)",
    EntryAge: "18 - 60 Years",
    ExpiryAge: "70 Years",
    IncidentsCovered: "In case of accidental death.",
    Benefits: "300,000 to 10M",
    BenefitTerm: "05-25 years",
    ConditionsApplicable: [],
    Note: "Maximum Sum Assured is Rs.10 Million (in-case of both ADB and AD&D opted)",
    image: "/images/rider/07.jpg"
  },
  {
    id: 8,
    title: "Accidental Death and Disability Benefit (AD&D)",
    EntryAge: "18 - 60 Years",
    ExpiryAge: "65 Years",
    IncidentsCovered: "In case of accidental death or permanent total disability",
    Benefits: "300,000 to 10M",
    BenefitTerm: "05-25 years",
    ConditionsApplicable: ["After 90 days of issuance of plan", "Incase of PTD persists for 180 Days"],
    Note: "Maximum Sum Assured is Rs. 10 Million (in-case of both ADB and AD&D opted)",
    image: "/images/rider/08.jpg"
  },
  {
    id: 9,
    title: "Hospital Cash Back (HCB)",
    EntryAge: "18 - 55 Years",
    ExpiryAge: "60 Years",
    IncidentsCovered: "In-case of hospitalization in a registered hospital due to disease or accident.",
    Benefits: "Category Details:\nA: Annual Premium per insured person (Rs. Per annum): 1,175, Daily Cash Allowance for Hospitalization (Rs. per day): 2,000, Allowance in-case of admission in ICU (Rs. per day): 4,000\nB: Annual Premium per insured person (Rs. Per annum): 2,600, Daily Cash Allowance for Hospitalization (Rs. per day): 5,000, Allowance in-case of admission in ICU (Rs. per day): 10,000\nC: Annual Premium per insured person (Rs. Per annum): 4,800, Daily Cash Allowance for Hospitalization (Rs. per day): 10,000, Allowance in-case of admission in ICU (Rs. per day): 20,000",
    BenefitTerm: "05 years & renewable",
    ConditionsApplicable: ["First 15 days in-case of Disease", "24 hours of hospitalization/admission in hospital"],
    Note: "Maximum Sum Assured is Rs. 10 Million (in-case of both ADB and AD&D opted)",
    image: "/images/rider/09.jpg"
  }
];


export const ProductsDataConventional = [
  {
    id:1,
    status:'Wending',
    title:'Roshan Aaj Aur Kal',
    description:'Save for your child’s education or wedding with an option to invest in three separate funds with different investment mix based on your risk appetite and religious beliefs'
  },
  {
    id:2,
    status:'Wending',
    title:'Roshan Aaj Aur Kal',
    description:'Save for your child’s education or wedding with an option to invest in three separate funds with different investment mix based on your risk appetite and religious beliefs'
  },
  {
    id:3,
    status:'Wending',
    title:'Roshan Aaj Aur Kal',
    description:'Save for your child’s education or wedding with an option to invest in three separate funds with different investment mix based on your risk appetite and religious beliefs'
  },
  {
    id:4,
    status:'Wending',
    title:'Roshan Aaj Aur Kal',
    description:'Save for your child’s education or wedding with an option to invest in three separate funds with different investment mix based on your risk appetite and religious beliefs'
  },
  {
    id:5,
    status:'Wending',
    title:'Roshan Aaj Aur Kal',
    description:'Save for your child’s education or wedding with an option to invest in three separate funds with different investment mix based on your risk appetite and religious beliefs'
  },
  {
    id:6,
    status:'Wending',
    title:'Roshan Aaj Aur Kal',
    description:'Save for your child’s education or wedding with an option to invest in three separate funds with different investment mix based on your risk appetite and religious beliefs'
  },

]