def accum(item):
    result = ''

    lowerItem = item.lower()
    list_of_letters = list(lowerItem)

    for index, letter in enumerate(list_of_letters):
        result += letter.upper() + (letter * (index)) + '-'

    return result[:(len(result) - 1)]
