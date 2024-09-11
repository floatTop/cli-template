#! /usr/bin/env node

const program = require("commander");
const chalk = require("chalk");
const figlet = require("figlet");
const {getFund} = require("./lib");

// 创建项目模版
program
	// 定义命令和参数
	.command("list <app-name>")
	.description("")
	.action((projectName, options) => {
		getFund(projectName, options);
	});


// 监听 --help 执行
program.on("--help", function () {
	console.log(
		"\r\n" +
		figlet.textSync("fund", {
			font: "3D-ASCII",
			horizontalLayout: "default",
			verticalLayout: "default",
			width: 80,
			whitespaceBreak: true,
		})
	);
	// 前后两个空行调整格式，更舒适
	console.log();
	console.log(
		`Run ${chalk.cyan(
			"fund <command> --help"
		)} for detailed usage of given command.`
	);
	console.log();
});

// 配置版本号
program
	// 配置版本号信息
	.version(`v${require("../package.json").version}`)
	.usage("<command> [option]");

program.name("fund").usage(`<command> [option]`);

// 解析用户执行命令传入参数
program.parse(process.argv);
