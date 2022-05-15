from flask import Flask, Blueprint, session, request, render_template, redirect, url_for
from __init__ import create_app

app = create_app(debug=True)

if __name__ == "__main__":
    app.run(port=8080)