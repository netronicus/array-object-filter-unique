export { }
declare global {
    interface FilterUniqueObjectInt {
        attribute?: string
        mutator?: any
        attributes?: {
            attribute: string
            mutator?: any
        }[]
    }
    interface Array<T> {
        filterUniqueObject(conditions:FilterUniqueObjectInt): T[];
    }
}

if (!Array.prototype.filterUniqueObject) {
    Array.prototype.filterUniqueObject = function Array<T>(conditions:FilterUniqueObjectInt): T[] {
        const uniques: any = {};

        for (const s of this) {
            if (conditions.attribute) {
                const a = conditions.mutator ? conditions.mutator(s[conditions.attribute]) : s[conditions.attribute];
                if (!uniques[String(a)]) {
                    uniques[String(a)] = s;
                }
            }
            if(conditions.attributes){
                const a = conditions.attributes.map(e=>String(e.mutator ? e.mutator(s[e.attribute]) : s[e.attribute]));
                if (!uniques[a.join('')]) {
                    uniques[a.join('')] = s;
                }
            }
        }
        return Object.values(uniques)
    }
}