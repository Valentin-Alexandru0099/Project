from flask import (
    Flask,
    render_template,
    url_for,
    request,
    redirect,
    session,
)
import os
from dotenv import load_dotenv
from werkzeug.security import generate_password_hash, check_password_hash


from util import json_response
import queires


app = Flask(__name__)
app.secret_key = os.getenv("SECRET")


@app.route("/")
def main_page():
    return render_template("register-login.html")


def main():
    app.run(debug=True)
    # Serving the favicon
    with app.app_context():
        app.add_url_rule(
            "/favicon.ico",
            redirect_to=url_for("static", filename="favicon/favicon.ico"),
        )


if __name__ == "__main__":
    main()