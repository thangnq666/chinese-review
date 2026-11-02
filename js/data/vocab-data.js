const VOCAB_DATA = [
  {
    "lesson": "Buổi 1 (b1): Phát âm & Từ vựng cơ bản",
    "words": [
      {
        "zh": "你",
        "py": "nǐ",
        "type": "Đại từ",
        "vi": "bạn (ngôi thứ 2 số ít)",
        "ex": [
          {
            "zh": "你也好吗？",
            "py": "Nǐ yě hǎo ma?",
            "vi": "Bạn cũng khỏe chứ?"
          },
          {
            "zh": "你和我都是好人。",
            "py": "Nǐ hé wǒ dōu shì hǎo rén.",
            "vi": "Bạn và tôi đều là người tốt."
          },
          {
            "zh": "那是你的马吗？",
            "py": "Nà shì nǐ de mǎ ma?",
            "vi": "Kia là con ngựa của bạn phải không?"
          },
          {
            "zh": "你学汉语多长时间了？",
            "py": "Nǐ xué Hànyǔ duō cháng shíjiān le?",
            "vi": "Bạn học tiếng Trung bao lâu rồi?"
          },
          {
            "zh": "你很好。",
            "py": "Nǐ hěn hǎo.",
            "vi": "Bạn rất tốt/khỏe."
          },
          {
            "zh": "你今天忙不忙？",
            "py": "Nǐ jīntiān máng bu máng?",
            "vi": "Hôm nay bạn có bận không?"
          },
          {
            "zh": "你喜欢喝什么茶？",
            "py": "Nǐ xǐhuan hē shénme chá?",
            "vi": "Bạn thích uống trà gì?"
          },
          {
            "zh": "你的同屋是哪国人？",
            "py": "Nǐ de tóngwū shì nǎ guó rén?",
            "vi": "Bạn cùng phòng của bạn là người nước nào?"
          },
          {
            "zh": "你想去哪儿旅游？",
            "py": "Nǐ xiǎng qù nǎr lǚyóu?",
            "vi": "Bạn muốn đi du lịch ở đâu?"
          },
          {
            "zh": "你经常骑自行车上班吗？",
            "py": "Nǐ jīngcháng qí zìxíngchē shàngbān ma?",
            "vi": "Bạn có thường đi xe đạp đi làm không?"
          }
        ]
      },
      {
        "zh": "好",
        "py": "hǎo",
        "type": "Tính từ",
        "vi": "tốt, khỏe, đẹp",
        "ex": [
          {
            "zh": "这里的饭很好吃。",
            "py": "Zhèlǐ de fàn hěn hǎochī.",
            "vi": "Cơm ở đây rất ngon."
          },
          {
            "zh": "你好吗？",
            "py": "Nǐ hǎo ma?",
            "vi": "Bạn có khỏe không?"
          },
          {
            "zh": "这本书很好。",
            "py": "Zhè běn shū hěn hǎo.",
            "vi": "Cuốn sách này rất hay."
          },
          {
            "zh": "好，我知道了。",
            "py": "Hǎo, wǒ zhīdào le.",
            "vi": "Được rồi, tôi biết rồi."
          },
          {
            "zh": "天气真好！",
            "py": "Tiānqì zhēn hǎo!",
            "vi": "Thời tiết thật đẹp!"
          },
          {
            "zh": "你的发音很好。",
            "py": "Nǐ de fāyīn hěn hǎo.",
            "vi": "Phát âm của bạn rất tốt."
          },
          {
            "zh": "我妈妈身体很好。",
            "py": "Wǒ māma shēntǐ hěn hǎo.",
            "vi": "Mẹ tôi sức khỏe rất tốt."
          },
          {
            "zh": "好，我们明天见。",
            "py": "Hǎo, wǒmen míngtiān jiàn.",
            "vi": "Được, chúng ta mai gặp nhé."
          },
          {
            "zh": "这件衣服的颜色不太好。",
            "py": "Zhè jiàn yīfu de yánsè bú tài hǎo.",
            "vi": "Màu của chiếc áo này không đẹp lắm."
          },
          {
            "zh": "这家酒店很好。",
            "py": "Zhè jiā jiǔdiàn hěn hǎo.",
            "vi": "Khách sạn này rất tốt."
          }
        ]
      },
      {
        "zh": "你好",
        "py": "nǐ hǎo",
        "type": "Cụm từ",
        "vi": "xin chào",
        "ex": [
          {
            "zh": "你好，我叫张东。",
            "py": "Nǐ hǎo, wǒ jiào Zhāng Dōng.",
            "vi": "Xin chào, tôi tên là Trương Đông."
          },
          {
            "zh": "你好，请进！",
            "py": "Nǐ hǎo, qǐng jìn!",
            "vi": "Xin chào, mời vào!"
          },
          {
            "zh": "你好，我叫李明。",
            "py": "Nǐ hǎo, wǒ jiào Lǐ Míng.",
            "vi": "Xin chào, tôi tên Lý Minh."
          },
          {
            "zh": "你好！你们都好吗？",
            "py": "Nǐ hǎo! Nǐmen dōu hǎo ma?",
            "vi": "Xin chào! Các bạn đều khỏe chứ?"
          },
          {
            "zh": "你好，我们都好。",
            "py": "Nǐ hǎo, wǒmen dōu hǎo.",
            "vi": "Xin chào, chúng tôi đều khỏe."
          },
          {
            "zh": "你好，请问您贵姓？",
            "py": "Nǐ hǎo, qǐngwèn nín guì xìng?",
            "vi": "Xin chào, xin hỏi quý danh của ngài?"
          },
          {
            "zh": "你好，我是新同学。",
            "py": "Nǐ hǎo, wǒ shì xīn tóngxué.",
            "vi": "Xin chào, mình là bạn học mới."
          },
          {
            "zh": "吴老师，你好！",
            "py": "Wú lǎoshī, nǐ hǎo!",
            "vi": "Chào cô Ngô!"
          },
          {
            "zh": "你好，我想换人民币。",
            "py": "Nǐ hǎo, wǒ xiǎng huàn rénmínbì.",
            "vi": "Xin chào, tôi muốn đổi nhân dân tệ."
          },
          {
            "zh": "你好，这是校长办公室吗？",
            "py": "Nǐ hǎo, zhè shì xiàozhǎng bàngōngshì ma?",
            "vi": "Xin chào, đây là văn phòng hiệu trưởng phải không?"
          }
        ]
      },
      {
        "zh": "我",
        "py": "wǒ",
        "type": "Đại từ",
        "vi": "tôi (ngôi thứ 1 số ít)",
        "ex": [
          {
            "zh": "我也很好。",
            "py": "Wǒ yě hěn hǎo.",
            "vi": "Tôi cũng rất khỏe."
          },
          {
            "zh": "我和他们都好。",
            "py": "Wǒ hé tāmen dōu hǎo.",
            "vi": "Tôi và bọn họ đều khỏe."
          },
          {
            "zh": "我学习汉语。",
            "py": "Wǒ xuéxí Hànyǔ.",
            "vi": "Tôi học tiếng Trung."
          },
          {
            "zh": "我有一个哥哥。",
            "py": "Wǒ yǒu yī gè gēge.",
            "vi": "Tôi có một người anh."
          },
          {
            "zh": "我喜欢吃饺子。",
            "py": "Wǒ xǐhuān chī jiǎozi.",
            "vi": "Tôi thích ăn sủi cảo."
          },
          {
            "zh": "我在河内工作。",
            "py": "Wǒ zài Hénèi gōngzuò.",
            "vi": "Tôi làm việc ở Hà Nội."
          },
          {
            "zh": "我想买一双新筷子。",
            "py": "Wǒ xiǎng mǎi yì shuāng xīn kuàizi.",
            "vi": "Tôi muốn mua một đôi đũa mới."
          },
          {
            "zh": "我觉得汉字很有意思。",
            "py": "Wǒ juéde Hànzì hěn yǒu yìsi.",
            "vi": "Tôi thấy chữ Hán rất thú vị."
          },
          {
            "zh": "我早上喝一杯咖啡。",
            "py": "Wǒ zǎoshang hē yì bēi kāfēi.",
            "vi": "Buổi sáng tôi uống một cốc cà phê."
          },
          {
            "zh": "我是外贸公司的职员。",
            "py": "Wǒ shì wàimào gōngsī de zhíyuán.",
            "vi": "Tôi là nhân viên của công ty ngoại thương."
          }
        ]
      },
      {
        "zh": "不",
        "py": "bù",
        "type": "Phó từ",
        "vi": "không (phủ định)",
        "ex": [
          {
            "zh": "我不忙，你呢？",
            "py": "Wǒ bù máng, nǐ ne?",
            "vi": "Tôi không bận, còn bạn?"
          },
          {
            "zh": "他们不好。",
            "py": "Tāmen bù hǎo.",
            "vi": "Bọn họ không tốt."
          },
          {
            "zh": "这不是白马。",
            "py": "Zhè bú shì bái mǎ.",
            "vi": "Đây không phải con ngựa trắng."
          },
          {
            "zh": "我不太忙。",
            "py": "Wǒ bú tài máng.",
            "vi": "Tôi không bận lắm."
          },
          {
            "zh": "他不去学校。",
            "py": "Tā bù qù xuéxiào.",
            "vi": "Anh ấy không đến trường."
          },
          {
            "zh": "我爸爸不喝咖啡。",
            "py": "Wǒ bàba bù hē kāfēi.",
            "vi": "Bố tôi không uống cà phê."
          },
          {
            "zh": "今天不冷。",
            "py": "Jīntiān bù lěng.",
            "vi": "Hôm nay không lạnh."
          },
          {
            "zh": "他不是医生，是护士。",
            "py": "Tā bú shì yīshēng, shì hùshi.",
            "vi": "Anh ấy không phải bác sĩ, là y tá."
          },
          {
            "zh": "这儿的东西不贵。",
            "py": "Zhèr de dōngxi bú guì.",
            "vi": "Đồ ở đây không đắt."
          },
          {
            "zh": "我不知道他的电话号码。",
            "py": "Wǒ bù zhīdào tā de diànhuà hàomǎ.",
            "vi": "Tôi không biết số điện thoại của anh ấy."
          }
        ]
      },
      {
        "zh": "大",
        "py": "dà",
        "type": "Tính từ",
        "vi": "to, lớn",
        "ex": [
          {
            "zh": "这马很大。",
            "py": "Zhè mǎ hěn dà.",
            "vi": "Con ngựa này rất to."
          },
          {
            "zh": "北京是一个大城市。",
            "py": "Běijīng shì yī gè dà chéngshì.",
            "vi": "Bắc Kinh là một thành phố lớn."
          },
          {
            "zh": "这个包太大了。",
            "py": "Zhège bāo tài dà le.",
            "vi": "Cái túi này quá to."
          },
          {
            "zh": "他的家很大。",
            "py": "Tā de jiā hěn dà.",
            "vi": "Nhà anh ấy rất rộng."
          },
          {
            "zh": "我不大，你大。",
            "py": "Wǒ bú dà, nǐ dà.",
            "vi": "Tôi không to, bạn to."
          },
          {
            "zh": "这个箱子很大。",
            "py": "Zhège xiāngzi hěn dà.",
            "vi": "Cái vali này rất to."
          },
          {
            "zh": "北京很大。",
            "py": "Běijīng hěn dà.",
            "vi": "Bắc Kinh rất lớn."
          },
          {
            "zh": "你家的房间大不大？",
            "py": "Nǐ jiā de fángjiān dà bu dà?",
            "vi": "Phòng nhà bạn có to không?"
          },
          {
            "zh": "我要一个大西瓜。",
            "py": "Wǒ yào yí ge dà xīguā.",
            "vi": "Tôi muốn một quả dưa hấu to."
          },
          {
            "zh": "他们公司不太大。",
            "py": "Tāmen gōngsī bú tài dà.",
            "vi": "Công ty của họ không lớn lắm."
          }
        ]
      },
      {
        "zh": "口",
        "py": "kǒu",
        "type": "Lượng từ",
        "vi": "miệng; đếm người trong gia đình",
        "ex": [
          {
            "zh": "我家有五口人。",
            "py": "Wǒ jiā yǒu wǔ kǒu rén.",
            "vi": "Nhà tôi có năm người."
          },
          {
            "zh": "马的口很大。",
            "py": "Mǎ de kǒu hěn dà.",
            "vi": "Miệng con ngựa rất to."
          },
          {
            "zh": "张口说话。",
            "py": "Zhāng kǒu shuōhuà.",
            "vi": "Mở miệng ra nói chuyện."
          },
          {
            "zh": "他家三口人。",
            "py": "Tā jiā sān kǒu rén.",
            "vi": "Nhà anh ấy ba người."
          },
          {
            "zh": "你的口很大。",
            "py": "Nǐ de kǒu hěn dà.",
            "vi": "Miệng của bạn to."
          },
          {
            "zh": "他家有七口人。",
            "py": "Tā jiā yǒu qī kǒu rén.",
            "vi": "Nhà anh ấy có bảy người."
          },
          {
            "zh": "我们班的口语老师是中国人。",
            "py": "Wǒmen bān de kǒuyǔ lǎoshī shì Zhōngguó rén.",
            "vi": "Giáo viên khẩu ngữ lớp chúng tôi là người Trung Quốc."
          },
          {
            "zh": "他的口语比较好。",
            "py": "Tā de kǒuyǔ bǐjiào hǎo.",
            "vi": "Khẩu ngữ của anh ấy tương đối tốt."
          },
          {
            "zh": "她家只有三口人。",
            "py": "Tā jiā zhǐ yǒu sān kǒu rén.",
            "vi": "Nhà cô ấy chỉ có ba người."
          },
          {
            "zh": "吴老师家有六口人。",
            "py": "Wú lǎoshī jiā yǒu liù kǒu rén.",
            "vi": "Nhà cô Ngô có sáu người."
          }
        ]
      },
      {
        "zh": "人",
        "py": "rén",
        "type": "Danh từ",
        "vi": "người",
        "ex": [
          {
            "zh": "你是中国人吗？",
            "py": "Nǐ shì Zhōngguó rén ma?",
            "vi": "Bạn có phải là người Trung Quốc không?"
          },
          {
            "zh": "我们都是人。",
            "py": "Wǒmen dōu shì rén.",
            "vi": "Chúng ta đều là người."
          },
          {
            "zh": "这里有很多人。",
            "py": "Zhèlǐ yǒu hěn duō rén.",
            "vi": "Ở đây có rất nhiều người."
          },
          {
            "zh": "中国人口很多。",
            "py": "Zhōngguó rénkǒu hěn duō.",
            "vi": "Trung Quốc dân số rất đông."
          },
          {
            "zh": "他是好人。",
            "py": "Tā shì hǎo rén.",
            "vi": "Anh ấy là người tốt."
          },
          {
            "zh": "商场里人很多。",
            "py": "Shāngchǎng lǐ rén hěn duō.",
            "vi": "Trong trung tâm thương mại rất đông người."
          },
          {
            "zh": "那位先生是日本人。",
            "py": "Nà wèi xiānsheng shì Rìběn rén.",
            "vi": "Vị tiên sinh kia là người Nhật."
          },
          {
            "zh": "我们公司有一百个人。",
            "py": "Wǒmen gōngsī yǒu yìbǎi ge rén.",
            "vi": "Công ty chúng tôi có một trăm người."
          },
          {
            "zh": "食堂里没有人。",
            "py": "Shítáng lǐ méiyǒu rén.",
            "vi": "Trong nhà ăn không có ai."
          },
          {
            "zh": "那个人是我们的新经理。",
            "py": "Nàge rén shì wǒmen de xīn jīnglǐ.",
            "vi": "Người đó là giám đốc mới của chúng tôi."
          }
        ]
      },
      {
        "zh": "白",
        "py": "bái",
        "type": "Tính từ",
        "vi": "trắng, màu trắng",
        "ex": [
          {
            "zh": "她喜欢白色的衣服。",
            "py": "Tā xǐhuan báisè de yīfu.",
            "vi": "Cô ấy thích quần áo màu trắng."
          },
          {
            "zh": "她穿白色的裙子。",
            "py": "Tā chuān báisè de qúnzi.",
            "vi": "Cô ấy mặc váy màu trắng."
          },
          {
            "zh": "这马是白的。",
            "py": "Zhè mǎ shì bái de.",
            "vi": "Con ngựa này màu trắng."
          },
          {
            "zh": "白天工作，晚上学习。",
            "py": "Báitiān gōngzuò, wǎnshang xuéxí.",
            "vi": "Ban ngày đi làm, buổi tối học bài."
          },
          {
            "zh": "马是白的。",
            "py": "Mǎ shì bái de.",
            "vi": "Ngựa có màu trắng."
          },
          {
            "zh": "我想买一件白衬衣。",
            "py": "Wǒ xiǎng mǎi yí jiàn bái chènyī.",
            "vi": "Tôi muốn mua một chiếc áo sơ mi trắng."
          },
          {
            "zh": "他的汽车是白色的。",
            "py": "Tā de qìchē shì báisè de.",
            "vi": "Xe ô tô của anh ấy màu trắng."
          },
          {
            "zh": "请给我一瓶白水。",
            "py": "Qǐng gěi wǒ yì píng báishuǐ.",
            "vi": "Làm ơn cho tôi một chai nước lọc."
          },
          {
            "zh": "白的好看，黑的不好看。",
            "py": "Bái de hǎokàn, hēi de bù hǎokàn.",
            "vi": "Cái màu trắng đẹp, cái màu đen không đẹp."
          },
          {
            "zh": "我喜欢白颜色。",
            "py": "Wǒ xǐhuan bái yánsè.",
            "vi": "Tôi thích màu trắng."
          }
        ]
      },
      {
        "zh": "女",
        "py": "nǚ",
        "type": "Tính từ",
        "vi": "giới tính nữ",
        "ex": [
          {
            "zh": "她是女学生。",
            "py": "Tā shì nǚ xuéshēng.",
            "vi": "Cô ấy là học sinh nữ."
          },
          {
            "zh": "那是女的吗？",
            "py": "Nà shì nǚ de ma?",
            "vi": "Kia là nữ phải không?"
          },
          {
            "zh": "我有一个女儿。",
            "py": "Wǒ yǒu yī gè nǚ'ér.",
            "vi": "Tôi có một người con gái."
          },
          {
            "zh": "她是我的女朋友。",
            "py": "Tā shì wǒ de nǚpéngyou.",
            "vi": "Cô ấy là bạn gái của tôi."
          },
          {
            "zh": "我是女的。",
            "py": "Wǒ shì nǚ de.",
            "vi": "Tôi là con gái/nữ."
          },
          {
            "zh": "我们班有十个女学生。",
            "py": "Wǒmen bān yǒu shí ge nǚ xuésheng.",
            "vi": "Lớp chúng tôi có mười nữ sinh."
          },
          {
            "zh": "他的女儿五岁了。",
            "py": "Tā de nǚ'ér wǔ suì le.",
            "vi": "Con gái anh ấy năm tuổi rồi."
          },
          {
            "zh": "那位女老师姓吴。",
            "py": "Nà wèi nǚ lǎoshī xìng Wú.",
            "vi": "Cô giáo kia họ Ngô."
          },
          {
            "zh": "我女朋友是韩国人。",
            "py": "Wǒ nǚ péngyou shì Hánguó rén.",
            "vi": "Bạn gái tôi là người Hàn Quốc."
          },
          {
            "zh": "这个医生是女的。",
            "py": "Zhège yīshēng shì nǚ de.",
            "vi": "Bác sĩ này là nữ."
          }
        ]
      },
      {
        "zh": "马",
        "py": "mǎ",
        "type": "Danh từ",
        "vi": "con ngựa",
        "ex": [
          {
            "zh": "那匹马很大。",
            "py": "Nà pǐ mǎ hěn dà.",
            "vi": "Con ngựa kia rất to."
          },
          {
            "zh": "那匹马跑得很快。",
            "py": "Nà pǐ mǎ pǎo de hěn kuài.",
            "vi": "Con ngựa đó chạy rất nhanh."
          },
          {
            "zh": "他姓马。",
            "py": "Tā xìng Mǎ.",
            "vi": "Anh ấy họ Mã."
          },
          {
            "zh": "马是大动物。",
            "py": "Mǎ shì dà dòngwù.",
            "vi": "Ngựa là động vật lớn."
          },
          {
            "zh": "马很大。",
            "py": "Mǎ hěn dà.",
            "vi": "Ngựa rất to."
          },
          {
            "zh": "马老师是我们的汉语老师。",
            "py": "Mǎ lǎoshī shì wǒmen de Hànyǔ lǎoshī.",
            "vi": "Thầy Mã là giáo viên tiếng Trung của chúng tôi."
          },
          {
            "zh": "马先生在银行工作。",
            "py": "Mǎ xiānsheng zài yínháng gōngzuò.",
            "vi": "Ông Mã làm việc ở ngân hàng."
          },
          {
            "zh": "我想骑马。",
            "py": "Wǒ xiǎng qí mǎ.",
            "vi": "Tôi muốn cưỡi ngựa."
          },
          {
            "zh": "白马很好看。",
            "py": "Bái mǎ hěn hǎokàn.",
            "vi": "Ngựa trắng rất đẹp."
          },
          {
            "zh": "马小姐是公司的秘书。",
            "py": "Mǎ xiǎojie shì gōngsī de mìshū.",
            "vi": "Cô Mã là thư ký của công ty."
          }
        ]
      },
      {
        "zh": "一",
        "py": "yī",
        "type": "Số đếm",
        "vi": "một",
        "ex": [
          {
            "zh": "一是一，二是二。",
            "py": "Yī shì yī, èr shì èr.",
            "vi": "Một là một, hai là hai (rõ ràng rành mạch)."
          },
          {
            "zh": "我有一本书。",
            "py": "Wǒ yǒu yī běn shū.",
            "vi": "Tôi có một cuốn sách."
          },
          {
            "zh": "不是一，是二。",
            "py": "Bú shì yī, shì èr.",
            "vi": "Không phải một, là hai."
          },
          {
            "zh": "一个苹果多少钱？",
            "py": "Yī gè píngguǒ duōshao qián?",
            "vi": "Một quả táo bao nhiêu tiền?"
          },
          {
            "zh": "一、二、三、四、五。",
            "py": "Yī, èr, sān, sì, wǔ.",
            "vi": "Một, hai, ba, bốn, năm."
          },
          {
            "zh": "我要一碗鸡蛋汤。",
            "py": "Wǒ yào yì wǎn jīdàn tāng.",
            "vi": "Tôi muốn một bát canh trứng."
          },
          {
            "zh": "一斤橘子五块钱。",
            "py": "Yì jīn júzi wǔ kuài qián.",
            "vi": "Một cân quýt năm đồng."
          },
          {
            "zh": "今天是星期一。",
            "py": "Jīntiān shì xīngqīyī.",
            "vi": "Hôm nay là thứ Hai."
          },
          {
            "zh": "他有一个儿子。",
            "py": "Tā yǒu yí ge érzi.",
            "vi": "Anh ấy có một người con trai."
          },
          {
            "zh": "我们一共有一百块钱。",
            "py": "Wǒmen yígòng yǒu yìbǎi kuài qián.",
            "vi": "Chúng tôi tổng cộng có một trăm đồng."
          }
        ]
      },
      {
        "zh": "五",
        "py": "wǔ",
        "type": "Số đếm",
        "vi": "năm",
        "ex": [
          {
            "zh": "四，五，六，七。",
            "py": "Sì, wǔ, liù, qī.",
            "vi": "Bốn, năm, sáu, bảy."
          },
          {
            "zh": "五，不是六。",
            "py": "Wǔ, bú shì liù.",
            "vi": "Năm, không phải sáu."
          },
          {
            "zh": "今天是五月五号。",
            "py": "Jīntiān shì wǔ yuè wǔ hào.",
            "vi": "Hôm nay là ngày 5 tháng 5."
          },
          {
            "zh": "五个苹果。",
            "py": "Wǔ gè píngguǒ.",
            "vi": "Năm quả táo."
          },
          {
            "zh": "五、六、七、八、九、十。",
            "py": "Wǔ, liù, qī, bā, jiǔ, shí.",
            "vi": "Năm, sáu, bảy, tám, chín, mười."
          },
          {
            "zh": "我们星期五去商场。",
            "py": "Wǒmen xīngqīwǔ qù shāngchǎng.",
            "vi": "Thứ Sáu chúng tôi đi trung tâm thương mại."
          },
          {
            "zh": "这个西瓜五块钱。",
            "py": "Zhège xīguā wǔ kuài qián.",
            "vi": "Quả dưa hấu này năm đồng."
          },
          {
            "zh": "我住五楼。",
            "py": "Wǒ zhù wǔ lóu.",
            "vi": "Tôi ở tầng năm."
          },
          {
            "zh": "五月一号是星期几？",
            "py": "Wǔ yuè yī hào shì xīngqī jǐ?",
            "vi": "Ngày 1 tháng 5 là thứ mấy?"
          },
          {
            "zh": "他下午五点回家。",
            "py": "Tā xiàwǔ wǔ diǎn huíjiā.",
            "vi": "Anh ấy về nhà lúc năm giờ chiều."
          }
        ]
      },
      {
        "zh": "八",
        "py": "bā",
        "type": "Số đếm",
        "vi": "tám",
        "ex": [
          {
            "zh": "今天是八号。",
            "py": "Jīntiān shì bā hào.",
            "vi": "Hôm nay là ngày mồng tám."
          },
          {
            "zh": "今天八号。",
            "py": "Jīntiān bā hào.",
            "vi": "Hôm nay ngày 8."
          },
          {
            "zh": "八月天气很热。",
            "py": "Bā yuè tiānqì hěn rè.",
            "vi": "Thời tiết tháng 8 rất nóng."
          },
          {
            "zh": "他八岁了。",
            "py": "Tā bā suì le.",
            "vi": "Anh ấy 8 tuổi rồi."
          },
          {
            "zh": "二、四、六、八、十。",
            "py": "Èr, sì, liù, bā, shí.",
            "vi": "Hai, bốn, sáu, tám, mười (các số chẵn)."
          },
          {
            "zh": "我早上八点上班。",
            "py": "Wǒ zǎoshang bā diǎn shàngbān.",
            "vi": "Tôi đi làm lúc tám giờ sáng."
          },
          {
            "zh": "八月八号是我的生日。",
            "py": "Bā yuè bā hào shì wǒ de shēngrì.",
            "vi": "Ngày 8 tháng 8 là sinh nhật tôi."
          },
          {
            "zh": "他的房间是八号。",
            "py": "Tā de fángjiān shì bā hào.",
            "vi": "Phòng của anh ấy là số tám."
          },
          {
            "zh": "我们班有十八个学生。",
            "py": "Wǒmen bān yǒu shíbā ge xuésheng.",
            "vi": "Lớp chúng tôi có mười tám học sinh."
          },
          {
            "zh": "这本词典八十块。",
            "py": "Zhè běn cídiǎn bāshí kuài.",
            "vi": "Quyển từ điển này tám mươi đồng."
          }
        ]
      },
      {
        "zh": "二",
        "py": "èr",
        "type": "Số đếm",
        "vi": "hai",
        "ex": [
          {
            "zh": "我有两个弟弟。",
            "py": "Wǒ yǒu liǎng gè dìdi.",
            "vi": "Tôi có hai em trai."
          },
          {
            "zh": "二，三，四。",
            "py": "Èr, sān, sì.",
            "vi": "Hai, ba, bốn."
          },
          {
            "zh": "不是三，是二。",
            "py": "Bú shì sān, shì èr.",
            "vi": "Không phải ba, là hai."
          },
          {
            "zh": "二楼在哪里？",
            "py": "Èr lóu zài nǎlǐ?",
            "vi": "Tầng hai ở đâu?"
          },
          {
            "zh": "十、九、八、七、六、五、四、三、二、一。",
            "py": "Shí, jiǔ, bā, qī, liù, wǔ, sì, sān, èr, yī.",
            "vi": "Mười, chín, tám, bảy, sáu, năm, bốn, ba, hai, một (đếm ngược)."
          },
          {
            "zh": "我的办公室在二楼。",
            "py": "Wǒ de bàngōngshì zài èr lóu.",
            "vi": "Văn phòng của tôi ở tầng hai."
          },
          {
            "zh": "二月有二十八天。",
            "py": "Èr yuè yǒu èrshíbā tiān.",
            "vi": "Tháng Hai có hai mươi tám ngày."
          },
          {
            "zh": "他十二岁。",
            "py": "Tā shí'èr suì.",
            "vi": "Cậu ấy mười hai tuổi."
          },
          {
            "zh": "我住二号楼。",
            "py": "Wǒ zhù èr hào lóu.",
            "vi": "Tôi ở tòa nhà số hai."
          },
          {
            "zh": "一共一百二十块。",
            "py": "Yígòng yìbǎi èrshí kuài.",
            "vi": "Tổng cộng một trăm hai mươi đồng."
          }
        ]
      },
      {
        "zh": "三",
        "py": "sān",
        "type": "Số đếm",
        "vi": "ba",
        "ex": [
          {
            "zh": "三加二等于五。",
            "py": "Sān jiā èr děngyú wǔ.",
            "vi": "Ba cộng hai bằng năm."
          },
          {
            "zh": "三和四都不大。",
            "py": "Sān hé sì dōu bú dà.",
            "vi": "Ba và bốn đều không lớn."
          },
          {
            "zh": "三天以后我回来。",
            "py": "Sān tiān yǐhòu wǒ huílái.",
            "vi": "Ba ngày nữa tôi về."
          },
          {
            "zh": "请给我三个苹果。",
            "py": "Qǐng gěi wǒ sān gè píngguǒ.",
            "vi": "Làm ơn cho tôi ba quả táo."
          },
          {
            "zh": "一、三、五、七、九。",
            "py": "Yī, sān, wǔ, qī, jiǔ.",
            "vi": "Một, ba, năm, bảy, chín (các số lẻ)."
          },
          {
            "zh": "我们有三个同学是越南人。",
            "py": "Wǒmen yǒu sān ge tóngxué shì Yuènán rén.",
            "vi": "Chúng tôi có ba bạn học là người Việt Nam."
          },
          {
            "zh": "我要三瓶啤酒。",
            "py": "Wǒ yào sān píng píjiǔ.",
            "vi": "Tôi muốn ba chai bia."
          },
          {
            "zh": "他星期三去医院。",
            "py": "Tā xīngqīsān qù yīyuàn.",
            "vi": "Thứ Tư anh ấy đi bệnh viện."
          },
          {
            "zh": "三月三号是她的生日。",
            "py": "Sān yuè sān hào shì tā de shēngrì.",
            "vi": "Ngày 3 tháng 3 là sinh nhật cô ấy."
          },
          {
            "zh": "我下午三点去银行。",
            "py": "Wǒ xiàwǔ sān diǎn qù yínháng.",
            "vi": "Ba giờ chiều tôi đi ngân hàng."
          }
        ]
      },
      {
        "zh": "四",
        "py": "sì",
        "type": "Số đếm",
        "vi": "bốn",
        "ex": [
          {
            "zh": "今天是四号。",
            "py": "Jīntiān shì sì hào.",
            "vi": "Hôm nay là ngày mồng bốn."
          },
          {
            "zh": "四月天气很好。",
            "py": "Sì yuè tiānqì hěn hǎo.",
            "vi": "Thời tiết tháng Tư rất đẹp."
          },
          {
            "zh": "我们有四个人。",
            "py": "Wǒmen yǒu sì gè rén.",
            "vi": "Chúng tôi có bốn người."
          },
          {
            "zh": "四加一等于五。",
            "py": "Sì jiā yī děngyú wǔ.",
            "vi": "Bốn cộng một bằng năm."
          },
          {
            "zh": "四十不是五十。",
            "py": "Sìshí bú shì wǔshí.",
            "vi": "Bốn mươi không phải năm mươi."
          },
          {
            "zh": "我买四斤香蕉。",
            "py": "Wǒ mǎi sì jīn xiāngjiāo.",
            "vi": "Tôi mua bốn cân chuối."
          },
          {
            "zh": "她住四楼。",
            "py": "Tā zhù sì lóu.",
            "vi": "Cô ấy ở tầng bốn."
          },
          {
            "zh": "星期四我不上班。",
            "py": "Xīngqīsì wǒ bú shàngbān.",
            "vi": "Thứ Năm tôi không đi làm."
          },
          {
            "zh": "四个人一共多少钱？",
            "py": "Sì ge rén yígòng duōshao qián?",
            "vi": "Bốn người tổng cộng bao nhiêu tiền?"
          },
          {
            "zh": "他有四本中文书。",
            "py": "Tā yǒu sì běn Zhōngwén shū.",
            "vi": "Anh ấy có bốn quyển sách tiếng Trung."
          }
        ]
      },
      {
        "zh": "十",
        "py": "shí",
        "type": "Số đếm",
        "vi": "mười",
        "ex": [
          {
            "zh": "我有十本书。",
            "py": "Wǒ yǒu shí běn shū.",
            "vi": "Tôi có mười quyển sách."
          },
          {
            "zh": "十加十等于二十。",
            "py": "Shí jiā shí děngyú èrshí.",
            "vi": "Mười cộng mười bằng hai mươi."
          },
          {
            "zh": "他今年十岁。",
            "py": "Tā jīnnián shí suì.",
            "vi": "Năm nay anh ấy mười tuổi."
          },
          {
            "zh": "十月是秋天。",
            "py": "Shí yuè shì qiūtiān.",
            "vi": "Tháng mười là mùa thu."
          },
          {
            "zh": "十、二十、三十。",
            "py": "Shí, èrshí, sānshí.",
            "vi": "Mười, hai mươi, ba mươi."
          },
          {
            "zh": "我要十个包子。",
            "py": "Wǒ yào shí ge bāozi.",
            "vi": "Tôi muốn mười cái bánh bao."
          },
          {
            "zh": "他晚上十点回家。",
            "py": "Tā wǎnshang shí diǎn huíjiā.",
            "vi": "Anh ấy về nhà lúc mười giờ tối."
          },
          {
            "zh": "十块钱一斤，太贵了。",
            "py": "Shí kuài qián yì jīn, tài guì le.",
            "vi": "Mười đồng một cân, đắt quá."
          },
          {
            "zh": "我们班有二十个同学。",
            "py": "Wǒmen bān yǒu èrshí ge tóngxué.",
            "vi": "Lớp chúng tôi có hai mươi bạn học."
          },
          {
            "zh": "十月十号是星期几？",
            "py": "Shí yuè shí hào shì xīngqī jǐ?",
            "vi": "Ngày 10 tháng 10 là thứ mấy?"
          }
        ]
      },
      {
        "zh": "六",
        "py": "liù",
        "vi": "sáu",
        "type": "Số đếm",
        "ex": [
          {
            "zh": "我家有六口人。",
            "py": "Wǒ jiā yǒu liù kǒu rén.",
            "vi": "Nhà tôi có sáu người."
          },
          {
            "zh": "五、六、七。",
            "py": "Wǔ, liù, qī.",
            "vi": "Năm, sáu, bảy."
          },
          {
            "zh": "六不是十。",
            "py": "Liù bú shì shí.",
            "vi": "Sáu không phải là mười."
          },
          {
            "zh": "十六，十七，十八。",
            "py": "Shíliù, shíqī, shíbā.",
            "vi": "Mười sáu, mười bảy, mười tám."
          },
          {
            "zh": "六十不是十六。",
            "py": "Liùshí bú shì shíliù.",
            "vi": "Sáu mươi không phải mười sáu."
          },
          {
            "zh": "星期六我们去旅游。",
            "py": "Xīngqīliù wǒmen qù lǚyóu.",
            "vi": "Thứ Bảy chúng tôi đi du lịch."
          },
          {
            "zh": "我要六个鸡蛋。",
            "py": "Wǒ yào liù ge jīdàn.",
            "vi": "Tôi muốn sáu quả trứng gà."
          },
          {
            "zh": "他的手机号码有两个六。",
            "py": "Tā de shǒujī hàomǎ yǒu liǎng ge liù.",
            "vi": "Số điện thoại của anh ấy có hai số sáu."
          },
          {
            "zh": "我儿子六岁了。",
            "py": "Wǒ érzi liù suì le.",
            "vi": "Con trai tôi sáu tuổi rồi."
          },
          {
            "zh": "下午六点我们吃晚饭。",
            "py": "Xiàwǔ liù diǎn wǒmen chī wǎnfàn.",
            "vi": "Sáu giờ chiều chúng tôi ăn tối."
          }
        ]
      },
      {
        "zh": "七",
        "py": "qī",
        "vi": "bảy",
        "type": "Số đếm",
        "ex": [
          {
            "zh": "我要七个包子。",
            "py": "Wǒ yào qī ge bāozi.",
            "vi": "Tôi muốn bảy cái bánh bao."
          },
          {
            "zh": "六、七、八。",
            "py": "Liù, qī, bā.",
            "vi": "Sáu, bảy, tám."
          },
          {
            "zh": "七不是九。",
            "py": "Qī bú shì jiǔ.",
            "vi": "Bảy không phải là chín."
          },
          {
            "zh": "十七，十八，十九。",
            "py": "Shíqī, shíbā, shíjiǔ.",
            "vi": "Mười bảy, mười tám, mười chín."
          },
          {
            "zh": "七十和八十都很大。",
            "py": "Qīshí hé bāshí dōu hěn dà.",
            "vi": "Bảy mươi và tám mươi đều rất lớn."
          },
          {
            "zh": "我早上七点吃早饭。",
            "py": "Wǒ zǎoshang qī diǎn chī zǎofàn.",
            "vi": "Tôi ăn sáng lúc bảy giờ."
          },
          {
            "zh": "这件毛衣七十块。",
            "py": "Zhè jiàn máoyī qīshí kuài.",
            "vi": "Chiếc áo len này bảy mươi đồng."
          },
          {
            "zh": "我最喜欢七月。",
            "py": "Wǒ zuì xǐhuan qī yuè.",
            "vi": "Tôi thích nhất tháng Bảy."
          },
          {
            "zh": "他住七号房间。",
            "py": "Tā zhù qī hào fángjiān.",
            "vi": "Anh ấy ở phòng số bảy."
          },
          {
            "zh": "我们七点吃晚饭。",
            "py": "Wǒmen qī diǎn chī wǎnfàn.",
            "vi": "Chúng tôi ăn tối lúc bảy giờ."
          }
        ]
      },
      {
        "zh": "九",
        "py": "jiǔ",
        "vi": "chín",
        "type": "Số đếm",
        "ex": [
          {
            "zh": "我儿子九岁。",
            "py": "Wǒ érzi jiǔ suì.",
            "vi": "Con trai tôi chín tuổi."
          },
          {
            "zh": "八、九、十。",
            "py": "Bā, jiǔ, shí.",
            "vi": "Tám, chín, mười."
          },
          {
            "zh": "九不是十。",
            "py": "Jiǔ bú shì shí.",
            "vi": "Chín không phải là mười."
          },
          {
            "zh": "十九不是九十。",
            "py": "Shíjiǔ bú shì jiǔshí.",
            "vi": "Mười chín không phải chín mươi."
          },
          {
            "zh": "九和十都不小。",
            "py": "Jiǔ hé shí dōu bù xiǎo.",
            "vi": "Chín và mười đều không nhỏ."
          },
          {
            "zh": "银行早上九点开门。",
            "py": "Yínháng zǎoshang jiǔ diǎn kāimén.",
            "vi": "Ngân hàng mở cửa lúc chín giờ sáng."
          },
          {
            "zh": "我们九月开学。",
            "py": "Wǒmen jiǔ yuè kāixué.",
            "vi": "Chúng tôi khai giảng vào tháng Chín."
          },
          {
            "zh": "这儿有九把雨伞。",
            "py": "Zhèr yǒu jiǔ bǎ yǔsǎn.",
            "vi": "Ở đây có chín chiếc ô."
          },
          {
            "zh": "他九岁了。",
            "py": "Tā jiǔ suì le.",
            "vi": "Cậu ấy chín tuổi rồi."
          },
          {
            "zh": "九块九一斤。",
            "py": "Jiǔ kuài jiǔ yì jīn.",
            "vi": "Chín đồng chín hào một cân."
          }
        ]
      },
      {
        "zh": "我们",
        "py": "wǒmen",
        "vi": "chúng tôi, chúng ta",
        "type": "Đại từ",
        "ex": [
          {
            "zh": "我们都很好。",
            "py": "Wǒmen dōu hěn hǎo.",
            "vi": "Chúng tôi đều rất khỏe."
          },
          {
            "zh": "我们是人。",
            "py": "Wǒmen shì rén.",
            "vi": "Chúng tôi là người."
          },
          {
            "zh": "我们很好。",
            "py": "Wǒmen hěn hǎo.",
            "vi": "Chúng tôi đều khỏe/tốt."
          },
          {
            "zh": "我们不是女的。",
            "py": "Wǒmen bú shì nǚ de.",
            "vi": "Chúng tôi không phải là con gái."
          },
          {
            "zh": "我们不大。",
            "py": "Wǒmen bú dà.",
            "vi": "Chúng tôi không to lớn."
          },
          {
            "zh": "我们明天去图书馆吧。",
            "py": "Wǒmen míngtiān qù túshūguǎn ba.",
            "vi": "Ngày mai chúng ta đi thư viện nhé."
          },
          {
            "zh": "我们公司在三楼。",
            "py": "Wǒmen gōngsī zài sān lóu.",
            "vi": "Công ty chúng tôi ở tầng ba."
          },
          {
            "zh": "我们的老师是北京人。",
            "py": "Wǒmen de lǎoshī shì Běijīng rén.",
            "vi": "Giáo viên của chúng tôi là người Bắc Kinh."
          },
          {
            "zh": "我们喜欢吃饺子。",
            "py": "Wǒmen xǐhuan chī jiǎozi.",
            "vi": "Chúng tôi thích ăn sủi cảo."
          },
          {
            "zh": "我们坐地铁去商场。",
            "py": "Wǒmen zuò dìtiě qù shāngchǎng.",
            "vi": "Chúng ta đi tàu điện ngầm tới trung tâm thương mại."
          }
        ]
      },
      {
        "zh": "你们",
        "py": "nǐmen",
        "vi": "các bạn",
        "type": "Đại từ",
        "ex": [
          {
            "zh": "你们学汉语吗？",
            "py": "Nǐmen xué Hànyǔ ma?",
            "vi": "Các bạn học tiếng Trung không?"
          },
          {
            "zh": "你们是人。",
            "py": "Nǐmen shì rén.",
            "vi": "Các bạn là người."
          },
          {
            "zh": "你们很好。",
            "py": "Nǐmen hěn hǎo.",
            "vi": "Các bạn rất tốt."
          },
          {
            "zh": "你们不是他们。",
            "py": "Nǐmen bú shì tāmen.",
            "vi": "Các bạn không phải là họ."
          },
          {
            "zh": "你们好吗？",
            "py": "Nǐmen hǎo ma?",
            "vi": "Các bạn khỏe không?"
          },
          {
            "zh": "你们班有多少学生？",
            "py": "Nǐmen bān yǒu duōshao xuésheng?",
            "vi": "Lớp các bạn có bao nhiêu học sinh?"
          },
          {
            "zh": "你们想喝什么？",
            "py": "Nǐmen xiǎng hē shénme?",
            "vi": "Các bạn muốn uống gì?"
          },
          {
            "zh": "你们公司在哪儿？",
            "py": "Nǐmen gōngsī zài nǎr?",
            "vi": "Công ty các bạn ở đâu?"
          },
          {
            "zh": "欢迎你们！",
            "py": "Huānyíng nǐmen!",
            "vi": "Hoan nghênh các bạn!"
          },
          {
            "zh": "你们俩都是医生吗？",
            "py": "Nǐmen liǎ dōu shì yīshēng ma?",
            "vi": "Hai bạn đều là bác sĩ à?"
          }
        ]
      },
      {
        "zh": "他们",
        "py": "tāmen",
        "vi": "bọn họ, các anh ấy",
        "type": "Đại từ",
        "ex": [
          {
            "zh": "他们是我的朋友。",
            "py": "Tāmen shì wǒ de péngyou.",
            "vi": "Họ là bạn của tôi."
          },
          {
            "zh": "他们是人。",
            "py": "Tāmen shì rén.",
            "vi": "Họ là người."
          },
          {
            "zh": "他们很好。",
            "py": "Tāmen hěn hǎo.",
            "vi": "Họ rất tốt/khỏe."
          },
          {
            "zh": "他们不是我们。",
            "py": "Tāmen bú shì wǒmen.",
            "vi": "Họ không phải là chúng tôi."
          },
          {
            "zh": "他们是女的。",
            "py": "Tāmen shì nǚ de.",
            "vi": "Họ là con gái/nữ."
          },
          {
            "zh": "他们是我的同学。",
            "py": "Tāmen shì wǒ de tóngxué.",
            "vi": "Họ là bạn học của tôi."
          },
          {
            "zh": "他们星期天去北京。",
            "py": "Tāmen xīngqītiān qù Běijīng.",
            "vi": "Chủ nhật họ đi Bắc Kinh."
          },
          {
            "zh": "他们都喜欢喝奶茶。",
            "py": "Tāmen dōu xǐhuan hē nǎichá.",
            "vi": "Họ đều thích uống trà sữa."
          },
          {
            "zh": "他们住在河内。",
            "py": "Tāmen zhù zài Hénèi.",
            "vi": "Họ sống ở Hà Nội."
          },
          {
            "zh": "他们开车去公司。",
            "py": "Tāmen kāichē qù gōngsī.",
            "vi": "Họ lái xe đến công ty."
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 2 (b2): 忙不忙？– Bận không?",
    "words": [
      {
        "zh": "忙",
        "py": "máng",
        "type": "Tính từ",
        "vi": "bận, bận rộn",
        "ex": [
          {
            "zh": "你今天忙吗？",
            "py": "Nǐ jīntiān máng ma?",
            "vi": "Hôm nay bạn có bận không?"
          },
          {
            "zh": "你哥哥忙吗？",
            "py": "Nǐ gēge máng ma?",
            "vi": "Anh trai bạn có bận không?"
          },
          {
            "zh": "我每天都很忙。",
            "py": "Wǒ měitiān dōu hěn máng.",
            "vi": "Tôi ngày nào cũng rất bận."
          },
          {
            "zh": "他忙着工作。",
            "py": "Tā mángzhe gōngzuò.",
            "vi": "Anh ấy đang bận làm việc."
          },
          {
            "zh": "我没有空，太忙了。",
            "py": "Wǒ méiyǒu kòng, tài máng le.",
            "vi": "Tôi không có thời gian, bận quá."
          },
          {
            "zh": "最近工作忙吗？",
            "py": "Zuìjìn gōngzuò máng ma?",
            "vi": "Dạo này công việc có bận không?"
          },
          {
            "zh": "我爸爸星期一很忙。",
            "py": "Wǒ bàba xīngqīyī hěn máng.",
            "vi": "Thứ Hai bố tôi rất bận."
          },
          {
            "zh": "医生都很忙。",
            "py": "Yīshēng dōu hěn máng.",
            "vi": "Bác sĩ đều rất bận."
          },
          {
            "zh": "她今天不忙，在家做饭。",
            "py": "Tā jīntiān bù máng, zài jiā zuòfàn.",
            "vi": "Hôm nay cô ấy không bận, ở nhà nấu cơm."
          },
          {
            "zh": "周末你忙不忙？",
            "py": "Zhōumò nǐ máng bu máng?",
            "vi": "Cuối tuần bạn có bận không?"
          }
        ]
      },
      {
        "zh": "很",
        "py": "hěn",
        "type": "Phó từ",
        "vi": "rất",
        "ex": [
          {
            "zh": "我哥哥很忙。",
            "py": "Wǒ gēge hěn máng.",
            "vi": "Anh trai tôi rất bận."
          },
          {
            "zh": "她很漂亮。",
            "py": "Tā hěn piàoliang.",
            "vi": "Cô ấy rất xinh đẹp."
          },
          {
            "zh": "这里的天气很好。",
            "py": "Zhèlǐ de tiānqì hěn hǎo.",
            "vi": "Thời tiết ở đây rất đẹp."
          },
          {
            "zh": "汉语很难，但很有趣。",
            "py": "Hànyǔ hěn nán, dàn hěn yǒuqù.",
            "vi": "Tiếng Trung rất khó nhưng rất thú vị."
          },
          {
            "zh": "她很忙。",
            "py": "Tā hěn máng.",
            "vi": "Cô ấy rất bận."
          },
          {
            "zh": "这儿的饺子很好吃。",
            "py": "Zhèr de jiǎozi hěn hǎochī.",
            "vi": "Sủi cảo ở đây rất ngon."
          },
          {
            "zh": "我今天很累。",
            "py": "Wǒ jīntiān hěn lèi.",
            "vi": "Hôm nay tôi rất mệt."
          },
          {
            "zh": "这个商店的东西很便宜。",
            "py": "Zhège shāngdiàn de dōngxi hěn piányi.",
            "vi": "Đồ ở cửa hàng này rất rẻ."
          },
          {
            "zh": "她的箱子很重。",
            "py": "Tā de xiāngzi hěn zhòng.",
            "vi": "Vali của cô ấy rất nặng."
          },
          {
            "zh": "这件毛衣很好看。",
            "py": "Zhè jiàn máoyī hěn hǎokàn.",
            "vi": "Chiếc áo len này rất đẹp."
          }
        ]
      },
      {
        "zh": "吗",
        "py": "ma",
        "type": "Trợ từ",
        "vi": "à? không? (câu hỏi)",
        "ex": [
          {
            "zh": "你是老师吗？",
            "py": "Nǐ shì lǎoshī ma?",
            "vi": "Bạn có phải là giáo viên không?"
          },
          {
            "zh": "你爸爸忙吗？",
            "py": "Nǐ bàba máng ma?",
            "vi": "Bố bạn bận không?"
          },
          {
            "zh": "她是你妹妹吗？",
            "py": "Tā shì nǐ mèimei ma?",
            "vi": "Cô ấy là em gái bạn phải không?"
          },
          {
            "zh": "他来了吗？",
            "py": "Tā lái le ma?",
            "vi": "Anh ấy đến chưa?"
          },
          {
            "zh": "你喜欢喝茶吗？",
            "py": "Nǐ xǐhuān hē chá ma?",
            "vi": "Bạn có thích uống trà không?"
          },
          {
            "zh": "你是留学生吗？",
            "py": "Nǐ shì liúxuéshēng ma?",
            "vi": "Bạn là lưu học sinh à?"
          },
          {
            "zh": "这是你的雨伞吗？",
            "py": "Zhè shì nǐ de yǔsǎn ma?",
            "vi": "Đây là ô của bạn phải không?"
          },
          {
            "zh": "你喜欢喝绿茶吗？",
            "py": "Nǐ xǐhuan hē lǜchá ma?",
            "vi": "Bạn có thích uống trà xanh không?"
          },
          {
            "zh": "你是越南人吗？",
            "py": "Nǐ shì Yuènán rén ma?",
            "vi": "Bạn là người Việt Nam à?"
          },
          {
            "zh": "你有自行车吗？",
            "py": "Nǐ yǒu zìxíngchē ma?",
            "vi": "Bạn có xe đạp không?"
          }
        ]
      },
      {
        "zh": "汉语",
        "py": "Hànyǔ",
        "type": "Danh từ",
        "vi": "tiếng Hán",
        "ex": [
          {
            "zh": "我在学习汉语。",
            "py": "Wǒ zài xuéxí Hànyǔ.",
            "vi": "Tôi đang học tiếng Hán."
          },
          {
            "zh": "汉语很有意思。",
            "py": "Hànyǔ hěn yǒu yìsi.",
            "vi": "Tiếng Trung rất thú vị."
          },
          {
            "zh": "我学汉语三个月了。",
            "py": "Wǒ xué Hànyǔ sān gè yuè le.",
            "vi": "Tôi học tiếng Trung được ba tháng rồi."
          },
          {
            "zh": "他的汉语说得很好。",
            "py": "Tā de Hànyǔ shuō de hěn hǎo.",
            "vi": "Tiếng Trung của anh ấy nói rất giỏi."
          },
          {
            "zh": "你在哪里学汉语？",
            "py": "Nǐ zài nǎlǐ xué Hànyǔ?",
            "vi": "Bạn học tiếng Trung ở đâu?"
          },
          {
            "zh": "我在河内学习汉语。",
            "py": "Wǒ zài Hénèi xuéxí Hànyǔ.",
            "vi": "Tôi học tiếng Trung ở Hà Nội."
          },
          {
            "zh": "汉语的语法不太难。",
            "py": "Hànyǔ de yǔfǎ bú tài nán.",
            "vi": "Ngữ pháp tiếng Trung không khó lắm."
          },
          {
            "zh": "他汉语口语很好。",
            "py": "Tā Hànyǔ kǒuyǔ hěn hǎo.",
            "vi": "Khẩu ngữ tiếng Trung của anh ấy rất tốt."
          },
          {
            "zh": "我觉得汉语发音有点儿难。",
            "py": "Wǒ juéde Hànyǔ fāyīn yǒudiǎnr nán.",
            "vi": "Tôi thấy phát âm tiếng Trung hơi khó."
          },
          {
            "zh": "我想买一本汉语词典。",
            "py": "Wǒ xiǎng mǎi yì běn Hànyǔ cídiǎn.",
            "vi": "Tôi muốn mua một quyển từ điển tiếng Trung."
          }
        ]
      },
      {
        "zh": "难",
        "py": "nán",
        "type": "Tính từ",
        "vi": "khó",
        "ex": [
          {
            "zh": "汉语难吗？",
            "py": "Hànyǔ nán ma?",
            "vi": "Tiếng Hán khó không?"
          },
          {
            "zh": "这不太难。",
            "py": "Zhè bú tài nán.",
            "vi": "Cái này không quá khó."
          },
          {
            "zh": "这道题太难了。",
            "py": "Zhè dào tí tài nán le.",
            "vi": "Bài tập này khó quá."
          },
          {
            "zh": "难，但我不放弃。",
            "py": "Nán, dàn wǒ bù fàngqì.",
            "vi": "Khó nhưng tôi không bỏ cuộc."
          },
          {
            "zh": "汉语难，但很好。",
            "py": "Hànyǔ nán, dàn hěn hǎo.",
            "vi": "Tiếng Hán khó, nhưng rất hay."
          },
          {
            "zh": "写汉字很难。",
            "py": "Xiě Hànzì hěn nán.",
            "vi": "Viết chữ Hán rất khó."
          },
          {
            "zh": "汉语听力难不难？",
            "py": "Hànyǔ tīnglì nán bu nán?",
            "vi": "Nghe tiếng Trung có khó không?"
          },
          {
            "zh": "我觉得日语比较难。",
            "py": "Wǒ juéde Rìyǔ bǐjiào nán.",
            "vi": "Tôi thấy tiếng Nhật tương đối khó."
          },
          {
            "zh": "这个语法不难。",
            "py": "Zhège yǔfǎ bù nán.",
            "vi": "Ngữ pháp này không khó."
          },
          {
            "zh": "阅读有点儿难。",
            "py": "Yuèdú yǒudiǎnr nán.",
            "vi": "Đọc hiểu hơi khó."
          }
        ]
      },
      {
        "zh": "太",
        "py": "tài",
        "type": "Phó từ",
        "vi": "quá, hơi",
        "ex": [
          {
            "zh": "你太忙了。",
            "py": "Nǐ tài máng le.",
            "vi": "Bạn bận quá."
          },
          {
            "zh": "今天太冷了。",
            "py": "Jīntiān tài lěng le.",
            "vi": "Hôm nay lạnh quá."
          },
          {
            "zh": "这个太贵了。",
            "py": "Zhège tài guì le.",
            "vi": "Cái này đắt quá."
          },
          {
            "zh": "你来得太晚了。",
            "py": "Nǐ lái de tài wǎn le.",
            "vi": "Bạn đến muộn quá rồi."
          },
          {
            "zh": "太好了！",
            "py": "Tài hǎo le!",
            "vi": "Tốt quá!"
          },
          {
            "zh": "今天太冷，我不出去。",
            "py": "Jīntiān tài lěng, wǒ bù chūqù.",
            "vi": "Hôm nay lạnh quá, tôi không ra ngoài."
          },
          {
            "zh": "这个箱子太重。",
            "py": "Zhège xiāngzi tài zhòng.",
            "vi": "Cái vali này nặng quá."
          },
          {
            "zh": "你太客气了！",
            "py": "Nǐ tài kèqi le!",
            "vi": "Bạn khách sáo quá!"
          },
          {
            "zh": "这儿的东西太便宜了！",
            "py": "Zhèr de dōngxi tài piányi le!",
            "vi": "Đồ ở đây rẻ quá!"
          },
          {
            "zh": "她太忙，没去旅游。",
            "py": "Tā tài máng, méi qù lǚyóu.",
            "vi": "Cô ấy bận quá, không đi du lịch."
          }
        ]
      },
      {
        "zh": "太…了",
        "py": "tài…le",
        "type": "Cấu trúc",
        "vi": "quá… rồi",
        "ex": [
          {
            "zh": "这个苹果太贵了！",
            "py": "Zhège píngguǒ tài guì le!",
            "vi": "Quả táo này đắt quá rồi!"
          },
          {
            "zh": "今天太热了！",
            "py": "Jīntiān tài rè le!",
            "vi": "Hôm nay nóng quá!"
          },
          {
            "zh": "这里太远了。",
            "py": "Zhèlǐ tài yuǎn le.",
            "vi": "Chỗ này xa quá."
          },
          {
            "zh": "他说话太快了。",
            "py": "Tā shuōhuà tài kuài le.",
            "vi": "Anh ấy nói chuyện nhanh quá."
          },
          {
            "zh": "我太忙了。",
            "py": "Wǒ tài máng le.",
            "vi": "Tôi bận quá."
          },
          {
            "zh": "太好了，明天不上班！",
            "py": "Tài hǎo le, míngtiān bú shàngbān!",
            "vi": "Tuyệt quá, mai không phải đi làm!"
          },
          {
            "zh": "这个包子太好吃了。",
            "py": "Zhège bāozi tài hǎochī le.",
            "vi": "Cái bánh bao này ngon quá."
          },
          {
            "zh": "今天太累了。",
            "py": "Jīntiān tài lèi le.",
            "vi": "Hôm nay mệt quá rồi."
          },
          {
            "zh": "这本书太有意思了！",
            "py": "Zhè běn shū tài yǒu yìsi le!",
            "vi": "Quyển sách này thú vị quá!"
          },
          {
            "zh": "五十块一斤？太贵了！",
            "py": "Wǔshí kuài yì jīn? Tài guì le!",
            "vi": "Năm mươi đồng một cân? Đắt quá!"
          }
        ]
      },
      {
        "zh": "不太",
        "py": "bú tài",
        "type": "Cấu trúc",
        "vi": "không quá, không lắm",
        "ex": [
          {
            "zh": "汉语不太难。",
            "py": "Hànyǔ bú tài nán.",
            "vi": "Tiếng Hán không quá khó."
          },
          {
            "zh": "我不太喜欢吃辣。",
            "py": "Wǒ bú tài xǐhuān chī là.",
            "vi": "Tôi không thích ăn cay lắm."
          },
          {
            "zh": "这里不太远。",
            "py": "Zhèlǐ bú tài yuǎn.",
            "vi": "Chỗ này không xa lắm."
          },
          {
            "zh": "他不太高。",
            "py": "Tā bú tài gāo.",
            "vi": "Anh ấy không cao lắm."
          },
          {
            "zh": "他不太好。",
            "py": "Tā bú tài hǎo.",
            "vi": "Anh ấy không khỏe lắm."
          },
          {
            "zh": "我不太饿。",
            "py": "Wǒ bú tài è.",
            "vi": "Tôi không đói lắm."
          },
          {
            "zh": "这件衬衣不太贵。",
            "py": "Zhè jiàn chènyī bú tài guì.",
            "vi": "Chiếc áo sơ mi này không đắt lắm."
          },
          {
            "zh": "他的发音不太好。",
            "py": "Tā de fāyīn bú tài hǎo.",
            "vi": "Phát âm của anh ấy không tốt lắm."
          },
          {
            "zh": "这个箱子不太重。",
            "py": "Zhège xiāngzi bú tài zhòng.",
            "vi": "Cái vali này không nặng lắm."
          },
          {
            "zh": "她不太喜欢吃面条。",
            "py": "Tā bú tài xǐhuan chī miàntiáo.",
            "vi": "Cô ấy không thích ăn mì lắm."
          }
        ]
      },
      {
        "zh": "他",
        "py": "tā",
        "type": "Đại từ",
        "vi": "anh ấy (ngôi 3 nam)",
        "ex": [
          {
            "zh": "他是我哥哥。",
            "py": "Tā shì wǒ gēge.",
            "vi": "Anh ấy là anh trai tôi."
          },
          {
            "zh": "他和我都很忙。",
            "py": "Tā hé wǒ dōu hěn máng.",
            "vi": "Anh ấy và tôi đều rất bận."
          },
          {
            "zh": "他学汉语很认真。",
            "py": "Tā xué Hànyǔ hěn rènzhēn.",
            "vi": "Anh ấy học tiếng Trung rất chăm chỉ."
          },
          {
            "zh": "他今年二十岁。",
            "py": "Tā jīnnián èrshí suì.",
            "vi": "Năm nay anh ấy 20 tuổi."
          },
          {
            "zh": "他是我爸爸。",
            "py": "Tā shì wǒ bàba.",
            "vi": "Anh ấy là bố tôi."
          },
          {
            "zh": "他是我们班的新同学。",
            "py": "Tā shì wǒmen bān de xīn tóngxué.",
            "vi": "Anh ấy là bạn học mới của lớp chúng tôi."
          },
          {
            "zh": "他在医院工作。",
            "py": "Tā zài yīyuàn gōngzuò.",
            "vi": "Anh ấy làm việc ở bệnh viện."
          },
          {
            "zh": "他想买一辆新汽车。",
            "py": "Tā xiǎng mǎi yí liàng xīn qìchē.",
            "vi": "Anh ấy muốn mua một chiếc xe ô tô mới."
          },
          {
            "zh": "他的生日是十月五号。",
            "py": "Tā de shēngrì shì shí yuè wǔ hào.",
            "vi": "Sinh nhật anh ấy là ngày 5 tháng 10."
          },
          {
            "zh": "他骑摩托车上班。",
            "py": "Tā qí mótuōchē shàngbān.",
            "vi": "Anh ấy đi xe máy đi làm."
          }
        ]
      },
      {
        "zh": "她",
        "py": "tā",
        "type": "Đại từ",
        "vi": "cô ấy (ngôi 3 nữ)",
        "ex": [
          {
            "zh": "她学汉语学得很好。",
            "py": "Tā xué Hànyǔ xué de hěn hǎo.",
            "vi": "Cô ấy học tiếng Hán rất tốt."
          },
          {
            "zh": "她很忙吗？",
            "py": "Tā hěn máng ma?",
            "vi": "Cô ấy bận lắm à?"
          },
          {
            "zh": "她很喜欢学汉语。",
            "py": "Tā hěn xǐhuān xué Hànyǔ.",
            "vi": "Cô ấy rất thích học tiếng Trung."
          },
          {
            "zh": "她来自越南。",
            "py": "Tā láizì Yuènán.",
            "vi": "Cô ấy đến từ Việt Nam."
          },
          {
            "zh": "她是我姐姐。",
            "py": "Tā shì wǒ jiějie.",
            "vi": "Cô ấy là chị tôi."
          },
          {
            "zh": "她是一位护士。",
            "py": "Tā shì yí wèi hùshi.",
            "vi": "Cô ấy là một y tá."
          },
          {
            "zh": "她喜欢红色的衣服。",
            "py": "Tā xǐhuan hóngsè de yīfu.",
            "vi": "Cô ấy thích quần áo màu đỏ."
          },
          {
            "zh": "她是外贸公司的秘书。",
            "py": "Tā shì wàimào gōngsī de mìshū.",
            "vi": "Cô ấy là thư ký công ty ngoại thương."
          },
          {
            "zh": "她的女儿很好看。",
            "py": "Tā de nǚ'ér hěn hǎokàn.",
            "vi": "Con gái cô ấy rất xinh."
          },
          {
            "zh": "她星期天在家做饭。",
            "py": "Tā xīngqītiān zài jiā zuòfàn.",
            "vi": "Chủ nhật cô ấy ở nhà nấu cơm."
          }
        ]
      },
      {
        "zh": "们",
        "py": "men",
        "type": "Hậu tố",
        "vi": "hậu tố số nhiều: 我们/你们/他们",
        "ex": [
          {
            "zh": "我们是同学。",
            "py": "Wǒmen shì tóngxué.",
            "vi": "Chúng tôi là bạn cùng lớp."
          },
          {
            "zh": "我们一起去吃饭吧。",
            "py": "Wǒmen yīqǐ qù chīfàn ba.",
            "vi": "Chúng ta cùng đi ăn cơm nhé."
          },
          {
            "zh": "他们都是学生。",
            "py": "Tāmen dōu shì xuéshēng.",
            "vi": "Họ đều là học sinh."
          },
          {
            "zh": "你们好！",
            "py": "Nǐmen hǎo!",
            "vi": "Xin chào các bạn!"
          },
          {
            "zh": "老师们很忙。",
            "py": "Lǎoshīmen hěn máng.",
            "vi": "Các thầy cô rất bận."
          },
          {
            "zh": "同学们，你们好！",
            "py": "Tóngxuémen, nǐmen hǎo!",
            "vi": "Chào các bạn học!"
          },
          {
            "zh": "老师们都很忙。",
            "py": "Lǎoshīmen dōu hěn máng.",
            "vi": "Các thầy cô đều rất bận."
          },
          {
            "zh": "孩子们喜欢吃西瓜。",
            "py": "Háizimen xǐhuan chī xīguā.",
            "vi": "Bọn trẻ thích ăn dưa hấu."
          },
          {
            "zh": "朋友们，欢迎你们！",
            "py": "Péngyoumen, huānyíng nǐmen!",
            "vi": "Các bạn ơi, hoan nghênh các bạn!"
          },
          {
            "zh": "学生们在图书馆学习。",
            "py": "Xuéshengmen zài túshūguǎn xuéxí.",
            "vi": "Các học sinh học ở thư viện."
          }
        ]
      },
      {
        "zh": "男",
        "py": "nán",
        "type": "Tính từ",
        "vi": "giới tính nam",
        "ex": [
          {
            "zh": "他是男学生。",
            "py": "Tā shì nán xuéshēng.",
            "vi": "Anh ấy là học sinh nam."
          },
          {
            "zh": "那个男生叫什么名字？",
            "py": "Nàge nánshēng jiào shénme míngzi?",
            "vi": "Bạn nam đó tên là gì?"
          },
          {
            "zh": "他是男老师。",
            "py": "Tā shì nán lǎoshī.",
            "vi": "Thầy ấy là giáo viên nam."
          },
          {
            "zh": "男女同学都在。",
            "py": "Nán nǚ tóngxué dōu zài.",
            "vi": "Bạn nam nữ đều có mặt."
          },
          {
            "zh": "他是男的。",
            "py": "Tā shì nán de.",
            "vi": "Anh ấy là con trai/nam."
          },
          {
            "zh": "我们班有八个男学生。",
            "py": "Wǒmen bān yǒu bā ge nán xuésheng.",
            "vi": "Lớp chúng tôi có tám nam sinh."
          },
          {
            "zh": "那位男老师是英国人。",
            "py": "Nà wèi nán lǎoshī shì Yīngguó rén.",
            "vi": "Thầy giáo kia là người Anh."
          },
          {
            "zh": "她的男朋友是记者。",
            "py": "Tā de nán péngyou shì jìzhě.",
            "vi": "Bạn trai cô ấy là nhà báo."
          },
          {
            "zh": "这个护士是男的。",
            "py": "Zhège hùshi shì nán de.",
            "vi": "Y tá này là nam."
          },
          {
            "zh": "男的喝啤酒，女的喝奶茶。",
            "py": "Nán de hē píjiǔ, nǚ de hē nǎichá.",
            "vi": "Nam uống bia, nữ uống trà sữa."
          }
        ]
      },
      {
        "zh": "爸爸",
        "py": "bàba",
        "type": "Danh từ",
        "vi": "bố, ba",
        "ex": [
          {
            "zh": "我爸爸很忙。",
            "py": "Wǒ bàba hěn máng.",
            "vi": "Bố tôi rất bận."
          },
          {
            "zh": "我爸爸是医生。",
            "py": "Wǒ bàba shì yīshēng.",
            "vi": "Bố tôi là bác sĩ."
          },
          {
            "zh": "爸爸每天很忙。",
            "py": "Bàba měitiān hěn máng.",
            "vi": "Bố ngày nào cũng rất bận."
          },
          {
            "zh": "我跟爸爸一起去银行。",
            "py": "Wǒ gēn bàba yīqǐ qù yínháng.",
            "vi": "Tôi cùng bố đi ngân hàng."
          },
          {
            "zh": "爸爸不忙。",
            "py": "Bàba bù máng.",
            "vi": "Bố không bận."
          },
          {
            "zh": "我爸爸是工程师。",
            "py": "Wǒ bàba shì gōngchéngshī.",
            "vi": "Bố tôi là kỹ sư."
          },
          {
            "zh": "爸爸早上开车上班。",
            "py": "Bàba zǎoshang kāichē shàngbān.",
            "vi": "Buổi sáng bố lái xe đi làm."
          },
          {
            "zh": "爸爸喜欢喝绿茶。",
            "py": "Bàba xǐhuan hē lǜchá.",
            "vi": "Bố thích uống trà xanh."
          },
          {
            "zh": "你爸爸多大年纪了？",
            "py": "Nǐ bàba duō dà niánjì le?",
            "vi": "Bố bạn bao nhiêu tuổi rồi?"
          },
          {
            "zh": "我爸爸的生日是五月八号。",
            "py": "Wǒ bàba de shēngrì shì wǔ yuè bā hào.",
            "vi": "Sinh nhật bố tôi là ngày 8 tháng 5."
          }
        ]
      },
      {
        "zh": "妈妈",
        "py": "māma",
        "type": "Danh từ",
        "vi": "mẹ, má",
        "ex": [
          {
            "zh": "妈妈做饭很好吃。",
            "py": "Māma zuò fàn hěn hǎochī.",
            "vi": "Mẹ nấu ăn rất ngon."
          },
          {
            "zh": "我妈妈做的饭很好吃。",
            "py": "Wǒ māma zuò de fàn hěn hǎochī.",
            "vi": "Cơm mẹ nấu rất ngon."
          },
          {
            "zh": "妈妈，我回来了！",
            "py": "Māma, wǒ huílái le!",
            "vi": "Mẹ ơi, con về rồi!"
          },
          {
            "zh": "妈妈在家吗？",
            "py": "Māma zài jiā ma?",
            "vi": "Mẹ có ở nhà không?"
          },
          {
            "zh": "妈妈很好。",
            "py": "Māma hěn hǎo.",
            "vi": "Mẹ rất khỏe."
          },
          {
            "zh": "妈妈在家做晚饭。",
            "py": "Māma zài jiā zuò wǎnfàn.",
            "vi": "Mẹ ở nhà nấu cơm tối."
          },
          {
            "zh": "我妈妈是大学老师。",
            "py": "Wǒ māma shì dàxué lǎoshī.",
            "vi": "Mẹ tôi là giảng viên đại học."
          },
          {
            "zh": "妈妈给我买了一件毛衣。",
            "py": "Māma gěi wǒ mǎile yí jiàn máoyī.",
            "vi": "Mẹ mua cho tôi một chiếc áo len."
          },
          {
            "zh": "妈妈不喜欢喝咖啡。",
            "py": "Māma bù xǐhuan hē kāfēi.",
            "vi": "Mẹ không thích uống cà phê."
          },
          {
            "zh": "你妈妈身体怎么样？",
            "py": "Nǐ māma shēntǐ zěnmeyàng?",
            "vi": "Sức khỏe mẹ bạn thế nào?"
          }
        ]
      },
      {
        "zh": "哥哥",
        "py": "gēge",
        "type": "Danh từ",
        "vi": "anh trai",
        "ex": [
          {
            "zh": "我哥哥学汉语。",
            "py": "Wǒ gēge xué Hànyǔ.",
            "vi": "Anh trai tôi học tiếng Hán."
          },
          {
            "zh": "我哥哥在北京工作。",
            "py": "Wǒ gēge zài Běijīng gōngzuò.",
            "vi": "Anh tôi làm việc ở Bắc Kinh."
          },
          {
            "zh": "哥哥比我高。",
            "py": "Gēge bǐ wǒ gāo.",
            "vi": "Anh cao hơn tôi."
          },
          {
            "zh": "我有一个哥哥两个妹妹。",
            "py": "Wǒ yǒu yī gè gēge liǎng gè mèimei.",
            "vi": "Tôi có một anh và hai em gái."
          },
          {
            "zh": "哥哥很忙。",
            "py": "Gēge hěn máng.",
            "vi": "Anh trai rất bận."
          },
          {
            "zh": "我哥哥在美国留学。",
            "py": "Wǒ gēge zài Měiguó liúxué.",
            "vi": "Anh trai tôi du học ở Mỹ."
          },
          {
            "zh": "哥哥有一辆摩托车。",
            "py": "Gēge yǒu yí liàng mótuōchē.",
            "vi": "Anh trai có một chiếc xe máy."
          },
          {
            "zh": "他哥哥是律师。",
            "py": "Tā gēge shì lǜshī.",
            "vi": "Anh trai của cậu ấy là luật sư."
          },
          {
            "zh": "我哥哥比我大三岁。",
            "py": "Wǒ gēge bǐ wǒ dà sān suì.",
            "vi": "Anh tôi lớn hơn tôi ba tuổi."
          },
          {
            "zh": "哥哥经常骑自行车去公司。",
            "py": "Gēge jīngcháng qí zìxíngchē qù gōngsī.",
            "vi": "Anh trai thường đạp xe đến công ty."
          }
        ]
      },
      {
        "zh": "弟弟",
        "py": "dìdi",
        "type": "Danh từ",
        "vi": "em trai",
        "ex": [
          {
            "zh": "弟弟今年八岁。",
            "py": "Dìdi jīnnián bā suì.",
            "vi": "Em trai năm nay tám tuổi."
          },
          {
            "zh": "我弟弟今年十五岁。",
            "py": "Wǒ dìdi jīnnián shíwǔ suì.",
            "vi": "Em trai tôi năm nay 15 tuổi."
          },
          {
            "zh": "弟弟喜欢踢足球。",
            "py": "Dìdi xǐhuān tī zúqiú.",
            "vi": "Em trai thích đá bóng."
          },
          {
            "zh": "我和弟弟一起学习。",
            "py": "Wǒ hé dìdi yīqǐ xuéxí.",
            "vi": "Tôi và em trai cùng học bài."
          },
          {
            "zh": "弟弟不大。",
            "py": "Dìdi bú dà.",
            "vi": "Em trai không lớn (còn nhỏ)."
          },
          {
            "zh": "我弟弟十岁了。",
            "py": "Wǒ dìdi shí suì le.",
            "vi": "Em trai tôi mười tuổi rồi."
          },
          {
            "zh": "弟弟喜欢吃草莓。",
            "py": "Dìdi xǐhuan chī cǎoméi.",
            "vi": "Em trai thích ăn dâu tây."
          },
          {
            "zh": "他弟弟是大学生。",
            "py": "Tā dìdi shì dàxuéshēng.",
            "vi": "Em trai anh ấy là sinh viên đại học."
          },
          {
            "zh": "弟弟在房间里写汉字。",
            "py": "Dìdi zài fángjiān lǐ xiě Hànzì.",
            "vi": "Em trai đang viết chữ Hán trong phòng."
          },
          {
            "zh": "我给弟弟买了一个照相机。",
            "py": "Wǒ gěi dìdi mǎile yí ge zhàoxiàngjī.",
            "vi": "Tôi mua cho em trai một cái máy ảnh."
          }
        ]
      },
      {
        "zh": "妹妹",
        "py": "mèimei",
        "type": "Danh từ",
        "vi": "em gái",
        "ex": [
          {
            "zh": "我妹妹很漂亮。",
            "py": "Wǒ mèimei hěn piàoliang.",
            "vi": "Em gái tôi rất xinh đẹp."
          },
          {
            "zh": "我妹妹学习很好。",
            "py": "Wǒ mèimei xuéxí hěn hǎo.",
            "vi": "Em gái tôi học rất giỏi."
          },
          {
            "zh": "妹妹比我小三岁。",
            "py": "Mèimei bǐ wǒ xiǎo sān suì.",
            "vi": "Em gái nhỏ hơn tôi 3 tuổi."
          },
          {
            "zh": "我妹妹也学汉语。",
            "py": "Wǒ mèimei yě xué Hànyǔ.",
            "vi": "Em gái tôi cũng học tiếng Trung."
          },
          {
            "zh": "妹妹是女的。",
            "py": "Mèimei shì nǚ de.",
            "vi": "Em gái là con gái."
          },
          {
            "zh": "我妹妹是护士。",
            "py": "Wǒ mèimei shì hùshi.",
            "vi": "Em gái tôi là y tá."
          },
          {
            "zh": "妹妹喜欢黄色的衣服。",
            "py": "Mèimei xǐhuan huángsè de yīfu.",
            "vi": "Em gái thích quần áo màu vàng."
          },
          {
            "zh": "你妹妹几岁了？",
            "py": "Nǐ mèimei jǐ suì le?",
            "vi": "Em gái bạn mấy tuổi rồi?"
          },
          {
            "zh": "妹妹在学校学英语。",
            "py": "Mèimei zài xuéxiào xué Yīngyǔ.",
            "vi": "Em gái học tiếng Anh ở trường."
          },
          {
            "zh": "我和妹妹都喜欢喝奶茶。",
            "py": "Wǒ hé mèimei dōu xǐhuan hē nǎichá.",
            "vi": "Tôi và em gái đều thích uống trà sữa."
          }
        ]
      },
      {
        "zh": "姐姐",
        "py": "jiějie",
        "type": "Danh từ",
        "vi": "chị gái",
        "ex": [
          {
            "zh": "我姐姐在北京工作。",
            "py": "Wǒ jiějie zài Běijīng gōngzuò.",
            "vi": "Chị gái tôi làm việc ở Bắc Kinh."
          },
          {
            "zh": "我姐姐很忙。",
            "py": "Wǒ jiějie hěn máng.",
            "vi": "Chị gái tôi rất bận."
          },
          {
            "zh": "姐姐帮我学汉语。",
            "py": "Jiějie bāng wǒ xué Hànyǔ.",
            "vi": "Chị giúp tôi học tiếng Trung."
          },
          {
            "zh": "我姐姐结婚了。",
            "py": "Wǒ jiějie jiéhūn le.",
            "vi": "Chị gái tôi đã kết hôn rồi."
          },
          {
            "zh": "姐姐很好。",
            "py": "Jiějie hěn hǎo.",
            "vi": "Chị gái rất tốt."
          },
          {
            "zh": "我姐姐在银行工作。",
            "py": "Wǒ jiějie zài yínháng gōngzuò.",
            "vi": "Chị gái tôi làm việc ở ngân hàng."
          },
          {
            "zh": "姐姐有两个孩子。",
            "py": "Jiějie yǒu liǎng ge háizi.",
            "vi": "Chị gái có hai đứa con."
          },
          {
            "zh": "姐姐的男朋友是日本人。",
            "py": "Jiějie de nán péngyou shì Rìběn rén.",
            "vi": "Bạn trai của chị gái là người Nhật."
          },
          {
            "zh": "姐姐买了一瓶香水。",
            "py": "Jiějie mǎile yì píng xiāngshuǐ.",
            "vi": "Chị gái đã mua một chai nước hoa."
          },
          {
            "zh": "我姐姐住在北京。",
            "py": "Wǒ jiějie zhù zài Běijīng.",
            "vi": "Chị gái tôi sống ở Bắc Kinh."
          }
        ]
      },
      {
        "zh": "奶奶",
        "py": "nǎinai",
        "type": "Danh từ",
        "vi": "bà (nội)",
        "ex": [
          {
            "zh": "奶奶身体很好。",
            "py": "Nǎinai shēntǐ hěn hǎo.",
            "vi": "Bà nội sức khỏe rất tốt."
          },
          {
            "zh": "奶奶每天早起。",
            "py": "Nǎinai měitiān zǎo qǐ.",
            "vi": "Bà nội ngày nào cũng dậy sớm."
          },
          {
            "zh": "我奶奶七十岁了。",
            "py": "Wǒ nǎinai qīshí suì le.",
            "vi": "Bà nội tôi 70 tuổi rồi."
          },
          {
            "zh": "奶奶做的饺子很好吃。",
            "py": "Nǎinai zuò de jiǎozi hěn hǎochī.",
            "vi": "Sủi cảo bà nội làm rất ngon."
          },
          {
            "zh": "奶奶很好。",
            "py": "Nǎinai hěn hǎo.",
            "vi": "Bà nội rất khỏe."
          },
          {
            "zh": "奶奶八十岁了。",
            "py": "Nǎinai bāshí suì le.",
            "vi": "Bà nội tám mươi tuổi rồi."
          },
          {
            "zh": "奶奶喜欢吃香蕉。",
            "py": "Nǎinai xǐhuan chī xiāngjiāo.",
            "vi": "Bà nội thích ăn chuối."
          },
          {
            "zh": "奶奶早上喝一杯茶。",
            "py": "Nǎinai zǎoshang hē yì bēi chá.",
            "vi": "Buổi sáng bà nội uống một cốc trà."
          },
          {
            "zh": "我们星期天去看奶奶。",
            "py": "Wǒmen xīngqītiān qù kàn nǎinai.",
            "vi": "Chủ nhật chúng tôi đi thăm bà nội."
          },
          {
            "zh": "奶奶给我做了饺子。",
            "py": "Nǎinai gěi wǒ zuòle jiǎozi.",
            "vi": "Bà nội làm sủi cảo cho tôi."
          }
        ]
      },
      {
        "zh": "爷爷",
        "py": "yéye",
        "type": "Danh từ",
        "vi": "ông (nội)",
        "ex": [
          {
            "zh": "爷爷喜欢喝茶。",
            "py": "Yéye xǐhuan hē chá.",
            "vi": "Ông nội thích uống trà."
          },
          {
            "zh": "爷爷不太忙。",
            "py": "Yéye bú tài máng.",
            "vi": "Ông không bận lắm."
          },
          {
            "zh": "我爷爷八十岁了。",
            "py": "Wǒ yéye bāshí suì le.",
            "vi": "Ông nội tôi 80 tuổi rồi."
          },
          {
            "zh": "爷爷每天散步。",
            "py": "Yéye měitiān sànbù.",
            "vi": "Ông nội mỗi ngày đều đi dạo."
          },
          {
            "zh": "爷爷不忙。",
            "py": "Yéye bù máng.",
            "vi": "Ông nội không bận."
          },
          {
            "zh": "爷爷喜欢看书。",
            "py": "Yéye xǐhuan kàn shū.",
            "vi": "Ông nội thích đọc sách."
          },
          {
            "zh": "我爷爷是老师。",
            "py": "Wǒ yéye shì lǎoshī.",
            "vi": "Ông nội tôi là giáo viên."
          },
          {
            "zh": "爷爷不喝酒，只喝茶。",
            "py": "Yéye bù hē jiǔ, zhǐ hē chá.",
            "vi": "Ông nội không uống rượu, chỉ uống trà."
          },
          {
            "zh": "爷爷有一辆旧自行车。",
            "py": "Yéye yǒu yí liàng jiù zìxíngchē.",
            "vi": "Ông nội có một chiếc xe đạp cũ."
          },
          {
            "zh": "爷爷定期去医院看病。",
            "py": "Yéye dìngqī qù yīyuàn kànbìng.",
            "vi": "Ông nội đi bệnh viện khám định kỳ."
          }
        ]
      },
      {
        "zh": "阿姨",
        "py": "āyí",
        "type": "Danh từ",
        "vi": "dì, cô",
        "ex": [
          {
            "zh": "阿姨在家吗？",
            "py": "Āyí zài jiā ma?",
            "vi": "Dì có ở nhà không?"
          },
          {
            "zh": "阿姨，请问厕所在哪儿？",
            "py": "Āyí, qǐngwèn cèsuǒ zài nǎr?",
            "vi": "Cô ơi, xin hỏi nhà vệ sinh ở đâu ạ?"
          },
          {
            "zh": "我阿姨在上海工作。",
            "py": "Wǒ āyí zài Shànghǎi gōngzuò.",
            "vi": "Dì tôi làm việc ở Thượng Hải."
          },
          {
            "zh": "阿姨，您好！",
            "py": "Āyí, nín hǎo!",
            "vi": "Cô ơi, chào cô!"
          },
          {
            "zh": "阿姨很忙。",
            "py": "Āyí hěn máng.",
            "vi": "Cô/dì rất bận."
          },
          {
            "zh": "阿姨，请问银行在哪儿？",
            "py": "Āyí, qǐngwèn yínháng zài nǎr?",
            "vi": "Cô ơi, xin hỏi ngân hàng ở đâu?"
          },
          {
            "zh": "那位阿姨是我妈妈的朋友。",
            "py": "Nà wèi āyí shì wǒ māma de péngyou.",
            "vi": "Cô kia là bạn của mẹ tôi."
          },
          {
            "zh": "阿姨，我要两个包子。",
            "py": "Āyí, wǒ yào liǎng ge bāozi.",
            "vi": "Cô ơi, cháu muốn hai cái bánh bao."
          },
          {
            "zh": "食堂的阿姨很好。",
            "py": "Shítáng de āyí hěn hǎo.",
            "vi": "Cô ở nhà ăn rất tốt bụng."
          },
          {
            "zh": "阿姨，这个多少钱？",
            "py": "Āyí, zhège duōshao qián?",
            "vi": "Cô ơi, cái này bao nhiêu tiền?"
          }
        ]
      },
      {
        "zh": "它",
        "py": "tā",
        "type": "Đại từ",
        "vi": "nó (đồ vật, con vật)",
        "ex": [
          {
            "zh": "它是我的猫。",
            "py": "Tā shì wǒ de māo.",
            "vi": "Nó là con mèo của tôi."
          },
          {
            "zh": "它很大吗？",
            "py": "Tā hěn dà ma?",
            "vi": "Nó to không?"
          },
          {
            "zh": "它很可爱。",
            "py": "Tā hěn kě'ài.",
            "vi": "Nó rất đáng yêu."
          },
          {
            "zh": "它喜欢吃鱼。",
            "py": "Tā xǐhuān chī yú.",
            "vi": "Nó thích ăn cá."
          },
          {
            "zh": "它不是马。",
            "py": "Tā bú shì mǎ.",
            "vi": "Nó không phải là ngựa."
          },
          {
            "zh": "这是我的车，它是红色的。",
            "py": "Zhè shì wǒ de chē, tā shì hóngsè de.",
            "vi": "Đây là xe của tôi, nó màu đỏ."
          },
          {
            "zh": "我有一本词典，它很重。",
            "py": "Wǒ yǒu yì běn cídiǎn, tā hěn zhòng.",
            "vi": "Tôi có một quyển từ điển, nó rất nặng."
          },
          {
            "zh": "这个箱子很旧，它是爷爷的。",
            "py": "Zhège xiāngzi hěn jiù, tā shì yéye de.",
            "vi": "Cái vali này rất cũ, nó là của ông nội."
          },
          {
            "zh": "那是我的手机，它是新的。",
            "py": "Nà shì wǒ de shǒujī, tā shì xīn de.",
            "vi": "Kia là điện thoại của tôi, nó là đồ mới."
          },
          {
            "zh": "这把雨伞很好，它很轻。",
            "py": "Zhè bǎ yǔsǎn hěn hǎo, tā hěn qīng.",
            "vi": "Chiếc ô này rất tốt, nó rất nhẹ."
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 3 (b3): 明天见 – Ngày mai gặp",
    "words": [
      {
        "zh": "学",
        "py": "xué",
        "type": "Động từ",
        "vi": "học",
        "ex": [
          {
            "zh": "我学汉语已经一年了。",
            "py": "Wǒ xué Hànyǔ yǐjīng yī nián le.",
            "vi": "Tôi học tiếng Hán đã được một năm rồi."
          },
          {
            "zh": "我在学汉语。",
            "py": "Wǒ zài xué Hànyǔ.",
            "vi": "Tôi đang học tiếng Trung."
          },
          {
            "zh": "学习很重要。",
            "py": "Xuéxí hěn zhòngyào.",
            "vi": "Học tập rất quan trọng."
          },
          {
            "zh": "我每天学两个小时汉语。",
            "py": "Wǒ měitiān xué liǎng gè xiǎoshí Hànyǔ.",
            "vi": "Mỗi ngày tôi học tiếng Trung 2 tiếng."
          },
          {
            "zh": "我学法语。",
            "py": "Wǒ xué Fǎyǔ.",
            "vi": "Tôi học tiếng Pháp."
          },
          {
            "zh": "我在大学学外贸。",
            "py": "Wǒ zài dàxué xué wàimào.",
            "vi": "Tôi học ngoại thương ở đại học."
          },
          {
            "zh": "你想学什么语言？",
            "py": "Nǐ xiǎng xué shénme yǔyán?",
            "vi": "Bạn muốn học ngôn ngữ gì?"
          },
          {
            "zh": "她跟老师学写汉字。",
            "py": "Tā gēn lǎoshī xué xiě Hànzì.",
            "vi": "Cô ấy theo thầy học viết chữ Hán."
          },
          {
            "zh": "弟弟在学开车。",
            "py": "Dìdi zài xué kāichē.",
            "vi": "Em trai đang học lái xe."
          },
          {
            "zh": "我们班学口语和听力。",
            "py": "Wǒmen bān xué kǒuyǔ hé tīnglì.",
            "vi": "Lớp chúng tôi học khẩu ngữ và nghe."
          }
        ]
      },
      {
        "zh": "英语",
        "py": "Yīngyǔ",
        "type": "Danh từ",
        "vi": "tiếng Anh",
        "ex": [
          {
            "zh": "他英语说得很好。",
            "py": "Tā Yīngyǔ shuō de hěn hǎo.",
            "vi": "Anh ấy nói tiếng Anh rất giỏi."
          },
          {
            "zh": "你会说英语吗？",
            "py": "Nǐ huì shuō Yīngyǔ ma?",
            "vi": "Bạn có biết nói tiếng Anh không?"
          },
          {
            "zh": "我的英语不太好。",
            "py": "Wǒ de Yīngyǔ bú tài hǎo.",
            "vi": "Tiếng Anh của tôi không được tốt lắm."
          },
          {
            "zh": "英语是国际语言。",
            "py": "Yīngyǔ shì guójì yǔyán.",
            "vi": "Tiếng Anh là ngôn ngữ quốc tế."
          },
          {
            "zh": "英语不太难。",
            "py": "Yīngyǔ bú tài nán.",
            "vi": "Tiếng Anh không khó lắm."
          },
          {
            "zh": "他的英语很好。",
            "py": "Tā de Yīngyǔ hěn hǎo.",
            "vi": "Tiếng Anh của anh ấy rất tốt."
          },
          {
            "zh": "英语听力有点儿难。",
            "py": "Yīngyǔ tīnglì yǒudiǎnr nán.",
            "vi": "Nghe tiếng Anh hơi khó."
          },
          {
            "zh": "你说英语吗？",
            "py": "Nǐ shuō Yīngyǔ ma?",
            "vi": "Bạn có nói tiếng Anh không?"
          },
          {
            "zh": "这本英语词典是新的。",
            "py": "Zhè běn Yīngyǔ cídiǎn shì xīn de.",
            "vi": "Quyển từ điển tiếng Anh này là mới."
          },
          {
            "zh": "我们公司的经理说英语。",
            "py": "Wǒmen gōngsī de jīnglǐ shuō Yīngyǔ.",
            "vi": "Giám đốc công ty chúng tôi nói tiếng Anh."
          }
        ]
      },
      {
        "zh": "日语",
        "py": "Rìyǔ",
        "type": "Danh từ",
        "vi": "tiếng Nhật",
        "ex": [
          {
            "zh": "她在学日语。",
            "py": "Tā zài xué Rìyǔ.",
            "vi": "Cô ấy đang học tiếng Nhật."
          },
          {
            "zh": "我不学日语。",
            "py": "Wǒ bù xué Rìyǔ.",
            "vi": "Tôi không học tiếng Nhật."
          },
          {
            "zh": "日语和汉语有很多汉字。",
            "py": "Rìyǔ hé Hànyǔ yǒu hěn duō Hànzì.",
            "vi": "Tiếng Nhật và tiếng Trung có nhiều chữ Hán."
          },
          {
            "zh": "你会说日语吗？",
            "py": "Nǐ huì shuō Rìyǔ ma?",
            "vi": "Bạn có biết nói tiếng Nhật không?"
          },
          {
            "zh": "她学日语。",
            "py": "Tā xué Rìyǔ.",
            "vi": "Cô ấy học tiếng Nhật."
          },
          {
            "zh": "她在大学学日语。",
            "py": "Tā zài dàxué xué Rìyǔ.",
            "vi": "Cô ấy học tiếng Nhật ở đại học."
          },
          {
            "zh": "日语的语法比较难。",
            "py": "Rìyǔ de yǔfǎ bǐjiào nán.",
            "vi": "Ngữ pháp tiếng Nhật tương đối khó."
          },
          {
            "zh": "我有一本日语书。",
            "py": "Wǒ yǒu yì běn Rìyǔ shū.",
            "vi": "Tôi có một quyển sách tiếng Nhật."
          },
          {
            "zh": "他的日语口语很好。",
            "py": "Tā de Rìyǔ kǒuyǔ hěn hǎo.",
            "vi": "Khẩu ngữ tiếng Nhật của anh ấy rất tốt."
          },
          {
            "zh": "日语和汉语都有汉字。",
            "py": "Rìyǔ hé Hànyǔ dōu yǒu Hànzì.",
            "vi": "Tiếng Nhật và tiếng Trung đều có chữ Hán."
          }
        ]
      },
      {
        "zh": "韩国语",
        "py": "Hánguóyǔ",
        "type": "Danh từ",
        "vi": "tiếng Hàn Quốc",
        "ex": [
          {
            "zh": "韩国语也很难学。",
            "py": "Hánguóyǔ yě hěn nán xué.",
            "vi": "Tiếng Hàn Quốc cũng rất khó học."
          },
          {
            "zh": "韩国语很难学。",
            "py": "Hánguóyǔ hěn nán xué.",
            "vi": "Tiếng Hàn rất khó học."
          },
          {
            "zh": "他在学韩国语。",
            "py": "Tā zài xué Hánguóyǔ.",
            "vi": "Anh ấy đang học tiếng Hàn."
          },
          {
            "zh": "你喜欢韩国语吗？",
            "py": "Nǐ xǐhuān Hánguóyǔ ma?",
            "vi": "Bạn có thích tiếng Hàn không?"
          },
          {
            "zh": "他学韩国语。",
            "py": "Tā xué Hánguóyǔ.",
            "vi": "Anh ấy học tiếng Hàn."
          },
          {
            "zh": "我想学韩国语。",
            "py": "Wǒ xiǎng xué Hánguóyǔ.",
            "vi": "Tôi muốn học tiếng Hàn."
          },
          {
            "zh": "韩国语难不难？",
            "py": "Hánguóyǔ nán bu nán?",
            "vi": "Tiếng Hàn có khó không?"
          },
          {
            "zh": "她的同屋说韩国语。",
            "py": "Tā de tóngwū shuō Hánguóyǔ.",
            "vi": "Bạn cùng phòng của cô ấy nói tiếng Hàn."
          },
          {
            "zh": "这是韩国语杂志。",
            "py": "Zhè shì Hánguóyǔ zázhì.",
            "vi": "Đây là tạp chí tiếng Hàn."
          },
          {
            "zh": "韩国语的发音不太难。",
            "py": "Hánguóyǔ de fāyīn bú tài nán.",
            "vi": "Phát âm tiếng Hàn không khó lắm."
          }
        ]
      },
      {
        "zh": "法语",
        "py": "Fǎyǔ",
        "type": "Danh từ",
        "vi": "tiếng Pháp",
        "ex": [
          {
            "zh": "法语听起来很美。",
            "py": "Fǎyǔ tīng qǐlái hěn měi.",
            "vi": "Tiếng Pháp nghe rất hay."
          },
          {
            "zh": "法语很难发音。",
            "py": "Fǎyǔ hěn nán fāyīn.",
            "vi": "Phát âm tiếng Pháp rất khó."
          },
          {
            "zh": "她会说法语和英语。",
            "py": "Tā huì shuō Fǎyǔ hé Yīngyǔ.",
            "vi": "Cô ấy biết nói tiếng Pháp và tiếng Anh."
          },
          {
            "zh": "我不学法语。",
            "py": "Wǒ bù xué Fǎyǔ.",
            "vi": "Tôi không học tiếng Pháp."
          },
          {
            "zh": "法语很难。",
            "py": "Fǎyǔ hěn nán.",
            "vi": "Tiếng Pháp rất khó."
          },
          {
            "zh": "他在法国学法语。",
            "py": "Tā zài Fǎguó xué Fǎyǔ.",
            "vi": "Anh ấy học tiếng Pháp ở Pháp."
          },
          {
            "zh": "法语的语法很难。",
            "py": "Fǎyǔ de yǔfǎ hěn nán.",
            "vi": "Ngữ pháp tiếng Pháp rất khó."
          },
          {
            "zh": "我爷爷说法语。",
            "py": "Wǒ yéye shuō Fǎyǔ.",
            "vi": "Ông nội tôi nói tiếng Pháp."
          },
          {
            "zh": "你有法语词典吗？",
            "py": "Nǐ yǒu Fǎyǔ cídiǎn ma?",
            "vi": "Bạn có từ điển tiếng Pháp không?"
          },
          {
            "zh": "加拿大人说英语和法语。",
            "py": "Jiānádà rén shuō Yīngyǔ hé Fǎyǔ.",
            "vi": "Người Canada nói tiếng Anh và tiếng Pháp."
          }
        ]
      },
      {
        "zh": "德语",
        "py": "Déyǔ",
        "type": "Danh từ",
        "vi": "tiếng Đức",
        "ex": [
          {
            "zh": "他在学德语。",
            "py": "Tā zài xué Déyǔ.",
            "vi": "Anh ấy đang học tiếng Đức."
          },
          {
            "zh": "德语语法很复杂。",
            "py": "Déyǔ yǔfǎ hěn fùzá.",
            "vi": "Ngữ pháp tiếng Đức rất phức tạp."
          },
          {
            "zh": "他在德国学德语。",
            "py": "Tā zài Déguó xué Déyǔ.",
            "vi": "Anh ấy học tiếng Đức ở Đức."
          },
          {
            "zh": "她学德语。",
            "py": "Tā xué Déyǔ.",
            "vi": "Cô ấy học tiếng Đức."
          },
          {
            "zh": "德语太难了。",
            "py": "Déyǔ tài nán le.",
            "vi": "Tiếng Đức khó quá."
          },
          {
            "zh": "她的德语老师是德国人。",
            "py": "Tā de Déyǔ lǎoshī shì Déguó rén.",
            "vi": "Giáo viên tiếng Đức của cô ấy là người Đức."
          },
          {
            "zh": "德语难吗？",
            "py": "Déyǔ nán ma?",
            "vi": "Tiếng Đức có khó không?"
          },
          {
            "zh": "我哥哥在德国学德语。",
            "py": "Wǒ gēge zài Déguó xué Déyǔ.",
            "vi": "Anh tôi học tiếng Đức ở Đức."
          },
          {
            "zh": "这本德语书很有意思。",
            "py": "Zhè běn Déyǔ shū hěn yǒu yìsi.",
            "vi": "Quyển sách tiếng Đức này rất thú vị."
          },
          {
            "zh": "他想去德国，所以学德语。",
            "py": "Tā xiǎng qù Déguó, suǒyǐ xué Déyǔ.",
            "vi": "Anh ấy muốn đi Đức nên học tiếng Đức."
          }
        ]
      },
      {
        "zh": "俄语",
        "py": "Éyǔ",
        "type": "Danh từ",
        "vi": "tiếng Nga",
        "ex": [
          {
            "zh": "俄语的发音很特别。",
            "py": "Éyǔ de fāyīn hěn tèbié.",
            "vi": "Phát âm tiếng Nga rất đặc biệt."
          },
          {
            "zh": "俄语字母很特别。",
            "py": "Éyǔ zìmǔ hěn tèbié.",
            "vi": "Bảng chữ cái tiếng Nga rất đặc biệt."
          },
          {
            "zh": "他会说俄语。",
            "py": "Tā huì shuō Éyǔ.",
            "vi": "Anh ấy biết nói tiếng Nga."
          },
          {
            "zh": "他学俄语。",
            "py": "Tā xué Éyǔ.",
            "vi": "Anh ấy học tiếng Nga."
          },
          {
            "zh": "俄语不太难。",
            "py": "Éyǔ bú tài nán.",
            "vi": "Tiếng Nga không khó lắm."
          },
          {
            "zh": "他是俄语老师。",
            "py": "Tā shì Éyǔ lǎoshī.",
            "vi": "Anh ấy là giáo viên tiếng Nga."
          },
          {
            "zh": "俄语的发音很难。",
            "py": "Éyǔ de fāyīn hěn nán.",
            "vi": "Phát âm tiếng Nga rất khó."
          },
          {
            "zh": "我爸爸在俄国学习俄语。",
            "py": "Wǒ bàba zài Éguó xuéxí Éyǔ.",
            "vi": "Bố tôi học tiếng Nga ở Nga."
          },
          {
            "zh": "她说俄语吗？",
            "py": "Tā shuō Éyǔ ma?",
            "vi": "Cô ấy có nói tiếng Nga không?"
          },
          {
            "zh": "图书馆里有俄语杂志。",
            "py": "Túshūguǎn lǐ yǒu Éyǔ zázhì.",
            "vi": "Trong thư viện có tạp chí tiếng Nga."
          }
        ]
      },
      {
        "zh": "西班牙语",
        "py": "Xībānyáyǔ",
        "type": "Danh từ",
        "vi": "tiếng Tây Ban Nha",
        "ex": [
          {
            "zh": "西班牙语在世界上很流行。",
            "py": "Xībānyáyǔ zài shìjiè shang hěn liúxíng.",
            "vi": "Tiếng Tây Ban Nha rất phổ biến trên thế giới."
          },
          {
            "zh": "我姐姐学西班牙语。",
            "py": "Wǒ jiějie xué Xībānyáyǔ.",
            "vi": "Chị gái tôi học tiếng Tây Ban Nha."
          },
          {
            "zh": "她学了两年西班牙语。",
            "py": "Tā xué le liǎng nián Xībānyáyǔ.",
            "vi": "Cô ấy học tiếng Tây Ban Nha được 2 năm."
          },
          {
            "zh": "我们学西班牙语。",
            "py": "Wǒmen xué Xībānyáyǔ.",
            "vi": "Chúng tôi học tiếng Tây Ban Nha."
          },
          {
            "zh": "西班牙语很好听。",
            "py": "Xībānyáyǔ hěn hǎotīng.",
            "vi": "Tiếng Tây Ban Nha rất hay/dễ nghe."
          },
          {
            "zh": "他的西班牙语很好。",
            "py": "Tā de Xībānyáyǔ hěn hǎo.",
            "vi": "Tiếng Tây Ban Nha của anh ấy rất tốt."
          },
          {
            "zh": "西班牙语的发音不难。",
            "py": "Xībānyáyǔ de fāyīn bù nán.",
            "vi": "Phát âm tiếng Tây Ban Nha không khó."
          },
          {
            "zh": "我同学在学西班牙语。",
            "py": "Wǒ tóngxué zài xué Xībānyáyǔ.",
            "vi": "Bạn học của tôi đang học tiếng Tây Ban Nha."
          },
          {
            "zh": "这是一本西班牙语词典。",
            "py": "Zhè shì yì běn Xībānyáyǔ cídiǎn.",
            "vi": "Đây là một quyển từ điển tiếng Tây Ban Nha."
          },
          {
            "zh": "你觉得西班牙语有意思吗？",
            "py": "Nǐ juéde Xībānyáyǔ yǒu yìsi ma?",
            "vi": "Bạn có thấy tiếng Tây Ban Nha thú vị không?"
          }
        ]
      },
      {
        "zh": "对",
        "py": "duì",
        "type": "Tính từ",
        "vi": "đúng, được",
        "ex": [
          {
            "zh": "你说得对！",
            "py": "Nǐ shuō de duì!",
            "vi": "Bạn nói đúng rồi!"
          },
          {
            "zh": "对，我们明天去北京。",
            "py": "Duì, wǒmen míngtiān qù Běijīng.",
            "vi": "Đúng, ngày mai chúng ta đi Bắc Kinh."
          },
          {
            "zh": "对，我明天去北京。",
            "py": "Duì, wǒ míngtiān qù Běijīng.",
            "vi": "Đúng, ngày mai tôi đi Bắc Kinh."
          },
          {
            "zh": "这道题对吗？",
            "py": "Zhè dào tí duì ma?",
            "vi": "Bài này đúng không?"
          },
          {
            "zh": "你写的都对。",
            "py": "Nǐ xiě de dōu duì.",
            "vi": "Bạn viết đều đúng hết."
          },
          {
            "zh": "对，我是越南人。",
            "py": "Duì, wǒ shì Yuènán rén.",
            "vi": "Đúng, tôi là người Việt Nam."
          },
          {
            "zh": "你说的对。",
            "py": "Nǐ shuō de duì.",
            "vi": "Bạn nói đúng."
          },
          {
            "zh": "这个字写对了吗？",
            "py": "Zhège zì xiě duì le ma?",
            "vi": "Chữ này viết đúng chưa?"
          },
          {
            "zh": "对，这是我的箱子。",
            "py": "Duì, zhè shì wǒ de xiāngzi.",
            "vi": "Đúng, đây là vali của tôi."
          },
          {
            "zh": "不对，今天是星期三。",
            "py": "Bú duì, jīntiān shì xīngqīsān.",
            "vi": "Không đúng, hôm nay là thứ Tư."
          }
        ]
      },
      {
        "zh": "见",
        "py": "jiàn",
        "type": "Động từ",
        "vi": "gặp, thấy",
        "ex": [
          {
            "zh": "我明天见我哥哥。",
            "py": "Wǒ míngtiān jiàn wǒ gēge.",
            "vi": "Ngày mai tôi gặp anh trai tôi."
          },
          {
            "zh": "我在银行见他。",
            "py": "Wǒ zài yínháng jiàn tā.",
            "vi": "Tôi gặp anh ấy ở ngân hàng."
          },
          {
            "zh": "很高兴见到你。",
            "py": "Hěn gāoxìng jiàn dào nǐ.",
            "vi": "Rất vui được gặp bạn."
          },
          {
            "zh": "我们什么时候见面？",
            "py": "Wǒmen shénme shíhou jiànmiàn?",
            "vi": "Chúng ta gặp nhau lúc nào?"
          },
          {
            "zh": "我们在邮局见。",
            "py": "Wǒmen zài yóujú jiàn.",
            "vi": "Chúng ta gặp nhau ở bưu điện."
          },
          {
            "zh": "我们明天下午见。",
            "py": "Wǒmen míngtiān xiàwǔ jiàn.",
            "vi": "Chiều mai chúng ta gặp nhau."
          },
          {
            "zh": "星期五见！",
            "py": "Xīngqīwǔ jiàn!",
            "vi": "Thứ Sáu gặp lại!"
          },
          {
            "zh": "我们在商场门口见。",
            "py": "Wǒmen zài shāngchǎng ménkǒu jiàn.",
            "vi": "Chúng ta gặp nhau ở cổng trung tâm thương mại."
          },
          {
            "zh": "晚上见！",
            "py": "Wǎnshang jiàn!",
            "vi": "Tối gặp nhé!"
          },
          {
            "zh": "我想见一下儿经理。",
            "py": "Wǒ xiǎng jiàn yíxiàr jīnglǐ.",
            "vi": "Tôi muốn gặp giám đốc một chút."
          }
        ]
      },
      {
        "zh": "再见",
        "py": "zàijiàn",
        "type": "Cụm từ",
        "vi": "tạm biệt",
        "ex": [
          {
            "zh": "再见，明天见！",
            "py": "Zàijiàn, míngtiān jiàn!",
            "vi": "Tạm biệt, ngày mai gặp lại!"
          },
          {
            "zh": "爸爸，再见！",
            "py": "Bàba, zàijiàn!",
            "vi": "Bố ơi, tạm biệt!"
          },
          {
            "zh": "老师再见！",
            "py": "Lǎoshī zàijiàn!",
            "vi": "Tạm biệt thầy/cô!"
          },
          {
            "zh": "再见，保重！",
            "py": "Zàijiàn, bǎozhòng!",
            "vi": "Tạm biệt, bảo trọng!"
          },
          {
            "zh": "经理，再见！",
            "py": "Jīnglǐ, zàijiàn!",
            "vi": "Tạm biệt giám đốc!"
          },
          {
            "zh": "吴老师，再见！",
            "py": "Wú lǎoshī, zàijiàn!",
            "vi": "Tạm biệt cô Ngô!"
          },
          {
            "zh": "阿姨，再见！",
            "py": "Āyí, zàijiàn!",
            "vi": "Tạm biệt cô!"
          },
          {
            "zh": "我们说再见吧。",
            "py": "Wǒmen shuō zàijiàn ba.",
            "vi": "Chúng ta chào tạm biệt thôi."
          },
          {
            "zh": "同学们，再见！",
            "py": "Tóngxuémen, zàijiàn!",
            "vi": "Tạm biệt các bạn!"
          },
          {
            "zh": "他跟我说了再见。",
            "py": "Tā gēn wǒ shuōle zàijiàn.",
            "vi": "Anh ấy đã chào tạm biệt tôi."
          }
        ]
      },
      {
        "zh": "明天",
        "py": "míngtiān",
        "type": "Danh từ",
        "vi": "ngày mai",
        "ex": [
          {
            "zh": "明天我们去公园吧！",
            "py": "Míngtiān wǒmen qù gōngyuán ba!",
            "vi": "Ngày mai chúng ta đi công viên nhé!"
          },
          {
            "zh": "明天是星期一。",
            "py": "Míngtiān shì xīngqī yī.",
            "vi": "Ngày mai là thứ Hai."
          },
          {
            "zh": "我明天去北京。",
            "py": "Wǒ míngtiān qù Běijīng.",
            "vi": "Ngày mai tôi đi Bắc Kinh."
          },
          {
            "zh": "明天见！",
            "py": "Míngtiān jiàn!",
            "vi": "Ngày mai gặp lại!"
          },
          {
            "zh": "明天有没有课？",
            "py": "Míngtiān yǒu méiyǒu kè?",
            "vi": "Ngày mai có lớp học không?"
          },
          {
            "zh": "明天是我的生日。",
            "py": "Míngtiān shì wǒ de shēngrì.",
            "vi": "Ngày mai là sinh nhật tôi."
          },
          {
            "zh": "明天我不上班。",
            "py": "Míngtiān wǒ bú shàngbān.",
            "vi": "Ngày mai tôi không đi làm."
          },
          {
            "zh": "明天冷不冷？",
            "py": "Míngtiān lěng bu lěng?",
            "vi": "Ngày mai có lạnh không?"
          },
          {
            "zh": "明天早上我坐高铁去北京。",
            "py": "Míngtiān zǎoshang wǒ zuò gāotiě qù Běijīng.",
            "vi": "Sáng mai tôi đi tàu cao tốc đến Bắc Kinh."
          },
          {
            "zh": "明天我们去医院看奶奶。",
            "py": "Míngtiān wǒmen qù yīyuàn kàn nǎinai.",
            "vi": "Ngày mai chúng tôi vào bệnh viện thăm bà."
          }
        ]
      },
      {
        "zh": "去",
        "py": "qù",
        "type": "Động từ",
        "vi": "đi, đến",
        "ex": [
          {
            "zh": "我去北京。",
            "py": "Wǒ qù Běijīng.",
            "vi": "Tôi đi Bắc Kinh."
          },
          {
            "zh": "明天我去邮局。",
            "py": "Míngtiān wǒ qù yóujú.",
            "vi": "Ngày mai tôi đi bưu điện."
          },
          {
            "zh": "我去学校上课。",
            "py": "Wǒ qù xuéxiào shàngkè.",
            "vi": "Tôi đi trường học."
          },
          {
            "zh": "我们一起去吧。",
            "py": "Wǒmen yīqǐ qù ba.",
            "vi": "Chúng ta cùng đi nhé."
          },
          {
            "zh": "他去银行取钱。",
            "py": "Tā qù yínháng qǔ qián.",
            "vi": "Anh ấy đi ngân hàng rút tiền."
          },
          {
            "zh": "我下午去邮局寄信。",
            "py": "Wǒ xiàwǔ qù yóujú jì xìn.",
            "vi": "Chiều tôi đi bưu điện gửi thư."
          },
          {
            "zh": "你周末去哪儿？",
            "py": "Nǐ zhōumò qù nǎr?",
            "vi": "Cuối tuần bạn đi đâu?"
          },
          {
            "zh": "我们坐出租车去酒店。",
            "py": "Wǒmen zuò chūzūchē qù jiǔdiàn.",
            "vi": "Chúng tôi đi taxi đến khách sạn."
          },
          {
            "zh": "他不想去医院。",
            "py": "Tā bù xiǎng qù yīyuàn.",
            "vi": "Anh ấy không muốn đi bệnh viện."
          },
          {
            "zh": "明天你去不去商场？",
            "py": "Míngtiān nǐ qù bu qù shāngchǎng?",
            "vi": "Ngày mai bạn có đi trung tâm thương mại không?"
          }
        ]
      },
      {
        "zh": "银行",
        "py": "yínháng",
        "type": "Danh từ",
        "vi": "ngân hàng",
        "ex": [
          {
            "zh": "银行很大。",
            "py": "Yínháng hěn dà.",
            "vi": "Ngân hàng rất lớn."
          },
          {
            "zh": "银行在哪里？",
            "py": "Yínháng zài nǎlǐ?",
            "vi": "Ngân hàng ở đâu?"
          },
          {
            "zh": "我明天去银行。",
            "py": "Wǒ míngtiān qù yínháng.",
            "vi": "Ngày mai tôi đi ngân hàng."
          },
          {
            "zh": "这家银行几点开门？",
            "py": "Zhè jiā yínháng jǐ diǎn kāimén?",
            "vi": "Ngân hàng này mấy giờ mở cửa?"
          },
          {
            "zh": "我哥哥在银行取钱。",
            "py": "Wǒ gēge zài yínháng qǔ qián.",
            "vi": "Anh trai tôi rút tiền ở ngân hàng."
          },
          {
            "zh": "银行几点开门？",
            "py": "Yínháng jǐ diǎn kāimén?",
            "vi": "Ngân hàng mấy giờ mở cửa?"
          },
          {
            "zh": "我去银行换钱。",
            "py": "Wǒ qù yínháng huàn qián.",
            "vi": "Tôi đi ngân hàng đổi tiền."
          },
          {
            "zh": "她姐姐是银行职员。",
            "py": "Tā jiějie shì yínháng zhíyuán.",
            "vi": "Chị cô ấy là nhân viên ngân hàng."
          },
          {
            "zh": "银行星期天不开门。",
            "py": "Yínháng xīngqītiān bù kāimén.",
            "vi": "Ngân hàng không mở cửa ngày Chủ nhật."
          },
          {
            "zh": "中国银行在哪儿？",
            "py": "Zhōngguó Yínháng zài nǎr?",
            "vi": "Ngân hàng Trung Quốc ở đâu?"
          }
        ]
      },
      {
        "zh": "邮局",
        "py": "yóujú",
        "type": "Danh từ",
        "vi": "bưu điện",
        "ex": [
          {
            "zh": "我去邮局寄信。",
            "py": "Wǒ qù yóujú jì xìn.",
            "vi": "Tôi đến bưu điện gửi thư."
          },
          {
            "zh": "邮局在学校旁边。",
            "py": "Yóujú zài xuéxiào pángbiān.",
            "vi": "Bưu điện ở cạnh trường học."
          },
          {
            "zh": "邮局不太大。",
            "py": "Yóujú bú tài dà.",
            "vi": "Bưu điện không lớn lắm."
          },
          {
            "zh": "请问邮局怎么走？",
            "py": "Qǐngwèn yóujú zěnme zǒu?",
            "vi": "Xin hỏi đi bưu điện như thế nào?"
          },
          {
            "zh": "我明天去邮局寄信。",
            "py": "Wǒ míngtiān qù yóujú jì xìn.",
            "vi": "Ngày mai tôi đi bưu điện gửi thư."
          },
          {
            "zh": "我去邮局寄东西。",
            "py": "Wǒ qù yóujú jì dōngxi.",
            "vi": "Tôi đến bưu điện gửi đồ."
          },
          {
            "zh": "邮局里人不多。",
            "py": "Yóujú lǐ rén bù duō.",
            "vi": "Trong bưu điện không đông người."
          },
          {
            "zh": "她在邮局工作。",
            "py": "Tā zài yóujú gōngzuò.",
            "vi": "Cô ấy làm việc ở bưu điện."
          },
          {
            "zh": "邮局星期六开门吗？",
            "py": "Yóujú xīngqīliù kāimén ma?",
            "vi": "Bưu điện có mở cửa thứ Bảy không?"
          },
          {
            "zh": "我们学校里有邮局。",
            "py": "Wǒmen xuéxiào lǐ yǒu yóujú.",
            "vi": "Trong trường chúng tôi có bưu điện."
          }
        ]
      },
      {
        "zh": "取",
        "py": "qǔ",
        "type": "Động từ",
        "vi": "rút (tiền), lấy",
        "ex": [
          {
            "zh": "我去银行取钱。",
            "py": "Wǒ qù yínháng qǔ qián.",
            "vi": "Tôi đến ngân hàng rút tiền."
          },
          {
            "zh": "明天我取钱。",
            "py": "Míngtiān wǒ qǔ qián.",
            "vi": "Ngày mai tôi rút tiền."
          },
          {
            "zh": "你取了多少钱？",
            "py": "Nǐ qǔ le duōshao qián?",
            "vi": "Bạn rút bao nhiêu tiền?"
          },
          {
            "zh": "去邮局取包裹。",
            "py": "Qù yóujú qǔ bāoguǒ.",
            "vi": "Đi bưu điện nhận bưu kiện."
          },
          {
            "zh": "我去邮局取信。",
            "py": "Wǒ qù yóujú qǔ xìn.",
            "vi": "Tôi đến bưu điện lấy thư."
          },
          {
            "zh": "我想取五百块钱。",
            "py": "Wǒ xiǎng qǔ wǔbǎi kuài qián.",
            "vi": "Tôi muốn rút năm trăm đồng."
          },
          {
            "zh": "下午我去邮局取东西。",
            "py": "Xiàwǔ wǒ qù yóujú qǔ dōngxi.",
            "vi": "Chiều tôi đến bưu điện lấy đồ."
          },
          {
            "zh": "你取多少钱？",
            "py": "Nǐ qǔ duōshao qián?",
            "vi": "Bạn rút bao nhiêu tiền?"
          },
          {
            "zh": "他去医院取药。",
            "py": "Tā qù yīyuàn qǔ yào.",
            "vi": "Anh ấy đến bệnh viện lấy thuốc."
          },
          {
            "zh": "明天我去取照片。",
            "py": "Míngtiān wǒ qù qǔ zhàopiàn.",
            "vi": "Ngày mai tôi đi lấy ảnh."
          }
        ]
      },
      {
        "zh": "钱",
        "py": "qián",
        "type": "Danh từ",
        "vi": "tiền",
        "ex": [
          {
            "zh": "你有多少钱？",
            "py": "Nǐ yǒu duōshao qián?",
            "vi": "Bạn có bao nhiêu tiền?"
          },
          {
            "zh": "我去取钱。",
            "py": "Wǒ qù qǔ qián.",
            "vi": "Tôi đi rút tiền."
          },
          {
            "zh": "这个东西要多少钱？",
            "py": "Zhège dōngxi yào duōshao qián?",
            "vi": "Món này cần bao nhiêu tiền?"
          },
          {
            "zh": "我没有钱了。",
            "py": "Wǒ méiyǒu qián le.",
            "vi": "Tôi hết tiền rồi."
          },
          {
            "zh": "请给我找钱。",
            "py": "Qǐng gěi wǒ zhǎo qián.",
            "vi": "Làm ơn thối tiền cho tôi."
          },
          {
            "zh": "这件衬衣多少钱？",
            "py": "Zhè jiàn chènyī duōshao qián?",
            "vi": "Chiếc áo sơ mi này bao nhiêu tiền?"
          },
          {
            "zh": "我的钱不多了。",
            "py": "Wǒ de qián bù duō le.",
            "vi": "Tiền của tôi không còn nhiều nữa."
          },
          {
            "zh": "给你钱。",
            "py": "Gěi nǐ qián.",
            "vi": "Gửi bạn tiền."
          },
          {
            "zh": "他的钱都在银行里。",
            "py": "Tā de qián dōu zài yínháng lǐ.",
            "vi": "Tiền của anh ấy đều ở trong ngân hàng."
          },
          {
            "zh": "坐出租车要多少钱？",
            "py": "Zuò chūzūchē yào duōshao qián?",
            "vi": "Đi taxi mất bao nhiêu tiền?"
          }
        ]
      },
      {
        "zh": "寄",
        "py": "jì",
        "type": "Động từ",
        "vi": "gửi",
        "ex": [
          {
            "zh": "我要寄这封信给朋友。",
            "py": "Wǒ yào jì zhè fēng xìn gěi péngyou.",
            "vi": "Tôi muốn gửi lá thư này cho bạn."
          },
          {
            "zh": "我想寄一封信。",
            "py": "Wǒ xiǎng jì yī fēng xìn.",
            "vi": "Tôi muốn gửi một bức thư."
          },
          {
            "zh": "你寄给我的包收到了。",
            "py": "Nǐ jì gěi wǒ de bāo shōudào le.",
            "vi": "Tôi đã nhận được gói hàng bạn gửi."
          },
          {
            "zh": "寄这个包裹要多少钱？",
            "py": "Jì zhège bāoguǒ yào duōshao qián?",
            "vi": "Gửi gói này tốn bao nhiêu tiền?"
          },
          {
            "zh": "我明天寄信。",
            "py": "Wǒ míngtiān jì xìn.",
            "vi": "Ngày mai tôi gửi thư."
          },
          {
            "zh": "我想给妈妈寄一件毛衣。",
            "py": "Wǒ xiǎng gěi māma jì yí jiàn máoyī.",
            "vi": "Tôi muốn gửi cho mẹ một chiếc áo len."
          },
          {
            "zh": "你去邮局寄什么？",
            "py": "Nǐ qù yóujú jì shénme?",
            "vi": "Bạn đến bưu điện gửi gì?"
          },
          {
            "zh": "他给朋友寄了一本书。",
            "py": "Tā gěi péngyou jìle yì běn shū.",
            "vi": "Anh ấy gửi cho bạn một quyển sách."
          },
          {
            "zh": "寄这个箱子多少钱？",
            "py": "Jì zhège xiāngzi duōshao qián?",
            "vi": "Gửi cái vali này bao nhiêu tiền?"
          },
          {
            "zh": "我给奶奶寄了一些茶叶。",
            "py": "Wǒ gěi nǎinai jìle yìxiē cháyè.",
            "vi": "Tôi gửi cho bà một ít lá trà."
          }
        ]
      },
      {
        "zh": "信",
        "py": "xìn",
        "type": "Danh từ",
        "vi": "thư, lá thư",
        "ex": [
          {
            "zh": "我给家人写信。",
            "py": "Wǒ gěi jiārén xiě xìn.",
            "vi": "Tôi viết thư cho người thân."
          },
          {
            "zh": "我收到了一封信。",
            "py": "Wǒ shōudào le yī fēng xìn.",
            "vi": "Tôi nhận được một bức thư."
          },
          {
            "zh": "你给我写信吧。",
            "py": "Nǐ gěi wǒ xiě xìn ba.",
            "vi": "Bạn viết thư cho tôi nhé."
          },
          {
            "zh": "这封信是从中国来的。",
            "py": "Zhè fēng xìn shì cóng Zhōngguó lái de.",
            "vi": "Bức thư này đến từ Trung Quốc."
          },
          {
            "zh": "这是我的信。",
            "py": "Zhè shì wǒ de xìn.",
            "vi": "Đây là thư của tôi."
          },
          {
            "zh": "我给爸爸写信。",
            "py": "Wǒ gěi bàba xiě xìn.",
            "vi": "Tôi viết thư cho bố."
          },
          {
            "zh": "这是谁的信？",
            "py": "Zhè shì shéi de xìn?",
            "vi": "Đây là thư của ai?"
          },
          {
            "zh": "她喜欢用中文写信。",
            "py": "Tā xǐhuan yòng Zhōngwén xiě xìn.",
            "vi": "Cô ấy thích dùng tiếng Trung viết thư."
          },
          {
            "zh": "我的信在箱子里。",
            "py": "Wǒ de xìn zài xiāngzi lǐ.",
            "vi": "Thư của tôi ở trong vali."
          },
          {
            "zh": "他去邮局寄信了。",
            "py": "Tā qù yóujú jì xìn le.",
            "vi": "Anh ấy đi bưu điện gửi thư rồi."
          }
        ]
      },
      {
        "zh": "北京",
        "py": "Běijīng",
        "type": "Danh từ",
        "vi": "Bắc Kinh",
        "ex": [
          {
            "zh": "我想去北京旅游。",
            "py": "Wǒ xiǎng qù Běijīng lǚyóu.",
            "vi": "Tôi muốn đi du lịch Bắc Kinh."
          },
          {
            "zh": "我哥哥在北京学汉语。",
            "py": "Wǒ gēge zài Běijīng xué Hànyǔ.",
            "vi": "Anh trai tôi học tiếng Trung ở Bắc Kinh."
          },
          {
            "zh": "北京是中国的首都。",
            "py": "Běijīng shì Zhōngguó de shǒudū.",
            "vi": "Bắc Kinh là thủ đô của Trung Quốc."
          },
          {
            "zh": "他在北京学汉语。",
            "py": "Tā zài Běijīng xué Hànyǔ.",
            "vi": "Anh ấy học tiếng Trung ở Bắc Kinh."
          },
          {
            "zh": "北京的烤鸭很好吃。",
            "py": "Běijīng de kǎoyā hěn hǎochī.",
            "vi": "Vịt quay Bắc Kinh rất ngon."
          },
          {
            "zh": "北京有很多大学。",
            "py": "Běijīng yǒu hěn duō dàxué.",
            "vi": "Bắc Kinh có rất nhiều trường đại học."
          },
          {
            "zh": "我的同屋是北京人。",
            "py": "Wǒ de tóngwū shì Běijīng rén.",
            "vi": "Bạn cùng phòng của tôi là người Bắc Kinh."
          },
          {
            "zh": "他在北京语言大学学习。",
            "py": "Tā zài Běijīng Yǔyán Dàxué xuéxí.",
            "vi": "Anh ấy học ở Đại học Ngôn ngữ Bắc Kinh."
          },
          {
            "zh": "北京冷不冷？",
            "py": "Běijīng lěng bu lěng?",
            "vi": "Bắc Kinh có lạnh không?"
          },
          {
            "zh": "北京的商场很大。",
            "py": "Běijīng de shāngchǎng hěn dà.",
            "vi": "Trung tâm thương mại ở Bắc Kinh rất lớn."
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 4 (b4–b5): Ngày tháng & Thứ trong tuần",
    "words": [
      {
        "zh": "今天",
        "py": "jīntiān",
        "type": "Danh từ",
        "vi": "hôm nay",
        "ex": [
          {
            "zh": "今天是星期几？",
            "py": "Jīntiān shì xīngqī jǐ?",
            "vi": "Hôm nay là thứ mấy?"
          },
          {
            "zh": "今天你忙吗？",
            "py": "Jīntiān nǐ máng ma?",
            "vi": "Hôm nay bạn bận không?"
          },
          {
            "zh": "今天天气很好。",
            "py": "Jīntiān tiānqì hěn hǎo.",
            "vi": "Hôm nay thời tiết rất đẹp."
          },
          {
            "zh": "今天我很忙。",
            "py": "Jīntiān wǒ hěn máng.",
            "vi": "Hôm nay tôi rất bận."
          },
          {
            "zh": "今天是我的生日。",
            "py": "Jīntiān shì wǒ de shēngrì.",
            "vi": "Hôm nay là sinh nhật của tôi."
          },
          {
            "zh": "今天我们吃饺子吧。",
            "py": "Jīntiān wǒmen chī jiǎozi ba.",
            "vi": "Hôm nay chúng ta ăn sủi cảo nhé."
          },
          {
            "zh": "今天下午我去医院看病。",
            "py": "Jīntiān xiàwǔ wǒ qù yīyuàn kànbìng.",
            "vi": "Chiều nay tôi đi bệnh viện khám bệnh."
          },
          {
            "zh": "今天商场人很多。",
            "py": "Jīntiān shāngchǎng rén hěn duō.",
            "vi": "Hôm nay trung tâm thương mại rất đông người."
          },
          {
            "zh": "今天的面条很好吃。",
            "py": "Jīntiān de miàntiáo hěn hǎochī.",
            "vi": "Mì hôm nay rất ngon."
          },
          {
            "zh": "今天有点儿冷。",
            "py": "Jīntiān yǒudiǎnr lěng.",
            "vi": "Hôm nay hơi lạnh."
          }
        ]
      },
      {
        "zh": "昨天",
        "py": "zuótiān",
        "type": "Danh từ",
        "vi": "hôm qua",
        "ex": [
          {
            "zh": "昨天我去了银行。",
            "py": "Zuótiān wǒ qù le yínháng.",
            "vi": "Hôm qua tôi đã đến ngân hàng."
          },
          {
            "zh": "昨天你去哪儿了？",
            "py": "Zuótiān nǐ qù nǎr le?",
            "vi": "Hôm qua bạn đi đâu vậy?"
          },
          {
            "zh": "昨天我没有上课。",
            "py": "Zuótiān wǒ méiyǒu shàngkè.",
            "vi": "Hôm qua tôi không có đi học."
          },
          {
            "zh": "昨天下雨了。",
            "py": "Zuótiān xià yǔ le.",
            "vi": "Hôm qua trời mưa rồi."
          },
          {
            "zh": "昨天我去银行。",
            "py": "Zuótiān wǒ qù yínháng.",
            "vi": "Hôm qua tôi đi ngân hàng."
          },
          {
            "zh": "昨天我去邮局寄信了。",
            "py": "Zuótiān wǒ qù yóujú jì xìn le.",
            "vi": "Hôm qua tôi đi bưu điện gửi thư."
          },
          {
            "zh": "昨天是星期天。",
            "py": "Zuótiān shì xīngqītiān.",
            "vi": "Hôm qua là Chủ nhật."
          },
          {
            "zh": "昨天的饺子很好吃。",
            "py": "Zuótiān de jiǎozi hěn hǎochī.",
            "vi": "Sủi cảo hôm qua rất ngon."
          },
          {
            "zh": "昨天他没上班。",
            "py": "Zuótiān tā méi shàngbān.",
            "vi": "Hôm qua anh ấy không đi làm."
          },
          {
            "zh": "昨天我买了一件衬衣。",
            "py": "Zuótiān wǒ mǎile yí jiàn chènyī.",
            "vi": "Hôm qua tôi mua một chiếc áo sơ mi."
          }
        ]
      },
      {
        "zh": "星期",
        "py": "xīngqī",
        "type": "Danh từ",
        "vi": "tuần; thứ (trong tuần)",
        "ex": [
          {
            "zh": "一个星期有七天。",
            "py": "Yī gè xīngqī yǒu qī tiān.",
            "vi": "Một tuần có bảy ngày."
          },
          {
            "zh": "这个星期你有空吗？",
            "py": "Zhège xīngqī nǐ yǒu kòng ma?",
            "vi": "Tuần này bạn có rảnh không?"
          },
          {
            "zh": "这星期我去北京。",
            "py": "Zhè xīngqī wǒ qù Běijīng.",
            "vi": "Tuần này tôi đi Bắc Kinh."
          },
          {
            "zh": "下个星期见。",
            "py": "Xià gè xīngqī jiàn.",
            "vi": "Tuần sau gặp lại."
          },
          {
            "zh": "这个星期我很忙。",
            "py": "Zhège xīngqī wǒ hěn máng.",
            "vi": "Tuần này tôi rất bận."
          },
          {
            "zh": "这个星期他回国了。",
            "py": "Zhège xīngqī tā huí guó le.",
            "vi": "Tuần này anh ấy về nước rồi."
          },
          {
            "zh": "下个星期我们去旅游。",
            "py": "Xià ge xīngqī wǒmen qù lǚyóu.",
            "vi": "Tuần sau chúng tôi đi du lịch."
          },
          {
            "zh": "你星期几去医院？",
            "py": "Nǐ xīngqī jǐ qù yīyuàn?",
            "vi": "Bạn đi bệnh viện vào thứ mấy?"
          },
          {
            "zh": "他上个星期去了北京。",
            "py": "Tā shàng ge xīngqī qùle Běijīng.",
            "vi": "Tuần trước anh ấy đã đi Bắc Kinh."
          },
          {
            "zh": "这个星期天是我的生日。",
            "py": "Zhège xīngqītiān shì wǒ de shēngrì.",
            "vi": "Chủ nhật tuần này là sinh nhật tôi."
          }
        ]
      },
      {
        "zh": "星期一",
        "py": "xīngqīyī",
        "type": "Danh từ",
        "vi": "thứ Hai",
        "ex": [
          {
            "zh": "星期一我有汉语课。",
            "py": "Xīngqīyī wǒ yǒu Hànyǔ kè.",
            "vi": "Thứ Hai tôi có tiết học tiếng Hán."
          },
          {
            "zh": "星期一我们有汉语课。",
            "py": "Xīngqī yī wǒmen yǒu Hànyǔ kè.",
            "vi": "Thứ Hai chúng tôi có tiết tiếng Trung."
          },
          {
            "zh": "星期一去上班。",
            "py": "Xīngqī yī qù shàngbān.",
            "vi": "Thứ Hai đi làm."
          },
          {
            "zh": "星期一我去学校。",
            "py": "Xīngqīyī wǒ qù xuéxiào.",
            "vi": "Thứ hai tôi đến trường."
          },
          {
            "zh": "星期一见！",
            "py": "Xīngqīyī jiàn!",
            "vi": "Hẹn gặp lại thứ hai!"
          },
          {
            "zh": "星期一早上我很忙。",
            "py": "Xīngqīyī zǎoshang wǒ hěn máng.",
            "vi": "Sáng thứ Hai tôi rất bận."
          },
          {
            "zh": "星期一图书馆开门吗？",
            "py": "Xīngqīyī túshūguǎn kāimén ma?",
            "vi": "Thứ Hai thư viện có mở cửa không?"
          },
          {
            "zh": "他星期一去银行。",
            "py": "Tā xīngqīyī qù yínháng.",
            "vi": "Thứ Hai anh ấy đi ngân hàng."
          },
          {
            "zh": "星期一我坐地铁上班。",
            "py": "Xīngqīyī wǒ zuò dìtiě shàngbān.",
            "vi": "Thứ Hai tôi đi tàu điện ngầm đi làm."
          },
          {
            "zh": "下个星期一开学。",
            "py": "Xià ge xīngqīyī kāixué.",
            "vi": "Thứ Hai tuần sau khai giảng."
          }
        ]
      },
      {
        "zh": "星期二",
        "py": "xīngqī'èr",
        "type": "Danh từ",
        "vi": "thứ Ba",
        "ex": [
          {
            "zh": "星期二我去图书馆。",
            "py": "Xīngqī'èr wǒ qù túshūguǎn.",
            "vi": "Thứ Ba tôi đến thư viện."
          },
          {
            "zh": "星期二下午有会议。",
            "py": "Xīngqī èr xiàwǔ yǒu huìyì.",
            "vi": "Chiều thứ Ba có cuộc họp."
          },
          {
            "zh": "我们星期二见面吧。",
            "py": "Wǒmen xīngqī èr jiànmiàn ba.",
            "vi": "Chúng ta gặp nhau vào thứ Ba nhé."
          },
          {
            "zh": "星期二我不忙。",
            "py": "Xīngqī'èr wǒ bù máng.",
            "vi": "Thứ ba tôi không bận."
          },
          {
            "zh": "我星期二寄信。",
            "py": "Wǒ xīngqī'èr jì xìn.",
            "vi": "Thứ ba tôi gửi thư."
          },
          {
            "zh": "星期二下午我去图书馆。",
            "py": "Xīngqī'èr xiàwǔ wǒ qù túshūguǎn.",
            "vi": "Chiều thứ Ba tôi đến thư viện."
          },
          {
            "zh": "星期二是几号？",
            "py": "Xīngqī'èr shì jǐ hào?",
            "vi": "Thứ Ba là ngày mấy?"
          },
          {
            "zh": "我们星期二见。",
            "py": "Wǒmen xīngqī'èr jiàn.",
            "vi": "Chúng ta gặp nhau thứ Ba nhé."
          },
          {
            "zh": "星期二经理不在办公室。",
            "py": "Xīngqī'èr jīnglǐ bú zài bàngōngshì.",
            "vi": "Thứ Ba giám đốc không ở văn phòng."
          },
          {
            "zh": "她星期二晚上做饭。",
            "py": "Tā xīngqī'èr wǎnshang zuòfàn.",
            "vi": "Tối thứ Ba cô ấy nấu cơm."
          }
        ]
      },
      {
        "zh": "星期三",
        "py": "xīngqīsān",
        "type": "Danh từ",
        "vi": "thứ Tư",
        "ex": [
          {
            "zh": "星期三我们有考试。",
            "py": "Xīngqīsān wǒmen yǒu kǎoshì.",
            "vi": "Thứ Tư chúng tôi có kỳ thi."
          },
          {
            "zh": "星期三是一周的中间。",
            "py": "Xīngqī sān shì yī zhōu de zhōngjiān.",
            "vi": "Thứ Tư là giữa tuần."
          },
          {
            "zh": "星期三有没有课？",
            "py": "Xīngqī sān yǒu méiyǒu kè?",
            "vi": "Thứ Tư có tiết học không?"
          },
          {
            "zh": "星期三我学日语。",
            "py": "Xīngqīsān wǒ xué Rìyǔ.",
            "vi": "Thứ tư tôi học tiếng Nhật."
          },
          {
            "zh": "星期三见，好吗？",
            "py": "Xīngqīsān jiàn, hǎo ma?",
            "vi": "Thứ tư gặp nhau nhé, được không?"
          },
          {
            "zh": "星期三我们去商场买东西。",
            "py": "Xīngqīsān wǒmen qù shāngchǎng mǎi dōngxi.",
            "vi": "Thứ Tư chúng tôi đi trung tâm thương mại mua đồ."
          },
          {
            "zh": "星期三你忙吗？",
            "py": "Xīngqīsān nǐ máng ma?",
            "vi": "Thứ Tư bạn có bận không?"
          },
          {
            "zh": "我星期三不上班。",
            "py": "Wǒ xīngqīsān bú shàngbān.",
            "vi": "Thứ Tư tôi không đi làm."
          },
          {
            "zh": "星期三下午有雨。",
            "py": "Xīngqīsān xiàwǔ yǒu yǔ.",
            "vi": "Chiều thứ Tư có mưa."
          },
          {
            "zh": "这个星期三是五号。",
            "py": "Zhège xīngqīsān shì wǔ hào.",
            "vi": "Thứ Tư tuần này là ngày 5."
          }
        ]
      },
      {
        "zh": "星期四",
        "py": "xīngqīsì",
        "type": "Danh từ",
        "vi": "thứ Năm",
        "ex": [
          {
            "zh": "星期四我休息。",
            "py": "Xīngqīsì wǒ xiūxi.",
            "vi": "Thứ Năm tôi nghỉ ngơi."
          },
          {
            "zh": "星期四我去医院。",
            "py": "Xīngqī sì wǒ qù yīyuàn.",
            "vi": "Thứ Năm tôi đi bệnh viện."
          },
          {
            "zh": "星期四见面怎么样？",
            "py": "Xīngqī sì jiànmiàn zěnmeyàng?",
            "vi": "Gặp nhau thứ Năm thì sao?"
          },
          {
            "zh": "星期四我去邮局。",
            "py": "Xīngqīsì wǒ qù yóujú.",
            "vi": "Thứ năm tôi đến bưu điện."
          },
          {
            "zh": "她星期四很忙。",
            "py": "Tā xīngqīsì hěn máng.",
            "vi": "Cô ấy thứ năm rất bận."
          },
          {
            "zh": "星期四晚上我们吃饺子。",
            "py": "Xīngqīsì wǎnshang wǒmen chī jiǎozi.",
            "vi": "Tối thứ Năm chúng tôi ăn sủi cảo."
          },
          {
            "zh": "他星期四回家。",
            "py": "Tā xīngqīsì huíjiā.",
            "vi": "Thứ Năm anh ấy về nhà."
          },
          {
            "zh": "星期四你去哪儿？",
            "py": "Xīngqīsì nǐ qù nǎr?",
            "vi": "Thứ Năm bạn đi đâu?"
          },
          {
            "zh": "星期四邮局开门。",
            "py": "Xīngqīsì yóujú kāimén.",
            "vi": "Thứ Năm bưu điện mở cửa."
          },
          {
            "zh": "星期四是我妈妈的生日。",
            "py": "Xīngqīsì shì wǒ māma de shēngrì.",
            "vi": "Thứ Năm là sinh nhật mẹ tôi."
          }
        ]
      },
      {
        "zh": "星期五",
        "py": "xīngqīwǔ",
        "type": "Danh từ",
        "vi": "thứ Sáu",
        "ex": [
          {
            "zh": "星期五下午我去看电影。",
            "py": "Xīngqīwǔ xiàwǔ wǒ qù kàn diànyǐng.",
            "vi": "Chiều thứ Sáu tôi đi xem phim."
          },
          {
            "zh": "星期五是最后一天上班。",
            "py": "Xīngqī wǔ shì zuìhòu yī tiān shàngbān.",
            "vi": "Thứ Sáu là ngày cuối đi làm."
          },
          {
            "zh": "星期五我们一起去吃饭吧。",
            "py": "Xīngqī wǔ wǒmen yīqǐ qù chīfàn ba.",
            "vi": "Thứ Sáu chúng ta cùng đi ăn nhé."
          },
          {
            "zh": "星期五我们见。",
            "py": "Xīngqīwǔ wǒmen jiàn.",
            "vi": "Thứ sáu chúng ta gặp nhau."
          },
          {
            "zh": "星期五太忙了。",
            "py": "Xīngqīwǔ tài máng le.",
            "vi": "Thứ sáu bận quá."
          },
          {
            "zh": "星期五晚上你想吃什么？",
            "py": "Xīngqīwǔ wǎnshang nǐ xiǎng chī shénme?",
            "vi": "Tối thứ Sáu bạn muốn ăn gì?"
          },
          {
            "zh": "他星期五坐高铁去北京。",
            "py": "Tā xīngqīwǔ zuò gāotiě qù Běijīng.",
            "vi": "Thứ Sáu anh ấy đi tàu cao tốc tới Bắc Kinh."
          },
          {
            "zh": "星期五我很累。",
            "py": "Xīngqīwǔ wǒ hěn lèi.",
            "vi": "Thứ Sáu tôi rất mệt."
          },
          {
            "zh": "星期五我们去酒店吃饭。",
            "py": "Xīngqīwǔ wǒmen qù jiǔdiàn chīfàn.",
            "vi": "Thứ Sáu chúng tôi đến khách sạn ăn cơm."
          },
          {
            "zh": "今天星期五吗？",
            "py": "Jīntiān xīngqīwǔ ma?",
            "vi": "Hôm nay là thứ Sáu à?"
          }
        ]
      },
      {
        "zh": "星期六",
        "py": "xīngqīliù",
        "type": "Danh từ",
        "vi": "thứ Bảy",
        "ex": [
          {
            "zh": "星期六我睡到很晚。",
            "py": "Xīngqīliù wǒ shuì dào hěn wǎn.",
            "vi": "Thứ Bảy tôi ngủ đến rất muộn."
          },
          {
            "zh": "星期六我去学汉语。",
            "py": "Xīngqī liù wǒ qù xué Hànyǔ.",
            "vi": "Thứ Bảy tôi đi học tiếng Trung."
          },
          {
            "zh": "星期六你有空吗？",
            "py": "Xīngqī liù nǐ yǒu kòng ma?",
            "vi": "Thứ Bảy bạn có rảnh không?"
          },
          {
            "zh": "星期六我不去学校。",
            "py": "Xīngqīliù wǒ bú qù xuéxiào.",
            "vi": "Thứ bảy tôi không đến trường."
          },
          {
            "zh": "星期六再见！",
            "py": "Xīngqīliù zàijiàn!",
            "vi": "Hẹn gặp lại thứ bảy!"
          },
          {
            "zh": "星期六你在家吗？",
            "py": "Xīngqīliù nǐ zài jiā ma?",
            "vi": "Thứ Bảy bạn có ở nhà không?"
          },
          {
            "zh": "星期六我们去爷爷家。",
            "py": "Xīngqīliù wǒmen qù yéye jiā.",
            "vi": "Thứ Bảy chúng tôi đến nhà ông nội."
          },
          {
            "zh": "星期六商场人很多。",
            "py": "Xīngqīliù shāngchǎng rén hěn duō.",
            "vi": "Thứ Bảy trung tâm thương mại rất đông."
          },
          {
            "zh": "星期六晚上我们喝啤酒。",
            "py": "Xīngqīliù wǎnshang wǒmen hē píjiǔ.",
            "vi": "Tối thứ Bảy chúng tôi uống bia."
          },
          {
            "zh": "这个星期六是几号？",
            "py": "Zhège xīngqīliù shì jǐ hào?",
            "vi": "Thứ Bảy tuần này là ngày mấy?"
          }
        ]
      },
      {
        "zh": "星期天",
        "py": "xīngqītiān",
        "type": "Danh từ",
        "vi": "Chủ nhật",
        "ex": [
          {
            "zh": "星期天我和朋友去玩。",
            "py": "Xīngqītiān wǒ hé péngyou qù wán.",
            "vi": "Chủ nhật tôi đi chơi với bạn bè."
          },
          {
            "zh": "星期天我在家休息。",
            "py": "Xīngqītiān wǒ zài jiā xiūxi.",
            "vi": "Chủ Nhật tôi ở nhà nghỉ ngơi."
          },
          {
            "zh": "星期天一起去逛街吗？",
            "py": "Xīngqītiān yīqǐ qù guàngjiē ma?",
            "vi": "Chủ Nhật cùng đi dạo phố không?"
          },
          {
            "zh": "星期天我很闲。",
            "py": "Xīngqītiān wǒ hěn xián.",
            "vi": "Chủ nhật tôi rất rảnh."
          },
          {
            "zh": "星期天不用去学校。",
            "py": "Xīngqītiān bú yòng qù xuéxiào.",
            "vi": "Chủ nhật không cần đến trường."
          },
          {
            "zh": "星期天我在家看书。",
            "py": "Xīngqītiān wǒ zài jiā kàn shū.",
            "vi": "Chủ nhật tôi ở nhà đọc sách."
          },
          {
            "zh": "星期天你想去哪儿？",
            "py": "Xīngqītiān nǐ xiǎng qù nǎr?",
            "vi": "Chủ nhật bạn muốn đi đâu?"
          },
          {
            "zh": "星期天我们去看爷爷奶奶。",
            "py": "Xīngqītiān wǒmen qù kàn yéye nǎinai.",
            "vi": "Chủ nhật chúng tôi đi thăm ông bà nội."
          },
          {
            "zh": "星期天早上我骑自行车。",
            "py": "Xīngqītiān zǎoshang wǒ qí zìxíngchē.",
            "vi": "Sáng Chủ nhật tôi đạp xe."
          },
          {
            "zh": "星期天妈妈做饺子。",
            "py": "Xīngqītiān māma zuò jiǎozi.",
            "vi": "Chủ nhật mẹ làm sủi cảo."
          }
        ]
      },
      {
        "zh": "周末",
        "py": "zhōumò",
        "type": "Danh từ",
        "vi": "cuối tuần",
        "ex": [
          {
            "zh": "周末你有什么计划？",
            "py": "Zhōumò nǐ yǒu shénme jìhuà?",
            "vi": "Cuối tuần bạn có kế hoạch gì không?"
          },
          {
            "zh": "周末你做什么？",
            "py": "Zhōumò nǐ zuò shénme?",
            "vi": "Cuối tuần bạn làm gì?"
          },
          {
            "zh": "这个周末我去旅游。",
            "py": "Zhège zhōumò wǒ qù lǚyóu.",
            "vi": "Cuối tuần này tôi đi du lịch."
          },
          {
            "zh": "周末愉快！",
            "py": "Zhōumò yúkuài!",
            "vi": "Cuối tuần vui vẻ!"
          },
          {
            "zh": "周末我不忙。",
            "py": "Zhōumò wǒ bù máng.",
            "vi": "Cuối tuần tôi không bận."
          },
          {
            "zh": "周末你在家吗？",
            "py": "Zhōumò nǐ zài jiā ma?",
            "vi": "Cuối tuần bạn có ở nhà không?"
          },
          {
            "zh": "周末我们去商场吧。",
            "py": "Zhōumò wǒmen qù shāngchǎng ba.",
            "vi": "Cuối tuần chúng ta đi trung tâm thương mại nhé."
          },
          {
            "zh": "周末银行开门吗？",
            "py": "Zhōumò yínháng kāimén ma?",
            "vi": "Cuối tuần ngân hàng có mở cửa không?"
          },
          {
            "zh": "周末我在家做饭。",
            "py": "Zhōumò wǒ zài jiā zuòfàn.",
            "vi": "Cuối tuần tôi ở nhà nấu cơm."
          },
          {
            "zh": "这个周末我很忙。",
            "py": "Zhège zhōumò wǒ hěn máng.",
            "vi": "Cuối tuần này tôi rất bận."
          }
        ]
      },
      {
        "zh": "几",
        "py": "jǐ",
        "type": "Đại từ",
        "vi": "mấy (số nhỏ dưới 10)",
        "ex": [
          {
            "zh": "昨天星期几？",
            "py": "Zuótiān xīngqī jǐ?",
            "vi": "Hôm qua thứ mấy?"
          },
          {
            "zh": "明天星期几？",
            "py": "Míngtiān xīngqī jǐ?",
            "vi": "Ngày mai thứ mấy?"
          },
          {
            "zh": "这几天我很忙。",
            "py": "Zhè jǐ tiān wǒ hěn máng.",
            "vi": "Mấy hôm nay tôi rất bận."
          },
          {
            "zh": "几点了？",
            "py": "Jǐ diǎn le?",
            "vi": "Mấy giờ rồi?"
          },
          {
            "zh": "你有几个朋友？",
            "py": "Nǐ yǒu jǐ gè péngyou?",
            "vi": "Bạn có mấy người bạn?"
          },
          {
            "zh": "你有几个孩子？",
            "py": "Nǐ yǒu jǐ ge háizi?",
            "vi": "Bạn có mấy đứa con?"
          },
          {
            "zh": "你早上几点上班？",
            "py": "Nǐ zǎoshang jǐ diǎn shàngbān?",
            "vi": "Buổi sáng bạn đi làm lúc mấy giờ?"
          },
          {
            "zh": "你要几瓶水？",
            "py": "Nǐ yào jǐ píng shuǐ?",
            "vi": "Bạn cần mấy chai nước?"
          },
          {
            "zh": "你的房间在几楼？",
            "py": "Nǐ de fángjiān zài jǐ lóu?",
            "vi": "Phòng của bạn ở tầng mấy?"
          },
          {
            "zh": "你买了几斤苹果？",
            "py": "Nǐ mǎile jǐ jīn píngguǒ?",
            "vi": "Bạn mua mấy cân táo?"
          }
        ]
      },
      {
        "zh": "哪儿",
        "py": "nǎr",
        "type": "Đại từ",
        "vi": "ở đâu, đâu",
        "ex": [
          {
            "zh": "你们在哪儿？",
            "py": "Nǐmen zài nǎr?",
            "vi": "Các bạn ở đâu?"
          },
          {
            "zh": "明天你去哪儿？",
            "py": "Míngtiān nǐ qù nǎr?",
            "vi": "Ngày mai bạn đi đâu?"
          },
          {
            "zh": "厕所在哪儿？",
            "py": "Cèsuǒ zài nǎr?",
            "vi": "Nhà vệ sinh ở đâu?"
          },
          {
            "zh": "你是哪儿的人？",
            "py": "Nǐ shì nǎr de rén?",
            "vi": "Bạn là người ở đâu?"
          },
          {
            "zh": "图书馆在哪儿？",
            "py": "Túshūguǎn zài nǎr?",
            "vi": "Thư viện ở đâu?"
          },
          {
            "zh": "你的箱子在哪儿？",
            "py": "Nǐ de xiāngzi zài nǎr?",
            "vi": "Vali của bạn ở đâu?"
          },
          {
            "zh": "请问，医院在哪儿？",
            "py": "Qǐngwèn, yīyuàn zài nǎr?",
            "vi": "Xin hỏi, bệnh viện ở đâu?"
          },
          {
            "zh": "你想去哪儿吃饭？",
            "py": "Nǐ xiǎng qù nǎr chīfàn?",
            "vi": "Bạn muốn đi đâu ăn cơm?"
          },
          {
            "zh": "你在哪儿买的衣服？",
            "py": "Nǐ zài nǎr mǎi de yīfu?",
            "vi": "Bạn mua quần áo ở đâu?"
          },
          {
            "zh": "你的同屋是哪儿人？",
            "py": "Nǐ de tóngwū shì nǎr rén?",
            "vi": "Bạn cùng phòng của bạn là người ở đâu?"
          }
        ]
      },
      {
        "zh": "那儿",
        "py": "nàr",
        "type": "Đại từ",
        "vi": "ở đó, ở kia",
        "ex": [
          {
            "zh": "老师在那儿。",
            "py": "Lǎoshī zài nàr.",
            "vi": "Thầy giáo ở đằng kia."
          },
          {
            "zh": "那儿有一家银行。",
            "py": "Nàr yǒu yī jiā yínháng.",
            "vi": "Ở đó có một ngân hàng."
          },
          {
            "zh": "你在那儿等我。",
            "py": "Nǐ zài nàr děng wǒ.",
            "vi": "Bạn đợi tôi ở đó."
          },
          {
            "zh": "那儿的东西很便宜。",
            "py": "Nàr de dōngxi hěn piányí.",
            "vi": "Đồ ở đó rất rẻ."
          },
          {
            "zh": "银行在那儿。",
            "py": "Yínháng zài nàr.",
            "vi": "Ngân hàng ở đằng kia."
          },
          {
            "zh": "那儿有一个商店。",
            "py": "Nàr yǒu yí ge shāngdiàn.",
            "vi": "Ở đằng kia có một cửa hàng."
          },
          {
            "zh": "我的车在那儿。",
            "py": "Wǒ de chē zài nàr.",
            "vi": "Xe của tôi ở đằng kia."
          },
          {
            "zh": "那儿的东西很贵。",
            "py": "Nàr de dōngxi hěn guì.",
            "vi": "Đồ ở đó rất đắt."
          },
          {
            "zh": "你去那儿做什么？",
            "py": "Nǐ qù nàr zuò shénme?",
            "vi": "Bạn đến đó làm gì?"
          },
          {
            "zh": "我朋友住在那儿。",
            "py": "Wǒ péngyou zhù zài nàr.",
            "vi": "Bạn tôi sống ở đó."
          }
        ]
      },
      {
        "zh": "这儿",
        "py": "zhèr",
        "type": "Đại từ",
        "vi": "ở đây",
        "ex": [
          {
            "zh": "请在这儿等我。",
            "py": "Qǐng zài zhèr děng wǒ.",
            "vi": "Xin hãy đợi tôi ở đây."
          },
          {
            "zh": "我就在这儿。",
            "py": "Wǒ jiù zài zhèr.",
            "vi": "Tôi đang ở đây."
          },
          {
            "zh": "请在这儿签名。",
            "py": "Qǐng zài zhèr qiānmíng.",
            "vi": "Làm ơn ký tên ở đây."
          },
          {
            "zh": "这儿离银行近吗？",
            "py": "Zhèr lí yínháng jìn ma?",
            "vi": "Chỗ này gần ngân hàng không?"
          },
          {
            "zh": "邮局在这儿。",
            "py": "Yóujú zài zhèr.",
            "vi": "Bưu điện ở đây."
          },
          {
            "zh": "这儿的咖啡很好喝。",
            "py": "Zhèr de kāfēi hěn hǎohē.",
            "vi": "Cà phê ở đây rất ngon."
          },
          {
            "zh": "请在这儿等一会儿。",
            "py": "Qǐng zài zhèr děng yíhuìr.",
            "vi": "Xin đợi ở đây một lát."
          },
          {
            "zh": "这儿是我的办公室。",
            "py": "Zhèr shì wǒ de bàngōngshì.",
            "vi": "Đây là văn phòng của tôi."
          },
          {
            "zh": "这儿有没有出租车？",
            "py": "Zhèr yǒu méiyǒu chūzūchē?",
            "vi": "Ở đây có taxi không?"
          },
          {
            "zh": "你的手机在这儿。",
            "py": "Nǐ de shǒujī zài zhèr.",
            "vi": "Điện thoại của bạn ở đây."
          }
        ]
      },
      {
        "zh": "回",
        "py": "huí",
        "type": "Động từ",
        "vi": "về, trở về",
        "ex": [
          {
            "zh": "我今天回学校。",
            "py": "Wǒ jīntiān huí xuéxiào.",
            "vi": "Hôm nay tôi về trường."
          },
          {
            "zh": "周末我回北京。",
            "py": "Zhōumò wǒ huí Běijīng.",
            "vi": "Cuối tuần tôi về Bắc Kinh."
          },
          {
            "zh": "你什么时候回来？",
            "py": "Nǐ shénme shíhou huílái?",
            "vi": "Bạn lúc nào về?"
          },
          {
            "zh": "明天我回越南。",
            "py": "Míngtiān wǒ huí Yuènán.",
            "vi": "Ngày mai tôi về Việt Nam."
          },
          {
            "zh": "他回学校取书。",
            "py": "Tā huí xuéxiào qǔ shū.",
            "vi": "Anh ấy về trường lấy sách."
          },
          {
            "zh": "他下个月回国。",
            "py": "Tā xià ge yuè huí guó.",
            "vi": "Tháng sau anh ấy về nước."
          },
          {
            "zh": "我们回学校吧。",
            "py": "Wǒmen huí xuéxiào ba.",
            "vi": "Chúng ta về trường thôi."
          },
          {
            "zh": "妈妈回公司了。",
            "py": "Māma huí gōngsī le.",
            "vi": "Mẹ đã về công ty rồi."
          },
          {
            "zh": "星期天我回河内。",
            "py": "Xīngqītiān wǒ huí Hénèi.",
            "vi": "Chủ nhật tôi về Hà Nội."
          },
          {
            "zh": "她回房间看书了。",
            "py": "Tā huí fángjiān kàn shū le.",
            "vi": "Cô ấy về phòng đọc sách rồi."
          }
        ]
      },
      {
        "zh": "学校",
        "py": "xuéxiào",
        "type": "Danh từ",
        "vi": "trường học",
        "ex": [
          {
            "zh": "我每天走路去学校。",
            "py": "Wǒ měitiān zǒulù qù xuéxiào.",
            "vi": "Tôi mỗi ngày đi bộ đến trường."
          },
          {
            "zh": "我们的学校很大。",
            "py": "Wǒmen de xuéxiào hěn dà.",
            "vi": "Trường học của chúng tôi rất lớn."
          },
          {
            "zh": "学校几点开门？",
            "py": "Xuéxiào jǐ diǎn kāimén?",
            "vi": "Trường mấy giờ mở cửa?"
          },
          {
            "zh": "我们学校很大。",
            "py": "Wǒmen xuéxiào hěn dà.",
            "vi": "Trường chúng tôi rất lớn."
          },
          {
            "zh": "学校旁边有邮局。",
            "py": "Xuéxiào pángbiān yǒu yóujú.",
            "vi": "Cạnh trường có bưu điện."
          },
          {
            "zh": "我们学校有很多留学生。",
            "py": "Wǒmen xuéxiào yǒu hěn duō liúxuéshēng.",
            "vi": "Trường chúng tôi có nhiều lưu học sinh."
          },
          {
            "zh": "学校里有一个食堂。",
            "py": "Xuéxiào lǐ yǒu yí ge shítáng.",
            "vi": "Trong trường có một nhà ăn."
          },
          {
            "zh": "你怎么去学校？",
            "py": "Nǐ zěnme qù xuéxiào?",
            "vi": "Bạn đến trường bằng cách nào?"
          },
          {
            "zh": "学校的图书馆星期天开门。",
            "py": "Xuéxiào de túshūguǎn xīngqītiān kāimén.",
            "vi": "Thư viện của trường mở cửa ngày Chủ nhật."
          },
          {
            "zh": "学校门口有一个商店。",
            "py": "Xuéxiào ménkǒu yǒu yí ge shāngdiàn.",
            "vi": "Trước cổng trường có một cửa hàng."
          }
        ]
      },
      {
        "zh": "对不起",
        "py": "duìbuqǐ",
        "type": "Cụm từ",
        "vi": "xin lỗi",
        "ex": [
          {
            "zh": "对不起，我来晚了。",
            "py": "Duìbuqǐ, wǒ lái wǎn le.",
            "vi": "Xin lỗi, tôi đến muộn rồi."
          },
          {
            "zh": "对不起，我今天很忙。",
            "py": "Duìbuqǐ, wǒ jīntiān hěn máng.",
            "vi": "Xin lỗi, hôm nay tôi rất bận."
          },
          {
            "zh": "对不起，我不知道。",
            "py": "Duìbuqǐ, wǒ bù zhīdào.",
            "vi": "Xin lỗi, tôi không biết."
          },
          {
            "zh": "对不起，打扰你了。",
            "py": "Duìbuqǐ, dǎrǎo nǐ le.",
            "vi": "Xin lỗi, đã làm phiền bạn."
          },
          {
            "zh": "对不起，明天我不去。",
            "py": "Duìbuqǐ, míngtiān wǒ bú qù.",
            "vi": "Xin lỗi, ngày mai tôi không đi."
          },
          {
            "zh": "对不起，我不知道他的名字。",
            "py": "Duìbuqǐ, wǒ bù zhīdào tā de míngzi.",
            "vi": "Xin lỗi, tôi không biết tên anh ấy."
          },
          {
            "zh": "对不起，我错了。",
            "py": "Duìbuqǐ, wǒ cuò le.",
            "vi": "Xin lỗi, tôi sai rồi."
          },
          {
            "zh": "对不起，这儿没有可乐。",
            "py": "Duìbuqǐ, zhèr méiyǒu kělè.",
            "vi": "Xin lỗi, ở đây không có coca."
          },
          {
            "zh": "对不起，经理不在。",
            "py": "Duìbuqǐ, jīnglǐ bú zài.",
            "vi": "Xin lỗi, giám đốc không có ở đây."
          },
          {
            "zh": "对不起，我没有零钱。",
            "py": "Duìbuqǐ, wǒ méiyǒu língqián.",
            "vi": "Xin lỗi, tôi không có tiền lẻ."
          }
        ]
      },
      {
        "zh": "没关系",
        "py": "méi guānxi",
        "type": "Cụm từ",
        "vi": "không sao, không có gì",
        "ex": [
          {
            "zh": "没关系，不要紧。",
            "py": "Méi guānxi, búyào jǐn.",
            "vi": "Không sao, không có gì."
          },
          {
            "zh": "没关系，我们明天见。",
            "py": "Méi guānxi, wǒmen míngtiān jiàn.",
            "vi": "Không sao, mai chúng ta gặp nhau."
          },
          {
            "zh": "对不起！——没关系！",
            "py": "Duìbuqǐ! — Méi guānxi!",
            "vi": "Xin lỗi! — Không sao!"
          },
          {
            "zh": "来晚了没关系。",
            "py": "Lái wǎn le méi guānxi.",
            "vi": "Đến muộn không sao."
          },
          {
            "zh": "没关系，明天再来。",
            "py": "Méi guānxi, míngtiān zài lái.",
            "vi": "Không sao, mai đến lại."
          },
          {
            "zh": "没关系，明天再说吧。",
            "py": "Méi guānxi, míngtiān zài shuō ba.",
            "vi": "Không sao, mai nói tiếp nhé."
          },
          {
            "zh": "没关系，你坐吧。",
            "py": "Méi guānxi, nǐ zuò ba.",
            "vi": "Không sao, bạn ngồi đi."
          },
          {
            "zh": "下雨了？没关系，我有雨伞。",
            "py": "Xià yǔ le? Méi guānxi, wǒ yǒu yǔsǎn.",
            "vi": "Mưa rồi à? Không sao, tôi có ô."
          },
          {
            "zh": "没关系，我等一会儿。",
            "py": "Méi guānxi, wǒ děng yíhuìr.",
            "vi": "Không sao, tôi đợi một lát."
          },
          {
            "zh": "贵一点儿也没关系。",
            "py": "Guì yìdiǎnr yě méi guānxi.",
            "vi": "Đắt một chút cũng không sao."
          }
        ]
      },
      {
        "zh": "最近",
        "py": "zuìjìn",
        "type": "Phó từ",
        "vi": "gần đây, dạo này",
        "ex": [
          {
            "zh": "你最近怎么样？",
            "py": "Nǐ zuìjìn zěnmeyàng?",
            "vi": "Dạo này bạn thế nào?"
          },
          {
            "zh": "最近我不太忙。",
            "py": "Zuìjìn wǒ bú tài máng.",
            "vi": "Dạo này tôi không bận lắm."
          },
          {
            "zh": "最近我很忙。",
            "py": "Zuìjìn wǒ hěn máng.",
            "vi": "Dạo này tôi rất bận."
          },
          {
            "zh": "最近他学汉语进步很大。",
            "py": "Zuìjìn tā xué Hànyǔ jìnbù hěn dà.",
            "vi": "Dạo này anh ấy tiến bộ rất nhiều trong học tiếng Trung."
          },
          {
            "zh": "最近你忙吗？",
            "py": "Zuìjìn nǐ máng ma?",
            "vi": "Dạo này bạn có bận không?"
          },
          {
            "zh": "最近你身体好吗？",
            "py": "Zuìjìn nǐ shēntǐ hǎo ma?",
            "vi": "Dạo này bạn có khỏe không?"
          },
          {
            "zh": "最近我很累。",
            "py": "Zuìjìn wǒ hěn lèi.",
            "vi": "Dạo này tôi rất mệt."
          },
          {
            "zh": "最近他经常去图书馆。",
            "py": "Zuìjìn tā jīngcháng qù túshūguǎn.",
            "vi": "Dạo này anh ấy hay đến thư viện."
          },
          {
            "zh": "最近工作怎么样？",
            "py": "Zuìjìn gōngzuò zěnmeyàng?",
            "vi": "Dạo này công việc thế nào?"
          },
          {
            "zh": "最近苹果很便宜。",
            "py": "Zuìjìn píngguǒ hěn piányi.",
            "vi": "Dạo này táo rất rẻ."
          }
        ]
      },
      {
        "zh": "天安门",
        "py": "Tiān'ānmén",
        "type": "Danh từ",
        "vi": "Thiên An Môn (địa danh)",
        "ex": [
          {
            "zh": "天安门广场在北京。",
            "py": "Tiān'ānmén guǎngchǎng zài Běijīng.",
            "vi": "Quảng trường Thiên An Môn ở Bắc Kinh."
          },
          {
            "zh": "天安门是北京最有名的地方。",
            "py": "Tiān'ānmén shì Běijīng zuì yǒumíng de dìfāng.",
            "vi": "Thiên An Môn là nơi nổi tiếng nhất ở Bắc Kinh."
          },
          {
            "zh": "我想去天安门看看。",
            "py": "Wǒ xiǎng qù Tiān'ānmén kànkan.",
            "vi": "Tôi muốn đến Thiên An Môn xem thử."
          },
          {
            "zh": "天安门在北京。",
            "py": "Tiān'ānmén zài Běijīng.",
            "vi": "Thiên An Môn ở Bắc Kinh."
          },
          {
            "zh": "我们星期天去天安门。",
            "py": "Wǒmen xīngqītiān qù Tiān'ānmén.",
            "vi": "Chủ nhật chúng tôi đi Thiên An Môn."
          },
          {
            "zh": "天安门很大。",
            "py": "Tiān'ānmén hěn dà.",
            "vi": "Thiên An Môn rất rộng."
          },
          {
            "zh": "明天我们去天安门吧。",
            "py": "Míngtiān wǒmen qù Tiān'ānmén ba.",
            "vi": "Ngày mai chúng ta đi Thiên An Môn nhé."
          },
          {
            "zh": "我们坐地铁去天安门。",
            "py": "Wǒmen zuò dìtiě qù Tiān'ānmén.",
            "vi": "Chúng tôi đi tàu điện ngầm tới Thiên An Môn."
          },
          {
            "zh": "天安门那儿人很多。",
            "py": "Tiān'ānmén nàr rén hěn duō.",
            "vi": "Ở Thiên An Môn rất đông người."
          },
          {
            "zh": "这是我在天安门的照片。",
            "py": "Zhè shì wǒ zài Tiān'ānmén de zhàopiàn.",
            "vi": "Đây là ảnh của tôi ở Thiên An Môn."
          }
        ]
      },
      {
        "zh": "存钱",
        "py": "cún qián",
        "type": "Động từ",
        "vi": "gửi tiền (tiết kiệm)",
        "ex": [
          {
            "zh": "我去银行存钱。",
            "py": "Wǒ qù yínháng cún qián.",
            "vi": "Tôi đến ngân hàng gửi tiền tiết kiệm."
          },
          {
            "zh": "我每个月存一些钱。",
            "py": "Wǒ měi gè yuè cún yīxiē qián.",
            "vi": "Mỗi tháng tôi để dành một ít tiền."
          },
          {
            "zh": "去银行存钱。",
            "py": "Qù yínháng cún qián.",
            "vi": "Đến ngân hàng gửi tiền."
          },
          {
            "zh": "存钱是好习惯。",
            "py": "Cún qián shì hǎo xíguàn.",
            "vi": "Tiết kiệm tiền là thói quen tốt."
          },
          {
            "zh": "我昨天去银行存钱。",
            "py": "Wǒ zuótiān qù yínháng cúnqián.",
            "vi": "Hôm qua tôi đi ngân hàng gửi tiền."
          },
          {
            "zh": "星期一我去存钱。",
            "py": "Xīngqīyī wǒ qù cún qián.",
            "vi": "Thứ Hai tôi đi gửi tiền."
          },
          {
            "zh": "你在哪个银行存钱？",
            "py": "Nǐ zài nǎge yínháng cún qián?",
            "vi": "Bạn gửi tiền ở ngân hàng nào?"
          },
          {
            "zh": "她在中国银行存钱。",
            "py": "Tā zài Zhōngguó Yínháng cún qián.",
            "vi": "Cô ấy gửi tiền ở Ngân hàng Trung Quốc."
          },
          {
            "zh": "存钱要等一会儿。",
            "py": "Cún qián yào děng yíhuìr.",
            "vi": "Gửi tiền phải đợi một lát."
          },
          {
            "zh": "他想存钱买汽车。",
            "py": "Tā xiǎng cún qián mǎi qìchē.",
            "vi": "Anh ấy muốn để dành tiền mua ô tô."
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 5 (b6): 这是王老师 – Đây là thầy Vương",
    "words": [
      {
        "zh": "这",
        "py": "zhè",
        "type": "Đại từ",
        "vi": "đây, này",
        "ex": [
          {
            "zh": "这是咖啡，不是茶。",
            "py": "Zhè shì kāfēi, bú shì chá.",
            "vi": "Đây là cà phê, không phải trà."
          },
          {
            "zh": "这是我的工作。",
            "py": "Zhè shì wǒ de gōngzuò.",
            "vi": "Đây là công việc của tôi."
          },
          {
            "zh": "这是白水。",
            "py": "Zhè shì báishuǐ.",
            "vi": "Đây là nước lọc."
          },
          {
            "zh": "这是可乐吗？",
            "py": "Zhè shì kělè ma?",
            "vi": "Đây là coca phải không?"
          },
          {
            "zh": "这是老师的水。",
            "py": "Zhè shì lǎoshī de shuǐ.",
            "vi": "Đây là nước của thầy/cô."
          },
          {
            "zh": "这是我的同屋。",
            "py": "Zhè shì wǒ de tóngwū.",
            "vi": "Đây là bạn cùng phòng của tôi."
          },
          {
            "zh": "这是什么水果？",
            "py": "Zhè shì shénme shuǐguǒ?",
            "vi": "Đây là quả gì?"
          },
          {
            "zh": "这辆车是谁的？",
            "py": "Zhè liàng chē shì shéi de?",
            "vi": "Chiếc xe này là của ai?"
          },
          {
            "zh": "这家商店很大。",
            "py": "Zhè jiā shāngdiàn hěn dà.",
            "vi": "Cửa hàng này rất lớn."
          },
          {
            "zh": "这是我们的新经理。",
            "py": "Zhè shì wǒmen de xīn jīnglǐ.",
            "vi": "Đây là giám đốc mới của chúng tôi."
          }
        ]
      },
      {
        "zh": "那",
        "py": "nà",
        "type": "Đại từ",
        "vi": "đó, kia",
        "ex": [
          {
            "zh": "那是什么？",
            "py": "Nà shì shénme?",
            "vi": "Đó là cái gì vậy?"
          },
          {
            "zh": "那是谁的书？",
            "py": "Nà shì shuí de shū?",
            "vi": "Đó là sách của ai?"
          },
          {
            "zh": "那个人是我的老师。",
            "py": "Nàge rén shì wǒ de lǎoshī.",
            "vi": "Người kia là thầy giáo của tôi."
          },
          {
            "zh": "那家餐厅很好吃。",
            "py": "Nà jiā cāntīng hěn hǎochī.",
            "vi": "Nhà hàng đó rất ngon."
          },
          {
            "zh": "那是您的茶吗？",
            "py": "Nà shì nín de chá ma?",
            "vi": "Đó có phải là trà của ngài không?"
          },
          {
            "zh": "那是我的办公室。",
            "py": "Nà shì wǒ de bàngōngshì.",
            "vi": "Kia là văn phòng của tôi."
          },
          {
            "zh": "那位先生是我们的经理。",
            "py": "Nà wèi xiānsheng shì wǒmen de jīnglǐ.",
            "vi": "Vị kia là giám đốc của chúng tôi."
          },
          {
            "zh": "那本词典很贵。",
            "py": "Nà běn cídiǎn hěn guì.",
            "vi": "Quyển từ điển kia rất đắt."
          },
          {
            "zh": "那辆红色的汽车是我哥哥的。",
            "py": "Nà liàng hóngsè de qìchē shì wǒ gēge de.",
            "vi": "Chiếc ô tô màu đỏ kia là của anh tôi."
          },
          {
            "zh": "那家酒店不太贵。",
            "py": "Nà jiā jiǔdiàn bú tài guì.",
            "vi": "Khách sạn kia không đắt lắm."
          }
        ]
      },
      {
        "zh": "是",
        "py": "shì",
        "type": "Động từ",
        "vi": "là",
        "ex": [
          {
            "zh": "我是越南学生。",
            "py": "Wǒ shì Yuènán xuéshēng.",
            "vi": "Tôi là học sinh Việt Nam."
          },
          {
            "zh": "那是我的茶。",
            "py": "Nà shì wǒ de chá.",
            "vi": "Kia là trà của tôi."
          },
          {
            "zh": "他是我们的老师。",
            "py": "Tā shì wǒmen de lǎoshī.",
            "vi": "Anh ấy là thầy của chúng tôi."
          },
          {
            "zh": "他是不是老师？",
            "py": "Tā shì bu shì lǎoshī?",
            "vi": "Anh ấy có phải là thầy giáo không?"
          },
          {
            "zh": "对，就是这样。",
            "py": "Duì, jiùshì zhèyàng.",
            "vi": "Đúng, chính là như vậy."
          },
          {
            "zh": "我妈妈是医生。",
            "py": "Wǒ māma shì yīshēng.",
            "vi": "Mẹ tôi là bác sĩ."
          },
          {
            "zh": "今天是我妹妹的生日。",
            "py": "Jīntiān shì wǒ mèimei de shēngrì.",
            "vi": "Hôm nay là sinh nhật em gái tôi."
          },
          {
            "zh": "他是我们的汉语老师吗？",
            "py": "Tā shì wǒmen de Hànyǔ lǎoshī ma?",
            "vi": "Anh ấy là giáo viên tiếng Trung của chúng ta à?"
          },
          {
            "zh": "这本书是新的。",
            "py": "Zhè běn shū shì xīn de.",
            "vi": "Quyển sách này là sách mới."
          },
          {
            "zh": "她是外国留学生。",
            "py": "Tā shì wàiguó liúxuéshēng.",
            "vi": "Cô ấy là lưu học sinh nước ngoài."
          }
        ]
      },
      {
        "zh": "老师",
        "py": "lǎoshī",
        "type": "Danh từ",
        "vi": "giáo viên, thầy/cô",
        "ex": [
          {
            "zh": "王老师教我们汉语。",
            "py": "Wáng lǎoshī jiāo wǒmen Hànyǔ.",
            "vi": "Thầy Vương dạy tiếng Hán cho chúng tôi."
          },
          {
            "zh": "我的老师是中国人。",
            "py": "Wǒ de lǎoshī shì Zhōngguó rén.",
            "vi": "Thầy giáo của tôi là người Trung Quốc."
          },
          {
            "zh": "老师好！",
            "py": "Lǎoshī hǎo!",
            "vi": "Chào thầy/cô!"
          },
          {
            "zh": "老师教我们汉语。",
            "py": "Lǎoshī jiāo wǒmen Hànyǔ.",
            "vi": "Thầy/cô dạy chúng tôi tiếng Trung."
          },
          {
            "zh": "我想当汉语老师。",
            "py": "Wǒ xiǎng dāng Hànyǔ lǎoshī.",
            "vi": "Tôi muốn làm giáo viên tiếng Trung."
          },
          {
            "zh": "老师，这个字怎么读？",
            "py": "Lǎoshī, zhège zì zěnme dú?",
            "vi": "Thưa thầy, chữ này đọc thế nào?"
          },
          {
            "zh": "我们的口语老师很好。",
            "py": "Wǒmen de kǒuyǔ lǎoshī hěn hǎo.",
            "vi": "Giáo viên khẩu ngữ của chúng tôi rất tốt."
          },
          {
            "zh": "老师在办公室吗？",
            "py": "Lǎoshī zài bàngōngshì ma?",
            "vi": "Thầy có ở văn phòng không?"
          },
          {
            "zh": "我姐姐是英语老师。",
            "py": "Wǒ jiějie shì Yīngyǔ lǎoshī.",
            "vi": "Chị tôi là giáo viên tiếng Anh."
          },
          {
            "zh": "老师给我们介绍了一本书。",
            "py": "Lǎoshī gěi wǒmen jièshàole yì běn shū.",
            "vi": "Thầy giới thiệu cho chúng tôi một quyển sách."
          }
        ]
      },
      {
        "zh": "您",
        "py": "nín",
        "type": "Đại từ",
        "vi": "ngài (kính ngữ của 你)",
        "ex": [
          {
            "zh": "您好，王老师！",
            "py": "Nín hǎo, Wáng lǎoshī!",
            "vi": "Chào thầy Vương!"
          },
          {
            "zh": "您好，请坐！",
            "py": "Nín hǎo, qǐng zuò!",
            "vi": "Chào ông/bà, mời ngồi!"
          },
          {
            "zh": "您贵姓？",
            "py": "Nín guì xìng?",
            "vi": "Xin hỏi quý danh của ông/bà là gì?"
          },
          {
            "zh": "谢谢您的帮助。",
            "py": "Xièxie nín de bāngzhù.",
            "vi": "Cảm ơn sự giúp đỡ của ông/bà."
          },
          {
            "zh": "您请坐。",
            "py": "Nín qǐng zuò.",
            "vi": "Mời ngài ngồi."
          },
          {
            "zh": "您好，请喝茶。",
            "py": "Nín hǎo, qǐng hē chá.",
            "vi": "Chào ngài, mời uống trà."
          },
          {
            "zh": "您要喝茶还是咖啡？",
            "py": "Nín yào hē chá háishì kāfēi?",
            "vi": "Ngài muốn uống trà hay cà phê?"
          },
          {
            "zh": "您是吴先生吗？",
            "py": "Nín shì Wú xiānsheng ma?",
            "vi": "Ngài là ông Ngô phải không?"
          },
          {
            "zh": "您的电话号码是多少？",
            "py": "Nín de diànhuà hàomǎ shì duōshao?",
            "vi": "Số điện thoại của ngài là bao nhiêu?"
          },
          {
            "zh": "您想换多少钱？",
            "py": "Nín xiǎng huàn duōshao qián?",
            "vi": "Ngài muốn đổi bao nhiêu tiền?"
          }
        ]
      },
      {
        "zh": "请",
        "py": "qǐng",
        "type": "Động từ",
        "vi": "mời, xin (lịch sự)",
        "ex": [
          {
            "zh": "请进，请坐！",
            "py": "Qǐng jìn, qǐng zuò!",
            "vi": "Mời vào, mời ngồi!"
          },
          {
            "zh": "请喝水。",
            "py": "Qǐng hē shuǐ.",
            "vi": "Mời uống nước."
          },
          {
            "zh": "老师请我喝茶。",
            "py": "Lǎoshī qǐng wǒ hē chá.",
            "vi": "Thầy giáo mời tôi uống trà."
          },
          {
            "zh": "请问，银行在哪儿？",
            "py": "Qǐngwèn, yínháng zài nǎr?",
            "vi": "Xin hỏi, ngân hàng ở đâu ạ?"
          },
          {
            "zh": "请喝茶。",
            "py": "Qǐng hē chá.",
            "vi": "Mời uống trà."
          },
          {
            "zh": "请给我一杯咖啡。",
            "py": "Qǐng gěi wǒ yì bēi kāfēi.",
            "vi": "Làm ơn cho tôi một cốc cà phê."
          },
          {
            "zh": "请在这儿写名字。",
            "py": "Qǐng zài zhèr xiě míngzi.",
            "vi": "Xin hãy viết tên ở đây."
          },
          {
            "zh": "请等我一下儿。",
            "py": "Qǐng děng wǒ yíxiàr.",
            "vi": "Làm ơn đợi tôi một chút."
          },
          {
            "zh": "请问，邮局几点开门？",
            "py": "Qǐngwèn, yóujú jǐ diǎn kāimén?",
            "vi": "Xin hỏi, bưu điện mấy giờ mở cửa?"
          },
          {
            "zh": "我请你吃饭。",
            "py": "Wǒ qǐng nǐ chīfàn.",
            "vi": "Tôi mời bạn ăn cơm."
          }
        ]
      },
      {
        "zh": "进",
        "py": "jìn",
        "type": "Động từ",
        "vi": "vào",
        "ex": [
          {
            "zh": "请进来！",
            "py": "Qǐng jìnlái!",
            "vi": "Mời vào đây!"
          },
          {
            "zh": "老师，请进！",
            "py": "Lǎoshī, qǐng jìn!",
            "vi": "Thầy ơi, mời vào!"
          },
          {
            "zh": "他走进了教室。",
            "py": "Tā zǒu jìn le jiàoshì.",
            "vi": "Anh ấy bước vào lớp học."
          },
          {
            "zh": "进来坐一下。",
            "py": "Jìnlái zuò yīxià.",
            "vi": "Vào ngồi một chút."
          },
          {
            "zh": "请进，谢谢。",
            "py": "Qǐng jìn, xièxie.",
            "vi": "Mời vào, cảm ơn."
          },
          {
            "zh": "她进房间了。",
            "py": "Tā jìn fángjiān le.",
            "vi": "Cô ấy vào phòng rồi."
          },
          {
            "zh": "我们进商场看看吧。",
            "py": "Wǒmen jìn shāngchǎng kànkan ba.",
            "vi": "Chúng ta vào trung tâm thương mại xem thử đi."
          },
          {
            "zh": "请进办公室。",
            "py": "Qǐng jìn bàngōngshì.",
            "vi": "Mời vào văn phòng."
          },
          {
            "zh": "他进银行取钱。",
            "py": "Tā jìn yínháng qǔ qián.",
            "vi": "Anh ấy vào ngân hàng rút tiền."
          },
          {
            "zh": "下雨了，我们进去吧。",
            "py": "Xià yǔ le, wǒmen jìnqù ba.",
            "vi": "Mưa rồi, chúng ta vào trong đi."
          }
        ]
      },
      {
        "zh": "坐",
        "py": "zuò",
        "type": "Động từ",
        "vi": "ngồi",
        "ex": [
          {
            "zh": "请坐，不要客气。",
            "py": "Qǐng zuò, búyào kèqi.",
            "vi": "Mời ngồi, đừng khách khí."
          },
          {
            "zh": "您请坐，喝茶。",
            "py": "Nín qǐng zuò, hē chá.",
            "vi": "Mời ngài ngồi, uống trà."
          },
          {
            "zh": "我坐公共汽车去上班。",
            "py": "Wǒ zuò gōnggòng qìchē qù shàngbān.",
            "vi": "Tôi đi xe buýt đi làm."
          },
          {
            "zh": "你坐在哪里？",
            "py": "Nǐ zuò zài nǎlǐ?",
            "vi": "Bạn ngồi ở đâu?"
          },
          {
            "zh": "老师，请坐。",
            "py": "Lǎoshī, qǐng zuò.",
            "vi": "Thưa thầy/cô, mời ngồi."
          },
          {
            "zh": "请坐，喝杯茶吧。",
            "py": "Qǐng zuò, hē bēi chá ba.",
            "vi": "Mời ngồi, uống chén trà đi."
          },
          {
            "zh": "你坐这儿吧。",
            "py": "Nǐ zuò zhèr ba.",
            "vi": "Bạn ngồi đây đi."
          },
          {
            "zh": "我们坐出租车回家。",
            "py": "Wǒmen zuò chūzūchē huíjiā.",
            "vi": "Chúng tôi đi taxi về nhà."
          },
          {
            "zh": "他坐地铁去公司。",
            "py": "Tā zuò dìtiě qù gōngsī.",
            "vi": "Anh ấy đi tàu điện ngầm đến công ty."
          },
          {
            "zh": "老师坐在那儿。",
            "py": "Lǎoshī zuò zài nàr.",
            "vi": "Thầy ngồi ở đằng kia."
          }
        ]
      },
      {
        "zh": "喝",
        "py": "hē",
        "type": "Động từ",
        "vi": "uống",
        "ex": [
          {
            "zh": "你喝什么茶？",
            "py": "Nǐ hē shénme chá?",
            "vi": "Bạn uống loại trà gì?"
          },
          {
            "zh": "你喝什么？",
            "py": "Nǐ hē shénme?",
            "vi": "Bạn uống gì?"
          },
          {
            "zh": "我喜欢喝茶。",
            "py": "Wǒ xǐhuān hē chá.",
            "vi": "Tôi thích uống trà."
          },
          {
            "zh": "天热，多喝水。",
            "py": "Tiān rè, duō hē shuǐ.",
            "vi": "Trời nóng, hãy uống nhiều nước."
          },
          {
            "zh": "他每天喝咖啡。",
            "py": "Tā měitiān hē kāfēi.",
            "vi": "Anh ấy mỗi ngày đều uống cà phê."
          },
          {
            "zh": "你喝可乐还是奶茶？",
            "py": "Nǐ hē kělè háishì nǎichá?",
            "vi": "Bạn uống coca hay trà sữa?"
          },
          {
            "zh": "他不喝冷水。",
            "py": "Tā bù hē lěng shuǐ.",
            "vi": "Anh ấy không uống nước lạnh."
          },
          {
            "zh": "我渴了，想喝水。",
            "py": "Wǒ kě le, xiǎng hē shuǐ.",
            "vi": "Tôi khát rồi, muốn uống nước."
          },
          {
            "zh": "晚上不要喝咖啡。",
            "py": "Wǎnshang búyào hē kāfēi.",
            "vi": "Buổi tối đừng uống cà phê."
          },
          {
            "zh": "我们喝一瓶啤酒吧。",
            "py": "Wǒmen hē yì píng píjiǔ ba.",
            "vi": "Chúng ta uống một chai bia đi."
          }
        ]
      },
      {
        "zh": "茶",
        "py": "chá",
        "type": "Danh từ",
        "vi": "trà, chè",
        "ex": [
          {
            "zh": "我喜欢喝绿茶。",
            "py": "Wǒ xǐhuan hē lǜchá.",
            "vi": "Tôi thích uống trà xanh."
          },
          {
            "zh": "中国人喜欢喝茶。",
            "py": "Zhōngguó rén xǐhuān hē chá.",
            "vi": "Người Trung Quốc thích uống trà."
          },
          {
            "zh": "这是越南的茶。",
            "py": "Zhè shì Yuènán de chá.",
            "vi": "Đây là trà Việt Nam."
          },
          {
            "zh": "这是什么茶？",
            "py": "Zhè shì shénme chá?",
            "vi": "Đây là trà gì?"
          },
          {
            "zh": "我喝绿茶。",
            "py": "Wǒ hē lǜchá.",
            "vi": "Tôi uống trà xanh."
          },
          {
            "zh": "我喜欢喝中国茶。",
            "py": "Wǒ xǐhuan hē Zhōngguó chá.",
            "vi": "Tôi thích uống trà Trung Quốc."
          },
          {
            "zh": "这杯茶很香。",
            "py": "Zhè bēi chá hěn xiāng.",
            "vi": "Chén trà này rất thơm."
          },
          {
            "zh": "你要红茶还是绿茶？",
            "py": "Nǐ yào hóngchá háishì lǜchá?",
            "vi": "Bạn muốn trà đen hay trà xanh?"
          },
          {
            "zh": "我给老师买了一些茶。",
            "py": "Wǒ gěi lǎoshī mǎile yìxiē chá.",
            "vi": "Tôi mua cho thầy một ít trà."
          },
          {
            "zh": "越南人也喜欢喝茶。",
            "py": "Yuènán rén yě xǐhuan hē chá.",
            "vi": "Người Việt Nam cũng thích uống trà."
          }
        ]
      },
      {
        "zh": "水",
        "py": "shuǐ",
        "type": "Danh từ",
        "vi": "nước (uống)",
        "ex": [
          {
            "zh": "他喝了很多水。",
            "py": "Tā hēle hěn duō shuǐ.",
            "vi": "Anh ấy uống rất nhiều nước."
          },
          {
            "zh": "我不喝酒，我喝水。",
            "py": "Wǒ bù hē jiǔ, wǒ hē shuǐ.",
            "vi": "Tôi không uống rượu, tôi uống nước."
          },
          {
            "zh": "这是水，那是茶。",
            "py": "Zhè shì shuǐ, nà shì chá.",
            "vi": "Đây là nước, kia là trà."
          },
          {
            "zh": "这里的水干净吗？",
            "py": "Zhèlǐ de shuǐ gānjìng ma?",
            "vi": "Nước ở đây có sạch không?"
          },
          {
            "zh": "我喝水。",
            "py": "Wǒ hē shuǐ.",
            "vi": "Tôi uống nước."
          },
          {
            "zh": "我要一瓶冷水。",
            "py": "Wǒ yào yì píng lěng shuǐ.",
            "vi": "Tôi muốn một chai nước lạnh."
          },
          {
            "zh": "这儿的水很贵。",
            "py": "Zhèr de shuǐ hěn guì.",
            "vi": "Nước ở đây rất đắt."
          },
          {
            "zh": "你喝水吗？",
            "py": "Nǐ hē shuǐ ma?",
            "vi": "Bạn uống nước không?"
          },
          {
            "zh": "水在箱子里。",
            "py": "Shuǐ zài xiāngzi lǐ.",
            "vi": "Nước ở trong vali."
          },
          {
            "zh": "他买了两瓶水。",
            "py": "Tā mǎile liǎng píng shuǐ.",
            "vi": "Anh ấy mua hai chai nước."
          }
        ]
      },
      {
        "zh": "谢谢",
        "py": "xièxie",
        "type": "Cụm từ",
        "vi": "cảm ơn",
        "ex": [
          {
            "zh": "谢谢你的帮助！",
            "py": "Xièxie nǐ de bāngzhù!",
            "vi": "Cảm ơn bạn đã giúp đỡ!"
          },
          {
            "zh": "谢谢您！",
            "py": "Xièxie nín!",
            "vi": "Cảm ơn ngài!"
          },
          {
            "zh": "非常谢谢！",
            "py": "Fēicháng xièxie!",
            "vi": "Cảm ơn rất nhiều!"
          },
          {
            "zh": "谢谢老师！",
            "py": "Xièxie lǎoshī!",
            "vi": "Cảm ơn thầy/cô!"
          },
          {
            "zh": "谢谢，我不喝酒。",
            "py": "Xièxie, wǒ bù hē jiǔ.",
            "vi": "Cảm ơn, tôi không uống rượu."
          },
          {
            "zh": "谢谢你的照片！",
            "py": "Xièxie nǐ de zhàopiàn!",
            "vi": "Cảm ơn ảnh của bạn!"
          },
          {
            "zh": "谢谢，我不喝咖啡。",
            "py": "Xièxie, wǒ bù hē kāfēi.",
            "vi": "Cảm ơn, tôi không uống cà phê."
          },
          {
            "zh": "谢谢阿姨！",
            "py": "Xièxie āyí!",
            "vi": "Cảm ơn cô!"
          },
          {
            "zh": "谢谢你给我介绍。",
            "py": "Xièxie nǐ gěi wǒ jièshào.",
            "vi": "Cảm ơn bạn đã giới thiệu cho tôi."
          },
          {
            "zh": "谢谢大家！",
            "py": "Xièxie dàjiā!",
            "vi": "Cảm ơn mọi người!"
          }
        ]
      },
      {
        "zh": "不客气",
        "py": "bú kèqi",
        "type": "Cụm từ",
        "vi": "không có gì, không khách khí",
        "ex": [
          {
            "zh": "谢谢！——不客气！",
            "py": "Xièxie! — Bú kèqi!",
            "vi": "Cảm ơn! — Không có gì!"
          },
          {
            "zh": "不客气，请喝茶。",
            "py": "Bú kèqi, qǐng hē chá.",
            "vi": "Không có gì, mời uống trà."
          },
          {
            "zh": "不客气，这是我应该做的。",
            "py": "Bù kèqi, zhè shì wǒ yīnggāi zuò de.",
            "vi": "Không có gì, đây là điều tôi nên làm."
          },
          {
            "zh": "不客气，请坐。",
            "py": "Bú kèqi, qǐng zuò.",
            "vi": "Không có gì, mời ngồi."
          },
          {
            "zh": "谢谢您！——不客气。",
            "py": "Xièxie nín! — Bú kèqi.",
            "vi": "Cảm ơn ngài! — Không có gì."
          },
          {
            "zh": "不客气，我们是朋友。",
            "py": "Bú kèqi, wǒmen shì péngyou.",
            "vi": "Đừng khách sáo, chúng ta là bạn mà."
          },
          {
            "zh": "不客气，请坐吧。",
            "py": "Bú kèqi, qǐng zuò ba.",
            "vi": "Không có gì, mời ngồi."
          },
          {
            "zh": "不客气，明天见！",
            "py": "Bú kèqi, míngtiān jiàn!",
            "vi": "Không có gì, mai gặp!"
          },
          {
            "zh": "不客气，这是你的雨伞。",
            "py": "Bú kèqi, zhè shì nǐ de yǔsǎn.",
            "vi": "Không có gì, đây là ô của bạn."
          },
          {
            "zh": "他说：“不客气。”",
            "py": "Tā shuō: “Bú kèqi.”",
            "vi": "Anh ấy nói: “Không có gì.”"
          }
        ]
      },
      {
        "zh": "工作",
        "py": "gōngzuò",
        "type": "Danh từ",
        "vi": "công việc; làm việc",
        "ex": [
          {
            "zh": "你在哪儿工作？",
            "py": "Nǐ zài nǎr gōngzuò?",
            "vi": "Bạn làm việc ở đâu?"
          },
          {
            "zh": "你在哪里工作？",
            "py": "Nǐ zài nǎlǐ gōngzuò?",
            "vi": "Bạn làm việc ở đâu?"
          },
          {
            "zh": "我在公司工作。",
            "py": "Wǒ zài gōngsī gōngzuò.",
            "vi": "Tôi làm việc ở công ty."
          },
          {
            "zh": "工作很累，但我喜欢。",
            "py": "Gōngzuò hěn lèi, dàn wǒ xǐhuān.",
            "vi": "Công việc rất mệt nhưng tôi thích."
          },
          {
            "zh": "他找到工作了。",
            "py": "Tā zhǎodào gōngzuò le.",
            "vi": "Anh ấy tìm được việc làm rồi."
          },
          {
            "zh": "他在外贸公司工作。",
            "py": "Tā zài wàimào gōngsī gōngzuò.",
            "vi": "Anh ấy làm việc ở công ty ngoại thương."
          },
          {
            "zh": "我的工作很忙。",
            "py": "Wǒ de gōngzuò hěn máng.",
            "vi": "Công việc của tôi rất bận."
          },
          {
            "zh": "你喜欢你的工作吗？",
            "py": "Nǐ xǐhuan nǐ de gōngzuò ma?",
            "vi": "Bạn có thích công việc của mình không?"
          },
          {
            "zh": "她妈妈在商店工作。",
            "py": "Tā māma zài shāngdiàn gōngzuò.",
            "vi": "Mẹ cô ấy làm việc ở cửa hàng."
          },
          {
            "zh": "他的新工作怎么样？",
            "py": "Tā de xīn gōngzuò zěnmeyàng?",
            "vi": "Công việc mới của anh ấy thế nào?"
          }
        ]
      },
      {
        "zh": "身体",
        "py": "shēntǐ",
        "type": "Danh từ",
        "vi": "sức khỏe, thân thể",
        "ex": [
          {
            "zh": "您身体好吗？",
            "py": "Nín shēntǐ hǎo ma?",
            "vi": "Sức khỏe của ngài có tốt không?"
          },
          {
            "zh": "你身体怎么样？",
            "py": "Nǐ shēntǐ zěnmeyàng?",
            "vi": "Sức khỏe của bạn thế nào?"
          },
          {
            "zh": "身体是最重要的。",
            "py": "Shēntǐ shì zuì zhòngyào de.",
            "vi": "Sức khỏe là quan trọng nhất."
          },
          {
            "zh": "多运动，身体好。",
            "py": "Duō yùndòng, shēntǐ hǎo.",
            "vi": "Tập thể dục nhiều, sức khỏe tốt."
          },
          {
            "zh": "我爷爷身体很好。",
            "py": "Wǒ yéye shēntǐ hěn hǎo.",
            "vi": "Ông tôi sức khỏe rất tốt."
          },
          {
            "zh": "爷爷身体不太好。",
            "py": "Yéye shēntǐ bú tài hǎo.",
            "vi": "Sức khỏe ông nội không tốt lắm."
          },
          {
            "zh": "你最近身体怎么样？",
            "py": "Nǐ zuìjìn shēntǐ zěnmeyàng?",
            "vi": "Dạo này sức khỏe bạn thế nào?"
          },
          {
            "zh": "他身体很好，很少生病。",
            "py": "Tā shēntǐ hěn hǎo, hěn shǎo shēngbìng.",
            "vi": "Anh ấy sức khỏe rất tốt, rất ít khi ốm."
          },
          {
            "zh": "骑自行车对身体好。",
            "py": "Qí zìxíngchē duì shēntǐ hǎo.",
            "vi": "Đạp xe tốt cho sức khỏe."
          },
          {
            "zh": "喝太多酒对身体不好。",
            "py": "Hē tài duō jiǔ duì shēntǐ bù hǎo.",
            "vi": "Uống quá nhiều rượu không tốt cho sức khỏe."
          }
        ]
      },
      {
        "zh": "好久不见",
        "py": "hǎojiǔ bújiàn",
        "type": "Cụm từ",
        "vi": "lâu không gặp",
        "ex": [
          {
            "zh": "好久不见，你还好吗？",
            "py": "Hǎojiǔ bújiàn, nǐ hái hǎo ma?",
            "vi": "Lâu không gặp, bạn vẫn khỏe chứ?"
          },
          {
            "zh": "好久不见，你好吗？",
            "py": "Hǎo jiǔ bú jiàn, nǐ hǎo ma?",
            "vi": "Lâu không gặp, bạn có khỏe không?"
          },
          {
            "zh": "好久不见，最近怎么样？",
            "py": "Hǎo jiǔ bú jiàn, zuìjìn zěnmeyàng?",
            "vi": "Lâu không gặp, dạo này thế nào?"
          },
          {
            "zh": "好久不见，您身体好吗？",
            "py": "Hǎojiǔ bú jiàn, nín shēntǐ hǎo ma?",
            "vi": "Lâu không gặp, sức khỏe ngài thế nào?"
          },
          {
            "zh": "好久不见，最近忙吗？",
            "py": "Hǎojiǔ bújiàn, zuìjìn máng ma?",
            "vi": "Lâu rồi không gặp, dạo này có bận không?"
          },
          {
            "zh": "好久不见，你最近好吗？",
            "py": "Hǎojiǔ bújiàn, nǐ zuìjìn hǎo ma?",
            "vi": "Lâu không gặp, dạo này bạn khỏe không?"
          },
          {
            "zh": "吴老师，好久不见！",
            "py": "Wú lǎoshī, hǎojiǔ bújiàn!",
            "vi": "Cô Ngô, lâu quá không gặp!"
          },
          {
            "zh": "好久不见，你的孩子多大了？",
            "py": "Hǎojiǔ bújiàn, nǐ de háizi duō dà le?",
            "vi": "Lâu không gặp, con bạn bao nhiêu tuổi rồi?"
          },
          {
            "zh": "好久不见，工作忙吗？",
            "py": "Hǎojiǔ bújiàn, gōngzuò máng ma?",
            "vi": "Lâu không gặp, công việc có bận không?"
          },
          {
            "zh": "好久不见，我们去喝咖啡吧。",
            "py": "Hǎojiǔ bújiàn, wǒmen qù hē kāfēi ba.",
            "vi": "Lâu không gặp, chúng ta đi uống cà phê nhé."
          }
        ]
      },
      {
        "zh": "在",
        "py": "zài",
        "type": "Động từ",
        "vi": "ở (tại), đang ở",
        "ex": [
          {
            "zh": "我在中国工作。",
            "py": "Wǒ zài Zhōngguó gōngzuò.",
            "vi": "Tôi làm việc ở Trung Quốc."
          },
          {
            "zh": "你在哪儿？",
            "py": "Nǐ zài nǎr?",
            "vi": "Bạn đang ở đâu?"
          },
          {
            "zh": "我在学校学习。",
            "py": "Wǒ zài xuéxiào xuéxí.",
            "vi": "Tôi đang học ở trường."
          },
          {
            "zh": "妈妈在家做饭。",
            "py": "Māma zài jiā zuòfàn.",
            "vi": "Mẹ đang ở nhà nấu cơm."
          },
          {
            "zh": "我在银行工作。",
            "py": "Wǒ zài yínháng gōngzuò.",
            "vi": "Tôi làm việc tại ngân hàng."
          },
          {
            "zh": "我在图书馆看书。",
            "py": "Wǒ zài túshūguǎn kàn shū.",
            "vi": "Tôi đọc sách ở thư viện."
          },
          {
            "zh": "你妈妈在家吗？",
            "py": "Nǐ māma zài jiā ma?",
            "vi": "Mẹ bạn có ở nhà không?"
          },
          {
            "zh": "他的公司在河内。",
            "py": "Tā de gōngsī zài Hénèi.",
            "vi": "Công ty của anh ấy ở Hà Nội."
          },
          {
            "zh": "雨伞在门口。",
            "py": "Yǔsǎn zài ménkǒu.",
            "vi": "Ô ở cửa."
          },
          {
            "zh": "我们在公司吃午饭。",
            "py": "Wǒmen zài gōngsī chī wǔfàn.",
            "vi": "Chúng tôi ăn trưa ở công ty."
          }
        ]
      },
      {
        "zh": "生病",
        "py": "shēngbìng",
        "type": "Động từ",
        "vi": "bị ốm, bị bệnh",
        "ex": [
          {
            "zh": "我身体不太好，我在生病。",
            "py": "Wǒ shēntǐ bú tài hǎo, wǒ zài shēngbìng.",
            "vi": "Sức khoẻ tôi không tốt lắm, tôi đang bị ốm."
          },
          {
            "zh": "我生病了，不能去上班。",
            "py": "Wǒ shēngbìng le, bù néng qù shàngbān.",
            "vi": "Tôi bị bệnh rồi, không thể đi làm."
          },
          {
            "zh": "他生病了，在家休息。",
            "py": "Tā shēngbìng le, zài jiā xiūxi.",
            "vi": "Anh ấy bị bệnh, đang ở nhà nghỉ."
          },
          {
            "zh": "生病要多喝水。",
            "py": "Shēngbìng yào duō hē shuǐ.",
            "vi": "Khi bệnh phải uống nhiều nước."
          },
          {
            "zh": "他生病了。",
            "py": "Tā shēngbìng le.",
            "vi": "Anh ấy bị ốm rồi."
          },
          {
            "zh": "他生病了，没去上班。",
            "py": "Tā shēngbìng le, méi qù shàngbān.",
            "vi": "Anh ấy bị ốm, không đi làm."
          },
          {
            "zh": "我妹妹生病了，在医院。",
            "py": "Wǒ mèimei shēngbìng le, zài yīyuàn.",
            "vi": "Em gái tôi bị ốm, đang ở bệnh viện."
          },
          {
            "zh": "生病了要去看医生。",
            "py": "Shēngbìng le yào qù kàn yīshēng.",
            "vi": "Bị ốm thì phải đi khám bác sĩ."
          },
          {
            "zh": "天冷了，不要生病。",
            "py": "Tiān lěng le, búyào shēngbìng.",
            "vi": "Trời lạnh rồi, đừng để bị ốm."
          },
          {
            "zh": "奶奶生病了，我们去看她。",
            "py": "Nǎinai shēngbìng le, wǒmen qù kàn tā.",
            "vi": "Bà nội bị ốm, chúng tôi đi thăm bà."
          }
        ]
      },
      {
        "zh": "零",
        "py": "líng",
        "type": "Số đếm",
        "vi": "không (số 0)",
        "ex": [
          {
            "zh": "五，四，三，二，一，零。",
            "py": "Wǔ, sì, sān, èr, yī, líng.",
            "vi": "Năm, bốn, ba, hai, một, không."
          },
          {
            "zh": "零分是不好的。",
            "py": "Líng fēn shì bù hǎo de.",
            "vi": "Điểm không là không tốt."
          },
          {
            "zh": "今天零下五度。",
            "py": "Jīntiān líng xià wǔ dù.",
            "vi": "Hôm nay âm 5 độ."
          },
          {
            "zh": "手机号是零一二三...",
            "py": "Shǒujī hào shì líng yī èr sān...",
            "vi": "Số điện thoại là 0123..."
          },
          {
            "zh": "这是零。",
            "py": "Zhè shì líng.",
            "vi": "Đây là số không."
          },
          {
            "zh": "他的号码有三个零。",
            "py": "Tā de hàomǎ yǒu sān ge líng.",
            "vi": "Số của anh ấy có ba số không."
          },
          {
            "zh": "一百零五块。",
            "py": "Yìbǎi líng wǔ kuài.",
            "vi": "Một trăm linh năm đồng."
          },
          {
            "zh": "我住三零八房间。",
            "py": "Wǒ zhù sān líng bā fángjiān.",
            "vi": "Tôi ở phòng 308."
          },
          {
            "zh": "一千零八十。",
            "py": "Yìqiān líng bāshí.",
            "vi": "Một nghìn không trăm tám mươi."
          },
          {
            "zh": "这件衣服两百零九块。",
            "py": "Zhè jiàn yīfu liǎngbǎi líng jiǔ kuài.",
            "vi": "Bộ quần áo này hai trăm linh chín đồng."
          }
        ]
      },
      {
        "zh": "可乐",
        "py": "kělè",
        "type": "Danh từ",
        "vi": "coca cola",
        "ex": [
          {
            "zh": "你喝可乐吗？",
            "py": "Nǐ hē kělè ma?",
            "vi": "Bạn uống coca cola không?"
          },
          {
            "zh": "我要一杯可乐。",
            "py": "Wǒ yào yī bēi kělè.",
            "vi": "Tôi muốn một ly cola."
          },
          {
            "zh": "可乐不健康。",
            "py": "Kělè bù jiànkāng.",
            "vi": "Coca-cola không tốt cho sức khỏe."
          },
          {
            "zh": "你喝可乐还是茶？",
            "py": "Nǐ hē kělè háishi chá?",
            "vi": "Bạn uống cola hay trà?"
          },
          {
            "zh": "我不喝可乐。",
            "py": "Wǒ bù hē kělè.",
            "vi": "Tôi không uống Coca."
          },
          {
            "zh": "孩子们喜欢喝可乐。",
            "py": "Háizimen xǐhuan hē kělè.",
            "vi": "Bọn trẻ thích uống coca."
          },
          {
            "zh": "可乐多少钱一瓶？",
            "py": "Kělè duōshao qián yì píng?",
            "vi": "Coca bao nhiêu tiền một chai?"
          },
          {
            "zh": "冷可乐很好喝。",
            "py": "Lěng kělè hěn hǎohē.",
            "vi": "Coca lạnh rất ngon."
          },
          {
            "zh": "不要喝太多可乐。",
            "py": "Búyào hē tài duō kělè.",
            "vi": "Đừng uống quá nhiều coca."
          },
          {
            "zh": "他买了三瓶可乐。",
            "py": "Tā mǎile sān píng kělè.",
            "vi": "Anh ấy mua ba chai coca."
          }
        ]
      },
      {
        "zh": "奶茶",
        "py": "nǎichá",
        "type": "Danh từ",
        "vi": "trà sữa",
        "ex": [
          {
            "zh": "这是奶茶，不是咖啡。",
            "py": "Zhè shì nǎichá, bú shì kāfēi.",
            "vi": "Đây là trà sữa, không phải cà phê."
          },
          {
            "zh": "我喜欢喝奶茶。",
            "py": "Wǒ xǐhuān hē nǎichá.",
            "vi": "Tôi thích uống trà sữa."
          },
          {
            "zh": "一杯奶茶多少钱？",
            "py": "Yī bēi nǎichá duōshao qián?",
            "vi": "Một ly trà sữa bao nhiêu tiền?"
          },
          {
            "zh": "奶茶里加珍珠。",
            "py": "Nǎichá lǐ jiā zhēnzhū.",
            "vi": "Trà sữa thêm trân châu."
          },
          {
            "zh": "她喝奶茶。",
            "py": "Tā hē nǎichá.",
            "vi": "Cô ấy uống trà sữa."
          },
          {
            "zh": "这家的奶茶很好喝。",
            "py": "Zhè jiā de nǎichá hěn hǎohē.",
            "vi": "Trà sữa quán này rất ngon."
          },
          {
            "zh": "我请你喝奶茶。",
            "py": "Wǒ qǐng nǐ hē nǎichá.",
            "vi": "Tôi mời bạn uống trà sữa."
          },
          {
            "zh": "我不喝奶茶，只喝茶。",
            "py": "Wǒ bù hē nǎichá, zhǐ hē chá.",
            "vi": "Tôi không uống trà sữa, chỉ uống trà."
          },
          {
            "zh": "下午我们去喝奶茶吧。",
            "py": "Xiàwǔ wǒmen qù hē nǎichá ba.",
            "vi": "Buổi chiều chúng ta đi uống trà sữa nhé."
          },
          {
            "zh": "妹妹买了两杯奶茶。",
            "py": "Mèimei mǎile liǎng bēi nǎichá.",
            "vi": "Em gái mua hai cốc trà sữa."
          }
        ]
      },
      {
        "zh": "咖啡",
        "py": "kāfēi",
        "type": "Danh từ",
        "vi": "cà phê",
        "ex": [
          {
            "zh": "我每天早上喝咖啡。",
            "py": "Wǒ měitiān zǎoshang hē kāfēi.",
            "vi": "Tôi uống cà phê mỗi buổi sáng."
          },
          {
            "zh": "老师在喝咖啡。",
            "py": "Lǎoshī zài hē kāfēi.",
            "vi": "Thầy giáo đang uống cà phê."
          },
          {
            "zh": "你喜欢喝咖啡吗？",
            "py": "Nǐ xǐhuān hē kāfēi ma?",
            "vi": "Bạn có thích uống cà phê không?"
          },
          {
            "zh": "这杯咖啡太苦了。",
            "py": "Zhè bēi kāfēi tài kǔ le.",
            "vi": "Ly cà phê này đắng quá."
          },
          {
            "zh": "爸爸喝咖啡。",
            "py": "Bàba hē kāfēi.",
            "vi": "Bố uống cà phê."
          },
          {
            "zh": "越南咖啡很好喝。",
            "py": "Yuènán kāfēi hěn hǎohē.",
            "vi": "Cà phê Việt Nam rất ngon."
          },
          {
            "zh": "你喝咖啡还是喝茶？",
            "py": "Nǐ hē kāfēi háishì hē chá?",
            "vi": "Bạn uống cà phê hay uống trà?"
          },
          {
            "zh": "我要一杯冷咖啡。",
            "py": "Wǒ yào yì bēi lěng kāfēi.",
            "vi": "Tôi muốn một cốc cà phê lạnh."
          },
          {
            "zh": "经理不喝咖啡。",
            "py": "Jīnglǐ bù hē kāfēi.",
            "vi": "Giám đốc không uống cà phê."
          },
          {
            "zh": "我困了，想喝咖啡。",
            "py": "Wǒ kùn le, xiǎng hē kāfēi.",
            "vi": "Tôi buồn ngủ rồi, muốn uống cà phê."
          }
        ]
      },
      {
        "zh": "酒",
        "py": "jiǔ",
        "type": "Danh từ",
        "vi": "rượu",
        "ex": [
          {
            "zh": "他不喜欢喝酒。",
            "py": "Tā bù xǐhuan hē jiǔ.",
            "vi": "Anh ấy không thích uống rượu."
          },
          {
            "zh": "我不喝酒。",
            "py": "Wǒ bù hē jiǔ.",
            "vi": "Tôi không uống rượu."
          },
          {
            "zh": "中国白酒很烈。",
            "py": "Zhōngguó báijiǔ hěn liè.",
            "vi": "Rượu trắng Trung Quốc rất mạnh."
          },
          {
            "zh": "不能喝酒开车。",
            "py": "Bù néng hē jiǔ kāichē.",
            "vi": "Không được uống rượu lái xe."
          },
          {
            "zh": "爷爷不喝酒。",
            "py": "Yéye bù hē jiǔ.",
            "vi": "Ông nội không uống rượu."
          },
          {
            "zh": "他喜欢喝中国酒。",
            "py": "Tā xǐhuan hē Zhōngguó jiǔ.",
            "vi": "Anh ấy thích uống rượu Trung Quốc."
          },
          {
            "zh": "开车不要喝酒。",
            "py": "Kāichē búyào hē jiǔ.",
            "vi": "Lái xe đừng uống rượu."
          },
          {
            "zh": "这瓶酒很贵。",
            "py": "Zhè píng jiǔ hěn guì.",
            "vi": "Chai rượu này rất đắt."
          },
          {
            "zh": "爸爸生日，我买了一瓶酒。",
            "py": "Bàba shēngrì, wǒ mǎile yì píng jiǔ.",
            "vi": "Sinh nhật bố, tôi mua một chai rượu."
          },
          {
            "zh": "你喝酒吗？",
            "py": "Nǐ hē jiǔ ma?",
            "vi": "Bạn có uống rượu không?"
          }
        ]
      },
      {
        "zh": "水果汁",
        "py": "shuǐguǒzhī",
        "type": "Danh từ",
        "vi": "nước ép hoa quả",
        "ex": [
          {
            "zh": "我要一杯水果汁。",
            "py": "Wǒ yào yī bēi shuǐguǒzhī.",
            "vi": "Tôi muốn một ly nước ép hoa quả."
          },
          {
            "zh": "我要一杯橙子水果汁。",
            "py": "Wǒ yào yī bēi chéngzi shuǐguǒzhī.",
            "vi": "Tôi muốn một ly nước cam."
          },
          {
            "zh": "水果汁比可乐健康。",
            "py": "Shuǐguǒzhī bǐ kělè jiànkāng.",
            "vi": "Nước trái cây tốt cho sức khỏe hơn cola."
          },
          {
            "zh": "妹妹喝水果汁。",
            "py": "Mèimei hē shuǐguǒzhī.",
            "vi": "Em gái uống nước ép trái cây."
          },
          {
            "zh": "这是水果汁吗？",
            "py": "Zhè shì shuǐguǒzhī ma?",
            "vi": "Đây có phải là nước ép trái cây không?"
          },
          {
            "zh": "孩子喜欢喝水果汁。",
            "py": "Háizi xǐhuan hē shuǐguǒzhī.",
            "vi": "Trẻ con thích uống nước ép hoa quả."
          },
          {
            "zh": "水果汁对身体很好。",
            "py": "Shuǐguǒzhī duì shēntǐ hěn hǎo.",
            "vi": "Nước ép hoa quả rất tốt cho sức khỏe."
          },
          {
            "zh": "这儿的水果汁很便宜。",
            "py": "Zhèr de shuǐguǒzhī hěn piányi.",
            "vi": "Nước ép ở đây rất rẻ."
          },
          {
            "zh": "你要咖啡还是水果汁？",
            "py": "Nǐ yào kāfēi háishì shuǐguǒzhī?",
            "vi": "Bạn muốn cà phê hay nước ép hoa quả?"
          },
          {
            "zh": "妈妈给我做了一杯水果汁。",
            "py": "Māma gěi wǒ zuòle yì bēi shuǐguǒzhī.",
            "vi": "Mẹ làm cho tôi một cốc nước ép hoa quả."
          }
        ]
      },
      {
        "zh": "白水",
        "py": "báishuǐ",
        "type": "Danh từ",
        "vi": "nước lọc, nước trắng",
        "ex": [
          {
            "zh": "请给我一杯白水。",
            "py": "Qǐng gěi wǒ yī bēi báishuǐ.",
            "vi": "Xin cho tôi một ly nước lọc."
          },
          {
            "zh": "多喝白水对身体好。",
            "py": "Duō hē báishuǐ duì shēntǐ hǎo.",
            "vi": "Uống nhiều nước lọc tốt cho sức khỏe."
          },
          {
            "zh": "我在喝白水。",
            "py": "Wǒ zài hē báishuǐ.",
            "vi": "Tôi đang uống nước lọc."
          },
          {
            "zh": "我喝白水。",
            "py": "Wǒ hē báishuǐ.",
            "vi": "Tôi uống nước lọc."
          },
          {
            "zh": "白水不是可乐。",
            "py": "Báishuǐ bú shì kělè.",
            "vi": "Nước lọc không phải là Coca."
          },
          {
            "zh": "我只喝白水。",
            "py": "Wǒ zhǐ hē báishuǐ.",
            "vi": "Tôi chỉ uống nước lọc."
          },
          {
            "zh": "吃药要喝白水。",
            "py": "Chī yào yào hē báishuǐ.",
            "vi": "Uống thuốc phải uống bằng nước lọc."
          },
          {
            "zh": "白水对身体最好。",
            "py": "Báishuǐ duì shēntǐ zuì hǎo.",
            "vi": "Nước lọc tốt cho sức khỏe nhất."
          },
          {
            "zh": "你要白水还是可乐？",
            "py": "Nǐ yào báishuǐ háishì kělè?",
            "vi": "Bạn muốn nước lọc hay coca?"
          },
          {
            "zh": "这儿的白水不要钱。",
            "py": "Zhèr de báishuǐ bú yào qián.",
            "vi": "Nước lọc ở đây không mất tiền."
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 6 (b7): 请问贵姓？– Xin hỏi quý danh",
    "words": [
      {
        "zh": "请问",
        "py": "qǐngwèn",
        "type": "Cụm từ",
        "vi": "xin hỏi",
        "ex": [
          {
            "zh": "请问，邮局在哪儿？",
            "py": "Qǐngwèn, yóujú zài nǎr?",
            "vi": "Xin hỏi, bưu điện ở đâu?"
          },
          {
            "zh": "请问，图书馆在哪儿？",
            "py": "Qǐngwèn, túshūguǎn zài nǎr?",
            "vi": "Xin hỏi, thư viện ở đâu ạ?"
          },
          {
            "zh": "请问，您贵姓？",
            "py": "Qǐngwèn, nín guì xìng?",
            "vi": "Xin hỏi, quý danh của ông/bà là gì?"
          },
          {
            "zh": "请问，这附近有银行吗？",
            "py": "Qǐngwèn, zhè fùjìn yǒu yínháng ma?",
            "vi": "Xin hỏi, gần đây có ngân hàng không?"
          },
          {
            "zh": "请问，老师在哪儿？",
            "py": "Qǐngwèn, lǎoshī zài nǎr?",
            "vi": "Xin hỏi, thầy giáo ở đâu?"
          },
          {
            "zh": "请问，这儿有地铁吗？",
            "py": "Qǐngwèn, zhèr yǒu dìtiě ma?",
            "vi": "Xin hỏi, ở đây có tàu điện ngầm không?"
          },
          {
            "zh": "请问，经理在办公室吗？",
            "py": "Qǐngwèn, jīnglǐ zài bàngōngshì ma?",
            "vi": "Xin hỏi, giám đốc có ở văn phòng không?"
          },
          {
            "zh": "请问，这个包子多少钱？",
            "py": "Qǐngwèn, zhège bāozi duōshao qián?",
            "vi": "Xin hỏi, cái bánh bao này bao nhiêu tiền?"
          },
          {
            "zh": "请问，您是哪国人？",
            "py": "Qǐngwèn, nín shì nǎ guó rén?",
            "vi": "Xin hỏi, ngài là người nước nào?"
          },
          {
            "zh": "请问，现在几点？",
            "py": "Qǐngwèn, xiànzài jǐ diǎn?",
            "vi": "Xin hỏi, bây giờ mấy giờ?"
          }
        ]
      },
      {
        "zh": "问",
        "py": "wèn",
        "type": "Động từ",
        "vi": "hỏi",
        "ex": [
          {
            "zh": "我想问你一个问题。",
            "py": "Wǒ xiǎng wèn nǐ yī gè wèntí.",
            "vi": "Tôi muốn hỏi bạn một câu hỏi."
          },
          {
            "zh": "你问谁？",
            "py": "Nǐ wèn shéi?",
            "vi": "Bạn hỏi ai?"
          },
          {
            "zh": "他问我叫什么名字。",
            "py": "Tā wèn wǒ jiào shénme míngzi.",
            "vi": "Anh ấy hỏi tôi tên là gì."
          },
          {
            "zh": "有问题请问老师。",
            "py": "Yǒu wèntí qǐng wèn lǎoshī.",
            "vi": "Có câu hỏi thì hỏi thầy/cô."
          },
          {
            "zh": "我问老师。",
            "py": "Wǒ wèn lǎoshī.",
            "vi": "Tôi hỏi thầy/cô."
          },
          {
            "zh": "你问他吧。",
            "py": "Nǐ wèn tā ba.",
            "vi": "Bạn hỏi anh ấy đi."
          },
          {
            "zh": "我去问一下儿老师。",
            "py": "Wǒ qù wèn yíxiàr lǎoshī.",
            "vi": "Tôi đi hỏi thầy một chút."
          },
          {
            "zh": "他问我是哪国人。",
            "py": "Tā wèn wǒ shì nǎ guó rén.",
            "vi": "Anh ấy hỏi tôi là người nước nào."
          },
          {
            "zh": "你问问营业员吧。",
            "py": "Nǐ wènwen yíngyèyuán ba.",
            "vi": "Bạn hỏi nhân viên giao dịch thử xem."
          },
          {
            "zh": "妈妈问我想吃什么。",
            "py": "Māma wèn wǒ xiǎng chī shénme.",
            "vi": "Mẹ hỏi tôi muốn ăn gì."
          }
        ]
      },
      {
        "zh": "贵姓",
        "py": "guì xìng",
        "type": "Cụm từ",
        "vi": "quý danh (hỏi họ kính ngữ)",
        "ex": [
          {
            "zh": "我问他贵姓。",
            "py": "Wǒ wèn tā guì xìng.",
            "vi": "Tôi hỏi quý danh của ông ấy."
          },
          {
            "zh": "老师贵姓？",
            "py": "Lǎoshī guìxìng?",
            "vi": "Thầy quý danh là gì ạ?"
          },
          {
            "zh": "您贵姓？——我姓王。",
            "py": "Nín guì xìng? — Wǒ xìng Wáng.",
            "vi": "Xin hỏi ông/bà họ gì? — Tôi họ Vương."
          },
          {
            "zh": "请问贵姓？——我姓吴。",
            "py": "Qǐngwèn guì xìng? — Wǒ xìng Wú.",
            "vi": "Xin hỏi quý danh? — Tôi họ Ngô."
          },
          {
            "zh": "他贵姓？",
            "py": "Tā guì xìng?",
            "vi": "Anh ấy quý danh là gì ạ?"
          },
          {
            "zh": "老师，您贵姓？",
            "py": "Lǎoshī, nín guì xìng?",
            "vi": "Thưa thầy, thầy họ gì ạ?"
          },
          {
            "zh": "小姐，请问您贵姓？",
            "py": "Xiǎojie, qǐngwèn nín guì xìng?",
            "vi": "Thưa cô, xin hỏi cô họ gì?"
          },
          {
            "zh": "您贵姓？我姓吴。",
            "py": "Nín guì xìng? Wǒ xìng Wú.",
            "vi": "Ngài họ gì? Tôi họ Ngô."
          },
          {
            "zh": "经理，您贵姓？",
            "py": "Jīnglǐ, nín guì xìng?",
            "vi": "Thưa giám đốc, ngài họ gì ạ?"
          },
          {
            "zh": "阿姨，您贵姓？",
            "py": "Āyí, nín guì xìng?",
            "vi": "Cô ơi, cô họ gì ạ?"
          }
        ]
      },
      {
        "zh": "姓",
        "py": "xìng",
        "type": "Đt/Dt",
        "vi": "họ (là), mang họ",
        "ex": [
          {
            "zh": "我姓王，叫王明。",
            "py": "Wǒ xìng Wáng, jiào Wáng Míng.",
            "vi": "Tôi họ Vương, tên là Vương Minh."
          },
          {
            "zh": "你姓什么？",
            "py": "Nǐ xìng shénme?",
            "vi": "Bạn họ gì?"
          },
          {
            "zh": "我姓阮。",
            "py": "Wǒ xìng Ruǎn.",
            "vi": "Tôi họ Nguyễn."
          },
          {
            "zh": "他姓李，叫李明。",
            "py": "Tā xìng Lǐ, jiào Lǐ Míng.",
            "vi": "Anh ấy họ Lý, tên Lý Minh."
          },
          {
            "zh": "我姓王。",
            "py": "Wǒ xìng Wáng.",
            "vi": "Tôi họ Vương."
          },
          {
            "zh": "我们老师姓马。",
            "py": "Wǒmen lǎoshī xìng Mǎ.",
            "vi": "Thầy của chúng tôi họ Mã."
          },
          {
            "zh": "他姓什么？",
            "py": "Tā xìng shénme?",
            "vi": "Anh ấy họ gì?"
          },
          {
            "zh": "我的同屋姓吴。",
            "py": "Wǒ de tóngwū xìng Wú.",
            "vi": "Bạn cùng phòng của tôi họ Ngô."
          },
          {
            "zh": "你们经理姓什么？",
            "py": "Nǐmen jīnglǐ xìng shénme?",
            "vi": "Giám đốc các bạn họ gì?"
          },
          {
            "zh": "那位医生姓马。",
            "py": "Nà wèi yīshēng xìng Mǎ.",
            "vi": "Vị bác sĩ kia họ Mã."
          }
        ]
      },
      {
        "zh": "叫",
        "py": "jiào",
        "type": "Động từ",
        "vi": "gọi, tên là",
        "ex": [
          {
            "zh": "他叫什么名字？",
            "py": "Tā jiào shénme míngzi?",
            "vi": "Anh ấy tên là gì?"
          },
          {
            "zh": "我妹妹叫小马。",
            "py": "Wǒ mèimei jiào Xiǎo Mǎ.",
            "vi": "Em gái tôi tên là Tiểu Mã."
          },
          {
            "zh": "我叫阮文强。",
            "py": "Wǒ jiào Ruǎn Wénqiáng.",
            "vi": "Tôi tên Nguyễn Văn Cường."
          },
          {
            "zh": "请叫我小李。",
            "py": "Qǐng jiào wǒ Xiǎo Lǐ.",
            "vi": "Hãy gọi tôi là Tiểu Lý."
          },
          {
            "zh": "她叫什么名字？",
            "py": "Tā jiào shénme míngzi?",
            "vi": "Cô ấy tên là gì?"
          },
          {
            "zh": "我叫马文。",
            "py": "Wǒ jiào Mǎ Wén.",
            "vi": "Tôi tên là Mã Văn."
          },
          {
            "zh": "你弟弟叫什么名字？",
            "py": "Nǐ dìdi jiào shénme míngzi?",
            "vi": "Em trai bạn tên là gì?"
          },
          {
            "zh": "这个水果叫什么？",
            "py": "Zhège shuǐguǒ jiào shénme?",
            "vi": "Loại quả này gọi là gì?"
          },
          {
            "zh": "他叫我去他家吃饭。",
            "py": "Tā jiào wǒ qù tā jiā chīfàn.",
            "vi": "Anh ấy gọi tôi đến nhà anh ấy ăn cơm."
          },
          {
            "zh": "你们公司叫什么？",
            "py": "Nǐmen gōngsī jiào shénme?",
            "vi": "Công ty các bạn tên là gì?"
          }
        ]
      },
      {
        "zh": "名字",
        "py": "míngzi",
        "type": "Danh từ",
        "vi": "tên",
        "ex": [
          {
            "zh": "你的名字怎么写？",
            "py": "Nǐ de míngzi zěnme xiě?",
            "vi": "Tên bạn viết như thế nào?"
          },
          {
            "zh": "你妹妹叫什么名字？",
            "py": "Nǐ mèimei jiào shénme míngzi?",
            "vi": "Em gái bạn tên là gì?"
          },
          {
            "zh": "我的中文名字是李明。",
            "py": "Wǒ de Zhōngwén míngzi shì Lǐ Míng.",
            "vi": "Tên tiếng Trung của tôi là Lý Minh."
          },
          {
            "zh": "名字很重要。",
            "py": "Míngzi hěn zhòngyào.",
            "vi": "Tên rất quan trọng."
          },
          {
            "zh": "你的名字很好。",
            "py": "Nǐ de míngzi hěn hǎo.",
            "vi": "Tên của bạn rất hay."
          },
          {
            "zh": "请在这儿写你的中文名字。",
            "py": "Qǐng zài zhèr xiě nǐ de Zhōngwén míngzi.",
            "vi": "Hãy viết tên tiếng Trung của bạn ở đây."
          },
          {
            "zh": "她的名字很好听。",
            "py": "Tā de míngzi hěn hǎotīng.",
            "vi": "Tên cô ấy rất hay."
          },
          {
            "zh": "老师的名字是什么？",
            "py": "Lǎoshī de míngzi shì shénme?",
            "vi": "Tên của thầy là gì?"
          },
          {
            "zh": "这个商店的名字叫什么？",
            "py": "Zhège shāngdiàn de míngzi jiào shénme?",
            "vi": "Cửa hàng này tên là gì?"
          },
          {
            "zh": "我的中文名字叫明。",
            "py": "Wǒ de Zhōngwén míngzi jiào Míng.",
            "vi": "Tên tiếng Trung của tôi là Minh."
          }
        ]
      },
      {
        "zh": "什么",
        "py": "shénme",
        "type": "Đại từ",
        "vi": "cái gì, gì",
        "ex": [
          {
            "zh": "这是什么书？",
            "py": "Zhè shì shénme shū?",
            "vi": "Đây là sách gì?"
          },
          {
            "zh": "这是什么？",
            "py": "Zhè shì shénme?",
            "vi": "Đây là cái gì?"
          },
          {
            "zh": "你叫什么名字？",
            "py": "Nǐ jiào shénme míngzi?",
            "vi": "Bạn tên là gì?"
          },
          {
            "zh": "你在喝什么？",
            "py": "Nǐ zài hē shénme?",
            "vi": "Bạn đang uống gì?"
          },
          {
            "zh": "今天是什么日子？",
            "py": "Jīntiān shì shénme rìzi?",
            "vi": "Hôm nay là ngày gì?"
          },
          {
            "zh": "你想买什么？",
            "py": "Nǐ xiǎng mǎi shénme?",
            "vi": "Bạn muốn mua gì?"
          },
          {
            "zh": "你爸爸做什么工作？",
            "py": "Nǐ bàba zuò shénme gōngzuò?",
            "vi": "Bố bạn làm nghề gì?"
          },
          {
            "zh": "这是什么颜色？",
            "py": "Zhè shì shénme yánsè?",
            "vi": "Đây là màu gì?"
          },
          {
            "zh": "晚饭吃什么？",
            "py": "Wǎnfàn chī shénme?",
            "vi": "Bữa tối ăn gì?"
          },
          {
            "zh": "你喜欢什么水果？",
            "py": "Nǐ xǐhuan shénme shuǐguǒ?",
            "vi": "Bạn thích loại quả gì?"
          }
        ]
      },
      {
        "zh": "谁",
        "py": "shéi",
        "type": "Đại từ",
        "vi": "ai",
        "ex": [
          {
            "zh": "那个人是谁？",
            "py": "Nà gè rén shì shéi?",
            "vi": "Người đó là ai?"
          },
          {
            "zh": "那是谁？",
            "py": "Nà shì shuí?",
            "vi": "Đó là ai?"
          },
          {
            "zh": "谁是你的老师？",
            "py": "Shuí shì nǐ de lǎoshī?",
            "vi": "Ai là thầy/cô giáo của bạn?"
          },
          {
            "zh": "这是谁的茶？",
            "py": "Zhè shì shéi de chá?",
            "vi": "Đây là trà của ai?"
          },
          {
            "zh": "谁是你们的老师？",
            "py": "Shéi shì nǐmen de lǎoshī?",
            "vi": "Ai là thầy của các bạn?"
          },
          {
            "zh": "这是谁的手机？",
            "py": "Zhè shì shéi de shǒujī?",
            "vi": "Đây là điện thoại của ai?"
          },
          {
            "zh": "谁是你们的经理？",
            "py": "Shéi shì nǐmen de jīnglǐ?",
            "vi": "Ai là giám đốc của các bạn?"
          },
          {
            "zh": "你跟谁去旅游？",
            "py": "Nǐ gēn shéi qù lǚyóu?",
            "vi": "Bạn đi du lịch với ai?"
          },
          {
            "zh": "谁想喝咖啡？",
            "py": "Shéi xiǎng hē kāfēi?",
            "vi": "Ai muốn uống cà phê?"
          },
          {
            "zh": "这张照片里的人是谁？",
            "py": "Zhè zhāng zhàopiàn lǐ de rén shì shéi?",
            "vi": "Người trong bức ảnh này là ai?"
          }
        ]
      },
      {
        "zh": "吴",
        "py": "Wú",
        "vi": "họ Ngô",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "请问您贵姓？— 我姓吴。",
            "py": "Qǐngwèn nín guìxìng? — Wǒ xìng Wú.",
            "vi": "Xin hỏi quý danh? — Tôi họ Ngô."
          },
          {
            "zh": "我姓吴。",
            "py": "Wǒ xìng Wú.",
            "vi": "Tôi họ Ngô."
          },
          {
            "zh": "吴老师是我的老师。",
            "py": "Wú lǎoshī shì wǒ de lǎoshī.",
            "vi": "Thầy/cô Ngô là thầy/cô của tôi."
          },
          {
            "zh": "他不姓吴。",
            "py": "Tā bú xìng Wú.",
            "vi": "Anh ấy không họ Ngô."
          },
          {
            "zh": "吴，你好吗？",
            "py": "Wú, nǐ hǎo ma?",
            "vi": "Ngô ơi, bạn khỏe không?"
          },
          {
            "zh": "吴先生是外贸公司的经理。",
            "py": "Wú xiānsheng shì wàimào gōngsī de jīnglǐ.",
            "vi": "Ông Ngô là giám đốc công ty ngoại thương."
          },
          {
            "zh": "吴老师是我们的口语老师。",
            "py": "Wú lǎoshī shì wǒmen de kǒuyǔ lǎoshī.",
            "vi": "Cô Ngô là giáo viên khẩu ngữ của chúng tôi."
          },
          {
            "zh": "吴小姐住在三楼。",
            "py": "Wú xiǎojie zhù zài sān lóu.",
            "vi": "Cô Ngô sống ở tầng ba."
          },
          {
            "zh": "吴医生今天不在医院。",
            "py": "Wú yīshēng jīntiān bú zài yīyuàn.",
            "vi": "Hôm nay bác sĩ Ngô không có ở bệnh viện."
          },
          {
            "zh": "我的朋友也姓吴。",
            "py": "Wǒ de péngyou yě xìng Wú.",
            "vi": "Bạn tôi cũng họ Ngô."
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 7 (b8): 你是哪国人？– Bạn là người nước nào?",
    "words": [
      {
        "zh": "国",
        "py": "guó",
        "type": "Danh từ",
        "vi": "nước, quốc gia",
        "ex": [
          {
            "zh": "你是哪国人？",
            "py": "Nǐ shì nǎ guó rén?",
            "vi": "Bạn là người nước nào?"
          },
          {
            "zh": "我朋友是美国人。",
            "py": "Wǒ péngyou shì Měiguó rén.",
            "vi": "Bạn tôi là người Mỹ."
          },
          {
            "zh": "中国是亚洲大国。",
            "py": "Zhōngguó shì Yàzhōu dàguó.",
            "vi": "Trung Quốc là cường quốc châu Á."
          },
          {
            "zh": "我爱我的国家。",
            "py": "Wǒ ài wǒ de guójiā.",
            "vi": "Tôi yêu đất nước của mình."
          },
          {
            "zh": "中国和美国都是大国家。",
            "py": "Zhōngguó hé Měiguó dōu shì dà guójiā.",
            "vi": "Trung Quốc và Mỹ đều là nước lớn."
          },
          {
            "zh": "他想回国。",
            "py": "Tā xiǎng huí guó.",
            "vi": "Anh ấy muốn về nước."
          },
          {
            "zh": "我们班有五个国的学生。",
            "py": "Wǒmen bān yǒu wǔ ge guó de xuésheng.",
            "vi": "Lớp chúng tôi có học sinh của năm nước."
          },
          {
            "zh": "这是哪国的照相机？",
            "py": "Zhè shì nǎ guó de zhàoxiàngjī?",
            "vi": "Đây là máy ảnh của nước nào?"
          },
          {
            "zh": "她是哪国的留学生？",
            "py": "Tā shì nǎ guó de liúxuéshēng?",
            "vi": "Cô ấy là lưu học sinh nước nào?"
          },
          {
            "zh": "那个国的语言很难。",
            "py": "Nàge guó de yǔyán hěn nán.",
            "vi": "Ngôn ngữ của nước đó rất khó."
          }
        ]
      },
      {
        "zh": "哪",
        "py": "nǎ",
        "type": "Đại từ",
        "vi": "nào, đâu",
        "ex": [
          {
            "zh": "你朋友是哪国人？",
            "py": "Nǐ péngyou shì nǎ guó rén?",
            "vi": "Bạn của bạn là người nước nào?"
          },
          {
            "zh": "这是哪国的书？",
            "py": "Zhè shì nǎ guó de shū?",
            "vi": "Đây là sách của nước nào?"
          },
          {
            "zh": "哪个好？",
            "py": "Nǎge hǎo?",
            "vi": "Cái nào tốt?"
          },
          {
            "zh": "你在哪个城市？",
            "py": "Nǐ zài nǎge chéngshì?",
            "vi": "Bạn đang ở thành phố nào?"
          },
          {
            "zh": "你去哪儿？",
            "py": "Nǐ qù nǎr?",
            "vi": "Bạn đi đâu?"
          },
          {
            "zh": "你喜欢哪本书？",
            "py": "Nǐ xǐhuan nǎ běn shū?",
            "vi": "Bạn thích quyển sách nào?"
          },
          {
            "zh": "你要哪个颜色？",
            "py": "Nǐ yào nǎge yánsè?",
            "vi": "Bạn muốn màu nào?"
          },
          {
            "zh": "哪辆车是你的？",
            "py": "Nǎ liàng chē shì nǐ de?",
            "vi": "Chiếc xe nào là của bạn?"
          },
          {
            "zh": "你在哪个大学学习？",
            "py": "Nǐ zài nǎge dàxué xuéxí?",
            "vi": "Bạn học ở trường đại học nào?"
          },
          {
            "zh": "哪位是吴经理？",
            "py": "Nǎ wèi shì Wú jīnglǐ?",
            "vi": "Vị nào là giám đốc Ngô?"
          }
        ]
      },
      {
        "zh": "越南",
        "py": "Yuènán",
        "type": "Danh từ",
        "vi": "Việt Nam",
        "ex": [
          {
            "zh": "我是越南人。",
            "py": "Wǒ shì Yuènán rén.",
            "vi": "Tôi là người Việt Nam."
          },
          {
            "zh": "我来自越南。",
            "py": "Wǒ láizì Yuènán.",
            "vi": "Tôi đến từ Việt Nam."
          },
          {
            "zh": "越南有很多好吃的食物。",
            "py": "Yuènán yǒu hěn duō hǎochī de shíwù.",
            "vi": "Việt Nam có nhiều đồ ăn ngon."
          },
          {
            "zh": "越南语和汉语不一样。",
            "py": "Yuènányǔ hé Hànyǔ bù yīyàng.",
            "vi": "Tiếng Việt và tiếng Trung không giống nhau."
          },
          {
            "zh": "我朋友在越南学习汉语。",
            "py": "Wǒ péngyou zài Yuènán xuéxí Hànyǔ.",
            "vi": "Bạn tôi học tiếng Trung ở Việt Nam."
          },
          {
            "zh": "越南人喜欢吃米饭。",
            "py": "Yuènán rén xǐhuan chī mǐfàn.",
            "vi": "Người Việt Nam thích ăn cơm."
          },
          {
            "zh": "我是越南河内人。",
            "py": "Wǒ shì Yuènán Hénèi rén.",
            "vi": "Tôi là người Hà Nội, Việt Nam."
          },
          {
            "zh": "越南的米饭很好吃。",
            "py": "Yuènán de mǐfàn hěn hǎochī.",
            "vi": "Cơm Việt Nam rất ngon."
          },
          {
            "zh": "他想去越南旅游。",
            "py": "Tā xiǎng qù Yuènán lǚyóu.",
            "vi": "Anh ấy muốn đi du lịch Việt Nam."
          },
          {
            "zh": "越南有很多摩托车。",
            "py": "Yuènán yǒu hěn duō mótuōchē.",
            "vi": "Việt Nam có rất nhiều xe máy."
          }
        ]
      },
      {
        "zh": "中国",
        "py": "Zhōngguó",
        "type": "Danh từ",
        "vi": "Trung Quốc",
        "ex": [
          {
            "zh": "他从中国来。",
            "py": "Tā cóng Zhōngguó lái.",
            "vi": "Anh ấy đến từ Trung Quốc."
          },
          {
            "zh": "中国有十四亿人口。",
            "py": "Zhōngguó yǒu shísì yì rénkǒu.",
            "vi": "Trung Quốc có 1,4 tỷ dân."
          },
          {
            "zh": "我想去中国旅游。",
            "py": "Wǒ xiǎng qù Zhōngguó lǚyóu.",
            "vi": "Tôi muốn đi du lịch Trung Quốc."
          },
          {
            "zh": "中国菜很好吃。",
            "py": "Zhōngguó cài hěn hǎochī.",
            "vi": "Đồ ăn Trung Quốc rất ngon."
          },
          {
            "zh": "她在中国工作。",
            "py": "Tā zài Zhōngguó gōngzuò.",
            "vi": "Cô ấy làm việc ở Trung Quốc."
          },
          {
            "zh": "中国很大。",
            "py": "Zhōngguó hěn dà.",
            "vi": "Trung Quốc rất rộng lớn."
          },
          {
            "zh": "我想去中国留学。",
            "py": "Wǒ xiǎng qù Zhōngguó liúxué.",
            "vi": "Tôi muốn đi du học Trung Quốc."
          },
          {
            "zh": "中国的商场很大。",
            "py": "Zhōngguó de shāngchǎng hěn dà.",
            "vi": "Trung tâm thương mại ở Trung Quốc rất lớn."
          },
          {
            "zh": "他是中国哪儿人？",
            "py": "Tā shì Zhōngguó nǎr rén?",
            "vi": "Anh ấy là người vùng nào của Trung Quốc?"
          },
          {
            "zh": "我们公司跟中国公司做外贸。",
            "py": "Wǒmen gōngsī gēn Zhōngguó gōngsī zuò wàimào.",
            "vi": "Công ty chúng tôi làm ngoại thương với công ty Trung Quốc."
          }
        ]
      },
      {
        "zh": "美国",
        "py": "Měiguó",
        "type": "Danh từ",
        "vi": "Mỹ (Hoa Kỳ)",
        "ex": [
          {
            "zh": "她是美国人。",
            "py": "Tā shì Měiguó rén.",
            "vi": "Cô ấy là người Mỹ."
          },
          {
            "zh": "美国是一个大国。",
            "py": "Měiguó shì yī gè dàguó.",
            "vi": "Mỹ là một cường quốc."
          },
          {
            "zh": "他在美国留学。",
            "py": "Tā zài Měiguó liúxué.",
            "vi": "Anh ấy đang du học ở Mỹ."
          },
          {
            "zh": "你去过美国吗？",
            "py": "Nǐ qùguò Měiguó ma?",
            "vi": "Bạn đã từng đến Mỹ chưa?"
          },
          {
            "zh": "他是美国人。",
            "py": "Tā shì Měiguó rén.",
            "vi": "Anh ấy là người Mỹ."
          },
          {
            "zh": "我哥哥在美国工作。",
            "py": "Wǒ gēge zài Měiguó gōngzuò.",
            "vi": "Anh trai tôi làm việc ở Mỹ."
          },
          {
            "zh": "美国人说英语。",
            "py": "Měiguó rén shuō Yīngyǔ.",
            "vi": "Người Mỹ nói tiếng Anh."
          },
          {
            "zh": "这个照相机是美国的。",
            "py": "Zhège zhàoxiàngjī shì Měiguó de.",
            "vi": "Cái máy ảnh này là của Mỹ."
          },
          {
            "zh": "她想去美国旅游。",
            "py": "Tā xiǎng qù Měiguó lǚyóu.",
            "vi": "Cô ấy muốn đi du lịch Mỹ."
          },
          {
            "zh": "我们班有两个美国同学。",
            "py": "Wǒmen bān yǒu liǎng ge Měiguó tóngxué.",
            "vi": "Lớp chúng tôi có hai bạn học người Mỹ."
          }
        ]
      },
      {
        "zh": "英国",
        "py": "Yīngguó",
        "type": "Danh từ",
        "vi": "Anh (Vương quốc Anh)",
        "ex": [
          {
            "zh": "英国在欧洲。",
            "py": "Yīngguó zài Ōuzhōu.",
            "vi": "Anh Quốc ở châu Âu."
          },
          {
            "zh": "英国的天气很冷。",
            "py": "Yīngguó de tiānqì hěn lěng.",
            "vi": "Thời tiết ở Anh rất lạnh."
          },
          {
            "zh": "她在英国学习。",
            "py": "Tā zài Yīngguó xuéxí.",
            "vi": "Cô ấy đang học ở Anh."
          },
          {
            "zh": "她是英国人。",
            "py": "Tā shì Yīngguó rén.",
            "vi": "Cô ấy là người Anh."
          },
          {
            "zh": "英国不是美国。",
            "py": "Yīngguó bú shì Měiguó.",
            "vi": "Anh không phải là Mỹ."
          },
          {
            "zh": "他是英国留学生。",
            "py": "Tā shì Yīngguó liúxuéshēng.",
            "vi": "Anh ấy là lưu học sinh người Anh."
          },
          {
            "zh": "英国人喜欢喝红茶。",
            "py": "Yīngguó rén xǐhuan hē hóngchá.",
            "vi": "Người Anh thích uống trà đen."
          },
          {
            "zh": "英国冷不冷？",
            "py": "Yīngguó lěng bu lěng?",
            "vi": "Nước Anh có lạnh không?"
          },
          {
            "zh": "我的英语老师是英国人。",
            "py": "Wǒ de Yīngyǔ lǎoshī shì Yīngguó rén.",
            "vi": "Giáo viên tiếng Anh của tôi là người Anh."
          },
          {
            "zh": "她在英国学习外贸。",
            "py": "Tā zài Yīngguó xuéxí wàimào.",
            "vi": "Cô ấy học ngoại thương ở Anh."
          }
        ]
      },
      {
        "zh": "法国",
        "py": "Fǎguó",
        "type": "Danh từ",
        "vi": "Pháp",
        "ex": [
          {
            "zh": "法国的葡萄酒很有名。",
            "py": "Fǎguó de pútaojiǔ hěn yǒumíng.",
            "vi": "Rượu vang Pháp rất nổi tiếng."
          },
          {
            "zh": "法国的巴黎很美。",
            "py": "Fǎguó de Bālí hěn měi.",
            "vi": "Paris của Pháp rất đẹp."
          },
          {
            "zh": "他喜欢法国电影。",
            "py": "Tā xǐhuān Fǎguó diànyǐng.",
            "vi": "Anh ấy thích phim Pháp."
          },
          {
            "zh": "他去法国。",
            "py": "Tā qù Fǎguó.",
            "vi": "Anh ấy đi Pháp."
          },
          {
            "zh": "法国人学汉语。",
            "py": "Fǎguó rén xué Hànyǔ.",
            "vi": "Người Pháp học tiếng Trung."
          },
          {
            "zh": "这瓶香水是法国的。",
            "py": "Zhè píng xiāngshuǐ shì Fǎguó de.",
            "vi": "Chai nước hoa này là của Pháp."
          },
          {
            "zh": "他去法国学习。",
            "py": "Tā qù Fǎguó xuéxí.",
            "vi": "Anh ấy đi Pháp học."
          },
          {
            "zh": "法国人说法语。",
            "py": "Fǎguó rén shuō Fǎyǔ.",
            "vi": "Người Pháp nói tiếng Pháp."
          },
          {
            "zh": "我有一个法国朋友。",
            "py": "Wǒ yǒu yí ge Fǎguó péngyou.",
            "vi": "Tôi có một người bạn người Pháp."
          },
          {
            "zh": "法国的酒很贵。",
            "py": "Fǎguó de jiǔ hěn guì.",
            "vi": "Rượu Pháp rất đắt."
          }
        ]
      },
      {
        "zh": "德国",
        "py": "Déguó",
        "type": "Danh từ",
        "vi": "Đức",
        "ex": [
          {
            "zh": "德国的汽车很有名。",
            "py": "Déguó de qìchē hěn yǒumíng.",
            "vi": "Ô tô Đức rất nổi tiếng."
          },
          {
            "zh": "德国汽车很有名。",
            "py": "Déguó qìchē hěn yǒumíng.",
            "vi": "Xe hơi Đức rất nổi tiếng."
          },
          {
            "zh": "他在德国工作。",
            "py": "Tā zài Déguó gōngzuò.",
            "vi": "Anh ấy làm việc ở Đức."
          },
          {
            "zh": "她是德国人。",
            "py": "Tā shì Déguó rén.",
            "vi": "Cô ấy là người Đức."
          },
          {
            "zh": "德国很好。",
            "py": "Déguó hěn hǎo.",
            "vi": "Nước Đức rất tốt."
          },
          {
            "zh": "德国汽车很好。",
            "py": "Déguó qìchē hěn hǎo.",
            "vi": "Xe ô tô Đức rất tốt."
          },
          {
            "zh": "他是德国工程师。",
            "py": "Tā shì Déguó gōngchéngshī.",
            "vi": "Anh ấy là kỹ sư người Đức."
          },
          {
            "zh": "德国人喜欢喝啤酒。",
            "py": "Déguó rén xǐhuan hē píjiǔ.",
            "vi": "Người Đức thích uống bia."
          },
          {
            "zh": "我想去德国留学。",
            "py": "Wǒ xiǎng qù Déguó liúxué.",
            "vi": "Tôi muốn đi du học Đức."
          },
          {
            "zh": "德国冷吗？",
            "py": "Déguó lěng ma?",
            "vi": "Nước Đức có lạnh không?"
          }
        ]
      },
      {
        "zh": "韩国",
        "py": "Hánguó",
        "type": "Danh từ",
        "vi": "Hàn Quốc",
        "ex": [
          {
            "zh": "韩国的电影很好看。",
            "py": "Hánguó de diànyǐng hěn hǎokàn.",
            "vi": "Phim Hàn Quốc rất hay."
          },
          {
            "zh": "韩国的食物很好吃。",
            "py": "Hánguó de shíwù hěn hǎochī.",
            "vi": "Đồ ăn Hàn Quốc rất ngon."
          },
          {
            "zh": "我喜欢韩国电视剧。",
            "py": "Wǒ xǐhuān Hánguó diànshìjù.",
            "vi": "Tôi thích phim truyền hình Hàn Quốc."
          },
          {
            "zh": "他去韩国旅游了。",
            "py": "Tā qù Hánguó lǚyóu le.",
            "vi": "Anh ấy đi du lịch Hàn Quốc rồi."
          },
          {
            "zh": "他是韩国人。",
            "py": "Tā shì Hánguó rén.",
            "vi": "Anh ấy là người Hàn Quốc."
          },
          {
            "zh": "韩国的衣服很好看。",
            "py": "Hánguó de yīfu hěn hǎokàn.",
            "vi": "Quần áo Hàn Quốc rất đẹp."
          },
          {
            "zh": "我同屋是韩国人。",
            "py": "Wǒ tóngwū shì Hánguó rén.",
            "vi": "Bạn cùng phòng của tôi là người Hàn Quốc."
          },
          {
            "zh": "她想去韩国旅游。",
            "py": "Tā xiǎng qù Hánguó lǚyóu.",
            "vi": "Cô ấy muốn đi du lịch Hàn Quốc."
          },
          {
            "zh": "韩国人也用筷子。",
            "py": "Hánguó rén yě yòng kuàizi.",
            "vi": "Người Hàn Quốc cũng dùng đũa."
          },
          {
            "zh": "这是韩国手机。",
            "py": "Zhè shì Hánguó shǒujī.",
            "vi": "Đây là điện thoại Hàn Quốc."
          }
        ]
      },
      {
        "zh": "日本",
        "py": "Rìběn",
        "type": "Danh từ",
        "vi": "Nhật Bản",
        "ex": [
          {
            "zh": "日本的食物很好吃。",
            "py": "Rìběn de shíwù hěn hǎochī.",
            "vi": "Đồ ăn Nhật Bản rất ngon."
          },
          {
            "zh": "日本的樱花很美。",
            "py": "Rìběn de yīnghuā hěn měi.",
            "vi": "Hoa anh đào Nhật Bản rất đẹp."
          },
          {
            "zh": "她想去日本旅游。",
            "py": "Tā xiǎng qù Rìběn lǚyóu.",
            "vi": "Cô ấy muốn đi du lịch Nhật Bản."
          },
          {
            "zh": "日本食物很有名。",
            "py": "Rìběn shíwù hěn yǒumíng.",
            "vi": "Đồ ăn Nhật Bản rất nổi tiếng."
          },
          {
            "zh": "我不去日本。",
            "py": "Wǒ bú qù Rìběn.",
            "vi": "Tôi không đi Nhật Bản."
          },
          {
            "zh": "日本的东西很贵。",
            "py": "Rìběn de dōngxi hěn guì.",
            "vi": "Đồ ở Nhật rất đắt."
          },
          {
            "zh": "他在日本工作。",
            "py": "Tā zài Rìběn gōngzuò.",
            "vi": "Anh ấy làm việc ở Nhật."
          },
          {
            "zh": "日本人说日语。",
            "py": "Rìběn rén shuō Rìyǔ.",
            "vi": "Người Nhật nói tiếng Nhật."
          },
          {
            "zh": "我想去日本看看。",
            "py": "Wǒ xiǎng qù Rìběn kànkan.",
            "vi": "Tôi muốn đi Nhật xem thử."
          },
          {
            "zh": "这辆汽车是日本的。",
            "py": "Zhè liàng qìchē shì Rìběn de.",
            "vi": "Chiếc ô tô này là của Nhật."
          }
        ]
      },
      {
        "zh": "芬兰",
        "py": "Fēnlán",
        "type": "Danh từ",
        "vi": "Phần Lan",
        "ex": [
          {
            "zh": "芬兰在北欧。",
            "py": "Fēnlán zài Běi Ōu.",
            "vi": "Phần Lan ở Bắc Âu."
          },
          {
            "zh": "芬兰冬天很冷。",
            "py": "Fēnlán dōngtiān hěn lěng.",
            "vi": "Mùa đông ở Phần Lan rất lạnh."
          },
          {
            "zh": "芬兰的教育很好。",
            "py": "Fēnlán de jiàoyù hěn hǎo.",
            "vi": "Giáo dục ở Phần Lan rất tốt."
          },
          {
            "zh": "她是芬兰人。",
            "py": "Tā shì Fēnlán rén.",
            "vi": "Cô ấy là người Phần Lan."
          },
          {
            "zh": "他去芬兰工作。",
            "py": "Tā qù Fēnlán gōngzuò.",
            "vi": "Anh ấy đi Phần Lan làm việc."
          },
          {
            "zh": "芬兰很冷。",
            "py": "Fēnlán hěn lěng.",
            "vi": "Phần Lan rất lạnh."
          },
          {
            "zh": "芬兰在哪儿？",
            "py": "Fēnlán zài nǎr?",
            "vi": "Phần Lan ở đâu?"
          },
          {
            "zh": "我有一个芬兰同学。",
            "py": "Wǒ yǒu yí ge Fēnlán tóngxué.",
            "vi": "Tôi có một bạn học người Phần Lan."
          },
          {
            "zh": "芬兰人喜欢喝咖啡。",
            "py": "Fēnlán rén xǐhuan hē kāfēi.",
            "vi": "Người Phần Lan thích uống cà phê."
          },
          {
            "zh": "他想去芬兰工作。",
            "py": "Tā xiǎng qù Fēnlán gōngzuò.",
            "vi": "Anh ấy muốn sang Phần Lan làm việc."
          }
        ]
      },
      {
        "zh": "加拿大",
        "py": "Jiānádà",
        "type": "Danh từ",
        "vi": "Canada",
        "ex": [
          {
            "zh": "他是加拿大人。",
            "py": "Tā shì Jiānádà rén.",
            "vi": "Anh ấy là người Canada."
          },
          {
            "zh": "加拿大是一个很大的国家。",
            "py": "Jiānádà shì yī gè hěn dà de guójiā.",
            "vi": "Canada là một quốc gia rất rộng lớn."
          },
          {
            "zh": "他在加拿大留学。",
            "py": "Tā zài Jiānádà liúxué.",
            "vi": "Anh ấy đang du học ở Canada."
          },
          {
            "zh": "我朋友在加拿大。",
            "py": "Wǒ péngyou zài Jiānádà.",
            "vi": "Bạn tôi ở Canada."
          },
          {
            "zh": "她是加拿大人。",
            "py": "Tā shì Jiānádà rén.",
            "vi": "Cô ấy là người Canada."
          },
          {
            "zh": "加拿大很大，人不多。",
            "py": "Jiānádà hěn dà, rén bù duō.",
            "vi": "Canada rất rộng, người không đông."
          },
          {
            "zh": "我姐姐住在加拿大。",
            "py": "Wǒ jiějie zhù zài Jiānádà.",
            "vi": "Chị gái tôi sống ở Canada."
          },
          {
            "zh": "他是加拿大留学生。",
            "py": "Tā shì Jiānádà liúxuéshēng.",
            "vi": "Anh ấy là lưu học sinh Canada."
          },
          {
            "zh": "加拿大冷不冷？",
            "py": "Jiānádà lěng bu lěng?",
            "vi": "Canada có lạnh không?"
          },
          {
            "zh": "我想去加拿大学英语。",
            "py": "Wǒ xiǎng qù Jiānádà xué Yīngyǔ.",
            "vi": "Tôi muốn sang Canada học tiếng Anh."
          }
        ]
      },
      {
        "zh": "菲律宾",
        "py": "Fēilǜbīn",
        "type": "Danh từ",
        "vi": "Philippines",
        "ex": [
          {
            "zh": "菲律宾在东南亚。",
            "py": "Fēilǜbīn zài Dōngnán Yà.",
            "vi": "Philippines ở Đông Nam Á."
          },
          {
            "zh": "菲律宾是东南亚国家。",
            "py": "Fēilǜbīn shì Dōngnányà guójiā.",
            "vi": "Philippines là quốc gia Đông Nam Á."
          },
          {
            "zh": "菲律宾的海滩很美。",
            "py": "Fēilǜbīn de hǎitān hěn měi.",
            "vi": "Bãi biển Philippines rất đẹp."
          },
          {
            "zh": "他是菲律宾人。",
            "py": "Tā shì Fēilǜbīn rén.",
            "vi": "Anh ấy là người Philippines."
          },
          {
            "zh": "我朋友去菲律宾。",
            "py": "Wǒ péngyou qù Fēilǜbīn.",
            "vi": "Bạn tôi đi Philippines."
          },
          {
            "zh": "菲律宾人说英语。",
            "py": "Fēilǜbīn rén shuō Yīngyǔ.",
            "vi": "Người Philippines nói tiếng Anh."
          },
          {
            "zh": "她是菲律宾护士。",
            "py": "Tā shì Fēilǜbīn hùshi.",
            "vi": "Cô ấy là y tá người Philippines."
          },
          {
            "zh": "菲律宾的芒果很好吃。",
            "py": "Fēilǜbīn de mángguǒ hěn hǎochī.",
            "vi": "Xoài Philippines rất ngon."
          },
          {
            "zh": "我们公司有菲律宾职员。",
            "py": "Wǒmen gōngsī yǒu Fēilǜbīn zhíyuán.",
            "vi": "Công ty chúng tôi có nhân viên người Philippines."
          },
          {
            "zh": "他想去菲律宾旅游。",
            "py": "Tā xiǎng qù Fēilǜbīn lǚyóu.",
            "vi": "Anh ấy muốn đi du lịch Philippines."
          }
        ]
      },
      {
        "zh": "老挝",
        "py": "Lǎowō",
        "type": "Danh từ",
        "vi": "Lào",
        "ex": [
          {
            "zh": "老挝在越南旁边。",
            "py": "Lǎowō zài Yuènán pángbiān.",
            "vi": "Lào ở bên cạnh Việt Nam."
          },
          {
            "zh": "老挝是越南的邻国。",
            "py": "Lǎowō shì Yuènán de línguó.",
            "vi": "Lào là nước láng giềng của Việt Nam."
          },
          {
            "zh": "老挝的首都是万象。",
            "py": "Lǎowō de shǒudū shì Wànxiàng.",
            "vi": "Thủ đô của Lào là Viêng Chăn."
          },
          {
            "zh": "她是老挝人。",
            "py": "Tā shì Lǎowō rén.",
            "vi": "Cô ấy là người Lào."
          },
          {
            "zh": "他去老挝工作。",
            "py": "Tā qù Lǎowō gōngzuò.",
            "vi": "Anh ấy đi Lào làm việc."
          },
          {
            "zh": "老挝人很好。",
            "py": "Lǎowō rén hěn hǎo.",
            "vi": "Người Lào rất tốt bụng."
          },
          {
            "zh": "我想去老挝旅游。",
            "py": "Wǒ xiǎng qù Lǎowō lǚyóu.",
            "vi": "Tôi muốn đi du lịch Lào."
          },
          {
            "zh": "他是老挝留学生。",
            "py": "Tā shì Lǎowō liúxuéshēng.",
            "vi": "Anh ấy là lưu học sinh Lào."
          },
          {
            "zh": "老挝的咖啡很香。",
            "py": "Lǎowō de kāfēi hěn xiāng.",
            "vi": "Cà phê Lào rất thơm."
          },
          {
            "zh": "我们班有一个老挝同学。",
            "py": "Wǒmen bān yǒu yí ge Lǎowō tóngxué.",
            "vi": "Lớp chúng tôi có một bạn học người Lào."
          }
        ]
      },
      {
        "zh": "泰国",
        "py": "Tàiguó",
        "type": "Danh từ",
        "vi": "Thái Lan",
        "ex": [
          {
            "zh": "泰国的食物很好吃。",
            "py": "Tàiguó de shíwù hěn hǎochī.",
            "vi": "Đồ ăn Thái Lan rất ngon."
          },
          {
            "zh": "他是泰国人吗？",
            "py": "Tā shì Tàiguó rén ma?",
            "vi": "Anh ấy là người Thái Lan phải không?"
          },
          {
            "zh": "我想去泰国旅游。",
            "py": "Wǒ xiǎng qù Tàiguó lǚyóu.",
            "vi": "Tôi muốn đi du lịch Thái Lan."
          },
          {
            "zh": "我们去泰国。",
            "py": "Wǒmen qù Tàiguó.",
            "vi": "Chúng tôi đi Thái Lan."
          },
          {
            "zh": "她是泰国人。",
            "py": "Tā shì Tàiguó rén.",
            "vi": "Cô ấy là người Thái Lan."
          },
          {
            "zh": "泰国的水果很多。",
            "py": "Tàiguó de shuǐguǒ hěn duō.",
            "vi": "Thái Lan có rất nhiều hoa quả."
          },
          {
            "zh": "我们去泰国旅游吧。",
            "py": "Wǒmen qù Tàiguó lǚyóu ba.",
            "vi": "Chúng ta đi du lịch Thái Lan đi."
          },
          {
            "zh": "我的同屋是泰国人。",
            "py": "Wǒ de tóngwū shì Tàiguó rén.",
            "vi": "Bạn cùng phòng của tôi là người Thái Lan."
          },
          {
            "zh": "泰国的芒果很便宜。",
            "py": "Tàiguó de mángguǒ hěn piányi.",
            "vi": "Xoài Thái Lan rất rẻ."
          },
          {
            "zh": "他在泰国工作。",
            "py": "Tā zài Tàiguó gōngzuò.",
            "vi": "Anh ấy làm việc ở Thái Lan."
          }
        ]
      },
      {
        "zh": "台湾",
        "py": "Táiwān",
        "type": "Danh từ",
        "vi": "Đài Loan",
        "ex": [
          {
            "zh": "台湾的水果很有名。",
            "py": "Táiwān de shuǐguǒ hěn yǒumíng.",
            "vi": "Hoa quả Đài Loan rất nổi tiếng."
          },
          {
            "zh": "台湾的小吃很有名。",
            "py": "Táiwān de xiǎochī hěn yǒumíng.",
            "vi": "Đồ ăn vặt của Đài Loan rất nổi tiếng."
          },
          {
            "zh": "他来自台湾。",
            "py": "Tā láizì Táiwān.",
            "vi": "Anh ấy đến từ Đài Loan."
          },
          {
            "zh": "他去台湾。",
            "py": "Tā qù Táiwān.",
            "vi": "Anh ấy đi Đài Loan."
          },
          {
            "zh": "她是台湾人。",
            "py": "Tā shì Táiwān rén.",
            "vi": "Cô ấy là người Đài Loan."
          },
          {
            "zh": "台湾的奶茶很好喝。",
            "py": "Táiwān de nǎichá hěn hǎohē.",
            "vi": "Trà sữa Đài Loan rất ngon."
          },
          {
            "zh": "我们的口语老师是台湾人。",
            "py": "Wǒmen de kǒuyǔ lǎoshī shì Táiwān rén.",
            "vi": "Giáo viên khẩu ngữ của chúng tôi là người Đài Loan."
          },
          {
            "zh": "我想去台湾旅游。",
            "py": "Wǒ xiǎng qù Táiwān lǚyóu.",
            "vi": "Tôi muốn đi du lịch Đài Loan."
          },
          {
            "zh": "他在台湾学汉语。",
            "py": "Tā zài Táiwān xué Hànyǔ.",
            "vi": "Anh ấy học tiếng Trung ở Đài Loan."
          },
          {
            "zh": "台湾的水果很好吃。",
            "py": "Táiwān de shuǐguǒ hěn hǎochī.",
            "vi": "Hoa quả Đài Loan rất ngon."
          }
        ]
      },
      {
        "zh": "柬埔寨",
        "py": "Jiǎnpǔzhài",
        "type": "Danh từ",
        "vi": "Campuchia",
        "ex": [
          {
            "zh": "柬埔寨在越南旁边。",
            "py": "Jiǎnpǔzhài zài Yuènán pángbiān.",
            "vi": "Campuchia ở bên cạnh Việt Nam."
          },
          {
            "zh": "柬埔寨有著名的吴哥窟。",
            "py": "Jiǎnpǔzhài yǒu zhùmíng de Wúgēkū.",
            "vi": "Campuchia có Angkor Wat nổi tiếng."
          },
          {
            "zh": "柬埔寨也是东南亚国家。",
            "py": "Jiǎnpǔzhài yě shì Dōngnányà guójiā.",
            "vi": "Campuchia cũng là quốc gia Đông Nam Á."
          },
          {
            "zh": "他是柬埔寨人。",
            "py": "Tā shì Jiǎnpǔzhài rén.",
            "vi": "Anh ấy là người Campuchia."
          },
          {
            "zh": "我朋友去柬埔寨。",
            "py": "Wǒ péngyou qù Jiǎnpǔzhài.",
            "vi": "Bạn tôi đi Campuchia."
          },
          {
            "zh": "我想去柬埔寨看看。",
            "py": "Wǒ xiǎng qù Jiǎnpǔzhài kànkan.",
            "vi": "Tôi muốn đến Campuchia xem."
          },
          {
            "zh": "他在柬埔寨工作。",
            "py": "Tā zài Jiǎnpǔzhài gōngzuò.",
            "vi": "Anh ấy làm việc ở Campuchia."
          },
          {
            "zh": "柬埔寨的芒果很好吃。",
            "py": "Jiǎnpǔzhài de mángguǒ hěn hǎochī.",
            "vi": "Xoài Campuchia rất ngon."
          },
          {
            "zh": "我们公司在柬埔寨有办公室。",
            "py": "Wǒmen gōngsī zài Jiǎnpǔzhài yǒu bàngōngshì.",
            "vi": "Công ty chúng tôi có văn phòng ở Campuchia."
          },
          {
            "zh": "我有一个柬埔寨朋友。",
            "py": "Wǒ yǒu yí ge Jiǎnpǔzhài péngyou.",
            "vi": "Tôi có một người bạn Campuchia."
          }
        ]
      },
      {
        "zh": "汉字",
        "py": "Hànzì",
        "type": "Danh từ",
        "vi": "chữ Hán",
        "ex": [
          {
            "zh": "汉字很难写，但是很美。",
            "py": "Hànzì hěn nán xiě, dànshì hěn měi.",
            "vi": "Chữ Hán rất khó viết nhưng rất đẹp."
          },
          {
            "zh": "汉字很难写。",
            "py": "Hànzì hěn nán xiě.",
            "vi": "Chữ Hán rất khó viết."
          },
          {
            "zh": "我每天练习写汉字。",
            "py": "Wǒ měitiān liànxí xiě Hànzì.",
            "vi": "Mỗi ngày tôi luyện viết chữ Hán."
          },
          {
            "zh": "汉字有很多笔画。",
            "py": "Hànzì yǒu hěn duō bǐhuà.",
            "vi": "Chữ Hán có nhiều nét."
          },
          {
            "zh": "学汉语要学汉字。",
            "py": "Xué Hànyǔ yào xué Hànzì.",
            "vi": "Học tiếng Trung phải học chữ Hán."
          },
          {
            "zh": "这个汉字怎么读？",
            "py": "Zhège Hànzì zěnme dú?",
            "vi": "Chữ Hán này đọc thế nào?"
          },
          {
            "zh": "我喜欢写汉字。",
            "py": "Wǒ xǐhuan xiě Hànzì.",
            "vi": "Tôi thích viết chữ Hán."
          },
          {
            "zh": "汉字难不难？",
            "py": "Hànzì nán bu nán?",
            "vi": "Chữ Hán có khó không?"
          },
          {
            "zh": "这个汉字是什么意思？",
            "py": "Zhège Hànzì shì shénme yìsi?",
            "vi": "Chữ Hán này có nghĩa là gì?"
          },
          {
            "zh": "他写的汉字很好看。",
            "py": "Tā xiě de Hànzì hěn hǎokàn.",
            "vi": "Chữ Hán anh ấy viết rất đẹp."
          }
        ]
      },
      {
        "zh": "学习",
        "py": "xuéxí",
        "type": "Động từ",
        "vi": "học tập",
        "ex": [
          {
            "zh": "我每天学习汉语。",
            "py": "Wǒ měitiān xuéxí Hànyǔ.",
            "vi": "Tôi học tiếng Hán mỗi ngày."
          },
          {
            "zh": "你学习认真吗？",
            "py": "Nǐ xuéxí rènzhēn ma?",
            "vi": "Bạn có học tập chăm chỉ không?"
          },
          {
            "zh": "学习汉语很有意思。",
            "py": "Xuéxí Hànyǔ hěn yǒu yìsi.",
            "vi": "Học tiếng Trung rất thú vị."
          },
          {
            "zh": "我每天坚持学习。",
            "py": "Wǒ měitiān jiānchí xuéxí.",
            "vi": "Mỗi ngày tôi kiên trì học tập."
          },
          {
            "zh": "学习是最好的投资。",
            "py": "Xuéxí shì zuì hǎo de tóuzī.",
            "vi": "Học tập là đầu tư tốt nhất."
          },
          {
            "zh": "弟弟在房间里学习。",
            "py": "Dìdi zài fángjiān lǐ xuéxí.",
            "vi": "Em trai đang học trong phòng."
          },
          {
            "zh": "她学习很好。",
            "py": "Tā xuéxí hěn hǎo.",
            "vi": "Cô ấy học rất giỏi."
          },
          {
            "zh": "他学习很忙。",
            "py": "Tā xuéxí hěn máng.",
            "vi": "Anh ấy bận việc học."
          },
          {
            "zh": "我和同屋晚上学习。",
            "py": "Wǒ hé tóngwū wǎnshang xuéxí.",
            "vi": "Tôi và bạn cùng phòng học vào buổi tối."
          },
          {
            "zh": "她在北京学习外贸。",
            "py": "Tā zài Běijīng xuéxí wàimào.",
            "vi": "Cô ấy học ngoại thương ở Bắc Kinh."
          }
        ]
      },
      {
        "zh": "发音",
        "py": "fāyīn",
        "type": "Danh từ",
        "vi": "phát âm",
        "ex": [
          {
            "zh": "汉语发音很难学。",
            "py": "Hànyǔ fāyīn hěn nán xué.",
            "vi": "Phát âm tiếng Hán rất khó học."
          },
          {
            "zh": "汉语发音很难。",
            "py": "Hànyǔ fāyīn hěn nán.",
            "vi": "Phát âm tiếng Trung rất khó."
          },
          {
            "zh": "你的发音很标准。",
            "py": "Nǐ de fāyīn hěn biāozhǔn.",
            "vi": "Phát âm của bạn rất chuẩn."
          },
          {
            "zh": "我要练习发音。",
            "py": "Wǒ yào liànxí fāyīn.",
            "vi": "Tôi muốn luyện tập phát âm."
          },
          {
            "zh": "声调影响发音。",
            "py": "Shēngdiào yǐngxiǎng fāyīn.",
            "vi": "Thanh điệu ảnh hưởng đến phát âm."
          },
          {
            "zh": "这个字的发音很难。",
            "py": "Zhège zì de fāyīn hěn nán.",
            "vi": "Phát âm của chữ này rất khó."
          },
          {
            "zh": "老师的发音很好。",
            "py": "Lǎoshī de fāyīn hěn hǎo.",
            "vi": "Phát âm của thầy rất chuẩn."
          },
          {
            "zh": "我的发音对不对？",
            "py": "Wǒ de fāyīn duì bu duì?",
            "vi": "Phát âm của tôi có đúng không?"
          },
          {
            "zh": "请听我的发音。",
            "py": "Qǐng tīng wǒ de fāyīn.",
            "vi": "Hãy nghe phát âm của tôi."
          },
          {
            "zh": "我想学好汉语发音。",
            "py": "Wǒ xiǎng xuéhǎo Hànyǔ fāyīn.",
            "vi": "Tôi muốn học tốt phát âm tiếng Trung."
          }
        ]
      },
      {
        "zh": "书",
        "py": "shū",
        "type": "Danh từ",
        "vi": "sách",
        "ex": [
          {
            "zh": "这是汉语书。",
            "py": "Zhè shì Hànyǔ shū.",
            "vi": "Đây là sách tiếng Trung."
          },
          {
            "zh": "你在看什么书？",
            "py": "Nǐ zài kàn shénme shū?",
            "vi": "Bạn đang đọc sách gì?"
          },
          {
            "zh": "老师的书在那儿。",
            "py": "Lǎoshī de shū zài nàr.",
            "vi": "Sách của thầy ở đằng kia."
          },
          {
            "zh": "图书馆有很多书。",
            "py": "Túshūguǎn yǒu hěn duō shū.",
            "vi": "Thư viện có rất nhiều sách."
          },
          {
            "zh": "这是我的书。",
            "py": "Zhè shì wǒ de shū.",
            "vi": "Đây là sách của tôi."
          },
          {
            "zh": "这本书很重。",
            "py": "Zhè běn shū hěn zhòng.",
            "vi": "Quyển sách này rất nặng."
          },
          {
            "zh": "他买了三本书。",
            "py": "Tā mǎile sān běn shū.",
            "vi": "Anh ấy mua ba quyển sách."
          },
          {
            "zh": "这是谁的书？",
            "py": "Zhè shì shéi de shū?",
            "vi": "Đây là sách của ai?"
          },
          {
            "zh": "我喜欢看中文书。",
            "py": "Wǒ xǐhuan kàn Zhōngwén shū.",
            "vi": "Tôi thích đọc sách tiếng Trung."
          },
          {
            "zh": "书在箱子里。",
            "py": "Shū zài xiāngzi lǐ.",
            "vi": "Sách ở trong vali."
          }
        ]
      },
      {
        "zh": "杂志",
        "py": "zázhì",
        "type": "Danh từ",
        "vi": "tạp chí",
        "ex": [
          {
            "zh": "我买了一本汉语杂志。",
            "py": "Wǒ mǎi le yī běn Hànyǔ zázhì.",
            "vi": "Tôi đã mua một quyển tạp chí tiếng Hán."
          },
          {
            "zh": "我喜欢看杂志。",
            "py": "Wǒ xǐhuān kàn zázhì.",
            "vi": "Tôi thích đọc tạp chí."
          },
          {
            "zh": "书店里有很多杂志。",
            "py": "Shūdiàn lǐ yǒu hěn duō zázhì.",
            "vi": "Trong hiệu sách có rất nhiều tạp chí."
          },
          {
            "zh": "这本杂志很有意思。",
            "py": "Zhè běn zázhì hěn yǒu yìsi.",
            "vi": "Tạp chí này rất thú vị."
          },
          {
            "zh": "那是杂志吗？",
            "py": "Nà shì zázhì ma?",
            "vi": "Đó có phải là tạp chí không?"
          },
          {
            "zh": "这本杂志是中文的。",
            "py": "Zhè běn zázhì shì Zhōngwén de.",
            "vi": "Quyển tạp chí này là tiếng Trung."
          },
          {
            "zh": "我想买一本英语杂志。",
            "py": "Wǒ xiǎng mǎi yì běn Yīngyǔ zázhì.",
            "vi": "Tôi muốn mua một quyển tạp chí tiếng Anh."
          },
          {
            "zh": "图书馆有很多杂志。",
            "py": "Túshūguǎn yǒu hěn duō zázhì.",
            "vi": "Thư viện có rất nhiều tạp chí."
          },
          {
            "zh": "那是谁的杂志？",
            "py": "Nà shì shéi de zázhì?",
            "vi": "Kia là tạp chí của ai?"
          },
          {
            "zh": "妈妈喜欢看杂志。",
            "py": "Māma xǐhuan kàn zázhì.",
            "vi": "Mẹ thích đọc tạp chí."
          }
        ]
      },
      {
        "zh": "的",
        "py": "de",
        "type": "Trợ từ",
        "vi": "của (sở hữu / định ngữ)",
        "ex": [
          {
            "zh": "那是老师的杂志。",
            "py": "Nà shì lǎoshī de zázhì.",
            "vi": "Kia là tạp chí của thầy giáo."
          },
          {
            "zh": "这是我朋友的书。",
            "py": "Zhè shì wǒ péngyou de shū.",
            "vi": "Đây là sách của bạn tôi."
          },
          {
            "zh": "他的汉语很好。",
            "py": "Tā de Hànyǔ hěn hǎo.",
            "vi": "Tiếng Trung của anh ấy rất tốt."
          },
          {
            "zh": "漂亮的花。",
            "py": "Piàoliang de huā.",
            "vi": "Bông hoa đẹp."
          },
          {
            "zh": "我买的东西。",
            "py": "Wǒ mǎi de dōngxi.",
            "vi": "Đồ tôi mua."
          },
          {
            "zh": "这是我的词典。",
            "py": "Zhè shì wǒ de cídiǎn.",
            "vi": "Đây là từ điển của tôi."
          },
          {
            "zh": "黄色的香蕉很好吃。",
            "py": "Huángsè de xiāngjiāo hěn hǎochī.",
            "vi": "Chuối màu vàng rất ngon."
          },
          {
            "zh": "他是我哥哥的朋友。",
            "py": "Tā shì wǒ gēge de péngyou.",
            "vi": "Anh ấy là bạn của anh trai tôi."
          },
          {
            "zh": "新的手机很贵。",
            "py": "Xīn de shǒujī hěn guì.",
            "vi": "Điện thoại mới rất đắt."
          },
          {
            "zh": "我们学校的食堂很大。",
            "py": "Wǒmen xuéxiào de shítáng hěn dà.",
            "vi": "Nhà ăn của trường chúng tôi rất lớn."
          }
        ]
      },
      {
        "zh": "国家",
        "py": "guójiā",
        "type": "Danh từ",
        "vi": "quốc gia, đất nước",
        "ex": [
          {
            "zh": "你的国家在哪儿？",
            "py": "Nǐ de guójiā zài nǎr?",
            "vi": "Đất nước của bạn ở đâu?"
          },
          {
            "zh": "中国是一个大国家。",
            "py": "Zhōngguó shì yī gè dà guójiā.",
            "vi": "Trung Quốc là một quốc gia lớn."
          },
          {
            "zh": "你的国家在哪里？",
            "py": "Nǐ de guójiā zài nǎlǐ?",
            "vi": "Đất nước của bạn ở đâu?"
          },
          {
            "zh": "每个国家都有自己的文化。",
            "py": "Měi gè guójiā dōu yǒu zìjǐ de wénhuà.",
            "vi": "Mỗi quốc gia đều có văn hóa riêng."
          },
          {
            "zh": "越南是我的国家。",
            "py": "Yuènán shì wǒ de guójiā.",
            "vi": "Việt Nam là đất nước của tôi."
          },
          {
            "zh": "你喜欢哪个国家？",
            "py": "Nǐ xǐhuan nǎge guójiā?",
            "vi": "Bạn thích quốc gia nào?"
          },
          {
            "zh": "我们班有很多国家的学生。",
            "py": "Wǒmen bān yǒu hěn duō guójiā de xuésheng.",
            "vi": "Lớp chúng tôi có học sinh của nhiều quốc gia."
          },
          {
            "zh": "这个国家很大。",
            "py": "Zhège guójiā hěn dà.",
            "vi": "Đất nước này rất rộng lớn."
          },
          {
            "zh": "你是哪个国家的人？",
            "py": "Nǐ shì nǎge guójiā de rén?",
            "vi": "Bạn là người nước nào?"
          },
          {
            "zh": "他想去别的国家工作。",
            "py": "Tā xiǎng qù biéde guójiā gōngzuò.",
            "vi": "Anh ấy muốn đến nước khác làm việc."
          }
        ]
      },
      {
        "zh": "不是",
        "py": "bú shì",
        "type": "Cụm từ",
        "vi": "không phải là",
        "ex": [
          {
            "zh": "不，我不是中国人，我是越南人。",
            "py": "Bù, wǒ bú shì Zhōngguó rén, wǒ shì Yuènán rén.",
            "vi": "Không, tôi không phải người Trung Quốc, tôi là người Việt Nam."
          },
          {
            "zh": "我不是中国人。",
            "py": "Wǒ bú shì Zhōngguó rén.",
            "vi": "Tôi không phải người Trung Quốc."
          },
          {
            "zh": "这不是我的书。",
            "py": "Zhè bú shì wǒ de shū.",
            "vi": "Đây không phải sách của tôi."
          },
          {
            "zh": "他不是老师，是学生。",
            "py": "Tā bú shì lǎoshī, shì xuéshēng.",
            "vi": "Anh ấy không phải thầy giáo, là học sinh."
          },
          {
            "zh": "她不是老师。",
            "py": "Tā bú shì lǎoshī.",
            "vi": "Cô ấy không phải là giáo viên."
          },
          {
            "zh": "这不是我的箱子。",
            "py": "Zhè bú shì wǒ de xiāngzi.",
            "vi": "Đây không phải vali của tôi."
          },
          {
            "zh": "她不是护士，是医生。",
            "py": "Tā bú shì hùshi, shì yīshēng.",
            "vi": "Cô ấy không phải y tá, là bác sĩ."
          },
          {
            "zh": "今天不是星期天。",
            "py": "Jīntiān bú shì xīngqītiān.",
            "vi": "Hôm nay không phải Chủ nhật."
          },
          {
            "zh": "这不是中药，是西药。",
            "py": "Zhè bú shì zhōngyào, shì xīyào.",
            "vi": "Đây không phải thuốc bắc, là thuốc tây."
          },
          {
            "zh": "我不是日本人，是越南人。",
            "py": "Wǒ bú shì Rìběn rén, shì Yuènán rén.",
            "vi": "Tôi không phải người Nhật, là người Việt Nam."
          }
        ]
      },
      {
        "zh": "朋友",
        "py": "péngyou",
        "type": "Danh từ",
        "vi": "bạn bè",
        "ex": [
          {
            "zh": "他是我的好朋友。",
            "py": "Tā shì wǒ de hǎo péngyou.",
            "vi": "Anh ấy là bạn tốt của tôi."
          },
          {
            "zh": "他是我最好的朋友。",
            "py": "Tā shì wǒ zuì hǎo de péngyou.",
            "vi": "Anh ấy là người bạn tốt nhất của tôi."
          },
          {
            "zh": "我有很多中国朋友。",
            "py": "Wǒ yǒu hěn duō Zhōngguó péngyou.",
            "vi": "Tôi có nhiều bạn người Trung Quốc."
          },
          {
            "zh": "朋友，我们一起去吧！",
            "py": "Péngyou, wǒmen yīqǐ qù ba!",
            "vi": "Bạn ơi, chúng ta cùng đi đi!"
          },
          {
            "zh": "他是我的朋友。",
            "py": "Tā shì wǒ de péngyou.",
            "vi": "Anh ấy là bạn của tôi."
          },
          {
            "zh": "我的朋友在银行工作。",
            "py": "Wǒ de péngyou zài yínháng gōngzuò.",
            "vi": "Bạn tôi làm việc ở ngân hàng."
          },
          {
            "zh": "他有很多中国朋友。",
            "py": "Tā yǒu hěn duō Zhōngguó péngyou.",
            "vi": "Anh ấy có nhiều bạn người Trung Quốc."
          },
          {
            "zh": "周末我跟朋友去喝咖啡。",
            "py": "Zhōumò wǒ gēn péngyou qù hē kāfēi.",
            "vi": "Cuối tuần tôi đi uống cà phê với bạn."
          },
          {
            "zh": "这是我的好朋友小马。",
            "py": "Zhè shì wǒ de hǎo péngyou Xiǎo Mǎ.",
            "vi": "Đây là bạn thân của tôi, Tiểu Mã."
          },
          {
            "zh": "我给朋友寄了一些照片。",
            "py": "Wǒ gěi péngyou jìle yìxiē zhàopiàn.",
            "vi": "Tôi gửi cho bạn một ít ảnh."
          }
        ]
      },
      {
        "zh": "俄国",
        "py": "Éguó",
        "vi": "nước Nga",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "他是俄国人。",
            "py": "Tā shì Éguó rén.",
            "vi": "Anh ấy là người Nga."
          },
          {
            "zh": "我学习俄语，他是俄国人。",
            "py": "Wǒ xuéxí Éyǔ, tā shì Éguó rén.",
            "vi": "Tôi học tiếng Nga, anh ấy là người Nga."
          },
          {
            "zh": "俄国很大。",
            "py": "Éguó hěn dà.",
            "vi": "Nước Nga rất rộng lớn."
          },
          {
            "zh": "我朋友在俄国。",
            "py": "Wǒ péngyou zài Éguó.",
            "vi": "Bạn tôi ở Nga."
          },
          {
            "zh": "她去俄国工作。",
            "py": "Tā qù Éguó gōngzuò.",
            "vi": "Cô ấy đi Nga làm việc."
          },
          {
            "zh": "俄国人喜欢喝茶。",
            "py": "Éguó rén xǐhuan hē chá.",
            "vi": "Người Nga thích uống trà."
          },
          {
            "zh": "俄国很冷。",
            "py": "Éguó hěn lěng.",
            "vi": "Nước Nga rất lạnh."
          },
          {
            "zh": "她在俄国留学。",
            "py": "Tā zài Éguó liúxué.",
            "vi": "Cô ấy du học ở Nga."
          },
          {
            "zh": "我们班有一个俄国同学。",
            "py": "Wǒmen bān yǒu yí ge Éguó tóngxué.",
            "vi": "Lớp chúng tôi có một bạn học người Nga."
          },
          {
            "zh": "俄国人说俄语。",
            "py": "Éguó rén shuō Éyǔ.",
            "vi": "Người Nga nói tiếng Nga."
          }
        ]
      },
      {
        "zh": "还是",
        "py": "háishì",
        "vi": "hay là (câu hỏi lựa chọn)",
        "type": "Liên từ",
        "ex": [
          {
            "zh": "他是男的还是女的？",
            "py": "Tā shì nán de háishì nǚ de?",
            "vi": "Anh ấy là nam hay là nữ?"
          },
          {
            "zh": "你是中国人还是越南人？",
            "py": "Nǐ shì Zhōngguó rén háishì Yuènán rén?",
            "vi": "Bạn là người Trung Quốc hay người Việt Nam?"
          },
          {
            "zh": "你喝茶还是喝咖啡？",
            "py": "Nǐ hē chá háishì hē kāfēi?",
            "vi": "Bạn uống trà hay uống cà phê?"
          },
          {
            "zh": "这是书还是杂志？",
            "py": "Zhè shì shū háishì zázhì?",
            "vi": "Đây là sách hay là tạp chí?"
          },
          {
            "zh": "你去美国还是英国？",
            "py": "Nǐ qù Měiguó háishì Yīngguó?",
            "vi": "Bạn đi Mỹ hay đi Anh?"
          },
          {
            "zh": "你是学生还是老师？",
            "py": "Nǐ shì xuésheng háishì lǎoshī?",
            "vi": "Bạn là học sinh hay giáo viên?"
          },
          {
            "zh": "我们坐地铁还是坐出租车？",
            "py": "Wǒmen zuò dìtiě háishì zuò chūzūchē?",
            "vi": "Chúng ta đi tàu điện ngầm hay đi taxi?"
          },
          {
            "zh": "你要红色的还是黑色的？",
            "py": "Nǐ yào hóngsè de háishì hēisè de?",
            "vi": "Bạn muốn cái màu đỏ hay màu đen?"
          },
          {
            "zh": "今天星期三还是星期四？",
            "py": "Jīntiān xīngqīsān háishì xīngqīsì?",
            "vi": "Hôm nay thứ Tư hay thứ Năm?"
          },
          {
            "zh": "你吃米饭还是面条？",
            "py": "Nǐ chī mǐfàn háishì miàntiáo?",
            "vi": "Bạn ăn cơm hay ăn mì?"
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 8 (b9): 年龄、家庭与吃饭 – Tuổi tác, Gia đình & Ăn uống",
    "words": [
      {
        "zh": "几岁",
        "py": "jǐ suì",
        "type": "Cụm từ",
        "vi": "mấy tuổi (hỏi trẻ em)",
        "ex": [
          {
            "zh": "你孩子几岁？",
            "py": "Nǐ háizi jǐ suì?",
            "vi": "Con bạn mấy tuổi?"
          },
          {
            "zh": "你的孩子几岁了？",
            "py": "Nǐ de háizi jǐ suì le?",
            "vi": "Con bạn mấy tuổi rồi?"
          },
          {
            "zh": "他几岁了？——五岁。",
            "py": "Tā jǐ suì le? — Wǔ suì.",
            "vi": "Em bé mấy tuổi rồi? — Năm tuổi."
          },
          {
            "zh": "你女儿几岁？",
            "py": "Nǐ nǚ'ér jǐ suì?",
            "vi": "Con gái bạn mấy tuổi?"
          },
          {
            "zh": "他儿子几岁？",
            "py": "Tā érzi jǐ suì?",
            "vi": "Con trai anh ấy mấy tuổi?"
          },
          {
            "zh": "你弟弟几岁了？",
            "py": "Nǐ dìdi jǐ suì le?",
            "vi": "Em trai bạn mấy tuổi rồi?"
          },
          {
            "zh": "小妹妹，你几岁？",
            "py": "Xiǎo mèimei, nǐ jǐ suì?",
            "vi": "Em gái nhỏ ơi, em mấy tuổi?"
          },
          {
            "zh": "你姐姐的孩子几岁？",
            "py": "Nǐ jiějie de háizi jǐ suì?",
            "vi": "Con của chị bạn mấy tuổi?"
          },
          {
            "zh": "那个孩子几岁了？",
            "py": "Nàge háizi jǐ suì le?",
            "vi": "Đứa bé kia mấy tuổi rồi?"
          },
          {
            "zh": "吴老师的女儿几岁了？",
            "py": "Wú lǎoshī de nǚ'ér jǐ suì le?",
            "vi": "Con gái cô Ngô mấy tuổi rồi?"
          }
        ]
      },
      {
        "zh": "多大",
        "py": "duō dà",
        "type": "Cụm từ",
        "vi": "bao nhiêu tuổi (hỏi người lớn)",
        "ex": [
          {
            "zh": "你多大？",
            "py": "Nǐ duō dà?",
            "vi": "Bạn bao nhiêu tuổi?"
          },
          {
            "zh": "你多大了？",
            "py": "Nǐ duō dà le?",
            "vi": "Bạn bao nhiêu tuổi rồi?"
          },
          {
            "zh": "你爸爸多大年纪？",
            "py": "Nǐ bàba duō dà niánjì?",
            "vi": "Bố bạn bao nhiêu tuổi?"
          },
          {
            "zh": "你多大？——二十五岁。",
            "py": "Nǐ duō dà? — Èrshíwǔ suì.",
            "vi": "Bạn bao nhiêu tuổi? — Hai mươi lăm."
          },
          {
            "zh": "你儿子多大了？",
            "py": "Nǐ érzi duō dà le?",
            "vi": "Con trai bạn bao nhiêu tuổi rồi?"
          },
          {
            "zh": "你哥哥多大了？",
            "py": "Nǐ gēge duō dà le?",
            "vi": "Anh trai bạn bao nhiêu tuổi rồi?"
          },
          {
            "zh": "你的同屋多大？",
            "py": "Nǐ de tóngwū duō dà?",
            "vi": "Bạn cùng phòng của bạn bao nhiêu tuổi?"
          },
          {
            "zh": "那位护士多大了？",
            "py": "Nà wèi hùshi duō dà le?",
            "vi": "Cô y tá kia bao nhiêu tuổi rồi?"
          },
          {
            "zh": "你老婆多大？",
            "py": "Nǐ lǎopó duō dà?",
            "vi": "Vợ bạn bao nhiêu tuổi?"
          },
          {
            "zh": "你们经理多大了？",
            "py": "Nǐmen jīnglǐ duō dà le?",
            "vi": "Giám đốc của các bạn bao nhiêu tuổi rồi?"
          }
        ]
      },
      {
        "zh": "岁",
        "py": "suì",
        "type": "Lượng từ",
        "vi": "tuổi",
        "ex": [
          {
            "zh": "我三十岁。",
            "py": "Wǒ sānshí suì.",
            "vi": "Tôi ba mươi tuổi."
          },
          {
            "zh": "我今年二十二岁。",
            "py": "Wǒ jīnnián èrshí'èr suì.",
            "vi": "Năm nay tôi hai mươi hai tuổi."
          },
          {
            "zh": "她二十岁就结婚了。",
            "py": "Tā èrshí suì jiù jiéhūn le.",
            "vi": "Cô ấy mới hai mươi tuổi đã kết hôn."
          },
          {
            "zh": "爷爷八十岁了，很健康。",
            "py": "Yéye bāshí suì le, hěn jiànkāng.",
            "vi": "Ông nội 80 tuổi rồi, rất khỏe mạnh."
          },
          {
            "zh": "我女儿五岁。",
            "py": "Wǒ nǚ'ér wǔ suì.",
            "vi": "Con gái tôi năm tuổi."
          },
          {
            "zh": "我妹妹十八岁。",
            "py": "Wǒ mèimei shíbā suì.",
            "vi": "Em gái tôi mười tám tuổi."
          },
          {
            "zh": "他二十五岁了，还没有女朋友。",
            "py": "Tā èrshíwǔ suì le, hái méiyǒu nǚ péngyou.",
            "vi": "Anh ấy hai mươi lăm tuổi rồi mà vẫn chưa có bạn gái."
          },
          {
            "zh": "我们的校长六十岁。",
            "py": "Wǒmen de xiàozhǎng liùshí suì.",
            "vi": "Hiệu trưởng của chúng tôi sáu mươi tuổi."
          },
          {
            "zh": "她儿子七岁了。",
            "py": "Tā érzi qī suì le.",
            "vi": "Con trai cô ấy bảy tuổi rồi."
          },
          {
            "zh": "明天我三十岁。",
            "py": "Míngtiān wǒ sānshí suì.",
            "vi": "Ngày mai tôi tròn ba mươi tuổi."
          }
        ]
      },
      {
        "zh": "孩子",
        "py": "háizi",
        "type": "Danh từ",
        "vi": "con cái, trẻ con",
        "ex": [
          {
            "zh": "你有孩子吗？",
            "py": "Nǐ yǒu háizi ma?",
            "vi": "Bạn có con chưa?"
          },
          {
            "zh": "他们的孩子在学校。",
            "py": "Tāmen de háizi zài xuéxiào.",
            "vi": "Con của họ ở trường."
          },
          {
            "zh": "他们有两个孩子。",
            "py": "Tāmen yǒu liǎng gè háizi.",
            "vi": "Họ có hai đứa con."
          },
          {
            "zh": "孩子们在公园玩。",
            "py": "Háizimen zài gōngyuán wán.",
            "vi": "Bọn trẻ đang chơi trong công viên."
          },
          {
            "zh": "他有孩子吗？",
            "py": "Tā yǒu háizi ma?",
            "vi": "Anh ấy có con không?"
          },
          {
            "zh": "你的孩子在哪儿学习？",
            "py": "Nǐ de háizi zài nǎr xuéxí?",
            "vi": "Con bạn học ở đâu?"
          },
          {
            "zh": "这个孩子很喜欢看书。",
            "py": "Zhège háizi hěn xǐhuan kàn shū.",
            "vi": "Đứa trẻ này rất thích đọc sách."
          },
          {
            "zh": "孩子生病了，我们去医院。",
            "py": "Háizi shēngbìng le, wǒmen qù yīyuàn.",
            "vi": "Con bị ốm, chúng tôi đi bệnh viện."
          },
          {
            "zh": "她的孩子都是女儿。",
            "py": "Tā de háizi dōu shì nǚ'ér.",
            "vi": "Con của cô ấy đều là con gái."
          },
          {
            "zh": "孩子们在食堂吃午饭。",
            "py": "Háizimen zài shítáng chī wǔfàn.",
            "vi": "Bọn trẻ ăn trưa ở nhà ăn."
          }
        ]
      },
      {
        "zh": "儿子",
        "py": "érzi",
        "type": "Danh từ",
        "vi": "con trai",
        "ex": [
          {
            "zh": "我儿子三岁。",
            "py": "Wǒ érzi sān suì.",
            "vi": "Con trai tôi ba tuổi."
          },
          {
            "zh": "我有一个儿子。",
            "py": "Wǒ yǒu yī gè érzi.",
            "vi": "Tôi có một người con trai."
          },
          {
            "zh": "他的儿子很聪明。",
            "py": "Tā de érzi hěn cōngmíng.",
            "vi": "Con trai anh ấy rất thông minh."
          },
          {
            "zh": "儿子今年上小学了。",
            "py": "Érzi jīnnián shàng xiǎoxué le.",
            "vi": "Con trai năm nay vào tiểu học rồi."
          },
          {
            "zh": "我儿子在河内工作。",
            "py": "Wǒ érzi zài Hénèi gōngzuò.",
            "vi": "Con trai tôi làm việc ở Hà Nội."
          },
          {
            "zh": "我儿子喜欢骑自行车。",
            "py": "Wǒ érzi xǐhuan qí zìxíngchē.",
            "vi": "Con trai tôi thích đạp xe."
          },
          {
            "zh": "他的儿子是医生。",
            "py": "Tā de érzi shì yīshēng.",
            "vi": "Con trai ông ấy là bác sĩ."
          },
          {
            "zh": "儿子在美国留学。",
            "py": "Érzi zài Měiguó liúxué.",
            "vi": "Con trai đang du học ở Mỹ."
          },
          {
            "zh": "我给儿子买了一辆自行车。",
            "py": "Wǒ gěi érzi mǎile yí liàng zìxíngchē.",
            "vi": "Tôi mua cho con trai một chiếc xe đạp."
          },
          {
            "zh": "你儿子几点回家？",
            "py": "Nǐ érzi jǐ diǎn huíjiā?",
            "vi": "Con trai bạn mấy giờ về nhà?"
          }
        ]
      },
      {
        "zh": "女儿",
        "py": "nǚ'ér",
        "type": "Danh từ",
        "vi": "con gái",
        "ex": [
          {
            "zh": "她女儿很可爱。",
            "py": "Tā nǚ'ér hěn kě'ài.",
            "vi": "Con gái cô ấy rất đáng yêu."
          },
          {
            "zh": "我的女儿很可爱。",
            "py": "Wǒ de nǚ'ér hěn kě'ài.",
            "vi": "Con gái tôi rất đáng yêu."
          },
          {
            "zh": "女儿比儿子乖。",
            "py": "Nǚ'ér bǐ érzi guāi.",
            "vi": "Con gái ngoan hơn con trai."
          },
          {
            "zh": "他女儿学钢琴。",
            "py": "Tā nǚ'ér xué gāngqín.",
            "vi": "Con gái anh ấy học đàn piano."
          },
          {
            "zh": "她有女儿。",
            "py": "Tā yǒu nǚ'ér.",
            "vi": "Cô ấy có con gái."
          },
          {
            "zh": "我女儿喜欢吃草莓。",
            "py": "Wǒ nǚ'ér xǐhuan chī cǎoméi.",
            "vi": "Con gái tôi thích ăn dâu tây."
          },
          {
            "zh": "他女儿在银行工作。",
            "py": "Tā nǚ'ér zài yínháng gōngzuò.",
            "vi": "Con gái ông ấy làm việc ở ngân hàng."
          },
          {
            "zh": "女儿给我买了一件毛衣。",
            "py": "Nǚ'ér gěi wǒ mǎile yí jiàn máoyī.",
            "vi": "Con gái mua cho tôi một chiếc áo len."
          },
          {
            "zh": "你女儿多大了？",
            "py": "Nǐ nǚ'ér duō dà le?",
            "vi": "Con gái bạn bao nhiêu tuổi rồi?"
          },
          {
            "zh": "我有一个儿子和一个女儿。",
            "py": "Wǒ yǒu yí ge érzi hé yí ge nǚ'ér.",
            "vi": "Tôi có một con trai và một con gái."
          }
        ]
      },
      {
        "zh": "老婆",
        "py": "lǎopó",
        "type": "Danh từ",
        "vi": "vợ (thân mật)",
        "ex": [
          {
            "zh": "我老婆二十八岁。",
            "py": "Wǒ lǎopó èrshíbā suì.",
            "vi": "Vợ tôi hai mươi tám tuổi."
          },
          {
            "zh": "我老婆是越南人。",
            "py": "Wǒ lǎopó shì Yuènán rén.",
            "vi": "Vợ tôi là người Việt Nam."
          },
          {
            "zh": "他老婆在医院工作。",
            "py": "Tā lǎopó zài yīyuàn gōngzuò.",
            "vi": "Vợ anh ấy làm việc ở bệnh viện."
          },
          {
            "zh": "他老婆很忙。",
            "py": "Tā lǎopó hěn máng.",
            "vi": "Vợ anh ấy rất bận."
          },
          {
            "zh": "我老婆在公司。",
            "py": "Wǒ lǎopó zài gōngsī.",
            "vi": "Vợ tôi ở công ty."
          },
          {
            "zh": "我老婆喜欢喝奶茶。",
            "py": "Wǒ lǎopó xǐhuan hē nǎichá.",
            "vi": "Vợ tôi thích uống trà sữa."
          },
          {
            "zh": "老婆，晚上吃什么？",
            "py": "Lǎopó, wǎnshang chī shénme?",
            "vi": "Vợ ơi, tối nay ăn gì?"
          },
          {
            "zh": "他老婆是中国人。",
            "py": "Tā lǎopó shì Zhōngguó rén.",
            "vi": "Vợ anh ấy là người Trung Quốc."
          },
          {
            "zh": "我老婆在家做饭。",
            "py": "Wǒ lǎopó zài jiā zuòfàn.",
            "vi": "Vợ tôi đang ở nhà nấu cơm."
          },
          {
            "zh": "我给老婆买了一瓶香水。",
            "py": "Wǒ gěi lǎopó mǎile yì píng xiāngshuǐ.",
            "vi": "Tôi mua cho vợ một chai nước hoa."
          }
        ]
      },
      {
        "zh": "家",
        "py": "jiā",
        "type": "Danh từ",
        "vi": "nhà, gia đình",
        "ex": [
          {
            "zh": "我家有三口人。",
            "py": "Wǒ jiā yǒu sān kǒu rén.",
            "vi": "Nhà tôi có ba người."
          },
          {
            "zh": "我家有四口人。",
            "py": "Wǒ jiā yǒu sì kǒu rén.",
            "vi": "Nhà tôi có bốn người."
          },
          {
            "zh": "你家在哪里？",
            "py": "Nǐ jiā zài nǎlǐ?",
            "vi": "Nhà bạn ở đâu?"
          },
          {
            "zh": "我想回家。",
            "py": "Wǒ xiǎng huí jiā.",
            "vi": "Tôi muốn về nhà."
          },
          {
            "zh": "家是最温暖的地方。",
            "py": "Jiā shì zuì wēnnuǎn de dìfāng.",
            "vi": "Nhà là nơi ấm áp nhất."
          },
          {
            "zh": "我家有一个小商店。",
            "py": "Wǒ jiā yǒu yí ge xiǎo shāngdiàn.",
            "vi": "Nhà tôi có một cửa hàng nhỏ."
          },
          {
            "zh": "你家有汽车吗？",
            "py": "Nǐ jiā yǒu qìchē ma?",
            "vi": "Nhà bạn có xe ô tô không?"
          },
          {
            "zh": "他家很大。",
            "py": "Tā jiā hěn dà.",
            "vi": "Nhà anh ấy rất rộng."
          },
          {
            "zh": "我今天不在家。",
            "py": "Wǒ jīntiān bú zài jiā.",
            "vi": "Hôm nay tôi không ở nhà."
          },
          {
            "zh": "我家的房间不太大。",
            "py": "Wǒ jiā de fángjiān bú tài dà.",
            "vi": "Phòng nhà tôi không rộng lắm."
          }
        ]
      },
      {
        "zh": "有",
        "py": "yǒu",
        "type": "Động từ",
        "vi": "có",
        "ex": [
          {
            "zh": "你家有几口人？",
            "py": "Nǐ jiā yǒu jǐ kǒu rén?",
            "vi": "Nhà bạn có mấy người?"
          },
          {
            "zh": "你有汉语词典吗？",
            "py": "Nǐ yǒu Hànyǔ cídiǎn ma?",
            "vi": "Bạn có từ điển tiếng Trung không?"
          },
          {
            "zh": "我家有三个孩子。",
            "py": "Wǒ jiā yǒu sān gè háizi.",
            "vi": "Nhà tôi có ba đứa con."
          },
          {
            "zh": "教室里有多少学生？",
            "py": "Jiàoshì lǐ yǒu duōshao xuéshēng?",
            "vi": "Trong lớp có bao nhiêu học sinh?"
          },
          {
            "zh": "这里有没有厕所？",
            "py": "Zhèlǐ yǒu méiyǒu cèsuǒ?",
            "vi": "Ở đây có nhà vệ sinh không?"
          },
          {
            "zh": "我有一辆摩托车。",
            "py": "Wǒ yǒu yí liàng mótuōchē.",
            "vi": "Tôi có một chiếc xe máy."
          },
          {
            "zh": "商店里有很多水果。",
            "py": "Shāngdiàn lǐ yǒu hěn duō shuǐguǒ.",
            "vi": "Trong cửa hàng có rất nhiều hoa quả."
          },
          {
            "zh": "你有没有雨伞？",
            "py": "Nǐ yǒu méiyǒu yǔsǎn?",
            "vi": "Bạn có ô không?"
          },
          {
            "zh": "我们学校有两个食堂。",
            "py": "Wǒmen xuéxiào yǒu liǎng ge shítáng.",
            "vi": "Trường chúng tôi có hai nhà ăn."
          },
          {
            "zh": "他有很多照片。",
            "py": "Tā yǒu hěn duō zhàopiàn.",
            "vi": "Anh ấy có rất nhiều ảnh."
          }
        ]
      },
      {
        "zh": "住",
        "py": "zhù",
        "type": "Động từ",
        "vi": "sống, ở, cư trú",
        "ex": [
          {
            "zh": "我爸爸妈妈住在北京。",
            "py": "Wǒ bàba māma zhù zài Běijīng.",
            "vi": "Bố mẹ tôi sống ở Bắc Kinh."
          },
          {
            "zh": "你朋友住在哪儿？",
            "py": "Nǐ péngyou zhù zài nǎr?",
            "vi": "Bạn của bạn sống ở đâu?"
          },
          {
            "zh": "我们住在学校。",
            "py": "Wǒmen zhù zài xuéxiào.",
            "vi": "Chúng tôi sống ở trường."
          },
          {
            "zh": "他住在学校旁边。",
            "py": "Tā zhù zài xuéxiào pángbiān.",
            "vi": "Anh ấy ở gần trường."
          },
          {
            "zh": "你住哪儿？",
            "py": "Nǐ zhù nǎr?",
            "vi": "Bạn ở đâu?"
          },
          {
            "zh": "我住在学校里。",
            "py": "Wǒ zhù zài xuéxiào lǐ.",
            "vi": "Tôi sống trong trường."
          },
          {
            "zh": "你住几号房间？",
            "py": "Nǐ zhù jǐ hào fángjiān?",
            "vi": "Bạn ở phòng số mấy?"
          },
          {
            "zh": "我们住在一家酒店。",
            "py": "Wǒmen zhù zài yì jiā jiǔdiàn.",
            "vi": "Chúng tôi ở một khách sạn."
          },
          {
            "zh": "他跟同屋住在三楼。",
            "py": "Tā gēn tóngwū zhù zài sān lóu.",
            "vi": "Anh ấy ở tầng ba với bạn cùng phòng."
          },
          {
            "zh": "奶奶住在我们家。",
            "py": "Nǎinai zhù zài wǒmen jiā.",
            "vi": "Bà nội sống ở nhà chúng tôi."
          }
        ]
      },
      {
        "zh": "下午",
        "py": "xiàwǔ",
        "type": "Danh từ",
        "vi": "buổi chiều",
        "ex": [
          {
            "zh": "下午我去学校。",
            "py": "Xiàwǔ wǒ qù xuéxiào.",
            "vi": "Buổi chiều tôi đến trường."
          },
          {
            "zh": "下午三点我们见面。",
            "py": "Xiàwǔ sān diǎn wǒmen jiànmiàn.",
            "vi": "Chiều ba giờ chúng ta gặp nhau."
          },
          {
            "zh": "下午我去图书馆学习。",
            "py": "Xiàwǔ wǒ qù túshūguǎn xuéxí.",
            "vi": "Chiều tôi đi thư viện học."
          },
          {
            "zh": "今天下午有汉语课。",
            "py": "Jīntiān xiàwǔ yǒu Hànyǔ kè.",
            "vi": "Chiều nay có tiết tiếng Trung."
          },
          {
            "zh": "下午我出去。",
            "py": "Xiàwǔ wǒ chūqù.",
            "vi": "Buổi chiều tôi ra ngoài."
          },
          {
            "zh": "下午我们去商场吧。",
            "py": "Xiàwǔ wǒmen qù shāngchǎng ba.",
            "vi": "Chiều nay chúng ta đi trung tâm thương mại nhé."
          },
          {
            "zh": "明天下午你忙吗？",
            "py": "Míngtiān xiàwǔ nǐ máng ma?",
            "vi": "Chiều mai bạn có bận không?"
          },
          {
            "zh": "下午五点我回家。",
            "py": "Xiàwǔ wǔ diǎn wǒ huíjiā.",
            "vi": "Năm giờ chiều tôi về nhà."
          },
          {
            "zh": "他下午不上班。",
            "py": "Tā xiàwǔ bú shàngbān.",
            "vi": "Buổi chiều anh ấy không đi làm."
          },
          {
            "zh": "下午我喝了一杯咖啡。",
            "py": "Xiàwǔ wǒ hēle yì bēi kāfēi.",
            "vi": "Buổi chiều tôi đã uống một cốc cà phê."
          }
        ]
      },
      {
        "zh": "出去",
        "py": "chūqù",
        "type": "Động từ",
        "vi": "ra ngoài, đi ra",
        "ex": [
          {
            "zh": "今天中午我们出去吃饭。",
            "py": "Jīntiān zhōngwǔ wǒmen chūqù chīfàn.",
            "vi": "Trưa hôm nay chúng tôi ra ngoài ăn cơm."
          },
          {
            "zh": "你出去哪儿？",
            "py": "Nǐ chūqù nǎr?",
            "vi": "Bạn ra ngoài đi đâu?"
          },
          {
            "zh": "我出去买东西。",
            "py": "Wǒ chūqù mǎi dōngxi.",
            "vi": "Tôi ra ngoài mua đồ."
          },
          {
            "zh": "天气好，我们出去走走吧。",
            "py": "Tiānqì hǎo, wǒmen chūqù zǒuzou ba.",
            "vi": "Thời tiết đẹp, chúng ta ra ngoài đi dạo nhé."
          },
          {
            "zh": "他下午出去。",
            "py": "Tā xiàwǔ chūqù.",
            "vi": "Anh ấy buổi chiều ra ngoài."
          },
          {
            "zh": "下雨了，我们不出去了。",
            "py": "Xià yǔ le, wǒmen bù chūqù le.",
            "vi": "Trời mưa rồi, chúng ta không ra ngoài nữa."
          },
          {
            "zh": "经理出去了，不在办公室。",
            "py": "Jīnglǐ chūqù le, bú zài bàngōngshì.",
            "vi": "Giám đốc ra ngoài rồi, không có ở văn phòng."
          },
          {
            "zh": "晚上你出去吗？",
            "py": "Wǎnshang nǐ chūqù ma?",
            "vi": "Tối nay bạn có ra ngoài không?"
          },
          {
            "zh": "我们出去喝咖啡吧。",
            "py": "Wǒmen chūqù hē kāfēi ba.",
            "vi": "Chúng ta ra ngoài uống cà phê nhé."
          },
          {
            "zh": "太冷了，我不想出去。",
            "py": "Tài lěng le, wǒ bù xiǎng chūqù.",
            "vi": "Lạnh quá, tôi không muốn ra ngoài."
          }
        ]
      },
      {
        "zh": "公司",
        "py": "gōngsī",
        "type": "Danh từ",
        "vi": "công ty",
        "ex": [
          {
            "zh": "你公司有食堂吗？",
            "py": "Nǐ gōngsī yǒu shítáng ma?",
            "vi": "Công ty bạn có nhà ăn không?"
          },
          {
            "zh": "我在一家大公司工作。",
            "py": "Wǒ zài yī jiā dà gōngsī gōngzuò.",
            "vi": "Tôi làm việc tại một công ty lớn."
          },
          {
            "zh": "公司在市中心。",
            "py": "Gōngsī zài shì zhōngxīn.",
            "vi": "Công ty ở trung tâm thành phố."
          },
          {
            "zh": "他自己开公司。",
            "py": "Tā zìjǐ kāi gōngsī.",
            "vi": "Anh ấy tự mở công ty."
          },
          {
            "zh": "我在公司吃饭。",
            "py": "Wǒ zài gōngsī chīfàn.",
            "vi": "Tôi ăn cơm ở công ty."
          },
          {
            "zh": "公司的食堂很大。",
            "py": "Gōngsī de shítáng hěn dà.",
            "vi": "Nhà ăn của công ty rất lớn."
          },
          {
            "zh": "你们公司几点上班？",
            "py": "Nǐmen gōngsī jǐ diǎn shàngbān?",
            "vi": "Công ty các bạn mấy giờ vào làm?"
          },
          {
            "zh": "他是这家公司的经理。",
            "py": "Tā shì zhè jiā gōngsī de jīnglǐ.",
            "vi": "Ông ấy là giám đốc của công ty này."
          },
          {
            "zh": "他骑电动车去公司。",
            "py": "Tā qí diàndòngchē qù gōngsī.",
            "vi": "Anh ấy đi xe điện đến công ty."
          },
          {
            "zh": "公司在八楼。",
            "py": "Gōngsī zài bā lóu.",
            "vi": "Công ty ở tầng tám."
          }
        ]
      },
      {
        "zh": "食堂",
        "py": "shítáng",
        "type": "Danh từ",
        "vi": "nhà ăn, căng-tin",
        "ex": [
          {
            "zh": "学校食堂的饭很好吃。",
            "py": "Xuéxiào shítáng de fàn hěn hǎochī.",
            "vi": "Cơm ở căng-tin trường rất ngon."
          },
          {
            "zh": "我们在食堂吃午饭。",
            "py": "Wǒmen zài shítáng chī wǔfàn.",
            "vi": "Chúng tôi ăn trưa ở căng tin."
          },
          {
            "zh": "食堂的饭很便宜。",
            "py": "Shítáng de fàn hěn piányí.",
            "vi": "Cơm ở căng tin rất rẻ."
          },
          {
            "zh": "学校食堂几点开？",
            "py": "Xuéxiào shítáng jǐ diǎn kāi?",
            "vi": "Căng tin trường mấy giờ mở?"
          },
          {
            "zh": "我们在食堂吃饭。",
            "py": "Wǒmen zài shítáng chīfàn.",
            "vi": "Chúng tôi ăn cơm ở căng tin."
          },
          {
            "zh": "食堂里人很多。",
            "py": "Shítáng lǐ rén hěn duō.",
            "vi": "Trong nhà ăn rất đông người."
          },
          {
            "zh": "食堂的包子很好吃。",
            "py": "Shítáng de bāozi hěn hǎochī.",
            "vi": "Bánh bao ở nhà ăn rất ngon."
          },
          {
            "zh": "我们去食堂吃晚饭吧。",
            "py": "Wǒmen qù shítáng chī wǎnfàn ba.",
            "vi": "Chúng ta đến nhà ăn ăn tối nhé."
          },
          {
            "zh": "公司食堂在一楼。",
            "py": "Gōngsī shítáng zài yī lóu.",
            "vi": "Nhà ăn công ty ở tầng một."
          },
          {
            "zh": "食堂有面条和米饭。",
            "py": "Shítáng yǒu miàntiáo hé mǐfàn.",
            "vi": "Nhà ăn có mì và cơm."
          }
        ]
      },
      {
        "zh": "吃",
        "py": "chī",
        "type": "Động từ",
        "vi": "ăn",
        "ex": [
          {
            "zh": "你喜欢吃什么？",
            "py": "Nǐ xǐhuan chī shénme?",
            "vi": "Bạn thích ăn gì?"
          },
          {
            "zh": "你吃什么？",
            "py": "Nǐ chī shénme?",
            "vi": "Bạn ăn gì?"
          },
          {
            "zh": "我喜欢吃中国菜。",
            "py": "Wǒ xǐhuān chī Zhōngguó cài.",
            "vi": "Tôi thích ăn đồ ăn Trung Quốc."
          },
          {
            "zh": "吃饭了吗？",
            "py": "Chīfàn le ma?",
            "vi": "Ăn cơm chưa?"
          },
          {
            "zh": "我不吃辣的。",
            "py": "Wǒ bù chī là de.",
            "vi": "Tôi không ăn đồ cay."
          },
          {
            "zh": "我想吃饺子。",
            "py": "Wǒ xiǎng chī jiǎozi.",
            "vi": "Tôi muốn ăn sủi cảo."
          },
          {
            "zh": "你吃了几个饺子？",
            "py": "Nǐ chīle jǐ ge jiǎozi?",
            "vi": "Bạn đã ăn mấy cái sủi cảo?"
          },
          {
            "zh": "他不吃鸡蛋。",
            "py": "Tā bù chī jīdàn.",
            "vi": "Anh ấy không ăn trứng."
          },
          {
            "zh": "我们去哪儿吃？",
            "py": "Wǒmen qù nǎr chī?",
            "vi": "Chúng ta đi đâu ăn?"
          },
          {
            "zh": "我饿了，想吃东西。",
            "py": "Wǒ è le, xiǎng chī dōngxi.",
            "vi": "Tôi đói rồi, muốn ăn gì đó."
          }
        ]
      },
      {
        "zh": "饭",
        "py": "fàn",
        "type": "Danh từ",
        "vi": "cơm, bữa ăn",
        "ex": [
          {
            "zh": "我要吃饭了。",
            "py": "Wǒ yào chīfàn le.",
            "vi": "Tôi sắp ăn cơm rồi."
          },
          {
            "zh": "中午我吃了饭。",
            "py": "Zhōngwǔ wǒ chī le fàn.",
            "vi": "Buổi trưa tôi đã ăn cơm."
          },
          {
            "zh": "妈妈做的饭很好吃。",
            "py": "Māma zuò de fàn hěn hǎochī.",
            "vi": "Cơm mẹ nấu rất ngon."
          },
          {
            "zh": "我每天在家吃饭。",
            "py": "Wǒ měitiān zài jiā chīfàn.",
            "vi": "Mỗi ngày tôi ăn cơm ở nhà."
          },
          {
            "zh": "这是我的饭。",
            "py": "Zhè shì wǒ de fàn.",
            "vi": "Đây là cơm của tôi."
          },
          {
            "zh": "这家的饭很便宜。",
            "py": "Zhè jiā de fàn hěn piányi.",
            "vi": "Cơm ở quán này rất rẻ."
          },
          {
            "zh": "今天我做饭。",
            "py": "Jīntiān wǒ zuòfàn.",
            "vi": "Hôm nay tôi nấu cơm."
          },
          {
            "zh": "饭好了。",
            "py": "Fàn hǎo le.",
            "vi": "Cơm xong rồi."
          },
          {
            "zh": "这碗饭太多了。",
            "py": "Zhè wǎn fàn tài duō le.",
            "vi": "Bát cơm này nhiều quá."
          },
          {
            "zh": "食堂的饭不太好吃。",
            "py": "Shítáng de fàn bú tài hǎochī.",
            "vi": "Cơm ở nhà ăn không ngon lắm."
          }
        ]
      },
      {
        "zh": "吃饭",
        "py": "chīfàn",
        "type": "Động từ",
        "vi": "ăn cơm",
        "ex": [
          {
            "zh": "我们去酒店吃饭吧！",
            "py": "Wǒmen qù jiǔdiàn chīfàn ba!",
            "vi": "Chúng ta đến khách sạn ăn cơm đi!"
          },
          {
            "zh": "晚上我在家吃饭。",
            "py": "Wǎnshang wǒ zài jiā chīfàn.",
            "vi": "Buổi tối tôi ăn cơm ở nhà."
          },
          {
            "zh": "你吃饭了吗？",
            "py": "Nǐ chīfàn le ma?",
            "vi": "Bạn ăn cơm chưa?"
          },
          {
            "zh": "吃饭的时候不要玩手机。",
            "py": "Chīfàn de shíhou bú yào wán shǒujī.",
            "vi": "Khi ăn cơm không được chơi điện thoại."
          },
          {
            "zh": "他中午吃饭。",
            "py": "Tā zhōngwǔ chīfàn.",
            "vi": "Anh ấy ăn cơm buổi trưa."
          },
          {
            "zh": "明天我请你吃饭。",
            "py": "Míngtiān wǒ qǐng nǐ chīfàn.",
            "vi": "Ngày mai tôi mời bạn ăn cơm."
          },
          {
            "zh": "我们几点吃饭？",
            "py": "Wǒmen jǐ diǎn chīfàn?",
            "vi": "Mấy giờ chúng ta ăn cơm?"
          },
          {
            "zh": "他们在酒店吃饭。",
            "py": "Tāmen zài jiǔdiàn chīfàn.",
            "vi": "Họ ăn cơm ở khách sạn."
          },
          {
            "zh": "爸爸回家吃饭。",
            "py": "Bàba huíjiā chīfàn.",
            "vi": "Bố về nhà ăn cơm."
          },
          {
            "zh": "我饿了，我们去吃饭吧。",
            "py": "Wǒ è le, wǒmen qù chīfàn ba.",
            "vi": "Tôi đói rồi, chúng ta đi ăn cơm đi."
          }
        ]
      },
      {
        "zh": "要",
        "py": "yào",
        "type": "Động từ",
        "vi": "muốn, cần, gọi (món)",
        "ex": [
          {
            "zh": "我要一碗面条。",
            "py": "Wǒ yào yī wǎn miàntiáo.",
            "vi": "Tôi muốn một bát mì sợi."
          },
          {
            "zh": "我要一杯茶。",
            "py": "Wǒ yào yī bēi chá.",
            "vi": "Tôi muốn một ly trà."
          },
          {
            "zh": "你要吃什么？",
            "py": "Nǐ yào chī shénme?",
            "vi": "Bạn muốn ăn gì?"
          },
          {
            "zh": "学好汉语要多练习。",
            "py": "Xué hǎo Hànyǔ yào duō liànxí.",
            "vi": "Muốn học giỏi tiếng Trung phải luyện tập nhiều."
          },
          {
            "zh": "我要回家了。",
            "py": "Wǒ yào huí jiā le.",
            "vi": "Tôi phải về nhà rồi."
          },
          {
            "zh": "你要几个包子？",
            "py": "Nǐ yào jǐ ge bāozi?",
            "vi": "Bạn muốn mấy cái bánh bao?"
          },
          {
            "zh": "明天我要去银行。",
            "py": "Míngtiān wǒ yào qù yínháng.",
            "vi": "Ngày mai tôi phải đi ngân hàng."
          },
          {
            "zh": "我要一斤草莓。",
            "py": "Wǒ yào yì jīn cǎoméi.",
            "vi": "Tôi muốn một cân dâu tây."
          },
          {
            "zh": "生病了要吃药。",
            "py": "Shēngbìng le yào chī yào.",
            "vi": "Bị ốm thì phải uống thuốc."
          },
          {
            "zh": "他要买一辆新车。",
            "py": "Tā yào mǎi yí liàng xīn chē.",
            "vi": "Anh ấy định mua một chiếc xe mới."
          }
        ]
      },
      {
        "zh": "面条",
        "py": "miàntiáo",
        "type": "Danh từ",
        "vi": "mì sợi",
        "ex": [
          {
            "zh": "我喜欢吃面条。",
            "py": "Wǒ xǐhuan chī miàntiáo.",
            "vi": "Tôi thích ăn mì sợi."
          },
          {
            "zh": "中午我要一碗面条。",
            "py": "Zhōngwǔ wǒ yào yì wǎn miàntiáo.",
            "vi": "Buổi trưa tôi muốn một bát mì."
          },
          {
            "zh": "这碗面条很好吃。",
            "py": "Zhè wǎn miàntiáo hěn hǎochī.",
            "vi": "Tô mì này rất ngon."
          },
          {
            "zh": "你要吃米饭还是面条？",
            "py": "Nǐ yào chī mǐfàn háishi miàntiáo?",
            "vi": "Bạn muốn ăn cơm hay mì?"
          },
          {
            "zh": "我吃面条。",
            "py": "Wǒ chī miàntiáo.",
            "vi": "Tôi ăn mì."
          },
          {
            "zh": "这儿的面条很便宜。",
            "py": "Zhèr de miàntiáo hěn piányi.",
            "vi": "Mì ở đây rất rẻ."
          },
          {
            "zh": "晚饭我想吃面条。",
            "py": "Wǎnfàn wǒ xiǎng chī miàntiáo.",
            "vi": "Bữa tối tôi muốn ăn mì."
          },
          {
            "zh": "一碗面条多少钱？",
            "py": "Yì wǎn miàntiáo duōshao qián?",
            "vi": "Một bát mì bao nhiêu tiền?"
          },
          {
            "zh": "妈妈做的面条很好吃。",
            "py": "Māma zuò de miàntiáo hěn hǎochī.",
            "vi": "Mì mẹ nấu rất ngon."
          },
          {
            "zh": "我不喜欢吃面条。",
            "py": "Wǒ bù xǐhuan chī miàntiáo.",
            "vi": "Tôi không thích ăn mì."
          }
        ]
      },
      {
        "zh": "鸡蛋",
        "py": "jīdàn",
        "type": "Danh từ",
        "vi": "trứng gà",
        "ex": [
          {
            "zh": "我每天早上吃鸡蛋。",
            "py": "Wǒ měitiān zǎoshang chī jīdàn.",
            "vi": "Tôi ăn trứng gà mỗi buổi sáng."
          },
          {
            "zh": "我早上吃鸡蛋。",
            "py": "Wǒ zǎoshang chī jīdàn.",
            "vi": "Buổi sáng tôi ăn trứng."
          },
          {
            "zh": "鸡蛋一个多少钱？",
            "py": "Jīdàn yī gè duōshao qián?",
            "vi": "Một quả trứng bao nhiêu tiền?"
          },
          {
            "zh": "炒鸡蛋很简单。",
            "py": "Chǎo jīdàn hěn jiǎndān.",
            "vi": "Trứng chiên rất đơn giản."
          },
          {
            "zh": "早上我吃鸡蛋。",
            "py": "Zǎoshang wǒ chī jīdàn.",
            "vi": "Buổi sáng tôi ăn trứng gà."
          },
          {
            "zh": "我要两个鸡蛋。",
            "py": "Wǒ yào liǎng ge jīdàn.",
            "vi": "Tôi muốn hai quả trứng gà."
          },
          {
            "zh": "鸡蛋汤很好喝。",
            "py": "Jīdàn tāng hěn hǎohē.",
            "vi": "Canh trứng rất ngon."
          },
          {
            "zh": "一斤鸡蛋多少钱？",
            "py": "Yì jīn jīdàn duōshao qián?",
            "vi": "Một cân trứng gà bao nhiêu tiền?"
          },
          {
            "zh": "妈妈买了十个鸡蛋。",
            "py": "Māma mǎile shí ge jīdàn.",
            "vi": "Mẹ mua mười quả trứng gà."
          },
          {
            "zh": "你吃鸡蛋吗？",
            "py": "Nǐ chī jīdàn ma?",
            "vi": "Bạn có ăn trứng không?"
          }
        ]
      },
      {
        "zh": "鸡",
        "py": "jī",
        "type": "Danh từ",
        "vi": "gà",
        "ex": [
          {
            "zh": "我喜欢吃鸡肉。",
            "py": "Wǒ xǐhuan chī jīròu.",
            "vi": "Tôi thích ăn thịt gà."
          },
          {
            "zh": "我不吃鸡。",
            "py": "Wǒ bù chī jī.",
            "vi": "Tôi không ăn thịt gà."
          },
          {
            "zh": "烤鸡很好吃。",
            "py": "Kǎo jī hěn hǎochī.",
            "vi": "Gà nướng rất ngon."
          },
          {
            "zh": "她养了几只鸡。",
            "py": "Tā yǎng le jǐ zhī jī.",
            "vi": "Cô ấy nuôi mấy con gà."
          },
          {
            "zh": "食堂有鸡。",
            "py": "Shítáng yǒu jī.",
            "vi": "Căng tin có thịt gà."
          },
          {
            "zh": "今天晚上我们吃鸡。",
            "py": "Jīntiān wǎnshang wǒmen chī jī.",
            "vi": "Tối nay chúng ta ăn gà."
          },
          {
            "zh": "我要一盘鸡。",
            "py": "Wǒ yào yì pán jī.",
            "vi": "Tôi muốn một đĩa gà."
          },
          {
            "zh": "鸡汤对身体很好。",
            "py": "Jītāng duì shēntǐ hěn hǎo.",
            "vi": "Canh gà rất tốt cho sức khỏe."
          },
          {
            "zh": "奶奶家有很多鸡。",
            "py": "Nǎinai jiā yǒu hěn duō jī.",
            "vi": "Nhà bà nội có rất nhiều gà."
          },
          {
            "zh": "越南人喜欢吃鸡。",
            "py": "Yuènán rén xǐhuan chī jī.",
            "vi": "Người Việt Nam thích ăn gà."
          }
        ]
      },
      {
        "zh": "汤",
        "py": "tāng",
        "type": "Danh từ",
        "vi": "canh",
        "ex": [
          {
            "zh": "这碗汤很鲜。",
            "py": "Zhè wǎn tāng hěn xiān.",
            "vi": "Bát canh này rất ngon ngọt."
          },
          {
            "zh": "这碗汤很好喝。",
            "py": "Zhè wǎn tāng hěn hǎohē.",
            "vi": "Tô canh này rất ngon."
          },
          {
            "zh": "天冷喝汤暖身体。",
            "py": "Tiān lěng hē tāng nuǎn shēntǐ.",
            "vi": "Trời lạnh uống canh ấm người."
          },
          {
            "zh": "我要一碗鸡汤。",
            "py": "Wǒ yào yī wǎn jī tāng.",
            "vi": "Tôi muốn một tô canh gà."
          },
          {
            "zh": "我喝汤。",
            "py": "Wǒ hē tāng.",
            "vi": "Tôi uống canh."
          },
          {
            "zh": "你要喝汤吗？",
            "py": "Nǐ yào hē tāng ma?",
            "vi": "Bạn có muốn uống canh không?"
          },
          {
            "zh": "这个汤太冷了。",
            "py": "Zhège tāng tài lěng le.",
            "vi": "Bát canh này nguội quá."
          },
          {
            "zh": "我们要两碗汤。",
            "py": "Wǒmen yào liǎng wǎn tāng.",
            "vi": "Chúng tôi muốn hai bát canh."
          },
          {
            "zh": "食堂的汤不要钱。",
            "py": "Shítáng de tāng bú yào qián.",
            "vi": "Canh ở nhà ăn không mất tiền."
          },
          {
            "zh": "我饿了，先喝点儿汤。",
            "py": "Wǒ è le, xiān hē diǎnr tāng.",
            "vi": "Tôi đói rồi, uống chút canh trước."
          }
        ]
      },
      {
        "zh": "米饭",
        "py": "mǐfàn",
        "type": "Danh từ",
        "vi": "cơm trắng",
        "ex": [
          {
            "zh": "我要一碗米饭。",
            "py": "Wǒ yào yī wǎn mǐfàn.",
            "vi": "Tôi muốn một bát cơm trắng."
          },
          {
            "zh": "中国人喜欢吃米饭。",
            "py": "Zhōngguó rén xǐhuān chī mǐfàn.",
            "vi": "Người Trung Quốc thích ăn cơm."
          },
          {
            "zh": "我每天吃米饭。",
            "py": "Wǒ měitiān chī mǐfàn.",
            "vi": "Mỗi ngày tôi ăn cơm."
          },
          {
            "zh": "来一碗米饭吧。",
            "py": "Lái yī wǎn mǐfàn ba.",
            "vi": "Cho một bát cơm nhé."
          },
          {
            "zh": "晚上我吃米饭。",
            "py": "Wǎnshang wǒ chī mǐfàn.",
            "vi": "Buổi tối tôi ăn cơm."
          },
          {
            "zh": "我要两碗米饭。",
            "py": "Wǒ yào liǎng wǎn mǐfàn.",
            "vi": "Tôi muốn hai bát cơm."
          },
          {
            "zh": "米饭多少钱一碗？",
            "py": "Mǐfàn duōshao qián yì wǎn?",
            "vi": "Cơm bao nhiêu tiền một bát?"
          },
          {
            "zh": "你吃米饭还是馒头？",
            "py": "Nǐ chī mǐfàn háishì mántou?",
            "vi": "Bạn ăn cơm hay bánh bao chay?"
          },
          {
            "zh": "食堂的米饭很好吃。",
            "py": "Shítáng de mǐfàn hěn hǎochī.",
            "vi": "Cơm ở nhà ăn rất ngon."
          },
          {
            "zh": "我只吃了一碗米饭。",
            "py": "Wǒ zhǐ chīle yì wǎn mǐfàn.",
            "vi": "Tôi chỉ ăn một bát cơm."
          }
        ]
      },
      {
        "zh": "米",
        "py": "mǐ",
        "type": "Danh từ",
        "vi": "gạo; mét",
        "ex": [
          {
            "zh": "家里的米没有了。",
            "py": "Jiālǐ de mǐ méiyǒu le.",
            "vi": "Gạo ở nhà hết rồi."
          },
          {
            "zh": "买五斤米。",
            "py": "Mǎi wǔ jīn mǐ.",
            "vi": "Mua năm cân gạo."
          },
          {
            "zh": "这个房间有二十平米。",
            "py": "Zhège fángjiān yǒu èrshí píng mǐ.",
            "vi": "Phòng này có hai mươi mét vuông."
          },
          {
            "zh": "这是米。",
            "py": "Zhè shì mǐ.",
            "vi": "Đây là gạo."
          },
          {
            "zh": "我家有很多米。",
            "py": "Wǒ jiā yǒu hěn duō mǐ.",
            "vi": "Nhà tôi có rất nhiều gạo."
          },
          {
            "zh": "我去商店买米。",
            "py": "Wǒ qù shāngdiàn mǎi mǐ.",
            "vi": "Tôi đến cửa hàng mua gạo."
          },
          {
            "zh": "越南的米很好吃。",
            "py": "Yuènán de mǐ hěn hǎochī.",
            "vi": "Gạo Việt Nam rất ngon."
          },
          {
            "zh": "一公斤米多少钱？",
            "py": "Yì gōngjīn mǐ duōshao qián?",
            "vi": "Một ki-lô gạo bao nhiêu tiền?"
          },
          {
            "zh": "我们家没有米了。",
            "py": "Wǒmen jiā méiyǒu mǐ le.",
            "vi": "Nhà chúng tôi hết gạo rồi."
          },
          {
            "zh": "这条路五百米。",
            "py": "Zhè tiáo lù wǔbǎi mǐ.",
            "vi": "Con đường này dài năm trăm mét."
          }
        ]
      },
      {
        "zh": "馒头",
        "py": "mántou",
        "type": "Danh từ",
        "vi": "bánh bao không nhân",
        "ex": [
          {
            "zh": "早上我吃馒头。",
            "py": "Zǎoshang wǒ chī mántou.",
            "vi": "Buổi sáng tôi ăn bánh bao không nhân."
          },
          {
            "zh": "我要一个馒头。",
            "py": "Wǒ yào yí gè mántou.",
            "vi": "Tôi muốn một cái bánh bao chay."
          },
          {
            "zh": "馒头比饺子简单。",
            "py": "Mántou bǐ jiǎozi jiǎndān.",
            "vi": "Bánh bao trắng đơn giản hơn sủi cảo."
          },
          {
            "zh": "他不吃馒头。",
            "py": "Tā bù chī mántou.",
            "vi": "Anh ấy không ăn bánh bao chay."
          },
          {
            "zh": "食堂有馒头。",
            "py": "Shítáng yǒu mántou.",
            "vi": "Căng tin có bánh bao không nhân."
          },
          {
            "zh": "馒头多少钱一个？",
            "py": "Mántou duōshao qián yí ge?",
            "vi": "Bánh bao chay bao nhiêu tiền một cái?"
          },
          {
            "zh": "我早饭吃了两个馒头。",
            "py": "Wǒ zǎofàn chīle liǎng ge mántou.",
            "vi": "Bữa sáng tôi ăn hai cái bánh bao chay."
          },
          {
            "zh": "馒头和包子都是中国的。",
            "py": "Mántou hé bāozi dōu shì Zhōngguó de.",
            "vi": "Bánh bao chay và bánh bao nhân đều là của Trung Quốc."
          },
          {
            "zh": "妈妈做的馒头很好吃。",
            "py": "Māma zuò de mántou hěn hǎochī.",
            "vi": "Bánh bao mẹ làm rất ngon."
          },
          {
            "zh": "你要馒头还是米饭？",
            "py": "Nǐ yào mántou háishì mǐfàn?",
            "vi": "Bạn muốn bánh bao chay hay cơm?"
          }
        ]
      },
      {
        "zh": "饺子",
        "py": "jiǎozi",
        "type": "Danh từ",
        "vi": "sủi cảo, há cảo",
        "ex": [
          {
            "zh": "饺子是中国的传统食物。",
            "py": "Jiǎozi shì Zhōngguó de chuántǒng shíwù.",
            "vi": "Sủi cảo là món ăn truyền thống của Trung Quốc."
          },
          {
            "zh": "我最喜欢吃饺子。",
            "py": "Wǒ zuì xǐhuān chī jiǎozi.",
            "vi": "Tôi thích ăn sủi cảo nhất."
          },
          {
            "zh": "春节吃饺子是传统。",
            "py": "Chūnjié chī jiǎozi shì chuántǒng.",
            "vi": "Ăn sủi cảo ngày Tết là truyền thống."
          },
          {
            "zh": "奶奶做的饺子最好吃。",
            "py": "Nǎinai zuò de jiǎozi zuì hǎochī.",
            "vi": "Sủi cảo bà nội làm ngon nhất."
          },
          {
            "zh": "晚上我们吃饺子。",
            "py": "Wǎnshang wǒmen chī jiǎozi.",
            "vi": "Buổi tối chúng tôi ăn sủi cảo."
          },
          {
            "zh": "一盘饺子多少钱？",
            "py": "Yì pán jiǎozi duōshao qián?",
            "vi": "Một đĩa sủi cảo bao nhiêu tiền?"
          },
          {
            "zh": "这儿的饺子很便宜。",
            "py": "Zhèr de jiǎozi hěn piányi.",
            "vi": "Sủi cảo ở đây rất rẻ."
          },
          {
            "zh": "我要二十个饺子。",
            "py": "Wǒ yào èrshí ge jiǎozi.",
            "vi": "Tôi muốn hai mươi cái sủi cảo."
          },
          {
            "zh": "中国人喜欢吃饺子。",
            "py": "Zhōngguó rén xǐhuan chī jiǎozi.",
            "vi": "Người Trung Quốc thích ăn sủi cảo."
          },
          {
            "zh": "饺子好吃吗？",
            "py": "Jiǎozi hǎochī ma?",
            "vi": "Sủi cảo có ngon không?"
          }
        ]
      },
      {
        "zh": "包子",
        "py": "bāozi",
        "type": "Danh từ",
        "vi": "bánh bao có nhân",
        "ex": [
          {
            "zh": "我要两个包子。",
            "py": "Wǒ yào liǎng gè bāozi.",
            "vi": "Tôi muốn hai cái bánh bao."
          },
          {
            "zh": "早上我买了两个包子。",
            "py": "Zǎoshang wǒ mǎi le liǎng gè bāozi.",
            "vi": "Buổi sáng tôi mua hai cái bánh bao."
          },
          {
            "zh": "肉包子很好吃。",
            "py": "Ròu bāozi hěn hǎochī.",
            "vi": "Bánh bao nhân thịt rất ngon."
          },
          {
            "zh": "我吃包子。",
            "py": "Wǒ chī bāozi.",
            "vi": "Tôi ăn bánh bao có nhân."
          },
          {
            "zh": "食堂有包子。",
            "py": "Shítáng yǒu bāozi.",
            "vi": "Căng tin có bánh bao."
          },
          {
            "zh": "包子多少钱一个？",
            "py": "Bāozi duōshao qián yí ge?",
            "vi": "Bánh bao bao nhiêu tiền một cái?"
          },
          {
            "zh": "早上我吃了三个包子。",
            "py": "Zǎoshang wǒ chīle sān ge bāozi.",
            "vi": "Sáng nay tôi ăn ba cái bánh bao."
          },
          {
            "zh": "这个包子太大了。",
            "py": "Zhège bāozi tài dà le.",
            "vi": "Cái bánh bao này to quá."
          },
          {
            "zh": "我们去买包子吧。",
            "py": "Wǒmen qù mǎi bāozi ba.",
            "vi": "Chúng ta đi mua bánh bao đi."
          },
          {
            "zh": "他喜欢吃包子，不喜欢吃馒头。",
            "py": "Tā xǐhuan chī bāozi, bù xǐhuan chī mántou.",
            "vi": "Anh ấy thích ăn bánh bao nhân, không thích bánh bao chay."
          }
        ]
      },
      {
        "zh": "啤酒",
        "py": "píjiǔ",
        "type": "Danh từ",
        "vi": "bia",
        "ex": [
          {
            "zh": "他不喝啤酒。",
            "py": "Tā bù hē píjiǔ.",
            "vi": "Anh ấy không uống bia."
          },
          {
            "zh": "晚上我喝一瓶啤酒。",
            "py": "Wǎnshang wǒ hē yì píng píjiǔ.",
            "vi": "Buổi tối tôi uống một chai bia."
          },
          {
            "zh": "天热喝啤酒很舒服。",
            "py": "Tiān rè hē píjiǔ hěn shūfu.",
            "vi": "Trời nóng uống bia rất sảng khoái."
          },
          {
            "zh": "一瓶啤酒多少钱？",
            "py": "Yī píng píjiǔ duōshao qián?",
            "vi": "Một chai bia bao nhiêu tiền?"
          },
          {
            "zh": "爸爸喝啤酒。",
            "py": "Bàba hē píjiǔ.",
            "vi": "Bố uống bia."
          },
          {
            "zh": "冷啤酒很好喝。",
            "py": "Lěng píjiǔ hěn hǎohē.",
            "vi": "Bia lạnh rất ngon."
          },
          {
            "zh": "他喝了三瓶啤酒。",
            "py": "Tā hēle sān píng píjiǔ.",
            "vi": "Anh ấy đã uống ba chai bia."
          },
          {
            "zh": "开车不要喝啤酒。",
            "py": "Kāichē búyào hē píjiǔ.",
            "vi": "Lái xe đừng uống bia."
          },
          {
            "zh": "这儿的啤酒很便宜。",
            "py": "Zhèr de píjiǔ hěn piányi.",
            "vi": "Bia ở đây rất rẻ."
          },
          {
            "zh": "你喝啤酒还是喝可乐？",
            "py": "Nǐ hē píjiǔ háishì hē kělè?",
            "vi": "Bạn uống bia hay uống coca?"
          }
        ]
      },
      {
        "zh": "个",
        "py": "gè",
        "type": "Lượng từ",
        "vi": "lượng từ phổ thông (cái, con)",
        "ex": [
          {
            "zh": "请给我两个鸡蛋。",
            "py": "Qǐng gěi wǒ liǎng gè jīdàn.",
            "vi": "Xin cho tôi hai quả trứng."
          },
          {
            "zh": "我要两个苹果。",
            "py": "Wǒ yào liǎng gè píngguǒ.",
            "vi": "Tôi muốn hai quả táo."
          },
          {
            "zh": "他有三个孩子。",
            "py": "Tā yǒu sān gè háizi.",
            "vi": "Anh ấy có ba đứa con."
          },
          {
            "zh": "一个人住很寂寞。",
            "py": "Yī gè rén zhù hěn jìmò.",
            "vi": "Sống một mình rất cô đơn."
          },
          {
            "zh": "他有一个女儿。",
            "py": "Tā yǒu yí gè nǚ'ér.",
            "vi": "Anh ấy có một đứa con gái."
          },
          {
            "zh": "我买了三个西瓜。",
            "py": "Wǒ mǎile sān ge xīguā.",
            "vi": "Tôi mua ba quả dưa hấu."
          },
          {
            "zh": "这个商店几点开门？",
            "py": "Zhège shāngdiàn jǐ diǎn kāimén?",
            "vi": "Cửa hàng này mấy giờ mở cửa?"
          },
          {
            "zh": "我们班有一个法国人。",
            "py": "Wǒmen bān yǒu yí ge Fǎguó rén.",
            "vi": "Lớp chúng tôi có một người Pháp."
          },
          {
            "zh": "你要哪个？",
            "py": "Nǐ yào nǎge?",
            "vi": "Bạn muốn cái nào?"
          },
          {
            "zh": "那个医生很好。",
            "py": "Nàge yīshēng hěn hǎo.",
            "vi": "Bác sĩ kia rất tốt."
          }
        ]
      },
      {
        "zh": "碗",
        "py": "wǎn",
        "type": "Lượng từ",
        "vi": "bát (lượng từ); cái bát",
        "ex": [
          {
            "zh": "请给我一碗汤。",
            "py": "Qǐng gěi wǒ yī wǎn tāng.",
            "vi": "Xin cho tôi một bát canh."
          },
          {
            "zh": "早上我吃一碗面条。",
            "py": "Zǎoshang wǒ chī yì wǎn miàntiáo.",
            "vi": "Buổi sáng tôi ăn một bát mì."
          },
          {
            "zh": "他吃了两碗面条。",
            "py": "Tā chī le liǎng wǎn miàntiáo.",
            "vi": "Anh ấy ăn hai tô mì."
          },
          {
            "zh": "这个碗很漂亮。",
            "py": "Zhège wǎn hěn piàoliang.",
            "vi": "Cái bát này rất đẹp."
          },
          {
            "zh": "我要一碗汤。",
            "py": "Wǒ yào yì wǎn tāng.",
            "vi": "Tôi muốn một bát canh."
          },
          {
            "zh": "请再给我一碗米饭。",
            "py": "Qǐng zài gěi wǒ yì wǎn mǐfàn.",
            "vi": "Làm ơn cho tôi thêm một bát cơm."
          },
          {
            "zh": "这个碗很大。",
            "py": "Zhège wǎn hěn dà.",
            "vi": "Cái bát này rất to."
          },
          {
            "zh": "我吃了三碗饭。",
            "py": "Wǒ chīle sān wǎn fàn.",
            "vi": "Tôi đã ăn ba bát cơm."
          },
          {
            "zh": "一碗汤多少钱？",
            "py": "Yì wǎn tāng duōshao qián?",
            "vi": "Một bát canh bao nhiêu tiền?"
          },
          {
            "zh": "你要几碗面条？",
            "py": "Nǐ yào jǐ wǎn miàntiáo?",
            "vi": "Bạn muốn mấy bát mì?"
          }
        ]
      },
      {
        "zh": "盘",
        "py": "pán",
        "type": "Lượng từ",
        "vi": "đĩa (lượng từ), cái đĩa",
        "ex": [
          {
            "zh": "请给我一盘饺子。",
            "py": "Qǐng gěi wǒ yī pán jiǎozi.",
            "vi": "Xin cho tôi một đĩa sủi cảo."
          },
          {
            "zh": "来一盘炒饭。",
            "py": "Lái yī pán chǎofàn.",
            "vi": "Cho một đĩa cơm chiên."
          },
          {
            "zh": "这盘菜很好吃。",
            "py": "Zhè pán cài hěn hǎochī.",
            "vi": "Đĩa rau này rất ngon."
          },
          {
            "zh": "两盘饺子够吗？",
            "py": "Liǎng pán jiǎozi gòu ma?",
            "vi": "Hai đĩa sủi cảo có đủ không?"
          },
          {
            "zh": "这是一盘饺子。",
            "py": "Zhè shì yì pán jiǎozi.",
            "vi": "Đây là một đĩa sủi cảo."
          },
          {
            "zh": "我们要两盘饺子。",
            "py": "Wǒmen yào liǎng pán jiǎozi.",
            "vi": "Chúng tôi muốn hai đĩa sủi cảo."
          },
          {
            "zh": "这盘水果很好看。",
            "py": "Zhè pán shuǐguǒ hěn hǎokàn.",
            "vi": "Đĩa hoa quả này rất đẹp."
          },
          {
            "zh": "一盘包子多少钱？",
            "py": "Yì pán bāozi duōshao qián?",
            "vi": "Một đĩa bánh bao bao nhiêu tiền?"
          },
          {
            "zh": "他吃了一盘饺子。",
            "py": "Tā chīle yì pán jiǎozi.",
            "vi": "Anh ấy ăn hết một đĩa sủi cảo."
          },
          {
            "zh": "这是一盘西瓜。",
            "py": "Zhè shì yì pán xīguā.",
            "vi": "Đây là một đĩa dưa hấu."
          }
        ]
      },
      {
        "zh": "瓶",
        "py": "píng",
        "type": "Lượng từ",
        "vi": "chai (lượng từ), cái chai",
        "ex": [
          {
            "zh": "我要一瓶啤酒。",
            "py": "Wǒ yào yī píng píjiǔ.",
            "vi": "Tôi muốn một chai bia."
          },
          {
            "zh": "我买了两瓶水。",
            "py": "Wǒ mǎi le liǎng píng shuǐ.",
            "vi": "Tôi mua hai chai nước."
          },
          {
            "zh": "我要一瓶可乐。",
            "py": "Wǒ yào yì píng kělè.",
            "vi": "Tôi muốn một chai coca."
          },
          {
            "zh": "这瓶酱油是我的。",
            "py": "Zhè píng jiàngyóu shì wǒ de.",
            "vi": "Chai nước tương này là của tôi."
          },
          {
            "zh": "这瓶水是你的吗？",
            "py": "Zhè píng shuǐ shì nǐ de ma?",
            "vi": "Chai nước này là của bạn à?"
          },
          {
            "zh": "一瓶水两块钱。",
            "py": "Yì píng shuǐ liǎng kuài qián.",
            "vi": "Một chai nước hai đồng."
          },
          {
            "zh": "这瓶酒是法国的。",
            "py": "Zhè píng jiǔ shì Fǎguó de.",
            "vi": "Chai rượu này là của Pháp."
          },
          {
            "zh": "请给我两瓶啤酒。",
            "py": "Qǐng gěi wǒ liǎng píng píjiǔ.",
            "vi": "Làm ơn cho tôi hai chai bia."
          },
          {
            "zh": "箱子里有三瓶酒。",
            "py": "Xiāngzi lǐ yǒu sān píng jiǔ.",
            "vi": "Trong vali có ba chai rượu."
          },
          {
            "zh": "你要几瓶可乐？",
            "py": "Nǐ yào jǐ píng kělè?",
            "vi": "Bạn muốn mấy chai coca?"
          }
        ]
      },
      {
        "zh": "杯",
        "py": "bēi",
        "type": "Lượng từ",
        "vi": "ly, cốc (lượng từ)",
        "ex": [
          {
            "zh": "我要一杯奶茶。",
            "py": "Wǒ yào yì bēi nǎichá.",
            "vi": "Tôi muốn một ly trà sữa."
          },
          {
            "zh": "早上我喝一杯咖啡。",
            "py": "Zǎoshang wǒ hē yì bēi kāfēi.",
            "vi": "Buổi sáng tôi uống một ly cà phê."
          },
          {
            "zh": "我喝了三杯咖啡。",
            "py": "Wǒ hē le sān bēi kāfēi.",
            "vi": "Tôi uống ba ly cà phê rồi."
          },
          {
            "zh": "这杯奶茶很好喝。",
            "py": "Zhè bēi nǎichá hěn hǎohē.",
            "vi": "Ly trà sữa này rất ngon."
          },
          {
            "zh": "他喝一杯咖啡。",
            "py": "Tā hē yì bēi kāfēi.",
            "vi": "Anh ấy uống một cốc cà phê."
          },
          {
            "zh": "我想喝一杯奶茶。",
            "py": "Wǒ xiǎng hē yì bēi nǎichá.",
            "vi": "Tôi muốn uống một cốc trà sữa."
          },
          {
            "zh": "这杯咖啡是谁的？",
            "py": "Zhè bēi kāfēi shì shéi de?",
            "vi": "Cốc cà phê này là của ai?"
          },
          {
            "zh": "我们要三杯水果汁。",
            "py": "Wǒmen yào sān bēi shuǐguǒzhī.",
            "vi": "Chúng tôi muốn ba cốc nước ép hoa quả."
          },
          {
            "zh": "一杯咖啡多少钱？",
            "py": "Yì bēi kāfēi duōshao qián?",
            "vi": "Một cốc cà phê bao nhiêu tiền?"
          },
          {
            "zh": "他喝了两杯啤酒。",
            "py": "Tā hēle liǎng bēi píjiǔ.",
            "vi": "Anh ấy uống hai cốc bia."
          }
        ]
      },
      {
        "zh": "中午",
        "py": "zhōngwǔ",
        "type": "Danh từ",
        "vi": "buổi trưa",
        "ex": [
          {
            "zh": "中午我们去食堂吃饭。",
            "py": "Zhōngwǔ wǒmen qù shítáng chīfàn.",
            "vi": "Buổi trưa chúng tôi đến căng-tin ăn cơm."
          },
          {
            "zh": "中午我在食堂吃饭。",
            "py": "Zhōngwǔ wǒ zài shítáng chīfàn.",
            "vi": "Buổi trưa tôi ăn cơm ở căng tin."
          },
          {
            "zh": "中午你有空吗？",
            "py": "Zhōngwǔ nǐ yǒu kòng ma?",
            "vi": "Buổi trưa bạn có rảnh không?"
          },
          {
            "zh": "中午十二点吃午饭。",
            "py": "Zhōngwǔ shí'èr diǎn chī wǔfàn.",
            "vi": "Mười hai giờ trưa ăn trưa."
          },
          {
            "zh": "中午我们吃面条。",
            "py": "Zhōngwǔ wǒmen chī miàntiáo.",
            "vi": "Buổi trưa chúng tôi ăn mì."
          },
          {
            "zh": "中午我不回家。",
            "py": "Zhōngwǔ wǒ bù huíjiā.",
            "vi": "Buổi trưa tôi không về nhà."
          },
          {
            "zh": "明天中午我们见吧。",
            "py": "Míngtiān zhōngwǔ wǒmen jiàn ba.",
            "vi": "Trưa mai chúng ta gặp nhé."
          },
          {
            "zh": "中午你想吃什么？",
            "py": "Zhōngwǔ nǐ xiǎng chī shénme?",
            "vi": "Buổi trưa bạn muốn ăn gì?"
          },
          {
            "zh": "中午银行开门吗？",
            "py": "Zhōngwǔ yínháng kāimén ma?",
            "vi": "Buổi trưa ngân hàng có mở cửa không?"
          },
          {
            "zh": "中午我喝了一碗汤。",
            "py": "Zhōngwǔ wǒ hēle yì wǎn tāng.",
            "vi": "Trưa nay tôi uống một bát canh."
          }
        ]
      },
      {
        "zh": "早上",
        "py": "zǎoshang",
        "type": "Danh từ",
        "vi": "buổi sáng",
        "ex": [
          {
            "zh": "早上我喝咖啡。",
            "py": "Zǎoshang wǒ hē kāfēi.",
            "vi": "Buổi sáng tôi uống cà phê."
          },
          {
            "zh": "早上好！",
            "py": "Zǎoshang hǎo!",
            "vi": "Chào buổi sáng!"
          },
          {
            "zh": "我每天早上六点起床。",
            "py": "Wǒ měitiān zǎoshang liù diǎn qǐchuáng.",
            "vi": "Mỗi ngày tôi dậy lúc 6 giờ sáng."
          },
          {
            "zh": "早上我吃粥。",
            "py": "Zǎoshang wǒ chī zhōu.",
            "vi": "Buổi sáng tôi ăn cháo."
          },
          {
            "zh": "早上我在家吃饭。",
            "py": "Zǎoshang wǒ zài jiā chīfàn.",
            "vi": "Buổi sáng tôi ăn cơm ở nhà."
          },
          {
            "zh": "早上我坐地铁上班。",
            "py": "Zǎoshang wǒ zuò dìtiě shàngbān.",
            "vi": "Buổi sáng tôi đi tàu điện ngầm đi làm."
          },
          {
            "zh": "明天早上我去银行。",
            "py": "Míngtiān zǎoshang wǒ qù yínháng.",
            "vi": "Sáng mai tôi đi ngân hàng."
          },
          {
            "zh": "今天早上很冷。",
            "py": "Jīntiān zǎoshang hěn lěng.",
            "vi": "Sáng nay rất lạnh."
          },
          {
            "zh": "早上我不喝咖啡。",
            "py": "Zǎoshang wǒ bù hē kāfēi.",
            "vi": "Buổi sáng tôi không uống cà phê."
          },
          {
            "zh": "他早上八点出去了。",
            "py": "Tā zǎoshang bā diǎn chūqù le.",
            "vi": "Anh ấy ra ngoài lúc tám giờ sáng."
          }
        ]
      },
      {
        "zh": "晚上",
        "py": "wǎnshang",
        "type": "Danh từ",
        "vi": "buổi tối",
        "ex": [
          {
            "zh": "晚上我看书学习。",
            "py": "Wǎnshang wǒ kàn shū xuéxí.",
            "vi": "Buổi tối tôi đọc sách học bài."
          },
          {
            "zh": "晚上好！",
            "py": "Wǎnshang hǎo!",
            "vi": "Chào buổi tối!"
          },
          {
            "zh": "我晚上学习汉语。",
            "py": "Wǒ wǎnshang xuéxí Hànyǔ.",
            "vi": "Buổi tối tôi học tiếng Trung."
          },
          {
            "zh": "晚上我们一起吃饭吧。",
            "py": "Wǎnshang wǒmen yīqǐ chīfàn ba.",
            "vi": "Tối nay chúng ta cùng ăn cơm nhé."
          },
          {
            "zh": "晚上我不出去。",
            "py": "Wǎnshang wǒ bù chūqù.",
            "vi": "Buổi tối tôi không ra ngoài."
          },
          {
            "zh": "晚上我们去商场吧。",
            "py": "Wǎnshang wǒmen qù shāngchǎng ba.",
            "vi": "Tối nay chúng ta đi trung tâm thương mại nhé."
          },
          {
            "zh": "晚上你几点回家？",
            "py": "Wǎnshang nǐ jǐ diǎn huíjiā?",
            "vi": "Buổi tối bạn mấy giờ về nhà?"
          },
          {
            "zh": "昨天晚上下雨了。",
            "py": "Zuótiān wǎnshang xià yǔ le.",
            "vi": "Tối qua trời mưa."
          },
          {
            "zh": "晚上我不喝茶。",
            "py": "Wǎnshang wǒ bù hē chá.",
            "vi": "Buổi tối tôi không uống trà."
          },
          {
            "zh": "晚上我跟朋友去喝啤酒。",
            "py": "Wǎnshang wǒ gēn péngyou qù hē píjiǔ.",
            "vi": "Buổi tối tôi đi uống bia với bạn."
          }
        ]
      },
      {
        "zh": "多大年纪",
        "py": "duō dà niánjì",
        "vi": "bao nhiêu tuổi (hỏi người lớn tuổi)",
        "type": "Cụm từ",
        "ex": [
          {
            "zh": "您多大年纪？",
            "py": "Nín duō dà niánjì?",
            "vi": "Ngài bao nhiêu tuổi ạ? (hỏi người lớn tuổi)"
          },
          {
            "zh": "您爷爷多大年纪了？",
            "py": "Nín yéye duō dà niánjì le?",
            "vi": "Ông của ngài bao nhiêu tuổi rồi?"
          },
          {
            "zh": "老师多大年纪？",
            "py": "Lǎoshī duō dà niánjì?",
            "vi": "Thầy/cô bao nhiêu tuổi?"
          },
          {
            "zh": "爷爷多大年纪了？",
            "py": "Yéye duō dà niánjì le?",
            "vi": "Ông nội bao nhiêu tuổi rồi?"
          },
          {
            "zh": "请问，您多大年纪？",
            "py": "Qǐngwèn, nín duō dà niánjì?",
            "vi": "Xin hỏi, ngài bao nhiêu tuổi ạ?"
          },
          {
            "zh": "你奶奶多大年纪了？",
            "py": "Nǐ nǎinai duō dà niánjì le?",
            "vi": "Bà nội bạn bao nhiêu tuổi rồi?"
          },
          {
            "zh": "那位老先生多大年纪？",
            "py": "Nà wèi lǎo xiānsheng duō dà niánjì?",
            "vi": "Cụ ông kia bao nhiêu tuổi?"
          },
          {
            "zh": "校长多大年纪了？",
            "py": "Xiàozhǎng duō dà niánjì le?",
            "vi": "Hiệu trưởng bao nhiêu tuổi rồi?"
          },
          {
            "zh": "阿姨，您多大年纪了？",
            "py": "Āyí, nín duō dà niánjì le?",
            "vi": "Cô ơi, cô bao nhiêu tuổi rồi?"
          },
          {
            "zh": "吴教授多大年纪？",
            "py": "Wú jiàoshòu duō dà niánjì?",
            "vi": "Giáo sư Ngô bao nhiêu tuổi?"
          }
        ]
      },
      {
        "zh": "河内",
        "py": "Hénèi",
        "vi": "Hà Nội",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我们住在河内。",
            "py": "Wǒmen zhù zài Hénèi.",
            "vi": "Chúng tôi sống ở Hà Nội."
          },
          {
            "zh": "我住在河内。",
            "py": "Wǒ zhù zài Hénèi.",
            "vi": "Tôi sống ở Hà Nội."
          },
          {
            "zh": "河内很好。",
            "py": "Hénèi hěn hǎo.",
            "vi": "Hà Nội rất đẹp."
          },
          {
            "zh": "他在河内工作。",
            "py": "Tā zài Hénèi gōngzuò.",
            "vi": "Anh ấy làm việc ở Hà Nội."
          },
          {
            "zh": "我们去河内。",
            "py": "Wǒmen qù Hénèi.",
            "vi": "Chúng tôi đi Hà Nội."
          },
          {
            "zh": "河内的摩托车很多。",
            "py": "Hénèi de mótuōchē hěn duō.",
            "vi": "Hà Nội có rất nhiều xe máy."
          },
          {
            "zh": "我在河内上大学。",
            "py": "Wǒ zài Hénèi shàng dàxué.",
            "vi": "Tôi học đại học ở Hà Nội."
          },
          {
            "zh": "河内的咖啡很好喝。",
            "py": "Hénèi de kāfēi hěn hǎohē.",
            "vi": "Cà phê Hà Nội rất ngon."
          },
          {
            "zh": "你想去河内旅游吗？",
            "py": "Nǐ xiǎng qù Hénèi lǚyóu ma?",
            "vi": "Bạn có muốn đi du lịch Hà Nội không?"
          },
          {
            "zh": "河内有地铁吗？",
            "py": "Hénèi yǒu dìtiě ma?",
            "vi": "Hà Nội có tàu điện ngầm không?"
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 9 (b10): 一些・这些・那些 – Một vài, những... này/kia",
    "words": [
      {
        "zh": "一些",
        "py": "yìxiē",
        "type": "Lượng từ",
        "vi": "một vài, một số",
        "ex": [
          {
            "zh": "请给我一些水。",
            "py": "Qǐng gěi wǒ yīxiē shuǐ.",
            "vi": "Xin cho tôi một chút nước."
          },
          {
            "zh": "我买了一些水果。",
            "py": "Wǒ mǎi le yīxiē shuǐguǒ.",
            "vi": "Tôi mua một ít trái cây."
          },
          {
            "zh": "给我一些时间。",
            "py": "Gěi wǒ yīxiē shíjiān.",
            "vi": "Cho tôi một chút thời gian."
          },
          {
            "zh": "我还有一些问题。",
            "py": "Wǒ hái yǒu yīxiē wèntí.",
            "vi": "Tôi còn một số câu hỏi."
          },
          {
            "zh": "我有一些书。",
            "py": "Wǒ yǒu yìxiē shū.",
            "vi": "Tôi có một ít sách."
          },
          {
            "zh": "我想买一些水果。",
            "py": "Wǒ xiǎng mǎi yìxiē shuǐguǒ.",
            "vi": "Tôi muốn mua một ít hoa quả."
          },
          {
            "zh": "他给我一些钱。",
            "py": "Tā gěi wǒ yìxiē qián.",
            "vi": "Anh ấy đưa tôi một ít tiền."
          },
          {
            "zh": "我们班有一些日本学生。",
            "py": "Wǒmen bān yǒu yìxiē Rìběn xuésheng.",
            "vi": "Lớp chúng tôi có một vài học sinh Nhật."
          },
          {
            "zh": "我喝了一些汤。",
            "py": "Wǒ hēle yìxiē tāng.",
            "vi": "Tôi đã uống một ít canh."
          },
          {
            "zh": "商店里有一些新衣服。",
            "py": "Shāngdiàn lǐ yǒu yìxiē xīn yīfu.",
            "vi": "Trong cửa hàng có một số quần áo mới."
          }
        ]
      },
      {
        "zh": "这些",
        "py": "zhèxiē",
        "type": "Đại từ",
        "vi": "những cái này",
        "ex": [
          {
            "zh": "这些书都是我的。",
            "py": "Zhèxiē shū dōu shì wǒ de.",
            "vi": "Những quyển sách này đều là của tôi."
          },
          {
            "zh": "这些苹果多少钱？",
            "py": "Zhèxiē píngguǒ duōshao qián?",
            "vi": "Những quả táo này bao nhiêu tiền?"
          },
          {
            "zh": "这些孩子都在学校。",
            "py": "Zhèxiē háizi dōu zài xuéxiào.",
            "vi": "Những đứa trẻ này đều ở trường."
          },
          {
            "zh": "这些问题很难。",
            "py": "Zhèxiē wèntí hěn nán.",
            "vi": "Những câu hỏi này rất khó."
          },
          {
            "zh": "这些是我的杂志。",
            "py": "Zhèxiē shì wǒ de zázhì.",
            "vi": "Đây là những tạp chí của tôi."
          },
          {
            "zh": "这些衣服都很便宜。",
            "py": "Zhèxiē yīfu dōu hěn piányi.",
            "vi": "Những bộ quần áo này đều rất rẻ."
          },
          {
            "zh": "这些是我的同学。",
            "py": "Zhèxiē shì wǒ de tóngxué.",
            "vi": "Đây là các bạn học của tôi."
          },
          {
            "zh": "这些照片很好看。",
            "py": "Zhèxiē zhàopiàn hěn hǎokàn.",
            "vi": "Những bức ảnh này rất đẹp."
          },
          {
            "zh": "这些东西都很贵。",
            "py": "Zhèxiē dōngxi dōu hěn guì.",
            "vi": "Những đồ này đều rất đắt."
          },
          {
            "zh": "这些汉字很难。",
            "py": "Zhèxiē Hànzì hěn nán.",
            "vi": "Những chữ Hán này rất khó."
          }
        ]
      },
      {
        "zh": "那些",
        "py": "nàxiē",
        "type": "Đại từ",
        "vi": "những cái kia",
        "ex": [
          {
            "zh": "那些苹果多少钱？",
            "py": "Nàxiē píngguǒ duōshao qián?",
            "vi": "Những quả táo kia bao nhiêu tiền?"
          },
          {
            "zh": "那些学生都很认真。",
            "py": "Nàxiē xuéshēng dōu hěn rènzhēn.",
            "vi": "Những học sinh đó đều rất chăm chỉ."
          },
          {
            "zh": "那些水果新鲜吗？",
            "py": "Nàxiē shuǐguǒ xīnxiān ma?",
            "vi": "Những trái cây đó có tươi không?"
          },
          {
            "zh": "那些是谁的？",
            "py": "Nàxiē shì shéi de?",
            "vi": "Những cái đó là của ai?"
          },
          {
            "zh": "那些孩子很好。",
            "py": "Nàxiē háizi hěn hǎo.",
            "vi": "Những đứa trẻ đó rất ngoan."
          },
          {
            "zh": "那些人是哪国人？",
            "py": "Nàxiē rén shì nǎ guó rén?",
            "vi": "Những người kia là người nước nào?"
          },
          {
            "zh": "那些书很旧。",
            "py": "Nàxiē shū hěn jiù.",
            "vi": "Những quyển sách kia rất cũ."
          },
          {
            "zh": "那些衣服是我妹妹的。",
            "py": "Nàxiē yīfu shì wǒ mèimei de.",
            "vi": "Những bộ quần áo kia là của em gái tôi."
          },
          {
            "zh": "那些自行车都是新的。",
            "py": "Nàxiē zìxíngchē dōu shì xīn de.",
            "vi": "Những chiếc xe đạp kia đều là xe mới."
          },
          {
            "zh": "你要那些香蕉吗？",
            "py": "Nǐ yào nàxiē xiāngjiāo ma?",
            "vi": "Bạn có muốn những quả chuối kia không?"
          }
        ]
      },
      {
        "zh": "本",
        "py": "běn",
        "type": "Lượng từ",
        "vi": "quyển, cuốn (lượng từ sách)",
        "ex": [
          {
            "zh": "那些书有几本？",
            "py": "Nàxiē shū yǒu jǐ běn?",
            "vi": "Những quyển sách kia có mấy quyển?"
          },
          {
            "zh": "我买了一本汉语书。",
            "py": "Wǒ mǎi le yī běn Hànyǔ shū.",
            "vi": "Tôi mua một cuốn sách tiếng Trung."
          },
          {
            "zh": "你有几本书？",
            "py": "Nǐ yǒu jǐ běn shū?",
            "vi": "Bạn có mấy cuốn sách?"
          },
          {
            "zh": "这本汉语书是老师的。",
            "py": "Zhè běn Hànyǔ shū shì lǎoshī de.",
            "vi": "Quyển sách tiếng Trung này là của thầy giáo."
          },
          {
            "zh": "这本书是我的。",
            "py": "Zhè běn shū shì wǒ de.",
            "vi": "Cuốn sách này là của tôi."
          },
          {
            "zh": "我想买两本词典。",
            "py": "Wǒ xiǎng mǎi liǎng běn cídiǎn.",
            "vi": "Tôi muốn mua hai quyển từ điển."
          },
          {
            "zh": "这本杂志多少钱？",
            "py": "Zhè běn zázhì duōshao qián?",
            "vi": "Quyển tạp chí này bao nhiêu tiền?"
          },
          {
            "zh": "他有十本汉语书。",
            "py": "Tā yǒu shí běn Hànyǔ shū.",
            "vi": "Anh ấy có mười quyển sách tiếng Trung."
          },
          {
            "zh": "那本书是谁的？",
            "py": "Nà běn shū shì shéi de?",
            "vi": "Quyển sách kia là của ai?"
          },
          {
            "zh": "我给弟弟寄了两本书。",
            "py": "Wǒ gěi dìdi jìle liǎng běn shū.",
            "vi": "Tôi gửi cho em trai hai quyển sách."
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 10 (b11): 苹果一斤多少钱？– Mua hoa quả",
    "words": [
      {
        "zh": "买",
        "py": "mǎi",
        "type": "Động từ",
        "vi": "mua",
        "ex": [
          {
            "zh": "我要去买水果。",
            "py": "Wǒ yào qù mǎi shuǐguǒ.",
            "vi": "Tôi muốn đi mua hoa quả."
          },
          {
            "zh": "我去买水果。",
            "py": "Wǒ qù mǎi shuǐguǒ.",
            "vi": "Tôi đi mua trái cây."
          },
          {
            "zh": "你买了什么？",
            "py": "Nǐ mǎi le shénme?",
            "vi": "Bạn mua gì vậy?"
          },
          {
            "zh": "我想买一本汉语书。",
            "py": "Wǒ xiǎng mǎi yī běn Hànyǔ shū.",
            "vi": "Tôi muốn mua một cuốn sách tiếng Trung."
          },
          {
            "zh": "这个太贵了，我不买。",
            "py": "Zhège tài guì le, wǒ bù mǎi.",
            "vi": "Cái này đắt quá, tôi không mua."
          },
          {
            "zh": "你想买什么颜色的衣服？",
            "py": "Nǐ xiǎng mǎi shénme yánsè de yīfu?",
            "vi": "Bạn muốn mua quần áo màu gì?"
          },
          {
            "zh": "我们去商店买水吧。",
            "py": "Wǒmen qù shāngdiàn mǎi shuǐ ba.",
            "vi": "Chúng ta đến cửa hàng mua nước nhé."
          },
          {
            "zh": "爸爸买了一辆新汽车。",
            "py": "Bàba mǎile yí liàng xīn qìchē.",
            "vi": "Bố đã mua một chiếc ô tô mới."
          },
          {
            "zh": "我不买了，太贵了。",
            "py": "Wǒ bù mǎi le, tài guì le.",
            "vi": "Tôi không mua nữa, đắt quá."
          },
          {
            "zh": "你在哪儿买的这件毛衣？",
            "py": "Nǐ zài nǎr mǎi de zhè jiàn máoyī?",
            "vi": "Bạn mua chiếc áo len này ở đâu?"
          }
        ]
      },
      {
        "zh": "卖",
        "py": "mài",
        "type": "Động từ",
        "vi": "bán",
        "ex": [
          {
            "zh": "这里卖什么水果？",
            "py": "Zhèlǐ mài shénme shuǐguǒ?",
            "vi": "Ở đây bán những loại hoa quả gì?"
          },
          {
            "zh": "这里卖什么？",
            "py": "Zhèlǐ mài shénme?",
            "vi": "Ở đây bán gì?"
          },
          {
            "zh": "他卖水果为生。",
            "py": "Tā mài shuǐguǒ wéishēng.",
            "vi": "Anh ấy bán trái cây để sống."
          },
          {
            "zh": "这个东西卖完了。",
            "py": "Zhège dōngxi mài wán le.",
            "vi": "Món này đã bán hết rồi."
          },
          {
            "zh": "这儿卖水果。",
            "py": "Zhèr mài shuǐguǒ.",
            "vi": "Ở đây bán trái cây."
          },
          {
            "zh": "那个商店卖什么？",
            "py": "Nàge shāngdiàn mài shénme?",
            "vi": "Cửa hàng kia bán gì?"
          },
          {
            "zh": "他在市场卖水果。",
            "py": "Tā zài shìchǎng mài shuǐguǒ.",
            "vi": "Anh ấy bán hoa quả ở chợ."
          },
          {
            "zh": "西瓜怎么卖？",
            "py": "Xīguā zěnme mài?",
            "vi": "Dưa hấu bán thế nào?"
          },
          {
            "zh": "这儿卖不卖词典？",
            "py": "Zhèr mài bu mài cídiǎn?",
            "vi": "Ở đây có bán từ điển không?"
          },
          {
            "zh": "他想卖他的旧车。",
            "py": "Tā xiǎng mài tā de jiù chē.",
            "vi": "Anh ấy muốn bán chiếc xe cũ của mình."
          }
        ]
      },
      {
        "zh": "水果",
        "py": "shuǐguǒ",
        "type": "Danh từ",
        "vi": "hoa quả, trái cây",
        "ex": [
          {
            "zh": "我每天吃水果。",
            "py": "Wǒ měitiān chī shuǐguǒ.",
            "vi": "Tôi ăn hoa quả mỗi ngày."
          },
          {
            "zh": "我喜欢吃水果。",
            "py": "Wǒ xǐhuān chī shuǐguǒ.",
            "vi": "Tôi thích ăn trái cây."
          },
          {
            "zh": "越南水果很好吃。",
            "py": "Yuènán shuǐguǒ hěn hǎochī.",
            "vi": "Trái cây Việt Nam rất ngon."
          },
          {
            "zh": "多吃水果对身体好。",
            "py": "Duō chī shuǐguǒ duì shēntǐ hǎo.",
            "vi": "Ăn nhiều trái cây tốt cho sức khỏe."
          },
          {
            "zh": "我喜欢水果。",
            "py": "Wǒ xǐhuan shuǐguǒ.",
            "vi": "Tôi thích trái cây."
          },
          {
            "zh": "商场里的水果很贵。",
            "py": "Shāngchǎng lǐ de shuǐguǒ hěn guì.",
            "vi": "Hoa quả trong trung tâm thương mại rất đắt."
          },
          {
            "zh": "我给奶奶买了一些水果。",
            "py": "Wǒ gěi nǎinai mǎile yìxiē shuǐguǒ.",
            "vi": "Tôi mua cho bà một ít hoa quả."
          },
          {
            "zh": "水果店在哪儿？",
            "py": "Shuǐguǒ diàn zài nǎr?",
            "vi": "Cửa hàng hoa quả ở đâu?"
          },
          {
            "zh": "孩子们都喜欢吃水果。",
            "py": "Háizimen dōu xǐhuan chī shuǐguǒ.",
            "vi": "Bọn trẻ đều thích ăn hoa quả."
          },
          {
            "zh": "你买了什么水果？",
            "py": "Nǐ mǎile shénme shuǐguǒ?",
            "vi": "Bạn đã mua hoa quả gì?"
          }
        ]
      },
      {
        "zh": "苹果",
        "py": "píngguǒ",
        "type": "Danh từ",
        "vi": "táo (apple)",
        "ex": [
          {
            "zh": "苹果一斤多少钱？",
            "py": "Píngguǒ yī jīn duōshao qián?",
            "vi": "Một cân táo bao nhiêu tiền?"
          },
          {
            "zh": "这些苹果很便宜。",
            "py": "Zhèxiē píngguǒ hěn piányi.",
            "vi": "Những quả táo này rất rẻ."
          },
          {
            "zh": "我每天吃一个苹果。",
            "py": "Wǒ měitiān chī yī gè píngguǒ.",
            "vi": "Mỗi ngày tôi ăn một quả táo."
          },
          {
            "zh": "红苹果比绿苹果甜。",
            "py": "Hóng píngguǒ bǐ lǜ píngguǒ tián.",
            "vi": "Táo đỏ ngọt hơn táo xanh."
          },
          {
            "zh": "我买苹果。",
            "py": "Wǒ mǎi píngguǒ.",
            "vi": "Tôi mua táo."
          },
          {
            "zh": "这个苹果很大。",
            "py": "Zhège píngguǒ hěn dà.",
            "vi": "Quả táo này rất to."
          },
          {
            "zh": "中国的苹果很好吃。",
            "py": "Zhōngguó de píngguǒ hěn hǎochī.",
            "vi": "Táo Trung Quốc rất ngon."
          },
          {
            "zh": "你要红苹果还是绿苹果？",
            "py": "Nǐ yào hóng píngguǒ háishì lǜ píngguǒ?",
            "vi": "Bạn muốn táo đỏ hay táo xanh?"
          },
          {
            "zh": "我给你一个苹果。",
            "py": "Wǒ gěi nǐ yí ge píngguǒ.",
            "vi": "Tôi cho bạn một quả táo."
          },
          {
            "zh": "妈妈买了三斤苹果。",
            "py": "Māma mǎile sān jīn píngguǒ.",
            "vi": "Mẹ mua ba cân táo."
          }
        ]
      },
      {
        "zh": "橘子",
        "py": "júzi",
        "type": "Danh từ",
        "vi": "quýt",
        "ex": [
          {
            "zh": "橘子又甜又酸。",
            "py": "Júzi yòu tián yòu suān.",
            "vi": "Quýt vừa ngọt vừa chua."
          },
          {
            "zh": "橘子酸甜好吃。",
            "py": "Júzi suāntián hǎochī.",
            "vi": "Quýt chua ngọt rất ngon."
          },
          {
            "zh": "冬天吃橘子很好。",
            "py": "Dōngtiān chī júzi hěn hǎo.",
            "vi": "Mùa đông ăn quýt rất tốt."
          },
          {
            "zh": "她喜欢橘子。",
            "py": "Tā xǐhuan júzi.",
            "vi": "Cô ấy thích quýt."
          },
          {
            "zh": "我买两斤橘子。",
            "py": "Wǒ mǎi liǎng jīn júzi.",
            "vi": "Tôi mua hai cân quýt."
          },
          {
            "zh": "橘子多少钱一斤？",
            "py": "Júzi duōshao qián yì jīn?",
            "vi": "Quýt bao nhiêu tiền một cân?"
          },
          {
            "zh": "我要三斤橘子。",
            "py": "Wǒ yào sān jīn júzi.",
            "vi": "Tôi muốn ba cân quýt."
          },
          {
            "zh": "橘子是黄色的。",
            "py": "Júzi shì huángsè de.",
            "vi": "Quả quýt màu vàng."
          },
          {
            "zh": "孩子喜欢吃橘子。",
            "py": "Háizi xǐhuan chī júzi.",
            "vi": "Trẻ con thích ăn quýt."
          },
          {
            "zh": "这个橘子很好吃。",
            "py": "Zhège júzi hěn hǎochī.",
            "vi": "Quả quýt này rất ngon."
          }
        ]
      },
      {
        "zh": "橙子",
        "py": "chéngzi",
        "type": "Danh từ",
        "vi": "quả cam",
        "ex": [
          {
            "zh": "橙子一斤多少钱？",
            "py": "Chéngzi yī jīn duōshao qián?",
            "vi": "Một cân cam bao nhiêu tiền?"
          },
          {
            "zh": "橙子汁很好喝。",
            "py": "Chéngzi zhī hěn hǎohē.",
            "vi": "Nước cam rất ngon."
          },
          {
            "zh": "我买了五个橙子。",
            "py": "Wǒ mǎi le wǔ gè chéngzi.",
            "vi": "Tôi mua năm quả cam."
          },
          {
            "zh": "他买橙子。",
            "py": "Tā mǎi chéngzi.",
            "vi": "Anh ấy mua cam."
          },
          {
            "zh": "橙子多少钱一斤？",
            "py": "Chéngzi duōshao qián yì jīn?",
            "vi": "Cam bao nhiêu tiền một cân?"
          },
          {
            "zh": "我要一杯橙子汁。",
            "py": "Wǒ yào yì bēi chéngzi zhī.",
            "vi": "Tôi muốn một cốc nước cam."
          },
          {
            "zh": "这些橙子很大。",
            "py": "Zhèxiē chéngzi hěn dà.",
            "vi": "Những quả cam này rất to."
          },
          {
            "zh": "橙子和橘子都很好吃。",
            "py": "Chéngzi hé júzi dōu hěn hǎochī.",
            "vi": "Cam và quýt đều rất ngon."
          },
          {
            "zh": "我给妈妈买了一些橙子。",
            "py": "Wǒ gěi māma mǎile yìxiē chéngzi.",
            "vi": "Tôi mua cho mẹ một ít cam."
          },
          {
            "zh": "一公斤橙子多少钱？",
            "py": "Yì gōngjīn chéngzi duōshao qián?",
            "vi": "Một ki-lô cam bao nhiêu tiền?"
          }
        ]
      },
      {
        "zh": "芒果",
        "py": "mángguǒ",
        "type": "Danh từ",
        "vi": "xoài",
        "ex": [
          {
            "zh": "芒果怎么卖？",
            "py": "Mángguǒ zěnme mài?",
            "vi": "Xoài bán như thế nào?"
          },
          {
            "zh": "越南芒果很甜。",
            "py": "Yuènán mángguǒ hěn tián.",
            "vi": "Xoài Việt Nam rất ngọt."
          },
          {
            "zh": "我最喜欢吃芒果。",
            "py": "Wǒ zuì xǐhuān chī mángguǒ.",
            "vi": "Tôi thích ăn xoài nhất."
          },
          {
            "zh": "我喜欢芒果。",
            "py": "Wǒ xǐhuan mángguǒ.",
            "vi": "Tôi thích xoài."
          },
          {
            "zh": "芒果很贵。",
            "py": "Mángguǒ hěn guì.",
            "vi": "Xoài rất đắt."
          },
          {
            "zh": "芒果多少钱一斤？",
            "py": "Mángguǒ duōshao qián yì jīn?",
            "vi": "Xoài bao nhiêu tiền một cân?"
          },
          {
            "zh": "这个芒果很大很香。",
            "py": "Zhège mángguǒ hěn dà hěn xiāng.",
            "vi": "Quả xoài này rất to và thơm."
          },
          {
            "zh": "我要两斤芒果。",
            "py": "Wǒ yào liǎng jīn mángguǒ.",
            "vi": "Tôi muốn hai cân xoài."
          },
          {
            "zh": "芒果是黄色的。",
            "py": "Mángguǒ shì huángsè de.",
            "vi": "Xoài có màu vàng."
          },
          {
            "zh": "妹妹最喜欢喝芒果汁。",
            "py": "Mèimei zuì xǐhuan hē mángguǒ zhī.",
            "vi": "Em gái thích uống nước xoài nhất."
          }
        ]
      },
      {
        "zh": "葡萄",
        "py": "pútao",
        "type": "Danh từ",
        "vi": "nho",
        "ex": [
          {
            "zh": "这个葡萄很甜。",
            "py": "Zhège pútao hěn tián.",
            "vi": "Nho này rất ngọt."
          },
          {
            "zh": "这串葡萄很甜。",
            "py": "Zhè chuàn pútáo hěn tián.",
            "vi": "Chùm nho này rất ngọt."
          },
          {
            "zh": "葡萄一斤多少钱？",
            "py": "Pútáo yī jīn duōshao qián?",
            "vi": "Nho một cân bao nhiêu tiền?"
          },
          {
            "zh": "她买葡萄。",
            "py": "Tā mǎi pútao.",
            "vi": "Cô ấy mua nho."
          },
          {
            "zh": "葡萄很便宜。",
            "py": "Pútao hěn piányi.",
            "vi": "Nho rất rẻ."
          },
          {
            "zh": "我要一斤葡萄。",
            "py": "Wǒ yào yì jīn pútao.",
            "vi": "Tôi muốn một cân nho."
          },
          {
            "zh": "这些葡萄很贵。",
            "py": "Zhèxiē pútao hěn guì.",
            "vi": "Những chùm nho này rất đắt."
          },
          {
            "zh": "我爸爸喜欢喝葡萄酒。",
            "py": "Wǒ bàba xǐhuan hē pútaojiǔ.",
            "vi": "Bố tôi thích uống rượu vang."
          },
          {
            "zh": "你喜欢吃葡萄吗？",
            "py": "Nǐ xǐhuan chī pútao ma?",
            "vi": "Bạn có thích ăn nho không?"
          },
          {
            "zh": "这是美国葡萄。",
            "py": "Zhè shì Měiguó pútao.",
            "vi": "Đây là nho Mỹ."
          }
        ]
      },
      {
        "zh": "香蕉",
        "py": "xiāngjiāo",
        "type": "Danh từ",
        "vi": "chuối",
        "ex": [
          {
            "zh": "我买了两斤香蕉。",
            "py": "Wǒ mǎi le liǎng jīn xiāngjiāo.",
            "vi": "Tôi đã mua hai cân chuối."
          },
          {
            "zh": "香蕉对身体很好。",
            "py": "Xiāngjiāo duì shēntǐ hěn hǎo.",
            "vi": "Chuối rất tốt cho sức khỏe."
          },
          {
            "zh": "我买了一把香蕉。",
            "py": "Wǒ mǎi le yī bǎ xiāngjiāo.",
            "vi": "Tôi mua một nải chuối."
          },
          {
            "zh": "我吃香蕉。",
            "py": "Wǒ chī xiāngjiāo.",
            "vi": "Tôi ăn chuối."
          },
          {
            "zh": "香蕉多少钱？",
            "py": "Xiāngjiāo duōshao qián?",
            "vi": "Chuối bao nhiêu tiền?"
          },
          {
            "zh": "香蕉多少钱一斤？",
            "py": "Xiāngjiāo duōshao qián yì jīn?",
            "vi": "Chuối bao nhiêu tiền một cân?"
          },
          {
            "zh": "我早上吃一根香蕉。",
            "py": "Wǒ zǎoshang chī yì gēn xiāngjiāo.",
            "vi": "Buổi sáng tôi ăn một quả chuối."
          },
          {
            "zh": "越南的香蕉很便宜。",
            "py": "Yuènán de xiāngjiāo hěn piányi.",
            "vi": "Chuối Việt Nam rất rẻ."
          },
          {
            "zh": "这些香蕉还不太黄。",
            "py": "Zhèxiē xiāngjiāo hái bú tài huáng.",
            "vi": "Những quả chuối này vẫn chưa vàng lắm."
          },
          {
            "zh": "你要香蕉还是苹果？",
            "py": "Nǐ yào xiāngjiāo háishì píngguǒ?",
            "vi": "Bạn muốn chuối hay táo?"
          }
        ]
      },
      {
        "zh": "西瓜",
        "py": "xīguā",
        "type": "Danh từ",
        "vi": "dưa hấu",
        "ex": [
          {
            "zh": "夏天西瓜很好吃。",
            "py": "Xiàtiān xīguā hěn hǎochī.",
            "vi": "Mùa hè ăn dưa hấu rất ngon."
          },
          {
            "zh": "夏天吃西瓜很好。",
            "py": "Xiàtiān chī xīguā hěn hǎo.",
            "vi": "Mùa hè ăn dưa hấu rất tốt."
          },
          {
            "zh": "西瓜一个多少钱？",
            "py": "Xīguā yī gè duōshao qián?",
            "vi": "Một quả dưa hấu bao nhiêu tiền?"
          },
          {
            "zh": "越南的西瓜很甜。",
            "py": "Yuènán de xīguā hěn tián.",
            "vi": "Dưa hấu Việt Nam rất ngọt."
          },
          {
            "zh": "我买一个西瓜。",
            "py": "Wǒ mǎi yí gè xīguā.",
            "vi": "Tôi mua một quả dưa hấu."
          },
          {
            "zh": "这个西瓜多少钱？",
            "py": "Zhège xīguā duōshao qián?",
            "vi": "Quả dưa hấu này bao nhiêu tiền?"
          },
          {
            "zh": "西瓜很重。",
            "py": "Xīguā hěn zhòng.",
            "vi": "Dưa hấu rất nặng."
          },
          {
            "zh": "我们吃西瓜吧。",
            "py": "Wǒmen chī xīguā ba.",
            "vi": "Chúng ta ăn dưa hấu đi."
          },
          {
            "zh": "西瓜汁很好喝。",
            "py": "Xīguā zhī hěn hǎohē.",
            "vi": "Nước ép dưa hấu rất ngon."
          },
          {
            "zh": "今天的西瓜很便宜。",
            "py": "Jīntiān de xīguā hěn piányi.",
            "vi": "Dưa hấu hôm nay rất rẻ."
          }
        ]
      },
      {
        "zh": "梨",
        "py": "lí",
        "type": "Danh từ",
        "vi": "lê (quả lê)",
        "ex": [
          {
            "zh": "梨比苹果便宜。",
            "py": "Lí bǐ píngguǒ piányi.",
            "vi": "Lê rẻ hơn táo."
          },
          {
            "zh": "这个梨很甜。",
            "py": "Zhège lí hěn tián.",
            "vi": "Quả lê này rất ngọt."
          },
          {
            "zh": "我买了几个梨。",
            "py": "Wǒ mǎi le jǐ gè lí.",
            "vi": "Tôi mua mấy quả lê."
          },
          {
            "zh": "他买梨。",
            "py": "Tā mǎi lí.",
            "vi": "Anh ấy mua lê."
          },
          {
            "zh": "梨很便宜。",
            "py": "Lí hěn piányi.",
            "vi": "Lê rất rẻ."
          },
          {
            "zh": "梨多少钱一斤？",
            "py": "Lí duōshao qián yì jīn?",
            "vi": "Lê bao nhiêu tiền một cân?"
          },
          {
            "zh": "我要两斤梨。",
            "py": "Wǒ yào liǎng jīn lí.",
            "vi": "Tôi muốn hai cân lê."
          },
          {
            "zh": "这个梨很大。",
            "py": "Zhège lí hěn dà.",
            "vi": "Quả lê này rất to."
          },
          {
            "zh": "中国的梨很好吃。",
            "py": "Zhōngguó de lí hěn hǎochī.",
            "vi": "Lê Trung Quốc rất ngon."
          },
          {
            "zh": "你喜欢吃梨还是苹果？",
            "py": "Nǐ xǐhuan chī lí háishì píngguǒ?",
            "vi": "Bạn thích ăn lê hay táo?"
          }
        ]
      },
      {
        "zh": "桃",
        "py": "táo",
        "type": "Danh từ",
        "vi": "đào (quả đào)",
        "ex": [
          {
            "zh": "桃子很甜很香。",
            "py": "Táozi hěn tián hěn xiāng.",
            "vi": "Đào rất ngọt và thơm."
          },
          {
            "zh": "桃子很好吃。",
            "py": "Táozi hěn hǎochī.",
            "vi": "Quả đào rất ngon."
          },
          {
            "zh": "我喜欢吃水蜜桃。",
            "py": "Wǒ xǐhuān chī shuǐmìtáo.",
            "vi": "Tôi thích ăn đào mật."
          },
          {
            "zh": "我喜欢桃。",
            "py": "Wǒ xǐhuan táo.",
            "vi": "Tôi thích đào."
          },
          {
            "zh": "桃很贵。",
            "py": "Táo hěn guì.",
            "vi": "Đào rất đắt."
          },
          {
            "zh": "桃多少钱一斤？",
            "py": "Táo duōshao qián yì jīn?",
            "vi": "Đào bao nhiêu tiền một cân?"
          },
          {
            "zh": "这些桃很大。",
            "py": "Zhèxiē táo hěn dà.",
            "vi": "Những quả đào này rất to."
          },
          {
            "zh": "我要三斤桃。",
            "py": "Wǒ yào sān jīn táo.",
            "vi": "Tôi muốn ba cân đào."
          },
          {
            "zh": "桃很香。",
            "py": "Táo hěn xiāng.",
            "vi": "Đào rất thơm."
          },
          {
            "zh": "奶奶喜欢吃桃。",
            "py": "Nǎinai xǐhuan chī táo.",
            "vi": "Bà nội thích ăn đào."
          }
        ]
      },
      {
        "zh": "草莓",
        "py": "cǎoméi",
        "type": "Danh từ",
        "vi": "dâu tây",
        "ex": [
          {
            "zh": "草莓一斤多少钱？",
            "py": "Cǎoméi yī jīn duōshao qián?",
            "vi": "Một cân dâu tây bao nhiêu tiền?"
          },
          {
            "zh": "草莓又甜又酸。",
            "py": "Cǎoméi yòu tián yòu suān.",
            "vi": "Dâu tây vừa ngọt vừa chua."
          },
          {
            "zh": "我买了一盒草莓。",
            "py": "Wǒ mǎi le yī hé cǎoméi.",
            "vi": "Tôi mua một hộp dâu tây."
          },
          {
            "zh": "她买草莓。",
            "py": "Tā mǎi cǎoméi.",
            "vi": "Cô ấy mua dâu tây."
          },
          {
            "zh": "草莓不便宜。",
            "py": "Cǎoméi bù piányi.",
            "vi": "Dâu tây không rẻ."
          },
          {
            "zh": "这些草莓很红。",
            "py": "Zhèxiē cǎoméi hěn hóng.",
            "vi": "Những quả dâu này rất đỏ."
          },
          {
            "zh": "草莓很贵。",
            "py": "Cǎoméi hěn guì.",
            "vi": "Dâu tây rất đắt."
          },
          {
            "zh": "你喜欢吃草莓吗？",
            "py": "Nǐ xǐhuan chī cǎoméi ma?",
            "vi": "Bạn có thích ăn dâu tây không?"
          },
          {
            "zh": "我要一杯草莓奶茶。",
            "py": "Wǒ yào yì bēi cǎoméi nǎichá.",
            "vi": "Tôi muốn một cốc trà sữa dâu."
          },
          {
            "zh": "这儿的草莓很好吃。",
            "py": "Zhèr de cǎoméi hěn hǎochī.",
            "vi": "Dâu tây ở đây rất ngon."
          }
        ]
      },
      {
        "zh": "喜欢",
        "py": "xǐhuan",
        "type": "Động từ",
        "vi": "thích",
        "ex": [
          {
            "zh": "我喜欢吃香蕉。",
            "py": "Wǒ xǐhuan chī xiāngjiāo.",
            "vi": "Tôi thích ăn chuối."
          },
          {
            "zh": "你喜欢什么运动？",
            "py": "Nǐ xǐhuān shénme yùndòng?",
            "vi": "Bạn thích môn thể thao nào?"
          },
          {
            "zh": "我很喜欢学汉语。",
            "py": "Wǒ hěn xǐhuān xué Hànyǔ.",
            "vi": "Tôi rất thích học tiếng Trung."
          },
          {
            "zh": "她喜欢听音乐。",
            "py": "Tā xǐhuān tīng yīnyuè.",
            "vi": "Cô ấy thích nghe nhạc."
          },
          {
            "zh": "我喜欢吃辣的食物。",
            "py": "Wǒ xǐhuān chī là de shíwù.",
            "vi": "Tôi thích ăn đồ ăn cay."
          },
          {
            "zh": "你喜欢什么颜色？",
            "py": "Nǐ xǐhuan shénme yánsè?",
            "vi": "Bạn thích màu gì?"
          },
          {
            "zh": "我不喜欢下雨。",
            "py": "Wǒ bù xǐhuan xià yǔ.",
            "vi": "Tôi không thích trời mưa."
          },
          {
            "zh": "他喜欢开车去旅游。",
            "py": "Tā xǐhuan kāichē qù lǚyóu.",
            "vi": "Anh ấy thích lái xe đi du lịch."
          },
          {
            "zh": "我妈妈喜欢喝绿茶。",
            "py": "Wǒ māma xǐhuan hē lǜchá.",
            "vi": "Mẹ tôi thích uống trà xanh."
          },
          {
            "zh": "你喜欢你的同屋吗？",
            "py": "Nǐ xǐhuan nǐ de tóngwū ma?",
            "vi": "Bạn có quý bạn cùng phòng không?"
          }
        ]
      },
      {
        "zh": "斤",
        "py": "jīn",
        "type": "Lượng từ",
        "vi": "cân (đơn vị = 0,5 kg)",
        "ex": [
          {
            "zh": "苹果三块钱一斤。",
            "py": "Píngguǒ sān kuài qián yī jīn.",
            "vi": "Táo ba đồng một cân."
          },
          {
            "zh": "我要两斤橘子。",
            "py": "Wǒ yào liǎng jīn júzi.",
            "vi": "Tôi muốn hai cân quýt."
          },
          {
            "zh": "我要买两斤猪肉。",
            "py": "Wǒ yào mǎi liǎng jīn zhūròu.",
            "vi": "Tôi muốn mua một kg thịt lợn."
          },
          {
            "zh": "我买一斤苹果。",
            "py": "Wǒ mǎi yì jīn píngguǒ.",
            "vi": "Tôi mua một cân táo."
          },
          {
            "zh": "两斤香蕉多少钱？",
            "py": "Liǎng jīn xiāngjiāo duōshao qián?",
            "vi": "Hai cân chuối bao nhiêu tiền?"
          },
          {
            "zh": "你要几斤？",
            "py": "Nǐ yào jǐ jīn?",
            "vi": "Bạn muốn mấy cân?"
          },
          {
            "zh": "我买了五斤米。",
            "py": "Wǒ mǎile wǔ jīn mǐ.",
            "vi": "Tôi đã mua năm cân gạo."
          },
          {
            "zh": "这个西瓜八斤。",
            "py": "Zhège xīguā bā jīn.",
            "vi": "Quả dưa hấu này nặng tám cân."
          },
          {
            "zh": "三斤一共多少钱？",
            "py": "Sān jīn yígòng duōshao qián?",
            "vi": "Ba cân tổng cộng bao nhiêu tiền?"
          },
          {
            "zh": "两斤香蕉十块钱。",
            "py": "Liǎng jīn xiāngjiāo shí kuài qián.",
            "vi": "Hai cân chuối mười đồng."
          }
        ]
      },
      {
        "zh": "公斤",
        "py": "gōngjīn",
        "type": "Lượng từ",
        "vi": "ki-lô-gam (kg)",
        "ex": [
          {
            "zh": "我买了两公斤苹果。",
            "py": "Wǒ mǎi le liǎng gōngjīn píngguǒ.",
            "vi": "Tôi đã mua hai ki-lô-gam táo."
          },
          {
            "zh": "我的体重是六十五公斤。",
            "py": "Wǒ de tǐzhòng shì liùshíwǔ gōngjīn.",
            "vi": "Cân nặng của tôi là 65 kg."
          },
          {
            "zh": "一公斤等于两斤。",
            "py": "Yī gōngjīn děngyú liǎng jīn.",
            "vi": "Một kilogram bằng hai cân (jīn)."
          },
          {
            "zh": "我买一公斤橙子。",
            "py": "Wǒ mǎi yì gōngjīn chéngzi.",
            "vi": "Tôi mua một ki-lô-gam cam."
          },
          {
            "zh": "一公斤是两斤。",
            "py": "Yì gōngjīn shì liǎng jīn.",
            "vi": "Một ki-lô-gam bằng hai cân."
          },
          {
            "zh": "这个箱子二十公斤。",
            "py": "Zhège xiāngzi èrshí gōngjīn.",
            "vi": "Cái vali này nặng hai mươi ki-lô."
          },
          {
            "zh": "一公斤苹果多少钱？",
            "py": "Yì gōngjīn píngguǒ duōshao qián?",
            "vi": "Một ki-lô táo bao nhiêu tiền?"
          },
          {
            "zh": "我要三公斤米。",
            "py": "Wǒ yào sān gōngjīn mǐ.",
            "vi": "Tôi muốn ba ki-lô gạo."
          },
          {
            "zh": "你的箱子多少公斤？",
            "py": "Nǐ de xiāngzi duōshao gōngjīn?",
            "vi": "Vali của bạn nặng bao nhiêu ki-lô?"
          },
          {
            "zh": "他买了两公斤葡萄。",
            "py": "Tā mǎile liǎng gōngjīn pútao.",
            "vi": "Anh ấy mua hai ki-lô nho."
          }
        ]
      },
      {
        "zh": "多少",
        "py": "duōshao",
        "type": "Đại từ",
        "vi": "bao nhiêu (số lớn)",
        "ex": [
          {
            "zh": "这个多少钱？",
            "py": "Zhège duōshao qián?",
            "vi": "Cái này bao nhiêu tiền?"
          },
          {
            "zh": "这本书多少钱？",
            "py": "Zhè běn shū duōshao qián?",
            "vi": "Quyển sách này bao nhiêu tiền?"
          },
          {
            "zh": "你有多少中国朋友？",
            "py": "Nǐ yǒu duōshao Zhōngguó péngyou?",
            "vi": "Bạn có bao nhiêu người bạn Trung Quốc?"
          },
          {
            "zh": "多少钱一斤？",
            "py": "Duōshao qián yī jīn?",
            "vi": "Bao nhiêu tiền một cân?"
          },
          {
            "zh": "一斤葡萄多少钱？",
            "py": "Yì jīn pútao duōshao qián?",
            "vi": "Một cân nho bao nhiêu tiền?"
          },
          {
            "zh": "你们公司有多少职员？",
            "py": "Nǐmen gōngsī yǒu duōshao zhíyuán?",
            "vi": "Công ty các bạn có bao nhiêu nhân viên?"
          },
          {
            "zh": "你的房间号码是多少？",
            "py": "Nǐ de fángjiān hàomǎ shì duōshao?",
            "vi": "Số phòng của bạn là bao nhiêu?"
          },
          {
            "zh": "图书馆有多少书？",
            "py": "Túshūguǎn yǒu duōshao shū?",
            "vi": "Thư viện có bao nhiêu sách?"
          },
          {
            "zh": "这辆车多少钱？",
            "py": "Zhè liàng chē duōshao qián?",
            "vi": "Chiếc xe này bao nhiêu tiền?"
          },
          {
            "zh": "你们学校有多少留学生？",
            "py": "Nǐmen xuéxiào yǒu duōshao liúxuéshēng?",
            "vi": "Trường các bạn có bao nhiêu lưu học sinh?"
          }
        ]
      },
      {
        "zh": "多",
        "py": "duō",
        "type": "Tính từ",
        "vi": "nhiều",
        "ex": [
          {
            "zh": "今天来的人很多。",
            "py": "Jīntiān lái de rén hěn duō.",
            "vi": "Hôm nay có rất nhiều người đến."
          },
          {
            "zh": "这里人很多。",
            "py": "Zhèlǐ rén hěn duō.",
            "vi": "Ở đây nhiều người lắm."
          },
          {
            "zh": "我有很多问题。",
            "py": "Wǒ yǒu hěn duō wèntí.",
            "vi": "Tôi có nhiều câu hỏi."
          },
          {
            "zh": "多学多练。",
            "py": "Duō xué duō liàn.",
            "vi": "Học nhiều, luyện nhiều."
          },
          {
            "zh": "你买了多少？",
            "py": "Nǐ mǎi le duōshao?",
            "vi": "Bạn mua bao nhiêu?"
          },
          {
            "zh": "他的书很多。",
            "py": "Tā de shū hěn duō.",
            "vi": "Anh ấy có rất nhiều sách."
          },
          {
            "zh": "我们班的留学生不多。",
            "py": "Wǒmen bān de liúxuéshēng bù duō.",
            "vi": "Lưu học sinh lớp chúng tôi không nhiều."
          },
          {
            "zh": "多喝水对身体好。",
            "py": "Duō hē shuǐ duì shēntǐ hǎo.",
            "vi": "Uống nhiều nước tốt cho sức khỏe."
          },
          {
            "zh": "周末商场的人很多。",
            "py": "Zhōumò shāngchǎng de rén hěn duō.",
            "vi": "Cuối tuần trung tâm thương mại rất đông người."
          },
          {
            "zh": "你买了这么多水果！",
            "py": "Nǐ mǎile zhème duō shuǐguǒ!",
            "vi": "Bạn mua nhiều hoa quả thế!"
          }
        ]
      },
      {
        "zh": "少",
        "py": "shǎo",
        "type": "Tính từ",
        "vi": "ít",
        "ex": [
          {
            "zh": "今天来的人很少。",
            "py": "Jīntiān lái de rén hěn shǎo.",
            "vi": "Hôm nay có rất ít người đến."
          },
          {
            "zh": "这里人很少。",
            "py": "Zhèlǐ rén hěn shǎo.",
            "vi": "Ở đây ít người."
          },
          {
            "zh": "我的钱不多，很少。",
            "py": "Wǒ de qián bù duō, hěn shǎo.",
            "vi": "Tiền của tôi không nhiều, rất ít."
          },
          {
            "zh": "少吃糖对身体好。",
            "py": "Shǎo chī táng duì shēntǐ hǎo.",
            "vi": "Ăn ít đường tốt cho sức khỏe."
          },
          {
            "zh": "水果不少。",
            "py": "Shuǐguǒ bù shǎo.",
            "vi": "Trái cây không ít."
          },
          {
            "zh": "我们班女学生很少。",
            "py": "Wǒmen bān nǚ xuésheng hěn shǎo.",
            "vi": "Lớp chúng tôi rất ít nữ sinh."
          },
          {
            "zh": "他很少喝酒。",
            "py": "Tā hěn shǎo hē jiǔ.",
            "vi": "Anh ấy rất ít uống rượu."
          },
          {
            "zh": "今天食堂的人很少。",
            "py": "Jīntiān shítáng de rén hěn shǎo.",
            "vi": "Hôm nay nhà ăn rất ít người."
          },
          {
            "zh": "多吃水果，少喝可乐。",
            "py": "Duō chī shuǐguǒ, shǎo hē kělè.",
            "vi": "Ăn nhiều hoa quả, uống ít coca."
          },
          {
            "zh": "我的钱太少了。",
            "py": "Wǒ de qián tài shǎo le.",
            "vi": "Tiền của tôi ít quá."
          }
        ]
      },
      {
        "zh": "块/元",
        "py": "kuài/yuán",
        "type": "Lượng từ",
        "vi": "đồng (đơn vị tiền nhân dân tệ)",
        "ex": [
          {
            "zh": "苹果五块钱一斤。",
            "py": "Píngguǒ wǔ kuài qián yī jīn.",
            "vi": "Táo năm đồng một cân."
          },
          {
            "zh": "这个苹果两块钱。",
            "py": "Zhège píngguǒ liǎng kuài qián.",
            "vi": "Quả táo này hai tệ."
          },
          {
            "zh": "一共十五块。",
            "py": "Yīgòng shíwǔ kuài.",
            "vi": "Tổng cộng mười lăm tệ."
          },
          {
            "zh": "你找我五块钱。",
            "py": "Nǐ zhǎo wǒ wǔ kuài qián.",
            "vi": "Bạn thối lại cho tôi năm tệ."
          },
          {
            "zh": "苹果三块一斤。",
            "py": "Píngguǒ sān kuài yì jīn.",
            "vi": "Táo ba tệ một cân."
          },
          {
            "zh": "一杯奶茶十五块。",
            "py": "Yì bēi nǎichá shíwǔ kuài.",
            "vi": "Một cốc trà sữa mười lăm đồng."
          },
          {
            "zh": "这本词典五十元。",
            "py": "Zhè běn cídiǎn wǔshí yuán.",
            "vi": "Quyển từ điển này năm mươi tệ."
          },
          {
            "zh": "包子两块一个。",
            "py": "Bāozi liǎng kuài yí ge.",
            "vi": "Bánh bao hai đồng một cái."
          },
          {
            "zh": "坐地铁要几块钱？",
            "py": "Zuò dìtiě yào jǐ kuài qián?",
            "vi": "Đi tàu điện ngầm mất mấy đồng?"
          },
          {
            "zh": "这件衬衣一百二十元。",
            "py": "Zhè jiàn chènyī yìbǎi èrshí yuán.",
            "vi": "Chiếc áo sơ mi này một trăm hai mươi tệ."
          }
        ]
      },
      {
        "zh": "角/毛",
        "py": "jiǎo/máo",
        "type": "Lượng từ",
        "vi": "hào (1/10 đồng)",
        "ex": [
          {
            "zh": "找你五角。",
            "py": "Zhǎo nǐ wǔ jiǎo.",
            "vi": "Trả lại cho bạn năm hào."
          },
          {
            "zh": "五毛钱一个糖。",
            "py": "Wǔ máo qián yī gè táng.",
            "vi": "Năm hào một cái kẹo."
          },
          {
            "zh": "找你两毛钱。",
            "py": "Zhǎo nǐ liǎng máo qián.",
            "vi": "Thối lại bạn hai hào."
          },
          {
            "zh": "五毛钱。",
            "py": "Wǔ máo qián.",
            "vi": "Năm hào tiền."
          },
          {
            "zh": "这是两角。",
            "py": "Zhè shì liǎng jiǎo.",
            "vi": "Đây là hai hào."
          },
          {
            "zh": "一块五毛钱。",
            "py": "Yí kuài wǔ máo qián.",
            "vi": "Một đồng năm hào."
          },
          {
            "zh": "一个梨八毛钱。",
            "py": "Yí ge lí bā máo qián.",
            "vi": "Một quả lê tám hào."
          },
          {
            "zh": "三块两毛。",
            "py": "Sān kuài liǎng máo.",
            "vi": "Ba đồng hai hào."
          },
          {
            "zh": "一角是十分。",
            "py": "Yì jiǎo shì shí fēn.",
            "vi": "Một hào là mười xu."
          },
          {
            "zh": "找您六毛。",
            "py": "Zhǎo nín liù máo.",
            "vi": "Trả lại ông sáu hào."
          }
        ]
      },
      {
        "zh": "分",
        "py": "fēn",
        "type": "Lượng từ",
        "vi": "xu (1/100 đồng)",
        "ex": [
          {
            "zh": "一块钱等于十角，一角等于十分。",
            "py": "Yī kuài qián děngyú shí jiǎo, yī jiǎo děngyú shí fēn.",
            "vi": "Một đồng bằng mười hào, một hào bằng mười xu."
          },
          {
            "zh": "一块钱等于一百分。",
            "py": "Yī kuài qián děngyú yībǎi fēn.",
            "vi": "Một tệ bằng một trăm xu."
          },
          {
            "zh": "他考了满分。",
            "py": "Tā kǎo le mǎnfēn.",
            "vi": "Anh ấy thi được điểm tuyệt đối."
          },
          {
            "zh": "一分钱。",
            "py": "Yì fēn qián.",
            "vi": "Một xu tiền."
          },
          {
            "zh": "这是五分。",
            "py": "Zhè shì wǔ fēn.",
            "vi": "Đây là năm xu."
          },
          {
            "zh": "三块二毛五分。",
            "py": "Sān kuài èr máo wǔ fēn.",
            "vi": "Ba đồng hai hào năm xu."
          },
          {
            "zh": "现在人们很少用分。",
            "py": "Xiànzài rénmen hěn shǎo yòng fēn.",
            "vi": "Bây giờ mọi người rất ít dùng xu."
          },
          {
            "zh": "一毛是十分。",
            "py": "Yì máo shì shí fēn.",
            "vi": "Một hào là mười xu."
          },
          {
            "zh": "我八点十分上班。",
            "py": "Wǒ bā diǎn shí fēn shàngbān.",
            "vi": "Tôi đi làm lúc tám giờ mười phút."
          },
          {
            "zh": "现在是三点二十分。",
            "py": "Xiànzài shì sān diǎn èrshí fēn.",
            "vi": "Bây giờ là ba giờ hai mươi phút."
          }
        ]
      },
      {
        "zh": "百",
        "py": "bǎi",
        "type": "Số đếm",
        "vi": "trăm (100)",
        "ex": [
          {
            "zh": "一百块钱。",
            "py": "Yī bǎi kuài qián.",
            "vi": "Một trăm đồng."
          },
          {
            "zh": "这个西瓜一百块。",
            "py": "Zhège xīguā yìbǎi kuài.",
            "vi": "Quả dưa hấu này một trăm đồng."
          },
          {
            "zh": "他跑了一百米。",
            "py": "Tā pǎo le yībǎi mǐ.",
            "vi": "Anh ấy chạy một trăm mét."
          },
          {
            "zh": "这里有几百个汉字。",
            "py": "Zhèlǐ yǒu jǐ bǎi gè Hànzì.",
            "vi": "Ở đây có mấy trăm chữ Hán."
          },
          {
            "zh": "我有两百块钱。",
            "py": "Wǒ yǒu liǎngbǎi kuài qián.",
            "vi": "Tôi có hai trăm đồng."
          },
          {
            "zh": "这件毛衣三百块。",
            "py": "Zhè jiàn máoyī sānbǎi kuài.",
            "vi": "Chiếc áo len này ba trăm đồng."
          },
          {
            "zh": "我们学校有五百个留学生。",
            "py": "Wǒmen xuéxiào yǒu wǔbǎi ge liúxuéshēng.",
            "vi": "Trường chúng tôi có năm trăm lưu học sinh."
          },
          {
            "zh": "一百公斤太重了。",
            "py": "Yìbǎi gōngjīn tài zhòng le.",
            "vi": "Một trăm ki-lô nặng quá."
          },
          {
            "zh": "我想换八百块人民币。",
            "py": "Wǒ xiǎng huàn bābǎi kuài rénmínbì.",
            "vi": "Tôi muốn đổi tám trăm tệ."
          },
          {
            "zh": "这本书一百多块。",
            "py": "Zhè běn shū yìbǎi duō kuài.",
            "vi": "Quyển sách này hơn một trăm đồng."
          }
        ]
      },
      {
        "zh": "贵",
        "py": "guì",
        "type": "Tính từ",
        "vi": "đắt",
        "ex": [
          {
            "zh": "这里的水果太贵了。",
            "py": "Zhèlǐ de shuǐguǒ tài guì le.",
            "vi": "Hoa quả ở đây đắt quá rồi."
          },
          {
            "zh": "这个照相机太贵了！",
            "py": "Zhège zhàoxiàngjī tài guì le!",
            "vi": "Cái máy ảnh này đắt quá!"
          },
          {
            "zh": "北京的房子很贵。",
            "py": "Běijīng de fángzi hěn guì.",
            "vi": "Nhà ở Bắc Kinh rất đắt."
          },
          {
            "zh": "这家餐厅贵不贵？",
            "py": "Zhè jiā cāntīng guì bu guì?",
            "vi": "Nhà hàng này có đắt không?"
          },
          {
            "zh": "苹果太贵了。",
            "py": "Píngguǒ tài guì le.",
            "vi": "Táo đắt quá."
          },
          {
            "zh": "这辆车太贵了，我不买。",
            "py": "Zhè liàng chē tài guì le, wǒ bù mǎi.",
            "vi": "Chiếc xe này đắt quá, tôi không mua."
          },
          {
            "zh": "日本的水果很贵。",
            "py": "Rìběn de shuǐguǒ hěn guì.",
            "vi": "Hoa quả Nhật rất đắt."
          },
          {
            "zh": "这家酒店贵不贵？",
            "py": "Zhè jiā jiǔdiàn guì bu guì?",
            "vi": "Khách sạn này có đắt không?"
          },
          {
            "zh": "草莓比苹果贵。",
            "py": "Cǎoméi bǐ píngguǒ guì.",
            "vi": "Dâu tây đắt hơn táo."
          },
          {
            "zh": "不贵，三十块。",
            "py": "Bú guì, sānshí kuài.",
            "vi": "Không đắt, ba mươi đồng."
          }
        ]
      },
      {
        "zh": "便宜",
        "py": "piányi",
        "type": "Tính từ",
        "vi": "rẻ",
        "ex": [
          {
            "zh": "这里的苹果很便宜。",
            "py": "Zhèlǐ de píngguǒ hěn piányi.",
            "vi": "Táo ở đây rất rẻ."
          },
          {
            "zh": "这件衣服很便宜。",
            "py": "Zhè jiàn yīfu hěn piányí.",
            "vi": "Bộ quần áo này rất rẻ."
          },
          {
            "zh": "有没有便宜一点的？",
            "py": "Yǒu méiyǒu piányí yīdiǎn de?",
            "vi": "Có cái nào rẻ hơn không?"
          },
          {
            "zh": "越南的水果很便宜。",
            "py": "Yuènán de shuǐguǒ hěn piányí.",
            "vi": "Trái cây Việt Nam rất rẻ."
          },
          {
            "zh": "这些橘子很便宜。",
            "py": "Zhèxiē júzi hěn piányi.",
            "vi": "Những quả quýt này rất rẻ."
          },
          {
            "zh": "便宜一点儿吧。",
            "py": "Piányi yìdiǎnr ba.",
            "vi": "Rẻ hơn một chút đi."
          },
          {
            "zh": "地铁比出租车便宜。",
            "py": "Dìtiě bǐ chūzūchē piányi.",
            "vi": "Tàu điện ngầm rẻ hơn taxi."
          },
          {
            "zh": "这儿的包子又好吃又便宜。",
            "py": "Zhèr de bāozi yòu hǎochī yòu piányi.",
            "vi": "Bánh bao ở đây vừa ngon vừa rẻ."
          },
          {
            "zh": "有便宜的吗？",
            "py": "Yǒu piányi de ma?",
            "vi": "Có cái nào rẻ không?"
          },
          {
            "zh": "这本词典很便宜。",
            "py": "Zhè běn cídiǎn hěn piányi.",
            "vi": "Quyển từ điển này rất rẻ."
          }
        ]
      },
      {
        "zh": "吧",
        "py": "ba",
        "type": "Trợ từ",
        "vi": "đi, nhé, thôi (đề nghị, gợi ý)",
        "ex": [
          {
            "zh": "我们走吧！",
            "py": "Wǒmen zǒu ba!",
            "vi": "Chúng ta đi thôi!"
          },
          {
            "zh": "你是学生吧？",
            "py": "Nǐ shì xuéshēng ba?",
            "vi": "Bạn là học sinh đúng không?"
          },
          {
            "zh": "我们买西瓜吧。",
            "py": "Wǒmen mǎi xīguā ba.",
            "vi": "Chúng ta mua dưa hấu đi."
          },
          {
            "zh": "一起去吃饭吧！",
            "py": "Yīqǐ qù chīfàn ba!",
            "vi": "Cùng đi ăn cơm đi!"
          },
          {
            "zh": "我们买香蕉吧。",
            "py": "Wǒmen mǎi xiāngjiāo ba.",
            "vi": "Chúng ta mua chuối đi."
          },
          {
            "zh": "我们坐地铁吧。",
            "py": "Wǒmen zuò dìtiě ba.",
            "vi": "Chúng ta đi tàu điện ngầm đi."
          },
          {
            "zh": "你是越南人吧？",
            "py": "Nǐ shì Yuènán rén ba?",
            "vi": "Bạn là người Việt Nam phải không?"
          },
          {
            "zh": "你先回家吧。",
            "py": "Nǐ xiān huíjiā ba.",
            "vi": "Bạn về nhà trước đi."
          },
          {
            "zh": "我们喝茶吧。",
            "py": "Wǒmen hē chá ba.",
            "vi": "Chúng ta uống trà đi."
          },
          {
            "zh": "他是你哥哥吧？",
            "py": "Tā shì nǐ gēge ba?",
            "vi": "Anh ấy là anh trai bạn phải không?"
          }
        ]
      },
      {
        "zh": "还",
        "py": "hái",
        "type": "Phó từ",
        "vi": "còn, vẫn còn",
        "ex": [
          {
            "zh": "你还要什么？",
            "py": "Nǐ hái yào shénme?",
            "vi": "Bạn còn muốn gì nữa không?"
          },
          {
            "zh": "你还买别的吗？",
            "py": "Nǐ hái mǎi biéde ma?",
            "vi": "Bạn còn mua thứ khác không?"
          },
          {
            "zh": "我还有问题。",
            "py": "Wǒ hái yǒu wèntí.",
            "vi": "Tôi còn có câu hỏi."
          },
          {
            "zh": "他还没来。",
            "py": "Tā hái méi lái.",
            "vi": "Anh ấy vẫn chưa đến."
          },
          {
            "zh": "还有别的吗？",
            "py": "Hái yǒu bié de ma?",
            "vi": "Còn gì khác nữa không?"
          },
          {
            "zh": "你还要喝咖啡吗？",
            "py": "Nǐ hái yào hē kāfēi ma?",
            "vi": "Bạn còn muốn uống cà phê nữa không?"
          },
          {
            "zh": "我还有一个妹妹。",
            "py": "Wǒ hái yǒu yí ge mèimei.",
            "vi": "Tôi còn có một em gái."
          },
          {
            "zh": "他还在办公室。",
            "py": "Tā hái zài bàngōngshì.",
            "vi": "Anh ấy vẫn còn ở văn phòng."
          },
          {
            "zh": "我还想买一斤香蕉。",
            "py": "Wǒ hái xiǎng mǎi yì jīn xiāngjiāo.",
            "vi": "Tôi còn muốn mua một cân chuối nữa."
          },
          {
            "zh": "十点了，他还没回家。",
            "py": "Shí diǎn le, tā hái méi huíjiā.",
            "vi": "Mười giờ rồi, anh ấy vẫn chưa về nhà."
          }
        ]
      },
      {
        "zh": "别的",
        "py": "biéde",
        "type": "Đại từ",
        "vi": "(cái) khác",
        "ex": [
          {
            "zh": "你还要别的吗？",
            "py": "Nǐ hái yào biéde ma?",
            "vi": "Bạn còn muốn gì khác không?"
          },
          {
            "zh": "还要别的吗？",
            "py": "Hái yào bié de ma?",
            "vi": "Còn muốn gì khác không?"
          },
          {
            "zh": "没有别的了。",
            "py": "Méiyǒu bié de le.",
            "vi": "Không còn gì khác nữa."
          },
          {
            "zh": "我不想要别的。",
            "py": "Wǒ bù xiǎng yào bié de.",
            "vi": "Tôi không muốn gì khác."
          },
          {
            "zh": "我不要别的水果。",
            "py": "Wǒ bú yào biéde shuǐguǒ.",
            "vi": "Tôi không muốn loại hoa quả khác."
          },
          {
            "zh": "你还想买别的东西吗？",
            "py": "Nǐ hái xiǎng mǎi biéde dōngxi ma?",
            "vi": "Bạn còn muốn mua đồ gì khác không?"
          },
          {
            "zh": "我们去别的商店看看吧。",
            "py": "Wǒmen qù biéde shāngdiàn kànkan ba.",
            "vi": "Chúng ta đi cửa hàng khác xem đi."
          },
          {
            "zh": "有没有别的颜色？",
            "py": "Yǒu méiyǒu biéde yánsè?",
            "vi": "Có màu khác không?"
          },
          {
            "zh": "别的同学都回家了。",
            "py": "Biéde tóngxué dōu huíjiā le.",
            "vi": "Các bạn học khác đều về nhà rồi."
          },
          {
            "zh": "我不喝咖啡，喝别的吧。",
            "py": "Wǒ bù hē kāfēi, hē biéde ba.",
            "vi": "Tôi không uống cà phê, uống thứ khác đi."
          }
        ]
      },
      {
        "zh": "怎么",
        "py": "zěnme",
        "type": "Đại từ",
        "vi": "thế nào, sao, như thế nào",
        "ex": [
          {
            "zh": "这些桃怎么卖？",
            "py": "Zhèxiē táo zěnme mài?",
            "vi": "Những quả đào này bán thế nào?"
          },
          {
            "zh": "这个汉字怎么写？",
            "py": "Zhège Hànzì zěnme xiě?",
            "vi": "Chữ Hán này viết như thế nào?"
          },
          {
            "zh": "怎么去银行？",
            "py": "Zěnme qù yínháng?",
            "vi": "Đi ngân hàng như thế nào?"
          },
          {
            "zh": "这道题怎么做？",
            "py": "Zhè dào tí zěnme zuò?",
            "vi": "Bài tập này làm như thế nào?"
          },
          {
            "zh": "你怎么了？",
            "py": "Nǐ zěnme le?",
            "vi": "Bạn làm sao vậy?"
          },
          {
            "zh": "这个用中文怎么说？",
            "py": "Zhège yòng Zhōngwén zěnme shuō?",
            "vi": "Cái này tiếng Trung nói thế nào?"
          },
          {
            "zh": "你怎么不吃饭？",
            "py": "Nǐ zěnme bù chīfàn?",
            "vi": "Sao bạn không ăn cơm?"
          },
          {
            "zh": "我们怎么去天安门？",
            "py": "Wǒmen zěnme qù Tiān'ānmén?",
            "vi": "Chúng ta đi Thiên An Môn bằng cách nào?"
          },
          {
            "zh": "苹果怎么卖？",
            "py": "Píngguǒ zěnme mài?",
            "vi": "Táo bán thế nào?"
          },
          {
            "zh": "你怎么知道我的名字？",
            "py": "Nǐ zěnme zhīdào wǒ de míngzi?",
            "vi": "Sao bạn biết tên tôi?"
          }
        ]
      },
      {
        "zh": "两",
        "py": "liǎng",
        "type": "Số đếm",
        "vi": "hai (dùng trước lượng từ)",
        "ex": [
          {
            "zh": "我要两斤苹果。",
            "py": "Wǒ yào liǎng jīn píngguǒ.",
            "vi": "Tôi muốn hai cân táo."
          },
          {
            "zh": "我有两个姐姐。",
            "py": "Wǒ yǒu liǎng gè jiějie.",
            "vi": "Tôi có hai chị gái."
          },
          {
            "zh": "两个人吃够了。",
            "py": "Liǎng gè rén chī gòu le.",
            "vi": "Hai người ăn đủ rồi."
          },
          {
            "zh": "买两斤苹果。",
            "py": "Mǎi liǎng jīn píngguǒ.",
            "vi": "Mua hai cân táo."
          },
          {
            "zh": "我买两个西瓜。",
            "py": "Wǒ mǎi liǎng gè xīguā.",
            "vi": "Tôi mua hai quả dưa hấu."
          },
          {
            "zh": "我们家有两辆自行车。",
            "py": "Wǒmen jiā yǒu liǎng liàng zìxíngchē.",
            "vi": "Nhà chúng tôi có hai chiếc xe đạp."
          },
          {
            "zh": "两杯咖啡多少钱？",
            "py": "Liǎng bēi kāfēi duōshao qián?",
            "vi": "Hai cốc cà phê bao nhiêu tiền?"
          },
          {
            "zh": "我们班有两个老师。",
            "py": "Wǒmen bān yǒu liǎng ge lǎoshī.",
            "vi": "Lớp chúng tôi có hai giáo viên."
          },
          {
            "zh": "他喝了两瓶水。",
            "py": "Tā hēle liǎng píng shuǐ.",
            "vi": "Anh ấy uống hai chai nước."
          },
          {
            "zh": "我等了两个星期。",
            "py": "Wǒ děngle liǎng ge xīngqī.",
            "vi": "Tôi đã đợi hai tuần."
          }
        ]
      },
      {
        "zh": "一共",
        "py": "yígòng",
        "type": "Phó từ",
        "vi": "tổng cộng",
        "ex": [
          {
            "zh": "一共多少钱？",
            "py": "Yígòng duōshao qián?",
            "vi": "Tổng cộng bao nhiêu tiền?"
          },
          {
            "zh": "一共两百块。",
            "py": "Yígòng liǎngbǎi kuài.",
            "vi": "Tổng cộng hai trăm đồng."
          },
          {
            "zh": "我们一共有五个人。",
            "py": "Wǒmen yīgòng yǒu wǔ gè rén.",
            "vi": "Chúng tôi tổng cộng có năm người."
          },
          {
            "zh": "一共二十块钱。",
            "py": "Yīgòng èrshí kuài qián.",
            "vi": "Tất cả hai mươi tệ."
          },
          {
            "zh": "这些水果一共多少钱？",
            "py": "Zhèxiē shuǐguǒ yígòng duōshao qián?",
            "vi": "Những hoa quả này tổng cộng bao nhiêu tiền?"
          },
          {
            "zh": "两斤苹果一斤香蕉，一共多少钱？",
            "py": "Liǎng jīn píngguǒ yì jīn xiāngjiāo, yígòng duōshao qián?",
            "vi": "Hai cân táo một cân chuối, tổng cộng bao nhiêu tiền?"
          },
          {
            "zh": "一共三十八块。",
            "py": "Yígòng sānshíbā kuài.",
            "vi": "Tổng cộng ba mươi tám đồng."
          },
          {
            "zh": "我们班一共有二十个学生。",
            "py": "Wǒmen bān yígòng yǒu èrshí ge xuésheng.",
            "vi": "Lớp chúng tôi tổng cộng có hai mươi học sinh."
          },
          {
            "zh": "他一共买了五本书。",
            "py": "Tā yígòng mǎile wǔ běn shū.",
            "vi": "Anh ấy mua tổng cộng năm quyển sách."
          },
          {
            "zh": "你们一共几个人？",
            "py": "Nǐmen yígòng jǐ ge rén?",
            "vi": "Các bạn tổng cộng mấy người?"
          }
        ]
      },
      {
        "zh": "给",
        "py": "gěi",
        "type": "Động từ",
        "vi": "đưa, cho",
        "ex": [
          {
            "zh": "给你钱，请收好。",
            "py": "Gěi nǐ qián, qǐng shōu hǎo.",
            "vi": "Đưa tiền cho bạn, hãy cầm lấy."
          },
          {
            "zh": "请给我两个苹果。",
            "py": "Qǐng gěi wǒ liǎng gè píngguǒ.",
            "vi": "Cho tôi hai quả táo."
          },
          {
            "zh": "我给你一本书。",
            "py": "Wǒ gěi nǐ yì běn shū.",
            "vi": "Tôi đưa cho bạn một quyển sách."
          },
          {
            "zh": "他给我寄了一封信。",
            "py": "Tā gěi wǒ jì le yī fēng xìn.",
            "vi": "Anh ấy gửi cho tôi một bức thư."
          },
          {
            "zh": "我给你钱。",
            "py": "Wǒ gěi nǐ qián.",
            "vi": "Tôi đưa tiền cho bạn."
          },
          {
            "zh": "请给我一双筷子。",
            "py": "Qǐng gěi wǒ yì shuāng kuàizi.",
            "vi": "Làm ơn cho tôi một đôi đũa."
          },
          {
            "zh": "给你，这是你的雨伞。",
            "py": "Gěi nǐ, zhè shì nǐ de yǔsǎn.",
            "vi": "Gửi bạn, đây là ô của bạn."
          },
          {
            "zh": "姐姐给我买了一个手机。",
            "py": "Jiějie gěi wǒ mǎile yí ge shǒujī.",
            "vi": "Chị gái mua cho tôi một chiếc điện thoại."
          },
          {
            "zh": "你给他多少钱？",
            "py": "Nǐ gěi tā duōshao qián?",
            "vi": "Bạn đưa anh ấy bao nhiêu tiền?"
          },
          {
            "zh": "我给同学介绍一下儿。",
            "py": "Wǒ gěi tóngxué jièshào yíxiàr.",
            "vi": "Tôi giới thiệu với các bạn một chút."
          }
        ]
      },
      {
        "zh": "找",
        "py": "zhǎo",
        "type": "Động từ",
        "vi": "tìm; trả lại (tiền thừa)",
        "ex": [
          {
            "zh": "找你三块钱。",
            "py": "Zhǎo nǐ sān kuài qián.",
            "vi": "Trả lại cho bạn ba đồng tiền thừa."
          },
          {
            "zh": "找你十块钱。",
            "py": "Zhǎo nǐ shí kuài qián.",
            "vi": "Trả lại bạn mười đồng."
          },
          {
            "zh": "找不到了。",
            "py": "Zhǎo bù dào le.",
            "vi": "Tìm không thấy rồi."
          },
          {
            "zh": "找我五块钱。",
            "py": "Zhǎo wǒ wǔ kuài qián.",
            "vi": "Thối lại cho tôi năm tệ."
          },
          {
            "zh": "找您五块。",
            "py": "Zhǎo nín wǔ kuài.",
            "vi": "Trả lại ngài năm tệ."
          },
          {
            "zh": "找你两块。",
            "py": "Zhǎo nǐ liǎng kuài.",
            "vi": "Trả lại bạn hai đồng."
          },
          {
            "zh": "找您八十块。",
            "py": "Zhǎo nín bāshí kuài.",
            "vi": "Trả lại ông tám mươi đồng."
          },
          {
            "zh": "你找什么？",
            "py": "Nǐ zhǎo shénme?",
            "vi": "Bạn tìm gì thế?"
          },
          {
            "zh": "我在找我的手机。",
            "py": "Wǒ zài zhǎo wǒ de shǒujī.",
            "vi": "Tôi đang tìm điện thoại của tôi."
          },
          {
            "zh": "他去公司找经理。",
            "py": "Tā qù gōngsī zhǎo jīnglǐ.",
            "vi": "Anh ấy đến công ty tìm giám đốc."
          }
        ]
      },
      {
        "zh": "旅游",
        "py": "lǚyóu",
        "type": "Động từ",
        "vi": "du lịch",
        "ex": [
          {
            "zh": "我们去北京旅游吧！",
            "py": "Wǒmen qù Běijīng lǚyóu ba!",
            "vi": "Chúng ta đi du lịch Bắc Kinh nhé!"
          },
          {
            "zh": "我喜欢旅游。",
            "py": "Wǒ xǐhuān lǚyóu.",
            "vi": "Tôi thích du lịch."
          },
          {
            "zh": "周末我们去旅游吧。",
            "py": "Zhōumò wǒmen qù lǚyóu ba.",
            "vi": "Cuối tuần chúng ta đi du lịch nhé."
          },
          {
            "zh": "旅游可以学到很多东西。",
            "py": "Lǚyóu kěyǐ xuédào hěn duō dōngxi.",
            "vi": "Du lịch có thể học được nhiều thứ."
          },
          {
            "zh": "我们去泰国旅游。",
            "py": "Wǒmen qù Tàiguó lǚyóu.",
            "vi": "Chúng tôi đi Thái Lan du lịch."
          },
          {
            "zh": "你喜欢去哪儿旅游？",
            "py": "Nǐ xǐhuan qù nǎr lǚyóu?",
            "vi": "Bạn thích đi du lịch ở đâu?"
          },
          {
            "zh": "我们坐高铁去旅游。",
            "py": "Wǒmen zuò gāotiě qù lǚyóu.",
            "vi": "Chúng tôi đi du lịch bằng tàu cao tốc."
          },
          {
            "zh": "他跟家人去旅游了。",
            "py": "Tā gēn jiārén qù lǚyóu le.",
            "vi": "Anh ấy đi du lịch với gia đình."
          },
          {
            "zh": "旅游很有意思。",
            "py": "Lǚyóu hěn yǒu yìsi.",
            "vi": "Du lịch rất thú vị."
          },
          {
            "zh": "下个月我去中国旅游。",
            "py": "Xià ge yuè wǒ qù Zhōngguó lǚyóu.",
            "vi": "Tháng sau tôi đi du lịch Trung Quốc."
          }
        ]
      },
      {
        "zh": "跟",
        "py": "gēn",
        "type": "Giới từ",
        "vi": "cùng với, theo",
        "ex": [
          {
            "zh": "你为什么不跟我们去旅游？",
            "py": "Nǐ wèishénme bù gēn wǒmen qù lǚyóu?",
            "vi": "Tại sao bạn không đi du lịch cùng chúng tôi?"
          },
          {
            "zh": "我跟朋友一起去。",
            "py": "Wǒ gēn péngyou yīqǐ qù.",
            "vi": "Tôi đi cùng bạn bè."
          },
          {
            "zh": "你跟我学汉语吧。",
            "py": "Nǐ gēn wǒ xué Hànyǔ ba.",
            "vi": "Bạn học tiếng Trung với tôi nhé."
          },
          {
            "zh": "她跟我是同班同学。",
            "py": "Tā gēn wǒ shì tóngbān tóngxué.",
            "vi": "Cô ấy và tôi là bạn cùng lớp."
          },
          {
            "zh": "我跟他去买水果。",
            "py": "Wǒ gēn tā qù mǎi shuǐguǒ.",
            "vi": "Tôi cùng anh ấy đi mua trái cây."
          },
          {
            "zh": "我跟妈妈去商场。",
            "py": "Wǒ gēn māma qù shāngchǎng.",
            "vi": "Tôi đi trung tâm thương mại với mẹ."
          },
          {
            "zh": "你跟谁学汉语？",
            "py": "Nǐ gēn shéi xué Hànyǔ?",
            "vi": "Bạn học tiếng Trung với ai?"
          },
          {
            "zh": "他跟我是同学。",
            "py": "Tā gēn wǒ shì tóngxué.",
            "vi": "Anh ấy và tôi là bạn học."
          },
          {
            "zh": "请跟我读。",
            "py": "Qǐng gēn wǒ dú.",
            "vi": "Hãy đọc theo tôi."
          },
          {
            "zh": "我想跟你说一下儿。",
            "py": "Wǒ xiǎng gēn nǐ shuō yíxiàr.",
            "vi": "Tôi muốn nói với bạn một chút."
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 11 (b12): 我换人民币 – Tôi đổi tiền",
    "words": [
      {
        "zh": "图书馆",
        "py": "túshūguǎn",
        "type": "Danh từ",
        "vi": "thư viện",
        "ex": [
          {
            "zh": "我今天下午去图书馆看书。",
            "py": "Wǒ jīntiān xiàwǔ qù túshūguǎn kàn shū.",
            "vi": "Chiều nay tôi đến thư viện đọc sách."
          },
          {
            "zh": "我每天去图书馆学习。",
            "py": "Wǒ měitiān qù túshūguǎn xuéxí.",
            "vi": "Mỗi ngày tôi đến thư viện học bài."
          },
          {
            "zh": "图书馆几点关门？",
            "py": "Túshūguǎn jǐ diǎn guānmén?",
            "vi": "Thư viện mấy giờ đóng cửa?"
          },
          {
            "zh": "图书馆里不能说话。",
            "py": "Túshūguǎn lǐ bù néng shuōhuà.",
            "vi": "Trong thư viện không được nói chuyện."
          },
          {
            "zh": "我在图书馆学习。",
            "py": "Wǒ zài túshūguǎn xuéxí.",
            "vi": "Tôi học ở thư viện."
          },
          {
            "zh": "图书馆在学校里。",
            "py": "Túshūguǎn zài xuéxiào lǐ.",
            "vi": "Thư viện ở trong trường."
          },
          {
            "zh": "图书馆的书很多。",
            "py": "Túshūguǎn de shū hěn duō.",
            "vi": "Thư viện có rất nhiều sách."
          },
          {
            "zh": "我们在图书馆门口见吧。",
            "py": "Wǒmen zài túshūguǎn ménkǒu jiàn ba.",
            "vi": "Chúng ta gặp nhau ở cổng thư viện nhé."
          },
          {
            "zh": "他经常去图书馆看杂志。",
            "py": "Tā jīngcháng qù túshūguǎn kàn zázhì.",
            "vi": "Anh ấy thường đến thư viện đọc tạp chí."
          },
          {
            "zh": "图书馆里人很少。",
            "py": "Túshūguǎn lǐ rén hěn shǎo.",
            "vi": "Trong thư viện rất ít người."
          }
        ]
      },
      {
        "zh": "换",
        "py": "huàn",
        "type": "Động từ",
        "vi": "đổi, thay đổi",
        "ex": [
          {
            "zh": "我要换人民币。",
            "py": "Wǒ yào huàn rénmínbì.",
            "vi": "Tôi muốn đổi nhân dân tệ."
          },
          {
            "zh": "我想换人民币。",
            "py": "Wǒ xiǎng huàn rénmínbì.",
            "vi": "Tôi muốn đổi nhân dân tệ."
          },
          {
            "zh": "换一件别的衣服吧。",
            "py": "Huàn yī jiàn bié de yīfu ba.",
            "vi": "Đổi một bộ quần áo khác đi."
          },
          {
            "zh": "在哪里换外币？",
            "py": "Zài nǎlǐ huàn wàibì?",
            "vi": "Đổi ngoại tệ ở đâu?"
          },
          {
            "zh": "我要换一千人民币。",
            "py": "Wǒ yào huàn yì qiān rénmínbì.",
            "vi": "Tôi muốn đổi một nghìn nhân dân tệ."
          },
          {
            "zh": "我想换一件衣服。",
            "py": "Wǒ xiǎng huàn yí jiàn yīfu.",
            "vi": "Tôi muốn đổi một bộ quần áo."
          },
          {
            "zh": "你想换多少美元？",
            "py": "Nǐ xiǎng huàn duōshao měiyuán?",
            "vi": "Bạn muốn đổi bao nhiêu đô la Mỹ?"
          },
          {
            "zh": "这个手机太旧了，我想换一个。",
            "py": "Zhège shǒujī tài jiù le, wǒ xiǎng huàn yí ge.",
            "vi": "Điện thoại này cũ quá, tôi muốn đổi cái khác."
          },
          {
            "zh": "他换了一个新工作。",
            "py": "Tā huànle yí ge xīn gōngzuò.",
            "vi": "Anh ấy đã đổi sang một công việc mới."
          },
          {
            "zh": "我们换一个房间吧。",
            "py": "Wǒmen huàn yí ge fángjiān ba.",
            "vi": "Chúng ta đổi phòng khác đi."
          }
        ]
      },
      {
        "zh": "小姐",
        "py": "xiǎojie",
        "type": "Danh từ",
        "vi": "cô, tiểu thư (xưng hô nữ)",
        "ex": [
          {
            "zh": "小姐，我换钱。",
            "py": "Xiǎojie, wǒ huàn qián.",
            "vi": "Cô ơi, tôi muốn đổi tiền."
          },
          {
            "zh": "小姐，请问怎么换钱？",
            "py": "Xiǎojie, qǐngwèn zěnme huàn qián?",
            "vi": "Cô ơi, xin hỏi đổi tiền như thế nào?"
          },
          {
            "zh": "那位小姐是谁？",
            "py": "Nà wèi xiǎojie shì shuí?",
            "vi": "Cô gái đó là ai?"
          },
          {
            "zh": "小姐，您要什么？",
            "py": "Xiǎojie, nín yào shénme?",
            "vi": "Cô ơi, cô cần gì ạ?"
          },
          {
            "zh": "那个小姐是我朋友。",
            "py": "Nàge xiǎojie shì wǒ péngyou.",
            "vi": "Cô kia là bạn tôi."
          },
          {
            "zh": "小姐，请给我一杯咖啡。",
            "py": "Xiǎojie, qǐng gěi wǒ yì bēi kāfēi.",
            "vi": "Cô ơi, cho tôi một cốc cà phê."
          },
          {
            "zh": "那位小姐是秘书。",
            "py": "Nà wèi xiǎojie shì mìshū.",
            "vi": "Cô kia là thư ký."
          },
          {
            "zh": "吴小姐，您好！",
            "py": "Wú xiǎojie, nín hǎo!",
            "vi": "Chào cô Ngô!"
          },
          {
            "zh": "小姐，这件衣服多少钱？",
            "py": "Xiǎojie, zhè jiàn yīfu duōshao qián?",
            "vi": "Cô ơi, bộ quần áo này bao nhiêu tiền?"
          },
          {
            "zh": "小姐，我要寄这个箱子。",
            "py": "Xiǎojie, wǒ yào jì zhège xiāngzi.",
            "vi": "Cô ơi, tôi muốn gửi cái vali này."
          }
        ]
      },
      {
        "zh": "先生",
        "py": "xiānsheng",
        "type": "Danh từ",
        "vi": "ông, ngài (xưng hô nam)",
        "ex": [
          {
            "zh": "先生，给您钱，请数数。",
            "py": "Xiānsheng, gěi nín qián, qǐng shǔshu.",
            "vi": "Thưa ông, đây là tiền, xin kiểm đếm."
          },
          {
            "zh": "先生，您好！",
            "py": "Xiānsheng, nín hǎo!",
            "vi": "Thưa ông, xin chào!"
          },
          {
            "zh": "请问先生贵姓？",
            "py": "Qǐngwèn xiānsheng guì xìng?",
            "vi": "Thưa ông, xin hỏi quý danh là gì?"
          },
          {
            "zh": "王先生在吗？",
            "py": "Wáng xiānsheng zài ma?",
            "vi": "Ông Vương có ở đó không?"
          },
          {
            "zh": "先生，请问您贵姓？",
            "py": "Xiānsheng, qǐngwèn nín guì xìng?",
            "vi": "Thưa ông, xin hỏi quý danh ông?"
          },
          {
            "zh": "先生，您要喝什么？",
            "py": "Xiānsheng, nín yào hē shénme?",
            "vi": "Thưa ông, ông muốn uống gì?"
          },
          {
            "zh": "吴先生是我们的经理。",
            "py": "Wú xiānsheng shì wǒmen de jīnglǐ.",
            "vi": "Ông Ngô là giám đốc của chúng tôi."
          },
          {
            "zh": "那位先生是哪国人？",
            "py": "Nà wèi xiānsheng shì nǎ guó rén?",
            "vi": "Vị tiên sinh kia là người nước nào?"
          },
          {
            "zh": "先生，这是您的箱子吗？",
            "py": "Xiānsheng, zhè shì nín de xiāngzi ma?",
            "vi": "Thưa ông, đây là vali của ông phải không?"
          },
          {
            "zh": "我先生是工程师。",
            "py": "Wǒ xiānsheng shì gōngchéngshī.",
            "vi": "Chồng tôi là kỹ sư."
          }
        ]
      },
      {
        "zh": "营业员",
        "py": "yíngyèyuán",
        "type": "Danh từ",
        "vi": "nhân viên giao dịch, nhân viên kinh doanh",
        "ex": [
          {
            "zh": "银行的营业员服务很好。",
            "py": "Yínháng de yíngyèyuán fúwù hěn hǎo.",
            "vi": "Nhân viên ngân hàng phục vụ rất tốt."
          },
          {
            "zh": "营业员态度很好。",
            "py": "Yíngyèyuán tàidu hěn hǎo.",
            "vi": "Nhân viên giao dịch thái độ rất tốt."
          },
          {
            "zh": "营业员帮我换了钱。",
            "py": "Yíngyèyuán bāng wǒ huàn le qián.",
            "vi": "Nhân viên giúp tôi đổi tiền."
          },
          {
            "zh": "她是营业员。",
            "py": "Tā shì yíngyèyuán.",
            "vi": "Cô ấy là nhân viên bán hàng."
          },
          {
            "zh": "营业员很忙。",
            "py": "Yíngyèyuán hěn máng.",
            "vi": "Nhân viên bán hàng rất bận."
          },
          {
            "zh": "营业员，我想存钱。",
            "py": "Yíngyèyuán, wǒ xiǎng cún qián.",
            "vi": "Chị giao dịch viên ơi, tôi muốn gửi tiền."
          },
          {
            "zh": "这个营业员很好。",
            "py": "Zhège yíngyèyuán hěn hǎo.",
            "vi": "Nhân viên giao dịch này rất tốt."
          },
          {
            "zh": "商店的营业员很忙。",
            "py": "Shāngdiàn de yíngyèyuán hěn máng.",
            "vi": "Nhân viên cửa hàng rất bận."
          },
          {
            "zh": "我姐姐是银行营业员。",
            "py": "Wǒ jiějie shì yínháng yíngyèyuán.",
            "vi": "Chị tôi là nhân viên giao dịch ngân hàng."
          },
          {
            "zh": "营业员给我换了人民币。",
            "py": "Yíngyèyuán gěi wǒ huànle rénmínbì.",
            "vi": "Nhân viên giao dịch đã đổi nhân dân tệ cho tôi."
          }
        ]
      },
      {
        "zh": "人民币",
        "py": "rénmínbì",
        "type": "Danh từ",
        "vi": "nhân dân tệ (đồng tiền TQ)",
        "ex": [
          {
            "zh": "我要换五百美元的人民币。",
            "py": "Wǒ yào huàn wǔbǎi měiyuán de rénmínbì.",
            "vi": "Tôi muốn đổi năm trăm đô la sang nhân dân tệ."
          },
          {
            "zh": "我想把美元换成人民币。",
            "py": "Wǒ xiǎng bǎ měiyuán huànchéng rénmínbì.",
            "vi": "Tôi muốn đổi đô la sang nhân dân tệ."
          },
          {
            "zh": "一百美元换多少人民币？",
            "py": "Yībǎi měiyuán huàn duōshao rénmínbì?",
            "vi": "Một trăm đô la đổi được bao nhiêu nhân dân tệ?"
          },
          {
            "zh": "人民币是中国的货币。",
            "py": "Rénmínbì shì Zhōngguó de huòbì.",
            "vi": "Nhân dân tệ là đồng tiền của Trung Quốc."
          },
          {
            "zh": "我换人民币。",
            "py": "Wǒ huàn rénmínbì.",
            "vi": "Tôi đổi nhân dân tệ."
          },
          {
            "zh": "一百人民币换多少越南盾？",
            "py": "Yìbǎi rénmínbì huàn duōshao Yuènán dùn?",
            "vi": "Một trăm tệ đổi được bao nhiêu đồng Việt Nam?"
          },
          {
            "zh": "我有五百块人民币。",
            "py": "Wǒ yǒu wǔbǎi kuài rénmínbì.",
            "vi": "Tôi có năm trăm tệ."
          },
          {
            "zh": "在中国买东西要用人民币。",
            "py": "Zài Zhōngguó mǎi dōngxi yào yòng rénmínbì.",
            "vi": "Mua đồ ở Trung Quốc phải dùng nhân dân tệ."
          },
          {
            "zh": "你有人民币吗？",
            "py": "Nǐ yǒu rénmínbì ma?",
            "vi": "Bạn có nhân dân tệ không?"
          },
          {
            "zh": "我去银行取人民币。",
            "py": "Wǒ qù yínháng qǔ rénmínbì.",
            "vi": "Tôi đến ngân hàng rút nhân dân tệ."
          }
        ]
      },
      {
        "zh": "人民",
        "py": "rénmín",
        "type": "Danh từ",
        "vi": "nhân dân",
        "ex": [
          {
            "zh": "为人民服务。",
            "py": "Wèi rénmín fúwù.",
            "vi": "Phục vụ nhân dân."
          },
          {
            "zh": "这是人民币，不是美元。",
            "py": "Zhè shì rénmínbì, bú shì měiyuán.",
            "vi": "Đây là nhân dân tệ, không phải đô la Mỹ."
          },
          {
            "zh": "中国人民很勤劳。",
            "py": "Zhōngguó rénmín hěn qínláo.",
            "vi": "Nhân dân Trung Quốc rất cần cù."
          },
          {
            "zh": "中国人民很多。",
            "py": "Zhōngguó rénmín hěn duō.",
            "vi": "Người dân Trung Quốc rất đông."
          },
          {
            "zh": "人民币是中国的钱。",
            "py": "Rénmínbì shì Zhōngguó de qián.",
            "vi": "Nhân dân tệ là tiền của Trung Quốc."
          },
          {
            "zh": "越南人民很好。",
            "py": "Yuènán rénmín hěn hǎo.",
            "vi": "Nhân dân Việt Nam rất tốt."
          },
          {
            "zh": "他在中国人民大学学习。",
            "py": "Tā zài Zhōngguó Rénmín Dàxué xuéxí.",
            "vi": "Anh ấy học ở Đại học Nhân dân Trung Quốc."
          },
          {
            "zh": "人民医院在哪儿？",
            "py": "Rénmín Yīyuàn zài nǎr?",
            "vi": "Bệnh viện Nhân dân ở đâu?"
          },
          {
            "zh": "人民路有很多商店。",
            "py": "Rénmín Lù yǒu hěn duō shāngdiàn.",
            "vi": "Đường Nhân Dân có nhiều cửa hàng."
          },
          {
            "zh": "中国人民银行在北京。",
            "py": "Zhōngguó Rénmín Yínháng zài Běijīng.",
            "vi": "Ngân hàng Nhân dân Trung Quốc ở Bắc Kinh."
          }
        ]
      },
      {
        "zh": "上午",
        "py": "shàngwǔ",
        "type": "Danh từ",
        "vi": "buổi sáng (formal, 8-12h)",
        "ex": [
          {
            "zh": "上午我有课，下午没有。",
            "py": "Shàngwǔ wǒ yǒu kè, xiàwǔ méiyǒu.",
            "vi": "Sáng tôi có lớp học, chiều thì không."
          },
          {
            "zh": "上午九点有课。",
            "py": "Shàngwǔ jiǔ diǎn yǒu kè.",
            "vi": "Chín giờ sáng có tiết học."
          },
          {
            "zh": "上午我在银行换了钱。",
            "py": "Shàngwǔ wǒ zài yínháng huàn le qián.",
            "vi": "Sáng nay tôi đi đổi tiền ở ngân hàng."
          },
          {
            "zh": "上午好！",
            "py": "Shàngwǔ hǎo!",
            "vi": "Chào buổi sáng!"
          },
          {
            "zh": "上午我去图书馆。",
            "py": "Shàngwǔ wǒ qù túshūguǎn.",
            "vi": "Buổi sáng tôi đi thư viện."
          },
          {
            "zh": "明天上午你在家吗？",
            "py": "Míngtiān shàngwǔ nǐ zài jiā ma?",
            "vi": "Sáng mai bạn có ở nhà không?"
          },
          {
            "zh": "上午十点我们见面。",
            "py": "Shàngwǔ shí diǎn wǒmen jiànmiàn.",
            "vi": "Mười giờ sáng chúng ta gặp nhau."
          },
          {
            "zh": "星期六上午我不上班。",
            "py": "Xīngqīliù shàngwǔ wǒ bú shàngbān.",
            "vi": "Sáng thứ Bảy tôi không đi làm."
          },
          {
            "zh": "上午经理不在。",
            "py": "Shàngwǔ jīnglǐ bú zài.",
            "vi": "Buổi sáng giám đốc không có ở đây."
          },
          {
            "zh": "今天上午很忙。",
            "py": "Jīntiān shàngwǔ hěn máng.",
            "vi": "Sáng nay rất bận."
          }
        ]
      },
      {
        "zh": "千",
        "py": "qiān",
        "type": "Số đếm",
        "vi": "một nghìn (1.000)",
        "ex": [
          {
            "zh": "这件衣服一千块钱。",
            "py": "Zhè jiàn yīfu yīqiān kuài qián.",
            "vi": "Chiếc áo này một nghìn đồng."
          },
          {
            "zh": "一千块钱。",
            "py": "Yīqiān kuài qián.",
            "vi": "Một nghìn tệ."
          },
          {
            "zh": "五千越南盾。",
            "py": "Wǔqiān Yuènán dùn.",
            "vi": "Năm nghìn đồng Việt Nam."
          },
          {
            "zh": "这件衣服一千元。",
            "py": "Zhè jiàn yīfu yīqiān yuán.",
            "vi": "Bộ quần áo này một nghìn tệ."
          },
          {
            "zh": "我有三千越南盾。",
            "py": "Wǒ yǒu sānqiān Yuènándùn.",
            "vi": "Tôi có ba nghìn đồng Việt Nam."
          },
          {
            "zh": "这个照相机三千块。",
            "py": "Zhège zhàoxiàngjī sānqiān kuài.",
            "vi": "Cái máy ảnh này ba nghìn đồng."
          },
          {
            "zh": "我们学校有两千个学生。",
            "py": "Wǒmen xuéxiào yǒu liǎngqiān ge xuésheng.",
            "vi": "Trường chúng tôi có hai nghìn học sinh."
          },
          {
            "zh": "我想换一千美元。",
            "py": "Wǒ xiǎng huàn yìqiān měiyuán.",
            "vi": "Tôi muốn đổi một nghìn đô la Mỹ."
          },
          {
            "zh": "这辆电动车五千块。",
            "py": "Zhè liàng diàndòngchē wǔqiān kuài.",
            "vi": "Chiếc xe điện này năm nghìn đồng."
          },
          {
            "zh": "图书馆有八千本书。",
            "py": "Túshūguǎn yǒu bāqiān běn shū.",
            "vi": "Thư viện có tám nghìn quyển sách."
          }
        ]
      },
      {
        "zh": "万",
        "py": "wàn",
        "type": "Số đếm",
        "vi": "mười nghìn (10.000), vạn",
        "ex": [
          {
            "zh": "他有一万块钱。",
            "py": "Tā yǒu yīwàn kuài qián.",
            "vi": "Anh ấy có mười nghìn đồng."
          },
          {
            "zh": "一万块钱。",
            "py": "Yīwàn kuài qián.",
            "vi": "Một vạn tệ."
          },
          {
            "zh": "一万元是很多钱。",
            "py": "Yíwàn yuán shì hěn duō qián.",
            "vi": "Mười nghìn đồng là rất nhiều tiền."
          },
          {
            "zh": "北京有二千万人口。",
            "py": "Běijīng yǒu liǎngqiān wàn rénkǒu.",
            "vi": "Bắc Kinh có hai mươi triệu dân."
          },
          {
            "zh": "十万越南盾。",
            "py": "Shíwàn Yuènán dùn.",
            "vi": "Mười vạn đồng Việt Nam."
          },
          {
            "zh": "这辆汽车二十万。",
            "py": "Zhè liàng qìchē èrshí wàn.",
            "vi": "Chiếc ô tô này hai trăm nghìn (tệ)."
          },
          {
            "zh": "他想存五万块钱。",
            "py": "Tā xiǎng cún wǔ wàn kuài qián.",
            "vi": "Anh ấy muốn gửi năm vạn đồng."
          },
          {
            "zh": "一碗面条三万越南盾。",
            "py": "Yì wǎn miàntiáo sān wàn Yuènán dùn.",
            "vi": "Một bát mì ba mươi nghìn đồng Việt Nam."
          },
          {
            "zh": "我们公司一共有一万个职员。",
            "py": "Wǒmen gōngsī yígòng yǒu yí wàn ge zhíyuán.",
            "vi": "Công ty chúng tôi tổng cộng có mười nghìn nhân viên."
          },
          {
            "zh": "一杯咖啡两万五千越南盾。",
            "py": "Yì bēi kāfēi liǎng wàn wǔqiān Yuènán dùn.",
            "vi": "Một cốc cà phê hai mươi lăm nghìn đồng Việt Nam."
          }
        ]
      },
      {
        "zh": "美元",
        "py": "měiyuán",
        "type": "Danh từ",
        "vi": "đô la Mỹ (USD)",
        "ex": [
          {
            "zh": "我换了两百美元。",
            "py": "Wǒ huàn le liǎngbǎi měiyuán.",
            "vi": "Tôi đã đổi hai trăm đô la Mỹ."
          },
          {
            "zh": "一美元换多少人民币？",
            "py": "Yī měiyuán huàn duōshao rénmínbì?",
            "vi": "Một đô Mỹ đổi được bao nhiêu nhân dân tệ?"
          },
          {
            "zh": "我有一百美元。",
            "py": "Wǒ yǒu yībǎi měiyuán.",
            "vi": "Tôi có một trăm đô la Mỹ."
          },
          {
            "zh": "我换一百美元。",
            "py": "Wǒ huàn yìbǎi měiyuán.",
            "vi": "Tôi đổi một trăm đô Mỹ."
          },
          {
            "zh": "美元很贵。",
            "py": "Měiyuán hěn guì.",
            "vi": "Đô la Mỹ rất đắt."
          },
          {
            "zh": "你有多少美元？",
            "py": "Nǐ yǒu duōshao měiyuán?",
            "vi": "Bạn có bao nhiêu đô la Mỹ?"
          },
          {
            "zh": "我想取五百美元。",
            "py": "Wǒ xiǎng qǔ wǔbǎi měiyuán.",
            "vi": "Tôi muốn rút năm trăm đô la Mỹ."
          },
          {
            "zh": "这个照相机八百美元。",
            "py": "Zhège zhàoxiàngjī bābǎi měiyuán.",
            "vi": "Cái máy ảnh này tám trăm đô la Mỹ."
          },
          {
            "zh": "美国人用美元。",
            "py": "Měiguó rén yòng měiyuán.",
            "vi": "Người Mỹ dùng đô la Mỹ."
          },
          {
            "zh": "他去银行存美元。",
            "py": "Tā qù yínháng cún měiyuán.",
            "vi": "Anh ấy đến ngân hàng gửi đô la Mỹ."
          }
        ]
      },
      {
        "zh": "日元",
        "py": "rìyuán",
        "type": "Danh từ",
        "vi": "đồng Yên Nhật (JPY)",
        "ex": [
          {
            "zh": "一万日元等于多少人民币？",
            "py": "Yīwàn rìyuán děngyú duōshao rénmínbì?",
            "vi": "Mười nghìn Yên Nhật bằng bao nhiêu nhân dân tệ?"
          },
          {
            "zh": "日元是日本货币。",
            "py": "Rìyuán shì Rìběn huòbì.",
            "vi": "Yên Nhật là đồng tiền của Nhật Bản."
          },
          {
            "zh": "一万日元换多少钱？",
            "py": "Yīwàn rìyuán huàn duōshao qián?",
            "vi": "Một vạn yên Nhật đổi được bao nhiêu tiền?"
          },
          {
            "zh": "我有一些日元。",
            "py": "Wǒ yǒu yìxiē rìyuán.",
            "vi": "Tôi có một ít yên Nhật."
          },
          {
            "zh": "他换日元。",
            "py": "Tā huàn rìyuán.",
            "vi": "Anh ấy đổi yên Nhật."
          },
          {
            "zh": "我想换一万日元。",
            "py": "Wǒ xiǎng huàn yí wàn rìyuán.",
            "vi": "Tôi muốn đổi mười nghìn yên Nhật."
          },
          {
            "zh": "日本人用日元。",
            "py": "Rìběn rén yòng rìyuán.",
            "vi": "Người Nhật dùng đồng yên."
          },
          {
            "zh": "你有日元吗？",
            "py": "Nǐ yǒu rìyuán ma?",
            "vi": "Bạn có yên Nhật không?"
          },
          {
            "zh": "这本书两千日元。",
            "py": "Zhè běn shū liǎngqiān rìyuán.",
            "vi": "Quyển sách này hai nghìn yên."
          },
          {
            "zh": "去日本旅游要换日元。",
            "py": "Qù Rìběn lǚyóu yào huàn rìyuán.",
            "vi": "Đi du lịch Nhật phải đổi tiền yên."
          }
        ]
      },
      {
        "zh": "港币",
        "py": "gǎngbì",
        "type": "Danh từ",
        "vi": "đô la Hồng Kông (HKD)",
        "ex": [
          {
            "zh": "我有一些港币。",
            "py": "Wǒ yǒu yīxiē gǎngbì.",
            "vi": "Tôi có một ít đô la Hồng Kông."
          },
          {
            "zh": "港币是香港的货币。",
            "py": "Gǎngbì shì Xiānggǎng de huòbì.",
            "vi": "Đô la Hồng Kông là đồng tiền của Hồng Kông."
          },
          {
            "zh": "一百港币换多少人民币？",
            "py": "Yībǎi gǎngbì huàn duōshao rénmínbì?",
            "vi": "Một trăm đô Hồng Kông đổi được bao nhiêu nhân dân tệ?"
          },
          {
            "zh": "她有港币。",
            "py": "Tā yǒu gǎngbì.",
            "vi": "Cô ấy có đô la Hồng Kông."
          },
          {
            "zh": "我换港币。",
            "py": "Wǒ huàn gǎngbì.",
            "vi": "Tôi đổi đô la Hồng Kông."
          },
          {
            "zh": "你有多少港币？",
            "py": "Nǐ yǒu duōshao gǎngbì?",
            "vi": "Bạn có bao nhiêu đô la Hồng Kông?"
          },
          {
            "zh": "我想换一千港币。",
            "py": "Wǒ xiǎng huàn yìqiān gǎngbì.",
            "vi": "Tôi muốn đổi một nghìn đô la Hồng Kông."
          },
          {
            "zh": "这个银行换港币吗？",
            "py": "Zhège yínháng huàn gǎngbì ma?",
            "vi": "Ngân hàng này có đổi đô la Hồng Kông không?"
          },
          {
            "zh": "港币和人民币不一样。",
            "py": "Gǎngbì hé rénmínbì bù yíyàng.",
            "vi": "Đô la Hồng Kông và nhân dân tệ không giống nhau."
          },
          {
            "zh": "他给了我五百港币。",
            "py": "Tā gěile wǒ wǔbǎi gǎngbì.",
            "vi": "Anh ấy đưa tôi năm trăm đô la Hồng Kông."
          }
        ]
      },
      {
        "zh": "欧元",
        "py": "ōuyuán",
        "type": "Danh từ",
        "vi": "đồng Euro (EUR)",
        "ex": [
          {
            "zh": "欧元是欧洲的货币。",
            "py": "Ōuyuán shì Ōuzhōu de huòbì.",
            "vi": "Euro là đồng tiền của châu Âu."
          },
          {
            "zh": "我要换两百欧元。",
            "py": "Wǒ yào huàn liǎngbǎi ōuyuán.",
            "vi": "Tôi muốn đổi hai trăm euro."
          },
          {
            "zh": "我有五十欧元。",
            "py": "Wǒ yǒu wǔshí ōuyuán.",
            "vi": "Tôi có năm mươi euro."
          },
          {
            "zh": "他换欧元。",
            "py": "Tā huàn ōuyuán.",
            "vi": "Anh ấy đổi euro."
          },
          {
            "zh": "欧元很贵。",
            "py": "Ōuyuán hěn guì.",
            "vi": "Đồng euro rất đắt."
          },
          {
            "zh": "法国人用欧元。",
            "py": "Fǎguó rén yòng ōuyuán.",
            "vi": "Người Pháp dùng đồng euro."
          },
          {
            "zh": "一欧元换多少越南盾？",
            "py": "Yì ōuyuán huàn duōshao Yuènán dùn?",
            "vi": "Một euro đổi được bao nhiêu đồng Việt Nam?"
          },
          {
            "zh": "去德国要换欧元。",
            "py": "Qù Déguó yào huàn ōuyuán.",
            "vi": "Đi Đức phải đổi euro."
          },
          {
            "zh": "这瓶香水一百欧元。",
            "py": "Zhè píng xiāngshuǐ yìbǎi ōuyuán.",
            "vi": "Chai nước hoa này một trăm euro."
          },
          {
            "zh": "你有欧元吗？",
            "py": "Nǐ yǒu ōuyuán ma?",
            "vi": "Bạn có euro không?"
          }
        ]
      },
      {
        "zh": "越南盾",
        "py": "Yuènán dùn",
        "type": "Danh từ",
        "vi": "đồng tiền Việt Nam (VND)",
        "ex": [
          {
            "zh": "一块人民币换多少越南盾？",
            "py": "Yī kuài rénmínbì huàn duōshao Yuènán dùn?",
            "vi": "Một đồng nhân dân tệ đổi được bao nhiêu đồng Việt Nam?"
          },
          {
            "zh": "越南盾是越南的货币。",
            "py": "Yuènán dùn shì Yuènán de huòbì.",
            "vi": "Đồng Việt Nam là đồng tiền của Việt Nam."
          },
          {
            "zh": "一万越南盾等于多少人民币？",
            "py": "Yīwàn Yuènán dùn děngyú duōshao rénmínbì?",
            "vi": "Một vạn đồng Việt Nam bằng bao nhiêu nhân dân tệ?"
          },
          {
            "zh": "我换越南盾。",
            "py": "Wǒ huàn Yuènán dùn.",
            "vi": "Tôi đổi tiền đồng Việt Nam."
          },
          {
            "zh": "一美元换多少越南盾？",
            "py": "Yì měiyuán huàn duōshao Yuènán dùn?",
            "vi": "Một đô la Mỹ đổi được bao nhiêu đồng Việt Nam?"
          },
          {
            "zh": "一百美元换多少越南盾？",
            "py": "Yìbǎi měiyuán huàn duōshao Yuènán dùn?",
            "vi": "Một trăm đô la Mỹ đổi được bao nhiêu đồng Việt Nam?"
          },
          {
            "zh": "这件衣服二十万越南盾。",
            "py": "Zhè jiàn yīfu èrshí wàn Yuènán dùn.",
            "vi": "Bộ quần áo này hai trăm nghìn đồng Việt Nam."
          },
          {
            "zh": "我没有越南盾了。",
            "py": "Wǒ méiyǒu Yuènán dùn le.",
            "vi": "Tôi hết tiền Việt rồi."
          },
          {
            "zh": "在越南买东西用越南盾。",
            "py": "Zài Yuènán mǎi dōngxi yòng Yuènán dùn.",
            "vi": "Mua đồ ở Việt Nam dùng tiền đồng."
          },
          {
            "zh": "你要换越南盾吗？",
            "py": "Nǐ yào huàn Yuènán dùn ma?",
            "vi": "Bạn có muốn đổi tiền Việt không?"
          }
        ]
      },
      {
        "zh": "等",
        "py": "děng",
        "type": "Động từ",
        "vi": "đợi, chờ",
        "ex": [
          {
            "zh": "我在图书馆等你。",
            "py": "Wǒ zài túshūguǎn děng nǐ.",
            "vi": "Tôi đợi bạn ở thư viện."
          },
          {
            "zh": "请等一下。",
            "py": "Qǐng děng yīxià.",
            "vi": "Làm ơn đợi một chút."
          },
          {
            "zh": "我等你半个小时了。",
            "py": "Wǒ děng nǐ bàn gè xiǎoshí le.",
            "vi": "Tôi đợi bạn nửa tiếng rồi."
          },
          {
            "zh": "一加一等于二。",
            "py": "Yī jiā yī děngyú èr.",
            "vi": "Một cộng một bằng hai."
          },
          {
            "zh": "等我一下，马上来。",
            "py": "Děng wǒ yīxià, mǎshàng lái.",
            "vi": "Đợi tôi một chút, sắp đến rồi."
          },
          {
            "zh": "等一下儿，我去取钱。",
            "py": "Děng yíxiàr, wǒ qù qǔ qián.",
            "vi": "Đợi một chút, tôi đi rút tiền."
          },
          {
            "zh": "我在门口等你。",
            "py": "Wǒ zài ménkǒu děng nǐ.",
            "vi": "Tôi đợi bạn ở cửa."
          },
          {
            "zh": "你等谁？",
            "py": "Nǐ děng shéi?",
            "vi": "Bạn đợi ai?"
          },
          {
            "zh": "我们等出租车吧。",
            "py": "Wǒmen děng chūzūchē ba.",
            "vi": "Chúng ta đợi taxi đi."
          },
          {
            "zh": "他在等地铁。",
            "py": "Tā zài děng dìtiě.",
            "vi": "Anh ấy đang đợi tàu điện ngầm."
          }
        ]
      },
      {
        "zh": "一会儿",
        "py": "yíhuìr",
        "type": "Danh từ",
        "vi": "một lúc, một lát (thời gian ngắn)",
        "ex": [
          {
            "zh": "我去一会儿就回来。",
            "py": "Wǒ qù yíhuìr jiù huílái.",
            "vi": "Tôi đi một lát rồi về ngay."
          },
          {
            "zh": "请等一会儿。",
            "py": "Qǐng děng yīhuìr.",
            "vi": "Làm ơn đợi một lúc."
          },
          {
            "zh": "我一会儿就来。",
            "py": "Wǒ yīhuìr jiù lái.",
            "vi": "Tôi một lúc nữa sẽ đến."
          },
          {
            "zh": "一会儿见！",
            "py": "Yīhuìr jiàn!",
            "vi": "Lát gặp lại!"
          },
          {
            "zh": "等一会儿我就去。",
            "py": "Děng yíhuìr wǒ jiù qù.",
            "vi": "Đợi một lát nữa tôi sẽ đi."
          },
          {
            "zh": "你坐一会儿吧。",
            "py": "Nǐ zuò yíhuìr ba.",
            "vi": "Bạn ngồi một lát đi."
          },
          {
            "zh": "经理一会儿就回办公室。",
            "py": "Jīnglǐ yíhuìr jiù huí bàngōngshì.",
            "vi": "Giám đốc lát nữa sẽ về văn phòng."
          },
          {
            "zh": "我看一会儿书。",
            "py": "Wǒ kàn yíhuìr shū.",
            "vi": "Tôi đọc sách một lát."
          },
          {
            "zh": "一会儿我们去吃饭吧。",
            "py": "Yíhuìr wǒmen qù chīfàn ba.",
            "vi": "Lát nữa chúng ta đi ăn cơm nhé."
          },
          {
            "zh": "我等了一会儿。",
            "py": "Wǒ děngle yíhuìr.",
            "vi": "Tôi đã đợi một lúc."
          }
        ]
      },
      {
        "zh": "数",
        "py": "shǔ",
        "type": "Động từ",
        "vi": "đếm",
        "ex": [
          {
            "zh": "请数数你的钱。",
            "py": "Qǐng shǔshu nǐ de qián.",
            "vi": "Xin hãy kiểm đếm tiền của bạn."
          },
          {
            "zh": "你会数汉字吗？",
            "py": "Nǐ huì shǔ Hànzì ma?",
            "vi": "Bạn có biết đếm chữ Hán không?"
          },
          {
            "zh": "请数一数这些钱。",
            "py": "Qǐng shǔ yī shǔ zhèxiē qián.",
            "vi": "Làm ơn đếm số tiền này."
          },
          {
            "zh": "他在数苹果。",
            "py": "Tā zài shǔ píngguǒ.",
            "vi": "Anh ấy đang đếm táo."
          },
          {
            "zh": "请数一数。",
            "py": "Qǐng shǔ yi shǔ.",
            "vi": "Xin hãy đếm thử."
          },
          {
            "zh": "请数一下儿你的钱。",
            "py": "Qǐng shǔ yíxiàr nǐ de qián.",
            "vi": "Xin hãy đếm tiền của bạn một chút."
          },
          {
            "zh": "你数数有几个人。",
            "py": "Nǐ shǔshu yǒu jǐ ge rén.",
            "vi": "Bạn đếm xem có mấy người."
          },
          {
            "zh": "我数了，一共十个。",
            "py": "Wǒ shǔ le, yígòng shí ge.",
            "vi": "Tôi đếm rồi, tổng cộng mười cái."
          },
          {
            "zh": "营业员在数钱。",
            "py": "Yíngyèyuán zài shǔ qián.",
            "vi": "Nhân viên giao dịch đang đếm tiền."
          },
          {
            "zh": "你数一数这些鸡蛋。",
            "py": "Nǐ shǔ yi shǔ zhèxiē jīdàn.",
            "vi": "Bạn đếm thử chỗ trứng này xem."
          }
        ]
      },
      {
        "zh": "怎么",
        "py": "zěnme",
        "type": "Đại từ",
        "vi": "thế nào, sao, như thế nào",
        "ex": [
          {
            "zh": "这个字怎么读？",
            "py": "Zhège zì zěnme dú?",
            "vi": "Chữ này đọc thế nào?"
          },
          {
            "zh": "你怎么去图书馆？",
            "py": "Nǐ zěnme qù túshūguǎn?",
            "vi": "Bạn đi thư viện bằng cách nào?"
          },
          {
            "zh": "他怎么了？",
            "py": "Tā zěnme le?",
            "vi": "Anh ấy làm sao vậy?"
          },
          {
            "zh": "怎么换人民币？",
            "py": "Zěnme huàn rénmínbì?",
            "vi": "Làm thế nào để đổi nhân dân tệ?"
          },
          {
            "zh": "你怎么知道？",
            "py": "Nǐ zěnme zhīdào?",
            "vi": "Sao bạn biết được?"
          },
          {
            "zh": "你怎么去公司？",
            "py": "Nǐ zěnme qù gōngsī?",
            "vi": "Bạn đến công ty bằng cách nào?"
          },
          {
            "zh": "“谢谢”用越南语怎么说？",
            "py": "“Xièxie” yòng Yuènányǔ zěnme shuō?",
            "vi": "“Xièxie” tiếng Việt nói thế nào?"
          },
          {
            "zh": "你怎么没去上班？",
            "py": "Nǐ zěnme méi qù shàngbān?",
            "vi": "Sao bạn không đi làm?"
          },
          {
            "zh": "人民币怎么换？",
            "py": "Rénmínbì zěnme huàn?",
            "vi": "Nhân dân tệ đổi thế nào?"
          },
          {
            "zh": "你怎么知道他是医生？",
            "py": "Nǐ zěnme zhīdào tā shì yīshēng?",
            "vi": "Sao bạn biết anh ấy là bác sĩ?"
          }
        ]
      },
      {
        "zh": "怎么样",
        "py": "zěnmeyàng",
        "type": "Cụm từ",
        "vi": "thế nào? (hỏi tình hình)",
        "ex": [
          {
            "zh": "你今天怎么样？",
            "py": "Nǐ jīntiān zěnmeyàng?",
            "vi": "Hôm nay bạn thế nào?"
          },
          {
            "zh": "你学汉语怎么样？",
            "py": "Nǐ xué Hànyǔ zěnmeyàng?",
            "vi": "Bạn học tiếng Trung thế nào rồi?"
          },
          {
            "zh": "这个菜怎么样？",
            "py": "Zhège cài zěnmeyàng?",
            "vi": "Món ăn này thế nào?"
          },
          {
            "zh": "身体怎么样？",
            "py": "Shēntǐ zěnmeyàng?",
            "vi": "Sức khỏe thế nào?"
          },
          {
            "zh": "我们明天去，怎么样？",
            "py": "Wǒmen míngtiān qù, zěnmeyàng?",
            "vi": "Ngày mai chúng ta đi, thế nào?"
          },
          {
            "zh": "这件毛衣怎么样？",
            "py": "Zhè jiàn máoyī zěnmeyàng?",
            "vi": "Chiếc áo len này thế nào?"
          },
          {
            "zh": "北京怎么样？",
            "py": "Běijīng zěnmeyàng?",
            "vi": "Bắc Kinh thế nào?"
          },
          {
            "zh": "我们坐地铁去，怎么样？",
            "py": "Wǒmen zuò dìtiě qù, zěnmeyàng?",
            "vi": "Chúng ta đi tàu điện ngầm, thế nào?"
          },
          {
            "zh": "那家酒店怎么样？",
            "py": "Nà jiā jiǔdiàn zěnmeyàng?",
            "vi": "Khách sạn đó thế nào?"
          },
          {
            "zh": "你的同屋怎么样？",
            "py": "Nǐ de tóngwū zěnmeyàng?",
            "vi": "Bạn cùng phòng của bạn thế nào?"
          }
        ]
      },
      {
        "zh": "亿",
        "py": "yì",
        "vi": "trăm triệu (100.000.000)",
        "type": "Số đếm",
        "ex": [
          {
            "zh": "中国有十四亿人。",
            "py": "Zhōngguó yǒu shísì yì rén.",
            "vi": "Trung Quốc có 1,4 tỷ người."
          },
          {
            "zh": "越南有一亿人。",
            "py": "Yuènán yǒu yí yì rén.",
            "vi": "Việt Nam có một trăm triệu người."
          },
          {
            "zh": "一亿是一万万。",
            "py": "Yí yì shì yí wàn wàn.",
            "vi": "Một trăm triệu bằng một vạn vạn."
          },
          {
            "zh": "这是一亿越南盾。",
            "py": "Zhè shì yí yì Yuènán dùn.",
            "vi": "Đây là một trăm triệu đồng Việt Nam."
          },
          {
            "zh": "一亿美元很多钱。",
            "py": "Yí yì měiyuán hěn duō qián.",
            "vi": "Một trăm triệu đô la Mỹ là rất nhiều tiền."
          },
          {
            "zh": "越南有一亿多人。",
            "py": "Yuènán yǒu yí yì duō rén.",
            "vi": "Việt Nam có hơn một trăm triệu người."
          },
          {
            "zh": "这家公司有十亿美元。",
            "py": "Zhè jiā gōngsī yǒu shí yì měiyuán.",
            "vi": "Công ty này có một tỷ đô la Mỹ."
          },
          {
            "zh": "一亿越南盾是很多钱。",
            "py": "Yí yì Yuènán dùn shì hěn duō qián.",
            "vi": "Một trăm triệu đồng Việt Nam là rất nhiều tiền."
          },
          {
            "zh": "这辆车三亿越南盾。",
            "py": "Zhè liàng chē sān yì Yuènán dùn.",
            "vi": "Chiếc xe này ba trăm triệu đồng Việt Nam."
          },
          {
            "zh": "美国有三亿多人。",
            "py": "Měiguó yǒu sān yì duō rén.",
            "vi": "Mỹ có hơn ba trăm triệu người."
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 12 (b13): 他住哪儿？– Ông ấy sống ở đâu?",
    "words": [
      {
        "zh": "办公室",
        "py": "bàngōngshì",
        "type": "Danh từ",
        "vi": "văn phòng",
        "ex": [
          {
            "zh": "这是我们的办公室。",
            "py": "Zhè shì wǒmen de bàngōngshì.",
            "vi": "Đây là văn phòng của chúng tôi."
          },
          {
            "zh": "王老师在办公室吗？",
            "py": "Wáng lǎoshī zài bàngōngshì ma?",
            "vi": "Thầy Vương có ở văn phòng không?"
          },
          {
            "zh": "我去办公室找他。",
            "py": "Wǒ qù bàngōngshì zhǎo tā.",
            "vi": "Tôi đến văn phòng tìm ông ấy."
          },
          {
            "zh": "他在办公室工作。",
            "py": "Tā zài bàngōngshì gōngzuò.",
            "vi": "Anh ấy làm việc ở văn phòng."
          },
          {
            "zh": "办公室在楼上。",
            "py": "Bàngōngshì zài lóu shàng.",
            "vi": "Văn phòng ở trên tầng."
          },
          {
            "zh": "经理的办公室在几楼？",
            "py": "Jīnglǐ de bàngōngshì zài jǐ lóu?",
            "vi": "Văn phòng giám đốc ở tầng mấy?"
          },
          {
            "zh": "办公室里有五个职员。",
            "py": "Bàngōngshì lǐ yǒu wǔ ge zhíyuán.",
            "vi": "Trong văn phòng có năm nhân viên."
          },
          {
            "zh": "我的办公室很小。",
            "py": "Wǒ de bàngōngshì hěn xiǎo.",
            "vi": "Văn phòng của tôi rất nhỏ."
          },
          {
            "zh": "校长办公室在哪儿？",
            "py": "Xiàozhǎng bàngōngshì zài nǎr?",
            "vi": "Văn phòng hiệu trưởng ở đâu?"
          },
          {
            "zh": "我们办公室有咖啡。",
            "py": "Wǒmen bàngōngshì yǒu kāfēi.",
            "vi": "Văn phòng chúng tôi có cà phê."
          }
        ]
      },
      {
        "zh": "办公",
        "py": "bàngōng",
        "type": "Động từ",
        "vi": "làm việc (tại cơ quan)",
        "ex": [
          {
            "zh": "他在办公室办公。",
            "py": "Tā zài bàngōngshì bàngōng.",
            "vi": "Ông ấy làm việc ở văn phòng."
          },
          {
            "zh": "今天我不需要去办公。",
            "py": "Jīntiān wǒ bù xūyào qù bàngōng.",
            "vi": "Hôm nay tôi không cần đi làm."
          },
          {
            "zh": "他每天八点开始办公。",
            "py": "Tā měitiān bā diǎn kāishǐ bàngōng.",
            "vi": "Ông ấy bắt đầu làm việc lúc 8 giờ mỗi ngày."
          },
          {
            "zh": "他去办公室办公。",
            "py": "Tā qù bàngōngshì bàngōng.",
            "vi": "Anh ấy đến văn phòng làm việc."
          },
          {
            "zh": "职员在这儿办公。",
            "py": "Zhíyuán zài zhèr bàngōng.",
            "vi": "Nhân viên làm việc ở đây."
          },
          {
            "zh": "经理在楼上办公。",
            "py": "Jīnglǐ zài lóu shàng bàngōng.",
            "vi": "Giám đốc làm việc ở tầng trên."
          },
          {
            "zh": "我们星期六不办公。",
            "py": "Wǒmen xīngqīliù bú bàngōng.",
            "vi": "Thứ Bảy chúng tôi không làm việc."
          },
          {
            "zh": "他在家办公。",
            "py": "Tā zài jiā bàngōng.",
            "vi": "Anh ấy làm việc ở nhà."
          },
          {
            "zh": "下午两点我们办公。",
            "py": "Xiàwǔ liǎng diǎn wǒmen bàngōng.",
            "vi": "Hai giờ chiều chúng tôi làm việc."
          },
          {
            "zh": "秘书在三楼办公。",
            "py": "Mìshū zài sān lóu bàngōng.",
            "vi": "Thư ký làm việc ở tầng ba."
          }
        ]
      },
      {
        "zh": "职员",
        "py": "zhíyuán",
        "type": "Danh từ",
        "vi": "nhân viên",
        "ex": [
          {
            "zh": "他是公司的职员。",
            "py": "Tā shì gōngsī de zhíyuán.",
            "vi": "Anh ấy là nhân viên công ty."
          },
          {
            "zh": "这家公司有很多职员。",
            "py": "Zhè jiā gōngsī yǒu hěn duō zhíyuán.",
            "vi": "Công ty này có rất nhiều nhân viên."
          },
          {
            "zh": "职员们正在开会。",
            "py": "Zhíyuánmen zhèngzài kāihuì.",
            "vi": "Các nhân viên đang họp."
          },
          {
            "zh": "她是公司的职员。",
            "py": "Tā shì gōngsī de zhíyuán.",
            "vi": "Cô ấy là nhân viên công ty."
          },
          {
            "zh": "职员们都很忙。",
            "py": "Zhíyuánmen dōu hěn máng.",
            "vi": "Các nhân viên đều rất bận."
          },
          {
            "zh": "我是银行职员。",
            "py": "Wǒ shì yínháng zhíyuán.",
            "vi": "Tôi là nhân viên ngân hàng."
          },
          {
            "zh": "这个职员很忙。",
            "py": "Zhège zhíyuán hěn máng.",
            "vi": "Nhân viên này rất bận."
          },
          {
            "zh": "公司的职员都在食堂吃饭。",
            "py": "Gōngsī de zhíyuán dōu zài shítáng chīfàn.",
            "vi": "Nhân viên công ty đều ăn ở nhà ăn."
          },
          {
            "zh": "那位职员是越南人。",
            "py": "Nà wèi zhíyuán shì Yuènán rén.",
            "vi": "Người nhân viên kia là người Việt Nam."
          },
          {
            "zh": "新职员明天上班。",
            "py": "Xīn zhíyuán míngtiān shàngbān.",
            "vi": "Nhân viên mới ngày mai đi làm."
          }
        ]
      },
      {
        "zh": "找",
        "py": "zhǎo",
        "type": "Động từ",
        "vi": "tìm, kiếm",
        "ex": [
          {
            "zh": "你找谁？",
            "py": "Nǐ zhǎo shéi?",
            "vi": "Bạn tìm ai?"
          },
          {
            "zh": "我在找我的书。",
            "py": "Wǒ zài zhǎo wǒ de shū.",
            "vi": "Tôi đang tìm sách của mình."
          },
          {
            "zh": "我要找汉语书。",
            "py": "Wǒ yào zhǎo Hànyǔ shū.",
            "vi": "Tôi muốn tìm sách tiếng Trung."
          },
          {
            "zh": "我找我的手机。",
            "py": "Wǒ zhǎo wǒ de shǒujī.",
            "vi": "Tôi tìm điện thoại của tôi."
          },
          {
            "zh": "他在找电话。",
            "py": "Tā zài zhǎo diànhuà.",
            "vi": "Anh ấy đang tìm điện thoại."
          },
          {
            "zh": "我找吴经理。",
            "py": "Wǒ zhǎo Wú jīnglǐ.",
            "vi": "Tôi tìm giám đốc Ngô."
          },
          {
            "zh": "他在找工作。",
            "py": "Tā zài zhǎo gōngzuò.",
            "vi": "Anh ấy đang tìm việc."
          },
          {
            "zh": "我去图书馆找一本书。",
            "py": "Wǒ qù túshūguǎn zhǎo yì běn shū.",
            "vi": "Tôi đến thư viện tìm một quyển sách."
          },
          {
            "zh": "老师找你。",
            "py": "Lǎoshī zhǎo nǐ.",
            "vi": "Thầy tìm bạn đấy."
          },
          {
            "zh": "我们找一家酒店吧。",
            "py": "Wǒmen zhǎo yì jiā jiǔdiàn ba.",
            "vi": "Chúng ta tìm một khách sạn đi."
          }
        ]
      },
      {
        "zh": "在",
        "py": "zài",
        "type": "Động từ/Giới từ",
        "vi": "ở, đang (ở nơi nào đó / đang làm gì)",
        "ex": [
          {
            "zh": "王老师在吗？",
            "py": "Wáng lǎoshī zài ma?",
            "vi": "Thầy Vương có ở đó không?"
          },
          {
            "zh": "我在银行。",
            "py": "Wǒ zài yínháng.",
            "vi": "Tôi đang ở ngân hàng."
          },
          {
            "zh": "我在吃饭。",
            "py": "Wǒ zài chīfàn.",
            "vi": "Tôi đang ăn cơm."
          },
          {
            "zh": "他现在不在。",
            "py": "Tā xiànzài bú zài.",
            "vi": "Bây giờ anh ấy không có ở đây."
          },
          {
            "zh": "老师在办公室。",
            "py": "Lǎoshī zài bàngōngshì.",
            "vi": "Thầy/cô ở văn phòng."
          },
          {
            "zh": "经理在吗？",
            "py": "Jīnglǐ zài ma?",
            "vi": "Giám đốc có ở đây không?"
          },
          {
            "zh": "妈妈在做饭。",
            "py": "Māma zài zuòfàn.",
            "vi": "Mẹ đang nấu cơm."
          },
          {
            "zh": "他不在办公室。",
            "py": "Tā bú zài bàngōngshì.",
            "vi": "Anh ấy không có ở văn phòng."
          },
          {
            "zh": "我们在等你。",
            "py": "Wǒmen zài děng nǐ.",
            "vi": "Chúng tôi đang đợi bạn."
          },
          {
            "zh": "我的车在楼下。",
            "py": "Wǒ de chē zài lóu xià.",
            "vi": "Xe của tôi ở dưới nhà."
          }
        ]
      },
      {
        "zh": "家",
        "py": "jiā",
        "type": "Danh từ/Lượng từ",
        "vi": "nhà; lượng từ chỉ cơ sở, tổ chức",
        "ex": [
          {
            "zh": "他在家呢。",
            "py": "Tā zài jiā ne.",
            "vi": "Ông ấy đang ở nhà."
          },
          {
            "zh": "我要回家。",
            "py": "Wǒ yào huí jiā.",
            "vi": "Tôi muốn về nhà."
          },
          {
            "zh": "这家学校很大。",
            "py": "Zhè jiā xuéxiào hěn dà.",
            "vi": "Trường học này rất to."
          },
          {
            "zh": "我家在河内。",
            "py": "Wǒ jiā zài Hénèi.",
            "vi": "Nhà tôi ở Hà Nội."
          },
          {
            "zh": "他不在家。",
            "py": "Tā bú zài jiā.",
            "vi": "Anh ấy không có ở nhà."
          },
          {
            "zh": "这家酒店很便宜。",
            "py": "Zhè jiā jiǔdiàn hěn piányi.",
            "vi": "Khách sạn này rất rẻ."
          },
          {
            "zh": "那家银行几点开门？",
            "py": "Nà jiā yínháng jǐ diǎn kāimén?",
            "vi": "Ngân hàng kia mấy giờ mở cửa?"
          },
          {
            "zh": "他在一家外贸公司工作。",
            "py": "Tā zài yì jiā wàimào gōngsī gōngzuò.",
            "vi": "Anh ấy làm việc ở một công ty ngoại thương."
          },
          {
            "zh": "这条街有三家咖啡店。",
            "py": "Zhè tiáo jiē yǒu sān jiā kāfēi diàn.",
            "vi": "Con phố này có ba quán cà phê."
          },
          {
            "zh": "我晚上在家。",
            "py": "Wǒ wǎnshang zài jiā.",
            "vi": "Buổi tối tôi ở nhà."
          }
        ]
      },
      {
        "zh": "呢",
        "py": "ne",
        "type": "Trợ từ",
        "vi": "trợ từ hỏi tắt / xác nhận",
        "ex": [
          {
            "zh": "我在办公室，你呢？",
            "py": "Wǒ zài bàngōngshì, nǐ ne?",
            "vi": "Tôi ở văn phòng, còn bạn thì sao?"
          },
          {
            "zh": "我的书呢？",
            "py": "Wǒ de shū ne?",
            "vi": "Sách của tôi đâu?"
          },
          {
            "zh": "他呢？他在哪儿？",
            "py": "Tā ne? Tā zài nǎr?",
            "vi": "Còn anh ấy? Anh ấy ở đâu?"
          },
          {
            "zh": "我很好，你呢？",
            "py": "Wǒ hěn hǎo, nǐ ne?",
            "vi": "Tôi rất khỏe, còn bạn thì sao?"
          },
          {
            "zh": "你的房间号呢？",
            "py": "Nǐ de fángjiān hào ne?",
            "vi": "Còn số phòng của bạn thì sao?"
          },
          {
            "zh": "我喝咖啡，你呢？",
            "py": "Wǒ hē kāfēi, nǐ ne?",
            "vi": "Tôi uống cà phê, còn bạn?"
          },
          {
            "zh": "我的雨伞呢？",
            "py": "Wǒ de yǔsǎn ne?",
            "vi": "Ô của tôi đâu rồi?"
          },
          {
            "zh": "他在做什么呢？",
            "py": "Tā zài zuò shénme ne?",
            "vi": "Anh ấy đang làm gì thế?"
          },
          {
            "zh": "你妈妈呢？她在家吗？",
            "py": "Nǐ māma ne? Tā zài jiā ma?",
            "vi": "Còn mẹ bạn? Bà ấy có ở nhà không?"
          },
          {
            "zh": "我是越南人，你呢？",
            "py": "Wǒ shì Yuènán rén, nǐ ne?",
            "vi": "Tôi là người Việt Nam, còn bạn?"
          }
        ]
      },
      {
        "zh": "住",
        "py": "zhù",
        "type": "Động từ",
        "vi": "ở, cư trú, sinh sống",
        "ex": [
          {
            "zh": "他住哪儿？",
            "py": "Tā zhù nǎr?",
            "vi": "Ông ấy ở đâu?"
          },
          {
            "zh": "你住在哪儿？",
            "py": "Nǐ zhù zài nǎr?",
            "vi": "Bạn sống ở đâu?"
          },
          {
            "zh": "他住在这个酒店。",
            "py": "Tā zhù zài zhège jiǔdiàn.",
            "vi": "Anh ấy ở khách sạn này."
          },
          {
            "zh": "您住几号房间？",
            "py": "Nín zhù jǐ hào fángjiān?",
            "vi": "Ngài ở phòng số mấy?"
          },
          {
            "zh": "他住在酒店。",
            "py": "Tā zhù zài jiǔdiàn.",
            "vi": "Anh ấy ở khách sạn."
          },
          {
            "zh": "你住在几楼？",
            "py": "Nǐ zhù zài jǐ lóu?",
            "vi": "Bạn ở tầng mấy?"
          },
          {
            "zh": "他们住在这条街。",
            "py": "Tāmen zhù zài zhè tiáo jiē.",
            "vi": "Họ sống ở con phố này."
          },
          {
            "zh": "我在北京住了两个月。",
            "py": "Wǒ zài Běijīng zhùle liǎng ge yuè.",
            "vi": "Tôi đã sống ở Bắc Kinh hai tháng."
          },
          {
            "zh": "你住酒店还是住朋友家？",
            "py": "Nǐ zhù jiǔdiàn háishì zhù péngyou jiā?",
            "vi": "Bạn ở khách sạn hay ở nhà bạn?"
          },
          {
            "zh": "我们住同一个房间。",
            "py": "Wǒmen zhù tóng yí ge fángjiān.",
            "vi": "Chúng tôi ở cùng một phòng."
          }
        ]
      },
      {
        "zh": "楼",
        "py": "lóu",
        "type": "Danh từ",
        "vi": "tầng, nhà lầu, toà nhà",
        "ex": [
          {
            "zh": "他住十八楼。",
            "py": "Tā zhù shíbā lóu.",
            "vi": "Ông ấy ở tầng 18."
          },
          {
            "zh": "你住哪楼？",
            "py": "Nǐ zhù nǎ lóu?",
            "vi": "Bạn ở tầng mấy?"
          },
          {
            "zh": "这栋楼有二十层。",
            "py": "Zhè dòng lóu yǒu èrshí céng.",
            "vi": "Tòa nhà này có 20 tầng."
          },
          {
            "zh": "我住在五楼。",
            "py": "Wǒ zhù zài wǔ lóu.",
            "vi": "Tôi ở tầng năm."
          },
          {
            "zh": "办公室在二楼。",
            "py": "Bàngōngshì zài èr lóu.",
            "vi": "Văn phòng ở tầng hai."
          },
          {
            "zh": "这个楼很高。",
            "py": "Zhège lóu hěn gāo.",
            "vi": "Tòa nhà này rất cao."
          },
          {
            "zh": "银行在一楼。",
            "py": "Yínháng zài yī lóu.",
            "vi": "Ngân hàng ở tầng một."
          },
          {
            "zh": "食堂在三号楼。",
            "py": "Shítáng zài sān hào lóu.",
            "vi": "Nhà ăn ở tòa nhà số ba."
          },
          {
            "zh": "你住几号楼？",
            "py": "Nǐ zhù jǐ hào lóu?",
            "vi": "Bạn ở tòa nhà số mấy?"
          },
          {
            "zh": "他在楼下等你。",
            "py": "Tā zài lóu xià děng nǐ.",
            "vi": "Anh ấy đợi bạn ở dưới nhà."
          }
        ]
      },
      {
        "zh": "门",
        "py": "mén",
        "type": "Danh từ",
        "vi": "cửa, cổng; đơn nguyên (số cổng)",
        "ex": [
          {
            "zh": "他住十八楼一门。",
            "py": "Tā zhù shíbā lóu yī mén.",
            "vi": "Ông ấy ở tầng 18, đơn nguyên 1."
          },
          {
            "zh": "请关门。",
            "py": "Qǐng guān mén.",
            "vi": "Làm ơn đóng cửa."
          },
          {
            "zh": "门开着呢。",
            "py": "Mén kāizhe ne.",
            "vi": "Cửa đang mở."
          },
          {
            "zh": "这个房间的门很大。",
            "py": "Zhège fángjiān de mén hěn dà.",
            "vi": "Cửa của căn phòng này rất to."
          },
          {
            "zh": "他在门口等你。",
            "py": "Tā zài ménkǒu děng nǐ.",
            "vi": "Anh ấy đang đợi bạn ở cửa."
          },
          {
            "zh": "银行的门在那儿。",
            "py": "Yínháng de mén zài nàr.",
            "vi": "Cửa ngân hàng ở đằng kia."
          },
          {
            "zh": "商场几点开门？",
            "py": "Shāngchǎng jǐ diǎn kāimén?",
            "vi": "Trung tâm thương mại mấy giờ mở cửa?"
          },
          {
            "zh": "学校的门很大。",
            "py": "Xuéxiào de mén hěn dà.",
            "vi": "Cổng trường rất lớn."
          },
          {
            "zh": "门口有一个人。",
            "py": "Ménkǒu yǒu yí ge rén.",
            "vi": "Ở cửa có một người."
          },
          {
            "zh": "他住三号楼二门。",
            "py": "Tā zhù sān hào lóu èr mén.",
            "vi": "Anh ấy ở tòa nhà số 3, cửa số 2."
          }
        ]
      },
      {
        "zh": "号",
        "py": "hào",
        "type": "Danh từ",
        "vi": "số (địa chỉ, phòng, ngày)",
        "ex": [
          {
            "zh": "房间号是601。",
            "py": "Fángjiān hào shì liù líng yāo.",
            "vi": "Số phòng là 601."
          },
          {
            "zh": "今天是几号？",
            "py": "Jīntiān shì jǐ hào?",
            "vi": "Hôm nay là ngày mấy?"
          },
          {
            "zh": "我住18号。",
            "py": "Wǒ zhù shíbā hào.",
            "vi": "Tôi ở số 18."
          },
          {
            "zh": "我住三号房间。",
            "py": "Wǒ zhù sān hào fángjiān.",
            "vi": "Tôi ở phòng số ba."
          },
          {
            "zh": "今天几号？",
            "py": "Jīntiān jǐ hào?",
            "vi": "Hôm nay ngày mấy?"
          },
          {
            "zh": "你的生日是几号？",
            "py": "Nǐ de shēngrì shì jǐ hào?",
            "vi": "Sinh nhật bạn là ngày mấy?"
          },
          {
            "zh": "我住八号楼。",
            "py": "Wǒ zhù bā hào lóu.",
            "vi": "Tôi ở tòa nhà số tám."
          },
          {
            "zh": "明天是十五号。",
            "py": "Míngtiān shì shíwǔ hào.",
            "vi": "Ngày mai là ngày mười lăm."
          },
          {
            "zh": "他的房间是二零八号。",
            "py": "Tā de fángjiān shì èr líng bā hào.",
            "vi": "Phòng anh ấy là số 208."
          },
          {
            "zh": "五号是星期几？",
            "py": "Wǔ hào shì xīngqī jǐ?",
            "vi": "Ngày 5 là thứ mấy?"
          }
        ]
      },
      {
        "zh": "房间",
        "py": "fángjiān",
        "type": "Danh từ",
        "vi": "phòng",
        "ex": [
          {
            "zh": "这个房间很大。",
            "py": "Zhège fángjiān hěn dà.",
            "vi": "Phòng này rất rộng."
          },
          {
            "zh": "我的房间在三楼。",
            "py": "Wǒ de fángjiān zài sān lóu.",
            "vi": "Phòng của tôi ở tầng ba."
          },
          {
            "zh": "请问，您的房间号是多少？",
            "py": "Qǐngwèn, nín de fángjiān hào shì duōshǎo?",
            "vi": "Xin hỏi, số phòng của ngài là bao nhiêu?"
          },
          {
            "zh": "这是我的房间。",
            "py": "Zhè shì wǒ de fángjiān.",
            "vi": "Đây là phòng của tôi."
          },
          {
            "zh": "他的房间很大。",
            "py": "Tā de fángjiān hěn dà.",
            "vi": "Phòng của anh ấy rất to."
          },
          {
            "zh": "这个房间多少钱？",
            "py": "Zhège fángjiān duōshao qián?",
            "vi": "Phòng này bao nhiêu tiền?"
          },
          {
            "zh": "房间里有一个箱子。",
            "py": "Fángjiān lǐ yǒu yí ge xiāngzi.",
            "vi": "Trong phòng có một cái vali."
          },
          {
            "zh": "我的房间号是三零五。",
            "py": "Wǒ de fángjiān hào shì sān líng wǔ.",
            "vi": "Số phòng của tôi là 305."
          },
          {
            "zh": "他在房间里看书。",
            "py": "Tā zài fángjiān lǐ kàn shū.",
            "vi": "Anh ấy đọc sách trong phòng."
          },
          {
            "zh": "我想换一个大房间。",
            "py": "Wǒ xiǎng huàn yí ge dà fángjiān.",
            "vi": "Tôi muốn đổi sang một phòng lớn."
          }
        ]
      },
      {
        "zh": "知道",
        "py": "zhīdào",
        "type": "Động từ",
        "vi": "biết",
        "ex": [
          {
            "zh": "你知道他的电话号码吗？",
            "py": "Nǐ zhīdào tā de diànhuà hàomǎ ma?",
            "vi": "Bạn có biết số điện thoại của anh ấy không?"
          },
          {
            "zh": "我不知道。",
            "py": "Wǒ bù zhīdào.",
            "vi": "Tôi không biết."
          },
          {
            "zh": "我知道他住哪儿。",
            "py": "Wǒ zhīdào tā zhù nǎr.",
            "vi": "Tôi biết ông ấy sống ở đâu."
          },
          {
            "zh": "你知道他的手机号码吗？",
            "py": "Nǐ zhīdào tā de shǒujī hàomǎ ma?",
            "vi": "Bạn có biết số di động của anh ấy không?"
          },
          {
            "zh": "你知道他住哪儿吗？",
            "py": "Nǐ zhīdào tā zhù nǎr ma?",
            "vi": "Bạn có biết anh ấy ở đâu không?"
          },
          {
            "zh": "你知道银行在哪儿吗？",
            "py": "Nǐ zhīdào yínháng zài nǎr ma?",
            "vi": "Bạn có biết ngân hàng ở đâu không?"
          },
          {
            "zh": "我知道他的名字。",
            "py": "Wǒ zhīdào tā de míngzi.",
            "vi": "Tôi biết tên anh ấy."
          },
          {
            "zh": "你知道今天几号吗？",
            "py": "Nǐ zhīdào jīntiān jǐ hào ma?",
            "vi": "Bạn có biết hôm nay ngày mấy không?"
          },
          {
            "zh": "老师知道我们去旅游。",
            "py": "Lǎoshī zhīdào wǒmen qù lǚyóu.",
            "vi": "Thầy biết chúng tôi đi du lịch."
          },
          {
            "zh": "我不知道这个汉字怎么读。",
            "py": "Wǒ bù zhīdào zhège Hànzì zěnme dú.",
            "vi": "Tôi không biết chữ Hán này đọc thế nào."
          }
        ]
      },
      {
        "zh": "电话",
        "py": "diànhuà",
        "type": "Danh từ",
        "vi": "điện thoại",
        "ex": [
          {
            "zh": "他的电话号码是多少？",
            "py": "Tā de diànhuà hàomǎ shì duōshǎo?",
            "vi": "Số điện thoại của anh ấy là bao nhiêu?"
          },
          {
            "zh": "我给你打电话。",
            "py": "Wǒ gěi nǐ dǎ diànhuà.",
            "vi": "Tôi sẽ gọi điện cho bạn."
          },
          {
            "zh": "电话号码是62931074。",
            "py": "Diànhuà hàomǎ shì liù èr jiǔ sān yāo líng qī sì.",
            "vi": "Số điện thoại là 62931074."
          },
          {
            "zh": "这是你的电话吗？",
            "py": "Zhè shì nǐ de diànhuà ma?",
            "vi": "Đây có phải là điện thoại của bạn không?"
          },
          {
            "zh": "办公室的电话是多少？",
            "py": "Bàngōngshì de diànhuà shì duōshao?",
            "vi": "Điện thoại của văn phòng là số bao nhiêu?"
          },
          {
            "zh": "办公室有电话吗？",
            "py": "Bàngōngshì yǒu diànhuà ma?",
            "vi": "Văn phòng có điện thoại không?"
          },
          {
            "zh": "这是谁的电话号码？",
            "py": "Zhè shì shéi de diànhuà hàomǎ?",
            "vi": "Đây là số điện thoại của ai?"
          },
          {
            "zh": "你知道银行的电话吗？",
            "py": "Nǐ zhīdào yínháng de diànhuà ma?",
            "vi": "Bạn có biết số điện thoại của ngân hàng không?"
          },
          {
            "zh": "这个电话很旧。",
            "py": "Zhège diànhuà hěn jiù.",
            "vi": "Cái điện thoại này rất cũ."
          },
          {
            "zh": "请写一下儿你的电话。",
            "py": "Qǐng xiě yíxiàr nǐ de diànhuà.",
            "vi": "Hãy viết số điện thoại của bạn."
          }
        ]
      },
      {
        "zh": "号码",
        "py": "hàomǎ",
        "type": "Danh từ",
        "vi": "số, mã số",
        "ex": [
          {
            "zh": "你的手机号码是多少？",
            "py": "Nǐ de shǒujī hàomǎ shì duōshǎo?",
            "vi": "Số điện thoại di động của bạn là bao nhiêu?"
          },
          {
            "zh": "请告诉我你的号码。",
            "py": "Qǐng gàosù wǒ nǐ de hàomǎ.",
            "vi": "Làm ơn cho tôi biết số của bạn."
          },
          {
            "zh": "我记住了你的号码。",
            "py": "Wǒ jì zhù le nǐ de hàomǎ.",
            "vi": "Tôi đã nhớ số của bạn rồi."
          },
          {
            "zh": "你的号码是多少？",
            "py": "Nǐ de hàomǎ shì duōshao?",
            "vi": "Số của bạn là bao nhiêu?"
          },
          {
            "zh": "这个号码不对。",
            "py": "Zhège hàomǎ bú duì.",
            "vi": "Số này không đúng."
          },
          {
            "zh": "我的房间号码是三零二。",
            "py": "Wǒ de fángjiān hàomǎ shì sān líng èr.",
            "vi": "Số phòng của tôi là 302."
          },
          {
            "zh": "请问，医院的号码是多少？",
            "py": "Qǐngwèn, yīyuàn de hàomǎ shì duōshao?",
            "vi": "Xin hỏi, số của bệnh viện là bao nhiêu?"
          },
          {
            "zh": "我不知道她的号码。",
            "py": "Wǒ bù zhīdào tā de hàomǎ.",
            "vi": "Tôi không biết số của cô ấy."
          },
          {
            "zh": "这是我的新号码。",
            "py": "Zhè shì wǒ de xīn hàomǎ.",
            "vi": "Đây là số mới của tôi."
          },
          {
            "zh": "你的号码对吗？",
            "py": "Nǐ de hàomǎ duì ma?",
            "vi": "Số của bạn có đúng không?"
          }
        ]
      },
      {
        "zh": "零",
        "py": "líng",
        "type": "Số từ",
        "vi": "số không, lẻ",
        "ex": [
          {
            "zh": "房间号是六零一。",
            "py": "Fángjiān hào shì liù líng yī.",
            "vi": "Số phòng là 601."
          },
          {
            "zh": "今天气温是零度。",
            "py": "Jīntiān qìwēn shì líng dù.",
            "vi": "Hôm nay nhiệt độ là 0 độ."
          },
          {
            "zh": "电话号码里有一个零。",
            "py": "Diànhuà hàomǎ lǐ yǒu yīgè líng.",
            "vi": "Trong số điện thoại có một số 0."
          },
          {
            "zh": "我的号码有三个零。",
            "py": "Wǒ de hàomǎ yǒu sān gè líng.",
            "vi": "Số của tôi có ba số không."
          },
          {
            "zh": "这是零，不是六。",
            "py": "Zhè shì líng, bú shì liù.",
            "vi": "Đây là số không, không phải sáu."
          },
          {
            "zh": "一百零一块。",
            "py": "Yìbǎi líng yī kuài.",
            "vi": "Một trăm linh một đồng."
          },
          {
            "zh": "今年是二零二六年。",
            "py": "Jīnnián shì èr líng èr liù nián.",
            "vi": "Năm nay là năm 2026."
          },
          {
            "zh": "我住五零八号房间。",
            "py": "Wǒ zhù wǔ líng bā hào fángjiān.",
            "vi": "Tôi ở phòng số 508."
          },
          {
            "zh": "一千零五十块。",
            "py": "Yìqiān líng wǔshí kuài.",
            "vi": "Một nghìn không trăm năm mươi đồng."
          },
          {
            "zh": "他的号码是八八零六。",
            "py": "Tā de hàomǎ shì bā bā líng liù.",
            "vi": "Số của anh ấy là 8806."
          }
        ]
      },
      {
        "zh": "手机",
        "py": "shǒujī",
        "type": "Danh từ",
        "vi": "điện thoại di động",
        "ex": [
          {
            "zh": "他的手机号码是多少？",
            "py": "Tā de shǒujī hàomǎ shì duōshǎo?",
            "vi": "Số điện thoại di động của anh ấy là bao nhiêu?"
          },
          {
            "zh": "我的手机没有电了。",
            "py": "Wǒ de shǒujī méiyǒu diàn le.",
            "vi": "Điện thoại của tôi hết pin rồi."
          },
          {
            "zh": "你在玩手机吗？",
            "py": "Nǐ zài wán shǒujī ma?",
            "vi": "Bạn đang chơi điện thoại à?"
          },
          {
            "zh": "这是我的手机。",
            "py": "Zhè shì wǒ de shǒujī.",
            "vi": "Đây là điện thoại di động của tôi."
          },
          {
            "zh": "我的手机在办公室。",
            "py": "Wǒ de shǒujī zài bàngōngshì.",
            "vi": "Điện thoại di động của tôi ở văn phòng."
          },
          {
            "zh": "我的手机很旧了。",
            "py": "Wǒ de shǒujī hěn jiù le.",
            "vi": "Điện thoại của tôi cũ lắm rồi."
          },
          {
            "zh": "你的手机是什么颜色的？",
            "py": "Nǐ de shǒujī shì shénme yánsè de?",
            "vi": "Điện thoại của bạn màu gì?"
          },
          {
            "zh": "这个手机多少钱？",
            "py": "Zhège shǒujī duōshao qián?",
            "vi": "Chiếc điện thoại này bao nhiêu tiền?"
          },
          {
            "zh": "我想买一个新手机。",
            "py": "Wǒ xiǎng mǎi yí ge xīn shǒujī.",
            "vi": "Tôi muốn mua một chiếc điện thoại mới."
          },
          {
            "zh": "开车不要看手机。",
            "py": "Kāichē búyào kàn shǒujī.",
            "vi": "Lái xe đừng nhìn điện thoại."
          }
        ]
      },
      {
        "zh": "请问",
        "py": "qǐngwèn",
        "type": "Cụm từ",
        "vi": "xin hỏi, cho tôi hỏi",
        "ex": [
          {
            "zh": "请问，这是办公室吗？",
            "py": "Qǐngwèn, zhè shì bàngōngshì ma?",
            "vi": "Xin hỏi, đây có phải văn phòng không?"
          },
          {
            "zh": "请问，王老师在吗？",
            "py": "Qǐngwèn, Wáng lǎoshī zài ma?",
            "vi": "Xin hỏi, thầy Vương có ở đó không?"
          },
          {
            "zh": "请问，你住哪儿？",
            "py": "Qǐngwèn, nǐ zhù nǎr?",
            "vi": "Cho tôi hỏi, bạn ở đâu?"
          },
          {
            "zh": "请问，您的房间号码是多少？",
            "py": "Qǐngwèn, nín de fángjiān hàomǎ shì duōshao?",
            "vi": "Xin hỏi, số phòng của ngài là bao nhiêu?"
          },
          {
            "zh": "请问，他在办公室吗？",
            "py": "Qǐngwèn, tā zài bàngōngshì ma?",
            "vi": "Xin hỏi, anh ấy có ở văn phòng không?"
          },
          {
            "zh": "请问，这儿卖咖啡吗？",
            "py": "Qǐngwèn, zhèr mài kāfēi ma?",
            "vi": "Xin hỏi, ở đây có bán cà phê không?"
          },
          {
            "zh": "请问，吴先生住几号房间？",
            "py": "Qǐngwèn, Wú xiānsheng zhù jǐ hào fángjiān?",
            "vi": "Xin hỏi, ông Ngô ở phòng số mấy?"
          },
          {
            "zh": "请问，商场在几楼？",
            "py": "Qǐngwèn, shāngchǎng zài jǐ lóu?",
            "vi": "Xin hỏi, trung tâm thương mại ở tầng mấy?"
          },
          {
            "zh": "请问，您是秘书吗？",
            "py": "Qǐngwèn, nín shì mìshū ma?",
            "vi": "Xin hỏi, chị là thư ký phải không?"
          },
          {
            "zh": "请问，图书馆几点开门？",
            "py": "Qǐngwèn, túshūguǎn jǐ diǎn kāimén?",
            "vi": "Xin hỏi, thư viện mấy giờ mở cửa?"
          }
        ]
      },
      {
        "zh": "您",
        "py": "nín",
        "type": "Đại từ",
        "vi": "ngài, ông/bà (kính ngữ của 你)",
        "ex": [
          {
            "zh": "老师，您好！",
            "py": "Lǎoshī, nín hǎo!",
            "vi": "Thưa thầy/cô, kính chào!"
          },
          {
            "zh": "您知道他的电话号码吗？",
            "py": "Nín zhīdào tā de diànhuà hàomǎ ma?",
            "vi": "Ngài có biết số điện thoại của anh ấy không?"
          },
          {
            "zh": "您要买什么？",
            "py": "Nín yào mǎi shénme?",
            "vi": "Ngài muốn mua gì?"
          },
          {
            "zh": "您找谁？",
            "py": "Nín zhǎo shéi?",
            "vi": "Ngài tìm ai ạ?"
          },
          {
            "zh": "您住哪个酒店？",
            "py": "Nín zhù nǎge jiǔdiàn?",
            "vi": "Ngài ở khách sạn nào?"
          },
          {
            "zh": "您要几个包子？",
            "py": "Nín yào jǐ ge bāozi?",
            "vi": "Ngài muốn mấy cái bánh bao?"
          },
          {
            "zh": "您是老师吗？",
            "py": "Nín shì lǎoshī ma?",
            "vi": "Ngài là giáo viên phải không?"
          },
          {
            "zh": "您的箱子很重。",
            "py": "Nín de xiāngzi hěn zhòng.",
            "vi": "Vali của ngài rất nặng."
          },
          {
            "zh": "您喝咖啡吗？",
            "py": "Nín hē kāfēi ma?",
            "vi": "Ngài có uống cà phê không?"
          },
          {
            "zh": "我给您介绍一下儿。",
            "py": "Wǒ gěi nín jièshào yíxiàr.",
            "vi": "Để tôi giới thiệu với ngài một chút."
          }
        ]
      },
      {
        "zh": "现在",
        "py": "xiànzài",
        "vi": "bây giờ, hiện tại",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "现在我住在河内。",
            "py": "Xiànzài wǒ zhù zài Hénèi.",
            "vi": "Bây giờ tôi sống ở Hà Nội."
          },
          {
            "zh": "他现在在办公室。",
            "py": "Tā xiànzài zài bàngōngshì.",
            "vi": "Anh ấy hiện đang ở văn phòng."
          },
          {
            "zh": "现在你忙吗？",
            "py": "Xiànzài nǐ máng ma?",
            "vi": "Bây giờ bạn có bận không?"
          },
          {
            "zh": "我现在住酒店。",
            "py": "Wǒ xiànzài zhù jiǔdiàn.",
            "vi": "Bây giờ tôi ở khách sạn."
          },
          {
            "zh": "现在是星期几？",
            "py": "Xiànzài shì xīngqī jǐ?",
            "vi": "Bây giờ là thứ mấy?"
          },
          {
            "zh": "现在几点了？",
            "py": "Xiànzài jǐ diǎn le?",
            "vi": "Bây giờ mấy giờ rồi?"
          },
          {
            "zh": "现在银行开门吗？",
            "py": "Xiànzài yínháng kāimén ma?",
            "vi": "Bây giờ ngân hàng có mở cửa không?"
          },
          {
            "zh": "他现在在北京工作。",
            "py": "Tā xiànzài zài Běijīng gōngzuò.",
            "vi": "Hiện giờ anh ấy làm việc ở Bắc Kinh."
          },
          {
            "zh": "现在我们去吃饭吧。",
            "py": "Xiànzài wǒmen qù chīfàn ba.",
            "vi": "Bây giờ chúng ta đi ăn cơm thôi."
          },
          {
            "zh": "现在的手机很贵。",
            "py": "Xiànzài de shǒujī hěn guì.",
            "vi": "Điện thoại bây giờ rất đắt."
          }
        ]
      },
      {
        "zh": "酒店",
        "py": "jiǔdiàn",
        "vi": "khách sạn",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "你住哪个酒店？",
            "py": "Nǐ zhù nǎge jiǔdiàn?",
            "vi": "Bạn ở khách sạn nào?"
          },
          {
            "zh": "这个酒店很大。",
            "py": "Zhège jiǔdiàn hěn dà.",
            "vi": "Khách sạn này rất to."
          },
          {
            "zh": "酒店在这个市。",
            "py": "Jiǔdiàn zài zhège shì.",
            "vi": "Khách sạn ở thành phố này."
          },
          {
            "zh": "他住在酒店的三楼。",
            "py": "Tā zhù zài jiǔdiàn de sān lóu.",
            "vi": "Anh ấy ở tầng ba của khách sạn."
          },
          {
            "zh": "这家酒店的电话号码是多少？",
            "py": "Zhè jiā jiǔdiàn de diànhuà hàomǎ shì duōshao?",
            "vi": "Số điện thoại của khách sạn này là bao nhiêu?"
          },
          {
            "zh": "这家酒店在人民路。",
            "py": "Zhè jiā jiǔdiàn zài Rénmín Lù.",
            "vi": "Khách sạn này ở đường Nhân Dân."
          },
          {
            "zh": "酒店的房间很贵。",
            "py": "Jiǔdiàn de fángjiān hěn guì.",
            "vi": "Phòng khách sạn rất đắt."
          },
          {
            "zh": "酒店有咖啡吗？",
            "py": "Jiǔdiàn yǒu kāfēi ma?",
            "vi": "Khách sạn có cà phê không?"
          },
          {
            "zh": "他在酒店工作。",
            "py": "Tā zài jiǔdiàn gōngzuò.",
            "vi": "Anh ấy làm việc ở khách sạn."
          },
          {
            "zh": "我想找一家便宜的酒店。",
            "py": "Wǒ xiǎng zhǎo yì jiā piányi de jiǔdiàn.",
            "vi": "Tôi muốn tìm một khách sạn rẻ."
          }
        ]
      },
      {
        "zh": "省",
        "py": "shěng",
        "vi": "tỉnh",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我家在清化省。",
            "py": "Wǒ jiā zài Qīnghuà shěng.",
            "vi": "Nhà tôi ở tỉnh Thanh Hóa."
          },
          {
            "zh": "我不知道这个省。",
            "py": "Wǒ bù zhīdào zhège shěng.",
            "vi": "Tôi không biết tỉnh này."
          },
          {
            "zh": "这个省很大。",
            "py": "Zhège shěng hěn dà.",
            "vi": "Tỉnh này rất rộng."
          },
          {
            "zh": "他住在哪个省？",
            "py": "Tā zhù zài nǎge shěng?",
            "vi": "Anh ấy sống ở tỉnh nào?"
          },
          {
            "zh": "越南有很多省。",
            "py": "Yuènán yǒu hěn duō shěng.",
            "vi": "Việt Nam có rất nhiều tỉnh."
          },
          {
            "zh": "河内不是省，是市。",
            "py": "Hénèi bú shì shěng, shì shì.",
            "vi": "Hà Nội không phải tỉnh, là thành phố."
          },
          {
            "zh": "你是哪个省的人？",
            "py": "Nǐ shì nǎge shěng de rén?",
            "vi": "Bạn là người tỉnh nào?"
          },
          {
            "zh": "中国有很多省。",
            "py": "Zhōngguó yǒu hěn duō shěng.",
            "vi": "Trung Quốc có rất nhiều tỉnh."
          },
          {
            "zh": "我爷爷奶奶住在别的省。",
            "py": "Wǒ yéye nǎinai zhù zài biéde shěng.",
            "vi": "Ông bà nội tôi sống ở tỉnh khác."
          },
          {
            "zh": "这个省的水果很便宜。",
            "py": "Zhège shěng de shuǐguǒ hěn piányi.",
            "vi": "Hoa quả của tỉnh này rất rẻ."
          }
        ]
      },
      {
        "zh": "市",
        "py": "shì",
        "vi": "thành phố",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我住在清化市。",
            "py": "Wǒ zhù zài Qīnghuà shì.",
            "vi": "Tôi sống ở thành phố Thanh Hóa."
          },
          {
            "zh": "河内是一个市。",
            "py": "Hénèi shì yí gè shì.",
            "vi": "Hà Nội là một thành phố."
          },
          {
            "zh": "这个市很大。",
            "py": "Zhège shì hěn dà.",
            "vi": "Thành phố này rất lớn."
          },
          {
            "zh": "他住在这个市。",
            "py": "Tā zhù zài zhège shì.",
            "vi": "Anh ấy sống ở thành phố này."
          },
          {
            "zh": "你知道这个市吗？",
            "py": "Nǐ zhīdào zhège shì ma?",
            "vi": "Bạn có biết thành phố này không?"
          },
          {
            "zh": "北京市很大。",
            "py": "Běijīng Shì hěn dà.",
            "vi": "Thành phố Bắc Kinh rất lớn."
          },
          {
            "zh": "你住在哪个市？",
            "py": "Nǐ zhù zài nǎge shì?",
            "vi": "Bạn sống ở thành phố nào?"
          },
          {
            "zh": "河内市有很多大学。",
            "py": "Hénèi Shì yǒu hěn duō dàxué.",
            "vi": "Thành phố Hà Nội có nhiều trường đại học."
          },
          {
            "zh": "这个市有地铁吗？",
            "py": "Zhège shì yǒu dìtiě ma?",
            "vi": "Thành phố này có tàu điện ngầm không?"
          },
          {
            "zh": "我们公司在市里。",
            "py": "Wǒmen gōngsī zài shì lǐ.",
            "vi": "Công ty chúng tôi ở trong thành phố."
          }
        ]
      },
      {
        "zh": "县",
        "py": "xiàn",
        "vi": "huyện",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我家在东山县。",
            "py": "Wǒ jiā zài Dōngshān xiàn.",
            "vi": "Nhà tôi ở huyện Đông Sơn."
          },
          {
            "zh": "这是一个县。",
            "py": "Zhè shì yí gè xiàn.",
            "vi": "Đây là một huyện."
          },
          {
            "zh": "他住在这个县。",
            "py": "Tā zhù zài zhège xiàn.",
            "vi": "Anh ấy sống ở huyện này."
          },
          {
            "zh": "这个县很小。",
            "py": "Zhège xiàn hěn xiǎo.",
            "vi": "Huyện này rất nhỏ."
          },
          {
            "zh": "你家在哪个县？",
            "py": "Nǐ jiā zài nǎge xiàn?",
            "vi": "Nhà bạn ở huyện nào?"
          },
          {
            "zh": "我奶奶住在县里。",
            "py": "Wǒ nǎinai zhù zài xiàn lǐ.",
            "vi": "Bà nội tôi sống ở huyện."
          },
          {
            "zh": "这个县有一个医院。",
            "py": "Zhège xiàn yǒu yí ge yīyuàn.",
            "vi": "Huyện này có một bệnh viện."
          },
          {
            "zh": "县里的东西很便宜。",
            "py": "Xiàn lǐ de dōngxi hěn piányi.",
            "vi": "Đồ ở huyện rất rẻ."
          },
          {
            "zh": "他是县医院的医生。",
            "py": "Tā shì xiàn yīyuàn de yīshēng.",
            "vi": "Anh ấy là bác sĩ bệnh viện huyện."
          },
          {
            "zh": "这个省有多少个县？",
            "py": "Zhège shěng yǒu duōshao ge xiàn?",
            "vi": "Tỉnh này có bao nhiêu huyện?"
          }
        ]
      },
      {
        "zh": "路",
        "py": "lù",
        "vi": "đường (giao thông)",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "这是什么路？",
            "py": "Zhè shì shénme lù?",
            "vi": "Đây là đường gì?"
          },
          {
            "zh": "路上有酒店。",
            "py": "Lù shang yǒu jiǔdiàn.",
            "vi": "Trên đường có khách sạn."
          },
          {
            "zh": "这是去图书馆的路。",
            "py": "Zhè shì qù túshūguǎn de lù.",
            "vi": "Đây là đường đến thư viện."
          },
          {
            "zh": "他不知道路。",
            "py": "Tā bù zhīdào lù.",
            "vi": "Anh ấy không biết đường."
          },
          {
            "zh": "这是我家的路。",
            "py": "Zhè shì wǒ jiā de lù.",
            "vi": "Đây là con đường về nhà tôi."
          },
          {
            "zh": "银行在哪条路上？",
            "py": "Yínháng zài nǎ tiáo lù shang?",
            "vi": "Ngân hàng ở trên đường nào?"
          },
          {
            "zh": "这条路车很多。",
            "py": "Zhè tiáo lù chē hěn duō.",
            "vi": "Con đường này rất nhiều xe."
          },
          {
            "zh": "路上有很多摩托车。",
            "py": "Lù shang yǒu hěn duō mótuōchē.",
            "vi": "Trên đường có rất nhiều xe máy."
          },
          {
            "zh": "我家在北京路八号。",
            "py": "Wǒ jiā zài Běijīng Lù bā hào.",
            "vi": "Nhà tôi ở số 8 đường Bắc Kinh."
          },
          {
            "zh": "下雨了，路上人很少。",
            "py": "Xià yǔ le, lù shang rén hěn shǎo.",
            "vi": "Mưa rồi, trên đường rất ít người."
          }
        ]
      },
      {
        "zh": "街",
        "py": "jiē",
        "vi": "phố",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "这是什么街？",
            "py": "Zhè shì shénme jiē?",
            "vi": "Đây là phố gì?"
          },
          {
            "zh": "他住在这条街。",
            "py": "Tā zhù zài zhè tiáo jiē.",
            "vi": "Anh ấy ở phố này."
          },
          {
            "zh": "街上有很多人。",
            "py": "Jiē shang yǒu hěn duō rén.",
            "vi": "Trên phố có rất nhiều người."
          },
          {
            "zh": "银行在这条街。",
            "py": "Yínháng zài zhè tiáo jiē.",
            "vi": "Ngân hàng ở phố này."
          },
          {
            "zh": "他在街上找工作。",
            "py": "Tā zài jiē shang zhǎo gōngzuò.",
            "vi": "Anh ấy tìm việc trên phố."
          },
          {
            "zh": "这条街有很多商店。",
            "py": "Zhè tiáo jiē yǒu hěn duō shāngdiàn.",
            "vi": "Con phố này có nhiều cửa hàng."
          },
          {
            "zh": "我们去街上买东西吧。",
            "py": "Wǒmen qù jiē shang mǎi dōngxi ba.",
            "vi": "Chúng ta ra phố mua đồ đi."
          },
          {
            "zh": "这条街叫什么名字？",
            "py": "Zhè tiáo jiē jiào shénme míngzi?",
            "vi": "Con phố này tên là gì?"
          },
          {
            "zh": "河内的街很有意思。",
            "py": "Hénèi de jiē hěn yǒu yìsi.",
            "vi": "Phố phường Hà Nội rất thú vị."
          },
          {
            "zh": "晚上街上人很多。",
            "py": "Wǎnshang jiē shang rén hěn duō.",
            "vi": "Buổi tối trên phố rất đông người."
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 13 (b14): 号码与介绍 – Số điện thoại & Giới thiệu",
    "words": [
      {
        "zh": "秘书",
        "py": "mìshū",
        "type": "Danh từ",
        "vi": "thư ký",
        "ex": [
          {
            "zh": "她是我的秘书。",
            "py": "Tā shì wǒ de mìshū.",
            "vi": "Cô ấy là thư ký của tôi."
          },
          {
            "zh": "我是一家中国公司的秘书。",
            "py": "Wǒ shì yī jiā Zhōngguó gōngsī de mìshū.",
            "vi": "Tôi là thư ký của một công ty Trung Quốc."
          },
          {
            "zh": "秘书帮我安排会议。",
            "py": "Mìshū bāng wǒ ānpái huìyì.",
            "vi": "Thư ký giúp tôi sắp xếp cuộc họp."
          },
          {
            "zh": "她想当秘书。",
            "py": "Tā xiǎng dāng mìshū.",
            "vi": "Cô ấy muốn làm thư ký."
          },
          {
            "zh": "她是秘书。",
            "py": "Tā shì mìshū.",
            "vi": "Cô ấy là thư ký."
          },
          {
            "zh": "秘书在办公室吗？",
            "py": "Mìshū zài bàngōngshì ma?",
            "vi": "Thư ký có ở văn phòng không?"
          },
          {
            "zh": "经理的秘书姓吴。",
            "py": "Jīnglǐ de mìshū xìng Wú.",
            "vi": "Thư ký của giám đốc họ Ngô."
          },
          {
            "zh": "秘书给我们介绍了公司。",
            "py": "Mìshū gěi wǒmen jièshàole gōngsī.",
            "vi": "Thư ký giới thiệu công ty cho chúng tôi."
          },
          {
            "zh": "我姐姐是公司秘书。",
            "py": "Wǒ jiějie shì gōngsī mìshū.",
            "vi": "Chị tôi là thư ký công ty."
          },
          {
            "zh": "请问，您是校长的秘书吗？",
            "py": "Qǐngwèn, nín shì xiàozhǎng de mìshū ma?",
            "vi": "Xin hỏi, chị là thư ký của hiệu trưởng phải không?"
          }
        ]
      },
      {
        "zh": "先",
        "py": "xiān",
        "type": "Phó từ",
        "vi": "trước, trước tiên (先 + Động từ)",
        "ex": [
          {
            "zh": "我先吃啊。",
            "py": "Wǒ xiān chī a.",
            "vi": "Tôi ăn trước nhé."
          },
          {
            "zh": "你先去学校吧。",
            "py": "Nǐ xiān qù xuéxiào ba.",
            "vi": "Bạn đến trường trước đi."
          },
          {
            "zh": "我先介绍一下。",
            "py": "Wǒ xiān jièshào yīxià.",
            "vi": "Để tôi giới thiệu trước."
          },
          {
            "zh": "你先说，我后说。",
            "py": "Nǐ xiān shuō, wǒ hòu shuō.",
            "vi": "Bạn nói trước, tôi nói sau."
          },
          {
            "zh": "我先去办公室。",
            "py": "Wǒ xiān qù bàngōngshì.",
            "vi": "Tôi đi đến văn phòng trước."
          },
          {
            "zh": "你先坐一会儿吧。",
            "py": "Nǐ xiān zuò yíhuìr ba.",
            "vi": "Bạn ngồi một lát trước đi."
          },
          {
            "zh": "我们先吃饭，再去商场。",
            "py": "Wǒmen xiān chīfàn, zài qù shāngchǎng.",
            "vi": "Chúng ta ăn cơm trước, rồi đi trung tâm thương mại."
          },
          {
            "zh": "先喝点儿水吧。",
            "py": "Xiān hē diǎnr shuǐ ba.",
            "vi": "Uống chút nước trước đi."
          },
          {
            "zh": "你先说吧。",
            "py": "Nǐ xiān shuō ba.",
            "vi": "Bạn nói trước đi."
          },
          {
            "zh": "我先去银行取钱。",
            "py": "Wǒ xiān qù yínháng qǔ qián.",
            "vi": "Tôi đi ngân hàng rút tiền trước."
          }
        ]
      },
      {
        "zh": "介绍",
        "py": "jièshào",
        "type": "Động từ",
        "vi": "giới thiệu",
        "ex": [
          {
            "zh": "我先介绍一下我自己。",
            "py": "Wǒ xiān jièshào yīxià wǒ zìjǐ.",
            "vi": "Để tôi tự giới thiệu bản thân trước."
          },
          {
            "zh": "他给我介绍了这份工作。",
            "py": "Tā gěi wǒ jièshào le zhè fèn gōngzuò.",
            "vi": "Anh ấy đã giới thiệu công việc này cho tôi."
          },
          {
            "zh": "这是他给我介绍的工作。",
            "py": "Zhè shì tā gěi wǒ jièshào de gōngzuò.",
            "vi": "Đây là công việc anh ấy giới thiệu cho tôi."
          },
          {
            "zh": "请介绍一下你自己。",
            "py": "Qǐng jièshào yīxià nǐ zìjǐ.",
            "vi": "Xin hãy tự giới thiệu bản thân bạn."
          },
          {
            "zh": "他介绍他的公司。",
            "py": "Tā jièshào tā de gōngsī.",
            "vi": "Anh ấy giới thiệu công ty của mình."
          },
          {
            "zh": "我给你介绍一个朋友。",
            "py": "Wǒ gěi nǐ jièshào yí ge péngyou.",
            "vi": "Tôi giới thiệu cho bạn một người bạn."
          },
          {
            "zh": "请你介绍一下儿你的公司。",
            "py": "Qǐng nǐ jièshào yíxiàr nǐ de gōngsī.",
            "vi": "Mời bạn giới thiệu một chút về công ty của bạn."
          },
          {
            "zh": "他给我介绍了一家酒店。",
            "py": "Tā gěi wǒ jièshàole yì jiā jiǔdiàn.",
            "vi": "Anh ấy giới thiệu cho tôi một khách sạn."
          },
          {
            "zh": "我介绍一下儿，这是我老婆。",
            "py": "Wǒ jièshào yíxiàr, zhè shì wǒ lǎopó.",
            "vi": "Tôi xin giới thiệu, đây là vợ tôi."
          },
          {
            "zh": "谁给你介绍的工作？",
            "py": "Shéi gěi nǐ jièshào de gōngzuò?",
            "vi": "Ai giới thiệu công việc cho bạn?"
          }
        ]
      },
      {
        "zh": "号码",
        "py": "hàomǎ",
        "vi": "số, mã số",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "你的电话号码是多少？",
            "py": "Nǐ de diànhuà hàomǎ shì duōshao?",
            "vi": "Số điện thoại của bạn là bao nhiêu?"
          },
          {
            "zh": "秘书的号码是多少？",
            "py": "Mìshū de hàomǎ shì duōshao?",
            "vi": "Số của thư ký là bao nhiêu?"
          },
          {
            "zh": "这个号码是他的。",
            "py": "Zhège hàomǎ shì tā de.",
            "vi": "Số này là của anh ấy."
          },
          {
            "zh": "请先给我号码。",
            "py": "Qǐng xiān gěi wǒ hàomǎ.",
            "vi": "Xin hãy cho tôi số trước."
          },
          {
            "zh": "秘书知道他的号码。",
            "py": "Mìshū zhīdào tā de hàomǎ.",
            "vi": "Thư ký biết số của anh ấy."
          },
          {
            "zh": "你知道经理的号码吗？",
            "py": "Nǐ zhīdào jīnglǐ de hàomǎ ma?",
            "vi": "Bạn có biết số của giám đốc không?"
          },
          {
            "zh": "这个号码不是我的。",
            "py": "Zhège hàomǎ bú shì wǒ de.",
            "vi": "Số này không phải của tôi."
          },
          {
            "zh": "他换了号码。",
            "py": "Tā huànle hàomǎ.",
            "vi": "Anh ấy đã đổi số."
          },
          {
            "zh": "请写下你的号码。",
            "py": "Qǐng xiěxia nǐ de hàomǎ.",
            "vi": "Hãy viết lại số của bạn."
          },
          {
            "zh": "酒店的号码是多少？",
            "py": "Jiǔdiàn de hàomǎ shì duōshao?",
            "vi": "Số của khách sạn là bao nhiêu?"
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 14 (b15): 我们都是留学生 – Chúng ta đều là lưu học sinh",
    "words": [
      {
        "zh": "首先",
        "py": "shǒuxiān",
        "type": "Phó từ",
        "vi": "đầu tiên, trước tiên",
        "ex": [
          {
            "zh": "首先，欢迎大家！",
            "py": "Shǒuxiān, huānyíng dàjiā!",
            "vi": "Đầu tiên, chào mừng tất cả mọi người!"
          },
          {
            "zh": "首先我介绍一下自己。",
            "py": "Shǒuxiān wǒ jièshào yíxià zìjǐ.",
            "vi": "Trước tiên tôi tự giới thiệu bản thân."
          },
          {
            "zh": "首先，我们去银行。",
            "py": "Shǒuxiān, wǒmen qù yínháng.",
            "vi": "Trước tiên, chúng ta đến ngân hàng."
          },
          {
            "zh": "首先是校长介绍。",
            "py": "Shǒuxiān shì xiàozhǎng jièshào.",
            "vi": "Đầu tiên là hiệu trưởng giới thiệu."
          },
          {
            "zh": "首先，请坐。",
            "py": "Shǒuxiān, qǐng zuò.",
            "vi": "Trước hết, mời ngồi."
          },
          {
            "zh": "首先，我介绍一下儿我们公司。",
            "py": "Shǒuxiān, wǒ jièshào yíxiàr wǒmen gōngsī.",
            "vi": "Trước tiên, tôi xin giới thiệu một chút về công ty chúng tôi."
          },
          {
            "zh": "首先，谢谢大家！",
            "py": "Shǒuxiān, xièxie dàjiā!",
            "vi": "Trước hết, cảm ơn mọi người!"
          },
          {
            "zh": "首先，我们去酒店。",
            "py": "Shǒuxiān, wǒmen qù jiǔdiàn.",
            "vi": "Trước tiên, chúng ta đến khách sạn."
          },
          {
            "zh": "首先要学好发音。",
            "py": "Shǒuxiān yào xuéhǎo fāyīn.",
            "vi": "Trước tiên phải học tốt phát âm."
          },
          {
            "zh": "首先，请大家写名字。",
            "py": "Shǒuxiān, qǐng dàjiā xiě míngzi.",
            "vi": "Trước tiên, mời mọi người viết tên."
          }
        ]
      },
      {
        "zh": "一下儿",
        "py": "yíxiàr",
        "type": "Số lượng từ",
        "vi": "một chút, thử làm",
        "ex": [
          {
            "zh": "请等一下儿。",
            "py": "Qǐng děng yíxiàr.",
            "vi": "Xin đợi một chút."
          },
          {
            "zh": "你介绍一下儿吧。",
            "py": "Nǐ jièshào yíxiàr ba.",
            "vi": "Bạn giới thiệu một chút đi."
          },
          {
            "zh": "我想一下儿。",
            "py": "Wǒ xiǎng yíxiàr.",
            "vi": "Tôi nghĩ một chút."
          },
          {
            "zh": "请介绍一下儿。",
            "py": "Qǐng jièshào yíxiàr.",
            "vi": "Xin hãy giới thiệu một chút."
          },
          {
            "zh": "请您介绍一下儿。",
            "py": "Qǐng nín jièshào yíxiàr.",
            "vi": "Mời ngài giới thiệu một chút."
          },
          {
            "zh": "你看一下儿这本书。",
            "py": "Nǐ kàn yíxiàr zhè běn shū.",
            "vi": "Bạn xem quyển sách này một chút."
          },
          {
            "zh": "请你听一下儿。",
            "py": "Qǐng nǐ tīng yíxiàr.",
            "vi": "Mời bạn nghe một chút."
          },
          {
            "zh": "我们坐一下儿吧。",
            "py": "Wǒmen zuò yíxiàr ba.",
            "vi": "Chúng ta ngồi một chút đi."
          },
          {
            "zh": "请你写一下儿这个汉字。",
            "py": "Qǐng nǐ xiě yíxiàr zhège Hànzì.",
            "vi": "Mời bạn viết thử chữ Hán này."
          },
          {
            "zh": "我想看一下儿你的照片。",
            "py": "Wǒ xiǎng kàn yíxiàr nǐ de zhàopiàn.",
            "vi": "Tôi muốn xem ảnh của bạn một chút."
          }
        ]
      },
      {
        "zh": "位",
        "py": "wèi",
        "type": "Lượng từ",
        "vi": "vị (chỉ người, lịch sự)",
        "ex": [
          {
            "zh": "那位先生是律师。",
            "py": "Nà wèi xiānsheng shì lǜshī.",
            "vi": "Vị tiên sinh kia là luật sư."
          },
          {
            "zh": "一位老师",
            "py": "yī wèi lǎ oshī",
            "vi": "một vị giáo viên"
          },
          {
            "zh": "这位是我们的校长。",
            "py": "Zhè wèi shì wǒmen de xiàozhǎng.",
            "vi": "Đây là hiệu trưởng của chúng tôi."
          },
          {
            "zh": "这位是教授。",
            "py": "Zhè wèi shì jiàoshòu.",
            "vi": "Vị này là giáo sư."
          },
          {
            "zh": "那位是校长。",
            "py": "Nà wèi shì xiàozhǎng.",
            "vi": "Vị đó là hiệu trưởng."
          },
          {
            "zh": "这位是我们的新老师。",
            "py": "Zhè wèi shì wǒmen de xīn lǎoshī.",
            "vi": "Vị này là giáo viên mới của chúng tôi."
          },
          {
            "zh": "请问，您几位？",
            "py": "Qǐngwèn, nín jǐ wèi?",
            "vi": "Xin hỏi, quý khách đi mấy người?"
          },
          {
            "zh": "我们公司有三位经理。",
            "py": "Wǒmen gōngsī yǒu sān wèi jīnglǐ.",
            "vi": "Công ty chúng tôi có ba vị giám đốc."
          },
          {
            "zh": "这位小姐是哪国人？",
            "py": "Zhè wèi xiǎojie shì nǎ guó rén?",
            "vi": "Cô này là người nước nào?"
          },
          {
            "zh": "那两位是我的朋友。",
            "py": "Nà liǎng wèi shì wǒ de péngyou.",
            "vi": "Hai vị kia là bạn của tôi."
          }
        ]
      },
      {
        "zh": "教授",
        "py": "jiàoshòu",
        "type": "Danh từ",
        "vi": "giáo sư",
        "ex": [
          {
            "zh": "这位是王教授。",
            "py": "Zhè wèi shì Wáng jiàoshòu.",
            "vi": "Đây là giáo sư Vương."
          },
          {
            "zh": "那位教授经常去图书馆。",
            "py": "Nà wèi jiàoshòu jīngcháng qù túshūguǎn.",
            "vi": "Vị giáo sư đó thường xuyên đi thư viện."
          },
          {
            "zh": "王教授教汉语。",
            "py": "Wáng jiàoshòu jiāo Hànyǔ.",
            "vi": "Giáo sư Vương dạy tiếng Hán."
          },
          {
            "zh": "我们的教授很忙。",
            "py": "Wǒmen de jiàoshòu hěn máng.",
            "vi": "Giáo sư của chúng tôi rất bận."
          },
          {
            "zh": "教授欢迎留学生。",
            "py": "Jiàoshòu huānyíng liúxuéshēng.",
            "vi": "Giáo sư chào đón lưu học sinh."
          },
          {
            "zh": "吴教授在办公室吗？",
            "py": "Wú jiàoshòu zài bàngōngshì ma?",
            "vi": "Giáo sư Ngô có ở văn phòng không?"
          },
          {
            "zh": "这位教授是美国人。",
            "py": "Zhè wèi jiàoshòu shì Měiguó rén.",
            "vi": "Vị giáo sư này là người Mỹ."
          },
          {
            "zh": "我爸爸是大学教授。",
            "py": "Wǒ bàba shì dàxué jiàoshòu.",
            "vi": "Bố tôi là giáo sư đại học."
          },
          {
            "zh": "马教授的书很有意思。",
            "py": "Mǎ jiàoshòu de shū hěn yǒu yìsi.",
            "vi": "Sách của giáo sư Mã rất thú vị."
          },
          {
            "zh": "教授今天不在学校。",
            "py": "Jiàoshòu jīntiān bú zài xuéxiào.",
            "vi": "Hôm nay giáo sư không có ở trường."
          }
        ]
      },
      {
        "zh": "校长",
        "py": "xiàozhǎng",
        "type": "Danh từ",
        "vi": "hiệu trưởng",
        "ex": [
          {
            "zh": "这是我们学校的校长。",
            "py": "Zhè shì wǒmen xuéxiào de xiàozhǎng.",
            "vi": "Đây là hiệu trưởng trường chúng tôi."
          },
          {
            "zh": "马校长很好。",
            "py": "Mǎ xiàozhǎng hěn hǎo.",
            "vi": "Hiệu trưởng Mǎ rất tốt."
          },
          {
            "zh": "校长欢迎我们。",
            "py": "Xiàozhǎng huānyíng wǒmen.",
            "vi": "Hiệu trưởng chào đón chúng tôi."
          },
          {
            "zh": "他是我们学校的校长。",
            "py": "Tā shì wǒmen xuéxiào de xiàozhǎng.",
            "vi": "Ông ấy là hiệu trưởng trường chúng tôi."
          },
          {
            "zh": "校长经常来。",
            "py": "Xiàozhǎng jīngcháng lái.",
            "vi": "Hiệu trưởng thường xuyên đến."
          },
          {
            "zh": "校长的办公室在二楼。",
            "py": "Xiàozhǎng de bàngōngshì zài èr lóu.",
            "vi": "Văn phòng hiệu trưởng ở tầng hai."
          },
          {
            "zh": "我们校长姓吴。",
            "py": "Wǒmen xiàozhǎng xìng Wú.",
            "vi": "Hiệu trưởng của chúng tôi họ Ngô."
          },
          {
            "zh": "校长给我们介绍了学校。",
            "py": "Xiàozhǎng gěi wǒmen jièshàole xuéxiào.",
            "vi": "Hiệu trưởng giới thiệu trường cho chúng tôi."
          },
          {
            "zh": "校长很忙。",
            "py": "Xiàozhǎng hěn máng.",
            "vi": "Hiệu trưởng rất bận."
          },
          {
            "zh": "那位是新校长吗？",
            "py": "Nà wèi shì xīn xiàozhǎng ma?",
            "vi": "Vị kia là hiệu trưởng mới phải không?"
          }
        ]
      },
      {
        "zh": "欢迎",
        "py": "huānyíng",
        "type": "Động từ",
        "vi": "hoan nghênh, chào đón",
        "ex": [
          {
            "zh": "欢迎您，王教授！",
            "py": "Huānyíng nín, Wáng jiàoshòu!",
            "vi": "Hoan nghênh ngài, giáo sư Vương!"
          },
          {
            "zh": "欢迎光临！",
            "py": "Huānyíng guānglín!",
            "vi": "Hoan nghênh quý khách!"
          },
          {
            "zh": "欢迎来中国！",
            "py": "Huānyíng lái Zhōngguó!",
            "vi": "Chào mừng đến Trung Quốc!"
          },
          {
            "zh": "欢迎欢迎！",
            "py": "Huānyíng huānyíng!",
            "vi": "Chào mừng, chào mừng!"
          },
          {
            "zh": "老师欢迎留学生。",
            "py": "Lǎoshī huānyíng liúxuéshēng.",
            "vi": "Thầy/cô chào đón lưu học sinh."
          },
          {
            "zh": "欢迎你，新同学！",
            "py": "Huānyíng nǐ, xīn tóngxué!",
            "vi": "Chào mừng bạn, bạn học mới!"
          },
          {
            "zh": "欢迎吴经理！",
            "py": "Huānyíng Wú jīnglǐ!",
            "vi": "Hoan nghênh giám đốc Ngô!"
          },
          {
            "zh": "我们欢迎留学生。",
            "py": "Wǒmen huānyíng liúxuéshēng.",
            "vi": "Chúng tôi chào đón lưu học sinh."
          },
          {
            "zh": "欢迎您住我们的酒店。",
            "py": "Huānyíng nín zhù wǒmen de jiǔdiàn.",
            "vi": "Chào mừng ngài đến ở khách sạn của chúng tôi."
          },
          {
            "zh": "欢迎你们去越南旅游。",
            "py": "Huānyíng nǐmen qù Yuènán lǚyóu.",
            "vi": "Hoan nghênh các bạn đến Việt Nam du lịch."
          }
        ]
      },
      {
        "zh": "留学生",
        "py": "liúxuéshēng",
        "type": "Danh từ",
        "vi": "lưu học sinh, du học sinh",
        "ex": [
          {
            "zh": "我是留学生。",
            "py": "Wǒ shì liúxiéshēng.",
            "vi": "Tôi là lưu học sinh."
          },
          {
            "zh": "我们都是留学生。",
            "py": "Wǒmen dōu shì liúxiéshēng.",
            "vi": "Chúng ta đều là lưu học sinh."
          },
          {
            "zh": "你们中国留学生经常去哪里？",
            "py": "Nǐmen Zhōngguó liúxiéshēng jīngcháng qù nǎ lǐ?",
            "vi": "Các bạn lưu học sinh Trung Quốc thường hay đi đâu?"
          },
          {
            "zh": "这些留学生都学习汉语。",
            "py": "Zhèxiē liúxuéshēng dōu xuéxí Hànyǔ.",
            "vi": "Những lưu học sinh này đều học tiếng Trung."
          },
          {
            "zh": "留学生很多。",
            "py": "Liúxuéshēng hěn duō.",
            "vi": "Lưu học sinh có rất nhiều."
          },
          {
            "zh": "我们班的留学生都很好。",
            "py": "Wǒmen bān de liúxuéshēng dōu hěn hǎo.",
            "vi": "Các lưu học sinh lớp chúng tôi đều rất tốt."
          },
          {
            "zh": "那个留学生是韩国人。",
            "py": "Nàge liúxuéshēng shì Hánguó rén.",
            "vi": "Lưu học sinh kia là người Hàn Quốc."
          },
          {
            "zh": "留学生食堂在哪儿？",
            "py": "Liúxuéshēng shítáng zài nǎr?",
            "vi": "Nhà ăn lưu học sinh ở đâu?"
          },
          {
            "zh": "越南留学生喜欢喝咖啡。",
            "py": "Yuènán liúxuéshēng xǐhuan hē kāfēi.",
            "vi": "Lưu học sinh Việt Nam thích uống cà phê."
          },
          {
            "zh": "很多留学生住在学校里。",
            "py": "Hěn duō liúxuéshēng zhù zài xuéxiào lǐ.",
            "vi": "Nhiều lưu học sinh sống trong trường."
          }
        ]
      },
      {
        "zh": "留学",
        "py": "liúxué",
        "type": "Động từ",
        "vi": "du học",
        "ex": [
          {
            "zh": "我去中国留学。",
            "py": "Wǒ qù Zhōngguó liúxié.",
            "vi": "Tôi đi du học ở Trung Quốc."
          },
          {
            "zh": "她去美国留学了。",
            "py": "Tā qù Měi guó liúxié le.",
            "vi": "Cô ấy đi du học ở Mỹ rồi."
          },
          {
            "zh": "他去中国留学。",
            "py": "Tā qù Zhōngguó liúxué.",
            "vi": "Anh ấy đi Trung Quốc du học."
          },
          {
            "zh": "她也留学。",
            "py": "Tā yě liúxué.",
            "vi": "Cô ấy cũng đi du học."
          },
          {
            "zh": "他在越南留学。",
            "py": "Tā zài Yuènán liúxué.",
            "vi": "Anh ấy du học ở Việt Nam."
          },
          {
            "zh": "你想去哪个国家留学？",
            "py": "Nǐ xiǎng qù nǎge guójiā liúxué?",
            "vi": "Bạn muốn đi du học nước nào?"
          },
          {
            "zh": "我姐姐在英国留学。",
            "py": "Wǒ jiějie zài Yīngguó liúxué.",
            "vi": "Chị tôi du học ở Anh."
          },
          {
            "zh": "留学很有意思。",
            "py": "Liúxué hěn yǒu yìsi.",
            "vi": "Du học rất thú vị."
          },
          {
            "zh": "他留学回国了。",
            "py": "Tā liúxué huí guó le.",
            "vi": "Anh ấy du học xong về nước rồi."
          },
          {
            "zh": "去中国留学要学好汉语。",
            "py": "Qù Zhōngguó liúxué yào xuéhǎo Hànyǔ.",
            "vi": "Đi du học Trung Quốc phải học tốt tiếng Trung."
          }
        ]
      },
      {
        "zh": "学生",
        "py": "xuésheng",
        "type": "Danh từ",
        "vi": "học sinh, sinh viên",
        "ex": [
          {
            "zh": "你是学生吗？",
            "py": "Nǐ shì xuésheng ma?",
            "vi": "Bạn có phải là học sinh không?"
          },
          {
            "zh": "我是学生，不是老师。",
            "py": "Wǒ shì xuésheng, bú shì lǎ oshī.",
            "vi": "Tôi là học sinh, không phải giáo viên."
          },
          {
            "zh": "他们都是中国学生。",
            "py": "Tāmen dōu shì Zhōngguó xuésheng.",
            "vi": "Họ đều là học sinh Trung Quốc."
          },
          {
            "zh": "他是好学生。",
            "py": "Tā shì hǎo xuésheng.",
            "vi": "Anh ấy là học sinh giỏi."
          },
          {
            "zh": "学生们都很忙。",
            "py": "Xuéshengmen dōu hěn máng.",
            "vi": "Các học sinh đều rất bận."
          },
          {
            "zh": "这个学生很好。",
            "py": "Zhège xuésheng hěn hǎo.",
            "vi": "Học sinh này rất ngoan."
          },
          {
            "zh": "学生们在食堂吃饭。",
            "py": "Xuéshengmen zài shítáng chīfàn.",
            "vi": "Các học sinh đang ăn ở nhà ăn."
          },
          {
            "zh": "她是北京大学的学生。",
            "py": "Tā shì Běijīng Dàxué de xuésheng.",
            "vi": "Cô ấy là sinh viên Đại học Bắc Kinh."
          },
          {
            "zh": "老师和学生都很忙。",
            "py": "Lǎoshī hé xuésheng dōu hěn máng.",
            "vi": "Thầy và trò đều rất bận."
          },
          {
            "zh": "那个学生叫什么名字？",
            "py": "Nàge xuésheng jiào shénme míngzi?",
            "vi": "Học sinh kia tên là gì?"
          }
        ]
      },
      {
        "zh": "也",
        "py": "yě",
        "type": "Phó từ",
        "vi": "cũng",
        "ex": [
          {
            "zh": "她也是留学生。",
            "py": "Tā yě shì liúxiéshēng.",
            "vi": "Cô ấy cũng là lưu học sinh."
          },
          {
            "zh": "我也是越南人。",
            "py": "Wǒ yě shì Yuènán rén.",
            "vi": "Tôi cũng là người Việt Nam."
          },
          {
            "zh": "你也是中国人吗？",
            "py": "Nǐ yě shì Zhōngguó rén ma?",
            "vi": "Bạn cũng là người Trung Quốc à?"
          },
          {
            "zh": "我也是学生。",
            "py": "Wǒ yě shì xuésheng.",
            "vi": "Tôi cũng là học sinh."
          },
          {
            "zh": "她也姓吴。",
            "py": "Tā yě xìng Wú.",
            "vi": "Cô ấy cũng họ Ngô."
          },
          {
            "zh": "我也想去北京。",
            "py": "Wǒ yě xiǎng qù Běijīng.",
            "vi": "Tôi cũng muốn đi Bắc Kinh."
          },
          {
            "zh": "他也喜欢喝咖啡。",
            "py": "Tā yě xǐhuan hē kāfēi.",
            "vi": "Anh ấy cũng thích uống cà phê."
          },
          {
            "zh": "今天也很冷。",
            "py": "Jīntiān yě hěn lěng.",
            "vi": "Hôm nay cũng rất lạnh."
          },
          {
            "zh": "我妹妹也在银行工作。",
            "py": "Wǒ mèimei yě zài yínháng gōngzuò.",
            "vi": "Em gái tôi cũng làm việc ở ngân hàng."
          },
          {
            "zh": "你也是工程师吗？",
            "py": "Nǐ yě shì gōngchéngshī ma?",
            "vi": "Bạn cũng là kỹ sư à?"
          }
        ]
      },
      {
        "zh": "都",
        "py": "dōu",
        "type": "Phó từ",
        "vi": "đều",
        "ex": [
          {
            "zh": "我们俩都是记者。",
            "py": "Wǒmen liǎ dōu shì jìzhě.",
            "vi": "Hai chúng tôi đều là phóng viên."
          },
          {
            "zh": "大家都很忙。",
            "py": "Dàjiā dōu hěn máng.",
            "vi": "Mọi người đều rất bận."
          },
          {
            "zh": "爸爸妈妈都很好。",
            "py": "Bàba māma dōu hěn hǎo.",
            "vi": "Bố mẹ đều rất khỏe."
          },
          {
            "zh": "他们都是留学生。",
            "py": "Tāmen dōu shì liúxuéshēng.",
            "vi": "Họ đều là lưu học sinh."
          },
          {
            "zh": "大家都很好。",
            "py": "Dàjiā dōu hěn hǎo.",
            "vi": "Mọi người đều khỏe."
          },
          {
            "zh": "我们都喜欢吃饺子。",
            "py": "Wǒmen dōu xǐhuan chī jiǎozi.",
            "vi": "Chúng tôi đều thích ăn sủi cảo."
          },
          {
            "zh": "这些衣服都是我的。",
            "py": "Zhèxiē yīfu dōu shì wǒ de.",
            "vi": "Những bộ quần áo này đều là của tôi."
          },
          {
            "zh": "他们都去上班了。",
            "py": "Tāmen dōu qù shàngbān le.",
            "vi": "Họ đều đi làm rồi."
          },
          {
            "zh": "同学们都在图书馆。",
            "py": "Tóngxuémen dōu zài túshūguǎn.",
            "vi": "Các bạn học đều ở thư viện."
          },
          {
            "zh": "我爸爸妈妈都是医生。",
            "py": "Wǒ bàba māma dōu shì yīshēng.",
            "vi": "Bố mẹ tôi đều là bác sĩ."
          }
        ]
      },
      {
        "zh": "俩",
        "py": "liǎ",
        "type": "Số từ",
        "vi": "hai (người), cả hai",
        "ex": [
          {
            "zh": "他们俩都是留学生。",
            "py": "Tāmen liǎ dōu shì liúxiéshēng.",
            "vi": "Cả hai họ đều là lưu học sinh."
          },
          {
            "zh": "我们俩是好朋友。",
            "py": "Wǒmen liǎ shì hǎo péngyou.",
            "vi": "Cả hai chúng tôi là bạn tốt."
          },
          {
            "zh": "你们俩也都是留学生吗？",
            "py": "Nǐmen liǎ yě dōu shì liúxiéshēng ma?",
            "vi": "Cả hai các bạn cũng đều là lưu học sinh à?"
          },
          {
            "zh": "我们俩是朋友。",
            "py": "Wǒmen liǎ shì péngyou.",
            "vi": "Hai chúng tôi là bạn bè."
          },
          {
            "zh": "他们俩都姓王。",
            "py": "Tāmen liǎ dōu xìng Wáng.",
            "vi": "Cả hai người họ đều họ Vương."
          },
          {
            "zh": "你们俩是同学吗？",
            "py": "Nǐmen liǎ shì tóngxué ma?",
            "vi": "Hai bạn là bạn học à?"
          },
          {
            "zh": "我们俩都喜欢喝奶茶。",
            "py": "Wǒmen liǎ dōu xǐhuan hē nǎichá.",
            "vi": "Hai chúng tôi đều thích uống trà sữa."
          },
          {
            "zh": "他们俩住在一个房间。",
            "py": "Tāmen liǎ zhù zài yí ge fángjiān.",
            "vi": "Hai người họ ở cùng một phòng."
          },
          {
            "zh": "姐妹俩都很好看。",
            "py": "Jiěmèi liǎ dōu hěn hǎokàn.",
            "vi": "Hai chị em đều rất xinh."
          },
          {
            "zh": "我们俩明天去旅游。",
            "py": "Wǒmen liǎ míngtiān qù lǚyóu.",
            "vi": "Hai chúng tôi ngày mai đi du lịch."
          }
        ]
      },
      {
        "zh": "没什么",
        "py": "méi shénme",
        "type": "Cụm từ",
        "vi": "không có gì, không sao",
        "ex": [
          {
            "zh": "对不起！—没什么。",
            "py": "Duíbùqǐ! — Méi shénme.",
            "vi": "Xin lỗi! — Không có gì."
          },
          {
            "zh": "没什么，没关系。",
            "py": "Méi shénme, méi guānxi.",
            "vi": "Không có gì, không sao."
          },
          {
            "zh": "没什么，别客气。",
            "py": "Méi shénme, bié kèqi.",
            "vi": "Không có gì, đừng khách sáo."
          },
          {
            "zh": "谢谢你！——没什么。",
            "py": "Xièxie nǐ! — Méi shénme.",
            "vi": "Cảm ơn bạn! — Không có gì."
          },
          {
            "zh": "我没什么。",
            "py": "Wǒ méi shénme.",
            "vi": "Tôi không sao cả."
          },
          {
            "zh": "没什么，不客气。",
            "py": "Méi shénme, bú kèqi.",
            "vi": "Không có gì, đừng khách sáo."
          },
          {
            "zh": "没什么，我很好。",
            "py": "Méi shénme, wǒ hěn hǎo.",
            "vi": "Không sao, tôi ổn."
          },
          {
            "zh": "箱子里没什么东西。",
            "py": "Xiāngzi lǐ méi shénme dōngxi.",
            "vi": "Trong vali không có đồ gì."
          },
          {
            "zh": "今天没什么人。",
            "py": "Jīntiān méi shénme rén.",
            "vi": "Hôm nay chẳng có mấy người."
          },
          {
            "zh": "我没什么钱了。",
            "py": "Wǒ méi shénme qián le.",
            "vi": "Tôi chẳng còn mấy tiền nữa."
          }
        ]
      },
      {
        "zh": "经理",
        "py": "jīnglǐ",
        "type": "Danh từ",
        "vi": "giám đốc, quản lý",
        "ex": [
          {
            "zh": "我们的经理是一个好人。",
            "py": "Wǒmen de jīnglǐ shì yī gè hǎo rén.",
            "vi": "Giám đốc của chúng tôi là người tốt."
          },
          {
            "zh": "王经理在吗？",
            "py": "Wáng jīnglǐ zài ma?",
            "vi": "Giám đốc Vương có ở đây không?"
          },
          {
            "zh": "他是公司经理。",
            "py": "Tā shì gōngsī jīnglǐ.",
            "vi": "Anh ấy là giám đốc công ty."
          },
          {
            "zh": "经理在办公室。",
            "py": "Jīnglǐ zài bàngōngshì.",
            "vi": "Giám đốc đang ở văn phòng."
          },
          {
            "zh": "她是我们的经理。",
            "py": "Tā shì wǒmen de jīnglǐ.",
            "vi": "Cô ấy là giám đốc của chúng tôi."
          },
          {
            "zh": "经理今天很忙。",
            "py": "Jīnglǐ jīntiān hěn máng.",
            "vi": "Hôm nay giám đốc rất bận."
          },
          {
            "zh": "我们的新经理是德国人。",
            "py": "Wǒmen de xīn jīnglǐ shì Déguó rén.",
            "vi": "Giám đốc mới của chúng tôi là người Đức."
          },
          {
            "zh": "我去办公室找经理。",
            "py": "Wǒ qù bàngōngshì zhǎo jīnglǐ.",
            "vi": "Tôi đến văn phòng tìm giám đốc."
          },
          {
            "zh": "经理请我们吃饭。",
            "py": "Jīnglǐ qǐng wǒmen chīfàn.",
            "vi": "Giám đốc mời chúng tôi ăn cơm."
          },
          {
            "zh": "经理坐出租车去酒店。",
            "py": "Jīnglǐ zuò chūzūchē qù jiǔdiàn.",
            "vi": "Giám đốc đi taxi đến khách sạn."
          }
        ]
      },
      {
        "zh": "大夫",
        "py": "dàifu",
        "type": "Danh từ",
        "vi": "thầy thuốc, bác sĩ",
        "ex": [
          {
            "zh": "他是大夫。",
            "py": "Tā shì dàifu.",
            "vi": "Ông ấy là bác sĩ."
          },
          {
            "zh": "我爸爸妈妈都是大夫。",
            "py": "Wǒ bàba māma dōu shì dàifu.",
            "vi": "Bố mẹ tôi đều là bác sĩ."
          },
          {
            "zh": "那位大夫很好。",
            "py": "Nà wèi dàifu hěn hǎo.",
            "vi": "Vị bác sĩ đó rất tốt."
          },
          {
            "zh": "大夫很忙。",
            "py": "Dàifu hěn máng.",
            "vi": "Bác sĩ rất bận."
          },
          {
            "zh": "我爸爸是大夫。",
            "py": "Wǒ bàba shì dàifu.",
            "vi": "Bố tôi là bác sĩ."
          },
          {
            "zh": "大夫，我生病了。",
            "py": "Dàifu, wǒ shēngbìng le.",
            "vi": "Bác sĩ ơi, tôi bị ốm."
          },
          {
            "zh": "这位大夫姓吴。",
            "py": "Zhè wèi dàifu xìng Wú.",
            "vi": "Vị bác sĩ này họ Ngô."
          },
          {
            "zh": "大夫说我要吃药。",
            "py": "Dàifu shuō wǒ yào chī yào.",
            "vi": "Bác sĩ nói tôi phải uống thuốc."
          },
          {
            "zh": "他是中医大夫。",
            "py": "Tā shì zhōngyī dàifu.",
            "vi": "Ông ấy là thầy thuốc Đông y."
          },
          {
            "zh": "我想找一位大夫。",
            "py": "Wǒ xiǎng zhǎo yí wèi dàifu.",
            "vi": "Tôi muốn tìm một bác sĩ."
          }
        ]
      },
      {
        "zh": "护士",
        "py": "hùshi",
        "type": "Danh từ",
        "vi": "y tá, hộ lý",
        "ex": [
          {
            "zh": "她是护士。",
            "py": "Tā shì hùshi.",
            "vi": "Cô ấy là y tá."
          },
          {
            "zh": "护士很忙。",
            "py": "Hùshi hěn máng.",
            "vi": "Y tá rất bận."
          },
          {
            "zh": "这位护士很忙。",
            "py": "Zhè wèi hùshi hěn máng.",
            "vi": "Cô y tá này rất bận."
          },
          {
            "zh": "护士都很好。",
            "py": "Hùshi dōu hěn hǎo.",
            "vi": "Các y tá đều rất tốt."
          },
          {
            "zh": "我姐姐是护士。",
            "py": "Wǒ jiějie shì hùshi.",
            "vi": "Chị gái tôi là y tá."
          },
          {
            "zh": "那位护士很好。",
            "py": "Nà wèi hùshi hěn hǎo.",
            "vi": "Cô y tá kia rất tốt."
          },
          {
            "zh": "护士给我药。",
            "py": "Hùshi gěi wǒ yào.",
            "vi": "Y tá đưa thuốc cho tôi."
          },
          {
            "zh": "这个医院有很多护士。",
            "py": "Zhège yīyuàn yǒu hěn duō hùshi.",
            "vi": "Bệnh viện này có rất nhiều y tá."
          },
          {
            "zh": "护士，请问大夫在吗？",
            "py": "Hùshi, qǐngwèn dàifu zài ma?",
            "vi": "Chị y tá ơi, xin hỏi bác sĩ có ở đây không?"
          },
          {
            "zh": "她是一个越南护士。",
            "py": "Tā shì yí ge Yuènán hùshi.",
            "vi": "Cô ấy là một y tá người Việt Nam."
          }
        ]
      },
      {
        "zh": "律师",
        "py": "lǜshī",
        "type": "Danh từ",
        "vi": "luật sư",
        "ex": [
          {
            "zh": "他是律师。",
            "py": "Tā shì lúsī.",
            "vi": "Anh ấy là luật sư."
          },
          {
            "zh": "你是律师吗？",
            "py": "Nǐ shì lúsī ma?",
            "vi": "Bạn có phải luật sư không?"
          },
          {
            "zh": "我哥哥是律师。",
            "py": "Wǒ gēge shì lǜshī.",
            "vi": "Anh trai tôi là luật sư."
          },
          {
            "zh": "律师很忙。",
            "py": "Lǜshī hěn máng.",
            "vi": "Luật sư rất bận."
          },
          {
            "zh": "我朋友是律师。",
            "py": "Wǒ péngyou shì lǜshī.",
            "vi": "Bạn tôi là luật sư."
          },
          {
            "zh": "我想找一位律师。",
            "py": "Wǒ xiǎng zhǎo yí wèi lǜshī.",
            "vi": "Tôi muốn tìm một luật sư."
          },
          {
            "zh": "那位律师很忙。",
            "py": "Nà wèi lǜshī hěn máng.",
            "vi": "Vị luật sư kia rất bận."
          },
          {
            "zh": "她爸爸是律师。",
            "py": "Tā bàba shì lǜshī.",
            "vi": "Bố cô ấy là luật sư."
          },
          {
            "zh": "律师的办公室在五楼。",
            "py": "Lǜshī de bàngōngshì zài wǔ lóu.",
            "vi": "Văn phòng luật sư ở tầng năm."
          },
          {
            "zh": "我们公司有两个律师。",
            "py": "Wǒmen gōngsī yǒu liǎng ge lǜshī.",
            "vi": "Công ty chúng tôi có hai luật sư."
          }
        ]
      },
      {
        "zh": "记者",
        "py": "jìzhě",
        "type": "Danh từ",
        "vi": "nhà báo, phóng viên",
        "ex": [
          {
            "zh": "她是记者。",
            "py": "Tā shì jìzhě.",
            "vi": "Cô ấy là nhà báo."
          },
          {
            "zh": "你们都是记者吗？",
            "py": "Nǐmen dōu shì jìzhě ma?",
            "vi": "Các bạn đều là nhà báo à?"
          },
          {
            "zh": "他是记者。",
            "py": "Tā shì jìzhě.",
            "vi": "Anh ấy là nhà báo."
          },
          {
            "zh": "记者经常出去。",
            "py": "Jìzhě jīngcháng chūqù.",
            "vi": "Nhà báo thường xuyên ra ngoài."
          },
          {
            "zh": "他是杂志的记者。",
            "py": "Tā shì zázhì de jìzhě.",
            "vi": "Anh ấy là nhà báo của tạp chí."
          },
          {
            "zh": "那位记者是日本人。",
            "py": "Nà wèi jìzhě shì Rìběn rén.",
            "vi": "Nhà báo kia là người Nhật."
          },
          {
            "zh": "记者很忙。",
            "py": "Jìzhě hěn máng.",
            "vi": "Nhà báo rất bận."
          },
          {
            "zh": "我哥哥是记者。",
            "py": "Wǒ gēge shì jìzhě.",
            "vi": "Anh tôi là nhà báo."
          },
          {
            "zh": "记者经常去别的国家。",
            "py": "Jìzhě jīngcháng qù biéde guójiā.",
            "vi": "Nhà báo thường đi nước khác."
          },
          {
            "zh": "记者在学校门口。",
            "py": "Jìzhě zài xuéxiào ménkǒu.",
            "vi": "Nhà báo đang ở cổng trường."
          }
        ]
      },
      {
        "zh": "经常",
        "py": "jīngcháng",
        "type": "Phó từ",
        "vi": "thường xuyên, hay",
        "ex": [
          {
            "zh": "我早上经常吃包子。",
            "py": "Wǒ zǎ oshang jīngcháng chī bāozi.",
            "vi": "Sáng tôi thường ăn bánh bao."
          },
          {
            "zh": "你经常来这里吗？",
            "py": "Nǐ jīngcháng lái zhèlǐ ma?",
            "vi": "Bạn có hay đến đây không?"
          },
          {
            "zh": "他经常学习到很晚。",
            "py": "Tā jīngcháng xuéxí dào hěn wǎn.",
            "vi": "Anh ấy thường học đến rất khuya."
          },
          {
            "zh": "他经常来图书馆。",
            "py": "Tā jīngcháng lái túshūguǎn.",
            "vi": "Anh ấy thường xuyên đến thư viện."
          },
          {
            "zh": "我经常喝咖啡。",
            "py": "Wǒ jīngcháng hē kāfēi.",
            "vi": "Tôi thường xuyên uống cà phê."
          },
          {
            "zh": "我经常去图书馆。",
            "py": "Wǒ jīngcháng qù túshūguǎn.",
            "vi": "Tôi thường đến thư viện."
          },
          {
            "zh": "他经常坐地铁上班。",
            "py": "Tā jīngcháng zuò dìtiě shàngbān.",
            "vi": "Anh ấy thường đi tàu điện ngầm đi làm."
          },
          {
            "zh": "河内经常下雨。",
            "py": "Hénèi jīngcháng xià yǔ.",
            "vi": "Hà Nội thường mưa."
          },
          {
            "zh": "我们经常在食堂吃午饭。",
            "py": "Wǒmen jīngcháng zài shítáng chī wǔfàn.",
            "vi": "Chúng tôi thường ăn trưa ở nhà ăn."
          },
          {
            "zh": "妈妈经常给我寄东西。",
            "py": "Māma jīngcháng gěi wǒ jì dōngxi.",
            "vi": "Mẹ thường gửi đồ cho tôi."
          }
        ]
      },
      {
        "zh": "大家",
        "py": "dàjiā",
        "type": "Đại từ",
        "vi": "mọi người, tất cả",
        "ex": [
          {
            "zh": "大家好！",
            "py": "Dàjiā hǎo!",
            "vi": "Xin chào mọi người!"
          },
          {
            "zh": "我给大家介绍一下。",
            "py": "Wǒ gěi dàjiā jièshào yíxià.",
            "vi": "Để tôi giới thiệu với mọi người."
          },
          {
            "zh": "大家都来了吗？",
            "py": "Dàjiā dōu lái le ma?",
            "vi": "Mọi người đều đến rồi chư?"
          },
          {
            "zh": "欢迎大家！",
            "py": "Huānyíng dàjiā!",
            "vi": "Hoan nghênh mọi người!"
          },
          {
            "zh": "大家都是朋友。",
            "py": "Dàjiā dōu shì péngyou.",
            "vi": "Mọi người đều là bạn bè."
          },
          {
            "zh": "大家明天见！",
            "py": "Dàjiā míngtiān jiàn!",
            "vi": "Mọi người mai gặp nhé!"
          },
          {
            "zh": "大家喝茶吧。",
            "py": "Dàjiā hē chá ba.",
            "vi": "Mọi người uống trà đi."
          },
          {
            "zh": "大家都知道他是经理。",
            "py": "Dàjiā dōu zhīdào tā shì jīnglǐ.",
            "vi": "Mọi người đều biết anh ấy là giám đốc."
          },
          {
            "zh": "请大家看一下儿。",
            "py": "Qǐng dàjiā kàn yíxiàr.",
            "vi": "Mời mọi người xem một chút."
          },
          {
            "zh": "大家觉得怎么样？",
            "py": "Dàjiā juéde zěnmeyàng?",
            "vi": "Mọi người thấy thế nào?"
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 15 (b16): 你在哪儿学习 – Bạn học ở đâu?",
    "words": [
      {
        "zh": "语言",
        "py": "yǔyán",
        "vi": "ngôn ngữ",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我喜欢学习语言。",
            "py": "Wǒ xǐhuan xuéxí yǔyán.",
            "vi": "Tôi thích học ngôn ngữ."
          },
          {
            "zh": "我觉得语言很有意思。",
            "py": "Wǒ juéde yǔyán hěn yǒu yìsi.",
            "vi": "Tôi thấy ngôn ngữ rất thú vị."
          },
          {
            "zh": "汉语是一种语言。",
            "py": "Hànyǔ shì yì zhǒng yǔyán.",
            "vi": "Tiếng Trung là một loại ngôn ngữ."
          },
          {
            "zh": "学生们学习语言。",
            "py": "Xuéshengmen xuéxí yǔyán.",
            "vi": "Các học sinh học ngôn ngữ."
          },
          {
            "zh": "语言不容易学。",
            "py": "Yǔyán bù róngyì xué.",
            "vi": "Ngôn ngữ không dễ học."
          },
          {
            "zh": "他学了很多语言。",
            "py": "Tā xuéle hěn duō yǔyán.",
            "vi": "Anh ấy đã học rất nhiều ngôn ngữ."
          },
          {
            "zh": "你喜欢哪个语言？",
            "py": "Nǐ xǐhuan nǎge yǔyán?",
            "vi": "Bạn thích ngôn ngữ nào?"
          },
          {
            "zh": "学习语言要多说。",
            "py": "Xuéxí yǔyán yào duō shuō.",
            "vi": "Học ngôn ngữ phải nói nhiều."
          },
          {
            "zh": "语言大学在北京。",
            "py": "Yǔyán dàxué zài Běijīng.",
            "vi": "Đại học Ngôn ngữ ở Bắc Kinh."
          },
          {
            "zh": "这个国家的语言是法语。",
            "py": "Zhège guójiā de yǔyán shì Fǎyǔ.",
            "vi": "Ngôn ngữ của nước này là tiếng Pháp."
          }
        ]
      },
      {
        "zh": "语法",
        "py": "yǔfǎ",
        "vi": "ngữ pháp",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我觉得语法不太难。",
            "py": "Wǒ juéde yǔfǎ bú tài nán.",
            "vi": "Tôi cảm thấy ngữ pháp không khó lắm."
          },
          {
            "zh": "汉语语法比较容易。",
            "py": "Hànyǔ yǔfǎ bǐjiào róngyì.",
            "vi": "Ngữ pháp tiếng Trung khá dễ."
          },
          {
            "zh": "我觉得语法很难。",
            "py": "Wǒ juéde yǔfǎ hěn nán.",
            "vi": "Tôi thấy ngữ pháp rất khó."
          },
          {
            "zh": "这本书是语法书。",
            "py": "Zhè běn shū shì yǔfǎ shū.",
            "vi": "Cuốn sách này là sách ngữ pháp."
          },
          {
            "zh": "我们学习语法。",
            "py": "Wǒmen xuéxí yǔfǎ.",
            "vi": "Chúng tôi học ngữ pháp."
          },
          {
            "zh": "今天的语法很容易。",
            "py": "Jīntiān de yǔfǎ hěn róngyì.",
            "vi": "Ngữ pháp hôm nay rất dễ."
          },
          {
            "zh": "汉语语法和越南语语法不一样。",
            "py": "Hànyǔ yǔfǎ hé Yuènányǔ yǔfǎ bù yíyàng.",
            "vi": "Ngữ pháp tiếng Trung và tiếng Việt không giống nhau."
          },
          {
            "zh": "我想买一本语法书。",
            "py": "Wǒ xiǎng mǎi yì běn yǔfǎ shū.",
            "vi": "Tôi muốn mua một quyển sách ngữ pháp."
          },
          {
            "zh": "他的语法很好。",
            "py": "Tā de yǔfǎ hěn hǎo.",
            "vi": "Ngữ pháp của anh ấy rất tốt."
          },
          {
            "zh": "这个语法有点儿难。",
            "py": "Zhège yǔfǎ yǒudiǎnr nán.",
            "vi": "Ngữ pháp này hơi khó."
          }
        ]
      },
      {
        "zh": "大学",
        "py": "dàxué",
        "vi": "đại học",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我在河内语言大学学习。",
            "py": "Wǒ zài Hénèi Yǔyán Dàxué xuéxí.",
            "vi": "Tôi học ở Đại học Ngôn ngữ Hà Nội."
          },
          {
            "zh": "他是大学教授。",
            "py": "Tā shì dàxué jiàoshòu.",
            "vi": "Ông ấy là giáo sư đại học."
          },
          {
            "zh": "我在大学学习汉语。",
            "py": "Wǒ zài dàxué xuéxí Hànyǔ.",
            "vi": "Tôi học tiếng Trung ở đại học."
          },
          {
            "zh": "这个大学很大。",
            "py": "Zhège dàxué hěn dà.",
            "vi": "Trường đại học này rất lớn."
          },
          {
            "zh": "她是大学同学。",
            "py": "Tā shì dàxué tóngxué.",
            "vi": "Cô ấy là bạn học đại học."
          },
          {
            "zh": "他是河内大学的老师。",
            "py": "Tā shì Hénèi Dàxué de lǎoshī.",
            "vi": "Anh ấy là giảng viên Đại học Hà Nội."
          },
          {
            "zh": "大学里有很多留学生。",
            "py": "Dàxué lǐ yǒu hěn duō liúxuéshēng.",
            "vi": "Trong trường đại học có rất nhiều lưu học sinh."
          },
          {
            "zh": "我弟弟明年上大学。",
            "py": "Wǒ dìdi míngnián shàng dàxué.",
            "vi": "Năm sau em trai tôi vào đại học."
          },
          {
            "zh": "这个大学的图书馆很大。",
            "py": "Zhège dàxué de túshūguǎn hěn dà.",
            "vi": "Thư viện của trường đại học này rất lớn."
          },
          {
            "zh": "我们大学在人民路。",
            "py": "Wǒmen dàxué zài Rénmín Lù.",
            "vi": "Trường đại học chúng tôi ở đường Nhân Dân."
          }
        ]
      },
      {
        "zh": "觉得",
        "py": "juéde",
        "vi": "cảm thấy, cho rằng",
        "type": "Động từ",
        "ex": [
          {
            "zh": "你觉得汉语怎么样？",
            "py": "Nǐ juéde Hànyǔ zěnmeyàng?",
            "vi": "Bạn cảm thấy tiếng Trung thế nào?"
          },
          {
            "zh": "我觉得汉语不太难。",
            "py": "Wǒ juéde Hànyǔ bú tài nán.",
            "vi": "Tôi cảm thấy tiếng Trung không khó lắm."
          },
          {
            "zh": "我觉得汉语不难。",
            "py": "Wǒ juéde Hànyǔ bù nán.",
            "vi": "Tôi thấy tiếng Trung không khó."
          },
          {
            "zh": "他觉得语法容易。",
            "py": "Tā juéde yǔfǎ róngyì.",
            "vi": "Anh ấy thấy ngữ pháp dễ."
          },
          {
            "zh": "你觉得怎么样？",
            "py": "Nǐ juéde zěnmeyàng?",
            "vi": "Bạn thấy thế nào?"
          },
          {
            "zh": "我觉得这件衣服很好看。",
            "py": "Wǒ juéde zhè jiàn yīfu hěn hǎokàn.",
            "vi": "Tôi thấy bộ quần áo này rất đẹp."
          },
          {
            "zh": "你觉得北京怎么样？",
            "py": "Nǐ juéde Běijīng zěnmeyàng?",
            "vi": "Bạn thấy Bắc Kinh thế nào?"
          },
          {
            "zh": "我觉得有点儿冷。",
            "py": "Wǒ juéde yǒudiǎnr lěng.",
            "vi": "Tôi thấy hơi lạnh."
          },
          {
            "zh": "他觉得这儿的东西太贵了。",
            "py": "Tā juéde zhèr de dōngxi tài guì le.",
            "vi": "Anh ấy thấy đồ ở đây đắt quá."
          },
          {
            "zh": "你觉得他是哪国人？",
            "py": "Nǐ juéde tā shì nǎ guó rén?",
            "vi": "Bạn nghĩ anh ấy là người nước nào?"
          }
        ]
      },
      {
        "zh": "容易",
        "py": "róngyì",
        "vi": "dễ, dễ dàng",
        "type": "Tính từ",
        "ex": [
          {
            "zh": "听和说比较容易。",
            "py": "Tīng hé shuō bǐjiào róngyì.",
            "vi": "Nghe và nói tương đối dễ."
          },
          {
            "zh": "写汉字不容易。",
            "py": "Xiě Hànzì bù róngyì.",
            "vi": "Viết chữ Hán không dễ."
          },
          {
            "zh": "这个语法很容易。",
            "py": "Zhège yǔfǎ hěn róngyì.",
            "vi": "Ngữ pháp này rất dễ."
          },
          {
            "zh": "听力比较容易。",
            "py": "Tīnglì bǐjiào róngyì.",
            "vi": "Nghe hiểu khá dễ."
          },
          {
            "zh": "口语不太容易。",
            "py": "Kǒuyǔ bú tài róngyì.",
            "vi": "Nói không dễ lắm."
          },
          {
            "zh": "骑自行车很容易。",
            "py": "Qí zìxíngchē hěn róngyì.",
            "vi": "Đi xe đạp rất dễ."
          },
          {
            "zh": "这个汉字很容易写。",
            "py": "Zhège Hànzì hěn róngyì xiě.",
            "vi": "Chữ Hán này rất dễ viết."
          },
          {
            "zh": "学汉语不容易。",
            "py": "Xué Hànyǔ bù róngyì.",
            "vi": "Học tiếng Trung không dễ."
          },
          {
            "zh": "找工作不容易。",
            "py": "Zhǎo gōngzuò bù róngyì.",
            "vi": "Tìm việc không dễ."
          },
          {
            "zh": "开车容易吗？",
            "py": "Kāichē róngyì ma?",
            "vi": "Lái xe có dễ không?"
          }
        ]
      },
      {
        "zh": "听",
        "py": "tīng",
        "vi": "nghe",
        "type": "Động từ",
        "ex": [
          {
            "zh": "我每天听汉语。",
            "py": "Wǒ měitiān tīng Hànyǔ.",
            "vi": "Tôi nghe tiếng Trung mỗi ngày."
          },
          {
            "zh": "我喜欢听汉语。",
            "py": "Wǒ xǐhuan tīng Hànyǔ.",
            "vi": "Tôi thích nghe tiếng Trung."
          },
          {
            "zh": "请听老师说。",
            "py": "Qǐng tīng lǎoshī shuō.",
            "vi": "Xin hãy nghe thầy/cô nói."
          },
          {
            "zh": "她在听英语。",
            "py": "Tā zài tīng Yīngyǔ.",
            "vi": "Cô ấy đang nghe tiếng Anh."
          },
          {
            "zh": "我喜欢听，不喜欢说。",
            "py": "Wǒ xǐhuan tīng, bù xǐhuan shuō.",
            "vi": "Tôi thích nghe, không thích nói."
          },
          {
            "zh": "你听，下雨了。",
            "py": "Nǐ tīng, xià yǔ le.",
            "vi": "Bạn nghe này, trời mưa rồi."
          },
          {
            "zh": "请再听一下儿。",
            "py": "Qǐng zài tīng yíxiàr.",
            "vi": "Hãy nghe lại một chút."
          },
          {
            "zh": "听说他是医生。",
            "py": "Tīngshuō tā shì yīshēng.",
            "vi": "Nghe nói anh ấy là bác sĩ."
          },
          {
            "zh": "孩子不听妈妈的话。",
            "py": "Háizi bù tīng māma de huà.",
            "vi": "Đứa trẻ không nghe lời mẹ."
          },
          {
            "zh": "你听我说。",
            "py": "Nǐ tīng wǒ shuō.",
            "vi": "Bạn nghe tôi nói này."
          }
        ]
      },
      {
        "zh": "说",
        "py": "shuō",
        "vi": "nói, kể",
        "type": "Động từ",
        "ex": [
          {
            "zh": "你说什么？",
            "py": "Nǐ shuō shénme?",
            "vi": "Bạn nói gì?"
          },
          {
            "zh": "他说汉语。",
            "py": "Tā shuō Hànyǔ.",
            "vi": "Anh ấy nói tiếng Trung."
          },
          {
            "zh": "她说英语和法语。",
            "py": "Tā shuō Yīngyǔ hé Fǎyǔ.",
            "vi": "Cô ấy nói tiếng Anh và tiếng Pháp."
          },
          {
            "zh": "同学们都说汉语。",
            "py": "Tóngxuémen dōu shuō Hànyǔ.",
            "vi": "Các bạn học đều nói tiếng Trung."
          },
          {
            "zh": "说比写容易。",
            "py": "Shuō bǐ xiě róngyì.",
            "vi": "Nói dễ hơn viết."
          },
          {
            "zh": "你说汉语还是说英语？",
            "py": "Nǐ shuō Hànyǔ háishì shuō Yīngyǔ?",
            "vi": "Bạn nói tiếng Trung hay tiếng Anh?"
          },
          {
            "zh": "他说他明天回家。",
            "py": "Tā shuō tā míngtiān huíjiā.",
            "vi": "Anh ấy nói ngày mai anh ấy về nhà."
          },
          {
            "zh": "你说吧，我听。",
            "py": "Nǐ shuō ba, wǒ tīng.",
            "vi": "Bạn nói đi, tôi nghe."
          },
          {
            "zh": "我想说汉语。",
            "py": "Wǒ xiǎng shuō Hànyǔ.",
            "vi": "Tôi muốn nói tiếng Trung."
          },
          {
            "zh": "妈妈说今天下雨。",
            "py": "Māma shuō jīntiān xià yǔ.",
            "vi": "Mẹ nói hôm nay trời mưa."
          }
        ]
      },
      {
        "zh": "读",
        "py": "dú",
        "vi": "đọc",
        "type": "Động từ",
        "ex": [
          {
            "zh": "我读汉语书。",
            "py": "Wǒ dú Hànyǔ shū.",
            "vi": "Tôi đọc sách tiếng Trung."
          },
          {
            "zh": "我同屋经常读汉语。",
            "py": "Wǒ tóngwū jīngcháng dú Hànyǔ.",
            "vi": "Bạn cùng phòng tôi thường xuyên đọc tiếng Trung."
          },
          {
            "zh": "请读一下。",
            "py": "Qǐng dú yíxià.",
            "vi": "Xin hãy đọc thử."
          },
          {
            "zh": "阅读比写作容易。",
            "py": "Yuèdú bǐ xiězuò róngyì.",
            "vi": "Đọc hiểu dễ hơn viết luận."
          },
          {
            "zh": "他喜欢读杂志。",
            "py": "Tā xǐhuan dú zázhì.",
            "vi": "Anh ấy thích đọc tạp chí."
          },
          {
            "zh": "这个字读什么？",
            "py": "Zhège zì dú shénme?",
            "vi": "Chữ này đọc là gì?"
          },
          {
            "zh": "我在北京读大学。",
            "py": "Wǒ zài Běijīng dú dàxué.",
            "vi": "Tôi học đại học ở Bắc Kinh."
          },
          {
            "zh": "我喜欢读中文杂志。",
            "py": "Wǒ xǐhuan dú Zhōngwén zázhì.",
            "vi": "Tôi thích đọc tạp chí tiếng Trung."
          },
          {
            "zh": "你读对了。",
            "py": "Nǐ dú duì le.",
            "vi": "Bạn đọc đúng rồi."
          },
          {
            "zh": "这个汉字你读错了。",
            "py": "Zhège Hànzì nǐ dú cuò le.",
            "vi": "Chữ Hán này bạn đọc sai rồi."
          }
        ]
      },
      {
        "zh": "写",
        "py": "xiě",
        "vi": "viết",
        "type": "Động từ",
        "ex": [
          {
            "zh": "但是读和写很难。",
            "py": "Dànshì dú hé xiě hěn nán.",
            "vi": "Nhưng đọc và viết rất khó."
          },
          {
            "zh": "我写汉字。",
            "py": "Wǒ xiě Hànzì.",
            "vi": "Tôi viết chữ Hán."
          },
          {
            "zh": "写作不容易。",
            "py": "Xiězuò bù róngyì.",
            "vi": "Viết luận không dễ."
          },
          {
            "zh": "请写你的名字。",
            "py": "Qǐng xiě nǐ de míngzi.",
            "vi": "Xin viết tên của bạn."
          },
          {
            "zh": "他写信给朋友。",
            "py": "Tā xiě xìn gěi péngyou.",
            "vi": "Anh ấy viết thư cho bạn bè."
          },
          {
            "zh": "请在这儿写你的电话号码。",
            "py": "Qǐng zài zhèr xiě nǐ de diànhuà hàomǎ.",
            "vi": "Hãy viết số điện thoại của bạn ở đây."
          },
          {
            "zh": "他在写信。",
            "py": "Tā zài xiě xìn.",
            "vi": "Anh ấy đang viết thư."
          },
          {
            "zh": "请写大一点儿。",
            "py": "Qǐng xiě dà yìdiǎnr.",
            "vi": "Hãy viết to một chút."
          },
          {
            "zh": "弟弟写了三个汉字。",
            "py": "Dìdi xiěle sān ge Hànzì.",
            "vi": "Em trai đã viết ba chữ Hán."
          },
          {
            "zh": "你写的名字对吗？",
            "py": "Nǐ xiě de míngzi duì ma?",
            "vi": "Tên bạn viết có đúng không?"
          }
        ]
      },
      {
        "zh": "和",
        "py": "hé",
        "vi": "và, với",
        "type": "Liên từ",
        "ex": [
          {
            "zh": "我和他都是越南人。",
            "py": "Wǒ hé tā dōu shì Yuènán rén.",
            "vi": "Tôi và anh ấy đều là người Việt Nam."
          },
          {
            "zh": "我和他是同学。",
            "py": "Wǒ hé tā shì tóngxué.",
            "vi": "Tôi và anh ấy là bạn học."
          },
          {
            "zh": "爸爸和妈妈都很好。",
            "py": "Bàba hé māma dōu hěn hǎo.",
            "vi": "Bố và mẹ đều khỏe."
          },
          {
            "zh": "听和说都不容易。",
            "py": "Tīng hé shuō dōu bù róngyì.",
            "vi": "Nghe và nói đều không dễ."
          },
          {
            "zh": "我喜欢英语和汉语。",
            "py": "Wǒ xǐhuan Yīngyǔ hé Hànyǔ.",
            "vi": "Tôi thích tiếng Anh và tiếng Trung."
          },
          {
            "zh": "苹果和香蕉都很便宜。",
            "py": "Píngguǒ hé xiāngjiāo dōu hěn piányi.",
            "vi": "Táo và chuối đều rất rẻ."
          },
          {
            "zh": "他和我是同屋。",
            "py": "Tā hé wǒ shì tóngwū.",
            "vi": "Anh ấy và tôi là bạn cùng phòng."
          },
          {
            "zh": "我要一个包子和一碗汤。",
            "py": "Wǒ yào yí ge bāozi hé yì wǎn tāng.",
            "vi": "Tôi muốn một cái bánh bao và một bát canh."
          },
          {
            "zh": "老师和学生都在食堂。",
            "py": "Lǎoshī hé xuésheng dōu zài shítáng.",
            "vi": "Thầy và trò đều ở nhà ăn."
          },
          {
            "zh": "我喜欢红色和黑色。",
            "py": "Wǒ xǐhuan hóngsè hé hēisè.",
            "vi": "Tôi thích màu đỏ và màu đen."
          }
        ]
      },
      {
        "zh": "比较",
        "py": "bǐjiào",
        "vi": "tương đối, so sánh",
        "type": "Phó từ",
        "ex": [
          {
            "zh": "汉字比较难写。",
            "py": "Hànzì bǐjiào nán xiě.",
            "vi": "Chữ Hán tương đối khó viết."
          },
          {
            "zh": "他比较忙。",
            "py": "Tā bǐjiào máng.",
            "vi": "Anh ấy khá bận."
          },
          {
            "zh": "这个班比较大。",
            "py": "Zhège bān bǐjiào dà.",
            "vi": "Lớp này khá đông."
          },
          {
            "zh": "语法比较难。",
            "py": "Yǔfǎ bǐjiào nán.",
            "vi": "Ngữ pháp khá khó."
          },
          {
            "zh": "同屋比较好。",
            "py": "Tóngwū bǐjiào hǎo.",
            "vi": "Bạn cùng phòng khá tốt."
          },
          {
            "zh": "今天比较冷。",
            "py": "Jīntiān bǐjiào lěng.",
            "vi": "Hôm nay tương đối lạnh."
          },
          {
            "zh": "这家酒店比较便宜。",
            "py": "Zhè jiā jiǔdiàn bǐjiào piányi.",
            "vi": "Khách sạn này tương đối rẻ."
          },
          {
            "zh": "我比较喜欢喝茶。",
            "py": "Wǒ bǐjiào xǐhuan hē chá.",
            "vi": "Tôi tương đối thích uống trà."
          },
          {
            "zh": "这个箱子比较轻。",
            "py": "Zhège xiāngzi bǐjiào qīng.",
            "vi": "Cái vali này tương đối nhẹ."
          },
          {
            "zh": "周末商场人比较多。",
            "py": "Zhōumò shāngchǎng rén bǐjiào duō.",
            "vi": "Cuối tuần trung tâm thương mại tương đối đông người."
          }
        ]
      },
      {
        "zh": "但是",
        "py": "dànshì",
        "vi": "nhưng, nhưng mà",
        "type": "Liên từ",
        "ex": [
          {
            "zh": "汉语很难，但是很有意思。",
            "py": "Hànyǔ hěn nán, dànshì hěn yǒu yìsi.",
            "vi": "Tiếng Trung rất khó nhưng rất thú vị."
          },
          {
            "zh": "写作很难，但是很有意思。",
            "py": "Xiězuò hěn nán, dànshì hěn yǒu yìsi.",
            "vi": "Viết văn rất khó, nhưng rất thú vị."
          },
          {
            "zh": "他很忙，但是他很好。",
            "py": "Tā hěn máng, dànshì tā hěn hǎo.",
            "vi": "Anh ấy rất bận, nhưng anh ấy rất tốt."
          },
          {
            "zh": "语法容易，但是听力难。",
            "py": "Yǔfǎ róngyì, dànshì tīnglì nán.",
            "vi": "Ngữ pháp dễ, nhưng nghe hiểu khó."
          },
          {
            "zh": "他是新同学，但是很好。",
            "py": "Tā shì xīn tóngxué, dànshì hěn hǎo.",
            "vi": "Anh ấy là học sinh mới, nhưng rất tốt."
          },
          {
            "zh": "这件衣服很好看，但是太贵了。",
            "py": "Zhè jiàn yīfu hěn hǎokàn, dànshì tài guì le.",
            "vi": "Bộ quần áo này rất đẹp nhưng đắt quá."
          },
          {
            "zh": "我想去，但是我很忙。",
            "py": "Wǒ xiǎng qù, dànshì wǒ hěn máng.",
            "vi": "Tôi muốn đi nhưng tôi rất bận."
          },
          {
            "zh": "他是日本人，但是他说汉语。",
            "py": "Tā shì Rìběn rén, dànshì tā shuō Hànyǔ.",
            "vi": "Anh ấy là người Nhật nhưng nói tiếng Trung."
          },
          {
            "zh": "下雨了，但是不太冷。",
            "py": "Xià yǔ le, dànshì bú tài lěng.",
            "vi": "Trời mưa nhưng không lạnh lắm."
          },
          {
            "zh": "我喜欢喝咖啡，但是晚上不喝。",
            "py": "Wǒ xǐhuan hē kāfēi, dànshì wǎnshang bù hē.",
            "vi": "Tôi thích uống cà phê nhưng buổi tối không uống."
          }
        ]
      },
      {
        "zh": "有意思",
        "py": "yǒu yìsi",
        "vi": "thú vị, hay",
        "type": "Cụm từ",
        "ex": [
          {
            "zh": "汉语是一个有意思的语言。",
            "py": "Hànyǔ shì yí ge yǒu yìsi de yǔyán.",
            "vi": "Tiếng Trung là một ngôn ngữ thú vị."
          },
          {
            "zh": "这本书很有意思。",
            "py": "Zhè běn shū hěn yǒu yìsi.",
            "vi": "Cuốn sách này rất thú vị."
          },
          {
            "zh": "我觉得语法很有意思。",
            "py": "Wǒ juéde yǔfǎ hěn yǒu yìsi.",
            "vi": "Tôi thấy ngữ pháp rất thú vị."
          },
          {
            "zh": "这个班很有意思。",
            "py": "Zhège bān hěn yǒu yìsi.",
            "vi": "Lớp này rất thú vị."
          },
          {
            "zh": "汉字很有意思。",
            "py": "Hànzì hěn yǒu yìsi.",
            "vi": "Chữ Hán rất thú vị."
          },
          {
            "zh": "北京很有意思。",
            "py": "Běijīng hěn yǒu yìsi.",
            "vi": "Bắc Kinh rất thú vị."
          },
          {
            "zh": "他是一个很有意思的人。",
            "py": "Tā shì yí ge hěn yǒu yìsi de rén.",
            "vi": "Anh ấy là một người rất thú vị."
          },
          {
            "zh": "这本杂志有意思吗？",
            "py": "Zhè běn zázhì yǒu yìsi ma?",
            "vi": "Quyển tạp chí này có thú vị không?"
          },
          {
            "zh": "我们的口语老师很有意思。",
            "py": "Wǒmen de kǒuyǔ lǎoshī hěn yǒu yìsi.",
            "vi": "Giáo viên khẩu ngữ của chúng tôi rất vui tính."
          },
          {
            "zh": "今天的工作没有意思。",
            "py": "Jīntiān de gōngzuò méi yǒu yìsi.",
            "vi": "Công việc hôm nay chẳng thú vị gì."
          }
        ]
      },
      {
        "zh": "新",
        "py": "xīn",
        "vi": "mới",
        "type": "Tính từ",
        "ex": [
          {
            "zh": "这是我的新书。",
            "py": "Zhè shì wǒ de xīn shū.",
            "vi": "Đây là quyển sách mới của tôi."
          },
          {
            "zh": "他是新学生。",
            "py": "Tā shì xīn xuésheng.",
            "vi": "Anh ấy là học sinh mới."
          },
          {
            "zh": "这是新同学。",
            "py": "Zhè shì xīn tóngxué.",
            "vi": "Đây là bạn học mới."
          },
          {
            "zh": "我买了新书。",
            "py": "Wǒ mǎile xīn shū.",
            "vi": "Tôi đã mua sách mới."
          },
          {
            "zh": "这个班有新同学。",
            "py": "Zhège bān yǒu xīn tóngxué.",
            "vi": "Lớp này có bạn học mới."
          },
          {
            "zh": "我的手机是新的。",
            "py": "Wǒ de shǒujī shì xīn de.",
            "vi": "Điện thoại của tôi là đồ mới."
          },
          {
            "zh": "他买了一辆新自行车。",
            "py": "Tā mǎile yí liàng xīn zìxíngchē.",
            "vi": "Anh ấy mua một chiếc xe đạp mới."
          },
          {
            "zh": "我们有一个新老师。",
            "py": "Wǒmen yǒu yí ge xīn lǎoshī.",
            "vi": "Chúng tôi có một giáo viên mới."
          },
          {
            "zh": "新的箱子很贵。",
            "py": "Xīn de xiāngzi hěn guì.",
            "vi": "Vali mới rất đắt."
          },
          {
            "zh": "这是我的新同屋。",
            "py": "Zhè shì wǒ de xīn tóngwū.",
            "vi": "Đây là bạn cùng phòng mới của tôi."
          }
        ]
      },
      {
        "zh": "同学",
        "py": "tóngxué",
        "vi": "bạn học, bạn cùng lớp",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "她是我的同学。",
            "py": "Tā shì wǒ de tóngxué.",
            "vi": "Cô ấy là bạn học của tôi."
          },
          {
            "zh": "他是我的同学。",
            "py": "Tā shì wǒ de tóngxué.",
            "vi": "Anh ấy là bạn học của tôi."
          },
          {
            "zh": "同学们都很好。",
            "py": "Tóngxuémen dōu hěn hǎo.",
            "vi": "Các bạn học đều rất tốt."
          },
          {
            "zh": "她是新同学。",
            "py": "Tā shì xīn tóngxué.",
            "vi": "Cô ấy là bạn học mới."
          },
          {
            "zh": "我们班的同学很多。",
            "py": "Wǒmen bān de tóngxué hěn duō.",
            "vi": "Bạn học lớp chúng tôi rất đông."
          },
          {
            "zh": "我的同学都是留学生。",
            "py": "Wǒ de tóngxué dōu shì liúxuéshēng.",
            "vi": "Các bạn học của tôi đều là lưu học sinh."
          },
          {
            "zh": "我跟同学去吃饭。",
            "py": "Wǒ gēn tóngxué qù chīfàn.",
            "vi": "Tôi đi ăn cơm với bạn học."
          },
          {
            "zh": "你的同学是哪国人？",
            "py": "Nǐ de tóngxué shì nǎ guó rén?",
            "vi": "Bạn học của bạn là người nước nào?"
          },
          {
            "zh": "同学们，明天见！",
            "py": "Tóngxuémen, míngtiān jiàn!",
            "vi": "Các bạn ơi, mai gặp nhé!"
          },
          {
            "zh": "他是我的大学同学。",
            "py": "Tā shì wǒ de dàxué tóngxué.",
            "vi": "Anh ấy là bạn đại học của tôi."
          }
        ]
      },
      {
        "zh": "同屋",
        "py": "tóngwū",
        "vi": "bạn cùng phòng",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "给你介绍一下，这是我同屋。",
            "py": "Gěi nǐ jièshào yíxià, zhè shì wǒ tóngwū.",
            "vi": "Giới thiệu với bạn một chút, đây là bạn cùng phòng của tôi."
          },
          {
            "zh": "他是我的同屋。",
            "py": "Tā shì wǒ de tóngwū.",
            "vi": "Anh ấy là bạn cùng phòng của tôi."
          },
          {
            "zh": "我同屋很忙。",
            "py": "Wǒ tóngwū hěn máng.",
            "vi": "Bạn cùng phòng tôi rất bận."
          },
          {
            "zh": "我和同屋都学汉语。",
            "py": "Wǒ hé tóngwū dōu xué Hànyǔ.",
            "vi": "Tôi và bạn cùng phòng đều học tiếng Trung."
          },
          {
            "zh": "同屋是越南人。",
            "py": "Tóngwū shì Yuènán rén.",
            "vi": "Bạn cùng phòng là người Việt Nam."
          },
          {
            "zh": "我的同屋是日本人。",
            "py": "Wǒ de tóngwū shì Rìběn rén.",
            "vi": "Bạn cùng phòng của tôi là người Nhật."
          },
          {
            "zh": "同屋在房间里看书。",
            "py": "Tóngwū zài fángjiān lǐ kàn shū.",
            "vi": "Bạn cùng phòng đang đọc sách trong phòng."
          },
          {
            "zh": "你的同屋叫什么名字？",
            "py": "Nǐ de tóngwū jiào shénme míngzi?",
            "vi": "Bạn cùng phòng của bạn tên là gì?"
          },
          {
            "zh": "我和同屋经常去食堂吃饭。",
            "py": "Wǒ hé tóngwū jīngcháng qù shítáng chīfàn.",
            "vi": "Tôi và bạn cùng phòng thường đến nhà ăn ăn cơm."
          },
          {
            "zh": "同屋喜欢喝奶茶。",
            "py": "Tóngwū xǐhuan hē nǎichá.",
            "vi": "Bạn cùng phòng thích uống trà sữa."
          }
        ]
      },
      {
        "zh": "班",
        "py": "bān",
        "vi": "lớp, lớp học",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我们班有十个学生。",
            "py": "Wǒmen bān yǒu shí ge xuéshēng.",
            "vi": "Lớp chúng tôi có mười học sinh."
          },
          {
            "zh": "我们班很大。",
            "py": "Wǒmen bān hěn dà.",
            "vi": "Lớp chúng tôi rất đông."
          },
          {
            "zh": "他在哪个班？",
            "py": "Tā zài nǎge bān?",
            "vi": "Anh ấy học lớp nào?"
          },
          {
            "zh": "这个班有留学生。",
            "py": "Zhège bān yǒu liúxuéshēng.",
            "vi": "Lớp này có lưu học sinh."
          },
          {
            "zh": "她是我们班的同学。",
            "py": "Tā shì wǒmen bān de tóngxué.",
            "vi": "Cô ấy là bạn học lớp chúng tôi."
          },
          {
            "zh": "我们班的老师姓吴。",
            "py": "Wǒmen bān de lǎoshī xìng Wú.",
            "vi": "Giáo viên lớp chúng tôi họ Ngô."
          },
          {
            "zh": "你们班有几个越南人？",
            "py": "Nǐmen bān yǒu jǐ ge Yuènán rén?",
            "vi": "Lớp các bạn có mấy người Việt Nam?"
          },
          {
            "zh": "我们班明天去旅游。",
            "py": "Wǒmen bān míngtiān qù lǚyóu.",
            "vi": "Lớp chúng tôi ngày mai đi du lịch."
          },
          {
            "zh": "这个班的学生都很好。",
            "py": "Zhège bān de xuésheng dōu hěn hǎo.",
            "vi": "Học sinh lớp này đều rất ngoan."
          },
          {
            "zh": "你在几班？",
            "py": "Nǐ zài jǐ bān?",
            "vi": "Bạn học lớp mấy?"
          }
        ]
      },
      {
        "zh": "听力",
        "py": "tīnglì",
        "vi": "kỹ năng nghe",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我的听力不太好。",
            "py": "Wǒ de tīnglì bú tài hǎo.",
            "vi": "Kỹ năng nghe của tôi không tốt lắm."
          },
          {
            "zh": "听力比较难。",
            "py": "Tīnglì bǐjiào nán.",
            "vi": "Nghe hiểu khá khó."
          },
          {
            "zh": "听力不容易。",
            "py": "Tīnglì bù róngyì.",
            "vi": "Nghe hiểu không dễ."
          },
          {
            "zh": "他的听力很好。",
            "py": "Tā de tīnglì hěn hǎo.",
            "vi": "Khả năng nghe của anh ấy rất tốt."
          },
          {
            "zh": "听力和口语都不容易。",
            "py": "Tīnglì hé kǒuyǔ dōu bù róngyì.",
            "vi": "Nghe hiểu và nói đều không dễ."
          },
          {
            "zh": "今天的听力很难。",
            "py": "Jīntiān de tīnglì hěn nán.",
            "vi": "Bài nghe hôm nay rất khó."
          },
          {
            "zh": "我想学好听力。",
            "py": "Wǒ xiǎng xuéhǎo tīnglì.",
            "vi": "Tôi muốn học tốt kỹ năng nghe."
          },
          {
            "zh": "你的听力怎么样？",
            "py": "Nǐ de tīnglì zěnmeyàng?",
            "vi": "Kỹ năng nghe của bạn thế nào?"
          },
          {
            "zh": "听力老师是中国人。",
            "py": "Tīnglì lǎoshī shì Zhōngguó rén.",
            "vi": "Giáo viên nghe là người Trung Quốc."
          },
          {
            "zh": "多听汉语，听力就好了。",
            "py": "Duō tīng Hànyǔ, tīnglì jiù hǎo le.",
            "vi": "Nghe tiếng Trung nhiều thì kỹ năng nghe sẽ tốt lên."
          }
        ]
      },
      {
        "zh": "口语",
        "py": "kǒuyǔ",
        "vi": "khẩu ngữ, kỹ năng nói",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "他的口语很好。",
            "py": "Tā de kǒuyǔ hěn hǎo.",
            "vi": "Khẩu ngữ của anh ấy rất tốt."
          },
          {
            "zh": "他口语很好。",
            "py": "Tā kǒuyǔ hěn hǎo.",
            "vi": "Khả năng nói của anh ấy rất tốt."
          },
          {
            "zh": "口语比较难。",
            "py": "Kǒuyǔ bǐjiào nán.",
            "vi": "Nói khá khó."
          },
          {
            "zh": "口语很有意思。",
            "py": "Kǒuyǔ hěn yǒu yìsi.",
            "vi": "Nói (khẩu ngữ) rất thú vị."
          },
          {
            "zh": "口语和听力都难。",
            "py": "Kǒuyǔ hé tīnglì dōu nán.",
            "vi": "Nói và nghe đều khó."
          },
          {
            "zh": "你的口语很好！",
            "py": "Nǐ de kǒuyǔ hěn hǎo!",
            "vi": "Khẩu ngữ của bạn rất tốt!"
          },
          {
            "zh": "我想学好口语。",
            "py": "Wǒ xiǎng xuéhǎo kǒuyǔ.",
            "vi": "Tôi muốn học tốt khẩu ngữ."
          },
          {
            "zh": "口语要多说。",
            "py": "Kǒuyǔ yào duō shuō.",
            "vi": "Khẩu ngữ phải nói nhiều."
          },
          {
            "zh": "他的口语比我好。",
            "py": "Tā de kǒuyǔ bǐ wǒ hǎo.",
            "vi": "Khẩu ngữ của anh ấy tốt hơn tôi."
          },
          {
            "zh": "今天的口语很容易。",
            "py": "Jīntiān de kǒuyǔ hěn róngyì.",
            "vi": "Bài khẩu ngữ hôm nay rất dễ."
          }
        ]
      },
      {
        "zh": "阅读",
        "py": "yuèdú",
        "vi": "đọc hiểu",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我觉得阅读比较容易。",
            "py": "Wǒ juéde yuèdú bǐjiào róngyì.",
            "vi": "Tôi thấy đọc hiểu tương đối dễ."
          },
          {
            "zh": "阅读很有意思。",
            "py": "Yuèdú hěn yǒu yìsi.",
            "vi": "Đọc hiểu rất thú vị."
          },
          {
            "zh": "阅读比较容易。",
            "py": "Yuèdú bǐjiào róngyì.",
            "vi": "Đọc hiểu khá dễ."
          },
          {
            "zh": "阅读不太难。",
            "py": "Yuèdú bú tài nán.",
            "vi": "Đọc hiểu không khó lắm."
          },
          {
            "zh": "他喜欢阅读。",
            "py": "Tā xǐhuan yuèdú.",
            "vi": "Anh ấy thích đọc hiểu."
          },
          {
            "zh": "我喜欢阅读中文书。",
            "py": "Wǒ xǐhuan yuèdú Zhōngwén shū.",
            "vi": "Tôi thích đọc sách tiếng Trung."
          },
          {
            "zh": "今天的阅读很有意思。",
            "py": "Jīntiān de yuèdú hěn yǒu yìsi.",
            "vi": "Bài đọc hôm nay rất thú vị."
          },
          {
            "zh": "阅读老师是谁？",
            "py": "Yuèdú lǎoshī shì shéi?",
            "vi": "Giáo viên đọc hiểu là ai?"
          },
          {
            "zh": "我的阅读比较好。",
            "py": "Wǒ de yuèdú bǐjiào hǎo.",
            "vi": "Đọc hiểu của tôi tương đối tốt."
          },
          {
            "zh": "阅读的汉字很多。",
            "py": "Yuèdú de Hànzì hěn duō.",
            "vi": "Bài đọc có rất nhiều chữ Hán."
          }
        ]
      },
      {
        "zh": "写作",
        "py": "xiězuò",
        "vi": "viết văn, kỹ năng viết",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "写作很难。",
            "py": "Xiězuò hěn nán.",
            "vi": "Viết văn rất khó."
          },
          {
            "zh": "写作比较难。",
            "py": "Xiězuò bǐjiào nán.",
            "vi": "Viết luận khá khó."
          },
          {
            "zh": "我不喜欢写作。",
            "py": "Wǒ bù xǐhuan xiězuò.",
            "vi": "Tôi không thích viết luận."
          },
          {
            "zh": "写作和听力都不容易。",
            "py": "Xiězuò hé tīnglì dōu bù róngyì.",
            "vi": "Viết luận và nghe hiểu đều không dễ."
          },
          {
            "zh": "她的写作很好。",
            "py": "Tā de xiězuò hěn hǎo.",
            "vi": "Khả năng viết luận của cô ấy rất tốt."
          },
          {
            "zh": "写作老师很好。",
            "py": "Xiězuò lǎoshī hěn hǎo.",
            "vi": "Giáo viên viết rất tốt."
          },
          {
            "zh": "今天的写作是“我的家”。",
            "py": "Jīntiān de xiězuò shì “Wǒ de jiā”.",
            "vi": "Bài viết hôm nay là “Nhà của tôi”."
          },
          {
            "zh": "他的写作比较好。",
            "py": "Tā de xiězuò bǐjiào hǎo.",
            "vi": "Kỹ năng viết của anh ấy tương đối tốt."
          },
          {
            "zh": "写作要多写。",
            "py": "Xiězuò yào duō xiě.",
            "vi": "Muốn viết tốt phải viết nhiều."
          },
          {
            "zh": "写作和阅读，你喜欢哪个？",
            "py": "Xiězuò hé yuèdú, nǐ xǐhuan nǎge?",
            "vi": "Viết và đọc hiểu, bạn thích cái nào?"
          }
        ]
      },
      {
        "zh": "技能",
        "py": "jìnéng",
        "vi": "kỹ năng",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "听、说、读、写是四个技能。",
            "py": "Tīng, shuō, dú, xiě shì sì ge jìnéng.",
            "vi": "Nghe, nói, đọc, viết là bốn kỹ năng."
          },
          {
            "zh": "写汉字是一个技能。",
            "py": "Xiě Hànzì shì yí ge jìnéng.",
            "vi": "Viết chữ Hán là một kỹ năng."
          },
          {
            "zh": "口语是一种技能。",
            "py": "Kǒuyǔ shì yì zhǒng jìnéng.",
            "vi": "Nói là một loại kỹ năng."
          },
          {
            "zh": "这个技能很有意思。",
            "py": "Zhège jìnéng hěn yǒu yìsi.",
            "vi": "Kỹ năng này rất thú vị."
          },
          {
            "zh": "写作技能比较难。",
            "py": "Xiězuò jìnéng bǐjiào nán.",
            "vi": "Kỹ năng viết luận khá khó."
          },
          {
            "zh": "开车是一个技能。",
            "py": "Kāichē shì yí ge jìnéng.",
            "vi": "Lái xe là một kỹ năng."
          },
          {
            "zh": "你觉得哪个技能最难？",
            "py": "Nǐ juéde nǎge jìnéng zuì nán?",
            "vi": "Bạn thấy kỹ năng nào khó nhất?"
          },
          {
            "zh": "我想学一个新技能。",
            "py": "Wǒ xiǎng xué yí ge xīn jìnéng.",
            "vi": "Tôi muốn học một kỹ năng mới."
          },
          {
            "zh": "做饭也是一个技能。",
            "py": "Zuòfàn yě shì yí ge jìnéng.",
            "vi": "Nấu ăn cũng là một kỹ năng."
          },
          {
            "zh": "他的工作技能很好。",
            "py": "Tā de gōngzuò jìnéng hěn hǎo.",
            "vi": "Kỹ năng làm việc của anh ấy rất tốt."
          }
        ]
      },
      {
        "zh": "好看",
        "py": "hǎokàn",
        "vi": "đẹp, xinh (nhìn)",
        "type": "Tính từ",
        "ex": [
          {
            "zh": "她是一位好看的秘书。",
            "py": "Tā shì yí wèi hǎokàn de mìshū.",
            "vi": "Cô ấy là một thư ký xinh đẹp."
          },
          {
            "zh": "这本书很好看。",
            "py": "Zhè běn shū hěn hǎokàn.",
            "vi": "Cuốn sách này rất hay/đẹp."
          },
          {
            "zh": "她很好看。",
            "py": "Tā hěn hǎokàn.",
            "vi": "Cô ấy rất xinh đẹp."
          },
          {
            "zh": "这个字很好看。",
            "py": "Zhège zì hěn hǎokàn.",
            "vi": "Chữ này viết rất đẹp."
          },
          {
            "zh": "这条街很好看。",
            "py": "Zhè tiáo jiē hěn hǎokàn.",
            "vi": "Con phố này rất đẹp."
          },
          {
            "zh": "你的照片很好看。",
            "py": "Nǐ de zhàopiàn hěn hǎokàn.",
            "vi": "Ảnh của bạn rất đẹp."
          },
          {
            "zh": "这辆车的颜色很好看。",
            "py": "Zhè liàng chē de yánsè hěn hǎokàn.",
            "vi": "Màu của chiếc xe này rất đẹp."
          },
          {
            "zh": "这本杂志不好看。",
            "py": "Zhè běn zázhì bù hǎokàn.",
            "vi": "Quyển tạp chí này không hay."
          },
          {
            "zh": "晚上的河内很好看。",
            "py": "Wǎnshang de Hénèi hěn hǎokàn.",
            "vi": "Hà Nội buổi tối rất đẹp."
          },
          {
            "zh": "黄色的衬衣很好看。",
            "py": "Huángsè de chènyī hěn hǎokàn.",
            "vi": "Áo sơ mi màu vàng rất đẹp."
          }
        ]
      },
      {
        "zh": "好吃",
        "py": "hǎochī",
        "vi": "ngon (đồ ăn)",
        "type": "Tính từ",
        "ex": [
          {
            "zh": "公司食堂的包子很好吃。",
            "py": "Gōngsī shítáng de bāozi hěn hǎochī.",
            "vi": "Bánh bao ở nhà ăn công ty rất ngon."
          },
          {
            "zh": "饺子很好吃。",
            "py": "Jiǎozi hěn hǎochī.",
            "vi": "Sủi cảo rất ngon."
          },
          {
            "zh": "食堂的饭很好吃。",
            "py": "Shítáng de fàn hěn hǎochī.",
            "vi": "Cơm ở căng tin rất ngon."
          },
          {
            "zh": "这个西瓜很好吃。",
            "py": "Zhège xīguā hěn hǎochī.",
            "vi": "Quả dưa hấu này rất ngon."
          },
          {
            "zh": "包子不好吃。",
            "py": "Bāozi bù hǎochī.",
            "vi": "Bánh bao không ngon."
          },
          {
            "zh": "妈妈做的饺子很好吃。",
            "py": "Māma zuò de jiǎozi hěn hǎochī.",
            "vi": "Sủi cảo mẹ làm rất ngon."
          },
          {
            "zh": "这个芒果好吃吗？",
            "py": "Zhège mángguǒ hǎochī ma?",
            "vi": "Quả xoài này có ngon không?"
          },
          {
            "zh": "食堂的面条不好吃。",
            "py": "Shítáng de miàntiáo bù hǎochī.",
            "vi": "Mì ở nhà ăn không ngon."
          },
          {
            "zh": "什么东西最好吃？",
            "py": "Shénme dōngxi zuì hǎochī?",
            "vi": "Món gì ngon nhất?"
          },
          {
            "zh": "这儿的鸡很好吃。",
            "py": "Zhèr de jī hěn hǎochī.",
            "vi": "Gà ở đây rất ngon."
          }
        ]
      },
      {
        "zh": "好喝",
        "py": "hǎohē",
        "vi": "ngon (đồ uống)",
        "type": "Tính từ",
        "ex": [
          {
            "zh": "昨天的奶茶好喝吗？",
            "py": "Zuótiān de nǎichá hǎohē ma?",
            "vi": "Trà sữa hôm qua có ngon không?"
          },
          {
            "zh": "奶茶很好喝。",
            "py": "Nǎichá hěn hǎohē.",
            "vi": "Trà sữa rất ngon."
          },
          {
            "zh": "这杯咖啡很好喝。",
            "py": "Zhè bēi kāfēi hěn hǎohē.",
            "vi": "Cốc cà phê này rất ngon."
          },
          {
            "zh": "水果汁很好喝。",
            "py": "Shuǐguǒzhī hěn hǎohē.",
            "vi": "Nước ép trái cây rất ngon."
          },
          {
            "zh": "白水不好喝。",
            "py": "Báishuǐ bù hǎohē.",
            "vi": "Nước lọc không ngon."
          },
          {
            "zh": "这杯水果汁不好喝。",
            "py": "Zhè bēi shuǐguǒzhī bù hǎohē.",
            "vi": "Cốc nước ép này không ngon."
          },
          {
            "zh": "中国茶很好喝。",
            "py": "Zhōngguó chá hěn hǎohē.",
            "vi": "Trà Trung Quốc rất ngon."
          },
          {
            "zh": "这个汤好喝吗？",
            "py": "Zhège tāng hǎohē ma?",
            "vi": "Canh này có ngon không?"
          },
          {
            "zh": "啤酒好喝还是可乐好喝？",
            "py": "Píjiǔ hǎohē háishì kělè hǎohē?",
            "vi": "Bia ngon hay coca ngon?"
          },
          {
            "zh": "妈妈做的鸡汤最好喝。",
            "py": "Māma zuò de jītāng zuì hǎohē.",
            "vi": "Canh gà mẹ nấu ngon nhất."
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 16 (b17): 买东西 – Mua đồ dùng",
    "words": [
      {
        "zh": "箱子",
        "py": "xiāngzi",
        "vi": "cái vali, cái rương",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我有一个比较大的箱子。",
            "py": "Wǒ yǒu yí ge bǐjiào dà de xiāngzi.",
            "vi": "Tôi có một cái vali khá to."
          },
          {
            "zh": "这是我昨天买的箱子。",
            "py": "Zhè shì wǒ zuótiān mǎi de xiāngzi.",
            "vi": "Đây là cái vali tôi mua hôm qua."
          },
          {
            "zh": "你的箱子重不重？",
            "py": "Nǐ de xiāngzi zhòng bu zhòng?",
            "vi": "Vali của bạn có nặng không?"
          },
          {
            "zh": "我的箱子里是衣服。",
            "py": "Wǒ de xiāngzi lǐ shì yīfu.",
            "vi": "Trong vali của tôi là quần áo."
          },
          {
            "zh": "这个箱子多少钱？",
            "py": "Zhège xiāngzi duōshao qián?",
            "vi": "Cái vali này bao nhiêu tiền?"
          },
          {
            "zh": "我要买两个箱子。",
            "py": "Wǒ yào mǎi liǎng ge xiāngzi.",
            "vi": "Tôi muốn mua hai cái vali."
          },
          {
            "zh": "这个箱子是在商场买的。",
            "py": "Zhège xiāngzi shì zài shāngchǎng mǎi de.",
            "vi": "Cái vali này mua ở trung tâm thương mại."
          },
          {
            "zh": "我的箱子是灰色的。",
            "py": "Wǒ de xiāngzi shì huīsè de.",
            "vi": "Vali của tôi màu xám."
          },
          {
            "zh": "箱子里有什么东西？",
            "py": "Xiāngzi lǐ yǒu shénme dōngxi?",
            "vi": "Trong vali có đồ gì?"
          },
          {
            "zh": "他的箱子很旧了。",
            "py": "Tā de xiāngzi hěn jiù le.",
            "vi": "Vali của anh ấy cũ lắm rồi."
          },
          {
            "zh": "我想买一个轻一点儿的箱子。",
            "py": "Wǒ xiǎng mǎi yí ge qīng yìdiǎnr de xiāngzi.",
            "vi": "Tôi muốn mua một cái vali nhẹ hơn một chút."
          }
        ]
      },
      {
        "zh": "重",
        "py": "zhòng",
        "vi": "nặng",
        "type": "Tính từ",
        "ex": [
          {
            "zh": "这个箱子比较重。",
            "py": "Zhège xiāngzi bǐjiào zhòng.",
            "vi": "Cái vali này khá nặng."
          },
          {
            "zh": "这些书很重。",
            "py": "Zhèxiē shū hěn zhòng.",
            "vi": "Những quyển sách này rất nặng."
          },
          {
            "zh": "这把雨伞不重。",
            "py": "Zhè bǎ yǔsǎn bú zhòng.",
            "vi": "Cái ô này không nặng."
          },
          {
            "zh": "你的箱子重吗？",
            "py": "Nǐ de xiāngzi zhòng ma?",
            "vi": "Vali của bạn nặng không?"
          },
          {
            "zh": "这个不太重。",
            "py": "Zhège bú tài zhòng.",
            "vi": "Cái này không nặng lắm."
          },
          {
            "zh": "重的箱子是我的。",
            "py": "Zhòng de xiāngzi shì wǒ de.",
            "vi": "Cái vali nặng là của tôi."
          },
          {
            "zh": "你的书包重不重？",
            "py": "Nǐ de shūbāo zhòng bu zhòng?",
            "vi": "Cặp sách của bạn có nặng không?"
          },
          {
            "zh": "照相机不太重。",
            "py": "Zhàoxiàngjī bú tài zhòng.",
            "vi": "Máy ảnh không nặng lắm."
          },
          {
            "zh": "那瓶酒很重。",
            "py": "Nà píng jiǔ hěn zhòng.",
            "vi": "Chai rượu kia rất nặng."
          },
          {
            "zh": "箱子太重了，我们坐出租车吧。",
            "py": "Xiāngzi tài zhòng le, wǒmen zuò chūzūchē ba.",
            "vi": "Vali nặng quá, chúng ta đi taxi đi."
          },
          {
            "zh": "他的箱子有二十公斤，很重。",
            "py": "Tā de xiāngzi yǒu èrshí gōngjīn, hěn zhòng.",
            "vi": "Vali của anh ấy hai mươi ki-lô, rất nặng."
          }
        ]
      },
      {
        "zh": "轻",
        "py": "qīng",
        "vi": "nhẹ",
        "type": "Tính từ",
        "ex": [
          {
            "zh": "那个箱子比较轻。",
            "py": "Nàge xiāngzi bǐjiào qīng.",
            "vi": "Cái vali kia khá nhẹ."
          },
          {
            "zh": "我要买一个轻的箱子。",
            "py": "Wǒ yào mǎi yí ge qīng de xiāngzi.",
            "vi": "Tôi muốn mua một cái vali nhẹ."
          },
          {
            "zh": "这个雨伞很轻。",
            "py": "Zhège yǔsǎn hěn qīng.",
            "vi": "Cái ô này rất nhẹ."
          },
          {
            "zh": "我的词典不轻。",
            "py": "Wǒ de cídiǎn bù qīng.",
            "vi": "Từ điển của tôi không nhẹ."
          },
          {
            "zh": "轻的是她的，重的是我的。",
            "py": "Qīng de shì tā de, zhòng de shì wǒ de.",
            "vi": "Cái nhẹ là của cô ấy, cái nặng là của tôi."
          },
          {
            "zh": "这件毛衣很轻。",
            "py": "Zhè jiàn máoyī hěn qīng.",
            "vi": "Chiếc áo len này rất nhẹ."
          },
          {
            "zh": "新手机很轻。",
            "py": "Xīn shǒujī hěn qīng.",
            "vi": "Điện thoại mới rất nhẹ."
          },
          {
            "zh": "这本杂志很轻。",
            "py": "Zhè běn zázhì hěn qīng.",
            "vi": "Quyển tạp chí này rất nhẹ."
          },
          {
            "zh": "我的箱子比你的轻。",
            "py": "Wǒ de xiāngzi bǐ nǐ de qīng.",
            "vi": "Vali của tôi nhẹ hơn của bạn."
          },
          {
            "zh": "这把雨伞不轻。",
            "py": "Zhè bǎ yǔsǎn bù qīng.",
            "vi": "Chiếc ô này không nhẹ."
          }
        ]
      },
      {
        "zh": "红色",
        "py": "hóngsè",
        "vi": "màu đỏ",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我想买一个红色的箱子。",
            "py": "Wǒ xiǎng mǎi yí ge hóngsè de xiāngzi.",
            "vi": "Tôi muốn mua một cái vali màu đỏ."
          },
          {
            "zh": "红色的衣服很好看。",
            "py": "Hóngsè de yīfu hěn hǎokàn.",
            "vi": "Quần áo màu đỏ rất đẹp."
          },
          {
            "zh": "这是红色的雨伞。",
            "py": "Zhè shì hóngsè de yǔsǎn.",
            "vi": "Đây là chiếc ô màu đỏ."
          },
          {
            "zh": "你喜欢红色吗？",
            "py": "Nǐ xǐhuan hóngsè ma?",
            "vi": "Bạn thích màu đỏ không?"
          },
          {
            "zh": "我老婆喜欢红色。",
            "py": "Wǒ lǎopo xǐhuan hóngsè.",
            "vi": "Vợ tôi thích màu đỏ."
          },
          {
            "zh": "红色的汽车很好看。",
            "py": "Hóngsè de qìchē hěn hǎokàn.",
            "vi": "Ô tô màu đỏ rất đẹp."
          },
          {
            "zh": "中国人喜欢红色。",
            "py": "Zhōngguó rén xǐhuan hóngsè.",
            "vi": "Người Trung Quốc thích màu đỏ."
          },
          {
            "zh": "我有一件红色的毛衣。",
            "py": "Wǒ yǒu yí jiàn hóngsè de máoyī.",
            "vi": "Tôi có một chiếc áo len màu đỏ."
          },
          {
            "zh": "红色的苹果比较好吃。",
            "py": "Hóngsè de píngguǒ bǐjiào hǎochī.",
            "vi": "Táo màu đỏ tương đối ngon."
          },
          {
            "zh": "你要红色的还是灰色的？",
            "py": "Nǐ yào hóngsè de háishì huīsè de?",
            "vi": "Bạn muốn màu đỏ hay màu xám?"
          }
        ]
      },
      {
        "zh": "黑色",
        "py": "hēisè",
        "vi": "màu đen",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "黑色的箱子是我的。",
            "py": "Hēisè de xiāngzi shì wǒ de.",
            "vi": "Cái vali màu đen là của tôi."
          },
          {
            "zh": "我要买一件黑色的衣服。",
            "py": "Wǒ yào mǎi yí jiàn hēisè de yīfu.",
            "vi": "Tôi muốn mua một bộ quần áo màu đen."
          },
          {
            "zh": "他喜欢黑色。",
            "py": "Tā xǐhuan hēisè.",
            "vi": "Anh ấy thích màu đen."
          },
          {
            "zh": "这把伞是黑色的。",
            "py": "Zhè bǎ sǎn shì hēisè de.",
            "vi": "Chiếc ô này màu đen."
          },
          {
            "zh": "黑色的词典是谁的？",
            "py": "Hēisè de cídiǎn shì shéi de?",
            "vi": "Quyển từ điển màu đen là của ai?"
          },
          {
            "zh": "我的手机是黑色的。",
            "py": "Wǒ de shǒujī shì hēisè de.",
            "vi": "Điện thoại của tôi màu đen."
          },
          {
            "zh": "黑色的衬衣很好看。",
            "py": "Hēisè de chènyī hěn hǎokàn.",
            "vi": "Áo sơ mi màu đen rất đẹp."
          },
          {
            "zh": "经理开一辆黑色的汽车。",
            "py": "Jīnglǐ kāi yí liàng hēisè de qìchē.",
            "vi": "Giám đốc lái một chiếc ô tô màu đen."
          },
          {
            "zh": "这个黑色的箱子多少钱？",
            "py": "Zhège hēisè de xiāngzi duōshao qián?",
            "vi": "Cái vali màu đen này bao nhiêu tiền?"
          },
          {
            "zh": "我不喜欢黑色。",
            "py": "Wǒ bù xǐhuan hēisè.",
            "vi": "Tôi không thích màu đen."
          }
        ]
      },
      {
        "zh": "药",
        "py": "yào",
        "vi": "thuốc",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "今天我要喝一些药。",
            "py": "Jīntiān wǒ yào hē yìxiē yào.",
            "vi": "Hôm nay tôi phải uống một ít thuốc."
          },
          {
            "zh": "你吃药了吗？",
            "py": "Nǐ chī yào le ma?",
            "vi": "Bạn uống thuốc chưa?"
          },
          {
            "zh": "我去买一些药。",
            "py": "Wǒ qù mǎi yìxiē yào.",
            "vi": "Tôi đi mua một ít thuốc."
          },
          {
            "zh": "这些药是我老公的。",
            "py": "Zhèxiē yào shì wǒ lǎogōng de.",
            "vi": "Những thuốc này là của chồng tôi."
          },
          {
            "zh": "药在箱子里。",
            "py": "Yào zài xiāngzi lǐ.",
            "vi": "Thuốc ở trong vali."
          },
          {
            "zh": "我不喜欢吃药。",
            "py": "Wǒ bù xǐhuan chī yào.",
            "vi": "Tôi không thích uống thuốc."
          },
          {
            "zh": "这个药很贵。",
            "py": "Zhège yào hěn guì.",
            "vi": "Thuốc này rất đắt."
          },
          {
            "zh": "吃了药，我好多了。",
            "py": "Chīle yào, wǒ hǎo duō le.",
            "vi": "Uống thuốc xong, tôi khỏe hơn nhiều rồi."
          },
          {
            "zh": "医生给我开了一些药。",
            "py": "Yīshēng gěi wǒ kāile yìxiē yào.",
            "vi": "Bác sĩ kê cho tôi một ít thuốc."
          },
          {
            "zh": "药在我的房间里。",
            "py": "Yào zài wǒ de fángjiān lǐ.",
            "vi": "Thuốc ở trong phòng tôi."
          },
          {
            "zh": "你买药了吗？",
            "py": "Nǐ mǎi yào le ma?",
            "vi": "Bạn đã mua thuốc chưa?"
          }
        ]
      },
      {
        "zh": "中药",
        "py": "zhōngyào",
        "vi": "thuốc bắc",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "这是一些中药。",
            "py": "Zhè shì yìxiē zhōngyào.",
            "vi": "Đây là một ít thuốc bắc."
          },
          {
            "zh": "中药很贵。",
            "py": "Zhōngyào hěn guì.",
            "vi": "Thuốc bắc rất đắt."
          },
          {
            "zh": "我妈妈喜欢喝中药。",
            "py": "Wǒ māma xǐhuan hē zhōngyào.",
            "vi": "Mẹ tôi thích uống thuốc bắc."
          },
          {
            "zh": "你要买中药吗？",
            "py": "Nǐ yào mǎi zhōngyào ma?",
            "vi": "Bạn muốn mua thuốc bắc không?"
          },
          {
            "zh": "这些中药是我在中国买的。",
            "py": "Zhèxiē zhōngyào shì wǒ zài Zhōngguó mǎi de.",
            "vi": "Những thuốc bắc này là tôi mua ở Trung Quốc."
          },
          {
            "zh": "爷爷喜欢吃中药。",
            "py": "Yéye xǐhuan chī zhōngyào.",
            "vi": "Ông nội thích dùng thuốc bắc."
          },
          {
            "zh": "中药有点儿难喝。",
            "py": "Zhōngyào yǒudiǎnr nán hē.",
            "vi": "Thuốc bắc hơi khó uống."
          },
          {
            "zh": "这家商店卖中药。",
            "py": "Zhè jiā shāngdiàn mài zhōngyào.",
            "vi": "Cửa hàng này bán thuốc bắc."
          },
          {
            "zh": "中药比西药便宜吗？",
            "py": "Zhōngyào bǐ xīyào piányi ma?",
            "vi": "Thuốc bắc có rẻ hơn thuốc tây không?"
          },
          {
            "zh": "他给我寄了一些中药。",
            "py": "Tā gěi wǒ jìle yìxiē zhōngyào.",
            "vi": "Anh ấy gửi cho tôi một ít thuốc bắc."
          }
        ]
      },
      {
        "zh": "西药",
        "py": "xīyào",
        "vi": "thuốc tây",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我要买一些西药。",
            "py": "Wǒ yào mǎi yìxiē xīyào.",
            "vi": "Tôi muốn mua một ít thuốc tây."
          },
          {
            "zh": "西药贵不贵？",
            "py": "Xīyào guì bu guì?",
            "vi": "Thuốc tây có đắt không?"
          },
          {
            "zh": "我想买一些西药。",
            "py": "Wǒ xiǎng mǎi yìxiē xīyào.",
            "vi": "Tôi muốn mua một ít thuốc tây."
          },
          {
            "zh": "我喜欢吃西药，不喜欢喝中药。",
            "py": "Wǒ xǐhuan chī xīyào, bù xǐhuan hē zhōngyào.",
            "vi": "Tôi thích uống thuốc tây, không thích uống thuốc bắc."
          },
          {
            "zh": "他去买西药。",
            "py": "Tā qù mǎi xīyào.",
            "vi": "Anh ấy đi mua thuốc tây."
          },
          {
            "zh": "这些西药是在越南买的。",
            "py": "Zhèxiē xīyào shì zài Yuènán mǎi de.",
            "vi": "Những thuốc tây này mua ở Việt Nam."
          },
          {
            "zh": "西药在哪儿买？",
            "py": "Xīyào zài nǎr mǎi?",
            "vi": "Thuốc tây mua ở đâu?"
          },
          {
            "zh": "医生给了我一些西药。",
            "py": "Yīshēng gěile wǒ yìxiē xīyào.",
            "vi": "Bác sĩ đưa cho tôi một ít thuốc tây."
          },
          {
            "zh": "西药比中药贵。",
            "py": "Xīyào bǐ zhōngyào guì.",
            "vi": "Thuốc tây đắt hơn thuốc bắc."
          },
          {
            "zh": "你吃中药还是吃西药？",
            "py": "Nǐ chī zhōngyào háishì chī xīyào?",
            "vi": "Bạn dùng thuốc bắc hay thuốc tây?"
          }
        ]
      },
      {
        "zh": "茶叶",
        "py": "cháyè",
        "vi": "lá trà, chè",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我要买一斤茶叶。",
            "py": "Wǒ yào mǎi yì jīn cháyè.",
            "vi": "Tôi muốn mua một cân lá trà."
          },
          {
            "zh": "这些茶叶都是我买的。",
            "py": "Zhèxiē cháyè dōu shì wǒ mǎi de.",
            "vi": "Những lá trà này đều là tôi mua."
          },
          {
            "zh": "这些茶叶很香。",
            "py": "Zhèxiē cháyè hěn xiāng.",
            "vi": "Trà này rất thơm."
          },
          {
            "zh": "中国茶叶很好喝。",
            "py": "Zhōngguó cháyè hěn hǎohē.",
            "vi": "Trà Trung Quốc rất ngon."
          },
          {
            "zh": "茶叶多少钱一斤？",
            "py": "Cháyè duōshao qián yì jīn?",
            "vi": "Lá trà bao nhiêu tiền một cân?"
          },
          {
            "zh": "这是越南茶叶。",
            "py": "Zhè shì Yuènán cháyè.",
            "vi": "Đây là chè Việt Nam."
          },
          {
            "zh": "我给爸爸买了两斤茶叶。",
            "py": "Wǒ gěi bàba mǎile liǎng jīn cháyè.",
            "vi": "Tôi mua cho bố hai cân lá trà."
          },
          {
            "zh": "这儿的茶叶很便宜。",
            "py": "Zhèr de cháyè hěn piányi.",
            "vi": "Lá trà ở đây rất rẻ."
          },
          {
            "zh": "绿茶的茶叶是绿色的。",
            "py": "Lǜchá de cháyè shì lǜsè de.",
            "vi": "Lá của trà xanh có màu xanh lá."
          },
          {
            "zh": "这些茶叶是朋友给我的。",
            "py": "Zhèxiē cháyè shì péngyou gěi wǒ de.",
            "vi": "Những lá trà này là bạn tặng tôi."
          }
        ]
      },
      {
        "zh": "里",
        "py": "lǐ",
        "vi": "trong, bên trong",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "房间里有三个人。",
            "py": "Fángjiān lǐ yǒu sān ge rén.",
            "vi": "Trong phòng có ba người."
          },
          {
            "zh": "箱子里有一些中药。",
            "py": "Xiāngzi lǐ yǒu yìxiē zhōngyào.",
            "vi": "Trong vali có một ít thuốc bắc."
          },
          {
            "zh": "公司里有食堂吗？",
            "py": "Gōngsī lǐ yǒu shítáng ma?",
            "vi": "Trong công ty có nhà ăn không?"
          },
          {
            "zh": "学校里有很多学生。",
            "py": "Xuéxiào lǐ yǒu hěn duō xuéshēng.",
            "vi": "Trong trường có rất nhiều học sinh."
          },
          {
            "zh": "我的钱在箱子里。",
            "py": "Wǒ de qián zài xiāngzi lǐ.",
            "vi": "Tiền của tôi ở trong vali."
          },
          {
            "zh": "杯子里有咖啡。",
            "py": "Bēizi lǐ yǒu kāfēi.",
            "vi": "Trong cốc có cà phê."
          },
          {
            "zh": "办公室里没有人。",
            "py": "Bàngōngshì lǐ méiyǒu rén.",
            "vi": "Trong văn phòng không có ai."
          },
          {
            "zh": "商场里有银行吗？",
            "py": "Shāngchǎng lǐ yǒu yínháng ma?",
            "vi": "Trong trung tâm thương mại có ngân hàng không?"
          },
          {
            "zh": "我的手机在房间里。",
            "py": "Wǒ de shǒujī zài fángjiān lǐ.",
            "vi": "Điện thoại của tôi ở trong phòng."
          },
          {
            "zh": "酒店里有食堂。",
            "py": "Jiǔdiàn lǐ yǒu shítáng.",
            "vi": "Trong khách sạn có nhà ăn."
          }
        ]
      },
      {
        "zh": "日用品",
        "py": "rìyòngpǐn",
        "vi": "đồ dùng hằng ngày",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我想买一些日用品。",
            "py": "Wǒ xiǎng mǎi yìxiē rìyòngpǐn.",
            "vi": "Tôi muốn mua một ít đồ dùng hằng ngày."
          },
          {
            "zh": "这些日用品是新的。",
            "py": "Zhèxiē rìyòngpǐn shì xīn de.",
            "vi": "Những đồ dùng này là đồ mới."
          },
          {
            "zh": "日用品在哪儿买？",
            "py": "Rìyòngpǐn zài nǎr mǎi?",
            "vi": "Đồ dùng hằng ngày mua ở đâu?"
          },
          {
            "zh": "我老公经常买日用品。",
            "py": "Wǒ lǎogōng jīngcháng mǎi rìyòngpǐn.",
            "vi": "Chồng tôi thường mua đồ dùng hằng ngày."
          },
          {
            "zh": "这些日用品很便宜。",
            "py": "Zhèxiē rìyòngpǐn hěn piányi.",
            "vi": "Những đồ dùng hàng ngày này rất rẻ."
          },
          {
            "zh": "这家商店卖日用品。",
            "py": "Zhè jiā shāngdiàn mài rìyòngpǐn.",
            "vi": "Cửa hàng này bán đồ dùng hằng ngày."
          },
          {
            "zh": "我去商场买日用品。",
            "py": "Wǒ qù shāngchǎng mǎi rìyòngpǐn.",
            "vi": "Tôi đến trung tâm thương mại mua đồ dùng hằng ngày."
          },
          {
            "zh": "日用品在二楼。",
            "py": "Rìyòngpǐn zài èr lóu.",
            "vi": "Đồ dùng hằng ngày ở tầng hai."
          },
          {
            "zh": "这些日用品一共多少钱？",
            "py": "Zhèxiē rìyòngpǐn yígòng duōshao qián?",
            "vi": "Những đồ dùng này tổng cộng bao nhiêu tiền?"
          },
          {
            "zh": "越南的日用品不太贵。",
            "py": "Yuènán de rìyòngpǐn bú tài guì.",
            "vi": "Đồ dùng hằng ngày ở Việt Nam không đắt lắm."
          }
        ]
      },
      {
        "zh": "衣服",
        "py": "yīfu",
        "vi": "quần áo",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "我要买一件新衣服。",
            "py": "Wǒ yào mǎi yí jiàn xīn yīfu.",
            "vi": "Tôi muốn mua một bộ quần áo mới."
          },
          {
            "zh": "我想买一件红色的衣服。",
            "py": "Wǒ xiǎng mǎi yí jiàn hóngsè de yīfu.",
            "vi": "Tôi muốn mua một chiếc áo màu đỏ."
          },
          {
            "zh": "你的衣服太贵了。",
            "py": "Nǐ de yīfu tài guì le.",
            "vi": "Quần áo của bạn đắt quá."
          },
          {
            "zh": "我喜欢红色的衣服。",
            "py": "Wǒ xǐhuan hóngsè de yīfu.",
            "vi": "Tôi thích quần áo màu đỏ."
          },
          {
            "zh": "这件衣服多少钱？",
            "py": "Zhè jiàn yīfu duōshao qián?",
            "vi": "Bộ quần áo này bao nhiêu tiền?"
          },
          {
            "zh": "她买很多衣服。",
            "py": "Tā mǎi hěn duō yīfu.",
            "vi": "Cô ấy mua rất nhiều quần áo."
          },
          {
            "zh": "这件衣服是我妈妈买的。",
            "py": "Zhè jiàn yīfu shì wǒ māma mǎi de.",
            "vi": "Bộ quần áo này là mẹ tôi mua."
          },
          {
            "zh": "我想去商场买衣服。",
            "py": "Wǒ xiǎng qù shāngchǎng mǎi yīfu.",
            "vi": "Tôi muốn đi trung tâm thương mại mua quần áo."
          },
          {
            "zh": "他的衣服都是黑色的。",
            "py": "Tā de yīfu dōu shì hēisè de.",
            "vi": "Quần áo của anh ấy đều màu đen."
          },
          {
            "zh": "这儿的衣服很便宜。",
            "py": "Zhèr de yīfu hěn piányi.",
            "vi": "Quần áo ở đây rất rẻ."
          },
          {
            "zh": "箱子里有我的衣服。",
            "py": "Xiāngzi lǐ yǒu wǒ de yīfu.",
            "vi": "Trong vali có quần áo của tôi."
          }
        ]
      },
      {
        "zh": "件",
        "py": "jiàn",
        "vi": "chiếc, bộ (lượng từ quần áo, việc)",
        "type": "Lượng từ",
        "ex": [
          {
            "zh": "一件衣服",
            "py": "yí jiàn yīfu",
            "vi": "một bộ quần áo"
          },
          {
            "zh": "我要买两件衣服。",
            "py": "Wǒ yào mǎi liǎng jiàn yīfu.",
            "vi": "Tôi muốn mua hai bộ quần áo."
          },
          {
            "zh": "这件衣服比较重。",
            "py": "Zhè jiàn yīfu bǐjiào zhòng.",
            "vi": "Chiếc áo này khá nặng."
          },
          {
            "zh": "那件黑色的衣服很好看。",
            "py": "Nà jiàn hēisè de yīfu hěn hǎokàn.",
            "vi": "Bộ đồ màu đen kia rất đẹp."
          },
          {
            "zh": "你要哪件？",
            "py": "Nǐ yào nǎ jiàn?",
            "vi": "Bạn muốn chiếc nào?"
          },
          {
            "zh": "你买了几件衣服？",
            "py": "Nǐ mǎile jǐ jiàn yīfu?",
            "vi": "Bạn đã mua mấy bộ quần áo?"
          },
          {
            "zh": "这件毛衣是谁的？",
            "py": "Zhè jiàn máoyī shì shéi de?",
            "vi": "Chiếc áo len này là của ai?"
          },
          {
            "zh": "我有三件白衬衣。",
            "py": "Wǒ yǒu sān jiàn bái chènyī.",
            "vi": "Tôi có ba chiếc áo sơ mi trắng."
          },
          {
            "zh": "那件衣服太大了。",
            "py": "Nà jiàn yīfu tài dà le.",
            "vi": "Bộ quần áo kia to quá."
          },
          {
            "zh": "这件多少钱？",
            "py": "Zhè jiàn duōshao qián?",
            "vi": "Chiếc này bao nhiêu tiền?"
          }
        ]
      },
      {
        "zh": "雨伞",
        "py": "yǔsǎn",
        "vi": "ô, dù che mưa",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "一把雨伞",
            "py": "yì bǎ yǔsǎn",
            "vi": "một chiếc ô"
          },
          {
            "zh": "我的雨伞是红色的。",
            "py": "Wǒ de yǔsǎn shì hóngsè de.",
            "vi": "Ô của tôi màu đỏ."
          },
          {
            "zh": "你有雨伞吗？",
            "py": "Nǐ yǒu yǔsǎn ma?",
            "vi": "Bạn có ô không?"
          },
          {
            "zh": "下雨了，我要买一把雨伞。",
            "py": "Xià yǔ le, wǒ yào mǎi yì bǎ yǔsǎn.",
            "vi": "Trời mưa rồi, tôi phải mua một chiếc ô."
          },
          {
            "zh": "这把雨伞太贵了。",
            "py": "Zhè bǎ yǔsǎn tài guì le.",
            "vi": "Chiếc ô này đắt quá."
          },
          {
            "zh": "雨伞在箱子里。",
            "py": "Yǔsǎn zài xiāngzi lǐ.",
            "vi": "Ô ở trong vali."
          },
          {
            "zh": "你的雨伞是什么颜色的？",
            "py": "Nǐ de yǔsǎn shì shénme yánsè de?",
            "vi": "Ô của bạn màu gì?"
          },
          {
            "zh": "雨伞多少钱一把？",
            "py": "Yǔsǎn duōshao qián yì bǎ?",
            "vi": "Ô bao nhiêu tiền một chiếc?"
          },
          {
            "zh": "商店里有雨伞吗？",
            "py": "Shāngdiàn lǐ yǒu yǔsǎn ma?",
            "vi": "Trong cửa hàng có ô không?"
          },
          {
            "zh": "这把黑色的雨伞是我的。",
            "py": "Zhè bǎ hēisè de yǔsǎn shì wǒ de.",
            "vi": "Chiếc ô màu đen này là của tôi."
          },
          {
            "zh": "我给妈妈买了一把雨伞。",
            "py": "Wǒ gěi māma mǎile yì bǎ yǔsǎn.",
            "vi": "Tôi mua cho mẹ một chiếc ô."
          }
        ]
      },
      {
        "zh": "雨",
        "py": "yǔ",
        "vi": "mưa",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "今天有雨。",
            "py": "Jīntiān yǒu yǔ.",
            "vi": "Hôm nay có mưa."
          },
          {
            "zh": "今天的雨不大。",
            "py": "Jīntiān de yǔ bú dà.",
            "vi": "Mưa hôm nay không to."
          },
          {
            "zh": "明天有雨吗？",
            "py": "Míngtiān yǒu yǔ ma?",
            "vi": "Ngày mai có mưa không?"
          },
          {
            "zh": "昨天的雨很大。",
            "py": "Zuótiān de yǔ hěn dà.",
            "vi": "Cơn mưa hôm qua rất to."
          },
          {
            "zh": "雨太大了，我不去了。",
            "py": "Yǔ tài dà le, wǒ bú qù le.",
            "vi": "Mưa to quá, tôi không đi nữa."
          },
          {
            "zh": "雨很大，我们等一会儿吧。",
            "py": "Yǔ hěn dà, wǒmen děng yíhuìr ba.",
            "vi": "Mưa to lắm, chúng ta đợi một lát đi."
          },
          {
            "zh": "河内的雨很多。",
            "py": "Hénèi de yǔ hěn duō.",
            "vi": "Hà Nội mưa nhiều."
          },
          {
            "zh": "今天的雨很小。",
            "py": "Jīntiān de yǔ hěn xiǎo.",
            "vi": "Mưa hôm nay rất nhỏ."
          },
          {
            "zh": "雨太大了，不要出去。",
            "py": "Yǔ tài dà le, búyào chūqù.",
            "vi": "Mưa to quá, đừng ra ngoài."
          },
          {
            "zh": "明天下午有雨。",
            "py": "Míngtiān xiàwǔ yǒu yǔ.",
            "vi": "Chiều mai có mưa."
          }
        ]
      },
      {
        "zh": "下雨",
        "py": "xià yǔ",
        "vi": "trời mưa",
        "type": "Động từ",
        "ex": [
          {
            "zh": "下雨了，我们不去了。",
            "py": "Xià yǔ le, wǒmen bú qù le.",
            "vi": "Trời mưa rồi, chúng tôi không đi nữa."
          },
          {
            "zh": "明天下雨吗？",
            "py": "Míngtiān xià yǔ ma?",
            "vi": "Ngày mai trời có mưa không?"
          },
          {
            "zh": "下雨了，你有伞吗？",
            "py": "Xià yǔ le, nǐ yǒu sǎn ma?",
            "vi": "Trời mưa rồi, bạn có ô không?"
          },
          {
            "zh": "昨天下大雨。",
            "py": "Zuótiān xià dà yǔ.",
            "vi": "Hôm qua mưa to."
          },
          {
            "zh": "下雨我不想去学校。",
            "py": "Xià yǔ wǒ bù xiǎng qù xuéxiào.",
            "vi": "Trời mưa tôi không muốn đến trường."
          },
          {
            "zh": "下雨了，我们坐出租车吧。",
            "py": "Xià yǔ le, wǒmen zuò chūzūchē ba.",
            "vi": "Trời mưa rồi, chúng ta đi taxi đi."
          },
          {
            "zh": "今天下雨吗？",
            "py": "Jīntiān xià yǔ ma?",
            "vi": "Hôm nay có mưa không?"
          },
          {
            "zh": "下雨了，路上车很多。",
            "py": "Xià yǔ le, lù shang chē hěn duō.",
            "vi": "Trời mưa, trên đường rất nhiều xe."
          },
          {
            "zh": "北京下雨了吗？",
            "py": "Běijīng xià yǔ le ma?",
            "vi": "Bắc Kinh có mưa chưa?"
          },
          {
            "zh": "星期天下雨，我在家看书。",
            "py": "Xīngqītiān xià yǔ, wǒ zài jiā kàn shū.",
            "vi": "Chủ nhật trời mưa, tôi ở nhà đọc sách."
          }
        ]
      },
      {
        "zh": "把",
        "py": "bǎ",
        "vi": "cái, chiếc (lượng từ: ô, dao, ghế)",
        "type": "Lượng từ",
        "ex": [
          {
            "zh": "一把伞",
            "py": "yì bǎ sǎn",
            "vi": "một chiếc ô"
          },
          {
            "zh": "我要买一把雨伞。",
            "py": "Wǒ yào mǎi yì bǎ yǔsǎn.",
            "vi": "Tôi muốn mua một chiếc ô."
          },
          {
            "zh": "这把伞是谁的？",
            "py": "Zhè bǎ sǎn shì shéi de?",
            "vi": "Chiếc ô này là của ai?"
          },
          {
            "zh": "那把伞太贵了。",
            "py": "Nà bǎ sǎn tài guì le.",
            "vi": "Chiếc ô kia đắt quá."
          },
          {
            "zh": "我有两把伞。",
            "py": "Wǒ yǒu liǎng bǎ sǎn.",
            "vi": "Tôi có hai chiếc ô."
          },
          {
            "zh": "这把雨伞多少钱？",
            "py": "Zhè bǎ yǔsǎn duōshao qián?",
            "vi": "Chiếc ô này bao nhiêu tiền?"
          },
          {
            "zh": "我买了三把雨伞。",
            "py": "Wǒ mǎile sān bǎ yǔsǎn.",
            "vi": "Tôi đã mua ba chiếc ô."
          },
          {
            "zh": "你要哪把？",
            "py": "Nǐ yào nǎ bǎ?",
            "vi": "Bạn muốn chiếc nào?"
          },
          {
            "zh": "那把红色的雨伞是我妹妹的。",
            "py": "Nà bǎ hóngsè de yǔsǎn shì wǒ mèimei de.",
            "vi": "Chiếc ô màu đỏ kia là của em gái tôi."
          },
          {
            "zh": "门口有两把雨伞。",
            "py": "Ménkǒu yǒu liǎng bǎ yǔsǎn.",
            "vi": "Ở cửa có hai chiếc ô."
          }
        ]
      },
      {
        "zh": "香水",
        "py": "xiāngshuǐ",
        "vi": "nước hoa",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "一瓶香水",
            "py": "yì píng xiāngshuǐ",
            "vi": "một chai nước hoa"
          },
          {
            "zh": "这瓶香水是我老婆的。",
            "py": "Zhè píng xiāngshuǐ shì wǒ lǎopo de.",
            "vi": "Chai nước hoa này là của vợ tôi."
          },
          {
            "zh": "我要给老婆买一瓶香水。",
            "py": "Wǒ yào gěi lǎopo mǎi yì píng xiāngshuǐ.",
            "vi": "Tôi muốn mua cho vợ một chai nước hoa."
          },
          {
            "zh": "你的香水太香了。",
            "py": "Nǐ de xiāngshuǐ tài xiāng le.",
            "vi": "Nước hoa của bạn thơm quá."
          },
          {
            "zh": "这瓶香水多少钱？",
            "py": "Zhè píng xiāngshuǐ duōshao qián?",
            "vi": "Chai nước hoa này bao nhiêu tiền?"
          },
          {
            "zh": "她喜欢法国香水。",
            "py": "Tā xǐhuan Fǎguó xiāngshuǐ.",
            "vi": "Cô ấy thích nước hoa Pháp."
          },
          {
            "zh": "这瓶香水是在法国买的。",
            "py": "Zhè píng xiāngshuǐ shì zài Fǎguó mǎi de.",
            "vi": "Chai nước hoa này mua ở Pháp."
          },
          {
            "zh": "你喜欢什么香水？",
            "py": "Nǐ xǐhuan shénme xiāngshuǐ?",
            "vi": "Bạn thích loại nước hoa nào?"
          },
          {
            "zh": "香水在商场一楼。",
            "py": "Xiāngshuǐ zài shāngchǎng yī lóu.",
            "vi": "Nước hoa ở tầng một trung tâm thương mại."
          },
          {
            "zh": "这个香水不太香。",
            "py": "Zhège xiāngshuǐ bú tài xiāng.",
            "vi": "Nước hoa này không thơm lắm."
          },
          {
            "zh": "我想给女朋友买香水。",
            "py": "Wǒ xiǎng gěi nǚ péngyou mǎi xiāngshuǐ.",
            "vi": "Tôi muốn mua nước hoa cho bạn gái."
          }
        ]
      },
      {
        "zh": "香",
        "py": "xiāng",
        "vi": "thơm",
        "type": "Tính từ",
        "ex": [
          {
            "zh": "茶叶很香。",
            "py": "Cháyè hěn xiāng.",
            "vi": "Lá trà rất thơm."
          },
          {
            "zh": "这瓶香水真香。",
            "py": "Zhè píng xiāngshuǐ zhēn xiāng.",
            "vi": "Chai nước hoa này thơm thật."
          },
          {
            "zh": "妈妈的饭很香。",
            "py": "Māma de fàn hěn xiāng.",
            "vi": "Cơm mẹ nấu rất thơm."
          },
          {
            "zh": "这是什么？很香！",
            "py": "Zhè shì shénme? Hěn xiāng!",
            "vi": "Đây là gì? Thơm quá!"
          },
          {
            "zh": "食堂的包子很香。",
            "py": "Shítáng de bāozi hěn xiāng.",
            "vi": "Bánh bao nhà ăn rất thơm."
          },
          {
            "zh": "咖啡很香。",
            "py": "Kāfēi hěn xiāng.",
            "vi": "Cà phê rất thơm."
          },
          {
            "zh": "妈妈做的鸡汤很香。",
            "py": "Māma zuò de jītāng hěn xiāng.",
            "vi": "Canh gà mẹ nấu rất thơm."
          },
          {
            "zh": "这杯奶茶很香。",
            "py": "Zhè bēi nǎichá hěn xiāng.",
            "vi": "Cốc trà sữa này rất thơm."
          },
          {
            "zh": "这儿的米饭很香。",
            "py": "Zhèr de mǐfàn hěn xiāng.",
            "vi": "Cơm ở đây rất thơm."
          },
          {
            "zh": "什么东西这么香？",
            "py": "Shénme dōngxi zhème xiāng?",
            "vi": "Thứ gì mà thơm thế?"
          }
        ]
      },
      {
        "zh": "词典",
        "py": "cídiǎn",
        "vi": "từ điển",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "一本词典",
            "py": "yì běn cídiǎn",
            "vi": "một quyển từ điển"
          },
          {
            "zh": "我有一本汉语词典。",
            "py": "Wǒ yǒu yì běn Hànyǔ cídiǎn.",
            "vi": "Tôi có một quyển từ điển tiếng Trung."
          },
          {
            "zh": "这本词典多少钱？",
            "py": "Zhè běn cídiǎn duōshao qián?",
            "vi": "Quyển từ điển này bao nhiêu tiền?"
          },
          {
            "zh": "我的词典是新的。",
            "py": "Wǒ de cídiǎn shì xīn de.",
            "vi": "Từ điển của tôi là quyển mới."
          },
          {
            "zh": "你的词典在哪儿？",
            "py": "Nǐ de cídiǎn zài nǎr?",
            "vi": "Từ điển của bạn ở đâu?"
          },
          {
            "zh": "我想买一本英语词典。",
            "py": "Wǒ xiǎng mǎi yì běn Yīngyǔ cídiǎn.",
            "vi": "Tôi muốn mua một quyển từ điển tiếng Anh."
          },
          {
            "zh": "我想买一本汉越词典。",
            "py": "Wǒ xiǎng mǎi yì běn Hàn-Yuè cídiǎn.",
            "vi": "Tôi muốn mua một quyển từ điển Hán–Việt."
          },
          {
            "zh": "词典在我的箱子里。",
            "py": "Cídiǎn zài wǒ de xiāngzi lǐ.",
            "vi": "Từ điển ở trong vali của tôi."
          },
          {
            "zh": "我的词典是旧的。",
            "py": "Wǒ de cídiǎn shì jiù de.",
            "vi": "Từ điển của tôi là đồ cũ."
          },
          {
            "zh": "图书馆有很多词典。",
            "py": "Túshūguǎn yǒu hěn duō cídiǎn.",
            "vi": "Thư viện có rất nhiều từ điển."
          },
          {
            "zh": "这本词典一百块。",
            "py": "Zhè běn cídiǎn yìbǎi kuài.",
            "vi": "Quyển từ điển này một trăm đồng."
          }
        ]
      },
      {
        "zh": "想",
        "py": "xiǎng",
        "vi": "muốn, nghĩ, nhớ",
        "type": "Động từ",
        "ex": [
          {
            "zh": "我想买一把雨伞。",
            "py": "Wǒ xiǎng mǎi yì bǎ yǔsǎn.",
            "vi": "Tôi muốn mua một cái ô."
          },
          {
            "zh": "我想去中国。",
            "py": "Wǒ xiǎng qù Zhōngguó.",
            "vi": "Tôi muốn đi Trung Quốc."
          },
          {
            "zh": "你想吃什么？",
            "py": "Nǐ xiǎng chī shénme?",
            "vi": "Bạn muốn ăn gì?"
          },
          {
            "zh": "我想学汉语。",
            "py": "Wǒ xiǎng xué Hànyǔ.",
            "vi": "Tôi muốn học tiếng Trung."
          },
          {
            "zh": "她想买一件新衣服。",
            "py": "Tā xiǎng mǎi yí jiàn xīn yīfu.",
            "vi": "Cô ấy muốn mua một bộ quần áo mới."
          },
          {
            "zh": "我不想去。",
            "py": "Wǒ bù xiǎng qù.",
            "vi": "Tôi không muốn đi."
          },
          {
            "zh": "你想去哪儿？",
            "py": "Nǐ xiǎng qù nǎr?",
            "vi": "Bạn muốn đi đâu?"
          },
          {
            "zh": "我很想妈妈。",
            "py": "Wǒ hěn xiǎng māma.",
            "vi": "Tôi rất nhớ mẹ."
          },
          {
            "zh": "他想学开车。",
            "py": "Tā xiǎng xué kāichē.",
            "vi": "Anh ấy muốn học lái xe."
          },
          {
            "zh": "你想好了吗？",
            "py": "Nǐ xiǎnghǎo le ma?",
            "vi": "Bạn nghĩ kỹ chưa?"
          },
          {
            "zh": "我想换一个大箱子。",
            "py": "Wǒ xiǎng huàn yí ge dà xiāngzi.",
            "vi": "Tôi muốn đổi một cái vali to."
          }
        ]
      },
      {
        "zh": "老公",
        "py": "lǎogōng",
        "vi": "chồng",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "老公给我买一些新日用品。",
            "py": "Lǎogōng gěi wǒ mǎi yìxiē xīn rìyòngpǐn.",
            "vi": "Chồng mua cho tôi một ít đồ dùng mới."
          },
          {
            "zh": "我老公很忙。",
            "py": "Wǒ lǎogōng hěn máng.",
            "vi": "Chồng tôi rất bận."
          },
          {
            "zh": "她老公是老师。",
            "py": "Tā lǎogōng shì lǎoshī.",
            "vi": "Chồng cô ấy là giáo viên."
          },
          {
            "zh": "我老公喜欢喝茶。",
            "py": "Wǒ lǎogōng xǐhuan hē chá.",
            "vi": "Chồng tôi thích uống trà."
          },
          {
            "zh": "你老公工作忙吗？",
            "py": "Nǐ lǎogōng gōngzuò máng ma?",
            "vi": "Chồng bạn công việc có bận không?"
          },
          {
            "zh": "我老公在银行工作。",
            "py": "Wǒ lǎogōng zài yínháng gōngzuò.",
            "vi": "Chồng tôi làm việc ở ngân hàng."
          },
          {
            "zh": "老公，你几点回家？",
            "py": "Lǎogōng, nǐ jǐ diǎn huíjiā?",
            "vi": "Anh ơi, mấy giờ anh về nhà?"
          },
          {
            "zh": "她老公是工程师。",
            "py": "Tā lǎogōng shì gōngchéngshī.",
            "vi": "Chồng cô ấy là kỹ sư."
          },
          {
            "zh": "我老公不喝酒。",
            "py": "Wǒ lǎogōng bù hē jiǔ.",
            "vi": "Chồng tôi không uống rượu."
          },
          {
            "zh": "我老公喜欢开车。",
            "py": "Wǒ lǎogōng xǐhuan kāichē.",
            "vi": "Chồng tôi thích lái xe."
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 17 (b18): 这是不是中药 – Đây có phải là thuốc đông y không?",
    "words": [
      {
        "zh": "没（有）",
        "py": "méi (yǒu)",
        "vi": "không có, chưa có",
        "type": "Phó từ",
        "ex": [
          {
            "zh": "我没有箱子。",
            "py": "Wǒ méiyǒu xiāngzi.",
            "vi": "Tôi không có vali."
          },
          {
            "zh": "你没有箱子吗？",
            "py": "Nǐ méiyǒu xiāngzi ma?",
            "vi": "Bạn không có vali à?"
          },
          {
            "zh": "桌子上没有词典。",
            "py": "Zhuōzi shàng méiyǒu cídiǎn.",
            "vi": "Trên bàn không có từ điển."
          },
          {
            "zh": "我没有雨伞。",
            "py": "Wǒ méiyǒu yǔsǎn.",
            "vi": "Tôi không có ô."
          },
          {
            "zh": "他没有手机。",
            "py": "Tā méiyǒu shǒujī.",
            "vi": "Anh ấy không có điện thoại di động."
          },
          {
            "zh": "我没有汽车。",
            "py": "Wǒ méiyǒu qìchē.",
            "vi": "Tôi không có ô tô."
          },
          {
            "zh": "我还没吃早饭。",
            "py": "Wǒ hái méi chī zǎofàn.",
            "vi": "Tôi vẫn chưa ăn sáng."
          },
          {
            "zh": "商店里没有雨伞了。",
            "py": "Shāngdiàn lǐ méiyǒu yǔsǎn le.",
            "vi": "Trong cửa hàng hết ô rồi."
          },
          {
            "zh": "他没有哥哥。",
            "py": "Tā méiyǒu gēge.",
            "vi": "Anh ấy không có anh trai."
          },
          {
            "zh": "我们公司没有食堂。",
            "py": "Wǒmen gōngsī méiyǒu shítáng.",
            "vi": "Công ty chúng tôi không có nhà ăn."
          }
        ]
      },
      {
        "zh": "有",
        "py": "yǒu",
        "vi": "có",
        "type": "Động từ",
        "ex": [
          {
            "zh": "有啊，我的在这儿呢。",
            "py": "Yǒu a, wǒ de zài zhèr ne.",
            "vi": "Có chứ, của tôi ở đây này."
          },
          {
            "zh": "箱子里有什么？",
            "py": "Xiāngzi lǐ yǒu shénme?",
            "vi": "Trong vali có gì?"
          },
          {
            "zh": "我有一个红色的箱子。",
            "py": "Wǒ yǒu yí ge hóngsè de xiāngzi.",
            "vi": "Tôi có một cái vali màu đỏ."
          },
          {
            "zh": "我有一个箱子。",
            "py": "Wǒ yǒu yí gè xiāngzi.",
            "vi": "Tôi có một cái vali."
          },
          {
            "zh": "她有很多衣服。",
            "py": "Tā yǒu hěn duō yīfu.",
            "vi": "Cô ấy có rất nhiều quần áo."
          },
          {
            "zh": "你有中文名字吗？",
            "py": "Nǐ yǒu Zhōngwén míngzi ma?",
            "vi": "Bạn có tên tiếng Trung không?"
          },
          {
            "zh": "这儿有银行吗？",
            "py": "Zhèr yǒu yínháng ma?",
            "vi": "Ở đây có ngân hàng không?"
          },
          {
            "zh": "我有两个同屋。",
            "py": "Wǒ yǒu liǎng ge tóngwū.",
            "vi": "Tôi có hai bạn cùng phòng."
          },
          {
            "zh": "箱子里有三件毛衣。",
            "py": "Xiāngzi lǐ yǒu sān jiàn máoyī.",
            "vi": "Trong vali có ba chiếc áo len."
          },
          {
            "zh": "他有一个照相机。",
            "py": "Tā yǒu yí ge zhàoxiàngjī.",
            "vi": "Anh ấy có một cái máy ảnh."
          }
        ]
      },
      {
        "zh": "箱子",
        "py": "xiāngzi",
        "vi": "cái hòm, vali, rương",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "这个箱子里没有衣服。",
            "py": "Zhège xiāngzi lǐ méiyǒu yīfu.",
            "vi": "Trong chiếc vali này không có quần áo."
          },
          {
            "zh": "我的箱子很重。",
            "py": "Wǒ de xiāngzi hěn zhòng.",
            "vi": "Vali của tôi rất nặng."
          },
          {
            "zh": "那个箱子是谁的？",
            "py": "Nàge xiāngzi shì shéi de?",
            "vi": "Cái vali kia là của ai?"
          },
          {
            "zh": "这个箱子很重。",
            "py": "Zhège xiāngzi hěn zhòng.",
            "vi": "Cái vali này rất nặng."
          },
          {
            "zh": "箱子里有衣服。",
            "py": "Xiāngzi lǐ yǒu yīfu.",
            "vi": "Trong vali có quần áo."
          },
          {
            "zh": "这是谁的箱子？",
            "py": "Zhè shì shéi de xiāngzi?",
            "vi": "Đây là vali của ai?"
          },
          {
            "zh": "我的箱子是新的。",
            "py": "Wǒ de xiāngzi shì xīn de.",
            "vi": "Vali của tôi là đồ mới."
          },
          {
            "zh": "箱子里有中药和茶叶。",
            "py": "Xiāngzi lǐ yǒu zhōngyào hé cháyè.",
            "vi": "Trong vali có thuốc bắc và lá trà."
          },
          {
            "zh": "那个红色的箱子很好看。",
            "py": "Nàge hóngsè de xiāngzi hěn hǎokàn.",
            "vi": "Cái vali màu đỏ kia rất đẹp."
          },
          {
            "zh": "你有几个箱子？",
            "py": "Nǐ yǒu jǐ ge xiāngzi?",
            "vi": "Bạn có mấy cái vali?"
          }
        ]
      },
      {
        "zh": "这儿",
        "py": "zhèr",
        "vi": "đây, ở đây",
        "type": "Đại từ",
        "ex": [
          {
            "zh": "我的在这儿呢。",
            "py": "Wǒ de zài zhèr ne.",
            "vi": "Của tôi ở đây này."
          },
          {
            "zh": "你的书在这儿。",
            "py": "Nǐ de shū zài zhèr.",
            "vi": "Sách của bạn ở đây."
          },
          {
            "zh": "这儿有很多人。",
            "py": "Zhèr yǒu hěn duō rén.",
            "vi": "Ở đây có rất nhiều người."
          },
          {
            "zh": "箱子在这儿。",
            "py": "Xiāngzi zài zhèr.",
            "vi": "Vali ở đây."
          },
          {
            "zh": "这儿有中药。",
            "py": "Zhèr yǒu zhōngyào.",
            "vi": "Ở đây có thuốc đông y."
          },
          {
            "zh": "这儿是我们的教室。",
            "py": "Zhèr shì wǒmen de jiàoshì.",
            "vi": "Đây là lớp học của chúng tôi."
          },
          {
            "zh": "我的雨伞在这儿。",
            "py": "Wǒ de yǔsǎn zài zhèr.",
            "vi": "Ô của tôi ở đây."
          },
          {
            "zh": "这儿的光盘很便宜。",
            "py": "Zhèr de guāngpán hěn piányi.",
            "vi": "Đĩa CD ở đây rất rẻ."
          },
          {
            "zh": "这儿有一个邮局。",
            "py": "Zhèr yǒu yí ge yóujú.",
            "vi": "Ở đây có một bưu điện."
          },
          {
            "zh": "这儿太冷了。",
            "py": "Zhèr tài lěng le.",
            "vi": "Ở đây lạnh quá."
          }
        ]
      },
      {
        "zh": "重",
        "py": "zhòng",
        "vi": "nặng",
        "type": "Tính từ",
        "ex": [
          {
            "zh": "我的很重，你的重不重？",
            "py": "Wǒ de hěn zhòng, nǐ de zhòng bu zhòng?",
            "vi": "Của tôi rất nặng, của bạn có nặng không?"
          },
          {
            "zh": "那本词典重不重？",
            "py": "Nà běn cídiǎn zhòng bu zhòng?",
            "vi": "Quyển từ điển kia có nặng không?"
          },
          {
            "zh": "我的箱子太重了。",
            "py": "Wǒ de xiāngzi tài zhòng le.",
            "vi": "Vali của tôi nặng quá."
          },
          {
            "zh": "这张光盘不重。",
            "py": "Zhè zhāng guāngpán bú zhòng.",
            "vi": "Cái đĩa này không nặng."
          },
          {
            "zh": "箱子不重。",
            "py": "Xiāngzi bú zhòng.",
            "vi": "Vali không nặng."
          },
          {
            "zh": "这本书重不重？",
            "py": "Zhè běn shū zhòng bu zhòng?",
            "vi": "Quyển sách này có nặng không?"
          },
          {
            "zh": "这些光盘不重。",
            "py": "Zhèxiē guāngpán bú zhòng.",
            "vi": "Những đĩa CD này không nặng."
          },
          {
            "zh": "茶叶不重，词典很重。",
            "py": "Cháyè bú zhòng, cídiǎn hěn zhòng.",
            "vi": "Lá trà không nặng, từ điển rất nặng."
          },
          {
            "zh": "那个黑色的箱子很重。",
            "py": "Nàge hēisè de xiāngzi hěn zhòng.",
            "vi": "Cái vali màu đen kia rất nặng."
          },
          {
            "zh": "西瓜比苹果重。",
            "py": "Xīguā bǐ píngguǒ zhòng.",
            "vi": "Dưa hấu nặng hơn táo."
          }
        ]
      },
      {
        "zh": "黑",
        "py": "hēi",
        "vi": "đen",
        "type": "Tính từ",
        "ex": [
          {
            "zh": "这个黑的很重。",
            "py": "Zhège hēi de hěn zhòng.",
            "vi": "Cái màu đen này rất nặng."
          },
          {
            "zh": "那些黑的是什么东西？",
            "py": "Nàxiē hēi de shì shénme dōngxi?",
            "vi": "Những cái màu đen kia là thứ gì?"
          },
          {
            "zh": "我喜欢黑色的箱子。",
            "py": "Wǒ xǐhuan hēisè de xiāngzi.",
            "vi": "Tôi thích vali màu đen."
          },
          {
            "zh": "这是黑色的笔。",
            "py": "Zhè shì hēisè de bǐ.",
            "vi": "Đây là cây bút màu đen."
          },
          {
            "zh": "他的箱子是黑的。",
            "py": "Tā de xiāngzi shì hēi de.",
            "vi": "Vali của anh ấy màu đen."
          },
          {
            "zh": "我的笔是黑的。",
            "py": "Wǒ de bǐ shì hēi de.",
            "vi": "Bút của tôi màu đen."
          },
          {
            "zh": "天黑了，我们回家吧。",
            "py": "Tiān hēi le, wǒmen huíjiā ba.",
            "vi": "Trời tối rồi, chúng ta về nhà thôi."
          },
          {
            "zh": "你要黑的还是红的？",
            "py": "Nǐ yào hēi de háishì hóng de?",
            "vi": "Bạn muốn cái đen hay cái đỏ?"
          },
          {
            "zh": "那件黑毛衣是谁的？",
            "py": "Nà jiàn hēi máoyī shì shéi de?",
            "vi": "Chiếc áo len đen kia là của ai?"
          },
          {
            "zh": "黑的箱子比较重。",
            "py": "Hēi de xiāngzi bǐjiào zhòng.",
            "vi": "Vali màu đen tương đối nặng."
          }
        ]
      },
      {
        "zh": "红",
        "py": "hóng",
        "vi": "đỏ",
        "type": "Tính từ",
        "ex": [
          {
            "zh": "那个红的比较轻。",
            "py": "Nàge hóng de bǐjiào qīng.",
            "vi": "Cái màu đỏ kia nhẹ hơn."
          },
          {
            "zh": "她喜欢红色。",
            "py": "Tā xǐhuan hóngsè.",
            "vi": "Cô ấy thích màu đỏ."
          },
          {
            "zh": "这是红的还是黑的？",
            "py": "Zhè shì hóng de háishi hēi de?",
            "vi": "Đây là màu đỏ hay màu đen?"
          },
          {
            "zh": "这支笔是红的。",
            "py": "Zhè zhī bǐ shì hóng de.",
            "vi": "Cây bút này màu đỏ."
          },
          {
            "zh": "这把雨伞是红的。",
            "py": "Zhè bǎ yǔsǎn shì hóng de.",
            "vi": "Cái ô này màu đỏ."
          },
          {
            "zh": "她的衣服是红的。",
            "py": "Tā de yīfu shì hóng de.",
            "vi": "Quần áo của cô ấy màu đỏ."
          },
          {
            "zh": "这个苹果很红。",
            "py": "Zhège píngguǒ hěn hóng.",
            "vi": "Quả táo này rất đỏ."
          },
          {
            "zh": "红的雨伞是我的。",
            "py": "Hóng de yǔsǎn shì wǒ de.",
            "vi": "Chiếc ô màu đỏ là của tôi."
          },
          {
            "zh": "我要一支红笔。",
            "py": "Wǒ yào yì zhī hóng bǐ.",
            "vi": "Tôi muốn một cây bút đỏ."
          },
          {
            "zh": "红的和黑的，你喜欢哪个？",
            "py": "Hóng de hé hēi de, nǐ xǐhuan nǎge?",
            "vi": "Màu đỏ và màu đen, bạn thích cái nào?"
          }
        ]
      },
      {
        "zh": "轻",
        "py": "qīng",
        "vi": "nhẹ",
        "type": "Tính từ",
        "ex": [
          {
            "zh": "光盘比较轻。",
            "py": "Guāngpán bǐjiào qīng.",
            "vi": "Đĩa CD tương đối nhẹ."
          },
          {
            "zh": "这支笔很轻。",
            "py": "Zhè zhī bǐ hěn qīng.",
            "vi": "Cây bút này rất nhẹ."
          },
          {
            "zh": "你的箱子轻不轻？",
            "py": "Nǐ de xiāngzi qīng bu qīng?",
            "vi": "Vali của bạn có nhẹ không?"
          },
          {
            "zh": "这个箱子很轻。",
            "py": "Zhège xiāngzi hěn qīng.",
            "vi": "Cái vali này rất nhẹ."
          },
          {
            "zh": "词典不轻。",
            "py": "Cídiǎn bù qīng.",
            "vi": "Từ điển không nhẹ."
          },
          {
            "zh": "这张光盘很轻。",
            "py": "Zhè zhāng guāngpán hěn qīng.",
            "vi": "Đĩa CD này rất nhẹ."
          },
          {
            "zh": "茶叶很轻。",
            "py": "Cháyè hěn qīng.",
            "vi": "Lá trà rất nhẹ."
          },
          {
            "zh": "新的自行车很轻。",
            "py": "Xīn de zìxíngchē hěn qīng.",
            "vi": "Xe đạp mới rất nhẹ."
          },
          {
            "zh": "这支笔轻不轻？",
            "py": "Zhè zhī bǐ qīng bu qīng?",
            "vi": "Cây bút này có nhẹ không?"
          },
          {
            "zh": "衣服很轻，书很重。",
            "py": "Yīfu hěn qīng, shū hěn zhòng.",
            "vi": "Quần áo rất nhẹ, sách rất nặng."
          }
        ]
      },
      {
        "zh": "中药",
        "py": "zhōngyào",
        "vi": "thuốc bắc, thuốc đông y",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "这是中药。",
            "py": "Zhè shì zhōngyào.",
            "vi": "Đây là thuốc đông y."
          },
          {
            "zh": "这是不是中药？",
            "py": "Zhè shì bu shì zhōngyào?",
            "vi": "Đây có phải thuốc đông y không?"
          },
          {
            "zh": "中药一般不太贵。",
            "py": "Zhōngyào yìbān bú tài guì.",
            "vi": "Thuốc đông y nói chung không đắt lắm."
          },
          {
            "zh": "这是中药，不是西药。",
            "py": "Zhè shì zhōngyào, bú shì xīyào.",
            "vi": "Đây là thuốc đông y, không phải thuốc tây."
          },
          {
            "zh": "他买中药。",
            "py": "Tā mǎi zhōngyào.",
            "vi": "Anh ấy mua thuốc đông y."
          },
          {
            "zh": "中药在哪儿买？",
            "py": "Zhōngyào zài nǎr mǎi?",
            "vi": "Thuốc bắc mua ở đâu?"
          },
          {
            "zh": "这些中药多少钱？",
            "py": "Zhèxiē zhōngyào duōshao qián?",
            "vi": "Những thuốc bắc này bao nhiêu tiền?"
          },
          {
            "zh": "我妈妈经常喝中药。",
            "py": "Wǒ māma jīngcháng hē zhōngyào.",
            "vi": "Mẹ tôi thường uống thuốc bắc."
          },
          {
            "zh": "箱子里的是中药吗？",
            "py": "Xiāngzi lǐ de shì zhōngyào ma?",
            "vi": "Đồ trong vali là thuốc bắc à?"
          },
          {
            "zh": "中药是中国的药。",
            "py": "Zhōngyào shì Zhōngguó de yào.",
            "vi": "Thuốc bắc là thuốc của Trung Quốc."
          }
        ]
      },
      {
        "zh": "药",
        "py": "yào",
        "vi": "thuốc",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "这是一些药。",
            "py": "Zhè shì yìxiē yào.",
            "vi": "Đây là một ít thuốc."
          },
          {
            "zh": "什么药？",
            "py": "Shénme yào?",
            "vi": "Thuốc gì vậy?"
          },
          {
            "zh": "我没有药。",
            "py": "Wǒ méiyǒu yào.",
            "vi": "Tôi không có thuốc."
          },
          {
            "zh": "这是什么药？",
            "py": "Zhè shì shénme yào?",
            "vi": "Đây là thuốc gì?"
          },
          {
            "zh": "箱子里有药。",
            "py": "Xiāngzi lǐ yǒu yào.",
            "vi": "Trong vali có thuốc."
          },
          {
            "zh": "这个药很好。",
            "py": "Zhège yào hěn hǎo.",
            "vi": "Thuốc này rất tốt."
          },
          {
            "zh": "我去商店买药。",
            "py": "Wǒ qù shāngdiàn mǎi yào.",
            "vi": "Tôi đến cửa hàng mua thuốc."
          },
          {
            "zh": "药太贵了。",
            "py": "Yào tài guì le.",
            "vi": "Thuốc đắt quá."
          },
          {
            "zh": "你的药在哪儿？",
            "py": "Nǐ de yào zài nǎr?",
            "vi": "Thuốc của bạn ở đâu?"
          },
          {
            "zh": "这是我爷爷的药。",
            "py": "Zhè shì wǒ yéye de yào.",
            "vi": "Đây là thuốc của ông nội tôi."
          }
        ]
      },
      {
        "zh": "西药",
        "py": "xīyào",
        "vi": "thuốc tây",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "这是西药，不是中药。",
            "py": "Zhè shì xīyào, bú shì zhōngyào.",
            "vi": "Đây là thuốc tây, không phải thuốc đông y."
          },
          {
            "zh": "我不太喜欢吃西药。",
            "py": "Wǒ bú tài xǐhuan chī xīyào.",
            "vi": "Tôi không thích uống thuốc tây lắm."
          },
          {
            "zh": "药店里有中药也有西药。",
            "py": "Yàodiàn lǐ yǒu zhōngyào yě yǒu xīyào.",
            "vi": "Trong hiệu thuốc có cả thuốc đông y và thuốc tây."
          },
          {
            "zh": "他吃西药。",
            "py": "Tā chī xīyào.",
            "vi": "Anh ấy uống thuốc tây."
          },
          {
            "zh": "这不是西药。",
            "py": "Zhè bú shì xīyào.",
            "vi": "Đây không phải là thuốc tây."
          },
          {
            "zh": "西药很贵吗？",
            "py": "Xīyào hěn guì ma?",
            "vi": "Thuốc tây có đắt không?"
          },
          {
            "zh": "我生病了，吃了西药。",
            "py": "Wǒ shēngbìng le, chīle xīyào.",
            "vi": "Tôi bị ốm, đã uống thuốc tây."
          },
          {
            "zh": "箱子里有一些西药。",
            "py": "Xiāngzi lǐ yǒu yìxiē xīyào.",
            "vi": "Trong vali có một ít thuốc tây."
          },
          {
            "zh": "这些西药是德国的。",
            "py": "Zhèxiē xīyào shì Déguó de.",
            "vi": "Những thuốc tây này là của Đức."
          },
          {
            "zh": "我不吃西药，只吃中药。",
            "py": "Wǒ bù chī xīyào, zhǐ chī zhōngyào.",
            "vi": "Tôi không dùng thuốc tây, chỉ dùng thuốc bắc."
          }
        ]
      },
      {
        "zh": "茶叶",
        "py": "cháyè",
        "vi": "lá chè",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "这不是药，这是茶叶。",
            "py": "Zhè bú shì yào, zhè shì cháyè.",
            "vi": "Đây không phải thuốc, đây là lá chè."
          },
          {
            "zh": "中国茶叶很有名。",
            "py": "Zhōngguó cháyè hěn yǒumíng.",
            "vi": "Trà (lá chè) Trung Quốc rất nổi tiếng."
          },
          {
            "zh": "我想买一些茶叶。",
            "py": "Wǒ xiǎng mǎi yìxiē cháyè.",
            "vi": "Tôi muốn mua một ít lá chè."
          },
          {
            "zh": "我买茶叶。",
            "py": "Wǒ mǎi cháyè.",
            "vi": "Tôi mua trà."
          },
          {
            "zh": "箱子里有茶叶。",
            "py": "Xiāngzi lǐ yǒu cháyè.",
            "vi": "Trong vali có trà."
          },
          {
            "zh": "这些茶叶多少钱？",
            "py": "Zhèxiē cháyè duōshao qián?",
            "vi": "Những lá trà này bao nhiêu tiền?"
          },
          {
            "zh": "我想给朋友寄茶叶。",
            "py": "Wǒ xiǎng gěi péngyou jì cháyè.",
            "vi": "Tôi muốn gửi lá trà cho bạn."
          },
          {
            "zh": "越南的茶叶很好。",
            "py": "Yuènán de cháyè hěn hǎo.",
            "vi": "Lá trà Việt Nam rất tốt."
          },
          {
            "zh": "这不是茶叶，是中药。",
            "py": "Zhè bú shì cháyè, shì zhōngyào.",
            "vi": "Đây không phải lá trà, là thuốc bắc."
          },
          {
            "zh": "他喜欢中国茶叶。",
            "py": "Tā xǐhuan Zhōngguó cháyè.",
            "vi": "Anh ấy thích lá trà Trung Quốc."
          }
        ]
      },
      {
        "zh": "里",
        "py": "lǐ",
        "vi": "trong, bên trong",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "那个箱子里是什么？",
            "py": "Nàge xiāngzi lǐ shì shénme?",
            "vi": "Trong vali kia là gì?"
          },
          {
            "zh": "箱子里有两张光盘。",
            "py": "Xiāngzi lǐ yǒu liǎng zhāng guāngpán.",
            "vi": "Trong vali có hai cái đĩa."
          },
          {
            "zh": "教室里有很多学生。",
            "py": "Jiàoshì lǐ yǒu hěn duō xuésheng.",
            "vi": "Trong lớp học có rất nhiều học sinh."
          },
          {
            "zh": "房间里有词典。",
            "py": "Fángjiān lǐ yǒu cídiǎn.",
            "vi": "Trong phòng có từ điển."
          },
          {
            "zh": "箱子里没有衣服。",
            "py": "Xiāngzi lǐ méiyǒu yīfu.",
            "vi": "Trong vali không có quần áo."
          },
          {
            "zh": "瓶里有水吗？",
            "py": "Píng lǐ yǒu shuǐ ma?",
            "vi": "Trong chai có nước không?"
          },
          {
            "zh": "房间里很冷。",
            "py": "Fángjiān lǐ hěn lěng.",
            "vi": "Trong phòng rất lạnh."
          },
          {
            "zh": "笔在书包里。",
            "py": "Bǐ zài shūbāo lǐ.",
            "vi": "Bút ở trong cặp sách."
          },
          {
            "zh": "商店里人不多。",
            "py": "Shāngdiàn lǐ rén bù duō.",
            "vi": "Trong cửa hàng không đông người."
          },
          {
            "zh": "银行里有很多人。",
            "py": "Yínháng lǐ yǒu hěn duō rén.",
            "vi": "Trong ngân hàng có rất nhiều người."
          }
        ]
      },
      {
        "zh": "日用品",
        "py": "rìyòngpǐn",
        "vi": "đồ dùng hàng ngày",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "都是日用品。",
            "py": "Dōu shì rìyòngpǐn.",
            "vi": "Đều là đồ dùng hàng ngày."
          },
          {
            "zh": "这些都是日用品，不是药。",
            "py": "Zhèxiē dōu shì rìyòngpǐn, bú shì yào.",
            "vi": "Những thứ này đều là đồ dùng hàng ngày, không phải thuốc."
          },
          {
            "zh": "商店里有很多日用品。",
            "py": "Shāngdiàn lǐ yǒu hěn duō rìyòngpǐn.",
            "vi": "Trong cửa hàng có rất nhiều đồ dùng hàng ngày."
          },
          {
            "zh": "这些是日用品。",
            "py": "Zhèxiē shì rìyòngpǐn.",
            "vi": "Đây là đồ dùng hàng ngày."
          },
          {
            "zh": "箱子里都是日用品。",
            "py": "Xiāngzi lǐ dōu shì rìyòngpǐn.",
            "vi": "Trong vali toàn là đồ dùng hàng ngày."
          },
          {
            "zh": "我买了很多日用品。",
            "py": "Wǒ mǎile hěn duō rìyòngpǐn.",
            "vi": "Tôi đã mua rất nhiều đồ dùng hằng ngày."
          },
          {
            "zh": "日用品不太重。",
            "py": "Rìyòngpǐn bú tài zhòng.",
            "vi": "Đồ dùng hằng ngày không nặng lắm."
          },
          {
            "zh": "这儿卖日用品吗？",
            "py": "Zhèr mài rìyòngpǐn ma?",
            "vi": "Ở đây có bán đồ dùng hằng ngày không?"
          },
          {
            "zh": "妈妈经常买日用品。",
            "py": "Māma jīngcháng mǎi rìyòngpǐn.",
            "vi": "Mẹ thường mua đồ dùng hằng ngày."
          },
          {
            "zh": "这些日用品是谁的？",
            "py": "Zhèxiē rìyòngpǐn shì shéi de?",
            "vi": "Những đồ dùng này là của ai?"
          }
        ]
      },
      {
        "zh": "件",
        "py": "jiàn",
        "vi": "cái, chiếc (lượng từ cho quần áo, sự việc)",
        "type": "Lượng từ",
        "ex": [
          {
            "zh": "有两件衣服。",
            "py": "Yǒu liǎng jiàn yīfu.",
            "vi": "Có hai bộ quần áo."
          },
          {
            "zh": "这件衣服是新的。",
            "py": "Zhè jiàn yīfu shì xīn de.",
            "vi": "Bộ quần áo này là mới."
          },
          {
            "zh": "我要买一件衣服。",
            "py": "Wǒ yào mǎi yí jiàn yīfu.",
            "vi": "Tôi muốn mua một bộ quần áo."
          },
          {
            "zh": "这件衣服很好看。",
            "py": "Zhè jiàn yīfu hěn hǎokàn.",
            "vi": "Chiếc áo này rất đẹp."
          },
          {
            "zh": "我买一件衣服。",
            "py": "Wǒ mǎi yí jiàn yīfu.",
            "vi": "Tôi mua một chiếc áo."
          },
          {
            "zh": "我要这件。",
            "py": "Wǒ yào zhè jiàn.",
            "vi": "Tôi muốn chiếc này."
          },
          {
            "zh": "箱子里有五件衣服。",
            "py": "Xiāngzi lǐ yǒu wǔ jiàn yīfu.",
            "vi": "Trong vali có năm bộ quần áo."
          },
          {
            "zh": "这件衬衣是新的。",
            "py": "Zhè jiàn chènyī shì xīn de.",
            "vi": "Chiếc áo sơ mi này là mới."
          },
          {
            "zh": "你喜欢哪件？",
            "py": "Nǐ xǐhuan nǎ jiàn?",
            "vi": "Bạn thích chiếc nào?"
          },
          {
            "zh": "那件红色的毛衣很好看。",
            "py": "Nà jiàn hóngsè de máoyī hěn hǎokàn.",
            "vi": "Chiếc áo len màu đỏ kia rất đẹp."
          }
        ]
      },
      {
        "zh": "把",
        "py": "bǎ",
        "vi": "cái, chiếc (lượng từ cho ô, ghế, dao...)",
        "type": "Lượng từ",
        "ex": [
          {
            "zh": "他有一把黑色的雨伞。",
            "py": "Tā yǒu yì bǎ hēisè de yǔsǎn.",
            "vi": "Anh ấy có một chiếc ô màu đen."
          },
          {
            "zh": "这把雨伞是我的。",
            "py": "Zhè bǎ yǔsǎn shì wǒ de.",
            "vi": "Cái ô này là của tôi."
          },
          {
            "zh": "教室里有几把椅子？",
            "py": "Jiàoshì lǐ yǒu jǐ bǎ yǐzi?",
            "vi": "Trong lớp học có mấy cái ghế?"
          },
          {
            "zh": "我有两把雨伞。",
            "py": "Wǒ yǒu liǎng bǎ yǔsǎn.",
            "vi": "Tôi có hai cái ô."
          },
          {
            "zh": "他有两把伞。",
            "py": "Tā yǒu liǎng bǎ sǎn.",
            "vi": "Anh ấy có hai cái ô."
          },
          {
            "zh": "我有一把旧雨伞。",
            "py": "Wǒ yǒu yì bǎ jiù yǔsǎn.",
            "vi": "Tôi có một chiếc ô cũ."
          },
          {
            "zh": "请给我一把雨伞。",
            "py": "Qǐng gěi wǒ yì bǎ yǔsǎn.",
            "vi": "Làm ơn cho tôi một chiếc ô."
          },
          {
            "zh": "那把雨伞多少钱？",
            "py": "Nà bǎ yǔsǎn duōshao qián?",
            "vi": "Chiếc ô kia bao nhiêu tiền?"
          },
          {
            "zh": "这把是你的吗？",
            "py": "Zhè bǎ shì nǐ de ma?",
            "vi": "Chiếc này là của bạn à?"
          },
          {
            "zh": "一把雨伞二十块。",
            "py": "Yì bǎ yǔsǎn èrshí kuài.",
            "vi": "Một chiếc ô hai mươi đồng."
          }
        ]
      },
      {
        "zh": "衣服",
        "py": "yīfu",
        "vi": "quần áo",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "箱子里有两件衣服。",
            "py": "Xiāngzi lǐ yǒu liǎng jiàn yīfu.",
            "vi": "Trong vali có hai bộ quần áo."
          },
          {
            "zh": "这件衣服很轻。",
            "py": "Zhè jiàn yīfu hěn qīng.",
            "vi": "Bộ quần áo này rất nhẹ."
          },
          {
            "zh": "你喜欢这件衣服吗？",
            "py": "Nǐ xǐhuan zhè jiàn yīfu ma?",
            "vi": "Bạn có thích bộ quần áo này không?"
          },
          {
            "zh": "这些衣服很贵。",
            "py": "Zhèxiē yīfu hěn guì.",
            "vi": "Những bộ quần áo này rất đắt."
          },
          {
            "zh": "她买了新衣服。",
            "py": "Tā mǎile xīn yīfu.",
            "vi": "Cô ấy đã mua quần áo mới."
          },
          {
            "zh": "他的衣服很旧。",
            "py": "Tā de yīfu hěn jiù.",
            "vi": "Quần áo của anh ấy rất cũ."
          },
          {
            "zh": "我们去买衣服吧。",
            "py": "Wǒmen qù mǎi yīfu ba.",
            "vi": "Chúng ta đi mua quần áo đi."
          },
          {
            "zh": "这件衣服太小了。",
            "py": "Zhè jiàn yīfu tài xiǎo le.",
            "vi": "Bộ quần áo này nhỏ quá."
          },
          {
            "zh": "商场的衣服很贵。",
            "py": "Shāngchǎng de yīfu hěn guì.",
            "vi": "Quần áo ở trung tâm thương mại rất đắt."
          },
          {
            "zh": "她喜欢买衣服。",
            "py": "Tā xǐhuan mǎi yīfu.",
            "vi": "Cô ấy thích mua quần áo."
          }
        ]
      },
      {
        "zh": "雨伞",
        "py": "yǔsǎn",
        "vi": "cái ô, dù",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "一把雨伞和一瓶香水。",
            "py": "Yì bǎ yǔsǎn hé yì píng xiāngshuǐ.",
            "vi": "Một cái ô và một chai nước hoa."
          },
          {
            "zh": "下雨了，你有雨伞吗？",
            "py": "Xiàyǔ le, nǐ yǒu yǔsǎn ma?",
            "vi": "Trời mưa rồi, bạn có ô không?"
          },
          {
            "zh": "这把雨伞是新的。",
            "py": "Zhè bǎ yǔsǎn shì xīn de.",
            "vi": "Cái ô này là mới."
          },
          {
            "zh": "下雨了，我要雨伞。",
            "py": "Xiàyǔ le, wǒ yào yǔsǎn.",
            "vi": "Trời mưa rồi, tôi cần ô."
          },
          {
            "zh": "这是谁的雨伞？",
            "py": "Zhè shì shéi de yǔsǎn?",
            "vi": "Đây là ô của ai?"
          },
          {
            "zh": "我的雨伞是蓝色的。",
            "py": "Wǒ de yǔsǎn shì lánsè de.",
            "vi": "Ô của tôi màu xanh lam."
          },
          {
            "zh": "这把雨伞很好看。",
            "py": "Zhè bǎ yǔsǎn hěn hǎokàn.",
            "vi": "Chiếc ô này rất đẹp."
          },
          {
            "zh": "下雨了，我没有雨伞。",
            "py": "Xià yǔ le, wǒ méiyǒu yǔsǎn.",
            "vi": "Trời mưa rồi, tôi không có ô."
          },
          {
            "zh": "你的雨伞在哪儿？",
            "py": "Nǐ de yǔsǎn zài nǎr?",
            "vi": "Ô của bạn ở đâu?"
          },
          {
            "zh": "我想买一把新雨伞。",
            "py": "Wǒ xiǎng mǎi yì bǎ xīn yǔsǎn.",
            "vi": "Tôi muốn mua một chiếc ô mới."
          }
        ]
      },
      {
        "zh": "雨",
        "py": "yǔ",
        "vi": "mưa",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "下雨了。",
            "py": "Xiàyǔ le.",
            "vi": "Trời mưa rồi."
          },
          {
            "zh": "今天有雨吗？",
            "py": "Jīntiān yǒu yǔ ma?",
            "vi": "Hôm nay có mưa không?"
          },
          {
            "zh": "冬天这儿雨不多。",
            "py": "Dōngtiān zhèr yǔ bù duō.",
            "vi": "Mùa đông ở đây ít mưa."
          },
          {
            "zh": "今天下雨。",
            "py": "Jīntiān xiàyǔ.",
            "vi": "Hôm nay trời mưa."
          },
          {
            "zh": "雨很大。",
            "py": "Yǔ hěn dà.",
            "vi": "Mưa rất to."
          },
          {
            "zh": "雨不大，我们出去吧。",
            "py": "Yǔ bú dà, wǒmen chūqù ba.",
            "vi": "Mưa không to, chúng ta ra ngoài đi."
          },
          {
            "zh": "今天的雨很大。",
            "py": "Jīntiān de yǔ hěn dà.",
            "vi": "Mưa hôm nay rất to."
          },
          {
            "zh": "北京的雨不多。",
            "py": "Běijīng de yǔ bù duō.",
            "vi": "Bắc Kinh ít mưa."
          },
          {
            "zh": "明天有大雨。",
            "py": "Míngtiān yǒu dà yǔ.",
            "vi": "Ngày mai có mưa to."
          },
          {
            "zh": "雨很小，不要雨伞。",
            "py": "Yǔ hěn xiǎo, bú yào yǔsǎn.",
            "vi": "Mưa rất nhỏ, không cần ô."
          }
        ]
      },
      {
        "zh": "瓶",
        "py": "píng",
        "vi": "chai, lọ",
        "type": "Lượng từ",
        "ex": [
          {
            "zh": "我买了两瓶香水。",
            "py": "Wǒ mǎi le liǎng píng xiāngshuǐ.",
            "vi": "Tôi đã mua hai chai nước hoa."
          },
          {
            "zh": "我要一瓶水。",
            "py": "Wǒ yào yì píng shuǐ.",
            "vi": "Tôi muốn một chai nước."
          },
          {
            "zh": "这瓶是什么？",
            "py": "Zhè píng shì shénme?",
            "vi": "Cái chai này là gì?"
          },
          {
            "zh": "这瓶香水很贵。",
            "py": "Zhè píng xiāngshuǐ hěn guì.",
            "vi": "Lọ nước hoa này rất đắt."
          },
          {
            "zh": "我买一瓶水。",
            "py": "Wǒ mǎi yì píng shuǐ.",
            "vi": "Tôi mua một chai nước."
          },
          {
            "zh": "我们买两瓶啤酒吧。",
            "py": "Wǒmen mǎi liǎng píng píjiǔ ba.",
            "vi": "Chúng ta mua hai chai bia đi."
          },
          {
            "zh": "一瓶可乐三块钱。",
            "py": "Yì píng kělè sān kuài qián.",
            "vi": "Một chai coca ba đồng."
          },
          {
            "zh": "箱子里有两瓶香水。",
            "py": "Xiāngzi lǐ yǒu liǎng píng xiāngshuǐ.",
            "vi": "Trong vali có hai chai nước hoa."
          },
          {
            "zh": "这瓶酒多少钱？",
            "py": "Zhè píng jiǔ duōshao qián?",
            "vi": "Chai rượu này bao nhiêu tiền?"
          },
          {
            "zh": "他喝了一瓶可乐。",
            "py": "Tā hēle yì píng kělè.",
            "vi": "Anh ấy đã uống một chai coca."
          }
        ]
      },
      {
        "zh": "香水",
        "py": "xiāngshuǐ",
        "vi": "nước hoa",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "这瓶香水是谁的？",
            "py": "Zhè píng xiāngshuǐ shì shéi de?",
            "vi": "Chai nước hoa này là của ai?"
          },
          {
            "zh": "这是法国香水。",
            "py": "Zhè shì Fǎguó xiāngshuǐ.",
            "vi": "Đây là nước hoa Pháp."
          },
          {
            "zh": "她很喜欢香水。",
            "py": "Tā hěn xǐhuan xiāngshuǐ.",
            "vi": "Cô ấy rất thích nước hoa."
          },
          {
            "zh": "她喜欢香水。",
            "py": "Tā xǐhuan xiāngshuǐ.",
            "vi": "Cô ấy thích nước hoa."
          },
          {
            "zh": "这瓶香水很香。",
            "py": "Zhè píng xiāngshuǐ hěn xiāng.",
            "vi": "Lọ nước hoa này rất thơm."
          },
          {
            "zh": "她的香水很贵。",
            "py": "Tā de xiāngshuǐ hěn guì.",
            "vi": "Nước hoa của cô ấy rất đắt."
          },
          {
            "zh": "这是什么香水？",
            "py": "Zhè shì shénme xiāngshuǐ?",
            "vi": "Đây là nước hoa gì?"
          },
          {
            "zh": "我不喜欢香水。",
            "py": "Wǒ bù xǐhuan xiāngshuǐ.",
            "vi": "Tôi không thích nước hoa."
          },
          {
            "zh": "商场里有很多香水。",
            "py": "Shāngchǎng lǐ yǒu hěn duō xiāngshuǐ.",
            "vi": "Trong trung tâm thương mại có rất nhiều nước hoa."
          },
          {
            "zh": "这瓶香水是新的。",
            "py": "Zhè píng xiāngshuǐ shì xīn de.",
            "vi": "Chai nước hoa này là mới."
          }
        ]
      },
      {
        "zh": "水",
        "py": "shuǐ",
        "vi": "nước",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "这瓶水不贵。",
            "py": "Zhè píng shuǐ bú guì.",
            "vi": "Chai nước này không đắt."
          },
          {
            "zh": "这是热水还是冷水？",
            "py": "Zhè shì rèshuǐ háishi lěngshuǐ?",
            "vi": "Đây là nước nóng hay nước lạnh?"
          },
          {
            "zh": "请给我一杯水。",
            "py": "Qǐng gěi wǒ yì bēi shuǐ.",
            "vi": "Xin cho tôi một cốc nước."
          },
          {
            "zh": "箱子里有一瓶水。",
            "py": "Xiāngzi lǐ yǒu yì píng shuǐ.",
            "vi": "Trong vali có một chai nước."
          },
          {
            "zh": "这是白水，不是香水。",
            "py": "Zhè shì báishuǐ, bú shì xiāngshuǐ.",
            "vi": "Đây là nước lọc, không phải nước hoa."
          },
          {
            "zh": "这儿有水吗？",
            "py": "Zhèr yǒu shuǐ ma?",
            "vi": "Ở đây có nước không?"
          },
          {
            "zh": "请给我一点儿水。",
            "py": "Qǐng gěi wǒ yìdiǎnr shuǐ.",
            "vi": "Làm ơn cho tôi một chút nước."
          },
          {
            "zh": "瓶里没有水了。",
            "py": "Píng lǐ méiyǒu shuǐ le.",
            "vi": "Trong chai hết nước rồi."
          },
          {
            "zh": "这个水太冷了。",
            "py": "Zhège shuǐ tài lěng le.",
            "vi": "Nước này lạnh quá."
          },
          {
            "zh": "你要水还是要茶？",
            "py": "Nǐ yào shuǐ háishì yào chá?",
            "vi": "Bạn muốn nước hay trà?"
          }
        ]
      },
      {
        "zh": "本",
        "py": "běn",
        "vi": "quyển, cuốn",
        "type": "Lượng từ",
        "ex": [
          {
            "zh": "一本书，一本词典。",
            "py": "Yì běn shū, yì běn cídiǎn.",
            "vi": "Một quyển sách, một quyển từ điển."
          },
          {
            "zh": "这本书是谁的？",
            "py": "Zhè běn shū shì shéi de?",
            "vi": "Quyển sách này là của ai?"
          },
          {
            "zh": "我买了两本词典。",
            "py": "Wǒ mǎile liǎng běn cídiǎn.",
            "vi": "Tôi đã mua hai quyển từ điển."
          },
          {
            "zh": "我买一本词典。",
            "py": "Wǒ mǎi yì běn cídiǎn.",
            "vi": "Tôi mua một cuốn từ điển."
          },
          {
            "zh": "箱子里有两本书。",
            "py": "Xiāngzi lǐ yǒu liǎng běn shū.",
            "vi": "Trong vali có hai cuốn sách."
          },
          {
            "zh": "我有三本杂志。",
            "py": "Wǒ yǒu sān běn zázhì.",
            "vi": "Tôi có ba quyển tạp chí."
          },
          {
            "zh": "你要哪本？",
            "py": "Nǐ yào nǎ běn?",
            "vi": "Bạn muốn quyển nào?"
          },
          {
            "zh": "箱子里有五本词典。",
            "py": "Xiāngzi lǐ yǒu wǔ běn cídiǎn.",
            "vi": "Trong vali có năm quyển từ điển."
          },
          {
            "zh": "一本杂志二十块。",
            "py": "Yì běn zázhì èrshí kuài.",
            "vi": "Một quyển tạp chí hai mươi đồng."
          },
          {
            "zh": "那本英语书是我的。",
            "py": "Nà běn Yīngyǔ shū shì wǒ de.",
            "vi": "Quyển sách tiếng Anh kia là của tôi."
          }
        ]
      },
      {
        "zh": "词典",
        "py": "cídiǎn",
        "vi": "từ điển",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "你有词典吗？",
            "py": "Nǐ yǒu cídiǎn ma?",
            "vi": "Bạn có từ điển không?"
          },
          {
            "zh": "这本词典很重。",
            "py": "Zhè běn cídiǎn hěn zhòng.",
            "vi": "Quyển từ điển này rất nặng."
          },
          {
            "zh": "我要买一本汉语词典。",
            "py": "Wǒ yào mǎi yì běn Hànyǔ cídiǎn.",
            "vi": "Tôi muốn mua một quyển từ điển tiếng Hán."
          },
          {
            "zh": "这本词典很好。",
            "py": "Zhè běn cídiǎn hěn hǎo.",
            "vi": "Cuốn từ điển này rất tốt."
          },
          {
            "zh": "我没有汉语词典。",
            "py": "Wǒ méiyǒu Hànyǔ cídiǎn.",
            "vi": "Tôi không có từ điển tiếng Trung."
          },
          {
            "zh": "你的词典多少钱？",
            "py": "Nǐ de cídiǎn duōshao qián?",
            "vi": "Từ điển của bạn bao nhiêu tiền?"
          },
          {
            "zh": "这本词典很轻。",
            "py": "Zhè běn cídiǎn hěn qīng.",
            "vi": "Quyển từ điển này rất nhẹ."
          },
          {
            "zh": "我用词典学汉语。",
            "py": "Wǒ yòng cídiǎn xué Hànyǔ.",
            "vi": "Tôi dùng từ điển để học tiếng Trung."
          },
          {
            "zh": "那本词典是英语的。",
            "py": "Nà běn cídiǎn shì Yīngyǔ de.",
            "vi": "Quyển từ điển kia là tiếng Anh."
          },
          {
            "zh": "箱子里有一本旧词典。",
            "py": "Xiāngzi lǐ yǒu yì běn jiù cídiǎn.",
            "vi": "Trong vali có một quyển từ điển cũ."
          }
        ]
      },
      {
        "zh": "张",
        "py": "zhāng",
        "vi": "tấm, tờ, cái (bàn, ảnh, đĩa...)",
        "type": "Lượng từ",
        "ex": [
          {
            "zh": "我有三张光盘。",
            "py": "Wǒ yǒu sān zhāng guāngpán.",
            "vi": "Tôi có ba cái đĩa."
          },
          {
            "zh": "一张地图。",
            "py": "Yì zhāng dìtú.",
            "vi": "Một tấm bản đồ."
          },
          {
            "zh": "一张照片。",
            "py": "Yì zhāng zhàopiàn.",
            "vi": "Một bức ảnh."
          },
          {
            "zh": "他买一张光盘。",
            "py": "Tā mǎi yì zhāng guāngpán.",
            "vi": "Anh ấy mua một cái đĩa CD."
          },
          {
            "zh": "箱子里有一张光盘。",
            "py": "Xiāngzi lǐ yǒu yì zhāng guāngpán.",
            "vi": "Trong vali có một cái đĩa CD."
          },
          {
            "zh": "请给我两张照片。",
            "py": "Qǐng gěi wǒ liǎng zhāng zhàopiàn.",
            "vi": "Làm ơn cho tôi hai tấm ảnh."
          },
          {
            "zh": "我有两张光盘。",
            "py": "Wǒ yǒu liǎng zhāng guāngpán.",
            "vi": "Tôi có hai đĩa CD."
          },
          {
            "zh": "那张照片是在北京照的。",
            "py": "Nà zhāng zhàopiàn shì zài Běijīng zhào de.",
            "vi": "Bức ảnh kia chụp ở Bắc Kinh."
          },
          {
            "zh": "你要几张？",
            "py": "Nǐ yào jǐ zhāng?",
            "vi": "Bạn muốn mấy tấm?"
          },
          {
            "zh": "张先生是我们的经理。",
            "py": "Zhāng xiānsheng shì wǒmen de jīnglǐ.",
            "vi": "Ông Trương là giám đốc của chúng tôi."
          }
        ]
      },
      {
        "zh": "光盘",
        "py": "guāngpán",
        "vi": "đĩa CD, VCD, DVD",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "两张光盘。",
            "py": "Liǎng zhāng guāngpán.",
            "vi": "Hai đĩa CD."
          },
          {
            "zh": "一张光盘。",
            "py": "Yì zhāng guāngpán.",
            "vi": "Một cái đĩa CD."
          },
          {
            "zh": "这张光盘是英语光盘。",
            "py": "Zhè zhāng guāngpán shì Yīngyǔ guāngpán.",
            "vi": "Đĩa CD này là đĩa tiếng Anh."
          },
          {
            "zh": "这张光盘是他的。",
            "py": "Zhè zhāng guāngpán shì tā de.",
            "vi": "Cái đĩa CD này là của anh ấy."
          },
          {
            "zh": "我买了一张光盘。",
            "py": "Wǒ mǎile yì zhāng guāngpán.",
            "vi": "Tôi đã mua một cái đĩa CD."
          },
          {
            "zh": "这张光盘多少钱？",
            "py": "Zhè zhāng guāngpán duōshao qián?",
            "vi": "Đĩa CD này bao nhiêu tiền?"
          },
          {
            "zh": "我买了一张汉语光盘。",
            "py": "Wǒ mǎile yì zhāng Hànyǔ guāngpán.",
            "vi": "Tôi mua một đĩa CD tiếng Trung."
          },
          {
            "zh": "光盘在箱子里。",
            "py": "Guāngpán zài xiāngzi lǐ.",
            "vi": "Đĩa CD ở trong vali."
          },
          {
            "zh": "现在人们很少用光盘。",
            "py": "Xiànzài rénmen hěn shǎo yòng guāngpán.",
            "vi": "Bây giờ mọi người rất ít dùng đĩa CD."
          },
          {
            "zh": "这些光盘是谁的？",
            "py": "Zhèxiē guāngpán shì shéi de?",
            "vi": "Những đĩa CD này là của ai?"
          }
        ]
      },
      {
        "zh": "支",
        "py": "zhī",
        "vi": "cây, chiếc (lượng từ cho bút)",
        "type": "Lượng từ",
        "ex": [
          {
            "zh": "三支笔。",
            "py": "Sān zhī bǐ.",
            "vi": "Ba cây bút."
          },
          {
            "zh": "我有一支黑色的笔。",
            "py": "Wǒ yǒu yì zhī hēisè de bǐ.",
            "vi": "Tôi có một cây bút màu đen."
          },
          {
            "zh": "这支笔是谁的？",
            "py": "Zhè zhī bǐ shì shéi de?",
            "vi": "Cây bút này là của ai?"
          },
          {
            "zh": "这支笔是黑色的。",
            "py": "Zhè zhī bǐ shì hēisè de.",
            "vi": "Cây bút này màu đen."
          },
          {
            "zh": "我有两支笔。",
            "py": "Wǒ yǒu liǎng zhī bǐ.",
            "vi": "Tôi có hai cây bút."
          },
          {
            "zh": "请给我一支笔。",
            "py": "Qǐng gěi wǒ yì zhī bǐ.",
            "vi": "Làm ơn cho tôi một cây bút."
          },
          {
            "zh": "这支笔多少钱？",
            "py": "Zhè zhī bǐ duōshao qián?",
            "vi": "Cây bút này bao nhiêu tiền?"
          },
          {
            "zh": "我买了三支红笔。",
            "py": "Wǒ mǎile sān zhī hóng bǐ.",
            "vi": "Tôi đã mua ba cây bút đỏ."
          },
          {
            "zh": "你有几支笔？",
            "py": "Nǐ yǒu jǐ zhī bǐ?",
            "vi": "Bạn có mấy cây bút?"
          },
          {
            "zh": "那支笔是老师的。",
            "py": "Nà zhī bǐ shì lǎoshī de.",
            "vi": "Cây bút kia là của thầy."
          }
        ]
      },
      {
        "zh": "笔",
        "py": "bǐ",
        "vi": "bút, bút lông",
        "type": "Danh từ",
        "ex": [
          {
            "zh": "这是我的笔。",
            "py": "Zhè shì wǒ de bǐ.",
            "vi": "Đây là bút của tôi."
          },
          {
            "zh": "我没有笔。",
            "py": "Wǒ méiyǒu bǐ.",
            "vi": "Tôi không có bút."
          },
          {
            "zh": "三支笔和一本词典。",
            "py": "Sān zhī bǐ hé yì běn cídiǎn.",
            "vi": "Ba cây bút và một quyển từ điển."
          },
          {
            "zh": "这支笔很贵。",
            "py": "Zhè zhī bǐ hěn guì.",
            "vi": "Cây bút này rất đắt."
          },
          {
            "zh": "箱子里有一支笔。",
            "py": "Xiāngzi lǐ yǒu yì zhī bǐ.",
            "vi": "Trong vali có một cây bút."
          },
          {
            "zh": "你有笔吗？",
            "py": "Nǐ yǒu bǐ ma?",
            "vi": "Bạn có bút không?"
          },
          {
            "zh": "我的笔是红色的。",
            "py": "Wǒ de bǐ shì hóngsè de.",
            "vi": "Bút của tôi màu đỏ."
          },
          {
            "zh": "这支笔不太好。",
            "py": "Zhè zhī bǐ bú tài hǎo.",
            "vi": "Cây bút này không tốt lắm."
          },
          {
            "zh": "用笔写汉字。",
            "py": "Yòng bǐ xiě Hànzì.",
            "vi": "Dùng bút viết chữ Hán."
          },
          {
            "zh": "我的笔在哪儿？",
            "py": "Wǒ de bǐ zài nǎr?",
            "vi": "Bút của tôi đâu rồi?"
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 18 (b20): 最近怎么样？– Dạo này thế nào?",
    "words": [
      {
        "zh": "好久",
        "py": "hǎojiǔ",
        "type": "Tính từ",
        "vi": "rất lâu, lâu rồi",
        "ex": [
          {
            "zh": "好久不见！",
            "py": "Hǎojiǔ bú jiàn!",
            "vi": "Lâu rồi không gặp!"
          },
          {
            "zh": "我好久没喝茶了。",
            "py": "Wǒ hǎojiǔ méi hē chá le.",
            "vi": "Tôi lâu rồi chưa uống trà."
          },
          {
            "zh": "他好久没去学校了。",
            "py": "Tā hǎojiǔ méi qù xuéxiào le.",
            "vi": "Anh ấy lâu rồi không đến trường."
          },
          {
            "zh": "好久没吃饺子了。",
            "py": "Hǎojiǔ méi chī jiǎozi le.",
            "vi": "Lâu rồi chưa ăn sủi cảo."
          },
          {
            "zh": "我们好久没见了。",
            "py": "Wǒmen hǎojiǔ méi jiàn le.",
            "vi": "Chúng tôi lâu rồi không gặp."
          },
          {
            "zh": "我好久没去北京了。",
            "py": "Wǒ hǎojiǔ méi qù Běijīng le.",
            "vi": "Lâu lắm rồi tôi không đi Bắc Kinh."
          },
          {
            "zh": "他好久没给我寄信了。",
            "py": "Tā hǎojiǔ méi gěi wǒ jì xìn le.",
            "vi": "Lâu rồi anh ấy không gửi thư cho tôi."
          },
          {
            "zh": "我等了好久。",
            "py": "Wǒ děngle hǎojiǔ.",
            "vi": "Tôi đã đợi rất lâu."
          },
          {
            "zh": "好久没下雨了。",
            "py": "Hǎojiǔ méi xià yǔ le.",
            "vi": "Lâu rồi trời không mưa."
          },
          {
            "zh": "我好久没看见吴老师了。",
            "py": "Wǒ hǎojiǔ méi kànjiàn Wú lǎoshī le.",
            "vi": "Lâu lắm rồi tôi không gặp cô Ngô."
          }
        ]
      },
      {
        "zh": "回家",
        "py": "huíjiā",
        "type": "Động từ",
        "vi": "về nhà",
        "ex": [
          {
            "zh": "我回家了。",
            "py": "Wǒ huíjiā le.",
            "vi": "Tôi về nhà rồi."
          },
          {
            "zh": "他回家吃饭。",
            "py": "Tā huíjiā chīfàn.",
            "vi": "Anh ấy về nhà ăn cơm."
          },
          {
            "zh": "你今天回家吗？",
            "py": "Nǐ jīntiān huíjiā ma?",
            "vi": "Hôm nay bạn về nhà không?"
          },
          {
            "zh": "我好久没回家了。",
            "py": "Wǒ hǎojiǔ méi huíjiā le.",
            "vi": "Tôi lâu rồi chưa về nhà."
          },
          {
            "zh": "他明天回家。",
            "py": "Tā míngtiān huíjiā.",
            "vi": "Anh ấy mai về nhà."
          },
          {
            "zh": "我们几点回家？",
            "py": "Wǒmen jǐ diǎn huíjiā?",
            "vi": "Mấy giờ chúng ta về nhà?"
          },
          {
            "zh": "他坐地铁回家。",
            "py": "Tā zuò dìtiě huíjiā.",
            "vi": "Anh ấy đi tàu điện ngầm về nhà."
          },
          {
            "zh": "下雨了，我们回家吧。",
            "py": "Xià yǔ le, wǒmen huíjiā ba.",
            "vi": "Trời mưa rồi, chúng ta về nhà thôi."
          },
          {
            "zh": "我想早一点儿回家。",
            "py": "Wǒ xiǎng zǎo yìdiǎnr huíjiā.",
            "vi": "Tôi muốn về nhà sớm một chút."
          },
          {
            "zh": "星期天我不回家。",
            "py": "Xīngqītiān wǒ bù huíjiā.",
            "vi": "Chủ nhật tôi không về nhà."
          }
        ]
      },
      {
        "zh": "马虎",
        "py": "mǎhu",
        "type": "Tính từ",
        "vi": "cẩu thả, qua loa",
        "ex": [
          {
            "zh": "他很马虎。",
            "py": "Tā hěn mǎhu.",
            "vi": "Anh ấy rất cẩu thả."
          },
          {
            "zh": "我不马虎。",
            "py": "Wǒ bù mǎhu.",
            "vi": "Tôi không cẩu thả."
          },
          {
            "zh": "他是一个马虎的学生。",
            "py": "Tā shì yí gè mǎhu de xuésheng.",
            "vi": "Anh ấy là một học sinh cẩu thả."
          },
          {
            "zh": "秘书很马虎。",
            "py": "Mìshū hěn mǎhu.",
            "vi": "Thư ký rất cẩu thả."
          },
          {
            "zh": "他工作很马虎。",
            "py": "Tā gōngzuò hěn mǎhu.",
            "vi": "Anh ấy làm việc rất cẩu thả."
          },
          {
            "zh": "写汉字不要马虎。",
            "py": "Xiě Hànzì búyào mǎhu.",
            "vi": "Viết chữ Hán đừng cẩu thả."
          },
          {
            "zh": "你太马虎了！",
            "py": "Nǐ tài mǎhu le!",
            "vi": "Bạn cẩu thả quá!"
          },
          {
            "zh": "开车不要马虎。",
            "py": "Kāichē búyào mǎhu.",
            "vi": "Lái xe đừng cẩu thả."
          },
          {
            "zh": "我弟弟有点儿马虎。",
            "py": "Wǒ dìdi yǒudiǎnr mǎhu.",
            "vi": "Em trai tôi hơi cẩu thả."
          },
          {
            "zh": "这个职员很马虎，写错了号码。",
            "py": "Zhège zhíyuán hěn mǎhu, xiěcuòle hàomǎ.",
            "vi": "Nhân viên này rất cẩu thả, viết sai số."
          }
        ]
      },
      {
        "zh": "马马虎虎",
        "py": "mǎmǎhūhū",
        "type": "Tính từ",
        "vi": "tạm tạm, bình thường",
        "ex": [
          {
            "zh": "他汉语马马虎虎。",
            "py": "Tā Hànyǔ mǎmǎhūhū.",
            "vi": "Tiếng Trung của anh ấy tạm tạm."
          },
          {
            "zh": "你身体怎么样？马马虎虎。",
            "py": "Nǐ shēntǐ zěnmeyàng? Mǎmǎhūhū.",
            "vi": "Sức khỏe bạn thế nào? Tạm tạm."
          },
          {
            "zh": "今天马马虎虎。",
            "py": "Jīntiān mǎmǎhūhū.",
            "vi": "Hôm nay tạm tạm."
          },
          {
            "zh": "我工作马马虎虎。",
            "py": "Wǒ gōngzuò mǎmǎhūhū.",
            "vi": "Công việc của tôi tạm tạm."
          },
          {
            "zh": "他学习马马虎虎。",
            "py": "Tā xuéxí mǎmǎhūhū.",
            "vi": "Anh ấy học hành tạm tạm."
          },
          {
            "zh": "我的口语马马虎虎。",
            "py": "Wǒ de kǒuyǔ mǎmǎhūhū.",
            "vi": "Khẩu ngữ của tôi tàm tạm."
          },
          {
            "zh": "这家的饭马马虎虎。",
            "py": "Zhè jiā de fàn mǎmǎhūhū.",
            "vi": "Cơm quán này tàm tạm."
          },
          {
            "zh": "最近怎么样？马马虎虎。",
            "py": "Zuìjìn zěnmeyàng? Mǎmǎhūhū.",
            "vi": "Dạo này thế nào? Tàm tạm."
          },
          {
            "zh": "这本书马马虎虎，不太有意思。",
            "py": "Zhè běn shū mǎmǎhūhū, bú tài yǒu yìsi.",
            "vi": "Quyển sách này tạm được, không thú vị lắm."
          },
          {
            "zh": "他做饭马马虎虎。",
            "py": "Tā zuòfàn mǎmǎhūhū.",
            "vi": "Anh ấy nấu ăn tàm tạm."
          }
        ]
      },
      {
        "zh": "刚",
        "py": "gāng",
        "type": "Phó từ",
        "vi": "mới, vừa mới",
        "ex": [
          {
            "zh": "我刚回家。",
            "py": "Wǒ gāng huíjiā.",
            "vi": "Tôi vừa mới về nhà."
          },
          {
            "zh": "他刚去学校。",
            "py": "Tā gāng qù xuéxiào.",
            "vi": "Anh ấy vừa mới đến trường."
          },
          {
            "zh": "我刚吃饭。",
            "py": "Wǒ gāng chīfàn.",
            "vi": "Tôi vừa mới ăn cơm."
          },
          {
            "zh": "她刚买箱子。",
            "py": "Tā gāng mǎi xiāngzi.",
            "vi": "Cô ấy vừa mới mua vali."
          },
          {
            "zh": "老师刚介绍。",
            "py": "Lǎoshī gāng jièshào.",
            "vi": "Thầy/cô vừa mới giới thiệu."
          },
          {
            "zh": "他刚出去。",
            "py": "Tā gāng chūqù.",
            "vi": "Anh ấy vừa mới ra ngoài."
          },
          {
            "zh": "我刚吃了早饭。",
            "py": "Wǒ gāng chīle zǎofàn.",
            "vi": "Tôi vừa mới ăn sáng."
          },
          {
            "zh": "经理刚回办公室。",
            "py": "Jīnglǐ gāng huí bàngōngshì.",
            "vi": "Giám đốc vừa mới về văn phòng."
          },
          {
            "zh": "我刚买了一辆电动车。",
            "py": "Wǒ gāng mǎile yí liàng diàndòngchē.",
            "vi": "Tôi vừa mới mua một chiếc xe điện."
          },
          {
            "zh": "我们刚开学，不太忙。",
            "py": "Wǒmen gāng kāixué, bú tài máng.",
            "vi": "Chúng tôi vừa mới khai giảng, không bận lắm."
          }
        ]
      },
      {
        "zh": "开学",
        "py": "kāixué",
        "type": "Động từ",
        "vi": "khai giảng",
        "ex": [
          {
            "zh": "我们开学了。",
            "py": "Wǒmen kāixué le.",
            "vi": "Chúng tôi khai giảng rồi."
          },
          {
            "zh": "学校明天开学。",
            "py": "Xuéxiào míngtiān kāixué.",
            "vi": "Trường mai khai giảng."
          },
          {
            "zh": "刚开学，工作很忙。",
            "py": "Gāng kāixué, gōngzuò hěn máng.",
            "vi": "Vừa khai giảng, công việc rất bận."
          },
          {
            "zh": "开学了，我很忙。",
            "py": "Kāixué le, wǒ hěn máng.",
            "vi": "Khai giảng rồi, tôi rất bận."
          },
          {
            "zh": "大学开学了。",
            "py": "Dàxué kāixué le.",
            "vi": "Đại học khai giảng rồi."
          },
          {
            "zh": "你们几号开学？",
            "py": "Nǐmen jǐ hào kāixué?",
            "vi": "Các bạn khai giảng ngày mấy?"
          },
          {
            "zh": "我们学校九月五号开学。",
            "py": "Wǒmen xuéxiào jiǔ yuè wǔ hào kāixué.",
            "vi": "Trường chúng tôi khai giảng ngày 5 tháng 9."
          },
          {
            "zh": "开学了，学生们都回学校了。",
            "py": "Kāixué le, xuéshengmen dōu huí xuéxiào le.",
            "vi": "Khai giảng rồi, học sinh đều về trường."
          },
          {
            "zh": "下个星期开学。",
            "py": "Xià ge xīngqī kāixué.",
            "vi": "Tuần sau khai giảng."
          },
          {
            "zh": "开学那天人很多。",
            "py": "Kāixué nà tiān rén hěn duō.",
            "vi": "Hôm khai giảng rất đông người."
          }
        ]
      },
      {
        "zh": "所以",
        "py": "suǒyǐ",
        "type": "Liên từ",
        "vi": "nên, cho nên",
        "ex": [
          {
            "zh": "我很忙，所以没去。",
            "py": "Wǒ hěn máng, suǒyǐ méi qù.",
            "vi": "Tôi rất bận nên không đi."
          },
          {
            "zh": "刚开学，所以很忙。",
            "py": "Gāng kāixué, suǒyǐ hěn máng.",
            "vi": "Vừa khai giảng nên rất bận."
          },
          {
            "zh": "汉语很难，所以我觉得有意思。",
            "py": "Hànyǔ hěn nán, suǒyǐ wǒ juéde yǒu yìsi.",
            "vi": "Tiếng Trung rất khó nên tôi thấy thú vị."
          },
          {
            "zh": "今天下雨，所以我不去。",
            "py": "Jīntiān xiàyǔ, suǒyǐ wǒ bú qù.",
            "vi": "Hôm nay trời mưa nên tôi không đi."
          },
          {
            "zh": "箱子很重，所以他不买。",
            "py": "Xiāngzi hěn zhòng, suǒyǐ tā bù mǎi.",
            "vi": "Vali rất nặng nên anh ấy không mua."
          },
          {
            "zh": "我生病了，所以没去上班。",
            "py": "Wǒ shēngbìng le, suǒyǐ méi qù shàngbān.",
            "vi": "Tôi bị ốm nên không đi làm."
          },
          {
            "zh": "他很饿，所以吃了三碗饭。",
            "py": "Tā hěn è, suǒyǐ chīle sān wǎn fàn.",
            "vi": "Anh ấy rất đói nên ăn ba bát cơm."
          },
          {
            "zh": "这儿的东西很便宜，所以人很多。",
            "py": "Zhèr de dōngxi hěn piányi, suǒyǐ rén hěn duō.",
            "vi": "Đồ ở đây rất rẻ nên rất đông người."
          },
          {
            "zh": "我想去中国留学，所以学汉语。",
            "py": "Wǒ xiǎng qù Zhōngguó liúxué, suǒyǐ xué Hànyǔ.",
            "vi": "Tôi muốn đi du học Trung Quốc nên học tiếng Trung."
          },
          {
            "zh": "今天很冷，所以我买了一件毛衣。",
            "py": "Jīntiān hěn lěng, suǒyǐ wǒ mǎile yí jiàn máoyī.",
            "vi": "Hôm nay rất lạnh nên tôi mua một chiếc áo len."
          }
        ]
      },
      {
        "zh": "开",
        "py": "kāi",
        "type": "Động từ",
        "vi": "lái (xe), mở",
        "ex": [
          {
            "zh": "请开门。",
            "py": "Qǐng kāimén.",
            "vi": "Xin mở cửa."
          },
          {
            "zh": "我哥哥开汽车去公司。",
            "py": "Wǒ gēge kāi qìchē qù gōngsī.",
            "vi": "Anh trai tôi lái ô tô đi công ty."
          },
          {
            "zh": "谁开车？",
            "py": "Shéi kāichē?",
            "vi": "Ai lái xe?"
          },
          {
            "zh": "秘书开门。",
            "py": "Mìshū kāimén.",
            "vi": "Thư ký mở cửa."
          },
          {
            "zh": "他开汽车去学校。",
            "py": "Tā kāi qìchē qù xuéxiào.",
            "vi": "Anh ấy lái ô tô đến trường."
          },
          {
            "zh": "请开一下儿门。",
            "py": "Qǐng kāi yíxiàr mén.",
            "vi": "Làm ơn mở cửa giúp một chút."
          },
          {
            "zh": "他开了一家咖啡店。",
            "py": "Tā kāile yì jiā kāfēi diàn.",
            "vi": "Anh ấy đã mở một quán cà phê."
          },
          {
            "zh": "爸爸开汽车去北京。",
            "py": "Bàba kāi qìchē qù Běijīng.",
            "vi": "Bố lái ô tô đi Bắc Kinh."
          },
          {
            "zh": "商店开了吗？",
            "py": "Shāngdiàn kāi le ma?",
            "vi": "Cửa hàng mở cửa chưa?"
          },
          {
            "zh": "请开门，我是马文。",
            "py": "Qǐng kāimén, wǒ shì Mǎ Wén.",
            "vi": "Làm ơn mở cửa, tôi là Mã Văn."
          }
        ]
      },
      {
        "zh": "开车",
        "py": "kāichē",
        "type": "Động từ",
        "vi": "lái xe",
        "ex": [
          {
            "zh": "我不开车。",
            "py": "Wǒ bù kāichē.",
            "vi": "Tôi không lái xe."
          },
          {
            "zh": "他开车去公司。",
            "py": "Tā kāichē qù gōngsī.",
            "vi": "Anh ấy lái xe đến công ty."
          },
          {
            "zh": "谁开车去银行？",
            "py": "Shéi kāichē qù yínháng?",
            "vi": "Ai lái xe đi ngân hàng?"
          },
          {
            "zh": "开车不容易。",
            "py": "Kāichē bù róngyì.",
            "vi": "Lái xe không dễ."
          },
          {
            "zh": "经理开车去邮局。",
            "py": "Jīnglǐ kāichē qù yóujú.",
            "vi": "Giám đốc lái xe đi bưu điện."
          },
          {
            "zh": "我爸爸开车上班。",
            "py": "Wǒ bàba kāichē shàngbān.",
            "vi": "Bố tôi lái xe đi làm."
          },
          {
            "zh": "你开车去公司吗？",
            "py": "Nǐ kāichē qù gōngsī ma?",
            "vi": "Bạn lái xe đến công ty à?"
          },
          {
            "zh": "喝酒不要开车。",
            "py": "Hē jiǔ búyào kāichē.",
            "vi": "Uống rượu đừng lái xe."
          },
          {
            "zh": "开车很累。",
            "py": "Kāichē hěn lèi.",
            "vi": "Lái xe rất mệt."
          },
          {
            "zh": "明天我们开车去旅游。",
            "py": "Míngtiān wǒmen kāichē qù lǚyóu.",
            "vi": "Ngày mai chúng tôi lái xe đi du lịch."
          }
        ]
      },
      {
        "zh": "有点儿",
        "py": "yǒudiǎnr",
        "type": "Phó từ",
        "vi": "có chút, hơi",
        "ex": [
          {
            "zh": "今天有点儿忙。",
            "py": "Jīntiān yǒudiǎnr máng.",
            "vi": "Hôm nay hơi bận."
          },
          {
            "zh": "这个箱子有点儿重。",
            "py": "Zhège xiāngzi yǒudiǎnr zhòng.",
            "vi": "Cái vali này hơi nặng."
          },
          {
            "zh": "汉语有点儿难。",
            "py": "Hànyǔ yǒudiǎnr nán.",
            "vi": "Tiếng Trung hơi khó."
          },
          {
            "zh": "他有点儿马虎。",
            "py": "Tā yǒudiǎnr mǎhu.",
            "vi": "Anh ấy hơi cẩu thả."
          },
          {
            "zh": "我有点儿忙，所以没去。",
            "py": "Wǒ yǒudiǎnr máng, suǒyǐ méi qù.",
            "vi": "Tôi hơi bận nên không đi."
          },
          {
            "zh": "这件衣服有点儿大。",
            "py": "Zhè jiàn yīfu yǒudiǎnr dà.",
            "vi": "Bộ quần áo này hơi rộng."
          },
          {
            "zh": "这个苹果有点儿贵。",
            "py": "Zhège píngguǒ yǒudiǎnr guì.",
            "vi": "Quả táo này hơi đắt."
          },
          {
            "zh": "我今天有点儿累。",
            "py": "Wǒ jīntiān yǒudiǎnr lèi.",
            "vi": "Hôm nay tôi hơi mệt."
          },
          {
            "zh": "这个汤有点儿冷。",
            "py": "Zhège tāng yǒudiǎnr lěng.",
            "vi": "Canh này hơi nguội."
          },
          {
            "zh": "我们的房间有点儿小。",
            "py": "Wǒmen de fángjiān yǒudiǎnr xiǎo.",
            "vi": "Phòng của chúng tôi hơi nhỏ."
          }
        ]
      },
      {
        "zh": "车",
        "py": "chē",
        "type": "Danh từ",
        "vi": "xe",
        "ex": [
          {
            "zh": "这是我的车。",
            "py": "Zhè shì wǒ de chē.",
            "vi": "Đây là xe của tôi."
          },
          {
            "zh": "他没有车。",
            "py": "Tā méiyǒu chē.",
            "vi": "Anh ấy không có xe."
          },
          {
            "zh": "这个车很贵。",
            "py": "Zhège chē hěn guì.",
            "vi": "Cái xe này rất đắt."
          },
          {
            "zh": "谁的车在这儿？",
            "py": "Shéi de chē zài zhèr?",
            "vi": "Xe của ai ở đây?"
          },
          {
            "zh": "他开车，我骑车。",
            "py": "Tā kāichē, wǒ qí chē.",
            "vi": "Anh ấy lái xe, tôi đi xe (đạp/máy)."
          },
          {
            "zh": "你的车在哪儿？",
            "py": "Nǐ de chē zài nǎr?",
            "vi": "Xe của bạn ở đâu?"
          },
          {
            "zh": "车里有一把雨伞。",
            "py": "Chē lǐ yǒu yì bǎ yǔsǎn.",
            "vi": "Trong xe có một chiếc ô."
          },
          {
            "zh": "我们坐谁的车去？",
            "py": "Wǒmen zuò shéi de chē qù?",
            "vi": "Chúng ta đi xe của ai?"
          },
          {
            "zh": "爸爸的车很旧了。",
            "py": "Bàba de chē hěn jiù le.",
            "vi": "Xe của bố cũ lắm rồi."
          },
          {
            "zh": "车太多了，我们坐地铁吧。",
            "py": "Chē tài duō le, wǒmen zuò dìtiě ba.",
            "vi": "Xe nhiều quá, chúng ta đi tàu điện ngầm đi."
          }
        ]
      },
      {
        "zh": "汽车",
        "py": "qìchē",
        "type": "Danh từ",
        "vi": "xe hơi, xe ô tô",
        "ex": [
          {
            "zh": "他有一个汽车。",
            "py": "Tā yǒu yí gè qìchē.",
            "vi": "Anh ấy có một chiếc ô tô."
          },
          {
            "zh": "汽车很贵。",
            "py": "Qìchē hěn guì.",
            "vi": "Ô tô rất đắt."
          },
          {
            "zh": "他开汽车去公司。",
            "py": "Tā kāi qìchē qù gōngsī.",
            "vi": "Anh ấy lái ô tô đến công ty."
          },
          {
            "zh": "这是新汽车。",
            "py": "Zhè shì xīn qìchē.",
            "vi": "Đây là ô tô mới."
          },
          {
            "zh": "我不喜欢开汽车。",
            "py": "Wǒ bù xǐhuan kāi qìchē.",
            "vi": "Tôi không thích lái ô tô."
          },
          {
            "zh": "他的汽车是德国的。",
            "py": "Tā de qìchē shì Déguó de.",
            "vi": "Ô tô của anh ấy là xe Đức."
          },
          {
            "zh": "我想买一辆汽车。",
            "py": "Wǒ xiǎng mǎi yí liàng qìchē.",
            "vi": "Tôi muốn mua một chiếc ô tô."
          },
          {
            "zh": "汽车比摩托车贵。",
            "py": "Qìchē bǐ mótuōchē guì.",
            "vi": "Ô tô đắt hơn xe máy."
          },
          {
            "zh": "这辆汽车多少钱？",
            "py": "Zhè liàng qìchē duōshao qián?",
            "vi": "Chiếc ô tô này bao nhiêu tiền?"
          },
          {
            "zh": "他开汽车上班。",
            "py": "Tā kāi qìchē shàngbān.",
            "vi": "Anh ấy lái ô tô đi làm."
          }
        ]
      },
      {
        "zh": "出租车",
        "py": "chūzūchē",
        "type": "Danh từ",
        "vi": "taxi",
        "ex": [
          {
            "zh": "我们坐出租车吧。",
            "py": "Wǒmen zuò chūzūchē ba.",
            "vi": "Chúng ta đi taxi đi."
          },
          {
            "zh": "出租车很贵。",
            "py": "Chūzūchē hěn guì.",
            "vi": "Taxi rất đắt."
          },
          {
            "zh": "他开出租车。",
            "py": "Tā kāi chūzūchē.",
            "vi": "Anh ấy lái taxi."
          },
          {
            "zh": "出租车在哪儿？",
            "py": "Chūzūchē zài nǎr?",
            "vi": "Taxi ở đâu?"
          },
          {
            "zh": "我不喜欢坐出租车。",
            "py": "Wǒ bù xǐhuan zuò chūzūchē.",
            "vi": "Tôi không thích đi taxi."
          },
          {
            "zh": "我们坐出租车去商场吧。",
            "py": "Wǒmen zuò chūzūchē qù shāngchǎng ba.",
            "vi": "Chúng ta đi taxi đến trung tâm thương mại đi."
          },
          {
            "zh": "出租车比地铁贵。",
            "py": "Chūzūchē bǐ dìtiě guì.",
            "vi": "Taxi đắt hơn tàu điện ngầm."
          },
          {
            "zh": "下雨了，出租车很少。",
            "py": "Xià yǔ le, chūzūchē hěn shǎo.",
            "vi": "Trời mưa, taxi rất ít."
          },
          {
            "zh": "我等出租车等了好久。",
            "py": "Wǒ děng chūzūchē děngle hǎojiǔ.",
            "vi": "Tôi đợi taxi rất lâu."
          },
          {
            "zh": "北京的出租车是什么颜色的？",
            "py": "Běijīng de chūzūchē shì shénme yánsè de?",
            "vi": "Taxi ở Bắc Kinh màu gì?"
          }
        ]
      },
      {
        "zh": "摩托车",
        "py": "mótuōchē",
        "type": "Danh từ",
        "vi": "xe máy",
        "ex": [
          {
            "zh": "他骑摩托车。",
            "py": "Tā qí mótuōchē.",
            "vi": "Anh ấy đi xe máy."
          },
          {
            "zh": "摩托车比汽车便宜。",
            "py": "Mótuōchē bǐ qìchē piányi.",
            "vi": "Xe máy rẻ hơn ô tô."
          },
          {
            "zh": "这是我的摩托车。",
            "py": "Zhè shì wǒ de mótuōchē.",
            "vi": "Đây là xe máy của tôi."
          },
          {
            "zh": "谁骑摩托车？",
            "py": "Shéi qí mótuōchē?",
            "vi": "Ai đi xe máy?"
          },
          {
            "zh": "我买了一个摩托车。",
            "py": "Wǒ mǎile yí gè mótuōchē.",
            "vi": "Tôi đã mua một chiếc xe máy."
          },
          {
            "zh": "我骑摩托车上班。",
            "py": "Wǒ qí mótuōchē shàngbān.",
            "vi": "Tôi đi xe máy đi làm."
          },
          {
            "zh": "他的摩托车是新的。",
            "py": "Tā de mótuōchē shì xīn de.",
            "vi": "Xe máy của anh ấy là xe mới."
          },
          {
            "zh": "摩托车多少钱一辆？",
            "py": "Mótuōchē duōshao qián yí liàng?",
            "vi": "Xe máy bao nhiêu tiền một chiếc?"
          },
          {
            "zh": "我哥哥有两辆摩托车。",
            "py": "Wǒ gēge yǒu liǎng liàng mótuōchē.",
            "vi": "Anh tôi có hai chiếc xe máy."
          },
          {
            "zh": "我的摩托车是红色的。",
            "py": "Wǒ de mótuōchē shì hóngsè de.",
            "vi": "Xe máy của tôi màu đỏ."
          }
        ]
      },
      {
        "zh": "自行车",
        "py": "zìxíngchē",
        "type": "Danh từ",
        "vi": "xe đạp",
        "ex": [
          {
            "zh": "我骑自行车去学校。",
            "py": "Wǒ qí zìxíngchē qù xuéxiào.",
            "vi": "Tôi đi xe đạp đến trường."
          },
          {
            "zh": "自行车很便宜。",
            "py": "Zìxíngchē hěn piányi.",
            "vi": "Xe đạp rất rẻ."
          },
          {
            "zh": "他有一个自行车。",
            "py": "Tā yǒu yí gè zìxíngchē.",
            "vi": "Anh ấy có một chiếc xe đạp."
          },
          {
            "zh": "这是谁的自行车？",
            "py": "Zhè shì shéi de zìxíngchē?",
            "vi": "Đây là xe đạp của ai?"
          },
          {
            "zh": "自行车比摩托车轻。",
            "py": "Zìxíngchē bǐ mótuōchē qīng.",
            "vi": "Xe đạp nhẹ hơn xe máy."
          },
          {
            "zh": "我的自行车很旧了。",
            "py": "Wǒ de zìxíngchē hěn jiù le.",
            "vi": "Xe đạp của tôi cũ lắm rồi."
          },
          {
            "zh": "这辆自行车多少钱？",
            "py": "Zhè liàng zìxíngchē duōshao qián?",
            "vi": "Chiếc xe đạp này bao nhiêu tiền?"
          },
          {
            "zh": "北京很多人骑自行车。",
            "py": "Běijīng hěn duō rén qí zìxíngchē.",
            "vi": "Ở Bắc Kinh nhiều người đi xe đạp."
          },
          {
            "zh": "我的自行车是蓝色的。",
            "py": "Wǒ de zìxíngchē shì lánsè de.",
            "vi": "Xe đạp của tôi màu xanh lam."
          },
          {
            "zh": "他骑自行车去图书馆。",
            "py": "Tā qí zìxíngchē qù túshūguǎn.",
            "vi": "Anh ấy đạp xe đến thư viện."
          }
        ]
      },
      {
        "zh": "脚踏车",
        "py": "jiǎotàchē",
        "type": "Danh từ",
        "vi": "xe đạp",
        "ex": [
          {
            "zh": "脚踏车就是自行车。",
            "py": "Jiǎotàchē jiùshì zìxíngchē.",
            "vi": "Xe đạp (脚踏车) cũng chính là 自行车."
          },
          {
            "zh": "他骑脚踏车去学校。",
            "py": "Tā qí jiǎotàchē qù xuéxiào.",
            "vi": "Anh ấy đi xe đạp đến trường."
          },
          {
            "zh": "这个脚踏车很轻。",
            "py": "Zhège jiǎotàchē hěn qīng.",
            "vi": "Chiếc xe đạp này rất nhẹ."
          },
          {
            "zh": "我没有脚踏车。",
            "py": "Wǒ méiyǒu jiǎotàchē.",
            "vi": "Tôi không có xe đạp."
          },
          {
            "zh": "脚踏车很便宜。",
            "py": "Jiǎotàchē hěn piányi.",
            "vi": "Xe đạp rất rẻ."
          },
          {
            "zh": "台湾人说“脚踏车”。",
            "py": "Táiwān rén shuō “jiǎotàchē”.",
            "vi": "Người Đài Loan nói “jiǎotàchē”."
          },
          {
            "zh": "我的脚踏车是新的。",
            "py": "Wǒ de jiǎotàchē shì xīn de.",
            "vi": "Xe đạp của tôi là xe mới."
          },
          {
            "zh": "这辆脚踏车多少钱？",
            "py": "Zhè liàng jiǎotàchē duōshao qián?",
            "vi": "Chiếc xe đạp này bao nhiêu tiền?"
          },
          {
            "zh": "弟弟喜欢骑脚踏车。",
            "py": "Dìdi xǐhuan qí jiǎotàchē.",
            "vi": "Em trai thích đạp xe."
          },
          {
            "zh": "我们骑脚踏车去商场吧。",
            "py": "Wǒmen qí jiǎotàchē qù shāngchǎng ba.",
            "vi": "Chúng ta đạp xe đến trung tâm thương mại đi."
          }
        ]
      },
      {
        "zh": "电动车",
        "py": "diàndòngchē",
        "type": "Danh từ",
        "vi": "xe điện",
        "ex": [
          {
            "zh": "他骑电动车。",
            "py": "Tā qí diàndòngchē.",
            "vi": "Anh ấy đi xe điện."
          },
          {
            "zh": "电动车比摩托车便宜。",
            "py": "Diàndòngchē bǐ mótuōchē piányi.",
            "vi": "Xe điện rẻ hơn xe máy."
          },
          {
            "zh": "这是新电动车。",
            "py": "Zhè shì xīn diàndòngchē.",
            "vi": "Đây là xe điện mới."
          },
          {
            "zh": "电动车很轻。",
            "py": "Diàndòngchē hěn qīng.",
            "vi": "Xe điện rất nhẹ."
          },
          {
            "zh": "我想买电动车。",
            "py": "Wǒ xiǎng mǎi diàndòngchē.",
            "vi": "Tôi muốn mua xe điện."
          },
          {
            "zh": "我的电动车是白色的。",
            "py": "Wǒ de diàndòngchē shì báisè de.",
            "vi": "Xe điện của tôi màu trắng."
          },
          {
            "zh": "妈妈骑电动车去商店。",
            "py": "Māma qí diàndòngchē qù shāngdiàn.",
            "vi": "Mẹ đi xe điện đến cửa hàng."
          },
          {
            "zh": "这辆电动车是谁的？",
            "py": "Zhè liàng diàndòngchē shì shéi de?",
            "vi": "Chiếc xe điện này là của ai?"
          },
          {
            "zh": "现在电动车很多。",
            "py": "Xiànzài diàndòngchē hěn duō.",
            "vi": "Bây giờ có rất nhiều xe điện."
          },
          {
            "zh": "电动车多少钱一辆？",
            "py": "Diàndòngchē duōshao qián yí liàng?",
            "vi": "Xe điện bao nhiêu tiền một chiếc?"
          }
        ]
      },
      {
        "zh": "骑",
        "py": "qí",
        "type": "Động từ",
        "vi": "cưỡi, đi (xe hai bánh)",
        "ex": [
          {
            "zh": "我骑自行车。",
            "py": "Wǒ qí zìxíngchē.",
            "vi": "Tôi đi xe đạp."
          },
          {
            "zh": "他骑摩托车去公司。",
            "py": "Tā qí mótuōchē qù gōngsī.",
            "vi": "Anh ấy đi xe máy đến công ty."
          },
          {
            "zh": "你骑车吗？",
            "py": "Nǐ qí chē ma?",
            "vi": "Bạn có đi xe (đạp/máy) không?"
          },
          {
            "zh": "她骑电动车去公司。",
            "py": "Tā qí diàndòngchē qù gōngsī.",
            "vi": "Cô ấy đi xe điện đến công ty."
          },
          {
            "zh": "骑车比开车便宜。",
            "py": "Qí chē bǐ kāichē piányi.",
            "vi": "Đi xe (2 bánh) rẻ hơn lái xe (ô tô)."
          },
          {
            "zh": "你骑摩托车还是骑自行车？",
            "py": "Nǐ qí mótuōchē háishì qí zìxíngchē?",
            "vi": "Bạn đi xe máy hay đi xe đạp?"
          },
          {
            "zh": "下雨了，不要骑车。",
            "py": "Xià yǔ le, búyào qí chē.",
            "vi": "Trời mưa rồi, đừng đi xe."
          },
          {
            "zh": "他骑车去银行。",
            "py": "Tā qí chē qù yínháng.",
            "vi": "Anh ấy đi xe đến ngân hàng."
          },
          {
            "zh": "骑电动车很容易。",
            "py": "Qí diàndòngchē hěn róngyì.",
            "vi": "Đi xe điện rất dễ."
          },
          {
            "zh": "孩子骑自行车回家。",
            "py": "Háizi qí zìxíngchē huíjiā.",
            "vi": "Đứa trẻ đạp xe về nhà."
          }
        ]
      },
      {
        "zh": "旧",
        "py": "jiù",
        "type": "Tính từ",
        "vi": "cũ",
        "ex": [
          {
            "zh": "我的车是旧的。",
            "py": "Wǒ de chē shì jiù de.",
            "vi": "Xe của tôi là xe cũ."
          },
          {
            "zh": "这本书很旧了。",
            "py": "Zhè běn shū hěn jiù le.",
            "vi": "Quyển sách này cũ lắm rồi."
          },
          {
            "zh": "你的自行车是新的还是旧的？",
            "py": "Nǐ de zìxíngchē shì xīn de háishi jiù de?",
            "vi": "Xe đạp của bạn mới hay cũ?"
          },
          {
            "zh": "这件衣服太旧了。",
            "py": "Zhè jiàn yīfu tài jiù le.",
            "vi": "Bộ quần áo này cũ quá rồi."
          },
          {
            "zh": "旧的不贵，新的很贵。",
            "py": "Jiù de bú guì, xīn de hěn guì.",
            "vi": "Đồ cũ không đắt, đồ mới rất đắt."
          },
          {
            "zh": "这件毛衣是旧的。",
            "py": "Zhè jiàn máoyī shì jiù de.",
            "vi": "Chiếc áo len này là đồ cũ."
          },
          {
            "zh": "旧手机很便宜。",
            "py": "Jiù shǒujī hěn piányi.",
            "vi": "Điện thoại cũ rất rẻ."
          },
          {
            "zh": "这辆旧车多少钱？",
            "py": "Zhè liàng jiù chē duōshao qián?",
            "vi": "Chiếc xe cũ này bao nhiêu tiền?"
          },
          {
            "zh": "我不喜欢旧衣服。",
            "py": "Wǒ bù xǐhuan jiù yīfu.",
            "vi": "Tôi không thích quần áo cũ."
          },
          {
            "zh": "他的箱子是旧的，不是新的。",
            "py": "Tā de xiāngzi shì jiù de, bú shì xīn de.",
            "vi": "Vali của anh ấy là đồ cũ, không phải mới."
          }
        ]
      },
      {
        "zh": "颜色",
        "py": "yánsè",
        "type": "Danh từ",
        "vi": "màu, màu sắc",
        "ex": [
          {
            "zh": "你的车是什么颜色的？",
            "py": "Nǐ de chē shì shénme yánsè de?",
            "vi": "Xe của bạn màu gì?"
          },
          {
            "zh": "这是我喜欢的颜色。",
            "py": "Zhè shì wǒ xǐhuan de yánsè.",
            "vi": "Đây là màu tôi thích."
          },
          {
            "zh": "这件衣服的颜色很好看。",
            "py": "Zhè jiàn yīfu de yánsè hěn hǎokàn.",
            "vi": "Màu của bộ quần áo này rất đẹp."
          },
          {
            "zh": "红色和黑色都是我喜欢的颜色。",
            "py": "Hóngsè hé hēisè dōu shì wǒ xǐhuan de yánsè.",
            "vi": "Màu đỏ và màu đen đều là màu tôi thích."
          },
          {
            "zh": "那辆车的颜色是蓝的。",
            "py": "Nà liàng chē de yánsè shì lán de.",
            "vi": "Màu của chiếc xe kia là màu xanh lam."
          },
          {
            "zh": "这个颜色很好看。",
            "py": "Zhège yánsè hěn hǎokàn.",
            "vi": "Màu này rất đẹp."
          },
          {
            "zh": "我不喜欢这个颜色。",
            "py": "Wǒ bù xǐhuan zhège yánsè.",
            "vi": "Tôi không thích màu này."
          },
          {
            "zh": "这件衣服有几个颜色？",
            "py": "Zhè jiàn yīfu yǒu jǐ ge yánsè?",
            "vi": "Bộ quần áo này có mấy màu?"
          },
          {
            "zh": "你要什么颜色的雨伞？",
            "py": "Nǐ yào shénme yánsè de yǔsǎn?",
            "vi": "Bạn muốn ô màu gì?"
          },
          {
            "zh": "这两个颜色一样吗？",
            "py": "Zhè liǎng ge yánsè yíyàng ma?",
            "vi": "Hai màu này có giống nhau không?"
          }
        ]
      },
      {
        "zh": "蓝",
        "py": "lán",
        "type": "Tính từ",
        "vi": "xanh lam",
        "ex": [
          {
            "zh": "我的自行车是蓝的。",
            "py": "Wǒ de zìxíngchē shì lán de.",
            "vi": "Xe đạp của tôi màu xanh lam."
          },
          {
            "zh": "那辆蓝的车是你的吗？",
            "py": "Nà liàng lán de chē shì nǐ de ma?",
            "vi": "Chiếc xe màu xanh kia là của bạn à?"
          },
          {
            "zh": "我想买一件蓝的衣服。",
            "py": "Wǒ xiǎng mǎi yí jiàn lán de yīfu.",
            "vi": "Tôi muốn mua một bộ quần áo màu xanh lam."
          },
          {
            "zh": "蓝的还是黑的？",
            "py": "Lán de háishi hēi de?",
            "vi": "Màu xanh lam hay màu đen?"
          },
          {
            "zh": "这个箱子是蓝的，很好看。",
            "py": "Zhège xiāngzi shì lán de, hěn hǎokàn.",
            "vi": "Cái vali này màu xanh lam, rất đẹp."
          },
          {
            "zh": "我喜欢蓝的。",
            "py": "Wǒ xǐhuan lán de.",
            "vi": "Tôi thích màu xanh lam."
          },
          {
            "zh": "他的衬衣是蓝的。",
            "py": "Tā de chènyī shì lán de.",
            "vi": "Áo sơ mi của anh ấy màu xanh lam."
          },
          {
            "zh": "天很蓝。",
            "py": "Tiān hěn lán.",
            "vi": "Trời rất xanh."
          },
          {
            "zh": "我要一支蓝笔。",
            "py": "Wǒ yào yì zhī lán bǐ.",
            "vi": "Tôi muốn một cây bút xanh."
          },
          {
            "zh": "那辆蓝色的出租车很新。",
            "py": "Nà liàng lánsè de chūzūchē hěn xīn.",
            "vi": "Chiếc taxi màu xanh lam kia rất mới."
          }
        ]
      },
      {
        "zh": "辆",
        "py": "liàng",
        "type": "Lượng từ",
        "vi": "chiếc (dùng cho xe)",
        "ex": [
          {
            "zh": "我有一辆自行车。",
            "py": "Wǒ yǒu yí liàng zìxíngchē.",
            "vi": "Tôi có một chiếc xe đạp."
          },
          {
            "zh": "那辆汽车是经理的。",
            "py": "Nà liàng qìchē shì jīnglǐ de.",
            "vi": "Chiếc ô tô kia là của giám đốc."
          },
          {
            "zh": "这辆摩托车很贵。",
            "py": "Zhè liàng mótuōchē hěn guì.",
            "vi": "Chiếc xe máy này rất đắt."
          },
          {
            "zh": "你的车是哪辆？",
            "py": "Nǐ de chē shì nǎ liàng?",
            "vi": "Xe của bạn là chiếc nào?"
          },
          {
            "zh": "我们家有两辆车。",
            "py": "Wǒmen jiā yǒu liǎng liàng chē.",
            "vi": "Nhà chúng tôi có hai chiếc xe."
          },
          {
            "zh": "这辆车是新的吗？",
            "py": "Zhè liàng chē shì xīn de ma?",
            "vi": "Chiếc xe này là xe mới à?"
          },
          {
            "zh": "他有三辆汽车。",
            "py": "Tā yǒu sān liàng qìchē.",
            "vi": "Anh ấy có ba chiếc ô tô."
          },
          {
            "zh": "那辆自行车是我的。",
            "py": "Nà liàng zìxíngchē shì wǒ de.",
            "vi": "Chiếc xe đạp kia là của tôi."
          },
          {
            "zh": "门口有一辆出租车。",
            "py": "Ménkǒu yǒu yí liàng chūzūchē.",
            "vi": "Ở cửa có một chiếc taxi."
          },
          {
            "zh": "你要哪辆？",
            "py": "Nǐ yào nǎ liàng?",
            "vi": "Bạn muốn chiếc nào?"
          }
        ]
      },
      {
        "zh": "点儿",
        "py": "diǎnr",
        "type": "Lượng từ",
        "vi": "một chút, một ít",
        "ex": [
          {
            "zh": "喝点儿什么？茶还是咖啡？",
            "py": "Hē diǎnr shénme? Chá háishi kāfēi?",
            "vi": "Uống chút gì nhé? Trà hay cà phê?"
          },
          {
            "zh": "我想喝点儿茶。",
            "py": "Wǒ xiǎng hē diǎnr chá.",
            "vi": "Tôi muốn uống chút trà."
          },
          {
            "zh": "吃点儿水果吧。",
            "py": "Chī diǎnr shuǐguǒ ba.",
            "vi": "Ăn chút hoa quả đi."
          },
          {
            "zh": "给我买点儿苹果。",
            "py": "Gěi wǒ mǎi diǎnr píngguǒ.",
            "vi": "Mua cho tôi một ít táo."
          },
          {
            "zh": "请等一会儿，我喝点儿水。",
            "py": "Qǐng děng yíhuìr, wǒ hē diǎnr shuǐ.",
            "vi": "Xin đợi một lát, tôi uống chút nước."
          },
          {
            "zh": "再吃点儿吧。",
            "py": "Zài chī diǎnr ba.",
            "vi": "Ăn thêm chút nữa đi."
          },
          {
            "zh": "我想买点儿日用品。",
            "py": "Wǒ xiǎng mǎi diǎnr rìyòngpǐn.",
            "vi": "Tôi muốn mua chút đồ dùng hằng ngày."
          },
          {
            "zh": "我们喝点儿啤酒吧。",
            "py": "Wǒmen hē diǎnr píjiǔ ba.",
            "vi": "Chúng ta uống chút bia đi."
          },
          {
            "zh": "给我点儿钱。",
            "py": "Gěi wǒ diǎnr qián.",
            "vi": "Cho tôi ít tiền."
          },
          {
            "zh": "你吃点儿什么？",
            "py": "Nǐ chī diǎnr shénme?",
            "vi": "Bạn ăn chút gì?"
          }
        ]
      },
      {
        "zh": "啊",
        "py": "à",
        "type": "Thán từ",
        "vi": "a, à (vỡ lẽ, đã hiểu ra)",
        "ex": [
          {
            "zh": "啊，我知道了。",
            "py": "À, wǒ zhīdào le.",
            "vi": "À, tôi biết rồi."
          },
          {
            "zh": "啊，我的车在那儿呢。",
            "py": "À, wǒ de chē zài nàr ne.",
            "vi": "À, xe của tôi ở đằng kia."
          },
          {
            "zh": "啊，是你啊！",
            "py": "À, shì nǐ a!",
            "vi": "A, là bạn à!"
          },
          {
            "zh": "啊，这是新的词典。",
            "py": "À, zhè shì xīn de cídiǎn.",
            "vi": "À, đây là quyển từ điển mới."
          },
          {
            "zh": "啊，好久不见了。",
            "py": "À, hǎojiǔ bú jiàn le.",
            "vi": "A, lâu rồi không gặp."
          },
          {
            "zh": "啊，下雨了！",
            "py": "À, xià yǔ le!",
            "vi": "À, mưa rồi!"
          },
          {
            "zh": "啊，你是马老师！",
            "py": "À, nǐ shì Mǎ lǎoshī!",
            "vi": "À, thầy là thầy Mã!"
          },
          {
            "zh": "啊，我的手机在这儿。",
            "py": "À, wǒ de shǒujī zài zhèr.",
            "vi": "À, điện thoại của tôi ở đây."
          },
          {
            "zh": "啊，今天是你的生日！",
            "py": "À, jīntiān shì nǐ de shēngrì!",
            "vi": "À, hôm nay là sinh nhật bạn!"
          },
          {
            "zh": "啊，银行还没开门。",
            "py": "À, yínháng hái méi kāimén.",
            "vi": "À, ngân hàng vẫn chưa mở cửa."
          }
        ]
      },
      {
        "zh": "累",
        "py": "lèi",
        "type": "Tính từ",
        "vi": "mệt",
        "ex": [
          {
            "zh": "今天我很累。",
            "py": "Jīntiān wǒ hěn lèi.",
            "vi": "Hôm nay tôi rất mệt."
          },
          {
            "zh": "你累不累？",
            "py": "Nǐ lèi bu lèi?",
            "vi": "Bạn có mệt không?"
          },
          {
            "zh": "工作太忙，所以很累。",
            "py": "Gōngzuò tài máng, suǒyǐ hěn lèi.",
            "vi": "Công việc bận quá nên rất mệt."
          },
          {
            "zh": "我有点儿累，想喝杯茶。",
            "py": "Wǒ yǒu diǎnr lèi, xiǎng hē bēi chá.",
            "vi": "Tôi hơi mệt, muốn uống cốc trà."
          },
          {
            "zh": "骑自行车回家很累。",
            "py": "Qí zìxíngchē huíjiā hěn lèi.",
            "vi": "Đạp xe về nhà rất mệt."
          },
          {
            "zh": "你今天累吗？",
            "py": "Nǐ jīntiān lèi ma?",
            "vi": "Hôm nay bạn có mệt không?"
          },
          {
            "zh": "他太累了，想回家。",
            "py": "Tā tài lèi le, xiǎng huíjiā.",
            "vi": "Anh ấy mệt quá, muốn về nhà."
          },
          {
            "zh": "学汉语累不累？",
            "py": "Xué Hànyǔ lèi bu lèi?",
            "vi": "Học tiếng Trung có mệt không?"
          },
          {
            "zh": "我很累，不想出去。",
            "py": "Wǒ hěn lèi, bù xiǎng chūqù.",
            "vi": "Tôi rất mệt, không muốn ra ngoài."
          },
          {
            "zh": "妈妈做饭很累。",
            "py": "Māma zuòfàn hěn lèi.",
            "vi": "Mẹ nấu cơm rất mệt."
          }
        ]
      },
      {
        "zh": "困",
        "py": "kùn",
        "type": "Tính từ",
        "vi": "buồn ngủ",
        "ex": [
          {
            "zh": "我有点儿困。",
            "py": "Wǒ yǒu diǎnr kùn.",
            "vi": "Tôi hơi buồn ngủ."
          },
          {
            "zh": "你困吗？",
            "py": "Nǐ kùn ma?",
            "vi": "Bạn có buồn ngủ không?"
          },
          {
            "zh": "晚上我很困。",
            "py": "Wǎnshang wǒ hěn kùn.",
            "vi": "Buổi tối tôi rất buồn ngủ."
          },
          {
            "zh": "我不困，我很忙。",
            "py": "Wǒ bú kùn, wǒ hěn máng.",
            "vi": "Tôi không buồn ngủ, tôi rất bận."
          },
          {
            "zh": "我太困了，喝点儿咖啡吧。",
            "py": "Wǒ tài kùn le, hē diǎnr kāfēi ba.",
            "vi": "Tôi buồn ngủ quá, uống chút cà phê vậy."
          },
          {
            "zh": "你困了吗？",
            "py": "Nǐ kùn le ma?",
            "vi": "Bạn buồn ngủ rồi à?"
          },
          {
            "zh": "下午我经常很困。",
            "py": "Xiàwǔ wǒ jīngcháng hěn kùn.",
            "vi": "Buổi chiều tôi thường buồn ngủ."
          },
          {
            "zh": "孩子困了。",
            "py": "Háizi kùn le.",
            "vi": "Đứa bé buồn ngủ rồi."
          },
          {
            "zh": "我不困，我想看书。",
            "py": "Wǒ bú kùn, wǒ xiǎng kàn shū.",
            "vi": "Tôi không buồn ngủ, tôi muốn đọc sách."
          },
          {
            "zh": "太困了，我不想工作。",
            "py": "Tài kùn le, wǒ bù xiǎng gōngzuò.",
            "vi": "Buồn ngủ quá, tôi không muốn làm việc."
          }
        ]
      },
      {
        "zh": "饿",
        "py": "è",
        "type": "Tính từ",
        "vi": "đói",
        "ex": [
          {
            "zh": "我很饿，想吃饭。",
            "py": "Wǒ hěn è, xiǎng chīfàn.",
            "vi": "Tôi rất đói, muốn ăn cơm."
          },
          {
            "zh": "你饿不饿？",
            "py": "Nǐ è bu è?",
            "vi": "Bạn có đói không?"
          },
          {
            "zh": "我有点儿饿，吃个包子吧。",
            "py": "Wǒ yǒu diǎnr è, chī ge bāozi ba.",
            "vi": "Tôi hơi đói, ăn cái bánh bao vậy."
          },
          {
            "zh": "他饿了，去食堂吃饭。",
            "py": "Tā è le, qù shítáng chīfàn.",
            "vi": "Anh ấy đói rồi, đi nhà ăn ăn cơm."
          },
          {
            "zh": "中午不吃饭，晚上很饿。",
            "py": "Zhōngwǔ bù chīfàn, wǎnshang hěn è.",
            "vi": "Trưa không ăn cơm, tối rất đói."
          },
          {
            "zh": "你饿了吗？我们去吃饭吧。",
            "py": "Nǐ è le ma? Wǒmen qù chīfàn ba.",
            "vi": "Bạn đói chưa? Chúng ta đi ăn cơm đi."
          },
          {
            "zh": "我不饿，只想喝水。",
            "py": "Wǒ bú è, zhǐ xiǎng hē shuǐ.",
            "vi": "Tôi không đói, chỉ muốn uống nước."
          },
          {
            "zh": "孩子饿了。",
            "py": "Háizi è le.",
            "vi": "Đứa bé đói rồi."
          },
          {
            "zh": "我早上没吃早饭，很饿。",
            "py": "Wǒ zǎoshang méi chī zǎofàn, hěn è.",
            "vi": "Sáng tôi không ăn sáng, rất đói."
          },
          {
            "zh": "饿了就吃点儿东西吧。",
            "py": "È le jiù chī diǎnr dōngxi ba.",
            "vi": "Đói thì ăn chút gì đi."
          }
        ]
      },
      {
        "zh": "冷",
        "py": "lěng",
        "type": "Tính từ",
        "vi": "lạnh",
        "ex": [
          {
            "zh": "今天很冷。",
            "py": "Jīntiān hěn lěng.",
            "vi": "Hôm nay rất lạnh."
          },
          {
            "zh": "你冷不冷？",
            "py": "Nǐ lěng bu lěng?",
            "vi": "Bạn có lạnh không?"
          },
          {
            "zh": "有点儿冷，我要一件毛衣。",
            "py": "Yǒu diǎnr lěng, wǒ yào yí jiàn máoyī.",
            "vi": "Hơi lạnh, tôi cần một cái áo len."
          },
          {
            "zh": "这杯水有点儿冷。",
            "py": "Zhè bēi shuǐ yǒu diǎnr lěng.",
            "vi": "Cốc nước này hơi lạnh."
          },
          {
            "zh": "天冷了，我想喝点儿茶。",
            "py": "Tiān lěng le, wǒ xiǎng hē diǎnr chá.",
            "vi": "Trời lạnh rồi, tôi muốn uống chút trà."
          },
          {
            "zh": "河内的一月很冷。",
            "py": "Hénèi de yī yuè hěn lěng.",
            "vi": "Tháng Một ở Hà Nội rất lạnh."
          },
          {
            "zh": "外面冷不冷？",
            "py": "Wàimiàn lěng bu lěng?",
            "vi": "Bên ngoài có lạnh không?"
          },
          {
            "zh": "我很冷，想喝杯茶。",
            "py": "Wǒ hěn lěng, xiǎng hē bēi chá.",
            "vi": "Tôi rất lạnh, muốn uống chén trà."
          },
          {
            "zh": "今天不太冷。",
            "py": "Jīntiān bú tài lěng.",
            "vi": "Hôm nay không lạnh lắm."
          },
          {
            "zh": "晚上很冷。",
            "py": "Wǎnshang hěn lěng.",
            "vi": "Buổi tối rất lạnh."
          }
        ]
      },
      {
        "zh": "渴",
        "py": "kě",
        "type": "Tính từ",
        "vi": "khát",
        "ex": [
          {
            "zh": "我很渴，想喝水。",
            "py": "Wǒ hěn kě, xiǎng hē shuǐ.",
            "vi": "Tôi rất khát, muốn uống nước."
          },
          {
            "zh": "你渴吗？",
            "py": "Nǐ kě ma?",
            "vi": "Bạn có khát không?"
          },
          {
            "zh": "我有点儿渴，喝杯奶茶吧。",
            "py": "Wǒ yǒu diǎnr kě, hē bēi nǎichá ba.",
            "vi": "Tôi hơi khát, uống cốc trà sữa vậy."
          },
          {
            "zh": "他渴了，喝了一瓶水。",
            "py": "Tā kě le, hē le yì píng shuǐ.",
            "vi": "Anh ấy khát rồi, đã uống một chai nước."
          },
          {
            "zh": "我不渴，我饿了。",
            "py": "Wǒ bù kě, wǒ è le.",
            "vi": "Tôi không khát, tôi đói rồi."
          },
          {
            "zh": "你渴不渴？",
            "py": "Nǐ kě bu kě?",
            "vi": "Bạn có khát không?"
          },
          {
            "zh": "我渴了，想喝可乐。",
            "py": "Wǒ kě le, xiǎng hē kělè.",
            "vi": "Tôi khát rồi, muốn uống coca."
          },
          {
            "zh": "孩子渴了。",
            "py": "Háizi kě le.",
            "vi": "Đứa bé khát rồi."
          },
          {
            "zh": "太渴了，给我一瓶水吧。",
            "py": "Tài kě le, gěi wǒ yì píng shuǐ ba.",
            "vi": "Khát quá, cho tôi một chai nước đi."
          },
          {
            "zh": "我不渴，谢谢。",
            "py": "Wǒ bù kě, xièxie.",
            "vi": "Tôi không khát, cảm ơn."
          }
        ]
      },
      {
        "zh": "衬衣",
        "py": "chènyī",
        "type": "Danh từ",
        "vi": "áo sơ mi",
        "ex": [
          {
            "zh": "这件衬衣是白的。",
            "py": "Zhè jiàn chènyī shì bái de.",
            "vi": "Cái áo sơ mi này màu trắng."
          },
          {
            "zh": "我想买一件新衬衣。",
            "py": "Wǒ xiǎng mǎi yí jiàn xīn chènyī.",
            "vi": "Tôi muốn mua một cái áo sơ mi mới."
          },
          {
            "zh": "那件衬衣的颜色很好看。",
            "py": "Nà jiàn chènyī de yánsè hěn hǎokàn.",
            "vi": "Màu của cái áo sơ mi kia rất đẹp."
          },
          {
            "zh": "这件衬衣有点儿贵。",
            "py": "Zhè jiàn chènyī yǒu diǎnr guì.",
            "vi": "Cái áo sơ mi này hơi đắt."
          },
          {
            "zh": "你的衬衣是什么颜色的？",
            "py": "Nǐ de chènyī shì shénme yánsè de?",
            "vi": "Áo sơ mi của bạn màu gì?"
          },
          {
            "zh": "我要一件白衬衣。",
            "py": "Wǒ yào yí jiàn bái chènyī.",
            "vi": "Tôi muốn một chiếc áo sơ mi trắng."
          },
          {
            "zh": "衬衣在箱子里。",
            "py": "Chènyī zài xiāngzi lǐ.",
            "vi": "Áo sơ mi ở trong vali."
          },
          {
            "zh": "你喜欢这件衬衣吗？",
            "py": "Nǐ xǐhuan zhè jiàn chènyī ma?",
            "vi": "Bạn có thích chiếc áo sơ mi này không?"
          },
          {
            "zh": "这件衬衣太小了。",
            "py": "Zhè jiàn chènyī tài xiǎo le.",
            "vi": "Chiếc áo sơ mi này nhỏ quá."
          },
          {
            "zh": "我给爸爸买了一件衬衣。",
            "py": "Wǒ gěi bàba mǎile yí jiàn chènyī.",
            "vi": "Tôi mua cho bố một chiếc áo sơ mi."
          }
        ]
      },
      {
        "zh": "毛衣",
        "py": "máoyī",
        "type": "Danh từ",
        "vi": "áo len",
        "ex": [
          {
            "zh": "这是一件红毛衣。",
            "py": "Zhè shì yí jiàn hóng máoyī.",
            "vi": "Đây là một cái áo len màu đỏ."
          },
          {
            "zh": "天冷了，我要买毛衣。",
            "py": "Tiān lěng le, wǒ yào mǎi máoyī.",
            "vi": "Trời lạnh rồi, tôi phải mua áo len."
          },
          {
            "zh": "那件毛衣是新的还是旧的？",
            "py": "Nà jiàn máoyī shì xīn de háishi jiù de?",
            "vi": "Cái áo len kia mới hay cũ?"
          },
          {
            "zh": "我的毛衣是蓝的。",
            "py": "Wǒ de máoyī shì lán de.",
            "vi": "Áo len của tôi màu xanh lam."
          },
          {
            "zh": "这件毛衣有点儿重。",
            "py": "Zhè jiàn máoyī yǒu diǎnr zhòng.",
            "vi": "Cái áo len này hơi nặng."
          },
          {
            "zh": "毛衣多少钱一件？",
            "py": "Máoyī duōshao qián yí jiàn?",
            "vi": "Áo len bao nhiêu tiền một chiếc?"
          },
          {
            "zh": "我的毛衣是灰色的。",
            "py": "Wǒ de máoyī shì huīsè de.",
            "vi": "Áo len của tôi màu xám."
          },
          {
            "zh": "这件毛衣太大了。",
            "py": "Zhè jiàn máoyī tài dà le.",
            "vi": "Chiếc áo len này to quá."
          },
          {
            "zh": "箱子里有两件毛衣。",
            "py": "Xiāngzi lǐ yǒu liǎng jiàn máoyī.",
            "vi": "Trong vali có hai chiếc áo len."
          },
          {
            "zh": "你喜欢红毛衣还是蓝毛衣？",
            "py": "Nǐ xǐhuan hóng máoyī háishì lán máoyī?",
            "vi": "Bạn thích áo len đỏ hay áo len xanh?"
          }
        ]
      },
      {
        "zh": "黄",
        "py": "huáng",
        "type": "Tính từ",
        "vi": "vàng",
        "ex": [
          {
            "zh": "我喜欢黄的颜色。",
            "py": "Wǒ xǐhuan huáng de yánsè.",
            "vi": "Tôi thích màu vàng."
          },
          {
            "zh": "那辆车是黄的。",
            "py": "Nà liàng chē shì huáng de.",
            "vi": "Chiếc xe kia màu vàng."
          },
          {
            "zh": "这件衬衣是黄的。",
            "py": "Zhè jiàn chènyī shì huáng de.",
            "vi": "Cái áo sơ mi này màu vàng."
          },
          {
            "zh": "黄的还是绿的？",
            "py": "Huáng de háishi lǜ de?",
            "vi": "Màu vàng hay màu xanh lá?"
          },
          {
            "zh": "我的雨伞是黄的。",
            "py": "Wǒ de yǔsǎn shì huáng de.",
            "vi": "Cái ô của tôi màu vàng."
          },
          {
            "zh": "香蕉是黄的。",
            "py": "Xiāngjiāo shì huáng de.",
            "vi": "Chuối màu vàng."
          },
          {
            "zh": "我要那件黄的。",
            "py": "Wǒ yào nà jiàn huáng de.",
            "vi": "Tôi muốn chiếc màu vàng kia."
          },
          {
            "zh": "这辆出租车是黄的。",
            "py": "Zhè liàng chūzūchē shì huáng de.",
            "vi": "Chiếc taxi này màu vàng."
          },
          {
            "zh": "黄的苹果好吃吗？",
            "py": "Huáng de píngguǒ hǎochī ma?",
            "vi": "Táo vàng có ngon không?"
          },
          {
            "zh": "她喜欢黄色。",
            "py": "Tā xǐhuan huángsè.",
            "vi": "Cô ấy thích màu vàng."
          }
        ]
      },
      {
        "zh": "灰",
        "py": "huī",
        "type": "Tính từ",
        "vi": "xám",
        "ex": [
          {
            "zh": "我的箱子是灰的。",
            "py": "Wǒ de xiāngzi shì huī de.",
            "vi": "Cái vali của tôi màu xám."
          },
          {
            "zh": "那件毛衣是灰的。",
            "py": "Nà jiàn máoyī shì huī de.",
            "vi": "Cái áo len kia màu xám."
          },
          {
            "zh": "灰的车不太好看。",
            "py": "Huī de chē bú tài hǎokàn.",
            "vi": "Xe màu xám không đẹp lắm."
          },
          {
            "zh": "我想买一件灰的衣服。",
            "py": "Wǒ xiǎng mǎi yí jiàn huī de yīfu.",
            "vi": "Tôi muốn mua một bộ quần áo màu xám."
          },
          {
            "zh": "这辆自行车是灰的还是黑的？",
            "py": "Zhè liàng zìxíngchē shì huī de háishi hēi de?",
            "vi": "Chiếc xe đạp này màu xám hay màu đen?"
          },
          {
            "zh": "今天的天是灰的。",
            "py": "Jīntiān de tiān shì huī de.",
            "vi": "Bầu trời hôm nay màu xám."
          },
          {
            "zh": "这个灰的箱子是谁的？",
            "py": "Zhège huī de xiāngzi shì shéi de?",
            "vi": "Cái vali màu xám này là của ai?"
          },
          {
            "zh": "灰的和黑的都很好看。",
            "py": "Huī de hé hēi de dōu hěn hǎokàn.",
            "vi": "Màu xám và màu đen đều rất đẹp."
          },
          {
            "zh": "我不要灰的，要白的。",
            "py": "Wǒ bú yào huī de, yào bái de.",
            "vi": "Tôi không muốn màu xám, muốn màu trắng."
          },
          {
            "zh": "他的衬衣是灰的。",
            "py": "Tā de chènyī shì huī de.",
            "vi": "Áo sơ mi của anh ấy màu xám."
          }
        ]
      },
      {
        "zh": "绿",
        "py": "lǜ",
        "type": "Tính từ",
        "vi": "xanh lá",
        "ex": [
          {
            "zh": "这件衣服是绿的。",
            "py": "Zhè jiàn yīfu shì lǜ de.",
            "vi": "Bộ quần áo này màu xanh lá."
          },
          {
            "zh": "我不喜欢绿的颜色。",
            "py": "Wǒ bù xǐhuan lǜ de yánsè.",
            "vi": "Tôi không thích màu xanh lá."
          },
          {
            "zh": "那辆绿的车是谁的？",
            "py": "Nà liàng lǜ de chē shì shéi de?",
            "vi": "Chiếc xe màu xanh lá kia là của ai?"
          },
          {
            "zh": "绿的雨伞在那儿。",
            "py": "Lǜ de yǔsǎn zài nàr.",
            "vi": "Cái ô màu xanh lá ở đằng kia."
          },
          {
            "zh": "我的词典是绿的。",
            "py": "Wǒ de cídiǎn shì lǜ de.",
            "vi": "Từ điển của tôi màu xanh lá."
          },
          {
            "zh": "我喜欢绿茶。",
            "py": "Wǒ xǐhuan lǜchá.",
            "vi": "Tôi thích trà xanh."
          },
          {
            "zh": "这个苹果是绿的。",
            "py": "Zhège píngguǒ shì lǜ de.",
            "vi": "Quả táo này màu xanh."
          },
          {
            "zh": "绿的毛衣很好看。",
            "py": "Lǜ de máoyī hěn hǎokàn.",
            "vi": "Áo len màu xanh lá rất đẹp."
          },
          {
            "zh": "那辆绿的自行车是我弟弟的。",
            "py": "Nà liàng lǜ de zìxíngchē shì wǒ dìdi de.",
            "vi": "Chiếc xe đạp màu xanh lá kia là của em trai tôi."
          },
          {
            "zh": "你要绿的还是红的？",
            "py": "Nǐ yào lǜ de háishì hóng de?",
            "vi": "Bạn muốn màu xanh lá hay màu đỏ?"
          }
        ]
      },
      {
        "zh": "照相机",
        "py": "zhàoxiàngjī",
        "type": "Danh từ",
        "vi": "máy ảnh",
        "ex": [
          {
            "zh": "这是我的照相机。",
            "py": "Zhè shì wǒ de zhàoxiàngjī.",
            "vi": "Đây là máy ảnh của tôi."
          },
          {
            "zh": "你的照相机是新的还是旧的？",
            "py": "Nǐ de zhàoxiàngjī shì xīn de háishi jiù de?",
            "vi": "Máy ảnh của bạn mới hay cũ?"
          },
          {
            "zh": "我想买一个新照相机。",
            "py": "Wǒ xiǎng mǎi yí ge xīn zhàoxiàngjī.",
            "vi": "Tôi muốn mua một cái máy ảnh mới."
          },
          {
            "zh": "那个照相机很贵。",
            "py": "Nàge zhàoxiàngjī hěn guì.",
            "vi": "Cái máy ảnh kia rất đắt."
          },
          {
            "zh": "他的照相机是黑的。",
            "py": "Tā de zhàoxiàngjī shì hēi de.",
            "vi": "Máy ảnh của anh ấy màu đen."
          },
          {
            "zh": "这个照相机是日本的。",
            "py": "Zhège zhàoxiàngjī shì Rìběn de.",
            "vi": "Cái máy ảnh này là của Nhật."
          },
          {
            "zh": "我的照相机在箱子里。",
            "py": "Wǒ de zhàoxiàngjī zài xiāngzi lǐ.",
            "vi": "Máy ảnh của tôi ở trong vali."
          },
          {
            "zh": "你有照相机吗？",
            "py": "Nǐ yǒu zhàoxiàngjī ma?",
            "vi": "Bạn có máy ảnh không?"
          },
          {
            "zh": "我用照相机照了很多照片。",
            "py": "Wǒ yòng zhàoxiàngjī zhàole hěn duō zhàopiàn.",
            "vi": "Tôi dùng máy ảnh chụp rất nhiều ảnh."
          },
          {
            "zh": "照相机多少钱？",
            "py": "Zhàoxiàngjī duōshao qián?",
            "vi": "Máy ảnh bao nhiêu tiền?"
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 19 (b21): 全家、看病与外贸 – Cả nhà, khám bệnh & ngoại thương",
    "words": [
      {
        "zh": "全",
        "py": "quán",
        "type": "Phó từ",
        "vi": "toàn bộ, tất cả, cả",
        "ex": [
          {
            "zh": "下个星期我全家去旅游。",
            "py": "Xià ge xīngqī wǒ quánjiā qù lǚyóu.",
            "vi": "Tuần sau cả nhà tôi đi du lịch."
          },
          {
            "zh": "全公司都很忙。",
            "py": "Quán gōngsī dōu hěn máng.",
            "vi": "Cả công ty đều rất bận."
          },
          {
            "zh": "我们全班都是留学生。",
            "py": "Wǒmen quán bān dōu shì liúxuéshēng.",
            "vi": "Cả lớp chúng tôi đều là lưu học sinh."
          },
          {
            "zh": "我全家都喜欢喝茶。",
            "py": "Wǒ quánjiā dōu xǐhuan hē chá.",
            "vi": "Cả nhà tôi đều thích uống trà."
          },
          {
            "zh": "全学校的老师都很好。",
            "py": "Quán xuéxiào de lǎoshī dōu hěn hǎo.",
            "vi": "Giáo viên của cả trường đều rất tốt."
          },
          {
            "zh": "全家人都很好。",
            "py": "Quán jiā rén dōu hěn hǎo.",
            "vi": "Cả nhà đều khỏe."
          },
          {
            "zh": "全班同学都去了。",
            "py": "Quán bān tóngxué dōu qù le.",
            "vi": "Cả lớp đều đi rồi."
          },
          {
            "zh": "全公司的人都知道。",
            "py": "Quán gōngsī de rén dōu zhīdào.",
            "vi": "Cả công ty đều biết."
          },
          {
            "zh": "他全家都在美国。",
            "py": "Tā quán jiā dōu zài Měiguó.",
            "vi": "Cả nhà anh ấy đều ở Mỹ."
          },
          {
            "zh": "我们全家星期天去看奶奶。",
            "py": "Wǒmen quán jiā xīngqītiān qù kàn nǎinai.",
            "vi": "Chủ nhật cả nhà chúng tôi đi thăm bà."
          }
        ]
      },
      {
        "zh": "照片",
        "py": "zhàopiàn",
        "type": "Danh từ",
        "vi": "ảnh, bức ảnh",
        "ex": [
          {
            "zh": "这是我全家的照片。",
            "py": "Zhè shì wǒ quánjiā de zhàopiàn.",
            "vi": "Đây là ảnh cả nhà tôi."
          },
          {
            "zh": "你有全家的照片吗？",
            "py": "Nǐ yǒu quánjiā de zhàopiàn ma?",
            "vi": "Bạn có ảnh cả nhà không?"
          },
          {
            "zh": "这张照片很好看。",
            "py": "Zhè zhāng zhàopiàn hěn hǎokàn.",
            "vi": "Bức ảnh này rất đẹp."
          },
          {
            "zh": "这是我朋友的照片。",
            "py": "Zhè shì wǒ péngyou de zhàopiàn.",
            "vi": "Đây là ảnh của bạn tôi."
          },
          {
            "zh": "我没有他的照片。",
            "py": "Wǒ méiyǒu tā de zhàopiàn.",
            "vi": "Tôi không có ảnh của anh ấy."
          },
          {
            "zh": "这是我在河内的照片。",
            "py": "Zhè shì wǒ zài Hénèi de zhàopiàn.",
            "vi": "Đây là ảnh của tôi ở Hà Nội."
          },
          {
            "zh": "这些照片是谁照的？",
            "py": "Zhèxiē zhàopiàn shì shéi zhào de?",
            "vi": "Những bức ảnh này ai chụp?"
          },
          {
            "zh": "照片里的人是我爸爸。",
            "py": "Zhàopiàn lǐ de rén shì wǒ bàba.",
            "vi": "Người trong ảnh là bố tôi."
          },
          {
            "zh": "我给妈妈寄了一张照片。",
            "py": "Wǒ gěi māma jìle yì zhāng zhàopiàn.",
            "vi": "Tôi gửi cho mẹ một bức ảnh."
          },
          {
            "zh": "他有很多旅游的照片。",
            "py": "Tā yǒu hěn duō lǚyóu de zhàopiàn.",
            "vi": "Anh ấy có nhiều ảnh du lịch."
          }
        ]
      },
      {
        "zh": "看",
        "py": "kàn",
        "type": "Động từ",
        "vi": "nhìn, xem, đọc, thăm, khám",
        "ex": [
          {
            "zh": "我孩子很喜欢看手机。",
            "py": "Wǒ háizi hěn xǐhuan kàn shǒujī.",
            "vi": "Con tôi rất thích xem điện thoại."
          },
          {
            "zh": "我喜欢看书。",
            "py": "Wǒ xǐhuan kàn shū.",
            "vi": "Tôi thích đọc sách."
          },
          {
            "zh": "我要去看医生。",
            "py": "Wǒ yào qù kàn yīshēng.",
            "vi": "Tôi cần đi khám bác sĩ."
          },
          {
            "zh": "你在看什么？",
            "py": "Nǐ zài kàn shénme?",
            "vi": "Bạn đang xem gì vậy?"
          },
          {
            "zh": "我想看这张照片。",
            "py": "Wǒ xiǎng kàn zhè zhāng zhàopiàn.",
            "vi": "Tôi muốn xem bức ảnh này."
          },
          {
            "zh": "你看，那是我的车。",
            "py": "Nǐ kàn, nà shì wǒ de chē.",
            "vi": "Bạn nhìn kìa, đó là xe của tôi."
          },
          {
            "zh": "晚上我看了一本书。",
            "py": "Wǎnshang wǒ kànle yì běn shū.",
            "vi": "Buổi tối tôi đã đọc một quyển sách."
          },
          {
            "zh": "我想去医院看朋友。",
            "py": "Wǒ xiǎng qù yīyuàn kàn péngyou.",
            "vi": "Tôi muốn đến bệnh viện thăm bạn."
          },
          {
            "zh": "请看这儿。",
            "py": "Qǐng kàn zhèr.",
            "vi": "Xin hãy nhìn vào đây."
          },
          {
            "zh": "我看你很累。",
            "py": "Wǒ kàn nǐ hěn lèi.",
            "vi": "Tôi thấy bạn rất mệt."
          }
        ]
      },
      {
        "zh": "看见",
        "py": "kànjiàn",
        "type": "Động từ",
        "vi": "nhìn thấy, trông thấy",
        "ex": [
          {
            "zh": "我看见王老师了。",
            "py": "Wǒ kànjiàn Wáng lǎoshī le.",
            "vi": "Tôi nhìn thấy thầy Vương rồi."
          },
          {
            "zh": "你看见我的词典了吗？",
            "py": "Nǐ kànjiàn wǒ de cídiǎn le ma?",
            "vi": "Bạn có thấy từ điển của tôi không?"
          },
          {
            "zh": "我在商店看见了他。",
            "py": "Wǒ zài shāngdiàn kànjiàn le tā.",
            "vi": "Tôi nhìn thấy anh ấy ở cửa hàng."
          },
          {
            "zh": "我没看见你的照片。",
            "py": "Wǒ méi kànjiàn nǐ de zhàopiàn.",
            "vi": "Tôi không thấy ảnh của bạn."
          },
          {
            "zh": "我在图书馆看见她了。",
            "py": "Wǒ zài túshūguǎn kànjiàn tā le.",
            "vi": "Tôi nhìn thấy cô ấy ở thư viện."
          },
          {
            "zh": "你看见我的手机了吗？",
            "py": "Nǐ kànjiàn wǒ de shǒujī le ma?",
            "vi": "Bạn có thấy điện thoại của tôi không?"
          },
          {
            "zh": "我在商场看见了我的老师。",
            "py": "Wǒ zài shāngchǎng kànjiànle wǒ de lǎoshī.",
            "vi": "Tôi nhìn thấy thầy giáo ở trung tâm thương mại."
          },
          {
            "zh": "我没看见他的车。",
            "py": "Wǒ méi kànjiàn tā de chē.",
            "vi": "Tôi không thấy xe của anh ấy."
          },
          {
            "zh": "你看见那个商店了吗？",
            "py": "Nǐ kànjiàn nàge shāngdiàn le ma?",
            "vi": "Bạn có thấy cửa hàng kia không?"
          },
          {
            "zh": "我看见他进银行了。",
            "py": "Wǒ kànjiàn tā jìn yínháng le.",
            "vi": "Tôi thấy anh ấy vào ngân hàng rồi."
          }
        ]
      },
      {
        "zh": "只",
        "py": "zhǐ",
        "type": "Phó từ",
        "vi": "chỉ",
        "ex": [
          {
            "zh": "我老婆只有一个姐姐。",
            "py": "Wǒ lǎopo zhǐyǒu yí ge jiějie.",
            "vi": "Vợ tôi chỉ có một chị gái."
          },
          {
            "zh": "我只喝茶，不喝咖啡。",
            "py": "Wǒ zhǐ hē chá, bù hē kāfēi.",
            "vi": "Tôi chỉ uống trà, không uống cà phê."
          },
          {
            "zh": "他只有一个孩子。",
            "py": "Tā zhǐyǒu yí ge háizi.",
            "vi": "Anh ấy chỉ có một đứa con."
          },
          {
            "zh": "我只想看照片。",
            "py": "Wǒ zhǐ xiǎng kàn zhàopiàn.",
            "vi": "Tôi chỉ muốn xem ảnh."
          },
          {
            "zh": "这个商店只卖水果。",
            "py": "Zhège shāngdiàn zhǐ mài shuǐguǒ.",
            "vi": "Cửa hàng này chỉ bán hoa quả."
          },
          {
            "zh": "我只有一百块钱。",
            "py": "Wǒ zhǐ yǒu yìbǎi kuài qián.",
            "vi": "Tôi chỉ có một trăm đồng."
          },
          {
            "zh": "他只说英语。",
            "py": "Tā zhǐ shuō Yīngyǔ.",
            "vi": "Anh ấy chỉ nói tiếng Anh."
          },
          {
            "zh": "我们班只有三个男学生。",
            "py": "Wǒmen bān zhǐ yǒu sān ge nán xuésheng.",
            "vi": "Lớp chúng tôi chỉ có ba nam sinh."
          },
          {
            "zh": "我只要一个包子。",
            "py": "Wǒ zhǐ yào yí ge bāozi.",
            "vi": "Tôi chỉ cần một cái bánh bao."
          },
          {
            "zh": "星期天只有图书馆开门。",
            "py": "Xīngqītiān zhǐ yǒu túshūguǎn kāimén.",
            "vi": "Chủ nhật chỉ có thư viện mở cửa."
          }
        ]
      },
      {
        "zh": "做",
        "py": "zuò",
        "type": "Động từ",
        "vi": "làm",
        "ex": [
          {
            "zh": "你做什么工作？",
            "py": "Nǐ zuò shénme gōngzuò?",
            "vi": "Bạn làm công việc gì?"
          },
          {
            "zh": "我朋友做律师。",
            "py": "Wǒ péngyou zuò lǜshī.",
            "vi": "Bạn của tôi làm luật sư."
          },
          {
            "zh": "你在做什么？",
            "py": "Nǐ zài zuò shénme?",
            "vi": "Bạn đang làm gì?"
          },
          {
            "zh": "他想做什么工作？",
            "py": "Tā xiǎng zuò shénme gōngzuò?",
            "vi": "Anh ấy muốn làm công việc gì?"
          },
          {
            "zh": "我想做医生。",
            "py": "Wǒ xiǎng zuò yīshēng.",
            "vi": "Tôi muốn làm bác sĩ."
          },
          {
            "zh": "周末你想做什么？",
            "py": "Zhōumò nǐ xiǎng zuò shénme?",
            "vi": "Cuối tuần bạn muốn làm gì?"
          },
          {
            "zh": "她在公司做秘书。",
            "py": "Tā zài gōngsī zuò mìshū.",
            "vi": "Cô ấy làm thư ký ở công ty."
          },
          {
            "zh": "我不知道怎么做。",
            "py": "Wǒ bù zhīdào zěnme zuò.",
            "vi": "Tôi không biết làm thế nào."
          },
          {
            "zh": "妈妈做了很多饺子。",
            "py": "Māma zuòle hěn duō jiǎozi.",
            "vi": "Mẹ làm rất nhiều sủi cảo."
          },
          {
            "zh": "他在外贸公司做经理。",
            "py": "Tā zài wàimào gōngsī zuò jīnglǐ.",
            "vi": "Anh ấy làm giám đốc ở công ty ngoại thương."
          }
        ]
      },
      {
        "zh": "做饭",
        "py": "zuòfàn",
        "type": "Cụm từ",
        "vi": "nấu cơm",
        "ex": [
          {
            "zh": "我妈妈喜欢做饭。",
            "py": "Wǒ māma xǐhuan zuòfàn.",
            "vi": "Mẹ tôi thích nấu cơm."
          },
          {
            "zh": "他经常做饭。",
            "py": "Tā jīngcháng zuòfàn.",
            "vi": "Anh ấy thường xuyên nấu cơm."
          },
          {
            "zh": "我今天不做饭。",
            "py": "Wǒ jīntiān bú zuòfàn.",
            "vi": "Hôm nay tôi không nấu cơm."
          },
          {
            "zh": "你在做饭吗？",
            "py": "Nǐ zài zuòfàn ma?",
            "vi": "Bạn đang nấu cơm à?"
          },
          {
            "zh": "我老婆很喜欢做饭。",
            "py": "Wǒ lǎopo hěn xǐhuan zuòfàn.",
            "vi": "Vợ tôi rất thích nấu cơm."
          },
          {
            "zh": "谁做饭？",
            "py": "Shéi zuòfàn?",
            "vi": "Ai nấu cơm?"
          },
          {
            "zh": "我老公喜欢做饭。",
            "py": "Wǒ lǎogōng xǐhuan zuòfàn.",
            "vi": "Chồng tôi thích nấu cơm."
          },
          {
            "zh": "今天晚上你做饭吧。",
            "py": "Jīntiān wǎnshang nǐ zuòfàn ba.",
            "vi": "Tối nay bạn nấu cơm đi."
          },
          {
            "zh": "我喜欢跟妈妈学做饭。",
            "py": "Wǒ xǐhuan gēn māma xué zuòfàn.",
            "vi": "Tôi thích học nấu ăn với mẹ."
          },
          {
            "zh": "他太忙了，不做饭。",
            "py": "Tā tài máng le, bú zuòfàn.",
            "vi": "Anh ấy bận quá, không nấu cơm."
          }
        ]
      },
      {
        "zh": "医生",
        "py": "yīshēng",
        "type": "Danh từ",
        "vi": "bác sĩ",
        "ex": [
          {
            "zh": "我妈妈是这个医院的医生。",
            "py": "Wǒ māma shì zhège yīyuàn de yīshēng.",
            "vi": "Mẹ tôi là bác sĩ của bệnh viện này."
          },
          {
            "zh": "我朋友是医生。",
            "py": "Wǒ péngyou shì yīshēng.",
            "vi": "Bạn tôi là bác sĩ."
          },
          {
            "zh": "这位医生很好。",
            "py": "Zhè wèi yīshēng hěn hǎo.",
            "vi": "Vị bác sĩ này rất tốt."
          },
          {
            "zh": "他是医院的医生。",
            "py": "Tā shì yīyuàn de yīshēng.",
            "vi": "Anh ấy là bác sĩ của bệnh viện."
          },
          {
            "zh": "我姐姐想做医生。",
            "py": "Wǒ jiějie xiǎng zuò yīshēng.",
            "vi": "Chị tôi muốn làm bác sĩ."
          },
          {
            "zh": "医生说我要多喝水。",
            "py": "Yīshēng shuō wǒ yào duō hē shuǐ.",
            "vi": "Bác sĩ nói tôi phải uống nhiều nước."
          },
          {
            "zh": "那位医生是我的朋友。",
            "py": "Nà wèi yīshēng shì wǒ de péngyou.",
            "vi": "Vị bác sĩ kia là bạn tôi."
          },
          {
            "zh": "医生今天很忙。",
            "py": "Yīshēng jīntiān hěn máng.",
            "vi": "Hôm nay bác sĩ rất bận."
          },
          {
            "zh": "我哥哥也是医生。",
            "py": "Wǒ gēge yě shì yīshēng.",
            "vi": "Anh tôi cũng là bác sĩ."
          },
          {
            "zh": "这个医院有很多好医生。",
            "py": "Zhège yīyuàn yǒu hěn duō hǎo yīshēng.",
            "vi": "Bệnh viện này có rất nhiều bác sĩ giỏi."
          }
        ]
      },
      {
        "zh": "医院",
        "py": "yīyuàn",
        "type": "Danh từ",
        "vi": "bệnh viện",
        "ex": [
          {
            "zh": "我妈妈在医院工作五年了。",
            "py": "Wǒ māma zài yīyuàn gōngzuò wǔ nián le.",
            "vi": "Mẹ tôi làm việc ở bệnh viện năm năm rồi."
          },
          {
            "zh": "我经常去医院定期看病。",
            "py": "Wǒ jīngcháng qù yīyuàn dìngqī kànbìng.",
            "vi": "Tôi thường xuyên đi khám định kỳ ở bệnh viện."
          },
          {
            "zh": "这个医院很大。",
            "py": "Zhège yīyuàn hěn dà.",
            "vi": "Bệnh viện này rất lớn."
          },
          {
            "zh": "医院里有很多医生。",
            "py": "Yīyuàn li yǒu hěn duō yīshēng.",
            "vi": "Trong bệnh viện có rất nhiều bác sĩ."
          },
          {
            "zh": "我朋友在医院工作。",
            "py": "Wǒ péngyou zài yīyuàn gōngzuò.",
            "vi": "Bạn tôi làm việc ở bệnh viện."
          },
          {
            "zh": "医院几点开门？",
            "py": "Yīyuàn jǐ diǎn kāimén?",
            "vi": "Bệnh viện mấy giờ mở cửa?"
          },
          {
            "zh": "奶奶在医院。",
            "py": "Nǎinai zài yīyuàn.",
            "vi": "Bà nội đang ở bệnh viện."
          },
          {
            "zh": "我们坐出租车去医院。",
            "py": "Wǒmen zuò chūzūchē qù yīyuàn.",
            "vi": "Chúng tôi đi taxi đến bệnh viện."
          },
          {
            "zh": "医院里人很多。",
            "py": "Yīyuàn lǐ rén hěn duō.",
            "vi": "Trong bệnh viện rất đông người."
          },
          {
            "zh": "河内有很多大医院。",
            "py": "Hénèi yǒu hěn duō dà yīyuàn.",
            "vi": "Hà Nội có nhiều bệnh viện lớn."
          }
        ]
      },
      {
        "zh": "定期",
        "py": "dìngqī",
        "type": "Phó từ",
        "vi": "định kỳ",
        "ex": [
          {
            "zh": "他定期去商店买日用品。",
            "py": "Tā dìngqī qù shāngdiàn mǎi rìyòngpǐn.",
            "vi": "Anh ấy định kỳ đi cửa hàng mua đồ dùng."
          },
          {
            "zh": "你要定期去看医生。",
            "py": "Nǐ yào dìngqī qù kàn yīshēng.",
            "vi": "Bạn cần đi khám bác sĩ định kỳ."
          },
          {
            "zh": "我妈妈定期去医院。",
            "py": "Wǒ māma dìngqī qù yīyuàn.",
            "vi": "Mẹ tôi định kỳ đi bệnh viện."
          },
          {
            "zh": "我定期去商店买水果。",
            "py": "Wǒ dìngqī qù shāngdiàn mǎi shuǐguǒ.",
            "vi": "Tôi định kỳ đi cửa hàng mua hoa quả."
          },
          {
            "zh": "我们定期去图书馆看书。",
            "py": "Wǒmen dìngqī qù túshūguǎn kàn shū.",
            "vi": "Chúng tôi định kỳ đi thư viện đọc sách."
          },
          {
            "zh": "你要定期吃药。",
            "py": "Nǐ yào dìngqī chī yào.",
            "vi": "Bạn phải uống thuốc đều đặn."
          },
          {
            "zh": "我定期给妈妈寄钱。",
            "py": "Wǒ dìngqī gěi māma jì qián.",
            "vi": "Tôi định kỳ gửi tiền cho mẹ."
          },
          {
            "zh": "他定期去银行存钱。",
            "py": "Tā dìngqī qù yínháng cún qián.",
            "vi": "Anh ấy định kỳ đến ngân hàng gửi tiền."
          },
          {
            "zh": "汽车要定期看一下儿。",
            "py": "Qìchē yào dìngqī kàn yíxiàr.",
            "vi": "Ô tô phải định kỳ kiểm tra."
          },
          {
            "zh": "她定期给奶奶买药。",
            "py": "Tā dìngqī gěi nǎinai mǎi yào.",
            "vi": "Cô ấy định kỳ mua thuốc cho bà."
          }
        ]
      },
      {
        "zh": "商店",
        "py": "shāngdiàn",
        "type": "Danh từ",
        "vi": "cửa hàng",
        "ex": [
          {
            "zh": "我妈妈在一个小商店工作。",
            "py": "Wǒ māma zài yí ge xiǎo shāngdiàn gōngzuò.",
            "vi": "Mẹ tôi làm việc ở một cửa hàng nhỏ."
          },
          {
            "zh": "这个商店卖水果。",
            "py": "Zhège shāngdiàn mài shuǐguǒ.",
            "vi": "Cửa hàng này bán hoa quả."
          },
          {
            "zh": "商店里的衣服很贵。",
            "py": "Shāngdiàn li de yīfu hěn guì.",
            "vi": "Quần áo trong cửa hàng rất đắt."
          },
          {
            "zh": "这家商店在哪儿？",
            "py": "Zhè jiā shāngdiàn zài nǎr?",
            "vi": "Cửa hàng này ở đâu?"
          },
          {
            "zh": "商店几点开？",
            "py": "Shāngdiàn jǐ diǎn kāi?",
            "vi": "Cửa hàng mấy giờ mở cửa?"
          },
          {
            "zh": "那家商店的东西很便宜。",
            "py": "Nà jiā shāngdiàn de dōngxi hěn piányi.",
            "vi": "Đồ ở cửa hàng kia rất rẻ."
          },
          {
            "zh": "商店星期天开门吗？",
            "py": "Shāngdiàn xīngqītiān kāimén ma?",
            "vi": "Cửa hàng có mở cửa Chủ nhật không?"
          },
          {
            "zh": "我去商店买点儿水果。",
            "py": "Wǒ qù shāngdiàn mǎi diǎnr shuǐguǒ.",
            "vi": "Tôi đến cửa hàng mua chút hoa quả."
          },
          {
            "zh": "学校里有一个小商店。",
            "py": "Xuéxiào lǐ yǒu yí ge xiǎo shāngdiàn.",
            "vi": "Trong trường có một cửa hàng nhỏ."
          },
          {
            "zh": "这条街的商店很多。",
            "py": "Zhè tiáo jiē de shāngdiàn hěn duō.",
            "vi": "Con phố này có rất nhiều cửa hàng."
          }
        ]
      },
      {
        "zh": "外贸",
        "py": "wàimào",
        "type": "Danh từ",
        "vi": "ngoại thương",
        "ex": [
          {
            "zh": "我在河内外贸大学学习。",
            "py": "Wǒ zài Hénèi Wàimào Dàxué xuéxí.",
            "vi": "Tôi học ở Đại học Ngoại thương Hà Nội."
          },
          {
            "zh": "他在一个外贸公司工作。",
            "py": "Tā zài yí ge wàimào gōngsī gōngzuò.",
            "vi": "Anh ấy làm việc ở một công ty ngoại thương."
          },
          {
            "zh": "外贸公司很忙。",
            "py": "Wàimào gōngsī hěn máng.",
            "vi": "Công ty ngoại thương rất bận."
          },
          {
            "zh": "我朋友是外贸公司的职员。",
            "py": "Wǒ péngyou shì wàimào gōngsī de zhíyuán.",
            "vi": "Bạn tôi là nhân viên của công ty ngoại thương."
          },
          {
            "zh": "我想在外贸公司工作。",
            "py": "Wǒ xiǎng zài wàimào gōngsī gōngzuò.",
            "vi": "Tôi muốn làm việc ở công ty ngoại thương."
          },
          {
            "zh": "外贸工作很有意思。",
            "py": "Wàimào gōngzuò hěn yǒu yìsi.",
            "vi": "Công việc ngoại thương rất thú vị."
          },
          {
            "zh": "她在外贸大学学习。",
            "py": "Tā zài Wàimào Dàxué xuéxí.",
            "vi": "Cô ấy học ở Đại học Ngoại thương."
          },
          {
            "zh": "我们公司做外贸。",
            "py": "Wǒmen gōngsī zuò wàimào.",
            "vi": "Công ty chúng tôi làm ngoại thương."
          },
          {
            "zh": "外贸公司的职员都说英语。",
            "py": "Wàimào gōngsī de zhíyuán dōu shuō Yīngyǔ.",
            "vi": "Nhân viên công ty ngoại thương đều nói tiếng Anh."
          },
          {
            "zh": "他是外贸经理。",
            "py": "Tā shì wàimào jīnglǐ.",
            "vi": "Anh ấy là giám đốc ngoại thương."
          }
        ]
      },
      {
        "zh": "大概",
        "py": "dàgài",
        "type": "Phó từ",
        "vi": "khoảng, đại khái",
        "ex": [
          {
            "zh": "我公司大概有八十个人。",
            "py": "Wǒ gōngsī dàgài yǒu bāshí ge rén.",
            "vi": "Công ty tôi có khoảng 80 người."
          },
          {
            "zh": "现在大概九点。",
            "py": "Xiànzài dàgài jiǔ diǎn.",
            "vi": "Bây giờ khoảng 9 giờ."
          },
          {
            "zh": "这个箱子大概三斤。",
            "py": "Zhège xiāngzi dàgài sān jīn.",
            "vi": "Cái vali này khoảng ba cân."
          },
          {
            "zh": "我们大概明天去。",
            "py": "Wǒmen dàgài míngtiān qù.",
            "vi": "Chúng tôi khoảng ngày mai sẽ đi."
          },
          {
            "zh": "这本书大概一百块。",
            "py": "Zhè běn shū dàgài yìbǎi kuài.",
            "vi": "Quyển sách này khoảng một trăm đồng."
          },
          {
            "zh": "他大概三十岁。",
            "py": "Tā dàgài sānshí suì.",
            "vi": "Anh ấy khoảng ba mươi tuổi."
          },
          {
            "zh": "这件衣服大概多少钱？",
            "py": "Zhè jiàn yīfu dàgài duōshao qián?",
            "vi": "Bộ quần áo này khoảng bao nhiêu tiền?"
          },
          {
            "zh": "我们班大概有二十个学生。",
            "py": "Wǒmen bān dàgài yǒu èrshí ge xuésheng.",
            "vi": "Lớp chúng tôi có khoảng hai mươi học sinh."
          },
          {
            "zh": "经理大概下午回办公室。",
            "py": "Jīnglǐ dàgài xiàwǔ huí bàngōngshì.",
            "vi": "Giám đốc chắc chiều mới về văn phòng."
          },
          {
            "zh": "明天大概有雨。",
            "py": "Míngtiān dàgài yǒu yǔ.",
            "vi": "Ngày mai có lẽ có mưa."
          }
        ]
      },
      {
        "zh": "点",
        "py": "diǎn",
        "type": "Danh từ",
        "vi": "giờ (đơn vị chỉ giờ)",
        "ex": [
          {
            "zh": "他七点回家。",
            "py": "Tā qī diǎn huíjiā.",
            "vi": "Anh ấy 7 giờ về nhà."
          },
          {
            "zh": "现在几点？",
            "py": "Xiànzài jǐ diǎn?",
            "vi": "Bây giờ mấy giờ?"
          },
          {
            "zh": "你几点回家？",
            "py": "Nǐ jǐ diǎn huíjiā?",
            "vi": "Mấy giờ bạn về nhà?"
          },
          {
            "zh": "我八点去公司。",
            "py": "Wǒ bā diǎn qù gōngsī.",
            "vi": "Tôi 8 giờ đi đến công ty."
          },
          {
            "zh": "现在十二点，我们去吃饭吧。",
            "py": "Xiànzài shí'èr diǎn, wǒmen qù chīfàn ba.",
            "vi": "Bây giờ 12 giờ, chúng ta đi ăn cơm nhé."
          },
          {
            "zh": "我们三点见。",
            "py": "Wǒmen sān diǎn jiàn.",
            "vi": "Chúng ta gặp nhau lúc ba giờ."
          },
          {
            "zh": "他十点回办公室。",
            "py": "Tā shí diǎn huí bàngōngshì.",
            "vi": "Anh ấy về văn phòng lúc mười giờ."
          },
          {
            "zh": "你明天几点去银行？",
            "py": "Nǐ míngtiān jǐ diǎn qù yínháng?",
            "vi": "Ngày mai mấy giờ bạn đi ngân hàng?"
          },
          {
            "zh": "商场十点开门。",
            "py": "Shāngchǎng shí diǎn kāimén.",
            "vi": "Trung tâm thương mại mở cửa lúc mười giờ."
          },
          {
            "zh": "下午四点我去学校。",
            "py": "Xiàwǔ sì diǎn wǒ qù xuéxiào.",
            "vi": "Bốn giờ chiều tôi đến trường."
          }
        ]
      },
      {
        "zh": "小",
        "py": "xiǎo",
        "type": "Tính từ",
        "vi": "nhỏ, bé",
        "ex": [
          {
            "zh": "这个房间有点儿小。",
            "py": "Zhège fángjiān yǒudiǎnr xiǎo.",
            "vi": "Căn phòng này hơi nhỏ."
          },
          {
            "zh": "这个箱子很小。",
            "py": "Zhège xiāngzi hěn xiǎo.",
            "vi": "Cái vali này rất nhỏ."
          },
          {
            "zh": "我家很小。",
            "py": "Wǒ jiā hěn xiǎo.",
            "vi": "Nhà tôi rất nhỏ."
          },
          {
            "zh": "这条路很小。",
            "py": "Zhè tiáo lù hěn xiǎo.",
            "vi": "Con đường này rất nhỏ."
          },
          {
            "zh": "这个房间很小。",
            "py": "Zhège fángjiān hěn xiǎo.",
            "vi": "Căn phòng này rất nhỏ."
          },
          {
            "zh": "这个西瓜太小了。",
            "py": "Zhège xīguā tài xiǎo le.",
            "vi": "Quả dưa hấu này nhỏ quá."
          },
          {
            "zh": "我的手机很小。",
            "py": "Wǒ de shǒujī hěn xiǎo.",
            "vi": "Điện thoại của tôi rất nhỏ."
          },
          {
            "zh": "小马是我的同学。",
            "py": "Xiǎo Mǎ shì wǒ de tóngxué.",
            "vi": "Tiểu Mã là bạn học của tôi."
          },
          {
            "zh": "我有一个小妹妹。",
            "py": "Wǒ yǒu yí ge xiǎo mèimei.",
            "vi": "Tôi có một em gái nhỏ."
          },
          {
            "zh": "我们公司不大，很小。",
            "py": "Wǒmen gōngsī bú dà, hěn xiǎo.",
            "vi": "Công ty chúng tôi không lớn, rất nhỏ."
          }
        ]
      },
      {
        "zh": "高铁",
        "py": "gāotiě",
        "type": "Danh từ",
        "vi": "tàu cao tốc",
        "ex": [
          {
            "zh": "我坐高铁去上班。",
            "py": "Wǒ zuò gāotiě qù shàngbān.",
            "vi": "Tôi đi tàu cao tốc đi làm."
          },
          {
            "zh": "我喜欢坐高铁。",
            "py": "Wǒ xǐhuan zuò gāotiě.",
            "vi": "Tôi thích đi tàu cao tốc."
          },
          {
            "zh": "我们坐高铁去北京。",
            "py": "Wǒmen zuò gāotiě qù Běijīng.",
            "vi": "Chúng tôi đi tàu cao tốc đến Bắc Kinh."
          },
          {
            "zh": "他经常坐高铁上班。",
            "py": "Tā jīngcháng zuò gāotiě shàngbān.",
            "vi": "Anh ấy thường xuyên đi tàu cao tốc đi làm."
          },
          {
            "zh": "我不喜欢坐高铁。",
            "py": "Wǒ bù xǐhuan zuò gāotiě.",
            "vi": "Tôi không thích đi tàu cao tốc."
          },
          {
            "zh": "坐高铁要多少钱？",
            "py": "Zuò gāotiě yào duōshao qián?",
            "vi": "Đi tàu cao tốc mất bao nhiêu tiền?"
          },
          {
            "zh": "中国的高铁很多。",
            "py": "Zhōngguó de gāotiě hěn duō.",
            "vi": "Trung Quốc có rất nhiều tàu cao tốc."
          },
          {
            "zh": "越南还没有高铁。",
            "py": "Yuènán hái méiyǒu gāotiě.",
            "vi": "Việt Nam vẫn chưa có tàu cao tốc."
          },
          {
            "zh": "高铁上人很多。",
            "py": "Gāotiě shang rén hěn duō.",
            "vi": "Trên tàu cao tốc rất đông người."
          },
          {
            "zh": "你坐高铁还是坐汽车？",
            "py": "Nǐ zuò gāotiě háishì zuò qìchē?",
            "vi": "Bạn đi tàu cao tốc hay đi ô tô?"
          }
        ]
      },
      {
        "zh": "地铁",
        "py": "dìtiě",
        "type": "Danh từ",
        "vi": "tàu điện ngầm",
        "ex": [
          {
            "zh": "我坐地铁去公司。",
            "py": "Wǒ zuò dìtiě qù gōngsī.",
            "vi": "Tôi đi tàu điện ngầm đến công ty."
          },
          {
            "zh": "北京有地铁。",
            "py": "Běijīng yǒu dìtiě.",
            "vi": "Bắc Kinh có tàu điện ngầm."
          },
          {
            "zh": "我喜欢坐地铁，不喜欢坐出租车。",
            "py": "Wǒ xǐhuan zuò dìtiě, bù xǐhuan zuò chūzūchē.",
            "vi": "Tôi thích đi tàu điện ngầm, không thích đi taxi."
          },
          {
            "zh": "我们坐地铁去学校。",
            "py": "Wǒmen zuò dìtiě qù xuéxiào.",
            "vi": "Chúng tôi đi tàu điện ngầm đến trường."
          },
          {
            "zh": "河内没有地铁。",
            "py": "Hénèi méiyǒu dìtiě.",
            "vi": "Hà Nội không có tàu điện ngầm."
          },
          {
            "zh": "坐地铁很便宜。",
            "py": "Zuò dìtiě hěn piányi.",
            "vi": "Đi tàu điện ngầm rất rẻ."
          },
          {
            "zh": "地铁里人很多。",
            "py": "Dìtiě lǐ rén hěn duō.",
            "vi": "Trong tàu điện ngầm rất đông người."
          },
          {
            "zh": "坐地铁去商场要多少钱？",
            "py": "Zuò dìtiě qù shāngchǎng yào duōshao qián?",
            "vi": "Đi tàu điện ngầm đến trung tâm thương mại mất bao nhiêu tiền?"
          },
          {
            "zh": "下雨了，我们坐地铁吧。",
            "py": "Xià yǔ le, wǒmen zuò dìtiě ba.",
            "vi": "Trời mưa rồi, chúng ta đi tàu điện ngầm đi."
          },
          {
            "zh": "河内的地铁很新。",
            "py": "Hénèi de dìtiě hěn xīn.",
            "vi": "Tàu điện ngầm Hà Nội rất mới."
          }
        ]
      },
      {
        "zh": "灰色",
        "py": "huīsè",
        "type": "Danh từ",
        "vi": "màu xám (ghi)",
        "ex": [
          {
            "zh": "我的车是灰色的。",
            "py": "Wǒ de chē shì huīsè de.",
            "vi": "Xe của tôi màu xám."
          },
          {
            "zh": "他喜欢灰色的衣服。",
            "py": "Tā xǐhuan huīsè de yīfu.",
            "vi": "Anh ấy thích quần áo màu xám."
          },
          {
            "zh": "这件衣服是灰色的，不是黑色的。",
            "py": "Zhè jiàn yīfu shì huīsè de, bú shì hēisè de.",
            "vi": "Chiếc áo này màu xám, không phải màu đen."
          },
          {
            "zh": "你的箱子是白色还是灰色？",
            "py": "Nǐ de xiāngzi shì báisè háishi huīsè?",
            "vi": "Vali của bạn màu trắng hay màu xám?"
          },
          {
            "zh": "灰色也很好看。",
            "py": "Huīsè yě hěn hǎokàn.",
            "vi": "Màu xám cũng rất đẹp."
          },
          {
            "zh": "我喜欢灰色。",
            "py": "Wǒ xǐhuan huīsè.",
            "vi": "Tôi thích màu xám."
          },
          {
            "zh": "这件灰色的毛衣多少钱？",
            "py": "Zhè jiàn huīsè de máoyī duōshao qián?",
            "vi": "Chiếc áo len màu xám này bao nhiêu tiền?"
          },
          {
            "zh": "灰色的汽车很多。",
            "py": "Huīsè de qìchē hěn duō.",
            "vi": "Ô tô màu xám rất nhiều."
          },
          {
            "zh": "他的手机是灰色的。",
            "py": "Tā de shǒujī shì huīsè de.",
            "vi": "Điện thoại của anh ấy màu xám."
          },
          {
            "zh": "灰色和蓝色，你要哪个？",
            "py": "Huīsè hé lánsè, nǐ yào nǎge?",
            "vi": "Xám và xanh lam, bạn muốn cái nào?"
          }
        ]
      },
      {
        "zh": "上班",
        "py": "shàngbān",
        "type": "Cụm từ",
        "vi": "đi làm",
        "ex": [
          {
            "zh": "我姐姐骑自行车上班。",
            "py": "Wǒ jiějie qí zìxíngchē shàngbān.",
            "vi": "Chị gái tôi đi xe đạp đi làm."
          },
          {
            "zh": "你几点上班？",
            "py": "Nǐ jǐ diǎn shàngbān?",
            "vi": "Mấy giờ bạn đi làm?"
          },
          {
            "zh": "我今天不上班。",
            "py": "Wǒ jīntiān bú shàngbān.",
            "vi": "Hôm nay tôi không đi làm."
          },
          {
            "zh": "他经常开车上班。",
            "py": "Tā jīngcháng kāichē shàngbān.",
            "vi": "Anh ấy thường xuyên lái xe đi làm."
          },
          {
            "zh": "我八点上班。",
            "py": "Wǒ bā diǎn shàngbān.",
            "vi": "Tôi 8 giờ đi làm."
          },
          {
            "zh": "你怎么去上班？",
            "py": "Nǐ zěnme qù shàngbān?",
            "vi": "Bạn đi làm bằng gì?"
          },
          {
            "zh": "星期天我也上班。",
            "py": "Xīngqītiān wǒ yě shàngbān.",
            "vi": "Chủ nhật tôi cũng đi làm."
          },
          {
            "zh": "他坐出租车上班。",
            "py": "Tā zuò chūzūchē shàngbān.",
            "vi": "Anh ấy đi taxi đi làm."
          },
          {
            "zh": "下雨了，我不想去上班。",
            "py": "Xià yǔ le, wǒ bù xiǎng qù shàngbān.",
            "vi": "Mưa rồi, tôi không muốn đi làm."
          },
          {
            "zh": "你在哪儿上班？",
            "py": "Nǐ zài nǎr shàngbān?",
            "vi": "Bạn làm việc ở đâu?"
          }
        ]
      },
      {
        "zh": "外国",
        "py": "wàiguó",
        "type": "Danh từ",
        "vi": "nước ngoài",
        "ex": [
          {
            "zh": "我们公司也有外国职员。",
            "py": "Wǒmen gōngsī yě yǒu wàiguó zhíyuán.",
            "vi": "Công ty chúng tôi cũng có nhân viên nước ngoài."
          },
          {
            "zh": "他是外国人吗？",
            "py": "Tā shì wàiguó rén ma?",
            "vi": "Anh ấy là người nước ngoài phải không?"
          },
          {
            "zh": "这是外国的车。",
            "py": "Zhè shì wàiguó de chē.",
            "vi": "Đây là xe nước ngoài."
          },
          {
            "zh": "我有很多外国朋友。",
            "py": "Wǒ yǒu hěn duō wàiguó péngyou.",
            "vi": "Tôi có rất nhiều bạn nước ngoài."
          },
          {
            "zh": "他在外国工作。",
            "py": "Tā zài wàiguó gōngzuò.",
            "vi": "Anh ấy làm việc ở nước ngoài."
          },
          {
            "zh": "很多外国人喜欢越南咖啡。",
            "py": "Hěn duō wàiguó rén xǐhuan Yuènán kāfēi.",
            "vi": "Nhiều người nước ngoài thích cà phê Việt Nam."
          },
          {
            "zh": "我想去外国旅游。",
            "py": "Wǒ xiǎng qù wàiguó lǚyóu.",
            "vi": "Tôi muốn đi du lịch nước ngoài."
          },
          {
            "zh": "这是外国的药。",
            "py": "Zhè shì wàiguó de yào.",
            "vi": "Đây là thuốc nước ngoài."
          },
          {
            "zh": "我们班有五个外国学生。",
            "py": "Wǒmen bān yǒu wǔ ge wàiguó xuésheng.",
            "vi": "Lớp chúng tôi có năm học sinh nước ngoài."
          },
          {
            "zh": "外国的东西比较贵。",
            "py": "Wàiguó de dōngxi bǐjiào guì.",
            "vi": "Đồ nước ngoài tương đối đắt."
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 20 (b23): 商场、日期与生日 – Trung tâm thương mại, ngày tháng & sinh nhật",
    "words": [
      {
        "zh": "商场",
        "py": "shāngchǎng",
        "type": "Danh từ",
        "vi": "trung tâm thương mại, trung tâm mua sắm",
        "ex": [
          {
            "zh": "我去商场买东西。",
            "py": "Wǒ qù shāngchǎng mǎi dōngxi.",
            "vi": "Tôi đi trung tâm thương mại mua đồ."
          },
          {
            "zh": "你去商场做什么？",
            "py": "Nǐ qù shāngchǎng zuò shénme?",
            "vi": "Bạn đi trung tâm thương mại làm gì?"
          },
          {
            "zh": "明天我们去商场吧。",
            "py": "Míngtiān wǒmen qù shāngchǎng ba.",
            "vi": "Ngày mai chúng ta đi trung tâm thương mại nhé."
          },
          {
            "zh": "这个商场的东西很贵。",
            "py": "Zhège shāngchǎng de dōngxi hěn guì.",
            "vi": "Đồ ở trung tâm thương mại này rất đắt."
          },
          {
            "zh": "昨天我在商场买了一些水果。",
            "py": "Zuótiān wǒ zài shāngchǎng mǎi le yìxiē shuǐguǒ.",
            "vi": "Hôm qua tôi đã mua một ít hoa quả ở trung tâm thương mại."
          },
          {
            "zh": "我们在商场吃午饭吧。",
            "py": "Wǒmen zài shāngchǎng chī wǔfàn ba.",
            "vi": "Chúng ta ăn trưa ở trung tâm thương mại nhé."
          },
          {
            "zh": "新商场很大。",
            "py": "Xīn shāngchǎng hěn dà.",
            "vi": "Trung tâm thương mại mới rất lớn."
          },
          {
            "zh": "你常去哪个商场？",
            "py": "Nǐ cháng qù nǎge shāngchǎng?",
            "vi": "Bạn hay đến trung tâm thương mại nào?"
          },
          {
            "zh": "商场里的咖啡很贵。",
            "py": "Shāngchǎng lǐ de kāfēi hěn guì.",
            "vi": "Cà phê trong trung tâm thương mại rất đắt."
          },
          {
            "zh": "星期六我跟老婆去商场。",
            "py": "Xīngqīliù wǒ gēn lǎopó qù shāngchǎng.",
            "vi": "Thứ Bảy tôi đi trung tâm thương mại với vợ."
          }
        ]
      },
      {
        "zh": "东西",
        "py": "dōngxi",
        "type": "Danh từ",
        "vi": "đồ, đồ đạc, thứ",
        "ex": [
          {
            "zh": "我去商场买一些东西。",
            "py": "Wǒ qù shāngchǎng mǎi yìxiē dōngxi.",
            "vi": "Tôi đi trung tâm thương mại mua một ít đồ."
          },
          {
            "zh": "这些东西是谁的？",
            "py": "Zhèxiē dōngxi shì shéi de?",
            "vi": "Những thứ này là của ai?"
          },
          {
            "zh": "你要买什么东西？",
            "py": "Nǐ yào mǎi shénme dōngxi?",
            "vi": "Bạn muốn mua đồ gì?"
          },
          {
            "zh": "这个东西太贵了。",
            "py": "Zhège dōngxi tài guì le.",
            "vi": "Món đồ này đắt quá."
          },
          {
            "zh": "我买的东西都在家里。",
            "py": "Wǒ mǎi de dōngxi dōu zài jiā li.",
            "vi": "Đồ tôi mua đều ở trong nhà."
          },
          {
            "zh": "你买了什么东西？",
            "py": "Nǐ mǎile shénme dōngxi?",
            "vi": "Bạn đã mua đồ gì?"
          },
          {
            "zh": "我的东西都在箱子里。",
            "py": "Wǒ de dōngxi dōu zài xiāngzi lǐ.",
            "vi": "Đồ của tôi đều ở trong vali."
          },
          {
            "zh": "这家商店的东西很多。",
            "py": "Zhè jiā shāngdiàn de dōngxi hěn duō.",
            "vi": "Cửa hàng này có rất nhiều đồ."
          },
          {
            "zh": "这是什么东西？",
            "py": "Zhè shì shénme dōngxi?",
            "vi": "Đây là thứ gì?"
          },
          {
            "zh": "我想吃点儿东西。",
            "py": "Wǒ xiǎng chī diǎnr dōngxi.",
            "vi": "Tôi muốn ăn chút gì đó."
          }
        ]
      },
      {
        "zh": "处理",
        "py": "chǔlǐ",
        "type": "Động từ",
        "vi": "xử lý, giải quyết",
        "ex": [
          {
            "zh": "今天我要在家处理工作。",
            "py": "Jīntiān wǒ yào zài jiā chǔlǐ gōngzuò.",
            "vi": "Hôm nay tôi phải ở nhà xử lý công việc."
          },
          {
            "zh": "这个错误谁处理？",
            "py": "Zhège cuòwù shéi chǔlǐ?",
            "vi": "Lỗi này ai xử lý?"
          },
          {
            "zh": "我在公司处理一些错误。",
            "py": "Wǒ zài gōngsī chǔlǐ yìxiē cuòwù.",
            "vi": "Tôi xử lý một số lỗi ở công ty."
          },
          {
            "zh": "经理要处理这个错误。",
            "py": "Jīnglǐ yào chǔlǐ zhège cuòwù.",
            "vi": "Giám đốc phải xử lý lỗi này."
          },
          {
            "zh": "这些东西你怎么处理？",
            "py": "Zhèxiē dōngxi nǐ zěnme chǔlǐ?",
            "vi": "Mấy thứ này bạn xử lý thế nào?"
          },
          {
            "zh": "经理在处理工作。",
            "py": "Jīnglǐ zài chǔlǐ gōngzuò.",
            "vi": "Giám đốc đang xử lý công việc."
          },
          {
            "zh": "这些旧衣服怎么处理？",
            "py": "Zhèxiē jiù yīfu zěnme chǔlǐ?",
            "vi": "Những quần áo cũ này xử lý thế nào?"
          },
          {
            "zh": "秘书处理了这个错误。",
            "py": "Mìshū chǔlǐle zhège cuòwù.",
            "vi": "Thư ký đã xử lý lỗi này."
          },
          {
            "zh": "明天我处理这些东西。",
            "py": "Míngtiān wǒ chǔlǐ zhèxiē dōngxi.",
            "vi": "Ngày mai tôi xử lý những đồ này."
          },
          {
            "zh": "你处理好了吗？",
            "py": "Nǐ chǔlǐ hǎo le ma?",
            "vi": "Bạn xử lý xong chưa?"
          }
        ]
      },
      {
        "zh": "错误",
        "py": "cuòwù",
        "type": "Danh từ",
        "vi": "lỗi, sai sót",
        "ex": [
          {
            "zh": "处理错误是我的工作。",
            "py": "Chǔlǐ cuòwù shì wǒ de gōngzuò.",
            "vi": "Xử lý lỗi là công việc của tôi."
          },
          {
            "zh": "这个错误不太难。",
            "py": "Zhège cuòwù bú tài nán.",
            "vi": "Lỗi này không khó lắm."
          },
          {
            "zh": "今天我们有一些错误。",
            "py": "Jīntiān wǒmen yǒu yìxiē cuòwù.",
            "vi": "Hôm nay chúng tôi có một số lỗi."
          },
          {
            "zh": "这个汉字有错误。",
            "py": "Zhège Hànzì yǒu cuòwù.",
            "vi": "Chữ Hán này có lỗi."
          },
          {
            "zh": "昨天的错误经理都知道。",
            "py": "Zuótiān de cuòwù jīnglǐ dōu zhīdào.",
            "vi": "Lỗi hôm qua giám đốc đều biết."
          },
          {
            "zh": "你的汉字有一个错误。",
            "py": "Nǐ de Hànzì yǒu yí ge cuòwù.",
            "vi": "Chữ Hán của bạn có một lỗi."
          },
          {
            "zh": "这是一个小错误。",
            "py": "Zhè shì yí ge xiǎo cuòwù.",
            "vi": "Đây là một lỗi nhỏ."
          },
          {
            "zh": "这个号码有错误。",
            "py": "Zhège hàomǎ yǒu cuòwù.",
            "vi": "Số này có lỗi."
          },
          {
            "zh": "我们要处理这些错误。",
            "py": "Wǒmen yào chǔlǐ zhèxiē cuòwù.",
            "vi": "Chúng ta phải xử lý những lỗi này."
          },
          {
            "zh": "他说的话有一些错误。",
            "py": "Tā shuō de huà yǒu yìxiē cuòwù.",
            "vi": "Lời anh ấy nói có một vài chỗ sai."
          }
        ]
      },
      {
        "zh": "天",
        "py": "tiān",
        "type": "Danh từ/Lượng từ",
        "vi": "ngày",
        "ex": [
          {
            "zh": "一个月有三十天。",
            "py": "Yí ge yuè yǒu sānshí tiān.",
            "vi": "Một tháng có ba mươi ngày."
          },
          {
            "zh": "这几天我在家处理工作。",
            "py": "Zhè jǐ tiān wǒ zài jiā chǔlǐ gōngzuò.",
            "vi": "Mấy ngày nay tôi xử lý công việc ở nhà."
          },
          {
            "zh": "我在河内住了三天。",
            "py": "Wǒ zài Hénèi zhù le sān tiān.",
            "vi": "Tôi đã ở Hà Nội ba ngày."
          },
          {
            "zh": "我要在北京住几天。",
            "py": "Wǒ yào zài Běijīng zhù jǐ tiān.",
            "vi": "Tôi muốn ở Bắc Kinh mấy ngày."
          },
          {
            "zh": "我在学校学习了一天汉语。",
            "py": "Wǒ zài xuéxiào xuéxí le yì tiān Hànyǔ.",
            "vi": "Tôi đã học tiếng Trung ở trường một ngày."
          },
          {
            "zh": "我在北京住了五天。",
            "py": "Wǒ zài Běijīng zhùle wǔ tiān.",
            "vi": "Tôi đã ở Bắc Kinh năm ngày."
          },
          {
            "zh": "这几天很冷。",
            "py": "Zhè jǐ tiān hěn lěng.",
            "vi": "Mấy ngày nay rất lạnh."
          },
          {
            "zh": "一个星期上五天班。",
            "py": "Yí ge xīngqī shàng wǔ tiān bān.",
            "vi": "Một tuần đi làm năm ngày."
          },
          {
            "zh": "我们去旅游三天吧。",
            "py": "Wǒmen qù lǚyóu sān tiān ba.",
            "vi": "Chúng ta đi du lịch ba ngày nhé."
          },
          {
            "zh": "那天我很忙。",
            "py": "Nà tiān wǒ hěn máng.",
            "vi": "Hôm đó tôi rất bận."
          }
        ]
      },
      {
        "zh": "日",
        "py": "rì",
        "type": "Danh từ",
        "vi": "ngày (dùng trong văn viết, = 号)",
        "ex": [
          {
            "zh": "今天是五月十九日。",
            "py": "Jīntiān shì wǔ yuè shíjiǔ rì.",
            "vi": "Hôm nay là ngày 19 tháng 5."
          },
          {
            "zh": "我的生日是七月十二日。",
            "py": "Wǒ de shēngrì shì qī yuè shí'èr rì.",
            "vi": "Sinh nhật của tôi là ngày 12 tháng 7."
          },
          {
            "zh": "四月十日我去北京。",
            "py": "Sì yuè shí rì wǒ qù Běijīng.",
            "vi": "Ngày 10 tháng 4 tôi đi Bắc Kinh."
          },
          {
            "zh": "星期日我不上班。",
            "py": "Xīngqīrì wǒ bú shàngbān.",
            "vi": "Chủ nhật tôi không đi làm."
          },
          {
            "zh": "三十一日是星期几？",
            "py": "Sānshíyī rì shì xīngqī jǐ?",
            "vi": "Ngày 31 là thứ mấy?"
          },
          {
            "zh": "八月十五日是星期几？",
            "py": "Bā yuè shíwǔ rì shì xīngqī jǐ?",
            "vi": "Ngày 15 tháng 8 là thứ mấy?"
          },
          {
            "zh": "今天是六月一日。",
            "py": "Jīntiān shì liù yuè yī rì.",
            "vi": "Hôm nay là ngày 1 tháng 6."
          },
          {
            "zh": "他十月二十日回国。",
            "py": "Tā shí yuè èrshí rì huí guó.",
            "vi": "Anh ấy về nước ngày 20 tháng 10."
          },
          {
            "zh": "我们三月八日开学。",
            "py": "Wǒmen sān yuè bā rì kāixué.",
            "vi": "Chúng tôi khai giảng ngày 8 tháng 3."
          },
          {
            "zh": "五月一日银行不开门。",
            "py": "Wǔ yuè yī rì yínháng bù kāimén.",
            "vi": "Ngày 1 tháng 5 ngân hàng không mở cửa."
          }
        ]
      },
      {
        "zh": "月",
        "py": "yuè",
        "type": "Danh từ",
        "vi": "tháng",
        "ex": [
          {
            "zh": "今天是十月四号。",
            "py": "Jīntiān shì shí yuè sì hào.",
            "vi": "Hôm nay là ngày 4 tháng 10."
          },
          {
            "zh": "你的生日是几月几号？",
            "py": "Nǐ de shēngrì shì jǐ yuè jǐ hào?",
            "vi": "Sinh nhật của bạn là ngày mấy tháng mấy?"
          },
          {
            "zh": "四月二十三号我去旅游。",
            "py": "Sì yuè èrshísān hào wǒ qù lǚyóu.",
            "vi": "Ngày 23 tháng 4 tôi đi du lịch."
          },
          {
            "zh": "这个月我很忙。",
            "py": "Zhège yuè wǒ hěn máng.",
            "vi": "Tháng này tôi rất bận."
          },
          {
            "zh": "十二月十一号是他的生日。",
            "py": "Shí'èr yuè shíyī hào shì tā de shēngrì.",
            "vi": "Ngày 11 tháng 12 là sinh nhật của anh ấy."
          },
          {
            "zh": "一年有十二个月。",
            "py": "Yì nián yǒu shí'èr ge yuè.",
            "vi": "Một năm có mười hai tháng."
          },
          {
            "zh": "下个月我去北京。",
            "py": "Xià ge yuè wǒ qù Běijīng.",
            "vi": "Tháng sau tôi đi Bắc Kinh."
          },
          {
            "zh": "我在中国住了三个月。",
            "py": "Wǒ zài Zhōngguó zhùle sān ge yuè.",
            "vi": "Tôi đã sống ở Trung Quốc ba tháng."
          },
          {
            "zh": "上个月我去了泰国。",
            "py": "Shàng ge yuè wǒ qùle Tàiguó.",
            "vi": "Tháng trước tôi đã đi Thái Lan."
          },
          {
            "zh": "你几月去旅游？",
            "py": "Nǐ jǐ yuè qù lǚyóu?",
            "vi": "Bạn đi du lịch vào tháng mấy?"
          }
        ]
      },
      {
        "zh": "星期日",
        "py": "xīngqīrì",
        "type": "Danh từ",
        "vi": "chủ nhật (= 星期天)",
        "ex": [
          {
            "zh": "星期日你做什么？",
            "py": "Xīngqīrì nǐ zuò shénme?",
            "vi": "Chủ nhật bạn làm gì?"
          },
          {
            "zh": "星期日我在家吃饭。",
            "py": "Xīngqīrì wǒ zài jiā chīfàn.",
            "vi": "Chủ nhật tôi ăn cơm ở nhà."
          },
          {
            "zh": "星期天也叫星期日。",
            "py": "Xīngqītiān yě jiào xīngqīrì.",
            "vi": "星期天 cũng gọi là 星期日."
          },
          {
            "zh": "这个星期日是我的生日。",
            "py": "Zhège xīngqīrì shì wǒ de shēngrì.",
            "vi": "Chủ nhật này là sinh nhật của tôi."
          },
          {
            "zh": "星期日商场的人很多。",
            "py": "Xīngqīrì shāngchǎng de rén hěn duō.",
            "vi": "Chủ nhật trung tâm thương mại rất đông người."
          },
          {
            "zh": "星期日银行开门吗？",
            "py": "Xīngqīrì yínháng kāimén ma?",
            "vi": "Chủ nhật ngân hàng có mở cửa không?"
          },
          {
            "zh": "这个星期日我们去旅游。",
            "py": "Zhège xīngqīrì wǒmen qù lǚyóu.",
            "vi": "Chủ nhật tuần này chúng tôi đi du lịch."
          },
          {
            "zh": "星期日我去看爷爷。",
            "py": "Xīngqīrì wǒ qù kàn yéye.",
            "vi": "Chủ nhật tôi đi thăm ông nội."
          },
          {
            "zh": "星期日是几号？",
            "py": "Xīngqīrì shì jǐ hào?",
            "vi": "Chủ nhật là ngày mấy?"
          },
          {
            "zh": "星期日我不想做饭。",
            "py": "Xīngqīrì wǒ bù xiǎng zuòfàn.",
            "vi": "Chủ nhật tôi không muốn nấu cơm."
          }
        ]
      },
      {
        "zh": "生日",
        "py": "shēngrì",
        "type": "Danh từ",
        "vi": "sinh nhật, ngày sinh",
        "ex": [
          {
            "zh": "今天是我儿子的生日。",
            "py": "Jīntiān shì wǒ érzi de shēngrì.",
            "vi": "Hôm nay là sinh nhật con trai tôi."
          },
          {
            "zh": "我的生日是四月十号。",
            "py": "Wǒ de shēngrì shì sì yuè shí hào.",
            "vi": "Sinh nhật của tôi là ngày 10 tháng 4."
          },
          {
            "zh": "你的生日是哪天？",
            "py": "Nǐ de shēngrì shì nǎ tiān?",
            "vi": "Sinh nhật của bạn là ngày nào?"
          },
          {
            "zh": "他的生日我不知道。",
            "py": "Tā de shēngrì wǒ bù zhīdào.",
            "vi": "Sinh nhật của anh ấy tôi không biết."
          },
          {
            "zh": "星期六是我妈妈的生日。",
            "py": "Xīngqīliù shì wǒ māma de shēngrì.",
            "vi": "Thứ bảy là sinh nhật mẹ tôi."
          },
          {
            "zh": "他的生日是星期几？",
            "py": "Tā de shēngrì shì xīngqī jǐ?",
            "vi": "Sinh nhật anh ấy là thứ mấy?"
          },
          {
            "zh": "生日那天我们去吃饺子。",
            "py": "Shēngrì nà tiān wǒmen qù chī jiǎozi.",
            "vi": "Hôm sinh nhật chúng tôi đi ăn sủi cảo."
          },
          {
            "zh": "我的生日在八月。",
            "py": "Wǒ de shēngrì zài bā yuè.",
            "vi": "Sinh nhật tôi vào tháng Tám."
          },
          {
            "zh": "今天是老师的生日。",
            "py": "Jīntiān shì lǎoshī de shēngrì.",
            "vi": "Hôm nay là sinh nhật của thầy."
          },
          {
            "zh": "你知道她的生日吗？",
            "py": "Nǐ zhīdào tā de shēngrì ma?",
            "vi": "Bạn có biết sinh nhật cô ấy không?"
          }
        ]
      }
    ]
  },
  {
    "lesson": "Buổi 21 (b24): 三餐、量词与「不」的搭配 – Ba bữa ăn, lượng từ & tổ hợp với 不",
    "words": [
      {
        "zh": "早饭",
        "py": "zǎofàn",
        "type": "Danh từ",
        "vi": "bữa sáng, cơm sáng",
        "ex": [
          {
            "zh": "我早上在家吃早饭。",
            "py": "Wǒ zǎoshang zài jiā chī zǎofàn.",
            "vi": "Buổi sáng tôi ăn sáng ở nhà."
          },
          {
            "zh": "你吃早饭了吗？",
            "py": "Nǐ chī zǎofàn le ma?",
            "vi": "Bạn ăn sáng chưa?"
          },
          {
            "zh": "今天的早饭是包子。",
            "py": "Jīntiān de zǎofàn shì bāozi.",
            "vi": "Bữa sáng hôm nay là bánh bao."
          },
          {
            "zh": "我不喜欢吃早饭。",
            "py": "Wǒ bù xǐhuan chī zǎofàn.",
            "vi": "Tôi không thích ăn sáng."
          },
          {
            "zh": "早饭我喝一杯奶茶。",
            "py": "Zǎofàn wǒ hē yì bēi nǎichá.",
            "vi": "Bữa sáng tôi uống một cốc trà sữa."
          },
          {
            "zh": "早饭你想吃什么？",
            "py": "Zǎofàn nǐ xiǎng chī shénme?",
            "vi": "Bữa sáng bạn muốn ăn gì?"
          },
          {
            "zh": "我早饭吃了一碗面条。",
            "py": "Wǒ zǎofàn chīle yì wǎn miàntiáo.",
            "vi": "Bữa sáng tôi ăn một bát mì."
          },
          {
            "zh": "不吃早饭对身体不好。",
            "py": "Bù chī zǎofàn duì shēntǐ bù hǎo.",
            "vi": "Không ăn sáng không tốt cho sức khỏe."
          },
          {
            "zh": "早饭在酒店吃。",
            "py": "Zǎofàn zài jiǔdiàn chī.",
            "vi": "Bữa sáng ăn ở khách sạn."
          },
          {
            "zh": "妈妈给我做了早饭。",
            "py": "Māma gěi wǒ zuòle zǎofàn.",
            "vi": "Mẹ làm bữa sáng cho tôi."
          }
        ]
      },
      {
        "zh": "午饭",
        "py": "wǔfàn",
        "type": "Danh từ",
        "vi": "bữa trưa, cơm trưa",
        "ex": [
          {
            "zh": "中午我在公司吃午饭。",
            "py": "Zhōngwǔ wǒ zài gōngsī chī wǔfàn.",
            "vi": "Buổi trưa tôi ăn trưa ở công ty."
          },
          {
            "zh": "我们的午饭是米饭和汤。",
            "py": "Wǒmen de wǔfàn shì mǐfàn hé tāng.",
            "vi": "Bữa trưa của chúng tôi là cơm và canh."
          },
          {
            "zh": "你午饭吃什么？",
            "py": "Nǐ wǔfàn chī shénme?",
            "vi": "Bữa trưa bạn ăn gì?"
          },
          {
            "zh": "今天的午饭很好吃。",
            "py": "Jīntiān de wǔfàn hěn hǎochī.",
            "vi": "Bữa trưa hôm nay rất ngon."
          },
          {
            "zh": "午饭我吃了两个包子。",
            "py": "Wǔfàn wǒ chī le liǎng ge bāozi.",
            "vi": "Bữa trưa tôi đã ăn hai cái bánh bao."
          },
          {
            "zh": "午饭我们去食堂吃吧。",
            "py": "Wǔfàn wǒmen qù shítáng chī ba.",
            "vi": "Bữa trưa chúng ta đến nhà ăn ăn nhé."
          },
          {
            "zh": "午饭多少钱？",
            "py": "Wǔfàn duōshao qián?",
            "vi": "Bữa trưa bao nhiêu tiền?"
          },
          {
            "zh": "我还没吃午饭。",
            "py": "Wǒ hái méi chī wǔfàn.",
            "vi": "Tôi vẫn chưa ăn trưa."
          },
          {
            "zh": "他午饭只喝了一碗汤。",
            "py": "Tā wǔfàn zhǐ hēle yì wǎn tāng.",
            "vi": "Bữa trưa anh ấy chỉ uống một bát canh."
          },
          {
            "zh": "十二点我们吃午饭。",
            "py": "Shí'èr diǎn wǒmen chī wǔfàn.",
            "vi": "Mười hai giờ chúng ta ăn trưa."
          }
        ]
      },
      {
        "zh": "晚饭",
        "py": "wǎnfàn",
        "type": "Danh từ",
        "vi": "bữa tối, cơm tối",
        "ex": [
          {
            "zh": "晚上我在家做晚饭。",
            "py": "Wǎnshang wǒ zài jiā zuò wǎnfàn.",
            "vi": "Buổi tối tôi nấu cơm tối ở nhà."
          },
          {
            "zh": "你晚饭想吃什么？",
            "py": "Nǐ wǎnfàn xiǎng chī shénme?",
            "vi": "Bữa tối bạn muốn ăn gì?"
          },
          {
            "zh": "今天的晚饭是饺子。",
            "py": "Jīntiān de wǎnfàn shì jiǎozi.",
            "vi": "Bữa tối hôm nay là sủi cảo."
          },
          {
            "zh": "我还没吃晚饭。",
            "py": "Wǒ hái méi chī wǎnfàn.",
            "vi": "Tôi vẫn chưa ăn tối."
          },
          {
            "zh": "晚饭我不太想吃面条。",
            "py": "Wǎnfàn wǒ bú tài xiǎng chī miàntiáo.",
            "vi": "Bữa tối tôi không muốn ăn mì lắm."
          },
          {
            "zh": "晚饭我们吃鸡吧。",
            "py": "Wǎnfàn wǒmen chī jī ba.",
            "vi": "Bữa tối chúng ta ăn gà nhé."
          },
          {
            "zh": "你几点吃晚饭？",
            "py": "Nǐ jǐ diǎn chī wǎnfàn?",
            "vi": "Bạn ăn tối lúc mấy giờ?"
          },
          {
            "zh": "今天的晚饭很好吃。",
            "py": "Jīntiān de wǎnfàn hěn hǎochī.",
            "vi": "Bữa tối hôm nay rất ngon."
          },
          {
            "zh": "我请你吃晚饭。",
            "py": "Wǒ qǐng nǐ chī wǎnfàn.",
            "vi": "Tôi mời bạn ăn tối."
          },
          {
            "zh": "晚饭我在公司吃。",
            "py": "Wǎnfàn wǒ zài gōngsī chī.",
            "vi": "Bữa tối tôi ăn ở công ty."
          }
        ]
      },
      {
        "zh": "中文",
        "py": "zhōngwén",
        "type": "Danh từ",
        "vi": "tiếng Trung, Trung văn",
        "ex": [
          {
            "zh": "我有一本中文词典。",
            "py": "Wǒ yǒu yì běn Zhōngwén cídiǎn.",
            "vi": "Tôi có một quyển từ điển tiếng Trung."
          },
          {
            "zh": "这本中文书很有意思。",
            "py": "Zhè běn Zhōngwén shū hěn yǒu yìsi.",
            "vi": "Quyển sách tiếng Trung này rất thú vị."
          },
          {
            "zh": "他的中文很不错。",
            "py": "Tā de Zhōngwén hěn búcuò.",
            "vi": "Tiếng Trung của anh ấy khá tốt."
          },
          {
            "zh": "我在学校学中文。",
            "py": "Wǒ zài xuéxiào xué Zhōngwén.",
            "vi": "Tôi học tiếng Trung ở trường."
          },
          {
            "zh": "那本中文杂志是谁的？",
            "py": "Nà běn Zhōngwén zázhì shì shéi de?",
            "vi": "Quyển tạp chí tiếng Trung kia là của ai?"
          },
          {
            "zh": "你的中文很好！",
            "py": "Nǐ de Zhōngwén hěn hǎo!",
            "vi": "Tiếng Trung của bạn rất tốt!"
          },
          {
            "zh": "我想学中文。",
            "py": "Wǒ xiǎng xué Zhōngwén.",
            "vi": "Tôi muốn học tiếng Trung."
          },
          {
            "zh": "这本书是中文的。",
            "py": "Zhè běn shū shì Zhōngwén de.",
            "vi": "Quyển sách này là tiếng Trung."
          },
          {
            "zh": "你说中文吗？",
            "py": "Nǐ shuō Zhōngwén ma?",
            "vi": "Bạn có nói tiếng Trung không?"
          },
          {
            "zh": "中文名字很有意思。",
            "py": "Zhōngwén míngzi hěn yǒu yìsi.",
            "vi": "Tên tiếng Trung rất thú vị."
          }
        ]
      },
      {
        "zh": "吃药",
        "py": "chī yào",
        "type": "Động từ",
        "vi": "uống thuốc",
        "ex": [
          {
            "zh": "你生病了，要吃药。",
            "py": "Nǐ shēngbìng le, yào chī yào.",
            "vi": "Bạn ốm rồi, phải uống thuốc."
          },
          {
            "zh": "他不喜欢吃药。",
            "py": "Tā bù xǐhuan chī yào.",
            "vi": "Anh ấy không thích uống thuốc."
          },
          {
            "zh": "医生说我要吃药。",
            "py": "Yīshēng shuō wǒ yào chī yào.",
            "vi": "Bác sĩ nói tôi phải uống thuốc."
          },
          {
            "zh": "你今天吃药了吗？",
            "py": "Nǐ jīntiān chī yào le ma?",
            "vi": "Hôm nay bạn uống thuốc chưa?"
          },
          {
            "zh": "吃药要用白水。",
            "py": "Chī yào yào yòng báishuǐ.",
            "vi": "Uống thuốc phải dùng nước lọc."
          },
          {
            "zh": "吃药了吗？",
            "py": "Chī yào le ma?",
            "vi": "Uống thuốc chưa?"
          },
          {
            "zh": "孩子不想吃药。",
            "py": "Háizi bù xiǎng chī yào.",
            "vi": "Đứa bé không muốn uống thuốc."
          },
          {
            "zh": "吃了饭再吃药。",
            "py": "Chīle fàn zài chī yào.",
            "vi": "Ăn cơm xong rồi mới uống thuốc."
          },
          {
            "zh": "我不想吃药，想喝茶。",
            "py": "Wǒ bù xiǎng chī yào, xiǎng hē chá.",
            "vi": "Tôi không muốn uống thuốc, muốn uống trà."
          },
          {
            "zh": "吃药不要喝酒。",
            "py": "Chī yào búyào hē jiǔ.",
            "vi": "Uống thuốc thì đừng uống rượu."
          }
        ]
      },
      {
        "zh": "不要",
        "py": "búyào",
        "type": "Phó từ",
        "vi": "đừng, không được",
        "ex": [
          {
            "zh": "不要吃中药。",
            "py": "Búyào chī zhōngyào.",
            "vi": "Đừng uống thuốc bắc."
          },
          {
            "zh": "不要在这儿吃饭。",
            "py": "Búyào zài zhèr chīfàn.",
            "vi": "Đừng ăn cơm ở đây."
          },
          {
            "zh": "不要买这个，太贵了。",
            "py": "Búyào mǎi zhège, tài guì le.",
            "vi": "Đừng mua cái này, đắt quá."
          },
          {
            "zh": "你不要去商场了。",
            "py": "Nǐ búyào qù shāngchǎng le.",
            "vi": "Bạn đừng đi trung tâm thương mại nữa."
          },
          {
            "zh": "不要用我的词典。",
            "py": "Búyào yòng wǒ de cídiǎn.",
            "vi": "Đừng dùng từ điển của tôi."
          },
          {
            "zh": "不要说英语，说汉语。",
            "py": "Búyào shuō Yīngyǔ, shuō Hànyǔ.",
            "vi": "Đừng nói tiếng Anh, nói tiếng Trung."
          },
          {
            "zh": "不要喝太多咖啡。",
            "py": "Búyào hē tài duō kāfēi.",
            "vi": "Đừng uống quá nhiều cà phê."
          },
          {
            "zh": "你不要等我了。",
            "py": "Nǐ búyào děng wǒ le.",
            "vi": "Bạn đừng đợi tôi nữa."
          },
          {
            "zh": "不要在房间里吃东西。",
            "py": "Búyào zài fángjiān lǐ chī dōngxi.",
            "vi": "Đừng ăn đồ trong phòng."
          },
          {
            "zh": "我不要这个，要那个。",
            "py": "Wǒ bú yào zhège, yào nàge.",
            "vi": "Tôi không muốn cái này, muốn cái kia."
          }
        ]
      },
      {
        "zh": "错",
        "py": "cuò",
        "type": "Tính từ",
        "vi": "sai, nhầm",
        "ex": [
          {
            "zh": "这个汉字写错了。",
            "py": "Zhège Hànzì xiě cuò le.",
            "vi": "Chữ Hán này viết sai rồi."
          },
          {
            "zh": "你说错了。",
            "py": "Nǐ shuō cuò le.",
            "vi": "Bạn nói sai rồi."
          },
          {
            "zh": "这个号码错了。",
            "py": "Zhège hàomǎ cuò le.",
            "vi": "Số này sai rồi."
          },
          {
            "zh": "他做错了什么？",
            "py": "Tā zuò cuò le shénme?",
            "vi": "Anh ấy đã làm sai điều gì?"
          },
          {
            "zh": "老师说我没错。",
            "py": "Lǎoshī shuō wǒ méi cuò.",
            "vi": "Thầy giáo nói tôi không sai."
          },
          {
            "zh": "你的名字我写错了。",
            "py": "Nǐ de míngzi wǒ xiě cuò le.",
            "vi": "Tên của bạn tôi viết sai rồi."
          },
          {
            "zh": "我买错了。",
            "py": "Wǒ mǎi cuò le.",
            "vi": "Tôi mua nhầm rồi."
          },
          {
            "zh": "你没有错。",
            "py": "Nǐ méiyǒu cuò.",
            "vi": "Bạn không có lỗi."
          },
          {
            "zh": "他坐错地铁了。",
            "py": "Tā zuò cuò dìtiě le.",
            "vi": "Anh ấy đi nhầm tàu điện ngầm rồi."
          },
          {
            "zh": "我数错了。",
            "py": "Wǒ shǔ cuò le.",
            "vi": "Tôi đếm sai rồi."
          }
        ]
      },
      {
        "zh": "不错",
        "py": "búcuò",
        "type": "Tính từ",
        "vi": "khá tốt, không tồi",
        "ex": [
          {
            "zh": "他的工作不错。",
            "py": "Tā de gōngzuò búcuò.",
            "vi": "Công việc của anh ấy khá tốt."
          },
          {
            "zh": "这个商场不错。",
            "py": "Zhège shāngchǎng búcuò.",
            "vi": "Trung tâm thương mại này khá tốt."
          },
          {
            "zh": "这杯咖啡很不错。",
            "py": "Zhè bēi kāfēi hěn búcuò.",
            "vi": "Cốc cà phê này rất ngon."
          },
          {
            "zh": "你的汉语不错。",
            "py": "Nǐ de Hànyǔ búcuò.",
            "vi": "Tiếng Trung của bạn khá đấy."
          },
          {
            "zh": "这本词典不错，不太贵。",
            "py": "Zhè běn cídiǎn búcuò, bú tài guì.",
            "vi": "Quyển từ điển này khá tốt, không đắt lắm."
          },
          {
            "zh": "这家酒店不错。",
            "py": "Zhè jiā jiǔdiàn búcuò.",
            "vi": "Khách sạn này khá tốt."
          },
          {
            "zh": "你的发音不错。",
            "py": "Nǐ de fāyīn búcuò.",
            "vi": "Phát âm của bạn khá tốt."
          },
          {
            "zh": "这件衣服不错，我要了。",
            "py": "Zhè jiàn yīfu búcuò, wǒ yào le.",
            "vi": "Bộ quần áo này không tệ, tôi lấy."
          },
          {
            "zh": "这儿的面条很不错。",
            "py": "Zhèr de miàntiáo hěn búcuò.",
            "vi": "Mì ở đây rất ngon."
          },
          {
            "zh": "新经理不错。",
            "py": "Xīn jīnglǐ búcuò.",
            "vi": "Giám đốc mới khá tốt."
          }
        ]
      },
      {
        "zh": "用",
        "py": "yòng",
        "type": "Động từ",
        "vi": "dùng, sử dụng",
        "ex": [
          {
            "zh": "我用筷子吃饭。",
            "py": "Wǒ yòng kuàizi chīfàn.",
            "vi": "Tôi dùng đũa để ăn cơm."
          },
          {
            "zh": "这个词典我想用一下儿。",
            "py": "Zhège cídiǎn wǒ xiǎng yòng yíxiàr.",
            "vi": "Quyển từ điển này tôi muốn dùng một chút."
          },
          {
            "zh": "你用什么写汉字？",
            "py": "Nǐ yòng shénme xiě Hànzì?",
            "vi": "Bạn dùng gì để viết chữ Hán?"
          },
          {
            "zh": "这支笔你用吗？",
            "py": "Zhè zhī bǐ nǐ yòng ma?",
            "vi": "Cây bút này bạn có dùng không?"
          },
          {
            "zh": "他用中文写信。",
            "py": "Tā yòng Zhōngwén xiě xìn.",
            "vi": "Anh ấy dùng tiếng Trung viết thư."
          },
          {
            "zh": "你用什么手机？",
            "py": "Nǐ yòng shénme shǒujī?",
            "vi": "Bạn dùng điện thoại gì?"
          },
          {
            "zh": "我用一下儿你的笔。",
            "py": "Wǒ yòng yíxiàr nǐ de bǐ.",
            "vi": "Tôi dùng bút của bạn một chút."
          },
          {
            "zh": "越南人也用筷子吃饭。",
            "py": "Yuènán rén yě yòng kuàizi chīfàn.",
            "vi": "Người Việt Nam cũng dùng đũa ăn cơm."
          },
          {
            "zh": "他用英语跟经理说。",
            "py": "Tā yòng Yīngyǔ gēn jīnglǐ shuō.",
            "vi": "Anh ấy dùng tiếng Anh nói với giám đốc."
          },
          {
            "zh": "这个词典很好用。",
            "py": "Zhège cídiǎn hěn hǎoyòng.",
            "vi": "Quyển từ điển này rất dễ dùng."
          }
        ]
      },
      {
        "zh": "不用",
        "py": "búyòng",
        "type": "Phó từ",
        "vi": "không cần",
        "ex": [
          {
            "zh": "不用谢。",
            "py": "Búyòng xiè.",
            "vi": "Không cần cảm ơn."
          },
          {
            "zh": "这个错误不用处理。",
            "py": "Zhège cuòwù búyòng chǔlǐ.",
            "vi": "Lỗi này không cần xử lý."
          },
          {
            "zh": "你不用去商场，我去。",
            "py": "Nǐ búyòng qù shāngchǎng, wǒ qù.",
            "vi": "Bạn không cần đi trung tâm thương mại, tôi đi."
          },
          {
            "zh": "不用买东西了。",
            "py": "Búyòng mǎi dōngxi le.",
            "vi": "Không cần mua đồ nữa."
          },
          {
            "zh": "今天不用上班。",
            "py": "Jīntiān búyòng shàngbān.",
            "vi": "Hôm nay không cần đi làm."
          },
          {
            "zh": "不用客气。",
            "py": "Búyòng kèqi.",
            "vi": "Không cần khách sáo."
          },
          {
            "zh": "你不用等我。",
            "py": "Nǐ búyòng děng wǒ.",
            "vi": "Bạn không cần đợi tôi."
          },
          {
            "zh": "不用买雨伞，我有。",
            "py": "Búyòng mǎi yǔsǎn, wǒ yǒu.",
            "vi": "Không cần mua ô, tôi có rồi."
          },
          {
            "zh": "不用去医院，我好了。",
            "py": "Búyòng qù yīyuàn, wǒ hǎo le.",
            "vi": "Không cần đi bệnh viện, tôi khỏe rồi."
          },
          {
            "zh": "你不用给我钱。",
            "py": "Nǐ búyòng gěi wǒ qián.",
            "vi": "Bạn không cần đưa tiền cho tôi."
          }
        ]
      },
      {
        "zh": "双",
        "py": "shuāng",
        "type": "Lượng từ",
        "vi": "đôi (dùng cho vật có cặp)",
        "ex": [
          {
            "zh": "我要一双筷子。",
            "py": "Wǒ yào yì shuāng kuàizi.",
            "vi": "Tôi muốn một đôi đũa."
          },
          {
            "zh": "这双筷子是新的。",
            "py": "Zhè shuāng kuàizi shì xīn de.",
            "vi": "Đôi đũa này là đồ mới."
          },
          {
            "zh": "请给我两双筷子。",
            "py": "Qǐng gěi wǒ liǎng shuāng kuàizi.",
            "vi": "Xin đưa cho tôi hai đôi đũa."
          },
          {
            "zh": "这双筷子多少钱？",
            "py": "Zhè shuāng kuàizi duōshao qián?",
            "vi": "Đôi đũa này bao nhiêu tiền?"
          },
          {
            "zh": "家里只有一双筷子。",
            "py": "Jiā li zhǐ yǒu yì shuāng kuàizi.",
            "vi": "Trong nhà chỉ có một đôi đũa."
          },
          {
            "zh": "我买了三双筷子。",
            "py": "Wǒ mǎile sān shuāng kuàizi.",
            "vi": "Tôi đã mua ba đôi đũa."
          },
          {
            "zh": "这双筷子是谁的？",
            "py": "Zhè shuāng kuàizi shì shéi de?",
            "vi": "Đôi đũa này là của ai?"
          },
          {
            "zh": "请再给我一双筷子。",
            "py": "Qǐng zài gěi wǒ yì shuāng kuàizi.",
            "vi": "Làm ơn cho tôi thêm một đôi đũa."
          },
          {
            "zh": "我们家有十双筷子。",
            "py": "Wǒmen jiā yǒu shí shuāng kuàizi.",
            "vi": "Nhà chúng tôi có mười đôi đũa."
          },
          {
            "zh": "你要几双筷子？",
            "py": "Nǐ yào jǐ shuāng kuàizi?",
            "vi": "Bạn muốn mấy đôi đũa?"
          }
        ]
      },
      {
        "zh": "筷子",
        "py": "kuàizi",
        "type": "Danh từ",
        "vi": "đũa",
        "ex": [
          {
            "zh": "中国人用筷子吃饭。",
            "py": "Zhōngguó rén yòng kuàizi chīfàn.",
            "vi": "Người Trung Quốc dùng đũa ăn cơm."
          },
          {
            "zh": "这是谁的筷子？",
            "py": "Zhè shì shéi de kuàizi?",
            "vi": "Đây là đũa của ai?"
          },
          {
            "zh": "两根筷子是一双。",
            "py": "Liǎng gēn kuàizi shì yì shuāng.",
            "vi": "Hai chiếc đũa là một đôi."
          },
          {
            "zh": "我没有筷子。",
            "py": "Wǒ méiyǒu kuàizi.",
            "vi": "Tôi không có đũa."
          },
          {
            "zh": "这双筷子很好看。",
            "py": "Zhè shuāng kuàizi hěn hǎokàn.",
            "vi": "Đôi đũa này rất đẹp."
          },
          {
            "zh": "你用筷子吃饭吗？",
            "py": "Nǐ yòng kuàizi chīfàn ma?",
            "vi": "Bạn có dùng đũa ăn cơm không?"
          },
          {
            "zh": "筷子在哪儿？",
            "py": "Kuàizi zài nǎr?",
            "vi": "Đũa ở đâu?"
          },
          {
            "zh": "这是新筷子。",
            "py": "Zhè shì xīn kuàizi.",
            "vi": "Đây là đũa mới."
          },
          {
            "zh": "用筷子吃面条很容易。",
            "py": "Yòng kuàizi chī miàntiáo hěn róngyì.",
            "vi": "Dùng đũa ăn mì rất dễ."
          },
          {
            "zh": "我的筷子是红色的。",
            "py": "Wǒ de kuàizi shì hóngsè de.",
            "vi": "Đũa của tôi màu đỏ."
          }
        ]
      },
      {
        "zh": "根",
        "py": "gēn",
        "type": "Lượng từ",
        "vi": "chiếc, cái (vật dài và nhỏ)",
        "ex": [
          {
            "zh": "我要两根筷子。",
            "py": "Wǒ yào liǎng gēn kuàizi.",
            "vi": "Tôi muốn hai chiếc đũa."
          },
          {
            "zh": "这根筷子是红色的。",
            "py": "Zhè gēn kuàizi shì hóngsè de.",
            "vi": "Chiếc đũa này màu đỏ."
          },
          {
            "zh": "一双筷子有两根。",
            "py": "Yì shuāng kuàizi yǒu liǎng gēn.",
            "vi": "Một đôi đũa có hai chiếc."
          },
          {
            "zh": "那根筷子不太好。",
            "py": "Nà gēn kuàizi bú tài hǎo.",
            "vi": "Chiếc đũa kia không tốt lắm."
          },
          {
            "zh": "我买了几根筷子。",
            "py": "Wǒ mǎi le jǐ gēn kuàizi.",
            "vi": "Tôi đã mua mấy chiếc đũa."
          },
          {
            "zh": "我只有一根筷子。",
            "py": "Wǒ zhǐ yǒu yì gēn kuàizi.",
            "vi": "Tôi chỉ có một chiếc đũa."
          },
          {
            "zh": "请给我一根香蕉。",
            "py": "Qǐng gěi wǒ yì gēn xiāngjiāo.",
            "vi": "Làm ơn cho tôi một quả chuối."
          },
          {
            "zh": "他吃了两根香蕉。",
            "py": "Tā chīle liǎng gēn xiāngjiāo.",
            "vi": "Anh ấy đã ăn hai quả chuối."
          },
          {
            "zh": "那根筷子是谁的？",
            "py": "Nà gēn kuàizi shì shéi de?",
            "vi": "Chiếc đũa kia là của ai?"
          },
          {
            "zh": "你要几根香蕉？",
            "py": "Nǐ yào jǐ gēn xiāngjiāo?",
            "vi": "Bạn muốn mấy quả chuối?"
          }
        ]
      },
      {
        "zh": "工程师",
        "py": "gōngchéngshī",
        "type": "Danh từ",
        "vi": "kỹ sư",
        "ex": [
          {
            "zh": "我是工程师。",
            "py": "Wǒ shì gōngchéngshī.",
            "vi": "Tôi là kỹ sư."
          },
          {
            "zh": "我们公司有很多工程师。",
            "py": "Wǒmen gōngsī yǒu hěn duō gōngchéngshī.",
            "vi": "Công ty chúng tôi có rất nhiều kỹ sư."
          },
          {
            "zh": "他是我们经理，也是工程师。",
            "py": "Tā shì wǒmen jīnglǐ, yě shì gōngchéngshī.",
            "vi": "Anh ấy là giám đốc của chúng tôi, cũng là kỹ sư."
          },
          {
            "zh": "这位工程师的中文很好。",
            "py": "Zhè wèi gōngchéngshī de Zhōngwén hěn hǎo.",
            "vi": "Vị kỹ sư này tiếng Trung rất tốt."
          },
          {
            "zh": "工程师的工作很忙。",
            "py": "Gōngchéngshī de gōngzuò hěn máng.",
            "vi": "Công việc của kỹ sư rất bận."
          },
          {
            "zh": "他是一个很好的工程师。",
            "py": "Tā shì yí ge hěn hǎo de gōngchéngshī.",
            "vi": "Anh ấy là một kỹ sư rất giỏi."
          },
          {
            "zh": "我哥哥是外国公司的工程师。",
            "py": "Wǒ gēge shì wàiguó gōngsī de gōngchéngshī.",
            "vi": "Anh tôi là kỹ sư của công ty nước ngoài."
          },
          {
            "zh": "工程师今天不在办公室。",
            "py": "Gōngchéngshī jīntiān bú zài bàngōngshì.",
            "vi": "Hôm nay kỹ sư không có ở văn phòng."
          },
          {
            "zh": "那位工程师是日本人。",
            "py": "Nà wèi gōngchéngshī shì Rìběn rén.",
            "vi": "Vị kỹ sư kia là người Nhật."
          },
          {
            "zh": "工程师也要学英语。",
            "py": "Gōngchéngshī yě yào xué Yīngyǔ.",
            "vi": "Kỹ sư cũng phải học tiếng Anh."
          }
        ]
      }
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
  }  ,
  {
    lesson:'B\xe0i 11: 我们都是留学生 – Ch\xfang ta đều l\xe0 lưu học sinh', title:'Giới thiệu gi\xe1o sư – 介绍教授', lessonIdx:10,
    lines:[
      {s:'B',zh:'我先介绍一下儿，这位是王教授。这是马校长。',py:'Wǒ xiān ji\xe8sh\xe0o y\xedxi\xe0r, zh\xe8 w\xe8i sh\xec W\xe1ng ji\xe0osh\xf2u. Zh\xe8 sh\xec Mǎ xi\xe0ozhǎ ng.',vi:'T\xf4i xin giới thiệu, đ\xe2y l\xe0 gi\xe1o sư Vương. Đ\xe2y l\xe0 hiệu trưởng Mǎ.'},
      {s:'A',zh:'欢迎您，王教授。',py:'Huāny\xedng n\xedn, W\xe1ng ji\xe0osh\xf2u.',vi:'Hoan ngh\xeanh ng\xe0i, gi\xe1o sư Vương.'},
      {s:'B',zh:'谢谢！',py:'Xi\xe8xie!',vi:'Cảm ơn!'},
    ]
  },
  {
    lesson:'B\xe0i 11: 我们都是留学生 – Ch\xfang ta đều l\xe0 lưu học sinh', title:'Ch\xfang ta đều l\xe0 lưu học sinh – 我们都是留学生', lessonIdx:10,
    lines:[
      {s:'A',zh:'你是留学生吗？',py:'Nǐ sh\xec li\xfaxi\xe9shēng ma?',vi:'Bạn c\xf3 phải l\xe0 lưu học sinh kh\xf4ng?'},
      {s:'B',zh:'是。',py:'Sh\xec.',vi:'Phải.'},
      {s:'A',zh:'她也是留学生吗？',py:'Tā yě sh\xec li\xfaxi\xe9shēng ma?',vi:'C\xf4 ấy cũng l\xe0 lưu học sinh \xe0?'},
      {s:'B',zh:'她也是留学生。我们都是留学生。',py:'Tā yě sh\xec li\xfaxi\xe9shēng. Wǒmen dōu sh\xec li\xfaxi\xe9shēng.',vi:'C\xf4 ấy cũng l\xe0 lưu học sinh. Ch\xfang ta đều l\xe0 lưu học sinh.'},
      {s:'A',zh:'他们俩也都是留学生吗？',py:'Tāmen liǎ yě dōu sh\xec li\xfaxi\xe9shēng ma?',vi:'Cả hai họ cũng đều l\xe0 lưu học sinh \xe0?'},
      {s:'B',zh:'不，他们俩不是留学生。他们都是中国学生。',py:'B\xf9, tāmen liǎ b\xfa sh\xec li\xfaxi\xe9shēng. Tāmen dōu sh\xec Zhōnggu\xf3 xu\xe9shēng.',vi:'Kh\xf4ng, cả hai họ kh\xf4ng phải lưu học sinh. Họ đều l\xe0 học sinh Trung Quốc.'},
    ]
  },
  {
    lesson:'B\xe0i 11: 我们都是留学生 – Ch\xfang ta đều l\xe0 lưu học sinh', title:'Bạn cũng l\xe0 người Trung Quốc \xe0? – 你也是中国人吗', lessonIdx:10,
    lines:[
      {s:'A',zh:'他是中国人吗？',py:'Tā sh\xec Zhōnggu\xf3 r\xe9n ma?',vi:'Ông ấy l\xe0 người Trung Quốc \xe0?'},
      {s:'B',zh:'是。',py:'Sh\xec.',vi:'Phải.'},
      {s:'A',zh:'你也是中国人吗？',py:'Nǐ yě sh\xec Zhōnggu\xf3 r\xe9n ma?',vi:'Bạn cũng l\xe0 người Trung Quốc \xe0?'},
      {s:'B',zh:'不是。我是韩国人。',py:'B\xfa sh\xec. Wǒ sh\xec H\xe1ngu\xf3 r\xe9n.',vi:'Kh\xf4ng phải. T\xf4i l\xe0 người H\xe0n Quốc.'},
      {s:'A',zh:'对不起。',py:'Du\xedb\xf9qǐ.',vi:'Xin lỗi.'},
      {s:'B',zh:'没什么。',py:'M\xe9i sh\xe9nme.',vi:'Kh\xf4ng c\xf3 g\xec.'},
    ]
  },

  // ── Bài 12 ──────────────────────────────────────────────────────────────
  {
    lessonIdx: 11,
    title: 'Bài 12 – 第十二课',
    dialogues: [
      {
        title: '（一）你在哪儿学习汉语',
        lines: [
          {zh:'你在哪儿学习汉语？',   py:'Nǐ zài nǎr xuéxí Hànyǔ?',   vi:'Bạn học tiếng Trung ở đâu?',      speaker:'A'},
          {zh:'在北京语言大学。',     py:'Zài Běijīng Yǔyán Dàxué.',   vi:'Ở Đại học Ngôn ngữ Bắc Kinh.',    speaker:'B'},
          {zh:'你们的老师怎么样？',   py:'Nǐmen de lǎoshī zěnmeyàng?', vi:'Thầy/cô của các bạn thế nào?',    speaker:'A'},
          {zh:'很好！',              py:'Hěn hǎo!',                    vi:'Rất tốt!',                         speaker:'B'},
          {zh:'你觉得学习汉语难吗？', py:'Nǐ juéde xuéxí Hànyǔ nán ma?',vi:'Bạn thấy học tiếng Trung khó không?',speaker:'A'},
          {zh:'我觉得语法不太难。听和说也比较容易，但是读和写很难。',
              py:'Wǒ juéde yǔfǎ bú tài nán. Tīng hé shuō yě bǐjiào róngyì, dànshì dú hé xiě hěn nán.',
              vi:'Tôi thấy ngữ pháp không quá khó. Nghe và nói cũng tương đối dễ, nhưng đọc và viết rất khó.',speaker:'B'},
        ]
      },
      {
        title: '（二）你们的老师是谁',
        lines: [
          {zh:'我给你们介绍一下儿，这位是新同学，是我的同屋。',
              py:'Wǒ gěi nǐmen jièshào yíxiàr, zhè wèi shì xīn tóngxué, shì wǒ de tóngwū.',
              vi:'Để tôi giới thiệu một chút, đây là bạn học mới, là bạn cùng phòng của tôi.',speaker:'A'},
          {zh:'你在哪个班学习？', py:'Nǐ zài nǎ ge bān xuéxí?', vi:'Bạn học ở lớp nào?',             speaker:'B'},
          {zh:'在103班。',        py:'Zài yāo líng sān bān.',   vi:'Ở lớp 103.',                       speaker:'A'},
          {zh:'你们的老师是谁？', py:'Nǐmen de lǎoshī shì shéi?',vi:'Thầy/cô của các bạn là ai?',      speaker:'B'},
          {zh:'我们的老师是林老师。',py:'Wǒmen de lǎoshī shì Lín lǎoshī.',vi:'Thầy/cô của chúng tôi là thầy/cô Lâm.',speaker:'A'},
        ]
      },
    ]
  },
  {
    lesson: 'Bài 13: 这是不是中药 – Đây có phải là thuốc đông y không?', title: '在机场 – Ở sân bay', lessonIdx: 12,
    lines: [
      {s:'A',zh:'你没有箱子吗？',py:'Nǐ méiyǒu xiāngzi ma?',vi:'Bạn không có vali à?'},
      {s:'B',zh:'有啊。我的在这儿呢。',py:'Yǒu a. Wǒ de zài zhèr ne.',vi:'Có chứ. Của tôi ở đây này.'},
      {s:'A',zh:'我的很重，你的重不重？',py:'Wǒ de hěn zhòng, nǐ de zhòng bu zhòng?',vi:'Của tôi rất nặng, của bạn có nặng không?'},
      {s:'B',zh:'这个黑的很重，那个红的比较轻。',py:'Zhège hēi de hěn zhòng, nàge hóng de bǐjiào qīng.',vi:'Cái màu đen này rất nặng, cái màu đỏ kia nhẹ hơn.'},
      {s:'A',zh:'你的箱子很新，我的很旧。',py:'Nǐ de xiāngzi hěn xīn, wǒ de hěn jiù.',vi:'Vali của bạn rất mới, của tôi thì cũ rồi.'},
      {s:'B',zh:'那个新的是朋友的，这个旧的是我的。',py:'Nàge xīn de shì péngyou de, zhège jiù de shì wǒ de.',vi:'Cái mới kia là của bạn tôi, cái cũ này là của tôi.'},
    ]
  },
  {
    lesson: 'Bài 13: 这是不是中药 – Đây có phải là thuốc đông y không?', title: '在海关 – Ở hải quan', lessonIdx: 12,
    lines: [
      {s:'A',zh:'先生，这些黑的是什么东西？',py:'Xiānsheng, zhèxiē hēi de shì shénme dōngxi?',vi:'Thưa ông, những cái màu đen này là thứ gì vậy?'},
      {s:'B',zh:'这是一些药。',py:'Zhè shì yìxiē yào.',vi:'Đây là một ít thuốc.'},
      {s:'A',zh:'什么药？',py:'Shénme yào?',vi:'Thuốc gì vậy?'},
      {s:'B',zh:'中药。',py:'Zhōngyào.',vi:'Thuốc bắc (đông y).'},
      {s:'A',zh:'这是不是药？',py:'Zhè shì bu shì yào?',vi:'Đây có phải là thuốc không?'},
      {s:'B',zh:'这不是药，这是茶叶。',py:'Zhè bú shì yào, zhè shì cháyè.',vi:'Đây không phải thuốc, đây là lá chè.'},
      {s:'A',zh:'那个箱子里是什么？',py:'Nàge xiāngzi lǐ shì shénme?',vi:'Trong vali kia là gì?'},
      {s:'B',zh:'都是日用品。有两件衣服，一把雨伞和一瓶香水，还有一本书，一本词典，两张光盘和三支笔。',py:'Dōu shì rìyòngpǐn. Yǒu liǎng jiàn yīfu, yì bǎ yǔsǎn hé yì píng xiāngshuǐ, hái yǒu yì běn shū, yì běn cídiǎn, liǎng zhāng guāngpán hé sān zhī bǐ.',vi:'Đều là đồ dùng hàng ngày. Có hai bộ quần áo, một cái ô và một chai nước hoa, còn có một quyển sách, một quyển từ điển, hai đĩa CD và ba cây bút.'},
    ]
  },
  {
    lesson:'Buổi 18 (b20): 最近怎么样？', title:'您身体好吗 – Sức khoẻ ngài thế nào? (第十四课 课文一)', lessonIdx:17,
    lines:[
      {s:'A',zh:'王老师，好久不见了。',py:'Wáng lǎoshī, hǎojiǔ bú jiàn le.',vi:'Thầy Vương, lâu rồi không gặp.'},
      {s:'B',zh:'啊！关经理，欢迎，欢迎！',py:'À! Guān jīnglǐ, huānyíng, huānyíng!',vi:'A! Giám đốc Quan, hoan nghênh, hoan nghênh!'},
      {s:'A',zh:'您身体好吗？',py:'Nín shēntǐ hǎo ma?',vi:'Sức khoẻ ngài có tốt không?'},
      {s:'B',zh:'很好。您身体怎么样？',py:'Hěn hǎo. Nín shēntǐ zěnmeyàng?',vi:'Rất tốt. Sức khoẻ ngài thế nào?'},
      {s:'A',zh:'马马虎虎。',py:'Mǎmahūhū.',vi:'Cũng tàm tạm.'},
      {s:'B',zh:'最近工作忙不忙？',py:'Zuìjìn gōngzuò máng bu máng?',vi:'Gần đây công việc có bận không?'},
      {s:'A',zh:'不太忙，您呢？',py:'Bú tài máng, nín ne?',vi:'Không bận lắm, còn ngài?'},
      {s:'B',zh:'刚开学，有点儿忙。喝点儿什么？茶还是咖啡？',py:'Gāng kāixué, yǒu diǎnr máng. Hē diǎnr shénme? Chá háishi kāfēi?',vi:'Vừa khai giảng nên hơi bận. Uống chút gì nhé? Trà hay cà phê?'},
      {s:'A',zh:'喝杯茶吧。',py:'Hē bēi chá ba.',vi:'Uống cốc trà vậy.'},
    ]
  },
  {
    lesson:'Buổi 18 (b20): 最近怎么样？', title:'你的自行车是新的还是旧的 – Xe đạp của bạn mới hay cũ? (第十四课 课文二)', lessonIdx:17,
    lines:[
      {s:'A',zh:'我的车呢？',py:'Wǒ de chē ne?',vi:'Xe của tôi đâu rồi?'},
      {s:'B',zh:'你的车是什么颜色的？',py:'Nǐ de chē shì shénme yánsè de?',vi:'Xe của bạn màu gì?'},
      {s:'A',zh:'蓝的。',py:'Lán de.',vi:'Màu xanh lam.'},
      {s:'B',zh:'是新的还是旧的？',py:'Shì xīn de háishi jiù de?',vi:'Mới hay cũ?'},
      {s:'A',zh:'新的。',py:'Xīn de.',vi:'Mới.'},
      {s:'B',zh:'那辆蓝的是不是你的？',py:'Nà liàng lán de shì bu shì nǐ de?',vi:'Chiếc màu xanh kia có phải của bạn không?'},
      {s:'A',zh:'哪辆？',py:'Nǎ liàng?',vi:'Chiếc nào?'},
      {s:'B',zh:'那辆。',py:'Nà liàng.',vi:'Chiếc kia.'},
      {s:'A',zh:'不是……啊，我的车在那儿呢。',py:'Bú shì…… À, wǒ de chē zài nàr ne.',vi:'Không phải… À, xe của tôi ở đằng kia.'},
    ]
  },
  {
    lesson:'Buổi 19 (b21): 全家、看病与外贸', title:'你家有几口人 – Nhà bạn có mấy người? (第十五课 课文一)', lessonIdx:18,
    lines:[
      {s:'A',zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vi:'Nhà bạn có mấy người?'},
      {s:'B',zh:'我家有五口人，爸爸、妈妈、哥哥、姐姐和我。',py:'Wǒ jiā yǒu wǔ kǒu rén, bàba, māma, gēge, jiějie hé wǒ.',vi:'Nhà tôi có năm người: bố, mẹ, anh trai, chị gái và tôi.'},
      {s:'A',zh:'你有没有全家的照片？',py:'Nǐ yǒu méiyǒu quán jiā de zhàopiàn?',vi:'Bạn có ảnh cả nhà không?'},
      {s:'B',zh:'有一张。你看，这是我们全家的照片。你有哥哥姐姐吗？',py:'Yǒu yì zhāng. Nǐ kàn, zhè shì wǒmen quán jiā de zhàopiàn. Nǐ yǒu gēge jiějie ma?',vi:'Có một tấm. Bạn xem, đây là ảnh cả nhà tôi. Bạn có anh chị không?'},
      {s:'A',zh:'我没有哥哥，也没有姐姐，只有两个弟弟。',py:'Wǒ méiyǒu gēge, yě méiyǒu jiějie, zhǐ yǒu liǎng ge dìdi.',vi:'Tôi không có anh trai, cũng không có chị gái, chỉ có hai em trai.'},
      {s:'B',zh:'你爸爸、妈妈做什么工作？',py:'Nǐ bàba, māma zuò shénme gōngzuò?',vi:'Bố mẹ bạn làm nghề gì?'},
      {s:'A',zh:'我妈妈是大夫，在医院工作，爸爸是一家公司的经理。',py:'Wǒ māma shì dàifu, zài yīyuàn gōngzuò, bàba shì yì jiā gōngsī de jīnglǐ.',vi:'Mẹ tôi là bác sĩ, làm việc ở bệnh viện, bố tôi là giám đốc một công ty.'},
      {s:'B',zh:'我妈妈在商店工作，爸爸是律师。',py:'Wǒ māma zài shāngdiàn gōngzuò, bàba shì lǜshī.',vi:'Mẹ tôi làm ở cửa hàng, bố tôi là luật sư.'},
    ]
  },
  {
    lesson:'Buổi 19 (b21): 全家、看病与外贸', title:'你们公司有多少职员 – Công ty có bao nhiêu nhân viên? (第十五课 课文二)', lessonIdx:18,
    lines:[
      {s:'A',zh:'你们是一家什么公司？',py:'Nǐmen shì yì jiā shénme gōngsī?',vi:'Các vị là công ty gì?'},
      {s:'B',zh:'是一家外贸公司。',py:'Shì yì jiā wàimào gōngsī.',vi:'Là một công ty ngoại thương.'},
      {s:'A',zh:'是一家大公司吗？',py:'Shì yì jiā dà gōngsī ma?',vi:'Là công ty lớn à?'},
      {s:'B',zh:'不大，是一家比较小的公司。',py:'Bú dà, shì yì jiā bǐjiào xiǎo de gōngsī.',vi:'Không lớn, là một công ty khá nhỏ.'},
      {s:'A',zh:'有多少职员？',py:'Yǒu duōshao zhíyuán?',vi:'Có bao nhiêu nhân viên?'},
      {s:'B',zh:'大概有一百多个职员。',py:'Dàgài yǒu yì bǎi duō ge zhíyuán.',vi:'Khoảng hơn một trăm nhân viên.'},
      {s:'A',zh:'都是中国职员吗？',py:'Dōu shì Zhōngguó zhíyuán ma?',vi:'Đều là nhân viên Trung Quốc à?'},
      {s:'B',zh:'不都是中国职员，也有外国职员。',py:'Bù dōu shì Zhōngguó zhíyuán, yě yǒu wàiguó zhíyuán.',vi:'Không phải đều là nhân viên Trung Quốc, cũng có nhân viên nước ngoài.'},
    ]
  },
  {
    lesson:'Buổi 20 (b23): 商场、日期与生日', title:'问生活与生日 – Hỏi về sinh hoạt & sinh nhật', lessonIdx:19,
    lines:[
      {s:'A',zh:'今天你忙吗？',py:'Jīntiān nǐ máng ma?',vi:'Hôm nay bạn có bận không?'},
      {s:'B',zh:'我很忙。',py:'Wǒ hěn máng.',vi:'Tôi rất bận.'},
      {s:'A',zh:'昨天你去哪儿？',py:'Zuótiān nǐ qù nǎr?',vi:'Hôm qua bạn đi đâu?'},
      {s:'B',zh:'我去商场买了一些东西。',py:'Wǒ qù shāngchǎng mǎi le yìxiē dōngxi.',vi:'Tôi đi trung tâm thương mại mua một ít đồ.'},
      {s:'A',zh:'你喜欢吃水果吗？',py:'Nǐ xǐhuan chī shuǐguǒ ma?',vi:'Bạn có thích ăn hoa quả không?'},
      {s:'B',zh:'我喜欢吃苹果和橘子。',py:'Wǒ xǐhuan chī píngguǒ hé júzi.',vi:'Tôi thích ăn táo và quýt.'},
      {s:'A',zh:'今天星期几？',py:'Jīntiān xīngqī jǐ?',vi:'Hôm nay là thứ mấy?'},
      {s:'B',zh:'今天星期六，明天是星期日。',py:'Jīntiān xīngqīliù, míngtiān shì xīngqīrì.',vi:'Hôm nay thứ bảy, mai là chủ nhật.'},
      {s:'A',zh:'你的生日是几月几号？',py:'Nǐ de shēngrì shì jǐ yuè jǐ hào?',vi:'Sinh nhật của bạn là ngày mấy tháng mấy?'},
      {s:'B',zh:'我的生日是七月十二号。',py:"Wǒ de shēngrì shì qī yuè shí'èr hào.",vi:'Sinh nhật của tôi là ngày 12 tháng 7.'},
    ]
  },
  {
    lesson:'Buổi 21 (b24): 三餐、量词与「不」的搭配', title:'吃饭与借词典 – Chuyện ăn uống & mượn từ điển', lessonIdx:20,
    lines:[
      {s:'A',zh:'你早饭吃什么？',py:'Nǐ zǎofàn chī shénme?',vi:'Bữa sáng bạn ăn gì?'},
      {s:'B',zh:'我吃两个包子，喝一杯奶茶。',py:'Wǒ chī liǎng ge bāozi, hē yì bēi nǎichá.',vi:'Tôi ăn hai cái bánh bao, uống một cốc trà sữa.'},
      {s:'A',zh:'你喜欢吃饺子吗？',py:'Nǐ xǐhuan chī jiǎozi ma?',vi:'Bạn có thích ăn sủi cảo không?'},
      {s:'B',zh:'喜欢，饺子很好吃。',py:'Xǐhuan, jiǎozi hěn hǎochī.',vi:'Thích chứ, sủi cảo rất ngon.'},
      {s:'A',zh:'中午我们吃饺子吧。',py:'Zhōngwǔ wǒmen chī jiǎozi ba.',vi:'Trưa nay chúng ta ăn sủi cảo nhé.'},
      {s:'B',zh:'不错！我要一双筷子。',py:'Búcuò! Wǒ yào yì shuāng kuàizi.',vi:'Hay đấy! Tôi cần một đôi đũa.'},
      {s:'A',zh:'那是谁的中文词典？',py:'Nà shì shéi de Zhōngwén cídiǎn?',vi:'Kia là từ điển tiếng Trung của ai?'},
      {s:'B',zh:'那是我的，你要用吗？',py:'Nà shì wǒ de, nǐ yào yòng ma?',vi:'Kia là của tôi, bạn muốn dùng không?'},
      {s:'A',zh:'不用，谢谢。',py:'Búyòng, xièxie.',vi:'Không cần, cảm ơn.'},
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
  },
  // ── Bài 12 ──────────────────────────────────────────────────────────────
  {
    lesson: 12,
    title: '第十二课',
    titleVi: 'Bài 12 – 你在哪儿学习',
    words: [
      {zh:'语言', py:'yǔyán',      vi:'ngôn ngữ',              type:'Danh từ'},
      {zh:'语法', py:'yǔfǎ',       vi:'ngữ pháp',              type:'Danh từ'},
      {zh:'大学', py:'dàxué',      vi:'đại học',               type:'Danh từ'},
      {zh:'怎么样',py:'zěnmeyàng', vi:'như thế nào',           type:'Đại từ'},
      {zh:'觉得', py:'juéde',      vi:'cảm thấy, cho rằng',    type:'Động từ'},
      {zh:'听',   py:'tīng',       vi:'nghe',                  type:'Động từ'},
      {zh:'和',   py:'hé',         vi:'và',                    type:'Liên từ'},
      {zh:'说',   py:'shuō',       vi:'nói, kể',               type:'Động từ'},
      {zh:'比较', py:'bǐjiào',     vi:'so sánh, tương đối',    type:'Động từ / Phó từ'},
      {zh:'容易', py:'róngyì',     vi:'dễ, dễ dàng',           type:'Tính từ'},
      {zh:'读',   py:'dú',         vi:'đọc',                   type:'Động từ'},
      {zh:'写',   py:'xiě',        vi:'viết',                  type:'Động từ'},
      {zh:'给',   py:'gěi',        vi:'cho, tới (đối tượng)',  type:'Giới từ'},
      {zh:'新',   py:'xīn',        vi:'mới',                   type:'Tính từ'},
      {zh:'但是', py:'dànshì',     vi:'nhưng',                 type:'Liên từ'},
      {zh:'同学', py:'tóngxué',    vi:'bạn học, bạn cùng lớp', type:'Danh từ'},
      {zh:'同屋', py:'tóngwū',     vi:'bạn cùng phòng',        type:'Danh từ'},
      {zh:'班',   py:'bān',        vi:'lớp học',               type:'Danh từ'},
    ]
  },
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
  {zh:'我要换五百美元的人民币。',py:'Wǒ yào huàn wǔbǎi měiyuán de rénmínbì.',vi:'Tôi muốn đổi năm trăm đô sang nhân dân tệ.',lesson:9}  ,
  // B\xe0i 11
  {zh:'我先介绍一下儿，这位是王教授。',py:'Wǒ xiān ji\xe8sh\xe0o y\xedxi\xe0r, zh\xe8 w\xe8i sh\xec W\xe1ng ji\xe0osh\xf2u.',vi:'Để t\xf4i giới thiệu, đ\xe2y l\xe0 gi\xe1o sư Vương.',lesson:11},
  {zh:'欢迎您，王教授！',py:'Huāny\xedng n\xedn, W\xe1ng ji\xe0osh\xf2u!',vi:'Hoan ngh\xeanh ng\xe0i, gi\xe1o sư Vương!',lesson:11},
  {zh:'你是留学生吗？',py:'Nǐ sh\xec li\xfaxi\xe9shēng ma?',vi:'Bạn c\xf3 phải l\xe0 lưu học sinh kh\xf4ng?',lesson:11},
  {zh:'她也是留学生吗？',py:'Tā yě sh\xec li\xfaxi\xe9shēng ma?',vi:'C\xf4 ấy cũng l\xe0 lưu học sinh \xe0?',lesson:11},
  {zh:'我们都是留学生。',py:'Wǒmen dōu sh\xec li\xfaxi\xe9shēng.',vi:'Ch\xfang ta đều l\xe0 lưu học sinh.',lesson:11},
  {zh:'他们俩也都是留学生吗？',py:'Tāmen liǎ yě dōu sh\xec li\xfaxi\xe9shēng ma?',vi:'Cả hai họ cũng đều l\xe0 lưu học sinh \xe0?',lesson:11},
  {zh:'不，他们都是中国学生。',py:'B\xf9, tāmen dōu sh\xec Zhōnggu\xf3 xu\xe9sheng.',vi:'Kh\xf4ng, họ đều l\xe0 học sinh Trung Quốc.',lesson:11},
  {zh:'你也是中国人吗？',py:'Nǐ yě sh\xec Zhōnggu\xf3 r\xe9n ma?',vi:'Bạn cũng l\xe0 người Trung Quốc \xe0?',lesson:11},
  {zh:'不是。我是韩国人。',py:'B\xfa sh\xec. Wǒ sh\xec H\xe1ngu\xf3 r\xe9n.',vi:'Kh\xf4ng phải. T\xf4i l\xe0 người H\xe0n Quốc.',lesson:11},
  {zh:'对不起。—没什么。',py:'Du\xedb\xf9qǐ. — M\xe9i sh\xe9nme.',vi:'Xin lỗi. — Kh\xf4ng c\xf3 g\xec.',lesson:11},
  {zh:'大家好！我先介绍一下。',py:'D\xe0jiā hǎ o! Wǒ xiān ji\xe8sh\xe0o y\xedxi\xe0.',vi:'Xin ch\xe0o mọi người! Để t\xf4i giới thiệu một ch\xfat.',lesson:11},
  {zh:'他们都是中国学生。',py:'Tāmen dōu sh\xec Zhōnggu\xf3 xu\xe9sheng.',vi:'Họ đều l\xe0 học sinh Trung Quốc.',lesson:11},
  // Bài 12
  {zh:'你在哪儿学习汉语？',     py:'Nǐ zài nǎr xuéxí Hànyǔ?',            vi:'Bạn học tiếng Trung ở đâu?',                     lesson:12},
  {zh:'在北京语言大学。',       py:'Zài Běijīng Yǔyán Dàxué.',            vi:'Ở Đại học Ngôn ngữ Bắc Kinh.',                  lesson:12},
  {zh:'你们的老师怎么样？',     py:'Nǐmen de lǎoshī zěnmeyàng?',          vi:'Thầy/cô của các bạn thế nào?',                  lesson:12},
  {zh:'你觉得学习汉语难吗？',   py:'Nǐ juéde xuéxí Hànyǔ nán ma?',       vi:'Bạn thấy học tiếng Trung khó không?',            lesson:12},
  {zh:'我觉得语法不太难。',     py:'Wǒ juéde yǔfǎ bú tài nán.',           vi:'Tôi thấy ngữ pháp không quá khó.',              lesson:12},
  {zh:'听和说也比较容易，但是读和写很难。',py:'Tīng hé shuō yě bǐjiào róngyì, dànshì dú hé xiě hěn nán.',vi:'Nghe và nói cũng tương đối dễ, nhưng đọc và viết rất khó.',lesson:12},
  {zh:'我在北京语言大学学习。', py:'Wǒ zài Běijīng Yǔyán Dàxué xuéxí.',  vi:'Tôi học ở Đại học Ngôn ngữ Bắc Kinh.',          lesson:12},
  {zh:'我给你们介绍一下儿。',   py:'Wǒ gěi nǐmen jièshào yíxiàr.',       vi:'Để tôi giới thiệu một chút.',                   lesson:12},
  {zh:'这位是新同学，是我的同屋。',py:'Zhè wèi shì xīn tóngxué, shì wǒ de tóngwū.',vi:'Đây là bạn học mới, là bạn cùng phòng của tôi.',lesson:12},
  {zh:'你在哪个班学习？',       py:'Nǐ zài nǎ ge bān xuéxí?',             vi:'Bạn học ở lớp nào?',                            lesson:12},
  {zh:'你们的老师是谁？',       py:'Nǐmen de lǎoshī shì shéi?',           vi:'Thầy/cô của các bạn là ai?',                    lesson:12},
  {zh:'汉语比较难。',           py:'Hànyǔ bǐjiào nán.',                   vi:'Tiếng Trung khá khó.',                          lesson:12},
  {zh:'汉语是一个有意思的语言。',py:'Hànyǔ shì yí gè yǒu yìsi de yǔyán.',vi:'Tiếng Trung là một ngôn ngữ thú vị.',           lesson:12},
  // Bài 18 (b20)
  {zh:"我们的经理是一个很好的人。",py:"Wǒmen de jīnglǐ shì yí gè hěn hǎo de rén.",vi:"Giám đốc của chúng tôi là một người rất tốt.",lesson:18},
  {zh:"最近你学习怎么样？",py:"Zuìjìn nǐ xuéxí zěnmeyàng?",vi:"Dạo này bạn học hành thế nào?",lesson:18},
  {zh:"这是我刚买的日用品。",py:"Zhè shì wǒ gāng mǎi de rìyòngpǐn.",vi:"Đây là đồ dùng hàng ngày tôi vừa mới mua.",lesson:18},
  {zh:"你是老师还是学生？",py:"Nǐ shì lǎoshī háishi xuésheng?",vi:"Bạn là giáo viên hay học sinh?",lesson:18},
  {zh:"你要喝茶还是咖啡？",py:"Nǐ yào hē chá háishi kāfēi?",vi:"Bạn muốn uống trà hay cà phê?",lesson:18},
  {zh:"我要喝一杯茶。",py:"Wǒ yào hē yì bēi chá.",vi:"Tôi muốn uống một ly trà.",lesson:18},
  {zh:"这杯咖啡是谁的？",py:"Zhè bēi kāfēi shì shéi de?",vi:"Ly cà phê này là của ai?",lesson:18},
  // Bài 19
  {zh:"这是我买的车。",py:"Zhè shì wǒ mǎi de chē.",vi:"Đây là xe tôi mua.",lesson:19},
  {zh:"那是经理的汽车。",py:"Nà shì jīnglǐ de qìchē.",vi:"Kia là ô tô của giám đốc.",lesson:19},
  {zh:"最近你的工作怎么样？",py:"Zuìjìn nǐ de gōngzuò zěnmeyàng?",vi:"Gần đây công việc của bạn thế nào?",lesson:19},
  {zh:"你要喝杯咖啡吗？",py:"Nǐ yào hē bēi kāfēi ma?",vi:"Bạn muốn uống ly cà phê không?",lesson:19},
  {zh:"这是茶还是咖啡？",py:"Zhè shì chá háishi kāfēi?",vi:"Đây là trà hay là cà phê?",lesson:19},
  {zh:"你的车是白色还是黑色？",py:"Nǐ de chē shì báisè háishi hēisè?",vi:"Xe của bạn màu trắng hay màu đen?",lesson:19},
  {zh:"我坐高铁去上班。",py:"Wǒ zuò gāotiě qù shàngbān.",vi:"Tôi đi tàu cao tốc đi làm.",lesson:19},
  // Bài 20 (b23)
  {zh:"今天我要在家。",py:"Jīntiān wǒ yào zài jiā.",vi:"Hôm nay tôi muốn ở nhà.",lesson:20},
  {zh:"你喜欢吃什么水果？",py:"Nǐ xǐhuan chī shénme shuǐguǒ?",vi:"Bạn thích ăn hoa quả gì?",lesson:20},
  {zh:"今天几月几号？",py:"Jīntiān jǐ yuè jǐ hào?",vi:"Hôm nay là ngày mấy tháng mấy?",lesson:20},
  {zh:"我们经理有新秘书。",py:"Wǒmen jīnglǐ yǒu xīn mìshū.",vi:"Giám đốc của chúng tôi có thư ký mới.",lesson:20},
  {zh:"我的工作很忙，所以身体不太好。",py:"Wǒ de gōngzuò hěn máng, suǒyǐ shēntǐ bú tài hǎo.",vi:"Công việc của tôi rất bận, nên sức khoẻ không tốt lắm.",lesson:20},
  {zh:"我觉得汉语不太难。",py:"Wǒ juéde Hànyǔ bú tài nán.",vi:"Tôi thấy tiếng Trung không khó lắm.",lesson:20},
  {zh:"这不是我们的汉语老师。",py:"Zhè bú shì wǒmen de Hànyǔ lǎoshī.",vi:"Đây không phải là giáo viên tiếng Trung của chúng tôi.",lesson:20},
  // Bài 21 (b24)
  {zh:"这杯奶茶好喝吗？",py:"Zhè bēi nǎichá hǎohē ma?",vi:"Cốc trà sữa này có ngon không?",lesson:21},
  {zh:"我要吃几个中国包子。",py:"Wǒ yào chī jǐ ge Zhōngguó bāozi.",vi:"Tôi muốn ăn mấy cái bánh bao Trung Quốc.",lesson:21},
  {zh:"苹果十块钱一斤。",py:"Píngguǒ shí kuài qián yì jīn.",vi:"Táo mười tệ một cân.",lesson:21},
  {zh:"我有一些中文书。",py:"Wǒ yǒu yìxiē Zhōngwén shū.",vi:"Tôi có một vài quyển sách tiếng Trung.",lesson:21},
  {zh:"这个工程师是我朋友。",py:"Zhège gōngchéngshī shì wǒ péngyou.",vi:"Kỹ sư này là bạn tôi.",lesson:21},
  {zh:"你中午吃午饭了吗？",py:"Nǐ zhōngwǔ chī wǔfàn le ma?",vi:"Buổi trưa bạn ăn cơm chưa?",lesson:21},
  {zh:"老师说我写错了一个汉字。",py:"Lǎoshī shuō wǒ xiě cuò le yí ge Hànzì.",vi:"Thầy giáo nói tôi viết sai một chữ Hán.",lesson:21},
  // Bài 18 bổ sung (第十四课)
  {zh:"你喝茶还是喝咖啡？",py:"Nǐ hē chá háishi hē kāfēi?",vi:"Bạn uống trà hay uống cà phê?",lesson:18},
  {zh:"你的箱子是新的还是旧的？",py:"Nǐ de xiāngzi shì xīn de háishi jiù de?",vi:"Vali của bạn mới hay cũ?",lesson:18},
  {zh:"那件毛衣是红的。",py:"Nà jiàn máoyī shì hóng de.",vi:"Cái áo len kia màu đỏ.",lesson:18},
  {zh:"我去银行，你呢？",py:"Wǒ qù yínháng, nǐ ne?",vi:"Tôi đi ngân hàng, còn bạn?",lesson:18},
  {zh:"你买苹果还是买橘子？",py:"Nǐ mǎi píngguǒ háishi mǎi júzi?",vi:"Bạn mua táo hay mua quýt?",lesson:18},
  {zh:"这辆自行车是蓝的。",py:"Zhè liàng zìxíngchē shì lán de.",vi:"Chiếc xe đạp này màu xanh lam.",lesson:18},
  // Bài 19 bổ sung (第十五课)
  {zh:"你们公司有多少职员？",py:"Nǐmen gōngsī yǒu duōshao zhíyuán?",vi:"Công ty các bạn có bao nhiêu nhân viên?",lesson:19},
  {zh:"他是一家公司的经理。",py:"Tā shì yì jiā gōngsī de jīnglǐ.",vi:"Anh ấy là giám đốc của một công ty.",lesson:19},
  {zh:"他在一家外贸公司工作。",py:"Tā zài yì jiā wàimào gōngsī gōngzuò.",vi:"Anh ấy làm việc ở một công ty ngoại thương.",lesson:19},
  {zh:"我妈妈是大夫，在医院工作。",py:"Wǒ māma shì dàifu, zài yīyuàn gōngzuò.",vi:"Mẹ tôi là bác sĩ, làm việc ở bệnh viện.",lesson:19},
  {zh:"我没有姐姐，只有一个弟弟。",py:"Wǒ méiyǒu jiějie, zhǐ yǒu yí ge dìdi.",vi:"Tôi không có chị gái, chỉ có một em trai.",lesson:19},
  {zh:"他们不都是中国人，也有外国人。",py:"Tāmen bù dōu shì Zhōngguó rén, yě yǒu wàiguó rén.",vi:"Họ không phải đều là người Trung Quốc, cũng có người nước ngoài.",lesson:19},
  {zh:"这是我们全家的照片。",py:"Zhè shì wǒmen quán jiā de zhàopiàn.",vi:"Đây là ảnh cả nhà chúng tôi.",lesson:19},
];
