def likes(names):
    length = len(names)
    if length == 0:
        return 'no one likes this'
    elif length == 1:
        sentence = '{} likes this'
        return sentence.format(names[0])
    elif length == 2:
        sentence = '{} and {} like this'
        return sentence.format(names[0], names[1])
    elif length == 3:
        sentence = '{}, {} and {} like this'
        return sentence.format(names[0], names[1], names[2])
    elif length > 3:
        sentence = '{}, {} and {} others like this'
        return sentence.format(names[0], names[1], len(names) - 2)
