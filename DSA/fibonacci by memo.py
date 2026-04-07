memo = {}
def fibo(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    if n in memo:
        return memo[n]
    memo[n] = fibo(n-2) + fibo(n-1)
    return memo[n]
n = int(input("Enter your no. "))
for i in range(n):
    print(fibo(i))
