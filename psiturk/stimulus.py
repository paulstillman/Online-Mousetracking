import json
import random
import os
from time import gmtime, strftime


PSITURK_PATH = os.path.dirname(os.path.realpath(__file__))
STIMULUS_DIR = os.path.join(PSITURK_PATH, "static/images")
JSON_DATA_DIR = os.path.join(PSITURK_PATH, "static/data")


def generate_json_condition_file(json_string):
    with open(os.path.join(JSON_DATA_DIR, 'condition_list.json'), 'w') as outfile:
        outfile.write(json_string)
        outfile.close()

    curr_time = strftime("_%m_%d_T_%H_%M_%S", gmtime())
    with open(os.path.join(JSON_DATA_DIR, 'condition_list' + curr_time + '.json'), 'w') as outfile:
        outfile.write(json_string)
        outfile.close()


def main():
    positive_questions_list = ["Competent", "Capable", "Reliable", "Knowledgeable"]
    negative_questions_list = ["Incompetent", "Incapable", "Unreliable", "Unknowledgeable"]

    display_right_is_positive = 0
    questions_right_list = negative_questions_list[:]
    questions_left_list = positive_questions_list[:]

    if bool(random.getrandbits(1)):
        display_right_is_positive = 1
        questions_right_list = positive_questions_list[:]
        questions_left_list = negative_questions_list[:]

    # List of image filenames
    practice_image_filenames = ['Mickey.png', 'Bugs.png', 'luigi.png', 'Wall-e.png']
    random.shuffle(practice_image_filenames)

    stimulus_image_filenames = ['Bart.png', 'Baxter_nf.png', 'Taylor.PNG', 'C3P-0.png', 'R2D2.png', 'Lisa.png',
                                'Sandy.png', 'Spongebob.png']

    trial_id_num = 1

    prac_json = []
    for i in range(len(practice_image_filenames)):
        prac_json.append({
            "trial_id": str(trial_id_num),
            "trial_type": "text_image_text_text",
            "trial_display_left": "Mostly " + questions_left_list[0],
            "trial_display_center": practice_image_filenames[i],
            "trial_display_right": "Mostly " + questions_right_list[0],
            "trial_display_bottom": "START",
            "trial_display_right_is_positive": str(display_right_is_positive),
        })
        trial_id_num = trial_id_num + 1

    stim_json = []
    for question_num in range(len(questions_left_list)):
        question_left = questions_left_list[question_num]
        question_right = questions_right_list[question_num]

        stim_json.append([])

        random.shuffle(stimulus_image_filenames)
        for j in range(len(stimulus_image_filenames)):
            stim_json[-1].append({
                "trial_id": str(trial_id_num),
                "trial_type": "text_image_text_text",
                "trial_display_left": "Mostly " + question_left,
                "trial_display_center": stimulus_image_filenames[j],
                "trial_display_right": "Mostly " + question_right,
                "trial_display_bottom": "START",
                "trial_display_right_is_positive": str(display_right_is_positive),
            })
            trial_id_num = trial_id_num + 1

    # Create a dictionary with the stimulus and practice list
    data = {"practice": prac_json}
    for question_num in range(len(questions_left_list)):
        data["stimulus" + str(question_num)] = stim_json[question_num]

    # Write the dictionary to a JSON file
    json_string = json.dumps(data, indent=2)
    generate_json_condition_file(json_string)


if __name__ == '__main__':
    main()
