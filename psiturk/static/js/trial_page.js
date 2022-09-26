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
        this.is_mouse_at_start_pos = false;
        this.is_mouse_recording = false;

        [this.bottom_text_div, this.bottom_img].forEach(function(element) {
            element.addEventListener("mouseenter", function() {
                this.is_mouse_at_start_pos = true;
            }.bind(this));
        }.bind(this));

        [this.bottom_text_div, this.bottom_img].forEach(function(element) {
            element.addEventListener("mouseover", function() {
                this.is_mouse_at_start_pos = true;
            }.bind(this));
        }.bind(this));

        [this.bottom_text_div, this.bottom_img].forEach(function(element) {
            element.addEventListener("mouseout", function() {
                this.is_mouse_at_start_pos = false;
            }.bind(this));
        }.bind(this));

        [this.bottom_text_div, this.bottom_img].forEach(function(element) {
            element.addEventListener("click", function() {
                TrialPage.hideElement(this.bottom_text_div, this.bottom_img);
                this.is_mouse_recording = true;
            }.bind(this));
        }.bind(this));

        onmousemove = function(e){
            if (this.is_mouse_recording) {
                this.mouse_pos_list.push(new MousePosition(e.clientX, e.clientY))
                console.log("mouse location:", e.clientX, e.clientY);
            }
        }.bind(this);

        this.initPage();
    }

    initPage() {
        this.is_mouse_at_start_pos = false;
        this.mouse_pos_list = [];
    }

    setCurrentTrialNum(current_trial_num) {
        this.current_trial_num = current_trial_num;
        this.trial_data.update_current_trial_num(this.current_trial_num);
    }

    showPage(callback) {
        [this.top_left_img, this.top_right_img, this.top_left_text_div, this.top_right_text_div].forEach(function(e) {
            e.addEventListener("click", function() {
                this.is_mouse_recording = false;
                callback();
            }.bind(this));
        }.bind(this));

        if (this.current_trial_num >= this.trial_data.get_total_trials()) {
            return;
        }

        if (!Utils.isFullScreenCurrently()) {
            Utils.goFullscreen(this.full_screen_element);
        }

        this.initPage();
        this.#updateView();
    }

    clearResponse() {
        this.initPage();
    }

    getTrialNumber() {
        return this.trial_data.get_trial_number();
    }

    getTrialName() {
        return this.trial_data.get_trial_name();
    }

    getMouseXPosList() {
        let return_list = [];
        this.mouse_pos_list.forEach((mouse_pos, i) => return_list.push(mouse_pos.getXPos()));
        return return_list.map(String);
    }

    getMouseYPosList() {
        let return_list = [];
        this.mouse_pos_list.forEach((mouse_pos, i) => return_list.push(mouse_pos.getYPos()));
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
        
    }
}
