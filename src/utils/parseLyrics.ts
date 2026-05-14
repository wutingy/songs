// Input: alternating EN/ZH lines, stanzas separated by blank lines.
// Output: array of stanzas, each an array of [en, zh] pairs.
export function parseLyrics(text: string): [string, string][][] {
  const stanzas = text.split(/\n\s*\n/).filter(s => s.trim());
  return stanzas.map(stanza => {
    const lines = stanza.split('\n').map(l => l.trim()).filter(Boolean);
    const pairs: [string, string][] = [];
    for (let i = 0; i < lines.length; i += 2) {
      pairs.push([lines[i] ?? '', lines[i + 1] ?? '']);
    }
    return pairs;
  });
}
