# Asistencias · Cordova

Versión Cordova del sistema de asistencia escolar con registro y escaneo QR. El esqueleto utiliza Apache Cordova; se conservan sus avisos de licencia.

## Requisitos

Node.js compatible con Cordova Android 15, JDK 17, Android SDK 36 y Build Tools 36.0.0.

## Ejecutar

```text
npm ci
npx cordova@13.0.0 platform add android@15.0.0
npx cordova@13.0.0 build android --debug
```

Define JAVA_HOME y ANDROID_HOME e instala Gradle. Configura www/firebase-config.js con tu propio proyecto Firebase. El APK aparece en platforms/android/app/build/outputs/apk/debug/.

## Verificación del 8 de octubre de 2026

Se restauró Android 15.0.0 y se generó el APK debug. Los scripts e instrucciones inline pasaron la comprobación de sintaxis. La compilación empleó una firma local de pruebas que no se publica. No se instaló en un teléfono ni se probaron cámara y datos Firebase.
