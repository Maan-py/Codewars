#include <string>
#include <iostream>
#include <bits/stdc++.h>

using namespace std; 

string sliceString (string str ) {
  char arr[str.length() + 1];
  string result = "";

  strcpy(arr, str.c_str());
  for (int i = 1; i < str.length() - 1; i++) {
    result += arr[i];
  }  

  return result;
}

int main() {
  cout << sliceString("country");
}