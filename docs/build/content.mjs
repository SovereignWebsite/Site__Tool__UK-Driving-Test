// Content for the site. Facts about the test come from GOV.UK (read 24 November 2026). Rule summaries are written by this
// site in its own words from The Highway Code (Crown copyright, Open Government Licence v3.0), each linked to its rule.
// The practice questions are written by this site. None is copied from, or based on, the DVSA's revision question bank.
export const READ = '24 November 2026';
export const SITE = 'https://uk-driving-test.tool.sovereignweb.site';
export const OGL = 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/';
export const GOV = 'https://www.gov.uk';
export const HC = `${GOV}/guidance/the-highway-code`;

// Which Highway Code section page holds a rule.
export const sectionFor = (n) => {
  const x = typeof n === 'string' ? n.toLowerCase() : n;
  if (typeof x === 'string' && /^h[123]$/.test(x)) return 'introduction';
  n = Number(n);
  if (n <= 35) return 'rules-for-pedestrians-1-to-35';
  if (n <= 102) return 'rules-for-drivers-and-motorcyclists-89-to-102';
  if (n <= 158) return 'general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158';
  if (n <= 203) return 'using-the-road-159-to-203';
  if (n <= 225) return 'road-users-requiring-extra-care-204-to-225';
  if (n <= 237) return 'driving-in-adverse-weather-conditions-226-to-237';
  if (n <= 252) return 'waiting-and-parking-238-to-252';
  if (n <= 274) return 'motorways-253-to-273';
  if (n <= 287) return 'breakdowns-and-incidents-274-to-287';
  return 'road-works-level-crossings-and-tramways-288-to-307';
};
export const ruleUrl = (n) => `${HC}/${sectionFor(n)}#rule${String(n).toLowerCase()}`;
export const ruleLabel = (n) => (/^h/i.test(String(n)) ? `Rule ${String(n).toUpperCase()}` : `Rule ${n}`);

// Facts about the test, all from GOV.UK's "Theory test: cars" pages, read on READ.
export const TEST = {
  hub: `${GOV}/theory-test`,
  parts: {
    book: `${GOV}/theory-test/book-test`,
    revision: `${GOV}/theory-test/revision-and-practice`,
    take: `${GOV}/theory-test/what-to-take`,
    arrive: `${GOV}/theory-test/when-you-arrive-at-the-test-centre`,
    mcq: `${GOV}/theory-test/multiple-choice-questions`,
    hazard: `${GOV}/theory-test/hazard-perception-test`,
    pass: `${GOV}/theory-test/pass-mark-and-result`,
    support: `${GOV}/theory-test/reading-difficulty-disability-or-health-condition`,
  },
  book: `${GOV}/book-theory-test`,
  practice: `${GOV}/take-practice-theory-test`,
};

export const TOPICS = [
  {
    slug: 'fit-to-drive', title: 'Fit to drive and paying attention',
    blurb: 'Tiredness, eyesight, alcohol, drugs, medicine, phones and other distractions.',
    intro: 'Before the car matters, the driver does. These rules are about being well enough, awake enough and focused enough to drive.',
    rules: [
      [90, 'You must be fit to drive. You must tell the DVLA about any health condition that is likely to affect your driving.'],
      [91, 'Tiredness greatly raises the risk of a collision. Do not start a journey tired, get enough sleep before a long one, and plan to avoid long drives in the small hours when alertness is naturally at its lowest.'],
      [92, 'In good daylight you must be able to read a number plate from 20 metres (20.5 metres for the old style of plate). If you need glasses or contact lenses to do that, wear them every time you drive.'],
      [93, 'If bright sunlight dazzles you, slow down, and stop if you need to.'],
      [95, 'Do not drink and drive. Alcohol seriously affects judgement and ability. The legal limits differ between England and Wales and Scotland, so read the rule for the figures.'],
      [96, 'You must not drive under the influence of drugs or medicine. Ask a doctor or pharmacist about any medicine, and do not drive if you are told you may be impaired.'],
      [148, 'Safe driving needs concentration. Avoid distractions such as loud music, reading maps, fiddling with the radio, arguing, eating, drinking and smoking.'],
      [149, 'You must keep proper control of the vehicle. You must not use a hand-held phone or similar device while driving or supervising a learner, even if you are stopped in traffic. There are narrow exceptions, such as calling 999 in a genuine emergency when it is unsafe or impractical to stop.'],
      [150, 'Sat navs and other in-vehicle systems can distract you. You stay responsible for the vehicle, and driver assistance does not change that.'],
    ],
  },
  {
    slug: 'before-you-set-off', title: 'Before you set off',
    blurb: 'Roadworthy vehicle, licence and insurance, seat belts, child restraints and moving off safely.',
    intro: 'A short checklist, and the law behind it: the vehicle, the paperwork, the people in it, and the check around you before you move.',
    rules: [
      [89, 'Your vehicle and any trailer must meet the legal construction and lighting requirements.'],
      [97, 'Before you set off you must have a valid licence and insurance for the vehicle, and the vehicle must be legal and roadworthy.'],
      [99, 'You must wear a seat belt in a car, van or other goods vehicle where one is fitted. The rule has a table, and a few exemptions, for example for some medical reasons.'],
      [100, 'The driver must make sure children under 14 wear a seat belt or sit in an approved child restraint where required. A child under 1.35 metres tall must use a child seat, booster seat or booster cushion suited to their weight.'],
      [101, 'Never fit a rear-facing baby seat in a seat protected by an active front airbag.'],
      [102, 'Check that child restraints are fitted to the maker’s instructions, and let children out of the car on the kerb side.'],
      [159, 'Before moving off: check all mirrors, look round for blind spots, signal if it helps anyone, then take a final look round. Go only when it is safe.'],
    ],
  },
  {
    slug: 'speed-and-stopping', title: 'Speed, space and stopping',
    blurb: 'Speed limits, safe speed, braking, skids and the gap to keep.',
    intro: 'A limit is a ceiling, not a target. These rules cover how fast, how far back, and how to stop.',
    rules: [
      [124, 'You must not exceed the limit for the road and your vehicle. Roads with street lights generally have a 30 mph limit (20 mph in Wales) unless signs say otherwise. For a car: 60 mph on a single carriageway, 70 mph on a dual carriageway or motorway. Cars towing have lower limits, so check the table.'],
      [125, 'The limit is the absolute maximum. It does not make that speed safe in every condition, and unsafe speed makes collisions both more likely and more severe.'],
      [126, 'Drive so you can stop well within the distance you can see to be clear. Allow at least a two-second gap on fast roads, at least double that in the wet, and up to ten times as much on ice.'],
      [117, 'Normal braking: brake early and lightly, firmer as you begin to stop, easing off just before you stop.'],
      [118, 'In an emergency, brake straight away, but try not to lock the wheels, because locked wheels can mean losing control.'],
      [119, 'Skids usually come from braking, accelerating or steering too harshly, or from going too fast for the conditions. Remove the cause, for example by easing off.'],
      [122, 'Coasting (neutral or clutch down) reduces your control, so avoid it.'],
      [146, 'Fit your driving to the road and conditions. Do not treat speed limits as targets.'],
      [152, 'In residential streets drive slowly and carefully: people, cyclists and parked cars are likely, and some areas have a 20 mph limit.'],
      [153, 'Slow down for traffic calming such as humps and chicanes, and give cyclists and motorcyclists room.'],
      [154, 'Country roads: slow for bends, which can be sharper than they look, and for hidden junctions. Expect walkers, riders, farm vehicles and mud.'],
    ],
  },
  {
    slug: 'signals-lights-and-markings', title: 'Signals, lights, the horn and road markings',
    blurb: 'Signals, flashing headlights, the horn, lights at night and in fog, hazard lights and white lines.',
    intro: 'How you talk to other road users, and how the road talks to you.',
    rules: [
      [103, 'Signals warn and inform other road users, including pedestrians. Give clear signals in good time, having checked the signal is not misleading.'],
      [104, 'Watch for other people’s signals, and remember that an indicator may have been left on by mistake.'],
      [105, 'You must obey signals from police officers, traffic officers, traffic wardens and school crossing patrols.'],
      [110, 'Flash your headlights only to let others know you are there. Never use them to send any other message.'],
      [111, 'Never assume a flash of headlights is an invitation to go. Use your own judgement and proceed carefully.'],
      [112, 'Use the horn only while moving and only to warn of your presence. Never sound it aggressively. There are also restrictions on using it while stationary in a built-up area at night.'],
      [113, 'Sidelights and rear plate lights must be lit between sunset and sunrise, and you use headlights at night except on roads with street lighting.'],
      [114, 'Do not dazzle other road users. Use front or rear fog lights only when visibility is seriously reduced, and switch them off when it improves.'],
      [116, 'Hazard warning lights may be used when stationary to warn that you are temporarily obstructing traffic. You must not use them while driving, except on a motorway or unrestricted dual carriageway to warn of a hazard or obstruction ahead.'],
      [127, 'A broken white line marks the centre of the road. When the line lengthens and the gaps shorten, there is a hazard ahead.'],
      [129, 'Double white lines with the solid line nearest you: you must not cross or straddle it, except in the limited cases the rule lists, such as turning into a side road.'],
      [132, 'Reflective studs: white mark lanes or the middle of the road, red mark the left edge, amber mark the central reservation, green mark lay-by and slip road edges.'],
    ],
  },
  {
    slug: 'lanes-and-overtaking', title: 'Lanes, overtaking and being overtaken',
    blurb: 'Changing lane, dual carriageways, special lanes, and when overtaking is and is not safe.',
    intro: 'Choosing a lane well and overtaking only when it is safe and legal, and helping others overtake you.',
    rules: [
      [133, 'To change lane: mirrors, a quick glance if needed, signal when it is safe, then move over when it is clear.'],
      [137, 'On a two-lane dual carriageway stay in the left lane. Use the right-hand lane to overtake or turn right, then move back left when safe.'],
      [140, 'You must not drive or park in a cycle lane marked by a solid white line during its hours. Avoid a broken-line cycle lane unless unavoidable.'],
      [141, 'Unless signs say otherwise, do not drive in a bus lane while it is operating.'],
      [160, 'Keep to the left unless you are overtaking, turning right or passing parked vehicles or pedestrians in the road.'],
      [162, 'Before overtaking, make sure the road ahead is clear, nobody is starting to overtake you, and there is a gap to move into.'],
      [163, 'Overtake only when safe and legal. When passing cyclists, as a guide leave at least 1.5 metres at speeds up to 30 mph, and more at higher speeds. For horse riders and horse-drawn vehicles, pass at under 10 mph and leave at least 2 metres.'],
      [164, 'Drop back when you want to overtake a large vehicle. You see more and the driver can see you. It takes longer to pass one.'],
      [165, 'You must not overtake if it would mean crossing double white lines with a solid line nearest you, entering a protected area bordered by a solid white line, or going past a ‘no overtaking’ sign, among other cases listed in the rule.'],
      [166, 'Do not overtake if there is any doubt, or where you cannot see far enough ahead, for example approaching a bend, a hump bridge or the brow of a hill.'],
      [167, 'Do not overtake where you might come into conflict with others, for example at or approaching a junction, where the road narrows, or near a school crossing patrol.'],
      [168, 'When someone overtakes you, keep a steady course and speed, slowing if needed. Never speed up.'],
      [169, 'Do not hold up a long queue. Pull in where it is safe and let traffic pass.'],
    ],
  },
  {
    slug: 'junctions-roundabouts-and-crossings', title: 'Junctions, roundabouts and crossings',
    blurb: 'Stop and give way, box junctions, traffic lights, turning, roundabouts and pedestrian crossings.',
    intro: 'Where paths cross, priority matters. These rules cover who goes first, and how to approach.',
    rules: [
      [171, 'At a Stop sign with a solid white line you must stop behind the line, then wait for a safe gap.'],
      [172, 'At a Give Way sign or broken white lines across the road, you must give way to traffic on the main road.'],
      [174, 'Box junctions have yellow criss-cross lines. You must not enter until your exit is clear, though you may wait in the box to turn right if only oncoming traffic stops you.'],
      [175, 'At traffic lights you must stop at the line unless the light is green. If amber appears, you may go on only if you have already crossed the line or are so close that stopping might cause a collision.'],
      [176, 'You must not cross the line on red. On green, go only if there is room to clear the junction.'],
      [178, 'At an advanced stop line for cyclists, motorists must stop at the first white line if the light is amber or red.'],
      [182, 'Signal left in good time. Do not overtake just before turning left, and watch for traffic and cyclists on your left.'],
      [183, 'When turning, give way to vehicles in bus lanes, cycle lanes, cycle tracks and tramways, from either direction.'],
      [184, 'Approach a roundabout using all the information from signs, signals and lane markings, and use Mirrors, Signal, Manoeuvre.'],
      [185, 'At a roundabout, give priority to traffic from your right unless signs, markings or lights say otherwise.'],
      [188, 'At a mini-roundabout all vehicles must pass round the central marking, except large vehicles that physically cannot. Avoid U-turns there.'],
      [191, 'You must not park on a crossing or on its zig-zag lines, and must not overtake the moving vehicle nearest the crossing, or one stopped to give way.'],
      [195, 'At a zebra crossing, give way to pedestrians waiting, and you must give way once someone has stepped on. Do not wave people across, flash or sound your horn.'],
      [196, 'At a pelican crossing you must stop on red. On flashing amber you must give way to anyone on the crossing, and may proceed with care if it is clear.'],
      [199, 'Toucan, puffin and equestrian crossings follow the ordinary traffic light sequence, with no flashing amber phase.'],
      ['H2', 'At a junction, give way to pedestrians crossing or waiting to cross the road you are turning into or out of.'],
      ['H3', 'Do not cut across cyclists or horse riders going straight ahead when you turn. Wait for a safe gap.'],
    ],
  },
  {
    slug: 'vulnerable-road-users', title: 'Vulnerable road users and large vehicles',
    blurb: 'Pedestrians, children, cyclists, motorcyclists, horse riders, learners, emergency vehicles and big vehicles.',
    intro: 'The Highway Code puts the most responsibility on those who can do the most harm. These rules are the detail.',
    rules: [
      ['H1', 'Everyone is responsible for the safety of others, but those in charge of vehicles that can cause the most harm carry the greatest responsibility to reduce danger.'],
      [205, 'Children, especially, may step into the road without warning. Drive at a speed that suits the conditions with that in mind.'],
      [207, 'Some pedestrians are particularly vulnerable: children, older people and people with disabilities. Speed matters hugely. At 40 mph a pedestrian struck will probably be killed; at 20 mph the chance is far lower.'],
      [208, 'Near schools drive slowly, and watch for young cyclists and pedestrians.'],
      [210, 'You must stop when a school crossing patrol shows a ‘Stop for children’ sign.'],
      [211, 'Motorcyclists and cyclists are often hard to see, especially at junctions, roundabouts, when overtaking you or filtering through traffic. Look carefully.'],
      [212, 'Give motorcyclists, cyclists, horse riders and pedestrians in the road at least as much room as you would a car, and more in bad weather and at night.'],
      [213, 'Cyclists may ride in the centre of the lane on narrow roads, at junctions and in slow traffic. It is safer for them, so allow it.'],
      [214, 'Passing animals: slow down, give room, and do not scare them with the horn or revving.'],
      [215, 'Pass horse riders and horse-drawn vehicles wide and slowly.'],
      [217, 'Be patient with learner and newly qualified drivers.'],
      [219, 'When an emergency vehicle approaches, stay calm, think about its route, and let it pass while following traffic signs. Avoid stopping before a bend, brow or narrow section.'],
      [221, 'Large vehicles need extra road space to turn, and their drivers cannot see directly behind. If you cannot see their mirrors, they cannot see you.'],
      [223, 'Give priority to buses and trams when it is safe, especially when they signal to pull away.'],
    ],
  },
  {
    slug: 'weather', title: 'Driving in bad weather',
    blurb: 'Rain, ice, snow, wind, fog and hot weather.',
    intro: 'Grip, sight and control all change with the weather. So should how you drive.',
    rules: [
      [226, 'Use headlights when visibility is seriously reduced, generally when you cannot see further than 100 metres. Fog lights only then, and off again when it clears.'],
      [227, 'In the wet, stopping distances are at least double. Keep well back, ease off if the steering goes light, and take extra care around vulnerable road users.'],
      [228, 'In icy or snowy weather do not drive unless your journey is essential. If it is, take great care and allow more time.'],
      [229, 'Clear all snow and ice from every window, the mirrors, lights and number plates before setting off.'],
      [230, 'On ice and snow, stopping distances can be ten times greater than on dry roads. Keep well back.'],
      [231, 'On ice, drive slowly in as high a gear as possible, and accelerate and brake very gently.'],
      [232, 'Strong wind affects high-sided vehicles most, but can also blow cars, cyclists, motorcyclists and horse riders off course, especially on open stretches.'],
      [234, 'Before entering fog, check your mirrors and slow down. Fog can suddenly be thicker than it looks.'],
      [235, 'In fog keep a safe distance and be able to stop well within what you can see. Rear lights ahead can give a false sense of security.'],
      [236, 'Do not use fog lights unless visibility is seriously reduced: they dazzle others and can hide your brake lights.'],
      [237, 'In hot weather keep the vehicle ventilated to avoid drowsiness, and be aware the road surface can soften, or become slippery when it rains after a dry spell.'],
    ],
  },
  {
    slug: 'motorways', title: 'Motorways',
    blurb: 'Joining, lane discipline, overtaking, signals, the hard shoulder and leaving.',
    intro: 'Faster traffic and less time to react. These rules keep you safe and keep traffic flowing.',
    rules: [
      [253, 'Certain road users must not use motorways, including pedestrians, cyclists and horse riders. A provisional car licence holder must not drive on one unless accompanied by an approved driving instructor in a dual-control car showing L plates (D plates in Wales).'],
      [254, 'Traffic moves faster, so use your mirrors earlier and look much further ahead.'],
      [257, 'Flashing amber signals warn of a hazard ahead. Slow down and be ready. Speed up only once you pass a signal that is not flashing or a sign showing the national speed limit or ‘END’.'],
      [258, 'A red flashing signal or red ‘X’ means a closed lane. You must not drive in it. If all lanes are closed the road is closed.'],
      [259, 'When joining, give priority to traffic already on the motorway, match its speed, and do not cross solid white lines or use the hard shoulder.'],
      [261, 'You must not exceed a speed limit shown in a red circle, or the limit for your vehicle.'],
      [262, 'Motorway driving can make you sleepy. Take breaks at service areas.'],
      [263, 'You must not reverse, cross the central reservation or drive against the flow. If you miss your exit, carry on to the next one.'],
      [264, 'Keep in the left lane unless overtaking, and return to it when safe.'],
      [267, 'Overtake on the right only, after checking mirrors and blind spots, and take care not to cut in. Look out for motorcyclists.'],
      [268, 'Do not overtake on the left. In congested traffic you may keep up with your own lane even if it passes a slower lane to the right, but do not weave.'],
      [269, 'You must not use the hard shoulder except in an emergency, or when directed by police, traffic officers or a sign.'],
      [271, 'You must not stop on the carriageway, hard shoulder, slip road, central reservation or verge except in an emergency or when told to. Do not stop to make or take phone calls.'],
      [274, 'After leaving, your speed may be higher than you realise. 50 mph can feel like 30 mph, so check your speedometer.'],
    ],
  },
  {
    slug: 'parking-breakdowns-and-incidents', title: 'Parking, breakdowns, incidents, level crossings and road works',
    blurb: 'Where not to park, what to do when something goes wrong, railway crossings and road works.',
    intro: 'The rules for when you stop, when something goes wrong, and when the road has changed.',
    rules: [
      [238, 'You must not wait or park on yellow lines during the times shown. Double yellow lines mean no waiting at any time, even without upright signs.'],
      [240, 'You must not stop or park at a pedestrian crossing or its zig-zags, on a clearway, in a taxi bay, in a bus or cycle lane during its hours, and in other places the rule lists.'],
      [241, 'Do not use parking spaces reserved for others, such as Blue Badge holders, unless you are entitled to.'],
      [242, 'Do not leave your vehicle in a dangerous position or where it causes unnecessary obstruction.'],
      [243, 'Do not stop or park near a school entrance, where it blocks emergency access, at or near bus stops, or on the approach to a level crossing, among other places listed.'],
      [252, 'Parking on a hill: close to the kerb with the handbrake firmly on. Facing uphill, forward gear and wheels turned away from the kerb. Facing downhill, reverse gear and wheels turned towards the kerb.'],
      [275, 'If you must stop after a breakdown or incident, try to stop in a place of relative safety, where you, your passengers and the vehicle are less at risk from moving traffic.'],
      [276, 'If you break down, think of other road users first and get off the road if you can. Use hazard lights if you are causing an obstruction.'],
      [277, 'On a motorway, leave at the next exit or service area if you can. If not, move left, stop as far left as possible, switch on hazard lights, and leave by the side away from traffic if it is safe.'],
      [283, 'At an incident: stop in a place of relative safety, use hazard lights, ask for engines to be switched off, ring 999, and do not move injured people unless they are in immediate danger.'],
      [286, 'If a collision causes damage or injury you must stop and give your details. If you do not do so at the time, report to the police as soon as reasonably practicable and in any case within 24 hours.'],
      [288, 'When the ‘Road Works Ahead’ sign is displayed, take extra care and watch for further signs. Obey all signs and speed limits.'],
      [291, 'Approach a level crossing with care. Never drive onto one until the road is clear on the far side.'],
      [293, 'At controlled crossings you must always obey the flashing red stop lights and stop behind the line. Never zig-zag round half-barriers.'],
      [299, 'If you break down on a level crossing, get everyone out and clear immediately and use the railway telephone if there is one.'],
    ],
  },
];

// Practice questions, written by this site from the rules cited. Not official questions.
// q, o (options), a (index of the right one), w (why), r (rule numbers)
const Q = (q, o, a, w, ...r) => ({ q, o, a, w, r });
export const QUIZ = {
  'fit-to-drive': [
    Q('You feel sleepy before a long motorway journey. What is the best decision?', ['Open the windows and turn the music up', 'Do not start until you have rested', 'Drive fast to get there sooner', 'Plan to stop only if you start nodding off'], 1, 'Tiredness greatly raises your collision risk, and the Code says not to begin a journey when you are tired.', 91),
    Q('You wear glasses to read a number plate at 20 metres. When must you wear them to drive?', ['Only at night', 'Only on motorways', 'All the time you are driving', 'Only when the sun is low'], 2, 'If you need glasses or contact lenses to meet the 20 metre standard, you must wear them at all times while driving.', 92),
    Q('The low sun is dazzling you. What should you do?', ['Slow down, and stop if you need to', 'Speed up to get out of the glare', 'Pull the sun visor down and carry on at the same speed', 'Flash your headlights at oncoming traffic'], 0, 'Rule 93 says to slow down and, if necessary, stop when dazzled.', 93),
    Q('You take a medicine and the leaflet says it may make you drowsy. What should you do?', ['Drive if you feel fine', 'Drive, but only on quiet roads', 'Ask a doctor or pharmacist, and do not drive if you may be impaired', 'Take a smaller dose and drive'], 2, 'You must not drive under the influence of drugs or medicine. Check advice and do not drive if you may be impaired.', 96),
    Q('Your phone rings while you are stopped at red traffic lights, engine running. May you pick it up?', ['Yes, because you are not moving', 'Yes, if it is a short call', 'No, the ban applies even when stationary in traffic', 'Yes, if the lights have just turned red'], 2, 'You must not pick up and use a hand-held phone even while stationary in traffic.', 149),
    Q('Which of these can distract you and should be avoided while driving?', ['Checking your mirrors', 'Arguing with a passenger', 'Reading road signs', 'Using your indicators'], 1, 'Arguing, loud music, reading maps and adjusting the radio are listed as distractions.', 148),
    Q('You have a health condition that is likely to affect your driving. What must you do?', ['Nothing, if you feel well that day', 'Tell your insurer only', 'Report it to the DVLA', 'Drive only in daylight'], 2, 'You must report to the DVLA any health condition likely to affect your driving.', 90),
  ],
  'before-you-set-off': [
    Q('Who is responsible for making sure a 10-year-old child wears a seat belt or suitable restraint in your car?', ['The child', 'The child’s parent, even if you are driving', 'The driver', 'Nobody, at that age'], 2, 'The driver must make sure children under 14 use a seat belt or approved restraint where required.', 100),
    Q('A child is 1.2 metres tall. Which is correct?', ['An adult seat belt alone is enough', 'They need a child seat, booster seat or booster cushion suited to their weight', 'They can sit in front without any restraint', 'A lap belt only is fine'], 1, 'A child under 1.35 metres tall must use a baby seat, child seat, booster seat or booster cushion suitable for their weight.', 100),
    Q('Where must you never fit a rear-facing baby seat?', ['On the back seat', 'In a seat protected by an active front airbag', 'In the middle seat', 'In a van'], 1, 'In a crash an active airbag can seriously injure or kill a child in a rear-facing seat.', 101),
    Q('Before pulling away from the kerb, what should you do after checking your mirrors?', ['Look round for blind spots, signal if needed, then take a final look', 'Move off straight away', 'Sound your horn', 'Switch on your hazard lights'], 0, 'Mirrors, blind spots, signal if necessary, then a final check round before moving off.', 159),
    Q('Before driving a vehicle, which of these must you have?', ['A valid licence and insurance for that vehicle', 'A full tank of fuel', 'A satnav', 'A passenger to help you navigate'], 0, 'You must have a valid licence and insurance, and the vehicle must be legal and roadworthy.', 97),
    Q('Which door should children use to get out of the car where possible?', ['The one nearest the traffic', 'The one nearest the kerb', 'The boot', 'Whichever is nearest'], 1, 'Children should get in and out through the door nearest the kerb.', 102),
  ],
  'speed-and-stopping': [
    Q('What is the national speed limit for a car on a single carriageway?', ['50 mph', '60 mph', '70 mph', '40 mph'], 1, 'For a car, the Code’s table gives 60 mph on single carriageways and 70 mph on dual carriageways and motorways.', 124),
    Q('A road has street lights and no speed limit signs. What limit generally applies in England?', ['20 mph', '30 mph', '40 mph', '50 mph'], 1, 'Roads with street lights generally have a 30 mph limit unless signs show otherwise. In Wales the generally applicable limit is 20 mph.', 124),
    Q('The speed limit is 60 mph but the road is icy. What does the limit mean?', ['It is the safe speed to aim for', 'It is the absolute maximum, not a target', 'It does not apply in bad weather', 'It is a minimum'], 1, 'The limit is the absolute maximum and does not mean it is safe to drive at that speed in all conditions.', 125, 146),
    Q('On a fast dry road, what is the minimum gap to leave from the vehicle in front?', ['One second', 'Two seconds', 'Half a second', 'As close as feels comfortable'], 1, 'Allow at least a two-second gap on high-speed roads, doubled in the wet.', 126),
    Q('It is raining. How should you change your gap to the vehicle in front?', ['Keep it the same', 'Halve it', 'At least double it', 'Close it up so you can see better'], 2, 'In the wet the gap should be at least doubled, because tyres have less grip.', 126, 227),
    Q('What is the safest way to brake in normal driving?', ['Brake hard and late', 'Brake early and lightly, firmer as you slow, easing off before you stop', 'Use the handbrake', 'Pump the pedal'], 1, 'The safest way is to brake early and lightly, then more firmly, then ease off just before stopping.', 117),
    Q('Your car starts to skid. What is the usual first step?', ['Remove the cause, for example ease off the brake or accelerator', 'Brake harder', 'Accelerate hard', 'Pull the handbrake'], 0, 'Skids are usually caused by harsh braking, accelerating or steering, or excess speed. Remove the cause.', 119),
    Q('Why should you avoid coasting in neutral or with the clutch down?', ['It wastes fuel', 'It reduces your control', 'It overheats the engine', 'It is illegal'], 1, 'Coasting removes engine braking and can reduce control, including steering response and brake effectiveness.', 122),
  ],
  'signals-lights-and-markings': [
    Q('Another driver flashes their headlights at a junction. What should you assume?', ['That they are giving way to you', 'That they are telling you they are there, so decide for yourself', 'That you must go now', 'That they want you to flash back'], 1, 'Never assume flashing headlights are an invitation to proceed. Use your own judgement.', 110, 111),
    Q('When may you use your horn?', ['Whenever you want to show annoyance', 'While moving, to warn others of your presence', 'To say thank you', 'To hurry a driver in front'], 1, 'Use the horn only while moving and only to warn of your presence, never aggressively.', 112),
    Q('When may you use front or rear fog lights?', ['Whenever it is dark', 'Whenever it is raining', 'Only when visibility is seriously reduced', 'In all bad weather'], 2, 'Fog lights dazzle others and can hide your brake lights, so use them only when visibility is seriously reduced.', 114, 236),
    Q('Are you allowed to drive with hazard warning lights flashing on a single carriageway to warn of a queue behind you?', ['Yes, always', 'No, only on a motorway or unrestricted dual carriageway to warn of a hazard ahead', 'Yes, in fog', 'Yes, in the rain'], 1, 'You must not use hazard lights while driving unless on a motorway or unrestricted dual carriageway to warn drivers behind of a hazard or obstruction ahead.', 116),
    Q('The centre white line lengthens and the gaps between the dashes get shorter. What does this tell you?', ['The road is ending', 'There is a hazard ahead', 'You may overtake', 'A speed limit starts'], 1, 'A lengthening centre line with shortening gaps warns of a hazard ahead.', 127),
    Q('On a road with double white lines, the solid line is nearest to you. What does this mean?', ['You may cross if you are in a hurry', 'You must not cross or straddle it, with limited exceptions', 'You must overtake', 'It marks a bus lane'], 1, 'With the solid line nearest you, you must not cross or straddle it except in the limited cases the rule lists.', 129),
    Q('What colour road studs mark the left-hand edge of the carriageway?', ['White', 'Amber', 'Red', 'Green'], 2, 'Red studs mark the left edge, white the lanes or centre, amber the central reservation, green lay-bys and slip roads.', 132),
    Q('A police officer signals you to stop. What must you do?', ['Slow down and carry on', 'Obey the signal', 'Stop only if they use a siren', 'Ignore it if you are in a hurry'], 1, 'You must obey signals given by police officers.', 105),
  ],
  'lanes-and-overtaking': [
    Q('On a two-lane dual carriageway where should you normally drive?', ['The right-hand lane', 'The left-hand lane', 'Straddling both lanes', 'Wherever is clearest'], 1, 'Stay in the left lane and use the right lane to overtake or turn right.', 137),
    Q('Which of these places is it wrong to overtake?', ['On a long straight with clear view ahead', 'On the approach to a bend you cannot see round', 'On a dual carriageway with a clear lane', 'After a clear ‘overtaking allowed’ stretch'], 1, 'Do not overtake where you cannot see far enough ahead, such as approaching a corner, hump bridge or the brow of a hill.', 166),
    Q('You want to overtake a long lorry. What should you do first?', ['Move up close behind it', 'Drop back to see better and be seen', 'Flash your headlights', 'Sound your horn'], 1, 'Dropping back lets you see further ahead and lets the driver see you in their mirrors.', 164),
    Q('As a guide, how much room should you leave when overtaking a cyclist at up to 30 mph?', ['At least 0.5 metres', 'At least 1 metre', 'At least 1.5 metres', 'At least 3 metres'], 2, 'Rule 163 gives at least 1.5 metres as a guide at speeds up to 30 mph, and more at higher speeds.', 163),
    Q('Someone is overtaking you. What should you do?', ['Speed up to stop them', 'Keep a steady course and speed, slowing down if necessary', 'Move into the middle of the road', 'Brake sharply'], 1, 'Never obstruct drivers who want to pass. Speeding up or driving unpredictably is dangerous.', 168),
    Q('A solid white line marks a cycle lane. May you drive in it while it is operating?', ['Yes, if it is empty', 'No, you must not', 'Yes, if you are turning left', 'Yes, at night'], 1, 'You must not drive or park in a cycle lane marked by a solid white line during its times of operation.', 140),
    Q('Which of these is a place where you should not overtake?', ['On a straight section of dual carriageway', 'Approaching a junction', 'In a clear stretch of motorway', 'When the road ahead is empty for a long way'], 1, 'Do not overtake where you may come into conflict with others, including at or approaching a road junction.', 167),
    Q('You are being held up by a slow vehicle but there is a double white line with the solid line on your side. What do you do?', ['Overtake quickly', 'Do not overtake, with limited exceptions', 'Flash the vehicle in front', 'Overtake on the left'], 1, 'You must not overtake if it would mean crossing or straddling double white lines with the solid line nearest you.', 165),
  ],
  'junctions-roundabouts-and-crossings': [
    Q('You come to a junction with a Stop sign and a solid white line. What must you do?', ['Slow down and go if clear', 'Stop behind the line', 'Stop only if traffic is coming', 'Give way only to the right'], 1, 'You must stop behind the line, then move off only when there is a safe gap.', 171),
    Q('The traffic light turns amber as you approach. When may you carry on?', ['Always', 'Never', 'Only if you have already crossed the line or are so close that stopping might cause a collision', 'Only if nobody is behind you'], 2, 'On amber you may go on only if you have crossed the stop line or stopping might cause a collision.', 175),
    Q('When may you enter a box junction?', ['Whenever the lights are green', 'When your exit road or lane is clear, or you are waiting to turn right and only oncoming traffic stops you', 'When you are in a hurry', 'Only at night'], 1, 'You must not enter until your exit is clear, except to wait to turn right when stopped only by oncoming traffic or others turning right.', 174),
    Q('At a roundabout, who normally has priority?', ['Traffic from your left', 'Traffic from your right', 'Traffic already off the roundabout', 'The largest vehicle'], 1, 'Give priority to traffic approaching from your right, unless signs, markings or lights say otherwise.', 185),
    Q('A pedestrian has stepped onto a zebra crossing. What must you do?', ['Wave them across and drive on', 'Give way', 'Sound your horn', 'Slow down and pass quickly behind'], 1, 'You must give way once a pedestrian has moved onto a zebra crossing. Do not wave, flash or sound your horn.', 195),
    Q('At a pelican crossing the amber light is flashing and a pedestrian is still crossing. What must you do?', ['Carry on', 'Give way to them', 'Sound your horn', 'Speed up'], 1, 'When the amber light is flashing you must give way to any pedestrians on the crossing.', 196),
    Q('You are turning left at a junction and a pedestrian is crossing the road you are turning into. What should you do?', ['Go ahead, you are turning', 'Give way to them', 'Beep and edge forward', 'Wave them back'], 1, 'At a junction you should give way to pedestrians crossing or waiting to cross the road you are turning into.', 'H2'),
    Q('A cyclist is riding straight ahead past a junction you want to turn into. What should you do?', ['Turn across them, you are bigger', 'Wait for a safe gap and do not cut across them', 'Overtake them just before the turn', 'Sound your horn'], 1, 'Do not turn if it would make a cyclist going ahead stop or swerve. Wait for a safe gap.', 'H3'),
    Q('You approach a mini-roundabout. Which is correct?', ['Drive straight over the centre', 'Pass round the central marking unless your vehicle is too large to', 'Always make a U-turn', 'Give way to traffic on your left'], 1, 'All vehicles must pass round the central markings, except large vehicles physically unable to.', 188),
  ],
  'vulnerable-road-users': [
    Q('Which road users carry the greatest responsibility to reduce danger to others?', ['Pedestrians', 'Those in charge of vehicles that can cause the most harm', 'Cyclists only', 'Nobody, everyone is equal'], 1, 'The hierarchy of road users says those who can cause the greatest harm bear the greatest responsibility, though everyone must take care.', 'H1'),
    Q('You see a school crossing patrol holding up a ‘Stop for children’ sign. What must you do?', ['Slow down', 'Stop', 'Sound your horn', 'Go if the children are on the far side'], 1, 'You must stop when a school crossing patrol shows a ‘Stop for children’ sign.', 210),
    Q('Why should you slow down near schools?', ['Because of cameras', 'Because children and young cyclists may appear suddenly', 'Because the road is narrower', 'Because of parked cars only'], 1, 'Near schools drive slowly and be aware of young cyclists and pedestrians.', 208, 205),
    Q('Why might a cyclist ride in the middle of a lane on a narrow road?', ['To annoy drivers', 'To be seen and stay safe, so you should allow it', 'Because they have priority', 'They have lost control'], 1, 'On narrow roads and in slow traffic cyclists may ride in the centre of the lane, which can be safer for them.', 213),
    Q('You are approaching a horse and rider. What should you do?', ['Sound your horn to warn them', 'Pass wide and slowly', 'Pass quickly', 'Flash your lights'], 1, 'Pass horse riders and horse-drawn vehicles wide and slowly.', 215),
    Q('Why are motorcyclists and cyclists easy to miss at junctions?', ['They are always faster', 'They are smaller and hard to see, especially when alongside or coming up from behind', 'They have no lights', 'They are on the wrong side'], 1, 'The Code notes they are often difficult to see, especially at junctions and when overtaking or filtering through traffic.', 211),
    Q('An ambulance with flashing blue lights approaches from behind. What should you do?', ['Brake hard', 'Think about its route and let it pass safely, still obeying traffic signs', 'Speed up', 'Stop immediately wherever you are'], 1, 'Do not panic. Take appropriate action to let it pass, avoiding stopping before a bend, brow or narrow section.', 219),
    Q('You are following a large lorry and cannot see its mirrors. What does this suggest?', ['You are in a good position', 'The driver may not be able to see you', 'You should move closer', 'You should flash your lights'], 1, 'If you cannot see the driver in their mirrors, they cannot see you. Large vehicles also need extra room to turn.', 221),
  ],
  weather: [
    Q('In wet weather, how do stopping distances compare with dry roads?', ['The same', 'Slightly shorter', 'At least double', 'Half as long again'], 2, 'In wet weather stopping distances will be at least double those required on dry roads.', 227),
    Q('When must you use headlights in daytime because of poor visibility?', ['When you cannot see for more than 100 metres', 'When it is cloudy', 'When it is windy', 'When it rains lightly'], 0, 'You must use headlights when visibility is seriously reduced, generally when you cannot see more than 100 metres.', 226),
    Q('Before driving in snow, what must you do?', ['Clear all snow and ice from all windows, mirrors, lights and plates', 'Clear only the windscreen', 'Clear a small patch to see through', 'Leave snow on the roof for grip'], 0, 'You must be able to see, and lights and plates must be clean and legible, so clear snow and ice from all of them.', 229),
    Q('On an icy road, how much greater can stopping distances be than on a dry road?', ['Twice', 'Up to ten times', 'Three times', 'The same'], 1, 'Stopping distances on ice and snow can be ten times greater.', 230, 126),
    Q('What gear should you use on an icy road?', ['A low gear, revving the engine', 'As high a gear as possible', 'Neutral', 'Reverse'], 1, 'Drive slowly in as high a gear as possible and accelerate and brake very gently.', 231),
    Q('You enter fog and it seems to be clearing. What should you assume?', ['It will stay clear', 'You may suddenly meet thicker fog, so stay careful', 'You can speed up now', 'You can switch on full beam'], 1, 'Even if fog seems to be clearing you can suddenly find yourself in thick fog.', 234),
    Q('Why should you keep a distance from a high-sided vehicle in strong wind?', ['Gusts can affect cyclists, riders and cars as well, and turbulence can affect motorcyclists', 'It is quieter', 'Fuel use is lower', 'It is the law'], 0, 'High-sided vehicles are most affected by wind, but gusts can blow cars, cyclists and riders off course, and turbulence from large vehicles affects motorcyclists.', 232, 233),
    Q('Your steering feels light in heavy rain. What does this probably mean, and what should you do?', ['The tyres are gripping well; carry on', 'Water may be stopping the tyres gripping; ease off and slow down gradually', 'Brake hard', 'Speed up to clear the water'], 1, 'If steering becomes unresponsive, water is probably stopping the tyres gripping the road. Ease off the accelerator and slow down gradually.', 227),
  ],
  motorways: [
    Q('Which of these must not use a motorway?', ['A car driver', 'A cyclist', 'A taxi', 'A coach'], 1, 'Cyclists, pedestrians and horse riders, among others, must not use motorways.', 253),
    Q('You join a motorway from a slip road. Who has priority?', ['Traffic joining', 'Traffic already on the motorway', 'Whoever is faster', 'Nobody'], 1, 'Give priority to traffic already on the motorway, and match your speed to fit into the flow.', 259),
    Q('You have missed your exit on the motorway. What should you do?', ['Reverse along the hard shoulder', 'Make a U-turn', 'Carry on to the next exit', 'Stop and wait'], 2, 'You must not reverse, cross the central reservation or drive against the flow. Carry on to the next exit.', 263),
    Q('Which lane should you normally drive in on a motorway?', ['The right-hand lane', 'The left-hand lane unless overtaking', 'The middle lane at all times', 'The hard shoulder'], 1, 'Keep in the left lane unless overtaking, and return to it when it is safe.', 264),
    Q('On which side should you overtake on a motorway?', ['The left', 'The right', 'Either side', 'On the hard shoulder'], 1, 'Overtake only on the right, and do not overtake on the left except in the limited congested conditions the Code describes.', 267, 268),
    Q('When may you use the hard shoulder?', ['To take a phone call', 'To rest when tired', 'In an emergency or when directed by police, traffic officers or a sign', 'To avoid a queue'], 2, 'You must not use the hard shoulder except in an emergency or when directed to.', 269, 271),
    Q('You see a red flashing signal and a red X above your lane. What must you do?', ['Carry on, slowly', 'Not drive in that lane, and move safely to an open lane', 'Stop in the lane', 'Use the hard shoulder'], 1, 'A red X or flashing red lights identify a closed lane which you must not drive in.', 258),
    Q('You leave a motorway after a long drive. Why check your speedometer?', ['Your speed may be higher than it feels, as 50 mph can feel like 30 mph', 'It is the law', 'To check your fuel', 'Slip roads always have a 70 mph limit'], 0, 'After a spell at higher speed, the Code warns that 50 mph may feel like 30 mph.', 274),
    Q('What does a flashing amber signal on a motorway tell you?', ['A hazard ahead, so slow down and be prepared', 'The road is closed', 'You can speed up', 'Exit only'], 0, 'Flashing amber signals warn of a hazard ahead. Reduce speed and be prepared.', 257),
  ],
  'parking-breakdowns-and-incidents': [
    Q('What do double yellow lines at the edge of the road mean?', ['No waiting at certain times only', 'No waiting at any time', 'Loading only', 'Parking is free'], 1, 'Double yellow lines mean a prohibition of waiting at any time, even with no upright signs.', 238),
    Q('Where must you not park?', ['At a pedestrian crossing or its zig-zag lines', 'In a marked bay', 'On a driveway you own', 'In a car park'], 0, 'You must not stop or park on a crossing or in the area covered by its zig-zag lines.', 240, 191),
    Q('You park facing uphill on a hill. How should you leave the car?', ['In neutral, wheels straight', 'In a forward gear with wheels turned away from the kerb', 'In reverse with wheels turned away from the kerb', 'In any gear with wheels straight'], 1, 'Facing uphill: forward gear and steer away from the kerb. Facing downhill: reverse and steer towards the kerb.', 252),
    Q('You break down on a motorway and cannot reach an exit. What is the best action?', ['Stop in the right-hand lane', 'Move left, stop as far left as possible, switch on hazard lights, and leave by the side away from traffic if it is safe', 'Stay in the middle lane', 'Reverse to the last junction'], 1, 'Go left, stop as far left as possible, hazard lights on, and exit the vehicle by the side furthest from traffic if safe.', 277),
    Q('You are involved in a collision that damages another person’s car and you do not give your details at the time. What must you do?', ['Nothing', 'Report it to the police as soon as reasonably practicable and in any case within 24 hours', 'Wait to be contacted', 'Report it to your family'], 1, 'If you do not give your details at the time, you must report to the police within 24 hours at the most.', 286),
    Q('At a level crossing the red lights are flashing and the barriers are down. What must you do?', ['Cross carefully', 'Stop behind the white line and wait', 'Zig-zag round the barriers', 'Reverse onto the crossing'], 1, 'You must always obey flashing red stop lights and stop behind the white line.', 293),
    Q('You break down on a level crossing. What should you do first?', ['Try to restart the engine', 'Get everyone out and clear of the crossing immediately', 'Wait in the car', 'Wave to warn drivers'], 1, 'Get everyone out and clear immediately, and use the railway telephone if there is one.', 299),
    Q('You come across a road traffic collision with injured people. What should you do about those in a vehicle?', ['Move them quickly to the kerb', 'Not move them unless they are in immediate danger', 'Remove all helmets at once', 'Give them food and drink'], 1, 'Do not move injured people from their vehicles unless they are in immediate danger, and call 999.', 283),
  ],
  hazard: [
    { ...Q('A parked car at the side of the road has nobody in it and shows no signs of moving. Is it a developing hazard?', ['Yes, because it is a car', 'Not yet: it is only a potential hazard until something about it changes', 'Yes, because it is parked', 'No, and you can ignore it'], 1, 'GOV.UK describes a developing hazard as something that would cause you to take action, such as changing speed or direction. A static parked car is not doing that yet, so it is only a potential hazard. Rule 206 says to take care when passing parked vehicles, so keep watching it.', 206), gov: ['hazard', 'GOV.UK, Theory test: hazard perception test'] },
    Q('You are passing parked cars on a residential street and a ball rolls out between two of them. What is the best response?', ['Carry on, it is only a ball', 'Slow down, because a child may follow it', 'Sound your horn', 'Speed up to get past'], 1, 'The ball is this site\u2019s own scenario. The rules\u2019 point is that pedestrians, especially children, may step unexpectedly into the road, and may emerge from between parked vehicles. So slow down and be ready to stop.', 205, 206),
    Q('You are approaching a junction and a cyclist ahead looks over their shoulder. What does it suggest?', ['Nothing', 'They may be about to pull out or change direction, so give them time and room', 'They are lost', 'They want you to overtake'], 1, 'If a rider looks over their shoulder it could mean they intend to pull out, turn right or change direction.', 212),
    Q('A bus ahead is at a stop with its right indicator on. What should you expect?', ['It will stay there all day', 'It may pull away, so give it priority if safe', 'It is going to turn left', 'It is broken down'], 1, 'Give priority to buses when it is safe, especially when they signal to pull away from stops. Look out for people getting off.', 223),
    Q('On a country lane you approach a sharp bend with a hedge on the inside. What is the hazard?', ['None', 'The bend may be sharper than it looks and something may be round it', 'The hedge', 'The road is empty'], 1, 'Bends can be sharper than they appear, and you may meet horse riders, cyclists, slow vehicles or mud.', 154),
    Q('This site\u2019s own scenario: you see a lorry ahead with its left indicator on, but it moves out to the right first. What is the lesson?', ['Indicators are always correct', 'Large vehicles may need extra room to turn, so stay back and do not assume', 'Lorries never turn left', 'Overtake it immediately'], 1, 'Rule 221 says large vehicles may need extra road space to turn, and rule 104 says an indicator on another vehicle may not have been cancelled. So stay back and watch what the vehicle actually does.', 221, 104),
  ],
};
