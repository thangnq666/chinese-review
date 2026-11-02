// ===================================================
// BÀI HỌC NGỮ PHÁP — phần mở rộng cho GRAMMAR_DATA (grammar.js)
// GRAMMAR_EXTRA[num]: lesson (buổi học), explain (giải thích), more (ví dụ thêm),
//   mistakes (lỗi hay gặp: w = sai, r = đúng, why = vì sao), quiz (luyện tập: q, o, a, e),
//   note (ghi đè ghi chú cũ nếu cần)
// GRAMMAR_NEW: các điểm ngữ pháp mới (đủ trường như GRAMMAR_DATA + phần mở rộng)
// ===================================================
const GRAMMAR_EXTRA = {
  1: {
    explain: '是 nối chủ ngữ với danh từ để nói "A là B". Phủ định chỉ có một cách: 不是. 是 không đứng trước tính từ.',
    more: [
      {zh:'他是我的同屋。',py:'Tā shì wǒ de tóngwū.',vi:'Anh ấy là bạn cùng phòng của tôi.',form:'S + 是 + N'},
      {zh:'我妈妈是护士。',py:'Wǒ māma shì hùshi.',vi:'Mẹ tôi là y tá.',form:'S + 是 + N'},
      {zh:'这不是我的手机。',py:'Zhè bú shì wǒ de shǒujī.',vi:'Đây không phải điện thoại của tôi.',form:'S + 不是 + N'},
      {zh:'你是不是越南人？',py:'Nǐ shì bu shì Yuènán rén?',vi:'Bạn có phải người Việt Nam không?',form:'是不是 + N?'},
      {zh:'今天是星期五。',py:'Jīntiān shì xīngqīwǔ.',vi:'Hôm nay là thứ Sáu.',form:'Thời gian + 是 + N'}
    ],
    mistakes: [
      {w:'他是很忙。',r:'他很忙。',why:'Tính từ làm vị ngữ trực tiếp, không cần 是.'},
      {w:'我不是去学校。',r:'我不去学校。',why:'Phủ định động từ dùng 不 trực tiếp, không chen 是.'}
    ],
    quiz: [
      {q:'我___越南人。',o:['是','在','有'],a:0,e:'Nói "là người…" dùng 是.'},
      {q:'Câu nào đúng?',o:['他是很高。','他很高。','他有很高。'],a:1,e:'Tính từ 高 làm vị ngữ, chỉ cần 很.'}
    ]
  },
  2: {
    explain: 'Trật tự cơ bản giống tiếng Việt: Chủ ngữ – Động từ – Tân ngữ. Phủ định thêm 不 (thói quen, ý muốn) hoặc 没 (việc đã không xảy ra) trước động từ.',
    more: [
      {zh:'我喝咖啡。',py:'Wǒ hē kāfēi.',vi:'Tôi uống cà phê.',form:'S + V + O'},
      {zh:'他们学日语。',py:'Tāmen xué Rìyǔ.',vi:'Họ học tiếng Nhật.',form:'S + V + O'},
      {zh:'妈妈买苹果。',py:'Māma mǎi píngguǒ.',vi:'Mẹ mua táo.',form:'S + V + O'},
      {zh:'我不吃鸡蛋。',py:'Wǒ bù chī jīdàn.',vi:'Tôi không ăn trứng.',form:'S + 不 + V + O'},
      {zh:'她没买词典。',py:'Tā méi mǎi cídiǎn.',vi:'Cô ấy không mua từ điển.',form:'S + 没 + V + O'}
    ],
    mistakes: [
      {w:'我咖啡喝。',r:'我喝咖啡。',why:'Tân ngữ đứng sau động từ.'},
      {w:'我不吃了早饭。',r:'我没吃早饭。',why:'Việc đã không xảy ra phủ định bằng 没 và bỏ 了.'}
    ],
    quiz: [
      {q:'Sắp xếp đúng là:',o:['我学汉语。','我汉语学。','学我汉语。'],a:0,e:'S + V + O.'},
      {q:'他___喝酒，只喝茶。',o:['不','没','是'],a:0,e:'Nói thói quen dùng 不.'}
    ]
  },
  3: {
    explain: 'Tính từ làm vị ngữ trực tiếp, không cần 是. Câu khẳng định thường thêm 很 (đọc nhẹ, không hẳn là "rất"); bỏ 很 thì câu mang ý so sánh.',
    more: [
      {zh:'这个箱子很重。',py:'Zhège xiāngzi hěn zhòng.',vi:'Cái vali này rất nặng.',form:'S + 很 + Adj'},
      {zh:'汉字不难。',py:'Hànzì bù nán.',vi:'Chữ Hán không khó.',form:'S + 不 + Adj'},
      {zh:'今天太冷了。',py:'Jīntiān tài lěng le.',vi:'Hôm nay lạnh quá.',form:'太 + Adj + 了'},
      {zh:'我的房间很小。',py:'Wǒ de fángjiān hěn xiǎo.',vi:'Phòng của tôi rất nhỏ.',form:'S + 很 + Adj'},
      {zh:'你忙不忙？',py:'Nǐ máng bu máng?',vi:'Bạn có bận không?',form:'Adj + 不 + Adj?'}
    ],
    mistakes: [
      {w:'我是很累。',r:'我很累。',why:'Không dùng 是 trước tính từ.'},
      {w:'这个苹果大。',r:'这个苹果很大。',why:'Thiếu 很 câu nghe như đang so sánh với quả khác.'}
    ],
    quiz: [
      {q:'今天___冷。',o:['很','是','有'],a:0,e:'Tính từ làm vị ngữ đi với 很.'},
      {q:'Câu nào đúng?',o:['汉语是难。','汉语很难。','汉语有难。'],a:1,e:'S + 很 + Adj.'}
    ]
  },
  4: {
    explain: '有 = có (sở hữu), hoặc "ở đâu có gì" (tồn tại: Nơi chốn + 有 + vật). Phủ định duy nhất là 没有, không bao giờ nói 不有.',
    more: [
      {zh:'我有两个姐姐。',py:'Wǒ yǒu liǎng ge jiějie.',vi:'Tôi có hai chị gái.',form:'S + 有 + O'},
      {zh:'商场里有很多人。',py:'Shāngchǎng lǐ yǒu hěn duō rén.',vi:'Trong trung tâm thương mại có rất nhiều người.',form:'Nơi + 有 + N'},
      {zh:'他没有汽车。',py:'Tā méiyǒu qìchē.',vi:'Anh ấy không có ô tô.',form:'S + 没有 + O'},
      {zh:'你有没有词典？',py:'Nǐ yǒu méiyǒu cídiǎn?',vi:'Bạn có từ điển không?',form:'有没有 + O?'},
      {zh:'学校里有一个邮局。',py:'Xuéxiào lǐ yǒu yí ge yóujú.',vi:'Trong trường có một bưu điện.',form:'Nơi + 有 + N'}
    ],
    mistakes: [
      {w:'我不有钱。',r:'我没有钱。',why:'有 chỉ phủ định bằng 没.'},
      {w:'在学校有银行。',r:'学校里有银行。',why:'Nơi chốn đứng đầu câu tồn tại, không cần 在.'}
    ],
    quiz: [
      {q:'我___有哥哥。',o:['不','没','很'],a:1,e:'没有 = không có.'},
      {q:'房间里___一个箱子。',o:['是','在','有'],a:2,e:'Nơi chốn + 有 + vật.'}
    ]
  },
  5: {
    explain: '在 + nơi chốn = "ở". Muốn nói làm việc gì ở đâu thì 在 + nơi chốn đặt TRƯỚC động từ. 在 + V còn có nghĩa "đang".',
    more: [
      {zh:'我在图书馆。',py:'Wǒ zài túshūguǎn.',vi:'Tôi ở thư viện.',form:'S + 在 + Nơi'},
      {zh:'他在银行工作。',py:'Tā zài yínháng gōngzuò.',vi:'Anh ấy làm việc ở ngân hàng.',form:'S + 在 + Nơi + V'},
      {zh:'妈妈在做饭。',py:'Māma zài zuòfàn.',vi:'Mẹ đang nấu cơm.',form:'S + 在 + V (đang)'},
      {zh:'你的手机在箱子里。',py:'Nǐ de shǒujī zài xiāngzi lǐ.',vi:'Điện thoại của bạn ở trong vali.',form:'N + 在 + Nơi'},
      {zh:'经理不在办公室。',py:'Jīnglǐ bú zài bàngōngshì.',vi:'Giám đốc không có ở văn phòng.',form:'S + 不在 + Nơi'}
    ],
    mistakes: [
      {w:'我工作在银行。',r:'我在银行工作。',why:'Nơi chốn đứng trước động từ (khác tiếng Việt).'},
      {w:'他是在家。',r:'他在家。',why:'在 đã là động từ, không cần 是.'}
    ],
    quiz: [
      {q:'他___医院工作。',o:['在','是','有'],a:0,e:'在 + nơi chốn + V.'},
      {q:'Câu nào đúng?',o:['我学习在图书馆。','我在图书馆学习。','在我图书馆学习。'],a:1,e:'Nơi chốn trước động từ.'}
    ]
  },
  6: {
    explain: '不 phủ định ý muốn, thói quen, tính chất hoặc việc tương lai. 没(有) phủ định việc đã (không) xảy ra hoặc sự sở hữu. Động từ 有 chỉ đi với 没.',
    more: [
      {zh:'我明天不去。',py:'Wǒ míngtiān bú qù.',vi:'Ngày mai tôi không đi.',form:'不 + V (tương lai)'},
      {zh:'昨天我没去。',py:'Zuótiān wǒ méi qù.',vi:'Hôm qua tôi không đi.',form:'没 + V (quá khứ)'},
      {zh:'他不喜欢喝酒。',py:'Tā bù xǐhuan hē jiǔ.',vi:'Anh ấy không thích uống rượu.',form:'不 + V (sở thích)'},
      {zh:'他还没回家。',py:'Tā hái méi huíjiā.',vi:'Anh ấy vẫn chưa về nhà.',form:'还没 + V'}
    ],
    mistakes: [
      {w:'昨天我不去学校。',r:'昨天我没去学校。',why:'Việc đã qua dùng 没.'},
      {w:'我没喜欢咖啡。',r:'我不喜欢咖啡。',why:'Sở thích, thói quen dùng 不.'}
    ],
    quiz: [
      {q:'昨天他___上班。',o:['不','没'],a:1,e:'Hôm qua → việc đã qua → 没.'},
      {q:'我___喝咖啡，我喝茶。',o:['不','没'],a:0,e:'Nói thói quen → 不.'}
    ]
  },
  7: {
    explain: 'Thêm 吗 vào cuối câu trần thuật là thành câu hỏi có/không; trật tự từ giữ nguyên. Câu đã có từ để hỏi (什么, 谁, 哪儿…) thì không dùng 吗.',
    more: [
      {zh:'你今天累吗？',py:'Nǐ jīntiān lèi ma?',vi:'Hôm nay bạn có mệt không?',form:'S + Adj + 吗?'},
      {zh:'这是你的书吗？',py:'Zhè shì nǐ de shū ma?',vi:'Đây là sách của bạn à?',form:'S + 是 + N + 吗?'},
      {zh:'你喜欢喝奶茶吗？',py:'Nǐ xǐhuan hē nǎichá ma?',vi:'Bạn có thích uống trà sữa không?',form:'S + V + O + 吗?'},
      {zh:'明天你上班吗？',py:'Míngtiān nǐ shàngbān ma?',vi:'Ngày mai bạn có đi làm không?',form:'… + 吗?'}
    ],
    mistakes: [
      {w:'你去哪儿吗？',r:'你去哪儿？',why:'Đã có từ để hỏi 哪儿 thì bỏ 吗.'},
      {w:'你忙不忙吗？',r:'你忙不忙？',why:'Câu hỏi chính phản không thêm 吗.'}
    ],
    quiz: [
      {q:'Câu nào đúng?',o:['你叫什么名字吗？','你叫什么名字？'],a:1,e:'Có 什么 thì không dùng 吗.'},
      {q:'你是学生___？',o:['吗','呢','的'],a:0,e:'Câu hỏi có/không → 吗.'}
    ]
  },
  8: {
    explain: 'Lặp động từ/tính từ ở dạng khẳng định + phủ định (去不去, 好不好) để hỏi có hay không. Chữ 不 ở giữa đọc thanh nhẹ. Không thêm 吗, không dùng 很.',
    more: [
      {zh:'你喝不喝咖啡？',py:'Nǐ hē bu hē kāfēi?',vi:'Bạn có uống cà phê không?',form:'V不V + O?'},
      {zh:'这个贵不贵？',py:'Zhège guì bu guì?',vi:'Cái này có đắt không?',form:'Adj不Adj?'},
      {zh:'你是不是老师？',py:'Nǐ shì bu shì lǎoshī?',vi:'Bạn có phải giáo viên không?',form:'是不是 + N?'},
      {zh:'你吃没吃早饭？',py:'Nǐ chī méi chī zǎofàn?',vi:'Bạn đã ăn sáng chưa?',form:'V没V (quá khứ)'},
      {zh:'他在不在家？',py:'Tā zài bu zài jiā?',vi:'Anh ấy có ở nhà không?',form:'在不在?'}
    ],
    mistakes: [
      {w:'你去不去吗？',r:'你去不去？',why:'Không thêm 吗.'},
      {w:'你很忙不忙？',r:'你忙不忙？',why:'Câu hỏi chính phản không dùng 很.'}
    ],
    quiz: [
      {q:'Câu hỏi đúng là:',o:['你喜欢不喜欢汉语？','你喜欢不喜欢汉语吗？','你很喜欢不喜欢汉语？'],a:0,e:'A不A, không 吗, không 很.'},
      {q:'这个箱子重___重？',o:['不','没','吗'],a:0,e:'Tính từ dùng Adj不Adj.'}
    ]
  },
  9: {
    explain: 'Từ để hỏi đứng đúng vị trí của thông tin cần hỏi, không đảo lên đầu như tiếng Anh: 什么 (gì), 谁 (ai), 哪儿 (đâu), 怎么 (thế nào), 几/多少 (mấy/bao nhiêu).',
    more: [
      {zh:'这是什么？',py:'Zhè shì shénme?',vi:'Đây là cái gì?',form:'什么'},
      {zh:'谁是你们的老师？',py:'Shéi shì nǐmen de lǎoshī?',vi:'Ai là giáo viên của các bạn?',form:'谁'},
      {zh:'你在哪儿工作？',py:'Nǐ zài nǎr gōngzuò?',vi:'Bạn làm việc ở đâu?',form:'哪儿'},
      {zh:'你有几个孩子？',py:'Nǐ yǒu jǐ ge háizi?',vi:'Bạn có mấy đứa con?',form:'几 + 量词'}
    ],
    mistakes: [
      {w:'什么你喜欢？',r:'你喜欢什么？',why:'Từ để hỏi đứng ở vị trí tân ngữ.'},
      {w:'哪儿你住？',r:'你住哪儿？',why:'Giữ nguyên trật tự câu trần thuật.'}
    ],
    quiz: [
      {q:'你住___？',o:['哪儿','什么','谁'],a:0,e:'Hỏi nơi chốn → 哪儿.'},
      {q:'___是你的同屋？',o:['谁','哪','几'],a:0,e:'Hỏi người → 谁.'}
    ]
  },
  10: {
    explain: '还是 dùng trong câu hỏi lựa chọn "A hay B?". Câu đã có 还是 thì không thêm 吗. Trong câu trần thuật (không phải câu hỏi), "hoặc" dùng 或者.',
    more: [
      {zh:'你坐地铁还是坐出租车？',py:'Nǐ zuò dìtiě háishì zuò chūzūchē?',vi:'Bạn đi tàu điện ngầm hay đi taxi?',form:'V+A 还是 V+B?'},
      {zh:'他是老师还是学生？',py:'Tā shì lǎoshī háishì xuésheng?',vi:'Anh ấy là giáo viên hay học sinh?',form:'A 还是 B?'},
      {zh:'你周末在家还是出去？',py:'Nǐ zhōumò zài jiā háishì chūqù?',vi:'Cuối tuần bạn ở nhà hay ra ngoài?',form:'A 还是 B?'},
      {zh:'你今天去还是明天去？',py:'Nǐ jīntiān qù háishì míngtiān qù?',vi:'Bạn đi hôm nay hay ngày mai?',form:'A 还是 B?'}
    ],
    mistakes: [
      {w:'你喝茶还是咖啡吗？',r:'你喝茶还是喝咖啡？',why:'Câu có 还是 không thêm 吗.'},
      {w:'我喝茶还是咖啡都可以。',r:'我喝茶或者咖啡都可以。',why:'Câu trần thuật dùng 或者.'}
    ],
    quiz: [
      {q:'你要米饭___面条？',o:['还是','或者','和'],a:0,e:'Câu hỏi lựa chọn → 还是.'},
      {q:'Câu nào đúng?',o:['你是中国人还是日本人？','你是中国人还是日本人吗？'],a:0,e:'Không thêm 吗.'}
    ]
  },
  11: {
    explain: '的 nối định ngữ với danh từ ("của", hoặc nối tính từ dài với danh từ). Quan hệ thân thiết (我妈妈, 我们公司) có thể bỏ 的. Tính từ một âm tiết + danh từ thường không cần 的 (新书, 好人).',
    more: [
      {zh:'这是我的手机。',py:'Zhè shì wǒ de shǒujī.',vi:'Đây là điện thoại của tôi.',form:'Đại từ + 的 + N'},
      {zh:'红色的衣服很贵。',py:'Hóngsè de yīfu hěn guì.',vi:'Quần áo màu đỏ rất đắt.',form:'Adj + 的 + N'},
      {zh:'他是我们公司的经理。',py:'Tā shì wǒmen gōngsī de jīnglǐ.',vi:'Ông ấy là giám đốc công ty chúng tôi.',form:'N + 的 + N'},
      {zh:'我买了一本新书。',py:'Wǒ mǎile yì běn xīn shū.',vi:'Tôi mua một quyển sách mới.',form:'Adj đơn + N (không 的)'}
    ],
    mistakes: [
      {w:'这是我书。',r:'这是我的书。',why:'Sở hữu đồ vật cần 的.'},
      {w:'我的妈妈很好。',r:'我妈妈很好。',why:'Không sai, nhưng với người thân nói tự nhiên hơn khi bỏ 的.'}
    ],
    quiz: [
      {q:'这是老师___词典。',o:['的','是','在'],a:0,e:'Sở hữu → 的.'},
      {q:'Câu nào tự nhiên hơn?',o:['我的爸爸是工程师。','我爸爸是工程师。'],a:1,e:'Người thân thường bỏ 的.'}
    ]
  },
  12: {
    explain: '了 sau động từ: hành động đã hoàn thành. 了 cuối câu: có sự thay đổi, tình huống mới. Phủ định việc đã xảy ra: 没 + V (bỏ 了).',
    more: [
      {zh:'我买了三斤苹果。',py:'Wǒ mǎile sān jīn píngguǒ.',vi:'Tôi đã mua ba cân táo.',form:'V + 了 + số + O'},
      {zh:'下雨了。',py:'Xià yǔ le.',vi:'Trời mưa rồi.',form:'… + 了 (thay đổi)'},
      {zh:'我饿了。',py:'Wǒ è le.',vi:'Tôi đói rồi.',form:'Adj + 了'},
      {zh:'我昨天没去银行。',py:'Wǒ zuótiān méi qù yínháng.',vi:'Hôm qua tôi không đi ngân hàng.',form:'没 + V (không 了)'}
    ],
    mistakes: [
      {w:'我没吃了饭。',r:'我没吃饭。',why:'Phủ định với 没 thì bỏ 了.'},
      {w:'我昨天很忙了。',r:'我昨天很忙。',why:'Tính từ miêu tả quá khứ không cần 了.'}
    ],
    quiz: [
      {q:'Phủ định đúng của "我吃了早饭" là:',o:['我不吃了早饭。','我没吃早饭。','我没吃了早饭。'],a:1,e:'没 + V, bỏ 了.'},
      {q:'天冷___，多喝点儿茶。',o:['了','的','吗'],a:0,e:'Trạng thái mới → 了 cuối câu.'}
    ]
  },
  13: {
    explain: 'V + 过 = đã từng làm (kinh nghiệm). Phủ định: 没 + V + 过 (chưa từng). Câu hỏi: V + 过 + O + 吗 / 没有？',
    more: [
      {zh:'我去过上海。',py:'Wǒ qùguo Shànghǎi.',vi:'Tôi đã từng đến Thượng Hải.',form:'V + 过 + O'},
      {zh:'你吃过饺子吗？',py:'Nǐ chīguo jiǎozi ma?',vi:'Bạn đã từng ăn sủi cảo chưa?',form:'V + 过 + O + 吗?'},
      {zh:'他没坐过高铁。',py:'Tā méi zuòguo gāotiě.',vi:'Anh ấy chưa từng đi tàu cao tốc.',form:'没 + V + 过'},
      {zh:'我学过日语。',py:'Wǒ xuéguo Rìyǔ.',vi:'Tôi từng học tiếng Nhật.',form:'V + 过 + O'}
    ],
    mistakes: [
      {w:'我不去过日本。',r:'我没去过日本。',why:'Phủ định kinh nghiệm dùng 没.'},
      {w:'我过去北京。',r:'我去过北京。',why:'过 đứng ngay sau động từ.'}
    ],
    quiz: [
      {q:'我___去过泰国。',o:['没','不'],a:0,e:'没 + V + 过.'},
      {q:'你喝___中国茶吗？',o:['过','了','着'],a:0,e:'Hỏi kinh nghiệm → 过.'}
    ]
  },
  14: {
    explain: 'V + 着 diễn tả trạng thái đang kéo dài (cửa đang mở, đang ngồi…). Thường gặp: 开着, 坐着, 等着. V1 + 着 + V2: làm V2 trong trạng thái V1.',
    more: [
      {zh:'窗户开着。',py:'Chuānghu kāizhe.',vi:'Cửa sổ đang mở.',form:'V + 着'},
      {zh:'他坐着看书。',py:'Tā zuòzhe kàn shū.',vi:'Anh ấy ngồi đọc sách.',form:'V1 + 着 + V2'},
      {zh:'我在门口等着你。',py:'Wǒ zài ménkǒu děngzhe nǐ.',vi:'Tôi đang đợi bạn ở cửa.',form:'V + 着 + O'},
      {zh:'商店还开着吗？',py:'Shāngdiàn hái kāizhe ma?',vi:'Cửa hàng còn mở không?',form:'还 + V + 着'}
    ],
    mistakes: [
      {w:'门开了着。',r:'门开着。',why:'着 không đi cùng 了.'},
      {w:'我着看书。',r:'我坐着看书。',why:'着 phải đứng sau một động từ.'}
    ],
    quiz: [
      {q:'银行的门开___。',o:['着','过','的'],a:0,e:'Trạng thái đang duy trì → 着.'},
      {q:'我们坐___吃饭吧。',o:['着','了','过'],a:0,e:'V1 + 着 + V2.'}
    ]
  },
  15: {
    explain: '吧: đề nghị ("…đi/nhé") hoặc đoán chắc ("…phải không?"). 呢: hỏi lại "còn … thì sao?", hỏi vị trí "… đâu rồi?", hoặc nhấn mạnh hành động đang diễn ra.',
    more: [
      {zh:'我们去吃饭吧。',py:'Wǒmen qù chīfàn ba.',vi:'Chúng ta đi ăn cơm đi.',form:'… + 吧 (đề nghị)'},
      {zh:'你是越南人吧？',py:'Nǐ shì Yuènán rén ba?',vi:'Bạn là người Việt Nam phải không?',form:'… + 吧? (đoán)'},
      {zh:'我很好，你呢？',py:'Wǒ hěn hǎo, nǐ ne?',vi:'Tôi khỏe, còn bạn?',form:'N + 呢?'},
      {zh:'我的手机呢？',py:'Wǒ de shǒujī ne?',vi:'Điện thoại của tôi đâu rồi?',form:'N + 呢? (ở đâu)'},
      {zh:'他在看书呢。',py:'Tā zài kàn shū ne.',vi:'Anh ấy đang đọc sách.',form:'在 + V + 呢'}
    ],
    mistakes: [
      {w:'我很好，你吗？',r:'我很好，你呢？',why:'Hỏi lại "còn bạn?" dùng 呢.'},
      {w:'我们喝茶吗！',r:'我们喝茶吧！',why:'Lời đề nghị dùng 吧.'}
    ],
    quiz: [
      {q:'我喝咖啡，你___？',o:['呢','吧','吗'],a:0,e:'Hỏi lại → 呢.'},
      {q:'太晚了，我们回家___。',o:['吧','呢','吗'],a:0,e:'Đề nghị → 吧.'}
    ]
  },
  16: {
    explain: 'Động từ năng nguyện đứng trước động từ chính: 想 (muốn), 要 (muốn/phải/sẽ), 会 (biết – do học), 能 (có thể – do điều kiện), 可以 (được phép), 应该 (nên). Phủ định thêm 不 phía trước.',
    more: [
      {zh:'我想去中国留学。',py:'Wǒ xiǎng qù Zhōngguó liúxué.',vi:'Tôi muốn đi du học Trung Quốc.',form:'想 + V'},
      {zh:'明天我要上班。',py:'Míngtiān wǒ yào shàngbān.',vi:'Ngày mai tôi phải đi làm.',form:'要 + V'},
      {zh:'他会开车。',py:'Tā huì kāichē.',vi:'Anh ấy biết lái xe.',form:'会 + V'},
      {zh:'今天我不能去。',py:'Jīntiān wǒ bù néng qù.',vi:'Hôm nay tôi không đi được.',form:'不能 + V'},
      {zh:'这儿可以坐吗？',py:'Zhèr kěyǐ zuò ma?',vi:'Ở đây ngồi được không?',form:'可以 + V'},
      {zh:'你应该吃药。',py:'Nǐ yīnggāi chī yào.',vi:'Bạn nên uống thuốc.',form:'应该 + V'}
    ],
    mistakes: [
      {w:'我要不去。',r:'我不想去。',why:'Phủ định của 要 (muốn) thường dùng 不想.'},
      {w:'我能说汉语。(ý: biết vì đã học)',r:'我会说汉语。',why:'Kỹ năng học được dùng 会.'}
    ],
    quiz: [
      {q:'他___说三种语言。(biết, do học)',o:['会','能','可以'],a:0,e:'Kỹ năng do học → 会.'},
      {q:'这儿___坐吗？(xin phép)',o:['可以','会','要'],a:0,e:'Xin phép → 可以.'}
    ]
  },
  17: {
    explain: 'Giữa số đếm (hoặc 这/那/几) và danh từ bắt buộc có lượng từ. 个 dùng chung nhất; vật cụ thể có lượng từ riêng: 本 (sách), 件 (áo), 辆 (xe), 杯 (cốc), 把 (ô), 张 (tờ, tấm), 支 (bút), 双 (đôi), 根 (vật dài).',
    more: [
      {zh:'他有两辆自行车。',py:'Tā yǒu liǎng liàng zìxíngchē.',vi:'Anh ấy có hai chiếc xe đạp.',form:'两 + 辆 + 车'},
      {zh:'我要一杯奶茶和两个包子。',py:'Wǒ yào yì bēi nǎichá hé liǎng ge bāozi.',vi:'Tôi muốn một cốc trà sữa và hai cái bánh bao.',form:'杯 / 个'},
      {zh:'那双筷子是新的。',py:'Nà shuāng kuàizi shì xīn de.',vi:'Đôi đũa kia là đồ mới.',form:'那 + 双 + N'}
    ],
    mistakes: [
      {w:'我有三书。',r:'我有三本书。',why:'Thiếu lượng từ.'},
      {w:'两个车',r:'两辆车',why:'Xe cộ dùng 辆.'}
    ],
    quiz: [
      {q:'一___雨伞',o:['把','本','件'],a:0,e:'Ô dùng 把.'},
      {q:'三___衬衣',o:['件','张','辆'],a:0,e:'Áo dùng 件.'},
      {q:'两___筷子 (hai đôi)',o:['双','根','个'],a:0,e:'Đôi → 双.'}
    ]
  },
  18: {
    explain: 'Thứ tự chuẩn: Chủ ngữ + Thời gian + Nơi chốn + Động từ + Tân ngữ. Thời gian có thể lên đầu câu (trước chủ ngữ) nhưng không đứng cuối câu như tiếng Việt.',
    more: [
      {zh:'我明天在家做饭。',py:'Wǒ míngtiān zài jiā zuòfàn.',vi:'Ngày mai tôi nấu cơm ở nhà.',form:'S + TG + Nơi + V'},
      {zh:'他早上在食堂吃早饭。',py:'Tā zǎoshang zài shítáng chī zǎofàn.',vi:'Buổi sáng anh ấy ăn sáng ở nhà ăn.',form:'S + TG + Nơi + V + O'},
      {zh:'星期六我们在商场见。',py:'Xīngqīliù wǒmen zài shāngchǎng jiàn.',vi:'Thứ Bảy chúng ta gặp ở trung tâm thương mại.',form:'TG + S + Nơi + V'},
      {zh:'她下午在图书馆看书。',py:'Tā xiàwǔ zài túshūguǎn kàn shū.',vi:'Buổi chiều cô ấy đọc sách ở thư viện.',form:'S + TG + Nơi + V + O'}
    ],
    mistakes: [
      {w:'我吃饭在食堂中午。',r:'我中午在食堂吃饭。',why:'Thời gian → nơi chốn → động từ.'},
      {w:'我去北京明天。',r:'我明天去北京。',why:'Thời gian không đứng cuối câu.'}
    ],
    quiz: [
      {q:'Câu nào đúng?',o:['我在银行工作明天。','我明天在银行工作。','明天我工作在银行。'],a:1,e:'S + TG + Nơi + V.'},
      {q:'Câu nào đúng?',o:['他晚上在家看书。','他在家看书晚上。'],a:0,e:'Thời gian đứng trước.'}
    ]
  },
  19: {
    explain: 'Động từ + bổ ngữ kết quả cho biết hành động đạt kết quả gì: 写错 (viết sai), 听懂 (nghe hiểu), 做完 (làm xong), 找到 (tìm thấy), 学会 (học được). Phủ định: 没 + V + bổ ngữ.',
    more: [
      {zh:'我写错了一个字。',py:'Wǒ xiěcuòle yí ge zì.',vi:'Tôi viết sai một chữ.',form:'V + 错'},
      {zh:'你听懂了吗？',py:'Nǐ tīngdǒng le ma?',vi:'Bạn nghe hiểu chưa?',form:'V + 懂'},
      {zh:'我找到我的手机了。',py:'Wǒ zhǎodào wǒ de shǒujī le.',vi:'Tôi tìm thấy điện thoại rồi.',form:'V + 到'},
      {zh:'他没做完工作。',py:'Tā méi zuòwán gōngzuò.',vi:'Anh ấy chưa làm xong việc.',form:'没 + V + 完'},
      {zh:'我学会开车了。',py:'Wǒ xuéhuì kāichē le.',vi:'Tôi học lái xe được rồi.',form:'V + 会'}
    ],
    mistakes: [
      {w:'我不听懂。',r:'我没听懂。/ 我听不懂。',why:'Phủ định kết quả dùng 没, hoặc dạng khả năng 听不懂.'},
      {w:'我找我的书到了。',r:'我找到我的书了。',why:'Bổ ngữ đứng ngay sau động từ.'}
    ],
    quiz: [
      {q:'老师说的话我听___了。',o:['懂','见','错'],a:0,e:'Nghe hiểu → 听懂.'},
      {q:'我没找___你的电话号码。',o:['到','完','好'],a:0,e:'Tìm thấy → 找到.'}
    ]
  },
  20: {
    explain: 'Dùng 得 để đánh giá hành động: Động từ + 得 + (很) + tính từ. Có tân ngữ thì lặp động từ (说汉语说得很好) hoặc đưa tân ngữ lên trước (汉语说得很好).',
    more: [
      {zh:'她汉语说得很流利。',py:'Tā Hànyǔ shuō de hěn liúlì.',vi:'Cô ấy nói tiếng Trung rất lưu loát.',form:'O + V + 得 + Adj'},
      {zh:'她写汉字写得很好看。',py:'Tā xiě Hànzì xiě de hěn hǎokàn.',vi:'Cô ấy viết chữ Hán rất đẹp.',form:'V + O + V + 得 + Adj'},
      {zh:'你做饭做得怎么样？',py:'Nǐ zuòfàn zuò de zěnmeyàng?',vi:'Bạn nấu ăn thế nào?',form:'V + 得 + 怎么样?'},
      {zh:'我今天吃得太多了。',py:'Wǒ jīntiān chī de tài duō le.',vi:'Hôm nay tôi ăn nhiều quá.',form:'V + 得 + 太 + Adj'}
    ],
    mistakes: [
      {w:'他说汉语得很好。',r:'他说汉语说得很好。',why:'Có tân ngữ thì lặp lại động từ trước 得.'},
      {w:'他说得好很。',r:'他说得很好。',why:'很 đứng trước tính từ.'}
    ],
    quiz: [
      {q:'他说___很好。',o:['得','的','地'],a:0,e:'Đánh giá hành động → 得.'},
      {q:'Câu nào đúng?',o:['他写汉字写得很好。','他写汉字得很好。'],a:0,e:'Lặp động từ khi có tân ngữ.'}
    ]
  },
  21: {
    explain: 'V + 得 + kết quả = làm được; V + 不 + kết quả = không làm được. Ví dụ: 听得懂 / 听不懂, 看得见 / 看不见, 吃得完 / 吃不完.',
    more: [
      {zh:'老师说的话我听得懂。',py:'Lǎoshī shuō de huà wǒ tīng de dǒng.',vi:'Lời thầy nói tôi nghe hiểu được.',form:'V + 得 + 懂'},
      {zh:'这么多饭，我吃不完。',py:'Zhème duō fàn, wǒ chī bu wán.',vi:'Nhiều cơm thế này, tôi ăn không hết.',form:'V + 不 + 完'},
      {zh:'字太小了，我看不见。',py:'Zì tài xiǎo le, wǒ kàn bu jiàn.',vi:'Chữ nhỏ quá, tôi nhìn không thấy.',form:'V + 不 + 见'},
      {zh:'你看得懂中文杂志吗？',py:'Nǐ kàn de dǒng Zhōngwén zázhì ma?',vi:'Bạn đọc hiểu được tạp chí tiếng Trung không?',form:'V + 得 + 懂 + 吗?'},
      {zh:'今天的工作我做不完。',py:'Jīntiān de gōngzuò wǒ zuò bu wán.',vi:'Việc hôm nay tôi làm không xong.',form:'V + 不 + 完'}
    ],
    mistakes: [
      {w:'我不能听懂。',r:'我听不懂。',why:'Không làm được do khả năng → V + 不 + kết quả.'},
      {w:'我听得不懂。',r:'我听不懂。',why:'Dạng phủ định là V + 不 + kết quả.'}
    ],
    quiz: [
      {q:'"Nghe không hiểu" là:',o:['听不懂','不听懂','没听懂了'],a:0,e:'V + 不 + 懂.'},
      {q:'一碗饭我吃得___。',o:['完','见','懂'],a:0,e:'Ăn hết → 吃得完.'}
    ]
  },
  22: {
    note: '⚠️ Sau 比 không dùng 很/非常/太. Muốn nói "hơn nhiều" dùng Adj + 得多 / 多了; "hơn một chút" dùng Adj + 一点儿. 更/还 thì dùng được: 他比我更高.',
    explain: 'A 比 B + tính từ = A hơn B. Mức chênh lệch đặt SAU tính từ: 大三岁, 贵一点儿, 贵得多. Phủ định: A 没有 B + tính từ (A không bằng B).',
    more: [
      {zh:'哥哥比我大两岁。',py:'Gēge bǐ wǒ dà liǎng suì.',vi:'Anh trai lớn hơn tôi hai tuổi.',form:'A比B + Adj + số'},
      {zh:'这件比那件贵一点儿。',py:'Zhè jiàn bǐ nà jiàn guì yìdiǎnr.',vi:'Chiếc này đắt hơn chiếc kia một chút.',form:'A比B + Adj + 一点儿'},
      {zh:'汽车比自行车贵得多。',py:'Qìchē bǐ zìxíngchē guì de duō.',vi:'Ô tô đắt hơn xe đạp nhiều.',form:'A比B + Adj + 得多'},
      {zh:'我的箱子没有你的重。',py:'Wǒ de xiāngzi méiyǒu nǐ de zhòng.',vi:'Vali của tôi không nặng bằng của bạn.',form:'A没有B + Adj'},
      {zh:'他比我更忙。',py:'Tā bǐ wǒ gèng máng.',vi:'Anh ấy còn bận hơn tôi.',form:'A比B + 更 + Adj'}
    ],
    mistakes: [
      {w:'他比我很高。',r:'他比我高得多。',why:'Không dùng 很 sau 比.'},
      {w:'我比他不高。',r:'我没有他高。',why:'Phủ định so sánh dùng 没有.'}
    ],
    quiz: [
      {q:'哥哥比我___三岁。',o:['大','很大','多'],a:0,e:'A比B + Adj + số.'},
      {q:'Câu nào đúng?',o:['今天比昨天很冷。','今天比昨天冷多了。'],a:1,e:'Không dùng 很 sau 比.'}
    ]
  },
  23: {
    explain: '越来越 + tính từ/động từ tâm lý: "ngày càng…". 越 A 越 B: "càng A càng B". Không thêm 很 sau 越.',
    more: [
      {zh:'天气越来越冷了。',py:'Tiānqì yuèláiyuè lěng le.',vi:'Thời tiết ngày càng lạnh.',form:'越来越 + Adj'},
      {zh:'河内的汽车越来越多。',py:'Hénèi de qìchē yuèláiyuè duō.',vi:'Ô tô ở Hà Nội ngày càng nhiều.',form:'越来越 + Adj'},
      {zh:'我越来越喜欢汉语了。',py:'Wǒ yuèláiyuè xǐhuan Hànyǔ le.',vi:'Tôi ngày càng thích tiếng Trung.',form:'越来越 + V tâm lý'},
      {zh:'汉语越学越有意思。',py:'Hànyǔ yuè xué yuè yǒu yìsi.',vi:'Tiếng Trung càng học càng thú vị.',form:'越 + V + 越 + Adj'},
      {zh:'雨越下越大。',py:'Yǔ yuè xià yuè dà.',vi:'Mưa càng lúc càng to.',form:'越 + V + 越 + Adj'}
    ],
    mistakes: [
      {w:'越来越很冷。',r:'越来越冷。',why:'Không thêm 很.'},
      {w:'他越来越汉语好。',r:'他的汉语越来越好。',why:'越来越 đứng ngay trước tính từ.'}
    ],
    quiz: [
      {q:'他的口语___好了。',o:['越来越','越越','很越'],a:0,e:'Ngày càng → 越来越.'},
      {q:'汉字越写越___。',o:['好看','很好看'],a:0,e:'Không thêm 很.'}
    ]
  },
  24: {
    explain: 'Câu 把 nhấn mạnh việc "xử lý" tân ngữ: S + 把 + O + V + thành phần khác (了, kết quả, nơi chốn…). Động từ không đứng trơ một mình; động từ không có tác động (是, 有, 认识, 喜欢…) không dùng với 把.',
    more: [
      {zh:'请把门开一下儿。',py:'Qǐng bǎ mén kāi yíxiàr.',vi:'Làm ơn mở cửa giúp.',form:'把 + O + V + 一下儿'},
      {zh:'我把钱给他了。',py:'Wǒ bǎ qián gěi tā le.',vi:'Tôi đã đưa tiền cho anh ấy.',form:'把 + O + V + người + 了'},
      {zh:'他把手机放在箱子里。',py:'Tā bǎ shǒujī fàng zài xiāngzi lǐ.',vi:'Anh ấy để điện thoại vào trong vali.',form:'把 + O + V + 在 + Nơi'},
      {zh:'我把名字写错了。',py:'Wǒ bǎ míngzi xiěcuò le.',vi:'Tôi viết sai tên rồi.',form:'把 + O + V + kết quả'}
    ],
    mistakes: [
      {w:'我把饭吃。',r:'我把饭吃了。',why:'Sau động từ cần thêm thành phần (了, kết quả…).'},
      {w:'我把他认识。',r:'我认识他。',why:'认识 không có tác động xử lý, không dùng 把.'}
    ],
    quiz: [
      {q:'他___钱给妈妈了。',o:['把','被','给'],a:0,e:'Xử lý tân ngữ → 把.'},
      {q:'Câu nào đúng?',o:['我把书看。','我把书看完了。'],a:1,e:'Cần kết quả sau động từ.'}
    ]
  },
  25: {
    explain: 'Câu bị động: S (người/vật chịu tác động) + 被 + (người làm) + V + thành phần khác. Thường mang sắc thái không mong muốn. Động từ cũng không đứng trơ.',
    more: [
      {zh:'我的自行车被朋友骑走了。',py:'Wǒ de zìxíngchē bèi péngyou qízǒu le.',vi:'Xe đạp của tôi bị bạn đi mất rồi.',form:'S + 被 + người + V + kết quả'},
      {zh:'我的咖啡被他喝了。',py:'Wǒ de kāfēi bèi tā hē le.',vi:'Cà phê của tôi bị anh ấy uống mất.',form:'S + 被 + người + V + 了'},
      {zh:'这个错误被经理看见了。',py:'Zhège cuòwù bèi jīnglǐ kànjiàn le.',vi:'Lỗi này bị giám đốc nhìn thấy rồi.',form:'S + 被 + người + V + 见'},
      {zh:'我的雨伞被人拿错了。',py:'Wǒ de yǔsǎn bèi rén ná cuò le.',vi:'Ô của tôi bị người khác cầm nhầm.',form:'S + 被 + 人 + V + 错'}
    ],
    mistakes: [
      {w:'我被他说。',r:'我被他说了。',why:'Sau động từ cần 了 hoặc kết quả.'},
      {w:'书被我看。',r:'书被我看完了。',why:'Động từ không đứng trơ trong câu 被.'}
    ],
    quiz: [
      {q:'我的咖啡___弟弟喝了。',o:['被','把','给'],a:0,e:'Bị động → 被.'},
      {q:'Câu nào đúng?',o:['我的车被他开走了。','我的车被他开。'],a:0,e:'Cần kết quả 走了.'}
    ]
  },
  26: {
    explain: 'Nhấn mạnh thời gian, nơi chốn, cách thức hoặc người thực hiện của một việc ĐÃ xảy ra: 是 + phần nhấn mạnh + V + 的. Không dùng 了 trong cấu trúc này.',
    more: [
      {zh:'我是坐高铁去的。',py:'Wǒ shì zuò gāotiě qù de.',vi:'Tôi đi bằng tàu cao tốc.',form:'是 + cách thức + V + 的'},
      {zh:'这件毛衣是在北京买的。',py:'Zhè jiàn máoyī shì zài Běijīng mǎi de.',vi:'Chiếc áo len này mua ở Bắc Kinh.',form:'是 + 在 + Nơi + V + 的'},
      {zh:'这个汉字是谁写的？',py:'Zhège Hànzì shì shéi xiě de?',vi:'Chữ Hán này là ai viết?',form:'是 + người + V + 的'},
      {zh:'我们是在大学认识的。',py:'Wǒmen shì zài dàxué rènshi de.',vi:'Chúng tôi quen nhau ở đại học.',form:'是 + Nơi + V + 的'}
    ],
    mistakes: [
      {w:'我是昨天去了北京的。',r:'我是昨天去北京的。',why:'Không dùng 了 trong câu 是…的.'},
      {w:'我去北京是坐高铁。',r:'我是坐高铁去北京的。',why:'Phần nhấn mạnh đặt giữa 是 và động từ.'}
    ],
    quiz: [
      {q:'你___怎么去的？',o:['是','在','有'],a:0,e:'Nhấn mạnh cách thức → 是…的.'},
      {q:'Câu nào đúng?',o:['我是昨天买的。','我是昨天买了的。'],a:0,e:'Không dùng 了.'}
    ]
  },
  27: {
    explain: 'Nối nguyên nhân – kết quả: 因为 + nguyên nhân, 所以 + kết quả. Có thể dùng cả cặp hoặc chỉ một vế.',
    more: [
      {zh:'因为下雨，所以我没出去。',py:'Yīnwèi xià yǔ, suǒyǐ wǒ méi chūqù.',vi:'Vì trời mưa nên tôi không ra ngoài.',form:'因为…，所以…'},
      {zh:'因为他生病了，所以没来上班。',py:'Yīnwèi tā shēngbìng le, suǒyǐ méi lái shàngbān.',vi:'Vì anh ấy bị ốm nên không đi làm.',form:'因为…，所以…'},
      {zh:'我很累，所以想早点儿回家。',py:'Wǒ hěn lèi, suǒyǐ xiǎng zǎo diǎnr huíjiā.',vi:'Tôi rất mệt nên muốn về nhà sớm.',form:'…，所以…'},
      {zh:'他没去，因为他很忙。',py:'Tā méi qù, yīnwèi tā hěn máng.',vi:'Anh ấy không đi vì rất bận.',form:'…，因为…'}
    ],
    mistakes: [
      {w:'所以下雨，因为我没去。',r:'因为下雨，所以我没去。',why:'因为 đi với nguyên nhân, 所以 đi với kết quả.'},
      {w:'因为很贵，但是我不买。',r:'因为很贵，所以我不买。',why:'Quan hệ nhân quả dùng 所以, không dùng 但是.'}
    ],
    quiz: [
      {q:'___今天很冷，所以我买了毛衣。',o:['因为','但是','如果'],a:0,e:'Nguyên nhân → 因为.'},
      {q:'他很饿，___吃了很多饭。',o:['所以','因为','虽然'],a:0,e:'Kết quả → 所以.'}
    ]
  },
  28: {
    explain: '"Tuy… nhưng…": 虽然 + A, 但是/可是 + B. Vế sau có thể thêm 还是/也 để nhấn mạnh.',
    more: [
      {zh:'虽然工作很累，但是我很喜欢。',py:'Suīrán gōngzuò hěn lèi, dànshì wǒ hěn xǐhuan.',vi:'Tuy công việc mệt nhưng tôi rất thích.',form:'虽然…，但是…'},
      {zh:'虽然下雨了，但是我们还是去了。',py:'Suīrán xià yǔ le, dànshì wǒmen háishì qù le.',vi:'Tuy trời mưa nhưng chúng tôi vẫn đi.',form:'虽然…，但是…还是…'},
      {zh:'这件衣服虽然很贵，但是很好看。',py:'Zhè jiàn yīfu suīrán hěn guì, dànshì hěn hǎokàn.',vi:'Bộ quần áo này tuy đắt nhưng rất đẹp.',form:'S + 虽然…，但是…'},
      {zh:'我虽然很累，但是还想工作。',py:'Wǒ suīrán hěn lèi, dànshì hái xiǎng gōngzuò.',vi:'Tôi tuy mệt nhưng vẫn muốn làm việc.',form:'S + 虽然…，但是…'}
    ],
    mistakes: [
      {w:'虽然很贵，所以我不买。',r:'虽然很贵，但是我还是买了。',why:'虽然 đi với 但是/可是.'},
      {w:'虽然很忙，可是但是他来了。',r:'虽然很忙，但是他来了。',why:'Chỉ dùng một từ nối: 但是 hoặc 可是.'}
    ],
    quiz: [
      {q:'___很忙，但是他每天学汉语。',o:['虽然','因为','如果'],a:0,e:'Nhượng bộ → 虽然.'},
      {q:'虽然我不饿，___我还想吃。',o:['但是','所以','就'],a:0,e:'虽然…但是…'}
    ]
  },
  29: {
    explain: '"Nếu… thì…": 如果 + điều kiện, (chủ ngữ) + 就 + kết quả. 就 đứng sau chủ ngữ của vế sau.',
    more: [
      {zh:'如果明天下雨，我们就不去了。',py:'Rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù le.',vi:'Nếu mai trời mưa thì chúng ta không đi nữa.',form:'如果…，S + 就…'},
      {zh:'如果你饿了，就先吃吧。',py:'Rúguǒ nǐ è le, jiù xiān chī ba.',vi:'Nếu bạn đói thì ăn trước đi.',form:'如果…，就…'},
      {zh:'如果太贵，我就不买。',py:'Rúguǒ tài guì, wǒ jiù bù mǎi.',vi:'Nếu đắt quá thì tôi không mua.',form:'如果…，S + 就…'},
      {zh:'如果你生病了，就要去看医生。',py:'Rúguǒ nǐ shēngbìng le, jiù yào qù kàn yīshēng.',vi:'Nếu bạn bị ốm thì phải đi khám bác sĩ.',form:'如果…，就要…'}
    ],
    mistakes: [
      {w:'如果下雨，就我们不去。',r:'如果下雨，我们就不去。',why:'就 đứng sau chủ ngữ.'},
      {w:'如果便宜，所以我买。',r:'如果便宜，我就买。',why:'如果 đi với 就.'}
    ],
    quiz: [
      {q:'如果你累了，___回家吧。',o:['就','所以','但是'],a:0,e:'如果…就…'},
      {q:'___便宜，我就买两件。',o:['如果','因为','虽然'],a:0,e:'Điều kiện → 如果.'}
    ]
  },
  30: {
    explain: '不但 A，而且 B = không những A mà còn B. Cùng một chủ ngữ thì chủ ngữ đứng trước 不但. 又 A 又 B = vừa A vừa B.',
    more: [
      {zh:'我同屋不但会做饭，而且做得很好吃。',py:'Wǒ tóngwū búdàn huì zuòfàn, érqiě zuò de hěn hǎochī.',vi:'Bạn cùng phòng tôi không những biết nấu ăn mà còn nấu rất ngon.',form:'S + 不但…，而且…'},
      {zh:'这儿的东西不但便宜，而且很好。',py:'Zhèr de dōngxi búdàn piányi, érqiě hěn hǎo.',vi:'Đồ ở đây không những rẻ mà còn tốt.',form:'S + 不但…，而且…'},
      {zh:'她不但是我的同学，而且是我的同屋。',py:'Tā búdàn shì wǒ de tóngxué, érqiě shì wǒ de tóngwū.',vi:'Cô ấy không chỉ là bạn học mà còn là bạn cùng phòng của tôi.',form:'S + 不但…，而且…'},
      {zh:'这家的饺子又便宜又好吃。',py:'Zhè jiā de jiǎozi yòu piányi yòu hǎochī.',vi:'Sủi cảo quán này vừa rẻ vừa ngon.',form:'又…又…'}
    ],
    mistakes: [
      {w:'不但他会开车，而且会骑摩托车。',r:'他不但会开车，而且会骑摩托车。',why:'Cùng chủ ngữ thì chủ ngữ đứng trước 不但.'},
      {w:'这个箱子又很轻又很便宜。',r:'这个箱子又轻又便宜。',why:'Sau 又 thường không thêm 很.'}
    ],
    quiz: [
      {q:'他___会做饭，而且做得很好。',o:['不但','虽然','因为'],a:0,e:'不但…而且…'},
      {q:'这个箱子又轻___便宜。',o:['又','也','还'],a:0,e:'又…又…'}
    ]
  },
  31: {
    lesson: 'Buổi 18',
    explain: '刚 (gāng) đặt sau chủ ngữ, trước động từ: việc vừa mới xảy ra, rất gần thời điểm nói.',
    more: [
      {zh:'经理刚出去。',py:'Jīnglǐ gāng chūqù.',vi:'Giám đốc vừa mới ra ngoài.',form:'S + 刚 + V'},
      {zh:'我们刚吃完饭。',py:'Wǒmen gāng chīwán fàn.',vi:'Chúng tôi vừa ăn cơm xong.',form:'S + 刚 + V + 完'},
      {zh:'他刚回到河内。',py:'Tā gāng huídào Hénèi.',vi:'Anh ấy vừa mới về đến Hà Nội.',form:'S + 刚 + V + Nơi'},
      {zh:'我刚下班。',py:'Wǒ gāng xiàbān.',vi:'Tôi vừa tan làm.',form:'S + 刚 + V'}
    ],
    mistakes: [
      {w:'我回家刚。',r:'我刚回家。',why:'刚 đứng trước động từ.'},
      {w:'刚我吃饭了。',r:'我刚吃饭。',why:'刚 đứng sau chủ ngữ.'}
    ],
    quiz: [
      {q:'他___出去，你等一会儿吧。',o:['刚','才','都'],a:0,e:'Vừa mới → 刚.'},
      {q:'Câu nào đúng?',o:['我刚到公司。','我到公司刚。'],a:0,e:'刚 + V.'}
    ]
  },
  32: {
    lesson: 'Buổi 18',
    explain: '有(一)点儿 + tính từ: "hơi…", thường mang ý không hài lòng. Khác với tính từ + 一点儿 (so sánh: "…hơn một chút").',
    more: [
      {zh:'我有点儿困。',py:'Wǒ yǒudiǎnr kùn.',vi:'Tôi hơi buồn ngủ.',form:'有点儿 + Adj'},
      {zh:'汉语语法有点儿难。',py:'Hànyǔ yǔfǎ yǒudiǎnr nán.',vi:'Ngữ pháp tiếng Trung hơi khó.',form:'有点儿 + Adj'},
      {zh:'他今天有点儿忙。',py:'Tā jīntiān yǒudiǎnr máng.',vi:'Hôm nay anh ấy hơi bận.',form:'有点儿 + Adj'}
    ],
    mistakes: [
      {w:'这件衣服贵有点儿。',r:'这件衣服有点儿贵。',why:'有点儿 đứng trước tính từ.'},
      {w:'有点儿便宜吧！(mặc cả)',r:'便宜一点儿吧！',why:'Yêu cầu "rẻ hơn chút" dùng Adj + 一点儿.'}
    ],
    quiz: [
      {q:'我___饿，想吃东西。',o:['有点儿','一点儿'],a:0,e:'Hơi đói → 有点儿饿.'},
      {q:'便宜___吧！',o:['一点儿','有点儿'],a:0,e:'Rẻ hơn chút → Adj + 一点儿.'}
    ]
  },
  33: {
    lesson: 'Buổi 19',
    explain: '见 sau 看/听 cho biết đã thật sự nhìn thấy/nghe thấy. 看 = nhìn (hành động), 看见 = nhìn thấy (kết quả). Phủ định: 没看见 / 没听见.',
    more: [
      {zh:'你听见了吗？',py:'Nǐ tīngjiàn le ma?',vi:'Bạn nghe thấy chưa?',form:'听 + 见'},
      {zh:'我没听见你说什么。',py:'Wǒ méi tīngjiàn nǐ shuō shénme.',vi:'Tôi không nghe thấy bạn nói gì.',form:'没 + 听见'},
      {zh:'我看见他在商场买东西。',py:'Wǒ kànjiàn tā zài shāngchǎng mǎi dōngxi.',vi:'Tôi thấy anh ấy mua đồ ở trung tâm thương mại.',form:'看见 + câu'}
    ],
    mistakes: [
      {w:'我不看见他。',r:'我没看见他。',why:'Kết quả không xảy ra → 没.'},
      {w:'我看见书。(ý: đọc sách)',r:'我看书。',why:'Đọc sách là hành động, dùng 看.'}
    ],
    quiz: [
      {q:'我___看见你的手机。',o:['没','不'],a:0,e:'没 + 看见.'},
      {q:'老师说的话，你听___了吗？',o:['见','给','在'],a:0,e:'Nghe thấy → 听见.'}
    ]
  },
  34: {
    lesson: 'Buổi 19',
    explain: '只 (zhǐ) đứng trước động từ hoặc 有: "chỉ". Nhấn mạnh giới hạn về số lượng, phạm vi.',
    more: [
      {zh:'我只喝白水。',py:'Wǒ zhǐ hē báishuǐ.',vi:'Tôi chỉ uống nước lọc.',form:'只 + V + O'},
      {zh:'他只有一个妹妹。',py:'Tā zhǐ yǒu yí ge mèimei.',vi:'Anh ấy chỉ có một em gái.',form:'只有 + số + N'},
      {zh:'我只去过北京。',py:'Wǒ zhǐ qùguo Běijīng.',vi:'Tôi chỉ từng đến Bắc Kinh.',form:'只 + V + 过'}
    ],
    mistakes: [
      {w:'只我喝茶。(ý: tôi chỉ uống trà)',r:'我只喝茶。',why:'只 đứng trước động từ.'},
      {w:'我有只一个哥哥。',r:'我只有一个哥哥。',why:'只 đứng trước 有.'}
    ],
    quiz: [
      {q:'Câu nào đúng?',o:['我只有一百块。','我有只一百块。'],a:0,e:'只 + 有.'},
      {q:'他___说英语，不说汉语。',o:['只','都','也'],a:0,e:'Chỉ → 只.'}
    ]
  },
  35: {
    lesson: 'Buổi 19',
    explain: '大概 (dàgài): khoảng, chắc là. Đứng trước số lượng/thời gian để ước lượng, hoặc trước động từ để phỏng đoán.',
    more: [
      {zh:'我们大概十点到。',py:'Wǒmen dàgài shí diǎn dào.',vi:'Chúng tôi khoảng mười giờ đến.',form:'大概 + thời gian'},
      {zh:'他大概不来了。',py:'Tā dàgài bù lái le.',vi:'Chắc anh ấy không đến nữa.',form:'大概 + V (phỏng đoán)'},
      {zh:'这个箱子大概二十公斤。',py:'Zhège xiāngzi dàgài èrshí gōngjīn.',vi:'Cái vali này khoảng hai mươi ki-lô.',form:'大概 + số lượng'}
    ],
    mistakes: [
      {w:'十点大概。',r:'大概十点。',why:'大概 đứng trước con số.'},
      {w:'大概三十岁左右。',r:'大概三十岁 / 三十岁左右。',why:'大概 và 左右 cùng nghĩa, chỉ dùng một.'}
    ],
    quiz: [
      {q:'他___四十岁。',o:['大概','只','刚'],a:0,e:'Khoảng → 大概.'},
      {q:'Cách nói đúng:',o:['十个人大概。','大概十个人。'],a:1,e:'大概 đứng trước số.'}
    ]
  },
  36: {
    lesson: 'Buổi 19',
    explain: '全 + danh từ: "cả, toàn bộ"; thường đi với 都 phía sau: 全家都…, 全班都…',
    more: [
      {zh:'全家都喜欢吃饺子。',py:'Quán jiā dōu xǐhuan chī jiǎozi.',vi:'Cả nhà đều thích ăn sủi cảo.',form:'全 + N + 都'},
      {zh:'全班同学都来了。',py:'Quán bān tóngxué dōu lái le.',vi:'Cả lớp đều đến rồi.',form:'全 + N + 都'},
      {zh:'全公司的职员都去旅游了。',py:'Quán gōngsī de zhíyuán dōu qù lǚyóu le.',vi:'Nhân viên cả công ty đều đi du lịch.',form:'全 + N + 的 + N + 都'}
    ],
    mistakes: [
      {w:'全家喜欢。',r:'全家都喜欢。',why:'全 thường đi kèm 都.'},
      {w:'全我们去了。',r:'我们全家都去了。',why:'全 đứng trước danh từ, không đứng trước đại từ.'}
    ],
    quiz: [
      {q:'全班同学___是越南人。',o:['都','也','还'],a:0,e:'全…都…'},
      {q:'___家都去北京了。',o:['全','只','都'],a:0,e:'Cả nhà → 全家.'}
    ]
  },
  37: {
    lesson: 'Buổi 20',
    explain: 'Ngày tháng tiếng Trung đi từ lớn đến nhỏ: Năm → Tháng → Ngày → Thứ. Hỏi: 几月几号？星期几？ Năm đọc từng chữ số: 二零二六年.',
    more: [
      {zh:'今天是二零二六年十一月二日。',py:'Jīntiān shì èr líng èr liù nián shíyī yuè èr rì.',vi:'Hôm nay là ngày 2 tháng 11 năm 2026.',form:'年 → 月 → 日'},
      {zh:'明天是几号？',py:'Míngtiān shì jǐ hào?',vi:'Ngày mai là ngày mấy?',form:'几号?'},
      {zh:'十月一号是星期四。',py:'Shí yuè yī hào shì xīngqīsì.',vi:'Ngày 1 tháng 10 là thứ Năm.',form:'月 + 号 + 星期'}
    ],
    mistakes: [
      {w:'二号十一月',r:'十一月二号',why:'Tháng đứng trước ngày.'},
      {w:'两千二十六年',r:'二零二六年',why:'Năm đọc từng chữ số.'}
    ],
    quiz: [
      {q:'Ngày 5 tháng 3 nói là:',o:['三月五号','五号三月','五月三号'],a:0,e:'Tháng trước, ngày sau.'},
      {q:'Năm 2026 đọc là:',o:['二零二六年','两千二十六年'],a:0,e:'Đọc từng chữ số.'}
    ]
  },
  38: {
    lesson: 'Buổi 21',
    explain: '不要 + động từ = "đừng…" (khuyên, cấm). 别 nghĩa giống, thân mật hơn. Cần phân biệt với 不要 = "không muốn".',
    more: [
      {zh:'不要喝冷水。',py:'Búyào hē lěng shuǐ.',vi:'Đừng uống nước lạnh.',form:'不要 + V + O'},
      {zh:'你不要太累了。',py:'Nǐ búyào tài lèi le.',vi:'Bạn đừng để mình mệt quá.',form:'S + 不要 + 太 + Adj + 了'},
      {zh:'别等我了。',py:'Bié děng wǒ le.',vi:'Đừng đợi tôi nữa.',form:'别 + V'}
    ],
    mistakes: [
      {w:'不要你去。',r:'你不要去。',why:'Chủ ngữ đứng trước 不要.'},
      {w:'不要喝咖啡了吗？(muốn ra lệnh)',r:'不要喝咖啡了。',why:'Câu cầu khiến không dùng 吗.'}
    ],
    quiz: [
      {q:'下雨了，___出去了。',o:['不要','不用','不错'],a:0,e:'Đừng → 不要.'},
      {q:'"Đừng đợi tôi" là:',o:['别等我。','不等我。'],a:0,e:'别 = đừng.'}
    ]
  },
  39: {
    lesson: 'Buổi 21',
    explain: 'Một số tổ hợp với 不 có nghĩa riêng: 不错 = khá tốt (lời khen); 不用 = không cần; 不太 = không… lắm (giảm nhẹ). Đều đọc biến điệu: bú cuò, bú yòng, bú tài.',
    more: [
      {zh:'你的汉语说得不错。',py:'Nǐ de Hànyǔ shuō de búcuò.',vi:'Bạn nói tiếng Trung khá tốt.',form:'不错 (khen)'},
      {zh:'不用找了。',py:'Búyòng zhǎo le.',vi:'Không cần trả lại tiền thừa.',form:'不用 + V'},
      {zh:'这个语法不太难。',py:'Zhège yǔfǎ bú tài nán.',vi:'Ngữ pháp này không khó lắm.',form:'不太 + Adj'},
      {zh:'这个照相机不错。',py:'Zhège zhàoxiàngjī búcuò.',vi:'Cái máy ảnh này khá tốt.',form:'N + 不错'}
    ],
    mistakes: [
      {w:'不用谢谢。',r:'不用谢。',why:'Cụm cố định: 不用谢.'},
      {w:'我不要去。(ý: không cần đi)',r:'我不用去。',why:'不用 = không cần; 不要 = đừng / không muốn.'}
    ],
    quiz: [
      {q:'"Không cần cảm ơn" là:',o:['不用谢。','不要谢。','不错谢。'],a:0,e:'不用谢.'},
      {q:'你的发音___，很好！',o:['不错','不用','不要'],a:0,e:'Khen → 不错.'}
    ]
  },
  40: {
    lesson: 'Buổi 18',
    explain: 'Vị ngữ là một cụm chủ–vị nhỏ: 我身体很好 (tôi – sức khỏe rất tốt). Dùng để miêu tả một bộ phận hoặc khía cạnh của chủ ngữ. Không chen 是.',
    more: [
      {zh:'他工作很忙。',py:'Tā gōngzuò hěn máng.',vi:'Anh ấy công việc rất bận.',form:'S1 + S2 + Adj'},
      {zh:'我们公司人很多。',py:'Wǒmen gōngsī rén hěn duō.',vi:'Công ty chúng tôi rất đông người.',form:'S1 + S2 + Adj'},
      {zh:'这件衣服颜色很好看。',py:'Zhè jiàn yīfu yánsè hěn hǎokàn.',vi:'Bộ quần áo này màu rất đẹp.',form:'S1 + S2 + Adj'},
      {zh:'她汉语很好。',py:'Tā Hànyǔ hěn hǎo.',vi:'Tiếng Trung của cô ấy rất tốt.',form:'S1 + S2 + Adj'}
    ],
    mistakes: [
      {w:'我的身体是很好。',r:'我身体很好。',why:'Không dùng 是 trước tính từ.'},
      {w:'他工作是很忙。',r:'他工作很忙。',why:'Vị ngữ chủ–vị không cần 是.'}
    ],
    quiz: [
      {q:'Câu nào đúng?',o:['我妈妈身体很好。','我妈妈是身体很好。'],a:0,e:'Không chen 是.'},
      {q:'这个商店东西___便宜。',o:['很','是','有'],a:0,e:'S1 + S2 + 很 + Adj.'}
    ]
  },
  41: {
    lesson: 'Buổi 19',
    explain: '不都 = không phải tất cả đều (phủ định một phần). 都不 = tất cả đều không (phủ định toàn bộ). Đổi chỗ 不 và 都 là đổi nghĩa.',
    more: [
      {zh:'我们不都是越南人。',py:'Wǒmen bù dōu shì Yuènán rén.',vi:'Chúng tôi không phải ai cũng là người Việt Nam.',form:'不都 (một phần)'},
      {zh:'我们都不是越南人。',py:'Wǒmen dōu bú shì Yuènán rén.',vi:'Chúng tôi đều không phải người Việt Nam.',form:'都不 (toàn bộ)'},
      {zh:'这些衣服不都很贵。',py:'Zhèxiē yīfu bù dōu hěn guì.',vi:'Những bộ quần áo này không phải cái nào cũng đắt.',form:'不都'},
      {zh:'他们都不喝酒。',py:'Tāmen dōu bù hē jiǔ.',vi:'Họ đều không uống rượu.',form:'都不'}
    ],
    mistakes: [
      {w:'我们都不是学生。(ý: có người không phải)',r:'我们不都是学生。',why:'Phủ định một phần dùng 不都.'},
      {w:'他们不都去。(ý: không ai đi)',r:'他们都不去。',why:'Phủ định toàn bộ dùng 都不.'}
    ],
    quiz: [
      {q:'"Họ đều không đi" là:',o:['他们都不去。','他们不都去。'],a:0,e:'都不 = toàn bộ.'},
      {q:'"Không phải ai cũng thích cà phê" là:',o:['大家不都喜欢咖啡。','大家都不喜欢咖啡。'],a:0,e:'不都 = một phần.'}
    ]
  },
  42: {
    lesson: 'Buổi 18–19',
    explain: '多 sau số tròn chục/trăm/nghìn: "hơn, lẻ" (二十多 = hơn 20). Với số nhỏ hơn 10, dùng lượng từ + 多: 三个多月, 五块多.',
    more: [
      {zh:'我们班有三十多个学生。',py:'Wǒmen bān yǒu sānshí duō ge xuésheng.',vi:'Lớp chúng tôi có hơn ba mươi học sinh.',form:'Số tròn + 多 + 量词'},
      {zh:'这本书五十多块。',py:'Zhè běn shū wǔshí duō kuài.',vi:'Quyển sách này hơn năm mươi đồng.',form:'Số tròn + 多 + 块'},
      {zh:'他在中国住了两年多。',py:'Tā zài Zhōngguó zhùle liǎng nián duō.',vi:'Anh ấy sống ở Trung Quốc hơn hai năm.',form:'Số < 10 + 量词 + 多'},
      {zh:'一共一百多块钱。',py:'Yígòng yìbǎi duō kuài qián.',vi:'Tổng cộng hơn một trăm đồng.',form:'百 + 多'}
    ],
    mistakes: [
      {w:'二十个多人',r:'二十多个人',why:'Số tròn: 多 đứng trước lượng từ.'},
      {w:'三多块',r:'三块多',why:'Số < 10: lượng từ + 多.'}
    ],
    quiz: [
      {q:'"Hơn 40 người" là:',o:['四十多个人','四十个多人'],a:0,e:'Số tròn + 多 + 量词.'},
      {q:'"Hơn 5 đồng" là:',o:['五块多','五多块'],a:0,e:'Số < 10 + 量词 + 多.'}
    ]
  }
};

// ---------------------------------------------------
// ĐIỂM NGỮ PHÁP MỚI (43+) — rà từ 21 buổi học
// ---------------------------------------------------
const GRAMMAR_NEW = [
  {
    id:'cau-hoi', num:43, lesson:'Buổi 4, 10',
    title:'几 (jǐ) và 多少 (duōshao) — Hỏi số lượng',
    tag:'几 + lượng từ (số nhỏ) / 多少 (+ lượng từ) (số lớn)',
    formula:'几 + 量词 + N ? / 多少 + (量词) + N ?',
    note:'⚠️ Sau 几 bắt buộc có lượng từ; sau 多少 có thể bỏ. Hỏi giá tiền luôn dùng 多少钱.',
    tip:'💡 Hỏi số điện thoại, số phòng: …是多少？',
    explain:'几 hỏi số lượng ít (thường dưới 10) và luôn đi với lượng từ. 多少 hỏi số lượng bất kỳ, thường là số lớn.',
    rows:[
      {zh:'你们班有几个越南学生？',py:'Nǐmen bān yǒu jǐ ge Yuènán xuésheng?',vi:'Lớp các bạn có mấy học sinh Việt Nam?',form:'几 + 个 + N'},
      {zh:'你们公司有多少人？',py:'Nǐmen gōngsī yǒu duōshao rén?',vi:'Công ty các bạn có bao nhiêu người?',form:'多少 + N'},
      {zh:'你要几斤苹果？',py:'Nǐ yào jǐ jīn píngguǒ?',vi:'Bạn muốn mấy cân táo?',form:'几 + 斤 + N'},
      {zh:'一共多少钱？',py:'Yígòng duōshao qián?',vi:'Tổng cộng bao nhiêu tiền?',form:'多少钱'},
      {zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vi:'Bây giờ mấy giờ?',form:'几点'},
      {zh:'你的房间号是多少？',py:'Nǐ de fángjiān hào shì duōshao?',vi:'Số phòng của bạn là bao nhiêu?',form:'…是多少?'}
    ],
    mistakes:[
      {w:'你有几孩子？',r:'你有几个孩子？',why:'Sau 几 phải có lượng từ.'},
      {w:'这个几钱？',r:'这个多少钱？',why:'Hỏi giá dùng 多少钱.'}
    ],
    quiz:[
      {q:'这本书___钱？',o:['多少','几'],a:0,e:'Hỏi giá → 多少钱.'},
      {q:'你家有___口人？',o:['几','多少'],a:0,e:'Số nhỏ + lượng từ 口 → 几.'}
    ]
  },
  {
    id:'co-ban', num:44, lesson:'Buổi 10',
    title:'二 (èr) và 两 (liǎng) — Hai',
    tag:'两 + lượng từ / 二 khi đếm, số thứ tự, hàng đơn vị',
    formula:'两 + 量词 + N · 一、二、三… · 十二 / 第二',
    note:'⚠️ 2 giờ = 两点; 2 đồng = 两块; nhưng 12 = 十二, thứ Ba = 星期二.',
    tip:'💡 200, 2000 nói được cả 两百/二百, 两千/二千 — 两 phổ biến hơn.',
    explain:'Trước lượng từ dùng 两. Khi đếm số, đọc số, số thứ tự hoặc chữ số hàng đơn vị trong số nhiều chữ số thì dùng 二.',
    rows:[
      {zh:'我有两个哥哥。',py:'Wǒ yǒu liǎng ge gēge.',vi:'Tôi có hai anh trai.',form:'两 + 个'},
      {zh:'请给我两杯咖啡。',py:'Qǐng gěi wǒ liǎng bēi kāfēi.',vi:'Cho tôi hai cốc cà phê.',form:'两 + 杯'},
      {zh:'我们班有十二个人。',py:'Wǒmen bān yǒu shí\'èr ge rén.',vi:'Lớp chúng tôi có mười hai người.',form:'十二 (hàng đơn vị)'},
      {zh:'今天是星期二。',py:'Jīntiān shì xīngqī\'èr.',vi:'Hôm nay là thứ Ba.',form:'星期二'},
      {zh:'他住二楼。',py:'Tā zhù èr lóu.',vi:'Anh ấy ở tầng hai.',form:'二 (số thứ tự)'},
      {zh:'这个两千块钱。',py:'Zhège liǎngqiān kuài qián.',vi:'Cái này hai nghìn đồng.',form:'两 + 千'}
    ],
    mistakes:[
      {w:'二个人',r:'两个人',why:'Trước lượng từ dùng 两.'},
      {w:'星期两',r:'星期二',why:'Thứ trong tuần dùng 二.'}
    ],
    quiz:[
      {q:'我要___瓶水。',o:['两','二'],a:0,e:'Trước lượng từ → 两.'},
      {q:'今天是___月八号。',o:['二','两'],a:0,e:'Tháng Hai → 二月.'}
    ]
  },
  {
    id:'co-ban', num:45, lesson:'Buổi 10',
    title:'Nói giá tiền: 块 (元) – 毛 (角) – 分',
    tag:'1 块 = 10 毛 = 100 分',
    formula:'Số + 块 + Số + 毛 (+ 分)',
    note:'⚠️ Văn nói dùng 块/毛, văn viết và bảng giá dùng 元/角.',
    tip:'💡 Đơn vị cuối thường được lược: 三块五 = 3,5 đồng; 两块八 = 2,8 đồng.',
    explain:'Đọc giá tiền theo thứ tự 块 → 毛 → 分. 2 đồng nói 两块, 2 hào nói 两毛.',
    rows:[
      {zh:'一斤苹果三块五。',py:'Yì jīn píngguǒ sān kuài wǔ.',vi:'Một cân táo ba đồng rưỡi.',form:'块 + số (毛 lược)'},
      {zh:'两块钱一个。',py:'Liǎng kuài qián yí ge.',vi:'Hai đồng một cái.',form:'两块'},
      {zh:'一共十二块八毛。',py:'Yígòng shí\'èr kuài bā máo.',vi:'Tổng cộng mười hai đồng tám hào.',form:'块 + 毛'},
      {zh:'这本书二十五元。',py:'Zhè běn shū èrshíwǔ yuán.',vi:'Quyển sách này hai mươi lăm tệ.',form:'元 (văn viết)'},
      {zh:'找您两毛。',py:'Zhǎo nín liǎng máo.',vi:'Trả lại ông hai hào.',form:'两毛'}
    ],
    mistakes:[
      {w:'二块',r:'两块',why:'Trước lượng từ tiền dùng 两.'},
      {w:'三块和五毛',r:'三块五 (毛)',why:'Không dùng 和 giữa các đơn vị tiền.'}
    ],
    quiz:[
      {q:'3,5 đồng nói là:',o:['三块五','三五块'],a:0,e:'块 trước, số hào sau.'},
      {q:'2 đồng nói là:',o:['两块','二块'],a:0,e:'两 + lượng từ.'}
    ]
  },
  {
    id:'cau-hoi', num:46, lesson:'Buổi 8',
    title:'Hỏi tuổi: 几岁 / 多大 / 多大年纪',
    tag:'Trẻ em: 几岁 · Ngang tuổi: 多大 · Người lớn tuổi: 多大年纪',
    formula:'(你) 几岁？/ 你多大？/ 您多大年纪？',
    note:'⚠️ Trả lời: Số + 岁, không cần 是: 我二十岁。',
    tip:'💡 Hỏi người lớn tuổi nên dùng 您 cho lịch sự.',
    explain:'Chọn cách hỏi theo đối tượng: trẻ dưới 10 tuổi dùng 几岁; người cùng lứa hoặc trẻ hơn dùng 多大; người lớn tuổi dùng 您多大年纪.',
    rows:[
      {zh:'小朋友，你几岁了？',py:'Xiǎo péngyou, nǐ jǐ suì le?',vi:'Bé ơi, cháu mấy tuổi rồi?',form:'几岁 (trẻ em)'},
      {zh:'你多大了？',py:'Nǐ duō dà le?',vi:'Bạn bao nhiêu tuổi rồi?',form:'多大 (ngang tuổi)'},
      {zh:'您多大年纪了？',py:'Nín duō dà niánjì le?',vi:'Ông/bà bao nhiêu tuổi rồi ạ?',form:'多大年纪 (người lớn tuổi)'},
      {zh:'我今年二十八岁。',py:'Wǒ jīnnián èrshíbā suì.',vi:'Năm nay tôi hai mươi tám tuổi.',form:'Số + 岁'},
      {zh:'他儿子五岁了。',py:'Tā érzi wǔ suì le.',vi:'Con trai anh ấy năm tuổi rồi.',form:'Số + 岁 + 了'}
    ],
    mistakes:[
      {w:'爷爷，你几岁？',r:'爷爷，您多大年纪了？',why:'Hỏi người lớn tuổi phải dùng 多大年纪 và 您.'},
      {w:'我是二十岁。',r:'我二十岁。',why:'Tuổi không cần 是.'}
    ],
    quiz:[
      {q:'Hỏi bà cụ:',o:['奶奶，您多大年纪了？','奶奶，你几岁？'],a:0,e:'Người lớn tuổi → 多大年纪.'},
      {q:'Hỏi bé 5 tuổi:',o:['你几岁了？','您多大年纪了？'],a:0,e:'Trẻ em → 几岁.'}
    ]
  },
  {
    id:'co-ban', num:47, lesson:'Buổi 9, 19',
    title:'Giờ giấc: 几点 / 点 / 分 / 半 / 刻',
    tag:'Số + 点 + Số + 分 · 半 = rưỡi · 一刻 = 15 phút',
    formula:'(S) + giờ + V  ·  几点 + V？',
    note:'⚠️ 2 giờ nói 两点, không nói 二点.',
    tip:'💡 Giờ đứng trước động từ: 我八点上班 (không nói 我上班八点).',
    explain:'Giờ dùng 点, phút dùng 分; rưỡi là 半, 15 phút là 一刻. Mốc giờ đặt trước động từ theo quy tắc Thời gian – Nơi chốn – Động từ.',
    rows:[
      {zh:'现在八点十分。',py:'Xiànzài bā diǎn shí fēn.',vi:'Bây giờ là tám giờ mười phút.',form:'点 + 分'},
      {zh:'我七点半吃早饭。',py:'Wǒ qī diǎn bàn chī zǎofàn.',vi:'Tôi ăn sáng lúc bảy giờ rưỡi.',form:'点 + 半'},
      {zh:'我们两点一刻见。',py:'Wǒmen liǎng diǎn yí kè jiàn.',vi:'Chúng ta gặp nhau lúc hai giờ mười lăm.',form:'两点 + 一刻'},
      {zh:'你几点下班？',py:'Nǐ jǐ diǎn xiàbān?',vi:'Mấy giờ bạn tan làm?',form:'几点 + V?'},
      {zh:'银行九点开门。',py:'Yínháng jiǔ diǎn kāimén.',vi:'Ngân hàng mở cửa lúc chín giờ.',form:'S + giờ + V'}
    ],
    mistakes:[
      {w:'二点',r:'两点',why:'2 giờ dùng 两.'},
      {w:'我吃饭七点。',r:'我七点吃饭。',why:'Giờ đứng trước động từ.'}
    ],
    quiz:[
      {q:'2:30 nói là:',o:['两点半','二点半'],a:0,e:'两点 + 半.'},
      {q:'Câu nào đúng?',o:['我八点上班。','我上班八点。'],a:0,e:'Giờ trước động từ.'}
    ]
  },
  {
    id:'co-ban', num:48, lesson:'Buổi 11, 14',
    title:'Lặp động từ (看看) và V + 一下儿 — Làm thử, một chút',
    tag:'VV / V一V / V + 一下儿',
    formula:'V + V · V + 一 + V · V + 一下儿',
    note:'⚠️ Động từ hai âm tiết lặp dạng ABAB (介绍介绍), không chèn 一.',
    tip:'💡 Dùng để nói nhẹ nhàng, lịch sự: 请等一下儿, 你看看.',
    explain:'Lặp động từ hoặc thêm 一下儿 làm câu mềm mại, mang nghĩa "thử, một chút". Động từ một âm tiết: 看看 / 看一看; hai âm tiết: 介绍介绍 / 介绍一下儿.',
    rows:[
      {zh:'你看看这本书。',py:'Nǐ kànkan zhè běn shū.',vi:'Bạn xem thử quyển sách này.',form:'VV'},
      {zh:'你数一数。',py:'Nǐ shǔ yi shǔ.',vi:'Bạn đếm thử xem.',form:'V一V'},
      {zh:'我介绍一下儿，这是我同屋。',py:'Wǒ jièshào yíxiàr, zhè shì wǒ tóngwū.',vi:'Tôi giới thiệu một chút, đây là bạn cùng phòng của tôi.',form:'V + 一下儿'},
      {zh:'我想问问老师。',py:'Wǒ xiǎng wènwen lǎoshī.',vi:'Tôi muốn hỏi thầy một chút.',form:'VV'},
      {zh:'请你听一听。',py:'Qǐng nǐ tīng yi tīng.',vi:'Mời bạn nghe thử.',form:'V一V'}
    ],
    mistakes:[
      {w:'请你看一下儿看。',r:'请你看一下儿。',why:'Chỉ dùng một cách: VV hoặc V + 一下儿.'},
      {w:'介绍一介绍',r:'介绍介绍 / 介绍一下儿',why:'Động từ hai âm tiết không chèn 一.'}
    ],
    quiz:[
      {q:'请你等___。',o:['一下儿','一点儿'],a:0,e:'Hành động một chút → 一下儿.'},
      {q:'Câu nào đúng?',o:['我们介绍一介绍吧。','我们介绍介绍吧。'],a:1,e:'ABAB.'}
    ]
  },
  {
    id:'cau-phuc', num:49, lesson:'Buổi 13',
    title:'先…再… — Trước… rồi mới…',
    tag:'先 + V1，再 + V2',
    formula:'S + 先 + V1，再 + V2',
    note:'⚠️ 先 và 再 đều đứng sau chủ ngữ, trước động từ.',
    tip:'💡 Có thể thêm 然后: 先…，然后再…',
    explain:'Diễn tả thứ tự hai hành động: 先 (trước tiên) đứng trước động từ thứ nhất, 再 (rồi mới) đứng trước động từ thứ hai.',
    rows:[
      {zh:'我先去银行取钱，再去买东西。',py:'Wǒ xiān qù yínháng qǔ qián, zài qù mǎi dōngxi.',vi:'Tôi đi ngân hàng rút tiền trước rồi mới đi mua đồ.',form:'先 V1，再 V2'},
      {zh:'你先喝点儿水，再说吧。',py:'Nǐ xiān hē diǎnr shuǐ, zài shuō ba.',vi:'Bạn uống chút nước trước rồi hẵng nói.',form:'先 V1，再 V2'},
      {zh:'先学发音，再学汉字。',py:'Xiān xué fāyīn, zài xué Hànzì.',vi:'Học phát âm trước rồi mới học chữ Hán.',form:'先 V1，再 V2'},
      {zh:'我先坐地铁，再坐出租车。',py:'Wǒ xiān zuò dìtiě, zài zuò chūzūchē.',vi:'Tôi đi tàu điện ngầm trước rồi mới đi taxi.',form:'先 V1，再 V2'},
      {zh:'先写名字，再写电话号码。',py:'Xiān xiě míngzi, zài xiě diànhuà hàomǎ.',vi:'Viết tên trước rồi mới viết số điện thoại.',form:'先 V1，再 V2'}
    ],
    mistakes:[
      {w:'我再吃饭，先去商场。',r:'我先吃饭，再去商场。',why:'先 đi với hành động thứ nhất.'},
      {w:'先我吃饭。',r:'我先吃饭。',why:'先 đứng sau chủ ngữ.'}
    ],
    quiz:[
      {q:'我们___吃早饭，再去公司。',o:['先','再','还'],a:0,e:'Hành động trước → 先.'},
      {q:'先看书，___写汉字。',o:['再','先','就'],a:0,e:'Hành động sau → 再.'}
    ]
  },
  {
    id:'co-ban', num:50, lesson:'Buổi 10',
    title:'Giới từ 给 / 跟 + người + động từ',
    tag:'给 + người + V (cho ai) · 跟 + người + V (cùng ai)',
    formula:'S + 给/跟 + người + V + O',
    note:'⚠️ Cụm giới từ đứng TRƯỚC động từ (khác tiếng Việt: "gửi thư cho mẹ" → 给妈妈寄信).',
    tip:'💡 跟…一起 = cùng với… (我跟他一起去).',
    explain:'给 + người: làm gì cho/đến ai. 跟 + người: làm gì cùng ai. Cả cụm đặt trước động từ chính.',
    rows:[
      {zh:'我给妈妈寄了一些照片。',py:'Wǒ gěi māma jìle yìxiē zhàopiàn.',vi:'Tôi gửi cho mẹ một ít ảnh.',form:'给 + người + V'},
      {zh:'我给你买了一杯咖啡。',py:'Wǒ gěi nǐ mǎile yì bēi kāfēi.',vi:'Tôi mua cho bạn một cốc cà phê.',form:'给 + người + V'},
      {zh:'我跟同屋一起去吃饭。',py:'Wǒ gēn tóngwū yìqǐ qù chīfàn.',vi:'Tôi đi ăn cơm cùng bạn cùng phòng.',form:'跟 + người + 一起 + V'},
      {zh:'你跟谁住在一起？',py:'Nǐ gēn shéi zhù zài yìqǐ?',vi:'Bạn sống cùng ai?',form:'跟 + 谁 + V'},
      {zh:'他给我介绍了一家酒店。',py:'Tā gěi wǒ jièshàole yì jiā jiǔdiàn.',vi:'Anh ấy giới thiệu cho tôi một khách sạn.',form:'给 + người + V'}
    ],
    mistakes:[
      {w:'我寄信给妈妈。',r:'我给妈妈寄信。',why:'Cách nói chuẩn: 给 + người đứng trước động từ.'},
      {w:'我去商场跟妈妈。',r:'我跟妈妈去商场。',why:'跟 + người đứng trước động từ.'}
    ],
    quiz:[
      {q:'我___朋友打电话。',o:['给','跟','在'],a:0,e:'Gọi điện cho ai → 给.'},
      {q:'他___我一起去北京。',o:['跟','给','把'],a:0,e:'Cùng ai → 跟.'}
    ]
  },
  {
    id:'tro-tu', num:51, lesson:'Buổi 16–17',
    title:'Kết cấu chữ 的: 红的 / 新的 / 我的 — Lược bỏ danh từ',
    tag:'Adj / Đại từ / N + 的 (= cái…, của…)',
    formula:'… + 的 (danh từ đã rõ, được lược bỏ)',
    note:'⚠️ Chỉ lược danh từ khi người nghe đã biết đang nói về vật gì.',
    tip:'💡 Rất hay dùng khi mua sắm: 我要红的 / 有大一点儿的吗？',
    explain:'Khi danh từ đã rõ trong ngữ cảnh, giữ lại "định ngữ + 的" và bỏ danh từ: 红的 (cái màu đỏ), 我的 (của tôi), 新的 (cái mới).',
    rows:[
      {zh:'这个箱子是我的。',py:'Zhège xiāngzi shì wǒ de.',vi:'Cái vali này là của tôi.',form:'Đại từ + 的'},
      {zh:'我要红的，不要黑的。',py:'Wǒ yào hóng de, bú yào hēi de.',vi:'Tôi muốn cái màu đỏ, không muốn cái màu đen.',form:'Adj + 的'},
      {zh:'新的比旧的贵。',py:'Xīn de bǐ jiù de guì.',vi:'Cái mới đắt hơn cái cũ.',form:'Adj + 的'},
      {zh:'那本书是老师的。',py:'Nà běn shū shì lǎoshī de.',vi:'Quyển sách kia là của thầy.',form:'N + 的'},
      {zh:'你喜欢大的还是小的？',py:'Nǐ xǐhuan dà de háishì xiǎo de?',vi:'Bạn thích cái to hay cái nhỏ?',form:'Adj + 的'}
    ],
    mistakes:[
      {w:'这是我。(ý: của tôi)',r:'这是我的。',why:'Sở hữu cần 的.'},
      {w:'我要红。',r:'我要红的。',why:'Thiếu 的 thì không thành danh từ.'}
    ],
    quiz:[
      {q:'这把雨伞是谁___？',o:['的','了','吗'],a:0,e:'Của ai → 谁的.'},
      {q:'"Tôi muốn cái màu đen" là:',o:['我要黑的。','我要黑。'],a:0,e:'Adj + 的.'}
    ]
  },
  {
    id:'co-ban', num:52, lesson:'Buổi 12',
    title:'Thứ tự địa chỉ & thời gian: từ lớn đến nhỏ',
    tag:'国 → 省 → 市 → 县 → 路/街 → 号 → 楼 → 房间',
    formula:'Đơn vị lớn → … → đơn vị nhỏ',
    note:'⚠️ Ngược với tiếng Việt (số nhà → đường → thành phố).',
    tip:'💡 Ngày tháng cũng vậy: 年 → 月 → 日 → 星期.',
    explain:'Tiếng Trung viết địa chỉ và thời gian từ đơn vị lớn đến nhỏ.',
    rows:[
      {zh:'越南河内市人民路八号。',py:'Yuènán Hénèi Shì Rénmín Lù bā hào.',vi:'Số 8 đường Nhân Dân, Hà Nội, Việt Nam.',form:'国 → 市 → 路 → 号'},
      {zh:'我住在北京路三号二楼。',py:'Wǒ zhù zài Běijīng Lù sān hào èr lóu.',vi:'Tôi ở tầng 2, số 3 đường Bắc Kinh.',form:'路 → 号 → 楼'},
      {zh:'他家在中国北京。',py:'Tā jiā zài Zhōngguó Běijīng.',vi:'Nhà anh ấy ở Bắc Kinh, Trung Quốc.',form:'国 → 市'},
      {zh:'我的房间是五号楼三零二。',py:'Wǒ de fángjiān shì wǔ hào lóu sān líng èr.',vi:'Phòng tôi là phòng 302 tòa nhà số 5.',form:'楼 → 房间'}
    ],
    mistakes:[
      {w:'八号人民路河内',r:'河内人民路八号',why:'Đi từ lớn đến nhỏ.'},
      {w:'二日十一月',r:'十一月二日',why:'Tháng trước, ngày sau.'}
    ],
    quiz:[
      {q:'Địa chỉ đúng:',o:['河内市人民路五号','五号人民路河内市'],a:0,e:'Lớn → nhỏ.'},
      {q:'Ngày đúng:',o:['二零二六年十月一日','一日十月二零二六年'],a:0,e:'Năm → tháng → ngày.'}
    ]
  },
  {
    id:'cau-hoi', num:53, lesson:'Buổi 11',
    title:'怎么 và 怎么样 — Thế nào?',
    tag:'怎么 + V (cách làm / sao lại) · …怎么样？(đánh giá, hỏi ý kiến)',
    formula:'怎么 + V ? · N + 怎么样 ? · …，怎么样？',
    note:'⚠️ 怎么 đứng TRƯỚC động từ; 怎么样 thường đứng cuối câu.',
    tip:'💡 Đề nghị: 我们去喝咖啡，怎么样？',
    explain:'怎么 hỏi cách thức (怎么去？怎么写？) hoặc "sao lại" (你怎么不吃？). 怎么样 hỏi tình hình, đánh giá hoặc xin ý kiến cho một đề nghị.',
    rows:[
      {zh:'这个汉字怎么写？',py:'Zhège Hànzì zěnme xiě?',vi:'Chữ Hán này viết thế nào?',form:'怎么 + V'},
      {zh:'你怎么不去？',py:'Nǐ zěnme bú qù?',vi:'Sao bạn không đi?',form:'怎么 + 不 + V'},
      {zh:'这家饭馆怎么样？',py:'Zhè jiā fànguǎn zěnmeyàng?',vi:'Quán ăn này thế nào?',form:'N + 怎么样?'},
      {zh:'我们去喝咖啡，怎么样？',py:'Wǒmen qù hē kāfēi, zěnmeyàng?',vi:'Chúng ta đi uống cà phê nhé, thế nào?',form:'đề nghị + 怎么样?'},
      {zh:'去天安门怎么走？',py:'Qù Tiān\'ānmén zěnme zǒu?',vi:'Đến Thiên An Môn đi thế nào?',form:'怎么 + 走'}
    ],
    mistakes:[
      {w:'你去怎么样？(ý: đi bằng cách nào)',r:'你怎么去？',why:'Hỏi cách thức dùng 怎么 + V.'},
      {w:'这本书怎么？',r:'这本书怎么样？',why:'Hỏi đánh giá dùng 怎么样.'}
    ],
    quiz:[
      {q:'你的新工作___？',o:['怎么样','怎么'],a:0,e:'Hỏi đánh giá → 怎么样.'},
      {q:'这个汉字___写？',o:['怎么','怎么样'],a:0,e:'Hỏi cách làm → 怎么 + V.'}
    ]
  },
  {
    id:'so-sanh', num:54, lesson:'Buổi 10, 18',
    title:'Tính từ + 一点儿 vs 有(一)点儿 + tính từ',
    tag:'Adj + 一点儿 = …hơn chút · 有点儿 + Adj = hơi… (không hài lòng)',
    formula:'Adj + 一点儿 · 有点儿 + Adj',
    note:'⚠️ 一点儿 đứng SAU tính từ; 有点儿 đứng TRƯỚC tính từ.',
    tip:'💡 Mặc cả: 便宜一点儿吧！ — Phàn nàn: 有点儿贵。',
    explain:'一点儿 sau tính từ để so sánh hoặc yêu cầu ("…hơn một chút"). 有点儿 trước tính từ để than phiền nhẹ ("hơi…").',
    rows:[
      {zh:'能便宜一点儿吗？',py:'Néng piányi yìdiǎnr ma?',vi:'Có thể rẻ hơn một chút không?',form:'Adj + 一点儿 (yêu cầu)'},
      {zh:'这件有点儿大，有小一点儿的吗？',py:'Zhè jiàn yǒudiǎnr dà, yǒu xiǎo yìdiǎnr de ma?',vi:'Chiếc này hơi to, có chiếc nhỏ hơn một chút không?',form:'有点儿 + Adj / Adj + 一点儿'},
      {zh:'这个房间比那个大一点儿。',py:'Zhège fángjiān bǐ nàge dà yìdiǎnr.',vi:'Phòng này to hơn phòng kia một chút.',form:'比… + Adj + 一点儿'},
      {zh:'我有点儿累。',py:'Wǒ yǒudiǎnr lèi.',vi:'Tôi hơi mệt.',form:'有点儿 + Adj'},
      {zh:'请说慢一点儿。',py:'Qǐng shuō màn yìdiǎnr.',vi:'Xin hãy nói chậm một chút.',form:'V + Adj + 一点儿'}
    ],
    mistakes:[
      {w:'有点儿便宜吧！',r:'便宜一点儿吧！',why:'Yêu cầu "rẻ hơn chút" dùng Adj + 一点儿.'},
      {w:'这件衣服一点儿贵。',r:'这件衣服有点儿贵。',why:'"Hơi đắt" dùng 有点儿 + Adj.'}
    ],
    quiz:[
      {q:'这个太贵了，便宜___吧。',o:['一点儿','有点儿'],a:0,e:'Adj + 一点儿.'},
      {q:'今天___冷，多穿点儿衣服。',o:['有点儿','一点儿'],a:0,e:'Hơi lạnh → 有点儿冷.'}
    ]
  },
  {
    id:'trang-tu', num:55, lesson:'Buổi 14',
    title:'也 và 都 — Vị trí và thứ tự 也都',
    tag:'S + 也/都 + V · S + 也都 + V',
    formula:'S + 也 + 都 + V/Adj',
    note:'⚠️ 也, 都 là phó từ: luôn đứng sau chủ ngữ, trước động từ — không đứng đầu câu.',
    tip:'💡 都 tổng kết những người/vật đứng TRƯỚC nó: 这些书我都看过.',
    explain:'也 = cũng; 都 = đều. Khi dùng cả hai, 也 đứng trước 都: 我们也都是留学生.',
    rows:[
      {zh:'我也是越南人。',py:'Wǒ yě shì Yuènán rén.',vi:'Tôi cũng là người Việt Nam.',form:'S + 也 + V'},
      {zh:'我们都是留学生。',py:'Wǒmen dōu shì liúxuéshēng.',vi:'Chúng tôi đều là lưu học sinh.',form:'S + 都 + V'},
      {zh:'他们也都喜欢喝茶。',py:'Tāmen yě dōu xǐhuan hē chá.',vi:'Họ cũng đều thích uống trà.',form:'S + 也都 + V'},
      {zh:'我和他都不喝酒。',py:'Wǒ hé tā dōu bù hē jiǔ.',vi:'Tôi và anh ấy đều không uống rượu.',form:'S + 都不 + V'},
      {zh:'这些书我都看过。',py:'Zhèxiē shū wǒ dōu kànguo.',vi:'Những quyển sách này tôi đều đã đọc.',form:'O + S + 都 + V'}
    ],
    mistakes:[
      {w:'也我是学生。',r:'我也是学生。',why:'也 đứng sau chủ ngữ.'},
      {w:'我们都也是学生。',r:'我们也都是学生。',why:'也 đứng trước 都.'}
    ],
    quiz:[
      {q:'Câu nào đúng?',o:['他们也都是医生。','他们都也是医生。'],a:0,e:'也 + 都.'},
      {q:'我___喜欢喝咖啡。(cũng)',o:['也','都','还'],a:0,e:'Cũng → 也.'}
    ]
  },
  {
    id:'trang-tu', num:56, lesson:'Buổi 10',
    title:'还 (hái) — Còn, vẫn, thêm',
    tag:'还 + V/有 (thêm, còn) · 还 + 在 (vẫn) · 还没 + V (vẫn chưa)',
    formula:'S + 还 + V/Adj',
    note:'⚠️ 还 đứng sau chủ ngữ, trước động từ: 我还没吃饭 (không nói 我没还吃饭).',
    tip:'💡 Người bán hàng hay hỏi: 还要别的吗？ — Còn lấy gì nữa không?',
    explain:'还 có ba nghĩa thường gặp: (1) thêm, nữa: 还要别的吗？ (2) vẫn còn: 他还在公司 (3) vẫn chưa / vẫn không: 还没, 还不.',
    rows:[
      {zh:'你还要喝什么？',py:'Nǐ hái yào hē shénme?',vi:'Bạn còn muốn uống gì nữa?',form:'还 + V (thêm)'},
      {zh:'我还有一个问题。',py:'Wǒ hái yǒu yí ge wèntí.',vi:'Tôi còn một câu hỏi nữa.',form:'还有 (còn)'},
      {zh:'他还在图书馆。',py:'Tā hái zài túshūguǎn.',vi:'Anh ấy vẫn còn ở thư viện.',form:'还在 (vẫn)'},
      {zh:'我还没吃饭。',py:'Wǒ hái méi chīfàn.',vi:'Tôi vẫn chưa ăn cơm.',form:'还没 + V'},
      {zh:'十点了，他还不回家。',py:'Shí diǎn le, tā hái bù huíjiā.',vi:'Mười giờ rồi mà anh ấy vẫn không về nhà.',form:'还不 + V'}
    ],
    mistakes:[
      {w:'我没还吃饭。',r:'我还没吃饭。',why:'还 đứng trước 没.'},
      {w:'还你要什么？',r:'你还要什么？',why:'还 đứng sau chủ ngữ.'}
    ],
    quiz:[
      {q:'他___没回家。',o:['还','也','都'],a:0,e:'Vẫn chưa → 还没.'},
      {q:'你___要买别的吗？',o:['还','再','也'],a:0,e:'Còn… nữa → 还.'}
    ]
  },
  {
    id:'co-ban', num:57, lesson:'Buổi 15',
    title:'好 + động từ — 好吃 / 好喝 / 好看 / 好用',
    tag:'好吃 (ngon) · 好喝 (uống ngon) · 好看 (đẹp) · 好听 (hay) · 好用 (dễ dùng)',
    formula:'(很/不) + 好 + V',
    note:'⚠️ 好 + V đã là tính từ, không chen 的: 很好吃 (không nói 很好的吃).',
    tip:'💡 Ngược nghĩa thường dùng 难: 难吃, 难喝, 难看.',
    explain:'好 ghép với động từ giác quan tạo thành tính từ khen: 好吃, 好喝, 好看, 好听, 好用. Phủ định: 不好吃, 不好看…',
    rows:[
      {zh:'这杯茶很好喝。',py:'Zhè bēi chá hěn hǎohē.',vi:'Chén trà này rất ngon.',form:'很 + 好喝'},
      {zh:'这件衣服不好看。',py:'Zhè jiàn yīfu bù hǎokàn.',vi:'Bộ quần áo này không đẹp.',form:'不 + 好看'},
      {zh:'这个手机很好用。',py:'Zhège shǒujī hěn hǎoyòng.',vi:'Chiếc điện thoại này rất dễ dùng.',form:'很 + 好用'},
      {zh:'中药不好喝。',py:'Zhōngyào bù hǎohē.',vi:'Thuốc bắc không dễ uống.',form:'不 + 好喝'},
      {zh:'妈妈做的饭最好吃。',py:'Māma zuò de fàn zuì hǎochī.',vi:'Cơm mẹ nấu ngon nhất.',form:'最 + 好吃'}
    ],
    mistakes:[
      {w:'很好的吃',r:'很好吃',why:'好吃 là một từ, không chen 的.'},
      {w:'饺子是好吃。',r:'饺子很好吃。',why:'Tính từ không dùng 是.'}
    ],
    quiz:[
      {q:'这杯奶茶很好___。',o:['喝','吃','看'],a:0,e:'Đồ uống → 好喝.'},
      {q:'这本词典很好___。(dễ dùng)',o:['用','喝','吃'],a:0,e:'Dễ dùng → 好用.'}
    ]
  }
];

// ---------------------------------------------------
// VÍ DỤ BỔ SUNG — để mỗi điểm ngữ pháp có ít nhất 8 câu
// ---------------------------------------------------
(function addMoreGrammarExamples() {
  const MORE = {
    7: [{zh:'他们是你的同事吗？',py:'Tāmen shì nǐ de tóngshì ma?',vi:'Họ là đồng nghiệp của bạn à?',form:'S + 是 + N + 吗?'}],
    10: [
      {zh:'你要大的还是小的？',py:'Nǐ yào dà de háishì xiǎo de?',vi:'Bạn muốn cái to hay cái nhỏ?',form:'A 还是 B?'},
      {zh:'我们坐火车去还是坐飞机去？',py:'Wǒmen zuò huǒchē qù háishì zuò fēijī qù?',vi:'Chúng ta đi tàu hỏa hay đi máy bay?',form:'V+A 还是 V+B?'}
    ],
    13: [{zh:'你见过他的女朋友吗？',py:'Nǐ jiànguo tā de nǚpéngyou ma?',vi:'Bạn đã từng gặp bạn gái anh ấy chưa?',form:'V + 过 + O + 吗?'}],
    14: [{zh:'他穿着一件红色的毛衣。',py:'Tā chuānzhe yí jiàn hóngsè de máoyī.',vi:'Anh ấy đang mặc một chiếc áo len màu đỏ.',form:'V + 着 + O'}],
    18: [{zh:'我每天晚上在家学汉语。',py:'Wǒ měitiān wǎnshang zài jiā xué Hànyǔ.',vi:'Tối nào tôi cũng học tiếng Trung ở nhà.',form:'S + TG + Nơi + V + O'}],
    20: [{zh:'他开车开得很慢。',py:'Tā kāichē kāi de hěn màn.',vi:'Anh ấy lái xe rất chậm.',form:'V + O + V + 得 + 很 + Adj'}],
    24: [{zh:'请把你的名字写在这儿。',py:'Qǐng bǎ nǐ de míngzi xiě zài zhèr.',vi:'Hãy viết tên của bạn vào đây.',form:'把 + O + V + 在 + Nơi'}],
    25: [
      {zh:'我的手机被弟弟拿走了。',py:'Wǒ de shǒujī bèi dìdi ná zǒu le.',vi:'Điện thoại của tôi bị em trai cầm đi rồi.',form:'S + 被 + người + V + 走了'},
      {zh:'他被老师叫到办公室了。',py:'Tā bèi lǎoshī jiào dào bàngōngshì le.',vi:'Cậu ấy bị thầy gọi lên văn phòng.',form:'S + 被 + người + V + 到 + Nơi'}
    ],
    26: [{zh:'你是什么时候来河内的？',py:'Nǐ shì shénme shíhou lái Hénèi de?',vi:'Bạn đến Hà Nội khi nào?',form:'是 + thời gian + V + 的'}],
    27: [
      {zh:'因为今天是星期天，所以银行不开门。',py:'Yīnwèi jīntiān shì xīngqītiān, suǒyǐ yínháng bù kāimén.',vi:'Vì hôm nay là Chủ nhật nên ngân hàng không mở cửa.',form:'因为…，所以…'},
      {zh:'因为我想去中国工作，所以学汉语。',py:'Yīnwèi wǒ xiǎng qù Zhōngguó gōngzuò, suǒyǐ xué Hànyǔ.',vi:'Vì muốn sang Trung Quốc làm việc nên tôi học tiếng Trung.',form:'因为…，所以…'}
    ],
    28: [
      {zh:'虽然他是越南人，但是汉语说得很好。',py:'Suīrán tā shì Yuènán rén, dànshì Hànyǔ shuō de hěn hǎo.',vi:'Tuy là người Việt nhưng anh ấy nói tiếng Trung rất giỏi.',form:'虽然…，但是…'},
      {zh:'虽然天气很冷，可是他没穿毛衣。',py:'Suīrán tiānqì hěn lěng, kěshì tā méi chuān máoyī.',vi:'Tuy trời lạnh nhưng anh ấy không mặc áo len.',form:'虽然…，可是…'}
    ],
    29: [
      {zh:'如果你有时间，就来我家玩儿吧。',py:'Rúguǒ nǐ yǒu shíjiān, jiù lái wǒ jiā wánr ba.',vi:'Nếu bạn có thời gian thì đến nhà tôi chơi nhé.',form:'如果…，就…'},
      {zh:'如果你不懂，就问老师。',py:'Rúguǒ nǐ bù dǒng, jiù wèn lǎoshī.',vi:'Nếu bạn không hiểu thì hỏi thầy.',form:'如果…，就…'}
    ],
    30: [
      {zh:'他不但是我的老师，而且是我的朋友。',py:'Tā búdàn shì wǒ de lǎoshī, érqiě shì wǒ de péngyou.',vi:'Ông ấy không chỉ là thầy mà còn là bạn của tôi.',form:'S + 不但…，而且…'},
      {zh:'这个房间又大又干净。',py:'Zhège fángjiān yòu dà yòu gānjìng.',vi:'Căn phòng này vừa rộng vừa sạch.',form:'又…又…'}
    ],
    32: [
      {zh:'这个箱子有点儿重。',py:'Zhège xiāngzi yǒudiǎnr zhòng.',vi:'Cái vali này hơi nặng.',form:'有点儿 + Adj'},
      {zh:'外面有点儿冷。',py:'Wàimiàn yǒudiǎnr lěng.',vi:'Ngoài trời hơi lạnh.',form:'有点儿 + Adj'}
    ],
    33: [{zh:'你看见我的雨伞了吗？',py:'Nǐ kànjiàn wǒ de yǔsǎn le ma?',vi:'Bạn có thấy cái ô của tôi không?',form:'看见 + O + 了吗?'}],
    34: [{zh:'我只会说一点儿汉语。',py:'Wǒ zhǐ huì shuō yìdiǎnr Hànyǔ.',vi:'Tôi chỉ biết nói một chút tiếng Trung.',form:'只 + 会 + V'}],
    35: [{zh:'从这儿到机场大概要一个小时。',py:'Cóng zhèr dào jīchǎng dàgài yào yí ge xiǎoshí.',vi:'Từ đây đến sân bay mất khoảng một tiếng.',form:'大概 + 要 + thời gian'}],
    36: [{zh:'全家人都去机场送他。',py:'Quán jiā rén dōu qù jīchǎng sòng tā.',vi:'Cả nhà đều ra sân bay tiễn anh ấy.',form:'全 + N + 都'}],
    38: [{zh:'上课的时候不要说话。',py:'Shàngkè de shíhou búyào shuōhuà.',vi:'Trong giờ học đừng nói chuyện.',form:'不要 + V'}],
    43: [
      {zh:'你们班有多少个学生？',py:'Nǐmen bān yǒu duōshao ge xuésheng?',vi:'Lớp các bạn có bao nhiêu học sinh?',form:'多少 + 个 + N'},
      {zh:'你的电话号码是多少？',py:'Nǐ de diànhuà hàomǎ shì duōshao?',vi:'Số điện thoại của bạn là bao nhiêu?',form:'…是多少?'}
    ],
    44: [
      {zh:'我买了两斤香蕉。',py:'Wǒ mǎile liǎng jīn xiāngjiāo.',vi:'Tôi mua hai cân chuối.',form:'两 + 斤'},
      {zh:'第二课很难。',py:'Dì èr kè hěn nán.',vi:'Bài thứ hai rất khó.',form:'第二 (số thứ tự)'}
    ],
    45: [
      {zh:'一杯咖啡十八块。',py:'Yì bēi kāfēi shíbā kuài.',vi:'Một cốc cà phê mười tám đồng.',form:'Số + 块'},
      {zh:'这件毛衣九十九块九。',py:'Zhè jiàn máoyī jiǔshíjiǔ kuài jiǔ.',vi:'Chiếc áo len này chín mươi chín đồng chín.',form:'块 + số (毛 lược)'},
      {zh:'一个包子一块五毛钱。',py:'Yí ge bāozi yí kuài wǔ máo qián.',vi:'Một cái bánh bao một đồng năm hào.',form:'块 + 毛 + 钱'}
    ],
    46: [
      {zh:'你妹妹今年多大？',py:'Nǐ mèimei jīnnián duō dà?',vi:'Em gái bạn năm nay bao nhiêu tuổi?',form:'多大?'},
      {zh:'我爷爷今年八十岁了。',py:'Wǒ yéye jīnnián bāshí suì le.',vi:'Ông tôi năm nay tám mươi tuổi rồi.',form:'Số + 岁 + 了'},
      {zh:'他比我小三岁。',py:'Tā bǐ wǒ xiǎo sān suì.',vi:'Anh ấy kém tôi ba tuổi.',form:'比 + 小 + số + 岁'}
    ],
    47: [
      {zh:'电影七点四十五分开始。',py:'Diànyǐng qī diǎn sìshíwǔ fēn kāishǐ.',vi:'Phim bắt đầu lúc bảy giờ bốn mươi lăm.',form:'点 + 分 + V'},
      {zh:'我每天十一点睡觉。',py:'Wǒ měitiān shíyī diǎn shuìjiào.',vi:'Mỗi ngày tôi đi ngủ lúc mười một giờ.',form:'S + giờ + V'},
      {zh:'你明天几点起床？',py:'Nǐ míngtiān jǐ diǎn qǐchuáng?',vi:'Ngày mai bạn mấy giờ dậy?',form:'几点 + V?'}
    ],
    48: [
      {zh:'我们休息一下儿吧。',py:'Wǒmen xiūxi yíxiàr ba.',vi:'Chúng ta nghỉ một chút đi.',form:'V + 一下儿'},
      {zh:'你尝尝这个菜。',py:'Nǐ chángchang zhège cài.',vi:'Bạn nếm thử món này xem.',form:'VV'},
      {zh:'周末我常常在家看看书，听听音乐。',py:'Zhōumò wǒ chángcháng zài jiā kànkan shū, tīngting yīnyuè.',vi:'Cuối tuần tôi thường ở nhà đọc sách, nghe nhạc.',form:'VV, VV'}
    ],
    49: [
      {zh:'你先洗手，再吃饭。',py:'Nǐ xiān xǐ shǒu, zài chīfàn.',vi:'Con rửa tay trước rồi hẵng ăn cơm.',form:'先 V1，再 V2'},
      {zh:'我们先去换钱，再去酒店。',py:'Wǒmen xiān qù huàn qián, zài qù jiǔdiàn.',vi:'Chúng ta đi đổi tiền trước rồi mới về khách sạn.',form:'先 V1，再 V2'},
      {zh:'先看看，再决定买不买。',py:'Xiān kànkan, zài juédìng mǎi bu mǎi.',vi:'Xem trước đã rồi mới quyết định có mua hay không.',form:'先 V1，再 V2'}
    ],
    50: [
      {zh:'晚上我给你打电话。',py:'Wǎnshang wǒ gěi nǐ dǎ diànhuà.',vi:'Buổi tối tôi gọi điện cho bạn.',form:'给 + người + V'},
      {zh:'我想跟你说一件事。',py:'Wǒ xiǎng gēn nǐ shuō yí jiàn shì.',vi:'Tôi muốn nói với bạn một chuyện.',form:'跟 + người + V'},
      {zh:'妈妈给我做了很多菜。',py:'Māma gěi wǒ zuòle hěn duō cài.',vi:'Mẹ nấu cho tôi rất nhiều món.',form:'给 + người + V'}
    ],
    51: [
      {zh:'这件衣服不是我的，是我姐姐的。',py:'Zhè jiàn yīfu bú shì wǒ de, shì wǒ jiějie de.',vi:'Bộ quần áo này không phải của tôi, là của chị tôi.',form:'Đại từ / N + 的'},
      {zh:'有便宜一点儿的吗？',py:'Yǒu piányi yìdiǎnr de ma?',vi:'Có cái nào rẻ hơn một chút không?',form:'Adj + 一点儿 + 的'},
      {zh:'我的手机是黑的，他的是白的。',py:'Wǒ de shǒujī shì hēi de, tā de shì bái de.',vi:'Điện thoại của tôi màu đen, của anh ấy màu trắng.',form:'Adj + 的 / Đại từ + 的'}
    ],
    52: [
      {zh:'请寄到中国上海市南京路十号。',py:'Qǐng jì dào Zhōngguó Shànghǎi Shì Nánjīng Lù shí hào.',vi:'Xin gửi đến số 10 đường Nam Kinh, Thượng Hải, Trung Quốc.',form:'国 → 市 → 路 → 号'},
      {zh:'他住在三号楼五层。',py:'Tā zhù zài sān hào lóu wǔ céng.',vi:'Anh ấy ở tầng 5 tòa nhà số 3.',form:'楼 → 层'},
      {zh:'明天上午九点见。',py:'Míngtiān shàngwǔ jiǔ diǎn jiàn.',vi:'Chín giờ sáng mai gặp nhé.',form:'ngày → buổi → giờ'},
      {zh:'我是二零零零年五月出生的。',py:'Wǒ shì èr líng líng líng nián wǔ yuè chūshēng de.',vi:'Tôi sinh vào tháng 5 năm 2000.',form:'年 → 月'}
    ],
    53: [
      {zh:'你怎么来了？',py:'Nǐ zěnme lái le?',vi:'Sao bạn lại đến đây?',form:'怎么 + V (sao lại)'},
      {zh:'你最近怎么样？',py:'Nǐ zuìjìn zěnmeyàng?',vi:'Dạo này bạn thế nào?',form:'S + 怎么样?'},
      {zh:'这个用汉语怎么说？',py:'Zhège yòng Hànyǔ zěnme shuō?',vi:'Cái này tiếng Trung nói thế nào?',form:'怎么 + 说'}
    ],
    54: [
      {zh:'这个菜有点儿辣。',py:'Zhège cài yǒudiǎnr là.',vi:'Món này hơi cay.',form:'有点儿 + Adj'},
      {zh:'你明天来早一点儿吧。',py:'Nǐ míngtiān lái zǎo yìdiǎnr ba.',vi:'Mai bạn đến sớm một chút nhé.',form:'V + Adj + 一点儿'},
      {zh:'他今天有点儿不高兴。',py:'Tā jīntiān yǒudiǎnr bù gāoxìng.',vi:'Hôm nay anh ấy hơi không vui.',form:'有点儿 + 不 + Adj'}
    ],
    55: [
      {zh:'我们也都喜欢中国菜。',py:'Wǒmen yě dōu xǐhuan Zhōngguó cài.',vi:'Chúng tôi cũng đều thích món Trung Quốc.',form:'S + 也都 + V'},
      {zh:'他们都会说汉语。',py:'Tāmen dōu huì shuō Hànyǔ.',vi:'Họ đều biết nói tiếng Trung.',form:'S + 都 + V'},
      {zh:'他也不知道。',py:'Tā yě bù zhīdào.',vi:'Anh ấy cũng không biết.',form:'S + 也不 + V'}
    ],
    56: [
      {zh:'你还想吃什么？',py:'Nǐ hái xiǎng chī shénme?',vi:'Bạn còn muốn ăn gì nữa?',form:'还 + 想 + V'},
      {zh:'我还没去过中国。',py:'Wǒ hái méi qùguo Zhōngguó.',vi:'Tôi vẫn chưa từng đến Trung Quốc.',form:'还没 + V + 过'},
      {zh:'都十二点了，你还在工作？',py:'Dōu shí\'èr diǎn le, nǐ hái zài gōngzuò?',vi:'Đã mười hai giờ rồi mà bạn vẫn đang làm việc à?',form:'还在 + V'}
    ],
    57: [
      {zh:'这首歌很好听。',py:'Zhè shǒu gē hěn hǎotīng.',vi:'Bài hát này rất hay.',form:'很 + 好听'},
      {zh:'这个菜不好吃。',py:'Zhège cài bù hǎochī.',vi:'Món này không ngon.',form:'不 + 好吃'},
      {zh:'你穿这件衣服很好看。',py:'Nǐ chuān zhè jiàn yīfu hěn hǎokàn.',vi:'Bạn mặc bộ quần áo này rất đẹp.',form:'很 + 好看'}
    ]
  };
  Object.keys(MORE).forEach(k => {
    const n = +k;
    if (GRAMMAR_EXTRA[n]) GRAMMAR_EXTRA[n].more = (GRAMMAR_EXTRA[n].more || []).concat(MORE[k]);
    else {
      const g = GRAMMAR_NEW.find(x => x.num === n);
      if (g) g.rows = g.rows.concat(MORE[k]);
    }
  });
})();
