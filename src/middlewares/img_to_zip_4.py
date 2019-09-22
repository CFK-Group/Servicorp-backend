import os, zipfile, time
import mysql.connector as mysql
from mysql.connector import Error

def connect():
    try:
        conn = mysql.connect(host='localhost',
                                       database='cfk_servicorp',
                                       user='root',
                                       password='colseco')
        if conn.is_connected():
            print('Connected to MySQL database')
 
    except Error as e:
        print(e)
 
    finally:
        return conn



def close(mysql_connection):
    mysql_connection.close()
    if not mysql_connection.is_connected:
        print('No longer connected to MySQL')


def insert(mysql_connection, path, zipfile):
    query = "INSERT INTO `cfk_servicorp`.`srv_img_descarga` (`nombre_archivo`, `ruta_archivo`, `estado`) VALUES" \
            "(%s, %s, %s)"
    args = (zipfile, path, "Activo")

    cursor = mysql_connection.cursor()

    try:
        cursor.execute(query, args)

        if cursor.lastrowid:
            print('last insert id', cursor.lastrowid)
        else:
            print('last insert id not found')
 
        mysql_connection.commit()

    except Error as error:
        print(error)
 
    finally:
        cursor.close()


def deactivate(mysql_connection, zipfile):
    query = "UPDATE srv_img_descarga SET estado = %s WHERE nombre_archivo like %s"             
    args = ("Desactivado", zipfile)

    cursor = mysql_connection.cursor()
    
    try:
        cursor.execute(query, args)
        mysql_connection.commit()

    except Error as error:
        print(error)

    finally:
        cursor.close()


def zipdir(path, ziph, start_date, end_date, empresa, mysql_connection, path_zip, zipfile):
    namesUsed = []
    print('Iniciando Compresion de archivos ' + zipfile)
    for root, folders, files in os.walk(path):
        for file in files:
	    filename = file.split('_')
            if len(filename) == 4:
                if filename[1] == empresa:
                    print(filename)
                    print('File date: ' + str(int(filename[2])))
                    print('Start date: ' + str(int(start_date)))
                    print('End date: ' + str(int(end_date)))
                    filename_date = int(filename[2], 10) - (4*60*60)
                    print(filename_date)
                    if int(filename_date) > start_date and int(filename_date) <= end_date:
                        print(filename)
                        arcname_ = filename[0]+ '_' + filename[3]
                        if (arcname_ in namesUsed):
                            arcname_ = '(' + str(namesUsed.count(arcname_) + 1) + ')' + arcname_
                        namesUsed.append(arcname_)
#                        print(arcname_)
                        ziph.write(os.path.join(root, file), arcname=arcname_)
    
    deactivate(mysql_connection, zipfile)
    insert(mysql_connection, path_zip, zipfile)
    close(mysql_connection)


def isEmptyZip(filename):
    print('Validando Zip')
    zfile = zipfile.ZipFile(filename)
    print(zfile.namelist())
    if len(zfile.namelist()) == 0:
        return True
    else:
        return False

if __name__ == '__main__':
    path = '/var/www/Servicorp/Servicorp-backend/src/public/img'

    # Hacer 2 veces, 1 por cada empresa
    empresas = ["entel", "claro"]
 
    tomorrow_mid = time.time() - (time.time() % 86400) + 86400 #23:59:59
    tomorrow_mid = tomorrow_mid - (4*60*60) #aplicada a la zona horaria con 4 horas (19:59:59)
    today_mid = tomorrow_mid - 86400 #00:00:00
    print( 'tomorrow: ' + str(int(tomorrow_mid)))
    print ('today: ' + str(int(today_mid))) 
    for empresa in empresas:
	print(empresa)
        filename = '/var/www/Servicorp/Servicorp-backend/src/public/zips/' + empresa + '_' + str(int(today_mid)) + '.zip'
        path_zip = '/var/www/Servicorp/Servicorp-backend/src/public/zips/'
        zip_file=empresa + '_' + str(int(today_mid)) + '.zip'

        if os.path.isfile(filename):
                os.remove(filename)
        zipf = zipfile.ZipFile(filename, 'w', zipfile.ZIP_DEFLATED)
        zipdir(path, zipf, today_mid, tomorrow_mid, empresa, connect(), path_zip=path_zip, zipfile=zip_file)
        zipf.close()
        if isEmptyZip(filename):
            print('archivo vacio, eliminando...')
            if os.path.isfile(filename):
                deactivate(connect(), zip_file)
                os.remove(filename)
        else:
            print ('archivo contiene imagenes')
