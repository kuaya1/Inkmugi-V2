import React from 'react';
import { Link } from 'react-router-dom';
import LocationPage from '../components/LocationPage';

const PermanentMakeupBurke: React.FC = () => {
  return (
    <LocationPage
      city="Burke"
      state="VA"
      slug="/permanent-makeup-burke-va"
      breadcrumbName="Permanent Makeup Burke VA"

      /* ---- SEO ---- */
      seoTitle="Permanent Makeup Burke VA | Ombre Powder Brows — Ink Mugi"
      seoDescription="Professional ombre powder brows for Burke, VA residents. VA-licensed, 330+ documented procedures, 0.19% complication rate. Just 12 minutes from Burke Centre. $600 all-inclusive. Free consultation."
      seoKeywords="permanent makeup Burke VA, ombre powder brows Burke Virginia, PMU near Burke Centre, powder brows Fairfax County, eyebrow tattoo Burke VA, microshading Burke"

      /* ---- schema ---- */
      areaServed={[
        { name: 'Burke', state: 'Virginia' },
        { name: 'Springfield', state: 'Virginia' },
        { name: 'Annandale', state: 'Virginia' },
        { name: 'Fairfax', state: 'Virginia' },
        { name: 'Fairfax Station', state: 'Virginia' },
        { name: 'Lorton', state: 'Virginia' },
        { type: 'AdministrativeArea', name: 'Fairfax County', state: 'Virginia' },
      ]}
      serviceSchemaName="Ombre Powder Brows for Burke VA Clients"
      serviceSchemaDesc="Professional ombre powder brows service for Burke, VA residents. 330+ documented procedures, healed-first approach, VA licensed. Located in Annandale — 12 minutes from Burke Centre."

      /* ---- hero ---- */
      badgeText="Serving Burke, VA — 12 Min from Our Studio"
      headline={<>Permanent Makeup for<br /><span className="text-[#9A7B69]">Burke, VA</span> — Your Neighborhood PMU Expert</>}
      heroSubtext="Healed-first permanent makeup trusted by Burke families and professionals. 330+ documented procedures with a 0.19% complication rate — see the shape on your face and approve before any pigment."
      heroSecondaryText="12 minutes from Burke Centre to our private Annandale studio. Free parking. Consultation-first approach."
      heroImage="https://live.staticflickr.com/65535/54366410485_9d137ccfb4_c_d.jpg"
      heroImageAlt="Healed ombre powder brows for Burke, VA clients at Ink Mugi studio"
      heroPrimaryCTA={{ text: 'Request a Consultation', to: '/booking' }}
      heroSecondaryCTA={{ type: 'link', text: 'View Healed Results', to: '/gallery' }}

      /* ---- intro section ---- */
      introTitle="Why Burke Residents Trust Ink Mugi for Permanent Makeup"
      introContent={
        <>
          <p>
            Burke is one of Fairfax County's most family-oriented communities — and its residents know value when they see it. Between weekend mornings at Burke Lake Park, school drop-offs along Burke Centre Parkway, and the daily commute on the VRE or I-66, Burke families don't have 20 minutes for a makeup routine every day.
          </p>
          <p>
            That's exactly why so many Burke clients choose{' '}
            <Link to="/signature-ombre-brows" className="text-[#9A7B69] underline hover:text-[#2D2D2B] transition-colors">
              ombre powder brows
            </Link>{' '}
            — permanent, polished brows that look effortless whether you're at a PTA meeting or walking the trails at Pohick Stream Valley Park. Our Annandale studio is just 12 minutes south on Burke Centre Parkway and Braddock Road — closer than most Burke residents realize.
          </p>
          <p>
            As a Fairfax County-based studio serving{' '}
            <Link to="/licensed-pmu-artist-annandale" className="text-[#9A7B69] underline hover:text-[#2D2D2B] transition-colors">
              Annandale
            </Link>{' '}
            and the surrounding communities, we understand the active, family-driven lifestyle here. Every procedure is built around our healed-first philosophy: you see the mapped design, approve the shape on your face, and nothing permanent happens until you're fully confident. No pressure, no rushing — just meticulous artistry 12 minutes from your door.
          </p>
          <p>
            Burke clients who've compared us to studios in Tysons and DC consistently say the same thing: our $600 all-inclusive pricing, documented track record, and intimate studio environment make the choice easy. And unlike driving to Tysons Corner, there's free parking and zero traffic stress.
          </p>
        </>
      }

      /* ---- drive times ---- */
      driveTimeTitle="Drive Times from Burke &amp; Nearby Areas"
      driveTimeSubtext="A quick drive via Braddock Road to our private studio in Annandale. Free on-site parking — zero stress."
      neighborhoods={[
        { name: 'Burke Centre', time: '12 min' },
        { name: 'Burke Lake area', time: '14 min' },
        { name: 'Kings Park', time: '10 min' },
        { name: 'Fairfax Station', time: '15 min' },
        { name: 'Springfield', time: '8 min' },
        { name: 'Fairfax City', time: '12 min' },
      ]}
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d49700!2d-77.27!3d38.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b64e8c5b5e4f9f%3A0xc2c2c6c6c6c6c6c6!2sBurke%2C%20VA!3m2!1d38.7931!2d-77.2714!4m5!1s0x89b64faa3b8d9e57%3A0x7b0da9b5a7a0b8f0!2s7857%20Heritage%20Dr%20%23330%2C%20Annandale%2C%20VA%2022003!3m2!1d38.8303726!2d-77.1969261!5e0!3m2!1sen!2sus!4v1703444800000!5m2!1sen!2sus"
      mapTitle="Directions from Burke to Ink Mugi in Annandale"

      /* ---- climate comparison ---- */
      climateTitle={<>Ombre Brows vs Microblading —<br /><span className="text-[#E6DAD2]">What Works Best in Burke?</span></>}
      climateCards={[
        {
          icon: 'humidity' as const,
          title: 'Fairfax County Humidity Factor',
          content: "Burke sits right in the Potomac basin with summer humidity regularly hitting 70-80%. Microblading strokes — created by manual blade cuts in the epidermis — tend to blur and migrate faster in these conditions. Burke clients who love Burke Lake Park, the W&OD Trail, and outdoor weekend activities see the difference most clearly: ombre powder brows deposit pigment deeper using a digital machine, creating results that hold their clarity through every Northern Virginia season.",
        },
        {
          icon: 'healed' as const,
          title: 'Healed-First Means Certainty',
          content: "Fresh brows always look great. What matters is how they look in 6 weeks — after the skin has fully healed. Our entire portfolio shows healed results, not same-day photos. For Burke families making a considered investment in their appearance, this distinction is exactly why they choose our approach over artists who only showcase fresh work. We focus on realistic healed expectations, not just the immediate before-and-after.",
        },
      ]}

      /* ---- testimonials ---- */
      testimonials={[
        {
          name: 'Jessica T.',
          location: 'Burke Centre',
          text: "I was nervous about the drive, but it's literally 12 minutes down Braddock Road. Mugi's attention to detail is unmatched — she spent 45 minutes on the design alone before touching any pigment. My brows healed perfectly and I get compliments constantly at school pickup.",
          rating: 5,
        },
        {
          name: 'Sarah M.',
          location: 'Kings Park',
          text: "After a bad microblading experience at another studio, I was hesitant to try again. Mugi's healed portfolio convinced me — every photo was at 6+ weeks, not fresh. The correction she did is flawless. Best beauty investment I've ever made.",
          rating: 5,
        },
        {
          name: 'Rachel K.',
          location: 'Near Burke Lake',
          text: "As a mom of three, I needed something that would survive Burke Lake splash pads, soccer games, and pool days. My ombre powder brows have been through two summers now and still look natural and polished. Worth every penny of the $600.",
          rating: 5,
        },
      ]}

      /* ---- FAQs ---- */
      faqs={[
        {
          question: 'How far is Ink Mugi from Burke, VA?',
          answer: "Our studio is at 7857 Heritage Dr #330, Annandale, VA 22003 — approximately 12 minutes from Burke Centre via Braddock Road. Many Burke clients tell us it's faster than driving to Tysons Corner Mall. Free parking is available right at our building, so there's no hassle when you arrive.",
        },
        {
          question: 'Why do Burke residents choose Ink Mugi over closer studios?',
          answer: "Burke clients consistently choose us after comparing healed results online. With 330+ documented procedures and a 0.19% complication rate, our track record is verifiable. The $600 all-inclusive price (compared to $800+ at DC and Tysons studios), combined with our design-approval process where you see the exact shape on your face before any pigment, gives Burke families the confidence they need.",
        },
        {
          question: 'How long do ombre powder brows last for Burke area clients?',
          answer: "Ombre powder brows typically last 1.5–3 years, depending on skin type, lifestyle, and aftercare. Fairfax County's humid summers can accelerate fading with certain techniques, but ombre powder brows are specifically designed to hold well in these conditions. Most Burke clients schedule a color refresh around the 18–24 month mark.",
        },
        {
          question: "What's included in the $600 ombre brows price?",
          answer: "Everything: a thorough design consultation with facial mapping, the full procedure (2–3 hours), premium EU-compliant vegan pigments, a medical-grade aftercare kit, 24/7 healing text support from Mugi directly, and your included perfecting session at 6 weeks. No hidden costs, no add-on upsells.",
        },
        {
          question: 'Is Ink Mugi open on weekends for Burke clients?',
          answer: "We offer select Saturday availability — perfect for busy Burke families. Our regular weekday hours are Monday through Friday, 10am to 6pm. Book your consultation and we'll find a time that works, including those popular Saturday morning slots.",
        },
        {
          question: 'Can I get nano brows or microshading instead?',
          answer: "Absolutely. We also offer nano brows (crisp hair-stroke technique) and microshading (soft dot-work finish). During your free consultation, Mugi will evaluate your skin type, lifestyle, and goals to recommend the technique that will heal best for you — especially given Fairfax County's humid summers.",
        },
      ]}

      /* ---- cross-links ---- */
      nearbyCities={[
        { name: 'Springfield, VA', path: '/permanent-makeup-springfield-va', driveTime: '8 min drive' },
        { name: 'Fairfax, VA', path: '/ombre-brows-fairfax-va', driveTime: '12 min drive' },
        { name: 'Fairfax County', path: '/permanent-makeup-fairfax-county', driveTime: 'Our county' },
        { name: 'Falls Church, VA', path: '/permanent-makeup-falls-church-va', driveTime: '15 min drive' },
        { name: 'Vienna, VA', path: '/ombre-brows-vienna-va', driveTime: '18 min drive' },
        { name: 'Alexandria, VA', path: '/ombre-brows-alexandria-va', driveTime: '20 min drive' },
        { name: 'Woodbridge, VA', path: '/ombre-brows-woodbridge-va', driveTime: '25 min drive' },
      ]}

      /* ---- microblading comparison ---- */
      microbladingTitle="Considering Microblading in Burke, VA?"
      microbladingContent={
        <>
          <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-4">
            Burke's active outdoor community — Burke Lake Park families, VRE commuters, and weekend warriors on the Cross County Trail — face the same climate challenge that undermines microblading throughout Fairfax County. High humidity accelerates pigment fading, while active lifestyles amplify the effect through increased perspiration and UV exposure. Our Burke clients who switched from microblading to powder brows consistently report dramatically improved longevity.
          </p>
          <p className="text-[#2D2D2B]/70 leading-relaxed">
            The science is clear: microblading's shallow deposit method can't compete with powder brows in humid climates. Explore the comparison before making your decision.
          </p>
        </>
      }

      /* ---- CTA customization ---- */
      ctaSubtext="Join Burke families from Burke Centre to Kings Park who've chosen healed-first permanent makeup with documented results. Your consultation is a conversation — not a commitment."
      ctaFooterText="Serving Fairfax County & Northern Virginia • 12 minutes from Burke • Free parking • By consultation only"
      midCTASubtext="Burke Centre and Kings Park residents trust Ink Mugi for precision permanent makeup — just 12 minutes via Braddock Road."
    />
  );
};

export default PermanentMakeupBurke;
