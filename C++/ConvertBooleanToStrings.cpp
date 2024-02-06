#include <string>
using namespace std;

std::string bool_to_word(bool value)
{
  string result;

  if( value == true) {
    result = "Yes";
  } else if(value == false) {
    result = "No";
  }
  return result;
}