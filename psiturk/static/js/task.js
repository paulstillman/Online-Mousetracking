let PROLIFIC_ID = "";

// let EXPERIMENT_PART = 0;
let START_INSTRUCTION = 0;

let TOTAL_BLOCKS = 2;

let SKIP_PROLIFIC = true;
let SKIP_INSTRUCTIONS = true;

let psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

let pages = [
    "main.html"
];


psiTurk.preloadPages(pages);


/****************
 * Prolific ID  *
 ****************/

let ProlificID = function (condition_list) {
    psiTurk.showPage('main.html');

    if (SKIP_PROLIFIC) {
        InstructionRunner(condition_list);
        return;
    }

    while (true) {
        let searchParams = new URLSearchParams(window.location.search)

        let param = ""
        if (searchParams.has('PROLIFIC_PID')) {
            param = searchParams.get('PROLIFIC_PID')
        }

        PROLIFIC_ID = prompt("Please enter Prolific ID to proceed:", param);

        if (PROLIFIC_ID === null) {
            window.close();
            return;
        }
        
        if (PROLIFIC_ID.length === 24) {
            psiTurk.recordTrialData({
                'prolific_id': PROLIFIC_ID,
            });

            InstructionRunner(condition_list);
            return;
        }

        alert("Incorrect Prolific ID detected. Please try again.");
    }
}


/****************
 * Instructions  *
 ****************/
let InstructionRunner = function (condition_list) {

    let page = new InstructionPage();

    let total_instructions = page.get_total_instructions();

    let show_instruction_page = function (instruction_num) {
        if (SKIP_INSTRUCTIONS) {
            end_instructions();
        }

        if (instruction_num < total_instructions) {
            page.set_instruction_number(instruction_num);
            page.showNextInstruction(function () {
                show_instruction_page(instruction_num + 1);
            });
        } else {
            end_instructions();
        }
    };

    let end_instructions = function () {
        psiTurk.finishInstructions();
        Experiment(condition_list, 0, true);
    };

    // start the loop
    show_instruction_page(START_INSTRUCTION);
};


/***********************
 * Generic Page Runner *
 ***********************/
let GenericPageRunner = function (title, message, color_scheme,
                                  goToFunction) {

    let page = new GenericPage();
    page.setTitle(title);
    page.setMessage(message);
    page.setColorScheme(color_scheme);
    page.setCallback(function () {
        goToFunction();
    });
};


/**************
 * Experiment *
 **************/
let Experiment = function (condition_list, block_num, is_practice) {
    let start_time = -1;

    let trial_data = new TrialData(condition_list, block_num, is_practice);

    let stimulus_data = condition_list["stimulus" + block_num];
    if (is_practice) {
        stimulus_data = condition_list["practice"];
    }

    let trial_page = new TrialPage(trial_data);

    let run_single_trial = function (curr_trial_page_index) {

        if (curr_trial_page_index >= stimulus_data.length) {
            end_experiment();
            return;
        }

        trial_page.setCurrentTrialNum(curr_trial_page_index);

        start_time = new Date().getTime();

        let update_trial_state = function () {
            if (!trial_page.getIsMouseRecording()) return;
            register_response(curr_trial_page_index);
            trial_page.clearResponse(update_trial_state);
            run_single_trial(curr_trial_page_index + 1);
        }

        trial_page.showPage(update_trial_state);
    };

    let register_response = function () {
        let reaction_time = new Date().getTime() - start_time;

        let trial_name = trial_page.getTrialName();
        let trial_number = trial_page.getTrialNumber();
        let trial_mouse_pos_x = trial_page.getMouseXPosList();
        let trial_mouse_pos_y = trial_page.getMouseYPosList();

        psiTurk.recordTrialData({
            'Phase': "trial",
            'TrialName': trial_name,
            'TrialNumber': trial_number + 1,
            'MousePosXList': trial_mouse_pos_x,
            'MousePosYList': trial_mouse_pos_y,
            'ReactionTime': reaction_time,
        });
    };

    let end_experiment = function () {
        psiTurk.saveData();

        if (is_practice) {
            GenericPageRunner(
                "You did great!",
                "Hope you are warmed up now!<br>" +
                "Press <b>CONTINUE</b> to start the experiment!",
                Page.StatusSuccess,
                function () {
                    Experiment(condition_list, 0, false);
                }
            );
            return;
        }

        if (block_num < TOTAL_BLOCKS - 1) {
            GenericPageRunner(
                "You did great!",
                "The next few trials will be similar except that the question asked will be different.<br>" +
                "Press <b>CONTINUE</b> to start the experiment!",
                Page.StatusSuccess,
                function () {
                    Experiment(condition_list, block_num + 1, false);
                }
            );
            return;
        }

        GenericPageRunner(
            "That's all! Thank you for participating :)",
            "<br>" +
            "Press <b>continue</b> to end.",
            Page.StatusSuccess,
            function () {
                Utils.leaveFullscreen();
                psiTurk.saveData({
                    success: function() {
                        psiTurk.completeHIT();
                    },
                    error: prompt_resubmit
                });
            }
        );
    };

    setTimeout(function(){
        trial_page.showTrials();
        run_single_trial(0);},200);
};


/*******************
 * Run Task
 ******************/
$(window).load(function () {

    function generateNewConditionList() {
        $.ajax({
            type: "POST",
            url: "stimulus",
            success: function () {
                console.log("Done creating new stimulus file!");
            },
            error: function () {
                console.log("ERROR[generateNewConditionList]: some error occurred.");
            },
        }).done(function(){
            loadConditionList();
        });
    }

    function loadConditionList() {
        $.ajax({
            dataType: 'json',
            url: "static/data/condition_list.json",
            async: false,
            success: function (condition_list) {
                console.log("condition", condition);
                ProlificID(condition_list);
            },
            error: function () {
                console.log("ERROR[load_condition_list]: some error occurred.");
            },
        });
    }

    if (Utils.isMobileTablet()) {
        console.log("mobile browser detected");
        alert(`Sorry, but mobile or tablet browsers are not supported. Please switch to a desktop browser.`);
        return;
    }

    generateNewConditionList();
    // loadConditionList();
});
