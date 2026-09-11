/**
 * Content for /gaming, read from the Steam library on 10 Sep 2026.
 *
 * Aggregates are the true totals across all 174 owned titles. A handful of
 * adult visual novels in the library are deliberately not named — this page
 * sits one click from /career — but their hours are still counted in the
 * totals below, so the numbers stay honest.
 */

export const stats = {
  owned: 174,
  played: 42,
  never: 132,
  hours: 5587.6,
  days: 233,
  memberSince: 'September 2013',
};

export const hero = {
  game: 'Counter-Strike 2',
  hours: 4536.1,
  share: 81,
  lastPlayed: 'June 2026',
};

export interface Game {
  name: string;
  hours: number;
  last: string;
}

/** Everything except Counter-Strike 2, which has its own scale. */
export const played: Game[] = [
  { name: 'Crimson Desert Enhanced', hours: 132.3, last: 'Jun 2026' },
  { name: "Sid Meier's Civilization V", hours: 112.3, last: 'Jan 2018' },
  { name: 'ELDEN RING', hours: 103, last: 'Jun 2024' },
  { name: "Sid Meier's Civilization VI", hours: 97.4, last: 'Apr 2021' },
  { name: 'Clair Obscur: Expedition 33', hours: 73.2, last: 'Jul 2025' },
  { name: "Sid Meier's Civilization VII", hours: 69.7, last: 'Aug 2026' },
  { name: 'Far Cry 5', hours: 57.3, last: 'Mar 2019' },
  { name: 'Borderlands 4', hours: 57.2, last: 'Oct 2025' },
  { name: 'Far Cry Primal', hours: 48.1, last: 'Mar 2017' },
  { name: 'Far Cry New Dawn', hours: 27.1, last: 'May 2020' },
  { name: 'PAYDAY 2', hours: 26.8, last: 'Nov 2015' },
  { name: 'Rise of Nations: Extended Edition', hours: 26.2, last: 'Jul 2024' },
  { name: 'Call of Duty: Modern Warfare 3', hours: 23.1, last: 'May 2026' },
  { name: 'DOOM Eternal', hours: 21.2, last: 'Jul 2020' },
  { name: 'Age of Empires III', hours: 20.9, last: 'Nov 2019' },
  { name: 'Grand Theft Auto V', hours: 13, last: 'Jul 2020' },
  { name: 'The Witcher 2', hours: 12, last: 'Jan 2016' },
  { name: 'Left 4 Dead 2', hours: 11.9, last: 'Feb 2018' },
  { name: 'Battlefield 6', hours: 10.7, last: 'Feb 2026' },
  { name: 'Call of Duty: Advanced Warfare', hours: 10, last: 'May 2026' },
];

/** The long tail — played, but briefly. */
export const brief: string[] = [
  "Sid Meier's Civilization: Beyond Earth",
  'Split/Second',
  'Remnant: From the Ashes',
  'Defense Grid 2',
  'Batman: Arkham City',
  'Age of Empires IV',
  'Robotex',
  'The Elder Scrolls V: Skyrim',
  'Total War: WARHAMMER II',
  'The Witcher 3: Wild Hunt',
  'PUBG: BATTLEGROUNDS',
  'Orcs Must Die! 2',
  'Portal 2',
  'BioShock 2',
  'Titanfall 2',
  'Dead by Daylight',
];

export interface Series {
  name: string;
  titles: number;
  hours: number;
  note: string;
}

export const series: Series[] = [
  { name: 'Civilization', titles: 4, hours: 289.3, note: 'V, VI, VII and Beyond Earth. One more turn, four times over.' },
  { name: 'Far Cry', titles: 3, hours: 132.5, note: '5, Primal and New Dawn — and Far Cry 2 still unopened.' },
  { name: 'Call of Duty', titles: 2, hours: 33.1, note: 'Both picked up again in 2026, a decade after buying them.' },
  { name: 'Age of Empires', titles: 2, hours: 26.2, note: 'III got the hours; IV got a weekend.' },
];

/** In the library and queued — the ones worth getting to. */
export const neverPlayed: string[] = [
  'Red Dead Redemption 2',
  'Portal',
  'Dota 2',
  'Rocket League',
  'Mass Effect 2',
  'Grand Theft Auto IV',
  'The Elder Scrolls V: Skyrim Special Edition',
  'Metro 2033 Redux',
  'Metro: Last Light Redux',
  'Mortal Kombat 11',
  'ARK: Survival Evolved',
  'Call of Duty: Black Ops II',
  'Left 4 Dead',
  'Far Cry 2',
  'Styx: Master of Shadows',
  "Sid Meier's Civilization III",
];
