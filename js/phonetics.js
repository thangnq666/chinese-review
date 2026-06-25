// ===================================================
const INITIALS_DATA = [
  { group:'Môi (唇音)', items:[
    { init:'b', desc:'≈ "p" tiếng Việt (không bật hơi)',
      ex:[{zh:'八',py:'bā',vi:'tám'},{zh:'爸',py:'bà',vi:'bố'},{zh:'白',py:'bái',vi:'trắng'},{zh:'不',py:'bù',vi:'không'},{zh:'被',py:'bèi',vi:'bị/chăn'},{zh:'本',py:'běn',vi:'quyển/gốc'},{zh:'比',py:'bǐ',vi:'so sánh'},{zh:'饱',py:'bǎo',vi:'no'},{zh:'冰',py:'bīng',vi:'băng'},{zh:'帮',py:'bāng',vi:'giúp đỡ'}]},
    { init:'p', desc:'≈ "ph" tiếng Việt (bật hơi)',
      ex:[{zh:'爬',py:'pá',vi:'leo trèo'},{zh:'朋',py:'péng',vi:'bạn bè'},{zh:'跑',py:'pǎo',vi:'chạy'},{zh:'漂',py:'piào',vi:'đẹp/trôi'},{zh:'啤',py:'pí',vi:'bia'},{zh:'苹',py:'píng',vi:'táo (苹果)'},{zh:'旁',py:'páng',vi:'bên cạnh'},{zh:'便',py:'piàn',vi:'thuận tiện'},{zh:'牌',py:'pái',vi:'biển/bài'},{zh:'普',py:'pǔ',vi:'phổ thông'}]},
    { init:'m', desc:'≈ "m" tiếng Việt',
      ex:[{zh:'妈',py:'mā',vi:'mẹ'},{zh:'猫',py:'māo',vi:'mèo'},{zh:'门',py:'mén',vi:'cửa'},{zh:'没',py:'méi',vi:'không có'},{zh:'买',py:'mǎi',vi:'mua'},{zh:'名',py:'míng',vi:'tên/nổi tiếng'},{zh:'面',py:'miàn',vi:'mặt/mì'},{zh:'忙',py:'máng',vi:'bận'},{zh:'米',py:'mǐ',vi:'gạo/mét'},{zh:'慢',py:'màn',vi:'chậm'}]},
    { init:'f', desc:'≈ "ph" tiếng Anh (răng-môi)',
      ex:[{zh:'发',py:'fā',vi:'phát'},{zh:'饭',py:'fàn',vi:'cơm'},{zh:'飞',py:'fēi',vi:'bay'},{zh:'分',py:'fēn',vi:'phút/chia'},{zh:'房',py:'fáng',vi:'phòng'},{zh:'法',py:'fǎ',vi:'pháp luật'},{zh:'方',py:'fāng',vi:'phương'},{zh:'风',py:'fēng',vi:'gió'},{zh:'服',py:'fú',vi:'quần áo'},{zh:'复',py:'fù',vi:'lại/phức'}]},
  ]},
  { group:'Đầu lưỡi (舌尖音)', items:[
    { init:'d', desc:'≈ "t" tiếng Việt (không bật hơi)',
      ex:[{zh:'大',py:'dà',vi:'to lớn'},{zh:'都',py:'dōu',vi:'đều/cả'},{zh:'点',py:'diǎn',vi:'giờ/chấm'},{zh:'的',py:'de',vi:'trợ từ sở hữu'},{zh:'等',py:'děng',vi:'chờ'},{zh:'对',py:'duì',vi:'đúng'},{zh:'地',py:'dì',vi:'đất'},{zh:'但',py:'dàn',vi:'nhưng'},{zh:'懂',py:'dǒng',vi:'hiểu'},{zh:'多',py:'duō',vi:'nhiều'}]},
    { init:'t', desc:'≈ "th" tiếng Việt (bật hơi)',
      ex:[{zh:'他',py:'tā',vi:'anh ấy'},{zh:'天',py:'tiān',vi:'trời/ngày'},{zh:'头',py:'tóu',vi:'đầu'},{zh:'同',py:'tóng',vi:'cùng'},{zh:'太',py:'tài',vi:'quá'},{zh:'听',py:'tīng',vi:'nghe'},{zh:'题',py:'tí',vi:'đề bài'},{zh:'图',py:'tú',vi:'hình ảnh'},{zh:'特',py:'tè',vi:'đặc biệt'},{zh:'停',py:'tíng',vi:'dừng lại'}]},
    { init:'n', desc:'≈ "n" tiếng Việt',
      ex:[{zh:'你',py:'nǐ',vi:'bạn'},{zh:'难',py:'nán',vi:'khó'},{zh:'牛',py:'niú',vi:'bò'},{zh:'哪',py:'nǎ',vi:'nào'},{zh:'年',py:'nián',vi:'năm'},{zh:'女',py:'nǚ',vi:'nữ'},{zh:'能',py:'néng',vi:'có thể'},{zh:'南',py:'nán',vi:'phía nam'},{zh:'奶',py:'nǎi',vi:'sữa/bà'},{zh:'内',py:'nèi',vi:'bên trong'}]},
    { init:'l', desc:'≈ "l" tiếng Việt',
      ex:[{zh:'来',py:'lái',vi:'đến'},{zh:'老',py:'lǎo',vi:'già/lão'},{zh:'路',py:'lù',vi:'đường'},{zh:'冷',py:'lěng',vi:'lạnh'},{zh:'了',py:'le',vi:'trợ từ hoàn thành'},{zh:'两',py:'liǎng',vi:'hai (cái)'},{zh:'楼',py:'lóu',vi:'tầng/tòa nhà'},{zh:'蓝',py:'lán',vi:'màu xanh'},{zh:'留',py:'liú',vi:'ở lại'},{zh:'绿',py:'lǜ',vi:'màu xanh lá'}]},
  ]},
  { group:'Gốc lưỡi (舌根音)', items:[
    { init:'g', desc:'≈ "c" tiếng Việt (không bật hơi)',
      ex:[{zh:'哥',py:'gē',vi:'anh trai'},{zh:'国',py:'guó',vi:'quốc gia'},{zh:'高',py:'gāo',vi:'cao'},{zh:'贵',py:'guì',vi:'đắt/quý'},{zh:'工',py:'gōng',vi:'công/việc'},{zh:'狗',py:'gǒu',vi:'chó'},{zh:'馆',py:'guǎn',vi:'quán/nhà'},{zh:'更',py:'gèng',vi:'càng'},{zh:'跟',py:'gēn',vi:'theo/với'},{zh:'刚',py:'gāng',vi:'vừa mới'}]},
    { init:'k', desc:'≈ "kh" tiếng Việt (bật hơi)',
      ex:[{zh:'开',py:'kāi',vi:'mở'},{zh:'课',py:'kè',vi:'bài học'},{zh:'口',py:'kǒu',vi:'miệng'},{zh:'看',py:'kàn',vi:'xem'},{zh:'快',py:'kuài',vi:'nhanh'},{zh:'可',py:'kě',vi:'có thể'},{zh:'客',py:'kè',vi:'khách'},{zh:'苦',py:'kǔ',vi:'đắng/khổ'},{zh:'块',py:'kuài',vi:'mảnh/tệ'},{zh:'空',py:'kōng',vi:'rỗng/trống'}]},
    { init:'h', desc:'≈ "h" mạnh hơn tiếng Việt',
      ex:[{zh:'好',py:'hǎo',vi:'tốt'},{zh:'喝',py:'hē',vi:'uống'},{zh:'回',py:'huí',vi:'về'},{zh:'还',py:'hái',vi:'còn/vẫn'},{zh:'话',py:'huà',vi:'lời nói'},{zh:'很',py:'hěn',vi:'rất'},{zh:'号',py:'hào',vi:'số'},{zh:'后',py:'hòu',vi:'sau'},{zh:'和',py:'hé',vi:'và'},{zh:'欢',py:'huān',vi:'vui mừng'}]},
  ]},
  { group:'Mặt lưỡi (舌面音)', items:[
    { init:'j', desc:'≈ "ch" tiếng Việt (không bật hơi)',
      ex:[{zh:'鸡',py:'jī',vi:'gà'},{zh:'家',py:'jiā',vi:'nhà/gia đình'},{zh:'几',py:'jǐ',vi:'mấy'},{zh:'叫',py:'jiào',vi:'gọi/tên là'},{zh:'今',py:'jīn',vi:'nay/hiện tại'},{zh:'进',py:'jìn',vi:'vào'},{zh:'教',py:'jiāo',vi:'dạy'},{zh:'结',py:'jiē',vi:'kết'},{zh:'九',py:'jiǔ',vi:'chín'},{zh:'见',py:'jiàn',vi:'gặp/nhìn thấy'}]},
    { init:'q', desc:'≈ "ch" bật hơi (mặt lưỡi)',
      ex:[{zh:'去',py:'qù',vi:'đi'},{zh:'钱',py:'qián',vi:'tiền'},{zh:'请',py:'qǐng',vi:'mời'},{zh:'前',py:'qián',vi:'trước'},{zh:'起',py:'qǐ',vi:'dậy/bắt đầu'},{zh:'清',py:'qīng',vi:'trong/thanh'},{zh:'情',py:'qíng',vi:'tình cảm'},{zh:'全',py:'quán',vi:'toàn bộ'},{zh:'秋',py:'qiū',vi:'mùa thu'},{zh:'群',py:'qún',vi:'nhóm/váy'}]},
    { init:'x', desc:'≈ "x" gần "s" mặt lưỡi',
      ex:[{zh:'学',py:'xué',vi:'học'},{zh:'谢',py:'xiè',vi:'cảm ơn'},{zh:'星',py:'xīng',vi:'sao/thứ'},{zh:'小',py:'xiǎo',vi:'nhỏ'},{zh:'想',py:'xiǎng',vi:'muốn/nghĩ'},{zh:'新',py:'xīn',vi:'mới'},{zh:'喜',py:'xǐ',vi:'thích/vui'},{zh:'先',py:'xiān',vi:'trước/tiên'},{zh:'心',py:'xīn',vi:'tim/lòng'},{zh:'下',py:'xià',vi:'xuống/dưới'}]},
  ]},
  { group:'Cuộn lưỡi (翘舌音)', items:[
    { init:'zh', desc:'≈ "tr" cuộn lưỡi (không bật hơi)',
      ex:[{zh:'中',py:'zhōng',vi:'giữa/Trung'},{zh:'这',py:'zhè',vi:'này'},{zh:'知',py:'zhī',vi:'biết'},{zh:'住',py:'zhù',vi:'sống/ở'},{zh:'找',py:'zhǎo',vi:'tìm'},{zh:'站',py:'zhàn',vi:'đứng/trạm'},{zh:'真',py:'zhēn',vi:'thật'},{zh:'长',py:'zhǎng',vi:'trưởng/lớn lên'},{zh:'纸',py:'zhǐ',vi:'giấy'},{zh:'重',py:'zhòng',vi:'nặng/quan trọng'}]},
    { init:'ch', desc:'≈ "tr" cuộn lưỡi (bật hơi)',
      ex:[{zh:'吃',py:'chī',vi:'ăn'},{zh:'茶',py:'chá',vi:'trà'},{zh:'出',py:'chū',vi:'ra'},{zh:'长',py:'cháng',vi:'dài'},{zh:'唱',py:'chàng',vi:'hát'},{zh:'车',py:'chē',vi:'xe'},{zh:'成',py:'chéng',vi:'thành/được'},{zh:'差',py:'chà',vi:'kém'},{zh:'穿',py:'chuān',vi:'mặc'},{zh:'初',py:'chū',vi:'đầu/ban đầu'}]},
    { init:'sh', desc:'≈ "sh" cuộn lưỡi',
      ex:[{zh:'是',py:'shì',vi:'là'},{zh:'书',py:'shū',vi:'sách'},{zh:'谁',py:'shéi',vi:'ai'},{zh:'上',py:'shàng',vi:'trên/lên'},{zh:'时',py:'shí',vi:'thời gian'},{zh:'说',py:'shuō',vi:'nói'},{zh:'手',py:'shǒu',vi:'tay'},{zh:'生',py:'shēng',vi:'sinh/sống'},{zh:'少',py:'shǎo',vi:'ít'},{zh:'水',py:'shuǐ',vi:'nước'}]},
    { init:'r', desc:'≈ gần "r" tiếng Anh, cuộn lưỡi',
      ex:[{zh:'人',py:'rén',vi:'người'},{zh:'日',py:'rì',vi:'ngày/mặt trời'},{zh:'容',py:'róng',vi:'chứa/dễ'},{zh:'热',py:'rè',vi:'nóng'},{zh:'然',py:'rán',vi:'vậy/nhiên'},{zh:'认',py:'rèn',vi:'nhận biết'},{zh:'入',py:'rù',vi:'vào'},{zh:'软',py:'ruǎn',vi:'mềm'},{zh:'让',py:'ràng',vi:'để/nhường'},{zh:'肉',py:'ròu',vi:'thịt'}]},
  ]},
  { group:'Đầu lưỡi phẳng (平舌音)', items:[
    { init:'z', desc:'≈ "đ+z" (không bật hơi)',
      ex:[{zh:'在',py:'zài',vi:'ở/đang'},{zh:'早',py:'zǎo',vi:'sớm'},{zh:'坐',py:'zuò',vi:'ngồi'},{zh:'走',py:'zǒu',vi:'đi bộ'},{zh:'字',py:'zì',vi:'chữ'},{zh:'昨',py:'zuó',vi:'hôm qua'},{zh:'再',py:'zài',vi:'lại/nữa'},{zh:'总',py:'zǒng',vi:'luôn/tổng'},{zh:'嘴',py:'zuǐ',vi:'miệng'},{zh:'自',py:'zì',vi:'tự/mình'}]},
    { init:'c', desc:'≈ "ts" (bật hơi)',
      ex:[{zh:'菜',py:'cài',vi:'rau/món ăn'},{zh:'从',py:'cóng',vi:'từ'},{zh:'错',py:'cuò',vi:'sai'},{zh:'层',py:'céng',vi:'tầng'},{zh:'才',py:'cái',vi:'mới/tài năng'},{zh:'草',py:'cǎo',vi:'cỏ'},{zh:'村',py:'cūn',vi:'làng'},{zh:'此',py:'cǐ',vi:'này'},{zh:'存',py:'cún',vi:'tồn tại/gửi'},{zh:'参',py:'cān',vi:'tham gia'}]},
    { init:'s', desc:'≈ "s" tiếng Việt',
      ex:[{zh:'三',py:'sān',vi:'ba'},{zh:'四',py:'sì',vi:'bốn'},{zh:'说',py:'shuō',vi:'nói'},{zh:'算',py:'suàn',vi:'tính/coi là'},{zh:'所',py:'suǒ',vi:'nơi/vì vậy'},{zh:'送',py:'sòng',vi:'tặng/tiễn'},{zh:'酸',py:'suān',vi:'chua'},{zh:'岁',py:'suì',vi:'tuổi'},{zh:'速',py:'sù',vi:'tốc độ'},{zh:'散',py:'sǎn',vi:'tản/rời rạc'}]},
  ]},
  { group:'Bán nguyên âm', items:[
    { init:'y', desc:'Thay i/ü khi đứng đầu âm tiết',
      ex:[{zh:'一',py:'yī',vi:'một'},{zh:'有',py:'yǒu',vi:'có'},{zh:'元',py:'yuán',vi:'đồng nhân dân tệ'},{zh:'也',py:'yě',vi:'cũng'},{zh:'用',py:'yòng',vi:'dùng'},{zh:'要',py:'yào',vi:'muốn/cần'},{zh:'样',py:'yàng',vi:'dạng/kiểu'},{zh:'月',py:'yuè',vi:'tháng/trăng'},{zh:'眼',py:'yǎn',vi:'mắt'},{zh:'颜',py:'yán',vi:'màu sắc'}]},
    { init:'w', desc:'Thay u khi đứng đầu âm tiết',
      ex:[{zh:'我',py:'wǒ',vi:'tôi'},{zh:'问',py:'wèn',vi:'hỏi'},{zh:'晚',py:'wǎn',vi:'tối/muộn'},{zh:'为',py:'wèi',vi:'vì'},{zh:'万',py:'wàn',vi:'vạn/mười nghìn'},{zh:'外',py:'wài',vi:'ngoài'},{zh:'完',py:'wán',vi:'xong'},{zh:'位',py:'wèi',vi:'vị trí/lượng từ'},{zh:'文',py:'wén',vi:'văn/chữ'},{zh:'无',py:'wú',vi:'không có'}]},
  ]},
];

const FINALS_DATA = [
  { type:'Nguyên âm đơn (单韵母)', items:[
    { fin:'a', desc:'≈ "a" tiếng Việt',
      ex:[{zh:'八',py:'bā',vi:'tám'},{zh:'发',py:'fā',vi:'phát'},{zh:'大',py:'dà',vi:'to'},{zh:'马',py:'mǎ',vi:'ngựa'},{zh:'拿',py:'ná',vi:'cầm'},{zh:'打',py:'dǎ',vi:'đánh'},{zh:'他',py:'tā',vi:'anh ấy'},{zh:'妈',py:'mā',vi:'mẹ'},{zh:'花',py:'huā',vi:'hoa'},{zh:'啊',py:'ā',vi:'ồ!/à!'}]},
    { fin:'o', desc:'≈ "oa" tiếng Việt',
      ex:[{zh:'波',py:'bō',vi:'sóng'},{zh:'婆',py:'pó',vi:'bà/vợ'},{zh:'摸',py:'mō',vi:'sờ'},{zh:'博',py:'bó',vi:'rộng'},{zh:'佛',py:'fó',vi:'Phật'},{zh:'拨',py:'bō',vi:'quay số'},{zh:'哦',py:'ó',vi:'ồ!'},{zh:'喂',py:'wèi',vi:'alo!'},{zh:'坡',py:'pō',vi:'dốc'},{zh:'默',py:'mò',vi:'im lặng'}]},
    { fin:'e', desc:'≈ "ơ/ưa" tiếng Việt',
      ex:[{zh:'喝',py:'hē',vi:'uống'},{zh:'哥',py:'gē',vi:'anh trai'},{zh:'呢',py:'ne',vi:'trợ từ (呢?)'},{zh:'特',py:'tè',vi:'đặc biệt'},{zh:'了',py:'le',vi:'rồi (trợ từ)'},{zh:'可',py:'kě',vi:'có thể'},{zh:'河',py:'hé',vi:'sông'},{zh:'饿',py:'è',vi:'đói'},{zh:'黑',py:'hēi',vi:'màu đen'},{zh:'革',py:'gé',vi:'cách/da'}]},
    { fin:'i', desc:'≈ "i" tiếng Việt (viết yi khi đứng đầu)',
      ex:[{zh:'你',py:'nǐ',vi:'bạn'},{zh:'一',py:'yī',vi:'một'},{zh:'机',py:'jī',vi:'máy'},{zh:'西',py:'xī',vi:'tây'},{zh:'地',py:'dì',vi:'đất'},{zh:'比',py:'bǐ',vi:'so sánh'},{zh:'理',py:'lǐ',vi:'lý/quản lý'},{zh:'七',py:'qī',vi:'bảy'},{zh:'知',py:'zhī',vi:'biết'},{zh:'时',py:'shí',vi:'thời gian'}]},
    { fin:'u', desc:'≈ "u" tiếng Việt (viết wu khi đứng đầu)',
      ex:[{zh:'不',py:'bù',vi:'không'},{zh:'无',py:'wú',vi:'không có'},{zh:'书',py:'shū',vi:'sách'},{zh:'路',py:'lù',vi:'đường'},{zh:'出',py:'chū',vi:'ra'},{zh:'主',py:'zhǔ',vi:'chủ'},{zh:'五',py:'wǔ',vi:'năm'},{zh:'土',py:'tǔ',vi:'đất'},{zh:'苦',py:'kǔ',vi:'đắng/khổ'},{zh:'步',py:'bù',vi:'bước'}]},
    { fin:'ü', desc:'≈ "uy" tròn môi (viết yu khi đứng đầu)',
      ex:[{zh:'女',py:'nǚ',vi:'nữ'},{zh:'旅',py:'lǚ',vi:'du lịch'},{zh:'鱼',py:'yú',vi:'cá'},{zh:'去',py:'qù',vi:'đi'},{zh:'句',py:'jù',vi:'câu'},{zh:'许',py:'xǔ',vi:'cho phép'},{zh:'语',py:'yǔ',vi:'ngôn ngữ'},{zh:'区',py:'qū',vi:'khu vực'},{zh:'举',py:'jǔ',vi:'giơ lên'},{zh:'吕',py:'lǚ',vi:'họ Lữ'}]},
  ]},
  { type:'Nguyên âm đôi (复韵母)', items:[
    { fin:'ai', desc:'≈ "ai" tiếng Việt',
      ex:[{zh:'爱',py:'ài',vi:'yêu'},{zh:'来',py:'lái',vi:'đến'},{zh:'白',py:'bái',vi:'trắng'},{zh:'开',py:'kāi',vi:'mở'},{zh:'太',py:'tài',vi:'quá'},{zh:'买',py:'mǎi',vi:'mua'},{zh:'还',py:'hái',vi:'còn'},{zh:'海',py:'hǎi',vi:'biển'},{zh:'外',py:'wài',vi:'ngoài'},{zh:'快',py:'kuài',vi:'nhanh'}]},
    { fin:'ao', desc:'≈ "ao" tiếng Việt',
      ex:[{zh:'好',py:'hǎo',vi:'tốt'},{zh:'猫',py:'māo',vi:'mèo'},{zh:'高',py:'gāo',vi:'cao'},{zh:'到',py:'dào',vi:'đến'},{zh:'号',py:'hào',vi:'số'},{zh:'跑',py:'pǎo',vi:'chạy'},{zh:'早',py:'zǎo',vi:'sớm'},{zh:'包',py:'bāo',vi:'túi'},{zh:'饱',py:'bǎo',vi:'no'},{zh:'报',py:'bào',vi:'báo/tờ'}]},
    { fin:'ei', desc:'≈ "ây" tiếng Việt',
      ex:[{zh:'飞',py:'fēi',vi:'bay'},{zh:'没',py:'méi',vi:'không có'},{zh:'被',py:'bèi',vi:'bị/chăn'},{zh:'美',py:'měi',vi:'đẹp'},{zh:'北',py:'běi',vi:'phía bắc'},{zh:'黑',py:'hēi',vi:'đen'},{zh:'给',py:'gěi',vi:'cho'},{zh:'累',py:'lèi',vi:'mệt'},{zh:'内',py:'nèi',vi:'trong'},{zh:'背',py:'bèi',vi:'lưng/thuộc lòng'}]},
    { fin:'ou', desc:'≈ "âu" tiếng Việt',
      ex:[{zh:'狗',py:'gǒu',vi:'chó'},{zh:'头',py:'tóu',vi:'đầu'},{zh:'后',py:'hòu',vi:'sau'},{zh:'走',py:'zǒu',vi:'đi'},{zh:'手',py:'shǒu',vi:'tay'},{zh:'楼',py:'lóu',vi:'tòa nhà'},{zh:'口',py:'kǒu',vi:'miệng'},{zh:'肉',py:'ròu',vi:'thịt'},{zh:'厚',py:'hòu',vi:'dày'},{zh:'邮',py:'yóu',vi:'bưu chính'}]},
    { fin:'ia', desc:'≈ "ia" tiếng Việt',
      ex:[{zh:'家',py:'jiā',vi:'nhà'},{zh:'下',py:'xià',vi:'dưới'},{zh:'假',py:'jiǎ',vi:'giả'},{zh:'夏',py:'xià',vi:'mùa hè'},{zh:'虾',py:'xiā',vi:'tôm'},{zh:'价',py:'jià',vi:'giá'},{zh:'牙',py:'yá',vi:'răng'},{zh:'呀',py:'ya',vi:'à!'},{zh:'鸭',py:'yā',vi:'vịt'},{zh:'掐',py:'qiā',vi:'véo/bóp'}]},
    { fin:'ie', desc:'≈ "iê" tiếng Việt',
      ex:[{zh:'谢',py:'xiè',vi:'cảm ơn'},{zh:'姐',py:'jiě',vi:'chị'},{zh:'别',py:'bié',vi:'khác/đừng'},{zh:'叶',py:'yè',vi:'lá'},{zh:'写',py:'xiě',vi:'viết'},{zh:'解',py:'jiě',vi:'giải'},{zh:'节',py:'jié',vi:'tiết/lễ'},{zh:'贴',py:'tiē',vi:'dán'},{zh:'热',py:'rè',vi:'nóng'},{zh:'铁',py:'tiě',vi:'sắt/thép'}]},
    { fin:'ua', desc:'≈ "ua" tiếng Việt',
      ex:[{zh:'花',py:'huā',vi:'hoa'},{zh:'瓜',py:'guā',vi:'dưa'},{zh:'刷',py:'shuā',vi:'bàn chải/quét'},{zh:'化',py:'huà',vi:'hóa'},{zh:'抓',py:'zhuā',vi:'nắm/bắt'},{zh:'挂',py:'guà',vi:'treo'},{zh:'夸',py:'kuā',vi:'khen'},{zh:'哗',py:'huá',vi:'ồn ào'},{zh:'刮',py:'guā',vi:'gãi/cạo'},{zh:'娃',py:'wá',vi:'trẻ em/búp bê'}]},
    { fin:'uo', desc:'≈ "uô" tiếng Việt',
      ex:[{zh:'坐',py:'zuò',vi:'ngồi'},{zh:'国',py:'guó',vi:'quốc gia'},{zh:'多',py:'duō',vi:'nhiều'},{zh:'说',py:'shuō',vi:'nói'},{zh:'火',py:'huǒ',vi:'lửa'},{zh:'桌',py:'zhuō',vi:'bàn'},{zh:'锅',py:'guō',vi:'nồi'},{zh:'活',py:'huó',vi:'sống'},{zh:'落',py:'luò',vi:'rơi'},{zh:'货',py:'huò',vi:'hàng hóa'}]},
    { fin:'iao', desc:'≈ "iao" tiếng Việt',
      ex:[{zh:'叫',py:'jiào',vi:'gọi/tên là'},{zh:'小',py:'xiǎo',vi:'nhỏ'},{zh:'掉',py:'diào',vi:'rơi'},{zh:'跳',py:'tiào',vi:'nhảy'},{zh:'饺',py:'jiǎo',vi:'sủi cảo'},{zh:'鸟',py:'niǎo',vi:'chim'},{zh:'笑',py:'xiào',vi:'cười'},{zh:'条',py:'tiáo',vi:'cái/sọc'},{zh:'票',py:'piào',vi:'vé'},{zh:'苗',py:'miáo',vi:'mầm cây'}]},
    { fin:'iu (iou)', desc:'≈ "iu" tiếng Việt',
      ex:[{zh:'九',py:'jiǔ',vi:'chín'},{zh:'留',py:'liú',vi:'ở lại'},{zh:'休',py:'xiū',vi:'nghỉ'},{zh:'牛',py:'niú',vi:'bò'},{zh:'六',py:'liù',vi:'sáu'},{zh:'秋',py:'qiū',vi:'mùa thu'},{zh:'流',py:'liú',vi:'chảy'},{zh:'油',py:'yóu',vi:'dầu'},{zh:'收',py:'shōu',vi:'thu/nhận'},{zh:'丢',py:'diū',vi:'mất/vứt'}]},
    { fin:'ui (uei)', desc:'≈ "uây" tiếng Việt',
      ex:[{zh:'回',py:'huí',vi:'về'},{zh:'贵',py:'guì',vi:'đắt'},{zh:'睡',py:'shuì',vi:'ngủ'},{zh:'对',py:'duì',vi:'đúng'},{zh:'水',py:'shuǐ',vi:'nước'},{zh:'追',py:'zhuī',vi:'đuổi theo'},{zh:'吹',py:'chuī',vi:'thổi'},{zh:'醉',py:'zuì',vi:'say'},{zh:'推',py:'tuī',vi:'đẩy'},{zh:'税',py:'shuì',vi:'thuế'}]},
    { fin:'üe', desc:'≈ "uê" tròn môi',
      ex:[{zh:'月',py:'yuè',vi:'tháng/trăng'},{zh:'雪',py:'xuě',vi:'tuyết'},{zh:'觉',py:'jué',vi:'cảm giác/ngủ'},{zh:'学',py:'xué',vi:'học'},{zh:'约',py:'yuē',vi:'hẹn'},{zh:'绝',py:'jué',vi:'tuyệt/hết'},{zh:'却',py:'què',vi:'nhưng'},{zh:'缺',py:'quē',vi:'thiếu'},{zh:'悦',py:'yuè',vi:'vui vẻ'},{zh:'穴',py:'xué',vi:'hang/huyệt'}]},
  ]},
  { type:'Vận mẫu mũi (鼻韵母)', items:[
    { fin:'an', desc:'≈ "an" tiếng Việt',
      ex:[{zh:'难',py:'nán',vi:'khó'},{zh:'饭',py:'fàn',vi:'cơm'},{zh:'看',py:'kàn',vi:'xem'},{zh:'安',py:'ān',vi:'yên'},{zh:'站',py:'zhàn',vi:'đứng/ga'},{zh:'三',py:'sān',vi:'ba'},{zh:'班',py:'bān',vi:'lớp'},{zh:'干',py:'gàn',vi:'làm/khô'},{zh:'寒',py:'hán',vi:'lạnh/hàn'},{zh:'汉',py:'hàn',vi:'Hán'}]},
    { fin:'en', desc:'≈ "ân" tiếng Việt',
      ex:[{zh:'人',py:'rén',vi:'người'},{zh:'门',py:'mén',vi:'cửa'},{zh:'很',py:'hěn',vi:'rất'},{zh:'分',py:'fēn',vi:'phút'},{zh:'根',py:'gēn',vi:'gốc'},{zh:'深',py:'shēn',vi:'sâu'},{zh:'身',py:'shēn',vi:'thân'},{zh:'真',py:'zhēn',vi:'thật'},{zh:'恩',py:'ēn',vi:'ân'},{zh:'本',py:'běn',vi:'quyển'}]},
    { fin:'in', desc:'≈ "in" tiếng Việt',
      ex:[{zh:'您',py:'nín',vi:'bạn (lịch sự)'},{zh:'信',py:'xìn',vi:'tin/thư'},{zh:'进',py:'jìn',vi:'vào'},{zh:'林',py:'lín',vi:'rừng'},{zh:'心',py:'xīn',vi:'tim/lòng'},{zh:'金',py:'jīn',vi:'vàng'},{zh:'今',py:'jīn',vi:'nay'},{zh:'新',py:'xīn',vi:'mới'},{zh:'亲',py:'qīn',vi:'thân'},{zh:'近',py:'jìn',vi:'gần'}]},
    { fin:'un (uen)', desc:'≈ "uân" tiếng Việt',
      ex:[{zh:'问',py:'wèn',vi:'hỏi'},{zh:'昆',py:'kūn',vi:'côn'},{zh:'顿',py:'dùn',vi:'dừng/bữa'},{zh:'存',py:'cún',vi:'lưu trữ'},{zh:'村',py:'cūn',vi:'làng'},{zh:'春',py:'chūn',vi:'xuân'},{zh:'准',py:'zhǔn',vi:'chuẩn'},{zh:'论',py:'lùn',vi:'luận'},{zh:'温',py:'wēn',vi:'ấm'},{zh:'混',py:'hùn',vi:'lẫn lộn'}]},
    { fin:'ang', desc:'≈ "ang" tiếng Việt',
      ex:[{zh:'忙',py:'máng',vi:'bận'},{zh:'帮',py:'bāng',vi:'giúp'},{zh:'上',py:'shàng',vi:'trên'},{zh:'长',py:'cháng',vi:'dài'},{zh:'当',py:'dāng',vi:'làm/khi'},{zh:'张',py:'zhāng',vi:'họ Trương'},{zh:'想',py:'xiǎng',vi:'nghĩ/muốn'},{zh:'房',py:'fáng',vi:'phòng'},{zh:'王',py:'wáng',vi:'vương'},{zh:'方',py:'fāng',vi:'phương'}]},
    { fin:'eng', desc:'≈ "âng" tiếng Việt',
      ex:[{zh:'朋',py:'péng',vi:'bạn'},{zh:'冷',py:'lěng',vi:'lạnh'},{zh:'灯',py:'dēng',vi:'đèn'},{zh:'等',py:'děng',vi:'chờ'},{zh:'生',py:'shēng',vi:'sinh'},{zh:'成',py:'chéng',vi:'thành'},{zh:'能',py:'néng',vi:'có thể'},{zh:'更',py:'gèng',vi:'càng'},{zh:'风',py:'fēng',vi:'gió'},{zh:'层',py:'céng',vi:'tầng'}]},
    { fin:'ing', desc:'≈ "inh" tiếng Việt',
      ex:[{zh:'星',py:'xīng',vi:'sao/thứ'},{zh:'明',py:'míng',vi:'sáng/rõ'},{zh:'听',py:'tīng',vi:'nghe'},{zh:'请',py:'qǐng',vi:'mời'},{zh:'京',py:'jīng',vi:'kinh đô'},{zh:'行',py:'xíng',vi:'được/đi'},{zh:'名',py:'míng',vi:'tên'},{zh:'病',py:'bìng',vi:'bệnh'},{zh:'情',py:'qíng',vi:'tình'},{zh:'平',py:'píng',vi:'bằng/bình'}]},
    { fin:'ong', desc:'≈ "ung" tiếng Việt',
      ex:[{zh:'中',py:'zhōng',vi:'giữa'},{zh:'工',py:'gōng',vi:'công việc'},{zh:'同',py:'tóng',vi:'cùng'},{zh:'红',py:'hóng',vi:'đỏ'},{zh:'懂',py:'dǒng',vi:'hiểu'},{zh:'龙',py:'lóng',vi:'rồng'},{zh:'总',py:'zǒng',vi:'luôn'},{zh:'用',py:'yòng',vi:'dùng'},{zh:'动',py:'dòng',vi:'động'},{zh:'空',py:'kōng',vi:'trống/không'}]},
    { fin:'ian', desc:'≈ "iên" tiếng Việt',
      ex:[{zh:'天',py:'tiān',vi:'trời'},{zh:'钱',py:'qián',vi:'tiền'},{zh:'点',py:'diǎn',vi:'điểm/giờ'},{zh:'面',py:'miàn',vi:'mặt/mì'},{zh:'见',py:'jiàn',vi:'gặp'},{zh:'先',py:'xiān',vi:'trước'},{zh:'年',py:'nián',vi:'năm'},{zh:'电',py:'diàn',vi:'điện'},{zh:'练',py:'liàn',vi:'luyện'},{zh:'前',py:'qián',vi:'trước'}]},
    { fin:'uan', desc:'≈ "uan" tiếng Việt',
      ex:[{zh:'馆',py:'guǎn',vi:'quán'},{zh:'换',py:'huàn',vi:'đổi'},{zh:'传',py:'chuán',vi:'truyền'},{zh:'关',py:'guān',vi:'đóng/quan'},{zh:'完',py:'wán',vi:'xong'},{zh:'算',py:'suàn',vi:'tính'},{zh:'欢',py:'huān',vi:'vui'},{zh:'短',py:'duǎn',vi:'ngắn'},{zh:'官',py:'guān',vi:'quan chức'},{zh:'暖',py:'nuǎn',vi:'ấm áp'}]},
    { fin:'iang', desc:'≈ "iang" tiếng Việt',
      ex:[{zh:'两',py:'liǎng',vi:'hai (cái)'},{zh:'想',py:'xiǎng',vi:'nghĩ'},{zh:'江',py:'jiāng',vi:'sông'},{zh:'样',py:'yàng',vi:'kiểu'},{zh:'乡',py:'xiāng',vi:'quê hương'},{zh:'响',py:'xiǎng',vi:'âm thanh'},{zh:'香',py:'xiāng',vi:'thơm'},{zh:'亮',py:'liàng',vi:'sáng'},{zh:'量',py:'liàng',vi:'lượng'},{zh:'强',py:'qiáng',vi:'mạnh'}]},
    { fin:'uang', desc:'≈ "uang" tiếng Việt',
      ex:[{zh:'双',py:'shuāng',vi:'đôi'},{zh:'光',py:'guāng',vi:'ánh sáng'},{zh:'黄',py:'huáng',vi:'vàng'},{zh:'状',py:'zhuàng',vi:'trạng thái'},{zh:'况',py:'kuàng',vi:'tình huống'},{zh:'广',py:'guǎng',vi:'rộng'},{zh:'床',py:'chuáng',vi:'giường'},{zh:'窗',py:'chuāng',vi:'cửa sổ'},{zh:'王',py:'wáng',vi:'vương'},{zh:'逛',py:'guàng',vi:'đi dạo'}]},
  ]},
];

const TONE_EXAMPLES = [
  { tone:1, mark:'ā', desc:'Cao bằng — kéo dài đều, không lên không xuống', color:'#3498db',
    ex:[{zh:'妈',py:'mā',vi:'mẹ'},{zh:'书',py:'shū',vi:'sách'},{zh:'天',py:'tiān',vi:'trời'},{zh:'中',py:'zhōng',vi:'giữa'},{zh:'多',py:'duō',vi:'nhiều'},{zh:'风',py:'fēng',vi:'gió'},{zh:'开',py:'kāi',vi:'mở'},{zh:'高',py:'gāo',vi:'cao'}]},
  { tone:2, mark:'á', desc:'Lên cao — như hỏi "hả?" trong tiếng Việt', color:'#27ae60',
    ex:[{zh:'麻',py:'má',vi:'tê'},{zh:'人',py:'rén',vi:'người'},{zh:'来',py:'lái',vi:'đến'},{zh:'钱',py:'qián',vi:'tiền'},{zh:'时',py:'shí',vi:'thời gian'},{zh:'名',py:'míng',vi:'tên'},{zh:'学',py:'xué',vi:'học'},{zh:'还',py:'hái',vi:'còn'}]},
  { tone:3, mark:'ǎ', desc:'Xuống rồi lên — như giọng nghi ngờ "hả?"', color:'#9b59b6',
    ex:[{zh:'马',py:'mǎ',vi:'ngựa'},{zh:'你',py:'nǐ',vi:'bạn'},{zh:'好',py:'hǎo',vi:'tốt'},{zh:'买',py:'mǎi',vi:'mua'},{zh:'小',py:'xiǎo',vi:'nhỏ'},{zh:'我',py:'wǒ',vi:'tôi'},{zh:'水',py:'shuǐ',vi:'nước'},{zh:'懂',py:'dǒng',vi:'hiểu'}]},
  { tone:4, mark:'à', desc:'Xuống mạnh — dứt khoát, như tiếng Việt "à!"', color:'#e74c3c',
    ex:[{zh:'骂',py:'mà',vi:'mắng'},{zh:'是',py:'shì',vi:'là'},{zh:'去',py:'qù',vi:'đi'},{zh:'大',py:'dà',vi:'to'},{zh:'不',py:'bù',vi:'không'},{zh:'看',py:'kàn',vi:'xem'},{zh:'对',py:'duì',vi:'đúng'},{zh:'爱',py:'ài',vi:'yêu'}]},
  { tone:0, mark:'a', desc:'Nhẹ ngắn — đọc nhanh, không mang thanh điệu đầy đủ', color:'#95a5a6',
    ex:[{zh:'吗',py:'ma',vi:'(câu hỏi)'},{zh:'呢',py:'ne',vi:'(thế còn?)'},{zh:'吧',py:'ba',vi:'(gợi ý)'},{zh:'了',py:'le',vi:'(hoàn thành)'},{zh:'着',py:'zhe',vi:'(đang)'},{zh:'啊',py:'a',vi:'(cảm thán)'},{zh:'的',py:'de',vi:'(sở hữu)'},{zh:'们',py:'men',vi:'(số nhiều)'}]},
];

function renderPhonetics() {
  const container = document.getElementById('phonContainer');
  if (!container) return;
  container.innerHTML = '';

  const CG = '<colgroup><col class="pc1"><col class="pc2"><col class="pc3"><col class="pc4"><col class="pc5"></colgroup>';

  window.togglePhonEx = function(id) {
    const rows = document.querySelectorAll('[data-phon-ex="' + id + '"]');
    const btn  = document.getElementById('phon-btn-' + id);
    const isOpen = btn && btn.dataset.open === '1';
    rows.forEach(r => r.style.display = isOpen ? 'none' : '');
    if (btn) { btn.dataset.open = isOpen ? '0' : '1'; btn.textContent = isOpen ? '▶ Xem ví dụ' : '▲ Ẩn bớt'; }
  };

  // ── build a standard 5-col phon-main-table ──────────────────────────────
  // summaryRow(id, col2html, descHtml, previewHtml)  → <tr class="phon-row">
  function makeSummaryRow(id, col2html, descHtml, previewHtml) {
    return '<tr class="phon-row" onclick="togglePhonEx(\'' + id + '\')">' +
      '<td></td>' +
      '<td>' + col2html + '</td>' +
      '<td style="font-size:0.83rem;color:var(--text-light);line-height:1.4">' + descHtml + '</td>' +
      '<td>' + previewHtml + '</td>' +
      '<td><button class="phon-ex-btn" id="phon-btn-' + id + '" data-open="0">▶ Xem ví dụ</button></td>' +
      '</tr>';
  }

  function makeDetailRow(id, num, zh, py, vi, color) {
    const zEsc = zh.replace(/'/g, "\\'");
    const pyColor = color ? 'color:' + color : 'color:var(--red)';
    return '<tr class="phon-detail-row" data-phon-ex="' + id + '" style="display:none">' +
      '<td class="phon-d-num">' + num + '</td>' +
      '<td class="phon-d-zh">' + zh + '</td>' +
      '<td class="phon-d-py" style="' + pyColor + '">' + py + '</td>' +
      '<td class="phon-d-vi">' + vi + '</td>' +
      '<td><button class="dl-btn dl-btn-speak" onclick="event.stopPropagation();speak(\'' + zEsc + '\')">🔊</button></td>' +
      '</tr>';
  }

  function makeAllRow(id, allZh, label) {
    const zEsc = allZh.replace(/'/g, "\\'");
    return '<tr class="phon-detail-row phon-all-row" data-phon-ex="' + id + '" style="display:none">' +
      '<td colspan="5" style="padding:6px 12px">' +
      '<button class="dl-btn dl-btn-speak" onclick="event.stopPropagation();speak(\'' + zEsc + '\')">🔊 Nghe toàn bộ ' + label + '</button>' +
      '</td></tr>';
  }

  // ── 1. THANH ĐIỆU ──────────────────────────────────────────────────────
  const toneColors = ['#3498db','#27ae60','#9b59b6','#e74c3c','#7f8c8d'];
  const toneNames  = ['Thanh 1','Thanh 2','Thanh 3','Thanh 4','Thanh nhẹ'];
  const toneDescs  = [
    'Cao bằng — kéo dài đều, không lên không xuống (ā)',
    'Lên cao — như hỏi ngắn, giọng nhấc lên (á)',
    'Xuống rồi lên — như giọng nghi ngờ "ủa?" (ǎ)',
    'Xuống mạnh dứt khoát, ngắn gọn (à)',
    'Nhẹ ngắn — không mang thanh điệu đầy đủ (a)'
  ];

  const toneCard = document.createElement('div');
  toneCard.className = 'card';
  toneCard.innerHTML = '<h2>🎵 Bốn Thanh Điệu (四声)</h2>' +
    '<div class="alert alert-info" style="margin-bottom:12px">Cùng âm, thanh điệu khác → nghĩa hoàn toàn khác. Nhấn <strong>▶ Xem ví dụ</strong> để mở 8 từ minh hoạ.</div>';

  let toneHtml = '<table class="phon-main-table">' + CG +
    '<thead><tr><th></th><th>Thanh</th><th>Cách đọc</th><th>Xem trước</th><th></th></tr></thead><tbody>';

  TONE_EXAMPLES.forEach((t, i) => {
    const tId = 'tone-' + i;
    const c = toneColors[i];
    const symHtml = '<span class="phon-sym" style="color:' + c + ';border-color:' + c + '55">' + t.mark + '</span>' +
      '<br><span style="font-size:0.78rem;font-weight:700;color:' + c + '">' + toneNames[i] + '</span>';
    const preview = t.ex.slice(0,4).map(e=>'<span class="phon-preview-zh" title="'+e.py+' — '+e.vi+'">'+e.zh+'</span>').join(' ');
    toneHtml += makeSummaryRow(tId, symHtml, toneDescs[i], preview);
    t.ex.forEach((e,ei) => { toneHtml += makeDetailRow(tId, ei+1, e.zh, e.py, e.vi, c); });
    toneHtml += makeAllRow(tId, t.ex.map(e=>e.zh).join(''), toneNames[i]);
  });
  toneHtml += '</tbody></table>';

  const tDiv = document.createElement('div');
  tDiv.innerHTML = toneHtml;
  toneCard.appendChild(tDiv);

  // Biến điệu
  const bdH2 = document.createElement('h3');
  bdH2.style.cssText = 'margin:20px 0 10px;color:var(--mid)';
  bdH2.textContent = '⚠️ Quy Tắc Biến Điệu';
  toneCard.appendChild(bdH2);

  const sandhiData = [
    { rule:'3+3→2+3', cond:'Hai thanh 3 liền nhau → Thanh 3 đầu đọc thành Thanh 2',
      ex:[{w:'你好',py:'nǐhǎo → níhǎo',vi:'Xin chào'},{w:'我很好',py:'wǒhěnhǎo → wóhénhǎo',vi:'Tôi rất khỏe'},{w:'可以',py:'kěyǐ → kéyǐ',vi:'Được phép'},{w:'所以',py:'suǒyǐ → suóyǐ',vi:'Vì vậy'},{w:'也好',py:'yěhǎo → yéhǎo',vi:'Cũng tốt'}]},
    { rule:'一 T1/2/3', cond:'一 đứng trước Thanh 1,2,3 → đọc yì (Thanh 4)',
      ex:[{w:'一斤',py:'yì jīn',vi:'Một cân'},{w:'一年',py:'yì nián',vi:'Một năm'},{w:'一碗',py:'yì wǎn',vi:'Một bát'},{w:'一本',py:'yì běn',vi:'Một quyển'},{w:'一起',py:'yìqǐ',vi:'Cùng nhau'}]},
    { rule:'一 T4', cond:'一 đứng trước Thanh 4 → đọc yí (Thanh 2)',
      ex:[{w:'一共',py:'yí gòng',vi:'Tổng cộng'},{w:'一样',py:'yíyàng',vi:'Giống nhau'},{w:'一定',py:'yídìng',vi:'Nhất định'},{w:'一切',py:'yíqiè',vi:'Tất cả'},{w:'一次',py:'yícì',vi:'Một lần'}]},
    { rule:'不 T4', cond:'不 đứng trước Thanh 4 → đọc bú (Thanh 2)',
      ex:[{w:'不去',py:'bú qù',vi:'Không đi'},{w:'不对',py:'bú duì',vi:'Không đúng'},{w:'不是',py:'bú shì',vi:'Không phải'},{w:'不要',py:'bú yào',vi:'Không muốn'},{w:'不在',py:'bú zài',vi:'Không có mặt'}]},
  ];

  let bdHtml = '<table class="phon-main-table">' + CG +
    '<thead><tr><th></th><th>Quy tắc</th><th>Điều kiện & Kết quả</th><th>Xem trước</th><th></th></tr></thead><tbody>';
  sandhiData.forEach((s,si) => {
    const sId = 'sandhi-' + si;
    const symHtml = '<span class="phon-sym" style="font-size:0.72rem;padding:4px 6px">' + s.rule + '</span>';
    const preview = s.ex.slice(0,3).map(e=>'<span class="phon-preview-zh">'+e.w+'</span>').join(' ');
    bdHtml += makeSummaryRow(sId, symHtml, s.cond, preview);
    s.ex.forEach((e,ei) => { bdHtml += makeDetailRow(sId, ei+1, e.w, e.py, e.vi, ''); });
    bdHtml += makeAllRow(sId, s.ex.map(e=>e.w).join(''), s.rule);
  });
  bdHtml += '</tbody></table>';
  const bdDiv = document.createElement('div');
  bdDiv.innerHTML = bdHtml;
  toneCard.appendChild(bdDiv);
  container.appendChild(toneCard);

  // ── 2. PHỤ ÂM ĐẦU 声母 ──────────────────────────────────────────────────
  const initCard = document.createElement('div');
  initCard.className = 'card';
  initCard.innerHTML = '<h2>🔤 Phụ Âm Đầu — 声母 (21 âm)</h2>' +
    '<div class="alert alert-info" style="margin-bottom:10px">Tổng quan 21 phụ âm. Nhấn <strong>▶ Xem ví dụ</strong> để mở 10 từ minh hoạ mỗi âm.</div>' +
    '<div class="gram-note" style="margin-bottom:12px">💡 Cặp (không bật hơi / bật hơi): b/p · d/t · g/k · j/q · zh/ch · z/c. Nhóm zh/ch/sh/r cuộn lưỡi; z/c/s lưỡi phẳng.</div>';

  let initGid = 0;
  INITIALS_DATA.forEach(group => {
    const gDiv = document.createElement('div');
    gDiv.style.marginBottom = '14px';
    const gTitle = document.createElement('div');
    gTitle.className = 'phon-group-title';
    gTitle.textContent = group.group;
    gDiv.appendChild(gTitle);

    let html = '<table class="phon-main-table">' + CG +
      '<thead><tr><th></th><th>Âm</th><th>Cách đọc</th><th>Xem trước</th><th></th></tr></thead><tbody>';
    group.items.forEach(item => {
      const iId = 'init-' + (initGid++);
      const symHtml = '<span class="phon-sym">' + item.init + '</span>';
      const preview = item.ex.slice(0,4).map(e=>'<span class="phon-preview-zh" title="'+e.py+'">'+e.zh+'</span>').join(' ');
      html += makeSummaryRow(iId, symHtml, item.desc, preview);
      item.ex.forEach((e,ei) => { html += makeDetailRow(iId, ei+1, e.zh, e.py, e.vi, ''); });
      html += makeAllRow(iId, item.ex.map(e=>e.zh).join(''), '音 ' + item.init);
    });
    html += '</tbody></table>';
    gDiv.innerHTML += html;
    initCard.appendChild(gDiv);
  });
  container.appendChild(initCard);

  // ── 3. NGUYÊN ÂM 韵母 ──────────────────────────────────────────────────
  const finalCard = document.createElement('div');
  finalCard.className = 'card';
  finalCard.innerHTML = '<h2>🎵 Nguyên Âm — 韵母</h2>' +
    '<div class="alert alert-info" style="margin-bottom:10px">Tổng quan vận mẫu. Nhấn <strong>▶ Xem ví dụ</strong> để mở 10 từ minh hoạ mỗi âm.</div>' +
    '<div class="gram-tip" style="margin-bottom:12px">💡 i/u/ü đứng đầu âm tiết không có phụ âm → viết yi/wu/yu. Vd: i→yi(一), u→wu(无), ü→yu(鱼)</div>';

  let finGid = 0;
  FINALS_DATA.forEach(group => {
    const gDiv = document.createElement('div');
    gDiv.style.marginBottom = '14px';
    const gTitle = document.createElement('div');
    gTitle.className = 'phon-group-title';
    gTitle.style.cssText = 'font-size:0.95rem;font-weight:700;padding:8px 14px;margin:10px 0 6px;border-left:4px solid #2b6cb0;border-radius:0 6px 6px 0;background:linear-gradient(90deg,#ebf8ff,transparent);color:#2b6cb0';
    gTitle.textContent = group.type;
    gDiv.appendChild(gTitle);

    let html = '<table class="phon-main-table">' + CG +
      '<thead><tr><th></th><th>Vận mẫu</th><th>Cách đọc</th><th>Xem trước</th><th></th></tr></thead><tbody>';
    group.items.forEach(item => {
      const fId = 'fin-' + (finGid++);
      const symHtml = '<span class="phon-sym" style="color:var(--mid);border-color:#bee3f8;background:#ebf8ff">' + item.fin + '</span>';
      const preview = item.ex.slice(0,4).map(e=>'<span class="phon-preview-zh" title="'+e.py+'">'+e.zh+'</span>').join(' ');
      html += makeSummaryRow(fId, symHtml, item.desc, preview);
      item.ex.forEach((e,ei) => { html += makeDetailRow(fId, ei+1, e.zh, e.py, e.vi, 'var(--mid)'); });
      html += makeAllRow(fId, item.ex.map(e=>e.zh).join(''), '韵母 ' + item.fin);
    });
    html += '</tbody></table>';
    gDiv.innerHTML += html;
    finalCard.appendChild(gDiv);
  });
  container.appendChild(finalCard);
}

// ===================================================
// GRAMMAR DATA & RENDER
// ===================================================
