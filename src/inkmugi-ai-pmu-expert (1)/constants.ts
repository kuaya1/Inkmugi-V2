
import { QuizQuestion } from './types';

export const INKMUGI_KNOWLEDGE_BASE = `
InkMugi is a permanent makeup (PMU) studio located in Annandale, VA, founded by a Virginia licensed PMU artist with over 500+ procedures completed. The studio is hospital-grade, ensuring the highest safety and hygiene standards.

**Services & Pricing:**
- **Ombre Powder Brows:** $650. This is the most popular service. It gives a soft, powdered makeup look that's great for all skin types, especially oily skin. It's less invasive than microblading. The look can be soft and natural or bold and defined.
- **Microshading:** $550. This technique is similar to Ombre Powder but uses a different technique to create a soft, pixelated effect. It's also suitable for most skin types.
- **Consultations:** Available for booking to discuss individual needs and desired outcomes.

**About the Artist & Studio:**
- The artist is VA licensed and highly experienced.
- The studio prioritizes safety with hospital-grade sterilization and single-use tools.
- Located in Annandale, VA, serving the DMV (DC, Maryland, Virginia) area.
- Custom face mapping is performed for every client to design brows that are perfectly symmetrical and complement their unique facial features.

**Key Blog & FAQ Topics:**
- **Brow Shapes:** The artist helps clients choose the best brow shape (e.g., arched, straight, soft arch) based on their face shape (oval, round, heart, etc.).
- **Nano vs. Microblading:** InkMugi specializes in machine techniques like Ombre Powder Brows, which is often preferred over microblading for its longevity, better results on oily skin, and less trauma to the skin. Nano brows are similar but use a single needle to create hair strokes. The studio focuses on shading techniques.
- **Safety Standards:** Adherence to strict DMV health and safety guidelines, use of disposable needles, and thorough sanitation are paramount.
- **Pre-Care Instructions:** Avoid caffeine, alcohol, and blood thinners (like aspirin, ibuprofen) 24 hours before the procedure. Avoid waxing or tanning the area for a week prior.
- **Post-Care Instructions:** Keep the area clean and dry for about 10 days. Apply a provided aftercare ointment sparingly. Avoid saunas, swimming, and excessive sweating. Brows will look dark initially but will soften in color by up to 40% as they heal. A touch-up session after 6-8 weeks is essential.
`;

export const PMU_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "Which service is best suited for oily skin according to InkMugi?",
    options: ["Microblading", "Ombre Powder Brows", "Threading", "Waxing"],
    correctAnswer: "Ombre Powder Brows",
    explanation: "Ombre Powder Brows are excellent for all skin types, especially oily skin, as the pigment retention is better compared to microblading."
  },
  {
    question: "What should you AVOID 24 hours before your PMU appointment?",
    options: ["Drinking water", "Eating a healthy meal", "Caffeine and alcohol", "Moisturizing your face"],
    correctAnswer: "Caffeine and alcohol",
    explanation: "Caffeine and alcohol can act as blood thinners, which can increase sensitivity and bleeding during the procedure."
  },
  {
    question: "How much can the color of your new brows soften during healing?",
    options: ["Up to 10%", "Up to 40%", "Not at all", "Up to 90%"],
    correctAnswer: "Up to 40%",
    explanation: "The initial color will appear darker, but it will soften by up to 40% to a more natural shade as the skin heals."
  },
  {
    question: "Where is the InkMugi studio located?",
    options: ["Washington, D.C.", "Bethesda, MD", "Annandale, VA", "Arlington, VA"],
    correctAnswer: "Annandale, VA",
    explanation: "InkMugi's hospital-grade studio is located in Annandale, Virginia, serving the wider DMV area."
  }
];
