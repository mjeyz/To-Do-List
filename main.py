from flask import Flask, render_template, request, redirect, url_for, session, flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required, current_user, LoginManager
from flask_bootstrap import Bootstrap5

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
Bootstrap5(app)
login_manager = LoginManager()

@app.route("/")
def home():
    # if current_user.is_authenticated:
    #     return redirect(url_for('home'))
    return render_template("index.html")

@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get('password')

        print(email)
    # if current_user.is_authenticated:
    #     return redirect(url_for('home'))
    return render_template("auth/login.html")

@app.route("/register", methods=['GET', 'POST'])
def register():
    return render_template("auth/register.html")

@app.route("/my-board", methods=['GET', 'POST'])
def board():
    return render_template("board.html")

if __name__ == "__main__":
    app.run(debug=True)