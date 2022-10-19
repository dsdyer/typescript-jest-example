import { ListNode } from "../src/classes/ListNode";
import { sortList } from "../src/sort-list";

function listHelper (vals: number[]): ListNode {
  if (!vals.length) return new ListNode(0, null)
  if (vals.length === 1) return new ListNode(vals[0], null)
  const nodes = vals.map((number) => new ListNode(number));
  nodes.forEach((node, index, nodes) => node.next = nodes[index+1] || null)

  return nodes[0]
}

describe("test listHelper function", () => {

  it("should return the an empty node given no values", () => {
    const input: number[] = [];
    const output: ListNode = new ListNode(0, null);

    expect(JSON.stringify(listHelper(input))).toBe(JSON.stringify(output));
  });


  it("should return the correct node given one value", () => {
    const input: number[] = [1]
    const output: ListNode = new ListNode(1, null)

    expect(JSON.stringify(listHelper(input))).toBe(JSON.stringify(output));
  });

  it("should return list head correctly given two values", () => {
    const input: number[] = [1,2]
    const output: ListNode = new ListNode(1, new ListNode(2))

    expect(JSON.stringify(listHelper(input))).toBe(JSON.stringify(output));
  });

  it("should return list head correctly given four values", () => {
    const input: number[] = [1,2,3,4];
    const output: ListNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

    expect(JSON.stringify(listHelper(input))).toBe(JSON.stringify(output));
  });

  it("should return list head correctly given thirty values", () => {
    const vals: number[] = new Array(30).fill(1).map(() => Math.ceil(Math.random() * 30));

    const nodes = vals.map((number) => new ListNode(number));
    nodes.forEach((node, index, nodes) => node.next = nodes[index+1] || null);
    const head = nodes[0];

    expect(JSON.stringify(listHelper(vals))).toBe(JSON.stringify(nodes[0]));
  });





});




describe("test sortList function", () => {
  it("", () => {
    // expect(sortList()).toBe();
  });
});
