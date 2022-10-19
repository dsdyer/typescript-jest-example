export class ListNode {
  val?: number | 0
  next?: ListNode | null

  public constructor(val: number = 0, next: ListNode|null = null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}