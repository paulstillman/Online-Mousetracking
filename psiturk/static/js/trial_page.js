class TrialPage extends Page {

    constructor(trial_data) {
        super();
        this.hideAll();

        this.trial_data = trial_data;

        this.full_screen_element = document.getElementById("full_screen_element");

        this.top_left_img = document.getElementById("top_left_image");
        this.center_img = document.getElementById("center_image");
        this.top_right_img = document.getElementById("top_right_image");
        this.bottom_img = document.getElementById("bottom_image");

        this.top_left_text_div = document.getElementById("top_left_text_div");
        this.center_text_div = document.getElementById("center_text_div");
        this.top_right_text_div = document.getElementById("top_right_text_div");
        this.bottom_text_div = document.getElementById("bottom_text_div");

        this.top_left_text = document.getElementById("top_left_text");
        this.center_text = document.getElementById("center_text");
        this.top_right_text = document.getElementById("top_right_text");
        this.bottom_text = document.getElementById("bottom_text");

        this.progress = document.getElementById("progress");

        this.current_trial_num = 0;

        this.mouse_pos_list = [];
        this.is_mouse_recording = false;

        this.mouse_not_moving_timeout = null;

        [this.bottom_text_div, this.bottom_text, this.bottom_img].forEach(function(element) {
            element.addEventListener("click", function() {
                this.#mainTrialView();
                this.is_mouse_recording = true;

                this.mouse_not_moving_timeout = setTimeout(function(){
                                                new Toast().warn('Warning',
                                                            'Please make a move faster...',
                                                            {position: "tm", duration: 1500, closeBtn: false});
                                                }, 2000);
            }.bind(this));
        }.bind(this));

        onmousemove = function(e){
            if (this.getIsMouseRecording()) {
                clearTimeout(this.mouse_not_moving_timeout);
                this.mouse_not_moving_timeout = setTimeout(function(){
                                                new Toast().warn('Warning',
                                                            'Please make a move faster...',
                                                            {position: "tm", duration: 1500, closeBtn: false});
                                                }, 2000);
                this.mouse_pos_list.push(new MousePosition(e.clientX, e.clientY))
            }
        }.bind(this);

        this.initPage();
    }

    initPage() {
        this.mouse_pos_list = [];
    }

    setCurrentTrialNum(current_trial_num) {
        this.current_trial_num = current_trial_num;
        this.trial_data.update_current_trial_num(this.current_trial_num);
    }

    showPage(callback) {
        this.top_left_img.addEventListener("click", callback);
        this.top_right_img.addEventListener("click", callback);
        this.top_left_text_div.addEventListener("click", callback);
        this.top_right_text_div.addEventListener("click", callback);

        if (this.current_trial_num >= this.trial_data.get_total_trials()) {
            return;
        }

        if (!Utils.isFullScreenCurrently()) {
            Utils.goFullscreen(this.full_screen_element);
        }

        this.initPage();
        this.#updateView();
    }

    clearResponse(callback) {
        this.is_mouse_recording = false;
        clearTimeout(this.mouse_not_moving_timeout);

        this.top_left_img.removeEventListener("click", callback);
        this.top_right_img.removeEventListener("click", callback);
        this.top_left_text_div.removeEventListener("click", callback);
        this.top_right_text_div.removeEventListener("click", callback);

        this.initPage();
    }

    getIsMouseRecording() {
        return this.is_mouse_recording;
    }

    getTrialNumber() {
        return this.trial_data.get_trial_number();
    }

    getTrialName() {
        return this.trial_data.get_trial_name();
    }

    getMouseXPosList() {
        let return_list = [];
        this.mouse_pos_list.forEach(mouse_pos => return_list.push(mouse_pos.getXPos()));
        return return_list.map(String);
    }

    getMouseYPosList() {
        let return_list = [];
        this.mouse_pos_list.forEach(mouse_pos => return_list.push(mouse_pos.getYPos()));
        return return_list.map(String);
    }


    /************
     * Helpers  *
     ***********/

    #updatePart(part_details) {
        if (part_details.getPartType() === PartType.IMAGE) {
            if (part_details.getPartLocation() === PartLocation.LEFT) {
                TrialPage.hideElement(this.top_left_text_div);
                TrialPage.showElement(this.top_left_img);
                this.top_left_img.src = part_details.getPartImageSrc();
            } else if (part_details.getPartLocation() === PartLocation.CENTER) {
                TrialPage.hideElement(this.center_text_div);
                TrialPage.showElement(this.center_img);
                this.center_img.src = part_details.getPartImageSrc();
            } else if (part_details.getPartLocation() === PartLocation.RIGHT) {
                TrialPage.hideElement(this.top_right_text_div);
                TrialPage.showElement(this.top_right_img);
                this.top_right_img.src = part_details.getPartImageSrc();
            } else if (part_details.getPartLocation() === PartLocation.BOTTOM) {
                TrialPage.hideElement(this.bottom_text_div);
                TrialPage.showElement(this.bottom_img);
                this.bottom_img.src = part_details.getPartImageSrc();
            }
        } else {
             if (part_details.getPartLocation() === PartLocation.LEFT) {
                TrialPage.hideElement(this.top_left_img);
                TrialPage.showElement(this.top_left_text_div);
                this.top_left_text.innerHTML = part_details.getPartText();
             } else if (part_details.getPartLocation() === PartLocation.CENTER) {
                TrialPage.hideElement(this.center_img);
                TrialPage.showElement(this.center_text_div);
                this.center_text.innerHTML = part_details.getPartText();
             } else if (part_details.getPartLocation() === PartLocation.RIGHT) {
                TrialPage.hideElement(this.top_right_img);
                TrialPage.showElement(this.top_right_text_div);
                this.top_right_text.innerHTML = part_details.getPartText();
            } else if (part_details.getPartLocation() === PartLocation.BOTTOM) {
                TrialPage.hideElement(this.bottom_img);
                TrialPage.showElement(this.bottom_text_div);
                this.bottom_text.innerHTML = part_details.getPartText();
            }
        }

        this.#initTrialView();
    }

    #updateView() {
        this.#updatePart(this.trial_data.get_trial_left_details());
        this.#updatePart(this.trial_data.get_trial_center_details());
        this.#updatePart(this.trial_data.get_trial_right_details());
        this.#updatePart(this.trial_data.get_trial_bottom_details());
        this.progress.innerHTML = (this.trial_data.get_trial_number() + 1) + " / " +
                                   this.trial_data.get_total_trials();
    }

    #initTrialView() {
        if (this.trial_data.get_trial_bottom_details().getPartType() === PartType.IMAGE)
            TrialPage.showElement(this.bottom_img);
        else
            TrialPage.showElement(this.bottom_text_div);

        TrialPage.hideElement(this.center_text_div);
        TrialPage.hideElement(this.center_img);
    }

    #mainTrialView() {
        if (this.trial_data.get_trial_center_details().getPartType() === PartType.IMAGE)
            TrialPage.showElement(this.center_img);
        else
            TrialPage.showElement(this.center_text_div);

        TrialPage.hideElement(this.bottom_text_div);
        TrialPage.hideElement(this.bottom_img);
    }
}
