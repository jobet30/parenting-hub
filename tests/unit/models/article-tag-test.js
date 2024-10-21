import { setupTest } from 'parenting-hub/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | article tag', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('article-tag', {});
    assert.ok(model, 'model exists');
  });
});