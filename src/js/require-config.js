require.config({
	//配置基础路径
	baseUrl : './js',
	//设置文件依赖的具体路径
	paths : {
		'jquery' : '../lib/jquery',
		'fullpage' : '../lib/jquery.fullPage'
	},
	//如果不是amd模块化插件如果是依赖jquery库的做如下处理
	shim : {
		'fullpage' : {
			'deps' : ['jquery'],
			'exports' : 'fullpage'
		}
	}
})