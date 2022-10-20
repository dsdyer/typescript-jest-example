export class ListNode {
  val: number
  next: ListNode|null

  public constructor(val: number = 0, next: ListNode|null = null) {
    this.val = val;
    this.next = next;
  }
}