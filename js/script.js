let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
    scanner.addListener('scan', function (content) {
        document.getElementById('qrresult').value = content;
    });
    document.getElementById('startButton').addEventListener('click', function() {
        Instascan.Camera.getCameras().then(function (cameras) {
            if (cameras.length > 0) {
                var selectedCam = cameras[cameras.length - 1];
                scanner.start(selectedCam);
            } else {
                console.error('No cameras found.');
            }
        }).catch(function (e) {
            console.error(e);
        });
    });
