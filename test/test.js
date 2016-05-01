import test from 'ava'
import getBin from '../'

test('no bin', async t => {
  const bin = await getBin()
  t.is(bin, null)
})

test('single bin', async t => {
  const cwd = './fixture-a'
  const bin = await getBin({cwd})
  t.is(bin[0], 'fixture-a')
})

test('multiple bins', async t => {
  const cwd = './fixture-b'
  const bin = await getBin({cwd})
  t.deepEqual(bin, ['command', 'cmd'])
})
