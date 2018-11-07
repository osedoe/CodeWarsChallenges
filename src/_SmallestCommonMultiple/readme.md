# Intermediate Algorithm Scripting: Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

I used that ![scm](http://latex.codecogs.com/png.latex?scm%28a%2Cb%29%3D%5Cfrac%7B%7Ca%20%5Ccdot%20b%7C%7D%7Bgcd%28a%2Cb%29%7D)
where gcd(a,b) is the greatest common divisor (the largest positive integer that divides each of a and b).