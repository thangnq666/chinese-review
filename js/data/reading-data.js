// ===================================================
// READING_DATA — Bài đọc (dịch + phiên âm từng dòng + hỗ trợ đọc)
// Nguồn: "Bài đọc 1.pdf"
// ===================================================
const READING_DATA = [
  {
    title: '我的生活和梦想 – Cuộc sống và ước mơ của tôi',
    lines: [
      { zh: '我的生活和梦想', py: 'Wǒ de shēnghuó hé mèngxiǎng', vi: 'Cuộc sống và ước mơ của tôi' },
      { zh: '我叫李明，今年二十二岁，是一名大学生。', py: 'Wǒ jiào Lǐ Míng, jīnnián èrshí\'èr suì, shì yì míng dàxuéshēng.', vi: 'Tôi tên là Lý Minh, năm nay 22 tuổi, là một sinh viên đại học.' },
      { zh: '我家住在一个安静的小城市，离学校不太远。', py: 'Wǒ jiā zhù zài yí gè ānjìng de xiǎo chéngshì, lí xuéxiào bú tài yuǎn.', vi: 'Nhà tôi ở một thành phố nhỏ yên tĩnh, cách trường không xa lắm.' },
      { zh: '我每天早上七点起床，洗脸、刷牙以后，就骑自行车去学校。', py: 'Wǒ měitiān zǎoshang qī diǎn qǐchuáng, xǐliǎn, shuāyá yǐhòu, jiù qí zìxíngchē qù xuéxiào.', vi: 'Mỗi sáng tôi dậy lúc 7 giờ, rửa mặt, đánh răng xong thì đạp xe đạp đến trường.' },
      { zh: '学校里有很多老师和同学。', py: 'Xuéxiào lǐ yǒu hěn duō lǎoshī hé tóngxué.', vi: 'Trong trường có rất nhiều thầy cô và bạn học.' },
      { zh: '大家都很热情，也喜欢帮助别人。', py: 'Dàjiā dōu hěn rèqíng, yě xǐhuān bāngzhù biérén.', vi: 'Mọi người đều rất nhiệt tình, cũng thích giúp đỡ người khác.' },
      { zh: '下课以后，我们常常一起聊天、唱歌、打篮球或者踢足球。', py: 'Xiàkè yǐhòu, wǒmen chángcháng yìqǐ liáotiān, chànggē, dǎ lánqiú huòzhě tī zúqiú.', vi: 'Sau khi tan học, chúng tôi thường cùng nhau trò chuyện, hát, chơi bóng rổ hoặc đá bóng.' },
      { zh: '有时候，我们还去图书馆看书，学习汉语和英语。', py: 'Yǒu shíhou, wǒmen hái qù túshūguǎn kànshū, xuéxí Hànyǔ hé Yīngyǔ.', vi: 'Thỉnh thoảng, chúng tôi còn đến thư viện đọc sách, học tiếng Trung và tiếng Anh.' },
      { zh: '我很喜欢中国文化，也喜欢中国菜，比如饺子、包子、面条、米饭和火锅。', py: 'Wǒ hěn xǐhuān Zhōngguó wénhuà, yě xǐhuān Zhōngguó cài, bǐrú jiǎozi, bāozi, miàntiáo, mǐfàn hé huǒguō.', vi: 'Tôi rất thích văn hóa Trung Quốc, cũng thích món ăn Trung Quốc, ví dụ như sủi cảo, bánh bao, mì sợi, cơm và lẩu.' },
      { zh: '我觉得学习汉语虽然不容易，但是非常有意思。', py: 'Wǒ juéde xuéxí Hànyǔ suīrán bù róngyì, dànshì fēicháng yǒu yìsi.', vi: 'Tôi thấy học tiếng Trung tuy không dễ, nhưng rất thú vị.' },
      { zh: '每天我都会认真练习听、说、读、写，希望以后可以说一口流利的汉语。', py: 'Měitiān wǒ dōu huì rènzhēn liànxí tīng, shuō, dú, xiě, xīwàng yǐhòu kěyǐ shuō yìkǒu liúlì de Hànyǔ.', vi: 'Mỗi ngày tôi đều chăm chỉ luyện nghe, nói, đọc, viết, hy vọng sau này có thể nói tiếng Trung lưu loát.' },
      { zh: '周末的时候，我喜欢和家人一起去公园散步。', py: 'Zhōumò de shíhou, wǒ xǐhuān hé jiārén yìqǐ qù gōngyuán sànbù.', vi: 'Vào cuối tuần, tôi thích cùng gia đình đi dạo ở công viên.' },
      { zh: '春天有花，夏天有树，秋天有很多水果，冬天有时候会下雪。', py: 'Chūntiān yǒu huā, xiàtiān yǒu shù, qiūtiān yǒu hěn duō shuǐguǒ, dōngtiān yǒu shíhou huì xiàxuě.', vi: 'Mùa xuân có hoa, mùa hè có cây, mùa thu có nhiều hoa quả, mùa đông thỉnh thoảng có tuyết rơi.' },
      { zh: '天气好的时候，我们还会照相、放风筝、爬山或者骑车。', py: 'Tiānqì hǎo de shíhou, wǒmen hái huì zhàoxiàng, fàng fēngzheng, páshān huòzhě qíchē.', vi: 'Khi thời tiết đẹp, chúng tôi còn chụp ảnh, thả diều, leo núi hoặc đạp xe.' },
      { zh: '我的朋友来自不同的地方。', py: 'Wǒ de péngyou láizì bùtóng de dìfang.', vi: 'Bạn bè của tôi đến từ những nơi khác nhau.' },
      { zh: '有的人喜欢音乐，有的人喜欢画画，还有的人喜欢游泳、跑步或者打羽毛球。', py: 'Yǒude rén xǐhuān yīnyuè, yǒude rén xǐhuān huàhuà, hái yǒude rén xǐhuān yóuyǒng, pǎobù huòzhě dǎ yǔmáoqiú.', vi: 'Có người thích âm nhạc, có người thích vẽ tranh, còn có người thích bơi lội, chạy bộ hoặc đánh cầu lông.' },
      { zh: '我们常常互相帮助，一起解决学习和生活中的问题。', py: 'Wǒmen chángcháng hùxiāng bāngzhù, yìqǐ jiějué xuéxí hé shēnghuó zhōng de wèntí.', vi: 'Chúng tôi thường xuyên giúp đỡ lẫn nhau, cùng nhau giải quyết các vấn đề trong học tập và cuộc sống.' },
      { zh: '我的梦想是当一名优秀的汉语老师。', py: 'Wǒ de mèngxiǎng shì dāng yì míng yōuxiù de Hànyǔ lǎoshī.', vi: 'Ước mơ của tôi là trở thành một giáo viên tiếng Trung xuất sắc.' },
      { zh: '我希望以后能认识更多中国朋友，也希望有机会去北京、上海、西安、杭州和广州旅行，了解中国不同地方的风景、美食和文化。', py: 'Wǒ xīwàng yǐhòu néng rènshi gèng duō Zhōngguó péngyou, yě xīwàng yǒu jīhuì qù Běijīng, Shànghǎi, Xī\'ān, Hángzhōu hé Guǎngzhōu lǚxíng, liǎojiě Zhōngguó bùtóng dìfang de fēngjǐng, měishí hé wénhuà.', vi: 'Tôi hy vọng sau này có thể quen biết thêm nhiều bạn bè Trung Quốc, cũng hy vọng có cơ hội đi Bắc Kinh, Thượng Hải, Tây An, Hàng Châu và Quảng Châu du lịch, tìm hiểu phong cảnh, ẩm thực và văn hóa của các vùng khác nhau ở Trung Quốc.' },
      { zh: '我相信，只要每天坚持学习，不怕犯错误，多听、多说、多读、多写，我的汉语一定会越来越好，我的梦想也一定会实现。', py: 'Wǒ xiāngxìn, zhǐyào měitiān jiānchí xuéxí, bú pà fàn cuòwù, duō tīng, duō shuō, duō dú, duō xiě, wǒ de Hànyǔ yídìng huì yuè lái yuè hǎo, wǒ de mèngxiǎng yě yídìng huì shíxiàn.', vi: 'Tôi tin rằng, chỉ cần mỗi ngày kiên trì học tập, không sợ mắc lỗi, nghe nhiều, nói nhiều, đọc nhiều, viết nhiều, tiếng Trung của tôi nhất định sẽ ngày càng tốt hơn, ước mơ của tôi cũng nhất định sẽ thực hiện được.' },
    ]
  }
];
