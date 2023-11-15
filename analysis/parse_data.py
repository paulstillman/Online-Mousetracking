import os
import json
import csv

from sqlalchemy import create_engine, MetaData, Table

ROOT_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))))
PARTICIPANT_DB_FILE_PATH = os.path.join(ROOT_PATH, "psiturk", "participants.db")
OUT_CSV_FILE_PATH = os.path.join(ROOT_PATH, "out", "participants_data.csv")


class FileUtils:
    @staticmethod
    def create_dir(dir_path):
        if os.path.exists(dir_path):
            return
        if os.path.isdir(dir_path):
            return
        os.mkdir(dir_path)

    @staticmethod
    def create_file(out_file_path):
        FileUtils.create_dir(os.path.dirname(out_file_path))
        file = open(out_file_path, 'wb')
        file.close()

    @staticmethod
    def write_row_to_file(out_file_path, row_data):
        """
        Writes a new row into the given file
        :param out_file_path: name of the file that is to be written in
        :param row_data: the entire row entry that is to be written into the file
        :return: None
        """
        if not os.path.isfile(out_file_path):
            FileUtils.create_file(out_file_path)

        try:
            with open(out_file_path, 'a') as file:
                writer = csv.writer(file)
                writer.writerow(row_data)

        except Exception as e:
            print("ERROR [write_row_to_file]: could not write into " + out_file_path)
            print(str(e))
            assert False


def parse_db():
    metadata = MetaData()
    metadata.bind = create_engine("sqlite:///" + PARTICIPANT_DB_FILE_PATH)

    table = Table("mouse_tracking_data", metadata, autoload=True)
    s = table.select()
    rows = s.execute()

    excluded_subjects = [] # can list any subject IDs to exclude from csv

    data = []
    psiturk_statuses = [2, 3, 4, 5, 7]  # status codes for successful completion etc.
    for row in rows:
        if row['status'] in psiturk_statuses and row['uniqueid'] not in excluded_subjects:
            data.append(row['datastring'])

    data = [json.loads(part)['data'] for part in data]

    return data

def save_participant_data_to_csv():
    participants_data_as_list = parse_db()

    FileUtils.create_file(OUT_CSV_FILE_PATH)

    column_titles = ['participant_id', 'trial_name', 'trial_num', 'start_time',
                     'trial_left_detail', 'trial_right_detail', 'trial_center_detail', 'right_is_positive',
                     'trial_user_response', 'trial_mouse_x', 'trial_mouse_y', 'timestamp', 'reaction_time', 
                     'mouse_stopped_counter', 'mouse_outside_screen_counter', 'screen_resolution', 'browser_name']

    # Write column titles as the first row
    FileUtils.write_row_to_file(OUT_CSV_FILE_PATH, column_titles)

    for participant_data in participants_data_as_list:
        if len(participant_data) == 0:
            continue
        participant_id = participant_data[0]["uniqueid"]

        for trial in participant_data:
            trial_data = trial["trialdata"]
            if trial_data["Phase"] == "trial":
                trial_name = trial_data['TrialName'].split('_').pop()
                trial_num = trial_data['TrialNumber']
                start_time = trial_data['TrialStartTime']
                trial_left_detail = trial_data['TrialLeftDetail']
                trial_right_detail = trial_data['TrialRightDetail']
                trial_center_detail = trial_data['TrialCenterDetail'].split('/').pop()
                trial_display_right_is_positive = trial_data['TrialDisplayRightIsPositive']
                trial_user_response = trial_data['TrialUserResponse'].split(' ')[-1]
                trial_mouse_pos_x = trial_data['TrialMousePosXList']
                trial_mouse_pos_y = trial_data['TrialMousePosYList']
                #trial_timestamp = trial_data['TrialTimestamp']
                trial_timestamp = [str(int(number) - trial_data['TrialStartTime']) 
                                   for number in trial_data['TrialTimestamp']]
                reaction_time = trial_data['TrialReactionTime']
                warning_movement_count = trial_data['TrialWarningMovementCount']
                warning_bounds_count = trial_data['TrialWarningBoundsCount']
                screen_resolution = trial_data['ScreenResolution']
                browser_name = trial_data['BrowserName']
                
                trial_rows = [participant_id, trial_name, trial_num, start_time,
                              trial_left_detail, trial_right_detail, trial_center_detail,
                              trial_display_right_is_positive,
                              trial_user_response, trial_mouse_pos_x, trial_mouse_pos_y, trial_timestamp, reaction_time,
                              warning_movement_count, warning_bounds_count, screen_resolution, browser_name]

                FileUtils.write_row_to_file(OUT_CSV_FILE_PATH, trial_rows)


def main():
    save_participant_data_to_csv()


if __name__ == '__main__':
    main()
