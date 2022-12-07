export const output = (
  input: string | unknown | undefined
): string | undefined => {
  return typeof input === 'string' ? input : undefined
}
