/***************************** 
 * Reaction_Time_Reward *
 *****************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'reaction_time_reward';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
//Here
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcome_routineRoutineBegin());
flowScheduler.add(welcome_routineRoutineEachFrame());
flowScheduler.add(welcome_routineRoutineEnd());
const block_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(block_loopLoopBegin(block_loopLoopScheduler));
flowScheduler.add(block_loopLoopScheduler);
flowScheduler.add(block_loopLoopEnd);






flowScheduler.add(end_routineRoutineBegin());
flowScheduler.add(end_routineRoutineEachFrame());
flowScheduler.add(end_routineRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions.csv', 'path': 'conditions.csv'},
    {'name': 'trials.csv', 'path': 'trials.csv'},
    {'name': 'stims/pacman.png', 'path': 'stims/pacman.png'},
    {'name': 'stims/pacman_flip.png', 'path': 'stims/pacman_flip.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcome_routineClock;
var cumulative_points;
var block_number;
var trial_number;
var condition_counts;
var all_rt_data;
var intro_text;
var start_key_resp;
var block_intro_routineClock;
var block_info;
var key_resp_1;
var trial_routineClock;
var fixation;
var key_resp;
var feedback_text;
var score_display;
var image;
var block_feedback_routineClock;
var text_show_res;
var end_routineClock;
var text;
var key_resp1;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome_routine"
  welcome_routineClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  
  //var all_rt_data, block_number, condition_counts, cumulative_points, trial_number;
  cumulative_points = 200;
  block_number = 0;
  trial_number = 0;
  condition_counts = {"neutral": 0, "reward": 0, "punishment": 0};
  all_rt_data = [];
  
  intro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text',
    text: "Hello!\n\nWelcome to our experiment. This is a simple task in which you will be presented with a face and you have to indicate whether the face is pointing in the right or the left direction as quickly and accurately as possible. \nIf the face is pointing in the right direction press 'L' on the keyboard. If the face is pointing in the left direction press 'A' on the keyboard.\n\nPress 'SPACE' to start the task! ",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  start_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "block_intro_routine"
  block_intro_routineClock = new util.Clock();
  block_info = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_info',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_routine"
  trial_routineClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  score_display = new visual.TextStim({
    win: psychoJS.window,
    name: 'score_display',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.7), 0.45], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "block_feedback_routine"
  block_feedback_routineClock = new util.Clock();
  text_show_res = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_show_res',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "end_routine"
  end_routineClock = new util.Clock();
  
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: final_msg,
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var welcome_routineMaxDurationReached;
var _start_key_resp_allKeys;
var welcome_routineMaxDuration;
var welcome_routineComponents;
function welcome_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcome_routineClock.reset();
    routineTimer.reset();
    welcome_routineMaxDurationReached = false;
    // update component parameters for each repeat
    start_key_resp.keys = undefined;
    start_key_resp.rt = undefined;
    _start_key_resp_allKeys = [];
    intro_text.wrapWidth = psychoJS.window.size[0] / psychoJS.window.size[1] * 0.9;
    
    intro_text.setText(intro_text.text);
    
    psychoJS.window.color = new util.Color('white');
    psychoJS.experiment.addData('welcome_routine.started', globalClock.getTime());
    welcome_routineMaxDuration = null
    // keep track of which components have finished
    welcome_routineComponents = [];
    welcome_routineComponents.push(intro_text);
    welcome_routineComponents.push(start_key_resp);
    
    for (const thisComponent of welcome_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcome_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome_routine' ---
    // get current time
    t = welcome_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text* updates
    if (t >= 0 && intro_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text.tStart = t;  // (not accounting for frame time here)
      intro_text.frameNStart = frameN;  // exact frame index
      
      intro_text.setAutoDraw(true);
    }
    
    
    // if intro_text is active this frame...
    if (intro_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *start_key_resp* updates
    if (t >= 0 && start_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_key_resp.tStart = t;  // (not accounting for frame time here)
      start_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_key_resp.clearEvents(); });
    }
    
    // if start_key_resp is active this frame...
    if (start_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _start_key_resp_allKeys = _start_key_resp_allKeys.concat(theseKeys);
      if (_start_key_resp_allKeys.length > 0) {
        start_key_resp.keys = _start_key_resp_allKeys[_start_key_resp_allKeys.length - 1].name;  // just the last key pressed
        start_key_resp.rt = _start_key_resp_allKeys[_start_key_resp_allKeys.length - 1].rt;
        start_key_resp.duration = _start_key_resp_allKeys[_start_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcome_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcome_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome_routine' ---
    for (const thisComponent of welcome_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('welcome_routine.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_key_resp.corr, level);
    }
    psychoJS.experiment.addData('start_key_resp.keys', start_key_resp.keys);
    if (typeof start_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_key_resp.rt', start_key_resp.rt);
        psychoJS.experiment.addData('start_key_resp.duration', start_key_resp.duration);
        routineTimer.reset();
        }
    
    start_key_resp.stop();
    psychoJS.window.color = new util.Color('black');
    // the Routine "welcome_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var block_loop;
function block_loopLoopBegin(block_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 6, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.csv',
      seed: undefined, name: 'block_loop'
    });
    psychoJS.experiment.addLoop(block_loop); // add the loop to the experiment
    currentLoop = block_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock_loop of block_loop) {
      snapshot = block_loop.getSnapshot();
      block_loopLoopScheduler.add(importConditions(snapshot));
      block_loopLoopScheduler.add(block_intro_routineRoutineBegin(snapshot));
      block_loopLoopScheduler.add(block_intro_routineRoutineEachFrame());
      block_loopLoopScheduler.add(block_intro_routineRoutineEnd(snapshot));
      const trial_loopLoopScheduler = new Scheduler(psychoJS);
      block_loopLoopScheduler.add(trial_loopLoopBegin(trial_loopLoopScheduler, snapshot));
      block_loopLoopScheduler.add(trial_loopLoopScheduler);
      block_loopLoopScheduler.add(trial_loopLoopEnd);
      block_loopLoopScheduler.add(block_feedback_routineRoutineBegin(snapshot));
      block_loopLoopScheduler.add(block_feedback_routineRoutineEachFrame());
      block_loopLoopScheduler.add(block_feedback_routineRoutineEnd(snapshot));
      block_loopLoopScheduler.add(block_loopLoopEndIteration(block_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trial_loop;
function trial_loopLoopBegin(trial_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trial_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trials.csv',
      seed: undefined, name: 'trial_loop'
    });
    psychoJS.experiment.addLoop(trial_loop); // add the loop to the experiment
    currentLoop = trial_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_loop of trial_loop) {
      snapshot = trial_loop.getSnapshot();
      trial_loopLoopScheduler.add(importConditions(snapshot));
      trial_loopLoopScheduler.add(trial_routineRoutineBegin(snapshot));
      trial_loopLoopScheduler.add(trial_routineRoutineEachFrame());
      trial_loopLoopScheduler.add(trial_routineRoutineEnd(snapshot));
      trial_loopLoopScheduler.add(trial_loopLoopEndIteration(trial_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trial_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trial_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trial_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function block_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(block_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function block_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var block_intro_routineMaxDurationReached;
var block_start_score;
var block_msg;
var block_info_text;
var _key_resp_1_allKeys;
var block_intro_routineMaxDuration;
var block_intro_routineComponents;
function block_intro_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block_intro_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    block_intro_routineClock.reset();
    routineTimer.reset();
    block_intro_routineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code1
    var block_info_text, block_msg;
    
    block_info.wrapWidth = psychoJS.window.size[0] / psychoJS.window.size[1] * 0.9;
    feedback_text.wrapWidth = psychoJS.window.size[0] / psychoJS.window.size[1] * 0.9;
    text.wrapWidth = psychoJS.window.size[0] / psychoJS.window.size[1] * 0.9;
    
    cumulative_points = 200;
    block_start_score = cumulative_points;
    block_number += 1;
    trial_number = 0;
    condition_counts[condition] += 1;
    if ((condition === "neutral")) {
        block_msg = "This block: no points are awarded or deducted.\n\nRespond as quickly and accurately as possible.";
    } else {
        if ((condition === "reward")) {
            block_msg = "This block: correct fast responses EARN points.\n\nRespond as quickly and accurately as possible.";
        } else {
            block_msg = "This block: correct fast responses EARN points AND incorrect or slow responses LOSE points.\n\nRespond as quickly and accurately as possible.";
        }
    }
    block_info_text = `${block_msg}
    
    
    Current score: ${cumulative_points} pts
    
    Block ${block_number} of 18
    
    Press SPACE to begin.`
    ;
    block_info.setText(block_info_text);
    block_info.setText(block_info_text);
    key_resp_1.keys = undefined;
    key_resp_1.rt = undefined;
    _key_resp_1_allKeys = [];
    psychoJS.experiment.addData('block_intro_routine.started', globalClock.getTime());
    block_intro_routineMaxDuration = null
    // keep track of which components have finished
    block_intro_routineComponents = [];
    block_intro_routineComponents.push(block_info);
    block_intro_routineComponents.push(key_resp_1);
    
    for (const thisComponent of block_intro_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function block_intro_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block_intro_routine' ---
    // get current time
    t = block_intro_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block_info* updates
    if (t >= 0 && block_info.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_info.tStart = t;  // (not accounting for frame time here)
      block_info.frameNStart = frameN;  // exact frame index
      
      block_info.setAutoDraw(true);
    }
    
    
    // if block_info is active this frame...
    if (block_info.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_1* updates
    if (t >= 0 && key_resp_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_1.tStart = t;  // (not accounting for frame time here)
      key_resp_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_1.clearEvents(); });
    }
    
    // if key_resp_1 is active this frame...
    if (key_resp_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_1.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_1_allKeys = _key_resp_1_allKeys.concat(theseKeys);
      if (_key_resp_1_allKeys.length > 0) {
        key_resp_1.keys = _key_resp_1_allKeys[0].name;  // just the first key pressed
        key_resp_1.rt = _key_resp_1_allKeys[0].rt;
        key_resp_1.duration = _key_resp_1_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block_intro_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_intro_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block_intro_routine' ---
    for (const thisComponent of block_intro_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('block_intro_routine.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_1.keys', key_resp_1.keys);
    if (typeof key_resp_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_1.rt', key_resp_1.rt);
        psychoJS.experiment.addData('key_resp_1.duration', key_resp_1.duration);
        routineTimer.reset();
        }
    
    key_resp_1.stop();
    // the Routine "block_intro_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_routineMaxDurationReached;
var _key_resp_allKeys;
var feedback_msg;
var feedback_color;
var jitter_time;
var trial_routineMaxDuration;
var trial_routineComponents;
function trial_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trial_routineClock.reset();
    routineTimer.reset();
    trial_routineMaxDurationReached = false;
    // update component parameters for each repeat
    fixation.setText('+');
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // Run 'Begin Routine' code from code2
    var feedback_color, feedback_msg;
    
    block_info.wrapWidth = psychoJS.window.size[0] / psychoJS.window.size[1] * 0.9;
    feedback_text.wrapWidth = psychoJS.window.size[0] / psychoJS.window.size[1] * 0.9;
    text.wrapWidth = psychoJS.window.size[0] / psychoJS.window.size[1] * 0.9;
    
    feedback_msg = "";
    feedback_color = "white";
    feedback_text.setOpacity(0);
    jitter_time = Math.random() * (1.5 - 0.25) + 0.25;
    psychoJS.experiment.addData("jitter_time", jitter_time);
    
    // JS version
    psychoJS.experiment.addData('condition', condition);
    feedback_text.setColor(new util.Color(feedback_color));
    feedback_text.setText(feedback_msg);
    image.setImage(faces);
    psychoJS.experiment.addData('trial_routine.started', globalClock.getTime());
    trial_routineMaxDuration = null
    // keep track of which components have finished
    trial_routineComponents = [];
    trial_routineComponents.push(fixation);
    trial_routineComponents.push(key_resp);
    trial_routineComponents.push(feedback_text);
    trial_routineComponents.push(score_display);
    trial_routineComponents.push(image);
    
    for (const thisComponent of trial_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trial_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_routine' ---
    // get current time
    t = trial_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    
    // if fixation is active this frame...
    if (fixation.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = (0.5 + jitter_time) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if ((fixation.status === PsychoJS.Status.STARTED || fixation.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation.tStop = t;  // not accounting for scr refresh
      fixation.frameNStop = frameN;  // exact frame index
      // update status
      fixation.status = PsychoJS.Status.FINISHED;
      fixation.setAutoDraw(false);
    }
    
    
    // *key_resp* updates
    if (t >= (0.5 + jitter_time) && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof ['a','l'] === 'string' ? [['a','l']] : ['a','l'], 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[0].name;  // just the first key pressed
        key_resp.rt = _key_resp_allKeys[0].rt;
        key_resp.duration = _key_resp_allKeys[0].duration;
        // was this correct?
        if (key_resp.keys == corr_ans) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *feedback_text* updates
    if (t >= 0.5 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }
    
    
    // if feedback_text is active this frame...
    if (feedback_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *score_display* updates
    if (t >= 0 && score_display.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      score_display.setText(`Score: ${cumulative_points}`, false);
      // keep track of start time/frame for later
      score_display.tStart = t;  // (not accounting for frame time here)
      score_display.frameNStart = frameN;  // exact frame index
      
      score_display.setAutoDraw(true);
    }
    
    
    // if score_display is active this frame...
    if (score_display.status === PsychoJS.Status.STARTED) {
      // update params
      score_display.setText(`Score: ${cumulative_points}`, false);
    }
    
    frameRemains = 0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (score_display.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      score_display.tStop = t;  // not accounting for scr refresh
      score_display.frameNStop = frameN;  // exact frame index
      // update status
      score_display.status = PsychoJS.Status.FINISHED;
      score_display.setAutoDraw(false);
    }
    
    
    // *image* updates
    if (t >= (0.5 + jitter_time) && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // if image is active this frame...
    if (image.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var response;
var rt;
var accuracy;
var trial_record;
function trial_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_routine' ---
    for (const thisComponent of trial_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_routine.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // Run 'End Routine' code from code2
    var accuracy, response, rt, trial_record;
    feedback_text.setOpacity(10);
    trial_number += 1;
    if (key_resp.keys) {
        response = ((key_resp.keys instanceof Array) ? key_resp.keys[0] : key_resp.keys);
        rt = (((key_resp.rt instanceof Array) ? key_resp.rt[0] : key_resp.rt) * 1000);
        accuracy = key_resp.corr;
    } else {
        response = null;
        rt = null;
        accuracy = 0;
    }
    if ((condition === "reward")) {
        if (((accuracy === 1) && (rt !== null))) {
            cumulative_points += 10;
        }
    } else {
        if ((condition === "punishment")) {
            if (((accuracy === 1) && (rt !== null))) {
                cumulative_points += 10;
            } else {
                if (((accuracy === 0) || (rt === null))) {
                    cumulative_points -= 10;
                }
            }
        }
    }
    cumulative_points = Math.max(0, cumulative_points);
    trial_record = {"participant": expInfo["participant"], "block_number": block_number, "trial_number": trial_number, "condition": condition, "stimulus": faces, "response": response, "correct_key": correct_key, "accuracy": accuracy, "rt_ms": rt, "cumulative_pts": cumulative_points};
    all_rt_data.push(trial_record);
    
    // the Routine "trial_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var block_feedback_routineMaxDurationReached;
var msg_color;
var block_feedback_routineMaxDuration;
var block_feedback_routineComponents;
function block_feedback_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block_feedback_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    block_feedback_routineClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    block_feedback_routineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_show_res
    
    var points_diff = cumulative_points - block_start_score;
    var msg_color, feedback_msg;
    
    block_info.wrapWidth = psychoJS.window.size[0] / psychoJS.window.size[1] * 0.9;
    feedback_text.wrapWidth = psychoJS.window.size[0] / psychoJS.window.size[1] * 0.9;
    text.wrapWidth = psychoJS.window.size[0] / psychoJS.window.size[1] * 0.9;
    
    if (points_diff > 0) { msg_color = "green"; }
    else if (points_diff < 0) { msg_color = "red"; }
    else { msg_color = "white"; }
    if (points_diff >= 0) {
        feedback_msg = "In this block, you gained " + points_diff + " points!";
    } else {
        feedback_msg = "In this block, you lost " + Math.abs(points_diff) + " points!";
    }
    feedback_msg += "\n\nTotal Block Score: " + cumulative_points;
    text_show_res.setColor(new util.Color(msg_color));
    text_show_res.setText(feedback_msg);
    psychoJS.experiment.addData('block_feedback_routine.started', globalClock.getTime());
    block_feedback_routineMaxDuration = null
    // keep track of which components have finished
    block_feedback_routineComponents = [];
    block_feedback_routineComponents.push(text_show_res);
    
    for (const thisComponent of block_feedback_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function block_feedback_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block_feedback_routine' ---
    // get current time
    t = block_feedback_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_show_res* updates
    if (t >= 0 && text_show_res.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_show_res.tStart = t;  // (not accounting for frame time here)
      text_show_res.frameNStart = frameN;  // exact frame index
      
      text_show_res.setAutoDraw(true);
    }
    
    
    // if text_show_res is active this frame...
    if (text_show_res.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_show_res.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_show_res.tStop = t;  // not accounting for scr refresh
      text_show_res.frameNStop = frameN;  // exact frame index
      // update status
      text_show_res.status = PsychoJS.Status.FINISHED;
      text_show_res.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block_feedback_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_feedback_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block_feedback_routine' ---
    for (const thisComponent of block_feedback_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('block_feedback_routine.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (block_feedback_routineMaxDurationReached) {
        block_feedback_routineClock.add(block_feedback_routineMaxDuration);
    } else {
        block_feedback_routineClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_routineMaxDurationReached;
var final_msg;
var _key_resp1_allKeys;
var end_routineMaxDuration;
var end_routineComponents;
function end_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    end_routineClock.reset();
    routineTimer.reset();
    end_routineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code3
    var final_msg;
    block_info.wrapWidth = psychoJS.window.size[0] / psychoJS.window.size[1] * 0.9;
    feedback_text.wrapWidth = psychoJS.window.size[0] / psychoJS.window.size[1] * 0.9;
    text.wrapWidth = psychoJS.window.size[0] / psychoJS.window.size[1] * 0.9;
    
    final_msg = "Thank you for participating!\n\nThe experiment is now complete.\nPlease wait while we save your responses";
    
    text.setText(final_msg);
    key_resp1.keys = undefined;
    key_resp1.rt = undefined;
    _key_resp1_allKeys = [];
    // Disable downloading results to a browser
    psychoJS._saveResults = 0;
    
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    //Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {return Object.values(it).toString()}).join('\n')
    
    //Send data to OSF via datapipe
    console.log('Saving data .....');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            Accept:'*/*',
        },
        body: JSON.stringify({
            experimentID: 'P6qzfbac8s1j',
            filename: filename,
            data:data,
        }),
    }).then(response => response.json()).then(data => {
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('end_routine.started', globalClock.getTime());
    end_routineMaxDuration = null
    // keep track of which components have finished
    end_routineComponents = [];
    end_routineComponents.push(text);
    end_routineComponents.push(key_resp1);
    
    for (const thisComponent of end_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_routine' ---
    // get current time
    t = end_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text.tStop = t;  // not accounting for scr refresh
      text.frameNStop = frameN;  // exact frame index
      // update status
      text.status = PsychoJS.Status.FINISHED;
      text.setAutoDraw(false);
    }
    
    
    // *key_resp1* updates
    if (t >= 0 && key_resp1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp1.tStart = t;  // (not accounting for frame time here)
      key_resp1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp1.clearEvents(); });
    }
    
    // if key_resp1 is active this frame...
    if (key_resp1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp1.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp1_allKeys = _key_resp1_allKeys.concat(theseKeys);
      if (_key_resp1_allKeys.length > 0) {
        key_resp1.keys = _key_resp1_allKeys[0].name;  // just the first key pressed
        key_resp1.rt = _key_resp1_allKeys[0].rt;
        key_resp1.duration = _key_resp1_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_routine' ---
    for (const thisComponent of end_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end_routine.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp1.corr, level);
    }
    psychoJS.experiment.addData('key_resp1.keys', key_resp1.keys);
    if (typeof key_resp1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp1.rt', key_resp1.rt);
        psychoJS.experiment.addData('key_resp1.duration', key_resp1.duration);
        routineTimer.reset();
        }
    
    key_resp1.stop();
    // the Routine "end_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
