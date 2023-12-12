import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-status-2-самолет', 'Unit | Serializer | i-i-s-status-2-самолет', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-status-2-самолет',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-status-2-статус',

    'model:i-i-s-status-2-самолет',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
