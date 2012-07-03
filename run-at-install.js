#!/usr/bin/env node

/*
var hintIDEPath = "node \"" + __dirname + "\\lib\\ide.js\"";
process.stdout.write(
	"\n\n**** 请对应您的IDE作如下设置 : ****\n\n" +
	"NODEPAD++:\n=======\n" +
	"1. 在插件菜单中，确保安装 NppExec，如果没有请使用该菜单中的Plugin Manager进行安装。\n" +
	"2. 按F6键打开插件面板，将以下生成的命令放置入代码运行框 : \n" + hintIDEPath + " \"$(FULL_CURRENT_PATH)\"\n" + 
	"3. 反复检测请按“Ctrl+F6”.\n\n" +
	"UltraEditor:\n=======\n" +
	"1. 在高级菜单中选择“工具栏配置”\n" +
	"2. 点击“插入”，写入名称，然后输入以下命令行：\n" +
	hintIDEPath + " \"%p%n%e\"" + "\n" +
	"3. 输出TAB中，命令输出选择：[ 输入到列表框、捕捉输出 ]\n" +
	"4. 点击确定即可。" +
	"\n\n"
);



var fs = require('fs'); 

var copy = function(src, dest) {
	var oldFile = fs.createReadStream(src);
	var newFile = fs.createWriteStream(dest);
	require('util').pump(oldFile, newFile);
};

copy("./lib/_src-node.f2ehint-update.js", "../node.f2ehint-update.js")
*/