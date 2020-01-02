# Servicorp API

Este proyecto fue construido con NodeJS y Express.

## Deploy Steps

Para iniciar el proyecto en un nuevo sitio, primero debe clonar el repo. Luego usar la rama develop e instalar las dependencias con el comando: 
```
npm i
```
Finalmente, debe crear las siguientes carpetas/archivos:
* 'src/middlewares/database.js'
* 'src/logging-system/logger.js'
* '/var/log/servicorp/info.txt' - Válido para servidores Linux
* '/var/log/servicorp/debug.txt' - Válido para servidores Linux
* '/var/log/servicorp/error.txt' - Válido para servidores Linux
* 'src/reportes/'