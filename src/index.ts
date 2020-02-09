import { Client, Expr } from 'faunadb'

export type WithRef<T> = {
  ref?: {
    '@ref': {
      id: string
    }
  }
  data?: T
}

export function getIdFromRef<T>(item: WithRef<T>) {
  return item?.ref?.['@ref']?.id
}

export function payloadWithId<T>(item: WithRef<T>) {
  return {
    id: getIdFromRef(item),
    ...item.data,
  }
}

export async function query<T>(
  client: Client,
  expression: Expr,
  onResult: (result: T) => void,
  onError: (error: Error) => void
) {
  try {
    const result = await client.query<T>(expression)
    onResult(result)
  } catch (error) {
    onError(error)
  }
}
