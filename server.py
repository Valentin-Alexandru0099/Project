from flask import (
    Flask,
    flash,
    render_template,
    url_for,
    request,
    redirect,
    session,
)

import os
import time
from dotenv import load_dotenv
from werkzeug.security import generate_password_hash, check_password_hash


from util import json_response
import queires
import mimetypes


load_dotenv()

mimetypes.add_type("application/javascript", ".js")
app = Flask(__name__)
app.secret_key = os.getenv("SECRET")


@app.route("/")
def index():
    if session.get("id"):
        return render_template("game.html")
    else:
        return render_template("register-login.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        data = {
            "submission_time": time.asctime(),
            "email": request.form["email"],
            "username": request.form["username"],
            "password": generate_password_hash(request.form["password"]),
        }
        users = queires.get_all("users")
        for user in users:
            print(user)
            if user["email"] == request.form["email"]:
                flash("email already registred !", "error")
                return redirect(url_for("index"))
            if request.form["password"] != request.form["confirm_password"]:
                flash("passwords don't match", "error")
                return redirect(url_for("index"))
            new_user = queires.add_user(data)
            queires.init_user_stats(new_user)
            flash("Account created!", "sing_in")
            return redirect(url_for("index"))
    return redirect(url_for("index"))


@app.route("/login", methods=["POST"])
def login():
    if request.method == "POST":
        users = queires.get_all("users")
        for user in users:
            if user["email"] == request.form["email"] and check_password_hash(
                user["password"], request.form["password"]
            ):
                session["id"] = user["id"]
                session["username"] = user["username"]
                return redirect(url_for("index"))
        flash("Incorect email or password!", "sing_id_error")
        return redirect(url_for("register"))
    return redirect(url_for("index"))


@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("index"))


@app.route("/api/getStats")
@json_response
def load_stats():
    return queires.get_stats(session["id"])


@app.route("/api/getRaces")
@json_response
def get_races():
    return queires.get_races()


@app.route("/api/pickRace", methods=["PUT"])
@json_response
def pick_race():
    race_id = queires.add_race_to_user(request.json, session["id"])
    return queires.race_data(race_id)



@app.route("/api/saveData", methods=["PUT"])
@json_response
def save_data():
    return queires.save_data(session["id"], request.json)

def main():
    app.run(debug=True)
    # Serving the favicon
    # with app.app_context():
    #     app.add_url_rule(
    #         "/favicon.ico",
    #         redirect_to=url_for("static", filename="favicon/favicon.ico"),
    #     )


if __name__ == "__main__":
    main()
