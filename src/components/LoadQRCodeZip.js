import React from 'react';
import QRCode from 'qrcode';
import JSZip from 'jszip';
import FileSaver from 'file-saver'

//npm install file-saver --save
//npm install qrcode
//npm install jszip

class LoadQRCodeZip extends React.Component{

    zipUrlAndBackGround() {
        var url = {
            items: [{id: 1, url: 'http://www.meituan.com'}, {id: 2, url: 'http://www.baidu.com'}, {id: 3, url: 'https://es.xiaojukeji.com/'}]
        };

        var zip = new JSZip();

        // Make sure canvas is as big as the picture
        if (!url.constructor == Array) return;

        // 按照qrCodeId进行从小到大的排序
        url && url.items.sort(function(current, next) {
            return current.id - next.id;
        });

        url.items.forEach(function(val, index) {
            var imgCanvas = document.createElement("canvas"),
                bgImgContext = imgCanvas.getContext("2d");
            imgCanvas.width = 120;
            imgCanvas.height = 120;
            var drawCanvas = null;
            QRCode.toCanvas(val.url, { errorCorrectionLevel: 'H' }, function (err, canvas) {
                if (err) throw err;
                drawCanvas = canvas;
            });

            // Draw image into canvasement
            bgImgContext.drawImage(drawCanvas, 0, 0, 120, 120);
            document.body.appendChild(imgCanvas);

            // Save image as a data URL
            var imgInfom = imgCanvas.toDataURL("image/jpg");

            zip.file(val.id + ".jpg", imgInfom.split(',')[1], {
                base64: true
            });
        });

        zip.generateAsync({
            type: "blob"
        }).then(function(content) {
            FileSaver.saveAs(content, "物料码.zip");
        });
    }

    componentDidMount() {
        let img = this.refs.img;

        var opts = {
            errorCorrectionLevel: 'H',
            type: 'image/jpeg',
            rendererOpts: {
                quality: 0.3
            }
        };

        QRCode.toDataURL('http://www.meituan.com', opts, function (err, url) {
            if (err) throw err;
            img.src = url
        })
    }

    render() {

        return (<div>
            <img ref="img"/>
            <button onClick={this.zipUrlAndBackGround}>下载</button>
        </div>);
    }
}

export default LoadQRCodeZip;

