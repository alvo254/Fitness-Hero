#!/usr/bin/python3
a = 12
if a > 2:
    if a % 2 == 0:
        print("Tech")
    else:
        print("C is fun")
else:
    print("School")


def my_function(counter=89):
    return counter + 1
print(my_function())

a = [1,2,3,4]
a[2] = 10
print(a)

a = "Python is cool"
print(a[7:-5])

print(list(range(10,0,-2)))

print("{:d} Mission street, {}".format(972, "San Francisco"))

a = { 'id': 89, 'name': "John", 'projects': [1, 2, 3, 4], 'friends': [ { 'id': 82, 'name': "Bob" }, { 'id': 83, 'name': "Amy" } ] }

print(a.get('friends')[-1].get("name"))

for i in range(2, 10, 2):
    print(i, end=" ")

def my_function(counter=89):
     print("Counter: {}".format(counter)) 
my_function(12)






