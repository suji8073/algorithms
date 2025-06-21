def solution(name):
    alphabet = list('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    count = 0

    for char in name:
        idx = alphabet.index(char)
        up_down = min(idx, 26 - idx)
        count += up_down

    move = len(name) - 1

    for i in range(len(name)):
        next_idx = i +1

        while next_idx < len(name) and name[next_idx] == 'A':
            next_idx += 1
        length_word = i + len(name) - next_idx + min(i, len(name) - next_idx)
        move = min(move, length_word)

    return count + move