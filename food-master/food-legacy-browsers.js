/************* 
 * Food Test *
 *************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1), (- 1), (- 1)]),
  units: 'norm',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'food';  // from the Builder filename that created this script
let expInfo = {'Worker ID': '', 'Session': '001'};

// Start code blocks for 'Before Experiment'

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function getRandomCode() {
  let code = "";
  for(var i = 0; i < 8; i++){
   code += Math.floor(Math.random() * 10);
  }
  return code;
}

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instr_1aRoutineBegin());
flowScheduler.add(instr_1aRoutineEachFrame());
flowScheduler.add(instr_1aRoutineEnd());
flowScheduler.add(instr_1bRoutineBegin());
flowScheduler.add(instr_1bRoutineEachFrame());
flowScheduler.add(instr_1bRoutineEnd());
flowScheduler.add(instr_1cRoutineBegin());
flowScheduler.add(instr_1cRoutineEachFrame());
flowScheduler.add(instr_1cRoutineEnd());
flowScheduler.add(instr_1dRoutineBegin());
flowScheduler.add(instr_1dRoutineEachFrame());
flowScheduler.add(instr_1dRoutineEnd());
flowScheduler.add(instr_1eRoutineBegin());
flowScheduler.add(instr_1eRoutineEachFrame());
flowScheduler.add(instr_1eRoutineEnd());
const practice_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_trialsLoopBegin, practice_trialsLoopScheduler);
flowScheduler.add(practice_trialsLoopScheduler);
flowScheduler.add(practice_trialsLoopEnd);
flowScheduler.add(instr_1fRoutineBegin());
flowScheduler.add(instr_1fRoutineEachFrame());
flowScheduler.add(instr_1fRoutineEnd());
const choose_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(choose_trialsLoopBegin, choose_trialsLoopScheduler);
flowScheduler.add(choose_trialsLoopScheduler);
flowScheduler.add(choose_trialsLoopEnd);
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin, blocksLoopScheduler);
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(show_codeRoutineBegin());
flowScheduler.add(show_codeRoutineEachFrame());
flowScheduler.add(show_codeRoutineEnd());
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/foods_and_brands/shakeshack.png', 'path': 'images/foods_and_brands/shakeshack.png'},
    {'name': 'images/foods_and_brands/frappuccino.png', 'path': 'images/foods_and_brands/frappuccino.png'},
    {'name': 'images/foods_and_brands/italiansub.png', 'path': 'images/foods_and_brands/italiansub.png'},
    {'name': 'images/foods_and_brands/cornerbakery.png', 'path': 'images/foods_and_brands/cornerbakery.png'},
    {'name': 'images/foods_and_brands/burgerking.png', 'path': 'images/foods_and_brands/burgerking.png'},
    {'name': 'images/foods_and_brands/croissant.png', 'path': 'images/foods_and_brands/croissant.png'},
    {'name': 'images/foods_and_brands/moes.png', 'path': 'images/foods_and_brands/moes.png'},
    {'name': 'images/foods_and_brands/turkey bacon sub.png', 'path': 'images/foods_and_brands/turkey bacon sub.png'},
    {'name': 'images/start.png', 'path': 'images/start.png'},
    {'name': 'images/foods_and_brands/baconburger.png', 'path': 'images/foods_and_brands/baconburger.png'},
    {'name': 'images/ratings/0.png', 'path': 'images/ratings/0.png'},
    {'name': 'images/foods_and_brands/tomatosoup.png', 'path': 'images/foods_and_brands/tomatosoup.png'},
    {'name': 'images/foods_and_brands/salad 1.png', 'path': 'images/foods_and_brands/salad 1.png'},
    {'name': 'images/foods_and_brands/wendys.png', 'path': 'images/foods_and_brands/wendys.png'},
    {'name': 'images/foods_and_brands/chicken sandwich.png', 'path': 'images/foods_and_brands/chicken sandwich.png'},
    {'name': 'images/foods_and_brands/steakburrito.png', 'path': 'images/foods_and_brands/steakburrito.png'},
    {'name': 'images/foods_and_brands/qdoba.png', 'path': 'images/foods_and_brands/qdoba.png'},
    {'name': 'images/foods_and_brands/chicken wrap.png', 'path': 'images/foods_and_brands/chicken wrap.png'},
    {'name': 'images/foods_and_brands/ctb.png', 'path': 'images/foods_and_brands/ctb.png'},
    {'name': 'images/foods_and_brands/chattycathys.png', 'path': 'images/foods_and_brands/chattycathys.png'},
    {'name': 'images/foods_and_brands/chicken bowl.png', 'path': 'images/foods_and_brands/chicken bowl.png'},
    {'name': 'images/foods_and_brands/beef burrito1.png', 'path': 'images/foods_and_brands/beef burrito1.png'},
    {'name': 'images/foods_and_brands/meatballsub.png', 'path': 'images/foods_and_brands/meatballsub.png'},
    {'name': 'images/foods_and_brands/turkeysub.png', 'path': 'images/foods_and_brands/turkeysub.png'},
    {'name': 'conditions_practice.xlsx', 'path': 'conditions_practice.xlsx'},
    {'name': 'images/foods_and_brands/salad 2.png', 'path': 'images/foods_and_brands/salad 2.png'},
    {'name': 'images/foods_and_brands/tea.png', 'path': 'images/foods_and_brands/tea.png'},
    {'name': 'images/foods_and_brands/chocolateglazeddonut.png', 'path': 'images/foods_and_brands/chocolateglazeddonut.png'},
    {'name': 'images/foods_and_brands/coffeecake.png', 'path': 'images/foods_and_brands/coffeecake.png'},
    {'name': 'images/foods_and_brands/salad.png', 'path': 'images/foods_and_brands/salad.png'},
    {'name': 'images/foods_and_brands/steak bowl.png', 'path': 'images/foods_and_brands/steak bowl.png'},
    {'name': 'images/foods_and_brands/thecoffeebean.png', 'path': 'images/foods_and_brands/thecoffeebean.png'},
    {'name': 'images/foods_and_brands/wholefoods.png', 'path': 'images/foods_and_brands/wholefoods.png'},
    {'name': 'images/foods_and_brands/mcdonalds.png', 'path': 'images/foods_and_brands/mcdonalds.png'},
    {'name': 'images/foods_and_brands/scone.png', 'path': 'images/foods_and_brands/scone.png'},
    {'name': 'images/foods_and_brands/veggie burrito.png', 'path': 'images/foods_and_brands/veggie burrito.png'},
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'images/foods_and_brands/parfait.png', 'path': 'images/foods_and_brands/parfait.png'},
    {'name': 'images/foods_and_brands/chicken wrap 2.png', 'path': 'images/foods_and_brands/chicken wrap 2.png'},
    {'name': 'images/foods_and_brands/steak tacos.png', 'path': 'images/foods_and_brands/steak tacos.png'},
    {'name': 'images/beginpart3.png', 'path': 'images/beginpart3.png'},
    {'name': 'images/ratings/-1.png', 'path': 'images/ratings/-1.png'},
    {'name': 'images/foods_and_brands/cheeseburger1.png', 'path': 'images/foods_and_brands/cheeseburger1.png'},
    {'name': 'images/beginpractice.png', 'path': 'images/beginpractice.png'},
    {'name': 'conditions_food.xlsx', 'path': 'conditions_food.xlsx'},
    {'name': 'images/foods_and_brands/cheesecakefactory.png', 'path': 'images/foods_and_brands/cheesecakefactory.png'},
    {'name': 'images/continue.png', 'path': 'images/continue.png'},
    {'name': 'images/foods_and_brands/tacobell.png', 'path': 'images/foods_and_brands/tacobell.png'},
    {'name': 'images/foods_and_brands/glazeddonut.png', 'path': 'images/foods_and_brands/glazeddonut.png'},
    {'name': 'images/foods_and_brands/banana.png', 'path': 'images/foods_and_brands/banana.png'},
    {'name': 'images/foods_and_brands/peetscoffee.png', 'path': 'images/foods_and_brands/peetscoffee.png'},
    {'name': 'images/foods_and_brands/icedcoffee.png', 'path': 'images/foods_and_brands/icedcoffee.png'},
    {'name': 'images/ratings/-3.png', 'path': 'images/ratings/-3.png'},
    {'name': 'images/ratings/2.png', 'path': 'images/ratings/2.png'},
    {'name': 'images/foods_and_brands/quiznos.png', 'path': 'images/foods_and_brands/quiznos.png'},
    {'name': 'images/ratings/1.png', 'path': 'images/ratings/1.png'},
    {'name': 'images/beginpart1.png', 'path': 'images/beginpart1.png'},
    {'name': 'images/foods_and_brands/phillycheesesteak.png', 'path': 'images/foods_and_brands/phillycheesesteak.png'},
    {'name': 'images/foods_and_brands/cheesequesadilla.png', 'path': 'images/foods_and_brands/cheesequesadilla.png'},
    {'name': 'images/foods_and_brands/doubleburger.png', 'path': 'images/foods_and_brands/doubleburger.png'},
    {'name': 'images/right.png', 'path': 'images/right.png'},
    {'name': 'images/foods_and_brands/veggiewrap.png', 'path': 'images/foods_and_brands/veggiewrap.png'},
    {'name': 'images/foods_and_brands/elpolloloco.png', 'path': 'images/foods_and_brands/elpolloloco.png'},
    {'name': 'images/foods_and_brands/frenchfries.png', 'path': 'images/foods_and_brands/frenchfries.png'},
    {'name': 'images/foods_and_brands/panerabread.png', 'path': 'images/foods_and_brands/panerabread.png'},
    {'name': 'images/foods_and_brands/wegmans.png', 'path': 'images/foods_and_brands/wegmans.png'},
    {'name': 'images/foods_and_brands/chickenburrito.png', 'path': 'images/foods_and_brands/chickenburrito.png'},
    {'name': 'images/foods_and_brands/grilledchickensandwich.png', 'path': 'images/foods_and_brands/grilledchickensandwich.png'},
    {'name': 'images/foods_and_brands/krispykreme.png', 'path': 'images/foods_and_brands/krispykreme.png'},
    {'name': 'images/foods_and_brands/caesarsalad.png', 'path': 'images/foods_and_brands/caesarsalad.png'},
    {'name': 'images/foods_and_brands/FIshSandwich.png', 'path': 'images/foods_and_brands/FIshSandwich.png'},
    {'name': 'images/foods_and_brands/dunkin.png', 'path': 'images/foods_and_brands/dunkin.png'},
    {'name': 'images/foods_and_brands/chicken nuggets.png', 'path': 'images/foods_and_brands/chicken nuggets.png'},
    {'name': 'images/left.png', 'path': 'images/left.png'},
    {'name': 'images/foods_and_brands/apple slices.png', 'path': 'images/foods_and_brands/apple slices.png'},
    {'name': 'images/foods_and_brands/beef tacos.png', 'path': 'images/foods_and_brands/beef tacos.png'},
    {'name': 'images/foods_and_brands/cinnamonroll.png', 'path': 'images/foods_and_brands/cinnamonroll.png'},
    {'name': 'images/foods_and_brands/subway.png', 'path': 'images/foods_and_brands/subway.png'},
    {'name': 'images/foods_and_brands/oatmeal.png', 'path': 'images/foods_and_brands/oatmeal.png'},
    {'name': 'images/foods_and_brands/chickentaco.png', 'path': 'images/foods_and_brands/chickentaco.png'},
    {'name': 'images/foods_and_brands/breakfast sandwich.png', 'path': 'images/foods_and_brands/breakfast sandwich.png'},
    {'name': 'images/foods_and_brands/chipotle.png', 'path': 'images/foods_and_brands/chipotle.png'},
    {'name': 'blocks.xlsx', 'path': 'blocks.xlsx'},
    {'name': 'images/foods_and_brands/tacosalad2.png', 'path': 'images/foods_and_brands/tacosalad2.png'},
    {'name': 'images/foods_and_brands/bacon chicken sub.png', 'path': 'images/foods_and_brands/bacon chicken sub.png'},
    {'name': 'images/foods_and_brands/tunasub.png', 'path': 'images/foods_and_brands/tunasub.png'},
    {'name': 'images/ratings/3.png', 'path': 'images/ratings/3.png'},
    {'name': 'images/foods_and_brands/starbucks.png', 'path': 'images/foods_and_brands/starbucks.png'},
    {'name': 'images/ratings/-2.png', 'path': 'images/ratings/-2.png'},
    {'name': 'images/foods_and_brands/cosi.png', 'path': 'images/foods_and_brands/cosi.png'},
    {'name': 'images/beginpart2.png', 'path': 'images/beginpart2.png'},
    {'name': 'conditions_brand.xlsx', 'path': 'conditions_brand.xlsx'},
    {'name': 'images/foods_and_brands/fiveguys.png', 'path': 'images/foods_and_brands/fiveguys.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instr_1aClock;
var txt_1a;
var resp_1a;
var img_1a;
var instr_1bClock;
var txt_1b;
var resp_1b;
var img_1b;
var instr_1cClock;
var txt_1c;
var resp_1c;
var img_1c;
var instr_1dClock;
var txt_1d;
var resp_1d;
var img_1d;
var instr_1eClock;
var txt_1e;
var resp_1e;
var img_1e;
var begin_trialClock;
var img_choose_begin;
var resp_choose_begin;
var practice_moveClock;
var mouse_pm;
var practiceClock;
var resp_choose_p;
var random_bools_p;
var pos_left_top_img;
var pos_left_bot_img;
var pos_right_top_img;
var pos_right_bot_img;
var pos_img_food1;
var pos_img_brand1;
var pos_img_food2;
var pos_img_brand2;
var left_choice_p;
var right_choice_p;
var img_food1_p;
var img_food2_p;
var img_brand1_p;
var img_brand2_p;
var time_warning_pClock;
var txt_warning_p;
var instr_1fClock;
var txt_1f;
var resp_1f;
var img_1f;
var choose_moveClock;
var mouse_cm;
var chooseClock;
var resp_choose;
var random_bools;
var left_choice;
var right_choice;
var img_food1;
var img_food2;
var img_brand1;
var img_brand2;
var time_warningClock;
var txt_warning;
var instr_2aClock;
var completed_2;
var instr_2a;
var instr_2b;
var instr_2c;
var instr_2d;
var txt_2a;
var resp_2a;
var img_2a;
var instr_2bClock;
var txt_2b;
var resp_2b;
var img_2b;
var instr_2cClock;
var txt_2c;
var resp_2c;
var img_2c;
var instr_2dClock;
var txt_2d;
var resp_2d;
var img_2d;
var ratingClock;
var rated_item;
var neg3;
var neg2;
var neg1;
var pos0;
var pos1;
var pos2;
var pos3;
var resp_rating;
var blankClock;
var blank_text;
var show_codeClock;
var random_code;
var txt_show_code;
var resp_show_code;
var img_show_code;
var endClock;
var mouse;
var txt_end;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instr_1a"
  instr_1aClock = new util.Clock();
  txt_1a = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_1a',
    text: 'Welcome! Thank you for taking the experiment today.\n\nImportant note: DO NOT EXIT FULLSCREEN MODE THROUGHOUT THE EXPERIMENT. If for some reason the experiment stalls or does not continue as it should, please stop the experiment and email me at gwf25@cornell.edu.\n\nThe experiment contains three sections and will begin now.',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_1a = new core.Mouse({
    win: psychoJS.window,
  });
  resp_1a.mouseClock = new util.Clock();
  img_1a = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_1a', units : 'height', 
    image : 'images/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.35)], size : [0.4, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "instr_1b"
  instr_1bClock = new util.Clock();
  txt_1b = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_1b',
    text: 'Part 1\n\nIn this part of the experiment, you will make 10 decisions.\nFor each decision, you will see two food items and two brands displayed on the screen in front of you.\nYour task is to select the food-brand pairing that you prefer to eat.\nChoose freely based on your desires in the moment, there is no correct or incorrect answer.\nYou will indicate your response by selecting the box labeled “left” or “right” corresponding to the side of the food you prefer by using the mouse cursor.',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_1b = new core.Mouse({
    win: psychoJS.window,
  });
  resp_1b.mouseClock = new util.Clock();
  img_1b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_1b', units : 'height', 
    image : 'images/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.35)], size : [0.4, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "instr_1c"
  instr_1cClock = new util.Clock();
  txt_1c = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_1c',
    text: 'Each trial in this task will work as follows: \n\n1. You will see a start button. \n2. Click on the screen’s start button with the mouse cursor and then begin to move the mouse. NOTE: You will only be able to see the food and brand images once you move the cursor after beginning the trial.\n3. You will see two food items and their associated brands on the left and right side of the screen. \n4. You will indicate your decision by moving the mouse to the top corner of the screen corresponding to the side of the food you prefer and selecting the box.',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_1c = new core.Mouse({
    win: psychoJS.window,
  });
  resp_1c.mouseClock = new util.Clock();
  img_1c = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_1c', units : 'height', 
    image : 'images/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.35)], size : [0.4, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "instr_1d"
  instr_1dClock = new util.Clock();
  txt_1d = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_1d',
    text: 'In this experiment, it is crucial that you respond as quickly and accurately as you can.\nPlease try to respond naturally, moving from the start button continuously toward the top side of the screen of the desired choice option.\nPlease move your mouse immediately on clicking the start button even if you are not fully sure of your response yet.\nDo not “play” with the mouse (e.g., by moving it in spirals, etc.).',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_1d = new core.Mouse({
    win: psychoJS.window,
  });
  resp_1d.mouseClock = new util.Clock();
  img_1d = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_1d', units : 'height', 
    image : 'images/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.35)], size : [0.4, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "instr_1e"
  instr_1eClock = new util.Clock();
  txt_1e = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_1e',
    text: 'To better understand how this task works, you will first complete 3 practice trials before starting Part 1.',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_1e = new core.Mouse({
    win: psychoJS.window,
  });
  resp_1e.mouseClock = new util.Clock();
  img_1e = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_1e', units : 'height', 
    image : 'images/beginpractice.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.35)], size : [0.5, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "begin_trial"
  begin_trialClock = new util.Clock();
  img_choose_begin = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_choose_begin', units : 'height', 
    image : 'images/start.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.425)], size : [0.25, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  resp_choose_begin = new core.Mouse({
    win: psychoJS.window,
  });
  resp_choose_begin.mouseClock = new util.Clock();
  // Initialize components for Routine "practice_move"
  practice_moveClock = new util.Clock();
  mouse_pm = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_pm.mouseClock = new util.Clock();
  // Initialize components for Routine "practice"
  practiceClock = new util.Clock();
  resp_choose_p = new core.Mouse({
    win: psychoJS.window,
  });
  resp_choose_p.mouseClock = new util.Clock();
  random_bools_p = [true, true, true, true, true, false, false, false, false, false];
  shuffle(random_bools_p)
  pos_left_top_img = [(- 0.45), 0.15];
  pos_left_bot_img = [(- 0.45), (- 0.15)];
  pos_right_top_img = [0.45, 0.15];
  pos_right_bot_img = [0.45, (- 0.15)];
  pos_img_food1 = pos_left_top_img;
  pos_img_brand1 = pos_left_bot_img;
  pos_img_food2 = pos_right_top_img;
  pos_img_brand2 = pos_right_bot_img;
  
  left_choice_p = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_choice_p', units : 'height', 
    image : 'images/left.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.2, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  right_choice_p = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_choice_p', units : 'height', 
    image : 'images/right.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.2, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  img_food1_p = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_food1_p', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  img_food2_p = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_food2_p', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  img_brand1_p = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_brand1_p', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  img_brand2_p = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_brand2_p', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "time_warning_p"
  time_warning_pClock = new util.Clock();
  txt_warning_p = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_warning_p',
    text: 'Please move the cursor to your choice faster.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "instr_1f"
  instr_1fClock = new util.Clock();
  txt_1f = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_1f',
    text: 'The practice trials are now complete.\nYou will now begin Part 1.',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_1f = new core.Mouse({
    win: psychoJS.window,
  });
  resp_1f.mouseClock = new util.Clock();
  img_1f = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_1f', units : 'height', 
    image : 'images/beginpart1.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.35)], size : [0.5, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "begin_trial"
  begin_trialClock = new util.Clock();
  img_choose_begin = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_choose_begin', units : 'height', 
    image : 'images/start.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.425)], size : [0.25, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  resp_choose_begin = new core.Mouse({
    win: psychoJS.window,
  });
  resp_choose_begin.mouseClock = new util.Clock();
  // Initialize components for Routine "choose_move"
  choose_moveClock = new util.Clock();
  mouse_cm = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_cm.mouseClock = new util.Clock();
  // Initialize components for Routine "choose"
  chooseClock = new util.Clock();
  resp_choose = new core.Mouse({
    win: psychoJS.window,
  });
  resp_choose.mouseClock = new util.Clock();
  random_bools = [true, true, true, true, true, false, false, false, false, false];
  shuffle(random_bools)
  pos_left_top_img = [(- 0.45), 0.15];
  pos_left_bot_img = [(- 0.45), (- 0.15)];
  pos_right_top_img = [0.45, 0.15];
  pos_right_bot_img = [0.45, (- 0.15)];
  pos_img_food1 = pos_left_top_img;
  pos_img_brand1 = pos_left_bot_img;
  pos_img_food2 = pos_right_top_img;
  pos_img_brand2 = pos_right_bot_img;
  
  left_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_choice', units : 'height', 
    image : 'images/left.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.2, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  right_choice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_choice', units : 'height', 
    image : 'images/right.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.2, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  img_food1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_food1', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  img_food2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_food2', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  img_brand1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_brand1', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  img_brand2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_brand2', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  // Initialize components for Routine "time_warning"
  time_warningClock = new util.Clock();
  txt_warning = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_warning',
    text: 'Please move the cursor to your choice faster.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "instr_2a"
  instr_2aClock = new util.Clock();
  completed_2 = false;
  instr_2a = "";
  instr_2b = "";
  instr_2c = "";
  instr_2d = "";
  
  txt_2a = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_2a',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  resp_2a = new core.Mouse({
    win: psychoJS.window,
  });
  resp_2a.mouseClock = new util.Clock();
  img_2a = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_2a', units : 'height', 
    image : 'images/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.35)], size : [0.4, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "instr_2b"
  instr_2bClock = new util.Clock();
  txt_2b = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_2b',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_2b = new core.Mouse({
    win: psychoJS.window,
  });
  resp_2b.mouseClock = new util.Clock();
  img_2b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_2b', units : 'height', 
    image : 'images/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.35)], size : [0.4, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "instr_2c"
  instr_2cClock = new util.Clock();
  txt_2c = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_2c',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_2c = new core.Mouse({
    win: psychoJS.window,
  });
  resp_2c.mouseClock = new util.Clock();
  img_2c = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_2c', units : 'height', 
    image : 'images/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.35)], size : [0.4, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "instr_2d"
  instr_2dClock = new util.Clock();
  txt_2d = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_2d',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  resp_2d = new core.Mouse({
    win: psychoJS.window,
  });
  resp_2d.mouseClock = new util.Clock();
  img_2d = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_2d', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.35)], size : [0.5, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "rating"
  ratingClock = new util.Clock();
  rated_item = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rated_item', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.2], size : [0.4, 0.4],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  neg3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'neg3', units : 'height', 
    image : 'images/ratings/-3.png', mask : undefined,
    ori : 0.0, pos : [(- 0.525), (- 0.2)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  neg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'neg2', units : 'height', 
    image : 'images/ratings/-2.png', mask : undefined,
    ori : 0.0, pos : [(- 0.35), (- 0.2)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  neg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'neg1', units : 'height', 
    image : 'images/ratings/-1.png', mask : undefined,
    ori : 0.0, pos : [(- 0.175), (- 0.2)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  pos0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pos0', units : 'height', 
    image : 'images/ratings/0.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.2)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  pos1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pos1', units : 'height', 
    image : 'images/ratings/1.png', mask : undefined,
    ori : 0.0, pos : [0.175, (- 0.2)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  pos2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pos2', units : 'height', 
    image : 'images/ratings/2.png', mask : undefined,
    ori : 0.0, pos : [0.35, (- 0.2)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  pos3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pos3', units : 'height', 
    image : 'images/ratings/3.png', mask : undefined,
    ori : 0.0, pos : [0.525, (- 0.2)], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  resp_rating = new core.Mouse({
    win: psychoJS.window,
  });
  resp_rating.mouseClock = new util.Clock();
  // Initialize components for Routine "blank"
  blankClock = new util.Clock();
  blank_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "show_code"
  show_codeClock = new util.Clock();
  random_code = ""
  txt_show_code = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_show_code',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  resp_show_code = new core.Mouse({
    win: psychoJS.window,
  });
  resp_show_code.mouseClock = new util.Clock();
  img_show_code = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_show_code', units : 'height', 
    image : 'images/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.35)], size : [0.4, 0.1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  txt_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_end',
    text: '',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var instr_1aComponents;
function instr_1aRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_1a'-------
    t = 0;
    instr_1aClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the resp_1a
    resp_1a.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instr_1aComponents = [];
    instr_1aComponents.push(txt_1a);
    instr_1aComponents.push(resp_1a);
    instr_1aComponents.push(img_1a);
    
    instr_1aComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function instr_1aRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_1a'-------
    // get current time
    t = instr_1aClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *txt_1a* updates
    if (t >= 0.0 && txt_1a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_1a.tStart = t;  // (not accounting for frame time here)
      txt_1a.frameNStart = frameN;  // exact frame index
      
      txt_1a.setAutoDraw(true);
    }

    // *resp_1a* updates
    if (t >= 7.0 && resp_1a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_1a.tStart = t;  // (not accounting for frame time here)
      resp_1a.frameNStart = frameN;  // exact frame index
      
      resp_1a.status = PsychoJS.Status.STARTED;
      resp_1a.mouseClock.reset();
      prevButtonState = resp_1a.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp_1a.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_1a.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [img_1a,]) {
            if (obj.contains(resp_1a)) {
              gotValidClick = true;
              resp_1a.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *img_1a* updates
    if (t >= 7.0 && img_1a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_1a.tStart = t;  // (not accounting for frame time here)
      img_1a.frameNStart = frameN;  // exact frame index
      
      img_1a.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_1aComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_1aRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_1a'-------
    instr_1aComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "instr_1a" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instr_1bComponents;
function instr_1bRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_1b'-------
    t = 0;
    instr_1bClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the resp_1b
    resp_1b.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instr_1bComponents = [];
    instr_1bComponents.push(txt_1b);
    instr_1bComponents.push(resp_1b);
    instr_1bComponents.push(img_1b);
    
    instr_1bComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_1bRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_1b'-------
    // get current time
    t = instr_1bClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *txt_1b* updates
    if (t >= 0.0 && txt_1b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_1b.tStart = t;  // (not accounting for frame time here)
      txt_1b.frameNStart = frameN;  // exact frame index
      
      txt_1b.setAutoDraw(true);
    }

    // *resp_1b* updates
    if (t >= 7.0 && resp_1b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_1b.tStart = t;  // (not accounting for frame time here)
      resp_1b.frameNStart = frameN;  // exact frame index
      
      resp_1b.status = PsychoJS.Status.STARTED;
      resp_1b.mouseClock.reset();
      prevButtonState = resp_1b.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp_1b.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_1b.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [img_1b,]) {
            if (obj.contains(resp_1b)) {
              gotValidClick = true;
              resp_1b.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *img_1b* updates
    if (t >= 7.0 && img_1b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_1b.tStart = t;  // (not accounting for frame time here)
      img_1b.frameNStart = frameN;  // exact frame index
      
      img_1b.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_1bComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_1bRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_1b'-------
    instr_1bComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "instr_1b" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instr_1cComponents;
function instr_1cRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_1c'-------
    t = 0;
    instr_1cClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the resp_1c
    resp_1c.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instr_1cComponents = [];
    instr_1cComponents.push(txt_1c);
    instr_1cComponents.push(resp_1c);
    instr_1cComponents.push(img_1c);
    
    instr_1cComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_1cRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_1c'-------
    // get current time
    t = instr_1cClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *txt_1c* updates
    if (t >= 0.0 && txt_1c.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_1c.tStart = t;  // (not accounting for frame time here)
      txt_1c.frameNStart = frameN;  // exact frame index
      
      txt_1c.setAutoDraw(true);
    }

    // *resp_1c* updates
    if (t >= 7.0 && resp_1c.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_1c.tStart = t;  // (not accounting for frame time here)
      resp_1c.frameNStart = frameN;  // exact frame index
      
      resp_1c.status = PsychoJS.Status.STARTED;
      resp_1c.mouseClock.reset();
      prevButtonState = resp_1c.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp_1c.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_1c.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [img_1c,]) {
            if (obj.contains(resp_1c)) {
              gotValidClick = true;
              resp_1c.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *img_1c* updates
    if (t >= 7.0 && img_1c.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_1c.tStart = t;  // (not accounting for frame time here)
      img_1c.frameNStart = frameN;  // exact frame index
      
      img_1c.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_1cComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_1cRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_1c'-------
    instr_1cComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "instr_1c" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instr_1dComponents;
function instr_1dRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_1d'-------
    t = 0;
    instr_1dClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the resp_1d
    resp_1d.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instr_1dComponents = [];
    instr_1dComponents.push(txt_1d);
    instr_1dComponents.push(resp_1d);
    instr_1dComponents.push(img_1d);
    
    instr_1dComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_1dRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_1d'-------
    // get current time
    t = instr_1dClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *txt_1d* updates
    if (t >= 0.0 && txt_1d.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_1d.tStart = t;  // (not accounting for frame time here)
      txt_1d.frameNStart = frameN;  // exact frame index
      
      txt_1d.setAutoDraw(true);
    }

    // *resp_1d* updates
    if (t >= 7.0 && resp_1d.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_1d.tStart = t;  // (not accounting for frame time here)
      resp_1d.frameNStart = frameN;  // exact frame index
      
      resp_1d.status = PsychoJS.Status.STARTED;
      resp_1d.mouseClock.reset();
      prevButtonState = resp_1d.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp_1d.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_1d.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [img_1d,]) {
            if (obj.contains(resp_1d)) {
              gotValidClick = true;
              resp_1d.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *img_1d* updates
    if (t >= 7.0 && img_1d.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_1d.tStart = t;  // (not accounting for frame time here)
      img_1d.frameNStart = frameN;  // exact frame index
      
      img_1d.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_1dComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_1dRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_1d'-------
    instr_1dComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "instr_1d" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instr_1eComponents;
function instr_1eRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_1e'-------
    t = 0;
    instr_1eClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the resp_1e
    resp_1e.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instr_1eComponents = [];
    instr_1eComponents.push(txt_1e);
    instr_1eComponents.push(resp_1e);
    instr_1eComponents.push(img_1e);
    
    instr_1eComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_1eRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_1e'-------
    // get current time
    t = instr_1eClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *txt_1e* updates
    if (t >= 0.0 && txt_1e.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_1e.tStart = t;  // (not accounting for frame time here)
      txt_1e.frameNStart = frameN;  // exact frame index
      
      txt_1e.setAutoDraw(true);
    }

    // *resp_1e* updates
    if (t >= 2.0 && resp_1e.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_1e.tStart = t;  // (not accounting for frame time here)
      resp_1e.frameNStart = frameN;  // exact frame index
      
      resp_1e.status = PsychoJS.Status.STARTED;
      resp_1e.mouseClock.reset();
      prevButtonState = resp_1e.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp_1e.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_1e.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [img_1e,]) {
            if (obj.contains(resp_1e)) {
              gotValidClick = true;
              resp_1e.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *img_1e* updates
    if (t >= 2.0 && img_1e.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_1e.tStart = t;  // (not accounting for frame time here)
      img_1e.frameNStart = frameN;  // exact frame index
      
      img_1e.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_1eComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_1eRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_1e'-------
    instr_1eComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "instr_1e" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practice_trials;
var currentLoop;
function practice_trialsLoopBegin(practice_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions_practice.xlsx',
    seed: undefined, name: 'practice_trials'
  });
  psychoJS.experiment.addLoop(practice_trials); // add the loop to the experiment
  currentLoop = practice_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  practice_trials.forEach(function() {
    const snapshot = practice_trials.getSnapshot();

    practice_trialsLoopScheduler.add(importConditions(snapshot));
    practice_trialsLoopScheduler.add(begin_trialRoutineBegin(snapshot));
    practice_trialsLoopScheduler.add(begin_trialRoutineEachFrame(snapshot));
    practice_trialsLoopScheduler.add(begin_trialRoutineEnd(snapshot));
    practice_trialsLoopScheduler.add(practice_moveRoutineBegin(snapshot));
    practice_trialsLoopScheduler.add(practice_moveRoutineEachFrame(snapshot));
    practice_trialsLoopScheduler.add(practice_moveRoutineEnd(snapshot));
    practice_trialsLoopScheduler.add(practiceRoutineBegin(snapshot));
    practice_trialsLoopScheduler.add(practiceRoutineEachFrame(snapshot));
    practice_trialsLoopScheduler.add(practiceRoutineEnd(snapshot));
    practice_trialsLoopScheduler.add(time_warning_pRoutineBegin(snapshot));
    practice_trialsLoopScheduler.add(time_warning_pRoutineEachFrame(snapshot));
    practice_trialsLoopScheduler.add(time_warning_pRoutineEnd(snapshot));
    practice_trialsLoopScheduler.add(endLoopIteration(practice_trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function practice_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(practice_trials);

  return Scheduler.Event.NEXT;
}


var choose_trials;
function choose_trialsLoopBegin(choose_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  choose_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.xlsx',
    seed: undefined, name: 'choose_trials'
  });
  psychoJS.experiment.addLoop(choose_trials); // add the loop to the experiment
  currentLoop = choose_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  choose_trials.forEach(function() {
    const snapshot = choose_trials.getSnapshot();

    choose_trialsLoopScheduler.add(importConditions(snapshot));
    choose_trialsLoopScheduler.add(begin_trialRoutineBegin(snapshot));
    choose_trialsLoopScheduler.add(begin_trialRoutineEachFrame(snapshot));
    choose_trialsLoopScheduler.add(begin_trialRoutineEnd(snapshot));
    choose_trialsLoopScheduler.add(choose_moveRoutineBegin(snapshot));
    choose_trialsLoopScheduler.add(choose_moveRoutineEachFrame(snapshot));
    choose_trialsLoopScheduler.add(choose_moveRoutineEnd(snapshot));
    choose_trialsLoopScheduler.add(chooseRoutineBegin(snapshot));
    choose_trialsLoopScheduler.add(chooseRoutineEachFrame(snapshot));
    choose_trialsLoopScheduler.add(chooseRoutineEnd(snapshot));
    choose_trialsLoopScheduler.add(time_warningRoutineBegin(snapshot));
    choose_trialsLoopScheduler.add(time_warningRoutineEachFrame(snapshot));
    choose_trialsLoopScheduler.add(time_warningRoutineEnd(snapshot));
    choose_trialsLoopScheduler.add(endLoopIteration(choose_trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function choose_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(choose_trials);

  return Scheduler.Event.NEXT;
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'blocks.xlsx',
    seed: undefined, name: 'blocks'
  });
  psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
  currentLoop = blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  blocks.forEach(function() {
    const snapshot = blocks.getSnapshot();

    blocksLoopScheduler.add(importConditions(snapshot));
    blocksLoopScheduler.add(instr_2aRoutineBegin(snapshot));
    blocksLoopScheduler.add(instr_2aRoutineEachFrame(snapshot));
    blocksLoopScheduler.add(instr_2aRoutineEnd(snapshot));
    blocksLoopScheduler.add(instr_2bRoutineBegin(snapshot));
    blocksLoopScheduler.add(instr_2bRoutineEachFrame(snapshot));
    blocksLoopScheduler.add(instr_2bRoutineEnd(snapshot));
    blocksLoopScheduler.add(instr_2cRoutineBegin(snapshot));
    blocksLoopScheduler.add(instr_2cRoutineEachFrame(snapshot));
    blocksLoopScheduler.add(instr_2cRoutineEnd(snapshot));
    blocksLoopScheduler.add(instr_2dRoutineBegin(snapshot));
    blocksLoopScheduler.add(instr_2dRoutineEachFrame(snapshot));
    blocksLoopScheduler.add(instr_2dRoutineEnd(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    blocksLoopScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    blocksLoopScheduler.add(trialsLoopScheduler);
    blocksLoopScheduler.add(trialsLoopEnd);
    blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: conditions,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(ratingRoutineBegin(snapshot));
    trialsLoopScheduler.add(ratingRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(ratingRoutineEnd(snapshot));
    trialsLoopScheduler.add(blankRoutineBegin(snapshot));
    trialsLoopScheduler.add(blankRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(blankRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var begin_trialComponents;
function begin_trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'begin_trial'-------
    t = 0;
    begin_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the resp_choose_begin
    resp_choose_begin.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    begin_trialComponents = [];
    begin_trialComponents.push(img_choose_begin);
    begin_trialComponents.push(resp_choose_begin);
    
    begin_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function begin_trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'begin_trial'-------
    // get current time
    t = begin_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *img_choose_begin* updates
    if (t >= 0.0 && img_choose_begin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_choose_begin.tStart = t;  // (not accounting for frame time here)
      img_choose_begin.frameNStart = frameN;  // exact frame index
      
      img_choose_begin.setAutoDraw(true);
    }

    // *resp_choose_begin* updates
    if (t >= 0.0 && resp_choose_begin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_choose_begin.tStart = t;  // (not accounting for frame time here)
      resp_choose_begin.frameNStart = frameN;  // exact frame index
      
      resp_choose_begin.status = PsychoJS.Status.STARTED;
      resp_choose_begin.mouseClock.reset();
      prevButtonState = resp_choose_begin.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp_choose_begin.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_choose_begin.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [img_choose_begin,]) {
            if (obj.contains(resp_choose_begin)) {
              gotValidClick = true;
              resp_choose_begin.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    begin_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function begin_trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'begin_trial'-------
    begin_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "begin_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var init_mouse_pm;
var practice_moveComponents;
function practice_moveRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice_move'-------
    t = 0;
    practice_moveClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    init_mouse_pm = mouse_pm.getPos();
    
    // setup some python lists for storing info about the mouse_pm
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    practice_moveComponents = [];
    practice_moveComponents.push(mouse_pm);
    
    practice_moveComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var movement;
function practice_moveRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice_move'-------
    // get current time
    t = practice_moveClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    movement = (((init_mouse_pm[0] - mouse_pm.getPos()[0]) !== 0) || ((init_mouse_pm[1] - mouse_pm.getPos()[1]) !== 0));
    if (movement) {
        continueRoutine = false;
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practice_moveComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_moveRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice_move'-------
    practice_moveComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "practice_move" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var win_width;
var win_height;
var upper_left;
var upper_right;
var food_top;
var practiceComponents;
function practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice'-------
    t = 0;
    practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the resp_choose_p
    // current position of the mouse:
    resp_choose_p.x = [];
    resp_choose_p.y = [];
    resp_choose_p.leftButton = [];
    resp_choose_p.midButton = [];
    resp_choose_p.rightButton = [];
    resp_choose_p.time = [];
    resp_choose_p.clicked_name = [];
    gotValidClick = false; // until a click is received
    win_width = psychoJS.window.size[0]
    win_height = psychoJS.window.size[1]
    upper_left = [(- win_width / win_height / 2 + 0.1), 0.5 - 0.05]
    upper_right = [win_width / win_height / 2 - 0.1, 0.5 - 0.05]
    food_top = random_bools_p.pop()
    if (food_top) {
        pos_img_food1 = pos_left_top_img;
        pos_img_brand1 = pos_left_bot_img;
        pos_img_food2 = pos_right_top_img;
        pos_img_brand2 = pos_right_bot_img;
    } else {
        pos_img_food1 = pos_left_bot_img;
        pos_img_brand1 = pos_left_top_img;
        pos_img_food2 = pos_right_bot_img;
        pos_img_brand2 = pos_right_top_img;
    }
    
    left_choice_p.setPos(upper_left);
    right_choice_p.setPos(upper_right);
    img_food1_p.setPos(pos_img_food1);
    img_food1_p.setImage(("images/foods_and_brands/" + food1));
    img_food2_p.setPos(pos_img_food2);
    img_food2_p.setImage(("images/foods_and_brands/" + food2));
    img_brand1_p.setPos(pos_img_brand1);
    img_brand1_p.setImage(("images/foods_and_brands/" + brand1));
    img_brand2_p.setPos(pos_img_brand2);
    img_brand2_p.setImage(("images/foods_and_brands/" + brand2));
    // keep track of which components have finished
    practiceComponents = [];
    practiceComponents.push(resp_choose_p);
    practiceComponents.push(left_choice_p);
    practiceComponents.push(right_choice_p);
    practiceComponents.push(img_food1_p);
    practiceComponents.push(img_food2_p);
    practiceComponents.push(img_brand1_p);
    practiceComponents.push(img_brand2_p);
    
    practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var _mouseXYs;
function practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice'-------
    // get current time
    t = practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *resp_choose_p* updates
    if (t >= 0.0 && resp_choose_p.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_choose_p.tStart = t;  // (not accounting for frame time here)
      resp_choose_p.frameNStart = frameN;  // exact frame index
      
      resp_choose_p.status = PsychoJS.Status.STARTED;
      resp_choose_p.mouseClock.reset();
      prevButtonState = resp_choose_p.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp_choose_p.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_choose_p.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = resp_choose_p.getPos();
          resp_choose_p.x.push(_mouseXYs[0]);
          resp_choose_p.y.push(_mouseXYs[1]);
          resp_choose_p.leftButton.push(_mouseButtons[0]);
          resp_choose_p.midButton.push(_mouseButtons[1]);
          resp_choose_p.rightButton.push(_mouseButtons[2]);
          resp_choose_p.time.push(resp_choose_p.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [left_choice_p, right_choice_p,]) {
            if (obj.contains(resp_choose_p)) {
              gotValidClick = true;
              resp_choose_p.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *left_choice_p* updates
    if (t >= 0.0 && left_choice_p.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_choice_p.tStart = t;  // (not accounting for frame time here)
      left_choice_p.frameNStart = frameN;  // exact frame index
      
      left_choice_p.setAutoDraw(true);
    }

    
    // *right_choice_p* updates
    if (t >= 0.0 && right_choice_p.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_choice_p.tStart = t;  // (not accounting for frame time here)
      right_choice_p.frameNStart = frameN;  // exact frame index
      
      right_choice_p.setAutoDraw(true);
    }

    
    // *img_food1_p* updates
    if (t >= 0.0 && img_food1_p.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_food1_p.tStart = t;  // (not accounting for frame time here)
      img_food1_p.frameNStart = frameN;  // exact frame index
      
      img_food1_p.setAutoDraw(true);
    }

    
    // *img_food2_p* updates
    if (t >= 0.0 && img_food2_p.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_food2_p.tStart = t;  // (not accounting for frame time here)
      img_food2_p.frameNStart = frameN;  // exact frame index
      
      img_food2_p.setAutoDraw(true);
    }

    
    // *img_brand1_p* updates
    if (t >= 0.0 && img_brand1_p.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_brand1_p.tStart = t;  // (not accounting for frame time here)
      img_brand1_p.frameNStart = frameN;  // exact frame index
      
      img_brand1_p.setAutoDraw(true);
    }

    
    // *img_brand2_p* updates
    if (t >= 0.0 && img_brand2_p.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_brand2_p.tStart = t;  // (not accounting for frame time here)
      img_brand2_p.frameNStart = frameN;  // exact frame index
      
      img_brand2_p.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice'-------
    practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    if (resp_choose_p.x) {  psychoJS.experiment.addData('resp_choose_p.x', resp_choose_p.x[0])};
    if (resp_choose_p.y) {  psychoJS.experiment.addData('resp_choose_p.y', resp_choose_p.y[0])};
    if (resp_choose_p.leftButton) {  psychoJS.experiment.addData('resp_choose_p.leftButton', resp_choose_p.leftButton[0])};
    if (resp_choose_p.midButton) {  psychoJS.experiment.addData('resp_choose_p.midButton', resp_choose_p.midButton[0])};
    if (resp_choose_p.rightButton) {  psychoJS.experiment.addData('resp_choose_p.rightButton', resp_choose_p.rightButton[0])};
    if (resp_choose_p.time) {  psychoJS.experiment.addData('resp_choose_p.time', resp_choose_p.time[0])};
    if (resp_choose_p.clicked_name) {  psychoJS.experiment.addData('resp_choose_p.clicked_name', resp_choose_p.clicked_name[0])};
    
    // the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var do_warning_p;
var txt_warning_p_stop;
var time_warning_pComponents;
function time_warning_pRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'time_warning_p'-------
    t = 0;
    time_warning_pClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    do_warning_p = (resp_choose_p.time.slice((- 1))[0] > 3);
    txt_warning_p_stop = (do_warning_p ? 3 : 0);
    
    // keep track of which components have finished
    time_warning_pComponents = [];
    time_warning_pComponents.push(txt_warning_p);
    
    time_warning_pComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function time_warning_pRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'time_warning_p'-------
    // get current time
    t = time_warning_pClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *txt_warning_p* updates
    if (t >= 0.0 && txt_warning_p.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_warning_p.tStart = t;  // (not accounting for frame time here)
      txt_warning_p.frameNStart = frameN;  // exact frame index
      
      txt_warning_p.setAutoDraw(true);
    }

    frameRemains = 0.0 + txt_warning_p_stop - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (txt_warning_p.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      txt_warning_p.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    time_warning_pComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function time_warning_pRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'time_warning_p'-------
    time_warning_pComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "time_warning_p" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instr_1fComponents;
function instr_1fRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_1f'-------
    t = 0;
    instr_1fClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the resp_1f
    resp_1f.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instr_1fComponents = [];
    instr_1fComponents.push(txt_1f);
    instr_1fComponents.push(resp_1f);
    instr_1fComponents.push(img_1f);
    
    instr_1fComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_1fRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_1f'-------
    // get current time
    t = instr_1fClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *txt_1f* updates
    if (t >= 0.0 && txt_1f.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_1f.tStart = t;  // (not accounting for frame time here)
      txt_1f.frameNStart = frameN;  // exact frame index
      
      txt_1f.setAutoDraw(true);
    }

    // *resp_1f* updates
    if (t >= 2.0 && resp_1f.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_1f.tStart = t;  // (not accounting for frame time here)
      resp_1f.frameNStart = frameN;  // exact frame index
      
      resp_1f.status = PsychoJS.Status.STARTED;
      resp_1f.mouseClock.reset();
      prevButtonState = resp_1f.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp_1f.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_1f.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [img_1f,]) {
            if (obj.contains(resp_1f)) {
              gotValidClick = true;
              resp_1f.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *img_1f* updates
    if (t >= 2.0 && img_1f.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_1f.tStart = t;  // (not accounting for frame time here)
      img_1f.frameNStart = frameN;  // exact frame index
      
      img_1f.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_1fComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_1fRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_1f'-------
    instr_1fComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "instr_1f" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var init_mouse_cm;
var choose_moveComponents;
function choose_moveRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'choose_move'-------
    t = 0;
    choose_moveClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    init_mouse_cm = mouse_cm.getPos();
    
    // setup some python lists for storing info about the mouse_cm
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    choose_moveComponents = [];
    choose_moveComponents.push(mouse_cm);
    
    choose_moveComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function choose_moveRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'choose_move'-------
    // get current time
    t = choose_moveClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    movement = (((init_mouse_cm[0] - mouse_cm.getPos()[0]) !== 0) || ((init_mouse_cm[1] - mouse_cm.getPos()[1]) !== 0));
    if (movement) {
        continueRoutine = false;
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    choose_moveComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function choose_moveRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'choose_move'-------
    choose_moveComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "choose_move" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var x_coord;
var y_coord;
var time;
var chooseComponents;
function chooseRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'choose'-------
    t = 0;
    chooseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the resp_choose
    // current position of the mouse:
    resp_choose.x = [];
    resp_choose.y = [];
    resp_choose.leftButton = [];
    resp_choose.midButton = [];
    resp_choose.rightButton = [];
    resp_choose.time = [];
    resp_choose.clicked_name = [];
    gotValidClick = false; // until a click is received
    win_width = psychoJS.window.size[0]
    win_height = psychoJS.window.size[1]
    upper_left = [(- win_width / win_height / 2 + 0.1), 0.5 - 0.05]
    upper_right = [win_width / win_height / 2 - 0.1, 0.5 - 0.05]
    food_top = random_bools.pop()
    if (food_top) {
        pos_img_food1 = pos_left_top_img;
        pos_img_brand1 = pos_left_bot_img;
        pos_img_food2 = pos_right_top_img;
        pos_img_brand2 = pos_right_bot_img;
    } else {
        pos_img_food1 = pos_left_bot_img;
        pos_img_brand1 = pos_left_top_img;
        pos_img_food2 = pos_right_bot_img;
        pos_img_brand2 = pos_right_top_img;
    }
    
    left_choice.setPos(upper_left);
    right_choice.setPos(upper_right);
    x_coord = [];
    y_coord = [];
    time = [];
    
    img_food1.setPos(pos_img_food1);
    img_food1.setImage(("images/foods_and_brands/" + food1));
    img_food2.setPos(pos_img_food2);
    img_food2.setImage(("images/foods_and_brands/" + food2));
    img_brand1.setPos(pos_img_brand1);
    img_brand1.setImage(("images/foods_and_brands/" + brand1));
    img_brand2.setPos(pos_img_brand2);
    img_brand2.setImage(("images/foods_and_brands/" + brand2));
    // keep track of which components have finished
    chooseComponents = [];
    chooseComponents.push(resp_choose);
    chooseComponents.push(left_choice);
    chooseComponents.push(right_choice);
    chooseComponents.push(img_food1);
    chooseComponents.push(img_food2);
    chooseComponents.push(img_brand1);
    chooseComponents.push(img_brand2);
    
    chooseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var mouse_position;
function chooseRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'choose'-------
    // get current time
    t = chooseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *resp_choose* updates
    if (t >= 0.0 && resp_choose.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_choose.tStart = t;  // (not accounting for frame time here)
      resp_choose.frameNStart = frameN;  // exact frame index
      
      resp_choose.status = PsychoJS.Status.STARTED;
      resp_choose.mouseClock.reset();
      prevButtonState = resp_choose.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp_choose.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_choose.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = resp_choose.getPos();
          resp_choose.x.push(_mouseXYs[0]);
          resp_choose.y.push(_mouseXYs[1]);
          resp_choose.leftButton.push(_mouseButtons[0]);
          resp_choose.midButton.push(_mouseButtons[1]);
          resp_choose.rightButton.push(_mouseButtons[2]);
          resp_choose.time.push(resp_choose.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [left_choice, right_choice,]) {
            if (obj.contains(resp_choose)) {
              gotValidClick = true;
              resp_choose.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *left_choice* updates
    if (t >= 0.0 && left_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_choice.tStart = t;  // (not accounting for frame time here)
      left_choice.frameNStart = frameN;  // exact frame index
      
      left_choice.setAutoDraw(true);
    }

    
    // *right_choice* updates
    if (t >= 0.0 && right_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_choice.tStart = t;  // (not accounting for frame time here)
      right_choice.frameNStart = frameN;  // exact frame index
      
      right_choice.setAutoDraw(true);
    }

    mouse_position = resp_choose.getPos();
    x_coord.push(mouse_position[0]);
    y_coord.push(mouse_position[1]);
    time.push(resp_choose.mouseClock.getTime())
    
    // *img_food1* updates
    if (t >= 0.0 && img_food1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_food1.tStart = t;  // (not accounting for frame time here)
      img_food1.frameNStart = frameN;  // exact frame index
      
      img_food1.setAutoDraw(true);
    }

    
    // *img_food2* updates
    if (t >= 0.0 && img_food2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_food2.tStart = t;  // (not accounting for frame time here)
      img_food2.frameNStart = frameN;  // exact frame index
      
      img_food2.setAutoDraw(true);
    }

    
    // *img_brand1* updates
    if (t >= 0.0 && img_brand1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_brand1.tStart = t;  // (not accounting for frame time here)
      img_brand1.frameNStart = frameN;  // exact frame index
      
      img_brand1.setAutoDraw(true);
    }

    
    // *img_brand2* updates
    if (t >= 0.0 && img_brand2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_brand2.tStart = t;  // (not accounting for frame time here)
      img_brand2.frameNStart = frameN;  // exact frame index
      
      img_brand2.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    chooseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function chooseRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'choose'-------
    chooseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    if (resp_choose.x) {  psychoJS.experiment.addData('resp_choose.x', resp_choose.x[0])};
    if (resp_choose.y) {  psychoJS.experiment.addData('resp_choose.y', resp_choose.y[0])};
    if (resp_choose.leftButton) {  psychoJS.experiment.addData('resp_choose.leftButton', resp_choose.leftButton[0])};
    if (resp_choose.midButton) {  psychoJS.experiment.addData('resp_choose.midButton', resp_choose.midButton[0])};
    if (resp_choose.rightButton) {  psychoJS.experiment.addData('resp_choose.rightButton', resp_choose.rightButton[0])};
    if (resp_choose.time) {  psychoJS.experiment.addData('resp_choose.time', resp_choose.time[0])};
    if (resp_choose.clicked_name) {  psychoJS.experiment.addData('resp_choose.clicked_name', resp_choose.clicked_name[0])};
    
    psychoJS.experiment.addData('food_top', food_top)
    psychoJS.experiment.addData('screen_width', win_width)
    psychoJS.experiment.addData('screen_height', win_height)
    psychoJS.experiment.addData('x_coord', x_coord);
    psychoJS.experiment.addData('y_coord', y_coord);
    psychoJS.experiment.addData('time', time);
    // the Routine "choose" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var do_warning;
var txt_warning_stop;
var time_warningComponents;
function time_warningRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'time_warning'-------
    t = 0;
    time_warningClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    do_warning = (resp_choose.time.slice((- 1))[0] > 3);
    txt_warning_stop = (do_warning ? 3 : 0);
    
    // keep track of which components have finished
    time_warningComponents = [];
    time_warningComponents.push(txt_warning);
    
    time_warningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function time_warningRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'time_warning'-------
    // get current time
    t = time_warningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *txt_warning* updates
    if (t >= 0.0 && txt_warning.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_warning.tStart = t;  // (not accounting for frame time here)
      txt_warning.frameNStart = frameN;  // exact frame index
      
      txt_warning.setAutoDraw(true);
    }

    frameRemains = 0.0 + txt_warning_stop - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (txt_warning.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      txt_warning.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    time_warningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function time_warningRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'time_warning'-------
    time_warningComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "time_warning" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instr_p2;
var instr_p3;
var instr_food_a;
var instr_brand_a;
var instr_food_b;
var instr_brand_b;
var instr_food_c;
var instr_brand_c;
var instr_food_d;
var instr_brand_d;
var instr_2aComponents;
function instr_2aRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_2a'-------
    t = 0;
    instr_2aClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr_p2 = "Part 2\n\n";
    instr_p3 = "Part 3\n\n";
    instr_food_a = "In this part of the experiment we will show you pictures of foods and we will ask you to provide a rating (on a scale from -3 to +3) of how much you would like to eat that food right now.\n\nNOTE: These liking ratings are a crucial part of the experiment, so please be as accurate as possible.";
    instr_brand_a = "In this part of the experiment we will show you pictures of food brands and we will ask you to provide a rating (on a scale from -3 to +3) of how much you like each particular brand.\n\nNOTE: These liking ratings are a crucial part of the experiment, so please be as accurate as possible.";
    instr_food_b = "The rating scale is as follows:\n\n- A rating of \u20180\u2019 means that you are indifferent between eating that food and not eating it, or that you neither like nor dislike it.\n- A positive rating means that you like the food, with a rating of \u2018+3\u2019 indicating that you like the food as much as possible.\n- A negative rating means that you do NOT like the food, with a rating of \u2018-3\u2019 indicating that you dislike the food as much as possible.";
    instr_brand_b = "The rating scale is as follows:\n\n- A rating of \u20180\u2019 means that you neither like nor dislike the brand.\n- A positive rating means that you like the brand, with a rating of \u2018+3\u2019 indicating that you like the brand as much as possible.\n- A negative rating means that you do NOT like the brand, with a rating of \u2018-3\u2019 indicating that you dislike the brand as much as possible.";
    instr_food_c = "The rating task works as follows:\n\n1. You will see the picture of a food.\n2. The rating scale will appear below the picture. At this time, you should enter your rating.";
    instr_brand_c = "The rating task works as follows:\n\n1. You will see the picture of a brand.\n2. The rating scale will appear below the picture. At this time, you should enter your rating.";
    instr_food_d = "To enter your rating, use the MOUSE to click the desired value. Please focus on the food image as you select your rating with the mouse.";
    instr_brand_d = "To enter your rating, use the MOUSE to click the desired value. Please focus on the brand image as you select your rating with the mouse.";
    if ((label === "food")) {
        if (completed_2) {
            instr_2a = (instr_p3 + instr_food_a);
        } else {
            instr_2a = (instr_p2 + instr_food_a);
        }
        instr_2b = instr_food_b;
        instr_2c = instr_food_c;
        instr_2d = instr_food_d;
    } else {
        if (completed_2) {
            instr_2a = (instr_p3 + instr_brand_a);
        } else {
            instr_2a = (instr_p2 + instr_brand_a);
        }
        instr_2b = instr_brand_b;
        instr_2c = instr_brand_c;
        instr_2d = instr_brand_d;
    }
    
    txt_2a.setText(instr_2a);
    // setup some python lists for storing info about the resp_2a
    resp_2a.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instr_2aComponents = [];
    instr_2aComponents.push(txt_2a);
    instr_2aComponents.push(resp_2a);
    instr_2aComponents.push(img_2a);
    
    instr_2aComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_2aRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_2a'-------
    // get current time
    t = instr_2aClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *txt_2a* updates
    if (t >= 0.0 && txt_2a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_2a.tStart = t;  // (not accounting for frame time here)
      txt_2a.frameNStart = frameN;  // exact frame index
      
      txt_2a.setAutoDraw(true);
    }

    // *resp_2a* updates
    if (t >= 7.0 && resp_2a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_2a.tStart = t;  // (not accounting for frame time here)
      resp_2a.frameNStart = frameN;  // exact frame index
      
      resp_2a.status = PsychoJS.Status.STARTED;
      resp_2a.mouseClock.reset();
      prevButtonState = resp_2a.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp_2a.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_2a.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [img_2a,]) {
            if (obj.contains(resp_2a)) {
              gotValidClick = true;
              resp_2a.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *img_2a* updates
    if (t >= 7.0 && img_2a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_2a.tStart = t;  // (not accounting for frame time here)
      img_2a.frameNStart = frameN;  // exact frame index
      
      img_2a.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_2aComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_2aRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_2a'-------
    instr_2aComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "instr_2a" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instr_2bComponents;
function instr_2bRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_2b'-------
    t = 0;
    instr_2bClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    txt_2b.setText(instr_2b);
    // setup some python lists for storing info about the resp_2b
    resp_2b.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instr_2bComponents = [];
    instr_2bComponents.push(txt_2b);
    instr_2bComponents.push(resp_2b);
    instr_2bComponents.push(img_2b);
    
    instr_2bComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_2bRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_2b'-------
    // get current time
    t = instr_2bClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *txt_2b* updates
    if (t >= 0.0 && txt_2b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_2b.tStart = t;  // (not accounting for frame time here)
      txt_2b.frameNStart = frameN;  // exact frame index
      
      txt_2b.setAutoDraw(true);
    }

    // *resp_2b* updates
    if (t >= 7.0 && resp_2b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_2b.tStart = t;  // (not accounting for frame time here)
      resp_2b.frameNStart = frameN;  // exact frame index
      
      resp_2b.status = PsychoJS.Status.STARTED;
      resp_2b.mouseClock.reset();
      prevButtonState = resp_2b.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp_2b.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_2b.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [img_2b,]) {
            if (obj.contains(resp_2b)) {
              gotValidClick = true;
              resp_2b.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *img_2b* updates
    if (t >= 7.0 && img_2b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_2b.tStart = t;  // (not accounting for frame time here)
      img_2b.frameNStart = frameN;  // exact frame index
      
      img_2b.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_2bComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_2bRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_2b'-------
    instr_2bComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "instr_2b" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instr_2cComponents;
function instr_2cRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_2c'-------
    t = 0;
    instr_2cClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    txt_2c.setText(instr_2c);
    // setup some python lists for storing info about the resp_2c
    resp_2c.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instr_2cComponents = [];
    instr_2cComponents.push(txt_2c);
    instr_2cComponents.push(resp_2c);
    instr_2cComponents.push(img_2c);
    
    instr_2cComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_2cRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_2c'-------
    // get current time
    t = instr_2cClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *txt_2c* updates
    if (t >= 0.0 && txt_2c.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_2c.tStart = t;  // (not accounting for frame time here)
      txt_2c.frameNStart = frameN;  // exact frame index
      
      txt_2c.setAutoDraw(true);
    }

    // *resp_2c* updates
    if (t >= 7.0 && resp_2c.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_2c.tStart = t;  // (not accounting for frame time here)
      resp_2c.frameNStart = frameN;  // exact frame index
      
      resp_2c.status = PsychoJS.Status.STARTED;
      resp_2c.mouseClock.reset();
      prevButtonState = resp_2c.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp_2c.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_2c.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [img_2c,]) {
            if (obj.contains(resp_2c)) {
              gotValidClick = true;
              resp_2c.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *img_2c* updates
    if (t >= 7.0 && img_2c.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_2c.tStart = t;  // (not accounting for frame time here)
      img_2c.frameNStart = frameN;  // exact frame index
      
      img_2c.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_2cComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_2cRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_2c'-------
    instr_2cComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "instr_2c" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var img_2d_src;
var instr_2dComponents;
function instr_2dRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instr_2d'-------
    t = 0;
    instr_2dClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    img_2d_src = (("images/beginpart" + (completed_2 ? "3" : "2")) + ".png");
    
    txt_2d.setText(instr_2d);
    // setup some python lists for storing info about the resp_2d
    resp_2d.clicked_name = [];
    gotValidClick = false; // until a click is received
    img_2d.setImage(img_2d_src);
    // keep track of which components have finished
    instr_2dComponents = [];
    instr_2dComponents.push(txt_2d);
    instr_2dComponents.push(resp_2d);
    instr_2dComponents.push(img_2d);
    
    instr_2dComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_2dRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instr_2d'-------
    // get current time
    t = instr_2dClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *txt_2d* updates
    if (t >= 0.0 && txt_2d.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_2d.tStart = t;  // (not accounting for frame time here)
      txt_2d.frameNStart = frameN;  // exact frame index
      
      txt_2d.setAutoDraw(true);
    }

    // *resp_2d* updates
    if (t >= 2.0 && resp_2d.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_2d.tStart = t;  // (not accounting for frame time here)
      resp_2d.frameNStart = frameN;  // exact frame index
      
      resp_2d.status = PsychoJS.Status.STARTED;
      resp_2d.mouseClock.reset();
      prevButtonState = resp_2d.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp_2d.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_2d.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [img_2d,]) {
            if (obj.contains(resp_2d)) {
              gotValidClick = true;
              resp_2d.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *img_2d* updates
    if (t >= 2.0 && img_2d.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_2d.tStart = t;  // (not accounting for frame time here)
      img_2d.frameNStart = frameN;  // exact frame index
      
      img_2d.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_2dComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_2dRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instr_2d'-------
    instr_2dComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    completed_2 = true;
    
    // store data for thisExp (ExperimentHandler)
    // the Routine "instr_2d" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ratingComponents;
function ratingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'rating'-------
    t = 0;
    ratingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    rated_item.setImage(("images/foods_and_brands/" + item));
    // setup some python lists for storing info about the resp_rating
    // current position of the mouse:
    resp_rating.x = [];
    resp_rating.y = [];
    resp_rating.leftButton = [];
    resp_rating.midButton = [];
    resp_rating.rightButton = [];
    resp_rating.time = [];
    resp_rating.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    ratingComponents = [];
    ratingComponents.push(rated_item);
    ratingComponents.push(neg3);
    ratingComponents.push(neg2);
    ratingComponents.push(neg1);
    ratingComponents.push(pos0);
    ratingComponents.push(pos1);
    ratingComponents.push(pos2);
    ratingComponents.push(pos3);
    ratingComponents.push(resp_rating);
    
    ratingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ratingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'rating'-------
    // get current time
    t = ratingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rated_item* updates
    if (t >= 0.0 && rated_item.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rated_item.tStart = t;  // (not accounting for frame time here)
      rated_item.frameNStart = frameN;  // exact frame index
      
      rated_item.setAutoDraw(true);
    }

    
    // *neg3* updates
    if (t >= 0.0 && neg3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neg3.tStart = t;  // (not accounting for frame time here)
      neg3.frameNStart = frameN;  // exact frame index
      
      neg3.setAutoDraw(true);
    }

    
    // *neg2* updates
    if (t >= 0.0 && neg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neg2.tStart = t;  // (not accounting for frame time here)
      neg2.frameNStart = frameN;  // exact frame index
      
      neg2.setAutoDraw(true);
    }

    
    // *neg1* updates
    if (t >= 0.0 && neg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neg1.tStart = t;  // (not accounting for frame time here)
      neg1.frameNStart = frameN;  // exact frame index
      
      neg1.setAutoDraw(true);
    }

    
    // *pos0* updates
    if (t >= 0.0 && pos0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos0.tStart = t;  // (not accounting for frame time here)
      pos0.frameNStart = frameN;  // exact frame index
      
      pos0.setAutoDraw(true);
    }

    
    // *pos1* updates
    if (t >= 0.0 && pos1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos1.tStart = t;  // (not accounting for frame time here)
      pos1.frameNStart = frameN;  // exact frame index
      
      pos1.setAutoDraw(true);
    }

    
    // *pos2* updates
    if (t >= 0.0 && pos2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos2.tStart = t;  // (not accounting for frame time here)
      pos2.frameNStart = frameN;  // exact frame index
      
      pos2.setAutoDraw(true);
    }

    
    // *pos3* updates
    if (t >= 0.0 && pos3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos3.tStart = t;  // (not accounting for frame time here)
      pos3.frameNStart = frameN;  // exact frame index
      
      pos3.setAutoDraw(true);
    }

    // *resp_rating* updates
    if (t >= 0.0 && resp_rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_rating.tStart = t;  // (not accounting for frame time here)
      resp_rating.frameNStart = frameN;  // exact frame index
      
      resp_rating.status = PsychoJS.Status.STARTED;
      resp_rating.mouseClock.reset();
      prevButtonState = resp_rating.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp_rating.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_rating.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = resp_rating.getPos();
          resp_rating.x.push(_mouseXYs[0]);
          resp_rating.y.push(_mouseXYs[1]);
          resp_rating.leftButton.push(_mouseButtons[0]);
          resp_rating.midButton.push(_mouseButtons[1]);
          resp_rating.rightButton.push(_mouseButtons[2]);
          resp_rating.time.push(resp_rating.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [neg3,neg2,neg1,pos0,pos1,pos2,pos3]) {
            if (obj.contains(resp_rating)) {
              gotValidClick = true;
              resp_rating.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ratingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ratingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'rating'-------
    ratingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    if (resp_rating.x) {  psychoJS.experiment.addData('resp_rating.x', resp_rating.x[0])};
    if (resp_rating.y) {  psychoJS.experiment.addData('resp_rating.y', resp_rating.y[0])};
    if (resp_rating.leftButton) {  psychoJS.experiment.addData('resp_rating.leftButton', resp_rating.leftButton[0])};
    if (resp_rating.midButton) {  psychoJS.experiment.addData('resp_rating.midButton', resp_rating.midButton[0])};
    if (resp_rating.rightButton) {  psychoJS.experiment.addData('resp_rating.rightButton', resp_rating.rightButton[0])};
    if (resp_rating.time) {  psychoJS.experiment.addData('resp_rating.time', resp_rating.time[0])};
    if (resp_rating.clicked_name) {  psychoJS.experiment.addData('resp_rating.clicked_name', resp_rating.clicked_name[0])};
    
    // the Routine "rating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blankComponents;
function blankRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blank'-------
    t = 0;
    blankClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blankComponents = [];
    blankComponents.push(blank_text);
    
    blankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blankRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blank'-------
    // get current time
    t = blankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank_text* updates
    if (t >= 0.0 && blank_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank_text.tStart = t;  // (not accounting for frame time here)
      blank_text.frameNStart = frameN;  // exact frame index
      
      blank_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blank_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank_text.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blankRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blank'-------
    blankComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var show_codeComponents;
function show_codeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'show_code'-------
    t = 0;
    show_codeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    random_code = getRandomCode()
    psychoJS.experiment.addData('code', random_code);
    txt_show_code.setText(("Please write down your Decision Task Completion Code: " + random_code));
    // setup some python lists for storing info about the resp_show_code
    resp_show_code.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    show_codeComponents = [];
    show_codeComponents.push(txt_show_code);
    show_codeComponents.push(resp_show_code);
    show_codeComponents.push(img_show_code);
    
    show_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function show_codeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'show_code'-------
    // get current time
    t = show_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *txt_show_code* updates
    if (t >= 0.0 && txt_show_code.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_show_code.tStart = t;  // (not accounting for frame time here)
      txt_show_code.frameNStart = frameN;  // exact frame index
      
      txt_show_code.setAutoDraw(true);
    }

    // *resp_show_code* updates
    if (t >= 0.0 && resp_show_code.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_show_code.tStart = t;  // (not accounting for frame time here)
      resp_show_code.frameNStart = frameN;  // exact frame index
      
      resp_show_code.status = PsychoJS.Status.STARTED;
      resp_show_code.mouseClock.reset();
      prevButtonState = resp_show_code.getPressed();  // if button is down already this ISN'T a new click
      }
    if (resp_show_code.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_show_code.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [img_show_code,]) {
            if (obj.contains(resp_show_code)) {
              gotValidClick = true;
              resp_show_code.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *img_show_code* updates
    if (t >= 2.0 && img_show_code.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_show_code.tStart = t;  // (not accounting for frame time here)
      img_show_code.frameNStart = frameN;  // exact frame index
      
      img_show_code.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    show_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function show_codeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'show_code'-------
    show_codeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    //psychoJS.experiment.addData('code', random_code);
    // store data for thisExp (ExperimentHandler)
    // the Routine "show_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var endComponents;
function endRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    txt_end.setText('You have now completed the experiment. Click anywhere to exit.');
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(mouse);
    endComponents.push(txt_end);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *txt_end* updates
    if (t >= 0.0 && txt_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_end.tStart = t;  // (not accounting for frame time here)
      txt_end.frameNStart = frameN;  // exact frame index
      
      txt_end.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'end'-------
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
