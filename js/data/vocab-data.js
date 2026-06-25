// Vocab, Dialogue, Phrases data
const VOCAB_DATA = [
  {
    lesson: 'Buổi 1 (b1): Phát âm & Từ vựng cơ bản',
    words: [
      {zh:'你',  py:'nǐ',    type:'Đại từ',  vi:'bạn (ngôi thứ 2 số ít)', ex:[{zh:'你是学生吗？',py:'Nǐ shì xuéshēng ma?',vi:'Bạn có phải là học sinh không?'},{zh:'你叫什么名字？',py:'Nǐ jiào shénme míngzi?',vi:'Bạn tên là gì?'},{zh:'你是哪国人？',py:'Nǐ shì nǎ guó rén?',vi:'Bạn là người nước nào?'},{zh:'你学汉语多长时间了？',py:'Nǐ xué Hànyǔ duō cháng shíjiān le?',vi:'Bạn học tiếng Trung bao lâu rồi?'}],},
      {zh:'好',  py:'hǎo',   type:'Tính từ', vi:'tốt, khỏe, đẹp', ex:[{zh:'这里的饭很好吃。',py:'Zhèlǐ de fàn hěn hǎochī.',vi:'Cơm ở đây rất ngon.'},{zh:'你好吗？',py:'Nǐ hǎo ma?',vi:'Bạn có khỏe không?'},{zh:'这本书很好。',py:'Zhè běn shū hěn hǎo.',vi:'Cuốn sách này rất hay.'},{zh:'好，我知道了。',py:'Hǎo, wǒ zhīdào le.',vi:'Được rồi, tôi biết rồi.'},{zh:'天气真好！',py:'Tiānqì zhēn hǎo!',vi:'Thời tiết thật đẹp!'}],},
      {zh:'你好',py:'nǐ hǎo',type:'Cụm từ',  vi:'xin chào', ex:[{zh:'你好，我叫张东。',py:'Nǐ hǎo, wǒ jiào Zhāng Dōng.',vi:'Xin chào, tôi tên là Trương Đông.'},{zh:'你好，请进！',py:'Nǐ hǎo, qǐng jìn!',vi:'Xin chào, mời vào!'},{zh:'你好，我叫李明。',py:'Nǐ hǎo, wǒ jiào Lǐ Míng.',vi:'Xin chào, tôi tên Lý Minh.'},{zh:'老师好！',py:'Lǎoshī hǎo!',vi:'Chào thầy/cô!'}],},
      {zh:'我',  py:'wǒ',    type:'Đại từ',  vi:'tôi (ngôi thứ 1 số ít)', ex:[{zh:'我是越南人。',py:'Wǒ shì Yuènán rén.',vi:'Tôi là người Việt Nam.'},{zh:'我是越南人。',py:'Wǒ shì Yuènán rén.',vi:'Tôi là người Việt Nam.'},{zh:'我学习汉语。',py:'Wǒ xuéxí Hànyǔ.',vi:'Tôi học tiếng Trung.'},{zh:'我有一个哥哥。',py:'Wǒ yǒu yī gè gēge.',vi:'Tôi có một người anh.'},{zh:'我喜欢吃饺子。',py:'Wǒ xǐhuān chī jiǎozi.',vi:'Tôi thích ăn sủi cảo.'}],},
      {zh:'不',  py:'bù',    type:'Phó từ',  vi:'không (phủ định)', ex:[{zh:'我不忙，你呢？',py:'Wǒ bù máng, nǐ ne?',vi:'Tôi không bận, còn bạn?'},{zh:'我不喝酒。',py:'Wǒ bù hē jiǔ.',vi:'Tôi không uống rượu.'},{zh:'这不是我的书。',py:'Zhè bú shì wǒ de shū.',vi:'Đây không phải sách của tôi.'},{zh:'我不太忙。',py:'Wǒ bú tài máng.',vi:'Tôi không bận lắm.'},{zh:'他不去学校。',py:'Tā bù qù xuéxiào.',vi:'Anh ấy không đến trường.'}],},
      {zh:'大',  py:'dà',    type:'Tính từ', vi:'to, lớn', ex:[{zh:'这个房间很大。',py:'Zhège fángjiān hěn dà.',vi:'Căn phòng này rất to.'},{zh:'北京是一个大城市。',py:'Běijīng shì yī gè dà chéngshì.',vi:'Bắc Kinh là một thành phố lớn.'},{zh:'这个包太大了。',py:'Zhège bāo tài dà le.',vi:'Cái túi này quá to.'},{zh:'他的家很大。',py:'Tā de jiā hěn dà.',vi:'Nhà anh ấy rất rộng.'}],},
      {zh:'口',  py:'kǒu',   type:'Lượng từ',vi:'miệng; đếm người trong gia đình', ex:[{zh:'我家有五口人。',py:'Wǒ jiā yǒu wǔ kǒu rén.',vi:'Nhà tôi có năm người.'},{zh:'我家有五口人。',py:'Wǒ jiā yǒu wǔ kǒu rén.',vi:'Nhà tôi có năm người.'},{zh:'张口说话。',py:'Zhāng kǒu shuōhuà.',vi:'Mở miệng ra nói chuyện.'},{zh:'他家三口人。',py:'Tā jiā sān kǒu rén.',vi:'Nhà anh ấy ba người.'}],},
      {zh:'人',  py:'rén',   type:'Danh từ', vi:'người', ex:[{zh:'你是中国人吗？',py:'Nǐ shì Zhōngguó rén ma?',vi:'Bạn có phải là người Trung Quốc không?'},{zh:'那个人是我的老师。',py:'Nàge rén shì wǒ de lǎoshī.',vi:'Người đó là thầy giáo của tôi.'},{zh:'这里有很多人。',py:'Zhèlǐ yǒu hěn duō rén.',vi:'Ở đây có rất nhiều người.'},{zh:'中国人口很多。',py:'Zhōngguó rénkǒu hěn duō.',vi:'Trung Quốc dân số rất đông.'},{zh:'他是好人。',py:'Tā shì hǎo rén.',vi:'Anh ấy là người tốt.'}],},
      {zh:'白',  py:'bái',   type:'Tính từ', vi:'trắng, màu trắng', ex:[{zh:'她喜欢白色的衣服。',py:'Tā xǐhuan báisè de yīfu.',vi:'Cô ấy thích quần áo màu trắng.'},{zh:'她穿白色的裙子。',py:'Tā chuān báisè de qúnzi.',vi:'Cô ấy mặc váy màu trắng.'},{zh:'白水不好喝。',py:'Báishuǐ bù hǎohē.',vi:'Nước lọc không ngon.'},{zh:'白天工作，晚上学习。',py:'Báitiān gōngzuò, wǎnshang xuéxí.',vi:'Ban ngày đi làm, buổi tối học bài.'}],},
      {zh:'女',  py:'nǚ',    type:'Tính từ', vi:'giới tính nữ', ex:[{zh:'她是女学生。',py:'Tā shì nǚ xuéshēng.',vi:'Cô ấy là học sinh nữ.'},{zh:'她是女学生。',py:'Tā shì nǚ xuéshēng.',vi:'Cô ấy là nữ sinh.'},{zh:'我有一个女儿。',py:'Wǒ yǒu yī gè nǚ\'ér.',vi:'Tôi có một người con gái.'},{zh:'她是我的女朋友。',py:'Tā shì wǒ de nǚpéngyou.',vi:'Cô ấy là bạn gái của tôi.'}],},
      {zh:'马',  py:'mǎ',    type:'Danh từ', vi:'con ngựa', ex:[{zh:'那匹马很大。',py:'Nà pǐ mǎ hěn dà.',vi:'Con ngựa kia rất to.'},{zh:'那匹马跑得很快。',py:'Nà pǐ mǎ pǎo de hěn kuài.',vi:'Con ngựa đó chạy rất nhanh.'},{zh:'他姓马。',py:'Tā xìng Mǎ.',vi:'Anh ấy họ Mã.'},{zh:'马是大动物。',py:'Mǎ shì dà dòngwù.',vi:'Ngựa là động vật lớn.'}],},
      {zh:'一',  py:'yī',    type:'Số đếm',  vi:'một', ex:[{zh:'我有一个哥哥。',py:'Wǒ yǒu yī gè gēge.',vi:'Tôi có một anh trai.'},{zh:'我有一本书。',py:'Wǒ yǒu yī běn shū.',vi:'Tôi có một cuốn sách.'},{zh:'一加一等于二。',py:'Yī jiā yī děngyú èr.',vi:'Một cộng một bằng hai.'},{zh:'一个苹果多少钱？',py:'Yī gè píngguǒ duōshao qián?',vi:'Một quả táo bao nhiêu tiền?'}],},
      {zh:'五',  py:'wǔ',    type:'Số đếm',  vi:'năm', ex:[{zh:'我家有五口人。',py:'Wǒ jiā yǒu wǔ kǒu rén.',vi:'Nhà tôi có năm người.'},{zh:'我家有五口人。',py:'Wǒ jiā yǒu wǔ kǒu rén.',vi:'Nhà tôi có năm người.'},{zh:'今天是五月五号。',py:'Jīntiān shì wǔ yuè wǔ hào.',vi:'Hôm nay là ngày 5 tháng 5.'},{zh:'五个苹果。',py:'Wǔ gè píngguǒ.',vi:'Năm quả táo.'}],},
      {zh:'八',  py:'bā',    type:'Số đếm',  vi:'tám', ex:[{zh:'今天是八号。',py:'Jīntiān shì bā hào.',vi:'Hôm nay là ngày mồng tám.'},{zh:'今天八号。',py:'Jīntiān bā hào.',vi:'Hôm nay ngày 8.'},{zh:'八月天气很热。',py:'Bā yuè tiānqì hěn rè.',vi:'Thời tiết tháng 8 rất nóng.'},{zh:'他八岁了。',py:'Tā bā suì le.',vi:'Anh ấy 8 tuổi rồi.'}],},
    ]
  },
  {
    lesson: 'Buổi 2 (b2): 忙不忙？– Bận không?',
    words: [
      {zh:'忙',   py:'máng',    type:'Tính từ', vi:'bận, bận rộn', ex:[{zh:'你今天忙吗？',py:'Nǐ jīntiān máng ma?',vi:'Hôm nay bạn có bận không?'},{zh:'你最近忙吗？',py:'Nǐ zuìjìn máng ma?',vi:'Dạo này bạn có bận không?'},{zh:'我每天都很忙。',py:'Wǒ měitiān dōu hěn máng.',vi:'Tôi ngày nào cũng rất bận.'},{zh:'他忙着工作。',py:'Tā mángzhe gōngzuò.',vi:'Anh ấy đang bận làm việc.'},{zh:'我没有空，太忙了。',py:'Wǒ méiyǒu kòng, tài máng le.',vi:'Tôi không có thời gian, bận quá.'}],},
      {zh:'很',   py:'hěn',     type:'Phó từ',  vi:'rất', ex:[{zh:'汉语很有意思。',py:'Hànyǔ hěn yǒu yìsi.',vi:'Tiếng Hán rất thú vị.'},{zh:'她很漂亮。',py:'Tā hěn piàoliang.',vi:'Cô ấy rất xinh đẹp.'},{zh:'这里的天气很好。',py:'Zhèlǐ de tiānqì hěn hǎo.',vi:'Thời tiết ở đây rất đẹp.'},{zh:'汉语很难，但很有趣。',py:'Hànyǔ hěn nán, dàn hěn yǒuqù.',vi:'Tiếng Trung rất khó nhưng rất thú vị.'}],},
      {zh:'吗',   py:'ma',      type:'Trợ từ',  vi:'à? không? (câu hỏi)', ex:[{zh:'你是老师吗？',py:'Nǐ shì lǎoshī ma?',vi:'Bạn có phải là giáo viên không?'},{zh:'你是学生吗？',py:'Nǐ shì xuéshēng ma?',vi:'Bạn có phải là học sinh không?'},{zh:'你吃饭了吗？',py:'Nǐ chīfàn le ma?',vi:'Bạn ăn cơm chưa?'},{zh:'他来了吗？',py:'Tā lái le ma?',vi:'Anh ấy đến chưa?'},{zh:'你喜欢喝茶吗？',py:'Nǐ xǐhuān hē chá ma?',vi:'Bạn có thích uống trà không?'}],},
      {zh:'汉语', py:'Hànyǔ',   type:'Danh từ', vi:'tiếng Hán', ex:[{zh:'我在学习汉语。',py:'Wǒ zài xuéxí Hànyǔ.',vi:'Tôi đang học tiếng Hán.'},{zh:'汉语很有意思。',py:'Hànyǔ hěn yǒu yìsi.',vi:'Tiếng Trung rất thú vị.'},{zh:'我学汉语三个月了。',py:'Wǒ xué Hànyǔ sān gè yuè le.',vi:'Tôi học tiếng Trung được ba tháng rồi.'},{zh:'他的汉语说得很好。',py:'Tā de Hànyǔ shuō de hěn hǎo.',vi:'Tiếng Trung của anh ấy nói rất giỏi.'},{zh:'你在哪里学汉语？',py:'Nǐ zài nǎlǐ xué Hànyǔ?',vi:'Bạn học tiếng Trung ở đâu?'}],},
      {zh:'难',   py:'nán',     type:'Tính từ', vi:'khó', ex:[{zh:'汉字很难写。',py:'Hànzì hěn nán xiě.',vi:'Chữ Hán rất khó viết.'},{zh:'汉语发音很难。',py:'Hànyǔ fāyīn hěn nán.',vi:'Phát âm tiếng Trung rất khó.'},{zh:'这道题太难了。',py:'Zhè dào tí tài nán le.',vi:'Bài tập này khó quá.'},{zh:'难，但我不放弃。',py:'Nán, dàn wǒ bù fàngqì.',vi:'Khó nhưng tôi không bỏ cuộc.'}],},
      {zh:'太',   py:'tài',     type:'Phó từ',  vi:'quá, hơi', ex:[{zh:'今天太热了！',py:'Jīntiān tài rè le!',vi:'Hôm nay nóng quá!'},{zh:'今天太冷了。',py:'Jīntiān tài lěng le.',vi:'Hôm nay lạnh quá.'},{zh:'这个太贵了。',py:'Zhège tài guì le.',vi:'Cái này đắt quá.'},{zh:'你来得太晚了。',py:'Nǐ lái de tài wǎn le.',vi:'Bạn đến muộn quá rồi.'}],},
      {zh:'太…了',py:'tài…le',  type:'Cấu trúc',vi:'quá… rồi', ex:[{zh:'这个苹果太贵了！',py:'Zhège píngguǒ tài guì le!',vi:'Quả táo này đắt quá rồi!'},{zh:'今天太热了！',py:'Jīntiān tài rè le!',vi:'Hôm nay nóng quá!'},{zh:'这里太远了。',py:'Zhèlǐ tài yuǎn le.',vi:'Chỗ này xa quá.'},{zh:'他说话太快了。',py:'Tā shuōhuà tài kuài le.',vi:'Anh ấy nói chuyện nhanh quá.'}],},
      {zh:'不太', py:'bú tài',  type:'Cấu trúc',vi:'không quá, không lắm', ex:[{zh:'汉语不太难。',py:'Hànyǔ bú tài nán.',vi:'Tiếng Hán không quá khó.'},{zh:'我不太喜欢吃辣。',py:'Wǒ bú tài xǐhuān chī là.',vi:'Tôi không thích ăn cay lắm.'},{zh:'这里不太远。',py:'Zhèlǐ bú tài yuǎn.',vi:'Chỗ này không xa lắm.'},{zh:'他不太高。',py:'Tā bú tài gāo.',vi:'Anh ấy không cao lắm.'}],},
      {zh:'他',   py:'tā',      type:'Đại từ',  vi:'anh ấy (ngôi 3 nam)', ex:[{zh:'他是我哥哥。',py:'Tā shì wǒ gēge.',vi:'Anh ấy là anh trai tôi.'},{zh:'他是我的朋友。',py:'Tā shì wǒ de péngyou.',vi:'Anh ấy là bạn của tôi.'},{zh:'他学汉语很认真。',py:'Tā xué Hànyǔ hěn rènzhēn.',vi:'Anh ấy học tiếng Trung rất chăm chỉ.'},{zh:'他今年二十岁。',py:'Tā jīnnián èrshí suì.',vi:'Năm nay anh ấy 20 tuổi.'}],},
      {zh:'她',   py:'tā',      type:'Đại từ',  vi:'cô ấy (ngôi 3 nữ)', ex:[{zh:'她学汉语学得很好。',py:'Tā xué Hànyǔ xué de hěn hǎo.',vi:'Cô ấy học tiếng Hán rất tốt.'},{zh:'她是我的同学。',py:'Tā shì wǒ de tóngxué.',vi:'Cô ấy là bạn cùng lớp của tôi.'},{zh:'她很喜欢学汉语。',py:'Tā hěn xǐhuān xué Hànyǔ.',vi:'Cô ấy rất thích học tiếng Trung.'},{zh:'她来自越南。',py:'Tā láizì Yuènán.',vi:'Cô ấy đến từ Việt Nam.'}],},
      {zh:'们',   py:'men',     type:'Hậu tố',  vi:'hậu tố số nhiều: 我们/你们/他们', ex:[{zh:'我们是同学。',py:'Wǒmen shì tóngxué.',vi:'Chúng tôi là bạn cùng lớp.'},{zh:'我们一起去吃饭吧。',py:'Wǒmen yīqǐ qù chīfàn ba.',vi:'Chúng ta cùng đi ăn cơm nhé.'},{zh:'他们都是学生。',py:'Tāmen dōu shì xuéshēng.',vi:'Họ đều là học sinh.'},{zh:'你们好！',py:'Nǐmen hǎo!',vi:'Xin chào các bạn!'}],},
      {zh:'男',   py:'nán',     type:'Tính từ', vi:'giới tính nam', ex:[{zh:'他是男学生。',py:'Tā shì nán xuéshēng.',vi:'Anh ấy là học sinh nam.'},{zh:'那个男生叫什么名字？',py:'Nàge nánshēng jiào shénme míngzi?',vi:'Bạn nam đó tên là gì?'},{zh:'他是男老师。',py:'Tā shì nán lǎoshī.',vi:'Thầy ấy là giáo viên nam.'},{zh:'男女同学都在。',py:'Nán nǚ tóngxué dōu zài.',vi:'Bạn nam nữ đều có mặt.'}],},
      {zh:'爸爸', py:'bàba',    type:'Danh từ', vi:'bố, ba', ex:[{zh:'我爸爸很忙。',py:'Wǒ bàba hěn máng.',vi:'Bố tôi rất bận.'},{zh:'我爸爸是医生。',py:'Wǒ bàba shì yīshēng.',vi:'Bố tôi là bác sĩ.'},{zh:'爸爸每天很忙。',py:'Bàba měitiān hěn máng.',vi:'Bố ngày nào cũng rất bận.'},{zh:'我跟爸爸一起去银行。',py:'Wǒ gēn bàba yīqǐ qù yínháng.',vi:'Tôi cùng bố đi ngân hàng.'}],},
      {zh:'妈妈', py:'māma',    type:'Danh từ', vi:'mẹ, má', ex:[{zh:'妈妈做饭很好吃。',py:'Māma zuò fàn hěn hǎochī.',vi:'Mẹ nấu ăn rất ngon.'},{zh:'我妈妈做的饭很好吃。',py:'Wǒ māma zuò de fàn hěn hǎochī.',vi:'Cơm mẹ nấu rất ngon.'},{zh:'妈妈，我回来了！',py:'Māma, wǒ huílái le!',vi:'Mẹ ơi, con về rồi!'},{zh:'妈妈在家吗？',py:'Māma zài jiā ma?',vi:'Mẹ có ở nhà không?'}],},
      {zh:'哥哥', py:'gēge',    type:'Danh từ', vi:'anh trai', ex:[{zh:'我哥哥学汉语。',py:'Wǒ gēge xué Hànyǔ.',vi:'Anh trai tôi học tiếng Hán.'},{zh:'我哥哥在北京工作。',py:'Wǒ gēge zài Běijīng gōngzuò.',vi:'Anh tôi làm việc ở Bắc Kinh.'},{zh:'哥哥比我高。',py:'Gēge bǐ wǒ gāo.',vi:'Anh cao hơn tôi.'},{zh:'我有一个哥哥两个妹妹。',py:'Wǒ yǒu yī gè gēge liǎng gè mèimei.',vi:'Tôi có một anh và hai em gái.'}],},
      {zh:'弟弟', py:'dìdi',    type:'Danh từ', vi:'em trai', ex:[{zh:'弟弟今年八岁。',py:'Dìdi jīnnián bā suì.',vi:'Em trai năm nay tám tuổi.'},{zh:'我弟弟今年十五岁。',py:'Wǒ dìdi jīnnián shíwǔ suì.',vi:'Em trai tôi năm nay 15 tuổi.'},{zh:'弟弟喜欢踢足球。',py:'Dìdi xǐhuān tī zúqiú.',vi:'Em trai thích đá bóng.'},{zh:'我和弟弟一起学习。',py:'Wǒ hé dìdi yīqǐ xuéxí.',vi:'Tôi và em trai cùng học bài.'}],},
      {zh:'妹妹', py:'mèimei',  type:'Danh từ', vi:'em gái', ex:[{zh:'我妹妹很漂亮。',py:'Wǒ mèimei hěn piàoliang.',vi:'Em gái tôi rất xinh đẹp.'},{zh:'我妹妹学习很好。',py:'Wǒ mèimei xuéxí hěn hǎo.',vi:'Em gái tôi học rất giỏi.'},{zh:'妹妹比我小三岁。',py:'Mèimei bǐ wǒ xiǎo sān suì.',vi:'Em gái nhỏ hơn tôi 3 tuổi.'},{zh:'我妹妹也学汉语。',py:'Wǒ mèimei yě xué Hànyǔ.',vi:'Em gái tôi cũng học tiếng Trung.'}],},
      {zh:'姐姐', py:'jiějie',  type:'Danh từ', vi:'chị gái', ex:[{zh:'我姐姐在北京工作。',py:'Wǒ jiějie zài Běijīng gōngzuò.',vi:'Chị gái tôi làm việc ở Bắc Kinh.'},{zh:'我姐姐是护士。',py:'Wǒ jiějie shì hùshi.',vi:'Chị tôi là y tá.'},{zh:'姐姐帮我学汉语。',py:'Jiějie bāng wǒ xué Hànyǔ.',vi:'Chị giúp tôi học tiếng Trung.'},{zh:'我姐姐结婚了。',py:'Wǒ jiějie jiéhūn le.',vi:'Chị gái tôi đã kết hôn rồi.'}],},
      {zh:'奶奶', py:'nǎinai',  type:'Danh từ', vi:'bà (nội)', ex:[{zh:'奶奶身体很好。',py:'Nǎinai shēntǐ hěn hǎo.',vi:'Bà nội sức khỏe rất tốt.'},{zh:'奶奶每天早起。',py:'Nǎinai měitiān zǎo qǐ.',vi:'Bà nội ngày nào cũng dậy sớm.'},{zh:'我奶奶七十岁了。',py:'Wǒ nǎinai qīshí suì le.',vi:'Bà nội tôi 70 tuổi rồi.'},{zh:'奶奶做的饺子很好吃。',py:'Nǎinai zuò de jiǎozi hěn hǎochī.',vi:'Sủi cảo bà nội làm rất ngon.'}],},
      {zh:'爷爷', py:'yéye',    type:'Danh từ', vi:'ông (nội)', ex:[{zh:'爷爷喜欢喝茶。',py:'Yéye xǐhuan hē chá.',vi:'Ông nội thích uống trà.'},{zh:'爷爷喜欢喝茶。',py:'Yéye xǐhuān hē chá.',vi:'Ông nội thích uống trà.'},{zh:'我爷爷八十岁了。',py:'Wǒ yéye bāshí suì le.',vi:'Ông nội tôi 80 tuổi rồi.'},{zh:'爷爷每天散步。',py:'Yéye měitiān sànbù.',vi:'Ông nội mỗi ngày đều đi dạo.'}],},
      {zh:'阿姨', py:'āyí',     type:'Danh từ', vi:'dì, cô', ex:[{zh:'阿姨在家吗？',py:'Āyí zài jiā ma?',vi:'Dì có ở nhà không?'},{zh:'阿姨，请问厕所在哪儿？',py:'Āyí, qǐngwèn cèsuǒ zài nǎr?',vi:'Cô ơi, xin hỏi nhà vệ sinh ở đâu ạ?'},{zh:'我阿姨在上海工作。',py:'Wǒ āyí zài Shànghǎi gōngzuò.',vi:'Dì tôi làm việc ở Thượng Hải.'},{zh:'阿姨，您好！',py:'Āyí, nín hǎo!',vi:'Cô ơi, chào cô!'}],},
      {zh:'它',   py:'tā',      type:'Đại từ',  vi:'nó (đồ vật, con vật)', ex:[{zh:'它是我的猫。',py:'Tā shì wǒ de māo.',vi:'Nó là con mèo của tôi.'},{zh:'它是我的猫。',py:'Tā shì wǒ de māo.',vi:'Nó là con mèo của tôi.'},{zh:'它很可爱。',py:'Tā hěn kě\'ài.',vi:'Nó rất đáng yêu.'},{zh:'它喜欢吃鱼。',py:'Tā xǐhuān chī yú.',vi:'Nó thích ăn cá.'}],},
    ]
  },
  {
    lesson: 'Buổi 3 (b3): 明天见 – Ngày mai gặp',
    words: [
      {zh:'学',     py:'xué',       type:'Động từ', vi:'học', ex:[{zh:'我学汉语已经一年了。',py:'Wǒ xué Hànyǔ yǐjīng yī nián le.',vi:'Tôi học tiếng Hán đã được một năm rồi.'},{zh:'我在学汉语。',py:'Wǒ zài xué Hànyǔ.',vi:'Tôi đang học tiếng Trung.'},{zh:'学习很重要。',py:'Xuéxí hěn zhòngyào.',vi:'Học tập rất quan trọng.'},{zh:'我每天学两个小时汉语。',py:'Wǒ měitiān xué liǎng gè xiǎoshí Hànyǔ.',vi:'Mỗi ngày tôi học tiếng Trung 2 tiếng.'}],},
      {zh:'英语',   py:'Yīngyǔ',    type:'Danh từ', vi:'tiếng Anh', ex:[{zh:'他英语说得很好。',py:'Tā Yīngyǔ shuō de hěn hǎo.',vi:'Anh ấy nói tiếng Anh rất giỏi.'},{zh:'你会说英语吗？',py:'Nǐ huì shuō Yīngyǔ ma?',vi:'Bạn có biết nói tiếng Anh không?'},{zh:'我的英语不太好。',py:'Wǒ de Yīngyǔ bú tài hǎo.',vi:'Tiếng Anh của tôi không được tốt lắm.'},{zh:'英语是国际语言。',py:'Yīngyǔ shì guójì yǔyán.',vi:'Tiếng Anh là ngôn ngữ quốc tế.'}],},
      {zh:'日语',   py:'Rìyǔ',      type:'Danh từ', vi:'tiếng Nhật', ex:[{zh:'她在学日语。',py:'Tā zài xué Rìyǔ.',vi:'Cô ấy đang học tiếng Nhật.'},{zh:'她在学日语。',py:'Tā zài xué Rìyǔ.',vi:'Cô ấy đang học tiếng Nhật.'},{zh:'日语和汉语有很多汉字。',py:'Rìyǔ hé Hànyǔ yǒu hěn duō Hànzì.',vi:'Tiếng Nhật và tiếng Trung có nhiều chữ Hán.'},{zh:'你会说日语吗？',py:'Nǐ huì shuō Rìyǔ ma?',vi:'Bạn có biết nói tiếng Nhật không?'}],},
      {zh:'韩国语', py:'Hánguóyǔ',  type:'Danh từ', vi:'tiếng Hàn Quốc', ex:[{zh:'韩国语也很难学。',py:'Hánguóyǔ yě hěn nán xué.',vi:'Tiếng Hàn Quốc cũng rất khó học.'},{zh:'韩国语很难学。',py:'Hánguóyǔ hěn nán xué.',vi:'Tiếng Hàn rất khó học.'},{zh:'他在学韩国语。',py:'Tā zài xué Hánguóyǔ.',vi:'Anh ấy đang học tiếng Hàn.'},{zh:'你喜欢韩国语吗？',py:'Nǐ xǐhuān Hánguóyǔ ma?',vi:'Bạn có thích tiếng Hàn không?'}],},
      {zh:'法语',   py:'Fǎyǔ',      type:'Danh từ', vi:'tiếng Pháp', ex:[{zh:'法语听起来很美。',py:'Fǎyǔ tīng qǐlái hěn měi.',vi:'Tiếng Pháp nghe rất hay.'},{zh:'法语很难发音。',py:'Fǎyǔ hěn nán fāyīn.',vi:'Phát âm tiếng Pháp rất khó.'},{zh:'她会说法语和英语。',py:'Tā huì shuō Fǎyǔ hé Yīngyǔ.',vi:'Cô ấy biết nói tiếng Pháp và tiếng Anh.'}],},
      {zh:'德语',   py:'Déyǔ',      type:'Danh từ', vi:'tiếng Đức', ex:[{zh:'他在学德语。',py:'Tā zài xué Déyǔ.',vi:'Anh ấy đang học tiếng Đức.'},{zh:'德语语法很复杂。',py:'Déyǔ yǔfǎ hěn fùzá.',vi:'Ngữ pháp tiếng Đức rất phức tạp.'},{zh:'他在德国学德语。',py:'Tā zài Déguó xué Déyǔ.',vi:'Anh ấy học tiếng Đức ở Đức.'}],},
      {zh:'俄语',   py:'Éyǔ',       type:'Danh từ', vi:'tiếng Nga', ex:[{zh:'俄语的发音很特别。',py:'Éyǔ de fāyīn hěn tèbié.',vi:'Phát âm tiếng Nga rất đặc biệt.'},{zh:'俄语字母很特别。',py:'Éyǔ zìmǔ hěn tèbié.',vi:'Bảng chữ cái tiếng Nga rất đặc biệt.'},{zh:'他会说俄语。',py:'Tā huì shuō Éyǔ.',vi:'Anh ấy biết nói tiếng Nga.'}],},
      {zh:'西班牙语',py:'Xībānyáyǔ',type:'Danh từ', vi:'tiếng Tây Ban Nha', ex:[{zh:'西班牙语在世界上很流行。',py:'Xībānyáyǔ zài shìjiè shang hěn liúxíng.',vi:'Tiếng Tây Ban Nha rất phổ biến trên thế giới.'},{zh:'西班牙语在世界上很流行。',py:'Xībānyáyǔ zài shìjiè shàng hěn liúxíng.',vi:'Tiếng Tây Ban Nha rất phổ biến trên thế giới.'},{zh:'她学了两年西班牙语。',py:'Tā xué le liǎng nián Xībānyáyǔ.',vi:'Cô ấy học tiếng Tây Ban Nha được 2 năm.'}],},
      {zh:'对',     py:'duì',       type:'Tính từ', vi:'đúng, được', ex:[{zh:'你说得对！',py:'Nǐ shuō de duì!',vi:'Bạn nói đúng rồi!'},{zh:'你说得对。',py:'Nǐ shuō de duì.',vi:'Bạn nói đúng.'},{zh:'对，就是这样。',py:'Duì, jiùshì zhèyàng.',vi:'Đúng, đúng vậy đó.'},{zh:'这道题对吗？',py:'Zhè dào tí duì ma?',vi:'Bài này đúng không?'},{zh:'你写的都对。',py:'Nǐ xiě de dōu duì.',vi:'Bạn viết đều đúng hết.'}],},
      {zh:'见',     py:'jiàn',      type:'Động từ', vi:'gặp, thấy', ex:[{zh:'明天见！',py:'Míngtiān jiàn!',vi:'Ngày mai gặp lại!'},{zh:'明天见！',py:'Míngtiān jiàn!',vi:'Ngày mai gặp lại!'},{zh:'很高兴见到你。',py:'Hěn gāoxìng jiàn dào nǐ.',vi:'Rất vui được gặp bạn.'},{zh:'我们什么时候见面？',py:'Wǒmen shénme shíhou jiànmiàn?',vi:'Chúng ta gặp nhau lúc nào?'}],},
      {zh:'再见',   py:'zàijiàn',   type:'Cụm từ',  vi:'tạm biệt', ex:[{zh:'再见，明天见！',py:'Zàijiàn, míngtiān jiàn!',vi:'Tạm biệt, ngày mai gặp lại!'},{zh:'再见，明天见！',py:'Zàijiàn, míngtiān jiàn!',vi:'Tạm biệt, ngày mai gặp lại!'},{zh:'老师再见！',py:'Lǎoshī zàijiàn!',vi:'Tạm biệt thầy/cô!'},{zh:'再见，保重！',py:'Zàijiàn, bǎozhòng!',vi:'Tạm biệt, bảo trọng!'}],},
      {zh:'明天',   py:'míngtiān',  type:'Danh từ', vi:'ngày mai', ex:[{zh:'明天我们去公园吧！',py:'Míngtiān wǒmen qù gōngyuán ba!',vi:'Ngày mai chúng ta đi công viên nhé!'},{zh:'明天是星期一。',py:'Míngtiān shì xīngqī yī.',vi:'Ngày mai là thứ Hai.'},{zh:'我明天去北京。',py:'Wǒ míngtiān qù Běijīng.',vi:'Ngày mai tôi đi Bắc Kinh.'},{zh:'明天见！',py:'Míngtiān jiàn!',vi:'Ngày mai gặp lại!'},{zh:'明天有没有课？',py:'Míngtiān yǒu méiyǒu kè?',vi:'Ngày mai có lớp học không?'}],},
      {zh:'去',     py:'qù',        type:'Động từ', vi:'đi, đến', ex:[{zh:'你去哪儿？',py:'Nǐ qù nǎr?',vi:'Bạn đi đâu vậy?'},{zh:'你去哪儿？',py:'Nǐ qù nǎr?',vi:'Bạn đi đâu vậy?'},{zh:'我去学校上课。',py:'Wǒ qù xuéxiào shàngkè.',vi:'Tôi đi trường học.'},{zh:'我们一起去吧。',py:'Wǒmen yīqǐ qù ba.',vi:'Chúng ta cùng đi nhé.'},{zh:'他去银行取钱。',py:'Tā qù yínháng qǔ qián.',vi:'Anh ấy đi ngân hàng rút tiền.'}],},
      {zh:'银行',   py:'yínháng',   type:'Danh từ', vi:'ngân hàng', ex:[{zh:'银行在那儿。',py:'Yínháng zài nàr.',vi:'Ngân hàng ở đằng kia.'},{zh:'银行在哪里？',py:'Yínháng zài nǎlǐ?',vi:'Ngân hàng ở đâu?'},{zh:'我去银行存钱。',py:'Wǒ qù yínháng cún qián.',vi:'Tôi đi ngân hàng gửi tiền.'},{zh:'这家银行几点开门？',py:'Zhè jiā yínháng jǐ diǎn kāimén?',vi:'Ngân hàng này mấy giờ mở cửa?'},{zh:'我在银行工作。',py:'Wǒ zài yínháng gōngzuò.',vi:'Tôi làm việc ở ngân hàng.'}],},
      {zh:'邮局',   py:'yóujú',     type:'Danh từ', vi:'bưu điện', ex:[{zh:'我去邮局寄信。',py:'Wǒ qù yóujú jì xìn.',vi:'Tôi đến bưu điện gửi thư.'},{zh:'邮局在学校旁边。',py:'Yóujú zài xuéxiào pángbiān.',vi:'Bưu điện ở cạnh trường học.'},{zh:'我去邮局寄信。',py:'Wǒ qù yóujú jì xìn.',vi:'Tôi đi bưu điện gửi thư.'},{zh:'请问邮局怎么走？',py:'Qǐngwèn yóujú zěnme zǒu?',vi:'Xin hỏi đi bưu điện như thế nào?'}],},
      {zh:'取',     py:'qǔ',        type:'Động từ', vi:'rút (tiền), lấy', ex:[{zh:'我去银行取钱。',py:'Wǒ qù yínháng qǔ qián.',vi:'Tôi đến ngân hàng rút tiền.'},{zh:'我去银行取钱。',py:'Wǒ qù yínháng qǔ qián.',vi:'Tôi đi ngân hàng rút tiền.'},{zh:'你取了多少钱？',py:'Nǐ qǔ le duōshao qián?',vi:'Bạn rút bao nhiêu tiền?'},{zh:'去邮局取包裹。',py:'Qù yóujú qǔ bāoguǒ.',vi:'Đi bưu điện nhận bưu kiện.'}],},
      {zh:'钱',     py:'qián',      type:'Danh từ', vi:'tiền', ex:[{zh:'你有多少钱？',py:'Nǐ yǒu duōshao qián?',vi:'Bạn có bao nhiêu tiền?'},{zh:'你有多少钱？',py:'Nǐ yǒu duōshao qián?',vi:'Bạn có bao nhiêu tiền?'},{zh:'这个东西要多少钱？',py:'Zhège dōngxi yào duōshao qián?',vi:'Món này cần bao nhiêu tiền?'},{zh:'我没有钱了。',py:'Wǒ méiyǒu qián le.',vi:'Tôi hết tiền rồi.'},{zh:'请给我找钱。',py:'Qǐng gěi wǒ zhǎo qián.',vi:'Làm ơn thối tiền cho tôi.'}],},
      {zh:'寄',     py:'jì',        type:'Động từ', vi:'gửi', ex:[{zh:'我要寄这封信给朋友。',py:'Wǒ yào jì zhè fēng xìn gěi péngyou.',vi:'Tôi muốn gửi lá thư này cho bạn.'},{zh:'我想寄一封信。',py:'Wǒ xiǎng jì yī fēng xìn.',vi:'Tôi muốn gửi một bức thư.'},{zh:'你寄给我的包收到了。',py:'Nǐ jì gěi wǒ de bāo shōudào le.',vi:'Tôi đã nhận được gói hàng bạn gửi.'},{zh:'寄这个包裹要多少钱？',py:'Jì zhège bāoguǒ yào duōshao qián?',vi:'Gửi gói này tốn bao nhiêu tiền?'}],},
      {zh:'信',     py:'xìn',       type:'Danh từ', vi:'thư, lá thư', ex:[{zh:'我给家人写信。',py:'Wǒ gěi jiārén xiě xìn.',vi:'Tôi viết thư cho người thân.'},{zh:'我收到了一封信。',py:'Wǒ shōudào le yī fēng xìn.',vi:'Tôi nhận được một bức thư.'},{zh:'你给我写信吧。',py:'Nǐ gěi wǒ xiě xìn ba.',vi:'Bạn viết thư cho tôi nhé.'},{zh:'这封信是从中国来的。',py:'Zhè fēng xìn shì cóng Zhōngguó lái de.',vi:'Bức thư này đến từ Trung Quốc.'}],},
      {zh:'北京',   py:'Běijīng',   type:'Danh từ', vi:'Bắc Kinh', ex:[{zh:'我想去北京旅游。',py:'Wǒ xiǎng qù Běijīng lǚyóu.',vi:'Tôi muốn đi du lịch Bắc Kinh.'},{zh:'我想去北京旅游。',py:'Wǒ xiǎng qù Běijīng lǚyóu.',vi:'Tôi muốn đi du lịch Bắc Kinh.'},{zh:'北京是中国的首都。',py:'Běijīng shì Zhōngguó de shǒudū.',vi:'Bắc Kinh là thủ đô của Trung Quốc.'},{zh:'他在北京学汉语。',py:'Tā zài Běijīng xué Hànyǔ.',vi:'Anh ấy học tiếng Trung ở Bắc Kinh.'},{zh:'北京的烤鸭很好吃。',py:'Běijīng de kǎoyā hěn hǎochī.',vi:'Vịt quay Bắc Kinh rất ngon.'}],},
    ]
  },
  {
    lesson: 'Buổi 4 (b4–b5): Ngày tháng & Thứ trong tuần',
    words: [
      {zh:'今天',   py:'jīntiān',   type:'Danh từ', vi:'hôm nay', ex:[{zh:'今天是星期几？',py:'Jīntiān shì xīngqī jǐ?',vi:'Hôm nay là thứ mấy?'},{zh:'今天几号？',py:'Jīntiān jǐ hào?',vi:'Hôm nay ngày mấy?'},{zh:'今天天气很好。',py:'Jīntiān tiānqì hěn hǎo.',vi:'Hôm nay thời tiết rất đẹp.'},{zh:'今天我很忙。',py:'Jīntiān wǒ hěn máng.',vi:'Hôm nay tôi rất bận.'},{zh:'今天是我的生日。',py:'Jīntiān shì wǒ de shēngrì.',vi:'Hôm nay là sinh nhật của tôi.'}],},
      {zh:'昨天',   py:'zuótiān',   type:'Danh từ', vi:'hôm qua', ex:[{zh:'昨天我去了银行。',py:'Zuótiān wǒ qù le yínháng.',vi:'Hôm qua tôi đã đến ngân hàng.'},{zh:'昨天你去哪儿了？',py:'Zuótiān nǐ qù nǎr le?',vi:'Hôm qua bạn đi đâu vậy?'},{zh:'昨天我没有上课。',py:'Zuótiān wǒ méiyǒu shàngkè.',vi:'Hôm qua tôi không có đi học.'},{zh:'昨天下雨了。',py:'Zuótiān xià yǔ le.',vi:'Hôm qua trời mưa rồi.'}],},
      {zh:'星期',   py:'xīngqī',    type:'Danh từ', vi:'tuần; thứ (trong tuần)', ex:[{zh:'一个星期有七天。',py:'Yī gè xīngqī yǒu qī tiān.',vi:'Một tuần có bảy ngày.'},{zh:'这个星期你有空吗？',py:'Zhège xīngqī nǐ yǒu kòng ma?',vi:'Tuần này bạn có rảnh không?'},{zh:'一个星期有七天。',py:'Yī gè xīngqī yǒu qī tiān.',vi:'Một tuần có bảy ngày.'},{zh:'下个星期见。',py:'Xià gè xīngqī jiàn.',vi:'Tuần sau gặp lại.'}],},
      {zh:'星期一', py:'xīngqīyī',  type:'Danh từ', vi:'thứ Hai', ex:[{zh:'星期一我有汉语课。',py:'Xīngqīyī wǒ yǒu Hànyǔ kè.',vi:'Thứ Hai tôi có tiết học tiếng Hán.'},{zh:'星期一我们有汉语课。',py:'Xīngqī yī wǒmen yǒu Hànyǔ kè.',vi:'Thứ Hai chúng tôi có tiết tiếng Trung.'},{zh:'星期一去上班。',py:'Xīngqī yī qù shàngbān.',vi:'Thứ Hai đi làm.'}],},
      {zh:'星期二', py:"xīngqī'èr", type:'Danh từ', vi:'thứ Ba', ex:[{zh:'星期二我去图书馆。',py:"Xīngqī'èr wǒ qù túshūguǎn.",vi:'Thứ Ba tôi đến thư viện.'},{zh:'星期二下午有会议。',py:'Xīngqī èr xiàwǔ yǒu huìyì.',vi:'Chiều thứ Ba có cuộc họp.'},{zh:'我们星期二见面吧。',py:'Wǒmen xīngqī èr jiànmiàn ba.',vi:'Chúng ta gặp nhau vào thứ Ba nhé.'}],},
      {zh:'星期三', py:'xīngqīsān', type:'Danh từ', vi:'thứ Tư', ex:[{zh:'星期三我们有考试。',py:'Xīngqīsān wǒmen yǒu kǎoshì.',vi:'Thứ Tư chúng tôi có kỳ thi.'},{zh:'星期三是一周的中间。',py:'Xīngqī sān shì yī zhōu de zhōngjiān.',vi:'Thứ Tư là giữa tuần.'},{zh:'星期三有没有课？',py:'Xīngqī sān yǒu méiyǒu kè?',vi:'Thứ Tư có tiết học không?'}],},
      {zh:'星期四', py:'xīngqīsì',  type:'Danh từ', vi:'thứ Năm', ex:[{zh:'星期四我休息。',py:'Xīngqīsì wǒ xiūxi.',vi:'Thứ Năm tôi nghỉ ngơi.'},{zh:'星期四我去医院。',py:'Xīngqī sì wǒ qù yīyuàn.',vi:'Thứ Năm tôi đi bệnh viện.'},{zh:'星期四见面怎么样？',py:'Xīngqī sì jiànmiàn zěnmeyàng?',vi:'Gặp nhau thứ Năm thì sao?'}],},
      {zh:'星期五', py:'xīngqīwǔ',  type:'Danh từ', vi:'thứ Sáu', ex:[{zh:'星期五下午我去看电影。',py:'Xīngqīwǔ xiàwǔ wǒ qù kàn diànyǐng.',vi:'Chiều thứ Sáu tôi đi xem phim.'},{zh:'星期五是最后一天上班。',py:'Xīngqī wǔ shì zuìhòu yī tiān shàngbān.',vi:'Thứ Sáu là ngày cuối đi làm.'},{zh:'星期五我们一起去吃饭吧。',py:'Xīngqī wǔ wǒmen yīqǐ qù chīfàn ba.',vi:'Thứ Sáu chúng ta cùng đi ăn nhé.'}],},
      {zh:'星期六', py:'xīngqīliù', type:'Danh từ', vi:'thứ Bảy', ex:[{zh:'星期六我睡到很晚。',py:'Xīngqīliù wǒ shuì dào hěn wǎn.',vi:'Thứ Bảy tôi ngủ đến rất muộn.'},{zh:'星期六我去学汉语。',py:'Xīngqī liù wǒ qù xué Hànyǔ.',vi:'Thứ Bảy tôi đi học tiếng Trung.'},{zh:'星期六你有空吗？',py:'Xīngqī liù nǐ yǒu kòng ma?',vi:'Thứ Bảy bạn có rảnh không?'}],},
      {zh:'星期天', py:'xīngqītiān',type:'Danh từ', vi:'Chủ nhật', ex:[{zh:'星期天我和朋友去玩。',py:'Xīngqītiān wǒ hé péngyou qù wán.',vi:'Chủ nhật tôi đi chơi với bạn bè.'},{zh:'星期天我在家休息。',py:'Xīngqītiān wǒ zài jiā xiūxi.',vi:'Chủ Nhật tôi ở nhà nghỉ ngơi.'},{zh:'星期天一起去逛街吗？',py:'Xīngqītiān yīqǐ qù guàngjiē ma?',vi:'Chủ Nhật cùng đi dạo phố không?'}],},
      {zh:'周末',   py:'zhōumò',    type:'Danh từ', vi:'cuối tuần', ex:[{zh:'周末你有什么计划？',py:'Zhōumò nǐ yǒu shénme jìhuà?',vi:'Cuối tuần bạn có kế hoạch gì không?'},{zh:'周末你做什么？',py:'Zhōumò nǐ zuò shénme?',vi:'Cuối tuần bạn làm gì?'},{zh:'这个周末我去旅游。',py:'Zhège zhōumò wǒ qù lǚyóu.',vi:'Cuối tuần này tôi đi du lịch.'},{zh:'周末愉快！',py:'Zhōumò yúkuài!',vi:'Cuối tuần vui vẻ!'}],},
      {zh:'几',     py:'jǐ',        type:'Đại từ',  vi:'mấy (số nhỏ dưới 10)', ex:[{zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vi:'Nhà bạn có mấy người?'},{zh:'今天几号？',py:'Jīntiān jǐ hào?',vi:'Hôm nay ngày mấy?'},{zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vi:'Nhà bạn có mấy người?'},{zh:'几点了？',py:'Jǐ diǎn le?',vi:'Mấy giờ rồi?'},{zh:'你有几个朋友？',py:'Nǐ yǒu jǐ gè péngyou?',vi:'Bạn có mấy người bạn?'}],},
      {zh:'二',     py:'èr',        type:'Số đếm',  vi:'hai', ex:[{zh:'我有两个弟弟。',py:'Wǒ yǒu liǎng gè dìdi.',vi:'Tôi có hai em trai.'},{zh:'我有两个弟弟。',py:'Wǒ yǒu liǎng gè dìdi.',vi:'Tôi có hai em trai.'},{zh:'一加一等于二。',py:'Yī jiā yī děngyú èr.',vi:'Một cộng một bằng hai.'},{zh:'二楼在哪里？',py:'Èr lóu zài nǎlǐ?',vi:'Tầng hai ở đâu?'}],},
      {zh:'三',     py:'sān',       type:'Số đếm',  vi:'ba', ex:[{zh:'三加二等于五。',py:'Sān jiā èr děngyú wǔ.',vi:'Ba cộng hai bằng năm.'},{zh:'我家有三口人。',py:'Wǒ jiā yǒu sān kǒu rén.',vi:'Nhà tôi có ba người.'},{zh:'三天以后我回来。',py:'Sān tiān yǐhòu wǒ huílái.',vi:'Ba ngày nữa tôi về.'},{zh:'请给我三个苹果。',py:'Qǐng gěi wǒ sān gè píngguǒ.',vi:'Làm ơn cho tôi ba quả táo.'}],},
      {zh:'四',     py:'sì',        type:'Số đếm',  vi:'bốn', ex:[{zh:'今天是四号。',py:'Jīntiān shì sì hào.',vi:'Hôm nay là ngày mồng bốn.'},{zh:'四月天气很好。',py:'Sì yuè tiānqì hěn hǎo.',vi:'Thời tiết tháng Tư rất đẹp.'},{zh:'我们有四个人。',py:'Wǒmen yǒu sì gè rén.',vi:'Chúng tôi có bốn người.'},{zh:'四加一等于五。',py:'Sì jiā yī děngyú wǔ.',vi:'Bốn cộng một bằng năm.'}],},
      {zh:'哪儿',   py:'nǎr',       type:'Đại từ',  vi:'ở đâu, đâu', ex:[{zh:'你去哪儿？',py:'Nǐ qù nǎr?',vi:'Bạn đi đâu vậy?'},{zh:'你去哪儿？',py:'Nǐ qù nǎr?',vi:'Bạn đi đâu vậy?'},{zh:'厕所在哪儿？',py:'Cèsuǒ zài nǎr?',vi:'Nhà vệ sinh ở đâu?'},{zh:'你是哪儿的人？',py:'Nǐ shì nǎr de rén?',vi:'Bạn là người ở đâu?'},{zh:'图书馆在哪儿？',py:'Túshūguǎn zài nǎr?',vi:'Thư viện ở đâu?'}],},
      {zh:'那儿',   py:'nàr',       type:'Đại từ',  vi:'ở đó, ở kia', ex:[{zh:'老师在那儿。',py:'Lǎoshī zài nàr.',vi:'Thầy giáo ở đằng kia.'},{zh:'那儿有一家银行。',py:'Nàr yǒu yī jiā yínháng.',vi:'Ở đó có một ngân hàng.'},{zh:'你在那儿等我。',py:'Nǐ zài nàr děng wǒ.',vi:'Bạn đợi tôi ở đó.'},{zh:'那儿的东西很便宜。',py:'Nàr de dōngxi hěn piányí.',vi:'Đồ ở đó rất rẻ.'}],},
      {zh:'这儿',   py:'zhèr',      type:'Đại từ',  vi:'ở đây', ex:[{zh:'请在这儿等我。',py:'Qǐng zài zhèr děng wǒ.',vi:'Xin hãy đợi tôi ở đây.'},{zh:'我就在这儿。',py:'Wǒ jiù zài zhèr.',vi:'Tôi đang ở đây.'},{zh:'请在这儿签名。',py:'Qǐng zài zhèr qiānmíng.',vi:'Làm ơn ký tên ở đây.'},{zh:'这儿离银行近吗？',py:'Zhèr lí yínháng jìn ma?',vi:'Chỗ này gần ngân hàng không?'}],},
      {zh:'回',     py:'huí',       type:'Động từ', vi:'về, trở về', ex:[{zh:'我要回家了。',py:'Wǒ yào huí jiā le.',vi:'Tôi về nhà rồi.'},{zh:'我回家了。',py:'Wǒ huí jiā le.',vi:'Tôi về nhà rồi.'},{zh:'你什么时候回来？',py:'Nǐ shénme shíhou huílái?',vi:'Bạn lúc nào về?'},{zh:'明天我回越南。',py:'Míngtiān wǒ huí Yuènán.',vi:'Ngày mai tôi về Việt Nam.'},{zh:'他回学校取书。',py:'Tā huí xuéxiào qǔ shū.',vi:'Anh ấy về trường lấy sách.'}],},
      {zh:'学校',   py:'xuéxiào',   type:'Danh từ', vi:'trường học', ex:[{zh:'我每天走路去学校。',py:'Wǒ měitiān zǒulù qù xuéxiào.',vi:'Tôi mỗi ngày đi bộ đến trường.'},{zh:'我们的学校很大。',py:'Wǒmen de xuéxiào hěn dà.',vi:'Trường học của chúng tôi rất lớn.'},{zh:'学校几点开门？',py:'Xuéxiào jǐ diǎn kāimén?',vi:'Trường mấy giờ mở cửa?'},{zh:'我每天走路去学校。',py:'Wǒ měitiān zǒulù qù xuéxiào.',vi:'Mỗi ngày tôi đi bộ đến trường.'},{zh:'学校旁边有邮局。',py:'Xuéxiào pángbiān yǒu yóujú.',vi:'Cạnh trường có bưu điện.'}],},
      {zh:'对不起', py:'duìbuqǐ',   type:'Cụm từ',  vi:'xin lỗi', ex:[{zh:'对不起，我来晚了。',py:'Duìbuqǐ, wǒ lái wǎn le.',vi:'Xin lỗi, tôi đến muộn rồi.'},{zh:'对不起，我来晚了。',py:'Duìbuqǐ, wǒ lái wǎn le.',vi:'Xin lỗi, tôi đến muộn.'},{zh:'对不起，我不知道。',py:'Duìbuqǐ, wǒ bù zhīdào.',vi:'Xin lỗi, tôi không biết.'},{zh:'对不起，打扰你了。',py:'Duìbuqǐ, dǎrǎo nǐ le.',vi:'Xin lỗi, đã làm phiền bạn.'}],},
      {zh:'没关系', py:'méi guānxi',type:'Cụm từ',  vi:'không sao, không có gì', ex:[{zh:'没关系，不要紧。',py:'Méi guānxi, búyào jǐn.',vi:'Không sao, không có gì.'},{zh:'没关系，不要紧。',py:'Méi guānxi, bú yàojǐn.',vi:'Không sao, không có vấn đề gì.'},{zh:'对不起！——没关系！',py:'Duìbuqǐ! — Méi guānxi!',vi:'Xin lỗi! — Không sao!'},{zh:'来晚了没关系。',py:'Lái wǎn le méi guānxi.',vi:'Đến muộn không sao.'}],},
      {zh:'最近',   py:'zuìjìn',    type:'Phó từ',  vi:'gần đây, dạo này', ex:[{zh:'你最近怎么样？',py:'Nǐ zuìjìn zěnmeyàng?',vi:'Dạo này bạn thế nào?'},{zh:'你最近怎么样？',py:'Nǐ zuìjìn zěnmeyàng?',vi:'Dạo này bạn thế nào?'},{zh:'最近我很忙。',py:'Zuìjìn wǒ hěn máng.',vi:'Dạo này tôi rất bận.'},{zh:'最近他学汉语进步很大。',py:'Zuìjìn tā xué Hànyǔ jìnbù hěn dà.',vi:'Dạo này anh ấy tiến bộ rất nhiều trong học tiếng Trung.'}],},
      {zh:'天安门', py:"Tiān'ānmén",type:'Danh từ', vi:'Thiên An Môn (địa danh)', ex:[{zh:'天安门广场在北京。',py:"Tiān'ānmén guǎngchǎng zài Běijīng.",vi:'Quảng trường Thiên An Môn ở Bắc Kinh.'},{zh:'天安门是北京最有名的地方。',py:'Tiān\'ānmén shì Běijīng zuì yǒumíng de dìfāng.',vi:'Thiên An Môn là nơi nổi tiếng nhất ở Bắc Kinh.'},{zh:'我想去天安门看看。',py:'Wǒ xiǎng qù Tiān\'ānmén kànkan.',vi:'Tôi muốn đến Thiên An Môn xem thử.'}],},
    ]
  },
  {
    lesson: 'Buổi 5 (b6): 这是王老师 – Đây là thầy Vương',
    words: [
      {zh:'这',     py:'zhè',      type:'Đại từ',  vi:'đây, này', ex:[{zh:'这是我的书。',py:'Zhè shì wǒ de shū.',vi:'Đây là sách của tôi.'},{zh:'这是什么？',py:'Zhè shì shénme?',vi:'Đây là cái gì?'},{zh:'这个多少钱？',py:'Zhège duōshao qián?',vi:'Cái này bao nhiêu tiền?'},{zh:'这本书很好看。',py:'Zhè běn shū hěn hǎokàn.',vi:'Cuốn sách này rất hay.'}],},
      {zh:'那',     py:'nà',       type:'Đại từ',  vi:'đó, kia', ex:[{zh:'那是什么？',py:'Nà shì shénme?',vi:'Đó là cái gì vậy?'},{zh:'那是谁的书？',py:'Nà shì shuí de shū?',vi:'Đó là sách của ai?'},{zh:'那个人是我的老师。',py:'Nàge rén shì wǒ de lǎoshī.',vi:'Người kia là thầy giáo của tôi.'},{zh:'那家餐厅很好吃。',py:'Nà jiā cāntīng hěn hǎochī.',vi:'Nhà hàng đó rất ngon.'}],},
      {zh:'是',     py:'shì',      type:'Động từ', vi:'là', ex:[{zh:'我是越南学生。',py:'Wǒ shì Yuènán xuéshēng.',vi:'Tôi là học sinh Việt Nam.'},{zh:'我是越南人。',py:'Wǒ shì Yuènán rén.',vi:'Tôi là người Việt Nam.'},{zh:'这是我的书。',py:'Zhè shì wǒ de shū.',vi:'Đây là sách của tôi.'},{zh:'他是不是老师？',py:'Tā shì bu shì lǎoshī?',vi:'Anh ấy có phải là thầy giáo không?'},{zh:'对，就是这样。',py:'Duì, jiùshì zhèyàng.',vi:'Đúng, chính là như vậy.'}],},
      {zh:'老师',   py:'lǎoshī',   type:'Danh từ', vi:'giáo viên, thầy/cô', ex:[{zh:'王老师教我们汉语。',py:'Wáng lǎoshī jiāo wǒmen Hànyǔ.',vi:'Thầy Vương dạy tiếng Hán cho chúng tôi.'},{zh:'我的老师是中国人。',py:'Wǒ de lǎoshī shì Zhōngguó rén.',vi:'Thầy giáo của tôi là người Trung Quốc.'},{zh:'老师好！',py:'Lǎoshī hǎo!',vi:'Chào thầy/cô!'},{zh:'老师教我们汉语。',py:'Lǎoshī jiāo wǒmen Hànyǔ.',vi:'Thầy/cô dạy chúng tôi tiếng Trung.'},{zh:'我想当汉语老师。',py:'Wǒ xiǎng dāng Hànyǔ lǎoshī.',vi:'Tôi muốn làm giáo viên tiếng Trung.'}],},
      {zh:'您',     py:'nín',      type:'Đại từ',  vi:'ngài (kính ngữ của 你)', ex:[{zh:'您好，王老师！',py:'Nín hǎo, Wáng lǎoshī!',vi:'Chào thầy Vương!'},{zh:'您好，请坐！',py:'Nín hǎo, qǐng zuò!',vi:'Chào ông/bà, mời ngồi!'},{zh:'您贵姓？',py:'Nín guì xìng?',vi:'Xin hỏi quý danh của ông/bà là gì?'},{zh:'谢谢您的帮助。',py:'Xièxie nín de bāngzhù.',vi:'Cảm ơn sự giúp đỡ của ông/bà.'}],},
      {zh:'请',     py:'qǐng',     type:'Động từ', vi:'mời, xin (lịch sự)', ex:[{zh:'请进，请坐！',py:'Qǐng jìn, qǐng zuò!',vi:'Mời vào, mời ngồi!'},{zh:'请进！',py:'Qǐng jìn!',vi:'Mời vào!'},{zh:'请坐！',py:'Qǐng zuò!',vi:'Mời ngồi!'},{zh:'请问，银行在哪儿？',py:'Qǐngwèn, yínháng zài nǎr?',vi:'Xin hỏi, ngân hàng ở đâu ạ?'},{zh:'请喝茶。',py:'Qǐng hē chá.',vi:'Mời uống trà.'}],},
      {zh:'进',     py:'jìn',      type:'Động từ', vi:'vào', ex:[{zh:'请进来！',py:'Qǐng jìnlái!',vi:'Mời vào đây!'},{zh:'请进！',py:'Qǐng jìn!',vi:'Mời vào!'},{zh:'他走进了教室。',py:'Tā zǒu jìn le jiàoshì.',vi:'Anh ấy bước vào lớp học.'},{zh:'进来坐一下。',py:'Jìnlái zuò yīxià.',vi:'Vào ngồi một chút.'}],},
      {zh:'坐',     py:'zuò',      type:'Động từ', vi:'ngồi', ex:[{zh:'请坐，不要客气。',py:'Qǐng zuò, búyào kèqi.',vi:'Mời ngồi, đừng khách khí.'},{zh:'请坐！',py:'Qǐng zuò!',vi:'Mời ngồi!'},{zh:'我坐公共汽车去上班。',py:'Wǒ zuò gōnggòng qìchē qù shàngbān.',vi:'Tôi đi xe buýt đi làm.'},{zh:'你坐在哪里？',py:'Nǐ zuò zài nǎlǐ?',vi:'Bạn ngồi ở đâu?'}],},
      {zh:'喝',     py:'hē',       type:'Động từ', vi:'uống', ex:[{zh:'你喝什么茶？',py:'Nǐ hē shénme chá?',vi:'Bạn uống loại trà gì?'},{zh:'你喝什么？',py:'Nǐ hē shénme?',vi:'Bạn uống gì?'},{zh:'我喜欢喝茶。',py:'Wǒ xǐhuān hē chá.',vi:'Tôi thích uống trà.'},{zh:'天热，多喝水。',py:'Tiān rè, duō hē shuǐ.',vi:'Trời nóng, hãy uống nhiều nước.'},{zh:'他每天喝咖啡。',py:'Tā měitiān hē kāfēi.',vi:'Anh ấy mỗi ngày đều uống cà phê.'}],},
      {zh:'茶',     py:'chá',      type:'Danh từ', vi:'trà, chè', ex:[{zh:'我喜欢喝绿茶。',py:'Wǒ xǐhuan hē lǜchá.',vi:'Tôi thích uống trà xanh.'},{zh:'中国人喜欢喝茶。',py:'Zhōngguó rén xǐhuān hē chá.',vi:'Người Trung Quốc thích uống trà.'},{zh:'请喝茶！',py:'Qǐng hē chá!',vi:'Mời uống trà!'},{zh:'这是什么茶？',py:'Zhè shì shénme chá?',vi:'Đây là trà gì?'},{zh:'我喝绿茶。',py:'Wǒ hē lǜchá.',vi:'Tôi uống trà xanh.'}],},
      {zh:'水',     py:'shuǐ',     type:'Danh từ', vi:'nước (uống)', ex:[{zh:'请喝水！',py:'Qǐng hē shuǐ!',vi:'Mời uống nước!'},{zh:'请给我一杯水。',py:'Qǐng gěi wǒ yī bēi shuǐ.',vi:'Làm ơn cho tôi một ly nước.'},{zh:'天热，多喝水。',py:'Tiān rè, duō hē shuǐ.',vi:'Trời nóng, hãy uống nhiều nước.'},{zh:'这里的水干净吗？',py:'Zhèlǐ de shuǐ gānjìng ma?',vi:'Nước ở đây có sạch không?'}],},
      {zh:'谢谢',   py:'xièxie',   type:'Cụm từ',  vi:'cảm ơn', ex:[{zh:'谢谢你的帮助！',py:'Xièxie nǐ de bāngzhù!',vi:'Cảm ơn bạn đã giúp đỡ!'},{zh:'谢谢你的帮助！',py:'Xièxie nǐ de bāngzhù!',vi:'Cảm ơn sự giúp đỡ của bạn!'},{zh:'非常谢谢！',py:'Fēicháng xièxie!',vi:'Cảm ơn rất nhiều!'},{zh:'谢谢老师！',py:'Xièxie lǎoshī!',vi:'Cảm ơn thầy/cô!'}],},
      {zh:'不客气', py:'bú kèqi',  type:'Cụm từ',  vi:'không có gì, không khách khí', ex:[{zh:'谢谢！——不客气！',py:'Xièxie! — Bú kèqi!',vi:'Cảm ơn! — Không có gì!'},{zh:'谢谢！——不客气！',py:'Xièxie! — Bù kèqi!',vi:'Cảm ơn! — Không có gì!'},{zh:'不客气，这是我应该做的。',py:'Bù kèqi, zhè shì wǒ yīnggāi zuò de.',vi:'Không có gì, đây là điều tôi nên làm.'}],},
      {zh:'工作',   py:'gōngzuò',  type:'Danh từ', vi:'công việc; làm việc', ex:[{zh:'你在哪儿工作？',py:'Nǐ zài nǎr gōngzuò?',vi:'Bạn làm việc ở đâu?'},{zh:'你在哪里工作？',py:'Nǐ zài nǎlǐ gōngzuò?',vi:'Bạn làm việc ở đâu?'},{zh:'我在公司工作。',py:'Wǒ zài gōngsī gōngzuò.',vi:'Tôi làm việc ở công ty.'},{zh:'工作很累，但我喜欢。',py:'Gōngzuò hěn lèi, dàn wǒ xǐhuān.',vi:'Công việc rất mệt nhưng tôi thích.'},{zh:'他找到工作了。',py:'Tā zhǎodào gōngzuò le.',vi:'Anh ấy tìm được việc làm rồi.'}],},
      {zh:'身体',   py:'shēntǐ',   type:'Danh từ', vi:'sức khỏe, thân thể', ex:[{zh:'您身体好吗？',py:'Nín shēntǐ hǎo ma?',vi:'Sức khỏe của ngài có tốt không?'},{zh:'你身体怎么样？',py:'Nǐ shēntǐ zěnmeyàng?',vi:'Sức khỏe của bạn thế nào?'},{zh:'身体是最重要的。',py:'Shēntǐ shì zuì zhòngyào de.',vi:'Sức khỏe là quan trọng nhất.'},{zh:'多运动，身体好。',py:'Duō yùndòng, shēntǐ hǎo.',vi:'Tập thể dục nhiều, sức khỏe tốt.'}],},
      {zh:'朋友',   py:'péngyou',  type:'Danh từ', vi:'bạn bè', ex:[{zh:'他是我的好朋友。',py:'Tā shì wǒ de hǎo péngyou.',vi:'Anh ấy là bạn tốt của tôi.'},{zh:'他是我最好的朋友。',py:'Tā shì wǒ zuì hǎo de péngyou.',vi:'Anh ấy là người bạn tốt nhất của tôi.'},{zh:'我有很多中国朋友。',py:'Wǒ yǒu hěn duō Zhōngguó péngyou.',vi:'Tôi có nhiều bạn người Trung Quốc.'},{zh:'朋友，我们一起去吧！',py:'Péngyou, wǒmen yīqǐ qù ba!',vi:'Bạn ơi, chúng ta cùng đi đi!'}],},
      {zh:'好久不见',py:'hǎojiǔ bújiàn',type:'Cụm từ',vi:'lâu không gặp', ex:[{zh:'好久不见，你还好吗？',py:'Hǎojiǔ bújiàn, nǐ hái hǎo ma?',vi:'Lâu không gặp, bạn vẫn khỏe chứ?'},{zh:'好久不见，你好吗？',py:'Hǎo jiǔ bú jiàn, nǐ hǎo ma?',vi:'Lâu không gặp, bạn có khỏe không?'},{zh:'好久不见，最近怎么样？',py:'Hǎo jiǔ bú jiàn, zuìjìn zěnmeyàng?',vi:'Lâu không gặp, dạo này thế nào?'}],},
      {zh:'在',     py:'zài',      type:'Động từ', vi:'ở (tại), đang ở', ex:[{zh:'我在中国工作。',py:'Wǒ zài Zhōngguó gōngzuò.',vi:'Tôi làm việc ở Trung Quốc.'},{zh:'你在哪儿？',py:'Nǐ zài nǎr?',vi:'Bạn đang ở đâu?'},{zh:'我在学校学习。',py:'Wǒ zài xuéxiào xuéxí.',vi:'Tôi đang học ở trường.'},{zh:'妈妈在家做饭。',py:'Māma zài jiā zuòfàn.',vi:'Mẹ đang ở nhà nấu cơm.'},{zh:'我在银行工作。',py:'Wǒ zài yínháng gōngzuò.',vi:'Tôi làm việc tại ngân hàng.'}],},
      {zh:'生病',   py:'shēngbìng',type:'Động từ', vi:'bị ốm, bị bệnh', ex:[{zh:'我身体不太好，我在生病。',py:'Wǒ shēntǐ bú tài hǎo, wǒ zài shēngbìng.',vi:'Sức khoẻ tôi không tốt lắm, tôi đang bị ốm.'},{zh:'我生病了，不能去上班。',py:'Wǒ shēngbìng le, bù néng qù shàngbān.',vi:'Tôi bị bệnh rồi, không thể đi làm.'},{zh:'他生病了，在家休息。',py:'Tā shēngbìng le, zài jiā xiūxi.',vi:'Anh ấy bị bệnh, đang ở nhà nghỉ.'},{zh:'生病要多喝水。',py:'Shēngbìng yào duō hē shuǐ.',vi:'Khi bệnh phải uống nhiều nước.'}],},
      {zh:'零',     py:'líng',     type:'Số đếm',  vi:'không (số 0)', ex:[{zh:'今天气温是零度。',py:'Jīntiān qìwēn shì líng dù.',vi:'Hôm nay nhiệt độ là không độ.'},{zh:'零分是不好的。',py:'Líng fēn shì bù hǎo de.',vi:'Điểm không là không tốt.'},{zh:'今天零下五度。',py:'Jīntiān líng xià wǔ dù.',vi:'Hôm nay âm 5 độ.'},{zh:'手机号是零一二三...',py:'Shǒujī hào shì líng yī èr sān...',vi:'Số điện thoại là 0123...'}],},
      {zh:'十',     py:'shí',      type:'Số đếm',  vi:'mười', ex:[{zh:'我有十本书。',py:'Wǒ yǒu shí běn shū.',vi:'Tôi có mười quyển sách.'},{zh:'十加十等于二十。',py:'Shí jiā shí děngyú èrshí.',vi:'Mười cộng mười bằng hai mươi.'},{zh:'他今年十岁。',py:'Tā jīnnián shí suì.',vi:'Năm nay anh ấy mười tuổi.'},{zh:'十月是秋天。',py:'Shí yuè shì qiūtiān.',vi:'Tháng mười là mùa thu.'}],},
      {zh:'可乐',   py:'kělè',     type:'Danh từ', vi:'coca cola', ex:[{zh:'你喝可乐吗？',py:'Nǐ hē kělè ma?',vi:'Bạn uống coca cola không?'},{zh:'我要一杯可乐。',py:'Wǒ yào yī bēi kělè.',vi:'Tôi muốn một ly cola.'},{zh:'可乐不健康。',py:'Kělè bù jiànkāng.',vi:'Coca-cola không tốt cho sức khỏe.'},{zh:'你喝可乐还是茶？',py:'Nǐ hē kělè háishi chá?',vi:'Bạn uống cola hay trà?'}],},
      {zh:'奶茶',   py:'nǎichá',   type:'Danh từ', vi:'trà sữa', ex:[{zh:'奶茶很好喝。',py:'Nǎichá hěn hǎohē.',vi:'Trà sữa rất ngon.'},{zh:'我喜欢喝奶茶。',py:'Wǒ xǐhuān hē nǎichá.',vi:'Tôi thích uống trà sữa.'},{zh:'一杯奶茶多少钱？',py:'Yī bēi nǎichá duōshao qián?',vi:'Một ly trà sữa bao nhiêu tiền?'},{zh:'奶茶里加珍珠。',py:'Nǎichá lǐ jiā zhēnzhū.',vi:'Trà sữa thêm trân châu.'}],},
      {zh:'咖啡',   py:'kāfēi',    type:'Danh từ', vi:'cà phê', ex:[{zh:'我每天早上喝咖啡。',py:'Wǒ měitiān zǎoshang hē kāfēi.',vi:'Tôi uống cà phê mỗi buổi sáng.'},{zh:'我每天早上喝咖啡。',py:'Wǒ měitiān zǎoshang hē kāfēi.',vi:'Mỗi sáng tôi uống cà phê.'},{zh:'你喜欢喝咖啡吗？',py:'Nǐ xǐhuān hē kāfēi ma?',vi:'Bạn có thích uống cà phê không?'},{zh:'这杯咖啡太苦了。',py:'Zhè bēi kāfēi tài kǔ le.',vi:'Ly cà phê này đắng quá.'}],},
      {zh:'酒',     py:'jiǔ',      type:'Danh từ', vi:'rượu', ex:[{zh:'他不喜欢喝酒。',py:'Tā bù xǐhuan hē jiǔ.',vi:'Anh ấy không thích uống rượu.'},{zh:'我不喝酒。',py:'Wǒ bù hē jiǔ.',vi:'Tôi không uống rượu.'},{zh:'中国白酒很烈。',py:'Zhōngguó báijiǔ hěn liè.',vi:'Rượu trắng Trung Quốc rất mạnh.'},{zh:'不能喝酒开车。',py:'Bù néng hē jiǔ kāichē.',vi:'Không được uống rượu lái xe.'}],},
      {zh:'水果汁', py:'shuǐguǒzhī',type:'Danh từ',vi:'nước ép hoa quả', ex:[{zh:'我要一杯水果汁。',py:'Wǒ yào yī bēi shuǐguǒzhī.',vi:'Tôi muốn một ly nước ép hoa quả.'},{zh:'我要一杯橙子水果汁。',py:'Wǒ yào yī bēi chéngzi shuǐguǒzhī.',vi:'Tôi muốn một ly nước cam.'},{zh:'水果汁比可乐健康。',py:'Shuǐguǒzhī bǐ kělè jiànkāng.',vi:'Nước trái cây tốt cho sức khỏe hơn cola.'}],},
      {zh:'白水',   py:'báishuǐ',  type:'Danh từ', vi:'nước lọc, nước trắng', ex:[{zh:'请给我一杯白水。',py:'Qǐng gěi wǒ yī bēi báishuǐ.',vi:'Xin cho tôi một ly nước lọc.'},{zh:'多喝白水对身体好。',py:'Duō hē báishuǐ duì shēntǐ hǎo.',vi:'Uống nhiều nước lọc tốt cho sức khỏe.'},{zh:'请给我一杯白水。',py:'Qǐng gěi wǒ yī bēi báishuǐ.',vi:'Làm ơn cho tôi một ly nước lọc.'}],},
    ]
  },
  {
    lesson: 'Buổi 6 (b7): 请问贵姓？– Xin hỏi quý danh',
    words: [
      {zh:'请问',  py:'qǐngwèn',  type:'Cụm từ',  vi:'xin hỏi', ex:[{zh:'请问，邮局在哪儿？',py:'Qǐngwèn, yóujú zài nǎr?',vi:'Xin hỏi, bưu điện ở đâu?'},{zh:'请问，图书馆在哪儿？',py:'Qǐngwèn, túshūguǎn zài nǎr?',vi:'Xin hỏi, thư viện ở đâu ạ?'},{zh:'请问，您贵姓？',py:'Qǐngwèn, nín guì xìng?',vi:'Xin hỏi, quý danh của ông/bà là gì?'},{zh:'请问，这附近有银行吗？',py:'Qǐngwèn, zhè fùjìn yǒu yínháng ma?',vi:'Xin hỏi, gần đây có ngân hàng không?'}],},
      {zh:'问',    py:'wèn',      type:'Động từ',  vi:'hỏi', ex:[{zh:'我想问你一个问题。',py:'Wǒ xiǎng wèn nǐ yī gè wèntí.',vi:'Tôi muốn hỏi bạn một câu hỏi.'},{zh:'我想问你一个问题。',py:'Wǒ xiǎng wèn nǐ yī gè wèntí.',vi:'Tôi muốn hỏi bạn một câu hỏi.'},{zh:'他问我叫什么名字。',py:'Tā wèn wǒ jiào shénme míngzi.',vi:'Anh ấy hỏi tôi tên là gì.'},{zh:'有问题请问老师。',py:'Yǒu wèntí qǐng wèn lǎoshī.',vi:'Có câu hỏi thì hỏi thầy/cô.'}],},
      {zh:'贵姓',  py:'guì xìng', type:'Cụm từ',  vi:'quý danh (hỏi họ kính ngữ)', ex:[{zh:'请问您贵姓？',py:'Qǐngwèn nín guì xìng?',vi:'Xin hỏi quý danh của ngài là gì?'},{zh:'请问您贵姓？',py:'Qǐngwèn nín guì xìng?',vi:'Xin hỏi quý danh của ông/bà là gì?'},{zh:'您贵姓？——我姓王。',py:'Nín guì xìng? — Wǒ xìng Wáng.',vi:'Xin hỏi ông/bà họ gì? — Tôi họ Vương.'}],},
      {zh:'姓',    py:'xìng',     type:'Đt/Dt',   vi:'họ (là), mang họ', ex:[{zh:'我姓王，叫王明。',py:'Wǒ xìng Wáng, jiào Wáng Míng.',vi:'Tôi họ Vương, tên là Vương Minh.'},{zh:'你姓什么？',py:'Nǐ xìng shénme?',vi:'Bạn họ gì?'},{zh:'我姓阮。',py:'Wǒ xìng Ruǎn.',vi:'Tôi họ Nguyễn.'},{zh:'他姓李，叫李明。',py:'Tā xìng Lǐ, jiào Lǐ Míng.',vi:'Anh ấy họ Lý, tên Lý Minh.'}],},
      {zh:'叫',    py:'jiào',     type:'Động từ',  vi:'gọi, tên là', ex:[{zh:'你叫什么名字？',py:'Nǐ jiào shénme míngzi?',vi:'Bạn tên là gì?'},{zh:'你叫什么名字？',py:'Nǐ jiào shénme míngzi?',vi:'Bạn tên là gì?'},{zh:'我叫阮文强。',py:'Wǒ jiào Ruǎn Wénqiáng.',vi:'Tôi tên Nguyễn Văn Cường.'},{zh:'请叫我小李。',py:'Qǐng jiào wǒ Xiǎo Lǐ.',vi:'Hãy gọi tôi là Tiểu Lý.'}],},
      {zh:'名字',  py:'míngzi',   type:'Danh từ',  vi:'tên', ex:[{zh:'你的名字怎么写？',py:'Nǐ de míngzi zěnme xiě?',vi:'Tên bạn viết như thế nào?'},{zh:'你的名字怎么写？',py:'Nǐ de míngzi zěnme xiě?',vi:'Tên bạn viết như thế nào?'},{zh:'我的中文名字是李明。',py:'Wǒ de Zhōngwén míngzi shì Lǐ Míng.',vi:'Tên tiếng Trung của tôi là Lý Minh.'},{zh:'名字很重要。',py:'Míngzi hěn zhòngyào.',vi:'Tên rất quan trọng.'}],},
      {zh:'什么',  py:'shénme',   type:'Đại từ',   vi:'cái gì, gì', ex:[{zh:'这是什么书？',py:'Zhè shì shénme shū?',vi:'Đây là sách gì?'},{zh:'这是什么？',py:'Zhè shì shénme?',vi:'Đây là cái gì?'},{zh:'你叫什么名字？',py:'Nǐ jiào shénme míngzi?',vi:'Bạn tên là gì?'},{zh:'你想吃什么？',py:'Nǐ xiǎng chī shénme?',vi:'Bạn muốn ăn gì?'},{zh:'今天是什么日子？',py:'Jīntiān shì shénme rìzi?',vi:'Hôm nay là ngày gì?'}],},
      {zh:'谁',    py:'shéi',     type:'Đại từ',   vi:'ai', ex:[{zh:'那个人是谁？',py:'Nà gè rén shì shéi?',vi:'Người đó là ai?'},{zh:'那是谁？',py:'Nà shì shuí?',vi:'Đó là ai?'},{zh:'谁是你的老师？',py:'Shuí shì nǐ de lǎoshī?',vi:'Ai là thầy/cô giáo của bạn?'},{zh:'这本书是谁的？',py:'Zhè běn shū shì shuí de?',vi:'Cuốn sách này là của ai?'}],},
    ]
  },
  {
    lesson: 'Buổi 7 (b8): 你是哪国人？– Bạn là người nước nào?',
    words: [
      {zh:'国',    py:'guó',      type:'Danh từ',  vi:'nước, quốc gia', ex:[{zh:'你是哪国人？',py:'Nǐ shì nǎ guó rén?',vi:'Bạn là người nước nào?'},{zh:'你是哪国人？',py:'Nǐ shì nǎ guó rén?',vi:'Bạn là người nước nào?'},{zh:'中国是亚洲大国。',py:'Zhōngguó shì Yàzhōu dàguó.',vi:'Trung Quốc là cường quốc châu Á.'},{zh:'我爱我的国家。',py:'Wǒ ài wǒ de guójiā.',vi:'Tôi yêu đất nước của mình.'}],},
      {zh:'哪',    py:'nǎ',       type:'Đại từ',   vi:'nào, đâu', ex:[{zh:'你是哪国人？',py:'Nǐ shì nǎ guó rén?',vi:'Bạn là người nước nào?'},{zh:'你是哪国人？',py:'Nǐ shì nǎ guó rén?',vi:'Bạn là người nước nào?'},{zh:'哪个好？',py:'Nǎge hǎo?',vi:'Cái nào tốt?'},{zh:'你在哪个城市？',py:'Nǐ zài nǎge chéngshì?',vi:'Bạn đang ở thành phố nào?'}],},
      {zh:'越南',  py:'Yuènán',   type:'Danh từ',  vi:'Việt Nam', ex:[{zh:'我是越南人。',py:'Wǒ shì Yuènán rén.',vi:'Tôi là người Việt Nam.'},{zh:'我来自越南。',py:'Wǒ láizì Yuènán.',vi:'Tôi đến từ Việt Nam.'},{zh:'越南有很多好吃的食物。',py:'Yuènán yǒu hěn duō hǎochī de shíwù.',vi:'Việt Nam có nhiều đồ ăn ngon.'},{zh:'越南语和汉语不一样。',py:'Yuènányǔ hé Hànyǔ bù yīyàng.',vi:'Tiếng Việt và tiếng Trung không giống nhau.'}],},
      {zh:'中国',  py:'Zhōngguó', type:'Danh từ',  vi:'Trung Quốc', ex:[{zh:'他从中国来。',py:'Tā cóng Zhōngguó lái.',vi:'Anh ấy đến từ Trung Quốc.'},{zh:'中国有十四亿人口。',py:'Zhōngguó yǒu shísì yì rénkǒu.',vi:'Trung Quốc có 1,4 tỷ dân.'},{zh:'我想去中国旅游。',py:'Wǒ xiǎng qù Zhōngguó lǚyóu.',vi:'Tôi muốn đi du lịch Trung Quốc.'},{zh:'中国菜很好吃。',py:'Zhōngguó cài hěn hǎochī.',vi:'Đồ ăn Trung Quốc rất ngon.'}],},
      {zh:'美国',  py:'Měiguó',   type:'Danh từ',  vi:'Mỹ (Hoa Kỳ)', ex:[{zh:'她是美国人。',py:'Tā shì Měiguó rén.',vi:'Cô ấy là người Mỹ.'},{zh:'美国是一个大国。',py:'Měiguó shì yī gè dàguó.',vi:'Mỹ là một cường quốc.'},{zh:'他在美国留学。',py:'Tā zài Měiguó liúxué.',vi:'Anh ấy đang du học ở Mỹ.'},{zh:'你去过美国吗？',py:'Nǐ qùguò Měiguó ma?',vi:'Bạn đã từng đến Mỹ chưa?'}],},
      {zh:'英国',  py:'Yīngguó',  type:'Danh từ',  vi:'Anh (Vương quốc Anh)', ex:[{zh:'英国在欧洲。',py:'Yīngguó zài Ōuzhōu.',vi:'Anh Quốc ở châu Âu.'},{zh:'英国的天气很冷。',py:'Yīngguó de tiānqì hěn lěng.',vi:'Thời tiết ở Anh rất lạnh.'},{zh:'她在英国学习。',py:'Tā zài Yīngguó xuéxí.',vi:'Cô ấy đang học ở Anh.'}],},
      {zh:'法国',  py:'Fǎguó',    type:'Danh từ',  vi:'Pháp', ex:[{zh:'法国的葡萄酒很有名。',py:'Fǎguó de pútaojiǔ hěn yǒumíng.',vi:'Rượu vang Pháp rất nổi tiếng.'},{zh:'法国的巴黎很美。',py:'Fǎguó de Bālí hěn měi.',vi:'Paris của Pháp rất đẹp.'},{zh:'他喜欢法国电影。',py:'Tā xǐhuān Fǎguó diànyǐng.',vi:'Anh ấy thích phim Pháp.'}],},
      {zh:'德国',  py:'Déguó',    type:'Danh từ',  vi:'Đức', ex:[{zh:'德国的汽车很有名。',py:'Déguó de qìchē hěn yǒumíng.',vi:'Ô tô Đức rất nổi tiếng.'},{zh:'德国汽车很有名。',py:'Déguó qìchē hěn yǒumíng.',vi:'Xe hơi Đức rất nổi tiếng.'},{zh:'他在德国工作。',py:'Tā zài Déguó gōngzuò.',vi:'Anh ấy làm việc ở Đức.'}],},
      {zh:'韩国',  py:'Hánguó',   type:'Danh từ',  vi:'Hàn Quốc', ex:[{zh:'韩国的电影很好看。',py:'Hánguó de diànyǐng hěn hǎokàn.',vi:'Phim Hàn Quốc rất hay.'},{zh:'韩国的食物很好吃。',py:'Hánguó de shíwù hěn hǎochī.',vi:'Đồ ăn Hàn Quốc rất ngon.'},{zh:'我喜欢韩国电视剧。',py:'Wǒ xǐhuān Hánguó diànshìjù.',vi:'Tôi thích phim truyền hình Hàn Quốc.'},{zh:'他去韩国旅游了。',py:'Tā qù Hánguó lǚyóu le.',vi:'Anh ấy đi du lịch Hàn Quốc rồi.'}],},
      {zh:'日本',  py:'Rìběn',    type:'Danh từ',  vi:'Nhật Bản', ex:[{zh:'日本的食物很好吃。',py:'Rìběn de shíwù hěn hǎochī.',vi:'Đồ ăn Nhật Bản rất ngon.'},{zh:'日本的樱花很美。',py:'Rìběn de yīnghuā hěn měi.',vi:'Hoa anh đào Nhật Bản rất đẹp.'},{zh:'她想去日本旅游。',py:'Tā xiǎng qù Rìběn lǚyóu.',vi:'Cô ấy muốn đi du lịch Nhật Bản.'},{zh:'日本食物很有名。',py:'Rìběn shíwù hěn yǒumíng.',vi:'Đồ ăn Nhật Bản rất nổi tiếng.'}],},
      {zh:'芬兰',  py:'Fēnlán',   type:'Danh từ',  vi:'Phần Lan', ex:[{zh:'芬兰在北欧。',py:'Fēnlán zài Běi Ōu.',vi:'Phần Lan ở Bắc Âu.'},{zh:'芬兰冬天很冷。',py:'Fēnlán dōngtiān hěn lěng.',vi:'Mùa đông ở Phần Lan rất lạnh.'},{zh:'芬兰的教育很好。',py:'Fēnlán de jiàoyù hěn hǎo.',vi:'Giáo dục ở Phần Lan rất tốt.'}],},
      {zh:'加拿大',py:'Jiānádà',  type:'Danh từ',  vi:'Canada', ex:[{zh:'他是加拿大人。',py:'Tā shì Jiānádà rén.',vi:'Anh ấy là người Canada.'},{zh:'加拿大是一个很大的国家。',py:'Jiānádà shì yī gè hěn dà de guójiā.',vi:'Canada là một quốc gia rất rộng lớn.'},{zh:'他在加拿大留学。',py:'Tā zài Jiānádà liúxué.',vi:'Anh ấy đang du học ở Canada.'}],},
      {zh:'菲律宾',py:'Fēilǜbīn', type:'Danh từ',  vi:'Philippines', ex:[{zh:'菲律宾在东南亚。',py:'Fēilǜbīn zài Dōngnán Yà.',vi:'Philippines ở Đông Nam Á.'},{zh:'菲律宾是东南亚国家。',py:'Fēilǜbīn shì Dōngnányà guójiā.',vi:'Philippines là quốc gia Đông Nam Á.'},{zh:'菲律宾的海滩很美。',py:'Fēilǜbīn de hǎitān hěn měi.',vi:'Bãi biển Philippines rất đẹp.'}],},
      {zh:'老挝',  py:'Lǎowō',    type:'Danh từ',  vi:'Lào', ex:[{zh:'老挝在越南旁边。',py:'Lǎowō zài Yuènán pángbiān.',vi:'Lào ở bên cạnh Việt Nam.'},{zh:'老挝是越南的邻国。',py:'Lǎowō shì Yuènán de línguó.',vi:'Lào là nước láng giềng của Việt Nam.'},{zh:'老挝的首都是万象。',py:'Lǎowō de shǒudū shì Wànxiàng.',vi:'Thủ đô của Lào là Viêng Chăn.'}],},
      {zh:'泰国',  py:'Tàiguó',   type:'Danh từ',  vi:'Thái Lan', ex:[{zh:'泰国的食物很好吃。',py:'Tàiguó de shíwù hěn hǎochī.',vi:'Đồ ăn Thái Lan rất ngon.'},{zh:'泰国的食物很好吃。',py:'Tàiguó de shíwù hěn hǎochī.',vi:'Đồ ăn Thái Lan rất ngon.'},{zh:'我想去泰国旅游。',py:'Wǒ xiǎng qù Tàiguó lǚyóu.',vi:'Tôi muốn đi du lịch Thái Lan.'}],},
      {zh:'台湾',  py:'Táiwān',   type:'Danh từ',  vi:'Đài Loan', ex:[{zh:'台湾的水果很有名。',py:'Táiwān de shuǐguǒ hěn yǒumíng.',vi:'Hoa quả Đài Loan rất nổi tiếng.'},{zh:'台湾的小吃很有名。',py:'Táiwān de xiǎochī hěn yǒumíng.',vi:'Đồ ăn vặt của Đài Loan rất nổi tiếng.'},{zh:'他来自台湾。',py:'Tā láizì Táiwān.',vi:'Anh ấy đến từ Đài Loan.'}],},
      {zh:'柬埔寨',py:'Jiǎnpǔzhài',type:'Danh từ', vi:'Campuchia', ex:[{zh:'柬埔寨在越南旁边。',py:'Jiǎnpǔzhài zài Yuènán pángbiān.',vi:'Campuchia ở bên cạnh Việt Nam.'},{zh:'柬埔寨有著名的吴哥窟。',py:'Jiǎnpǔzhài yǒu zhùmíng de Wúgēkū.',vi:'Campuchia có Angkor Wat nổi tiếng.'},{zh:'柬埔寨也是东南亚国家。',py:'Jiǎnpǔzhài yě shì Dōngnányà guójiā.',vi:'Campuchia cũng là quốc gia Đông Nam Á.'}],},
      {zh:'汉字',  py:'Hànzì',    type:'Danh từ',  vi:'chữ Hán', ex:[{zh:'汉字很难写，但是很美。',py:'Hànzì hěn nán xiě, dànshì hěn měi.',vi:'Chữ Hán rất khó viết nhưng rất đẹp.'},{zh:'汉字很难写。',py:'Hànzì hěn nán xiě.',vi:'Chữ Hán rất khó viết.'},{zh:'我每天练习写汉字。',py:'Wǒ měitiān liànxí xiě Hànzì.',vi:'Mỗi ngày tôi luyện viết chữ Hán.'},{zh:'汉字有很多笔画。',py:'Hànzì yǒu hěn duō bǐhuà.',vi:'Chữ Hán có nhiều nét.'},{zh:'学汉语要学汉字。',py:'Xué Hànyǔ yào xué Hànzì.',vi:'Học tiếng Trung phải học chữ Hán.'}],},
      {zh:'学习',  py:'xuéxí',    type:'Động từ',  vi:'học tập', ex:[{zh:'我每天学习汉语。',py:'Wǒ měitiān xuéxí Hànyǔ.',vi:'Tôi học tiếng Hán mỗi ngày.'},{zh:'你学习认真吗？',py:'Nǐ xuéxí rènzhēn ma?',vi:'Bạn có học tập chăm chỉ không?'},{zh:'学习汉语很有意思。',py:'Xuéxí Hànyǔ hěn yǒu yìsi.',vi:'Học tiếng Trung rất thú vị.'},{zh:'我每天坚持学习。',py:'Wǒ měitiān jiānchí xuéxí.',vi:'Mỗi ngày tôi kiên trì học tập.'},{zh:'学习是最好的投资。',py:'Xuéxí shì zuì hǎo de tóuzī.',vi:'Học tập là đầu tư tốt nhất.'}],},
      {zh:'发音',  py:'fāyīn',    type:'Danh từ',  vi:'phát âm', ex:[{zh:'汉语发音很难学。',py:'Hànyǔ fāyīn hěn nán xué.',vi:'Phát âm tiếng Hán rất khó học.'},{zh:'汉语发音很难。',py:'Hànyǔ fāyīn hěn nán.',vi:'Phát âm tiếng Trung rất khó.'},{zh:'你的发音很标准。',py:'Nǐ de fāyīn hěn biāozhǔn.',vi:'Phát âm của bạn rất chuẩn.'},{zh:'我要练习发音。',py:'Wǒ yào liànxí fāyīn.',vi:'Tôi muốn luyện tập phát âm.'},{zh:'声调影响发音。',py:'Shēngdiào yǐngxiǎng fāyīn.',vi:'Thanh điệu ảnh hưởng đến phát âm.'}],},
      {zh:'书',    py:'shū',      type:'Danh từ',  vi:'sách', ex:[{zh:'这本书很好看。',py:'Zhè běn shū hěn hǎokàn.',vi:'Quyển sách này rất hay.'},{zh:'你在看什么书？',py:'Nǐ zài kàn shénme shū?',vi:'Bạn đang đọc sách gì?'},{zh:'我买了一本汉语书。',py:'Wǒ mǎi le yī běn Hànyǔ shū.',vi:'Tôi mua một cuốn sách tiếng Trung.'},{zh:'图书馆有很多书。',py:'Túshūguǎn yǒu hěn duō shū.',vi:'Thư viện có rất nhiều sách.'}],},
      {zh:'杂志',  py:'zázhì',    type:'Danh từ',  vi:'tạp chí', ex:[{zh:'我买了一本汉语杂志。',py:'Wǒ mǎi le yī běn Hànyǔ zázhì.',vi:'Tôi đã mua một quyển tạp chí tiếng Hán.'},{zh:'我喜欢看杂志。',py:'Wǒ xǐhuān kàn zázhì.',vi:'Tôi thích đọc tạp chí.'},{zh:'书店里有很多杂志。',py:'Shūdiàn lǐ yǒu hěn duō zázhì.',vi:'Trong hiệu sách có rất nhiều tạp chí.'},{zh:'这本杂志很有意思。',py:'Zhè běn zázhì hěn yǒu yìsi.',vi:'Tạp chí này rất thú vị.'}],},
      {zh:'的',    py:'de',       type:'Trợ từ',   vi:'của (sở hữu / định ngữ)', ex:[{zh:'这是我的书。',py:'Zhè shì wǒ de shū.',vi:'Đây là sách của tôi.'},{zh:'这是我的书。',py:'Zhè shì wǒ de shū.',vi:'Đây là sách của tôi.'},{zh:'他的汉语很好。',py:'Tā de Hànyǔ hěn hǎo.',vi:'Tiếng Trung của anh ấy rất tốt.'},{zh:'漂亮的花。',py:'Piàoliang de huā.',vi:'Bông hoa đẹp.'},{zh:'我买的东西。',py:'Wǒ mǎi de dōngxi.',vi:'Đồ tôi mua.'}],},
      {zh:'国家',  py:'guójiā',   type:'Danh từ',  vi:'quốc gia, đất nước', ex:[{zh:'你的国家在哪儿？',py:'Nǐ de guójiā zài nǎr?',vi:'Đất nước của bạn ở đâu?'},{zh:'中国是一个大国家。',py:'Zhōngguó shì yī gè dà guójiā.',vi:'Trung Quốc là một quốc gia lớn.'},{zh:'你的国家在哪里？',py:'Nǐ de guójiā zài nǎlǐ?',vi:'Đất nước của bạn ở đâu?'},{zh:'每个国家都有自己的文化。',py:'Měi gè guójiā dōu yǒu zìjǐ de wénhuà.',vi:'Mỗi quốc gia đều có văn hóa riêng.'}],},
      {zh:'不是',  py:'bú shì',   type:'Cụm từ',   vi:'không phải là', ex:[{zh:'不，我不是中国人，我是越南人。',py:'Bù, wǒ bú shì Zhōngguó rén, wǒ shì Yuènán rén.',vi:'Không, tôi không phải người Trung Quốc, tôi là người Việt Nam.'},{zh:'我不是中国人。',py:'Wǒ bú shì Zhōngguó rén.',vi:'Tôi không phải người Trung Quốc.'},{zh:'这不是我的书。',py:'Zhè bú shì wǒ de shū.',vi:'Đây không phải sách của tôi.'},{zh:'他不是老师，是学生。',py:'Tā bú shì lǎoshī, shì xuéshēng.',vi:'Anh ấy không phải thầy giáo, là học sinh.'}],},
    ]
  },
  {
    lesson: 'Buổi 8 (b9): 年龄与家庭 – Tuổi tác & Gia đình',
    words: [
      {zh:'几岁',  py:'jǐ suì',   type:'Cụm từ',  vi:'mấy tuổi (hỏi trẻ em)', ex:[{zh:'你孩子几岁？',py:'Nǐ háizi jǐ suì?',vi:'Con bạn mấy tuổi?'},{zh:'你的孩子几岁了？',py:'Nǐ de háizi jǐ suì le?',vi:'Con bạn mấy tuổi rồi?'},{zh:'他几岁了？——五岁。',py:'Tā jǐ suì le? — Wǔ suì.',vi:'Em bé mấy tuổi rồi? — Năm tuổi.'}],},
      {zh:'多大',  py:'duō dà',   type:'Cụm từ',  vi:'bao nhiêu tuổi (hỏi người lớn)', ex:[{zh:'你多大？',py:'Nǐ duō dà?',vi:'Bạn bao nhiêu tuổi?'},{zh:'你多大了？',py:'Nǐ duō dà le?',vi:'Bạn bao nhiêu tuổi rồi?'},{zh:'你爸爸多大年纪？',py:'Nǐ bàba duō dà niánjì?',vi:'Bố bạn bao nhiêu tuổi?'},{zh:'你多大？——二十五岁。',py:'Nǐ duō dà? — Èrshíwǔ suì.',vi:'Bạn bao nhiêu tuổi? — Hai mươi lăm.'}],},
      {zh:'岁',    py:'suì',      type:'Lượng từ', vi:'tuổi', ex:[{zh:'我三十岁。',py:'Wǒ sānshí suì.',vi:'Tôi ba mươi tuổi.'},{zh:'我今年二十二岁。',py:'Wǒ jīnnián èrshí\'èr suì.',vi:'Năm nay tôi hai mươi hai tuổi.'},{zh:'她二十岁就结婚了。',py:'Tā èrshí suì jiù jiéhūn le.',vi:'Cô ấy mới hai mươi tuổi đã kết hôn.'},{zh:'爷爷八十岁了，很健康。',py:'Yéye bāshí suì le, hěn jiànkāng.',vi:'Ông nội 80 tuổi rồi, rất khỏe mạnh.'}],},
      {zh:'孩子',  py:'háizi',    type:'Danh từ',  vi:'con cái, trẻ con', ex:[{zh:'你有孩子吗？',py:'Nǐ yǒu háizi ma?',vi:'Bạn có con chưa?'},{zh:'你有孩子吗？',py:'Nǐ yǒu háizi ma?',vi:'Bạn có con chưa?'},{zh:'他们有两个孩子。',py:'Tāmen yǒu liǎng gè háizi.',vi:'Họ có hai đứa con.'},{zh:'孩子们在公园玩。',py:'Háizimen zài gōngyuán wán.',vi:'Bọn trẻ đang chơi trong công viên.'}],},
      {zh:'儿子',  py:'érzi',     type:'Danh từ',  vi:'con trai', ex:[{zh:'我儿子三岁。',py:'Wǒ érzi sān suì.',vi:'Con trai tôi ba tuổi.'},{zh:'我有一个儿子。',py:'Wǒ yǒu yī gè érzi.',vi:'Tôi có một người con trai.'},{zh:'他的儿子很聪明。',py:'Tā de érzi hěn cōngmíng.',vi:'Con trai anh ấy rất thông minh.'},{zh:'儿子今年上小学了。',py:'Érzi jīnnián shàng xiǎoxué le.',vi:'Con trai năm nay vào tiểu học rồi.'}],},
      {zh:'女儿',  py:'nǚ\'ér',   type:'Danh từ',  vi:'con gái', ex:[{zh:'她女儿很可爱。',py:'Tā nǚ\'ér hěn kě\'ài.',vi:'Con gái cô ấy rất đáng yêu.'},{zh:'我的女儿很可爱。',py:'Wǒ de nǚ\'ér hěn kě\'ài.',vi:'Con gái tôi rất đáng yêu.'},{zh:'女儿比儿子乖。',py:'Nǚ\'ér bǐ érzi guāi.',vi:'Con gái ngoan hơn con trai.'},{zh:'他女儿学钢琴。',py:'Tā nǚ\'ér xué gāngqín.',vi:'Con gái anh ấy học đàn piano.'}],},
      {zh:'老婆',  py:'lǎopó',    type:'Danh từ',  vi:'vợ (thân mật)', ex:[{zh:'我老婆二十八岁。',py:'Wǒ lǎopó èrshíbā suì.',vi:'Vợ tôi hai mươi tám tuổi.'},{zh:'我老婆是越南人。',py:'Wǒ lǎopó shì Yuènán rén.',vi:'Vợ tôi là người Việt Nam.'},{zh:'他老婆在医院工作。',py:'Tā lǎopó zài yīyuàn gōngzuò.',vi:'Vợ anh ấy làm việc ở bệnh viện.'}],},
      {zh:'家',    py:'jiā',      type:'Danh từ',  vi:'nhà, gia đình', ex:[{zh:'我家有三口人。',py:'Wǒ jiā yǒu sān kǒu rén.',vi:'Nhà tôi có ba người.'},{zh:'我家有四口人。',py:'Wǒ jiā yǒu sì kǒu rén.',vi:'Nhà tôi có bốn người.'},{zh:'你家在哪里？',py:'Nǐ jiā zài nǎlǐ?',vi:'Nhà bạn ở đâu?'},{zh:'我想回家。',py:'Wǒ xiǎng huí jiā.',vi:'Tôi muốn về nhà.'},{zh:'家是最温暖的地方。',py:'Jiā shì zuì wēnnuǎn de dìfāng.',vi:'Nhà là nơi ấm áp nhất.'}],},
      {zh:'有',    py:'yǒu',      type:'Động từ',  vi:'có', ex:[{zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vi:'Nhà bạn có mấy người?'},{zh:'你有汉语词典吗？',py:'Nǐ yǒu Hànyǔ cídiǎn ma?',vi:'Bạn có từ điển tiếng Trung không?'},{zh:'我有两个姐姐。',py:'Wǒ yǒu liǎng gè jiějie.',vi:'Tôi có hai chị gái.'},{zh:'教室里有多少学生？',py:'Jiàoshì lǐ yǒu duōshao xuéshēng?',vi:'Trong lớp có bao nhiêu học sinh?'},{zh:'这里有没有厕所？',py:'Zhèlǐ yǒu méiyǒu cèsuǒ?',vi:'Ở đây có nhà vệ sinh không?'}],},
      {zh:'住',    py:'zhù',      type:'Động từ',  vi:'sống, ở, cư trú', ex:[{zh:'我们住在河内。',py:'Wǒmen zhù zài Hànèi.',vi:'Chúng tôi sống ở Hà Nội.'},{zh:'你住在哪儿？',py:'Nǐ zhù zài nǎr?',vi:'Bạn sống ở đâu?'},{zh:'我住在河内。',py:'Wǒ zhù zài Hénèi.',vi:'Tôi sống ở Hà Nội.'},{zh:'他住在学校旁边。',py:'Tā zhù zài xuéxiào pángbiān.',vi:'Anh ấy ở gần trường.'}],},
      {zh:'下午',  py:'xiàwǔ',    type:'Danh từ',  vi:'buổi chiều', ex:[{zh:'下午我去学校。',py:'Xiàwǔ wǒ qù xuéxiào.',vi:'Buổi chiều tôi đến trường.'},{zh:'下午三点我们见面。',py:'Xiàwǔ sān diǎn wǒmen jiànmiàn.',vi:'Chiều ba giờ chúng ta gặp nhau.'},{zh:'下午我去图书馆学习。',py:'Xiàwǔ wǒ qù túshūguǎn xuéxí.',vi:'Chiều tôi đi thư viện học.'},{zh:'今天下午有汉语课。',py:'Jīntiān xiàwǔ yǒu Hànyǔ kè.',vi:'Chiều nay có tiết tiếng Trung.'}],},
      {zh:'出去',  py:'chūqù',    type:'Động từ',  vi:'ra ngoài, đi ra', ex:[{zh:'今天中午我们出去吃饭。',py:'Jīntiān zhōngwǔ wǒmen chūqù chīfàn.',vi:'Trưa hôm nay chúng tôi ra ngoài ăn cơm.'},{zh:'你出去哪儿？',py:'Nǐ chūqù nǎr?',vi:'Bạn ra ngoài đi đâu?'},{zh:'我出去买东西。',py:'Wǒ chūqù mǎi dōngxi.',vi:'Tôi ra ngoài mua đồ.'},{zh:'天气好，我们出去走走吧。',py:'Tiānqì hǎo, wǒmen chūqù zǒuzou ba.',vi:'Thời tiết đẹp, chúng ta ra ngoài đi dạo nhé.'}],},
    ]
  },
  {
    lesson: 'Buổi 9 (b10): 你吃什么？– Bạn ăn gì?',
    words: [
      {zh:'公司',  py:'gōngsī',   type:'Danh từ', vi:'công ty', ex:[{zh:'你公司有食堂吗？',py:'Nǐ gōngsī yǒu shítáng ma?',vi:'Công ty bạn có nhà ăn không?'},{zh:'我在一家大公司工作。',py:'Wǒ zài yī jiā dà gōngsī gōngzuò.',vi:'Tôi làm việc tại một công ty lớn.'},{zh:'公司在市中心。',py:'Gōngsī zài shì zhōngxīn.',vi:'Công ty ở trung tâm thành phố.'},{zh:'他自己开公司。',py:'Tā zìjǐ kāi gōngsī.',vi:'Anh ấy tự mở công ty.'}],},
      {zh:'食堂',  py:'shítáng',  type:'Danh từ', vi:'nhà ăn, căng-tin', ex:[{zh:'学校食堂的饭很好吃。',py:'Xuéxiào shítáng de fàn hěn hǎochī.',vi:'Cơm ở căng-tin trường rất ngon.'},{zh:'我们在食堂吃午饭。',py:'Wǒmen zài shítáng chī wǔfàn.',vi:'Chúng tôi ăn trưa ở căng tin.'},{zh:'食堂的饭很便宜。',py:'Shítáng de fàn hěn piányí.',vi:'Cơm ở căng tin rất rẻ.'},{zh:'学校食堂几点开？',py:'Xuéxiào shítáng jǐ diǎn kāi?',vi:'Căng tin trường mấy giờ mở?'}],},
      {zh:'吃',    py:'chī',      type:'Động từ', vi:'ăn', ex:[{zh:'你喜欢吃什么？',py:'Nǐ xǐhuan chī shénme?',vi:'Bạn thích ăn gì?'},{zh:'你吃什么？',py:'Nǐ chī shénme?',vi:'Bạn ăn gì?'},{zh:'我喜欢吃中国菜。',py:'Wǒ xǐhuān chī Zhōngguó cài.',vi:'Tôi thích ăn đồ ăn Trung Quốc.'},{zh:'吃饭了吗？',py:'Chīfàn le ma?',vi:'Ăn cơm chưa?'},{zh:'我不吃辣的。',py:'Wǒ bù chī là de.',vi:'Tôi không ăn đồ cay.'}],},
      {zh:'饭',    py:'fàn',      type:'Danh từ', vi:'cơm, bữa ăn', ex:[{zh:'我要吃饭了。',py:'Wǒ yào chīfàn le.',vi:'Tôi sắp ăn cơm rồi.'},{zh:'你吃饭了吗？',py:'Nǐ chīfàn le ma?',vi:'Bạn ăn cơm chưa?'},{zh:'妈妈做的饭很好吃。',py:'Māma zuò de fàn hěn hǎochī.',vi:'Cơm mẹ nấu rất ngon.'},{zh:'我每天在家吃饭。',py:'Wǒ měitiān zài jiā chīfàn.',vi:'Mỗi ngày tôi ăn cơm ở nhà.'}],},
      {zh:'吃饭',  py:'chīfàn',   type:'Động từ', vi:'ăn cơm', ex:[{zh:'我们一起去吃饭吧！',py:'Wǒmen yīqǐ qù chīfàn ba!',vi:'Chúng ta cùng đi ăn cơm nhé!'},{zh:'我们一起去吃饭吧！',py:'Wǒmen yīqǐ qù chīfàn ba!',vi:'Chúng ta cùng đi ăn đi!'},{zh:'你吃饭了吗？',py:'Nǐ chīfàn le ma?',vi:'Bạn ăn cơm chưa?'},{zh:'吃饭的时候不要玩手机。',py:'Chīfàn de shíhou bú yào wán shǒujī.',vi:'Khi ăn cơm không được chơi điện thoại.'}],},
      {zh:'要',    py:'yào',      type:'Động từ', vi:'muốn, cần, gọi (món)', ex:[{zh:'我要一碗面条。',py:'Wǒ yào yī wǎn miàntiáo.',vi:'Tôi muốn một bát mì sợi.'},{zh:'我要一杯茶。',py:'Wǒ yào yī bēi chá.',vi:'Tôi muốn một ly trà.'},{zh:'你要吃什么？',py:'Nǐ yào chī shénme?',vi:'Bạn muốn ăn gì?'},{zh:'学好汉语要多练习。',py:'Xué hǎo Hànyǔ yào duō liànxí.',vi:'Muốn học giỏi tiếng Trung phải luyện tập nhiều.'},{zh:'我要回家了。',py:'Wǒ yào huí jiā le.',vi:'Tôi phải về nhà rồi.'}],},
      {zh:'面条',  py:'miàntiáo', type:'Danh từ', vi:'mì sợi', ex:[{zh:'我喜欢吃面条。',py:'Wǒ xǐhuan chī miàntiáo.',vi:'Tôi thích ăn mì sợi.'},{zh:'我喜欢吃面条。',py:'Wǒ xǐhuān chī miàntiáo.',vi:'Tôi thích ăn mì.'},{zh:'这碗面条很好吃。',py:'Zhè wǎn miàntiáo hěn hǎochī.',vi:'Tô mì này rất ngon.'},{zh:'你要吃米饭还是面条？',py:'Nǐ yào chī mǐfàn háishi miàntiáo?',vi:'Bạn muốn ăn cơm hay mì?'}],},
      {zh:'鸡蛋',  py:'jīdàn',    type:'Danh từ', vi:'trứng gà', ex:[{zh:'我每天早上吃鸡蛋。',py:'Wǒ měitiān zǎoshang chī jīdàn.',vi:'Tôi ăn trứng gà mỗi buổi sáng.'},{zh:'我早上吃鸡蛋。',py:'Wǒ zǎoshang chī jīdàn.',vi:'Buổi sáng tôi ăn trứng.'},{zh:'鸡蛋一个多少钱？',py:'Jīdàn yī gè duōshao qián?',vi:'Một quả trứng bao nhiêu tiền?'},{zh:'炒鸡蛋很简单。',py:'Chǎo jīdàn hěn jiǎndān.',vi:'Trứng chiên rất đơn giản.'}],},
      {zh:'鸡',    py:'jī',       type:'Danh từ', vi:'gà', ex:[{zh:'我喜欢吃鸡肉。',py:'Wǒ xǐhuan chī jīròu.',vi:'Tôi thích ăn thịt gà.'},{zh:'我喜欢吃鸡肉。',py:'Wǒ xǐhuān chī jīròu.',vi:'Tôi thích ăn thịt gà.'},{zh:'烤鸡很好吃。',py:'Kǎo jī hěn hǎochī.',vi:'Gà nướng rất ngon.'},{zh:'她养了几只鸡。',py:'Tā yǎng le jǐ zhī jī.',vi:'Cô ấy nuôi mấy con gà.'}],},
      {zh:'汤',    py:'tāng',     type:'Danh từ', vi:'canh', ex:[{zh:'这碗汤很鲜。',py:'Zhè wǎn tāng hěn xiān.',vi:'Bát canh này rất ngon ngọt.'},{zh:'这碗汤很好喝。',py:'Zhè wǎn tāng hěn hǎohē.',vi:'Tô canh này rất ngon.'},{zh:'天冷喝汤暖身体。',py:'Tiān lěng hē tāng nuǎn shēntǐ.',vi:'Trời lạnh uống canh ấm người.'},{zh:'我要一碗鸡汤。',py:'Wǒ yào yī wǎn jī tāng.',vi:'Tôi muốn một tô canh gà.'}],},
      {zh:'米饭',  py:'mǐfàn',    type:'Danh từ', vi:'cơm trắng', ex:[{zh:'我要一碗米饭。',py:'Wǒ yào yī wǎn mǐfàn.',vi:'Tôi muốn một bát cơm trắng.'},{zh:'中国人喜欢吃米饭。',py:'Zhōngguó rén xǐhuān chī mǐfàn.',vi:'Người Trung Quốc thích ăn cơm.'},{zh:'我每天吃米饭。',py:'Wǒ měitiān chī mǐfàn.',vi:'Mỗi ngày tôi ăn cơm.'},{zh:'来一碗米饭吧。',py:'Lái yī wǎn mǐfàn ba.',vi:'Cho một bát cơm nhé.'}],},
      {zh:'米',    py:'mǐ',       type:'Danh từ', vi:'gạo; mét', ex:[{zh:'家里的米没有了。',py:'Jiālǐ de mǐ méiyǒu le.',vi:'Gạo ở nhà hết rồi.'},{zh:'买五斤米。',py:'Mǎi wǔ jīn mǐ.',vi:'Mua năm cân gạo.'},{zh:'这个房间有二十平米。',py:'Zhège fángjiān yǒu èrshí píng mǐ.',vi:'Phòng này có hai mươi mét vuông.'}],},
      {zh:'馒头',  py:'mántou',   type:'Danh từ', vi:'bánh bao không nhân', ex:[{zh:'早上我吃馒头。',py:'Zǎoshang wǒ chī mántou.',vi:'Buổi sáng tôi ăn bánh bao không nhân.'},{zh:'早上我吃馒头。',py:'Zǎoshang wǒ chī mántou.',vi:'Buổi sáng tôi ăn bánh bao trắng.'},{zh:'馒头比饺子简单。',py:'Mántou bǐ jiǎozi jiǎndān.',vi:'Bánh bao trắng đơn giản hơn sủi cảo.'}],},
      {zh:'饺子',  py:'jiǎozi',   type:'Danh từ', vi:'sủi cảo, há cảo', ex:[{zh:'饺子是中国的传统食物。',py:'Jiǎozi shì Zhōngguó de chuántǒng shíwù.',vi:'Sủi cảo là món ăn truyền thống của Trung Quốc.'},{zh:'我最喜欢吃饺子。',py:'Wǒ zuì xǐhuān chī jiǎozi.',vi:'Tôi thích ăn sủi cảo nhất.'},{zh:'春节吃饺子是传统。',py:'Chūnjié chī jiǎozi shì chuántǒng.',vi:'Ăn sủi cảo ngày Tết là truyền thống.'},{zh:'奶奶做的饺子最好吃。',py:'Nǎinai zuò de jiǎozi zuì hǎochī.',vi:'Sủi cảo bà nội làm ngon nhất.'}],},
      {zh:'包子',  py:'bāozi',    type:'Danh từ', vi:'bánh bao có nhân', ex:[{zh:'我要两个包子。',py:'Wǒ yào liǎng gè bāozi.',vi:'Tôi muốn hai cái bánh bao.'},{zh:'早上我买了两个包子。',py:'Zǎoshang wǒ mǎi le liǎng gè bāozi.',vi:'Buổi sáng tôi mua hai cái bánh bao.'},{zh:'肉包子很好吃。',py:'Ròu bāozi hěn hǎochī.',vi:'Bánh bao nhân thịt rất ngon.'}],},
      {zh:'啤酒',  py:'píjiǔ',    type:'Danh từ', vi:'bia', ex:[{zh:'他不喝啤酒。',py:'Tā bù hē píjiǔ.',vi:'Anh ấy không uống bia.'},{zh:'他不喝啤酒。',py:'Tā bù hē píjiǔ.',vi:'Anh ấy không uống bia.'},{zh:'天热喝啤酒很舒服。',py:'Tiān rè hē píjiǔ hěn shūfu.',vi:'Trời nóng uống bia rất sảng khoái.'},{zh:'一瓶啤酒多少钱？',py:'Yī píng píjiǔ duōshao qián?',vi:'Một chai bia bao nhiêu tiền?'}],},
      {zh:'一些',  py:'yìxiē',    type:'Lượng từ',vi:'một vài, một số', ex:[{zh:'请给我一些水。',py:'Qǐng gěi wǒ yīxiē shuǐ.',vi:'Xin cho tôi một chút nước.'},{zh:'我买了一些水果。',py:'Wǒ mǎi le yīxiē shuǐguǒ.',vi:'Tôi mua một ít trái cây.'},{zh:'给我一些时间。',py:'Gěi wǒ yīxiē shíjiān.',vi:'Cho tôi một chút thời gian.'},{zh:'我还有一些问题。',py:'Wǒ hái yǒu yīxiē wèntí.',vi:'Tôi còn một số câu hỏi.'}],},
      {zh:'这些',  py:'zhèxiē',   type:'Đại từ',  vi:'những cái này', ex:[{zh:'这些书都是我的。',py:'Zhèxiē shū dōu shì wǒ de.',vi:'Những quyển sách này đều là của tôi.'},{zh:'这些苹果多少钱？',py:'Zhèxiē píngguǒ duōshao qián?',vi:'Những quả táo này bao nhiêu tiền?'},{zh:'这些书都是我的。',py:'Zhèxiē shū dōu shì wǒ de.',vi:'Những cuốn sách này đều là của tôi.'},{zh:'这些问题很难。',py:'Zhèxiē wèntí hěn nán.',vi:'Những câu hỏi này rất khó.'}],},
      {zh:'那些',  py:'nàxiē',    type:'Đại từ',  vi:'những cái kia', ex:[{zh:'那些苹果多少钱？',py:'Nàxiē píngguǒ duōshao qián?',vi:'Những quả táo kia bao nhiêu tiền?'},{zh:'那些学生都很认真。',py:'Nàxiē xuéshēng dōu hěn rènzhēn.',vi:'Những học sinh đó đều rất chăm chỉ.'},{zh:'那些水果新鲜吗？',py:'Nàxiē shuǐguǒ xīnxiān ma?',vi:'Những trái cây đó có tươi không?'}],},
      {zh:'个',    py:'gè',       type:'Lượng từ',vi:'lượng từ phổ thông (cái, con)', ex:[{zh:'请给我两个鸡蛋。',py:'Qǐng gěi wǒ liǎng gè jīdàn.',vi:'Xin cho tôi hai quả trứng.'},{zh:'我要两个苹果。',py:'Wǒ yào liǎng gè píngguǒ.',vi:'Tôi muốn hai quả táo.'},{zh:'他有三个孩子。',py:'Tā yǒu sān gè háizi.',vi:'Anh ấy có ba đứa con.'},{zh:'一个人住很寂寞。',py:'Yī gè rén zhù hěn jìmò.',vi:'Sống một mình rất cô đơn.'}],},
      {zh:'碗',    py:'wǎn',      type:'Lượng từ',vi:'bát (lượng từ); cái bát', ex:[{zh:'请给我一碗汤。',py:'Qǐng gěi wǒ yī wǎn tāng.',vi:'Xin cho tôi một bát canh.'},{zh:'我要一碗米饭。',py:'Wǒ yào yī wǎn mǐfàn.',vi:'Tôi muốn một bát cơm.'},{zh:'他吃了两碗面条。',py:'Tā chī le liǎng wǎn miàntiáo.',vi:'Anh ấy ăn hai tô mì.'},{zh:'这个碗很漂亮。',py:'Zhège wǎn hěn piàoliang.',vi:'Cái bát này rất đẹp.'}],},
      {zh:'本',    py:'běn',      type:'Lượng từ',vi:'quyển, cuốn (lượng từ sách)', ex:[{zh:'我有一些书，这些书是我的。',py:'Wǒ yǒu yīxiē shū, zhèxiē shū shì wǒ de.',vi:'Tôi có vài quyển sách, những quyển sách này là của tôi.'},{zh:'我买了一本汉语书。',py:'Wǒ mǎi le yī běn Hànyǔ shū.',vi:'Tôi mua một cuốn sách tiếng Trung.'},{zh:'你有几本书？',py:'Nǐ yǒu jǐ běn shū?',vi:'Bạn có mấy cuốn sách?'},{zh:'这本书很有意思。',py:'Zhè běn shū hěn yǒu yìsi.',vi:'Cuốn sách này rất thú vị.'}],},
      {zh:'盘',    py:'pán',      type:'Lượng từ',vi:'đĩa (lượng từ), cái đĩa', ex:[{zh:'请给我一盘饺子。',py:'Qǐng gěi wǒ yī pán jiǎozi.',vi:'Xin cho tôi một đĩa sủi cảo.'},{zh:'来一盘炒饭。',py:'Lái yī pán chǎofàn.',vi:'Cho một đĩa cơm chiên.'},{zh:'这盘菜很好吃。',py:'Zhè pán cài hěn hǎochī.',vi:'Đĩa rau này rất ngon.'},{zh:'两盘饺子够吗？',py:'Liǎng pán jiǎozi gòu ma?',vi:'Hai đĩa sủi cảo có đủ không?'}],},
      {zh:'瓶',    py:'píng',     type:'Lượng từ',vi:'chai (lượng từ), cái chai', ex:[{zh:'我要一瓶啤酒。',py:'Wǒ yào yī píng píjiǔ.',vi:'Tôi muốn một chai bia.'},{zh:'我买了两瓶水。',py:'Wǒ mǎi le liǎng píng shuǐ.',vi:'Tôi mua hai chai nước.'},{zh:'一瓶啤酒多少钱？',py:'Yī píng píjiǔ duōshao qián?',vi:'Một chai bia bao nhiêu tiền?'},{zh:'这瓶酱油是我的。',py:'Zhè píng jiàngyóu shì wǒ de.',vi:'Chai nước tương này là của tôi.'}],},
      {zh:'杯',    py:'bēi',      type:'Lượng từ',vi:'ly, cốc (lượng từ)', ex:[{zh:'请给我一杯水。',py:'Qǐng gěi wǒ yī bēi shuǐ.',vi:'Xin cho tôi một ly nước.'},{zh:'请给我一杯水。',py:'Qǐng gěi wǒ yī bēi shuǐ.',vi:'Làm ơn cho tôi một ly nước.'},{zh:'我喝了三杯咖啡。',py:'Wǒ hē le sān bēi kāfēi.',vi:'Tôi uống ba ly cà phê rồi.'},{zh:'这杯奶茶很好喝。',py:'Zhè bēi nǎichá hěn hǎohē.',vi:'Ly trà sữa này rất ngon.'}],},
      {zh:'中午',  py:'zhōngwǔ',  type:'Danh từ', vi:'buổi trưa', ex:[{zh:'中午我们去食堂吃饭。',py:'Zhōngwǔ wǒmen qù shítáng chīfàn.',vi:'Buổi trưa chúng tôi đến căng-tin ăn cơm.'},{zh:'中午我在食堂吃饭。',py:'Zhōngwǔ wǒ zài shítáng chīfàn.',vi:'Buổi trưa tôi ăn cơm ở căng tin.'},{zh:'中午你有空吗？',py:'Zhōngwǔ nǐ yǒu kòng ma?',vi:'Buổi trưa bạn có rảnh không?'},{zh:'中午十二点吃午饭。',py:'Zhōngwǔ shí\'èr diǎn chī wǔfàn.',vi:'Mười hai giờ trưa ăn trưa.'}],},
      {zh:'早上',  py:'zǎoshang', type:'Danh từ', vi:'buổi sáng', ex:[{zh:'早上我喝咖啡。',py:'Zǎoshang wǒ hē kāfēi.',vi:'Buổi sáng tôi uống cà phê.'},{zh:'早上好！',py:'Zǎoshang hǎo!',vi:'Chào buổi sáng!'},{zh:'我每天早上六点起床。',py:'Wǒ měitiān zǎoshang liù diǎn qǐchuáng.',vi:'Mỗi ngày tôi dậy lúc 6 giờ sáng.'},{zh:'早上我吃粥。',py:'Zǎoshang wǒ chī zhōu.',vi:'Buổi sáng tôi ăn cháo.'}],},
      {zh:'晚上',  py:'wǎnshang', type:'Danh từ', vi:'buổi tối', ex:[{zh:'晚上我看书学习。',py:'Wǎnshang wǒ kàn shū xuéxí.',vi:'Buổi tối tôi đọc sách học bài.'},{zh:'晚上好！',py:'Wǎnshang hǎo!',vi:'Chào buổi tối!'},{zh:'我晚上学习汉语。',py:'Wǒ wǎnshang xuéxí Hànyǔ.',vi:'Buổi tối tôi học tiếng Trung.'},{zh:'晚上我们一起吃饭吧。',py:'Wǎnshang wǒmen yīqǐ chīfàn ba.',vi:'Tối nay chúng ta cùng ăn cơm nhé.'}],},
    ]
  },
  {
    lesson: 'Buổi 10 (b11): 苹果一斤多少钱？– Mua hoa quả',
    words: [
      {zh:'买',   py:'mǎi',    type:'Động từ', vi:'mua', ex:[{zh:'我要去买水果。',py:'Wǒ yào qù mǎi shuǐguǒ.',vi:'Tôi muốn đi mua hoa quả.'},{zh:'我去买水果。',py:'Wǒ qù mǎi shuǐguǒ.',vi:'Tôi đi mua trái cây.'},{zh:'你买了什么？',py:'Nǐ mǎi le shénme?',vi:'Bạn mua gì vậy?'},{zh:'我想买一本汉语书。',py:'Wǒ xiǎng mǎi yī běn Hànyǔ shū.',vi:'Tôi muốn mua một cuốn sách tiếng Trung.'},{zh:'这个太贵了，我不买。',py:'Zhège tài guì le, wǒ bù mǎi.',vi:'Cái này đắt quá, tôi không mua.'}],},
      {zh:'卖',   py:'mài',    type:'Động từ', vi:'bán', ex:[{zh:'这里卖什么水果？',py:'Zhèlǐ mài shénme shuǐguǒ?',vi:'Ở đây bán những loại hoa quả gì?'},{zh:'这里卖什么？',py:'Zhèlǐ mài shénme?',vi:'Ở đây bán gì?'},{zh:'他卖水果为生。',py:'Tā mài shuǐguǒ wéishēng.',vi:'Anh ấy bán trái cây để sống.'},{zh:'这个东西卖完了。',py:'Zhège dōngxi mài wán le.',vi:'Món này đã bán hết rồi.'}],},
      {zh:'水果', py:'shuǐguǒ',type:'Danh từ', vi:'hoa quả, trái cây', ex:[{zh:'我每天吃水果。',py:'Wǒ měitiān chī shuǐguǒ.',vi:'Tôi ăn hoa quả mỗi ngày.'},{zh:'我喜欢吃水果。',py:'Wǒ xǐhuān chī shuǐguǒ.',vi:'Tôi thích ăn trái cây.'},{zh:'越南水果很好吃。',py:'Yuènán shuǐguǒ hěn hǎochī.',vi:'Trái cây Việt Nam rất ngon.'},{zh:'多吃水果对身体好。',py:'Duō chī shuǐguǒ duì shēntǐ hǎo.',vi:'Ăn nhiều trái cây tốt cho sức khỏe.'}],},
      {zh:'苹果', py:'píngguǒ',type:'Danh từ', vi:'táo (apple)', ex:[{zh:'苹果一斤多少钱？',py:'Píngguǒ yī jīn duōshao qián?',vi:'Một cân táo bao nhiêu tiền?'},{zh:'苹果一斤多少钱？',py:'Píngguǒ yī jīn duōshao qián?',vi:'Táo một cân bao nhiêu tiền?'},{zh:'我每天吃一个苹果。',py:'Wǒ měitiān chī yī gè píngguǒ.',vi:'Mỗi ngày tôi ăn một quả táo.'},{zh:'红苹果比绿苹果甜。',py:'Hóng píngguǒ bǐ lǜ píngguǒ tián.',vi:'Táo đỏ ngọt hơn táo xanh.'}],},
      {zh:'橘子', py:'júzi',   type:'Danh từ', vi:'quýt', ex:[{zh:'橘子又甜又酸。',py:'Júzi yòu tián yòu suān.',vi:'Quýt vừa ngọt vừa chua.'},{zh:'橘子酸甜好吃。',py:'Júzi suāntián hǎochī.',vi:'Quýt chua ngọt rất ngon.'},{zh:'冬天吃橘子很好。',py:'Dōngtiān chī júzi hěn hǎo.',vi:'Mùa đông ăn quýt rất tốt.'}],},
      {zh:'橙子', py:'chéngzi',type:'Danh từ', vi:'quả cam', ex:[{zh:'橙子一斤多少钱？',py:'Chéngzi yī jīn duōshao qián?',vi:'Một cân cam bao nhiêu tiền?'},{zh:'橙子汁很好喝。',py:'Chéngzi zhī hěn hǎohē.',vi:'Nước cam rất ngon.'},{zh:'我买了五个橙子。',py:'Wǒ mǎi le wǔ gè chéngzi.',vi:'Tôi mua năm quả cam.'}],},
      {zh:'芒果', py:'mángguǒ',type:'Danh từ', vi:'xoài', ex:[{zh:'芒果怎么卖？',py:'Mángguǒ zěnme mài?',vi:'Xoài bán như thế nào?'},{zh:'越南芒果很甜。',py:'Yuènán mángguǒ hěn tián.',vi:'Xoài Việt Nam rất ngọt.'},{zh:'我最喜欢吃芒果。',py:'Wǒ zuì xǐhuān chī mángguǒ.',vi:'Tôi thích ăn xoài nhất.'}],},
      {zh:'葡萄', py:'pútao',  type:'Danh từ', vi:'nho', ex:[{zh:'这个葡萄很甜。',py:'Zhège pútao hěn tián.',vi:'Nho này rất ngọt.'},{zh:'这串葡萄很甜。',py:'Zhè chuàn pútáo hěn tián.',vi:'Chùm nho này rất ngọt.'},{zh:'葡萄一斤多少钱？',py:'Pútáo yī jīn duōshao qián?',vi:'Nho một cân bao nhiêu tiền?'}],},
      {zh:'香蕉', py:'xiāngjiāo',type:'Danh từ',vi:'chuối', ex:[{zh:'我买了两斤香蕉。',py:'Wǒ mǎi le liǎng jīn xiāngjiāo.',vi:'Tôi đã mua hai cân chuối.'},{zh:'香蕉对身体很好。',py:'Xiāngjiāo duì shēntǐ hěn hǎo.',vi:'Chuối rất tốt cho sức khỏe.'},{zh:'我买了一把香蕉。',py:'Wǒ mǎi le yī bǎ xiāngjiāo.',vi:'Tôi mua một nải chuối.'}],},
      {zh:'西瓜', py:'xīguā',  type:'Danh từ', vi:'dưa hấu', ex:[{zh:'夏天西瓜很好吃。',py:'Xiàtiān xīguā hěn hǎochī.',vi:'Mùa hè ăn dưa hấu rất ngon.'},{zh:'夏天吃西瓜很好。',py:'Xiàtiān chī xīguā hěn hǎo.',vi:'Mùa hè ăn dưa hấu rất tốt.'},{zh:'西瓜一个多少钱？',py:'Xīguā yī gè duōshao qián?',vi:'Một quả dưa hấu bao nhiêu tiền?'},{zh:'越南的西瓜很甜。',py:'Yuènán de xīguā hěn tián.',vi:'Dưa hấu Việt Nam rất ngọt.'}],},
      {zh:'梨',   py:'lí',     type:'Danh từ', vi:'lê (quả lê)', ex:[{zh:'梨比苹果便宜。',py:'Lí bǐ píngguǒ piányi.',vi:'Lê rẻ hơn táo.'},{zh:'这个梨很甜。',py:'Zhège lí hěn tián.',vi:'Quả lê này rất ngọt.'},{zh:'我买了几个梨。',py:'Wǒ mǎi le jǐ gè lí.',vi:'Tôi mua mấy quả lê.'}],},
      {zh:'桃',   py:'táo',    type:'Danh từ', vi:'đào (quả đào)', ex:[{zh:'桃子很甜很香。',py:'Táozi hěn tián hěn xiāng.',vi:'Đào rất ngọt và thơm.'},{zh:'桃子很好吃。',py:'Táozi hěn hǎochī.',vi:'Quả đào rất ngon.'},{zh:'我喜欢吃水蜜桃。',py:'Wǒ xǐhuān chī shuǐmìtáo.',vi:'Tôi thích ăn đào mật.'}],},
      {zh:'草莓', py:'cǎoméi', type:'Danh từ', vi:'dâu tây', ex:[{zh:'草莓一斤多少钱？',py:'Cǎoméi yī jīn duōshao qián?',vi:'Một cân dâu tây bao nhiêu tiền?'},{zh:'草莓又甜又酸。',py:'Cǎoméi yòu tián yòu suān.',vi:'Dâu tây vừa ngọt vừa chua.'},{zh:'我买了一盒草莓。',py:'Wǒ mǎi le yī hé cǎoméi.',vi:'Tôi mua một hộp dâu tây.'}],},
      {zh:'喜欢', py:'xǐhuan', type:'Động từ', vi:'thích', ex:[{zh:'我喜欢吃水果。',py:'Wǒ xǐhuan chī shuǐguǒ.',vi:'Tôi thích ăn hoa quả.'},{zh:'你喜欢什么运动？',py:'Nǐ xǐhuān shénme yùndòng?',vi:'Bạn thích môn thể thao nào?'},{zh:'我很喜欢学汉语。',py:'Wǒ hěn xǐhuān xué Hànyǔ.',vi:'Tôi rất thích học tiếng Trung.'},{zh:'她喜欢听音乐。',py:'Tā xǐhuān tīng yīnyuè.',vi:'Cô ấy thích nghe nhạc.'},{zh:'我喜欢吃辣的食物。',py:'Wǒ xǐhuān chī là de shíwù.',vi:'Tôi thích ăn đồ ăn cay.'}],},
      {zh:'斤',   py:'jīn',    type:'Lượng từ',vi:'cân (đơn vị = 0,5 kg)', ex:[{zh:'苹果三块钱一斤。',py:'Píngguǒ sān kuài qián yī jīn.',vi:'Táo ba đồng một cân.'},{zh:'苹果三块钱一斤。',py:'Píngguǒ sān kuài qián yī jīn.',vi:'Táo ba tệ một cân (500g).'},{zh:'我要买两斤猪肉。',py:'Wǒ yào mǎi liǎng jīn zhūròu.',vi:'Tôi muốn mua một kg thịt lợn.'}],},
      {zh:'公斤', py:'gōngjīn',type:'Lượng từ',vi:'ki-lô-gam (kg)', ex:[{zh:'我买了两公斤苹果。',py:'Wǒ mǎi le liǎng gōngjīn píngguǒ.',vi:'Tôi đã mua hai ki-lô-gam táo.'},{zh:'我的体重是六十五公斤。',py:'Wǒ de tǐzhòng shì liùshíwǔ gōngjīn.',vi:'Cân nặng của tôi là 65 kg.'},{zh:'一公斤等于两斤。',py:'Yī gōngjīn děngyú liǎng jīn.',vi:'Một kilogram bằng hai cân (jīn).'}],},
      {zh:'多少', py:'duōshao',type:'Đại từ',  vi:'bao nhiêu (số lớn)', ex:[{zh:'这个多少钱？',py:'Zhège duōshao qián?',vi:'Cái này bao nhiêu tiền?'},{zh:'这件衣服多少钱？',py:'Zhè jiàn yīfu duōshao qián?',vi:'Bộ quần áo này bao nhiêu tiền?'},{zh:'你有多少中国朋友？',py:'Nǐ yǒu duōshao Zhōngguó péngyou?',vi:'Bạn có bao nhiêu người bạn Trung Quốc?'},{zh:'多少钱一斤？',py:'Duōshao qián yī jīn?',vi:'Bao nhiêu tiền một cân?'}],},
      {zh:'多',   py:'duō',    type:'Tính từ', vi:'nhiều', ex:[{zh:'今天来的人很多。',py:'Jīntiān lái de rén hěn duō.',vi:'Hôm nay có rất nhiều người đến.'},{zh:'这里人很多。',py:'Zhèlǐ rén hěn duō.',vi:'Ở đây nhiều người lắm.'},{zh:'我有很多问题。',py:'Wǒ yǒu hěn duō wèntí.',vi:'Tôi có nhiều câu hỏi.'},{zh:'多学多练。',py:'Duō xué duō liàn.',vi:'Học nhiều, luyện nhiều.'},{zh:'你买了多少？',py:'Nǐ mǎi le duōshao?',vi:'Bạn mua bao nhiêu?'}],},
      {zh:'少',   py:'shǎo',   type:'Tính từ', vi:'ít', ex:[{zh:'今天来的人很少。',py:'Jīntiān lái de rén hěn shǎo.',vi:'Hôm nay có rất ít người đến.'},{zh:'这里人很少。',py:'Zhèlǐ rén hěn shǎo.',vi:'Ở đây ít người.'},{zh:'我的钱不多，很少。',py:'Wǒ de qián bù duō, hěn shǎo.',vi:'Tiền của tôi không nhiều, rất ít.'},{zh:'少吃糖对身体好。',py:'Shǎo chī táng duì shēntǐ hǎo.',vi:'Ăn ít đường tốt cho sức khỏe.'}],},
      {zh:'块/元',py:'kuài/yuán',type:'Lượng từ',vi:'đồng (đơn vị tiền nhân dân tệ)', ex:[{zh:'苹果五块钱一斤。',py:'Píngguǒ wǔ kuài qián yī jīn.',vi:'Táo năm đồng một cân.'},{zh:'这个苹果两块钱。',py:'Zhège píngguǒ liǎng kuài qián.',vi:'Quả táo này hai tệ.'},{zh:'一共十五块。',py:'Yīgòng shíwǔ kuài.',vi:'Tổng cộng mười lăm tệ.'},{zh:'你找我五块钱。',py:'Nǐ zhǎo wǒ wǔ kuài qián.',vi:'Bạn thối lại cho tôi năm tệ.'}],},
      {zh:'角/毛',py:'jiǎo/máo',type:'Lượng từ',vi:'hào (1/10 đồng)', ex:[{zh:'找你五角。',py:'Zhǎo nǐ wǔ jiǎo.',vi:'Trả lại cho bạn năm hào.'},{zh:'五毛钱一个糖。',py:'Wǔ máo qián yī gè táng.',vi:'Năm hào một cái kẹo.'},{zh:'找你两毛钱。',py:'Zhǎo nǐ liǎng máo qián.',vi:'Thối lại bạn hai hào.'}],},
      {zh:'分',   py:'fēn',    type:'Lượng từ', vi:'xu (1/100 đồng)', ex:[{zh:'一块钱等于十角，一角等于十分。',py:'Yī kuài qián děngyú shí jiǎo, yī jiǎo děngyú shí fēn.',vi:'Một đồng bằng mười hào, một hào bằng mười xu.'},{zh:'一块钱等于一百分。',py:'Yī kuài qián děngyú yībǎi fēn.',vi:'Một tệ bằng một trăm xu.'},{zh:'他考了满分。',py:'Tā kǎo le mǎnfēn.',vi:'Anh ấy thi được điểm tuyệt đối.'}],},
      {zh:'百',   py:'bǎi',    type:'Số đếm',  vi:'trăm (100)', ex:[{zh:'一百块钱。',py:'Yī bǎi kuài qián.',vi:'Một trăm đồng.'},{zh:'一百块钱。',py:'Yībǎi kuài qián.',vi:'Một trăm tệ.'},{zh:'他跑了一百米。',py:'Tā pǎo le yībǎi mǐ.',vi:'Anh ấy chạy một trăm mét.'},{zh:'这里有几百个汉字。',py:'Zhèlǐ yǒu jǐ bǎi gè Hànzì.',vi:'Ở đây có mấy trăm chữ Hán.'}],},
      {zh:'贵',   py:'guì',    type:'Tính từ', vi:'đắt', ex:[{zh:'这里的水果太贵了。',py:'Zhèlǐ de shuǐguǒ tài guì le.',vi:'Hoa quả ở đây đắt quá rồi.'},{zh:'这个太贵了！',py:'Zhège tài guì le!',vi:'Cái này đắt quá!'},{zh:'北京的房子很贵。',py:'Běijīng de fángzi hěn guì.',vi:'Nhà ở Bắc Kinh rất đắt.'},{zh:'这家餐厅贵不贵？',py:'Zhè jiā cāntīng guì bu guì?',vi:'Nhà hàng này có đắt không?'}],},
      {zh:'便宜', py:'piányi', type:'Tính từ', vi:'rẻ', ex:[{zh:'这里的苹果很便宜。',py:'Zhèlǐ de píngguǒ hěn piányi.',vi:'Táo ở đây rất rẻ.'},{zh:'这件衣服很便宜。',py:'Zhè jiàn yīfu hěn piányí.',vi:'Bộ quần áo này rất rẻ.'},{zh:'有没有便宜一点的？',py:'Yǒu méiyǒu piányí yīdiǎn de?',vi:'Có cái nào rẻ hơn không?'},{zh:'越南的水果很便宜。',py:'Yuènán de shuǐguǒ hěn piányí.',vi:'Trái cây Việt Nam rất rẻ.'}],},
      {zh:'吧',   py:'ba',     type:'Trợ từ',  vi:'đi, nhé, thôi (đề nghị, gợi ý)', ex:[{zh:'我们走吧！',py:'Wǒmen zǒu ba!',vi:'Chúng ta đi thôi!'},{zh:'你是学生吧？',py:'Nǐ shì xuéshēng ba?',vi:'Bạn là học sinh đúng không?'},{zh:'我们走吧。',py:'Wǒmen zǒu ba.',vi:'Chúng ta đi thôi.'},{zh:'一起去吃饭吧！',py:'Yīqǐ qù chīfàn ba!',vi:'Cùng đi ăn cơm đi!'}],},
      {zh:'还',   py:'hái',    type:'Phó từ',  vi:'còn, vẫn còn', ex:[{zh:'你还要什么？',py:'Nǐ hái yào shénme?',vi:'Bạn còn muốn gì nữa không?'},{zh:'你还要什么？',py:'Nǐ hái yào shénme?',vi:'Bạn còn muốn gì nữa không?'},{zh:'我还有问题。',py:'Wǒ hái yǒu wèntí.',vi:'Tôi còn có câu hỏi.'},{zh:'他还没来。',py:'Tā hái méi lái.',vi:'Anh ấy vẫn chưa đến.'},{zh:'还有别的吗？',py:'Hái yǒu bié de ma?',vi:'Còn gì khác nữa không?'}],},
      {zh:'别的', py:'biéde',  type:'Đại từ',  vi:'(cái) khác', ex:[{zh:'你还要别的吗？',py:'Nǐ hái yào biéde ma?',vi:'Bạn còn muốn gì khác không?'},{zh:'还要别的吗？',py:'Hái yào bié de ma?',vi:'Còn muốn gì khác không?'},{zh:'没有别的了。',py:'Méiyǒu bié de le.',vi:'Không còn gì khác nữa.'},{zh:'我不想要别的。',py:'Wǒ bù xiǎng yào bié de.',vi:'Tôi không muốn gì khác.'}],},
      {zh:'怎么', py:'zěnme',  type:'Đại từ',  vi:'thế nào, sao, như thế nào', ex:[{zh:'这个字怎么读？',py:'Zhège zì zěnme dú?',vi:'Chữ này đọc thế nào?'},{zh:'这个汉字怎么写？',py:'Zhège Hànzì zěnme xiě?',vi:'Chữ Hán này viết như thế nào?'},{zh:'怎么去银行？',py:'Zěnme qù yínháng?',vi:'Đi ngân hàng như thế nào?'},{zh:'这道题怎么做？',py:'Zhè dào tí zěnme zuò?',vi:'Bài tập này làm như thế nào?'},{zh:'你怎么了？',py:'Nǐ zěnme le?',vi:'Bạn làm sao vậy?'}],},
      {zh:'两',   py:'liǎng',  type:'Số đếm',  vi:'hai (dùng trước lượng từ)', ex:[{zh:'我要两斤苹果。',py:'Wǒ yào liǎng jīn píngguǒ.',vi:'Tôi muốn hai cân táo.'},{zh:'我有两个姐姐。',py:'Wǒ yǒu liǎng gè jiějie.',vi:'Tôi có hai chị gái.'},{zh:'两个人吃够了。',py:'Liǎng gè rén chī gòu le.',vi:'Hai người ăn đủ rồi.'},{zh:'买两斤苹果。',py:'Mǎi liǎng jīn píngguǒ.',vi:'Mua hai cân táo.'}],},
      {zh:'一共', py:'yígòng', type:'Phó từ',  vi:'tổng cộng', ex:[{zh:'一共多少钱？',py:'Yígòng duōshao qián?',vi:'Tổng cộng bao nhiêu tiền?'},{zh:'一共多少钱？',py:'Yīgòng duōshao qián?',vi:'Tổng cộng bao nhiêu tiền?'},{zh:'我们一共有五个人。',py:'Wǒmen yīgòng yǒu wǔ gè rén.',vi:'Chúng tôi tổng cộng có năm người.'},{zh:'一共二十块钱。',py:'Yīgòng èrshí kuài qián.',vi:'Tất cả hai mươi tệ.'}],},
      {zh:'给',   py:'gěi',    type:'Động từ', vi:'đưa, cho', ex:[{zh:'给你钱，请收好。',py:'Gěi nǐ qián, qǐng shōu hǎo.',vi:'Đưa tiền cho bạn, hãy cầm lấy.'},{zh:'请给我一杯水。',py:'Qǐng gěi wǒ yī bēi shuǐ.',vi:'Làm ơn cho tôi một ly nước.'},{zh:'我给你打电话。',py:'Wǒ gěi nǐ dǎ diànhuà.',vi:'Tôi sẽ gọi điện cho bạn.'},{zh:'他给我寄了一封信。',py:'Tā gěi wǒ jì le yī fēng xìn.',vi:'Anh ấy gửi cho tôi một bức thư.'}],},
      {zh:'找',   py:'zhǎo',   type:'Động từ', vi:'tìm; trả lại (tiền thừa)', ex:[{zh:'找你三块钱。',py:'Zhǎo nǐ sān kuài qián.',vi:'Trả lại cho bạn ba đồng tiền thừa.'},{zh:'我在找我的书。',py:'Wǒ zài zhǎo wǒ de shū.',vi:'Tôi đang tìm sách của mình.'},{zh:'找不到了。',py:'Zhǎo bù dào le.',vi:'Tìm không thấy rồi.'},{zh:'找我五块钱。',py:'Zhǎo wǒ wǔ kuài qián.',vi:'Thối lại cho tôi năm tệ.'}],},
      {zh:'存钱', py:'cún qián',type:'Động từ', vi:'gửi tiền (tiết kiệm)', ex:[{zh:'我去银行存钱。',py:'Wǒ qù yínháng cún qián.',vi:'Tôi đến ngân hàng gửi tiền tiết kiệm.'},{zh:'我每个月存一些钱。',py:'Wǒ měi gè yuè cún yīxiē qián.',vi:'Mỗi tháng tôi để dành một ít tiền.'},{zh:'去银行存钱。',py:'Qù yínháng cún qián.',vi:'Đến ngân hàng gửi tiền.'},{zh:'存钱是好习惯。',py:'Cún qián shì hǎo xíguàn.',vi:'Tiết kiệm tiền là thói quen tốt.'}],},
      {zh:'旅游', py:'lǚyóu',  type:'Động từ', vi:'du lịch', ex:[{zh:'我们去北京旅游吧！',py:'Wǒmen qù Běijīng lǚyóu ba!',vi:'Chúng ta đi du lịch Bắc Kinh nhé!'},{zh:'我喜欢旅游。',py:'Wǒ xǐhuān lǚyóu.',vi:'Tôi thích du lịch.'},{zh:'周末我们去旅游吧。',py:'Zhōumò wǒmen qù lǚyóu ba.',vi:'Cuối tuần chúng ta đi du lịch nhé.'},{zh:'旅游可以学到很多东西。',py:'Lǚyóu kěyǐ xuédào hěn duō dōngxi.',vi:'Du lịch có thể học được nhiều thứ.'}],},
      {zh:'跟',   py:'gēn',    type:'Giới từ', vi:'cùng với, theo', ex:[{zh:'你为什么不跟我们去旅游？',py:'Nǐ wèishénme bù gēn wǒmen qù lǚyóu?',vi:'Tại sao bạn không đi du lịch cùng chúng tôi?'},{zh:'我跟朋友一起去。',py:'Wǒ gēn péngyou yīqǐ qù.',vi:'Tôi đi cùng bạn bè.'},{zh:'你跟我学汉语吧。',py:'Nǐ gēn wǒ xué Hànyǔ ba.',vi:'Bạn học tiếng Trung với tôi nhé.'},{zh:'她跟我是同班同学。',py:'Tā gēn wǒ shì tóngbān tóngxué.',vi:'Cô ấy và tôi là bạn cùng lớp.'}],},
    ]
  },
  ,
  {
    lesson: 'Buổi 11 (b12): 我换人民币 – Tôi đổi tiền',
    words: [
      {zh:'图书馆', py:'túshūguǎn', type:'Danh từ', vi:'thư viện', ex:[{zh:'我今天下午去图书馆看书。',py:'Wǒ jīntiān xiàwǔ qù túshūguǎn kàn shū.',vi:'Chiều nay tôi đến thư viện đọc sách.'},{zh:'我每天去图书馆学习。',py:'Wǒ měitiān qù túshūguǎn xuéxí.',vi:'Mỗi ngày tôi đến thư viện học bài.'},{zh:'图书馆几点关门？',py:'Túshūguǎn jǐ diǎn guānmén?',vi:'Thư viện mấy giờ đóng cửa?'},{zh:'图书馆里不能说话。',py:'Túshūguǎn lǐ bù néng shuōhuà.',vi:'Trong thư viện không được nói chuyện.'}],},
      {zh:'换',     py:'huàn',      type:'Động từ', vi:'đổi, thay đổi', ex:[{zh:'我要换人民币。',py:'Wǒ yào huàn rénmínbì.',vi:'Tôi muốn đổi nhân dân tệ.'},{zh:'我想换人民币。',py:'Wǒ xiǎng huàn rénmínbì.',vi:'Tôi muốn đổi nhân dân tệ.'},{zh:'换一件别的衣服吧。',py:'Huàn yī jiàn bié de yīfu ba.',vi:'Đổi một bộ quần áo khác đi.'},{zh:'在哪里换外币？',py:'Zài nǎlǐ huàn wàibì?',vi:'Đổi ngoại tệ ở đâu?'},{zh:'一美元换多少人民币？',py:'Yī měiyuán huàn duōshao rénmínbì?',vi:'Một đô la đổi được bao nhiêu nhân dân tệ?'}],},
      {zh:'小姐',   py:'xiǎojie',   type:'Danh từ', vi:'cô, tiểu thư (xưng hô nữ)', ex:[{zh:'小姐，我换钱。',py:'Xiǎojie, wǒ huàn qián.',vi:'Cô ơi, tôi muốn đổi tiền.'},{zh:'小姐，请问怎么换钱？',py:'Xiǎojie, qǐngwèn zěnme huàn qián?',vi:'Cô ơi, xin hỏi đổi tiền như thế nào?'},{zh:'那位小姐是谁？',py:'Nà wèi xiǎojie shì shuí?',vi:'Cô gái đó là ai?'}],},
      {zh:'先生',   py:'xiānsheng', type:'Danh từ', vi:'ông, ngài (xưng hô nam)', ex:[{zh:'先生，给您钱，请数数。',py:'Xiānsheng, gěi nín qián, qǐng shǔshu.',vi:'Thưa ông, đây là tiền, xin kiểm đếm.'},{zh:'先生，您好！',py:'Xiānsheng, nín hǎo!',vi:'Thưa ông, xin chào!'},{zh:'请问先生贵姓？',py:'Qǐngwèn xiānsheng guì xìng?',vi:'Thưa ông, xin hỏi quý danh là gì?'},{zh:'王先生在吗？',py:'Wáng xiānsheng zài ma?',vi:'Ông Vương có ở đó không?'}],},
      {zh:'营业员', py:'yíngyèyuán',type:'Danh từ', vi:'nhân viên giao dịch, nhân viên kinh doanh', ex:[{zh:'银行的营业员服务很好。',py:'Yínháng de yíngyèyuán fúwù hěn hǎo.',vi:'Nhân viên ngân hàng phục vụ rất tốt.'},{zh:'营业员态度很好。',py:'Yíngyèyuán tàidu hěn hǎo.',vi:'Nhân viên giao dịch thái độ rất tốt.'},{zh:'营业员帮我换了钱。',py:'Yíngyèyuán bāng wǒ huàn le qián.',vi:'Nhân viên giúp tôi đổi tiền.'}],},
      {zh:'人民币', py:'rénmínbì',  type:'Danh từ', vi:'nhân dân tệ (đồng tiền TQ)', ex:[{zh:'我要换五百美元的人民币。',py:'Wǒ yào huàn wǔbǎi měiyuán de rénmínbì.',vi:'Tôi muốn đổi năm trăm đô la sang nhân dân tệ.'},{zh:'我想把美元换成人民币。',py:'Wǒ xiǎng bǎ měiyuán huànchéng rénmínbì.',vi:'Tôi muốn đổi đô la sang nhân dân tệ.'},{zh:'一百美元换多少人民币？',py:'Yībǎi měiyuán huàn duōshao rénmínbì?',vi:'Một trăm đô la đổi được bao nhiêu nhân dân tệ?'},{zh:'人民币是中国的货币。',py:'Rénmínbì shì Zhōngguó de huòbì.',vi:'Nhân dân tệ là đồng tiền của Trung Quốc.'}],},
      {zh:'人民',   py:'rénmín',    type:'Danh từ', vi:'nhân dân', ex:[{zh:'为人民服务。',py:'Wèi rénmín fúwù.',vi:'Phục vụ nhân dân.'},{zh:'为人民服务。',py:'Wèi rénmín fúwù.',vi:'Phục vụ nhân dân.'},{zh:'中国人民很勤劳。',py:'Zhōngguó rénmín hěn qínláo.',vi:'Nhân dân Trung Quốc rất cần cù.'}],},
      {zh:'上午',   py:'shàngwǔ',   type:'Danh từ', vi:'buổi sáng (formal, 8-12h)', ex:[{zh:'上午我有课，下午没有。',py:'Shàngwǔ wǒ yǒu kè, xiàwǔ méiyǒu.',vi:'Sáng tôi có lớp học, chiều thì không.'},{zh:'上午九点有课。',py:'Shàngwǔ jiǔ diǎn yǒu kè.',vi:'Chín giờ sáng có tiết học.'},{zh:'上午我在银行换了钱。',py:'Shàngwǔ wǒ zài yínháng huàn le qián.',vi:'Sáng nay tôi đi đổi tiền ở ngân hàng.'},{zh:'上午好！',py:'Shàngwǔ hǎo!',vi:'Chào buổi sáng!'}],},
      {zh:'千',     py:'qiān',      type:'Số đếm',  vi:'một nghìn (1.000)', ex:[{zh:'这件衣服一千块钱。',py:'Zhè jiàn yīfu yīqiān kuài qián.',vi:'Chiếc áo này một nghìn đồng.'},{zh:'一千块钱。',py:'Yīqiān kuài qián.',vi:'Một nghìn tệ.'},{zh:'五千越南盾。',py:'Wǔqiān Yuènán dùn.',vi:'Năm nghìn đồng Việt Nam.'},{zh:'这件衣服一千元。',py:'Zhè jiàn yīfu yīqiān yuán.',vi:'Bộ quần áo này một nghìn tệ.'}],},
      {zh:'万',     py:'wàn',       type:'Số đếm',  vi:'mười nghìn (10.000), vạn', ex:[{zh:'他有一万块钱。',py:'Tā yǒu yīwàn kuài qián.',vi:'Anh ấy có mười nghìn đồng.'},{zh:'一万块钱。',py:'Yīwàn kuài qián.',vi:'Một vạn tệ.'},{zh:'这个手机要五千八百元。',py:'Zhège shǒujī yào wǔqiān bābǎi yuán.',vi:'Điện thoại này cần năm nghìn tám trăm tệ.'},{zh:'北京有二千万人口。',py:'Běijīng yǒu liǎngqiān wàn rénkǒu.',vi:'Bắc Kinh có hai mươi triệu dân.'}],},
      {zh:'美元',   py:'měiyuán',   type:'Danh từ', vi:'đô la Mỹ (USD)', ex:[{zh:'我换了两百美元。',py:'Wǒ huàn le liǎngbǎi měiyuán.',vi:'Tôi đã đổi hai trăm đô la Mỹ.'},{zh:'一美元换多少人民币？',py:'Yī měiyuán huàn duōshao rénmínbì?',vi:'Một đô Mỹ đổi được bao nhiêu nhân dân tệ?'},{zh:'我有一百美元。',py:'Wǒ yǒu yībǎi měiyuán.',vi:'Tôi có một trăm đô la Mỹ.'}],},
      {zh:'日元',   py:'rìyuán',    type:'Danh từ', vi:'đồng Yên Nhật (JPY)', ex:[{zh:'一万日元等于多少人民币？',py:'Yīwàn rìyuán děngyú duōshao rénmínbì?',vi:'Mười nghìn Yên Nhật bằng bao nhiêu nhân dân tệ?'},{zh:'日元是日本货币。',py:'Rìyuán shì Rìběn huòbì.',vi:'Yên Nhật là đồng tiền của Nhật Bản.'},{zh:'一万日元换多少钱？',py:'Yīwàn rìyuán huàn duōshao qián?',vi:'Một vạn yên Nhật đổi được bao nhiêu tiền?'}],},
      {zh:'港币',   py:'gǎngbì',    type:'Danh từ', vi:'đô la Hồng Kông (HKD)', ex:[{zh:'我有一些港币。',py:'Wǒ yǒu yīxiē gǎngbì.',vi:'Tôi có một ít đô la Hồng Kông.'},{zh:'港币是香港的货币。',py:'Gǎngbì shì Xiānggǎng de huòbì.',vi:'Đô la Hồng Kông là đồng tiền của Hồng Kông.'},{zh:'一百港币换多少人民币？',py:'Yībǎi gǎngbì huàn duōshao rénmínbì?',vi:'Một trăm đô Hồng Kông đổi được bao nhiêu nhân dân tệ?'}],},
      {zh:'欧元',   py:'ōuyuán',    type:'Danh từ', vi:'đồng Euro (EUR)', ex:[{zh:'欧元是欧洲的货币。',py:'Ōuyuán shì Ōuzhōu de huòbì.',vi:'Euro là đồng tiền của châu Âu.'},{zh:'欧元是欧洲的货币。',py:'Ōuyuán shì Ōuzhōu de huòbì.',vi:'Euro là đồng tiền của châu Âu.'},{zh:'我有五十欧元。',py:'Wǒ yǒu wǔshí ōuyuán.',vi:'Tôi có năm mươi euro.'}],},
      {zh:'越南盾', py:'Yuènán dùn',type:'Danh từ', vi:'đồng tiền Việt Nam (VND)', ex:[{zh:'一块人民币换多少越南盾？',py:'Yī kuài rénmínbì huàn duōshao Yuènán dùn?',vi:'Một đồng nhân dân tệ đổi được bao nhiêu đồng Việt Nam?'},{zh:'越南盾是越南的货币。',py:'Yuènán dùn shì Yuènán de huòbì.',vi:'Đồng Việt Nam là đồng tiền của Việt Nam.'},{zh:'一万越南盾等于多少人民币？',py:'Yīwàn Yuènán dùn děngyú duōshao rénmínbì?',vi:'Một vạn đồng Việt Nam bằng bao nhiêu nhân dân tệ?'}],},
      {zh:'等',     py:'děng',      type:'Động từ', vi:'đợi, chờ', ex:[{zh:'请等一会儿。',py:'Qǐng děng yíhuìr.',vi:'Xin hãy đợi một lúc.'},{zh:'请等一下。',py:'Qǐng děng yīxià.',vi:'Làm ơn đợi một chút.'},{zh:'我等你半个小时了。',py:'Wǒ děng nǐ bàn gè xiǎoshí le.',vi:'Tôi đợi bạn nửa tiếng rồi.'},{zh:'一加一等于二。',py:'Yī jiā yī děngyú èr.',vi:'Một cộng một bằng hai.'},{zh:'等我一下，马上来。',py:'Děng wǒ yīxià, mǎshàng lái.',vi:'Đợi tôi một chút, sắp đến rồi.'}],},
      {zh:'一会儿', py:'yíhuìr',    type:'Danh từ', vi:'một lúc, một lát (thời gian ngắn)', ex:[{zh:'我去一会儿就回来。',py:'Wǒ qù yíhuìr jiù huílái.',vi:'Tôi đi một lát rồi về ngay.'},{zh:'请等一会儿。',py:'Qǐng děng yīhuìr.',vi:'Làm ơn đợi một lúc.'},{zh:'我一会儿就来。',py:'Wǒ yīhuìr jiù lái.',vi:'Tôi một lúc nữa sẽ đến.'},{zh:'一会儿见！',py:'Yīhuìr jiàn!',vi:'Lát gặp lại!'}],},
      {zh:'数',     py:'shǔ',       type:'Động từ', vi:'đếm', ex:[{zh:'请数数你的钱。',py:'Qǐng shǔshu nǐ de qián.',vi:'Xin hãy kiểm đếm tiền của bạn.'},{zh:'你会数汉字吗？',py:'Nǐ huì shǔ Hànzì ma?',vi:'Bạn có biết đếm chữ Hán không?'},{zh:'请数一数这些钱。',py:'Qǐng shǔ yī shǔ zhèxiē qián.',vi:'Làm ơn đếm số tiền này.'},{zh:'他在数苹果。',py:'Tā zài shǔ píngguǒ.',vi:'Anh ấy đang đếm táo.'}],},
      {zh:'怎么',   py:'zěnme',     type:'Đại từ',  vi:'thế nào, sao, như thế nào', ex:[{zh:'这个字怎么读？',py:'Zhège zì zěnme dú?',vi:'Chữ này đọc thế nào?'}],},
      {zh:'怎么样', py:'zěnmeyàng', type:'Cụm từ',  vi:'thế nào? (hỏi tình hình)', ex:[{zh:'你今天怎么样？',py:'Nǐ jīntiān zěnmeyàng?',vi:'Hôm nay bạn thế nào?'},{zh:'你学汉语怎么样？',py:'Nǐ xué Hànyǔ zěnmeyàng?',vi:'Bạn học tiếng Trung thế nào rồi?'},{zh:'这个菜怎么样？',py:'Zhège cài zěnmeyàng?',vi:'Món ăn này thế nào?'},{zh:'身体怎么样？',py:'Shēntǐ zěnmeyàng?',vi:'Sức khỏe thế nào?'},{zh:'我们明天去，怎么样？',py:'Wǒmen míngtiān qù, zěnmeyàng?',vi:'Ngày mai chúng ta đi, thế nào?'}],},
    ]
  }
  ,
  {
    lesson: 'Buổi 12 (b13): 他住哪儿？– Ông ấy sống ở đâu?',
    words: [
      {zh:'办公室', py:'bàngōngshì', type:'Danh từ', vi:'văn phòng', ex:[
        {zh:'这是我们的办公室。',py:'Zhè shì wǒmen de bàngōngshì.',vi:'Đây là văn phòng của chúng tôi.'},
        {zh:'王老师在办公室吗？',py:'Wáng lǎoshī zài bàngōngshì ma?',vi:'Thầy Vương có ở văn phòng không?'},
        {zh:'我去办公室找他。',py:'Wǒ qù bàngōngshì zhǎo tā.',vi:'Tôi đến văn phòng tìm ông ấy.'}
      ]},
      {zh:'办公', py:'bàngōng', type:'Động từ', vi:'làm việc (tại cơ quan)', ex:[
        {zh:'他在办公室办公。',py:'Tā zài bàngōngshì bàngōng.',vi:'Ông ấy làm việc ở văn phòng.'},
        {zh:'今天我不需要去办公。',py:'Jīntiān wǒ bù xūyào qù bàngōng.',vi:'Hôm nay tôi không cần đi làm.'},
        {zh:'他每天八点开始办公。',py:'Tā měitiān bā diǎn kāishǐ bàngōng.',vi:'Ông ấy bắt đầu làm việc lúc 8 giờ mỗi ngày.'}
      ]},
      {zh:'职员', py:'zhíyuán', type:'Danh từ', vi:'nhân viên', ex:[
        {zh:'他是公司的职员。',py:'Tā shì gōngsī de zhíyuán.',vi:'Anh ấy là nhân viên công ty.'},
        {zh:'这家公司有很多职员。',py:'Zhè jiā gōngsī yǒu hěn duō zhíyuán.',vi:'Công ty này có rất nhiều nhân viên.'},
        {zh:'职员们正在开会。',py:'Zhíyuánmen zhèngzài kāihuì.',vi:'Các nhân viên đang họp.'}
      ]},
      {zh:'找', py:'zhǎo', type:'Động từ', vi:'tìm, kiếm', ex:[
        {zh:'你找谁？',py:'Nǐ zhǎo shéi?',vi:'Bạn tìm ai?'},
        {zh:'我在找我的书。',py:'Wǒ zài zhǎo wǒ de shū.',vi:'Tôi đang tìm sách của mình.'},
        {zh:'我要找汉语书。',py:'Wǒ yào zhǎo Hànyǔ shū.',vi:'Tôi muốn tìm sách tiếng Trung.'}
      ]},
      {zh:'在', py:'zài', type:'Động từ/Giới từ', vi:'ở, đang (ở nơi nào đó / đang làm gì)', ex:[
        {zh:'王老师在吗？',py:'Wáng lǎoshī zài ma?',vi:'Thầy Vương có ở đó không?'},
        {zh:'我在银行。',py:'Wǒ zài yínháng.',vi:'Tôi đang ở ngân hàng.'},
        {zh:'我在吃饭。',py:'Wǒ zài chīfàn.',vi:'Tôi đang ăn cơm.'}
      ]},
      {zh:'家', py:'jiā', type:'Danh từ/Lượng từ', vi:'nhà; lượng từ chỉ cơ sở, tổ chức', ex:[
        {zh:'他在家呢。',py:'Tā zài jiā ne.',vi:'Ông ấy đang ở nhà.'},
        {zh:'我要回家。',py:'Wǒ yào huí jiā.',vi:'Tôi muốn về nhà.'},
        {zh:'这家学校很大。',py:'Zhè jiā xuéxiào hěn dà.',vi:'Trường học này rất to.'}
      ]},
      {zh:'呢', py:'ne', type:'Trợ từ', vi:'trợ từ hỏi tắt / xác nhận', ex:[
        {zh:'他在家呢。',py:'Tā zài jiā ne.',vi:'Ông ấy đang ở nhà đó.'},
        {zh:'我的书呢？',py:'Wǒ de shū ne?',vi:'Sách của tôi đâu?'},
        {zh:'你呢？',py:'Nǐ ne?',vi:'Còn bạn thì sao?'}
      ]},
      {zh:'住', py:'zhù', type:'Động từ', vi:'ở, cư trú, sinh sống', ex:[
        {zh:'他住哪儿？',py:'Tā zhù nǎr?',vi:'Ông ấy ở đâu?'},
        {zh:'你住在哪儿？',py:'Nǐ zhù zài nǎr?',vi:'Bạn sống ở đâu?'},
        {zh:'现在我住在河内。',py:'Xiànzài wǒ zhù zài Hénèi.',vi:'Bây giờ tôi sống ở Hà Nội.'}
      ]},
      {zh:'楼', py:'lóu', type:'Danh từ', vi:'tầng, nhà lầu, toà nhà', ex:[
        {zh:'他住十八楼。',py:'Tā zhù shíbā lóu.',vi:'Ông ấy ở tầng 18.'},
        {zh:'你住哪楼？',py:'Nǐ zhù nǎ lóu?',vi:'Bạn ở tầng mấy?'},
        {zh:'这栋楼有二十层。',py:'Zhè dòng lóu yǒu èrshí céng.',vi:'Tòa nhà này có 20 tầng.'}
      ]},
      {zh:'门', py:'mén', type:'Danh từ', vi:'cửa, cổng; đơn nguyên (số cổng)', ex:[
        {zh:'他住十八楼一门。',py:'Tā zhù shíbā lóu yī mén.',vi:'Ông ấy ở tầng 18, đơn nguyên 1.'},
        {zh:'请关门。',py:'Qǐng guān mén.',vi:'Làm ơn đóng cửa.'},
        {zh:'门开着呢。',py:'Mén kāizhe ne.',vi:'Cửa đang mở.'}
      ]},
      {zh:'号', py:'hào', type:'Danh từ', vi:'số (địa chỉ, phòng, ngày)', ex:[
        {zh:'房间号是601。',py:'Fángjiān hào shì liù líng yāo.',vi:'Số phòng là 601.'},
        {zh:'今天是几号？',py:'Jīntiān shì jǐ hào?',vi:'Hôm nay là ngày mấy?'},
        {zh:'我住18号。',py:'Wǒ zhù shíbā hào.',vi:'Tôi ở số 18.'}
      ]},
      {zh:'房间', py:'fángjiān', type:'Danh từ', vi:'phòng', ex:[
        {zh:'这个房间很大。',py:'Zhège fángjiān hěn dà.',vi:'Phòng này rất rộng.'},
        {zh:'我的房间在三楼。',py:'Wǒ de fángjiān zài sān lóu.',vi:'Phòng của tôi ở tầng ba.'},
        {zh:'请问，您的房间号是多少？',py:'Qǐngwèn, nín de fángjiān hào shì duōshǎo?',vi:'Xin hỏi, số phòng của ngài là bao nhiêu?'}
      ]},
      {zh:'知道', py:'zhīdào', type:'Động từ', vi:'biết', ex:[
        {zh:'你知道他的电话号码吗？',py:'Nǐ zhīdào tā de diànhuà hàomǎ ma?',vi:'Bạn có biết số điện thoại của anh ấy không?'},
        {zh:'我不知道。',py:'Wǒ bù zhīdào.',vi:'Tôi không biết.'},
        {zh:'我知道他住哪儿。',py:'Wǒ zhīdào tā zhù nǎr.',vi:'Tôi biết ông ấy sống ở đâu.'}
      ]},
      {zh:'电话', py:'diànhuà', type:'Danh từ', vi:'điện thoại', ex:[
        {zh:'他的电话号码是多少？',py:'Tā de diànhuà hàomǎ shì duōshǎo?',vi:'Số điện thoại của anh ấy là bao nhiêu?'},
        {zh:'我给你打电话。',py:'Wǒ gěi nǐ dǎ diànhuà.',vi:'Tôi sẽ gọi điện cho bạn.'},
        {zh:'电话号码是62931074。',py:'Diànhuà hàomǎ shì liù èr jiǔ sān yāo líng qī sì.',vi:'Số điện thoại là 62931074.'}
      ]},
      {zh:'号码', py:'hàomǎ', type:'Danh từ', vi:'số, mã số', ex:[
        {zh:'你的手机号码是多少？',py:'Nǐ de shǒujī hàomǎ shì duōshǎo?',vi:'Số điện thoại di động của bạn là bao nhiêu?'},
        {zh:'请告诉我你的号码。',py:'Qǐng gàosù wǒ nǐ de hàomǎ.',vi:'Làm ơn cho tôi biết số của bạn.'},
        {zh:'我记住了你的号码。',py:'Wǒ jì zhù le nǐ de hàomǎ.',vi:'Tôi đã nhớ số của bạn rồi.'}
      ]},
      {zh:'零', py:'líng', type:'Số từ', vi:'số không, lẻ', ex:[
        {zh:'房间号是六零一。',py:'Fángjiān hào shì liù líng yī.',vi:'Số phòng là 601.'},
        {zh:'今天气温是零度。',py:'Jīntiān qìwēn shì líng dù.',vi:'Hôm nay nhiệt độ là 0 độ.'},
        {zh:'电话号码里有一个零。',py:'Diànhuà hàomǎ lǐ yǒu yīgè líng.',vi:'Trong số điện thoại có một số 0.'}
      ]},
      {zh:'手机', py:'shǒujī', type:'Danh từ', vi:'điện thoại di động', ex:[
        {zh:'他的手机号码是多少？',py:'Tā de shǒujī hàomǎ shì duōshǎo?',vi:'Số điện thoại di động của anh ấy là bao nhiêu?'},
        {zh:'我的手机没有电了。',py:'Wǒ de shǒujī méiyǒu diàn le.',vi:'Điện thoại của tôi hết pin rồi.'},
        {zh:'你在玩手机吗？',py:'Nǐ zài wán shǒujī ma?',vi:'Bạn đang chơi điện thoại à?'}
      ]},
      {zh:'请问', py:'qǐngwèn', type:'Cụm từ', vi:'xin hỏi, cho tôi hỏi', ex:[
        {zh:'请问，这是办公室吗？',py:'Qǐngwèn, zhè shì bàngōngshì ma?',vi:'Xin hỏi, đây có phải văn phòng không?'},
        {zh:'请问，王老师在吗？',py:'Qǐngwèn, Wáng lǎoshī zài ma?',vi:'Xin hỏi, thầy Vương có ở đó không?'},
        {zh:'请问，你住哪儿？',py:'Qǐngwèn, nǐ zhù nǎr?',vi:'Cho tôi hỏi, bạn ở đâu?'}
      ]},
      {zh:'您', py:'nín', type:'Đại từ', vi:'ngài, ông/bà (kính ngữ của 你)', ex:[
        {zh:'老师，您好！',py:'Lǎoshī, nín hǎo!',vi:'Thưa thầy/cô, kính chào!'},
        {zh:'您知道他的电话号码吗？',py:'Nín zhīdào tā de diànhuà hàomǎ ma?',vi:'Ngài có biết số điện thoại của anh ấy không?'},
        {zh:'谢谢您。',py:'Xièxiè nín.',vi:'Cảm ơn ngài.'}
      ]}
    ]
  },
  {
    lesson: 'Buổi 13 (b14): 今天中午我要吃面条 – Hôm nay ăn gì?',
    words: [
      {zh:'面条', py:'miàntiáo', type:'Danh từ', vi:'mì sợi, mì', ex:[
        {zh:'今天中午我要吃面条。',py:'Jīntiān zhōngwǔ wǒ yào chī miàntiáo.',vi:'Hôm nay buổi trưa tôi muốn ăn mì.'},
        {zh:'你喜欢吃面条还是米饭？',py:'Nǐ xǐhuān chī miàntiáo háishi mǐfàn?',vi:'Bạn thích ăn mì hay cơm?'},
        {zh:'这里的面条很好吃。',py:'Zhèlǐ de miàntiáo hěn hǎochī.',vi:'Mì ở đây rất ngon.'},
        {zh:'我每天早上吃面条。',py:'Wǒ měitiān zǎoshang chī miàntiáo.',vi:'Mỗi sáng tôi đều ăn mì.'}
      ]},
      {zh:'食堂', py:'shítáng', type:'Danh từ', vi:'căng tin, nhà ăn tập thể', ex:[
        {zh:'今天我去食堂吃面条。',py:'Jīntiān wǒ qù shítáng chī miàntiáo.',vi:'Hôm nay tôi đến căng tin ăn mì.'},
        {zh:'公司食堂的包子很好吃。',py:'Gōngsī shítáng de bāozi hěn hǎochī.',vi:'Bánh bao căng tin công ty rất ngon.'},
        {zh:'食堂几点开门？',py:'Shítáng jǐ diǎn kāimén?',vi:'Căng tin mấy giờ mở cửa?'},
        {zh:'我们一起去食堂吃饭吧。',py:'Wǒmen yīqǐ qù shítáng chīfàn ba.',vi:'Chúng ta cùng đến căng tin ăn cơm nhé.'}
      ]},
      {zh:'包子', py:'bāozi', type:'Danh từ', vi:'bánh bao', ex:[
        {zh:'我想吃一个包子。',py:'Wǒ xiǎng chī yī gè bāozi.',vi:'Tôi muốn ăn một cái bánh bao.'},
        {zh:'今天我的秘书要吃公司食堂的包子。',py:'Jīntiān wǒ de mìshū yào chī gōngsī shítáng de bāozi.',vi:'Hôm nay thư ký của tôi muốn ăn bánh bao ở căng tin công ty.'},
        {zh:'这里的包子多少钱一个？',py:'Zhèlǐ de bāozi duōshao qián yī gè?',vi:'Bánh bao ở đây bao nhiêu tiền một cái?'},
        {zh:'包子里有肉。',py:'Bāozi lǐ yǒu ròu.',vi:'Bên trong bánh bao có thịt.'}
      ]},
      {zh:'公司', py:'gōngsī', type:'Danh từ', vi:'công ty', ex:[
        {zh:'我是一家中国公司的秘书。',py:'Wǒ shì yī jiā Zhōngguó gōngsī de mìshū.',vi:'Tôi là thư ký của một công ty Trung Quốc.'},
        {zh:'你在哪家公司工作？',py:'Nǐ zài nǎ jiā gōngsī gōngzuò?',vi:'Bạn làm việc ở công ty nào?'},
        {zh:'这家公司很大。',py:'Zhè jiā gōngsī hěn dà.',vi:'Công ty này rất lớn.'},
        {zh:'他是我们公司的经理。',py:'Tā shì wǒmen gōngsī de jīnglǐ.',vi:'Anh ấy là giám đốc công ty chúng tôi.'}
      ]},
      {zh:'秘书', py:'mìshū', type:'Danh từ', vi:'thư ký', ex:[
        {zh:'她是我的秘书。',py:'Tā shì wǒ de mìshū.',vi:'Cô ấy là thư ký của tôi.'},
        {zh:'我是一家中国公司的秘书。',py:'Wǒ shì yī jiā Zhōngguó gōngsī de mìshū.',vi:'Tôi là thư ký của một công ty Trung Quốc.'},
        {zh:'秘书帮我安排会议。',py:'Mìshū bāng wǒ ānpái huìyì.',vi:'Thư ký giúp tôi sắp xếp cuộc họp.'},
        {zh:'她想当秘书。',py:'Tā xiǎng dāng mìshū.',vi:'Cô ấy muốn làm thư ký.'}
      ]},
      {zh:'先', py:'xiān', type:'Phó từ', vi:'trước, trước tiên (先 + Động từ)', ex:[
        {zh:'我先吃啊。',py:'Wǒ xiān chī a.',vi:'Tôi ăn trước nhé.'},
        {zh:'你先去学校吧。',py:'Nǐ xiān qù xuéxiào ba.',vi:'Bạn đến trường trước đi.'},
        {zh:'我先介绍一下。',py:'Wǒ xiān jièshào yīxià.',vi:'Để tôi giới thiệu trước.'},
        {zh:'你先说，我后说。',py:'Nǐ xiān shuō, wǒ hòu shuō.',vi:'Bạn nói trước, tôi nói sau.'}
      ]},
      {zh:'介绍', py:'jièshào', type:'Động từ', vi:'giới thiệu', ex:[
        {zh:'我先介绍一下我自己。',py:'Wǒ xiān jièshào yīxià wǒ zìjǐ.',vi:'Để tôi tự giới thiệu bản thân trước.'},
        {zh:'他给我介绍了这份工作。',py:'Tā gěi wǒ jièshào le zhè fèn gōngzuò.',vi:'Anh ấy đã giới thiệu công việc này cho tôi.'},
        {zh:'这是他给我介绍的工作。',py:'Zhè shì tā gěi wǒ jièshào de gōngzuò.',vi:'Đây là công việc anh ấy giới thiệu cho tôi.'},
        {zh:'请介绍一下你自己。',py:'Qǐng jièshào yīxià nǐ zìjǐ.',vi:'Xin hãy tự giới thiệu bản thân bạn.'}
      ]}
    ]
  }
];

const DIALOGUE_DATA = [
  {
    lesson:'Bài 1: 你好 – Xin chào', title:'初次见面 – Gặp lần đầu', lessonIdx:0,
    lines:[
      {s:'A',zh:'你好！',py:'Nǐ hǎo!',vi:'Xin chào!'},
      {s:'B',zh:'你好！',py:'Nǐ hǎo!',vi:'Xin chào!'},
      {s:'A',zh:'你好吗？',py:'Nǐ hǎo ma?',vi:'Bạn khỏe không?'},
      {s:'B',zh:'很好！你呢？',py:'Hěn hǎo! Nǐ ne?',vi:'Rất khỏe! Còn bạn?'},
      {s:'A',zh:'我也很好。你家有几口人？',py:'Wǒ yě hěn hǎo. Nǐ jiā yǒu jǐ kǒu rén?',vi:'Tôi cũng rất khỏe. Nhà bạn có mấy người?'},
      {s:'B',zh:'我家有五口人：爸爸、妈妈、哥哥、弟弟和我。',py:'Wǒ jiā yǒu wǔ kǒu rén: bàba, māma, gēge, dìdi hé wǒ.',vi:'Nhà tôi có 5 người: bố, mẹ, anh trai, em trai và tôi.'},
      {s:'A',zh:'我家也有五口人。',py:'Wǒ jiā yě yǒu wǔ kǒu rén.',vi:'Nhà tôi cũng có 5 người.'},
    ]
  },
  {
    lesson:'Bài 2: 汉语不太难 – Tiếng Hán không quá khó', title:'学习汉语 – Học tiếng Hán', lessonIdx:1,
    lines:[
      {s:'A',zh:'你好吗？',py:'Nǐ hǎo ma?',vi:'Bạn khỏe không?'},
      {s:'B',zh:'很好！你忙吗？',py:'Hěn hǎo! Nǐ máng ma?',vi:'Rất khỏe! Bạn bận không?'},
      {s:'A',zh:'很忙。你学汉语吗？',py:'Hěn máng. Nǐ xué Hànyǔ ma?',vi:'Rất bận. Bạn học tiếng Hán không?'},
      {s:'B',zh:'学。汉语难吗？',py:'Xué. Hànyǔ nán ma?',vi:'Học. Tiếng Hán có khó không?'},
      {s:'A',zh:'汉语不难。',py:'Hànyǔ bù nán.',vi:'Tiếng Hán không khó.'},
      {s:'B',zh:'太好了！你爸爸好吗？',py:'Tài hǎo le! Nǐ bàba hǎo ma?',vi:'Tuyệt quá! Bố bạn có khỏe không?'},
      {s:'A',zh:'他很好。他很忙，但不太难。',py:'Tā hěn hǎo. Tā hěn máng, dàn bú tài nán.',vi:'Ông ấy rất khỏe. Ông ấy rất bận, nhưng không quá vất vả.'},
    ]
  },
  {
    lesson:'Bài 3: 明天见 – Ngày mai gặp', title:'去邮局和银行 – Đi bưu điện và ngân hàng', lessonIdx:2,
    lines:[
      {s:'A',zh:'你学英语吗？',py:'Nǐ xué Yīngyǔ ma?',vi:'Bạn học tiếng Anh à?'},
      {s:'B',zh:'不。学汉语。',py:'Bù. Xué Hànyǔ.',vi:'Không. Học tiếng Hán.'},
      {s:'A',zh:'去北京吗？',py:'Qù Běijīng ma?',vi:'Đến Bắc Kinh à?'},
      {s:'B',zh:'对。你去邮局寄信吗？',py:'Duì. Nǐ qù yóujú jì xìn ma?',vi:'Đúng. Bạn đi bưu điện gửi thư à?'},
      {s:'A',zh:'不去。去银行取钱。',py:'Bú qù. Qù yínháng qǔ qián.',vi:'Không đi. Đi ngân hàng rút tiền.'},
      {s:'B',zh:'明天见！',py:'Míngtiān jiàn!',vi:'Ngày mai gặp!'},
      {s:'A',zh:'明天见！',py:'Míngtiān jiàn!',vi:'Ngày mai gặp!'},
    ]
  },
  {
    lesson:'Bài 4: 你去哪儿 – Bạn đi đâu?', title:'问路问时间 – Hỏi đường và ngày tháng', lessonIdx:3,
    lines:[
      {s:'A',zh:'今天星期几？',py:'Jīntiān xīngqī jǐ?',vi:'Hôm nay thứ mấy?'},
      {s:'B',zh:'今天星期二。',py:'Jīntiān xīngqī\'èr.',vi:'Hôm nay thứ Ba.'},
      {s:'A',zh:'你去哪儿？',py:'Nǐ qù nǎr?',vi:'Bạn đi đâu?'},
      {s:'B',zh:'我去天安门，你去不去？',py:'Wǒ qù Tiān\'ānmén, nǐ qù bu qù?',vi:'Tôi đi Thiên An Môn, bạn đi không?'},
      {s:'A',zh:'不去，我回学校。',py:'Bú qù, wǒ huí xuéxiào.',vi:'Không đi, tôi về trường.'},
      {s:'B',zh:'对不起！',py:'Duìbuqǐ!',vi:'Xin lỗi!'},
      {s:'A',zh:'没关系！再见！',py:'Méi guānxi! Zàijiàn!',vi:'Không sao! Tạm biệt!'},
      {s:'B',zh:'再见！',py:'Zàijiàn!',vi:'Tạm biệt!'},
    ]
  },
  {
    lesson:'Bài 5: 这是王老师 – Đây là thầy Vương', title:'拜访老师 – Thăm thầy giáo', lessonIdx:4,
    lines:[
      {s:'A',zh:'这是王老师，这是我爸爸。',py:'Zhè shì Wáng lǎoshī, zhè shì wǒ bàba.',vi:'Đây là thầy Vương, đây là bố tôi.'},
      {s:'B',zh:'王老师，您好！',py:'Wáng lǎoshī, nín hǎo!',vi:'Thầy Vương, chào thầy!'},
      {s:'C',zh:'您好！请进！请坐！请喝茶！',py:'Nín hǎo! Qǐng jìn! Qǐng zuò! Qǐng hē chá!',vi:'Chào! Mời vào! Mời ngồi! Mời uống trà!'},
      {s:'B',zh:'谢谢！',py:'Xièxie!',vi:'Cảm ơn!'},
      {s:'C',zh:'不客气！工作忙吗？',py:'Bú kèqi! Gōngzuò máng ma?',vi:'Không có gì! Công việc có bận không?'},
      {s:'B',zh:'不太忙。身体好吗？',py:'Bú tài máng. Shēntǐ hǎo ma?',vi:'Không quá bận. Sức khỏe có tốt không?'},
      {s:'C',zh:'很好！好久不见，你最近忙吗？',py:'Hěn hǎo! Hǎojiǔ bújiàn, nǐ zuìjìn máng ma?',vi:'Rất tốt! Lâu không gặp, dạo này bạn bận không?'},
      {s:'B',zh:'不太忙。',py:'Bú tài máng.',vi:'Không quá bận.'},
    ]
  },
  {
    lesson:'Bài 6: 我学习汉语 – Tôi học tiếng Hán', title:'自我介绍 + 这是什么书', lessonIdx:5,
    lines:[
      {s:'麦克',zh:'请问您贵姓？',py:'Qǐngwèn nín guì xìng?',vi:'Xin hỏi quý danh là gì?'},
      {s:'张东',zh:'我姓张。我叫张东。',py:'Wǒ xìng Zhāng. Wǒ jiào Zhāng Dōng.',vi:'Tôi họ Trương. Tôi tên Trương Đông.'},
      {s:'麦克',zh:'你是哪国人？',py:'Nǐ shì nǎ guó rén?',vi:'Bạn là người nước nào?'},
      {s:'张东',zh:'我是中国人。你是哪国人？',py:'Wǒ shì Zhōngguórén. Nǐ shì nǎ guó rén?',vi:'Tôi là người Trung Quốc. Bạn là người nước nào?'},
      {s:'麦克',zh:'我是美国人。你学习什么？',py:'Wǒ shì Měiguórén. Nǐ xuéxí shénme?',vi:'Tôi là người Mỹ. Bạn học cái gì?'},
      {s:'张东',zh:'我学习汉语。汉语难吗？',py:'Wǒ xuéxí Hànyǔ. Hànyǔ nán ma?',vi:'Tôi học tiếng Hán. Tiếng Hán có khó không?'},
      {s:'麦克',zh:'汉字很难，发音不太难。',py:'Hànzì hěn nán, fāyīn bù tài nán.',vi:'Chữ Hán rất khó, phát âm không khó lắm.'},
      {s:'张东',zh:'这是什么书？',py:'Zhè shì shénme shū?',vi:'Đây là sách gì?'},
      {s:'麦克',zh:'这是中文书，这是谁的书？',py:'Zhè shì zhōngwén shū, zhè shì shéi de shū?',vi:'Đây là sách tiếng Trung, đây là sách của ai?'},
      {s:'张东',zh:'这是老师的书。那是什么杂志？',py:'Zhè shì lǎoshī de shū. Nà shì shénme zázhì?',vi:'Đây là sách của thầy giáo. Kia là tạp chí gì?'},
      {s:'麦克',zh:'那是英文杂志，那是我朋友的杂志。',py:'Nà shì yīngwén zázhì, nà shì wǒ péngyou de zázhì.',vi:'Kia là tạp chí tiếng Anh, kia là tạp chí của bạn tôi.'},
    ]
  },
  {
    lesson:'Bài 7: 你吃什么 – Bạn ăn gì?', title:'在食堂点餐 – Gọi món ở căng-tin', lessonIdx:6,
    lines:[
      {s:'A',zh:'中午你去哪儿吃饭？',py:'Zhōngwǔ nǐ qù nǎr chīfàn?',vi:'Trưa bạn đi đâu ăn cơm?'},
      {s:'B',zh:'我去食堂。你吃什么？',py:'Wǒ qù shítáng. Nǐ chī shénme?',vi:'Tôi đến nhà ăn. Bạn ăn gì?'},
      {s:'A',zh:'我吃馒头。你要几个？',py:'Wǒ chī mántou. Nǐ yào jǐ gè?',vi:'Tôi ăn bánh bao. Bạn muốn mấy cái?'},
      {s:'B',zh:'一个。你吃吗？',py:'Yī gè. Nǐ chī ma?',vi:'Một cái. Bạn ăn không?'},
      {s:'A',zh:'不吃，我吃米饭。你喝什么？',py:'Bù chī, wǒ chī mǐfàn. Nǐ hē shénme?',vi:'Không ăn, tôi ăn cơm. Bạn uống gì?'},
      {s:'B',zh:'我要一碗鸡蛋汤。你喝吗？',py:'Wǒ yào yī wǎn jīdàn tāng. Nǐ hē ma?',vi:'Tôi muốn một bát canh trứng. Bạn uống không?'},
      {s:'A',zh:'不喝，我喝啤酒。这些是什么？',py:'Bù hē, wǒ hē píjiǔ. Zhèxiē shì shénme?',vi:'Không uống, tôi uống bia. Những cái này là gì?'},
      {s:'B',zh:'这是饺子，这是包子，那是面条。',py:'Zhè shì jiǎozi, zhè shì bāozi, nà shì miàntiáo.',vi:'Đây là sủi cảo, đây là bánh bao, kia là mì sợi.'},
    ]
  },
  {
    lesson:'Bài 8: 苹果一斤多少钱 – Mua hoa quả', title:'在水果摊买水果 – Mua hoa quả ở chợ', lessonIdx:7,
    lines:[
      {s:'A',zh:'你买什么？',py:'Nǐ mǎi shénme?',vi:'Bạn mua gì?'},
      {s:'B',zh:'我买水果。苹果一斤多少钱？',py:'Wǒ mǎi shuǐguǒ. Píngguǒ yì jīn duōshao qián?',vi:'Tôi mua hoa quả. Táo một cân bao nhiêu tiền?'},
      {s:'A',zh:'三块。',py:'Sān kuài.',vi:'Ba đồng.'},
      {s:'B',zh:'三块？太贵了。两块五吧。',py:'Sān kuài? Tài guì le. Liǎng kuài wǔ ba.',vi:'Ba đồng? Đắt quá. Hai đồng rưỡi thôi.'},
      {s:'A',zh:'你要几斤？',py:'Nǐ yào jǐ jīn?',vi:'Bạn muốn mấy cân?'},
      {s:'B',zh:'我买五斤。还有，橘子怎么卖？',py:'Wǒ mǎi wǔ jīn. Hái yǒu, júzi zěnme mài?',vi:'Tôi mua năm cân. Còn nữa, quýt bán thế nào?'},
      {s:'A',zh:'两块一斤。还要别的吗？',py:'Liǎng kuài yì jīn. Hái yào biéde ma?',vi:'Hai đồng một cân. Còn muốn gì khác không?'},
      {s:'B',zh:'要两斤橘子。一共多少钱？',py:'Yào liǎng jīn júzi. Yígòng duōshao qián?',vi:'Lấy hai cân quýt. Tổng cộng bao nhiêu tiền?'},
      {s:'A',zh:'一共十六块五。给您找钱。',py:'Yígòng shíliù kuài wǔ. Gěi nín zhǎo qián.',vi:'Tổng cộng 16 đồng rưỡi. Trả lại tiền thừa cho ngài.'},
    ]
  },,
  {
    lesson:'Bài 4: Ôn tập – Đặt câu thực hành', title:'今天去哪儿 – Hôm nay đi đâu?', lessonIdx:3,
    lines:[
      {s:'A',zh:'今天你去银行吗？',py:'Jīntiān nǐ qù yínháng ma?',vi:'Hôm nay bạn đi ngân hàng không?'},
      {s:'B',zh:'今天我去邮局。',py:'Jīntiān wǒ qù yóujú.',vi:'Hôm nay tôi đến bưu điện.'},
      {s:'A',zh:'你去邮局做什么？',py:'Nǐ qù yóujú zuò shénme?',vi:'Bạn đến bưu điện làm gì?'},
      {s:'B',zh:'我去邮局寄信。',py:'Wǒ qù yóujú jì xìn.',vi:'Tôi đến bưu điện gửi thư.'},
      {s:'A',zh:'今天星期几？',py:'Jīntiān xīngqī jǐ?',vi:'Hôm nay thứ mấy?'},
      {s:'B',zh:'今天星期三。',py:'Jīntiān xīngqīsān.',vi:'Hôm nay thứ Tư.'}
    ]
  },
  {
    lesson:'Bài 5: Ôn tập – Hỏi thăm sức khỏe', title:'你身体好吗 – Sức khỏe bạn thế nào?', lessonIdx:4,
    lines:[
      {s:'A',zh:'好久不见！你身体好吗？',py:'Hǎojiǔ bújiàn! Nǐ shēntǐ hǎo ma?',vi:'Lâu không gặp! Sức khỏe bạn có tốt không?'},
      {s:'B',zh:'我身体不太好，我在生病。',py:'Wǒ shēntǐ bú tài hǎo, wǒ zài shēngbìng.',vi:'Sức khỏe tôi không tốt lắm, tôi đang bị ốm.'},
      {s:'A',zh:'哦！你工作忙吗？',py:'Ō! Nǐ gōngzuò máng ma?',vi:'Ồ! Công việc của bạn bận không?'},
      {s:'B',zh:'我工作不太忙。你呢？',py:'Wǒ gōngzuò bú tài máng. Nǐ ne?',vi:'Công việc tôi không quá bận. Còn bạn?'},
      {s:'A',zh:'我在中国工作，很忙。',py:'Wǒ zài Zhōngguó gōngzuò, hěn máng.',vi:'Tôi làm việc ở Trung Quốc, rất bận.'}
    ]
  },
  {
    lesson:'Bài 6: Ôn tập – Giới thiệu bản thân', title:'你是哪国人 – Bạn là người nước nào?', lessonIdx:5,
    lines:[
      {s:'A',zh:'请问，你是哪国人？',py:'Qǐngwèn, nǐ shì nǎ guó rén?',vi:'Xin hỏi, bạn là người nước nào?'},
      {s:'B',zh:'我是越南人。你呢？',py:'Wǒ shì Yuènán rén. Nǐ ne?',vi:'Tôi là người Việt Nam. Còn bạn?'},
      {s:'A',zh:'我是中国人。你叫什么名字？',py:'Wǒ shì Zhōngguó rén. Nǐ jiào shénme míngzi?',vi:'Tôi là người Trung Quốc. Bạn tên là gì?'},
      {s:'B',zh:'我叫阮光胜。你贵姓？',py:'Wǒ jiào Ruǎn Guāngshèng. Nǐ guì xìng?',vi:'Tôi tên Nguyễn Quang Thắng. Quý danh của bạn là gì?'},
      {s:'A',zh:'我姓王，叫王明。认识你很高兴！',py:'Wǒ xìng Wáng, jiào Wáng Míng. Rènshi nǐ hěn gāoxìng!',vi:'Tôi họ Vương, tên Vương Minh. Rất vui được gặp bạn!'},
      {s:'B',zh:'我也很高兴认识你！',py:'Wǒ yě hěn gāoxìng rènshi nǐ!',vi:'Tôi cũng rất vui được gặp bạn!'}
    ]
  },
  {
    lesson:'Bài 7: Ôn tập – Hỏi tuổi và gia đình', title:'你家有几口人 – Nhà bạn có mấy người?', lessonIdx:6,
    lines:[
      {s:'A',zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vi:'Nhà bạn có mấy người?'},
      {s:'B',zh:'我家有三口人：老婆、儿子和我。',py:'Wǒ jiā yǒu sān kǒu rén: lǎopó, érzi hé wǒ.',vi:'Nhà tôi có ba người: vợ, con trai và tôi.'},
      {s:'A',zh:'你儿子几岁？',py:'Nǐ érzi jǐ suì?',vi:'Con trai bạn mấy tuổi?'},
      {s:'B',zh:'我儿子三岁。你多大？',py:'Wǒ érzi sān suì. Nǐ duō dà?',vi:'Con trai tôi ba tuổi. Bạn bao nhiêu tuổi?'},
      {s:'A',zh:'我三十六岁。你们住在哪儿？',py:'Wǒ sānshíliù suì. Nǐmen zhù zài nǎr?',vi:'Tôi ba mươi sáu tuổi. Các bạn sống ở đâu?'},
      {s:'B',zh:'我们住在河内。',py:'Wǒmen zhù zài Hànèi.',vi:'Chúng tôi sống ở Hà Nội.'}
    ]
  },
  {
    lesson:'Bài 7: Ôn tập – Đặt đồ ăn', title:'你要吃什么 – Bạn muốn ăn gì?', lessonIdx:6,
    lines:[
      {s:'A',zh:'今天中午我们去食堂吃饭吧！',py:'Jīntiān zhōngwǔ wǒmen qù shítáng chīfàn ba!',vi:'Trưa hôm nay chúng ta đến căng-tin ăn cơm nhé!'},
      {s:'B',zh:'好的！你要吃什么？',py:'Hǎo de! Nǐ yào chī shénme?',vi:'Được! Bạn muốn ăn gì?'},
      {s:'A',zh:'我要一碗面条和一个鸡蛋。',py:'Wǒ yào yī wǎn miàntiáo hé yī gè jīdàn.',vi:'Tôi muốn một bát mì sợi và một quả trứng.'},
      {s:'B',zh:'我要一碗米饭、一盘饺子和一碗汤。',py:'Wǒ yào yī wǎn mǐfàn, yī pán jiǎozi hé yī wǎn tāng.',vi:'Tôi muốn một bát cơm, một đĩa sủi cảo và một bát canh.'},
      {s:'A',zh:'你喝啤酒吗？',py:'Nǐ hē píjiǔ ma?',vi:'Bạn uống bia không?'},
      {s:'B',zh:'不，我要一瓶水。',py:'Bù, wǒ yào yī píng shuǐ.',vi:'Không, tôi muốn một chai nước.'}
    ]
  },
  {
    lesson:'Bài 8: Ôn tập – Mua hoa quả', title:'芒果怎么卖 – Xoài bán như thế nào?', lessonIdx:7,
    lines:[
      {s:'A',zh:'请问，芒果怎么卖？',py:'Qǐngwèn, mángguǒ zěnme mài?',vi:'Xin hỏi, xoài bán như thế nào?'},
      {s:'B',zh:'芒果一斤三块五。',py:'Mángguǒ yī jīn sān kuài wǔ.',vi:'Xoài một cân ba đồng rưỡi.'},
      {s:'A',zh:'太贵了！便宜一些吧。',py:'Tài guì le! Piányi yīxiē ba.',vi:'Đắt quá! Rẻ hơn một chút đi.'},
      {s:'B',zh:'好，三块钱一斤。你要几斤？',py:'Hǎo, sān kuài qián yī jīn. Nǐ yào jǐ jīn?',vi:'Được, ba đồng một cân. Bạn muốn mấy cân?'},
      {s:'A',zh:'我要两斤。还有橙子多少钱？',py:'Wǒ yào liǎng jīn. Hái yǒu chéngzi duōshao qián?',vi:'Tôi muốn hai cân. Còn cam bao nhiêu tiền?'},
      {s:'B',zh:'橙子两块钱一斤。',py:'Chéngzi liǎng kuài qián yī jīn.',vi:'Cam hai đồng một cân.'},
      {s:'A',zh:'给我一斤橙子。一共多少钱？',py:'Gěi wǒ yī jīn chéngzi. Yígòng duōshao qián?',vi:'Cho tôi một cân cam. Tổng cộng bao nhiêu tiền?'},
      {s:'B',zh:'一共八块钱。',py:'Yígòng bā kuài qián.',vi:'Tổng cộng tám đồng.'},
      {s:'A',zh:'给你十块。',py:'Gěi nǐ shí kuài.',vi:'Đây, đưa bạn mười đồng.'},
      {s:'B',zh:'找你两块。谢谢！',py:'Zhǎo nǐ liǎng kuài. Xièxie!',vi:'Trả lại bạn hai đồng. Cảm ơn!'}
    ]
  },
  {
    title: 'Bài 10: 他住哪儿？– Ông ấy sống ở đâu?',
    lines: [
      {s:'A',zh:'请问，这是办公室吗？',py:'Qǐngwèn, zhè shì bàngōngshì ma?',vi:'Xin hỏi, đây có phải là văn phòng không?'},
      {s:'B',zh:'是。你找谁？',py:'Shì. Nǐ zhǎo shéi?',vi:'Đúng. Bạn tìm ai?'},
      {s:'A',zh:'王老师在吗？我是他的学生。',py:'Wáng lǎoshī zài ma? Wǒ shì tā de xuéshēng.',vi:'Thầy Vương có ở đây không? Tôi là học sinh của thầy.'},
      {s:'B',zh:'他不在。他在家呢。',py:'Tā bú zài. Tā zài jiā ne.',vi:'Thầy không ở đây. Thầy đang ở nhà.'},
      {s:'A',zh:'他住哪儿？',py:'Tā zhù nǎr?',vi:'Thầy ở đâu?'},
      {s:'B',zh:'他住十八楼一门，房间号是601。',py:'Tā zhù shíbā lóu yī mén, fángjiān hào shì liù líng yāo.',vi:'Thầy ở tầng 18 đơn nguyên 1, số phòng là 601.'},
      {s:'A',zh:'您知道他的电话号码吗？',py:'Nín zhīdào tā de diànhuà hàomǎ ma?',vi:'Ngài có biết số điện thoại của thầy không?'},
      {s:'B',zh:'知道，62931074。',py:'Zhīdào, liù èr jiǔ sān yāo líng qī sì.',vi:'Biết, là 62931074.'},
      {s:'A',zh:'他的手机号码是多少？',py:'Tā de shǒujī hàomǎ shì duōshǎo?',vi:'Số điện thoại di động của thầy là bao nhiêu?'},
      {s:'B',zh:'不知道。',py:'Bù zhīdào.',vi:'Không biết.'},
      {s:'A',zh:'谢谢您。',py:'Xièxiè nín.',vi:'Cảm ơn ngài.'},
      {s:'B',zh:'不客气。',py:'Bú kèqi.',vi:'Không có gì.'}
    ]
  }
];

// All sentences for speaking practice (from dialogues + phrases)
const SPEAK_DATA = [  ,
  {
    lesson:'Bài 9: 我换人民币 – Tôi đổi tiền', title:'去图书馆还是银行 – Đi thư viện hay ngân hàng?', lessonIdx:8,
    lines:[
      {zh:'下午我去图书馆，你去不去？',py:'Xiàwǔ wǒ qù túshūguǎn, nǐ qù bù qù?',vi:'Chiều tôi đi thư viện, bạn có đi không?',speaker:'玛丽'},
      {zh:'我不去。我要去银行换钱。',py:'Wǒ bù qù. Wǒ yào qù yínháng huàn qián.',vi:'Tôi không đi. Tôi muốn đến ngân hàng đổi tiền.',speaker:'麦克'},
    ]
  },
  {
    lesson:'Bài 9: 我换人民币 – Tôi đổi tiền', title:'在中国银行换钱 – Đổi tiền ở ngân hàng', lessonIdx:8,
    lines:[
      {zh:'小姐，我换钱。',py:'Xiǎojie, wǒ huàn qián.',vi:'Cô ơi, tôi muốn đổi tiền.',speaker:'麦克'},
      {zh:'您换什么钱？',py:'Nín huàn shénme qián?',vi:'Ngài muốn đổi loại tiền gì?',speaker:'营业员'},
      {zh:'我换人民币。',py:'Wǒ huàn rénmínbì.',vi:'Tôi muốn đổi nhân dân tệ.',speaker:'麦克'},
      {zh:'换多少？',py:'Huàn duōshao?',vi:'Đổi bao nhiêu?',speaker:'营业员'},
      {zh:'二百美元。',py:'Èr bǎi měiyuán.',vi:'Hai trăm đô la Mỹ.',speaker:'麦克'},
      {zh:'请等一会儿……先生，给您钱。请数数。',py:'Qǐng děng yíhuìr……Xiānsheng, gěi nín qián. Qǐng shǔshu.',vi:'Xin đợi một lúc… Thưa ông, đây là tiền. Xin kiểm đếm.',speaker:'营业员'},
      {zh:'对了。谢谢！',py:'Duì le. Xièxie!',vi:'Đúng rồi. Cảm ơn!',speaker:'麦克'},
      {zh:'不客气！',py:'Bú kèqi!',vi:'Không có gì!',speaker:'营业员'},
    ]
  }
];

const PHRASES = [
  // Bài 1
  {zh:'你好！',py:'Nǐ hǎo!',vi:'Xin chào!',lesson:1},
  {zh:'您好！',py:'Nín hǎo!',vi:'Chào ngài! (kính ngữ)',lesson:1},
  {zh:'你好吗？',py:'Nǐ hǎo ma?',vi:'Bạn khỏe không?',lesson:1},
  {zh:'我很好，谢谢！',py:'Wǒ hěn hǎo, xièxie!',vi:'Tôi rất khỏe, cảm ơn!',lesson:1},
  {zh:'我家有五口人。',py:'Wǒ jiā yǒu wǔ kǒu rén.',vi:'Nhà tôi có năm người.',lesson:1},
  {zh:'我喜欢你。',py:'Wǒ xǐhuān nǐ.',vi:'Tôi thích bạn.',lesson:1},
  // Bài 2
  {zh:'你忙吗？',py:'Nǐ máng ma?',vi:'Bạn có bận không?',lesson:2},
  {zh:'很忙。',py:'Hěn máng.',vi:'Rất bận.',lesson:2},
  {zh:'汉语难吗？',py:'Hànyǔ nán ma?',vi:'Tiếng Hán có khó không?',lesson:2},
  {zh:'汉语不太难。',py:'Hànyǔ bú tài nán.',vi:'Tiếng Hán không quá khó.',lesson:2},
  {zh:'太好了！',py:'Tài hǎo le!',vi:'Tuyệt quá!',lesson:2},
  {zh:'他们都好吗？',py:'Tāmen dōu hǎo ma?',vi:'Họ đều khỏe chứ?',lesson:2},
  // Bài 3
  {zh:'明天见！',py:'Míngtiān jiàn!',vi:'Ngày mai gặp!',lesson:3},
  {zh:'再见！',py:'Zàijiàn!',vi:'Tạm biệt!',lesson:3},
  {zh:'你学汉语吗？',py:'Nǐ xué Hànyǔ ma?',vi:'Bạn học tiếng Hán không?',lesson:3},
  {zh:'对，我学汉语。',py:'Duì, wǒ xué Hànyǔ.',vi:'Đúng, tôi học tiếng Hán.',lesson:3},
  {zh:'我去银行取钱。',py:'Wǒ qù yínháng qǔ qián.',vi:'Tôi đi ngân hàng rút tiền.',lesson:3},
  {zh:'我去邮局寄信。',py:'Wǒ qù yóujú jì xìn.',vi:'Tôi đi bưu điện gửi thư.',lesson:3},
  // Bài 4
  {zh:'今天星期几？',py:'Jīntiān xīngqī jǐ?',vi:'Hôm nay thứ mấy?',lesson:4},
  {zh:'今天星期三。',py:'Jīntiān xīngqīsān.',vi:'Hôm nay thứ Tư.',lesson:4},
  {zh:'你去哪儿？',py:'Nǐ qù nǎr?',vi:'Bạn đi đâu?',lesson:4},
  {zh:'我回学校。',py:'Wǒ huí xuéxiào.',vi:'Tôi về trường.',lesson:4},
  {zh:'你去不去？',py:'Nǐ qù bu qù?',vi:'Bạn có đi không?',lesson:4},
  {zh:'对不起！',py:'Duìbuqǐ!',vi:'Xin lỗi!',lesson:4},
  {zh:'没关系！',py:'Méi guānxi!',vi:'Không sao!',lesson:4},
  // Bài 5
  {zh:'请进！请坐！',py:'Qǐng jìn! Qǐng zuò!',vi:'Mời vào! Mời ngồi!',lesson:5},
  {zh:'请喝茶。',py:'Qǐng hē chá.',vi:'Mời uống trà.',lesson:5},
  {zh:'谢谢！不客气。',py:'Xièxie! Bú kèqi.',vi:'Cảm ơn! Không có gì.',lesson:5},
  {zh:'工作忙吗？',py:'Gōngzuò máng ma?',vi:'Công việc có bận không?',lesson:5},
  {zh:'身体好吗？',py:'Shēntǐ hǎo ma?',vi:'Sức khỏe có tốt không?',lesson:5},
  {zh:'好久不见！',py:'Hǎojiǔ bújiàn!',vi:'Lâu không gặp!',lesson:5},
  // Bài 6
  {zh:'请问您贵姓？',py:'Qǐngwèn nín guì xìng?',vi:'Xin hỏi quý danh ngài?',lesson:6},
  {zh:'我姓阮，叫阮文胜。',py:'Wǒ xìng Ruǎn, jiào Ruǎn Wén Shèng.',vi:'Tôi họ Nguyễn, tên Nguyễn Văn Thắng.',lesson:6},
  {zh:'你是哪国人？',py:'Nǐ shì nǎ guó rén?',vi:'Bạn là người nước nào?',lesson:6},
  {zh:'我是越南人。',py:'Wǒ shì Yuènán rén.',vi:'Tôi là người Việt Nam.',lesson:6},
  {zh:'这是什么书？',py:'Zhè shì shénme shū?',vi:'Đây là sách gì?',lesson:6},
  {zh:'这是谁的书？',py:'Zhè shì shéi de shū?',vi:'Đây là sách của ai?',lesson:6},
  {zh:'汉字很难，发音不太难。',py:'Hànzì hěn nán, fāyīn bú tài nán.',vi:'Chữ Hán rất khó, phát âm không quá khó.',lesson:6},
  // Bài 7
  {zh:'中午你去哪儿吃饭？',py:'Zhōngwǔ nǐ qù nǎr chīfàn?',vi:'Trưa bạn đi đâu ăn cơm?',lesson:7},
  {zh:'我去食堂吃饭。',py:'Wǒ qù shítáng chīfàn.',vi:'Tôi đi căng-tin ăn cơm.',lesson:7},
  {zh:'你吃什么？',py:'Nǐ chī shénme?',vi:'Bạn ăn gì?',lesson:7},
  {zh:'我要一碗鸡蛋汤。',py:'Wǒ yào yī wǎn jīdàn tāng.',vi:'Tôi muốn một bát canh trứng.',lesson:7},
  {zh:'你要几个馒头？',py:'Nǐ yào jǐ gè mántou?',vi:'Bạn muốn mấy cái bánh bao?',lesson:7},
  {zh:'这些是什么？',py:'Zhèxiē shì shénme?',vi:'Những cái này là gì?',lesson:7},
  // Bài 8
  {zh:'苹果一斤多少钱？',py:'Píngguǒ yì jīn duōshao qián?',vi:'Một cân táo bao nhiêu tiền?',lesson:8},
  {zh:'太贵了！便宜一点儿吧。',py:'Tài guì le! Piányi yìdiǎnr ba.',vi:'Đắt quá! Rẻ chút đi!',lesson:8},
  {zh:'橘子怎么卖？',py:'Júzi zěnme mài?',vi:'Quýt bán thế nào?',lesson:8},
  {zh:'还要别的吗？',py:'Hái yào biéde ma?',vi:'Còn muốn gì khác không?',lesson:8},
  {zh:'一共多少钱？',py:'Yígòng duōshao qián?',vi:'Tổng cộng bao nhiêu tiền?',lesson:8},
  {zh:'给您找钱。',py:'Gěi nín zhǎo qián.',vi:'Trả tiền thừa cho ngài.',lesson:8},
  {zh:'昨天我去银行取钱。', py:'Zuótiān wǒ qù yínháng qǔ qián.', vi:'Hôm qua tôi đến ngân hàng rút tiền.', lesson:4},
  {zh:'今天我去邮局寄信。', py:'Jīntiān wǒ qù yóujú jì xìn.', vi:'Hôm nay tôi đến bưu điện gửi thư.', lesson:4},
  {zh:'你工作忙吗？', py:'Nǐ gōngzuò máng ma?', vi:'Công việc của bạn có bận không?', lesson:5},
  {zh:'我在中国工作。', py:'Wǒ zài Zhōngguó gōngzuò.', vi:'Tôi làm việc ở Trung Quốc.', lesson:5},
  {zh:'身体不太好，我在生病。', py:'Shēntǐ bú tài hǎo, wǒ zài shēngbìng.', vi:'Sức khỏe không tốt lắm, tôi đang bị ốm.', lesson:5},
  {zh:'我是越南人，不是中国人。', py:'Wǒ shì Yuènán rén, bú shì Zhōngguó rén.', vi:'Tôi là người Việt Nam, không phải người Trung Quốc.', lesson:6},
  {zh:'汉字很难，但是发音也难。', py:'Hànzì hěn nán, dànshì fāyīn yě nán.', vi:'Chữ Hán rất khó, nhưng phát âm cũng khó.', lesson:6},
  {zh:'你家有几口人？', py:'Nǐ jiā yǒu jǐ kǒu rén?', vi:'Nhà bạn có mấy người?', lesson:7},
  {zh:'我们住在河内。', py:'Wǒmen zhù zài Hànèi.', vi:'Chúng tôi sống ở Hà Nội.', lesson:7},
  {zh:'你公司有食堂吗？', py:'Nǐ gōngsī yǒu shítáng ma?', vi:'Công ty bạn có nhà ăn không?', lesson:7},
  {zh:'今天中午我在食堂吃饭。', py:'Jīntiān zhōngwǔ wǒ zài shítáng chīfàn.', vi:'Trưa hôm nay tôi ăn cơm ở nhà ăn.', lesson:7},
  {zh:'一斤芒果多少钱？', py:'Yī jīn mángguǒ duōshao qián?', vi:'Một cân xoài bao nhiêu tiền?', lesson:8},
  {zh:'太贵了！便宜一些吧。', py:'Tài guì le! Piányi yīxiē ba.', vi:'Đắt quá rồi! Rẻ hơn một chút đi.', lesson:8},
  {zh:'你还要别的吗？', py:'Nǐ hái yào biéde ma?', vi:'Bạn còn muốn thêm gì nữa không?', lesson:8},
  {zh:'一共多少钱？找你三块。', py:'Yígòng duōshao qián? Zhǎo nǐ sān kuài.', vi:'Tổng cộng bao nhiêu? Trả lại bạn ba đồng.', lesson:8},  ,
  {zh:'下午我去图书馆。',py:'Xiàwǔ wǒ qù túshūguǎn.',vi:'Chiều tôi đến thư viện.',lesson:9},
  {zh:'你去不去？',py:'Nǐ qù bù qù?',vi:'Bạn có đi không?',lesson:9},
  {zh:'我要去银行换钱。',py:'Wǒ yào qù yínháng huàn qián.',vi:'Tôi muốn đến ngân hàng đổi tiền.',lesson:9},
  {zh:'您换什么钱？',py:'Nín huàn shénme qián?',vi:'Ngài muốn đổi loại tiền gì?',lesson:9},
  {zh:'我换人民币。',py:'Wǒ huàn rénmínbì.',vi:'Tôi muốn đổi nhân dân tệ.',lesson:9},
  {zh:'换多少？',py:'Huàn duōshao?',vi:'Đổi bao nhiêu?',lesson:9},
  {zh:'请等一会儿。',py:'Qǐng děng yíhuìr.',vi:'Xin đợi một lúc.',lesson:9},
  {zh:'先生，给您钱，请数数。',py:'Xiānsheng, gěi nín qián, qǐng shǔshu.',vi:'Thưa ông, đây là tiền, xin kiểm đếm.',lesson:9},
  {zh:'对了，谢谢！',py:'Duì le, xièxie!',vi:'Đúng rồi, cảm ơn!',lesson:9},
  {zh:'你今天怎么样？',py:'Nǐ jīntiān zěnmeyàng?',vi:'Hôm nay bạn thế nào?',lesson:9},
    {zh:'请问，这是办公室吗？',py:'Qǐngwèn, zhè shì bàngōngshì ma?',vi:'Xin hỏi, đây có phải là văn phòng không?',lesson:10},
  {zh:'你找谁？',py:'Nǐ zhǎo shéi?',vi:'Bạn tìm ai?',lesson:10},
  {zh:'王老师在吗？',py:'Wáng lǎoshī zài ma?',vi:'Thầy Vương có ở đây không?',lesson:10},
  {zh:'他不在，他在家呢。',py:'Tā bú zài, tā zài jiā ne.',vi:'Thầy không ở đây, thầy đang ở nhà.',lesson:10},
  {zh:'他住哪儿？',py:'Tā zhù nǎr?',vi:'Ông ấy sống ở đâu?',lesson:10},
  {zh:'您知道他的电话号码吗？',py:'Nín zhīdào tā de diànhuà hàomǎ ma?',vi:'Ngài có biết số điện thoại của ông ấy không?',lesson:10},
  {zh:'他的手机号码是多少？',py:'Tā de shǒujī hàomǎ shì duōshǎo?',vi:'Số điện thoại di động của ông ấy là bao nhiêu?',lesson:10},
  {zh:'我不知道。',py:'Wǒ bù zhīdào.',vi:'Tôi không biết.',lesson:10},
  {zh:'你住在哪儿？',py:'Nǐ zhù zài nǎr?',vi:'Bạn sống ở đâu?',lesson:10},
  {zh:'我在吃饭呢。',py:'Wǒ zài chīfàn ne.',vi:'Tôi đang ăn cơm đấy.',lesson:10},
  {zh:'我要换五百美元的人民币。',py:'Wǒ yào huàn wǔbǎi měiyuán de rénmínbì.',vi:'Tôi muốn đổi năm trăm đô sang nhân dân tệ.',lesson:9}
];

