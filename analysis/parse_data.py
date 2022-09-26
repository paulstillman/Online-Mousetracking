import os
import json

from sqlalchemy import create_engine, MetaData, Table


PSITURK_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), "psiturk")
DATA_BASE_PATH = os.path.join(PSITURK_PATH, "participants.db")


def parse_db(db_path=DATA_BASE_PATH):
    metadata = MetaData()
    metadata.bind = create_engine("sqlite:///" + db_path)

    table = Table("blocks_social", metadata, autoload=True)
    s = table.select()
    rows = s.execute()

    excluded_subjects = []

    data = []
    psiturk_statuses = [3, 4, 5, 7]  # status codes for successful completion etc.
    for row in rows:
        if row['status'] in psiturk_statuses and row['uniqueid'] not in excluded_subjects:
            data.append(row['datastring'])

    data = [json.loads(part)['data'] for part in data]

    return data


if __name__ == '__main__':
    db_data = parse_db()
