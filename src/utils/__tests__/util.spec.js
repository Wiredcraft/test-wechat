import {UUID, classNamesGeneration } from "../util";

describe('UUID', () => {

    it('should generate a uuid', () => {
        expect(typeof UUID('hello') === "string").toBe(true);
        expect(UUID('hello') === UUID('hello')).toBe(false);
    });

    it('should include prefix string',()=>{
        expect(UUID('hello')).toMatch(/hello/);
    })

});

describe('classNamesGeneration', () => {

    let genClassName;

    beforeEach(()=>{
        genClassName = classNamesGeneration('foo');
    });

    it('should has a base class name is "foo".', () => {
        expect( genClassName() ).toEqual('foo');
    });

    it('should generate a class name as "foo-bar" when the argument is "bar".', () => {
        expect( genClassName('bar') ).toEqual('foo-bar');
    });

    it('should generate a class name as "foo-bar foo-is-selected" when the argument is {bar: true, "is-selected": true}', () => {
        expect( genClassName({bar: true, "is-selected": true}) ).toEqual('foo-bar foo-is-selected');
    });

});
