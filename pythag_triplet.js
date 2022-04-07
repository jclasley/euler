// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// a^2 + b^2 = c^2
// a + b + c = 1000
// a + b = 1000 - c
// (a + b)^2 = (1000 - c)^2
// a^2 + 2ab + b^2 = 1000^2 - 2000c + c^2
// a^2 + b^2 + 2ab = c^2 + 1000^2 - 2000c
// since (a^2 + b^2) = (c^2) ---> 2ab = 1000^2 - 2000c
// ab = 1000^2 / 2 - 1000c
// ab + 1000c = 500000
// ab = 500000 - 1000c