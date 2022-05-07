/**
 * Deep merge 1 or more objects over a target.
 * Keys that are not in common with sources will remain unchanged in the target.
 * All the keys from sources not present in target will be merged (so added to the target object)
 * @params target
 * @params ...sources
 */
var deepMerge = function(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key])
                    Object.assign(target, { [key]: {} });
                    deepMerge(target[key], source[key]);
                
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return deepMerge(target, ...sources);
}

function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

module.exports = deepMerge;

