## Számoljuk össze hányszor szerepel a szövegben az X, Y és W karakter.
## Az eredmény: X_száma + Y_száma - W_száma

file = open('count-x-y-w.txt')
xyw = {'X':0, 'Y':0, 'W':0}
for row in file:
    for ch in row:
        if ch in xyw:
            xyw[ch] += 1
file.close()
print(xyw['X']+xyw['Y']-xyw['W'])
