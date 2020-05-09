## A vers szövege több caesar.txt file-ban van lekódolva a Caesar-rejtjel segítségével.
## A kódolás az angol ABC-t használja és eltolást értékét másik feladatok alapján kapjuk meg.

import io

abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

offset=-16
file = io.open('caesar.txt', encoding='utf-8')
vers = io.open('vers.txt', mode='w', encoding='utf-8')
for row in file:
    for ch in row:
        if ch in abc:
            vers.write(abc[(abc.index(ch)+offset)%len(abc)])
        else:
            vers.write(ch)
file.close()
vers.close()
