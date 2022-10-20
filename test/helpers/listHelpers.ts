import { ListNode } from "../../src/classes/ListNode";

export function arrayToList (vals: number[]): ListNode {
  if (!vals.length) return new ListNode(0, null)
  if (vals.length === 1) return new ListNode(vals[0], null)
  const nodes = vals.map((number) => new ListNode(number));
  nodes.forEach((node, index, nodes) => node.next = nodes[index+1] || null)

  return nodes[0]
}

export function headNodeToArray(node: ListNode): number[] {
  if (!node) return []
  if (!node.next) return [node.val]
  
  const arr: number[] = [];
  let current: ListNode|null = node;

  while (current && current.val) {
    arr.push(current.val)
    current = current.next ? current.next : null;
  }
 
  return arr
}