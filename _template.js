/* ШАБЛОН НОВОГО ПРЕДМЕТА: скопируйте файл, переименуйте (например, math.js),
   поменяйте поля и подключите в index.html строкой <script src="data/math.js"></script> */
SUBJECTS.push({
  id: 'math',            // уникальный id латиницей
  name: 'Математика',
  emoji: '📐',
  color: '#d97706',
  light: '#fbbf24',
  soft: '#fde68a',
  end: '#fbbf24',
  cardMode: 'single',    // 'group' или 'single'
  data: [
    {
      ruler: "Название раздела",
      points: [
        { q: "Вопрос", a: "Ответ" }
      ]
    }
  ]
});
