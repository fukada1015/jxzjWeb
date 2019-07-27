<template>
    <div class="container dingbujuli">
      <div class="row">
        <div class="col-lg-12 wow zsns_zpzw" data-wow-delay=".6s"><span>招聘职位</span></div>
      </div>
      <div class="row">
        <div class="cptyline-zp"></div>
      </div>
      <div>
        <p class="zsns_fbt">简历投递邮箱 | liziyi@cmjxzj.com</p>
      </div>

      <div class="row yjx">
        <div :class="[activeClass,errorClass]"></div>
        <div class="col-md-4 diwz"><a @mouseenter="fun1" ><p ref="p1">查看全部</p></a></div>
        <div class="col-md-4 diwz"><a @mouseenter="fun2" ><p ref="p2">业务团队</p></a></div>
        <div class="col-md-4 diwz"><a @mouseenter="fun3" ><p ref="p3">技术团队</p></a></div>
      </div>

      <div :class="[mianban1]" ref="n1" v-show="xiaoshoutuandui">
        <div class="row" @click="shouqi">
          <div class="col-md-9 xhx"><p class="zwtitle">1.保险</p></div>
          <div class="col-md-2 xhx"><p class="wztitle"><span><img src="../../common/images/dibiao.gif"/></span>长沙</p></div>
          <div v-if="v2" class="col-md-1 buxian"><img src="../../common/images/jt.png"/></div>
          <div v-if="v1" class="col-md-1"><img class="zhuandong" src="../../common/images/jt.png"/></div>
        </div>
        <div class="wenbenkuang">
            <p class="gwzz">岗位职责：</p>
            <h6>1、掌握保险公司的投保政策；</h6>
            <h6>2、负责来电客户对保险业务的咨询解答工作；</h6>
            <h6>3、负责工程车险客户的保险投保、续保工作；</h6>
            <h6>4、完成新保、续保客户保单资料的信息登记、存档。</h6>
          <br>
            <p class="gwzz">任职要求：</p>
          <h6>1、20-30岁，保险或市场营销相关专业专科以上学历；</h6>
          <h6>2、业务拓展能力较好，具备良好的沟通能力和服务意识；</h6>
          <h6>3、有责任心、有较强的计划执行能力，熟练掌握各种办公软件；</h6>
          <h6>4、有车险或销售、理赔定损类工作经验的优先；</h6>
          <h6>5、主要做吊车、泵车等工程机械的工程车险，公司有现成的客户资源，而且专业的工程机械险种只有我们这些公司才能承保，所以不要担心业务的问题，你只要用心，想赚钱的赶快来！</h6>
        </div>
      </div>

      <div :class="[mianban2]" ref="n2" v-show="xiaoshoutuandui">
        <div class="row" @click="shouqi2">
          <div class="col-md-9 xhx"><p class="zwtitle">2.财险顾问</p></div>
          <div class="col-md-2 xhx"><p class="wztitle"><span><img src="../../common/images/dibiao.gif"/></span>长沙</p></div>
          <div v-if="v22" class="col-md-1 buxian"><img src="../../common/images/jt.png"/></div>
          <div v-if="v21" class="col-md-1"><img class="zhuandong" src="../../common/images/jt.png"/></div>
        </div>
        <div class="wenbenkuang">
          <p class="gwzz">岗位职责：</p>
          <h6>1、掌握保险公司的投保政策；</h6>
          <h6>2、负责来电客户对保险业务的咨询解答工作；</h6>
          <h6>3、负责工程车险客户的保险投保、续保工作；</h6>
          <h6>4、完成新保、续保客户保单资料的信息登记、存档。</h6>
          <br>
          <p class="gwzz">任职要求：</p>
          <h6>1、20-30岁，保险或市场营销相关专业专科以上学历；</h6>
          <h6>2、业务拓展能力较好，具备良好的沟通能力和服务意识；</h6>
          <h6>3、有责任心、有较强的计划执行能力，熟练掌握各种办公软件；</h6>
          <h6>4、有车险或销售、理赔定损类工作经验的优先；</h6>
          <h6>备注：公司主要做吊车、泵车等工程机械的工程车险，公司有现成的客户资源，而且专业的工程机械险种只有我们公司才能承保，所以不要担心业务的问题，你只要用心，想赚钱的赶快来！</h6>
        </div>
      </div>

      <div :class="[mianban3]" ref="n3" v-show="xiaoshoutuandui">
        <div class="row" @click="shouqi3">
          <div class="col-md-9 xhx"><p class="zwtitle">3.车险专员</p></div>
          <div class="col-md-2 xhx"><p class="wztitle"><span><img src="../../common/images/dibiao.gif"/></span>长沙</p></div>
          <div v-if="v32" class="col-md-1 buxian"><img src="../../common/images/jt.png"/></div>
          <div v-if="v31" class="col-md-1"><img class="zhuandong" src="../../common/images/jt.png"/></div>
        </div>
        <div class="wenbenkuang">
          <p class="gwzz">岗位职责：</p>
          <h6>1、掌握保险公司的投保政策；</h6>
          <h6>2、负责来电客户对保险业务的咨询解答工作；</h6>
          <h6>3、负责工程车险客户的保险投保、续保工作；</h6>
          <h6>4、完成新保、续保客户保单资料的信息登记、存档。</h6>
          <br>
          <p class="gwzz">任职要求：</p>
          <h6>1、销售，电话销售</h6>
          <h6>2、20-30岁，保险或市场营销相关专业专科以上学历；</h6>
          <h6>3、业务拓展能力较好，具备良好的沟通能力和服务意识；</h6>
          <h6>4、有责任心、有较强的计划执行能力，熟练掌握各种办公软件；</h6>
          <h6>5、有车险或销售、理赔定损类工作经验的优先。</h6>
          <h6 style="line-height:26px">6、主要做吊车、泵车等工程机械的工程车险，公司有现成的客户资源，而且专业的工程机械险种只有我们这些公司才能承保，所以不要担心业务的问题，你只要用心，月薪过万<br>
              &nbsp;&nbsp;&nbsp;&nbsp;  也是没有问题的！期待你的参与！</h6>
        </div>
      </div>

      <div :class="[mianban4]" ref="n4" v-show="xiaoshoutuandui">
        <div class="row" @click="shouqi4">
          <div class="col-md-9 xhx"><p class="zwtitle">4.销售经理（江门）</p></div>
          <div class="col-md-2 xhx"><p class="wztitle"><span><img src="../../common/images/dibiao.gif"/></span>江门</p></div>
          <div v-if="v42" class="col-md-1 buxian"><img src="../../common/images/jt.png"/></div>
          <div v-if="v41" class="col-md-1"><img class="zhuandong" src="../../common/images/jt.png"/></div>
        </div>
        <div class="wenbenkuang">
          <p class="gwzz">岗位职责：</p>
          <h6>1、经过培训之后熟悉掌握公司业务知识和特性；</h6>
          <h6>2、负责市场调研，业务拓展及维护；</h6>
          <h6>3、提高公司业务在所负责区域的渗透率，关注结果；</h6>
          <h6>4、就当地工程机械市场行情进行分析及反馈；</h6>
          <h6>5、配合其他部门业务流工作；</h6>
          <h6>6、按公司要求完成各项指标；</h6>
          <h6>7、完成上级领导交待的其他工作；</h6>
          <br>
          <p class="gwzz">任职要求：</p>
          <h6>1、大专及以上学历，年龄在32岁以下，必须有车；</h6>
          <h6>2、性格开朗，勇于挑战，有野心、抗压能力和学习能力；</h6>
          <h6>3、良好的团队协助精神，责任心强，能够快速融入新环境；</h6>
          <h6>4、在校期间有兼职经历或担任学生干部并获得良好评价者优先录用。</h6>
        </div>
      </div>

      <div :class="[mianban5]" ref="n5" v-show="xiaoshoutuandui">
        <div class="row" @click="shouqi5">
          <div class="col-md-9 xhx"><p class="zwtitle">5.销售经理（韶关）</p></div>
          <div class="col-md-2 xhx"><p class="wztitle"><span><img src="../../common/images/dibiao.gif"/></span>韶关</p></div>
          <div v-if="v52" class="col-md-1 buxian"><img src="../../common/images/jt.png"/></div>
          <div v-if="v51" class="col-md-1"><img class="zhuandong" src="../../common/images/jt.png"/></div>
        </div>
        <div class="wenbenkuang">
          <p class="gwzz">岗位职责：</p>
          <h6>1、经过培训之后熟悉掌握公司业务知识和特性；</h6>
          <h6>2、负责市场调研，业务拓展及维护；</h6>
          <h6>3、提高公司业务在所负责区域的渗透率，关注结果；</h6>
          <h6>4、就当地工程机械市场行情进行分析及反馈，关注结果；</h6>
          <h6>5、配合其他部门业务流工作；</h6>
          <h6>6、按公司要求完成各项指标；</h6>
          <h6>7、完成上级领导交待的其他工作；</h6>
          <br>
          <p class="gwzz">任职要求：</p>
          <h6>1、大专及以上学历，年龄在32岁以下，必须有车；</h6>
          <h6>2、性格开朗，勇于挑战，有野心、抗压能力和学习能力；</h6>
          <h6>3、良好的团队协助精神，责任心强，能够快速融入新环境；</h6>
          <h6>4、在校期间有兼职经历或担任学生干部并获得良好评价者优先录用。</h6>
        </div>
      </div>

      <div :class="[mianban6]" ref="n6" v-show="xiaoshoutuandui">
        <div class="row" @click="shouqi6">
          <div class="col-md-9 xhx"><p class="zwtitle">6.销售经理（肇庆）</p></div>
          <div class="col-md-2 xhx"><p class="wztitle"><span><img src="../../common/images/dibiao.gif"/></span>肇庆</p></div>
          <div v-if="v62" class="col-md-1 buxian"><img src="../../common/images/jt.png"/></div>
          <div v-if="v61" class="col-md-1"><img class="zhuandong" src="../../common/images/jt.png"/></div>
        </div>
        <div class="wenbenkuang">
          <p class="gwzz">岗位职责：</p>
          <h6>1、经过培训之后熟悉掌握公司业务知识和特性；</h6>
          <h6>2、负责市场调研，业务拓展及维护；</h6>
          <h6>3、提高公司业务在所负责区域的渗透率，关注结果；</h6>
          <h6>4、就当地工程机械市场行情进行分析及反馈，关注结果；</h6>
          <h6>5、配合其他部门业务流工作；</h6>
          <h6>6、按公司要求完成各项指标；</h6>
          <h6>7、完成上级领导交待的其他工作；</h6>
          <br>
          <p class="gwzz">任职要求：</p>
          <h6>1、大专及以上学历，年龄在32岁以下，必须有车；</h6>
          <h6>2、性格开朗，勇于挑战，有野心、抗压能力和学习能力；</h6>
          <h6>3、良好的团队协助精神，责任心强，能够快速融入新环境；</h6>
          <h6>4、在校期间有兼职经历或担任学生干部并获得良好评价者优先录用。</h6>

        </div>
      </div>

      <div :class="[mianban7]" ref="n7" v-show="jishutuandui">
        <div class="row" @click="shouqi7">
          <div class="col-md-9 xhx"><p class="zwtitle">{{txt0}}.运营</p></div>
          <div class="col-md-2 xhx"><p class="wztitle"><span><img src="../../common/images/dibiao.gif"/></span>长沙</p></div>
          <div v-if="v72" class="col-md-1 buxian"><img src="../../common/images/jt.png"/></div>
          <div v-if="v71" class="col-md-1"><img class="zhuandong" src="../../common/images/jt.png"/></div>
        </div>
        <div class="wenbenkuang">
          <p class="gwzz">岗位职责：</p>
          <h6>1、负责平台产品的运营及具体跟进，对最终结果负责任；</h6>
          <h6>2、建立数据分析体系，通过数据异常找出原因和识别规律，关注产品的市场表现，不断提出改进意见，推进产品的优化迭代；</h6>
          <h6>3、负责产品的日常活动策划及商品填充、排序等，负责流量导入，对页面点击率、转化率、用户留存率、销售额等负责；</h6>
          <h6>4、协助提高频道整体流量、提高平台日活等工作的推进；</h6>
          <h6>5、独立负责部门的产品运营，挖掘和分析用户的需求、购买习惯、情感、体验，提出合理的产品需求，制定一系列完善的产品整体运营规划并执行；</h6>
          <h6>6、认真完成领导安排的工作内容。</h6>
          <br>
          <p class="gwzz">任职要求：</p>
          <h6>1、3年以上大型互联网2B运营相关岗位工作经验，有相关行业（机械后市场）工作背景者优先；</h6>
          <h6>2、熟悉大型互联网产品的市场分析，及经营分析，有项目或产品规划管理经验者优先；</h6>
          <h6>3、具备具有独立的创意性思维，极强的理解能力、较强的分析能力、逻辑思维能力、判断力、执行力及较好的报告撰写功底；</h6>
          <h6>4、能够从多维度开展创新性工作；具有较强的沟通表达能力和协调能力；</h6>
          <h6>5、强大的PPT、excel及数据分析能力</h6>
          <h6>6、有移动运营相关经验的优先</h6>
          <h6>具有独立的创意性思维，极强的理解能力、善于总结概念，思路清晰。</h6>

        </div>
      </div>

      <div :class="[mianban8]" ref="n8" v-show="xiaoshoutuandui">
        <div class="row" @click="shouqi8">
          <div class="col-md-9 xhx"><p class="zwtitle">{{txt1}}.BD销售经理</p></div>
          <div class="col-md-2 xhx"><p class="wztitle"><span><img src="../../common/images/dibiao.gif"/></span>长沙</p></div>
          <div v-if="v82" class="col-md-1 buxian"><img src="../../common/images/jt.png"/></div>
          <div v-if="v81" class="col-md-1"><img class="zhuandong" src="../../common/images/jt.png"/></div>
        </div>
        <div class="wenbenkuang">
          <p class="gwzz">岗位职责：</p>
          <h6>1、经过培训之后熟悉掌握公司业务知识和特性；</h6>
          <h6>2、负责市场调研，业务拓展及维护；</h6>
          <h6>3、提高公司业务在所负责区域的渗透率，关注结果；</h6>
          <h6>4、就当地工程机械市场行情进行分析及反馈；</h6>
          <h6>5、配合其他部门业务流工作；</h6>
          <h6>6、按公司要求完成各项指标；</h6>
          <h6>7、完成上级领导交待的其他工作；</h6>
          <br>
          <p class="gwzz">任职要求：</p>
          <h6>1、大专及以上学历，年龄在32岁以下，必须有车；</h6>
          <h6>2、性格开朗，勇于挑战，有野心、抗压能力和学习能力；</h6>
          <h6>3、良好的团队协助精神，责任心强，能够快速融入新环境；</h6>
          <h6>4、在校期间有兼职经历或担任学生干部并获得良好评价者优先录用。</h6>

        </div>
      </div>

      <div :class="[mianban9]" ref="n9" v-show="jishutuandui">
        <div class="row" @click="shouqi9">
          <div class="col-md-9 xhx"><p class="zwtitle">{{txt2}}.产品经理（2B）</p></div>
          <div class="col-md-2 xhx"><p class="wztitle"><span><img src="../../common/images/dibiao.gif"/></span>长沙</p></div>
          <div v-if="v92" class="col-md-1 buxian"><img src="../../common/images/jt.png"/></div>
          <div v-if="v91" class="col-md-1"><img class="zhuandong" src="../../common/images/jt.png"/></div>
        </div>
        <div class="wenbenkuang">
          <p class="gwzz">岗位职责：</p>
          <h6>1、对负责的2B产品方向进行需求分析，产品规划设计和定位，对该方向产品整体把控；</h6>
          <h6>2、负责产品相关的行业及需求调研、分析，撰写需求文档等； </h6>
          <h6>3、根据产品实施效果以及业务发展状况，设计产品原型，定期迭代改进产品； </h6>
          <h6>4、组织产品需求讨论、需求实施及项目推进，确保项目高质量完成；</h6>
          <h6>5、具有独立带领团队（产品、UED、研发、测试）完成既定目标，实现最终产品方案落地的能力。</h6>
          <br>
          <p class="gwzz">任职要求：</p>
          <h6>1、5年及以上互联网产品经理经验，有汽车后或大型电商相关产品经验优先；</h6>
          <h6>2、出色的产品统筹、策划、决策判断能力，熟悉产品设计工作流程；熟悉PC、移动端及小程序产品设计规范；具有较强的产品运营思路； 有较强产品架构能力者优先；</h6>
          <h6>3、较强的数据敏感性，一定的数据分析运用能力，同时有一定的文字表达能力；</h6>
          <h6>4、能够在复杂的环境下灵活把控，并推进把控合作型项目的进展; </h6>
          <h6>5、很强的逻辑思维能力，较强的跨团队沟通及解决问题能力；</h6>
          <h6>6、有大型项目从0到1经验者优先；有从1-N产品运营经验优先；</h6>

        </div>
      </div>

      <div :class="[mianban10]" ref="n10" v-show="jishutuandui">
        <div class="row" @click="shouqi10">
          <div class="col-md-9 xhx"><p class="zwtitle">{{txt3}}.产品经理（2C）</p></div>
          <div class="col-md-2 xhx"><p class="wztitle"><span><img src="../../common/images/dibiao.gif"/></span>长沙</p></div>
          <div v-if="v102" class="col-md-1 buxian"><img src="../../common/images/jt.png"/></div>
          <div v-if="v101" class="col-md-1"><img class="zhuandong" src="../../common/images/jt.png"/></div>
        </div>
        <div class="wenbenkuang">
          <p class="gwzz">岗位职责：</p>
          <h6>1、根据公司战略，基于公司业务需求，围绕2C电商平台进行产品相关工作；</h6>
          <h6>2、具备业务抽象能力，能够将上下游各环节业务场景分解、抽象成标准化的业务模型；</h6>
          <h6>3、跟进产品全生命周期，从需求调研、产品规划、设计、跟进开发、上线，到持续迭代从而满足业务快速发展； </h6>
          <h6>4、协调内外部资源和支持，驱动项目进度，主导产品落地，确保业务目标达成。</h6>
          <br>
          <p class="gwzz">任职要求：</p>
          <h6>1、有电商、汽配件零售行业相关运营经验者优先考虑，至少经历过1个完整的产品研发生命周期；</h6>
          <h6>2、出色的产品规划能力，主导产品方向和制定长期规划，并拆分可实施项目；</h6>
          <h6>3、具备强烈的责任心，能够主动进行跨部门沟通和协作，有一定的抗压能力；</h6>
          <h6>4、优秀的沟通协作能力、逻辑思维能力、资源整合能力和系统分析能力； </h6>
          <h6>5、能够独立完成用户需求调研、产品规划、功能设计，熟练使用axure、office、visio等日常工具。</h6>

        </div>
      </div>

      <div :class="[mianban11]" ref="n11" v-show="jishutuandui">
        <div class="row" @click="shouqi11">
          <div class="col-md-9 xhx"><p class="zwtitle">{{txt4}}.高级JAVA</p></div>
          <div class="col-md-2 xhx"><p class="wztitle"><span><img src="../../common/images/dibiao.gif"/></span>长沙</p></div>
          <div v-if="v112" class="col-md-1 buxian"><img src="../../common/images/jt.png"/></div>
          <div v-if="v111" class="col-md-1"><img class="zhuandong" src="../../common/images/jt.png"/></div>
        </div>
        <div class="wenbenkuang">
          <p class="gwzz">岗位职责：</p>
          <h6>1、完成软件系统代码的实现，编写代码注释和开发文档；</h6>
          <h6>2、进行系统的功能定义,程序设计；</h6>
          <h6>3、项目架构设计，数据库设计； </h6>
          <h6>4、分析并解决软件开发过程中的问题；</h6>
          <h6>5、协助制定总体技术规划；</h6>
          <h6>6、配合产品经理完成相关任务目标。</h6>
          <br>
          <p class="gwzz">任职要求：</p>
          <h6>1、一本院校计算机科学与技术、软件工程专业毕业，统招本科及以上学历，年龄在22岁—35岁之间；</h6>
          <h6>2、精通Java语言，有良好的OOP思想以及代码习惯；</h6>
          <h6>3、精通MySQL数据库，有建库经验，熟悉数据库优化；</h6>
          <h6>4、精通Spring、MyBatis等常用Java框架；</h6>
          <h6>5、有良好的数据结构以及算法基础；</h6>
          <h6>6、有单独完成项目的系统架构工作经验；</h6>
          <h6>7、熟悉微信的公众号、小程序、支付等API;</h6>
          <h6>8、有参加过ACM、OI竞赛可以直接参加面试；</h6>
          <h6>9、具备很强的解决问题能力和学习新技术的欲望。</h6>
          <h6>10、良好的团队协作，沟通技巧，对新技术敏感,具备强烈的责任心及良好的团队合作精神，能承受一定的工作压力；</h6>

        </div>
      </div>

      <div :class="[mianban12]" ref="n12" v-show="xiaoshoutuandui">
        <div class="row" @click="shouqi12">
          <div class="col-md-9 xhx"><p class="zwtitle">{{txt5}}.区域经理（益阳）</p></div>
          <div class="col-md-2 xhx"><p class="wztitle"><span><img src="../../common/images/dibiao.gif"/></span>益阳</p></div>
          <div v-if="v122" class="col-md-1 buxian"><img src="../../common/images/jt.png"/></div>
          <div v-if="v121" class="col-md-1"><img class="zhuandong" src="../../common/images/jt.png"/></div>
        </div>
        <div class="wenbenkuang">
          <p class="gwzz">岗位职责：</p>
          <h6>1、熟悉掌握公司业务知识和特性；</h6>
          <h6>2、负责市场调研，业务拓展及维护；</h6>
          <h6>3、提高公司业务在所负责区域的渗透率，关注结果；</h6>
          <h6>4、就当地工程机械市场行情进行分析及反馈；</h6>
          <h6>5、配合其他部门业务流工作；</h6>
          <h6>6、按公司要求完成各项指标；</h6>
          <h6>7、完成上级领导交待的其他工作；</h6>
          <br>
          <p class="gwzz">任职要求：</p>
          <h6>1、大专以上学历，年龄在32岁以下；</h6>
          <h6>2、性格开朗，勇于挑战，较强的商务谈判能力、抗压能力和学习能力；</h6>
          <h6>3、良好的团队协助精神，责任心强，能够快速融入新环境；</h6>
          <h6>4、熟悉当地工程机械行业，且当地有一定人脉，有1年以上销售、地推类相关工作者优先。</h6>

        </div>
      </div>

      <div :class="[mianban13]" ref="n13" v-show="xiaoshoutuandui">
        <div class="row" @click="shouqi13">
          <div class="col-md-9 xhx"><p class="zwtitle">{{txt6}}.区域经理（岳阳）</p></div>
          <div class="col-md-2 xhx"><p class="wztitle"><span><img src="../../common/images/dibiao.gif"/></span>岳阳</p></div>
          <div v-if="v132" class="col-md-1 buxian"><img src="../../common/images/jt.png"/></div>
          <div v-if="v131" class="col-md-1"><img class="zhuandong" src="../../common/images/jt.png"/></div>
        </div>
        <div class="wenbenkuang">
          <p class="gwzz">岗位职责：</p>
          <h6>1、熟悉掌握公司业务知识和特性；</h6>
          <h6>2、负责市场调研，业务拓展及维护；</h6>
          <h6>3、提高公司业务在所负责区域的渗透率，关注结果；</h6>
          <h6>4、就当地工程机械市场行情进行分析及反馈；</h6>
          <h6>5、配合其他部门业务流工作；</h6>
          <h6>6、按公司要求完成各项指标；</h6>
          <h6>7、完成上级领导交待的其他工作；</h6>
          <br>
          <p class="gwzz">任职要求：</p>
          <h6>1、大专以上学历，年龄在32岁以下；</h6>
          <h6>2、性格开朗，勇于挑战，较强的商务谈判能力、抗压能力和学习能力；</h6>
          <h6>3、良好的团队协助精神，责任心强，能够快速融入新环境；</h6>
          <h6>4、熟悉当地工程机械行业，且当地有一定人脉，有1年以上销售、地推类相关工作者优先。</h6>

        </div>
      </div>

      <div :class="[mianban14]" ref="n14" v-show="xiaoshoutuandui">
        <div class="row" @click="shouqi14">
          <div class="col-md-9 xhx"><p class="zwtitle">{{txt7}}.售后服务工程师</p></div>
          <div class="col-md-2 xhx"><p class="wztitle"><span><img src="../../common/images/dibiao.gif"/></span>长沙</p></div>
          <div v-if="v142" class="col-md-1 buxian"><img src="../../common/images/jt.png"/></div>
          <div v-if="v141" class="col-md-1"><img class="zhuandong" src="../../common/images/jt.png"/></div>
        </div>
        <div class="wenbenkuang">
          <p class="gwzz">岗位职责：</p>
          <h6>1、负责公司现有及潜在客户和平台用户的关系建立、持续性需求收集及持续性关系维护；</h6>
          <h6>2、通过公司系统工具对客户的需求提供确型、报价、技术支持等服务；</h6>
          <h6>3、通过与交易客户保持持续性关系，获取潜在客户的信息，不断增加客户资源；</h6>
          <h6>4、完成主管交代的其它任务；</h6>
          <br>
          <p class="gwzz">岗位要求：</p>
          <h6>1、专科及以上学历，年龄在35岁以下；</h6>
          <h6>2、熟悉工程机械配件起重机、挖掘机、泵车设备其中之一；</h6>
          <h6>3、在三一重工、卡特、小松等知名工程机械公司从事过相关产品售后服务工作者优先；</h6>


        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "zsns_zpzw",
      data(){
          return{
              jishutuandui:true,
              xiaoshoutuandui:true,
              yidongweizhi:1,
              activeClass:'ydt',
              errorClass:'xxdw',
              v1:true,
              v2:false,
              v21:true,
              v22:false,
              v31:true,
              v32:false,
              v31:true,
              v32:false,
              v41:true,
              v42:false,
              v51:true,
              v52:false,
              v61:true,
              v62:false,
              v71:true,
              v72:false,
            v81:true,
            v82:false,
            v91:true,
            v92:false,
            v101:true,
            v102:false,
            v111:true,
            v112:false,
            v121:true,
            v122:false,
            v131:true,
            v132:false,
            v141:true,
            v142:false,
              mianban1:'contanbg_ys',
              mianban2:'contanbg_ys',
              mianban3:'contanbg_ys',
              mianban4:'contanbg_ys',
              mianban5:'contanbg_ys',
              mianban6:'contanbg_ys',
              mianban7:'contanbg_ys',
              mianban8:'contanbg_ys',
              mianban9:'contanbg_ys',
              mianban10:'contanbg_ys',
              mianban11:'contanbg_ys',
              mianban12:'contanbg_ys',
              mianban13:'contanbg_ys',
              mianban14:'contanbg_ys',
              tab1:false,
              tab2:false,
              tab3:false,
              tab4:false,
              tab5:false,
              tab6:false,
              tab7:false,
              tab8:false,
              tab9:false,
              tab10:false,
              tab11:false,
              tab12:false,
              tab13:false,
              tab14:false,
              txt0:'8',
              txt1:'9',
              txt2:'10',
              txt3:'11',
              txt4:'12',
              txt5:'13',
              txt6:'14',
              txt7:'15',
            showshu:false,
          }
      },
      methods:{
        fun2(){
          if(this.yidongweizhi == 1){
            this.errorClass = 'zuozhong'
            this.yidongweizhi = 2
            this.$refs.p2.style.color = 'white'
            // this.$refs.p2.style.fontWeight = 'bold'
            this.$refs.p1.style.color = '#888888'
            // this.$refs.p1.style.fontWeight = 'normal'
            this.$refs.p3.style.color = '#888888'
            // this.$refs.p3.style.fontWeight = 'normal'
            this.jishutuandui = false
            this.xiaoshoutuandui= true
            this.txt1 = '7'
            this.txt5 = '8'
            this.txt6 = '9'
            this.txt7 = '10'
          }
          if(this.yidongweizhi == 3){
            this.errorClass = 'youzhong'
            this.yidongweizhi = 2
            this.$refs.p2.style.color = 'white'
            // this.$refs.p2.style.fontWeight = 'bold'
            this.$refs.p1.style.color = '#888888'
           // this.$refs.p1.style.fontWeight = 'normal'
            this.$refs.p3.style.color = '#888888'
           // this.$refs.p3.style.fontWeight = 'normal'
            this.jishutuandui = false
            this.xiaoshoutuandui= true
            this.txt1 = '7'
            this.txt5 = '8'
            this.txt6 = '9'
            this.txt7 = '10'
          }

        },
        fun1(){
          if(this.yidongweizhi == 2){
            this.errorClass = 'zhongzuo'
            this.yidongweizhi = 1
            this.$refs.p1.style.color = 'white'
           // this.$refs.p1.style.fontWeight = 'bold'//normal
            this.$refs.p2.style.color = '#888888'
           // this.$refs.p2.style.fontWeight = 'normal'
            this.$refs.p3.style.color = '#888888'
            //this.$refs.p3.style.fontWeight = 'normal'
            this.jishutuandui = true
            this.xiaoshoutuandui= true
            this.txt0 = '8'
            this.txt1 = '9'
            this.txt2 = '10'
            this.txt3 = '11'
            this.txt4 = '12'
            this.txt5 = '13'
            this.txt6 = '14'
            this.txt7 = '15'
          }

        },
        fun3(){
          if(this.yidongweizhi == 2){
            this.errorClass = 'zhongyou'
            this.yidongweizhi = 3
            this.$refs.p3.style.color = 'white'
           // this.$refs.p3.style.fontWeight = 'bold'
            this.$refs.p1.style.color = '#888888'
            //this.$refs.p1.style.fontWeight = 'normal'
            this.$refs.p2.style.color = '#888888'
           // this.$refs.p2.style.fontWeight = 'normal'
            this.jishutuandui = true
            this.xiaoshoutuandui= false
            this.txt0 = '1'
            // this.txt1 = '2'
            this.txt2 = '2'
            this.txt3 = '3'
            this.txt4 = '4'
            // this.txt5 = '6'
            // this.txt6 = '7'
            // this.txt7 = '8'
          }
        },
        shouqi(){
            if(this.tab1 == false){
              this.mianban1 = 'contanbg'
              this.tab1 = true
              this.v1 = false
              this.v2 = true
            }else if(this.tab1 == true){
              this.mianban1 = 'contanbg2'
              this.tab1 = false
              this.v1 = true
              this.v2 = false
            }
        },
        shouqi2(){
          if(this.tab2 == false){
            this.mianban2 = 'contanbg_ts'
            this.tab2 = true
            this.v21 = false
            this.v22 = true
          }else
          if(this.tab2 == true){
            this.mianban2 = 'contanbg2_ts'
            this.tab2 = false
            this.v21 = true
            this.v22 = false
          }
      },
        shouqi3(){
          if(this.tab3 == false){
            this.mianban3 = 'contanbg_jxgw3'
            this.tab3 = true
            this.v31 = false
            this.v32 = true
          }else
          if(this.tab3 == true){
            this.mianban3 = 'contanbg_jxgw4'
            this.tab3 = false
            this.v31 = true
            this.v32 = false
          }
        },
        shouqi4(){
          if(this.tab4 == false){
            this.mianban4 = 'contanbg_jxgw3'
            this.tab4 = true
            this.v41 = false
            this.v42 = true
          }else
          if(this.tab4 == true){
            this.mianban4 = 'contanbg_jxgw4'
            this.tab4 = false
            this.v41 = true
            this.v42 = false
          }
        },
        shouqi5(){
          if(this.tab5 == false){
            this.mianban5 = 'contanbg_jxgw3'
            this.tab5 = true
            this.v51 = false
            this.v52 = true
          }else
          if(this.tab5 == true){
            this.mianban5 = 'contanbg_jxgw4'
            this.tab5 = false
            this.v51 = true
            this.v52 = false
          }
        },
        shouqi6(){
          if(this.tab6 == false){
            this.mianban6 = 'contanbg_jxgw3'
            this.tab6 = true
            this.v61 = false
            this.v62 = true
          }else
          if(this.tab6 == true){
            this.mianban6 = 'contanbg_jxgw4'
            this.tab6 = false
            this.v61 = true
            this.v62 = false
          }
        },
        shouqi7(){
          if(this.tab7 == false){
            this.mianban7 = 'contanbg_jxgw3'
            this.tab7 = true
            this.v71 = false
            this.v72 = true
          }else
          if(this.tab7 == true){
            this.mianban7 = 'contanbg_jxgw4'
            this.tab7 = false
            this.v71 = true
            this.v72 = false
          }
        },
        shouqi8(){
          if(this.tab8 == false){
            this.mianban8 = 'contanbg_jxgw3'
            this.tab8 = true
            this.v81 = false
            this.v82 = true
          }else
          if(this.tab8 == true){
            this.mianban8 = 'contanbg_jxgw4'
            this.tab8 = false
            this.v81 = true
            this.v82 = false
          }
        },
        shouqi9(){
          if(this.tab9 == false){
            this.mianban9 = 'contanbg_jxgw_ts9'
            this.tab9 = true
            this.v91 = false
            this.v92 = true
          }else
          if(this.tab9 == true){
            this.mianban9 = 'contanbg_jxgw_ts9g'
            this.tab9 = false
            this.v91 = true
            this.v92 = false
          }
        },
        shouqi10(){
          if(this.tab10 == false){
            this.mianban10 = 'contanbg_jxgw_ts10'
            this.tab10 = true
            this.v101 = false
            this.v102 = true
          }else
          if(this.tab10 == true){
            this.mianban10 = 'contanbg_jxgw_ts10g'
            this.tab10 = false
            this.v101 = true
            this.v102 = false
          }
        },
        shouqi11(){
          if(this.tab11 == false){
            this.mianban11 = 'contanbg_jxgw'
            this.tab11 = true
            this.v111 = false
            this.v112 = true
          }else
          if(this.tab11 == true){
            this.mianban11 = 'contanbg_jxgw2'
            this.tab11 = false
            this.v111 = true
            this.v112 = false
          }
        },
        shouqi12(){
          if(this.tab12 == false){
            this.mianban12 = 'contanbg_jxgw3'
            this.tab12 = true
            this.v121 = false
            this.v122 = true
          }else
          if(this.tab12 == true){
            this.mianban12 = 'contanbg_jxgw4'
            this.tab12 = false
            this.v121 = true
            this.v122 = false
          }
        },
        shouqi13(){
          if(this.tab13 == false){
            this.mianban13 = 'contanbg_jxgw3'
            this.tab13 = true
            this.v131 = false
            this.v132 = true
          }else
          if(this.tab13 == true){
            this.mianban13 = 'contanbg_jxgw4'
            this.tab13 = false
            this.v131 = true
            this.v132 = false
          }
        },
        shouqi14(){
          if(this.tab14 == false){
            this.mianban14 = 'contanbg_jxgw_ts14'
            this.tab14 = true
            this.v141 = false
            this.v142 = true
          }else
          if(this.tab14 == true){
            this.mianban14 = 'contanbg_jxgw_ts14g'
            this.tab14 = false
            this.v141 = true
            this.v142 = false
          }
        },

    },
    mounted() {
      this.$refs.p1.style.color = 'white'
      //this.$refs.p1.style.fontWeight = 'bold'//normal
    }
    }
</script>

<style>
  h6{
    font-size: 0.8rem;
  }
  .gwzz{
    font-size: 1.1rem;
    font-family: zxfont;
  }
  .wenbenkuang{
    width: 100%;
    padding-top: 1rem;
  }
.zhuandong{
  transform:rotate(180deg);
}
.xhx{
  border-bottom: #eeeeee dashed 0.08rem;
}
  .zsns_zpzw{
    margin: 0 auto;
    letter-spacing: 0.2rem;
    text-align: center;
    font-size: 1.6rem;
    position: relative;
    opacity: 0;
    animation:zsns_zpzw 2s;
    animation-fill-mode: forwards;
    animation-delay:.6s;
    font-family: zxfont;
  }
  @keyframes zsns_zpzw
  {
    from {top:-1rem;opacity: 0}
    to {top:0rem;opacity: 1}
  }
  @-webkit-keyframes zsns_zpzw /*Safari and Chrome*/
  {
    from {top:-1rem;opacity: 0}
    to {top:0rem;opacity: 1}
  }
  .zsns_fbt{
    color: #888888;
    text-align: center;
    position: relative;
    opacity: 0;
    animation:zsns_fbt 2s;
    animation-fill-mode: forwards;
    animation-delay:.8s;
  }
  @keyframes zsns_fbt
  {
    from {top:1rem;opacity: 0}
    to {top:0rem;opacity: 1}
  }
  @-webkit-keyframes zsns_fbt /*Safari and Chrome*/
  {
    from {top:1rem;opacity: 0}
    to {top:0rem;opacity: 1}
  }
  .yjx{
    background-color: #f0f4f7;
    border: 0.1rem solid #f0f4f7;
    border-radius: 0.4rem;
    position: relative;
    margin-right: 0rem;
    margin-left: 0rem;
    font-family: zxfont;
  }
  .ydt{
    background: -webkit-linear-gradient(#26b0b8, #28c2a9); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#26b0b8, #28c2a9); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#26b0b8, #28c2a9); /* Firefox 3.6 - 15 */
    background: linear-gradient(#26b0b8, #28c2a9); /* 标准的语法（必须放在最后） */
    border-radius: 0.4rem;
    padding-bottom: 2.5rem;
  }
  .xxdw{
    position: absolute;
    width: 30%;
    left: 1%;
    top: 0.5rem;
    padding-top: 2%;
    padding-bottom: 2%;
  }

  .zuozhong{
    position: absolute;
    width: 30%;

    top: 0.5rem;
    padding-top: 2%;
    padding-bottom: 2%;
    animation:zuozhong 0.5s;
    animation-fill-mode: forwards;
  }
  .zhongyou{
    position: absolute;
    width: 30%;

    top: 0.5rem;
    padding-top: 2%;
    padding-bottom: 2%;
    animation:zhongyou 0.5s;
    animation-fill-mode: forwards;
  }
  .youzhong{
    position: absolute;
    width: 30%;

    top: 0.5rem;
    padding-top: 2%;
    padding-bottom: 2%;
    animation:youzhong 0.5s;
    animation-fill-mode: forwards;
  }
  .zhongzuo{
    position: absolute;
    width: 30%;

    top: 0.5rem;
    padding-top: 2%;
    padding-bottom: 2%;
    animation:zhongzuo 0.5s;
    animation-fill-mode: forwards;
  }
  .diwz{

  }
  .diwz p {
    text-align: center;
    /*color: #888888;*/
    font-size: 1.5rem;
    margin-top: 3%;
    font-weight: lighter;
  }
  @keyframes zsns_fbt
  {
    from {top:1rem;opacity: 0}
    to {top:0rem;opacity: 1}
  }
  @-webkit-keyframes zsns_fbt /*Safari and Chrome*/
  {
    from {top:1rem;opacity: 0}
    to {top:0rem;opacity: 1}
  }
  /*------------------------------------------------------------------------*/
  @keyframes zuozhong
  {
    from {left:1%}
    to {left:35%}
  }
  @-webkit-keyframes zuozhong /*Safari and Chrome*/
  {
    from {left:1%}
    to {left:35%}
  }

  @keyframes zhongyou
  {
    from {left:35%}
    to {left:68%}
  }
  @-webkit-keyframes zhongyou /*Safari and Chrome*/
  {
    from {left:35%}
    to {left:68%}
  }

  @keyframes youzhong
  {
    from {left:60%}
    to {left:35%}
  }
  @-webkit-keyframes youzhong /*Safari and Chrome*/
  {
    from {left:60%}
    to {left:35%}
  }
  @keyframes zhongzuo
  {
    from {left:35%}
    to {left:1%}
  }
  @-webkit-keyframes zhongzuo /*Safari and Chrome*/
  {
    from {left:35%}
    to {left:1%}
  }
  .contanbg_ys{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    height: 3.8rem;
  }
  .contanbg_ys_xz{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    height: 4rem;
  }
  .contanbg{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    animation:bianhua 0.5s;
    animation-fill-mode: forwards;
  }
  .contanbg_ts{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    animation:bianhua_ts 0.5s;
    animation-fill-mode: forwards;
  }
  .contanbg_jxgw{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    animation:contanbg_jxgw 0.5s;
    animation-fill-mode: forwards;
  }
  .contanbg_jxgw_ts9{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    animation:contanbg_jxgw_ts9 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes contanbg_jxgw_ts9
  {
    from {height:3.8rem;}
    to {height:28rem}
  }
  @-webkit-keyframes contanbg_jxgw_ts9 /*Safari and Chrome*/
  {
    from {height:3.8rem;}
    to {height:28rem}
  }
  .contanbg_jxgw_ts10{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    animation:contanbg_jxgw_ts10 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes contanbg_jxgw_ts10
  {
    from {height:3.8rem;}
    to {height:25.5rem}
  }
  @-webkit-keyframes contanbg_jxgw_ts10 /*Safari and Chrome*/
  {
    from {height:3.8rem;}
    to {height:25.5rem}
  }
  .contanbg_jxgw_ts14{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    animation:contanbg_jxgw_ts14 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes contanbg_jxgw_ts14
  {
    from {height:3.8rem;}
    to {height:22.5rem}
  }
  @-webkit-keyframes contanbg_jxgw_ts14 /*Safari and Chrome*/
  {
    from {height:3.8rem;}
    to {height:22.5rem}
  }
  .contanbg_jxgw_ts{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    animation:contanbg_jxgw_ts 0.5s;
    animation-fill-mode: forwards;
  }
  .contanbg_jxgw3{
     background-color: #f8fbfd;
     padding-top: 1rem;
     margin-top: 1.5rem;
     padding-left: 2.5rem;
     overflow: hidden;
     animation:contanbg_jxgw3 0.5s;
     animation-fill-mode: forwards;
   }
  .contanbg_jxgw5{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    animation:contanbg_jxgw5 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes contanbg_jxgw
  {
    from {height:3.8rem;}
    to {height:35rem}
  }
  @-webkit-keyframes contanbg_jxgw /*Safari and Chrome*/
  {
    from {height:3.8rem;}
    to {height:35rem}
  }

  @keyframes contanbg_jxgw3
  {
    from {height:3.8rem}
    to {height:29rem}
  }
  @-webkit-keyframes contanbg_jxgw3 /*Safari and Chrome*/
  {
    from {height:3.8rem}
    to {height:29rem}
  }
  @keyframes contanbg_jxgw5
  {
    from {height:3.8rem;}
    to {height:39rem}
  }
  @-webkit-keyframes contanbg_jxgw5 /*Safari and Chrome*/
  {
    from {height:3.8rem;}
    to {height:39rem}
  }

  @keyframes bianhua
   {
     from {height:3.8rem;}
     to {height:25rem}
   }
  @keyframes bianhua_ts
  {
    from {height:3.8rem;}
    to {height:26rem}
  }
  @-webkit-keyframes bianhua /*Safari and Chrome*/
  {
    from {height:3.8rem;}
    to {height:25rem}
  }
  .contanbg2{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    animation:contanbg_jxgw2 0.5s;
    animation-fill-mode: forwards;
  }
  .contanbg2_ts{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    animation:contanbg_jxgw2_ts 0.5s;
    animation-fill-mode: forwards;
  }
  .contanbg_jxgw2{
     background-color: #f8fbfd;
     padding-top: 1rem;
     margin-top: 1.5rem;
     padding-left: 2.5rem;
     overflow: hidden;
     animation:contanbg_jxgw2 0.5s;
     animation-fill-mode: forwards;
   }
  .contanbg_jxgw_ts9g{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    animation:contanbg_jxgw_ts9g 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes contanbg_jxgw_ts9g
  {
    from {height:28rem}
    to {height:3.8rem}
  }
  @-webkit-keyframes contanbg_jxgw_ts9g /*Safari and Chrome*/
  {
    from {height:28rem}
    to {height:3.8rem}
  }
  .contanbg_jxgw_ts10g{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    animation:contanbg_jxgw_ts10g 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes contanbg_jxgw_ts10g
  {
    from {height:26rem}
    to {height:3.8rem}
  }
  @-webkit-keyframes contanbg_jxgw_ts10g /*Safari and Chrome*/
  {
    from {height:26rem}
    to {height:3.8rem}
  }
  .contanbg_jxgw_ts14g{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    animation:contanbg_jxgw_ts14g 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes contanbg_jxgw_ts14g
  {
    from {height:22.5rem}
    to {height:3.8rem}
  }
  @-webkit-keyframes contanbg_jxgw_ts14g /*Safari and Chrome*/
  {
    from {height:22.5rem}
    to {height:3.8rem}
  }
  .contanbg_jxgw2_ts{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    animation:contanbg_jxgw2_ts 0.5s;
    animation-fill-mode: forwards;
  }
  .contanbg4{
    background-color: #f8fbfd;
    padding-top: 1rem;
    margin-top: 1.5rem;
    padding-left: 2.5rem;
    overflow: hidden;
    animation:contanbg_jxgw4 0.5s;
    animation-fill-mode: forwards;
  }
  .contanbg_jxgw4{
     background-color: #f8fbfd;
     padding-top: 1rem;
     margin-top: 1.5rem;
     padding-left: 2.5rem;
     overflow: hidden;
     animation:contanbg_jxgw4 0.5s;
     animation-fill-mode: forwards;
   }
  .contanbg_jxgw6{
      background-color: #f8fbfd;
      padding-top: 1rem;
      margin-top: 1.5rem;
      padding-left: 2.5rem;
      overflow: hidden;
      animation:contanbg_jxgw6 0.5s;
      animation-fill-mode: forwards;
    }
  @keyframes bianhua2
  {
    from {height:20rem}
    to {height:3.8rem}
  }
  @-webkit-keyframes bianhua2 /*Safari and Chrome*/
  {
    from {height:20rem}
    to {height:3.8rem}
  }
  @keyframes contanbg_jxgw2
  {
    from {height:35rem}
    to {height:3.8rem}
  }
  @keyframes contanbg_jxgw2_ts
  {
    from {height:35rem}
    to {height:3.9rem}
  }
  @-webkit-keyframes contanbg_jxgw2 /*Safari and Chrome*/
  {
    from {height:35rem}
    to {height:3.8rem}
  }
  @-webkit-keyframes contanbg_jxgw2_ts /*Safari and Chrome*/
  {
    from {height:35rem}
    to {height:3.9rem}
  }

  @keyframes contanbg_jxgw4
  {
    from {height:29rem}
    to {height:3.8rem}
  }
  @-webkit-keyframes contanbg_jxgw4 /*Safari and Chrome*/
  {
    from {height:29rem}
    to {height:3.8rem}
  }
  @keyframes contanbg_jxgw6
  {
    from {height:39rem}
    to {height:3.9rem}
  }
  @-webkit-keyframes contanbg_jxgw6 /*Safari and Chrome*/
  {
    from {height:39rem}
    to {height:3.9rem}
  }

  .zwtitle{
    color: #28c2a9;
    font-size: 1.2rem;
    font-family: zxfont;
  }
  .wztitle{
    text-align: right;
    color: #cccccc;
  }
  .row div p span{
    margin-right: 5px;
  }
.buxian {
  background: url("../../common/images/xxxxxx.gif") no-repeat bottom left;
}
  .cptyline-zp{
    width: 5rem;
    height: 2px;
    background-color: #01b053;
    margin: 1rem auto;
  }
</style>
