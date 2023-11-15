class TrialPage extends Page {

    static is_mouse_recording = false;

    static warning_movement_toast = new Toast();
    static warning_bounds_toast = new Toast();
    static info_movement_toast = new Toast();

    static warning_movement_timeout = null
    static warning_bounds_timeout = null

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

        this.warning_movement_counter = 0;
        this.warning_bounds_counter = 0;

        this.excluded_toasts_list = [];

        onmousemove = function(e) {
            this.clearWarnings(true);
            if (this.getIsMouseRecording()) {
                clearTimeout(TrialPage.warning_movement_timeout);
                TrialPage.warning_movement_timeout = setTimeout(function(){
                                                   if (!this.getIsMouseRecording()) return;
                                                   TrialPage.warning_movement_toast.warn('Warning',
                                                       'Please begin (and do not stop) moving your mouse as soon as the image appears...',
                                                       {position: "tm", duration: 10000, closeBtn: false});
                                                   this.warning_movement_counter = 1;
                                                   if (!this.excluded_toasts_list.includes(TrialPage.warning_movement_toast)) {
                                                       this.excluded_toasts_list = [];
                                                       this.excluded_toasts_list.push(TrialPage.warning_movement_toast);
                                                   }
                                                   }.bind(this), 750);

                this.mouse_pos_list.push(new MousePosition(e.clientX, e.clientY, Date.now()))
            }
        }.bind(this);

        $(document).mouseleave(function () {
            this.clearWarnings();
            if (this.getIsMouseRecording()) {
                clearTimeout(TrialPage.warning_bounds_timeout);
                TrialPage.warning_bounds_timeout = setTimeout(function(){
                                                 if (!this.getIsMouseRecording()) return;
                                                 TrialPage.warning_bounds_toast.error('Warning',
                                                     'Please keep your cursor within the screen bounds...',
                                                     {position: "tm", duration: 10000, closeBtn: false});
                                                 this.warning_bounds_counter = 1;
                                                 if (!this.excluded_toasts_list.includes(TrialPage.warning_bounds_toast)) {
                                                     this.excluded_toasts_list = [];
                                                     this.excluded_toasts_list.push(TrialPage.warning_bounds_toast);
                                                 }
                                                 }.bind(this), 200);
            }
        }.bind(this));

        $(document).mouseenter(function () {
            if (!this.excluded_toasts_list.includes(TrialPage.warning_bounds_toast)) {
                 this.excluded_toasts_list = [];
                 this.clearWarnings();
            }
        }.bind(this));
    }

    showInfoMovementToast() {
        if (this.getIsMouseRecording()) return;
        TrialPage.info_movement_toast.info('Warning',
                                           'Please try to complete your movement sooner...',
                                           {position: "tm", duration: 10000, closeBtn: false});
        if (!this.excluded_toasts_list.includes(TrialPage.info_movement_toast)) {
            this.excluded_toasts_list = [];
            this.excluded_toasts_list.push(TrialPage.info_movement_toast);
        }
    }

    bottomClickListener() {
        this.resetExcludeToastsList();
        this.clearWarnings();

        this.#mainTrialView();

        TrialPage.is_mouse_recording = true;

        clearTimeout(TrialPage.warning_movement_timeout);
        TrialPage.warning_movement_timeout = setTimeout(function(){
                                           if (!this.getIsMouseRecording()) return;
                                           TrialPage.warning_movement_toast.warn('Warning',
                                               'Please make a move faster...',
                                               {position: "tm", duration: 20000, closeBtn: false});
                                           this.warning_movement_counter = 1;
                                           }.bind(this), 2000);

        this.bottom_text_div.removeEventListener('click', this.bottomClickListener.bind(this));
        this.bottom_text.removeEventListener('click', this.bottomClickListener.bind(this));
        this.bottom_img.removeEventListener('click', this.bottomClickListener.bind(this));
    }

    getIsMouseRecording() {
        return TrialPage.is_mouse_recording;
    }

    stopMouseRecording() {
        TrialPage.is_mouse_recording = false;
    }

    initPage() {
        this.stopMouseRecording();
        this.mouse_pos_list = [];

        this.warning_movement_counter = 0;
        this.warning_bounds_counter = 0;
    }

    setCurrentTrialNum(current_trial_num) {
        this.current_trial_num = current_trial_num;
        this.trial_data.update_current_trial_num(this.current_trial_num);
    }

    showPage(callback) {
        this.initPage();

        this.bottom_text_div.addEventListener('click', this.bottomClickListener.bind(this));
        this.bottom_text.addEventListener('click', this.bottomClickListener.bind(this));
        this.bottom_img.addEventListener('click', this.bottomClickListener.bind(this));

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

        this.showProgress();
        this.#updateView();
    }

    hideProgress(){
        TrialPage.hideElement(this.progress);
    }

    showProgress(){
        TrialPage.showElement(this.progress);
    }

    hideAllView(){
        TrialPage.hideElement(this.top_left_img);
        TrialPage.hideElement(this.top_right_img);
        TrialPage.hideElement(this.center_img);
        TrialPage.hideElement(this.bottom_img);

        TrialPage.hideElement(this.top_left_text_div);
        TrialPage.hideElement(this.top_right_text_div);
        TrialPage.hideElement(this.center_text_div);
        TrialPage.hideElement(this.bottom_text_div);
    }

    resetExcludeToastsList() {
        TrialPage.warning_movement_toast.clear();
        TrialPage.warning_bounds_toast.clear();
        TrialPage.info_movement_toast.clear();
        this.excluded_toasts_list = [];
    }

    clearWarnings(do_exclude_toasts=false) {
        if (!(do_exclude_toasts && this.excluded_toasts_list.includes(TrialPage.warning_movement_toast)))
            TrialPage.warning_movement_toast.clear();

        if (!(do_exclude_toasts && this.excluded_toasts_list.includes(TrialPage.warning_bounds_toast)))
            TrialPage.warning_bounds_toast.clear();

        if (!(do_exclude_toasts && this.excluded_toasts_list.includes(TrialPage.info_movement_toast)))
            TrialPage.info_movement_toast.clear();

        clearTimeout(TrialPage.warning_movement_timeout);
        clearTimeout(TrialPage.warning_bounds_timeout);

        TrialPage.warning_movement_timeout = null;
        TrialPage.warning_bounds_timeout = null;
    }

    clearResponse(callback) {
        this.initPage();

        this.top_left_img.removeEventListener("click", callback);
        this.top_right_img.removeEventListener("click", callback);
        this.top_left_text_div.removeEventListener("click", callback);
        this.top_right_text_div.removeEventListener("click", callback);
    }

    getTrialNumber() {
        return this.trial_data.get_trial_number();
    }

    getTrialName() {
        return this.trial_data.get_trial_name();
    }

    getDisplayRightIsPositive() {
       return this.trial_data.get_trial_display_right_is_positive();
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

    getMouseTimestampList() {
        let return_list = [];
        this.mouse_pos_list.forEach(mouse_pos => return_list.push(mouse_pos.getTime()));
        return return_list.map(String);
    }

    getTrialLeftDetail() {
        return this.trial_data.get_trial_left_details();
    }

    getTrialRightDetail() {
        return this.trial_data.get_trial_right_details();
    }

    getTrialCenterDetail() {
        return this.trial_data.get_trial_center_details();
    }

    getWarningMovementCount() {
        return this.warning_movement_counter;
    }

    getWarningBoundsCount() {
        return this.warning_bounds_counter;
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
