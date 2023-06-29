import { reactive } from 'vue'

const COLS = 6
const ROWS = 20

export const cells = reactive(
  Array.from(Array(COLS).keys()).map((i) =>
    Array.from(Array(ROWS).keys()).map((i) => '')
  )
)

// adapted from https://codesandbox.io/s/jotai-7guis-task7-cells-mzoit?file=/src/atoms.ts
// by @dai-shi
export function evalCell(exp) { //exp хранит строчку, которую вводят в клетке
  if (!exp.startsWith('=')) {
    return exp
  }
  console.log(exp)
  // = A1 + B2 ---> get(0,1) + get(1,2)
  exp = exp
    .slice(1)
    .replace(
      /\b([A-Z])(\d{1,2})\b/g,
      (_, c, r) => `get(${c.charCodeAt(0) - 65},${r})`
    )
    console.log(exp)

  try {
    return new Function('get', `return ${exp}`)(getCellValue) //возвращает полученную строчку
  } catch (e) {
    return `#ERROR ${e}`
  }
}

function getCellValue(c, r) {
  const val = evalCell(cells[c][r])
  const num = Number(val)
  return Number.isFinite(num) ? num : val //если строка, то выводит строку, если только число, то выводит число
}
