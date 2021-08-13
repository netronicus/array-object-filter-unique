# Filter Array of Objects by conditions attributes

Install with:
```
npm i array-object-filter-unique --save
```

Import the dependency:
```
import 'array-object-filter-unique'
```

This module can be used like this:

```
const testing:Array<any> = [
    { name: '1628870428', desc: 'test1' },
    { name: '1628870428', desc: 'test1' },
    { name: '1628870428', desc: 'test1' },
    { name: '1628870428', desc: 'test1' },
    { name: '1628870437', desc: 'test12' },
    { name: '1628870437', desc: 'test12' },
    { name: '1628870437', desc: 'test12' },
    { name: '1628870437', desc: 'test12' }
].filterUniqueObject({
    attribute: 'name',
});
// Should return
//[
//    { name: '1628870428', desc: 'test1' },
//    { name: '1628870437', desc: 'test12' }
//]
```

Using Mutator
```
const testing:Array<any> = [
    { name: '1628870428', desc: 'test1' },
    { name: '1628870428', desc: 'test1' },
    { name: '1628870428', desc: 'test1' },
    { name: '1628870428', desc: 'test1' },
    { name: '1628870437', desc: 'test12' },
    { name: '1628870437', desc: 'test12' },
    { name: '1628870437', desc: 'test12' },
    { name: '1628870437', desc: 'test12' }
].filterUniqueObject({
    attribute: 'name',
    mutator: (value:any)=>{ return moment(value,'X').utc().startOf('day').unix(); },
});
// Should return
//[
//    { name: '1628870428', desc: 'test1' }
//]
```

Using Array of attributes
```
const testing:Array<any> = [
    { name: '1628870428', desc: 'test1' },
    { name: '1628870428', desc: 'test1' },
    { name: '1628870428', desc: 'test1' },
    { name: '1628870428', desc: 'test1' },
    { name: '1628870437', desc: 'test12' },
    { name: '1628870437', desc: 'test12' },
    { name: '1628870437', desc: 'test12' },
    { name: '1628870437', desc: 'test12' }
].filterUniqueObject({
    attributes: [
        {
            attribute: 'name',
            mutator: (value:any)=>{ return moment(value,'X').utc().startOf('day').unix(); }
        },
        {
            attribute: 'desc'
        }
    ]
});
// Should return
//[
//    { name: '1628870428', desc: 'test1' },
//    { name: '1628870437', desc: 'test12' }
//]
```