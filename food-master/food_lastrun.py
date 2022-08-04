#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.1.4),
    on Wed Aug  4 17:15:53 2021
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.1.4'
expName = 'food'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/ryanxu/Documents/Cornell/Summer 21/food/food_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='norm')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "instr_1a"
instr_1aClock = core.Clock()
txt_1a = visual.TextStim(win=win, name='txt_1a',
    text='[TODO]Welcome! Thank you for taking the experiment today.\n\nImportant note: DO NOT EXIT FULLSCREEN MODE THROUGHOUT THE EXPERIMENT. If for some reason the experiment stalls or does not continue as it should, please stop the experiment and email me at gwf25@cornell.edu.\n\nThe experiment contains three sections and will begin now.',
    font='Open Sans',
    units='height', pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
resp_1a = event.Mouse(win=win)
x, y = [None, None]
resp_1a.mouseClock = core.Clock()
img_1a = visual.ImageStim(
    win=win,
    name='img_1a', units='height', 
    image='images/continue.png', mask=None,
    ori=0.0, pos=(0, -.35), size=(0.4, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# Initialize components for Routine "begin_trial"
begin_trialClock = core.Clock()
img_choose_begin = visual.ImageStim(
    win=win,
    name='img_choose_begin', units='height', 
    image='images/start.png', mask=None,
    ori=0.0, pos=(0, -.425), size=(0.25, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
resp_choose_begin = event.Mouse(win=win)
x, y = [None, None]
resp_choose_begin.mouseClock = core.Clock()

# Initialize components for Routine "practice"
practiceClock = core.Clock()
resp_choose_p = event.Mouse(win=win)
x, y = [None, None]
resp_choose_p.mouseClock = core.Clock()
random_bools = [True, True, True, True, True, False, False, False, False, False]
shuffle(random_bools)
pos_left_top_img = (-0.45, .15) 
pos_left_bot_img = (-0.45, -.15) 
pos_right_top_img = (.45, .15)
pos_right_bot_img = (.45, -.15)
pos_img_food1 = pos_left_top_img
pos_img_brand1 = pos_left_bot_img
pos_img_food2 = pos_right_top_img
pos_img_brand2 = pos_right_bot_img

left_choice_p = visual.ImageStim(
    win=win,
    name='left_choice_p', units='height', 
    image='images/left.png', mask=None,
    ori=0.0, pos=[0,0], size=(0.2, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
right_choice_p = visual.ImageStim(
    win=win,
    name='right_choice_p', units='height', 
    image='images/right.png', mask=None,
    ori=0.0, pos=[0,0], size=(0.2, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
img_food1_p = visual.ImageStim(
    win=win,
    name='img_food1_p', units='height', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
img_food2_p = visual.ImageStim(
    win=win,
    name='img_food2_p', units='height', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-6.0)
img_brand1_p = visual.ImageStim(
    win=win,
    name='img_brand1_p', units='height', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
img_brand2_p = visual.ImageStim(
    win=win,
    name='img_brand2_p', units='height', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-8.0)

# Initialize components for Routine "instr_1f"
instr_1fClock = core.Clock()
txt_1e = visual.TextStim(win=win, name='txt_1e',
    text='The practice trials are now complete. You will now begin Part 1.',
    font='Open Sans',
    units='height', pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
resp_1e = event.Mouse(win=win)
x, y = [None, None]
resp_1e.mouseClock = core.Clock()
img_1e = visual.ImageStim(
    win=win,
    name='img_1e', units='height', 
    image='images/beginpart1.png', mask=None,
    ori=0.0, pos=(0, -.35), size=(0.5, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# Initialize components for Routine "begin_trial"
begin_trialClock = core.Clock()
img_choose_begin = visual.ImageStim(
    win=win,
    name='img_choose_begin', units='height', 
    image='images/start.png', mask=None,
    ori=0.0, pos=(0, -.425), size=(0.25, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
resp_choose_begin = event.Mouse(win=win)
x, y = [None, None]
resp_choose_begin.mouseClock = core.Clock()

# Initialize components for Routine "choose"
chooseClock = core.Clock()
resp_choose = event.Mouse(win=win)
x, y = [None, None]
resp_choose.mouseClock = core.Clock()
random_bools = [True, True, True, True, True, False, False, False, False, False]
shuffle(random_bools)
pos_left_top_img = (-0.45, .15) 
pos_left_bot_img = (-0.45, -.15) 
pos_right_top_img = (.45, .15)
pos_right_bot_img = (.45, -.15)
pos_img_food1 = pos_left_top_img
pos_img_brand1 = pos_left_bot_img
pos_img_food2 = pos_right_top_img
pos_img_brand2 = pos_right_bot_img

left_choice = visual.ImageStim(
    win=win,
    name='left_choice', units='height', 
    image='images/left.png', mask=None,
    ori=0.0, pos=[0,0], size=(0.2, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
right_choice = visual.ImageStim(
    win=win,
    name='right_choice', units='height', 
    image='images/right.png', mask=None,
    ori=0.0, pos=[0,0], size=(0.2, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
img_food1 = visual.ImageStim(
    win=win,
    name='img_food1', units='height', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
img_food2 = visual.ImageStim(
    win=win,
    name='img_food2', units='height', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-6.0)
img_brand1 = visual.ImageStim(
    win=win,
    name='img_brand1', units='height', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)
img_brand2 = visual.ImageStim(
    win=win,
    name='img_brand2', units='height', 
    image='sin', mask=None,
    ori=0.0, pos=[0,0], size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-8.0)

# Initialize components for Routine "instr_2a"
instr_2aClock = core.Clock()
completed_2 = False
instr_2a = ""
instr_2b = ""
instr_2c = ""
instr_2d = ""
txt_2a = visual.TextStim(win=win, name='txt_2a',
    text='',
    font='Open Sans',
    units='height', pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
resp_2a = event.Mouse(win=win)
x, y = [None, None]
resp_2a.mouseClock = core.Clock()
img_2a = visual.ImageStim(
    win=win,
    name='img_2a', units='height', 
    image='images/continue.png', mask=None,
    ori=0.0, pos=(0, -.35), size=(0.4, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)

# Initialize components for Routine "instr_2b"
instr_2bClock = core.Clock()
txt_2b = visual.TextStim(win=win, name='txt_2b',
    text='',
    font='Open Sans',
    units='height', pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
resp_2b = event.Mouse(win=win)
x, y = [None, None]
resp_2b.mouseClock = core.Clock()
img_2b = visual.ImageStim(
    win=win,
    name='img_2b', units='height', 
    image='images/continue.png', mask=None,
    ori=0.0, pos=(0, -.35), size=(0.4, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# Initialize components for Routine "instr_2c"
instr_2cClock = core.Clock()
txt_2c = visual.TextStim(win=win, name='txt_2c',
    text='',
    font='Open Sans',
    units='height', pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
resp_2c = event.Mouse(win=win)
x, y = [None, None]
resp_2c.mouseClock = core.Clock()
img_2c = visual.ImageStim(
    win=win,
    name='img_2c', units='height', 
    image='images/continue.png', mask=None,
    ori=0.0, pos=(0, -.35), size=(0.4, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# Initialize components for Routine "instr_2d"
instr_2dClock = core.Clock()
txt_2d = visual.TextStim(win=win, name='txt_2d',
    text='',
    font='Open Sans',
    units='height', pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
resp_2d = event.Mouse(win=win)
x, y = [None, None]
resp_2d.mouseClock = core.Clock()
img_2d = visual.ImageStim(
    win=win,
    name='img_2d', units='height', 
    image='sin', mask=None,
    ori=0.0, pos=(0, -.35), size=(0.5, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)

# Initialize components for Routine "begin_trial"
begin_trialClock = core.Clock()
img_choose_begin = visual.ImageStim(
    win=win,
    name='img_choose_begin', units='height', 
    image='images/start.png', mask=None,
    ori=0.0, pos=(0, -.425), size=(0.25, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
resp_choose_begin = event.Mouse(win=win)
x, y = [None, None]
resp_choose_begin.mouseClock = core.Clock()

# Initialize components for Routine "rating"
ratingClock = core.Clock()
rated_item = visual.ImageStim(
    win=win,
    name='rated_item', units='height', 
    image='sin', mask=None,
    ori=0.0, pos=(0, .2), size=(0.4, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
neg2 = visual.ImageStim(
    win=win,
    name='neg2', units='height', 
    image='images/ratings/-2.png', mask=None,
    ori=0.0, pos=(-.45, -.2), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
neg1 = visual.ImageStim(
    win=win,
    name='neg1', units='height', 
    image='images/ratings/-1.png', mask=None,
    ori=0.0, pos=(-.225, -.2), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
pos0 = visual.ImageStim(
    win=win,
    name='pos0', units='height', 
    image='images/ratings/0.png', mask=None,
    ori=0.0, pos=(0, -.2), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
pos1 = visual.ImageStim(
    win=win,
    name='pos1', units='height', 
    image='images/ratings/1.png', mask=None,
    ori=0.0, pos=(.225, -.2), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
pos2 = visual.ImageStim(
    win=win,
    name='pos2', units='height', 
    image='images/ratings/2.png', mask=None,
    ori=0.0, pos=(.45, -.2), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-5.0)
resp_rating = event.Mouse(win=win)
x, y = [None, None]
resp_rating.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "instr_1a"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the resp_1a
resp_1a.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
instr_1aComponents = [txt_1a, resp_1a, img_1a]
for thisComponent in instr_1aComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instr_1aClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr_1a"-------
while continueRoutine:
    # get current time
    t = instr_1aClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instr_1aClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *txt_1a* updates
    if txt_1a.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        txt_1a.frameNStart = frameN  # exact frame index
        txt_1a.tStart = t  # local t and not account for scr refresh
        txt_1a.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(txt_1a, 'tStartRefresh')  # time at next scr refresh
        txt_1a.setAutoDraw(True)
    # *resp_1a* updates
    if resp_1a.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        resp_1a.frameNStart = frameN  # exact frame index
        resp_1a.tStart = t  # local t and not account for scr refresh
        resp_1a.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(resp_1a, 'tStartRefresh')  # time at next scr refresh
        resp_1a.status = STARTED
        resp_1a.mouseClock.reset()
        prevButtonState = resp_1a.getPressed()  # if button is down already this ISN'T a new click
    if resp_1a.status == STARTED:  # only update if started and not finished!
        buttons = resp_1a.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                for obj in [img_1a,]:
                    if obj.contains(resp_1a):
                        gotValidClick = True
                        resp_1a.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # *img_1a* updates
    if img_1a.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
        # keep track of start time/frame for later
        img_1a.frameNStart = frameN  # exact frame index
        img_1a.tStart = t  # local t and not account for scr refresh
        img_1a.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(img_1a, 'tStartRefresh')  # time at next scr refresh
        img_1a.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr_1aComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr_1a"-------
for thisComponent in instr_1aComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
# the Routine "instr_1a" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practice_trials = data.TrialHandler(nReps=3.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditions_practice.xlsx'),
    seed=None, name='practice_trials')
thisExp.addLoop(practice_trials)  # add the loop to the experiment
thisPractice_trial = practice_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice_trial.rgb)
if thisPractice_trial != None:
    for paramName in thisPractice_trial:
        exec('{} = thisPractice_trial[paramName]'.format(paramName))

for thisPractice_trial in practice_trials:
    currentLoop = practice_trials
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_trial.rgb)
    if thisPractice_trial != None:
        for paramName in thisPractice_trial:
            exec('{} = thisPractice_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "begin_trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the resp_choose_begin
    resp_choose_begin.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    begin_trialComponents = [img_choose_begin, resp_choose_begin]
    for thisComponent in begin_trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    begin_trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "begin_trial"-------
    while continueRoutine:
        # get current time
        t = begin_trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=begin_trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *img_choose_begin* updates
        if img_choose_begin.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img_choose_begin.frameNStart = frameN  # exact frame index
            img_choose_begin.tStart = t  # local t and not account for scr refresh
            img_choose_begin.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_choose_begin, 'tStartRefresh')  # time at next scr refresh
            img_choose_begin.setAutoDraw(True)
        # *resp_choose_begin* updates
        if resp_choose_begin.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            resp_choose_begin.frameNStart = frameN  # exact frame index
            resp_choose_begin.tStart = t  # local t and not account for scr refresh
            resp_choose_begin.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(resp_choose_begin, 'tStartRefresh')  # time at next scr refresh
            resp_choose_begin.status = STARTED
            resp_choose_begin.mouseClock.reset()
            prevButtonState = resp_choose_begin.getPressed()  # if button is down already this ISN'T a new click
        if resp_choose_begin.status == STARTED:  # only update if started and not finished!
            buttons = resp_choose_begin.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [img_choose_begin,]:
                        if obj.contains(resp_choose_begin):
                            gotValidClick = True
                            resp_choose_begin.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in begin_trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "begin_trial"-------
    for thisComponent in begin_trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for practice_trials (TrialHandler)
    # the Routine "begin_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "practice"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the resp_choose_p
    resp_choose_p.clicked_name = []
    gotValidClick = False  # until a click is received
    win_width = win.size[0]
    win_height = win.size[1]
    upper_left = (-win_width / win_height / 2 + 0.1, 0.5 - 0.05) # with image of size (0.2, 0.1)
    upper_right = (win_width / win_height / 2 - 0.1, 0.5 - 0.05) # with image of size (0.2, 0.1)
    
    food_top = random_bools[-1]
    random_bools = random_bools[:-1]
    if food_top:
        pos_img_food1 = pos_left_top_img
        pos_img_brand1 = pos_left_bot_img
        pos_img_food2 = pos_right_top_img
        pos_img_brand2 = pos_right_bot_img
    else:
        pos_img_food1 = pos_left_bot_img
        pos_img_brand1 = pos_left_top_img
        pos_img_food2 = pos_right_bot_img
        pos_img_brand2 = pos_right_top_img
    
    left_choice_p.setPos(upper_left)
    right_choice_p.setPos(upper_right)
    x_coord = []
    y_coord = []
    time = []
    img_food1_p.setPos(pos_img_food1)
    img_food1_p.setImage("images/foods_and_brands/" + food1)
    img_food2_p.setPos(pos_img_food2)
    img_food2_p.setImage("images/foods_and_brands/" + food2)
    img_brand1_p.setPos(pos_img_brand1)
    img_brand1_p.setImage("images/foods_and_brands/" + brand1)
    img_brand2_p.setPos(pos_img_brand2)
    img_brand2_p.setImage("images/foods_and_brands/" + brand2)
    # keep track of which components have finished
    practiceComponents = [resp_choose_p, left_choice_p, right_choice_p, img_food1_p, img_food2_p, img_brand1_p, img_brand2_p]
    for thisComponent in practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice"-------
    while continueRoutine:
        # get current time
        t = practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *resp_choose_p* updates
        if resp_choose_p.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            resp_choose_p.frameNStart = frameN  # exact frame index
            resp_choose_p.tStart = t  # local t and not account for scr refresh
            resp_choose_p.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(resp_choose_p, 'tStartRefresh')  # time at next scr refresh
            resp_choose_p.status = STARTED
            resp_choose_p.mouseClock.reset()
            prevButtonState = resp_choose_p.getPressed()  # if button is down already this ISN'T a new click
        if resp_choose_p.status == STARTED:  # only update if started and not finished!
            buttons = resp_choose_p.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [left_choice_p, right_choice_p,]:
                        if obj.contains(resp_choose_p):
                            gotValidClick = True
                            resp_choose_p.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *left_choice_p* updates
        if left_choice_p.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            left_choice_p.frameNStart = frameN  # exact frame index
            left_choice_p.tStart = t  # local t and not account for scr refresh
            left_choice_p.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(left_choice_p, 'tStartRefresh')  # time at next scr refresh
            left_choice_p.setAutoDraw(True)
        
        # *right_choice_p* updates
        if right_choice_p.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            right_choice_p.frameNStart = frameN  # exact frame index
            right_choice_p.tStart = t  # local t and not account for scr refresh
            right_choice_p.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(right_choice_p, 'tStartRefresh')  # time at next scr refresh
            right_choice_p.setAutoDraw(True)
        x_coord.append(resp_choose.getPos()[0])
        y_coord.append(resp_choose.getPos()[1])
        time.append(resp_choose.mouseClock.getTime())
        
        # *img_food1_p* updates
        if img_food1_p.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img_food1_p.frameNStart = frameN  # exact frame index
            img_food1_p.tStart = t  # local t and not account for scr refresh
            img_food1_p.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_food1_p, 'tStartRefresh')  # time at next scr refresh
            img_food1_p.setAutoDraw(True)
        
        # *img_food2_p* updates
        if img_food2_p.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img_food2_p.frameNStart = frameN  # exact frame index
            img_food2_p.tStart = t  # local t and not account for scr refresh
            img_food2_p.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_food2_p, 'tStartRefresh')  # time at next scr refresh
            img_food2_p.setAutoDraw(True)
        
        # *img_brand1_p* updates
        if img_brand1_p.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img_brand1_p.frameNStart = frameN  # exact frame index
            img_brand1_p.tStart = t  # local t and not account for scr refresh
            img_brand1_p.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_brand1_p, 'tStartRefresh')  # time at next scr refresh
            img_brand1_p.setAutoDraw(True)
        
        # *img_brand2_p* updates
        if img_brand2_p.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img_brand2_p.frameNStart = frameN  # exact frame index
            img_brand2_p.tStart = t  # local t and not account for scr refresh
            img_brand2_p.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_brand2_p, 'tStartRefresh')  # time at next scr refresh
            img_brand2_p.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice"-------
    for thisComponent in practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for practice_trials (TrialHandler)
    thisExp.addData('x_coord', x_coord)
    thisExp.addData('y_coord', y_coord)
    thisExp.addData('time', time)
    # the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 3.0 repeats of 'practice_trials'


# ------Prepare to start Routine "instr_1f"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the resp_1e
resp_1e.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
instr_1fComponents = [txt_1e, resp_1e, img_1e]
for thisComponent in instr_1fComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instr_1fClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instr_1f"-------
while continueRoutine:
    # get current time
    t = instr_1fClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instr_1fClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *txt_1e* updates
    if txt_1e.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        txt_1e.frameNStart = frameN  # exact frame index
        txt_1e.tStart = t  # local t and not account for scr refresh
        txt_1e.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(txt_1e, 'tStartRefresh')  # time at next scr refresh
        txt_1e.setAutoDraw(True)
    # *resp_1e* updates
    if resp_1e.status == NOT_STARTED and t >= 2.0-frameTolerance:
        # keep track of start time/frame for later
        resp_1e.frameNStart = frameN  # exact frame index
        resp_1e.tStart = t  # local t and not account for scr refresh
        resp_1e.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(resp_1e, 'tStartRefresh')  # time at next scr refresh
        resp_1e.status = STARTED
        resp_1e.mouseClock.reset()
        prevButtonState = resp_1e.getPressed()  # if button is down already this ISN'T a new click
    if resp_1e.status == STARTED:  # only update if started and not finished!
        buttons = resp_1e.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                for obj in [img_1e,]:
                    if obj.contains(resp_1e):
                        gotValidClick = True
                        resp_1e.clicked_name.append(obj.name)
                if gotValidClick:  # abort routine on response
                    continueRoutine = False
    
    # *img_1e* updates
    if img_1e.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
        # keep track of start time/frame for later
        img_1e.frameNStart = frameN  # exact frame index
        img_1e.tStart = t  # local t and not account for scr refresh
        img_1e.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(img_1e, 'tStartRefresh')  # time at next scr refresh
        img_1e.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instr_1fComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr_1f"-------
for thisComponent in instr_1fComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.nextEntry()
# the Routine "instr_1f" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
choose_trials = data.TrialHandler(nReps=0.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditions.xlsx'),
    seed=None, name='choose_trials')
thisExp.addLoop(choose_trials)  # add the loop to the experiment
thisChoose_trial = choose_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisChoose_trial.rgb)
if thisChoose_trial != None:
    for paramName in thisChoose_trial:
        exec('{} = thisChoose_trial[paramName]'.format(paramName))

for thisChoose_trial in choose_trials:
    currentLoop = choose_trials
    # abbreviate parameter names if possible (e.g. rgb = thisChoose_trial.rgb)
    if thisChoose_trial != None:
        for paramName in thisChoose_trial:
            exec('{} = thisChoose_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "begin_trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the resp_choose_begin
    resp_choose_begin.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    begin_trialComponents = [img_choose_begin, resp_choose_begin]
    for thisComponent in begin_trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    begin_trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "begin_trial"-------
    while continueRoutine:
        # get current time
        t = begin_trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=begin_trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *img_choose_begin* updates
        if img_choose_begin.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img_choose_begin.frameNStart = frameN  # exact frame index
            img_choose_begin.tStart = t  # local t and not account for scr refresh
            img_choose_begin.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_choose_begin, 'tStartRefresh')  # time at next scr refresh
            img_choose_begin.setAutoDraw(True)
        # *resp_choose_begin* updates
        if resp_choose_begin.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            resp_choose_begin.frameNStart = frameN  # exact frame index
            resp_choose_begin.tStart = t  # local t and not account for scr refresh
            resp_choose_begin.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(resp_choose_begin, 'tStartRefresh')  # time at next scr refresh
            resp_choose_begin.status = STARTED
            resp_choose_begin.mouseClock.reset()
            prevButtonState = resp_choose_begin.getPressed()  # if button is down already this ISN'T a new click
        if resp_choose_begin.status == STARTED:  # only update if started and not finished!
            buttons = resp_choose_begin.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [img_choose_begin,]:
                        if obj.contains(resp_choose_begin):
                            gotValidClick = True
                            resp_choose_begin.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in begin_trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "begin_trial"-------
    for thisComponent in begin_trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for choose_trials (TrialHandler)
    # the Routine "begin_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "choose"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the resp_choose
    resp_choose.x = []
    resp_choose.y = []
    resp_choose.leftButton = []
    resp_choose.midButton = []
    resp_choose.rightButton = []
    resp_choose.time = []
    resp_choose.clicked_name = []
    gotValidClick = False  # until a click is received
    win_width = win.size[0]
    win_height = win.size[1]
    upper_left = (-win_width / win_height / 2 + 0.1, 0.5 - 0.05) # with image of size (0.2, 0.1)
    upper_right = (win_width / win_height / 2 - 0.1, 0.5 - 0.05) # with image of size (0.2, 0.1)
    
    food_top = random_bools[-1]
    random_bools = random_bools[:-1]
    if food_top:
        pos_img_food1 = pos_left_top_img
        pos_img_brand1 = pos_left_bot_img
        pos_img_food2 = pos_right_top_img
        pos_img_brand2 = pos_right_bot_img
    else:
        pos_img_food1 = pos_left_bot_img
        pos_img_brand1 = pos_left_top_img
        pos_img_food2 = pos_right_bot_img
        pos_img_brand2 = pos_right_top_img
    
    left_choice.setPos(upper_left)
    right_choice.setPos(upper_right)
    x_coord = []
    y_coord = []
    time = []
    img_food1.setPos(pos_img_food1)
    img_food1.setImage("images/foods_and_brands/" + food1)
    img_food2.setPos(pos_img_food2)
    img_food2.setImage("images/foods_and_brands/" + food2)
    img_brand1.setPos(pos_img_brand1)
    img_brand1.setImage("images/foods_and_brands/" + brand1)
    img_brand2.setPos(pos_img_brand2)
    img_brand2.setImage("images/foods_and_brands/" + brand2)
    # keep track of which components have finished
    chooseComponents = [resp_choose, left_choice, right_choice, img_food1, img_food2, img_brand1, img_brand2]
    for thisComponent in chooseComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    chooseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "choose"-------
    while continueRoutine:
        # get current time
        t = chooseClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=chooseClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *resp_choose* updates
        if resp_choose.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            resp_choose.frameNStart = frameN  # exact frame index
            resp_choose.tStart = t  # local t and not account for scr refresh
            resp_choose.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(resp_choose, 'tStartRefresh')  # time at next scr refresh
            resp_choose.status = STARTED
            resp_choose.mouseClock.reset()
            prevButtonState = resp_choose.getPressed()  # if button is down already this ISN'T a new click
        if resp_choose.status == STARTED:  # only update if started and not finished!
            buttons = resp_choose.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [left_choice, right_choice,]:
                        if obj.contains(resp_choose):
                            gotValidClick = True
                            resp_choose.clicked_name.append(obj.name)
                    x, y = resp_choose.getPos()
                    resp_choose.x.append(x)
                    resp_choose.y.append(y)
                    buttons = resp_choose.getPressed()
                    resp_choose.leftButton.append(buttons[0])
                    resp_choose.midButton.append(buttons[1])
                    resp_choose.rightButton.append(buttons[2])
                    resp_choose.time.append(resp_choose.mouseClock.getTime())
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *left_choice* updates
        if left_choice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            left_choice.frameNStart = frameN  # exact frame index
            left_choice.tStart = t  # local t and not account for scr refresh
            left_choice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(left_choice, 'tStartRefresh')  # time at next scr refresh
            left_choice.setAutoDraw(True)
        
        # *right_choice* updates
        if right_choice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            right_choice.frameNStart = frameN  # exact frame index
            right_choice.tStart = t  # local t and not account for scr refresh
            right_choice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(right_choice, 'tStartRefresh')  # time at next scr refresh
            right_choice.setAutoDraw(True)
        x_coord.append(resp_choose.getPos()[0])
        y_coord.append(resp_choose.getPos()[1])
        time.append(resp_choose.mouseClock.getTime())
        
        # *img_food1* updates
        if img_food1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img_food1.frameNStart = frameN  # exact frame index
            img_food1.tStart = t  # local t and not account for scr refresh
            img_food1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_food1, 'tStartRefresh')  # time at next scr refresh
            img_food1.setAutoDraw(True)
        
        # *img_food2* updates
        if img_food2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img_food2.frameNStart = frameN  # exact frame index
            img_food2.tStart = t  # local t and not account for scr refresh
            img_food2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_food2, 'tStartRefresh')  # time at next scr refresh
            img_food2.setAutoDraw(True)
        
        # *img_brand1* updates
        if img_brand1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img_brand1.frameNStart = frameN  # exact frame index
            img_brand1.tStart = t  # local t and not account for scr refresh
            img_brand1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_brand1, 'tStartRefresh')  # time at next scr refresh
            img_brand1.setAutoDraw(True)
        
        # *img_brand2* updates
        if img_brand2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img_brand2.frameNStart = frameN  # exact frame index
            img_brand2.tStart = t  # local t and not account for scr refresh
            img_brand2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_brand2, 'tStartRefresh')  # time at next scr refresh
            img_brand2.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in chooseComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "choose"-------
    for thisComponent in chooseComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for choose_trials (TrialHandler)
    if len(resp_choose.x): choose_trials.addData('resp_choose.x', resp_choose.x[0])
    if len(resp_choose.y): choose_trials.addData('resp_choose.y', resp_choose.y[0])
    if len(resp_choose.leftButton): choose_trials.addData('resp_choose.leftButton', resp_choose.leftButton[0])
    if len(resp_choose.midButton): choose_trials.addData('resp_choose.midButton', resp_choose.midButton[0])
    if len(resp_choose.rightButton): choose_trials.addData('resp_choose.rightButton', resp_choose.rightButton[0])
    if len(resp_choose.time): choose_trials.addData('resp_choose.time', resp_choose.time[0])
    if len(resp_choose.clicked_name): choose_trials.addData('resp_choose.clicked_name', resp_choose.clicked_name[0])
    thisExp.addData('food_top', food_top)
    thisExp.addData('x_coord', x_coord)
    thisExp.addData('y_coord', y_coord)
    thisExp.addData('time', time)
    # the Routine "choose" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 0.0 repeats of 'choose_trials'


# set up handler to look after randomisation of conditions etc
blocks = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('blocks.xlsx'),
    seed=None, name='blocks')
thisExp.addLoop(blocks)  # add the loop to the experiment
thisBlock = blocks.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in blocks:
    currentLoop = blocks
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "instr_2a"-------
    continueRoutine = True
    # update component parameters for each repeat
    instr_p2 = "Part 2\n\n"
    instr_p3 = "Part 3\n\n"
    instr_food_a = "In this part of the experiment we will show you pictures of foods and we will ask you to provide a rating (on a scale from -2 to +2) of how much you would like to eat that food right now.\n\nNOTE: These liking ratings are a crucial part of the experiment, so please be as accurate as possible."
    instr_brand_a = "In this part of the experiment we will show you pictures of food brands and we will ask you to provide a rating (on a scale from -2 to +2) of how much you like each particular brand.\n\nNOTE: These liking ratings are a crucial part of the experiment, so please be as accurate as possible."
    instr_food_b = "The rating scale is as follows:\n\n- A rating of ‘0’ means that you are indifferent between eating that food and not eating it, or that you neither like nor dislike it.\n- A positive rating means that you like the food, with a rating of ‘+2’ indicating that you like the food as much as possible.\n- A negative rating means that you do NOT like the food, with a rating of ‘-2’ indicating that you dislike the food as much as possible."
    instr_brand_b = "The rating scale is as follows:\n\n- A rating of ‘0’ means that you neither like nor dislike the brand.\n- A positive rating means that you like the brand, with a rating of ‘+2’ indicating that you like the brand as much as possible.\n- A negative rating means that you do NOT like the brand, with a rating of ‘-2’ indicating that you dislike the brand as much as possible."
    instr_food_c = "The rating task works as follows:\n\n1. You will see the picture of a food.\n2. The rating scale will appear below the picture. At this time, you should enter your rating."
    instr_brand_c = "The rating task works as follows:\n\n1. You will see the picture of a brand.\n2. The rating scale will appear below the picture. At this time, you should enter your rating."
    instr_food_d = "To enter your rating, use the MOUSE to click the desired value. Please focus on the food image as you select your rating with the mouse."
    instr_brand_d = "To enter your rating, use the MOUSE to click the desired value. Please focus on the brand image as you select your rating with the mouse."
    if label == "food":
        if completed_2:
            instr_2a = instr_p3 + instr_food_a
        else:
            instr_2a = instr_p2 + instr_food_a
        instr_2b = instr_food_b
        instr_2c = instr_food_c
        instr_2d = instr_food_d
    else:
        if completed_2:
            instr_2a = instr_p3 + instr_brand_a
        else:
            instr_2a = instr_p2 + instr_brand_a
        instr_2b = instr_brand_b
        instr_2c = instr_brand_c
        instr_2d = instr_brand_d
     
    txt_2a.setText(instr_2a)
    # setup some python lists for storing info about the resp_2a
    resp_2a.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    instr_2aComponents = [txt_2a, resp_2a, img_2a]
    for thisComponent in instr_2aComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instr_2aClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instr_2a"-------
    while continueRoutine:
        # get current time
        t = instr_2aClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instr_2aClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *txt_2a* updates
        if txt_2a.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            txt_2a.frameNStart = frameN  # exact frame index
            txt_2a.tStart = t  # local t and not account for scr refresh
            txt_2a.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(txt_2a, 'tStartRefresh')  # time at next scr refresh
            txt_2a.setAutoDraw(True)
        # *resp_2a* updates
        if resp_2a.status == NOT_STARTED and t >= 2.0-frameTolerance:
            # keep track of start time/frame for later
            resp_2a.frameNStart = frameN  # exact frame index
            resp_2a.tStart = t  # local t and not account for scr refresh
            resp_2a.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(resp_2a, 'tStartRefresh')  # time at next scr refresh
            resp_2a.status = STARTED
            resp_2a.mouseClock.reset()
            prevButtonState = resp_2a.getPressed()  # if button is down already this ISN'T a new click
        if resp_2a.status == STARTED:  # only update if started and not finished!
            buttons = resp_2a.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [img_2a,]:
                        if obj.contains(resp_2a):
                            gotValidClick = True
                            resp_2a.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *img_2a* updates
        if img_2a.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
            # keep track of start time/frame for later
            img_2a.frameNStart = frameN  # exact frame index
            img_2a.tStart = t  # local t and not account for scr refresh
            img_2a.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_2a, 'tStartRefresh')  # time at next scr refresh
            img_2a.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instr_2aComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instr_2a"-------
    for thisComponent in instr_2aComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for blocks (TrialHandler)
    # the Routine "instr_2a" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "instr_2b"-------
    continueRoutine = True
    # update component parameters for each repeat
    txt_2b.setText(instr_2b)
    # setup some python lists for storing info about the resp_2b
    resp_2b.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    instr_2bComponents = [txt_2b, resp_2b, img_2b]
    for thisComponent in instr_2bComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instr_2bClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instr_2b"-------
    while continueRoutine:
        # get current time
        t = instr_2bClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instr_2bClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *txt_2b* updates
        if txt_2b.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            txt_2b.frameNStart = frameN  # exact frame index
            txt_2b.tStart = t  # local t and not account for scr refresh
            txt_2b.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(txt_2b, 'tStartRefresh')  # time at next scr refresh
            txt_2b.setAutoDraw(True)
        # *resp_2b* updates
        if resp_2b.status == NOT_STARTED and t >= 2.0-frameTolerance:
            # keep track of start time/frame for later
            resp_2b.frameNStart = frameN  # exact frame index
            resp_2b.tStart = t  # local t and not account for scr refresh
            resp_2b.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(resp_2b, 'tStartRefresh')  # time at next scr refresh
            resp_2b.status = STARTED
            resp_2b.mouseClock.reset()
            prevButtonState = resp_2b.getPressed()  # if button is down already this ISN'T a new click
        if resp_2b.status == STARTED:  # only update if started and not finished!
            buttons = resp_2b.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [img_2b,]:
                        if obj.contains(resp_2b):
                            gotValidClick = True
                            resp_2b.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *img_2b* updates
        if img_2b.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
            # keep track of start time/frame for later
            img_2b.frameNStart = frameN  # exact frame index
            img_2b.tStart = t  # local t and not account for scr refresh
            img_2b.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_2b, 'tStartRefresh')  # time at next scr refresh
            img_2b.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instr_2bComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instr_2b"-------
    for thisComponent in instr_2bComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for blocks (TrialHandler)
    # the Routine "instr_2b" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "instr_2c"-------
    continueRoutine = True
    # update component parameters for each repeat
    txt_2c.setText(instr_2c)
    # setup some python lists for storing info about the resp_2c
    resp_2c.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    instr_2cComponents = [txt_2c, resp_2c, img_2c]
    for thisComponent in instr_2cComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instr_2cClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instr_2c"-------
    while continueRoutine:
        # get current time
        t = instr_2cClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instr_2cClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *txt_2c* updates
        if txt_2c.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            txt_2c.frameNStart = frameN  # exact frame index
            txt_2c.tStart = t  # local t and not account for scr refresh
            txt_2c.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(txt_2c, 'tStartRefresh')  # time at next scr refresh
            txt_2c.setAutoDraw(True)
        # *resp_2c* updates
        if resp_2c.status == NOT_STARTED and t >= 2.0-frameTolerance:
            # keep track of start time/frame for later
            resp_2c.frameNStart = frameN  # exact frame index
            resp_2c.tStart = t  # local t and not account for scr refresh
            resp_2c.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(resp_2c, 'tStartRefresh')  # time at next scr refresh
            resp_2c.status = STARTED
            resp_2c.mouseClock.reset()
            prevButtonState = resp_2c.getPressed()  # if button is down already this ISN'T a new click
        if resp_2c.status == STARTED:  # only update if started and not finished!
            buttons = resp_2c.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [img_2c,]:
                        if obj.contains(resp_2c):
                            gotValidClick = True
                            resp_2c.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *img_2c* updates
        if img_2c.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
            # keep track of start time/frame for later
            img_2c.frameNStart = frameN  # exact frame index
            img_2c.tStart = t  # local t and not account for scr refresh
            img_2c.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_2c, 'tStartRefresh')  # time at next scr refresh
            img_2c.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instr_2cComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instr_2c"-------
    for thisComponent in instr_2cComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for blocks (TrialHandler)
    # the Routine "instr_2c" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "instr_2d"-------
    continueRoutine = True
    # update component parameters for each repeat
    img_2d_src = "images/beginpart" + ("3" if completed_2 else "2") + ".png" 
    txt_2d.setText(instr_2d)
    # setup some python lists for storing info about the resp_2d
    resp_2d.clicked_name = []
    gotValidClick = False  # until a click is received
    img_2d.setImage(img_2d_src)
    # keep track of which components have finished
    instr_2dComponents = [txt_2d, resp_2d, img_2d]
    for thisComponent in instr_2dComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instr_2dClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instr_2d"-------
    while continueRoutine:
        # get current time
        t = instr_2dClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instr_2dClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *txt_2d* updates
        if txt_2d.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            txt_2d.frameNStart = frameN  # exact frame index
            txt_2d.tStart = t  # local t and not account for scr refresh
            txt_2d.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(txt_2d, 'tStartRefresh')  # time at next scr refresh
            txt_2d.setAutoDraw(True)
        # *resp_2d* updates
        if resp_2d.status == NOT_STARTED and t >= 2.0-frameTolerance:
            # keep track of start time/frame for later
            resp_2d.frameNStart = frameN  # exact frame index
            resp_2d.tStart = t  # local t and not account for scr refresh
            resp_2d.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(resp_2d, 'tStartRefresh')  # time at next scr refresh
            resp_2d.status = STARTED
            resp_2d.mouseClock.reset()
            prevButtonState = resp_2d.getPressed()  # if button is down already this ISN'T a new click
        if resp_2d.status == STARTED:  # only update if started and not finished!
            buttons = resp_2d.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [img_2d,]:
                        if obj.contains(resp_2d):
                            gotValidClick = True
                            resp_2d.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *img_2d* updates
        if img_2d.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
            # keep track of start time/frame for later
            img_2d.frameNStart = frameN  # exact frame index
            img_2d.tStart = t  # local t and not account for scr refresh
            img_2d.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img_2d, 'tStartRefresh')  # time at next scr refresh
            img_2d.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instr_2dComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instr_2d"-------
    for thisComponent in instr_2dComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    completed_2 = True
    # store data for blocks (TrialHandler)
    # the Routine "instr_2d" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(conditions),
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "begin_trial"-------
        continueRoutine = True
        # update component parameters for each repeat
        # setup some python lists for storing info about the resp_choose_begin
        resp_choose_begin.clicked_name = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        begin_trialComponents = [img_choose_begin, resp_choose_begin]
        for thisComponent in begin_trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        begin_trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "begin_trial"-------
        while continueRoutine:
            # get current time
            t = begin_trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=begin_trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *img_choose_begin* updates
            if img_choose_begin.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                img_choose_begin.frameNStart = frameN  # exact frame index
                img_choose_begin.tStart = t  # local t and not account for scr refresh
                img_choose_begin.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(img_choose_begin, 'tStartRefresh')  # time at next scr refresh
                img_choose_begin.setAutoDraw(True)
            # *resp_choose_begin* updates
            if resp_choose_begin.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                resp_choose_begin.frameNStart = frameN  # exact frame index
                resp_choose_begin.tStart = t  # local t and not account for scr refresh
                resp_choose_begin.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(resp_choose_begin, 'tStartRefresh')  # time at next scr refresh
                resp_choose_begin.status = STARTED
                resp_choose_begin.mouseClock.reset()
                prevButtonState = resp_choose_begin.getPressed()  # if button is down already this ISN'T a new click
            if resp_choose_begin.status == STARTED:  # only update if started and not finished!
                buttons = resp_choose_begin.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        for obj in [img_choose_begin,]:
                            if obj.contains(resp_choose_begin):
                                gotValidClick = True
                                resp_choose_begin.clicked_name.append(obj.name)
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in begin_trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "begin_trial"-------
        for thisComponent in begin_trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for trials (TrialHandler)
        # the Routine "begin_trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "rating"-------
        continueRoutine = True
        # update component parameters for each repeat
        rated_item.setImage("images/foods_and_brands/" + item)
        # setup some python lists for storing info about the resp_rating
        resp_rating.x = []
        resp_rating.y = []
        resp_rating.leftButton = []
        resp_rating.midButton = []
        resp_rating.rightButton = []
        resp_rating.time = []
        resp_rating.clicked_name = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        ratingComponents = [rated_item, neg2, neg1, pos0, pos1, pos2, resp_rating]
        for thisComponent in ratingComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        ratingClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "rating"-------
        while continueRoutine:
            # get current time
            t = ratingClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=ratingClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *rated_item* updates
            if rated_item.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rated_item.frameNStart = frameN  # exact frame index
                rated_item.tStart = t  # local t and not account for scr refresh
                rated_item.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rated_item, 'tStartRefresh')  # time at next scr refresh
                rated_item.setAutoDraw(True)
            
            # *neg2* updates
            if neg2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                neg2.frameNStart = frameN  # exact frame index
                neg2.tStart = t  # local t and not account for scr refresh
                neg2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(neg2, 'tStartRefresh')  # time at next scr refresh
                neg2.setAutoDraw(True)
            
            # *neg1* updates
            if neg1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                neg1.frameNStart = frameN  # exact frame index
                neg1.tStart = t  # local t and not account for scr refresh
                neg1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(neg1, 'tStartRefresh')  # time at next scr refresh
                neg1.setAutoDraw(True)
            
            # *pos0* updates
            if pos0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                pos0.frameNStart = frameN  # exact frame index
                pos0.tStart = t  # local t and not account for scr refresh
                pos0.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(pos0, 'tStartRefresh')  # time at next scr refresh
                pos0.setAutoDraw(True)
            
            # *pos1* updates
            if pos1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                pos1.frameNStart = frameN  # exact frame index
                pos1.tStart = t  # local t and not account for scr refresh
                pos1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(pos1, 'tStartRefresh')  # time at next scr refresh
                pos1.setAutoDraw(True)
            
            # *pos2* updates
            if pos2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                pos2.frameNStart = frameN  # exact frame index
                pos2.tStart = t  # local t and not account for scr refresh
                pos2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(pos2, 'tStartRefresh')  # time at next scr refresh
                pos2.setAutoDraw(True)
            # *resp_rating* updates
            if resp_rating.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                resp_rating.frameNStart = frameN  # exact frame index
                resp_rating.tStart = t  # local t and not account for scr refresh
                resp_rating.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(resp_rating, 'tStartRefresh')  # time at next scr refresh
                resp_rating.status = STARTED
                resp_rating.mouseClock.reset()
                prevButtonState = resp_rating.getPressed()  # if button is down already this ISN'T a new click
            if resp_rating.status == STARTED:  # only update if started and not finished!
                buttons = resp_rating.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        for obj in [neg2,neg1,pos0,pos1,pos2,]:
                            if obj.contains(resp_rating):
                                gotValidClick = True
                                resp_rating.clicked_name.append(obj.name)
                        x, y = resp_rating.getPos()
                        resp_rating.x.append(x)
                        resp_rating.y.append(y)
                        buttons = resp_rating.getPressed()
                        resp_rating.leftButton.append(buttons[0])
                        resp_rating.midButton.append(buttons[1])
                        resp_rating.rightButton.append(buttons[2])
                        resp_rating.time.append(resp_rating.mouseClock.getTime())
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ratingComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "rating"-------
        for thisComponent in ratingComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for trials (TrialHandler)
        if len(resp_rating.x): trials.addData('resp_rating.x', resp_rating.x[0])
        if len(resp_rating.y): trials.addData('resp_rating.y', resp_rating.y[0])
        if len(resp_rating.leftButton): trials.addData('resp_rating.leftButton', resp_rating.leftButton[0])
        if len(resp_rating.midButton): trials.addData('resp_rating.midButton', resp_rating.midButton[0])
        if len(resp_rating.rightButton): trials.addData('resp_rating.rightButton', resp_rating.rightButton[0])
        if len(resp_rating.time): trials.addData('resp_rating.time', resp_rating.time[0])
        if len(resp_rating.clicked_name): trials.addData('resp_rating.clicked_name', resp_rating.clicked_name[0])
        # the Routine "rating" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'trials'
    
# completed 1.0 repeats of 'blocks'




# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
