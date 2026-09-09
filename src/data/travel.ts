/**
 * Curated travel content for /travel.
 *
 * Written by hand from the private trackers — never generated from them.
 * Destinations, dates and impressions only: no booking references, fares,
 * PNRs, accommodation addresses or travelling companions' details.
 */

export type TripStatus = 'past' | 'ahead';

export interface Trip {
  slug: string;
  place: string;
  region: string;
  when: string;
  year: string;
  status: TripStatus;
  /** [longitude, latitude]. */
  coords: [number, number];
  note: string;
}

export const trips: Trip[] = [
  {
    slug: 'seattle',
    place: 'Seattle',
    region: 'United States',
    when: 'Until July 2026',
    year: '2026',
    status: 'past',
    coords: [-122.3321, 47.6062],
    note:
      'Five years of it, and the last of ten at Amazon. Left in July and flew ' +
      'home for good — the kind of move you only make once.',
  },
  {
    slug: 'alaska',
    place: 'Alaska',
    region: 'Palmer & Delta Junction',
    when: 'Earlier',
    year: 'Earlier',
    status: 'past',
    coords: [-149.9003, 61.2181],
    note:
      'An ATV run out of Palmer, and the Castner Glacier ice cave up near Delta ' +
      'Junction — you walk into a river of blue that is very obviously older than ' +
      'anything you have ever touched.',
  },
  {
    slug: 'cherrapunjee',
    place: 'Cherrapunjee',
    region: 'Meghalaya',
    when: 'Earlier',
    year: 'Earlier',
    status: 'past',
    coords: [91.7323, 25.2702],
    note:
      'Ten days across the North East, and this was the anchor — one of the wettest ' +
      'inhabited places on the planet, which it spends the whole time proving.',
  },
  {
    slug: 'texas',
    place: 'Dallas & Houston',
    region: 'Texas',
    when: 'June 2026',
    year: '2026',
    status: 'past',
    coords: [-96.797, 32.7767],
    note:
      'Went for the football. Messi and Ronaldo on the same pitch at a World Cup ' +
      'held in your adopted country is not a fixture you talk yourself out of.',
  },
  {
    slug: 'patna',
    place: 'Patna',
    region: 'Bihar',
    when: 'Through 2026',
    year: '2026',
    status: 'past',
    coords: [85.1376, 25.5941],
    note:
      'Back repeatedly this year, for the reasons families go back. The Ganga is ' +
      'wider than photographs make it look.',
  },
  {
    slug: 'jaipur',
    place: 'Jaipur & Kishangarh',
    region: 'Rajasthan',
    when: 'September 2026',
    year: '2026',
    status: 'past',
    coords: [75.7873, 26.9124],
    note:
      'Drove down for the pre-wedding shoot. Patrika Gate at first light, then the ' +
      'marble dunes at Kishangarh — an industrial by-product that photographs like ' +
      'a salt flat, and the strangest landscape I have stood in.',
  },
  {
    slug: 'vaishno-devi',
    place: 'Vaishno Devi',
    region: 'Jammu & Kashmir',
    when: 'Late October 2026',
    year: '2026',
    status: 'ahead',
    coords: [74.9319, 32.9917],
    note:
      'A family pilgrimage, and a large one — the climb from Katra to the Bhawan, ' +
      'then on to Bhairon. Months of train bookings to get everyone moving at once.',
  },
  {
    slug: 'maldives',
    place: 'Maldives',
    region: 'Indian Ocean',
    when: 'November 2026',
    year: '2026',
    status: 'ahead',
    coords: [73.5093, 4.1755],
    note: 'Honeymoon. A water villa, and no plans beyond that, deliberately.',
  },
  {
    slug: 'sri-lanka',
    place: 'Sri Lanka',
    region: 'Colombo & onward',
    when: 'December 2026',
    year: '2026',
    status: 'ahead',
    coords: [79.8612, 6.9271],
    note:
      'Ten days with eight of us. This one replaced an Andaman plan — the islands ' +
      'are still on the list below.',
  },
  {
    slug: 'switzerland',
    place: 'Lucerne & Interlaken',
    region: 'Switzerland',
    when: 'May–June 2027',
    year: '2027',
    status: 'ahead',
    coords: [7.8632, 46.6863],
    note:
      'The first leg of two weeks in Europe. Jungfraujoch, Mürren, and a lake ' +
      'cruise out of Lucerne.',
  },
  {
    slug: 'paris',
    place: 'Paris',
    region: 'France',
    when: 'June 2027',
    year: '2027',
    status: 'ahead',
    coords: [2.3522, 48.8566],
    note: 'Five nights, with a birthday dinner somewhere in the middle of them.',
  },
  {
    slug: 'provence',
    place: 'Nice & Provence',
    region: 'France',
    when: 'June 2027',
    year: '2027',
    status: 'ahead',
    coords: [7.262, 43.7102],
    note:
      'The flexible end of the trip — Èze, Monaco, the Gorges du Verdon. Or more ' +
      'Switzerland, if we lose our nerve about the driving.',
  },
];

export interface Place {
  name: string;
  where: string;
  when: string;
  coords: [number, number];
  status: TripStatus;
}

/**
 * The wider record. Places from Dec 2024 onward are corroborated by a
 * Google Timeline export; earlier ones are from memory, so their dates are
 * deliberately vague. City-level only — no addresses, no timestamps.
 */
export const places: Place[] = [
  // Bases
  { name: 'Gurgaon', where: 'Haryana', when: 'Home', coords: [77.0266, 28.4595], status: 'past' },
  { name: 'Seattle', where: 'Washington', when: '2021–2026', coords: [-122.3321, 47.6062], status: 'past' },
  { name: 'Bengaluru', where: 'Karnataka', when: '2016–2021', coords: [77.5946, 12.9716], status: 'past' },

  // United States
  { name: 'Alaska', where: 'Palmer & Delta Junction', when: 'Earlier', coords: [-149.9003, 61.2181], status: 'past' },
  { name: 'New York', where: 'New York', when: 'Dec 2024', coords: [-73.9857, 40.7484], status: 'past' },
  { name: 'Las Vegas', where: 'Nevada', when: 'Jan 2025', coords: [-115.1398, 36.1699], status: 'past' },
  { name: 'Portland', where: 'Oregon', when: 'Aug 2025', coords: [-122.6784, 45.5152], status: 'past' },
  { name: 'Dallas', where: 'Texas', when: 'Jun 2026', coords: [-96.797, 32.7767], status: 'past' },
  { name: 'Houston', where: 'Texas', when: 'Jun 2026', coords: [-95.3698, 29.7604], status: 'past' },
  { name: 'San Francisco', where: 'California', when: 'Earlier', coords: [-122.4194, 37.7749], status: 'past' },
  { name: 'Los Angeles', where: 'California', when: 'Earlier', coords: [-118.2437, 34.0522], status: 'past' },
  { name: 'San Diego', where: 'California', when: 'Earlier', coords: [-117.1611, 32.7157], status: 'past' },
  { name: 'Denver', where: 'Colorado', when: 'Earlier', coords: [-104.9903, 39.7392], status: 'past' },
  { name: 'Orlando', where: 'Florida', when: 'Earlier', coords: [-81.3792, 28.5383], status: 'past' },
  { name: 'New Orleans', where: 'Louisiana', when: 'Earlier', coords: [-90.0715, 29.9511], status: 'past' },

  // India — north
  { name: 'Varanasi', where: 'Uttar Pradesh', when: 'Jan 2026', coords: [82.9739, 25.3176], status: 'past' },
  { name: 'Patna', where: 'Bihar', when: 'Often', coords: [85.1376, 25.5941], status: 'past' },
  { name: 'Jaipur', where: 'Rajasthan', when: 'Sep 2026', coords: [75.7873, 26.9124], status: 'past' },
  { name: 'Jodhpur', where: 'Rajasthan', when: 'Feb 2025', coords: [73.0243, 26.2389], status: 'past' },
  { name: 'Chandigarh', where: 'Punjab', when: 'Mar 2025', coords: [76.7794, 30.7333], status: 'past' },
  { name: 'Triund & Kheerganga', where: 'Himachal Pradesh', when: 'Earlier', coords: [76.3234, 32.2432], status: 'past' },
  { name: 'Bir Billing', where: 'Himachal Pradesh', when: 'Earlier', coords: [76.7218, 32.0415], status: 'past' },
  { name: 'Sikkim', where: 'North East', when: 'Earlier', coords: [88.6065, 27.533], status: 'past' },
  { name: 'Cherrapunjee', where: 'Meghalaya', when: 'Earlier', coords: [91.7323, 25.2702], status: 'past' },

  // India — south & west
  { name: 'Alleppey', where: 'Kerala', when: 'Jan 2026', coords: [76.3388, 9.4981], status: 'past' },
  { name: 'Varkala & Paravur', where: 'Kerala', when: 'Jan 2026', coords: [76.7166, 8.7379], status: 'past' },
  { name: 'Munnar', where: 'Kerala', when: 'Earlier', coords: [77.0595, 10.0889], status: 'past' },
  { name: 'Wayanad', where: 'Kerala', when: 'Earlier', coords: [76.132, 11.6854], status: 'past' },
  { name: 'Ooty', where: 'Tamil Nadu', when: 'Earlier', coords: [76.695, 11.4064], status: 'past' },
  { name: 'Coorg', where: 'Karnataka', when: 'Earlier', coords: [75.7382, 12.3375], status: 'past' },
  { name: 'Goa', where: 'Goa', when: 'Earlier', coords: [73.8278, 15.2993], status: 'past' },

  { name: 'Mysuru', where: 'Karnataka', when: 'Earlier', coords: [76.6394, 12.2958], status: 'past' },
  { name: 'Agra', where: 'Uttar Pradesh', when: 'Earlier', coords: [78.0081, 27.1767], status: 'past' },
  { name: 'Kanpur', where: 'Uttar Pradesh', when: '2012–2016', coords: [80.3319, 26.4499], status: 'past' },
  { name: 'Indore', where: 'Madhya Pradesh', when: 'Earlier', coords: [75.8577, 22.7196], status: 'past' },
  { name: 'Chennai', where: 'Tamil Nadu', when: 'Earlier', coords: [80.2707, 13.0827], status: 'past' },
  { name: 'Yercaud', where: 'Tamil Nadu', when: 'Earlier', coords: [78.2097, 11.775], status: 'past' },

  // Ahead
  { name: 'Vaishno Devi', where: 'Jammu & Kashmir', when: 'Oct 2026', coords: [74.9319, 32.9917], status: 'ahead' },
  { name: 'Maldives', where: 'Indian Ocean', when: 'Nov 2026', coords: [73.5093, 4.1755], status: 'ahead' },
  { name: 'Sri Lanka', where: 'Colombo', when: 'Dec 2026', coords: [79.8612, 6.9271], status: 'ahead' },
  { name: 'Lucerne', where: 'Switzerland', when: 'May 2027', coords: [8.3093, 47.0502], status: 'ahead' },
  { name: 'Interlaken', where: 'Switzerland', when: 'Jun 2027', coords: [7.8632, 46.6863], status: 'ahead' },
  { name: 'Paris', where: 'France', when: 'Jun 2027', coords: [2.3522, 48.8566], status: 'ahead' },
  { name: 'Nice', where: 'France', when: 'Jun 2027', coords: [7.262, 43.7102], status: 'ahead' },
];

export const europe = {
  title: 'Two weeks in Europe, 2027',
  lede:
    'Four of us, fifteen nights, leaving at the end of May. Three routes were on ' +
    'the table; the one we are leaning towards trades Italy away to get both Paris ' +
    'and Switzerland properly rather than all three in a hurry.',
  legs: [
    { nights: '2', base: 'Lucerne', what: 'Chapel Bridge, Rigi, a lake cruise' },
    { nights: '3', base: 'Interlaken', what: 'Jungfraujoch, Mürren, Grindelwald' },
    { nights: '5', base: 'Paris', what: 'The Eiffel summit, a dinner on the Seine' },
    { nights: '5', base: 'Nice & Provence', what: 'Èze, Monaco, the Gorges du Verdon' },
  ],
  caveat:
    'Four bases in fifteen nights, which is the whole point — a group of four moves ' +
    'slowly, and every change of base costs half a day.',
};

export interface WishGroup {
  title: string;
  items: { place: string; season: string; note: string }[];
}

export const wishlist: WishGroup[] = [
  {
    title: 'Hills',
    items: [
      { place: 'Darjeeling & Gangtok', season: 'Mar–May, Oct–Nov', note: 'Toy train, Tsomgo Lake' },
      { place: 'Munnar', season: 'Sep–Mar', note: 'Tea estates, mist' },
      { place: 'Coorg', season: 'Oct–Mar', note: 'Coffee estates' },
      { place: 'Tawang', season: 'Apr–Oct', note: 'Offbeat, monasteries' },
      { place: 'Uttarakhand circuit', season: 'Oct–Jun', note: 'Haridwar to Mussoorie, by road' },
    ],
  },
  {
    title: 'Coast & islands',
    items: [
      { place: 'Andaman', season: 'Oct–May', note: 'Havelock and Neil — still open' },
      { place: 'Gokarna', season: 'Oct–Mar', note: 'The quiet answer to Goa' },
      { place: 'Lakshadweep', season: 'Oct–May', note: 'Permit-only, pristine' },
      { place: 'South Goa', season: 'Nov–Feb', note: 'Sunsets and shacks' },
    ],
  },
  {
    title: 'Heritage',
    items: [
      { place: 'Udaipur', season: 'Oct–Mar', note: 'City of lakes' },
      { place: 'Jaisalmer', season: 'Oct–Mar', note: 'Forts, desert camp' },
      { place: 'Varanasi', season: 'Oct–Mar', note: 'The Ganga aarti' },
      { place: 'Hampi', season: 'Oct–Feb', note: 'Ruins among boulders' },
      { place: 'Khajuraho & Orchha', season: 'Oct–Mar', note: 'Temples, riverside' },
    ],
  },
  {
    title: 'The ambitious ones',
    items: [
      { place: 'Ladakh', season: 'Jun–Sep', note: 'Leh, Pangong, Nubra' },
      { place: 'Spiti Valley', season: 'Jun–Sep', note: 'Rugged, genuinely remote' },
      { place: 'Valley of Flowers', season: 'Jul–Aug', note: 'A monsoon trek' },
      { place: 'Panch Kedar', season: 'May–Jun, Sep–Oct', note: 'Five temples, strenuous' },
    ],
  },
];
