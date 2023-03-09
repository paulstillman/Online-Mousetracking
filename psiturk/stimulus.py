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
    trial_id_num = 1
    questions_positive_list = ["Competent", "Knowledgeable"]
    questions_negative_list = ["Competent", "Knowledgeable"]

    # List of image filenames
    # 3 add two new images -- which are not a part of the core dataset
    practice_image_filenames = ['Mickey.png', 'luigi.png']
    stimulus_image_filenames = ['Mickey.png', 'luigi.png', 'Bugs.png', 'Wall-e.png', 'Bart.png', 'Baxter_nf.png',
                                'Taylor.PNG', 'C3P-0.png', 'R2D2.png', 'Lisa.png', 'Sandy.png', 'Spongebob.png']

    # Generate a list of stimulus dictionaries
    stim_json = []
    prac_json = []

    random.shuffle(practice_image_filenames)
    for i, image in enumerate(practice_image_filenames):
        prac_json.append({
            "trial_id": str(trial_id_num),
            "trial_type": "text_image_text_text",
            "trial_display_left": "Mostly Competent",
            "trial_display_center": image,
            "trial_display_right": "Mostly Incompetent",
            "trial_display_bottom": "start"
        })
        trial_id_num = trial_id_num + 1

    stim_json = []
    for question_num in range(len(questions_positive_list)):
        positive_question = questions_positive_list[question_num]
        negative_question = questions_negative_list[question_num]

        stim_json.append([])

        random.shuffle(stimulus_image_filenames)
        for i, image in enumerate(stimulus_image_filenames):
            stim_json[-1].append({
                "trial_id": str(trial_id_num),
                "trial_type": "text_image_text_text",
                "trial_display_left": "Mostly " + positive_question,
                "trial_display_center": image,
                "trial_display_right": "Mostly " + negative_question,
                "trial_display_bottom": "start"
            })
            trial_id_num = trial_id_num + 1

    # Create a dictionary with the stimulus and practice list
    data = {"practice": prac_json}
    for question_num in range(len(questions_positive_list)):
        data["stimulus" + str(question_num)] = stim_json[question_num]

    # Write the dictionary to a JSON file
    json_string = json.dumps(data, indent=2)
    generate_json_condition_file(json_string)


if __name__ == '__main__':
    main()