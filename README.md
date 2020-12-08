# Password Wallet
[![Build Status](https://dev.azure.com/JhosetpFrancisco/Ionic%20Project/_apis/build/status/PasswordWallet%20-%20CI?branchName=master)](https://dev.azure.com/JhosetpFrancisco/Ionic%20Project/_build/latest?definitionId=7&branchName=master)
<!-- Insertar HTML en un archivo Markdown no es legal >:v -->
<div style="margin-bottom: 10px;">
    <img src="https://sa2020staticfiles.blob.core.windows.net/img/ionic-logo.png"
        alt="Node Logo"
        height=60
        style="margin-right: 10px;" />
    <img src="https://sa2020staticfiles.blob.core.windows.net/img/angular-logo.png"
        alt="Typescript Logo"
        height=60
        style="margin-right: 10px;" />
</div>

Este es un ejemplo de un proyecto Ionic-Amgular para el almacenamiento de contraseñas.
**OBS: Este proyecto está utilizando la versión 6 de Ionic junto con Capacitor (no Cordova)**

### Utilizar el proyecto de manera local

Primero clonamos el repositorio localmente:

```
git clone https://github.com/JhosetFrancisco/PasswordWallet.git
```

Instalamos las dependencias:

```
npm install
```


Ejecutamos el proyecto de manera local para su visualización en el navegador:

```
ionic serve
```

### Cree archivos web y prepare su aplicación para cualquier plataforma objetivo

Esto creará la carpeta `www` donde se almacenará los archivos web.

```
ionic build
```

### Agregando la plataforma nativa Android al proyecto Ionic

Esto creará la carpeta `android` donde se encontrará el proeycto nativo para Android Studio.

```
ionic capacitor add android
```

### Generación del APK

Una ves tengamos la carpeta `android`, abriremos la terminal en dicha carpeta y ejecutaremos lo siguiente:

##### Windows

```
gradlew assembleDebug
```

##### Linux & Mac OS

```
./gradlew assembleDebug
```

Una ves finalizado la ejecución del *script*, podrás visualizar tu `.APK` en la siguiente ruta: `android/app/build/outputs/apk/debug/`

### Notas Android

AL agregar la plataforma nativa Android con Capacitor, este creaa una carpeta denominada `android` con la que podrás abrirlo facilmente con el Android Studio IDE.

Dentro de esta carpeta se encontrará el archivo `gradlew.bat` (Windows) que contiene la serie de instrucciones para la construcción del `.APK`. Para su correcta ejecución, tener en cuenta que deberás de tener instalado la última versión (de preferencia) del `jdk` - Java. Además, deberás de asegurarte de tener la variable de entorno `JAVA_HOME` asignado a la ubicación de su instalación de Java.

OBS: Este proyecto se encuentra en su versión Alfa 1.0 (Inicializando su estructura).