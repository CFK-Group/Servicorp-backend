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


def zipdir(path, ziph, start_date, end_date, empresa, mysql_connection, path_zip, zipfile):
    for root, folders, files in os.walk(path):
        for file in files:
            filename = file.split('_')
            if len(filename) == 4:
                if filename[1] == empresa:
                    if int(filename[2]) > start_date and int(filename[2]) <= end_date:
                        arcname_ = filename[0] + '_' + filename[2]+ '_' + filename[3]
                        ziph.write(os.path.join(root, file), arcname=arcname_)
    insert(mysql_connection, path_zip, zipfile)
    close(mysql_connection)

if __name__ == '__main__':
    path = '/var/www/Servicorp/Servicorp-backend/src/public/img'

    # Hacer 2 veces, 1 por cada empresa
    empresas = ["entel", "claro"]
    today_mid = time.time() - (time.time() % 86400)
    tomorrow_mid = today_mid + 86400

    for empresa in empresas:
        filename = '/var/www/Servicorp/Servicorp-backend/src/public/zips/' + empresa + '_' + str(int(today_mid)) + '.zip'
        zipf = zipfile.ZipFile(filename, 'w', zipfile.ZIP_DEFLATED)
        zipdir(path, zipf, today_mid, tomorrow_mid, empresa, connect(), path_zip='/var/www/Servicorp-backend/src/public/zips/', zipfile=empresa + '_' + str(int(today_mid)) + '.zip')
        zipf.close()
