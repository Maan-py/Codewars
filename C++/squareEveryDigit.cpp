#include <iostream>
#include <string>
#include <cmath>

using namespace std;

//  to square every digit of a number and concatenate them.
//  For example, if we run 9119 through the function, 811181 will come out,
//  because 9^2 is 81 and 1^2 is 1.
int square_digits(int n)
{
  int a = 1;
  int m = 0;
  while (n > 0) // n = 9119, 911
  {
    int d = n % 10; // d = 9119 % 10 = 9, 911 % 10 = 1
    m += a * d * d; // m + 1 * 9 * 9 = 81, 81 + 1 * 1 * 1 = 82
    a *= d <= 3 ? 10 : 100; // a * 100 = 100, 
    n /= 10; // n = 9119 / 10 = 911
  }
  return m; // 81
}

int main()
{
  cout << square_digits(9119) << endl;
  return 0;
}