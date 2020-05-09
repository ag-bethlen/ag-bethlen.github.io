## Fibonacci 50
## Az ötvenedik fibonacci szám legmagasabb helyiértékű számjegye kivonva a legkisebb helyiértéküből. Ha a nulladik: 0, az első: 1

a,b = 0, 1
for i in range(50):
    a, b = b, a+b
print(a%10 - a//(10**(len(str(a))-1))) 

