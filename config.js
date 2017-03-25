/**
 * Created by Administrator on 2017/3/25 0025.
 */
module.exports = {
    base64 : {
        src: 'src/css/*.css',
        dest:'dist/css',
        options: {
            baseDir: 'dist/css',
            extensions: ['svg', 'png', /\.jpg#datauri$/i],
            exclude:    [/\.server\.(com|net)\/dynamic\//, '--live.jpg'],
            maxImageSize: 10 * 1024,
            debug: true
        }
    },
    //���js���붨��ķ���
    jshintFn : function (file,cb) {
        if(!file.jshint.success){
            //��ӡ��������Ϣ
            console.log("jshint fail in:" + file.path);
            file.jshint.results.forEach(function(err){
                if(err){
                    console.log(err);
                    console.log("�� "+file.path+" �ļ��ĵ�"+err.error.line+" �еĵ�"+err.error.character+" �з�������");
                }
            });
        }
    }
}