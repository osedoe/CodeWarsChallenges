def filter_list(list):
    result = []

    for index in range(len(list)):
        if type(list[index]) is not str:
            result.append(list[index])

    return result


# Best solution

def filter_list2(list):
    # 'return a new list with the strings filtered out'
    return [i for i in list if not isinstance(i, str)]
