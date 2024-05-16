from flask import Flask, render_template, request, redirect, url_for
import mysql.connector
import bbdd


app = Flask(__name__, static_url_path='/static')


@app.route('/exito')
def exito():
    return '¡Registro exitoso!'

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/que')
def que():
    return render_template('que.html')

@app.route('/quienes')
def quienes():
    return render_template('quienes.html')


@app.route('/proyectos')
def proyectos():
    return render_template('proyectos.html')


@app.route('/desarrollo')
def desarrollo():
    return render_template('desarrollo.html')

@app.route('/intercultural')
def intercultural():
    return render_template('intercultural.html')


@app.route('/registro', methods=['GET', 'POST'])
def registro():
    if request.method == 'POST':
        # Obtener los datos del formulario
        nombre = request.form['nombre']
        apellidos = request.form['apellidos']
        telefono = request.form['telefono']
        email = request.form['email']
        mensaje = request.form['mensaje']
        # Procesar los datos y almacenarlos en la base de datos
        guardar_usuario(nombre, apellidos, telefono, email, mensaje)
        # Por ejemplo, puedes llamar a una función que inserte los datos en la base de datos
        # insertar_usuario(nombre, apellidos, telefono, email)
        return redirect('/exito')  # Redirigir a una página de éxito después del registro
    else:
        return render_template('registro.html')


def guardar_usuario(nombre, apellidos, telefono, email, mensaje):
            # Establecer conexión con la base de datos
            conexion = mysql.connector.connect(
                host='localhost',
                user='root',
                password='cdqa26071991',
                database='africatdb'
            )

            # Crear un cursor para ejecutar consultas SQL
            cursor = conexion.cursor()

            # Insertar los datos del usuario en la tabla usuarios
            consulta = "INSERT INTO usuarios (nombre, apellidos, telefono, email, mensaje) VALUES (%s, %s, %s, %s, %s)"
            datos = (nombre, apellidos, telefono, email, mensaje)
            cursor.execute(consulta, datos)

            # Confirmar los cambios en la base de datos
            conexion.commit()

            # Cerrar el cursor y la conexión
            cursor.close()
            conexion.close()
            
            
            
# Función para obtener los usuarios de la base de datos MySQL
def obtener_usuarios():
    conn = mysql.connector.connect(
        host='localhost',
        user='root',
        password='cdqa26071991',
        database='africatdb'
    )
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM usuarios')
    usuarios = cursor.fetchall()
    conn.close()
    return usuarios

 


    
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Obtener los datos del formulario
        username = request.form['username']
        password = request.form['password']
        
        # Lógica para verificar las credenciales del usuario
        if username == 'cesar' and password == '123456':
            # Credenciales válidas, obtener usuarios y pasarlos a la plantilla
            usuarios = obtener_usuarios()
            
            return render_template('usuarios.html', usuarios=usuarios)
        else:
            # Credenciales inválidas, mostrar mensaje de error
            error_message = 'Credenciales incorrectas. Inténtelo de nuevo.'
            return render_template('login.html', error=error_message)
        
    else:
        return render_template('login.html')



# Aqui estamos ejecutando la app en el main.

if __name__ == '__main__':
    app.run(debug=True)



