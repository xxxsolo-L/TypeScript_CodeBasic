// BEGIN
function filterAnagrams(anagram: string, anagrams: string[]): string[] {
    const standard = anagram.split('').sort().join('');
    return anagrams.filter((item) => item.split('').sort().join('') === standard);
}
// END

export default filterAnagrams;

filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

filterAnagrams('laser', ['lazing', 'lazy',  'lacer']);
// []