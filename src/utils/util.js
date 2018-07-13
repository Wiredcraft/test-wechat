import classnames from "classnames";

/**
 * Generates a uuid
 * @param {string} prefix
 * @return {string}
 */
const UUID = (prefix)=> {
    let t = new Date().getTime();
    return (!prefix?'':prefix) + '-' + t + Math.floor(Math.random()*t);
};

/**
 * Generates a generation that can creates class names base on prefix
 * @type { function(string): function( string | object): string }
 * @param {string } prefix
 * @return { function(string | object): string } class name creater function
 */
const classNamesGeneration = (prefix) =>

    /**
     * @param { string | object } options class names options
     * @return { string } class name
     * @example 'foo' => prefix-foo, {foo:false, bar:true} => prefix-bar
     */
    (options)=>

        typeof options === 'string' ||  typeof options === 'undefined'

            ? prefix +  (options ? `-${options}` : '')
            : classnames( Object.keys(options).map( item => {

                let className = prefix + `-${item}`;
                return {
                    [className]: options[item]
                }
            }));


export {
    UUID,
    classNamesGeneration
}