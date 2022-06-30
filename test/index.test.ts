
import { parse } from 'postcss';
import { assert, test } from 'vitest';

test('sqrt', () => {
  parse(
    `
    .container {
      font-size: 14px;
      :global .ant-btn {
        font-weight: 500;
        &:hover, &:focus, &:visited {
          color: red;
        }
      }
    }
    `,
    {

    }
  )
  assert.equal(Math.sqrt(4), 3)
})