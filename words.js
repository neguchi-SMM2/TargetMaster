const words = [
  {
    word: "create",
    meaning: "を創り出す",
    page: 18,
    section: 1
  },
  {
    word: "increase",
    meaning: "増加する",
    page: 18,
    section: 1
  },
  {
    word: "improve",
    meaning: "を向上させる",
    page: 18,
    section: 1
  },
  {
    word: "mean",
    meaning: "を意味する",
    page: 18,
    section: 1
  },
  {
    word: "own",
    meaning: "を所持している",
    page: 18,
    section: 1
  },
  {
    word: "include",
    meaning: "を含む",
    page: 18,
    section: 1
  },
  {
    word: "consider",
    meaning: "をみなす",
    page: 18,
    section: 1
  },
  {
    word: "allow",
    meaning: "を許す",
    page: 20,
    section: 1
  },
  {
    word: "suggest",
    meaning: "を提案する",
    page: 20,
    section: 1
  },
  {
    word: "produce",
    meaning: "を生産する",
    page: 20,
    section: 1
  },
  {
    word: "decide",
    meaning: "を決める",
    page: 20,
    section: 1
  },
  {
    word: "offer",
    meaning: "を提供する, 申し出る",
    page: 20,
    section: 1
  },
  {
    word: "require",
    meaning: "を要求する",
    page: 20,
    section: 1
  },
  {
    word: "share",
    meaning: "を共有する",
    page: 20,
    section: 1
  },
  {
    word: "store",
    meaning: "を保存する",
    page: 22,
    section: 1
  },
  {
    word: "tend",
    meaning: "傾向がある",
    page: 22,
    section: 1
  },
  {
    word: "concern",
    meaning: "心配している",
    page: 22,
    section: 1
  },
  {
    word: "describe",
    meaning: "について述べる, を説明する",
    page: 22,
    section: 1
  },
  {
    word: "involve",
    meaning: "を関与させる",
    page: 22,
    section: 1
  },
  {
    word: "reduce",
    meaning: "を減らす",
    page: 22,
    section: 1
  },
  {
    word: "design",
    meaning: "を設計する",
    page: 22,
    section: 1
  },
  {
    word: "force",
    meaning: "に強いる",
    page: 22,
    section: 1
  },
  {
    word: "limit",
    meaning: "を制限する",
    page: 24,
    section: 1
  },
  {
    word: "bear",
    meaning: "に耐える",
    page: 24,
    section: 1
  },
  {
    word: "affect",
    meaning: "に影響を及ぼす",
    page: 24,
    section: 1
  },
  {
    word: "deal",
    meaning: "を処理する",
    page: 24,
    section: 1
  },
  {
    word: "avoid",
    meaning: "を避ける",
    page: 24,
    section: 1
  },
  {
    word: "relate",
    meaning: "を関連付ける",
    page: 24,
    section: 1
  },
  {
    word: "realize",
    meaning: "に気づく",
    page: 24,
    section: 1
  },
  {
    word: "encourage",
    meaning: "を推奨する",
    page: 26,
    section: 1
  },
  {
    word: "compare",
    meaning: "を比較する",
    page: 26,
    section: 1
  },
  {
    word: "measure",
    meaning: "を測る",
    page: 26,
    section: 1
  },
  {
    word: "exist",
    meaning: "存在する",
    page: 26,
    section: 1
  },
  {
    word: "mark",
    meaning: "に印をつける",
    page: 26,
    section: 1
  },
  {
    word: "challenge",
    meaning: "に異議を唱える",
    page: 26,
    section: 1
  },
  {
    word: "depend",
    meaning: "頼る",
    page: 26,
    section: 1
  },
  {
    word: "object",
    meaning: "反対する",
    page: 28,
    section: 2
  },
  {
    word: "demand",
    meaning: "を要求する",
    page: 28,
    section: 2
  },
  {
    word: "found",
    meaning: "を設立する",
    page: 28,
    section: 2
  },
  {
    word: "complete",
    meaning: "を完成させる, 仕上げる",
    page: 28,
    section: 2
  },
  {
    word: "idea",
    meaning: "考え, 思いつき",
    page: 28,
    section: 2
  },
  {
    word: "accord",
    meaning: "一致",
    page: 28,
    section: 2
  },
  {
    word: "company",
    meaning: "会社",
    page: 28,
    section: 2
  },
  {
    word: "interest",
    meaning: "興味",
    page: 28,
    section: 2
  },
  {
    word: "research",
    meaning: "研究, 調査",
    page: 30,
    section: 2
  },
  {
    word: "cause",
    meaning: "原因",
    page: 30,
    section: 2
  },
  {
    word: "reason",
    meaning: "理由",
    page: 30,
    section: 2
  },
  {
    word: "effect",
    meaning: "影響, 効果",
    page: 30,
    section: 2
  },
  {
    word: "influence",
    meaning: "影響",
    page: 30,
    section: 2
  },
  {
    word: "situation",
    meaning: "状況",
    page: 30,
    section: 2
  },
  {
    word: "environment",
    meaning: "環境",
    page: 30,
    section: 2
  },
  {
    word: "skill",
    meaning: "技能",
    page: 30,
    section: 2
  },
  {
    word: "matter",
    meaning: "事柄",
    page: 32,
    section: 2
  },
  {
    word: "view",
    meaning: "見解",
    page: 32,
    section: 2
  },
  {
    word: "value",
    meaning: "価値",
    page: 32,
    section: 2
  },
  {
    word: "species",
    meaning: "(生物の)種",
    page: 32,
    section: 2
  },
  {
    word: "thought",
    meaning: "考え",
    page: 32,
    section: 2
  },
  {
    word: "knowledge",
    meaning: "知識",
    page: 32,
    section: 2
  },
  {
    word: "memory",
    meaning: "記憶",
    page: 32,
    section: 2
  },
  {
    word: "practice",
    meaning: "実践, 実行",
    page: 34,
    section: 2
  },
  {
    word: "benefit",
    meaning: "利益, 恩恵",
    page: 34,
    section: 2
  },
  {
    word: "theory",
    meaning: "学説",
    page: 34,
    section: 2
  },
  {
    word: "issue",
    meaning: "問題",
    page: 34,
    section: 2
  },
  {
    word: "experiment",
    meaning: "実験",
    page: 34,
    section: 2
  },
  {
    word: "article",
    meaning: "記事",
    page: 34,
    section: 2
  },
  {
    word: "focus",
    meaning: "焦点",
    page: 34,
    section: 2
  },
  {
    word: "subject",
    meaning: "話題",
    page: 34,
    section: 2
  },
  {
    word: "project",
    meaning: "計画",
    page: 34,
    section: 2
  },
  {
    word: "quality",
    meaning: "質",
    page: 36,
    section: 2
  },
  {
    word: "role",
    meaning: "役割",
    page: 36,
    section: 2
  },
  {
    word: "term",
    meaning: "専門用語",
    page: 36,
    section: 2
  },
  {
    word: "statement",
    meaning: "声明",
    page: 36,
    section: 2
  },
  {
    word: "material",
    meaning: "材料, 素材",
    page: 36,
    section: 2
  },
  {
    word: "evidence",
    meaning: "証拠",
    page: 36,
    section: 2
  },
  {
    word: "source",
    meaning: "源, 根源",
    page: 36,
    section: 2
  },
  {
    word: "community",
    meaning: "社会, 〜界",
    page: 36,
    section: 2
  },
  {
    word: "technology",
    meaning: "科学技術",
    page: 38,
    section: 3
  },
  {
    word: "culture",
    meaning: "文化",
    page: 38,
    section: 3
  },
  {
    word: "appropriate",
    meaning: "適切な",
    page: 38,
    section: 3
  },
  {
    word: "likely",
    meaning: "ありそうな",
    page: 38,
    section: 3
  },
  {
    word: "possible",
    meaning: "可能な",
    page: 38,
    section: 3
  },
  {
    word: "individual",
    meaning: "個々の",
    page: 38,
    section: 3
  },
  {
    word: "public",
    meaning: "公の",
    page: 38,
    section: 3
  },
  {
    word: "common",
    meaning: "共通の",
    page: 38,
    section: 3
  },
  {
    word: "certain",
    meaning: "確信して",
    page: 40,
    section: 3
  },
  {
    word: "similar",
    meaning: "似ている, 類似した",
    page: 40,
    section: 3
  },
  {
    word: "recent",
    meaning: "最近の",
    page: 40,
    section: 3
  },
  {
    word: "major",
    meaning: "主要な; 大きい",
    page: 40,
    section: 3
  },
  {
    word: "patient",
    meaning: "忍耐強い",
    page: 40,
    section: 3
  },
  {
    word: "particular",
    meaning: "特定の",
    page: 40,
    section: 3
  },
  {
    word: "physical",
    meaning: "身体の",
    page: 40,
    section: 3
  },
  {
    word: "various",
    meaning: "様々な",
    page: 40,
    section: 3
  },
  {
    word: "available",
    meaning: "手に入る",
    page: 42,
    section: 3
  },
  {
    word: "native",
    meaning: "出生地の",
    page: 42,
    section: 3
  },
  {
    word: "political",
    meaning: "政治(上)の",
    page: 42,
    section: 3
  },
  {
    word: "due",
    meaning: "予定された",
    page: 42,
    section: 3
  },
  {
    word: "blank",
    meaning: "空白の",
    page: 42,
    section: 3
  },
  {
    word: "ancient",
    meaning: "古代の",
    page: 42,
    section: 3
  },
  {
    word: "correct",
    meaning: "正しい",
    page: 42,
    section: 3
  },
  {
    word: "despite",
    meaning: "〜にもかかわらず",
    page: 42,
    section: 3
  },
  {
    word: "notice",
    meaning: "に気づく",
    page: 44,
    section: 4
  },
  {
    word: "refer",
    meaning: "言及する, 関連する",
    page: 44,
    section: 4
  },
  {
    word: "approach",
    meaning: "に近づく",
    page: 44,
    section: 4
  },
  {
    word: "wonder",
    meaning: "かなと思う",
    page: 44,
    section: 4
  },
  {
    word: "imagine",
    meaning: "創造する",
    page: 44,
    section: 4
  },
  {
    word: "recognize",
    meaning: "を識別できる",
    page: 44,
    section: 4
  },
  {
    word: "solve",
    meaning: "を解く, 解明する",
    page: 44,
    section: 4
  },
  {
    word: "occur",
    meaning: "起こる",
    page: 46,
    section: 4
  },
  {
    word: "argue",
    meaning: "と主張する",
    page: 46,
    section: 4
  },
  {
    word: "claim",
    meaning: "と主張する",
    page: 46,
    section: 4
  },
  {
    word: "express",
    meaning: "を表す,  述べる",
    page: 46,
    section: 4
  },
  {
    word: "draw",
    meaning: "を引き出す",
    page: 46,
    section: 4
  },
  {
    word: "waste",
    meaning: "を浪費する, むだにする",
    page: 46,
    section: 4
  },
  {
    word: "advance",
    meaning: "を進歩させる",
    page: 46,
    section: 4
  },
  {
    word: "spread",
    meaning: "を広める",
    page: 48,
    section: 4
  },
  {
    word: "prepare",
    meaning: "を準備する",
    page: 48,
    section: 4
  },
  {
    word: "gain",
    meaning: "を獲得する",
    page: 48,
    section: 4
  },
  {
    word: "achieve",
    meaning: "を達成する",
    page: 48,
    section: 4
  },
  {
    word: "establish",
    meaning: "を確立する",
    page: 48,
    section: 4
  },
  {
    word: "supply",
    meaning: "を供給する",
    page: 48,
    section: 4
  },
  {
    word: "suppose",
    meaning: "と思う",
    page: 48,
    section: 4
  },
  {
    word: "perform",
    meaning: "行う",
    page: 50,
    section: 4
  },
  {
    word: "prefer",
    meaning: "の方を好む",
    page: 50,
    section: 4
  },
  {
    word: "determine",
    meaning: "を決定する",
    page: 50,
    section: 4
  },
  {
    word: "treat",
    meaning: "を扱う",
    page: 50,
    section: 4
  },
  {
    word: "prove",
    meaning: "を証明する",
    page: 50,
    section: 4
  },
  {
    word: "apply",
    meaning: "を適応(応用)する",
    page: 50,
    section: 4
  },
  {
    word: "mention",
    meaning: "に言及する",
    page: 50,
    section: 4
  },
  {
    word: "communicate",
    meaning: "情報交換をする",
    page: 52,
    section: 4
  },
  {
    word: "contain",
    meaning: "を含む",
    page: 52,
    section: 4
  },
  {
    word: "contact",
    meaning: "と連絡を取る",
    page: 52,
    section: 4
  },
  {
    word: "regard",
    meaning: "をみなす",
    page: 52,
    section: 4
  },
  {
    word: "respect",
    meaning: "を尊敬する",
    page: 52,
    section: 4
  },
  {
    word: "search",
    meaning: "探す",
    page: 52,
    section: 4
  },
  {
    word: "connect",
    meaning: "をつなぐ",
    page: 52,
    section: 4
  },
  {
    word: "decline",
    meaning: "減少する",
    page: 54,
    section: 5
  },
  {
    word: "prevent",
    meaning: "を妨げる",
    page: 54,
    section: 5
  },
  {
    word: "suffer",
    meaning: "苦しむ",
    page: 54,
    section: 5
  },
  {
    word: "survive",
    meaning: "を切り抜けて生き残る",
    page: 54,
    section: 5
  },
  {
    word: "publish",
    meaning: "を出版する",
    page: 54,
    section: 5
  },
  {
    word: "opportunity",
    meaning: "機会",
    page: 54,
    section: 5
  },
  {
    word: "task",
    meaning: "仕事, 作業",
    page: 54,
    section: 5
  },
  {
    word: "industry",
    meaning: "産業",
    page: 54,
    section: 5
  },
  {
    word: "medium",
    meaning: "(情報伝達の)媒体",
    page: 56,
    section: 5
  },
  {
    word: "economy",
    meaning: "経済(状態)",
    page: 56,
    section: 5
  },
  {
    word: "policy",
    meaning: "政策, 方針",
    page: 56,
    section: 5
  },
  {
    word: "account",
    meaning: "説明",
    page: 56,
    section: 5
  },
  {
    word: "trade",
    meaning: "貿易",
    page: 56,
    section: 5
  },
  {
    word: "model",
    meaning: "模範",
    page: 56,
    section: 5
  },
  {
    word: "figure",
    meaning: "数字",
    page: 56,
    section: 5
  },
  {
    word: "cell",
    meaning: "細胞",
    page: 56,
    section: 5
  },
  {
    word: "image",
    meaning: "印象",
    page: 58,
    section: 5
  },
  {
    word: "emotion",
    meaning: "感情, 情動",
    page: 58,
    section: 5
  },
  {
    word: "stress",
    meaning: "ストレス",
    page: 58,
    section: 5
  },
  {
    word: "decade",
    meaning: "10年間",
    page: 58,
    section: 5
  },
  {
    word: "range",
    meaning: "範囲",
    page: 58,
    section: 5
  },
  {
    word: "character",
    meaning: "性格, 個性",
    page: 58,
    section: 5
  },
  {
    word: "advantage",
    meaning: "利点",
    page: 58,
    section: 5
  },
  {
    word: "phrase",
    meaning: "句",
    page: 58,
    section: 5
  },
  {
    word: "damage",
    meaning: "損害, 損傷",
    page: 60,
    section: 5
  },
  {
    word: "impact",
    meaning: "影響",
    page: 60,
    section: 5
  },
  {
    word: "method",
    meaning: "方法",
    page: 60,
    section: 5
  },
  {
    word: "resource",
    meaning: "資源",
    page: 60,
    section: 5
  },
  {
    word: "region",
    meaning: "地域",
    page: 60,
    section: 5
  },
  {
    word: "medicine",
    meaning: "薬",
    page: 60,
    section: 5
  },
  {
    word: "detail",
    meaning: "詳細, 細部",
    page: 60,
    section: 5
  },
  {
    word: "feature",
    meaning: "特徴",
    page: 60,
    section: 5
  },
  {
    word: "function",
    meaning: "機能",
    page: 62,
    section: 5
  },
  {
    word: "access",
    meaning: "利用, 入手",
    page: 62,
    section: 5
  },
  {
    word: "item",
    meaning: "品目, 項目",
    page: 62,
    section: 5
  },
  {
    word: "income",
    meaning: "収入",
    page: 62,
    section: 5
  },
  {
    word: "attitude",
    meaning: "態度",
    page: 62,
    section: 5
  },
  {
    word: "site",
    meaning: "用地, 場所",
    page: 62,
    section: 5
  },
  {
    word: "aspect",
    meaning: "側面",
    page: 62,
    section: 5
  },
  {
    word: "structure",
    meaning: "構造",
    page: 62,
    section: 5
  },
  {
    word: "habit",
    meaning: "習慣, 癖",
    page: 62,
    section: 5
  },
  {
    word: "link",
    meaning: "関連, つながり",
    page: 64,
    section: 6
  },
  {
    word: "instance",
    meaning: "例, 実例",
    page: 64,
    section: 6
  },
  {
    word: "positive",
    meaning: "肯定的な",
    page: 64,
    section: 6
  },
  {
    word: "negative",
    meaning: "否定的な",
    page: 64,
    section: 6
  },
  {
    word: "complex",
    meaning: "複雑な",
    page: 64,
    section: 6
  },
  {
    word: "current",
    meaning: "現在の",
    page: 64,
    section: 6
  },
  {
    word: "mental",
    meaning: "精神の",
    page: 64,
    section: 6
  },
  {
    word: "specific",
    meaning: "特定の",
    page: 64,
    section: 6
  },
  {
    word: "significant",
    meaning: "重要な, 重大な",
    page: 66,
    section: 6
  },
  {
    word: "essential",
    meaning: "必要不可欠な",
    page: 66,
    section: 6
  },
  {
    word: "official",
    meaning: "公用の",
    page: 66,
    section: 6
  },
  {
    word: "financial",
    meaning: "財政(上)の",
    page: 66,
    section: 6
  },
  {
    word: "academic",
    meaning: "学問の",
    page: 66,
    section: 6
  },
  {
    word: "aware",
    meaning: "気づいて, 知って",
    page: 66,
    section: 6
  },
  {
    word: "worth",
    meaning: "に値する",
    page: 66,
    section: 6
  },
  {
    word: "potential",
    meaning: "潜在的な",
    page: 66,
    section: 6
  },
  {
    word: "active",
    meaning: "積極的な",
    page: 68,
    section: 6
  },
  {
    word: "digital",
    meaning: "デジタル方式の",
    page: 68,
    section: 6
  },
  {
    word: "mobile",
    meaning: "可動式の",
    page: 68,
    section: 6
  },
  {
    word: "novel",
    meaning: "斬新な, 目新しい",
    page: 68,
    section: 6
  },
  {
    word: "plastic",
    meaning: "柔軟な",
    page: 68,
    section: 6
  },
  {
    word: "chemical",
    meaning: "化学の, 化学的な",
    page: 68,
    section: 6
  },
  {
    word: "necessary",
    meaning: "必要な",
    page: 68,
    section: 6
  },
  {
    word: "eventually",
    meaning: "結局(は)",
    page: 68,
    section: 6
  },
  {
    word: "identify",
    meaning: "を特定する",
    page: 70,
    section: 7
  },
  {
    word: "represent",
    meaning: "を表す",
    page: 70,
    section: 7
  },
  {
    word: "indicate",
    meaning: "を指し示す",
    page: 70,
    section: 7
  },
  {
    word: "manage",
    meaning: "をなんとか成し遂げる",
    page: 70,
    section: 7
  },
  {
    word: "attend",
    meaning: "に出席する",
    page: 70,
    section: 7
  },
  {
    word: "maintain",
    meaning: "を維持する",
    page: 70,
    section: 7
  },
  {
    word: "survey",
    meaning: "を調査する",
    page: 70,
    section: 7
  },
  {
    word: "replace",
    meaning: "に取って代わる",
    page: 72,
    section: 7
  },
  {
    word: "sort",
    meaning: "を分類する",
    page: 72,
    section: 7
  },
  {
    word: "conduct",
    meaning: "を実施する",
    page: 72,
    section: 7
  },
  {
    word: "associate",
    meaning: "を結びつけて考える",
    page: 72,
    section: 7
  },
  {
    word: "attempt",
    meaning: "を試みる, 企てる",
    page: 72,
    section: 7
  },
  {
    word: "promote",
    meaning: "を促進する",
    page: 72,
    section: 7
  },
  {
    word: "earn",
    meaning: "を稼ぐ",
    page: 72,
    section: 7
  },
  {
    word: "unite",
    meaning: "を団結させる",
    page: 74,
    section: 7
  },
  {
    word: "feed",
    meaning: "に食べ物を与える",
    page: 74,
    section: 7
  },
  {
    word: "seek",
    meaning: "を追い求める",
    page: 74,
    section: 7
  },
  {
    word: "observe",
    meaning: "に気づく",
    page: 74,
    section: 7
  },
  {
    word: "reveal",
    meaning: "を明らかにする",
    page: 74,
    section: 7
  },
  {
    word: "estimate",
    meaning: "と推定する",
    page: 74,
    section: 7
  },
  {
    word: "reflect",
    meaning: "を反映する",
    page: 74,
    section: 7
  },
  {
    word: "attract",
    meaning: "を引き付ける",
    page: 74,
    section: 7
  },
  {
    word: "decrease",
    meaning: "減少する",
    page: 76,
    section: 7
  },
  {
    word: "ignore",
    meaning: "を無視する",
    page: 76,
    section: 7
  },
  {
    word: "match",
    meaning: "と合う",
    page: 76,
    section: 7
  },
  {
    word: "define",
    meaning: "を定義する",
    page: 76,
    section: 7
  },
  {
    word: "adapt",
    meaning: "適応する",
    page: 76,
    section: 7
  },
  {
    word: "contribute",
    meaning: "貢献する, 一因となる",
    page: 76,
    section: 7
  },
  {
    word: "exchange",
    meaning: "を交換する",
    page: 76,
    section: 7
  },
  {
    word: "display",
    meaning: "を示す",
    page: 76,
    section: 7
  },
  {
    word: "respond",
    meaning: "反応する",
    page: 78,
    section: 7
  },
  {
    word: "hide",
    meaning: "を隠す",
    page: 78,
    section: 7
  },
  {
    word: "doubt",
    meaning: "ではないと思う",
    page: 78,
    section: 7
  },
  {
    word: "remove",
    meaning: "を取り除く",
    page: 78,
    section: 7
  },
  {
    word: "wind",
    meaning: "を巻く",
    page: 78,
    section: 7
  },
  {
    word: "assume",
    meaning: "を当然のことと思う, と仮定する",
    page: 78,
    section: 7
  },
  {
    word: "relax",
    meaning: "くつろぐ",
    page: 78,
    section: 7
  },
  {
    word: "satisfy",
    meaning: "を満足させる",
    page: 80,
    section: 8
  },
  {
    word: "desire",
    meaning: "を強く望む",
    page: 80,
    section: 8
  },
  {
    word: "succeed",
    meaning: "成功する",
    page: 80,
    section: 8
  },
  {
    word: "concept",
    meaning: "概念",
    page: 80,
    section: 8
  },
  {
    word: "fashion",
    meaning: "流行",
    page: 80,
    section: 8
  },
  {
    word: "device",
    meaning: "装置, 機械",
    page: 80,
    section: 8
  },
  {
    word: "charge",
    meaning: "料金",
    page: 80,
    section: 8
  },
  {
    word: "contrast",
    meaning: "対象",
    page: 82,
    section: 8
  },
  {
    word: "colleague",
    meaning: "同僚",
    page: 82,
    section: 8
  },
  {
    word: "pain",
    meaning: "苦痛, 痛み",
    page: 82,
    section: 8
  },
  {
    word: "bill",
    meaning: "請求書",
    page: 82,
    section: 8
  },
  {
    word: "content",
    meaning: "内容, 中身",
    page: 82,
    section: 8
  },
  {
    word: "section",
    meaning: "部門",
    page: 82,
    section: 8
  },
  {
    word: "audience",
    meaning: "聴衆, 観客",
    page: 82,
    section: 8
  },
  {
    word: "surface",
    meaning: "表面",
    page: 82,
    section: 8
  },
  {
    word: "crop",
    meaning: "作物",
    page: 84,
    section: 8
  },
  {
    word: "topic",
    meaning: "話題",
    page: 84,
    section: 8
  },
  {
    word: "technique",
    meaning: "技術",
    page: 84,
    section: 8
  },
  {
    word: "status",
    meaning: "地位",
    page: 84,
    section: 8
  },
  {
    word: "option",
    meaning: "選択",
    page: 84,
    section: 8
  },
  {
    word: "reward",
    meaning: "報酬",
    page: 84,
    section: 8
  },
  {
    word: "race",
    meaning: "人種",
    page: 84,
    section: 8
  },
  {
    word: "crime",
    meaning: "罪, 犯罪",
    page: 84,
    section: 8
  },
  {
    word: "conflict",
    meaning: "争い",
    page: 86,
    section: 8
  },
  {
    word: "struggle",
    meaning: "闘い",
    page: 86,
    section: 8
  },
  {
    word: "context",
    meaning: "状況, 背景",
    page: 86,
    section: 8
  },
  {
    word: "debate",
    meaning: "討論, 論争",
    page: 86,
    section: 8
  },
  {
    word: "fuel",
    meaning: "燃料",
    page: 86,
    section: 8
  },
  {
    word: "pollution",
    meaning: "汚染, 公害",
    page: 86,
    section: 8
  },
  {
    word: "trend",
    meaning: "傾向",
    page: 86,
    section: 8
  },
  {
    word: "balance",
    meaning: "均衡",
    page: 86,
    section: 8
  },
  {
    word: "traffic",
    meaning: "交通",
    page: 88,
    section: 8
  },
  {
    word: "strategy",
    meaning: "戦略",
    page: 88,
    section: 8
  },
  {
    word: "basis",
    meaning: "基礎",
    page: 88,
    section: 8
  },
  {
    word: "consequence",
    meaning: "結果",
    page: 88,
    section: 8
  },
  {
    word: "aim",
    meaning: "目的, 目標",
    page: 88,
    section: 8
  },
  {
    word: "ancestor",
    meaning: "祖先",
    page: 88,
    section: 8
  },
  {
    word: "gene",
    meaning: "遺伝子",
    page: 88,
    section: 8
  },
  {
    word: "track",
    meaning: "跡",
    page: 88,
    section: 8
  },
  {
    word: "revolution",
    meaning: "革命",
    page: 90,
    section: 9
  },
  {
    word: "progress",
    meaning: "進歩",
    page: 90,
    section: 9
  },
  {
    word: "cognitive",
    meaning: "認知の",
    page: 90,
    section: 9
  },
  {
    word: "ideal",
    meaning: "理想的な",
    page: 90,
    section: 9
  },
  {
    word: "efficient",
    meaning: "効率的な",
    page: 90,
    section: 9
  },
  {
    word: "universal",
    meaning: "普遍的な",
    page: 90,
    section: 9
  },
  {
    word: "vast",
    meaning: "莫大な",
    page: 90,
    section: 9
  },
  {
    word: "extra",
    meaning: "追加の, 余分の",
    page: 90,
    section: 9
  },
  {
    word: "entire",
    meaning: "全体の, 全部の",
    page: 92,
    section: 9
  },
  {
    word: "familiar",
    meaning: "精通している",
    page: 92,
    section: 9
  },
  {
    word: "obvious",
    meaning: "明らかな",
    page: 92,
    section: 9
  },
  {
    word: "moral",
    meaning: "道徳の, 倫理的な",
    page: 92,
    section: 9
  },
  {
    word: "ordinary",
    meaning: "一般の, 普通の",
    page: 92,
    section: 9
  },
  {
    word: "equal",
    meaning: "等しい",
    page: 92,
    section: 9
  },
  {
    word: "previous",
    meaning: "以前の, 前の",
    page: 92,
    section: 9
  },
  {
    word: "false",
    meaning: "間違った",
    page: 92,
    section: 9
  },
  {
    word: "rare",
    meaning: "まれな, 珍しい",
    page: 94,
    section: 9
  },
  {
    word: "legal",
    meaning: "法律の",
    page: 94,
    section: 9
  },
  {
    word: "independent",
    meaning: "独立した",
    page: 94,
    section: 9
  },
  {
    word: "extreme",
    meaning: "極端な",
    page: 94,
    section: 9
  },
  {
    word: "actual",
    meaning: "実際の, 現実の",
    page: 94,
    section: 9
  },
  {
    word: "willing",
    meaning: "厭わない, 構わないと思う",
    page: 94,
    section: 9
  },
  {
    word: "urban",
    meaning: "都市の",
    page: 94,
    section: 9
  },
  {
    word: "whereas",
    meaning: "〜するのに(対し), 〜する一方",
    page: 94,
    section: 9
  },
  {
    word: "predict",
    meaning: "を予言する",
    page: 96,
    section: 10
  },
  {
    word: "examine",
    meaning: "を調べる",
    page: 96,
    section: 10
  },
  {
    word: "trust",
    meaning: "を信頼する",
    page: 96,
    section: 10
  },
  {
    word: "stick",
    meaning: "を動けなくする",
    page: 96,
    section: 10
  },
  {
    word: "emerge",
    meaning: "現れる",
    page: 96,
    section: 10
  },
  {
    word: "vary",
    meaning: "さまざまである",
    page: 96,
    section: 10
  },
  {
    word: "release",
    meaning: "を放出する",
    page: 96,
    section: 10
  },
  {
    word: "divide",
    meaning: "を分ける",
    page: 98,
    section: 10
  },
  {
    word: "enable",
    meaning: "(人)が...できるようにする",
    page: 98,
    section: 10
  },
  {
    word: "judge",
    meaning: "を判断する",
    page: 98,
    section: 10
  },
  {
    word: "rely",
    meaning: "断る",
    page: 98,
    section: 10
  },
  {
    word: "engage",
    meaning: "を従事させる",
    page: 98,
    section: 10
  },
  {
    word: "shift",
    meaning: "を変える, 移す",
    page: 98,
    section: 10
  },
  {
    word: "adopt",
    meaning: "を採用する",
    page: 98,
    section: 10
  },
  {
    word: "acquire",
    meaning: "を得る",
    page: 98,
    section: 10
  },
  {
    word: "expand",
    meaning: "を拡大する",
    page: 100,
    section: 10
  },
  {
    word: "refuse",
    meaning: "を拒む",
    page: 100,
    section: 10
  },
  {
    word: "strike",
    meaning: "の心を打つ",
    page: 100,
    section: 10
  },
  {
    word: "repeat",
    meaning: "を繰り返す",
    page: 100,
    section: 10
  },
  {
    word: "consume",
    meaning: "を消費する",
    page: 100,
    section: 10
  },
  {
    word: "confuse",
    meaning: "を混合する",
    page: 100,
    section: 10
  },
  {
    word: "select",
    meaning: "を選ぶ, えり抜く",
    page: 100,
    section: 10
  },
  {
    word: "evolve",
    meaning: "(徐々に)発展する",
    page: 102,
    section: 10
  },
  {
    word: "convince",
    meaning: "を納得させる",
    page: 102,
    section: 10
  },
  {
    word: "recall",
    meaning: "を思い出す",
    page: 102,
    section: 10
  },
  {
    word: "destroy",
    meaning: "を破壊する",
    page: 102,
    section: 10
  },
  {
    word: "preserve",
    meaning: "を保存する",
    page: 102,
    section: 10
  },
  {
    word: "organize",
    meaning: "を準備する",
    page: 102,
    section: 10
  },
  {
    word: "warn",
    meaning: "(人に)警告する",
    page: 102,
    section: 10
  },
  {
    word: "address",
    meaning: "(問題など)に対処する",
    page: 102,
    section: 10
  },
  {
    word: "operate",
    meaning: "を操作する",
    page: 104,
    section: 10
  },
  {
    word: "participate",
    meaning: "参加する",
    page: 104,
    section: 10
  },
  {
    word: "surround",
    meaning: "を取り巻く",
    page: 104,
    section: 10
  },
  {
    word: "flow",
    meaning: "流れる",
    page: 104,
    section: 10
  },
  {
    word: "bore",
    meaning: "(人)を退屈させる, うんざりさせる",
    page: 104,
    section: 10
  },
  {
    word: "complain",
    meaning: "不平を言う",
    page: 104,
    section: 10
  },
  {
    word: "host",
    meaning: "を主催する",
    page: 104,
    section: 10
  },
  {
    word: "combine",
    meaning: "を結びつける",
    page: 104,
    section: 10
  },
  {
    word: "extend",
    meaning: "を伸ばす",
    page: 106,
    section: 11
  },
  {
    word: "appreciate",
    meaning: "を正答に評価する",
    page: 106,
    section: 11
  },
  {
    word: "target",
    meaning: "目標",
    page: 106,
    section: 11
  },
  {
    word: "element",
    meaning: "要素, 成分",
    page: 106,
    section: 11
  },
  {
    word: "principle",
    meaning: "原則, 原理",
    page: 106,
    section: 11
  },
  {
    word: "phenomenon",
    meaning: "現象",
    page: 106,
    section: 11
  },
  {
    word: "atmosphere",
    meaning: "大気",
    page: 106,
    section: 11
  },
  {
    word: "origin",
    meaning: "起源",
    page: 106,
    section: 11
  },
  {
    word: "personality",
    meaning: "個性, 性格",
    page: 108,
    section: 11
  },
  {
    word: "capacity",
    meaning: "(最大)容量, 収容能力",
    page: 108,
    section: 11
  },
  {
    word: "profit",
    meaning: "利益",
    page: 108,
    section: 11
  },
  {
    word: "circumstance",
    meaning: "状況, 事情",
    page: 108,
    section: 11
  },
  {
    word: "manner",
    meaning: "作法",
    page: 108,
    section: 11
  },
  {
    word: "threat",
    meaning: "脅威",
    page: 108,
    section: 11
  },
  {
    word: "resident",
    meaning: "居住者",
    page: 108,
    section: 11
  },
  {
    word: "wealth",
    meaning: "富",
    page: 108,
    section: 11
  },
  {
    word: "institution",
    meaning: "機関",
    page: 110,
    section: 11
  },
  {
    word: "authority",
    meaning: "(関係)当局",
    page: 110,
    section: 11
  },
  {
    word: "vote",
    meaning: "投票",
    page: 110,
    section: 11
  },
  {
    word: "sight",
    meaning: "光景",
    page: 110,
    section: 11
  },
  {
    word: "campaign",
    meaning: "運動",
    page: 110,
    section: 11
  },
  {
    word: "fund",
    meaning: "基金, 資金",
    page: 110,
    section: 11
  },
  {
    word: "web",
    meaning: "ウェブ",
    page: 110,
    section: 11
  },
  {
    word: "symbol",
    meaning: "象徴, シンボル",
    page: 112,
    section: 11
  },
  {
    word: "analysis",
    meaning: "分析(結果)",
    page: 112,
    section: 11
  },
  {
    word: "version",
    meaning: "(本・製品などの)版",
    page: 112,
    section: 11
  },
  {
    word: "perspective",
    meaning: "観点, 見方",
    page: 112,
    section: 11
  },
  {
    word: "crisis",
    meaning: "危機",
    page: 112,
    section: 11
  },
  {
    word: "disaster",
    meaning: "災害",
    page: 112,
    section: 11
  },
  {
    word: "lecture",
    meaning: "講義, 講演",
    page: 112,
    section: 11
  },
  {
    word: "psychology",
    meaning: "心理学",
    page: 112,
    section: 11
  },
  {
    word: "gender",
    meaning: "(社会的・文化的)性, 性別",
    page: 114,
    section: 11
  },
  {
    word: "custom",
    meaning: "(社会的な)習慣",
    page: 114,
    section: 11
  },
  {
    word: "court",
    meaning: "裁判所, 法廷",
    page: 114,
    section: 11
  },
  {
    word: "desert",
    meaning: "砂漠",
    page: 114,
    section: 11
  },
  {
    word: "soil",
    meaning: "土地, 土壌",
    page: 114,
    section: 11
  },
  {
    word: "agriculture",
    meaning: "農業",
    page: 114,
    section: 11
  },
  {
    word: "fossil",
    meaning: "化石",
    page: 114,
    section: 11
  },
  {
    word: "document",
    meaning: "(公)文書, 書類",
    page: 114,
    section: 11
  },
  {
    word: "vocabulary",
    meaning: "語彙",
    page: 116,
    section: 12
  },
  {
    word: "intelligent",
    meaning: "聡明な",
    page: 116,
    section: 12
  },
  {
    word: "conscious",
    meaning: "意識して, 気づいて",
    page: 116,
    section: 12
  },
  {
    word: "capable",
    meaning: "能力がある",
    page: 116,
    section: 12
  },
  {
    word: "accurate",
    meaning: "正確な",
    page: 116,
    section: 12
  },
  {
    word: "fundamental",
    meaning: "基本的な",
    page: 116,
    section: 12
  },
  {
    word: "artificial",
    meaning: "人工の",
    page: 116,
    section: 12
  },
  {
    word: "firm",
    meaning: "確固たる",
    page: 118,
    section: 12
  },
  {
    word: "overall",
    meaning: "総合的な",
    page: 118,
    section: 12
  },
  {
    word: "rural",
    meaning: "田舎の, 田園の",
    page: 118,
    section: 12
  },
  {
    word: "military",
    meaning: "軍の, 軍事(用)の",
    page: 118,
    section: 12
  },
  {
    word: "nuclear",
    meaning: "核の, 原子力の",
    page: 118,
    section: 12
  },
  {
    word: "biological",
    meaning: "生物学(上)の",
    page: 118,
    section: 12
  },
  {
    word: "constant",
    meaning: "絶え間ない",
    page: 118,
    section: 12
  },
  {
    word: "severe",
    meaning: "(人・規律・自体・天気などが)厳しい",
    page: 118,
    section: 12
  },
  {
    word: "visual",
    meaning: "視覚の",
    page: 120,
    section: 12
  },
  {
    word: "enormous",
    meaning: "莫大な, 巨大な",
    page: 120,
    section: 12
  },
  {
    word: "convenient",
    meaning: "便利な, 都合のいい",
    page: 120,
    section: 12
  },
  {
    word: "domestic",
    meaning: "家庭の",
    page: 120,
    section: 12
  },
  {
    word: "mass",
    meaning: "大規模な, 大量の",
    page: 120,
    section: 12
  },
  {
    word: "typical",
    meaning: "典型的な",
    page: 120,
    section: 12
  },
  {
    word: "overseas",
    meaning: "海外へ[に, で]",
    page: 120,
    section: 12
  },
  {
    word: "nevertheless",
    meaning: "それにもかかわらず",
    page: 120,
    section: 12
  },
  {
    word: "demonstrate",
    meaning: "を論証(証明)する",
    page: 122,
    section: 13
  },
  {
    word: "behave",
    meaning: "振る舞う",
    page: 122,
    section: 13
  },
  {
    word: "educate",
    meaning: "を教育する",
    page: 122,
    section: 13
  },
  {
    word: "purchase",
    meaning: "を購入する",
    page: 122,
    section: 13
  },
  {
    word: "recommend",
    meaning: "を勧める",
    page: 122,
    section: 13
  },
  {
    word: "admit",
    meaning: "(を)(しぶしぶ)認める",
    page: 122,
    section: 13
  },
  {
    word: "generate",
    meaning: "を生み出す",
    page: 122,
    section: 13
  },
  {
    word: "explore",
    meaning: "(を)調査[探求]する",
    page: 124,
    section: 13
  },
  {
    word: "amaze",
    meaning: "をびっくりさせる",
    page: 124,
    section: 13
  },
  {
    word: "tear",
    meaning: "を引き裂く",
    page: 124,
    section: 13
  },
  {
    word: "settle",
    meaning: "を解決する",
    page: 124,
    section: 13
  },
  {
    word: "afford",
    meaning: "を持つ[する]余裕がある",
    page: 124,
    section: 13
  },
  {
    word: "conclude",
    meaning: "と結論づける",
    page: 124,
    section: 13
  },
  {
    word: "advertise",
    meaning: "を宣伝する",
    page: 124,
    section: 13
  },
  {
    word: "encounter",
    meaning: "に遭遇する",
    page: 124,
    section: 13
  },
  {
    word: "remind",
    meaning: "に思い出させる",
    page: 126,
    section: 13
  },
  {
    word: "locate",
    meaning: "位置する",
    page: 126,
    section: 13
  },
  {
    word: "aid",
    meaning: "を援助する, 助ける",
    page: 126,
    section: 13
  },
  {
    word: "bite",
    meaning: "(を)かむ, (に)かみつく",
    page: 126,
    section: 13
  },
  {
    word: "deliver",
    meaning: "を配達する",
    page: 126,
    section: 13
  },
  {
    word: "perceive",
    meaning: "に気づく",
    page: 126,
    section: 13
  },
  {
    word: "distinguish",
    meaning: "を区別する",
    page: 126,
    section: 13
  },
  {
    word: "imply",
    meaning: "を暗に意味する",
    page: 126,
    section: 13
  },
  {
    word: "handle",
    meaning: "を処理する, 扱う",
    page: 128,
    section: 13
  },
  {
    word: "praise",
    meaning: "を賞賛する",
    page: 128,
    section: 13
  },
  {
    word: "appreal",
    meaning: "訴える",
    page: 128,
    section: 13
  },
  {
    word: "insist",
    meaning: "(を)強く主張する",
    page: 128,
    section: 13
  },
  {
    word: "compete",
    meaning: "競う",
    page: 128,
    section: 13
  },
  {
    word: "rank",
    meaning: "を位置づける, 評価する",
    page: 128,
    section: 13
  },
  {
    word: "deny",
    meaning: "を否定する",
    page: 128,
    section: 13
  },
  {
    word: "reject",
    meaning: "を拒否する",
    page: 130,
    section: 13
  },
  {
    word: "intend",
    meaning: "を意図する",
    page: 130,
    section: 13
  },
  {
    word: "expose",
    meaning: "をさらす",
    page: 130,
    section: 13
  },
  {
    word: "favor",
    meaning: "に賛成する",
    page: 130,
    section: 13
  },
  {
    word: "inspire",
    meaning: "(人)を奮起させる",
    page: 130,
    section: 13
  },
  {
    word: "propose",
    meaning: "を提案する",
    page: 130,
    section: 13
  },
  {
    word: "spell",
    meaning: "(語)をつづる",
    page: 130,
    section: 13
  },
  {
    word: "breathe",
    meaning: "呼吸する",
    page: 132,
    section: 14
  },
  {
    word: "repair",
    meaning: "を修理する",
    page: 132,
    section: 14
  },
  {
    word: "consist",
    meaning: "成る",
    page: 132,
    section: 14
  },
  {
    word: "comment",
    meaning: "意見",
    page: 132,
    section: 14
  },
  {
    word: "instruction",
    meaning: "指示",
    page: 132,
    section: 14
  },
  {
    word: "religion",
    meaning: "宗教",
    page: 132,
    section: 14
  },
  {
    word: "neighborhood",
    meaning: "地域",
    page: 132,
    section: 14
  },
  {
    word: "laboratory",
    meaning: "実験室, 研究室",
    page: 132,
    section: 14
  },
  {
    word: "presence",
    meaning: "存在",
    page: 134,
    section: 14
  },
  {
    word: "confidence",
    meaning: "自信",
    page: 134,
    section: 14
  },
  {
    word: "harm",
    meaning: "害, 損害",
    page: 134,
    section: 14
  },
  {
    word: "instrument",
    meaning: "器具",
    page: 134,
    section: 14
  },
  {
    word: "category",
    meaning: "部類, 区分",
    page: 134,
    section: 14
  },
  {
    word: "capital",
    meaning: "資本",
    page: 134,
    section: 14
  },
  {
    word: "outcome",
    meaning: "結果",
    page: 134,
    section: 14
  },
  {
    word: "notion",
    meaning: "概念, 観念",
    page: 136,
    section: 14
  },
  {
    word: "review",
    meaning: "(書物などの)論評",
    page: 136,
    section: 14
  },
  {
    word: "trait",
    meaning: "特性",
    page: 136,
    section: 14
  },
  {
    word: "diversity",
    meaning: "多様性",
    page: 136,
    section: 14
  },
  {
    word: "victim",
    meaning: "犠牲(者), 被害者",
    page: 136,
    section: 14
  },
  {
    word: "occasion",
    meaning: "場合, 時",
    page: 136,
    section: 14
  },
  {
    word: "facility",
    meaning: "施設, 設備",
    page: 136,
    section: 14
  },
  {
    word: "stock",
    meaning: "在庫品",
    page: 136,
    section: 14
  },
  {
    word: "conference",
    meaning: "会議",
    page: 138,
    section: 14
  },
  {
    word: "humanity",
    meaning: "人類",
    page: 138,
    section: 14
  },
  {
    word: "dialect",
    meaning: "方言",
    page: 138,
    section: 14
  },
  {
    word: "proportion",
    meaning: "割合",
    page: 138,
    section: 14
  },
  {
    word: "tip",
    meaning: "助言, 秘訣",
    page: 138,
    section: 14
  },
  {
    word: "lawyer",
    meaning: "弁護士",
    page: 138,
    section: 14
  },
  {
    word: "stuff",
    meaning: "(漠然と)物",
    page: 138,
    section: 14
  },
  {
    word: "comfort",
    meaning: "快適さ",
    page: 138,
    section: 14
  },
  {
    word: "philosophy",
    meaning: "哲学",
    page: 140,
    section: 14
  },
  {
    word: "mammal",
    meaning: "哺乳動物",
    page: 140,
    section: 14
  },
  {
    word: "quantity",
    meaning: "量",
    page: 140,
    section: 14
  },
  {
    word: "landscape",
    meaning: "風景",
    page: 140,
    section: 14
  },
  {
    word: "tribe",
    meaning: "部族",
    page: 140,
    section: 14
  },
  {
    word: "organ",
    meaning: "器官, 臓器",
    page: 140,
    section: 14
  },
  {
    word: "trial",
    meaning: "試み, (品質・性能などの)試験",
    page: 140,
    section: 14
  },
  {
    word: "norm",
    meaning: "規範",
    page: 140,
    section: 14
  },
  {
    word: "code",
    meaning: "規範",
    page: 142,
    section: 15
  },
  {
    word: "substance",
    meaning: "物質",
    page: 142,
    section: 15
  },
  {
    word: "multiple",
    meaning: "多様な",
    page: 142,
    section: 15
  },
  {
    word: "numerous",
    meaning: "非常に数の多い",
    page: 142,
    section: 15
  },
  {
    word: "narrow",
    meaning: "狭い",
    page: 142,
    section: 15
  },
  {
    word: "widespread",
    meaning: "広範囲に渡る",
    page: 142,
    section: 15
  },
  {
    word: "sufficient",
    meaning: "十分な",
    page: 142,
    section: 15
  },
  {
    word: "proper",
    meaning: "適切な",
    page: 142,
    section: 15
  },
  {
    word: "linguistic",
    meaning: "言語の, 言語学の",
    page: 144,
    section: 15
  },
  {
    word: "annual",
    meaning: "年1回の, 例年の",
    page: 144,
    section: 15
  },
  {
    word: "contemporary",
    meaning: "現代の",
    page: 144,
    section: 15
  },
  {
    word: "contrary",
    meaning: "反対の",
    page: 144,
    section: 15
  },
  {
    word: "strict",
    meaning: "(規則などが)厳しい",
    page: 144,
    section: 15
  },
  {
    word: "civil",
    meaning: "市民の",
    page: 144,
    section: 15
  },
  {
    word: "odd",
    meaning: "奇妙な",
    page: 144,
    section: 15
  },
  {
    word: "unknown",
    meaning: "不明の",
    page: 144,
    section: 15
  },
  {
    word: "superior",
    meaning: "よりすぐれた",
    page: 146,
    section: 15
  },
  {
    word: "sensitive",
    meaning: "敏感な",
    page: 146,
    section: 15
  },
  {
    word: "violent",
    meaning: "(人・気質などが)激しい",
    page: 146,
    section: 15
  },
  {
    word: "virtual",
    meaning: "仮想の",
    page: 146,
    section: 15
  },
  {
    word: "regardless",
    meaning: "かまわない, 無頓着な",
    page: 146,
    section: 15
  },
  {
    word: "immediate",
    meaning: "即座の",
    page: 146,
    section: 15
  },
  {
    word: "crucial",
    meaning: "重要な",
    page: 146,
    section: 15
  },
  {
    word: "somewhat",
    meaning: "いくぶん, 多少",
    page: 146,
    section: 15
  },
  {
    word: "interpret",
    meaning: "を解釈する",
    page: 148,
    section: 16
  },
  {
    word: "translate",
    meaning: "を翻訳する",
    page: 148,
    section: 16
  },
  {
    word: "concentrate",
    meaning: "を集中する",
    page: 148,
    section: 16
  },
  {
    word: "request",
    meaning: "に頼む",
    page: 148,
    section: 16
  },
  {
    word: "criticize",
    meaning: "を批判する",
    page: 148,
    section: 16
  },
  {
    word: "overcome",
    meaning: "を克服する",
    page: 148,
    section: 16
  },
  {
    word: "obtain",
    meaning: "を得る",
    page: 148,
    section: 16
  },
  {
    word: "inform",
    meaning: "に知らせる",
    page: 150,
    section: 16
  },
  {
    word: "ensure",
    meaning: "を確実にする",
    page: 150,
    section: 16
  },
  {
    word: "announce",
    meaning: "を発表する, 知らせる",
    page: 150,
    section: 16
  },
  {
    word: "grant",
    meaning: "(人)に(許可・権利など)を与える",
    page: 150,
    section: 16
  },
  {
    word: "freeze",
    meaning: "凍る",
    page: 150,
    section: 16
  },
  {
    word: "oppose",
    meaning: "に反対する",
    page: 150,
    section: 16
  },
  {
    word: "differ",
    meaning: "異なる",
    page: 150,
    section: 16
  },
  {
    word: "hate",
    meaning: "をひどく嫌う",
    page: 152,
    section: 16
  },
  {
    word: "emphasize",
    meaning: "を強調する",
    page: 152,
    section: 16
  },
  {
    word: "employ",
    meaning: "を雇う",
    page: 152,
    section: 16
  },
  {
    word: "credit",
    meaning: "(功績など)を帰する",
    page: 152,
    section: 16
  },
  {
    word: "transform",
    meaning: "を変える",
    page: 152,
    section: 16
  },
  {
    word: "construct",
    meaning: "を建設する",
    page: 152,
    section: 16
  },
  {
    word: "arise",
    meaning: "生じる",
    page: 152,
    section: 16
  },
  {
    word: "beat",
    meaning: "を打ち負かす",
    page: 154,
    section: 16
  },
  {
    word: "regret",
    meaning: "を後悔する",
    page: 154,
    section: 16
  },
  {
    word: "alter",
    meaning: "を変える",
    page: 154,
    section: 16
  },
  {
    word: "absorb",
    meaning: "を吸収する",
    page: 154,
    section: 16
  },
  {
    word: "disappoint",
    meaning: "を失望させる",
    page: 154,
    section: 16
  },
  {
    word: "cure",
    meaning: "を治す",
    page: 154,
    section: 16
  },
  {
    word: "transport",
    meaning: "を輸送する",
    page: 154,
    section: 16
  },
  {
    word: "rush",
    meaning: "急いでいく",
    page: 154,
    section: 16
  },
  {
    word: "hang",
    meaning: "を掛ける",
    page: 156,
    section: 16
  },
  {
    word: "blame",
    meaning: "を責める",
    page: 156,
    section: 16
  },
  {
    word: "ban",
    meaning: "を(法的に)禁止する",
    page: 156,
    section: 16
  },
  {
    word: "fascinate",
    meaning: "を魅了する",
    page: 156,
    section: 16
  },
  {
    word: "recover",
    meaning: "回復する",
    page: 156,
    section: 16
  },
  {
    word: "celebrate",
    meaning: "を祝う",
    page: 156,
    section: 16
  },
  {
    word: "manufacture",
    meaning: "を製造する",
    page: 156,
    section: 16
  },
  {
    word: "interact",
    meaning: "影響し合う",
    page: 156,
    section: 16
  },
  {
    word: "arrange",
    meaning: "の段取りを付ける",
    page: 158,
    section: 17
  },
  {
    word: "adjust",
    meaning: "を調整する",
    page: 158,
    section: 17
  },
  {
    word: "confirm",
    meaning: "を確認する",
    page: 158,
    section: 17
  },
  {
    word: "insight",
    meaning: "見識, 理解(力)",
    page: 158,
    section: 17
  },
  {
    word: "innovation",
    meaning: "革新",
    page: 158,
    section: 17
  },
  {
    word: "budget",
    meaning: "予算",
    page: 158,
    section: 17
  },
  {
    word: "fee",
    meaning: "料金",
    page: 158,
    section: 17
  },
  {
    word: "expense",
    meaning: "経費",
    page: 158,
    section: 17
  },
  {
    word: "dept",
    meaning: "借金, 負債",
    page: 160,
    section: 17
  },
  {
    word: "loan",
    meaning: "貸付金, 融資",
    page: 160,
    section: 17
  },
  {
    word: "duty",
    meaning: "義務",
    page: 160,
    section: 17
  },
  {
    word: "alarm",
    meaning: "不安, おそれ",
    page: 160,
    section: 17
  },
  {
    word: "emergency",
    meaning: "緊急(事態)",
    page: 160,
    section: 17
  },
  {
    word: "democracy",
    meaning: "民主主義, 民主政治",
    page: 160,
    section: 17
  },
  {
    word: "minister",
    meaning: "大臣",
    page: 160,
    section: 17
  },
  {
    word: "fellow",
    meaning: "仲間, 同僚",
    page: 160,
    section: 17
  },
  {
    word: "candidate",
    meaning: "候補(者)",
    page: 162,
    section: 17
  },
  {
    word: "corporation",
    meaning: "(大)企業",
    page: 162,
    section: 17
  },
  {
    word: "stereotype",
    meaning: "固定概念",
    page: 162,
    section: 17
  },
  {
    word: "route",
    meaning: "道(筋)",
    page: 162,
    section: 17
  },
  {
    word: "disorder",
    meaning: "障害, (心身の)不調",
    page: 162,
    section: 17
  },
  {
    word: "depression",
    meaning: "憂鬱",
    page: 162,
    section: 17
  },
  {
    word: "weapon",
    meaning: "兵器, 武器",
    page: 162,
    section: 17
  },
  {
    word: "immigration",
    meaning: "(他国からの)移民, 移住",
    page: 162,
    section: 17
  },
  {
    word: "barrier",
    meaning: "障壁",
    page: 164,
    section: 17
  },
  {
    word: "disadvantage",
    meaning: "不利",
    page: 164,
    section: 17
  },
  {
    word: "mood",
    meaning: "気分",
    page: 164,
    section: 17
  },
  {
    word: "motion",
    meaning: "動き, 動作",
    page: 164,
    section: 17
  },
  {
    word: "routine",
    meaning: "決まり切った仕事",
    page: 164,
    section: 17
  },
  {
    word: "discipline",
    meaning: "規律, しつけ",
    page: 164,
    section: 17
  },
  {
    word: "myth",
    meaning: "作り話",
    page: 164,
    section: 17
  },
  {
    word: "hypothesis",
    meaning: "仮説",
    page: 164,
    section: 17
  },
  {
    word: "physician",
    meaning: "(特に米)医師",
    page: 164,
    section: 17
  },
  {
    word: "client",
    meaning: "顧客",
    page: 166,
    section: 17
  },
  {
    word: "colony",
    meaning: "植民地",
    page: 166,
    section: 17
  },
  {
    word: "statistics",
    meaning: "統計",
    page: 166,
    section: 17
  },
  {
    word: "grain",
    meaning: "穀物",
    page: 166,
    section: 17
  },
  {
    word: "ingredient",
    meaning: "材料, 成分",
    page: 166,
    section: 17
  },
  {
    word: "treasure",
    meaning: "宝物, 財宝",
    page: 166,
    section: 17
  },
  {
    word: "contract",
    meaning: "契約(書)",
    page: 166,
    section: 17
  },
  {
    word: "welfare",
    meaning: "福祉, 幸福",
    page: 166,
    section: 17
  },
  {
    word: "prime",
    meaning: "主要な, もっとも重要な",
    page: 166,
    section: 17
  },
  {
    word: "curious",
    meaning: "好奇心の強い",
    page: 168,
    section: 18
  },
  {
    word: "dramatic",
    meaning: "劇的な",
    page: 168,
    section: 18
  },
  {
    word: "distinct",
    meaning: "明らかに異なる",
    page: 168,
    section: 18
  },
  {
    word: "anxious",
    meaning: "心配して",
    page: 168,
    section: 18
  },
  {
    word: "vital",
    meaning: "必要不可欠な",
    page: 168,
    section: 18
  },
  {
    word: "conventional",
    meaning: "従来の",
    page: 168,
    section: 18
  },
  {
    word: "abstract",
    meaning: "抽象的な",
    page: 168,
    section: 18
  },
  {
    word: "minor",
    meaning: "重要でない",
    page: 170,
    section: 18
  },
  {
    word: "extraordinary",
    meaning: "並外れた",
    page: 170,
    section: 18
  },
  {
    word: "stable",
    meaning: "安定した",
    page: 170,
    section: 18
  },
  {
    word: "flexible",
    meaning: "融通の効く, 柔軟な",
    page: 170,
    section: 18
  },
  {
    word: "brief",
    meaning: "簡潔な",
    page: 170,
    section: 18
  },
  {
    word: "aggressive",
    meaning: "攻撃的な",
    page: 170,
    section: 18
  },
  {
    word: "visible",
    meaning: "(目に)見える",
    page: 170,
    section: 18
  },
  {
    word: "unexpected",
    meaning: "思いがけない, 不意の",
    page: 170,
    section: 18
  },
  {
    word: "ethnic",
    meaning: "民族の, 人種の",
    page: 172,
    section: 18
  },
  {
    word: "alien",
    meaning: "異質の",
    page: 172,
    section: 18
  },
  {
    word: "initial",
    meaning: "始める",
    page: 172,
    section: 18
  },
  {
    word: "exact",
    meaning: "正確な",
    page: 172,
    section: 18
  },
  {
    word: "precise",
    meaning: "正確な",
    page: 172,
    section: 18
  },
  {
    word: "latter",
    meaning: "後者の, 後半の",
    page: 172,
    section: 18
  },
  {
    word: "commit",
    meaning: "献身する",
    page: 174,
    section: 19
  },
  {
    word: "stimulate",
    meaning: "を刺激する",
    page: 174,
    section: 19
  },
  {
    word: "enhance",
    meaning: "(価値など)を高める, 増す",
    page: 174,
    section: 19
  },
  {
    word: "pursue",
    meaning: "を追求する",
    page: 174,
    section: 19
  },
  {
    word: "react",
    meaning: "反応する",
    page: 174,
    section: 19
  },
  {
    word: "disagree",
    meaning: "不賛成である",
    page: 174,
    section: 19
  },
  {
    word: "stare",
    meaning: "じっと見る",
    page: 176,
    section: 19
  },
  {
    word: "abandon",
    meaning: "を捨てる",
    page: 176,
    section: 19
  },
  {
    word: "quit",
    meaning: "をやめる",
    page: 176,
    section: 19
  },
  {
    word: "capture",
    meaning: "をとらえる",
    page: 176,
    section: 19
  },
  {
    word: "transfer",
    meaning: "を移す",
    page: 176,
    section: 19
  },
  {
    word: "bother",
    meaning: "を悩ます",
    page: 176,
    section: 19
  },
  {
    word: "persuade",
    meaning: "を説得する",
    page: 176,
    section: 19
  },
  {
    word: "rent",
    meaning: "を賃借りする",
    page: 176,
    section: 19
  },
  {
    word: "breed",
    meaning: "を繁殖させる, 育てる",
    page: 178,
    section: 19
  },
  {
    word: "invest",
    meaning: "を投資する",
    page: 178,
    section: 19
  },
  {
    word: "reserve",
    meaning: "を予約する",
    page: 178,
    section: 19
  },
  {
    word: "trace",
    meaning: "(足跡・起源など)をたどる",
    page: 178,
    section: 19
  },
  {
    word: "illustrate",
    meaning: "を説明する",
    page: 178,
    section: 19
  },
  {
    word: "advise",
    meaning: "に忠告(助言)する",
    page: 178,
    section: 19
  },
  {
    word: "convey",
    meaning: "を伝える",
    page: 178,
    section: 19
  },
  {
    word: "attach",
    meaning: "を(取り)つける",
    page: 180,
    section: 19
  },
  {
    word: "stretch",
    meaning: "を伸ばす",
    page: 180,
    section: 19
  },
  {
    word: "puzzle",
    meaning: "を当惑させる",
    page: 180,
    section: 19
  },
  {
    word: "disturb",
    meaning: "をかき乱す",
    page: 180,
    section: 19
  },
  {
    word: "crash",
    meaning: "衝突する, 墜落する",
    page: 180,
    section: 19
  },
  {
    word: "cope",
    meaning: "うまく処理する",
    page: 180,
    section: 19
  },
  {
    word: "permit",
    meaning: "を許可する",
    page: 180,
    section: 19
  },
  {
    word: "impress",
    meaning: "を感動させる",
    page: 180,
    section: 19
  },
  {
    word: "suspect",
    meaning: "ではないかと思う",
    page: 182,
    section: 19
  },
  {
    word: "upset",
    meaning: "を動揺させる",
    page: 182,
    section: 19
  },
  {
    word: "frighten",
    meaning: "(人)を怖がらせる",
    page: 182,
    section: 19
  },
  {
    word: "import",
    meaning: "を輸入する",
    page: 182,
    section: 19
  },
  {
    word: "export",
    meaning: "を輸出する",
    page: 182,
    section: 19
  },
  {
    word: "investigate",
    meaning: "を調査する",
    page: 182,
    section: 19
  },
  {
    word: "monitor",
    meaning: "を監視する",
    page: 182,
    section: 19
  },
  {
    word: "calculate",
    meaning: "を計算する",
    page: 184,
    section: 20
  },
  {
    word: "eliminate",
    meaning: "を取り除く",
    page: 184,
    section: 20
  },
  {
    word: "ease",
    meaning: "を軽減する",
    page: 184,
    section: 20
  },
  {
    word: "launch",
    meaning: "を開始する",
    page: 184,
    section: 20
  },
  {
    word: "sequence",
    meaning: "連続",
    page: 184,
    section: 20
  },
  {
    word: "therapy",
    meaning: "療法",
    page: 184,
    section: 20
  },
  {
    word: "symptom",
    meaning: "症状",
    page: 184,
    section: 20
  },
  {
    word: "incident",
    meaning: "出来事, 事件",
    page: 184,
    section: 20
  },
  {
    word: "witness",
    meaning: "目撃者",
    page: 186,
    section: 20
  },
  {
    word: "sum",
    meaning: "(金)額",
    page: 186,
    section: 20
  },
  {
    word: "burden",
    meaning: "負担",
    page: 186,
    section: 20
  },
  {
    word: "tone",
    meaning: "口調",
    page: 186,
    section: 20
  },
  {
    word: "honor",
    meaning: "光栄",
    page: 186,
    section: 20
  },
  {
    word: "award",
    meaning: "賞",
    page: 186,
    section: 20
  },
  {
    word: "priority",
    meaning: "優先(事項)",
    page: 186,
    section: 20
  },
  {
    word: "logic",
    meaning: "論理",
    page: 188,
    section: 20
  },
  {
    word: "minimum",
    meaning: "最小限度",
    page: 188,
    section: 20
  },
  {
    word: "exception",
    meaning: "例外",
    page: 188,
    section: 20
  },
  {
    word: "clue",
    meaning: "手がかり",
    page: 188,
    section: 20
  },
  {
    word: "bond",
    meaning: "絆",
    page: 188,
    section: 20
  },
  {
    word: "virus",
    meaning: "ウイルス",
    page: 188,
    section: 20
  },
  {
    word: "surgery",
    meaning: "(外科)手術",
    page: 188,
    section: 20
  },
  {
    word: "insurance",
    meaning: "保険",
    page: 188,
    section: 20
  },
  {
    word: "frame",
    meaning: "枠, (額)縁",
    page: 190,
    section: 20
  },
  {
    word: "shelter",
    meaning: "避難(所), 保護",
    page: 190,
    section: 20
  },
  {
    word: "territory",
    meaning: "領土",
    page: 190,
    section: 20
  },
  {
    word: "boundary",
    meaning: "境界(線)",
    page: 190,
    section: 20
  },
  {
    word: "habitat",
    meaning: "生息地",
    page: 190,
    section: 20
  },
  {
    word: "district",
    meaning: "地区",
    page: 190,
    section: 20
  },
  {
    word: "conservation",
    meaning: "(動植物などの)保護",
    page: 190,
    section: 20
  },
  {
    word: "harvest",
    meaning: "収穫(物)",
    page: 190,
    section: 20
  },
  {
    word: "predator",
    meaning: "捕食動物",
    page: 192,
    section: 20
  },
  {
    word: "trap",
    meaning: "わな",
    page: 192,
    section: 20
  },
  {
    word: "trick",
    meaning: "こつ",
    page: 192,
    section: 20
  },
  {
    word: "fault",
    meaning: "責任",
    page: 192,
    section: 20
  },
  {
    word: "discount",
    meaning: "割引",
    page: 192,
    section: 20
  },
  {
    word: "bias",
    meaning: "偏見",
    page: 192,
    section: 20
  },
  {
    word: "cooperation",
    meaning: "協力, 共同",
    page: 192,
    section: 20
  },
  {
    word: "patent",
    meaning: "特許(権)",
    page: 192,
    section: 20
  },
  {
    word: "dialogue",
    meaning: "対話, 会話",
    page: 194,
    section: 21
  },
  {
    word: "component",
    meaning: "構成要素",
    page: 194,
    section: 21
  },
  {
    word: "reputation",
    meaning: "評判",
    page: 194,
    section: 21
  },
  {
    word: "verbal",
    meaning: "言葉の",
    page: 194,
    section: 21
  },
  {
    word: "internal",
    meaning: "内部の",
    page: 194,
    section: 21
  },
  {
    word: "solid",
    meaning: "しっかりした",
    page: 194,
    section: 21
  },
  {
    word: "remote",
    meaning: "遠く離れた",
    page: 194,
    section: 21
  },
  {
    word: "principal",
    meaning: "主要な",
    page: 194,
    section: 21
  },
  {
    word: "sophisticated",
    meaning: "高性能の, 精巧な",
    page: 194,
    section: 21
  },
  {
    word: "equivalent",
    meaning: "等しい, 相当する",
    page: 196,
    section: 21
  },
  {
    word: "rational",
    meaning: "理想的な",
    page: 196,
    section: 21
  },
  {
    word: "relevant",
    meaning: "関係がある",
    page: 196,
    section: 21
  },
  {
    word: "absolute",
    meaning: "絶対的な",
    page: 196,
    section: 21
  },
  {
    word: "frequent",
    meaning: "頻繁な",
    page: 196,
    section: 21
  },
  {
    word: "permanent",
    meaning: "永続的な",
    page: 196,
    section: 21
  },
  {
    word: "intense",
    meaning: "強烈な",
    page: 196,
    section: 21
  },
  {
    word: "meaningful",
    meaning: "意味のある",
    page: 196,
    section: 21
  },
  {
    word: "evil",
    meaning: "邪悪な",
    page: 198,
    section: 21
  },
  {
    word: "extinct",
    meaning: "絶滅した",
    page: 198,
    section: 21
  },
  {
    word: "random",
    meaning: "無作為の",
    page: 198,
    section: 21
  },
  {
    word: "raw",
    meaning: "生の",
    page: 198,
    section: 21
  },
  {
    word: "rude",
    meaning: "無礼な",
    page: 198,
    section: 21
  },
  {
    word: "mere",
    meaning: "単なる, ほんの",
    page: 198,
    section: 21
  },
  {
    word: "tropical",
    meaning: "熱帯の",
    page: 198,
    section: 21
  },
  {
    word: "forth",
    meaning: "前へ, 先へ",
    page: 198,
    section: 21
  },
  {
    word: "possess",
    meaning: "を所有している",
    page: 200,
    section: 22
  },
  {
    word: "dominate",
    meaning: "を支配する",
    page: 200,
    section: 22
  },
  {
    word: "guarantee",
    meaning: "を保証する",
    page: 200,
    section: 22
  },
  {
    word: "melt",
    meaning: "溶ける",
    page: 200,
    section: 22
  },
  {
    word: "embarrass",
    meaning: "に恥ずかしい思いをさせる",
    page: 200,
    section: 22
  },
  {
    word: "discourage",
    meaning: "(人)にやる気を無くさせる",
    page: 200,
    section: 22
  },
  {
    word: "detect",
    meaning: "を感知する",
    page: 200,
    section: 22
  },
  {
    word: "devote",
    meaning: "をささげる",
    page: 202,
    section: 22
  },
  {
    word: "urge",
    meaning: "に(強く)促す",
    page: 202,
    section: 22
  },
  {
    word: "lend",
    meaning: "を貸す",
    page: 202,
    section: 22
  },
  {
    word: "restrict",
    meaning: "を制限する",
    page: 202,
    section: 22
  },
  {
    word: "isolate",
    meaning: "を孤立させる",
    page: 202,
    section: 22
  },
  {
    word: "accompany",
    meaning: "に同行する",
    page: 202,
    section: 22
  },
  {
    word: "exhaust",
    meaning: "を疲れ果てさせる",
    page: 202,
    section: 22
  },
  {
    word: "annoy",
    meaning: "を悩ます",
    page: 204,
    section: 22
  },
  {
    word: "endanger",
    meaning: "を危険に晒す",
    page: 204,
    section: 22
  },
  {
    word: "acknowledge",
    meaning: "(事実など)を認める",
    page: 204,
    section: 22
  },
  {
    word: "admire",
    meaning: "に敬服(関心)する",
    page: 204,
    section: 22
  },
  {
    word: "evaluate",
    meaning: "を評価する",
    page: 204,
    section: 22
  },
  {
    word: "declare",
    meaning: "を宣言する",
    page: 204,
    section: 22
  },
  {
    word: "secure",
    meaning: "を確保する",
    page: 204,
    section: 22
  },
  {
    word: "specialize",
    meaning: "専門とする",
    page: 204,
    section: 22
  },
  {
    word: "attribute",
    meaning: "(結果など)を帰する",
    page: 206,
    section: 22
  },
  {
    word: "pretend",
    meaning: "(の)ふりをする",
    page: 206,
    section: 22
  },
  {
    word: "bury",
    meaning: "を埋める",
    page: 206,
    section: 22
  },
  {
    word: "reverse",
    meaning: "を逆転させる",
    page: 206,
    section: 22
  },
  {
    word: "resist",
    meaning: "に抵抗する",
    page: 206,
    section: 22
  },
  {
    word: "scare",
    meaning: "を怯えさせる",
    page: 206,
    section: 22
  },
  {
    word: "imitate",
    meaning: "をまねる",
    page: 206,
    section: 22
  },
  {
    word: "assist",
    meaning: "(を)援助する",
    page: 206,
    section: 22
  },
  {
    word: "resemble",
    meaning: "に似ている",
    page: 208,
    section: 22
  },
  {
    word: "retire",
    meaning: "引退する, 退職する",
    page: 208,
    section: 22
  },
  {
    word: "neglect",
    meaning: "をおろそかにする, 怠る",
    page: 208,
    section: 22
  },
  {
    word: "collapse",
    meaning: "崩壊する",
    page: 208,
    section: 22
  },
  {
    word: "reform",
    meaning: "を改革する",
    page: 208,
    section: 22
  },
  {
    word: "protest",
    meaning: "に抗議する",
    page: 208,
    section: 22
  },
  {
    word: "owe",
    meaning: "に借りがある",
    page: 208,
    section: 22
  },
  {
    word: "sustain",
    meaning: "を持続させる",
    page: 210,
    section: 23
  },
  {
    word: "assign",
    meaning: "を割り当てる",
    page: 210,
    section: 23
  },
  {
    word: "accomplish",
    meaning: "を成し遂げる",
    page: 210,
    section: 23
  },
  {
    word: "wisdom",
    meaning: "知恵",
    page: 210,
    section: 23
  },
  {
    word: "literacy",
    meaning: "読み書きの能力",
    page: 210,
    section: 23
  },
  {
    word: "heritage",
    meaning: "遺産",
    page: 210,
    section: 23
  },
  {
    word: "mission",
    meaning: "使命",
    page: 210,
    section: 23
  },
  {
    word: "license",
    meaning: "免許(証)",
    page: 210,
    section: 23
  },
  {
    word: "elite",
    meaning: "エリート",
    page: 212,
    section: 23
  },
  {
    word: "layer",
    meaning: "層",
    page: 212,
    section: 23
  },
  {
    word: "motor",
    meaning: "モーター",
    page: 212,
    section: 23
  },
  {
    word: "protein",
    meaning: "タンパク質",
    page: 212,
    section: 23
  },
  {
    word: "profession",
    meaning: "職業",
    page: 212,
    section: 23
  },
  {
    word: "editor",
    meaning: "編集者",
    page: 212,
    section: 23
  },
  {
    word: "agent",
    meaning: "仲介者, 代理人",
    page: 212,
    section: 23
  },
  {
    word: "globe",
    meaning: "地球, 世界",
    page: 212,
    section: 23
  },
  {
    word: "haven",
    meaning: "避難所, 保護区",
    page: 214,
    section: 23
  },
  {
    word: "row",
    meaning: "列",
    page: 214,
    section: 23
  },
  {
    word: "sacrifice",
    meaning: "犠牲",
    page: 214,
    section: 23
  },
  {
    word: "means",
    meaning: "手段",
    page: 214,
    section: 23
  },
  {
    word: "session",
    meaning: "集まり",
    page: 214,
    section: 23
  },
  {
    word: "league",
    meaning: "(競技)連盟",
    page: 214,
    section: 23
  },
  {
    word: "contest",
    meaning: "競技(会)",
    page: 214,
    section: 23
  },
  {
    word: "guard",
    meaning: "警備員",
    page: 214,
    section: 23
  },
  {
    word: "opponent",
    meaning: "(試合・論争などの)相手",
    page: 214,
    section: 23
  },
  {
    word: "glance",
    meaning: "ちらっと見ること",
    page: 216,
    section: 23
  },
  {
    word: "divorce",
    meaning: "離婚",
    page: 216,
    section: 23
  },
  {
    word: "tissue",
    meaning: "(生物の)組織",
    page: 216,
    section: 23
  },
  {
    word: "liquid",
    meaning: "液体",
    page: 216,
    section: 23
  },
  {
    word: "inequality",
    meaning: "不平等",
    page: 216,
    section: 23
  },
  {
    word: "prejudice",
    meaning: "偏見",
    page: 216,
    section: 23
  },
  {
    word: "justice",
    meaning: "公正, 正義",
    page: 216,
    section: 23
  },
  {
    word: "guideline",
    meaning: "指針, ガイドライン",
    page: 216,
    section: 23
  },
  {
    word: "platform",
    meaning: "プラットフォーム",
    page: 218,
    section: 23
  },
  {
    word: "sector",
    meaning: "(社会・経済などの)部門",
    page: 218,
    section: 23
  },
  {
    word: "channel",
    meaning: "チャンネル",
    page: 218,
    section: 23
  },
  {
    word: "glacier",
    meaning: "氷河",
    page: 218,
    section: 23
  },
  {
    word: "primate",
    meaning: "霊長目の動物",
    page: 218,
    section: 23
  },
  {
    word: "usage",
    meaning: "(使)用法",
    page: 218,
    section: 23
  },
  {
    word: "fortune",
    meaning: "財産",
    page: 218,
    section: 23
  },
  {
    word: "correlation",
    meaning: "相互関係, 相関(関係)",
    page: 218,
    section: 23
  },
  {
    word: "artistic",
    meaning: "芸術的な",
    page: 220,
    section: 24
  },
  {
    word: "literary",
    meaning: "文学の",
    page: 220,
    section: 24
  },
  {
    word: "classic",
    meaning: "第一級の",
    page: 220,
    section: 24
  },
  {
    word: "liberal",
    meaning: "自由主義の",
    page: 220,
    section: 24
  },
  {
    word: "concrete",
    meaning: "具体的な",
    page: 220,
    section: 24
  },
  {
    word: "slight",
    meaning: "わずかな",
    page: 220,
    section: 24
  },
  {
    word: "federal",
    meaning: "連邦(政府)の",
    page: 220,
    section: 24
  },
  {
    word: "primitive",
    meaning: "原始的な",
    page: 220,
    section: 24
  },
  {
    word: "unfamiliar",
    meaning: "不慣れな",
    page: 222,
    section: 24
  },
  {
    word: "subtle",
    meaning: "微妙な",
    page: 222,
    section: 24
  },
  {
    word: "plain",
    meaning: "明らかな",
    page: 222,
    section: 24
  },
  {
    word: "marine",
    meaning: "海の",
    page: 222,
    section: 24
  },
  {
    word: "apparent",
    meaning: "明白な",
    page: 222,
    section: 24
  },
  {
    word: "reluctant",
    meaning: "気が進まない, 嫌がる",
    page: 222,
    section: 24
  },
  {
    word: "temporary",
    meaning: "一時的な",
    page: 222,
    section: 24
  },
  {
    word: "guilty",
    meaning: "罪悪感のある",
    page: 222,
    section: 24
  },
  {
    word: "royal",
    meaning: "王の",
    page: 224,
    section: 24
  },
  {
    word: "pure",
    meaning: "純粋な",
    page: 224,
    section: 24
  },
  {
    word: "incredible",
    meaning: "信じられない",
    page: 224,
    section: 24
  },
  {
    word: "eager",
    meaning: "熱望して",
    page: 224,
    section: 24
  },
  {
    word: "adequate",
    meaning: "十分な",
    page: 224,
    section: 24
  },
  {
    word: "via",
    meaning: "〜経由で",
    page: 224,
    section: 24
  },
  {
    word: "assess",
    meaning: "を評価する",
    page: 228,
    section: 25
  },
  {
    word: "approve",
    meaning: "賛成する",
    page: 228,
    section: 25
  },
  {
    word: "remark",
    meaning: "と述べる",
    page: 228,
    section: 25
  },
  {
    word: "pose",
    meaning: "危険を引き起こす",
    page: 228,
    section: 25
  },
  {
    word: "yield",
    meaning: "をもたらす",
    page: 228,
    section: 25
  },
  {
    word: "exhibit",
    meaning: "を示す, 見せる",
    page: 228,
    section: 25
  },
  {
    word: "distribute",
    meaning: "を分配する",
    page: 228,
    section: 25
  },
  {
    word: "command",
    meaning: "を命じる",
    page: 230,
    section: 25
  },
  {
    word: "occupy",
    meaning: "(空間・時間)を占める",
    page: 230,
    section: 25
  },
  {
    word: "pop",
    meaning: "ひょいと動く",
    page: 230,
    section: 25
  },
  {
    word: "pile",
    meaning: "を積み重ねる",
    page: 230,
    section: 25
  },
  {
    word: "greet",
    meaning: "に挨拶する",
    page: 230,
    section: 25
  },
  {
    word: "apologine",
    meaning: "謝る",
    page: 230,
    section: 25
  },
  {
    word: "frustrate",
    meaning: "を苛立たせる",
    page: 230,
    section: 25
  },
  {
    word: "relieve",
    meaning: "を和らげる",
    page: 230,
    section: 25
  },
  {
    word: "derive",
    meaning: "由来する",
    page: 230,
    section: 25
  },
  {
    word: "deserve",
    meaning: "に値する",
    page: 232,
    section: 25
  },
  {
    word: "peer",
    meaning: "じっと見る",
    page: 232,
    section: 25
  },
  {
    word: "defeat",
    meaning: "を負かす",
    page: 232,
    section: 25
  },
  {
    word: "convert",
    meaning: "を変える",
    page: 232,
    section: 25
  },
  {
    word: "wed",
    meaning: "と結婚する",
    page: 232,
    section: 25
  },
  {
    word: "delight",
    meaning: "を喜ばせる",
    page: 232,
    section: 25
  },
  {
    word: "boost",
    meaning: "を押し上げる",
    page: 232,
    section: 25
  },
  {
    word: "endure",
    meaning: "に耐える",
    page: 232,
    section: 25
  },
  {
    word: "correspond",
    meaning: "一致する",
    page: 232,
    section: 25
  },
  {
    word: "impose",
    meaning: "を課す",
    page: 234,
    section: 25
  },
  {
    word: "rescue",
    meaning: "を救う",
    page: 234,
    section: 25
  },
  {
    word: "resolve",
    meaning: "を解決する",
    page: 234,
    section: 25
  },
  {
    word: "register",
    meaning: "を記録する, 登録する",
    page: 234,
    section: 25
  },
  {
    word: "interrupt",
    meaning: "を中断する",
    page: 234,
    section: 25
  },
  {
    word: "rid",
    meaning: "から取り除く, 除去する",
    page: 234,
    section: 25
  },
  {
    word: "prohibit",
    meaning: "を禁止する",
    page: 234,
    section: 25
  },
  {
    word: "compose",
    meaning: "を構成する",
    page: 234,
    section: 25
  },
  {
    word: "misunderstand",
    meaning: "を誤解する",
    page: 234,
    section: 25
  },
  {
    word: "punish",
    meaning: "を罰する",
    page: 236,
    section: 25
  },
  {
    word: "ruin",
    meaning: "をダメにする",
    page: 236,
    section: 25
  },
  {
    word: "defend",
    meaning: "を防御する",
    page: 236,
    section: 25
  },
  {
    word: "embrace",
    meaning: "を受け入れる",
    page: 236,
    section: 25
  },
  {
    word: "modify",
    meaning: "を修正する",
    page: 236,
    section: 25
  },
  {
    word: "qualify",
    meaning: "人に資格を与える",
    page: 236,
    section: 25
  },
  {
    word: "passion",
    meaning: "情熱",
    page: 236,
    section: 25
  },
  {
    word: "enthusiasm",
    meaning: "情熱, 熱意",
    page: 236,
    section: 25
  }
];

const sectionNames = {
  1: "1, 18~26",
  2: "2, 28~36",
  3: "3, 38~42",
  4: "4, 44~52",
  5: "5, 54~62",
  6: "6, 64~68",
  7: "7, 70~78",
  8: "8, 80~88",
  9: "9, 90~94",
  10: "10, 96~104",
  11: "11, 106~114",
  12: "12, 116~120",
  13: "13, 122~130",
  14: "14, 132~140",
  15: "15, 142~146",
  16: "16, 148~156",
  17: "17, 158~166",
  18: "18, 168~172",
  19: "19, 174~182",
  20: "20, 184~192",
  21: "21, 194~198",
  22: "22, 200~208",
  23: "23, 210~218",
  24: "24, 220~224",
  25: "25, 228~236",
  26: "26, 238~246",
  27: "27, 248~250"
};
