export default function isHidden(filename: string) {
  return /^\./.test(filename);
}
