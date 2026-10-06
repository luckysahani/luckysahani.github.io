/**
 * Content for /projects — IIT Kanpur, 2012–2016.
 *
 * Written from the project list on the old 2014-era site and Lucky's own
 * LinkedIn draft. Links go only to repositories on his own GitHub account.
 * The old site's contact block (phone, college email) is deliberately not
 * carried over, and teammates are not named.
 */

export const intro = {
  kicker: 'Projects',
  headline: 'Before Amazon: four years at IIT Kanpur.',
  dek:
    'B.Tech in Computer Science and Engineering, 2012 to 2016 — course and ' +
    'research projects, a summer on the campus surveillance cameras, a startup ' +
    'I co-founded, and the internship that led to ten years at Amazon.',
};

export interface Project {
  when: string;
  area: string;
  title: string;
  body: string;
  repos?: string[];
}

export const projects: Project[] = [
  {
    when: 'Jan–Apr 2016',
    area: 'Machine learning',
    title: 'Object detection and classification in surveillance video',
    body:
      'Separated moving objects from the background by frame differencing, cut them ' +
      'out of each video, and trained multiclass classifiers on HOG features — SVM, ' +
      'decision trees, random forests, AdaBoost and k-NN — to tell autos, rickshaws, ' +
      'cars, bicycles, motorcycles, pedestrians and number plates apart.',
    repos: ['MLT-Video-Classifier-Project'],
  },
  {
    when: 'Mar–Apr 2016',
    area: 'Systems',
    title: 'A Docker deployer',
    body:
      'Deploys any server code from a configuration — MongoDB as a single node, a ' +
      'replica set or shards — behind a load balancer whose servers can be added or ' +
      'terminated at runtime from the UI.',
  },
  {
    when: 'Aug–Nov 2015',
    area: 'Distributed systems',
    title: 'Skyline queries on MapReduce',
    body:
      'Adapted the BNL, SFS and bitmap skyline algorithms to MapReduce and ' +
      'benchmarked them on a Hadoop cluster with three physical worker nodes, ' +
      'partitioning by angle rather than by grid so every mapper gets some skyline points.',
  },
  {
    when: 'May–Jul 2015',
    area: 'Internship · Amazon, Bengaluru',
    title: 'A catalogue builder for sellers',
    body:
      'On the seller registration team: a tool that turned a seller’s raw product ' +
      'data into a listing feed, variations and all, with validation and errors shown ' +
      'in the UI, corrections and regeneration, and guidance for every attribute.',
  },
  {
    when: 'Aug–Nov 2014',
    area: 'Graphics',
    title: '3-D Tetris',
    body:
      'Tetris with a third dimension, in C++ with OpenGL and OpenAL — texture-mapped ' +
      'blocks, ambient lighting and particle effects, sound, and a heads-up display ' +
      'with the score and the next block.',
    repos: ['Tetris3D-OpenGL-Game'],
  },
  {
    when: 'May–Nov 2014',
    area: 'Computer vision · summer research',
    title: 'Number plates on the campus cameras',
    body:
      'Found the number plates on moving vehicles in the institute’s surveillance ' +
      'feed. A real-time adaptive Gaussian-mixture background model, with shadow ' +
      'detection, threw away empty frames; Viola–Jones classified the vehicles; ' +
      'morphological operations isolated plate regions as the first step towards ' +
      'OCR — tuned to hold up through changes in light and weather.',
    repos: ['Image_processing'],
  },
  {
    when: 'May–Jul 2014',
    area: 'Startup · co-founder',
    title: 'jutja.com',
    body:
      'Co-founded a project-management site that laid tasks out as mind maps, and ' +
      'built its front end — a single-page interface, with the mind-map visualisation ' +
      'in JavaScript on VivaGraph.',
  },
  {
    when: 'Jan–Apr 2014',
    area: 'Compilers',
    title: 'A Java-to-MIPS compiler',
    body:
      'A cross-compiler written in Python by a team of three: a lexer, a parser that ' +
      'emits parse trees for Graphviz, three-address code generated from semantic ' +
      'rules on the grammar, and a MIPS back end with register allocation and ' +
      'runtime library support.',
    repos: ['Compiler-Assignment-1', 'Compiler-Assignment-2', 'Compiler-Assignment-3-and-4'],
  },
  {
    when: 'May–Jul 2013',
    area: 'Machine learning · Programming Club',
    title: 'A content-based email classifier',
    body:
      'Sorted the public Enron corpus into categories with a bag-of-words model — ' +
      'multiclass SVM, naive Bayes and random forests, with POS tagging and stemming — ' +
      'in Python with NLTK, scikit-learn and Weka, plus a Gmail prototype in Apps ' +
      'Script. Up to 80% accuracy on balanced sets, as low as 45% on noisier ones.',
  },
  {
    when: 'Jan–Mar 2013',
    area: 'Algorithms',
    title: 'Planar graph visualisation',
    body:
      'Graph-drawing heuristics for planar graphs, and ways of minimising edge ' +
      'crossings for different kinds of data.',
  },
  {
    when: 'Jul–Oct 2012',
    area: 'First-semester project',
    title: 'Hexxagon',
    body:
      'The hexagonal board game in Python and pygame, for two players or against an ' +
      'AI with easy and hard levels.',
    repos: ['Hexxagon'],
  },
];

export const coursework =
  'Operating systems on Nachos, graph algorithms — max-flow, bipartite matching, ' +
  'minimum spanning trees — databases, software architecture and machine-learning ' +
  'assignments are on GitHub too.';
