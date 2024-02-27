#include <iostream>
#include <string>
using namespace std;



string reverseString(string str)
{
  // your Code is Here ... enjoy !!!
  string word = "";
  for (int i = str.size() - 1; i >= 0; i--)
  {
    word += str[i];
  }
  return word;
}

