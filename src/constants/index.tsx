// import SliderCard from "@/src/components/UI/SliderCard";
export const FAQs = [
  {
    id: 1,
    question: "What is the purpose of the Level Term Rider (LTR)?",
    answer:
      "The LTR provides financial protection by offering a lump sum payment in the event of death.",
  },
  {
    id: 2,
    question: "What does the Monthly Income Benefit (MIB) cover?",
    answer:
      "The MIB ensures a steady monthly income in case of death or permanent total disability caused by an accident or illness.",
  },
  {
    id: 3,
    question: "How does the Waiver of Premium - Disability (WOP) work?",
    answer:
      "This rider waives future premium payments if the policyholder becomes permanently and totally disabled due to an accident or sickness.",
  },
  {
    id: 4,
    question: "What is the Waiver of Premium - Death (WOP)?",
    answer:
      "The WOP rider ensures that the policy premiums are paid on behalf of the insured in case of their death.",
  },
  {
    id: 5,
    question: "What is the Spouse Rider (SR)?",
    answer:
      "The Spouse Rider provides coverage for the death of the policyholder's spouse, offering financial security to the family.",
  },
  {
    id: 6,
    question:
      "What illnesses are covered under the Critical Illness (CI) rider?",
    answer:
      "The CI rider provides coverage for 12 critical illnesses, ensuring financial support upon diagnosis.",
  },
  {
    id: 7,
    question: "What does the Accidental Death Benefit (ADB) cover?",
    answer:
      "The ADB offers financial protection to the insured's family in case of death due to an accident.",
  },
  {
    id: 8,
    question: "What is the Accidental Death and Disability Benefit (AD&D)?",
    answer:
      "This rider provides coverage in case of accidental death or permanent total disability resulting from an accident.",
  },
  {
    id: 9,
    question:
      "How does the Hospital Cash Back (HCB) rider benefit policyholders?",
    answer:
      "The HCB rider provides daily cash allowances during hospitalization, including enhanced benefits for ICU admissions.",
  },
  {
    id: 10,
    question: "Can multiple riders be added to the same policy?",
    answer:
      "Yes, multiple riders can be added to enhance the policy coverage, subject to terms and conditions.",
  },
  {
    id: 11,
    question: "Is there a maximum coverage limit for riders?",
    answer:
      "Yes, the maximum sum assured for certain riders, including ADB and AD&D, is Rs. 10 million.",
  },
  {
    id: 12,
    question: "Do I need a medical check-up to add riders?",
    answer:
      "A medical check-up is mandatory for the Critical Illness rider. For other riders, it depends on the policy terms.",
  },
  {
    id: 13,
    question: "Can riders be renewed after the benefit term ends?",
    answer:
      "Yes, certain riders like the Hospital Cash Back (HCB) can be renewed after the initial benefit term.",
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
    image: "/images/rider/01.jpg",
  },
  {
    id: 2,
    title: "Monthly Income Benefit (MIB)",
    EntryAge: "18 - 60 Years",
    ExpiryAge: "65 Years",
    IncidentsCovered:
      "Death or permanent and total disability due to Accident or Sickness",
    Benefits:
      "Min 1,000 and Max: 50% of Annual Basic Premium (up to Rs. 100,000)",
    ConditionsApplicable: ["After 90 days of issuance of plan"],
    Note: "In Roshan Aaj Aur Kal Plan Min: one thousand rupees and Max: 50% of Annual Basic Premium or 50% of average monthly income (whichever is less) up to Rs. 100,000",
    image: "/images/rider/02.jpg",
  },
  {
    id: 3,
    title: "Waiver of Premium - Disability (WOP)",
    EntryAge: "18 - 55 Years",
    ExpiryAge: "60 Years",
    IncidentsCovered:
      "Permanent and total disability due to Accident or Sickness",
    Benefits: "Basic premium will be paid by rider till expiry of rider term.",
    BenefitTerm: "25 years",
    ConditionsApplicable: [
      "After 90 days of issuance of plan",
      "In case of PTD persists for 180 Days",
    ],
    Note: "In Roshan Aaj Aur Kal Plan Min: one thousand rupees and Max: 50% of Annual Basic Premium or 50% of average monthly income (whichever is less) up to Rs. 100,000",
    image: "/images/rider/03.jpg",
  },
  {
    id: 4,
    title: "Waiver of Premium - Death (WOP)",
    EntryAge: "18 - 60 Years",
    ExpiryAge: "65 Years",
    IncidentsCovered:
      "Permanent and total disability due to Accident or Sickness",
    Benefits: "Basic premium will be paid by rider till expiry of rider term.",
    BenefitTerm: "25 years",
    ConditionsApplicable: [],
    Note: "",
    image: "/images/rider/04.jpg",
  },
  {
    id: 5,
    title: "Spouse Rider (SR)",
    EntryAge: "18 - 60 Years",
    ExpiryAge: "65 Years",
    IncidentsCovered: "Any kind of death of spouse.",
    Benefits:
      "Sum Assured of spouse life in this benefit will not exceed main life",
    ConditionsApplicable: [],
    Note: "",
    image: "/images/rider/05.jpg",
  },
  {
    id: 6,
    title: "Critical Illness (CI)",
    EntryAge: "18 - 55 Years",
    ExpiryAge: "60 Years",
    IncidentsCovered:
      "Upon being diagnosed of any one of the below-mentioned 12 diseases",
    Benefits: "Coverage from 100,000 up to 5M",
    BenefitTerm: "05 or 10 years",
    ConditionsApplicable: [
      "After 90 days of issuance of plan",
      "30 days survival period is must after diagnoses of disease",
    ],
    Note: "A prior medical check-up is mandatory to avail this rider.",
    image: "/images/rider/06.jpg",
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
    image: "/images/rider/07.jpg",
  },
  {
    id: 8,
    title: "Accidental Death and Disability Benefit (AD&D)",
    EntryAge: "18 - 60 Years",
    ExpiryAge: "65 Years",
    IncidentsCovered:
      "In case of accidental death or permanent total disability",
    Benefits: "300,000 to 10M",
    BenefitTerm: "05-25 years",
    ConditionsApplicable: [
      "After 90 days of issuance of plan",
      "Incase of PTD persists for 180 Days",
    ],
    Note: "Maximum Sum Assured is Rs. 10 Million (in-case of both ADB and AD&D opted)",
    image: "/images/rider/08.jpg",
  },
  {
    id: 9,
    title: "Hospital Cash Back (HCB)",
    EntryAge: "18 - 55 Years",
    ExpiryAge: "60 Years",
    IncidentsCovered:
      "In-case of hospitalization in a registered hospital due to disease or accident.",
    Benefits:
      "Category Details:\nA: Annual Premium per insured person (Rs. Per annum): 1,175, Daily Cash Allowance for Hospitalization (Rs. per day): 2,000, Allowance in-case of admission in ICU (Rs. per day): 4,000\nB: Annual Premium per insured person (Rs. Per annum): 2,600, Daily Cash Allowance for Hospitalization (Rs. per day): 5,000, Allowance in-case of admission in ICU (Rs. per day): 10,000\nC: Annual Premium per insured person (Rs. Per annum): 4,800, Daily Cash Allowance for Hospitalization (Rs. per day): 10,000, Allowance in-case of admission in ICU (Rs. per day): 20,000",
    BenefitTerm: "05 years & renewable",
    ConditionsApplicable: [
      "First 15 days in-case of Disease",
      "24 hours of hospitalization/admission in hospital",
    ],
    Note: "Maximum Sum Assured is Rs. 10 Million (in-case of both ADB and AD&D opted)",
    image: "/images/rider/09.jpg",
  },
];

export const ProductsDataConventional = [
  {
    id: 1,

    title: "Salary Protection Plan",
    description:
      "Being the head of your family, it must be your prime concern to arrange regular income for your dependents. Life is full of uncertainties but advance planning can reduce such risks. Therefore, you need to think of that today.",
    href: "/CP/1.pdf",
  },
  {
    id: 2,

    title: "Apna Savings Plan",
    description:
      "Biggest concerns in personal finances for people is how their loved ones will cope after them. Adamjee Life offers Apna Savings Plan - A plan that provides saving opportunity coupled with life insurance protection at an affordable annual premium.",
    href: "/CP/2.pdf",
  },
  {
    id: 3,

    title: "Mehfooz Munafa Plan",
    description:
      "Managing finances is a unique challenge for every individual, mainly due to unforeseen circumstances during the course of their life. In order to meet the growing financial needs of every individual,",
    href: "/CP/3.pdf",
  },
  {
    id: 4,

    title: "Mustakil Yaqeen Plan",
    description:
      "Save for your child’s education or wedding with an option to invest in three separate funds with different investment mix based on your risk appetite and religious beliefs",
    href: "/CP/4.pdf",
  },
  {
    id: 5,

    title: "Pay Smart Plan",
    description:
      'Adamjee Life offers "Pay Smart Plan" that provides you an opportunity to plan for the ever changing future through a unique composition of life coverage coupled with savings and an additional option.',
    href: "/CP/5.pdf",
  },
  {
    id: 6,

    title: "Roshan Aaj Aur Kal Plan",
    description:
      'The cost of education and helping them to settle in future becomes a major concern for any parent. To secure against these ever growing costs, Adamjee Life introduces "Roshan Aaj aur Kal" - An investment plan designed to cover the costs of higher education and marriage for your children when the time comes.',
    href: "/CP/6.pdf",
  },
  {
    id: 7,

    title: "Shandar Sarmaya Plan",
    description:
      "The future is always unpredictable no matter how well you are set in life. Given today's ever-changing environment, you can never truly predict the future but you can definitely prepare for it better with a life insurance policy that provide investment with protection life cover.",
    href: "/CP/7.pdf",
  },
];

export const ProductsDataTakeFull = [
  {
    id: 6,
    title: "Asaan Takaful Plan",
    description:
      "As the future always bring about surprise twists and turns into our lives, it always rewarding to plan for these surprises and secure yourself and your loved ones.",
    href: "/TP/1.pdf",
  },
  {
    id: 1,
    title: "Kefayat Plan",
    description:
      "It is our prime responsibility to arrange financial security for our dear dependents' future. There are uncertainties in every corner of life, and these need to be addressed early on. A plan should be prepared to safeguard the area of life that is beyond our control.",
    href: "/TP/2.pdf",
  },
  {
    id: 2,
    title: "Nibah Plan",
    description:
      "With the passage of time, we all observe changes in our lives and in our priorities. Casual hospital visits and friends or colleagues are no longer the primary focus. As the focus shifts towards our beloved children.",
    href: "/TP/3.pdf",
  },
  {
    id: 3,
    title: "Salsabil Plus Plan",
    description:
      "We live in a world which is full of uncertainties, where financial planning plays a major role in your family's future prosperity. After your retirement, the cost of life continues to rise and you need a plan that stays active to keep your family protected.",
    href: "/TP/4.pdf",
  },
  {
    id: 4,
    title: "Zayed Savings Takaful Plan",
    description:
      "Life and family are gifts we have been entrusted with from God. Caring and sharing with those in your circle, our loved ones, and people, is a source of inspiration that leads towards a happy life.",
    href: "/TP/5.pdf",
  },
  {
    id: 5,
    title: "Zorai Takaful Savings Plan",
    description:
      "Zorai Savings Takaful Plan offers peace of mind by ensuring a financial security for you and your family. Secure your future and protect them in any situation with this Takaful savings plan.",
    href: "/TP/6.pdf",
  },
  {
    id: 5,
    title: "Barakah Plan",
    description:
      "Be it your daughter's wedding, child education or any other savings need, this plan provides you with both financial protection and savings growth in accordance with Shariah principles. With your trusted partner, Adamjee Life.",
    href: "/TP/7.pdf",
  },
];
