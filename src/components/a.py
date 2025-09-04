class S_DES:
    def __init__(self):
        # Example key
        self.key = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0]

        # Permutations
        self.P10 = [3, 5, 2, 7, 4, 10, 1, 9, 8, 6]
        self.P8 = [6, 3, 7, 4, 8, 5, 10, 9]
        self.IP = [2, 6, 3, 1, 4, 8, 5, 7]
        self.IP_inv = [4, 1, 3, 5, 7, 2, 8, 6]
        self.EP = [4, 1, 2, 3, 2, 3, 4, 1]
        self.P4 = [2, 4, 3, 1]

        # S-boxes
        self.S0 = [[1, 0, 3, 2],
                   [3, 2, 1, 0],
                   [0, 2, 1, 3],
                   [3, 1, 3, 2]]
        self.S1 = [[0, 1, 2, 3],
                   [2, 0, 1, 3],
                   [3, 0, 1, 0],
                   [2, 1, 0, 3]]

        # Keys after generation
        self.key1 = [0] * 8
        self.key2 = [0] * 8

    def key_generation(self):
        key_ = [self.key[i - 1] for i in self.P10]

        Ls = key_[:5]
        Rs = key_[5:]

        # Shift by 1
        Ls_1 = self.shift(Ls[:], 1)
        Rs_1 = self.shift(Rs[:], 1)

        combined = Ls_1 + Rs_1
        self.key1 = [combined[i - 1] for i in self.P8]

        # Shift by 2
        Ls_2 = self.shift(Ls, 2)
        Rs_2 = self.shift(Rs, 2)

        combined = Ls_2 + Rs_2
        self.key2 = [combined[i - 1] for i in self.P8]

        print("Your Key-1 :", self.key1)
        print("Your Key-2 :", self.key2)

    def shift(self, arr, n):
        return arr[n:] + arr[:n]

    def encryption(self, plaintext):
        arr = [plaintext[i - 1] for i in self.IP]

        arr1 = self.function_(arr, self.key1)
        after_swap = self.swap(arr1, len(arr1) // 2)
        arr2 = self.function_(after_swap, self.key2)

        ciphertext = [arr2[i - 1] for i in self.IP_inv]
        return ciphertext

    def decryption(self, ciphertext):
        arr = [ciphertext[i - 1] for i in self.IP]

        arr1 = self.function_(arr, self.key2)
        after_swap = self.swap(arr1, len(arr1) // 2)
        arr2 = self.function_(after_swap, self.key1)

        decrypted = [arr2[i - 1] for i in self.IP_inv]
        return decrypted

    def function_(self, arr, key_):
        l = arr[:4]
        r = arr[4:]

        ep = [r[i - 1] for i in self.EP]

        xor_result = [ep[i] ^ key_[i] for i in range(8)]

        l_1 = xor_result[:4]
        r_1 = xor_result[4:]

        # S0
        row = int(f"{l_1[0]}{l_1[3]}", 2)
        col = int(f"{l_1[1]}{l_1[2]}", 2)
        val = self.S0[row][col]
        str_l = self.binary_(val)

        # S1
        row = int(f"{r_1[0]}{r_1[3]}", 2)
        col = int(f"{r_1[1]}{r_1[2]}", 2)
        val = self.S1[row][col]
        str_r = self.binary_(val)

        r_ = [int(str_l[0]), int(str_l[1]), int(str_r[0]), int(str_r[1])]
        r_p4 = [r_[i - 1] for i in self.P4]

        new_l = [l[i] ^ r_p4[i] for i in range(4)]
        return new_l + r

    def swap(self, array, n):
        return array[n:] + array[:n]

    def binary_(self, val):
        return format(val, '02b')


if __name__ == "__main__":
    obj = S_DES()
    obj.key_generation()

    plaintext = [1, 0, 0, 1, 0, 1, 1, 1]

    print("\nYour plain Text is :", plaintext)
    ciphertext = obj.encryption(plaintext)
    print("Your cipher Text is :", ciphertext)

    decrypted = obj.decryption(ciphertext)
    print("Your decrypted Text is :", decrypted)
