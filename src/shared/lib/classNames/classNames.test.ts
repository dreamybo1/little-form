import { classNames } from './classNames';

describe('classNames', () => {
    test('only first param', () => {
        expect(classNames('main')).toBe('main');
    });

    test('with additional class', () => {
        const expected = 'main additional class';
        expect(classNames('main', {}, ['additional', 'class'])).toBe(expected);
    });

    test('with mods true', () => {
        const expected = 'main additional class lol kek';
        expect(
            classNames(
                'main',
                { lol: true, kek: true },
                ['additional', 'class'],
            ),
        ).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'main additional class';
        expect(
            classNames(
                'main',
                { lol: false, kek: false },
                ['additional', 'class'],
            ),
        ).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'main additional class';
        expect(
            classNames(
                'main',
                { lol: undefined, kek: undefined },
                ['additional', 'class'],
            ),
        ).toBe(expected);
    });
});
