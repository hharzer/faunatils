import { getIdFromRef, payloadWithId } from '../src'

describe('faunatils', () => {
  it('gets id from ref', () => {
    expect(
      getIdFromRef({
        ref: {
          '@ref': {
            id: 'string id',
          },
        },
      })
    ).toEqual('string id')
  })

  it('gets payload object with id', () => {
    expect(
      payloadWithId({
        ref: {
          '@ref': {
            id: 'string id',
          },
        },
        data: {
          colorful: true,
        },
      })
    ).toEqual({
      id: 'string id',
      colorful: true,
    })
  })
})
