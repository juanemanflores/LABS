def main():
    print("Hello learners!")
    print(multiplymultiplenumbers([2.3,5,3]))
def addmultiplenumbers(num):
    total = 0
    for n in num:
        total = total + n
    return total
def multiplymultiplenumbers(num):
    total = 1
    for n in num:
      total = total * n
    return total
def isitaninteger(num):
    if isinstance(num,int):
        return True 
    elif isinstance(num,float):
        return num.is_integer()
    else:
        return False
def isiteven(num):
    if not isitaninteger(num):
        return False
    return num % 2 == 0
      
if __name__=="__main__":
    main()