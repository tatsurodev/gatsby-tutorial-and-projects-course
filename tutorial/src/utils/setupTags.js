const setupTags = recipes => {
  const allTags = {}
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  // Object.keys(obj) キーの配列を返す
  // Object.values(obj) 値の配列を返す
  // Object.entries(obj) [key, value] ペアの配列を返す
  // sort((a,b)=>{返り値}) 返り値が負の時、a < b。正の時、b < a。
  const newTags = Object.entries(allTags).sort((a, b) => {
    // 配列の分割代入
    const [firstTag] = a
    const [secondTag] = b
    // a.localeCompare(b) < 0 の時、aがbの先にくる(a < b)
    // a.localeCompare(b) > 0 の時、aがbのあとにくる(b < a)
    return firstTag.localeCompare(secondTag)
  })
  // 昇順(小さい順)
  // 配列.sort((a, b) => a.localeCompare(b))
  // 降順(大きい順)
  // 配列.sort((a, b) => b.localeCompare(a))
  return newTags
}

export default setupTags
