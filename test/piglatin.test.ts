import { translatePigLatin } from "../src/PigLatin/piglatin";

describe('Pig Latin', () => {
    describe('Translate the prive string to pig latin', () => {
        it('should return onsonantcay', () => {
            expect(translatePigLatin('consonant')).toEqual('onsonantcay');
        });
        it('should return aliforniacay', () => {
            expect(translatePigLatin('california')).toEqual('aliforniacay');
        });
        it('should return algorithmway', () => {
            expect(translatePigLatin('algorithm')).toEqual('algorithmway');
        });
        it('should return eightway', () => {
            expect(translatePigLatin('eight')).toEqual('eightway');
        });
        it('should return oveglay', () => {
            expect(translatePigLatin('glove')).toEqual('oveglay');
        });
        it('should return rythmay', () => {
            expect(translatePigLatin('rythm')).toEqual('rythmay');
        });
    });
});