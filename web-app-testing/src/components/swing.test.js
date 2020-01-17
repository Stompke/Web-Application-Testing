import { swing, typeSwing } from './swing';

test('tests swing', () => {
    expect(swing(3)).toBe(5);
})


test('ball', () => {
    expect(typeSwing('ball')).toBe({strike: 0, ball: 1});
})


test('strike', () => {
    expect(typeSwing('strike')).toBe({ strike: 1, ball: 0});
})