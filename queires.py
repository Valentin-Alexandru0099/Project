import data_manager


def get_all(table):
    return data_manager.execute_query(f'SELECT * FROM {table}')


def add_user(data):
    return data_manager.execute_query(
        """
        INSERT INTO users(submission_time, email, username, password)
        VALUES (%(submission_time)s, %(email)s, %(username)s, %(password)s)
        RETURNING *;
        """, {
            "submission_time": data["submission_time"],
            "email": data["email"],
            "username": data["username"],
            "password": data["password"],
        }, False
    )


def init_user_stats(user):
    data_manager.execute_query(
        """
        INSERT INTO user_stats(user_id, left_side_race, right_side_race, left_side_click, right_side_click)
        VALUES(%(user)s, %(init)s, %(init)s, %(init)s, %(init)s)
        RETURNING *;
        """,{
            "user": user["id"],
            "init": 0
        }, False)
    data_manager.execute_query(
        """
        INSERT INTO right_side_ups(user_id, b1,b2,b3,b4,b5,b6,b7,b8,b9,b10)
        VALUES(%(user)s, %(init)s, %(init)s, %(init)s, %(init)s,%(init)s,%(init)s,%(init)s,%(init)s,%(init)s,%(init)s)
        RETURNING *;
        """,{
            "user": user["id"],
            "init": 0
        }, False)
    data_manager.execute_query(
        """
        INSERT INTO left_side_ups(user_id, b1,b2,b3,b4,b5,b6,b7,b8,b9,b10)
        VALUES(%(user)s, %(init)s, %(init)s, %(init)s, %(init)s,%(init)s,%(init)s,%(init)s,%(init)s,%(init)s,%(init)s)
        RETURNING *;
        """,{
            "user": user["id"],
            "init": 0
        }, False)
    data_manager.execute_query(
        """
        INSERT INTO both_side_ups(user_id, b1,b2,b3,b4,b5,b6,b7,b8,b9,b10)
        VALUES(%(user)s, %(init)s, %(init)s, %(init)s, %(init)s,%(init)s,%(init)s,%(init)s,%(init)s,%(init)s,%(init)s)
        RETURNING *;
        """,{
            "user": user["id"],
            "init": 0
        }, False)
