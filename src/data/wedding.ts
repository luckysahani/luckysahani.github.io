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

export const events: WeddingEvent[] = [
  {
    day: 'Friday',
    date: '20 November',
    name: 'Mehendi & Welcome Lunch',
    time: null,
    venue: 'Swagatam Hall & Bhanwar Party Lawn',
    note: 'Lunch is served through the afternoon as guests arrive.',
  },
  {
    day: 'Friday',
    date: '20 November',
    name: 'Sangeet & Engagement',
    time: null,
    venue: 'Bhanwar Party Lawn',
    note: 'Music winds up at 10 pm — a venue rule, not ours.',
  },
  {
    day: 'Saturday',
    date: '21 November',
    name: 'Haldi',
    time: null,
    venue: 'Room Side Garden',
    note: 'Wear something you do not mind turning yellow.',
  },
  {
    day: 'Saturday',
    date: '21 November',
    name: 'Wedding & Dinner',
    time: null,
    venue: 'Chander Party Lawn',
    note: 'Dinner through the evening; the ceremony runs late into the night.',
  },
  {
    day: 'Sunday',
    date: '22 November',
    name: 'Pheras',
    time: '2:00 am',
    venue: 'Chander Party Lawn',
    note: 'The heart of it. Early hours of Sunday morning.',
  },
  {
    day: 'Sunday',
    date: '22 November',
    name: 'Vidai',
    time: '4:00 am',
    venue: 'Chander Party Lawn',
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
    a: 'Yes, and this one matters — the resort requires photo ID with address proof at check-in for every adult. Aadhaar, passport, driving licence or voter ID all work. Guests travelling on a foreign passport need the passport and a valid visa.',
  },
  {
    q: 'Is the food vegetarian?',
    a: 'Entirely. The resort is a vegetarian complex, so no non-vegetarian food is served or permitted from outside. The menus are large — chaat counters, live pasta and pizza, a fruit counter and several desserts.',
  },
  {
    q: 'Can I bring alcohol?',
    a: 'Outside liquor is not permitted in the lawns. Anything being served is arranged through the venue.',
  },
  {
    q: 'When does the music stop?',
    a: 'The venue does not allow a DJ or amplified music after 10 pm on either night. The celebration carries on — it just gets quieter.',
  },
  {
    q: 'What about parking?',
    a: 'There is parking on site. Cars have to stay in the parking area — no vehicles are allowed into the lawns or the room blocks, including for unloading.',
  },
  {
    q: 'Can I bring my dog?',
    a: 'Sadly not. The resort does not permit pets on the premises.',
  },
  {
    q: 'Are the water park and rides included?',
    a: 'No — the amusement park and water park sit on the same grounds but are not part of the wedding package. Tickets are bought separately if you fancy it.',
  },
  {
    q: 'Are children welcome?',
    a: 'Very. A good number of families are bringing children, and there is plenty of open ground for them.',
  },
  {
    q: 'What are check-in and check-out?',
    a: 'Rooms open at 1:00 pm and check-out is 10:30 am. If you are staying both nights this only matters on the way in and the way out.',
  },
];

export const rsvp = {
  /** Set to a Google Form URL when ready. Null hides the button. */
  url: null as string | null,
  deadline: null as string | null,
};
