/**
 * Content for /anime.
 *
 * Transcribed from a bookmark hierarchy kept across four revisions
 * (`Anime V4` → `Anime v3`). The taxonomy is the interesting part and it is
 * reproduced faithfully; truncated bookmark titles have been restored to
 * their real series names.
 *
 * ⚠️ No URLs. A little over half those bookmarks point at unofficial
 * streaming sites, and this page sits one click from /career.
 */

export const thesis = {
  kicker: 'Anime',
  headline: 'A backlog with a filing system.',
  dek:
    'I have kept this list in browser bookmarks for years, and rebuilt it four ' +
    'times. It has tiers, and the tiers have states. This is either organisation ' +
    'or a symptom.',
};

export interface Tier {
  name: string;
  gloss: string;
  states: { state: string; note: string; titles: string[] }[];
}

export const topTier: string[] = [
  'One Piece',
  'Attack on Titan',
  'Jujutsu Kaisen',
  'Bleach: Thousand-Year Blood War',
  'That Time I Got Reincarnated as a Slime',
  'The Seven Deadly Sins: Wrath of the Gods',
  'Battle Through the Heavens',
  'A Will Eternal',
];

export const newest: string[] = ["Frieren: Beyond Journey's End", 'Vinland Saga'];

export const tiers: Tier[] = [
  {
    name: 'Epic',
    gloss: 'The ones I will reorganise my week around.',
    states: [
      {
        state: 'Start new season',
        note: 'Aired, unstarted. The good problem.',
        titles: [
          'Mushoku Tensei',
          'Jujutsu Kaisen',
          'Kaiju No. 8',
          'The Rising of the Shield Hero',
          'Bleach',
          'Dr. Stone',
        ],
      },
      {
        state: 'Continue later',
        note: 'Mid-run, paused for no good reason.',
        titles: ['Nanatsu no Taizai: Fundo no Shinpan', 'Naruto'],
      },
      {
        state: 'Waiting for next season',
        note: 'Caught up. Nothing to do but wait.',
        titles: ['Demon Slayer', 'That Time I Got Reincarnated as a Slime'],
      },
    ],
  },
  {
    name: 'Normal',
    gloss: 'Good, but they wait their turn.',
    states: [
      {
        state: 'Continue later',
        note: '',
        titles: [
          'Wan Jie Xian Zong',
          'Haikyuu',
          'Kaguya-sama: Love is War',
          'Fire Force',
        ],
      },
      {
        state: 'Pick up, maybe?',
        note: 'The honest tier.',
        titles: ['Tokyo Revengers', 'Shangri-La Frontier'],
      },
    ],
  },
];

export const completed: string[] = ['Soul Land (Douluo Dalu)'];

/** The untiered backlog — seventy-odd, and the reason the tiers exist. */
export const backlog: string[] = [
  'Akame ga Kill',
  'Arifureta',
  'Ascendance of a Bookworm',
  'Black Butler',
  'Black Clover',
  'BLUELOCK',
  "BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense",
  'Chainsaw Man',
  "Chillin' in My 30s after Getting Fired from the Demon King's Army",
  'Classroom of the Elite',
  'Daily Life of the Immortal King',
  'Daily Lives of High School Boys',
  'DAN DA DAN',
  'DanMachi',
  'Forty Millenniums of Cultivation',
  'Gachiakuta',
  'Gintama',
  'Grand Blue Dreaming',
  'I Am a Great God',
  'I Got a Cheat Skill in Another World',
  'I Left My A-Rank Party to Help My Former Students',
  'Immortality',
  'InuYasha',
  'JoJo',
  'Kenja no Deshi wo Nanoru Kenja',
  'Kingdom',
  'KonoSuba',
  'Link Click',
  'Log Horizon',
  'Lord of Mysteries',
  'Martial Master',
  'Martial Universe',
  'MASHLE: Magic and Muscles',
  'Mo Dao Zu Shi',
  'My Isekai Life',
  'Noblesse',
  'Ousama Ranking',
  'Overlord',
  'Perfect World',
  'Platinum End',
  'Psycho-Pass',
  'Quanzhi Fashi',
  'Re:Zero',
  'Renegade Immortal',
  'Saihate no Paladin',
  'Scooped Up by an S-Rank Adventurer!',
  'Sentenced to Be a Hero',
  'Shikkakumon no Saikyou Kenja',
  'Solo Leveling',
  'Spy x Family',
  'Suppose a Kid from the Last Dungeon Boonies Moved to a Starter Town',
  'Swallowed Star',
  'Sword Art Online',
  'Tales of Demons and Gods',
  'Tensai Ouji no Akaji Kokka Saisei Jutsu',
  "The Beginning After the End",
  'The Eminence in Shadow',
  'The Irregular at Magic High School',
  "The King's Avatar",
  'The Magic Chef of Fire and Ice',
  'The Misfit of Demon King Academy',
  'The Reincarnation of the Strongest Exorcist in Another World',
  'The Water Magician',
  'Throne of Seal',
  'Tokyo Ghoul',
  'Tsukimichi — Moonlit Fantasy',
  'Uncle from Another World',
  'Vermeil in Gold',
  'WIND BREAKER',
  'Wonderland of Ten Thousands',
  'Xue Ying Lingzhu',
  'Ya Boy Kongming!',
  'Yong Sheng: Qizhuang Shanhe',
];
