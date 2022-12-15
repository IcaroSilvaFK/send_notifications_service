import { assert } from '@helpers/assertion/assert';

export function assertIsEmpty(condition: boolean, message?): asserts condition {
  assert(condition, message);
}
