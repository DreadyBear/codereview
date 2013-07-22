from flask import Flask, render_template, request, redirect, make_response
app = Flask(__name__)

@app.route("/")
def hello():
	return render_template('template.html')

@app.route("/table")
def show_table():
	return render_template('table.html')

if __name__ == "__main__":
    app.run(debug=True)