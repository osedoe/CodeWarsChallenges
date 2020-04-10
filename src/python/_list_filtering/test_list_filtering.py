from .list_filtering import filter_list

class TestListFiltering:
    def test_filter_list_one(self):
        assert filter_list([1,2,'a','b']) == [1,2]

    def test_filter_list_two(self):
        assert filter_list([1,'a','b',0,15]) == [1,0,15]

    def test_filter_list_three(self):
        assert filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
