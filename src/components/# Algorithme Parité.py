# Algorithme Parité

# Variables

s = 0
# n = int(input("Entrer un entier : "))

# Début

# for i in range(1, 11):
#     s = s + i
# print (f"la somme de 1 a 10 egale a : {s}")

# while(i<=n):
#     s = s + i
#     i = i + 1

# print (f"La somme de 1 a {n} et egale a {s}")

# if n % 2 == 0:
#     print(f"{n} est pair")
# else:
#     print(f"{n} est impair")


Notes = []
Max = 0.0

# Collect the first note
n = float(input("Donnes la note 1: "))
Notes.append(n)
Max = Notes[0]

# Collect the rest of the notes
for i in range(2, 7):
    n = float(input(f"Donnes la note {i}: "))
    Notes.append(n)
    if Notes[-1] > Max:
        Max = Notes[-1]

print(f"Le Maximum est : {Max}")


# Fin


