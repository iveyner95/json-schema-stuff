import { subschemaExists } from '../utils';

describe('subschemaExists(...)', () => {
  it('should return true if key exists in object', () => {
    const result = subschemaExists({ key: 'value' }, 'key');
    expect(result).toBe(true);
  });

  it('should return false if key does not exist in object', () => {
    const result = subschemaExists({ key: 'value' }, 'someOtherKey');
    expect(result).toBe(false);
  });
});
