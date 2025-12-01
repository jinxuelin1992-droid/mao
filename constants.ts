import { Quote } from './types';

export const APP_NAME = "毛有烦恼";
export const DEFAULT_BG_COLOR = "#de2910"; // China Red
export const DEFAULT_TEXT_COLOR = "#ffde00"; // Yellow
export const CITATION_COLOR = "#ffffff"; // White

// 精选核心语录库 (包含乐观主义、工作方法、学习态度、革命意志)
const UNIQUE_QUOTES: Omit<Quote, 'id'>[] = [
  // --- 乐观主义与意志 ---
  { content: "前途是光明的，道路是曲折的。", source: "《关于重庆谈判》", year: "1945年10月" },
  { content: "世上无难事，只要肯登攀。", source: "《水调歌头·重上井冈山》", year: "1965年5月" },
  { content: "不管风吹浪打，胜似闲庭信步。", source: "《水调歌头·游泳》", year: "1956年6月" },
  { content: "牢骚太盛防肠断，风物长宜放眼量。", source: "《七律·和柳亚子先生》", year: "1949年4月" },
  { content: "自信人生二百年，会当水击三千里。", source: "《七古·残句》", year: "1916年" },
  { content: "一万年太久，只争朝夕。", source: "《满江红·和郭沫若同志》", year: "1963年1月" },
  { content: "雄关漫道真如铁，而今迈步从头越。", source: "《忆秦娥·娄山关》", year: "1935年2月" },
  { content: "暮色苍茫看劲松，乱云飞渡仍从容。", source: "《七绝·为李进同志题所摄庐山仙人洞照》", year: "1961年9月" },
  { content: "待到山花烂漫时，她在丛中笑。", source: "《卜算子·咏梅》", year: "1961年12月" },
  { content: "独有英雄驱虎豹，更无豪杰怕熊罴。", source: "《七律·冬云》", year: "1962年12月" },
  { content: "为有牺牲多壮志，敢教日月换新天。", source: "《七律·到韶山》", year: "1959年6月" },
  { content: "红军不怕远征难，万水千山只等闲。", source: "《七律·长征》", year: "1935年10月" },
  { content: "不到长城非好汉。", source: "《清平乐·六盘山》", year: "1935年10月" },
  { content: "可上九天揽月，可下五洋捉鳖，谈笑凯歌还。", source: "《水调歌头·重上井冈山》", year: "1965年5月" },
  { content: "我们的同志在困难的时候，要看到成绩，要看到光明，要提高我们的勇气。", source: "《为人民服务》", year: "1944年9月" },
  { content: "彻底的唯物主义者是无所畏惧的。", source: "《在中国共产党全国宣传工作会议上的讲话》", year: "1957年3月" },
  { content: "人是要有一点精神的。", source: "《八届二中全会讲话》", year: "1956年11月" },
  { content: "星星之火，可以燎原。", source: "《星星之火，可以燎原》", year: "1930年1月" },
  { content: "俱往矣，数风流人物，还看今朝。", source: "《沁园春·雪》", year: "1936年2月" },
  { content: "江山如此多娇，引无数英雄竞折腰。", source: "《沁园春·雪》", year: "1936年2月" },
  { content: "踏遍青山人未老，风景这边独好。", source: "《清平乐·会昌》", year: "1934年" },
  
  // --- 工作方法与思想 ---
  { content: "世界上怕就怕“认真”二字，共产党就最讲认真。", source: "《在莫斯科会见留学生时的谈话》", year: "1957年11月" },
  { content: "没有调查，没有发言权。", source: "《反对本本主义》", year: "1930年5月" },
  { content: "你要知道梨子的滋味，你就得变革梨子，亲口吃一吃。", source: "《实践论》", year: "1937年7月" },
  { content: "情况是在不断地变化，要使自己的思想适应新的情况，就得学习。", source: "《在中国共产党全国宣传工作会议上的讲话》", year: "1957年3月" },
  { content: "感觉到了的东西，我们不能立刻理解它，只有理解了的东西才更深刻地感觉它。", source: "《实践论》", year: "1937年7月" },
  { content: "凡是敌人反对的，我们就要拥护；凡是敌人拥护的，我们就要反对。", source: "《和中央社、扫荡报、新民报三记者的谈话》", year: "1939年9月" },
  { content: "战略上藐视敌人，战术上重视敌人。", source: "《关于帝国主义和一切反动派是不是真老虎的问题》", year: "1958年12月" },
  { content: "许多事，欲速则不达。", source: "《文化工作中的统一战线》", year: "1944年10月" },
  { content: "扫帚不到，灰尘照例不会自己跑掉。", source: "《抗日战争胜利后的时局和我们的方针》", year: "1945年8月" },
  { content: "虚心使人进步，骄傲使人落后。", source: "《八大开幕词》", year: "1956年9月" },
  { content: "放下包袱，开动机器。", source: "《学习和时局》", year: "1944年4月" },
  { content: "自己动手，丰衣足食。", source: "《生产运动》", year: "1939年2月" },
  { content: "我们不但善于破坏一个旧世界，我们还将善于建设一个新世界。", source: "《七届二中全会报告》", year: "1949年3月" },
  { content: "没有什么事物是不包含矛盾的，没有矛盾就没有世界。", source: "《矛盾论》", year: "1937年8月" },
  { content: "一张白纸，没有负担，好写最新最美的文字，好画最新最美的画图。", source: "《介绍一个合作社》", year: "1958年4月" },
  { content: "从群众中来，到群众中去。", source: "《关于领导方法的若干问题》", year: "1943年6月" },
  { content: "群众是真正的英雄，而我们自己则往往是幼稚可笑的。", source: "《“农村调查”的序言和跋》", year: "1941年" },
  { content: "不解决桥或船的问题，过河就是一句空话。", source: "《关心群众生活，注意工作方法》", year: "1934年1月" },
  { content: "统筹兼顾，适当安排。", source: "《关于正确处理人民内部矛盾的问题》", year: "1957年2月" },
  { content: "惩前毖后，治病救人。", source: "《整顿党的作风》", year: "1942年2月" },
  { content: "知无不言，言无不尽。", source: "《一九四五年任务》", year: "1945年" },
  { content: "言者无罪，闻者足戒。", source: "《一九四五年任务》", year: "1945年" },
  { content: "政策和策略是党的生命。", source: "《关于情况的通报》", year: "1948年3月" },
  { content: "真理的标准只能是社会的实践。", source: "《实践论》", year: "1937年7月" },
  { content: "在战略上要以一当十，在战术上要以十当一。", source: "《中国革命战争的战略问题》", year: "1936年12月" },
  { content: "集中优势兵力，各个歼灭敌人。", source: "《集中优势兵力，各个歼灭敌人》", year: "1946年9月" },
  
  // --- 青年与学习 ---
  { content: "好好学习，天天向上。", source: "《为“小先生”题词》", year: "1951年" },
  { content: "世界是你们的，也是我们的，但是归根结底是你们的。", source: "《在莫斯科会见我国留学生和实习生时的谈话》", year: "1957年11月" },
  { content: "你们青年人朝气蓬勃，正在兴旺时期，好像早晨八九点钟的太阳。", source: "《在莫斯科会见我国留学生和实习生时的谈话》", year: "1957年11月" },
  { content: "学习的敌人是自己的满足，要认真学习一点东西，必须从不自满开始。", source: "《中国共产党在民族战争中的地位》", year: "1938年10月" },
  { content: "饭可以一日不吃，觉可以一日不睡，书不可一日不读。", source: "《对身边工作人员的谈话》", year: "1948年" },
  { content: "孩儿立志出乡关，学不成名誓不还。", source: "《七绝·改诗赠父亲》", year: "1910年" },
  { content: "文明其精神，野蛮其体魄。", source: "《体育之研究》", year: "1917年4月" },
  { content: "身体是革命的本钱。", source: "《关于体育工作的谈话》", year: "1952年" },
  
  // --- 其他 ---
  { content: "人不犯我，我不犯人；人若犯我，我必犯人。", source: "《和中央社、扫荡报、新民报三记者的谈话》", year: "1939年9月" },
  { content: "枪杆子里出政权。", source: "《八七会议》", year: "1927年8月" },
  { content: "贪污和浪费是极大的犯罪。", source: "《反对贪污浪费》", year: "1952年" },
  { content: "妇女能顶半边天。", source: "《贵州妇女工作的批示》", year: "1955年" },
  { content: "团结紧张，严肃活泼。", source: "《抗大校训》", year: "1937年" },
  { content: "我们的目的一定要达到。我们的目的一定能够达到。", source: "《第一届全国人民代表大会开幕词》", year: "1954年9月" },
  { content: "这是为什么？大家想一想！", source: "《关于胡风反革命集团的材料》", year: "1955年" },
  { content: "军民团结如一人，试看天下谁能敌。", source: "《八连颂》", year: "1963年8月" },
  { content: "发展体育运动，增强人民体质。", source: "《为中华全国体育总会题词》", year: "1952年6月" },
  { content: "榜样的力量是无穷的。", source: "《关于总结经验的指示》", year: "1965年" },
];

// Helper to generate a full year's worth of quotes
const generateFullYearQuotes = (): Quote[] => {
  const fullList: Quote[] = [];
  const targetCount = 366; // Leap year support

  for (let i = 0; i < targetCount; i++) {
    // Cycle through the unique quotes
    const quoteData = UNIQUE_QUOTES[i % UNIQUE_QUOTES.length];
    fullList.push({
      id: i + 1,
      ...quoteData
    });
  }
  
  return fullList;
};

// Export the full 366 item list
export const QUOTES: Quote[] = generateFullYearQuotes();