## after-z.txt
## Keressük ki a file-ban a Z karakter után következő számjegy karatereket és az átlaguknak vegyük az egész részét.
from statistics import mean 

file = open('after-z.txt')
num=[]
for row in file:
    for i, ch in enumerate(row):
        if ch == 'Z' and row[i+1] in '0123456789':
            num.append(int(row[i+1]))
file.close()
print(int(mean(num)))
