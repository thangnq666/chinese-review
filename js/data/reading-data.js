// ===================================================
// READING_DATA — Bài đọc theo chủ đề từng buổi học
// Mỗi bài: title ('中文 – Tiếng Việt'), lessonIdx (0-based theo VOCAB_DATA, null = tổng hợp),
// focus (từ trọng tâm), lines [{zh,py,vi}], quiz [{q, o:[…], a}] (câu hỏi đọc hiểu)
// Bài đọc mới chỉ dùng chữ đã học tới buổi tương ứng.
// ===================================================
const READING_DATA = [
  {
    title:'我家 – Nhà tôi', lessonIdx:0,
    focus:['我','你','好','人','口','大','小','马','白'],
    lines:[
      {zh:'你好！我是小马。',py:'Nǐ hǎo! Wǒ shì Xiǎo Mǎ.',vi:'Xin chào! Tôi là Tiểu Mã.'},
      {zh:'我家有五口人。',py:'Wǒ jiā yǒu wǔ kǒu rén.',vi:'Nhà tôi có năm người.'},
      {zh:'爸爸、妈妈、哥哥、弟弟和我。',py:'Bàba, māma, gēge, dìdi hé wǒ.',vi:'Bố, mẹ, anh trai, em trai và tôi.'},
      {zh:'我爸爸、妈妈都很好。',py:'Wǒ bàba, māma dōu hěn hǎo.',vi:'Bố mẹ tôi đều rất khỏe.'},
      {zh:'我哥哥很大，我弟弟很小。',py:'Wǒ gēge hěn dà, wǒ dìdi hěn xiǎo.',vi:'Anh trai tôi đã lớn, em trai tôi còn rất nhỏ.'},
      {zh:'我哥哥喜欢马，他喜欢白马。',py:'Wǒ gēge xǐhuan mǎ, tā xǐhuan bái mǎ.',vi:'Anh trai tôi thích ngựa, anh ấy thích ngựa trắng.'},
      {zh:'我弟弟也喜欢马。',py:'Wǒ dìdi yě xǐhuan mǎ.',vi:'Em trai tôi cũng thích ngựa.'},
      {zh:'我不喜欢马。',py:'Wǒ bù xǐhuan mǎ.',vi:'Tôi không thích ngựa.'},
      {zh:'你家有几口人？你喜欢马吗？',py:'Nǐ jiā yǒu jǐ kǒu rén? Nǐ xǐhuan mǎ ma?',vi:'Nhà bạn có mấy người? Bạn có thích ngựa không?'},
    ],
    quiz:[
      {q:'Nhà Tiểu Mã có mấy người?',o:['3 người','5 người','8 người'],a:1},
      {q:'Ai thích ngựa trắng?',o:['Anh trai','Bố','Tiểu Mã'],a:0},
      {q:'Tiểu Mã có thích ngựa không?',o:['Có','Không','Không nói'],a:1},
    ]
  },
  {
    title:'我的家人都很忙 – Người nhà tôi đều rất bận', lessonIdx:1,
    focus:['忙','很','太','汉语','难','爸爸','妈妈','爷爷','奶奶','姐姐','妹妹','阿姨'],
    lines:[
      {zh:'我爸爸妈妈都很忙。',py:'Wǒ bàba māma dōu hěn máng.',vi:'Bố mẹ tôi đều rất bận.'},
      {zh:'我爷爷、奶奶不太忙。',py:'Wǒ yéye, nǎinai bú tài máng.',vi:'Ông bà nội tôi không bận lắm.'},
      {zh:'我姐姐学汉语。',py:'Wǒ jiějie xué Hànyǔ.',vi:'Chị gái tôi học tiếng Hán.'},
      {zh:'汉语难吗？汉语不太难。',py:'Hànyǔ nán ma? Hànyǔ bú tài nán.',vi:'Tiếng Hán có khó không? Tiếng Hán không khó lắm.'},
      {zh:'我妹妹也学汉语，她太忙了！',py:'Wǒ mèimei yě xué Hànyǔ, tā tài máng le!',vi:'Em gái tôi cũng học tiếng Hán, con bé bận quá!'},
      {zh:'我阿姨很喜欢她。',py:'Wǒ āyí hěn xǐhuan tā.',vi:'Dì tôi rất quý con bé.'},
      {zh:'我弟弟不学汉语，他还很小。',py:'Wǒ dìdi bù xué Hànyǔ, tā hái hěn xiǎo.',vi:'Em trai tôi không học tiếng Hán, nó còn rất nhỏ.'},
      {zh:'我哥哥很忙，我也很忙。',py:'Wǒ gēge hěn máng, wǒ yě hěn máng.',vi:'Anh trai tôi rất bận, tôi cũng rất bận.'},
      {zh:'你忙吗？你也学汉语吗？',py:'Nǐ máng ma? Nǐ yě xué Hànyǔ ma?',vi:'Bạn có bận không? Bạn cũng học tiếng Hán à?'},
    ],
    quiz:[
      {q:'Ai không bận lắm?',o:['Ông bà','Bố mẹ','Chị gái'],a:0},
      {q:'Chị gái học gì?',o:['Tiếng Hán','Tiếng Anh','Không học'],a:0},
      {q:'Vì sao em trai không học tiếng Hán?',o:['Còn nhỏ','Bận quá','Không thích'],a:0},
    ]
  },
  {
    title:'明天去银行 – Ngày mai đi ngân hàng', lessonIdx:2,
    focus:['明天','去','银行','取','钱','邮局','寄','信','北京','英语','日语','法语','见'],
    lines:[
      {zh:'明天我很忙。',py:'Míngtiān wǒ hěn máng.',vi:'Ngày mai tôi rất bận.'},
      {zh:'我去银行取钱。',py:'Wǒ qù yínháng qǔ qián.',vi:'Tôi đi ngân hàng rút tiền.'},
      {zh:'我也去邮局寄信。',py:'Wǒ yě qù yóujú jì xìn.',vi:'Tôi cũng đi bưu điện gửi thư.'},
      {zh:'我哥哥在北京，他学英语。',py:'Wǒ gēge zài Běijīng, tā xué Yīngyǔ.',vi:'Anh trai tôi ở Bắc Kinh, anh ấy học tiếng Anh.'},
      {zh:'我妹妹学日语，我姐姐学法语。',py:'Wǒ mèimei xué Rìyǔ, wǒ jiějie xué Fǎyǔ.',vi:'Em gái tôi học tiếng Nhật, chị gái tôi học tiếng Pháp.'},
      {zh:'我学汉语，我很喜欢汉语。',py:'Wǒ xué Hànyǔ, wǒ hěn xǐhuan Hànyǔ.',vi:'Tôi học tiếng Hán, tôi rất thích tiếng Hán.'},
      {zh:'弟弟也去银行吗？对，他也去取钱。',py:'Dìdi yě qù yínháng ma? Duì, tā yě qù qǔ qián.',vi:'Em trai cũng đi ngân hàng à? Đúng, nó cũng đi rút tiền.'},
      {zh:'明天见！',py:'Míngtiān jiàn!',vi:'Mai gặp nhé!'},
    ],
    quiz:[
      {q:'Ngày mai tôi đi đâu?',o:['Ngân hàng và bưu điện','Bắc Kinh','Trường học'],a:0},
      {q:'Anh trai học gì ở Bắc Kinh?',o:['Tiếng Anh','Tiếng Nhật','Tiếng Pháp'],a:0},
      {q:'Chị gái học gì?',o:['Tiếng Pháp','Tiếng Hàn','Tiếng Đức'],a:0},
    ]
  },
  {
    title:'我的一个星期 – Một tuần của tôi', lessonIdx:3,
    focus:['星期','今天','昨天','周末','几','哪儿','回','学校','最近','天安门','存钱','一起'],
    lines:[
      {zh:'我最近很忙。',py:'Wǒ zuìjìn hěn máng.',vi:'Dạo này tôi rất bận.'},
      {zh:'星期一、星期三、星期五我去学校学汉语。',py:'Xīngqīyī, xīngqīsān, xīngqīwǔ wǒ qù xuéxiào xué Hànyǔ.',vi:'Thứ Hai, thứ Tư, thứ Sáu tôi đến trường học tiếng Hán.'},
      {zh:'星期二我去银行存钱。',py:'Xīngqī\'èr wǒ qù yínháng cún qián.',vi:'Thứ Ba tôi đi ngân hàng gửi tiền.'},
      {zh:'星期四我去邮局寄信。',py:'Xīngqīsì wǒ qù yóujú jì xìn.',vi:'Thứ Năm tôi đi bưu điện gửi thư.'},
      {zh:'周末我不去学校。',py:'Zhōumò wǒ bú qù xuéxiào.',vi:'Cuối tuần tôi không đến trường.'},
      {zh:'星期六我和哥哥一起去天安门。',py:'Xīngqīliù wǒ hé gēge yìqǐ qù Tiān\'ānmén.',vi:'Thứ Bảy tôi cùng anh trai đi Thiên An Môn.'},
      {zh:'星期天我在家，哪儿也不去。',py:'Xīngqītiān wǒ zài jiā, nǎr yě bú qù.',vi:'Chủ nhật tôi ở nhà, không đi đâu cả.'},
      {zh:'今天是星期四，昨天是星期三。',py:'Jīntiān shì xīngqīsì, zuótiān shì xīngqīsān.',vi:'Hôm nay là thứ Năm, hôm qua là thứ Tư.'},
      {zh:'昨天我没去学校，我在家学汉语。',py:'Zuótiān wǒ méi qù xuéxiào, wǒ zài jiā xué Hànyǔ.',vi:'Hôm qua tôi không đến trường, tôi ở nhà học tiếng Hán.'},
    ],
    quiz:[
      {q:'Thứ mấy tôi đi gửi tiền?',o:['Thứ Ba','Thứ Năm','Thứ Bảy'],a:0},
      {q:'Thứ Bảy tôi đi đâu?',o:['Thiên An Môn','Ngân hàng','Trường học'],a:0},
      {q:'Hôm nay là thứ mấy?',o:['Thứ Năm','Thứ Tư','Chủ nhật'],a:0},
    ]
  },
  {
    title:'去王老师家 – Đến nhà thầy Vương', lessonIdx:4,
    focus:['老师','您','请','进','坐','喝','茶','水','咖啡','工作','身体','生病','好久不见','不客气'],
    lines:[
      {zh:'这是王老师，他是我的汉语老师。',py:'Zhè shì Wáng lǎoshī, tā shì wǒ de Hànyǔ lǎoshī.',vi:'Đây là thầy Vương, thầy là giáo viên tiếng Hán của tôi.'},
      {zh:'最近王老师生病了。',py:'Zuìjìn Wáng lǎoshī shēngbìng le.',vi:'Dạo này thầy Vương bị ốm.'},
      {zh:'今天我和姐姐去王老师家。',py:'Jīntiān wǒ hé jiějie qù Wáng lǎoshī jiā.',vi:'Hôm nay tôi và chị gái đến nhà thầy Vương.'},
      {zh:'"请进！请坐！"王老师很客气。',py:'"Qǐng jìn! Qǐng zuò!" Wáng lǎoshī hěn kèqi.',vi:'"Mời vào! Mời ngồi!" Thầy Vương rất khách sáo.'},
      {zh:'老师请我们喝茶。',py:'Lǎoshī qǐng wǒmen hē chá.',vi:'Thầy mời chúng tôi uống trà.'},
      {zh:'我不喝茶，我喝水。',py:'Wǒ bù hē chá, wǒ hē shuǐ.',vi:'Tôi không uống trà, tôi uống nước.'},
      {zh:'姐姐喜欢喝咖啡，也喜欢喝果汁。',py:'Jiějie xǐhuan hē kāfēi, yě xǐhuan hē guǒzhī.',vi:'Chị gái thích uống cà phê, cũng thích uống nước ép.'},
      {zh:'王老师工作太忙了，身体不太好。',py:'Wáng lǎoshī gōngzuò tài máng le, shēntǐ bú tài hǎo.',vi:'Thầy Vương công việc bận quá, sức khỏe không được tốt lắm.'},
      {zh:'"谢谢你们！""不客气！"',py:'"Xièxie nǐmen!" "Bú kèqi!"',vi:'"Cảm ơn các em!" "Không có gì ạ!"'},
    ],
    quiz:[
      {q:'Thầy Vương là ai?',o:['Giáo viên tiếng Hán','Bác sĩ','Anh trai'],a:0},
      {q:'Tôi uống gì?',o:['Nước','Trà','Cà phê'],a:0},
      {q:'Vì sao sức khỏe thầy không tốt?',o:['Công việc quá bận','Uống nhiều rượu','Không nói rõ'],a:0},
    ]
  },
  {
    title:'认识新朋友 – Làm quen bạn mới', lessonIdx:5,
    focus:['请问','问','贵姓','姓','叫','名字','什么','谁','认识'],
    lines:[
      {zh:'今天我认识了一个朋友。',py:'Jīntiān wǒ rènshile yí ge péngyou.',vi:'Hôm nay tôi quen một người bạn.'},
      {zh:'他姓张，叫张文。',py:'Tā xìng Zhāng, jiào Zhāng Wén.',vi:'Anh ấy họ Trương, tên là Trương Văn.'},
      {zh:'他是中国人，在越南工作。',py:'Tā shì Zhōngguó rén, zài Yuènán gōngzuò.',vi:'Anh ấy là người Trung Quốc, làm việc ở Việt Nam.'},
      {zh:'我叫阮文胜，我是越南人。',py:'Wǒ jiào Ruǎn Wénshèng, wǒ shì Yuènán rén.',vi:'Tôi tên là Nguyễn Văn Thắng, tôi là người Việt Nam.'},
      {zh:'张文问我："你学什么？"',py:'Zhāng Wén wèn wǒ: "Nǐ xué shénme?"',vi:'Trương Văn hỏi tôi: "Bạn học gì?"'},
      {zh:'我学汉语，他学越南语。',py:'Wǒ xué Hànyǔ, tā xué Yuènányǔ.',vi:'Tôi học tiếng Hán, anh ấy học tiếng Việt.'},
      {zh:'我的汉语发音不太好，他的越南语发音也不太好。',py:'Wǒ de Hànyǔ fāyīn bú tài hǎo, tā de Yuènányǔ fāyīn yě bú tài hǎo.',vi:'Phát âm tiếng Hán của tôi chưa tốt lắm, phát âm tiếng Việt của anh ấy cũng chưa tốt lắm.'},
      {zh:'我们一起学习，很高兴。',py:'Wǒmen yìqǐ xuéxí, hěn gāoxìng.',vi:'Chúng tôi cùng nhau học, rất vui.'},
      {zh:'认识他，我很高兴！',py:'Rènshi tā, wǒ hěn gāoxìng!',vi:'Quen được anh ấy, tôi rất vui!'},
    ],
    quiz:[
      {q:'Người bạn mới họ gì?',o:['Trương','Vương','Ngô'],a:0},
      {q:'Anh ấy là người nước nào?',o:['Trung Quốc','Việt Nam','Mỹ'],a:0},
      {q:'Trương Văn học gì?',o:['Tiếng Việt','Tiếng Hán','Tiếng Anh'],a:0},
    ]
  },
  {
    title:'我们班 – Lớp chúng tôi', lessonIdx:6,
    focus:['国','哪','越南','中国','美国','日本','韩国','泰国','菲律宾','汉字','书','杂志','的','朋友'],
    lines:[
      {zh:'我们班有很多国家的学生。',py:'Wǒmen bān yǒu hěn duō guójiā de xuésheng.',vi:'Lớp chúng tôi có học sinh của nhiều quốc gia.'},
      {zh:'有越南人、韩国人、日本人，也有美国人和泰国人。',py:'Yǒu Yuènán rén, Hánguó rén, Rìběn rén, yě yǒu Měiguó rén hé Tàiguó rén.',vi:'Có người Việt Nam, người Hàn Quốc, người Nhật Bản, cũng có người Mỹ và người Thái Lan.'},
      {zh:'我的朋友阿美是菲律宾人。',py:'Wǒ de péngyou Āměi shì Fēilǜbīn rén.',vi:'Bạn tôi là A Mỹ, người Philippines.'},
      {zh:'她很喜欢学汉字。',py:'Tā hěn xǐhuan xué Hànzì.',vi:'Cô ấy rất thích học chữ Hán.'},
      {zh:'我们班的老师是中国人，她姓王。',py:'Wǒmen bān de lǎoshī shì Zhōngguó rén, tā xìng Wáng.',vi:'Cô giáo lớp chúng tôi là người Trung Quốc, cô họ Vương.'},
      {zh:'王老师问我们："你们是哪国人？"',py:'Wáng lǎoshī wèn wǒmen: "Nǐmen shì nǎ guó rén?"',vi:'Cô Vương hỏi chúng tôi: "Các em là người nước nào?"'},
      {zh:'这是我的汉语书，那是阿美的杂志。',py:'Zhè shì wǒ de Hànyǔ shū, nà shì Āměi de zázhì.',vi:'Đây là sách tiếng Hán của tôi, kia là tạp chí của A Mỹ.'},
      {zh:'杂志是中文的还是英文的？是中文的。',py:'Zázhì shì Zhōngwén de háishì Yīngwén de? Shì Zhōngwén de.',vi:'Tạp chí bằng tiếng Trung hay tiếng Anh? Bằng tiếng Trung.'},
      {zh:'中午我们一起去食堂吃饭。',py:'Zhōngwǔ wǒmen yìqǐ qù shítáng chīfàn.',vi:'Buổi trưa chúng tôi cùng nhau đến nhà ăn ăn cơm.'},
    ],
    quiz:[
      {q:'A Mỹ là người nước nào?',o:['Philippines','Thái Lan','Lào'],a:0},
      {q:'Cô giáo họ gì?',o:['Vương','Trương','Ngô'],a:0},
      {q:'Tạp chí của A Mỹ bằng tiếng gì?',o:['Tiếng Trung','Tiếng Anh','Tiếng Việt'],a:0},
    ]
  },
  {
    title:'我的家 – Gia đình tôi', lessonIdx:7,
    focus:['岁','家','有','住','孩子','儿子','女儿','老婆','公司','食堂','吃饭','饺子','面条','包子','鸡汤','河内','早上','晚上'],
    lines:[
      {zh:'我叫阮文胜，今年三十岁。',py:'Wǒ jiào Ruǎn Wénshèng, jīnnián sānshí suì.',vi:'Tôi tên là Nguyễn Văn Thắng, năm nay ba mươi tuổi.'},
      {zh:'我家住在河内。',py:'Wǒ jiā zhù zài Hénèi.',vi:'Nhà tôi ở Hà Nội.'},
      {zh:'我有一个老婆和两个孩子：一个儿子，一个女儿。',py:'Wǒ yǒu yí ge lǎopo hé liǎng ge háizi: yí ge érzi, yí ge nǚ\'ér.',vi:'Tôi có vợ và hai con: một con trai, một con gái.'},
      {zh:'儿子六岁，女儿三岁。',py:'Érzi liù suì, nǚ\'ér sān suì.',vi:'Con trai sáu tuổi, con gái ba tuổi.'},
      {zh:'我在公司工作，中午在公司食堂吃饭。',py:'Wǒ zài gōngsī gōngzuò, zhōngwǔ zài gōngsī shítáng chīfàn.',vi:'Tôi làm việc ở công ty, buổi trưa ăn cơm ở nhà ăn công ty.'},
      {zh:'我喜欢吃饺子，也喜欢吃面条。',py:'Wǒ xǐhuan chī jiǎozi, yě xǐhuan chī miàntiáo.',vi:'Tôi thích ăn sủi cảo, cũng thích ăn mì.'},
      {zh:'早上我吃两个包子，喝一杯咖啡。',py:'Zǎoshang wǒ chī liǎng ge bāozi, hē yì bēi kāfēi.',vi:'Buổi sáng tôi ăn hai cái bánh bao, uống một cốc cà phê.'},
      {zh:'晚上我们一家人在家吃饭。',py:'Wǎnshang wǒmen yì jiā rén zài jiā chīfàn.',vi:'Buổi tối cả nhà chúng tôi ăn cơm ở nhà.'},
      {zh:'我老婆做的鸡汤很好吃。',py:'Wǒ lǎopo zuò de jītāng hěn hǎochī.',vi:'Canh gà vợ tôi nấu rất ngon.'},
      {zh:'我爸爸今年六十八岁，妈妈六十五岁。',py:'Wǒ bàba jīnnián liùshíbā suì, māma liùshíwǔ suì.',vi:'Bố tôi năm nay sáu mươi tám tuổi, mẹ sáu mươi lăm tuổi.'},
    ],
    quiz:[
      {q:'Thắng có mấy con?',o:['2','1','3'],a:0},
      {q:'Con gái mấy tuổi?',o:['3','6','8'],a:0},
      {q:'Buổi trưa Thắng ăn cơm ở đâu?',o:['Nhà ăn công ty','Ở nhà','Nhà hàng'],a:0},
    ]
  },
  {
    title:'这些书是谁的？– Những quyển sách này của ai?', lessonIdx:8,
    focus:['一些','这些','那些','本','书','杂志','图书馆'],
    lines:[
      {zh:'王老师有一些书和杂志。',py:'Wáng lǎoshī yǒu yìxiē shū hé zázhì.',vi:'Thầy Vương có một số sách và tạp chí.'},
      {zh:'这些是汉语书，那些是英语书。',py:'Zhèxiē shì Hànyǔ shū, nàxiē shì Yīngyǔ shū.',vi:'Những quyển này là sách tiếng Hán, những quyển kia là sách tiếng Anh.'},
      {zh:'这本书是王老师的，那本杂志是我的。',py:'Zhè běn shū shì Wáng lǎoshī de, nà běn zázhì shì wǒ de.',vi:'Quyển sách này là của thầy Vương, quyển tạp chí kia là của tôi.'},
      {zh:'老师问："这些书是谁的？"',py:'Lǎoshī wèn: "Zhèxiē shū shì shéi de?"',vi:'Thầy hỏi: "Những quyển sách này là của ai?"'},
      {zh:'阿美的朋友有一些中文杂志。',py:'Āměi de péngyou yǒu yìxiē Zhōngwén zázhì.',vi:'Bạn của A Mỹ có một số tạp chí tiếng Trung.'},
      {zh:'我们一起去图书馆吧。',py:'Wǒmen yìqǐ qù túshūguǎn ba.',vi:'Chúng ta cùng đi thư viện nhé.'},
      {zh:'图书馆有很多书，有中文的，也有英文的。',py:'Túshūguǎn yǒu hěn duō shū, yǒu Zhōngwén de, yě yǒu Yīngwén de.',vi:'Thư viện có rất nhiều sách, có sách tiếng Trung, cũng có sách tiếng Anh.'},
      {zh:'那些杂志都很好，我很喜欢。',py:'Nàxiē zázhì dōu hěn hǎo, wǒ hěn xǐhuan.',vi:'Những tạp chí kia đều rất hay, tôi rất thích.'},
      {zh:'我要这些书，不要那些。',py:'Wǒ yào zhèxiē shū, bú yào nàxiē.',vi:'Tôi lấy những quyển này, không lấy những quyển kia.'},
    ],
    quiz:[
      {q:'Thầy Vương có gì?',o:['Một số sách và tạp chí','Một số hoa quả','Một ít tiền'],a:0},
      {q:'Những quyển "kia" là sách gì?',o:['Sách tiếng Anh','Sách tiếng Hán','Tạp chí'],a:0},
      {q:'Họ rủ nhau đi đâu?',o:['Thư viện','Ngân hàng','Bưu điện'],a:0},
    ]
  },
  {
    title:'买水果 – Mua hoa quả', lessonIdx:9,
    focus:['买','卖','水果','苹果','芒果','葡萄','西瓜','草莓','斤','块','多少','贵','便宜','一共','给','找','怎么'],
    lines:[
      {zh:'星期六早上，我和妈妈去买水果。',py:'Xīngqīliù zǎoshang, wǒ hé māma qù mǎi shuǐguǒ.',vi:'Sáng thứ Bảy, tôi và mẹ đi mua hoa quả.'},
      {zh:'那儿的水果很多，也很便宜。',py:'Nàr de shuǐguǒ hěn duō, yě hěn piányi.',vi:'Hoa quả ở đó rất nhiều, cũng rất rẻ.'},
      {zh:'妈妈喜欢吃苹果，我喜欢吃芒果和葡萄。',py:'Māma xǐhuan chī píngguǒ, wǒ xǐhuan chī mángguǒ hé pútao.',vi:'Mẹ thích ăn táo, tôi thích ăn xoài và nho.'},
      {zh:'苹果一斤四块，芒果一斤八块。',py:'Píngguǒ yì jīn sì kuài, mángguǒ yì jīn bā kuài.',vi:'Táo bốn đồng một cân, xoài tám đồng một cân.'},
      {zh:'妈妈问："西瓜怎么卖？"',py:'Māma wèn: "Xīguā zěnme mài?"',vi:'Mẹ hỏi: "Dưa hấu bán thế nào?"'},
      {zh:'我们买了三斤苹果、两斤芒果和一个西瓜。',py:'Wǒmen mǎile sān jīn píngguǒ, liǎng jīn mángguǒ hé yí ge xīguā.',vi:'Chúng tôi mua ba cân táo, hai cân xoài và một quả dưa hấu.'},
      {zh:'西瓜十块钱，一共三十八块。',py:'Xīguā shí kuài qián, yígòng sānshíbā kuài.',vi:'Dưa hấu mười đồng, tổng cộng ba mươi tám đồng.'},
      {zh:'妈妈给阿姨四十块，阿姨找了两块。',py:'Māma gěi āyí sìshí kuài, āyí zhǎole liǎng kuài.',vi:'Mẹ đưa cô bán hàng bốn mươi đồng, cô trả lại hai đồng.'},
      {zh:'草莓太贵了，我们没买。',py:'Cǎoméi tài guì le, wǒmen méi mǎi.',vi:'Dâu tây đắt quá, chúng tôi không mua.'},
    ],
    quiz:[
      {q:'Mẹ thích ăn gì?',o:['Táo','Xoài','Dâu tây'],a:0},
      {q:'Tổng cộng hết bao nhiêu tiền?',o:['38 đồng','40 đồng','32 đồng'],a:0},
      {q:'Vì sao không mua dâu tây?',o:['Đắt quá','Không ngon','Hết hàng'],a:0},
    ]
  },
  {
    title:'去银行换钱 – Đi ngân hàng đổi tiền', lessonIdx:10,
    focus:['换','人民币','美元','欧元','营业员','小姐','先生','上午','千','等','一会儿','数','旅游'],
    lines:[
      {zh:'下个星期我和朋友去北京旅游。',py:'Xià ge xīngqī wǒ hé péngyou qù Běijīng lǚyóu.',vi:'Tuần sau tôi và bạn đi du lịch Bắc Kinh.'},
      {zh:'今天上午我去银行换人民币。',py:'Jīntiān shàngwǔ wǒ qù yínháng huàn rénmínbì.',vi:'Sáng nay tôi đến ngân hàng đổi nhân dân tệ.'},
      {zh:'银行的人很多，我等了一会儿。',py:'Yínháng de rén hěn duō, wǒ děngle yíhuìr.',vi:'Ngân hàng rất đông người, tôi đợi một lúc.'},
      {zh:'营业员是一位小姐，她很客气。',py:'Yíngyèyuán shì yí wèi xiǎojiě, tā hěn kèqi.',vi:'Nhân viên giao dịch là một cô gái, cô ấy rất lịch sự.'},
      {zh:'她问我："先生，您换什么钱？"',py:'Tā wèn wǒ: "Xiānsheng, nín huàn shénme qián?"',vi:'Cô ấy hỏi tôi: "Thưa anh, anh đổi tiền gì ạ?"'},
      {zh:'我要换五百美元。',py:'Wǒ yào huàn wǔbǎi měiyuán.',vi:'Tôi muốn đổi năm trăm đô la Mỹ.'},
      {zh:'一美元换七块人民币，五百美元换三千五百块。',py:'Yì měiyuán huàn qī kuài rénmínbì, wǔbǎi měiyuán huàn sānqiān wǔbǎi kuài.',vi:'Một đô la đổi được bảy tệ, năm trăm đô la đổi được ba nghìn năm trăm tệ.'},
      {zh:'营业员数了数钱，给了我。',py:'Yíngyèyuán shǔle shǔ qián, gěile wǒ.',vi:'Nhân viên đếm tiền rồi đưa cho tôi.'},
      {zh:'我也数一数，对，三千五百块。',py:'Wǒ yě shǔ yi shǔ, duì, sānqiān wǔbǎi kuài.',vi:'Tôi cũng đếm lại, đúng, ba nghìn năm trăm tệ.'},
      {zh:'我朋友不换美元，他换欧元。',py:'Wǒ péngyou bú huàn měiyuán, tā huàn ōuyuán.',vi:'Bạn tôi không đổi đô la Mỹ, anh ấy đổi euro.'},
    ],
    quiz:[
      {q:'Tôi đổi bao nhiêu đô la Mỹ?',o:['500','700','3500'],a:0},
      {q:'Nhân viên giao dịch là ai?',o:['Một cô gái','Một ông lớn tuổi','Thầy Vương'],a:0},
      {q:'Tôi đổi tiền để làm gì?',o:['Đi du lịch Bắc Kinh','Mua hoa quả','Gửi thư'],a:0},
    ]
  },
  {
    title:'我的新家 – Nhà mới của tôi', lessonIdx:11,
    focus:['住','现在','市','路','号','楼','门','房间','酒店','办公室','职员','知道','手机','号码'],
    lines:[
      {zh:'我现在住在河内市，我的新家在人民路。',py:'Wǒ xiànzài zhù zài Hénèi Shì, wǒ de xīn jiā zài Rénmín Lù.',vi:'Bây giờ tôi sống ở thành phố Hà Nội, nhà mới của tôi ở đường Nhân Dân.'},
      {zh:'我住八号楼三门，房间号是五零二。',py:'Wǒ zhù bā hào lóu sān mén, fángjiān hào shì wǔ líng èr.',vi:'Tôi ở tòa nhà số 8, cửa số 3, số phòng là 502.'},
      {zh:'我的房间不大，但是很好。',py:'Wǒ de fángjiān bú dà, dànshì hěn hǎo.',vi:'Phòng của tôi không to, nhưng rất tốt.'},
      {zh:'我家那儿有一个银行、一个邮局，还有一家酒店。',py:'Wǒ jiā nàr yǒu yí ge yínháng, yí ge yóujú, hái yǒu yì jiā jiǔdiàn.',vi:'Chỗ nhà tôi có một ngân hàng, một bưu điện, còn có một khách sạn.'},
      {zh:'我在公司办公室工作，我是职员。',py:'Wǒ zài gōngsī bàngōngshì gōngzuò, wǒ shì zhíyuán.',vi:'Tôi làm việc ở văn phòng công ty, tôi là nhân viên.'},
      {zh:'我的朋友小林住在北京路十八号。',py:'Wǒ de péngyou Xiǎo Lín zhù zài Běijīng Lù shíbā hào.',vi:'Bạn tôi là Tiểu Lâm sống ở số 18 đường Bắc Kinh.'},
      {zh:'他不知道我的新家在哪儿。',py:'Tā bù zhīdào wǒ de xīn jiā zài nǎr.',vi:'Cậu ấy không biết nhà mới của tôi ở đâu.'},
      {zh:'我给他我的手机号码。',py:'Wǒ gěi tā wǒ de shǒujī hàomǎ.',vi:'Tôi cho cậu ấy số điện thoại di động của tôi.'},
      {zh:'他说："星期天我去你家！"',py:'Tā shuō: "Xīngqītiān wǒ qù nǐ jiā!"',vi:'Cậu ấy nói: "Chủ nhật tớ đến nhà cậu!"'},
    ],
    quiz:[
      {q:'Nhà mới ở đường nào?',o:['Đường Nhân Dân','Đường Bắc Kinh','Phố Tràng Tiền'],a:0},
      {q:'Số phòng là bao nhiêu?',o:['502','805','18'],a:0},
      {q:'Tôi làm công việc gì?',o:['Nhân viên văn phòng','Giáo viên','Thư ký'],a:0},
    ]
  },
  {
    title:'介绍一下我们公司 – Giới thiệu công ty chúng tôi', lessonIdx:12,
    focus:['介绍','秘书','先','号码','职员','办公室','先生','小姐'],
    lines:[
      {zh:'我介绍一下我们公司。',py:'Wǒ jièshào yíxià wǒmen gōngsī.',vi:'Tôi xin giới thiệu một chút về công ty chúng tôi.'},
      {zh:'我们公司在河内，有八十个职员。',py:'Wǒmen gōngsī zài Hénèi, yǒu bāshí ge zhíyuán.',vi:'Công ty chúng tôi ở Hà Nội, có tám mươi nhân viên.'},
      {zh:'我们的办公室在五楼。',py:'Wǒmen de bàngōngshì zài wǔ lóu.',vi:'Văn phòng của chúng tôi ở tầng năm.'},
      {zh:'这是我的新秘书，她叫阮兰。',py:'Zhè shì wǒ de xīn mìshū, tā jiào Ruǎn Lán.',vi:'Đây là thư ký mới của tôi, cô ấy tên là Nguyễn Lan.'},
      {zh:'她是越南人，会说汉语，也会说英语。',py:'Tā shì Yuènán rén, huì shuō Hànyǔ, yě huì shuō Yīngyǔ.',vi:'Cô ấy là người Việt Nam, biết nói tiếng Hán, cũng biết nói tiếng Anh.'},
      {zh:'那是王先生，他是中国人。',py:'Nà shì Wáng xiānsheng, tā shì Zhōngguó rén.',vi:'Kia là ông Vương, ông ấy là người Trung Quốc.'},
      {zh:'我先介绍他们认识。',py:'Wǒ xiān jièshào tāmen rènshi.',vi:'Tôi giới thiệu cho họ làm quen trước.'},
      {zh:'王先生说："阮小姐，你好！"',py:'Wáng xiānsheng shuō: "Ruǎn xiǎojiě, nǐ hǎo!"',vi:'Ông Vương nói: "Chào cô Nguyễn!"'},
      {zh:'阮兰说："王先生，欢迎您！"',py:'Ruǎn Lán shuō: "Wáng xiānsheng, huānyíng nín!"',vi:'Nguyễn Lan nói: "Chào mừng ông Vương!"'},
      {zh:'现在他们是朋友了。',py:'Xiànzài tāmen shì péngyou le.',vi:'Bây giờ họ đã là bạn bè.'},
    ],
    quiz:[
      {q:'Công ty có bao nhiêu nhân viên?',o:['80','18','800'],a:0},
      {q:'Thư ký mới tên là gì?',o:['Nguyễn Lan','Ngô Mỹ','Trương Văn'],a:0},
      {q:'Thư ký biết nói những tiếng gì?',o:['Tiếng Hán và tiếng Anh','Tiếng Nhật','Chỉ tiếng Việt'],a:0},
    ]
  },
  {
    title:'欢迎新同学 – Chào mừng bạn học mới', lessonIdx:13,
    focus:['留学生','教授','校长','欢迎','首先','大家','也','都','俩','经常','大夫','护士','律师','记者','位'],
    lines:[
      {zh:'今天王教授介绍了我们班的留学生。',py:'Jīntiān Wáng jiàoshòu jièshàole wǒmen bān de liúxuéshēng.',vi:'Hôm nay giáo sư Vương giới thiệu các lưu học sinh của lớp chúng tôi.'},
      {zh:'我们都是留学生，大家都学汉语。',py:'Wǒmen dōu shì liúxuéshēng, dàjiā dōu xué Hànyǔ.',vi:'Chúng tôi đều là lưu học sinh, mọi người đều học tiếng Hán.'},
      {zh:'首先，校长说："欢迎你们！"',py:'Shǒuxiān, xiàozhǎng shuō: "Huānyíng nǐmen!"',vi:'Đầu tiên, hiệu trưởng nói: "Chào mừng các em!"'},
      {zh:'我同屋叫安美，她是日本人。',py:'Wǒ tóngwū jiào Ānměi, tā shì Rìběn rén.',vi:'Bạn cùng phòng của tôi tên là An Mỹ, cô ấy là người Nhật.'},
      {zh:'她妈妈是大夫，爸爸是律师。',py:'Tā māma shì dàifu, bàba shì lǜshī.',vi:'Mẹ cô ấy là bác sĩ, bố là luật sư.'},
      {zh:'我们俩经常一起去食堂吃饭。',py:'Wǒmen liǎ jīngcháng yìqǐ qù shítáng chīfàn.',vi:'Hai chúng tôi thường cùng nhau đến nhà ăn ăn cơm.'},
      {zh:'王教授工作很忙，但是她很喜欢我们。',py:'Wáng jiàoshòu gōngzuò hěn máng, dànshì tā hěn xǐhuan wǒmen.',vi:'Giáo sư Vương công việc rất bận, nhưng cô rất quý chúng tôi.'},
      {zh:'我们班也有一位记者，他是美国人。',py:'Wǒmen bān yě yǒu yí wèi jìzhě, tā shì Měiguó rén.',vi:'Lớp chúng tôi cũng có một nhà báo, anh ấy là người Mỹ.'},
      {zh:'他说："大家好！认识你们很高兴！"',py:'Tā shuō: "Dàjiā hǎo! Rènshi nǐmen hěn gāoxìng!"',vi:'Anh ấy nói: "Chào mọi người! Rất vui được làm quen với các bạn!"'},
      {zh:'我很喜欢我们班。',py:'Wǒ hěn xǐhuan wǒmen bān.',vi:'Tôi rất thích lớp của chúng tôi.'},
    ],
    quiz:[
      {q:'Ai nói "Chào mừng các em"?',o:['Hiệu trưởng','Giáo sư Vương','Nhà báo'],a:0},
      {q:'Bạn cùng phòng là người nước nào?',o:['Nhật Bản','Mỹ','Anh'],a:0},
      {q:'Bố của An Mỹ làm nghề gì?',o:['Luật sư','Bác sĩ','Nhà báo'],a:0},
    ]
  },
  {
    title:'我学汉语 – Tôi học tiếng Hán', lessonIdx:14,
    focus:['大学','听力','口语','阅读','写作','觉得','比较','容易','但是','语法','同屋','有意思','看','语言'],
    lines:[
      {zh:'我在河内大学学习汉语。',py:'Wǒ zài Hénèi Dàxué xuéxí Hànyǔ.',vi:'Tôi học tiếng Hán ở Đại học Hà Nội.'},
      {zh:'我们班有二十个学生，大家都很好。',py:'Wǒmen bān yǒu èrshí ge xuésheng, dàjiā dōu hěn hǎo.',vi:'Lớp chúng tôi có hai mươi học sinh, mọi người đều rất tốt.'},
      {zh:'我们学听力、口语、阅读和写作。',py:'Wǒmen xué tīnglì, kǒuyǔ, yuèdú hé xiězuò.',vi:'Chúng tôi học nghe, khẩu ngữ, đọc hiểu và viết.'},
      {zh:'我觉得听和说比较容易，读和写比较难。',py:'Wǒ juéde tīng hé shuō bǐjiào róngyì, dú hé xiě bǐjiào nán.',vi:'Tôi thấy nghe và nói tương đối dễ, đọc và viết tương đối khó.'},
      {zh:'汉语语法不太难，但是汉字很难写。',py:'Hànyǔ yǔfǎ bú tài nán, dànshì Hànzì hěn nán xiě.',vi:'Ngữ pháp tiếng Hán không khó lắm, nhưng chữ Hán rất khó viết.'},
      {zh:'我的同屋是韩国人，他的口语很好。',py:'Wǒ de tóngwū shì Hánguó rén, tā de kǒuyǔ hěn hǎo.',vi:'Bạn cùng phòng của tôi là người Hàn Quốc, khẩu ngữ của cậu ấy rất tốt.'},
      {zh:'我们经常一起说汉语，很有意思。',py:'Wǒmen jīngcháng yìqǐ shuō Hànyǔ, hěn yǒu yìsi.',vi:'Chúng tôi thường cùng nhau nói tiếng Hán, rất thú vị.'},
      {zh:'晚上我在图书馆看书，看中文杂志。',py:'Wǎnshang wǒ zài túshūguǎn kàn shū, kàn Zhōngwén zázhì.',vi:'Buổi tối tôi đọc sách ở thư viện, đọc tạp chí tiếng Trung.'},
      {zh:'学习新语言不容易，但是很有意思。',py:'Xuéxí xīn yǔyán bù róngyì, dànshì hěn yǒu yìsi.',vi:'Học một ngôn ngữ mới không dễ, nhưng rất thú vị.'},
    ],
    quiz:[
      {q:'Tôi học tiếng Hán ở đâu?',o:['Đại học Hà Nội','Bắc Kinh','Thư viện'],a:0},
      {q:'Theo tôi, kỹ năng nào tương đối khó?',o:['Đọc và viết','Nghe và nói','Ngữ pháp'],a:0},
      {q:'Bạn cùng phòng giỏi kỹ năng nào?',o:['Khẩu ngữ','Viết','Đọc hiểu'],a:0},
    ]
  },
  {
    title:'我的箱子 – Chiếc vali của tôi', lessonIdx:15,
    focus:['箱子','重','轻','黑色','红色','里','衣服','件','词典','日用品','中药','西药','雨伞','把','香水','茶叶','想'],
    lines:[
      {zh:'下个星期我去中国留学。',py:'Xià ge xīngqī wǒ qù Zhōngguó liúxué.',vi:'Tuần sau tôi đi du học Trung Quốc.'},
      {zh:'我有一个黑色的箱子，箱子很重。',py:'Wǒ yǒu yí ge hēisè de xiāngzi, xiāngzi hěn zhòng.',vi:'Tôi có một chiếc vali màu đen, vali rất nặng.'},
      {zh:'箱子里有什么？有衣服、词典和一些日用品。',py:'Xiāngzi lǐ yǒu shénme? Yǒu yīfu, cídiǎn hé yìxiē rìyòngpǐn.',vi:'Trong vali có gì? Có quần áo, từ điển và một ít đồ dùng hằng ngày.'},
      {zh:'我有五件衣服，两件是红色的。',py:'Wǒ yǒu wǔ jiàn yīfu, liǎng jiàn shì hóngsè de.',vi:'Tôi có năm bộ quần áo, hai bộ màu đỏ.'},
      {zh:'妈妈给我一些中药和西药。',py:'Māma gěi wǒ yìxiē zhōngyào hé xīyào.',vi:'Mẹ đưa cho tôi một ít thuốc bắc và thuốc tây.'},
      {zh:'她说："箱子里要有一把雨伞。"',py:'Tā shuō: "Xiāngzi lǐ yào yǒu yì bǎ yǔsǎn."',vi:'Mẹ nói: "Trong vali phải có một chiếc ô."'},
      {zh:'我还想买一瓶香水给王老师。',py:'Wǒ hái xiǎng mǎi yì píng xiāngshuǐ gěi Wáng lǎoshī.',vi:'Tôi còn muốn mua một lọ nước hoa tặng thầy Vương.'},
      {zh:'我姐姐买了一些茶叶，她说中国朋友很喜欢越南茶。',py:'Wǒ jiějie mǎile yìxiē cháyè, tā shuō Zhōngguó péngyou hěn xǐhuan Yuènán chá.',vi:'Chị gái tôi mua một ít chè, chị nói bạn bè Trung Quốc rất thích trà Việt Nam.'},
      {zh:'现在箱子太重了！',py:'Xiànzài xiāngzi tài zhòng le!',vi:'Bây giờ vali nặng quá!'},
      {zh:'我想，箱子轻一点儿就好了。',py:'Wǒ xiǎng, xiāngzi qīng yìdiǎnr jiù hǎo le.',vi:'Tôi nghĩ, vali nhẹ đi một chút thì tốt.'},
    ],
    quiz:[
      {q:'Vali của tôi màu gì?',o:['Đen','Đỏ','Xám'],a:0},
      {q:'Mẹ đưa cho tôi thứ gì?',o:['Thuốc bắc và thuốc tây','Nước hoa','Lá chè'],a:0},
      {q:'Tôi muốn mua nước hoa tặng ai?',o:['Thầy Vương','Mẹ','Chị gái'],a:0},
    ]
  },
  {
    title:'箱子里有什么？– Trong vali có gì?', lessonIdx:16,
    focus:['没有','有','张','光盘','支','笔','本','词典','瓶','中药','茶叶','香'],
    lines:[
      {zh:'我的同屋问我："你的箱子里有什么？"',py:'Wǒ de tóngwū wèn wǒ: "Nǐ de xiāngzi lǐ yǒu shénme?"',vi:'Bạn cùng phòng hỏi tôi: "Trong vali của cậu có gì?"'},
      {zh:'我说："有一些书，还有几张光盘。"',py:'Wǒ shuō: "Yǒu yìxiē shū, hái yǒu jǐ zhāng guāngpán."',vi:'Tôi nói: "Có mấy quyển sách, còn có vài chiếc đĩa CD."'},
      {zh:'我经常听这些光盘，学习汉语发音。',py:'Wǒ jīngcháng tīng zhèxiē guāngpán, xuéxí Hànyǔ fāyīn.',vi:'Tôi thường nghe những đĩa này để học phát âm tiếng Hán.'},
      {zh:'箱子里也有两支笔和一本词典。',py:'Xiāngzi lǐ yě yǒu liǎng zhī bǐ hé yì běn cídiǎn.',vi:'Trong vali cũng có hai cây bút và một quyển từ điển.'},
      {zh:'同屋问："这是不是中药？"',py:'Tóngwū wèn: "Zhè shì bu shì zhōngyào?"',vi:'Bạn cùng phòng hỏi: "Đây có phải thuốc bắc không?"'},
      {zh:'我说："不是中药，是茶叶。"',py:'Wǒ shuō: "Bú shì zhōngyào, shì cháyè."',vi:'Tôi nói: "Không phải thuốc bắc, là chè."'},
      {zh:'越南的茶叶很香，你喝不喝？',py:'Yuènán de cháyè hěn xiāng, nǐ hē bu hē?',vi:'Chè Việt Nam rất thơm, cậu có uống không?'},
      {zh:'同屋说："我不喝茶，我喜欢喝咖啡。"',py:'Tóngwū shuō: "Wǒ bù hē chá, wǒ xǐhuan hē kāfēi."',vi:'Bạn cùng phòng nói: "Tớ không uống trà, tớ thích uống cà phê."'},
      {zh:'我的箱子里没有咖啡。',py:'Wǒ de xiāngzi lǐ méiyǒu kāfēi.',vi:'Trong vali của tôi không có cà phê.'},
      {zh:'明天我们一起去买吧。',py:'Míngtiān wǒmen yìqǐ qù mǎi ba.',vi:'Ngày mai chúng ta cùng đi mua nhé.'},
    ],
    quiz:[
      {q:'Tôi nghe đĩa CD để làm gì?',o:['Học phát âm tiếng Hán','Nghe nhạc','Xem phim'],a:0},
      {q:'Thứ bạn cùng phòng tưởng là thuốc bắc thật ra là gì?',o:['Lá chè','Cà phê','Nước hoa'],a:0},
      {q:'Bạn cùng phòng thích uống gì?',o:['Cà phê','Trà','Nước ép'],a:0},
    ]
  },
  {
    title:'我买了一辆车 – Tôi mua một chiếc xe', lessonIdx:17,
    focus:['好久','最近','所以','有点儿','累','冷','饿','困','自行车','电动车','汽车','开车','骑','旧','颜色','蓝','辆','马马虎虎'],
    lines:[
      {zh:'好久不见！我最近工作很忙，所以有点儿累。',py:'Hǎojiǔ bú jiàn! Wǒ zuìjìn gōngzuò hěn máng, suǒyǐ yǒudiǎnr lèi.',vi:'Lâu rồi không gặp! Dạo này công việc tôi rất bận, nên hơi mệt.'},
      {zh:'我天天骑自行车去公司。',py:'Wǒ tiāntiān qí zìxíngchē qù gōngsī.',vi:'Ngày nào tôi cũng đạp xe đạp đến công ty.'},
      {zh:'我的自行车太旧了。',py:'Wǒ de zìxíngchē tài jiù le.',vi:'Xe đạp của tôi cũ quá rồi.'},
      {zh:'下雨了，骑车很冷，也很累。',py:'Xià yǔ le, qí chē hěn lěng, yě hěn lèi.',vi:'Trời mưa, đạp xe rất lạnh, cũng rất mệt.'},
      {zh:'所以上个星期我买了一辆电动车。',py:'Suǒyǐ shàng ge xīngqī wǒ mǎile yí liàng diàndòngchē.',vi:'Vì vậy tuần trước tôi đã mua một chiếc xe điện.'},
      {zh:'它是蓝色的，不大，也不重。',py:'Tā shì lánsè de, bú dà, yě bú zhòng.',vi:'Nó màu xanh lam, không to, cũng không nặng.'},
      {zh:'我哥哥会开车，他有一辆黑色的汽车。',py:'Wǒ gēge huì kāichē, tā yǒu yí liàng hēisè de qìchē.',vi:'Anh trai tôi biết lái xe, anh ấy có một chiếc ô tô màu đen.'},
      {zh:'我还不会开车，我想学。',py:'Wǒ hái bú huì kāichē, wǒ xiǎng xué.',vi:'Tôi vẫn chưa biết lái xe, tôi muốn học.'},
      {zh:'晚上我回家，又饿又困。',py:'Wǎnshang wǒ huí jiā, yòu è yòu kùn.',vi:'Buổi tối tôi về nhà, vừa đói vừa buồn ngủ.'},
      {zh:'我的工作马马虎虎，但是我很喜欢我的新车。',py:'Wǒ de gōngzuò mǎmǎhūhū, dànshì wǒ hěn xǐhuan wǒ de xīn chē.',vi:'Công việc của tôi cũng tàm tạm, nhưng tôi rất thích chiếc xe mới.'},
    ],
    quiz:[
      {q:'Vì sao dạo này tôi hơi mệt?',o:['Công việc bận','Bị ốm','Đi du lịch'],a:0},
      {q:'Tôi mua xe gì?',o:['Xe điện','Ô tô','Xe máy'],a:0},
      {q:'Xe mới màu gì?',o:['Xanh lam','Đen','Đỏ'],a:0},
    ]
  },
  {
    title:'我们全家 – Cả nhà chúng tôi', lessonIdx:18,
    focus:['全','照片','医生','医院','上班','外贸','地铁','大概','点','只','做饭','定期','外国','看'],
    lines:[
      {zh:'这是我们全家的照片。',py:'Zhè shì wǒmen quán jiā de zhàopiàn.',vi:'Đây là ảnh cả nhà chúng tôi.'},
      {zh:'照片里有爸爸、妈妈、姐姐和我。',py:'Zhàopiàn lǐ yǒu bàba, māma, jiějie hé wǒ.',vi:'Trong ảnh có bố, mẹ, chị gái và tôi.'},
      {zh:'我爸爸是医生，他在河内的一个医院工作。',py:'Wǒ bàba shì yīshēng, tā zài Hénèi de yí ge yīyuàn gōngzuò.',vi:'Bố tôi là bác sĩ, ông làm việc ở một bệnh viện tại Hà Nội.'},
      {zh:'妈妈在一家外贸公司上班。',py:'Māma zài yì jiā wàimào gōngsī shàngbān.',vi:'Mẹ làm việc ở một công ty ngoại thương.'},
      {zh:'她早上大概七点去上班。',py:'Tā zǎoshang dàgài qī diǎn qù shàngbān.',vi:'Buổi sáng khoảng bảy giờ mẹ đi làm.'},
      {zh:'她坐地铁去公司。',py:'Tā zuò dìtiě qù gōngsī.',vi:'Mẹ đi tàu điện ngầm đến công ty.'},
      {zh:'我姐姐只喜欢做饭，她做的饭很好吃。',py:'Wǒ jiějie zhǐ xǐhuan zuòfàn, tā zuò de fàn hěn hǎochī.',vi:'Chị gái tôi chỉ thích nấu ăn, cơm chị nấu rất ngon.'},
      {zh:'爸爸说，全家人都要定期去医院看看身体。',py:'Bàba shuō, quán jiā rén dōu yào dìngqī qù yīyuàn kànkan shēntǐ.',vi:'Bố nói cả nhà đều phải định kỳ đến bệnh viện kiểm tra sức khỏe.'},
      {zh:'明年我们全家想去外国旅游。',py:'Míngnián wǒmen quán jiā xiǎng qù wàiguó lǚyóu.',vi:'Năm sau cả nhà chúng tôi muốn đi du lịch nước ngoài.'},
    ],
    quiz:[
      {q:'Bố làm nghề gì?',o:['Bác sĩ','Nhân viên ngoại thương','Kỹ sư'],a:0},
      {q:'Mẹ đi làm bằng phương tiện gì?',o:['Tàu điện ngầm','Taxi','Xe đạp'],a:0},
      {q:'Bố dặn cả nhà điều gì?',o:['Định kỳ đi khám sức khỏe','Học tiếng Anh','Nấu cơm'],a:0},
    ]
  },
  {
    title:'妈妈的生日 – Sinh nhật mẹ', lessonIdx:19,
    focus:['生日','月','日','天','商场','东西','处理','错误','错','毛衣','香水','对不起','没关系'],
    lines:[
      {zh:'十一月二日是我妈妈的生日。',py:'Shíyī yuè èr rì shì wǒ māma de shēngrì.',vi:'Ngày 2 tháng 11 là sinh nhật mẹ tôi.'},
      {zh:'今年妈妈五十八岁。',py:'Jīnnián māma wǔshíbā suì.',vi:'Năm nay mẹ năm mươi tám tuổi.'},
      {zh:'星期六我和爸爸去商场买东西。',py:'Xīngqīliù wǒ hé bàba qù shāngchǎng mǎi dōngxi.',vi:'Thứ Bảy tôi và bố đi trung tâm thương mại mua đồ.'},
      {zh:'商场里的东西很多，有衣服、香水，也有手机。',py:'Shāngchǎng lǐ de dōngxi hěn duō, yǒu yīfu, xiāngshuǐ, yě yǒu shǒujī.',vi:'Đồ trong trung tâm thương mại rất nhiều, có quần áo, nước hoa, cũng có điện thoại.'},
      {zh:'爸爸想买一件毛衣，我想买一瓶香水。',py:'Bàba xiǎng mǎi yí jiàn máoyī, wǒ xiǎng mǎi yì píng xiāngshuǐ.',vi:'Bố muốn mua một chiếc áo len, tôi muốn mua một lọ nước hoa.'},
      {zh:'营业员找钱找错了，她处理了这个错误。',py:'Yíngyèyuán zhǎo qián zhǎo cuò le, tā chǔlǐle zhège cuòwù.',vi:'Nhân viên trả lại tiền thừa bị nhầm, cô ấy đã xử lý sai sót đó.'},
      {zh:'她说："对不起，先生！"',py:'Tā shuō: "Duìbuqǐ, xiānsheng!"',vi:'Cô ấy nói: "Xin lỗi anh!"'},
      {zh:'爸爸说："没关系。"',py:'Bàba shuō: "Méi guānxi."',vi:'Bố nói: "Không sao."'},
      {zh:'生日那天，妈妈很高兴。',py:'Shēngrì nà tiān, māma hěn gāoxìng.',vi:'Hôm sinh nhật, mẹ rất vui.'},
      {zh:'她说："谢谢你们！毛衣很好看，香水也很香。"',py:'Tā shuō: "Xièxie nǐmen! Máoyī hěn hǎokàn, xiāngshuǐ yě hěn xiāng."',vi:'Mẹ nói: "Cảm ơn hai bố con! Áo len rất đẹp, nước hoa cũng rất thơm."'},
    ],
    quiz:[
      {q:'Sinh nhật mẹ là ngày nào?',o:['Ngày 2 tháng 11','Ngày 11 tháng 2','Thứ Bảy'],a:0},
      {q:'Bố muốn mua gì?',o:['Áo len','Nước hoa','Điện thoại'],a:0},
      {q:'Nhân viên đã mắc lỗi gì?',o:['Trả lại tiền thừa sai','Bán nhầm hàng','Đóng cửa sớm'],a:0},
    ]
  },
  {
    title:'我的一日三餐 – Ba bữa ăn trong ngày của tôi', lessonIdx:20,
    focus:['早饭','午饭','晚饭','工程师','用','筷子','双','根','错','不错','不要','不用','吃药'],
    lines:[
      {zh:'我是工程师，在一家中国公司工作。',py:'Wǒ shì gōngchéngshī, zài yì jiā Zhōngguó gōngsī gōngzuò.',vi:'Tôi là kỹ sư, làm việc ở một công ty Trung Quốc.'},
      {zh:'早上我七点吃早饭，常常吃面条或者包子。',py:'Zǎoshang wǒ qī diǎn chī zǎofàn, chángcháng chī miàntiáo huòzhě bāozi.',vi:'Buổi sáng tôi ăn sáng lúc bảy giờ, thường ăn mì hoặc bánh bao.'},
      {zh:'中午我在公司食堂吃午饭。',py:'Zhōngwǔ wǒ zài gōngsī shítáng chī wǔfàn.',vi:'Buổi trưa tôi ăn trưa ở nhà ăn công ty.'},
      {zh:'中国朋友教我用筷子。',py:'Zhōngguó péngyou jiāo wǒ yòng kuàizi.',vi:'Bạn người Trung Quốc dạy tôi dùng đũa.'},
      {zh:'我用得不太好，经常用错。',py:'Wǒ yòng de bú tài hǎo, jīngcháng yòng cuò.',vi:'Tôi dùng chưa giỏi lắm, thường dùng sai.'},
      {zh:'他说："不错，不错！"',py:'Tā shuō: "Búcuò, búcuò!"',vi:'Anh ấy nói: "Khá lắm, khá lắm!"'},
      {zh:'晚上我回家吃晚饭，妈妈做的饭很好吃。',py:'Wǎnshang wǒ huí jiā chī wǎnfàn, māma zuò de fàn hěn hǎochī.',vi:'Buổi tối tôi về nhà ăn tối, cơm mẹ nấu rất ngon.'},
      {zh:'上个星期我生病了，医生说："不要喝酒，要吃药。"',py:'Shàng ge xīngqī wǒ shēngbìng le, yīshēng shuō: "Búyào hē jiǔ, yào chī yào."',vi:'Tuần trước tôi bị ốm, bác sĩ nói: "Đừng uống rượu, phải uống thuốc."'},
      {zh:'现在我好了，不用吃药了。',py:'Xiànzài wǒ hǎo le, búyòng chī yào le.',vi:'Bây giờ tôi khỏi rồi, không cần uống thuốc nữa.'},
      {zh:'我买了一双新筷子，是红色的。',py:'Wǒ mǎile yì shuāng xīn kuàizi, shì hóngsè de.',vi:'Tôi mua một đôi đũa mới, màu đỏ.'},
    ],
    quiz:[
      {q:'Tôi làm nghề gì?',o:['Kỹ sư','Bác sĩ','Thư ký'],a:0},
      {q:'Ai dạy tôi dùng đũa?',o:['Bạn người Trung Quốc','Mẹ','Bác sĩ'],a:0},
      {q:'Bác sĩ dặn gì?',o:['Đừng uống rượu, phải uống thuốc','Ăn nhiều hơn','Không cần uống thuốc'],a:0},
    ]
  },
  {
    title:'我的生活和梦想 – Cuộc sống và ước mơ của tôi', lessonIdx:null, level:'Tổng hợp',
    focus:[],
    lines:[
      {zh:'我叫李明，今年二十二岁，是一名大学生。',py:'Wǒ jiào Lǐ Míng, jīnnián èrshí\'èr suì, shì yì míng dàxuéshēng.',vi:'Tôi tên là Lý Minh, năm nay 22 tuổi, là một sinh viên đại học.'},
      {zh:'我家住在一个安静的小城市，离学校不太远。',py:'Wǒ jiā zhù zài yí gè ānjìng de xiǎo chéngshì, lí xuéxiào bú tài yuǎn.',vi:'Nhà tôi ở một thành phố nhỏ yên tĩnh, cách trường không xa lắm.'},
      {zh:'我每天早上七点起床，洗脸、刷牙以后，就骑自行车去学校。',py:'Wǒ měitiān zǎoshang qī diǎn qǐchuáng, xǐliǎn, shuāyá yǐhòu, jiù qí zìxíngchē qù xuéxiào.',vi:'Mỗi sáng tôi dậy lúc 7 giờ, rửa mặt, đánh răng xong thì đạp xe đạp đến trường.'},
      {zh:'学校里有很多老师和同学。',py:'Xuéxiào lǐ yǒu hěn duō lǎoshī hé tóngxué.',vi:'Trong trường có rất nhiều thầy cô và bạn học.'},
      {zh:'大家都很热情，也喜欢帮助别人。',py:'Dàjiā dōu hěn rèqíng, yě xǐhuān bāngzhù biérén.',vi:'Mọi người đều rất nhiệt tình, cũng thích giúp đỡ người khác.'},
      {zh:'下课以后，我们常常一起聊天、唱歌、打篮球或者踢足球。',py:'Xiàkè yǐhòu, wǒmen chángcháng yìqǐ liáotiān, chànggē, dǎ lánqiú huòzhě tī zúqiú.',vi:'Sau khi tan học, chúng tôi thường cùng nhau trò chuyện, hát, chơi bóng rổ hoặc đá bóng.'},
      {zh:'有时候，我们还去图书馆看书，学习汉语和英语。',py:'Yǒu shíhou, wǒmen hái qù túshūguǎn kànshū, xuéxí Hànyǔ hé Yīngyǔ.',vi:'Thỉnh thoảng, chúng tôi còn đến thư viện đọc sách, học tiếng Trung và tiếng Anh.'},
      {zh:'我很喜欢中国文化，也喜欢中国菜，比如饺子、包子、面条、米饭和火锅。',py:'Wǒ hěn xǐhuān Zhōngguó wénhuà, yě xǐhuān Zhōngguó cài, bǐrú jiǎozi, bāozi, miàntiáo, mǐfàn hé huǒguō.',vi:'Tôi rất thích văn hóa Trung Quốc, cũng thích món ăn Trung Quốc, ví dụ như sủi cảo, bánh bao, mì sợi, cơm và lẩu.'},
      {zh:'我觉得学习汉语虽然不容易，但是非常有意思。',py:'Wǒ juéde xuéxí Hànyǔ suīrán bù róngyì, dànshì fēicháng yǒu yìsi.',vi:'Tôi thấy học tiếng Trung tuy không dễ, nhưng rất thú vị.'},
      {zh:'每天我都会认真练习听、说、读、写，希望以后可以说一口流利的汉语。',py:'Měitiān wǒ dōu huì rènzhēn liànxí tīng, shuō, dú, xiě, xīwàng yǐhòu kěyǐ shuō yìkǒu liúlì de Hànyǔ.',vi:'Mỗi ngày tôi đều chăm chỉ luyện nghe, nói, đọc, viết, hy vọng sau này có thể nói tiếng Trung lưu loát.'},
      {zh:'周末的时候，我喜欢和家人一起去公园散步。',py:'Zhōumò de shíhou, wǒ xǐhuān hé jiārén yìqǐ qù gōngyuán sànbù.',vi:'Vào cuối tuần, tôi thích cùng gia đình đi dạo ở công viên.'},
      {zh:'春天有花，夏天有树，秋天有很多水果，冬天有时候会下雪。',py:'Chūntiān yǒu huā, xiàtiān yǒu shù, qiūtiān yǒu hěn duō shuǐguǒ, dōngtiān yǒu shíhou huì xiàxuě.',vi:'Mùa xuân có hoa, mùa hè có cây, mùa thu có nhiều hoa quả, mùa đông thỉnh thoảng có tuyết rơi.'},
      {zh:'天气好的时候，我们还会照相、放风筝、爬山或者骑车。',py:'Tiānqì hǎo de shíhou, wǒmen hái huì zhàoxiàng, fàng fēngzheng, páshān huòzhě qíchē.',vi:'Khi thời tiết đẹp, chúng tôi còn chụp ảnh, thả diều, leo núi hoặc đạp xe.'},
      {zh:'我的朋友来自不同的地方。',py:'Wǒ de péngyou láizì bùtóng de dìfang.',vi:'Bạn bè của tôi đến từ những nơi khác nhau.'},
      {zh:'有的人喜欢音乐，有的人喜欢画画，还有的人喜欢游泳、跑步或者打羽毛球。',py:'Yǒude rén xǐhuān yīnyuè, yǒude rén xǐhuān huàhuà, hái yǒude rén xǐhuān yóuyǒng, pǎobù huòzhě dǎ yǔmáoqiú.',vi:'Có người thích âm nhạc, có người thích vẽ tranh, còn có người thích bơi lội, chạy bộ hoặc đánh cầu lông.'},
      {zh:'我们常常互相帮助，一起解决学习和生活中的问题。',py:'Wǒmen chángcháng hùxiāng bāngzhù, yìqǐ jiějué xuéxí hé shēnghuó zhōng de wèntí.',vi:'Chúng tôi thường xuyên giúp đỡ lẫn nhau, cùng nhau giải quyết các vấn đề trong học tập và cuộc sống.'},
      {zh:'我的梦想是当一名优秀的汉语老师。',py:'Wǒ de mèngxiǎng shì dāng yì míng yōuxiù de Hànyǔ lǎoshī.',vi:'Ước mơ của tôi là trở thành một giáo viên tiếng Trung xuất sắc.'},
      {zh:'我希望以后能认识更多中国朋友，也希望有机会去北京、上海、西安、杭州和广州旅行，了解中国不同地方的风景、美食和文化。',py:'Wǒ xīwàng yǐhòu néng rènshi gèng duō Zhōngguó péngyou, yě xīwàng yǒu jīhuì qù Běijīng, Shànghǎi, Xī\'ān, Hángzhōu hé Guǎngzhōu lǚxíng, liǎojiě Zhōngguó bùtóng dìfang de fēngjǐng, měishí hé wénhuà.',vi:'Tôi hy vọng sau này có thể quen biết thêm nhiều bạn bè Trung Quốc, cũng hy vọng có cơ hội đi Bắc Kinh, Thượng Hải, Tây An, Hàng Châu và Quảng Châu du lịch, tìm hiểu phong cảnh, ẩm thực và văn hóa của các vùng khác nhau ở Trung Quốc.'},
      {zh:'我相信，只要每天坚持学习，不怕犯错误，多听、多说、多读、多写，我的汉语一定会越来越好，我的梦想也一定会实现。',py:'Wǒ xiāngxìn, zhǐyào měitiān jiānchí xuéxí, bú pà fàn cuòwù, duō tīng, duō shuō, duō dú, duō xiě, wǒ de Hànyǔ yídìng huì yuè lái yuè hǎo, wǒ de mèngxiǎng yě yídìng huì shíxiàn.',vi:'Tôi tin rằng, chỉ cần mỗi ngày kiên trì học tập, không sợ mắc lỗi, nghe nhiều, nói nhiều, đọc nhiều, viết nhiều, tiếng Trung của tôi nhất định sẽ ngày càng tốt hơn, ước mơ của tôi cũng nhất định sẽ thực hiện được.'},
    ],
    quiz:[

    ]
  },
];
