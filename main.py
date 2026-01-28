from flask import Flask, render_template, request, redirect, url_for, session, flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required, current_user, LoginManager

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
login_manager = LoginManager()

@app.route("/")
def home():
    # if current_user.is_authenticated:
    #     return redirect(url_for('home'))
    return render_template("index.html")

@app.route("/login", methods=['GET', 'POST'])
def login():
    # if current_user.is_authenticated:
    #     return redirect(url_for('home'))
    return render_template("auth/login.html")

@app.route("/register", methods=['GET', 'POST'])
def register():
    return render_template("auth/register.html")



if __name__ == "__main__":
    app.run(debug=True)