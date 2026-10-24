import assert from 'node:assert/strict';
import { renderDeep } from '@x12i/memorix-target-connector';
const values = { config: { folder: 'fixture' }, destination: {},
  item: { itemId: 'item-1', fileName: 'report.txt', mediaType: 'text/plain', contentHash: 'fixture', revision: '1', content: { kind: 'inline-text', text: 'Example report' } },
  idempotency: { key: 'item-1:1', providerKey: 'fixture-key' }, run: { invocationId: 'invoke-1', workId: 'work-1', attempt: 1 }, scope: { orgId: 'fixture-org', agentIds: ['fixture-agent'] }, now: '2026-01-01T00:00:00Z',
};
const payload = renderDeep({ folder: '${{ config.folder }}', fileName: '${{ item.fileName }}', key: '${{ idempotency.key }}' }, values);
assert.deepEqual(payload, { folder: 'fixture', fileName: 'report.txt', key: 'item-1:1' });
assert.throws(() => renderDeep({ value: '${{ process.env }}' }, values));
console.log(payload);
// No delivery, SMTP connection, credential lease or provider operation occurs.
