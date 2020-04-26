def filter_list(list):
    result = []

    for index in range(len(list)):
        if type(list[index]) is not str:
            result.append(list[index])

    return result
