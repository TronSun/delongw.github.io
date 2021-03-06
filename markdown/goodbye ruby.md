# 再见Ruby
> 2016-03-08

``Ruby不是宝石、不是美女,是简单到任性的一种态度``

Ruby是一种计算机编程语言,出自[松本行弘](http://baike.baidu.com/link?url=dVtjpGXRcrWUGMBd1tyrCmGv2w_vY7TJjOp6G7duhteGOdC0fBTG0Cti0mHi3mmgFbW_Hp9TeCYyavARlPUrOa)之手. 作为唯一一名设计出世界流行的编程语言的亚洲人,松本行弘在[我的程序世界](https://book.douban.com/subject/6756090/)中介绍自己和Ruby时显得十分谦虚. Ruby的设计不是为了解决某种问题或践行某个理论,更没有行业巨头的背景,因此Ruby的语法十分替奋战在一线的程序员着想：它灵活多变,化繁为简,极尽力量解决编程中的痛苦. 松本行弘甚至将“快乐的编程”作为设计Ruby语言的最重要的标准. 

### 我为什么放弃Ruby

计算机软件行业中编程语言的重要性首屈一指. [Tiobe](http://www.tiobe.com/tiobe_index)中常用编程语言有50种,选择适合的语言已经很不容易,还容易遇到软件巨头的私人定制标准（各种版本的C++）,甚至专利争夺（Oracle诉Google Java侵权）,何况中国的程序员本来没有太多的选择权（行业水平、薪资、GFW限制等等）. 既然喜爱,既然坚持,编程就应该选择适合的语言. 

#### 2014年春节,开始学习Ruby

那时我在做Django开发,用Python. Python和Ruby经常被拿来比较,当时也想学一下炙手可热的Ruby. 碰巧接触到用Ruby的硬件创业公司,深入了解后特别有兴趣,就加入公司. 开始的时候负责Web前端,之后逐渐成为Rails的全栈开发. 

#### 2015年秋,萌生放弃Ruby的想法

随着业务的扩张,Rails项目慢慢变大. 这段时间形成了Rails为核心,衍生周边项目的结构. 开发人员也在增加,这一时期的主要问题是业务方向多变导致开发任务的不确定,这种多变的特点体现在为硬件提供的服务上,公司产品是硬件,软件主要为硬件提供服务,并要尽量通过软件来解决硬件上一些固有的问题. 创业公司难以吸引Ruby人才,所以从公司内部征集了有兴趣的软件工程师来开发Ruby,这也造成了项目质量不高,冗余代码多,测试不足的情况. 糟糕的代码慢慢积累,服务器的各项监控指标也逐步增加. 这时感觉就像驼稻草的骆驼,稻草一根一根在增加,负重也越来越明显. 当我尝试重构项目时,遇到的最大的问题基本都来自于Ruby语言的滥用以及没有规范的结构,最终,尝试均以失败告终. 

#### 2016年春节,决定放弃Ruby

春节刚过. 与公司业务抗争未果后,我重新审视项目现状,得到的结论是：目前技术选型短期内不可能改变,长期看也会作为公司主要技术一直存在. 面对现实问题最终选择放弃抵抗,放弃Ruby. 下面列出了现在Rails项目中遇到的问题

Ruby开发中的问题

	* 没有资深技术领导
	* 没有深入学习Rails框架
	* “新手代码”没有及时清理
	* 并非每个开发都是“全栈工程师”
	* 使用过时的技术
	* 期待服务自己运行良好
	* 扬汤止沸而非釜底抽薪
	* 各自为营没有统一步调
	* 元编程 还是 函数编程


资深技术领导

能够在关键技术选择中权衡业务与难度后做出具有洞见的选择的人. 领导人才的缺失让我们在Ruby开发中走了不少弯路,需要自己不断摸索甚至重来,有的代码明知实现的不好,但时间紧任务重,也只能将就（例如EventMachine的使用）. 另一个问题是,不能准确的分辨第三方gem的质量和适合程度,那么也就不确定使用它容易出现的问题（devise库的使用）. 很多第三方代码中“明眼人”一看便知的错误,我们自己却误以为它们“很正常”


没有深入学习Rails框架

Ruby On Rails框架不可否认的成功和先进,但它不是银弹. 项目中遇到的问题主要有两个,一个是Rails本身的难度,另一个是公司并没有鼓励系统的学习Rails(软件行业的通病). 先说Rails的学习难度,Rails的“约定大于配置”以及大包大揽的“全栈框架”特点决定了它的学习难度. 约定大于配置: 如果你想使用某个类,不用声明引入,直接使用即可,如果想编写公共方法,不用全局声明,放到指定目录即可. 总之,文档写了这么做可以,照着做就行了,至于为什么这样可以,文档没有写,开发人员自己也不知道. 这样的好处是上手快,坏处是自定义程度低,真正拿来做项目时不得不重新翻看源码,而框架本身提供的便捷性很多时候却成了鸡肋. 第二个问题, 国内几乎没有公司能够有效的鼓励开发人员深入学习, 但这么多程序员依旧前赴后继的投身编码, 可能是靠着一种"自我修养"的精神吧.


不及时清理的新手代码

什么事新手代码？刚开始学习Ruby,是不是可以拿个小功能练练手,然后在左手文档右手demo的情况下写完了这个功能. 新功能可以用了,发布出去了,一切看似正常,但毕竟刚开始使用Ruby,难免有些使用错误,可是既然它还能工作,就没有人愿意优化它. 现在的软件行业流行一句话：程序员比电脑更贵,开发效率比执行效率重要,低效的代码靠堆硬件就可以解决. 抱着这样的想法,新手Ruby程序员心安理得的写出低效的代码,但实际情况是：公司现有项目中堆机器的难度比优化代码难度更大. 对于陈旧代码,虽然存在一个review机制,可已名存实亡,大家都不是高手,review有用吗？新业务不断增加,review有时间吗？代码耦合度高,测试不足,review敢改吗？看不明白的代码越来越多,review还看得下去吗?


并非每个开发都是全栈工程师

全栈工程师如同一个上得厅堂下得厨房的女友,人才难觅. 偏偏Rails框架是如此大包大揽的框架,极尽所能简化开发步骤,开发人员掌握每个步骤后面的逻辑才能灵活运用. 而Web开发“背后逻辑”有如此之多,Rails屏蔽了它们,不论是否真的应该这样做.这对程序员是一个考验,更加艰难的考验是：Rails包揽了前后所有功能,即使只修改了一段CSS代码,也需要了解服务的部署过程,否则当CSS出错时就无法排查. 


使用过时的技术

软件技术的更新迭代速度非常快,新技术层出不穷.针对TCP服务这种要求高并发的服务,出现了事件驱动的框架:EventMachine. 虽然EventMachine十分优秀,但已停止更新,bug也不再修复,并且是单线程下的事件驱动. 目前公司的底层TCP服务就是用EventMachine开发的,因为TCP服务的业务模型比较稳定,不需要更新,这个项目也就没有人继续更新维护了,当上层需要扩展底层消息时,面临的问题就是要靠现有的数据进行逻辑上的设计,因为TCP层服务没有修改,而上层没有强烈要求的时候,TCP也不会做出任何. 这造成了现有业务功能扩展的一个阻碍. 


期待服务自己运行良好

工程学中的名言：只要它还能正常使用,就不要修改它. 软件早已被归入“工程”之列,但是软件本身易变的特点却十分突出,同一段代码在这里能正常运行,换一台电脑就回出错,同一个服务今天能运行良好,明天就可能异常退出. 在缺少运维的情况下,开发中倾向当服务测试正常时就认为它是正常的. 缺少对服务运行时的监控和注意力,直到某一时刻,问题爆发之后才紧急补救. 开发环境下的测试不能替代生产环境的测试,目前看起来良好不能表示以后也一直良好,应该分出更多的注意力在生产环境的稳定性上,而不是更多的新功能上. 


扬汤止沸而非釜底抽薪

魏文王之问扁鹊,曰：子昆弟三人其孰最善为医？扁鹊曰：长兄於病视神,未有形而除之,故名不出於家. 中兄治病,其在毫毛,故名不出於闾. 若扁鹊者,鑱血脉,投毒药,副肌肤,闲而名出闻於诸侯 -----《鶡冠子·卷下·世贤第十六》
软件有修不完的bug,因为新功能在不断增加,怎么能减少问题出现的频率和严重性呢？应防患于未然,同样的问题其它公司可能早已遇到,早已解决过,我们应该哪来借鉴,在问题没有出现的时候就做好预防. 现在普遍的现象是,头痛医头,脚痛医脚,而根本问题不在表面,所以应该从问题根源入手彻底解决


各自为营没有统一步调

开发人员在增加,功能在变多,那么在新功能的开发中就容易出现重复功能和工作量. 同一个问题会有不止一种解决方案,那么不同的开发人员如何协调这种功能呢？经常出现一个开发默默的做完之后发现另一个同事再做同样的事情,而不同的方案之间各有优点,用被用在了各自开发的功能中,不能只保留一份,非常不利于以后的代码维护. 


元编程 还是 函数编程

Ruby是非常适合元编程的语言,Rails项目中也充斥这各种元编程思想,但是元编程适合当前的项目吗？适合当前服务吗？易于维护和调试吗？


### 结尾

Ruby的问题,Rails的问题在其它编程语言或项目中一样存在,既然不是个体问题,为什么放弃Ruby?

是人的问题

自己更喜欢灵活的语言,而不是元编程,JavaScript就很灵活,但是元编程用的不多(新手除外).Ruby中大量的元编程让人倍感头痛,难以调试追踪,难以摸清作者思路.如果元编程混合上算法,唉~

还是人的问题

社区的力量在一门语言的发展中举足轻重,Ruby的社区活跃,先进,敢于尝试,甚至带动了其它语言的发展.但同时Ruby社区小,圈子窄,Ruby人才的招聘一直是公司的老大难问题.并且习惯Ruby和Rails的人同样有Ruby或Rails的思维: 自定义的规范,小众的逻辑,滥用DSL,难以形成多人协作. 