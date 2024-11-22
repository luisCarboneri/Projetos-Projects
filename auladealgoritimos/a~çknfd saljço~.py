matrizNumeros=[]

matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ]
for i in range(len(matriz)):
    for j in range(len(matriz[i])):
        if matriz[i][j] % 2 == 0:
            matriz[i][j] = matriz[i][j] * 2
        else:
            matriz[i][j] = matriz[i][j] + 1

for linha in matriz:
    print(linha)
