const fs = require('fs');
const path = require('path');

function patchManifest(manifestPath) {
    if (!fs.existsSync(manifestPath)) {
        return;
    }

    const cameraPermission = '<uses-permission android:name="android.permission.CAMERA" />';
    const cameraFeature = '<uses-feature android:name="android.hardware.camera" android:required="false" />';
    const manifest = fs.readFileSync(manifestPath, 'utf8');

    if (manifest.includes('android.permission.CAMERA')) {
        return;
    }

    const internetPermission = '<uses-permission android:name="android.permission.INTERNET" />';
    const insertAfter = manifest.indexOf(internetPermission);

    if (insertAfter === -1) {
        return;
    }

    const nextLine = manifest.indexOf('\n', insertAfter);
    const insertion = `\n    ${cameraPermission}\n    ${cameraFeature}`;
    const updated = manifest.slice(0, nextLine) + insertion + manifest.slice(nextLine);

    fs.writeFileSync(manifestPath, updated, 'utf8');
}

module.exports = function (context) {
    const projectRoot = context.opts.projectRoot;
    const manifestPath = path.join(projectRoot, 'platforms', 'android', 'app', 'src', 'main', 'AndroidManifest.xml');
    patchManifest(manifestPath);
};