/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50538
Source Host           : localhost:3306
Source Database       : notes

Target Server Type    : MYSQL
Target Server Version : 50538
File Encoding         : 65001

Date: 2015-07-05 21:45:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `zv_blog`
-- ----------------------------
DROP TABLE IF EXISTS `zv_blog`;
CREATE TABLE `zv_blog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL COMMENT '日志标题',
  `bzzj` text COMMENT '本周总结',
  `xzjh` text COMMENT '下周计划',
  `yjfk` text COMMENT '建议反馈',
  `uid` int(6) unsigned NOT NULL COMMENT '发布者id',
  `author` varchar(10) NOT NULL COMMENT '发布者姓名',
  `visits` smallint(6) unsigned NOT NULL DEFAULT '0' COMMENT 'pv 量',
  `time` int(10) unsigned DEFAULT '0',
  `top` int(10) NOT NULL COMMENT '点赞量',
  `sta` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否删除，0代表不是，1代表是',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zv_blog
-- ----------------------------

-- ----------------------------
-- Table structure for `zv_comment`
-- ----------------------------
DROP TABLE IF EXISTS `zv_comment`;
CREATE TABLE `zv_comment` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bid` int(10) unsigned NOT NULL COMMENT '日志 id',
  `uid` int(8) unsigned NOT NULL COMMENT '评论者id',
  `content` text COMMENT '评论内容',
  `time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '评论时间',
  `del` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否删除，0代表未删，1代表已删',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zv_comment
-- ----------------------------

-- ----------------------------
-- Table structure for `zv_faq`
-- ----------------------------
DROP TABLE IF EXISTS `zv_faq`;
CREATE TABLE `zv_faq` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `cid` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '所属分类id',
  `uid` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '用户id',
  `question` varchar(255) NOT NULL COMMENT 'faq问题',
  `answer` tinytext NOT NULL COMMENT '回答',
  `create_time` datetime NOT NULL COMMENT '记录创建时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zv_faq
-- ----------------------------
INSERT INTO `zv_faq` VALUES ('1', '1', '1', 'How do I change my password?', '&lt;blockquote&gt;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quidem blanditiis delectus corporis, possimus officia sint sequi ex tenetur id impedit est pariatur iure animi non a ratione reiciendis nihil sed consequatur atque r', '2015-06-13 21:14:12');
INSERT INTO `zv_faq` VALUES ('2', '1', '1', 'How do I sign up?', '&lt;blockquote&gt;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate et laudantium esse adipisci consequatur modi possimus accusantium vero atque excepturi nobis in doloremque repudiandae soluta non minus dolore voluptatem', '2015-06-13 21:17:49');
INSERT INTO `zv_faq` VALUES ('3', '1', '1', 'Can I remove a post?', '&lt;blockquote&gt;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero quaerat', '2015-06-13 21:18:33');
INSERT INTO `zv_faq` VALUES ('4', '1', '1', 'How do reviews work?', '&lt;blockquote&gt;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero quaerat', '2015-06-13 21:19:17');
INSERT INTO `zv_faq` VALUES ('5', '2', '1', 'How does syscing work?', '&lt;blockquote&gt;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quidem delectus rerum eligendi mollitia, repudiandae quae beatae. Et repellat quam atque corrupti iusto architecto impedit explicabo repudiandae qui similique aut', '2015-06-13 21:19:57');
INSERT INTO `zv_faq` VALUES ('6', '2', '1', 'How do I think a file or a folder?', '&lt;blockquote&gt;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero quaerat', '2015-06-13 21:20:53');
INSERT INTO `zv_faq` VALUES ('7', '3', '1', 'How do I change my password?', '&lt;blockquote&gt;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis earum autem consectetur labore eius tenetur esse, in temporibus sequi cum voluptatem vitae repellat nostrum odio perspiciatis dolores recusandae necessitatibu', '2015-06-13 21:21:20');
INSERT INTO `zv_faq` VALUES ('8', '3', '1', 'How do I delete my account?', '&lt;blockquote&gt;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo tempore soluta, minus magnam non blanditiis dolore, in nam voluptas nobis minima deserunt deleniti id animi amet, suscipit consequuntur corporis nihil laborum facere', '2015-06-13 21:21:54');
INSERT INTO `zv_faq` VALUES ('9', '4', '1', 'Why did my credit card or PayPal fail?', '&lt;blockquote&gt;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo tempore soluta, minus magnam non blanditiis dolore, in nam voluptas nobis minima deserunt deleniti id animi amet, suscipit consequuntur corporis nihil laborum facere', '2015-06-13 21:22:40');
INSERT INTO `zv_faq` VALUES ('10', '5', '1', 'my files are missing! How do I get them back?', '&lt;blockquote&gt;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero quaerat', '2015-06-13 21:23:31');
INSERT INTO `zv_faq` VALUES ('11', '6', '1', 'Who take care of shipping?', '&lt;blockquote&gt;&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero quaerat', '2015-06-13 21:24:49');

-- ----------------------------
-- Table structure for `zv_faq_category`
-- ----------------------------
DROP TABLE IF EXISTS `zv_faq_category`;
CREATE TABLE `zv_faq_category` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `pid` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '项目id',
  `uid` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建人id',
  `name` varchar(255) NOT NULL COMMENT 'faq分类名',
  `sort` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '排序，越大越靠前',
  `create_time` datetime NOT NULL COMMENT '记录创建时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zv_faq_category
-- ----------------------------
INSERT INTO `zv_faq_category` VALUES ('1', '1', '1', 'Basic', '0', '2015-06-13 16:49:14');
INSERT INTO `zv_faq_category` VALUES ('2', '1', '1', 'Mobile', '0', '2015-06-13 21:11:51');
INSERT INTO `zv_faq_category` VALUES ('3', '1', '1', 'Account', '0', '2015-06-13 21:12:03');
INSERT INTO `zv_faq_category` VALUES ('4', '1', '1', 'Payments', '0', '2015-06-13 21:12:58');
INSERT INTO `zv_faq_category` VALUES ('5', '1', '1', 'Privacy', '0', '2015-06-13 21:13:10');
INSERT INTO `zv_faq_category` VALUES ('6', '1', '1', 'Delivery', '0', '2015-06-13 21:13:30');

-- ----------------------------
-- Table structure for `zv_msg`
-- ----------------------------
DROP TABLE IF EXISTS `zv_msg`;
CREATE TABLE `zv_msg` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(8) unsigned NOT NULL COMMENT '交流区发言 uid',
  `content` text COMMENT '交流区发言内容',
  `time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '交流区发言时间',
  `del` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否被发言者删除，0表示未删，1表示已删',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zv_msg
-- ----------------------------
INSERT INTO `zv_msg` VALUES ('1', '1', '五星反馈区', '1433831646', '1');
INSERT INTO `zv_msg` VALUES ('2', '1', '新华财富反馈区', '1433831659', '1');
INSERT INTO `zv_msg` VALUES ('3', '1', '&lt;p&gt;dsafdasfdsaf&lt;/p&gt;', '1433913785', '1');
INSERT INTO `zv_msg` VALUES ('4', '1', '&lt;p&gt;dfasdfdsafdasf&lt;/p&gt;', '1433913838', '1');
INSERT INTO `zv_msg` VALUES ('5', '1', '&lt;p&gt;dsafdasf&lt;/p&gt;', '1433915055', '1');
INSERT INTO `zv_msg` VALUES ('6', '1', '&lt;p&gt;岁的范德萨范德萨&lt;/p&gt;', '1433917589', '1');
INSERT INTO `zv_msg` VALUES ('7', '2', '&lt;p&gt;sdfdsfdsafds&lt;/p&gt;', '1434179491', '0');
INSERT INTO `zv_msg` VALUES ('8', '1', '&lt;p&gt;hello&lt;/p&gt;', '1434956247', '0');

-- ----------------------------
-- Table structure for `zv_needle`
-- ----------------------------
DROP TABLE IF EXISTS `zv_needle`;
CREATE TABLE `zv_needle` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) unsigned NOT NULL COMMENT '作者id',
  `pid` int(11) unsigned NOT NULL COMMENT '项目id',
  `title` varchar(255) NOT NULL COMMENT '需求标题',
  `background` varchar(255) NOT NULL COMMENT '产品背景',
  `target` varchar(255) NOT NULL COMMENT '产品目标',
  `content` text NOT NULL COMMENT '需求内容',
  `plan` varchar(255) NOT NULL COMMENT '需求计划',
  `click_num` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '点击次数',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态，默认 1 为关闭，2为公开',
  `create_time` datetime NOT NULL COMMENT '记录创建时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zv_needle
-- ----------------------------
INSERT INTO `zv_needle` VALUES ('1', '1', '1', '测试标题', '测试背景', '测试目标', '&lt;p&gt;测试内容123&lt;/p&gt;', '测试计划', '11', '1', '2015-06-13 14:22:13');

-- ----------------------------
-- Table structure for `zv_program`
-- ----------------------------
DROP TABLE IF EXISTS `zv_program`;
CREATE TABLE `zv_program` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '项目名称',
  `start_time` date DEFAULT NULL COMMENT '项目开始时间',
  `end_time` date DEFAULT NULL COMMENT '项目结束时间',
  `uid` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建人',
  `click_num` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '点击量',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态，默认1为开启，2为关闭',
  `create_time` datetime NOT NULL COMMENT '记录创建时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zv_program
-- ----------------------------
INSERT INTO `zv_program` VALUES ('1', '财富天堂', '2015-07-01', '2015-07-31', '1', '0', '1', '2015-06-13 14:20:55');

-- ----------------------------
-- Table structure for `zv_shacom`
-- ----------------------------
DROP TABLE IF EXISTS `zv_shacom`;
CREATE TABLE `zv_shacom` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bid` int(10) unsigned NOT NULL,
  `uid` int(8) unsigned NOT NULL,
  `content` text,
  `time` int(10) unsigned NOT NULL DEFAULT '0',
  `del` tinyint(1) unsigned DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zv_shacom
-- ----------------------------

-- ----------------------------
-- Table structure for `zv_share`
-- ----------------------------
DROP TABLE IF EXISTS `zv_share`;
CREATE TABLE `zv_share` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL COMMENT '分享标题',
  `content` text COMMENT '分享内容',
  `uid` int(8) unsigned NOT NULL COMMENT '分享者uid',
  `author` varchar(10) NOT NULL COMMENT '分享者',
  `visits` smallint(6) unsigned NOT NULL DEFAULT '0' COMMENT 'pv 量',
  `time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '分享时间',
  `del` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否被删除，0表示未删，1表示已删',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zv_share
-- ----------------------------
INSERT INTO `zv_share` VALUES ('1', '说说本站的臭虫(bug)', '<p>本站的壮大，是需要在大伙的欢呼声、唏嘘声中得到不断的肯定，所以，请花上您宝贵的几分钟，给我们反馈一些关于你所想到的建议或者看到的 bug, 谢谢！</p>', '1', '陈远琪', '6', '1436097356', '0');

-- ----------------------------
-- Table structure for `zv_task`
-- ----------------------------
DROP TABLE IF EXISTS `zv_task`;
CREATE TABLE `zv_task` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `program_id` int(11) unsigned NOT NULL COMMENT '项目 ID',
  `task_code` tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '任务编号',
  `task_name` varchar(255) NOT NULL COMMENT '任务名称',
  `task_user` varchar(255) NOT NULL COMMENT '任务执行者，负责人',
  `start_date` date NOT NULL COMMENT '任务开始日期',
  `end_date` date NOT NULL COMMENT '任务结束日期',
  `percentage` tinyint(3) unsigned NOT NULL COMMENT '完成百分比',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态，默认 1 为开启，2 为关闭',
  `create_time` datetime NOT NULL COMMENT '记录创建世界',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zv_task
-- ----------------------------
INSERT INTO `zv_task` VALUES ('3', '1', '1', '任务一', '小溪', '2015-07-06', '2015-07-08', '30', '1', '2015-07-05 01:20:00');
INSERT INTO `zv_task` VALUES ('4', '1', '2', '任务二', '小河', '2015-07-07', '2015-07-08', '1', '1', '2015-07-05 01:22:38');
INSERT INTO `zv_task` VALUES ('5', '1', '3', '任务三', '小海', '2015-07-10', '2015-07-14', '12', '1', '2015-07-05 01:23:08');
INSERT INTO `zv_task` VALUES ('6', '1', '4', '吃饭', '小乔', '2015-07-13', '2015-07-15', '12', '1', '2015-07-05 11:44:39');
INSERT INTO `zv_task` VALUES ('7', '1', '5', '需求分析', '管理员', '2015-07-08', '2015-07-09', '0', '1', '2015-07-05 19:47:35');
INSERT INTO `zv_task` VALUES ('8', '1', '6', '数据库搭建', '管理员', '2015-07-08', '2015-07-10', '19', '1', '2015-07-05 19:48:12');

-- ----------------------------
-- Table structure for `zv_top`
-- ----------------------------
DROP TABLE IF EXISTS `zv_top`;
CREATE TABLE `zv_top` (
  `bid` int(10) unsigned NOT NULL COMMENT '被赞的日志 id',
  `uid` int(8) unsigned NOT NULL COMMENT '点赞的 uid',
  `time` int(10) unsigned DEFAULT '0',
  UNIQUE KEY `bid` (`bid`,`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zv_top
-- ----------------------------

-- ----------------------------
-- Table structure for `zv_user`
-- ----------------------------
DROP TABLE IF EXISTS `zv_user`;
CREATE TABLE `zv_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` char(20) NOT NULL COMMENT '用户名',
  `password` char(32) NOT NULL COMMENT '密码',
  `logintime` int(10) unsigned DEFAULT NULL COMMENT '登录时间',
  `loginip` varchar(30) DEFAULT NULL COMMENT '登陆ip',
  `name` varchar(10) NOT NULL DEFAULT '雷锋' COMMENT '真是姓名',
  `sex` char(1) NOT NULL COMMENT '性别',
  `tel` char(18) NOT NULL COMMENT '联系电话',
  `email` varchar(30) NOT NULL COMMENT '邮件',
  `dep` varchar(18) NOT NULL COMMENT '部门',
  `img` varchar(100) NOT NULL DEFAULT '/Public/images/img.jpg' COMMENT '头像',
  `content` text NOT NULL COMMENT '个性签',
  `admin` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否管理员，0代表不是，1代表是',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zv_user
-- ----------------------------
INSERT INTO `zv_user` VALUES ('1', 'cyq', 'e10adc3949ba59abbe56e057f20f883e', '1436096341', '127.0.0.1', '管理员', '0', '400-0817-220', 'admin@zovei.cn', '4', '/Public/Uploads/2015-05-08/554c102a7e1fb.jpg', '这里就是你的家！', '1');
INSERT INTO `zv_user` VALUES ('2', 'lzx', 'e10adc3949ba59abbe56e057f20f883e', '1434179483', '127.0.0.1', 'lzx', '', '', '', '', '/Public/images/img.jpg', '', '0');
INSERT INTO `zv_user` VALUES ('3', 'wb', 'e10adc3949ba59abbe56e057f20f883e', '1433832089', '127.0.0.1', 'wb', '', '', '', '', '/Public/images/img.jpg', '', '0');
