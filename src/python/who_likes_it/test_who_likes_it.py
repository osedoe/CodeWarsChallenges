from .who_likes_it import likes

class TestLikes:
    def test_likes_one(self):
        assert likes([]) == 'no one likes this'

    def test_likes_two(self):
        assert likes(['Peter']) == 'Peter likes this'

    def test_likes_three(self):
        assert likes(['Jacob', 'Alex']) == 'Jacob and Alex like this'

    def test_likes_four(self):
        assert likes(['Max', 'John', 'Mark']) == 'Max, John and Mark like this'

    def test_likes_five(self):
        assert likes(['Alex', 'Jacob', 'Mark', 'Max']) == 'Alex, Jacob and 2 others like this'