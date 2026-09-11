/**
 * Content for /anime.
 *
 * Titles come from a bookmark list kept across four revisions. Scores are
 * MyAnimeList, scraped 11 Sep 2026 — AniList's API was disabled and Jikan
 * was returning 504s, so the figures were read off MAL's own pages.
 *
 * `mal` records the exact entry that was scored, because a search often
 * resolves to a particular season or film rather than the base series, and
 * `raters` is shown because a score from 676 votes is not the same kind of
 * number as one from three million.
 *
 * ⚠️ No links. A good share of the original bookmarks point at unofficial
 * streaming sites, and this page sits one click from /career.
 */

export const thesis = {
  kicker: 'Anime',
  headline: 'Two traditions, ranked by everyone else.',
  dek:
    'I watch across both Chinese and Japanese animation, which are far more ' +
    'different than the word "anime" suggests. These are the ten best-regarded ' +
    'of each from my list — ordered by world rating rather than by my taste.',
};

export interface Ranked {
  rank: number;
  name: string;
  mal: string;
  score: number;
  raters: number;
  year: string;
}

export const chinese: Ranked[] = [
  { rank: 1,  name: 'Link Click',                 mal: 'Shiguang Dailiren',            score: 8.7,  raters: 195694, year: '2021' },
  { rank: 2,  name: 'Lord of Mysteries',          mal: 'Guimi Zhi Zhu',                score: 8.61, raters: 86145,  year: '2025' },
  { rank: 3,  name: 'Grandmaster of Demonic Cultivation', mal: 'Mo Dao Zu Shi',        score: 8.44, raters: 90073,  year: '2018' },
  { rank: 4,  name: 'Battle Through the Heavens', mal: 'Doupo Cangqiong: Nian Fan',    score: 8.4,  raters: 4383,   year: '2022' },
  { rank: 5,  name: 'Throne of Seal',             mal: 'Shen Yin Wangzuo',             score: 8.1,  raters: 4239,   year: '2022' },
  { rank: 6,  name: 'Swallowed Star',             mal: 'Tunshi Xingkong',              score: 8.07, raters: 4553,   year: '2020' },
  { rank: 7,  name: 'A Will Eternal',             mal: 'Yi Nian Yong Heng',            score: 7.98, raters: 6396,   year: '2020' },
  { rank: 8,  name: 'Soul Land',                  mal: 'Douluo Dalu',                  score: 7.94, raters: 13904,  year: '2018' },
  { rank: 9,  name: 'Martial Universe',           mal: 'Wu Dong Qian Kun S6',          score: 7.92, raters: 676,    year: '2025' },
  { rank: 10, name: "The King's Avatar",          mal: 'Quanzhi Gaoshou',              score: 7.85, raters: 185645, year: '2017' },
];

export const japanese: Ranked[] = [
  { rank: 1,  name: 'Bleach: Thousand-Year Blood War', mal: 'Bleach: Sennen Kessen-hen',   score: 8.98, raters: 397204,  year: '2022' },
  { rank: 2,  name: 'Gintama',                          mal: 'Gintama',                     score: 8.93, raters: 428553,  year: '2006' },
  { rank: 3,  name: "Frieren: Beyond Journey's End",    mal: 'Sousou no Frieren S2',        score: 8.84, raters: 293470,  year: '2026' },
  { rank: 4,  name: 'Vinland Saga',                     mal: 'Vinland Saga',                score: 8.78, raters: 1091038, year: '2019' },
  { rank: 5,  name: 'Haikyuu!!',                        mal: 'Karasuno vs Shiratorizawa',   score: 8.77, raters: 884649,  year: '2016' },
  { rank: 6,  name: 'One Piece',                        mal: 'One Piece',                   score: 8.73, raters: 1556317, year: '1999' },
  { rank: 7,  name: 'Attack on Titan',                  mal: 'Shingeki no Kyojin',          score: 8.58, raters: 3108837, year: '2013' },
  { rank: 8,  name: 'Demon Slayer',                     mal: 'Mugen Train',                 score: 8.53, raters: 1201183, year: '2020' },
  { rank: 9,  name: 'Jujutsu Kaisen',                   mal: 'Jujutsu Kaisen',              score: 8.49, raters: 2048588, year: '2020' },
  { rank: 10, name: 'Ranking of Kings',                 mal: 'Ousama Ranking',              score: 8.48, raters: 406594,  year: '2021' },
];

export const note =
  'Scores are MyAnimeList, read in September 2026. Where a search resolved to ' +
  'a particular season or film rather than the whole run, that entry is named ' +
  'underneath — and the vote count is there because a 7.92 from a few hundred ' +
  'people is a different claim from an 8.58 from three million.';
