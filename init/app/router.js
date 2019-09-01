'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/index', controller.home.index);
  router.get('/tag', controller.home.tag);//展示所有标签
  router.get('/course',controller.home.course);//展示所有课程
  router.get('/user',controller.home.user);//当前登录人的信息
  router.get('/add_user',controller.home.add_user);//注册新人（待完善）


  router.get('/free', controller.course.free);//免费课程
  router.get('/course_one', controller.course.course_one);//某一课程信息
  router.get('/chapter', controller.course.chapter);//课程对应的章节
  router.get('/consult', controller.course.consult);//课程售前咨询
  router.get('/comment', controller.course.comment);//课程评价
  router.get('/update', controller.course.update);//更新内容
  router.get('/teacher', controller.course.teacher);//当前课程的授课教师
  router.get('/course_infor', controller.course.course_infor);//展示某一课程的信息
  router.get('/course_com', controller.course.course_com);//课程评论
  router.get('/course_type', controller.course.course_type);//根据课程分类查课程
  router.get('/my_free_course', controller.course.my_free_course);//我的免费课程
  router.get('/my_pay_course', controller.course.my_pay_course);//我的收费课程
  router.get('/my_job_course', controller.course.my_job_course);//我的就业班
  router.get('/stage', controller.course.stage);//课程阶段
  router.get('/add_consult',controller.course.add_consult);//售前咨询（提问）
  router.get('/update_study',controller.course.update_study);//点击立即学习（学习人数加一）
  router.get('/course_exercise',controller.course.course_exercise);


  router.get('/blog_category',controller.blog.category);//查找文章分类
  router.get('/blog_tag',controller.blog.tag);//查找标签
  router.get('/blogs',controller.blog.blogs);//查找所有文章
  // router.get('/update_hits',controller.blog.update_hits);
  router.get('/blog_one',controller.blog.blog_one);//查找某一文章
  router.get('/blog_user',controller.blog.user);//查找某一文章的作者
  router.get('/blog_com',controller.blog.blog_com);//查找某一文章的评论
  router.get('/add_com',controller.blog.add_com);//发表评论
  router.get('/add_blog',controller.blog.add_blog);//发表文章

  router.get('/all',controller.blog.all);//搜出所有的文章和课程
  router.get('/search',controller.blog.search);//查找输入框里的文字对应的文章和课程
  router.get('/my_course',controller.blog.my_course);//查找我的课程
  router.get('/my_blog',controller.blog.my_blog);//查找我的文章
  router.get('/mine',controller.blog.mine);//查找我的信息


















};
