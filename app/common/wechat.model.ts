export function isError(res: WX.Session | WX.Error): res is WX.Error {
  if (res && (res as WX.Error).errcode) {
    return true;
  }
  return false;
}
