const example = require("../test/example-utils.js")
const Table = require("../")
const style = Table.style

const rows1 = [
  [`${style("some red words", "red")}`, `some ${style("bold", "bold")} and ${style("dim", "dim")} words`, "plain test"],
  ["some plain words", `some ${style("bold", "bold")} and ${style("dim", "dim")} words`, "plain test"]
]
const rows2 = [
  // ["plain text", `a few red words in here`],
  ["plain text", `a ${style("few red words in", "red")} here`]
]

function test (testName, tableWidth, rows, config) {
  console.log(`\n${style(testName, "cyan")}`)
  example.init(`Test: ${testName}`, tableWidth)
  const table = new Table(rows, config)
  const output = table.render()

  console.log(output)
  console.log("")
}

test("Embedded ansi column width", 50, rows1, {})

test("Embedded ansi breaking", 20, rows2, {})

test("Embedded emojis", 25, [[
  "aaa bbb ccc",
  "aaa bbb ccc 😀😃😄😁 eee fff ggg hhh",
  "aaa bbb ccc ddd eee fff ggg hhh iii jjj kkk lll mmm nnn ooo ppp qqq rrr sss ttt"
]], {
  paddingLeft: 0,
  paddingRight: 0,
  marginTop: 0
})
