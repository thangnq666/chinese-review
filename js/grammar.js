const GRAMMAR_DATA = [
  // ── 1. S + 是 + N ────────────────────────────────
  {
    id:'co-ban', num:1,
    title:'Câu 是 (shì) — Nhận định, định nghĩa',
    tag:'S + 是 + N / S + 不是 + N',
    formula:'Chủ ngữ + 是 + Danh từ',
    note:'⚠️ 是 KHÔNG dùng cho tính từ: ❌ 他是很高 → ✅ 他很高',
    tip:'',
    rows:[
      {zh:'我是学生。',py:'Wǒ shì xuésheng.',vi:'Tôi là học sinh.',form:'S + 是 + N'},
      {zh:'他不是老师。',py:'Tā bú shì lǎoshī.',vi:'Anh ấy không phải là giáo viên.',form:'S + 不是 + N'},
      {zh:'你是哪国人？',py:'Nǐ shì nǎ guó rén?',vi:'Bạn là người nước nào?',form:'S + 是 + ?'},
    ]
  },
  // ── 2. S + V + O ─────────────────────────────────
  {
    id:'co-ban', num:2,
    title:'Câu cơ bản S + V + O',
    tag:'S + V + O / S + 不 + V + O',
    formula:'Chủ ngữ + Động từ + Tân ngữ',
    note:'',
    tip:'💡 Thứ tự từ trong tiếng Trung tương đối cố định: Chủ – Vị – Tân',
    rows:[
      {zh:'我学汉语。',py:'Wǒ xué Hànyǔ.',vi:'Tôi học tiếng Trung.',form:'S + V + O'},
      {zh:'我不学英语。',py:'Wǒ bù xué Yīngyǔ.',vi:'Tôi không học tiếng Anh.',form:'S + 不 + V + O'},
      {zh:'我喜欢吃饺子。',py:'Wǒ xǐhuan chī jiǎozi.',vi:'Tôi thích ăn sủi cảo.',form:'S + V1 + V2 + O'},
    ]
  },
  // ── 3. S + 很 + Adj ───────────────────────────────
  {
    id:'co-ban', num:3,
    title:'Câu tính từ làm vị ngữ: S + 很/太/不 + Adj',
    tag:'S + 很 + Adj (không dùng 是)',
    formula:'Chủ ngữ + 很/太/不 + Tính từ',
    note:'⚠️ Tính từ KHÔNG cần 是 — bắt buộc có 很 hoặc phó từ mức độ, nếu không câu mang nghĩa so sánh',
    tip:'',
    rows:[
      {zh:'汉语很难。',py:'Hànyǔ hěn nán.',vi:'Tiếng Trung rất khó.',form:'S + 很 + Adj'},
      {zh:'太好了！',py:'Tài hǎo le!',vi:'Tuyệt quá!',form:'太 + Adj + 了'},
      {zh:'他不太高。',py:'Tā bú tài gāo.',vi:'Anh ấy không quá cao.',form:'S + 不太 + Adj'},
      {zh:'今天比昨天热。',py:'Jīntiān bǐ zuótiān rè.',vi:'Hôm nay nóng hơn hôm qua.',form:'A + 比 + B + Adj'},
    ]
  },
  // ── 4. S + 有 + O ─────────────────────────────────
  {
    id:'co-ban', num:4,
    title:'Câu 有 (yǒu) — Sở hữu & Tồn tại',
    tag:'S + 有 + O / S + 没有 + O',
    formula:'(Ai/Nơi) + 有 + Cái gì',
    note:'⚠️ Phủ định của 有 là 没有, KHÔNG phải 不有',
    tip:'💡 有 dùng cả nghĩa "có" (sở hữu) và "có" (tồn tại: ở đây có...)',
    rows:[
      {zh:'我有一个哥哥。',py:'Wǒ yǒu yī ge gēge.',vi:'Tôi có một người anh.',form:'S + 有 + Num + CL + N'},
      {zh:'我没有钱。',py:'Wǒ méiyǒu qián.',vi:'Tôi không có tiền.',form:'S + 没有 + N'},
      {zh:'桌子上有一本书。',py:'Zhuōzi shang yǒu yī běn shū.',vi:'Trên bàn có một quyển sách.',form:'Place + 有 + N'},
      {zh:'你有没有手机？',py:'Nǐ yǒu méiyǒu shǒujī?',vi:'Bạn có điện thoại không?',form:'S + 有没有 + N?'},
    ]
  },
  // ── 5. 在 — vị trí ────────────────────────────────
  {
    id:'co-ban', num:5,
    title:'Câu 在 (zài) — Vị trí & Đang làm',
    tag:'S + 在 + Nơi / S + 在 + Nơi + V',
    formula:'在 + Địa điểm (+ V)',
    note:'',
    tip:'💡 在 đứng trước động từ = đang (进行态). 在 đứng sau 是 = ở tại.',
    rows:[
      {zh:'他在学校。',py:'Tā zài xuéxiào.',vi:'Anh ấy ở trường.',form:'S + 在 + Place'},
      {zh:'我在北京工作。',py:'Wǒ zài Běijīng gōngzuò.',vi:'Tôi làm việc ở Bắc Kinh.',form:'S + 在 + Place + V'},
      {zh:'他在看书。',py:'Tā zài kàn shū.',vi:'Anh ấy đang đọc sách.',form:'S + 在 + V (đang...)'},
      {zh:'书在桌子上。',py:'Shū zài zhuōzi shang.',vi:'Sách ở trên bàn.',form:'N + 在 + Place'},
    ]
  },
  // ── 6. 不 vs 没 ────────────────────────────────────
  {
    id:'phu-dinh', num:6,
    title:'Phủ định: 不 (bù) vs 没(有) (méi)',
    tag:'不 = chủ quan / 没 = khách quan/quá khứ',
    formula:'',
    note:'⚠️ 是 phủ định = 不是. Quá khứ dùng 没 (không dùng 不). Tính chất/thói quen dùng 不.',
    tip:'',
    rows:[
      {zh:'我不去。',py:'Wǒ bù qù.',vi:'Tôi không đi (ý chí/thói quen).',form:'不 + V'},
      {zh:'我没去。',py:'Wǒ méi qù.',vi:'Tôi đã không đi (thực tế).',form:'没 + V'},
      {zh:'他没有钱。',py:'Tā méiyǒu qián.',vi:'Anh ấy không có tiền.',form:'没有 + N'},
      {zh:'我不喜欢喝咖啡。',py:'Wǒ bù xǐhuan hē kāfēi.',vi:'Tôi không thích uống cà phê.',form:'不 + V (thói quen)'},
      {zh:'我今天没喝咖啡。',py:'Wǒ jīntiān méi hē kāfēi.',vi:'Hôm nay tôi chưa uống cà phê.',form:'没 + V (hôm nay)'},
    ]
  },
  // ── 7. Câu hỏi 吗 ─────────────────────────────────
  {
    id:'cau-hoi', num:7,
    title:'Câu hỏi với 吗 (ma)',
    tag:'S + V/Adj + 吗?',
    formula:'Câu khẳng định + 吗 → câu hỏi có/không',
    note:'',
    tip:'💡 Chỉ cần thêm 吗 vào cuối câu khẳng định là thành câu hỏi',
    rows:[
      {zh:'你忙吗？',py:'Nǐ máng ma?',vi:'Bạn bận không?',form:'S + Adj + 吗?'},
      {zh:'他是老师吗？',py:'Tā shì lǎoshī ma?',vi:'Anh ấy có phải là giáo viên không?',form:'S + 是 + N + 吗?'},
      {zh:'你喜欢吃饺子吗？',py:'Nǐ xǐhuan chī jiǎozi ma?',vi:'Bạn có thích ăn sủi cảo không?',form:'S + V + O + 吗?'},
    ]
  },
  // ── 8. Câu hỏi A不A ────────────────────────────────
  {
    id:'cau-hoi', num:8,
    title:'Câu hỏi chính phản A不A / A没A',
    tag:'V + 不 + V? / Adj + 不 + Adj?',
    formula:'Động từ/Tính từ + 不 + Động từ/Tính từ',
    note:'',
    tip:'💡 Câu hỏi chính phản = cách hỏi chính thức hơn, không dùng 吗',
    rows:[
      {zh:'你去不去？',py:'Nǐ qù bú qù?',vi:'Bạn có đi không?',form:'V + 不 + V?'},
      {zh:'汉语难不难？',py:'Hànyǔ nán bu nán?',vi:'Tiếng Trung có khó không?',form:'Adj + 不 + Adj?'},
      {zh:'你有没有时间？',py:'Nǐ yǒu méiyǒu shíjiān?',vi:'Bạn có thời gian không?',form:'有 + 没有 + N?'},
      {zh:'他是不是学生？',py:'Tā shì bu shì xuésheng?',vi:'Anh ấy có phải học sinh không?',form:'是 + 不是 + N?'},
    ]
  },
  // ── 9. Từ nghi vấn ────────────────────────────────
  {
    id:'cau-hoi', num:9,
    title:'Từ nghi vấn (疑问词)',
    tag:'什么/谁/哪儿/怎么/为什么/几/多少',
    formula:'Từ nghi vấn ĐỨNG TẠI VỊ TRÍ của thành phần cần hỏi',
    note:'⚠️ Từ nghi vấn KHÔNG đảo lên đầu câu như tiếng Anh!',
    tip:'',
    rows:[
      {zh:'你叫什么名字？',py:'Nǐ jiào shénme míngzi?',vi:'Bạn tên là gì?',form:'什么 — cái gì/nào'},
      {zh:'他是谁？',py:'Tā shì shéi?',vi:'Anh ấy là ai?',form:'谁 — ai'},
      {zh:'你去哪儿？',py:'Nǐ qù nǎr?',vi:'Bạn đi đâu?',form:'哪儿/哪里 — đâu'},
      {zh:'你怎么去？',py:'Nǐ zěnme qù?',vi:'Bạn đi như thế nào?',form:'怎么 — thế nào/bằng cách nào'},
      {zh:'为什么你不去？',py:'Wèishénme nǐ bù qù?',vi:'Tại sao bạn không đi?',form:'为什么 — tại sao'},
      {zh:'几点了？',py:'Jǐ diǎn le?',vi:'Mấy giờ rồi? (dưới 10)',form:'几 — mấy (1-10)'},
      {zh:'多少钱？',py:'Duōshao qián?',vi:'Bao nhiêu tiền?',form:'多少 — bao nhiêu (10+)'},
    ]
  },
  // ── 10. 还是 ──────────────────────────────────────
  {
    id:'cau-hoi', num:10,
    title:'Câu hỏi lựa chọn với 还是 (háishi)',
    tag:'A + 还是 + B?',
    formula:'Phương án A + 还是 + Phương án B?',
    note:'',
    tip:'💡 还是 dùng trong câu hỏi. Trong câu khẳng định dùng 或者 (hoặc là).',
    rows:[
      {zh:'你喝茶还是喝咖啡？',py:'Nǐ hē chá háishi hē kāfēi?',vi:'Bạn uống trà hay cà phê?',form:'V + A + 还是 + V + B?'},
      {zh:'你是日本人还是中国人？',py:'Nǐ shì Rìběnrén háishi Zhōngguórén?',vi:'Bạn là người Nhật hay người Trung?',form:'是 + A + 还是 + B?'},
    ]
  },
  // ── 11. 的 ────────────────────────────────────────
  {
    id:'tro-tu', num:11,
    title:'Trợ từ 的 (de) — Định ngữ & Sở hữu',
    tag:'Định ngữ + 的 + Danh từ',
    formula:'[Tính từ / Đại từ / Động từ / Câu] + 的 + Danh từ',
    note:'',
    tip:'💡 Quan hệ thân thiết hoặc tổ chức có thể bỏ 的: 我妈妈、他们公司',
    rows:[
      {zh:'我的书',py:'wǒ de shū',vi:'sách của tôi',form:'Đại từ + 的 + N'},
      {zh:'漂亮的女孩',py:'piàoliang de nǚhái',vi:'cô gái xinh đẹp',form:'Adj + 的 + N'},
      {zh:'学汉语的学生',py:'xué Hànyǔ de xuésheng',vi:'học sinh học tiếng Trung',form:'V + O + 的 + N'},
      {zh:'他送给我的礼物',py:'tā sòng gěi wǒ de lǐwù',vi:'món quà anh ấy tặng tôi',form:'Câu + 的 + N'},
    ]
  },
  // ── 12. 了 ────────────────────────────────────────
  {
    id:'tro-tu', num:12,
    title:'Trợ từ 了 (le) — Hoàn thành & Thay đổi',
    tag:'V + 了 (hoàn thành) / Adj + 了 (thay đổi)',
    formula:'',
    note:'⚠️ 了 CÓ HAI nghĩa khác nhau: (1) sau V = hành động hoàn thành; (2) cuối câu = thay đổi trạng thái mới',
    tip:'',
    rows:[
      {zh:'我吃了饺子。',py:'Wǒ chī le jiǎozi.',vi:'Tôi đã ăn sủi cảo.',form:'V + 了 + O (hoàn thành)'},
      {zh:'我没吃饺子。',py:'Wǒ méi chī jiǎozi.',vi:'Tôi chưa ăn sủi cảo.',form:'没 + V + O (phủ định 了)'},
      {zh:'他已经走了。',py:'Tā yǐjīng zǒu le.',vi:'Anh ấy đã đi rồi.',form:'已经 + V + 了 (đã...rồi)'},
      {zh:'天气冷了。',py:'Tiānqì lěng le.',vi:'Thời tiết trở lạnh rồi.',form:'Adj + 了 (thay đổi)'},
      {zh:'他现在是老师了。',py:'Tā xiànzài shì lǎoshī le.',vi:'Anh ấy bây giờ là giáo viên rồi.',form:'Câu + 了 (trạng thái mới)'},
    ]
  },
  // ── 13. 过 ────────────────────────────────────────
  {
    id:'tro-tu', num:13,
    title:'Trợ từ 过 (guò) — Kinh nghiệm quá khứ',
    tag:'V + 过 + O (đã từng...)',
    formula:'Động từ + 过',
    note:'',
    tip:'💡 过 nhấn mạnh kinh nghiệm từng có, không quan tâm thời điểm. Phủ định: 没 + V + 过',
    rows:[
      {zh:'我去过北京。',py:'Wǒ qù guo Běijīng.',vi:'Tôi đã từng đến Bắc Kinh.',form:'V + 过 + Place'},
      {zh:'我没吃过北京烤鸭。',py:'Wǒ méi chī guo Běijīng kǎoyā.',vi:'Tôi chưa từng ăn vịt quay Bắc Kinh.',form:'没 + V + 过 + O'},
      {zh:'你看过这本书吗？',py:'Nǐ kàn guo zhè běn shū ma?',vi:'Bạn đã đọc cuốn sách này chưa?',form:'V + 过 + O + 吗?'},
    ]
  },
  // ── 14. 着 ────────────────────────────────────────
  {
    id:'tro-tu', num:14,
    title:'Trợ từ 着 (zhe) — Trạng thái đang duy trì',
    tag:'V + 着 (đang / trong trạng thái)',
    formula:'Động từ + 着',
    note:'',
    tip:'💡 着 mô tả trạng thái đang duy trì (cửa đang mở), khác với 在 + V (đang thực hiện hành động)',
    rows:[
      {zh:'门开着。',py:'Mén kāi zhe.',vi:'Cửa đang mở.',form:'V + 着 (trạng thái)'},
      {zh:'他穿着白衬衫。',py:'Tā chuān zhe bái chènshān.',vi:'Anh ấy đang mặc áo trắng.',form:'V + 着 + O (miêu tả)'},
      {zh:'请站着说。',py:'Qǐng zhàn zhe shuō.',vi:'Xin đứng mà nói.',form:'V1 + 着 + V2 (đồng thời)'},
    ]
  },
  // ── 15. 吧 & 呢 ───────────────────────────────────
  {
    id:'tro-tu', num:15,
    title:'Trợ từ cuối câu: 吧 (ba) & 呢 (ne)',
    tag:'Câu + 吧 (gợi ý/xác nhận) / Câu + 呢 (thế còn...?)',
    formula:'',
    note:'',
    tip:'',
    rows:[
      {zh:'我们走吧！',py:'Wǒmen zǒu ba!',vi:'Chúng ta đi thôi!',form:'吧 — đề nghị/gợi ý'},
      {zh:'你是老师吧？',py:'Nǐ shì lǎoshī ba?',vi:'Bạn là giáo viên phải không?',form:'吧 — xác nhận phỏng đoán'},
      {zh:'便宜一点儿吧。',py:'Piányí yīdiǎnr ba.',vi:'Rẻ chút đi!',form:'吧 — yêu cầu nhẹ nhàng'},
      {zh:'你呢？',py:'Nǐ ne?',vi:'Còn bạn thì sao?',form:'呢 — thế còn...?'},
      {zh:'他呢？',py:'Tā ne?',vi:'Anh ấy đâu rồi?',form:'呢 — hỏi về sự vắng mặt'},
    ]
  },
  // ── 16. Động từ trợ ───────────────────────────────
  {
    id:'dong-tu-tro', num:16,
    title:'Động từ trợ: 想/要/会/能/可以/应该',
    tag:'Modal + V + O',
    formula:'Chủ ngữ + [Modal] + Động từ + Tân ngữ',
    note:'⚠️ Phủ định: 不想/不要/不会/不能/不可以/不应该',
    tip:'',
    rows:[
      {zh:'我想喝水。',py:'Wǒ xiǎng hē shuǐ.',vi:'Tôi muốn uống nước. (mong muốn)',form:'想 — muốn (nguyện vọng)'},
      {zh:'我要去北京。',py:'Wǒ yào qù Běijīng.',vi:'Tôi sẽ/phải đi Bắc Kinh.',form:'要 — sẽ/phải (quyết tâm)'},
      {zh:'我会说汉语。',py:'Wǒ huì shuō Hànyǔ.',vi:'Tôi biết nói tiếng Trung.',form:'会 — biết (kỹ năng học được)'},
      {zh:'我能吃辣。',py:'Wǒ néng chī là.',vi:'Tôi có thể ăn cay.',form:'能 — có khả năng (thực tế)'},
      {zh:'这里可以拍照吗？',py:'Zhèlǐ kěyǐ pāizhào ma?',vi:'Ở đây có thể chụp ảnh không?',form:'可以 — được phép'},
      {zh:'你应该多休息。',py:'Nǐ yīnggāi duō xiūxi.',vi:'Bạn nên nghỉ ngơi nhiều hơn.',form:'应该 — nên/cần phải'},
    ]
  },
  // ── 17. Lượng từ ──────────────────────────────────
  {
    id:'co-ban', num:17,
    title:'Lượng từ (量词) — Bắt buộc giữa số & danh từ',
    tag:'Số + 量词 + Danh từ',
    formula:'Số đếm + Lượng từ + Danh từ',
    note:'⚠️ Số 2 trước lượng từ = 两 (liǎng), không phải 二. Ví dụ: 两个人 ✓ / 二个人 ✗',
    tip:'💡 Lượng từ phổ thông nhất: 个 (ge) — dùng được cho người và vật khi không biết LT cụ thể',
    rows:[
      {zh:'一个人',py:'yī ge rén',vi:'một người',form:'个 — người, vật chung'},
      {zh:'两本书',py:'liǎng běn shū',vi:'hai quyển sách',form:'本 — sách, vở'},
      {zh:'三张纸',py:'sān zhāng zhǐ',vi:'ba tờ giấy',form:'张 — tờ, tấm phẳng'},
      {zh:'四条鱼',py:'sì tiáo yú',vi:'bốn con cá',form:'条 — dài, mỏng'},
      {zh:'五口人',py:'wǔ kǒu rén',vi:'năm người (trong gia đình)',form:'口 — người trong nhà'},
      {zh:'六件衣服',py:'liù jiàn yīfu',vi:'sáu cái quần áo',form:'件 — quần áo, sự việc'},
      {zh:'七斤苹果',py:'qī jīn píngguǒ',vi:'bảy cân táo',form:'斤 — cân (0.5kg)'},
      {zh:'八杯茶',py:'bā bēi chá',vi:'tám cốc trà',form:'杯 — cốc, ly'},
    ]
  },
  // ── 18. Thời gian & Địa điểm ──────────────────────
  {
    id:'co-ban', num:18,
    title:'Thứ tự: Thời gian — Địa điểm — Động từ',
    tag:'(S) + Time + Place + V + O',
    formula:'Chủ ngữ + Thời gian + Địa điểm + Động từ + Tân ngữ',
    note:'⚠️ Ngược với tiếng Anh: TG và địa điểm đứng TRƯỚC động từ trong tiếng Trung',
    tip:'',
    rows:[
      {zh:'我明天去北京。',py:'Wǒ míngtiān qù Běijīng.',vi:'Ngày mai tôi đi Bắc Kinh.',form:'TG + V + Place'},
      {zh:'他每天在图书馆学习。',py:'Tā měitiān zài túshūguǎn xuéxí.',vi:'Anh ấy mỗi ngày học ở thư viện.',form:'TG + Place + V'},
      {zh:'我们下午两点在咖啡厅见面吧。',py:'Wǒmen xiàwǔ liǎng diǎn zài kāfēitīng jiànmiàn ba.',vi:'Chiều 2 giờ chúng ta gặp ở quán cà phê nhé.',form:'TG + Place + V'},
    ]
  },
  // ── 19. Bổ ngữ kết quả ────────────────────────────
  {
    id:'bo-ngu', num:19,
    title:'Bổ ngữ kết quả (结果补语)',
    tag:'V + 好/完/到/见/懂/错/会',
    formula:'Động từ chính + Bổ ngữ kết quả',
    note:'',
    tip:'💡 Phủ định dùng 没: 我没听懂. Không dùng 不 cho hành động cụ thể đã xảy ra',
    rows:[
      {zh:'我听懂了。',py:'Wǒ tīng dǒng le.',vi:'Tôi nghe hiểu rồi.',form:'听 + 懂 (hiểu)'},
      {zh:'作业做完了。',py:'Zuòyè zuò wán le.',vi:'Bài tập làm xong rồi.',form:'做 + 完 (xong)'},
      {zh:'你找到了吗？',py:'Nǐ zhǎo dào le ma?',vi:'Bạn tìm được chưa?',form:'找 + 到 (được)'},
      {zh:'我写错了。',py:'Wǒ xiě cuò le.',vi:'Tôi viết sai rồi.',form:'写 + 错 (sai)'},
      {zh:'饭做好了。',py:'Fàn zuò hǎo le.',vi:'Cơm nấu xong rồi.',form:'做 + 好 (hoàn chỉnh)'},
    ]
  },
  // ── 20. Bổ ngữ mức độ ─────────────────────────────
  {
    id:'bo-ngu', num:20,
    title:'Bổ ngữ mức độ (程度补语): V + 得 + Adj',
    tag:'V + 得 + Adj/Adv',
    formula:'Động từ + 得 + Mô tả mức độ',
    note:'⚠️ Nếu có tân ngữ: V + O + V + 得 + Adj (lặp lại động từ). Vd: 他汉语说得很好',
    tip:'💡 Phủ định: V + 得 + 不 + Adj. Câu hỏi: V + 得 + 怎么样?',
    rows:[
      {zh:'他跑得很快。',py:'Tā pǎo de hěn kuài.',vi:'Anh ấy chạy rất nhanh.',form:'V + 得 + Adj'},
      {zh:'他汉语说得很好。',py:'Tā Hànyǔ shuō de hěn hǎo.',vi:'Tiếng Trung của anh ấy nói rất tốt.',form:'O + V + 得 + Adj'},
      {zh:'你来得太晚了。',py:'Nǐ lái de tài wǎn le.',vi:'Bạn đến quá muộn rồi.',form:'V + 得 + 太 + Adj + 了'},
    ]
  },
  // ── 21. Bổ ngữ khả năng ───────────────────────────
  {
    id:'bo-ngu', num:21,
    title:'Bổ ngữ khả năng (可能补语): V + 得/不 + 结果',
    tag:'V + 得 + 结果 (làm được) / V + 不 + 结果 (không làm được)',
    formula:'V + 得/不 + Bổ ngữ kết quả',
    note:'',
    tip:'💡 Câu hỏi: V + 得 + 结果 + 吗? hoặc V + 得 + 结果 + V + 不 + 结果?',
    rows:[
      {zh:'我听得懂。',py:'Wǒ tīng de dǒng.',vi:'Tôi có thể nghe hiểu được.',form:'V + 得 + 结果 (được)'},
      {zh:'我听不懂。',py:'Wǒ tīng bù dǒng.',vi:'Tôi không thể nghe hiểu.',form:'V + 不 + 结果 (không được)'},
      {zh:'这个字你认得出来吗？',py:'Zhège zì nǐ rèn de chūlai ma?',vi:'Bạn có nhận ra chữ này không?',form:'V + 得 + 结果 + 吗?'},
    ]
  },
  // ── 22. So sánh 比 ────────────────────────────────
  {
    id:'so-sanh', num:22,
    title:'So sánh: 比 (bǐ) — A hơn B',
    tag:'A + 比 + B + Adj',
    formula:'A + 比 + B + Adj (+ 一点儿/多/得多)',
    note:'⚠️ KHÔNG dùng 更/非常 trực tiếp sau 比. Sai: ❌ 他比我更高 → Đúng: ✅ 他比我高得多',
    tip:'',
    rows:[
      {zh:'他比我高。',py:'Tā bǐ wǒ gāo.',vi:'Anh ấy cao hơn tôi.',form:'A + 比 + B + Adj'},
      {zh:'今天比昨天冷一点儿。',py:'Jīntiān bǐ zuótiān lěng yīdiǎnr.',vi:'Hôm nay lạnh hơn hôm qua một chút.',form:'A + 比 + B + Adj + 一点儿'},
      {zh:'这个贵得多。',py:'Zhège guì de duō.',vi:'Cái này đắt hơn nhiều.',form:'A + 比 + B + Adj + 得多'},
      {zh:'她没有他高。',py:'Tā méiyǒu tā gāo.',vi:'Cô ấy không cao bằng anh ấy.',form:'A + 没有 + B + Adj (không bằng)'},
    ]
  },
  // ── 23. 越来越 / 越...越... ──────────────────────
  {
    id:'so-sanh', num:23,
    title:'越来越 / 越...越...',
    tag:'越来越 + Adj (ngày càng) / 越 + V + 越 + Adj',
    formula:'',
    note:'',
    tip:'',
    rows:[
      {zh:'天气越来越热了。',py:'Tiānqì yuè lái yuè rè le.',vi:'Thời tiết ngày càng nóng hơn.',form:'越来越 + Adj (ngày càng)'},
      {zh:'他越学越喜欢汉语。',py:'Tā yuè xué yuè xǐhuan Hànyǔ.',vi:'Anh ấy càng học càng thích tiếng Trung.',form:'越 + V + 越 + Adj/V'},
      {zh:'书越来越贵了。',py:'Shū yuè lái yuè guì le.',vi:'Sách ngày càng đắt.',form:'越来越 + Adj'},
    ]
  },
  // ── 24. 把 ────────────────────────────────────────
  {
    id:'co-ban', num:24,
    title:'Câu 把 (bǎ) — Xử lý tân ngữ',
    tag:'S + 把 + O + V + 结果/趋向',
    formula:'Chủ ngữ + 把 + Tân ngữ + Động từ + Bổ ngữ',
    note:'⚠️ Câu 把 yêu cầu: (1) động từ phải có bổ ngữ kết quả hoặc hướng; (2) tân ngữ phải xác định (đã biết); (3) không dùng 是/有/在',
    tip:'💡 Dùng 把 khi muốn nhấn mạnh tân ngữ bị xử lý/thay đổi như thế nào',
    rows:[
      {zh:'我把书放在桌子上。',py:'Wǒ bǎ shū fàng zài zhuōzi shang.',vi:'Tôi đặt sách lên bàn.',form:'把 + O + V + 在 + Place'},
      {zh:'请把门关上。',py:'Qǐng bǎ mén guān shang.',vi:'Làm ơn đóng cửa lại.',form:'把 + O + V + 上'},
      {zh:'你把作业做完了吗？',py:'Nǐ bǎ zuòyè zuò wán le ma?',vi:'Bạn làm xong bài tập chưa?',form:'把 + O + V + 完 + 了?'},
    ]
  },
  // ── 25. 被 ────────────────────────────────────────
  {
    id:'co-ban', num:25,
    title:'Câu bị động 被 (bèi)',
    tag:'S + 被 + (Người làm) + V + 结果',
    formula:'Chủ ngữ (chịu tác động) + 被 + V + Bổ ngữ',
    note:'',
    tip:'💡 Câu 被 thường mang sắc thái tiêu cực (bị làm gì đó không mong muốn)',
    rows:[
      {zh:'我的钱包被偷了。',py:'Wǒ de qiánbāo bèi tōu le.',vi:'Ví của tôi bị trộm mất rồi.',form:'S + 被 + V + 了'},
      {zh:'这本书被他借走了。',py:'Zhè běn shū bèi tā jiè zǒu le.',vi:'Cuốn sách này bị anh ấy mượn đi rồi.',form:'S + 被 + Người + V + 走了'},
    ]
  },
  // ── 26. 是...的 ────────────────────────────────────
  {
    id:'co-ban', num:26,
    title:'Kết cấu nhấn mạnh 是...的',
    tag:'是 + [TG/Địa điểm/Cách thức] + V + 的',
    formula:'是 + Thành phần muốn nhấn mạnh + Động từ + 的',
    note:'',
    tip:'💡 Dùng khi hành động đã xảy ra, muốn hỏi/nhấn mạnh thời gian/địa điểm/cách thức',
    rows:[
      {zh:'你是什么时候来的？',py:'Nǐ shì shénme shíhou lái de?',vi:'Bạn đến lúc nào vậy?',form:'是 + TG? + V + 的'},
      {zh:'我是昨天来的。',py:'Wǒ shì zuótiān lái de.',vi:'Tôi đến hôm qua.',form:'是 + TG + V + 的'},
      {zh:'他是坐飞机来的。',py:'Tā shì zuò fēijī lái de.',vi:'Anh ấy đi máy bay mà đến.',form:'是 + Cách thức + V + 的'},
    ]
  },
  // ── 27. 因为...所以... ─────────────────────────────
  {
    id:'cau-phuc', num:27,
    title:'因为...所以... — Nhân quả',
    tag:'因为 + Nguyên nhân, 所以 + Kết quả',
    formula:'因为 + A，所以 + B',
    note:'',
    tip:'💡 Có thể bỏ 因为 hoặc 所以 nhưng không bỏ cả hai',
    rows:[
      {zh:'因为今天下雨，所以我没去。',py:'Yīnwèi jīntiān xià yǔ, suǒyǐ wǒ méi qù.',vi:'Vì hôm nay trời mưa nên tôi không đi.',form:'因为...所以...'},
      {zh:'因为他很努力，所以汉语进步很快。',py:'Yīnwèi tā hěn nǔlì, suǒyǐ Hànyǔ jìnbù hěn kuài.',vi:'Vì anh ấy rất chăm chỉ nên tiếng Trung tiến bộ rất nhanh.',form:'因为...所以...'},
    ]
  },
  // ── 28. 虽然...但是... ─────────────────────────────
  {
    id:'cau-phuc', num:28,
    title:'虽然...但是... — Nhượng bộ',
    tag:'虽然 + A, 但是/可是 + B',
    formula:'虽然 + Mệnh đề 1, 但是 + Mệnh đề 2 (nhưng)',
    note:'',
    tip:'💡 Có thể nói 虽然...但... hoặc 虽然...可是...',
    rows:[
      {zh:'虽然汉语很难，但是很有意思。',py:'Suīrán Hànyǔ hěn nán, dànshì hěn yǒu yìsi.',vi:'Mặc dù tiếng Trung rất khó nhưng rất thú vị.',form:'虽然...但是...'},
      {zh:'虽然他很忙，但是每天都来。',py:'Suīrán tā hěn máng, dànshì měitiān dōu lái.',vi:'Mặc dù anh ấy rất bận nhưng ngày nào cũng đến.',form:'虽然...但是...'},
    ]
  },
  // ── 29. 如果...就... ───────────────────────────────
  {
    id:'cau-phuc', num:29,
    title:'如果...就... — Điều kiện',
    tag:'如果 + Điều kiện, 就 + Kết quả',
    formula:'如果 + A, (那么) 就 + B',
    note:'',
    tip:'',
    rows:[
      {zh:'如果明天下雨，我就不去了。',py:'Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù le.',vi:'Nếu ngày mai trời mưa, tôi sẽ không đi.',form:'如果...就...'},
      {zh:'如果你有时间，就来吧。',py:'Rúguǒ nǐ yǒu shíjiān, jiù lái ba.',vi:'Nếu bạn có thời gian thì đến đi.',form:'如果...就...'},
    ]
  },
  // ── 30. 不但...而且... ─────────────────────────────
  {
    id:'cau-phuc', num:30,
    title:'不但...而且... / 既...又... — Bổ sung',
    tag:'不但 A, 而且 B (không những...mà còn...)',
    formula:'',
    note:'',
    tip:'',
    rows:[
      {zh:'他不但会说汉语，而且会说日语。',py:'Tā búdàn huì shuō Hànyǔ, érqiě huì shuō Rìyǔ.',vi:'Anh ấy không những biết nói tiếng Trung mà còn biết tiếng Nhật.',form:'不但...而且... (không những...mà còn)'},
      {zh:'这个饭馆既便宜又好吃。',py:'Zhège fànguǎn jì piányí yòu hǎochī.',vi:'Nhà hàng này vừa rẻ vừa ngon.',form:'既...又... (vừa...vừa...)'},
    ]
  },
];

function filterGram(id, btn) {
  document.querySelectorAll('.gram-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.gram-section').forEach(sec => {
    if (id === 'all' || sec.dataset.gramId === id) {
      sec.style.display = '';
    } else {
      sec.style.display = 'none';
    }
  });
}

function toggleGram(n) {
  const body = document.getElementById('gram-body-' + n);
  const hdr  = document.getElementById('gram-hdr-' + n);
  if (!body) return;
  const hidden = body.classList.toggle('hidden');
  hdr.classList.toggle('collapsed', hidden);
}

function renderGrammar() {
  const container = document.getElementById('gramContainer');
  if (!container) return;
  container.innerHTML = '';

  GRAMMAR_DATA.forEach((g, idx) => {
    const sec = document.createElement('div');
    sec.className = 'gram-section';
    sec.dataset.gramId = g.id;

    // Header
    const hdr = document.createElement('div');
    hdr.className = 'gram-hdr' + (idx > 0 ? ' collapsed' : '');
    hdr.id = 'gram-hdr-' + g.num;
    hdr.onclick = () => toggleGram(g.num);
    hdr.innerHTML =
      '<span class="gram-num">' + g.num + '</span>' +
      '<div class="gram-hdr-text">' +
        '<strong>' + g.title + '</strong>' +
        (g.tag ? '<span class="gram-tag">' + g.tag + '</span>' : '') +
      '</div>' +
      '<span class="toggle-icon">▼</span>';
    sec.appendChild(hdr);

    // Body
    const body = document.createElement('div');
    body.className = 'gram-body' + (idx > 0 ? ' hidden' : '');
    body.id = 'gram-body-' + g.num;

    if (g.formula) {
      body.innerHTML += '<div class="gram-formula">📐 ' + g.formula + '</div>';
    }
    if (g.note) {
      body.innerHTML += '<div class="gram-note">' + g.note + '</div>';
    }

    // Examples table
    const table = document.createElement('table');
    table.className = 'gram-table';
    table.innerHTML = '<thead><tr>' +
      '<th style="min-width:170px">Chữ Hán</th>' +
      '<th style="min-width:180px">Pinyin</th>' +
      '<th>Nghĩa tiếng Việt</th>' +
      '<th style="min-width:100px">Cấu trúc</th>' +
      '<th style="width:44px"></th>' +
      '</tr></thead>';
    const tbody = document.createElement('tbody');
    g.rows.forEach(row => {
      const tr = document.createElement('tr');
      const zhEsc = row.zh.replace(/'/g, "\\'");
      tr.innerHTML =
        '<td class="gt-zh">' + row.zh + '</td>' +
        '<td class="gt-py">' + row.py + '</td>' +
        '<td class="gt-vi">' + row.vi + '</td>' +
        '<td class="gt-form">' + row.form + '</td>' +
        '<td><button class="dl-btn dl-btn-speak" onclick="speak(\'' + zhEsc + '\')">🔊</button></td>';
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    body.appendChild(table);

    if (g.tip) {
      body.innerHTML += '<div class="gram-tip">' + g.tip + '</div>';
    }

    sec.appendChild(body);
    container.appendChild(sec);
  });
}

