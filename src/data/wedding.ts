/**
 * Every guest-facing string for /wedding lives here.
 *
 * `null` renders as a visible placeholder slot on the page, so the layout
 * can be judged before any names are committed. Fill these in one edit.
 *
 * ⚠️ Times below are the INVITE times, which are deliberately printed one
 * hour earlier than the actual schedule — guests in India routinely arrive
 * late and the card buffers for it. Keep these in step with the printed
 * card; do not "correct" them against the internal running order.
 */

export interface WeddingEvent {
  day: string;
  date: string;
  name: string;
  time: string | null;
  venue: string;
  /** Echoes the printed card's two inserts: green for 20 Nov, pink for 21 Nov. */
  accent?: 'green' | 'pink';
  note?: string;
}

export const couple = {
  /** Display order, exactly as the two names read on the page. */
  nameOne: 'Lucky Sahani' as string | null,
  nameTwo: 'Kanchan Kumari' as string | null,
  hashtag: '#KanchanGotLucky' as string | null,
  hostLine: null as string | null,
};

export const headline = {
  date: 'Saturday, 21 November 2026',
  shortDate: '21 . 11 . 2026',
  place: 'AapnoGhar Resort, Gurugram',
};

/**
 * Names, times and halls below are transcribed from the printed card —
 * the green insert (20 Nov) and the pink insert (21 Nov) — so the site
 * and the card never disagree in a guest's hands.
 *
 * `card: true` marks an event that appears on the printed card.
 * Pheras and Vidai carry the video invite's times; they are not on the
 * card at all.
 */
export const events: WeddingEvent[] = [
  {
    day: 'Friday',
    date: '20 November',
    name: 'Mehendi',
    time: '11:00 am onwards',
    venue: 'Swagatam Hall',
    accent: 'green',
    note: 'Lunch is served through the afternoon as guests arrive.',
  },
  {
    day: 'Friday',
    date: '20 November',
    name: 'Engagement & Sangeet',
    time: '7:00 pm onwards',
    venue: 'Bhanwar Party Lawn',
    accent: 'green',
    note: 'Music has to stop at 10 pm — the venue’s rule, so the dancing starts early.',
  },
  {
    day: 'Saturday',
    date: '21 November',
    name: 'Haldi Utsav',
    time: '10:00 am onwards',
    venue: 'Room Side Garden',
    accent: 'pink',
    note: 'Wear something you do not mind turning yellow.',
  },
  {
    day: 'Saturday',
    date: '21 November',
    name: 'Shubh Vivah',
    time: '7:00 pm onwards',
    venue: 'Chander Party Lawn',
    accent: 'pink',
    note: 'Dinner through the evening; the ceremony runs late into the night.',
  },
  {
    day: 'Sunday',
    date: '22 November',
    name: 'Pheras',
    time: '2:00 am',
    venue: 'Chander Party Lawn',
    accent: 'pink',
    note: 'The ceremony itself, in the early hours of Sunday morning.',
  },
  {
    day: 'Sunday',
    date: '22 November',
    name: 'Vidai',
    time: '4:00 am',
    venue: 'Chander Party Lawn',
    accent: 'pink',
  },
];

export const venue = {
  name: 'AapnoGhar Resort',
  alsoKnownAs: 'Airport Motel',
  address: '43rd Milestone, Delhi–Jaipur Expressway (NH-8), Sector 77, Gurugram, Haryana 122004',
  mapsUrl: 'https://maps.app.goo.gl/jzLtpnSUDssejTiPA',
  fromAirport: '20 km from Delhi airport (IGI), straight down NH-8',
  grounds: 'Nine acres of lawns and gardens, set back from the highway',
  checkIn: '1:00 pm',
  checkOut: '10:30 am',
};

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'Do I need to carry ID?',
    a: 'Yes — please do not forget this one. The resort asks every adult for photo ID with address proof at check-in. Aadhaar, passport, driving licence or voter ID all work. If you are travelling on a foreign passport, bring the passport and a valid visa.',
  },
  {
    q: 'Is the food vegetarian?',
    a: 'Entirely. The resort is a vegetarian complex, so no non-vegetarian food is served or brought in. The menus are generous — chaat counters, live pasta and pizza, a fruit counter and several desserts.',
  },
  {
    q: 'Can I bring alcohol?',
    a: 'Outside liquor is not allowed in the lawns. Anything served is arranged through the venue.',
  },
  {
    q: 'When does the music stop?',
    a: 'The venue does not allow a DJ or amplified music after 10 pm on either night.',
  },
  {
    q: 'What about parking?',
    a: 'There is parking on site. Cars stay in the parking area — no vehicles are allowed into the lawns or the room blocks, even for unloading.',
  },
  {
    q: 'Can I bring my dog?',
    a: 'No — the resort does not allow pets on the premises.',
  },
  {
    q: 'Are the water park and rides included?',
    a: 'They sit on the same grounds but are not part of the wedding package. Tickets are sold separately.',
  },
  {
    q: 'Are children welcome?',
    a: 'Yes, very. Plenty of families are bringing children, and there is a lot of open ground to run around in.',
  },
  {
    q: 'What are check-in and check-out?',
    a: 'Rooms open at 1:00 pm and check-out is 10:30 am.',
  },
];

export const rsvp = {
  /** Set to a Google Form URL when ready. Null hides the button. */
  url: null as string | null,
  deadline: null as string | null,
};
