#include <studio.h>

int main() {
    char matriz[3][5];

    for(int i = 0; i < 3; i++){
        printf("Insira o nome do aluno %d: ", i+1);
        scanf("%S", matriz[i][0])

        for(int j = 1; j< 4; j++){
            printf("Insira a nota %d do aluno %d: ", j, i+1);
            scanf("%S", matriz[i][j])
        }
    }
}
