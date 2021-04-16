from flask import Flask, render_template
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/features', methods=['GET', 'POST'])
def features():
    return render_template('features.html')

@app.route('/privacy_policy', methods=['GET', 'POST'])
def privacy_policy():
    return render_template('privacy-policy.html')
    
@app.route('/disclaimer', methods=['GET', 'POST'])
def disclaimer():
    return render_template('disclaimer.html')