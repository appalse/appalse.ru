from flask import Flask, render_template
import os
app = Flask(__name__)
app.debug = True
app.static_folder = 'static'

@app.route("/")
def mainPage():
    return render_template('index.html');

@app.route("/binary-calculator/")
def binaryCalc():
	print "BINARY"
	return render_template('binary-calculator.html')

@app.route("/memoji/")
def memoji():
	return render_template('memoji.html');

@app.route("/design-system/")
def designSystem():
	return render_template('design-system.html');
	
@app.route("/design-system-product/")
def designSystemProduct():
	return render_template('design-system-product.html');

@app.route("/sportmaster/")
def sportmaster():
	return render_template('sportmaster.html');

@app.errorhandler(404)
def not_found(error):
	return render_template('404.html'), 404