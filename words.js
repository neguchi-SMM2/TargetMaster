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
  }
];

const sectionNames = {
  1: "1, 18~26",
  2: "2, 28~36",
  3: "3, 38~42"
};
