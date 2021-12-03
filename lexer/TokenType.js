/**
 * 词法分析
 * 将字符流转化为符号流。输入:源代码  输出：符号流
 * 
 * 每个符号是一个元组，包含一个字符串和词性描述
 * 
 * 
 * eg:
 * value      type
 * var:       Keyword
 * + - * /:   operator
 * 4,5,6:     Interger
 */

const Enum = require("../common/Enum")

module.exports = {
    KEYWORD : new Enum("KEYWORD",1),//关键词
    VARIABLE : new Enum("VARIABLE",1),//变量
    OPERATOR : new Enum("OPERATOR",1),//操作符
    BRACKET : new Enum(" BRACKET ",1),//括号
    INTEGER : new Enum("INTEGER",1),//整形
    FLOAT : new Enum("FLOAT",1),//浮点
    BOOLEAN : new Enum("BOOLEAN",1),//bool

}