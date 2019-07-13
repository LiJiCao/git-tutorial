// 享元模式

let id = 0;
window.startUpload = function (uploadType, files) { // uploadType 区分是控件还是flash
    for (let i = 0, file; file = files[i++];) {
        let uploadObj = new Upload(uploadType, file.fileName, file.fileSize);
        uploadObj.init(id++); // 给upload 对象设置一个唯一的id
    }
};

let Upload = function (uploadType, fileName, fileSize) {
    this.uploadType = uploadType;
    this.fileName = fileName;
    this.fileSize = fileSize;
    this.dom = null;
};
Upload.prototype.init = function (id) {
    let that = this;
    this.id = id;
    this.dom = document.createElement('div');
    this.dom.innerHTML =
        '<span>文件名称:' + this.fileName + ', 文件大小: ' + this.fileSize + '</span>' +
        '<button class="delFile">删除</button>';
    this.dom.querySelector('.delFile').onclick = function () {
        that.delFile();
    }
    document.body.appendChild(this.dom);
};

Upload.prototype.delFile = function () {
    if (this.fileSize < 3000) {
        return this.dom.parentNode.removeChild(this.dom);
    }
    if (window.confirm('确定要删除该文件吗? ' + this.fileName)) {
        return this.dom.parentNode.removeChild(this.dom);
    }
};

startUpload('plugin', [
    {
        fileName: '1.txt',
        fileSize: 1000
    },
    {
        fileName: '2.html',
        fileSize: 3000
    },
    {
        fileName: '3.txt',
        fileSize: 5000
    }
]);
startUpload('flash', [
    {
        fileName: '4.txt',
        fileSize: 1000
    },
    {
        fileName: '5.html',
        fileSize: 3000
    },
    {
        fileName: '6.txt',
        fileSize: 5000
    }
]);

Upload = function (uploadType) {
    this.uploadType = uploadType;
};

Upload.prototype.delFile = function (id) {
    uploadManager.setExternalState(id, this); // (1)
    if (this.fileSize < 3000) {
        return this.dom.parentNode.removeChild(this.dom);
    }
    if (window.confirm('确定要删除该文件吗? ' + this.fileName)) {
        return this.dom.parentNode.removeChild(this.dom);
    }
};

let UploadFactory = (function () {
    let createdFlyWeightObjs = {};
    return {
        create: function (uploadType) {
            if (createdFlyWeightObjs[uploadType]) {
                return createdFlyWeightObjs[uploadType];
            }
            return createdFlyWeightObjs[uploadType] = new Upload(uploadType);
        }
    }
})();

let uploadManager = (function () {
    let uploadDatabase = {};
    return {
        add: function (id, uploadType, fileName, fileSize) {
            let flyWeightObj = UploadFactory.create(uploadType);
            let dom = document.createElement('div');
            dom.innerHTML =
                '<span>文件名称:' + fileName + ', 文件大小: ' + fileSize + '</span>' +
                '<button class="delFile">删除</button>';
            dom.querySelector('.delFile').onclick = function () {
                flyWeightObj.delFile(id);
            }
            document.body.appendChild(dom);
            // 文件内容存放在了外部管理方法中
            uploadDatabase[id] = {
                fileName: fileName,
                fileSize: fileSize,
                dom: dom
            };
            return flyWeightObj;
        },
        setExternalState: function (id, flyWeightObj) {
            let uploadData = uploadDatabase[id];
            for (let i in uploadData) {
                flyWeightObj[i] = uploadData[i];
            }
        }
    }
})();

id = 0;
window.startUpload = function (uploadType, files) {
    for (let i = 0, file; file = files[i++];) {
        let uploadObj = uploadManager.add(++id, uploadType, file.fileName, file.fileSize);
    }
};