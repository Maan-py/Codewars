#include <string>
#include <iostream>
using namespace std;

unsigned int strCount(const std::string &word, char letter)
{
  char ch;
  int count = 0;
  for (int i = 0; i < word.length(); i++)
  {
    ch = word[i];
    if (ch == letter)
    {
      count++;
    }
  }
  return count;
}

int main()
{
  cout << strCount("Hello", 'l');
}