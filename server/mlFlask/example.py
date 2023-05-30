from flask import Flask;

app = Flask(__name__);

@app.route('/',methods=['GET'])

def hello_world():
    return "hello world,this is flask application running"

@app.route('/example',methods =['GET'])

def example():
    return "this is an example method"


if __name__ == "__main__":
    app.run(port = 5000,debug=True)