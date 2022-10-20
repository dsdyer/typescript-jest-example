import { ListNode } from "../src/classes/ListNode";
import { arrayToList, headNodeToArray } from "./helpers/listHelpers";


interface testCase {
  input: ListNode,
  expected: number[]
}

const testCases = [
  {
    input: new ListNode(1),
    expected: [1]
  },
  {
    input: new ListNode(1),
    expected: [1]
  }
]

describe("test arrayToList function", () => {
  it("should return the an empty node given no values", () => {
    expect(JSON.stringify(arrayToList([]))).toBe(JSON.stringify(new ListNode(0, null)));
  });

  it("should return the correct node given one value", () => {
    expect(JSON.stringify(arrayToList([1]))).toBe(JSON.stringify(new ListNode(1, null)));
  });

  it("should return list head correctly given two values", () => {
    expect(JSON.stringify(arrayToList([1,2]))).toBe(JSON.stringify(new ListNode(1, new ListNode(2))));
  });

  it("should return list head correctly given four values", () => {
    const input: number[] = [1,2,3,4];
    const output: ListNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

    expect(JSON.stringify(arrayToList(input))).toBe(JSON.stringify(output));
  });

  it("should return list head correctly given thirty values", () => {
    const vals: number[] = new Array(30).fill(1).map(() => Math.ceil(Math.random() * 30));
    const nodes = vals.map((number) => new ListNode(number));
    nodes.forEach((node, index, nodes) => node.next = nodes[index+1] || null);

    expect(JSON.stringify(arrayToList(vals))).toBe(JSON.stringify(nodes[0]));
  });
});

describe("test headNodeToArray function", () => {
  it("should return the correct array for a head node", () => {
    expect(JSON.stringify(headNodeToArray(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))))).toBe(JSON.stringify([1,2,3,4]));
  });
});