from .sort_the_odd import sort_array


class TestSortTheOdd:
    def test_one(self):
        assert sort_array([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

    def test_two(self):
        assert sort_array([5, 3, 1, 8, 0]) == [1, 3, 5, 8, 0]

    def test_three(self):
        assert sort_array([]) == []
