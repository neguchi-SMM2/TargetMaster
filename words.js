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
  12: "12, 116~120"
};
