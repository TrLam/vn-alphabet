/*
 A temporary solution for the data structure
 Need:
 - quick way to retrieve previous and next letter from the current id/letter
 - share common examples (?)
 - store example photos (if implemented)
 - categorize examples
 */
export const ALPHABET = [
  { id: '1', prev: '29', next: '2', letter: 'ă', examples: ['bánh căn'] },
  { id: '2', prev: '1', next: '3', letter: 'a', examples: ['bánh canh'] },
  { id: '3', prev: '2', next: '4', letter: 'â', examples: ['bánh nậm', 'xôi gấc', 'cơm tấm'] },
  { id: '4', prev: '3', next: '5', letter: 'b', examples: ['bún bò Huế', 'bánh bèo'] },
  { id: '5', prev: '4', next: '6', letter: 'c', examples: ['cơm hến', 'bánh cuốn', 'cao lầu'] },
  { id: '6', prev: '5', next: '7', letter: 'd', examples: ['dưa món'] },
  { id: '7', prev: '6', next: '8', letter: 'đ', examples: ['bánh đúc', 'bánh đập'] },
  { id: '8', prev: '7', next: '9', letter: 'e', examples: ['nem lụi'] },
  { id: '9', prev: '8', next: '10', letter: 'ê', examples: ['ếch xào sả ớt'] },
  { id: '10', prev: '9', next: '11', letter: 'g', examples: ['cơm gà', 'gỏi cuốn'] },
  { id: '11', prev: '10', next: '12', letter: 'h', examples: ['bún hến'] },
  { id: '12', prev: '11', next: '13', letter: 'i', examples: ['bánh ít lá gai'] },
  { id: '13', prev: '12', next: '14', letter: 'k', examples: ['kẹo kéo'] },
  { id: '14', prev: '13', next: '15', letter: 'l', examples: ['bánh bột lọc'] },
  { id: '15', prev: '14', next: '16', letter: 'm', examples: ['mắm nêm', 'bánh mì', 'mứt me'] },
  { id: '16', prev: '15', next: '17', letter: 'n', examples: ['nước mắm'] },
  { id: '17', prev: '16', next: '18', letter: 'o', examples: ['chả giò'] },
  { id: '18', prev: '17', next: '19', letter: 'ô', examples: ['ốc len xào dừa'] },
  { id: '19', prev: '18', next: '20', letter: 'ơ', examples: ['phở'] },
  { id: '20', prev: '19', next: '21', letter: 'p', examples: ['pate gan'] },
  { id: '21', prev: '20', next: '22', letter: 'q', examples: ['mì Quảng'] },
  {
    id: '22',
    prev: '21',
    next: '23',
    letter: 'r',
    examples: ['con rạm', 'mắm ruốc', 'bánh ram ít'],
  },
  { id: '23', prev: '22', next: '24', letter: 's', examples: ['sò huyết', 'sầu riêng'] },
  { id: '24', prev: '23', next: '25', letter: 't', examples: ['mắm tôm'] },
  { id: '25', prev: '24', next: '26', letter: 'u', examples: ['nui giò heo', 'hủ tíu'] },
  { id: '26', prev: '25', next: '27', letter: 'ư', examples: ['bánh ướt'] },
  { id: '27', prev: '26', next: '28', letter: 'v', examples: ['vả trộn'] },
  { id: '28', prev: '27', next: '29', letter: 'x', examples: ['xôi vò', 'bánh xèo'] },
  { id: '29', prev: '28', next: '1', letter: 'y', examples: ['yến sào'] },
];

export const getLetterDataFromId = (id) => {
  return ALPHABET.find((item) => item.id === id);
};
