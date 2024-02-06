#include <string>
#include <cctype>
#include <iostream>
using namespace std;

std::string makeUpperCase(const std::string &input_str)
{
  string result = "";

  for (char c : input_str)
  {
    result += toupper(c);
  }

  return result;
}