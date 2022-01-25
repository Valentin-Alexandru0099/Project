import data_manager


def get_all(table):
    return data_manager.execute_query(f"SELECT * FROM {table}")


def add_user(data):
    return data_manager.execute_query(
        """
        INSERT INTO users(submission_time, email, username, password)
        VALUES (%(submission_time)s, %(email)s, %(username)s, %(password)s)
        RETURNING *;
        """,
        {
            "submission_time": data["submission_time"],
            "email": data["email"],
            "username": data["username"],
            "password": data["password"],
        },
        False,
    )


def init_user_stats(user):
    data_manager.execute_query(
        """
        INSERT INTO user_stats(user_id, left_side_race, right_side_race, left_side_click, right_side_click)
        VALUES(%(user)s, %(init)s, %(init)s, %(init)s, %(init)s)
        RETURNING *;
        """,
        {"user": user["id"], "init": 0},
        False,
    )
    data_manager.execute_query(
        """
        INSERT INTO right_side_ups(user_id, b1,b2,b3,b4,b5,b6,b7,b8,b9,b10)
        VALUES(%(user)s, %(init)s, %(init)s, %(init)s, %(init)s,%(init)s,%(init)s,%(init)s,%(init)s,%(init)s,%(init)s)
        RETURNING *;
        """,
        {"user": user["id"], "init": 0},
        False,
    )
    data_manager.execute_query(
        """
        INSERT INTO left_side_ups(user_id, b1,b2,b3,b4,b5,b6,b7,b8,b9,b10)
        VALUES(%(user)s, %(init)s, %(init)s, %(init)s, %(init)s,%(init)s,%(init)s,%(init)s,%(init)s,%(init)s,%(init)s)
        RETURNING *;
        """,
        {"user": user["id"], "init": 0},
        False,
    )
    data_manager.execute_query(
        """
        INSERT INTO both_side_ups(user_id, b1,b2,b3,b4,b5,b6,b7,b8,b9,b10)
        VALUES(%(user)s, %(init)s, %(init)s, %(init)s, %(init)s,%(init)s,%(init)s,%(init)s,%(init)s,%(init)s,%(init)s)
        RETURNING *;
        """,
        {"user": user["id"], "init": 0},
        False,
    )


def get_stats(data):
    return data_manager.execute_query(
        """
        SELECT  us.user_id,
                us.left_side_race,
                us.left_side_click,
                us.right_side_race,
                us.right_side_click,
                l.b1,
                l.b2,
                l.b3,
                l.b4,
                l.b5,
                l.b6,
                l.b7,
                l.b8,
                l.b9,
                l.b10,
                r.b1 AS rb1,
                r.b2 AS rb2,
                r.b3 AS rb3,
                r.b4 AS rb4,
                r.b5 AS rb5,
                r.b6 AS rb6,
                r.b7 AS rb7,
                r.b8 AS rb8,
                r.b9 AS rb9,
                r.b10 AS rb10,
                b.b1 AS bb1,
                b.b2 AS bb2,
                b.b3 AS bb3,
                b.b4 AS bb4,
                b.b5 AS bb5,
                b.b6 AS bb6,
                b.b7 AS bb7,
                b.b8 AS bb8,
                b.b9 AS bb9,
                b.b10 AS bb10
        FROM user_stats AS us
        JOIN left_side_ups AS l ON us.user_id = l.user_id
        JOIN right_side_ups AS r ON us.user_id = r.user_id
        JOIN both_side_ups AS b ON us.user_id = b.user_id
        WHERE us.user_id = %(user)s;
        """,
        {"user": data},
        False,
    )


def get_races():
    return data_manager.execute_query("SELECT * FROM race")


def add_race_to_user(race_id, user_id):
    return data_manager.execute_query(
        """
    UPDATE user_stats
    SET left_side_race = %(race_id)s
    WHERE user_id = %(user_id)s
    RETURNING left_side_race;
    """,
        {
            "race_id": race_id,
            "user_id": user_id,
        },
        False,
    )


def race_data(race_id):
    return data_manager.execute_query(
        """
        SELECT * FROM race
        WHERE id = %(race_id)s;
        """,
        {"race_id": race_id["left_side_race"]},
        False,
    )
