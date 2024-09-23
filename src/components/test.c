#include <stdio.h>

int main() {
    int n;
    
    // Lire l'entrée de l'utilisateur
    printf("Entrer un entier : ");
    scanf("%d", &n);
    
    // Vérifier si le nombre est pair ou impair
    if (n % 2 == 0) {
        printf("%d est pair\n", n);
    } else {
        printf("%d est impair\n", n);
    }
    
    return 0;
}
