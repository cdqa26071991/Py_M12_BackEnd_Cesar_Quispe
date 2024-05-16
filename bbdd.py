# ----- IMPORTS ----- #
import requests
import pandas as pd
from datetime import datetime
import mysql.connector as sql
import mysql.connector



from flask import Flask, render_template, request, redirect
import mysql.connector

app = Flask(__name__)

# este apartado es para poner las credenciales para labase de datos.
# Cambia las siguientes configuraciones según tu entorno de MySQL
MYSQL_HOST = 'localhost'
MYSQL_USER = 'root'
MYSQL_PASSWORD = 'cdqa26071991'
MYSQL_DB = 'africatdb'
# nombreMYSQL= 'africat2


def create_database():
    conn = mysql.connector.connect(
        host=MYSQL_HOST,
        user=MYSQL_USER,
        password=MYSQL_PASSWORD,
    )

    cursor = conn.cursor()
    cursor.execute("CREATE DATABASE IF NOT EXISTS africatdb")
    conn.close()


def create_table():
    conn = mysql.connector.connect(
        host=MYSQL_HOST,
        user=MYSQL_USER,
        password=MYSQL_PASSWORD,
        database=MYSQL_DB
    )
    
    # Aquí estamos creando la tabla en mysql, con los campos y valores adecuados
    
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(255) NOT NULL,
            apellidos VARCHAR(255) NOT NULL,
            telefono VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            mensaje TEXT NOT NULL
        )
    ''')

    conn.commit()
    conn.close()

create_database()
create_table()

