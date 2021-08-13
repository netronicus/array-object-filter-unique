import '../index';

const testing: Array<any> = [
    { name: '1628870428', desc: 'test1' },
    { name: '1628870428', desc: 'test1' },
    { name: '1628870428', desc: 'test1' },
    { name: '1628870428', desc: 'test1' },
    { name: '1628870437', desc: 'test12' },
    { name: '1628870437', desc: 'test12' },
    { name: '1628870437', desc: 'test12' },
    { name: '1628870437', desc: 'test12' }
];

test('Attributes', () => {
    const filtered = testing.filterUniqueObject({
        attributes: [
            {
                attribute: 'name',
            },
            {
                attribute: 'desc'
            }
        ]
    });
    expect(filtered.length).toBe(2);
});

test('Attribute', () => {
    const filtered = testing.filterUniqueObject({
        attribute: 'name'
    });
    expect(filtered.length).toBe(2);
});