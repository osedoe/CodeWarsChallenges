from .mumbling import accum


class TestMumbling:
    def test_mumbling_one(self):
        assert accum('ZpglnRxqenU') == 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'

    def test_mumbling_two(self):
        assert accum('NyffsGeyylB') == 'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb'

    def test_mumbling_three(self):
        assert accum('MjtkuBovqrU') == 'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu'

    def test_mumbling_four(self):
        assert accum('EvidjUnokmM') == 'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm'

    def test_mumbling_five(self):
        assert accum('HbideVbxncC') == 'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc'
