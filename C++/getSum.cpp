#include <iostream>
using namespace std;

int get_sum(int a, int b) {
  // Good luck!
  int sum = 0;

  if(a == b) {
    sum = a;
  } else if(a < b) {
    for(int i = a; i <= b; i++) {
      sum += i;
    }
  } else if(a > b) {
    for(int i = b; i <= a; i++) {
      sum += i;
    }
  }

  return sum;
}

int main() {
  cout << get_sum(1, 0) << endl;
  cout << get_sum(1, 2) << endl;
  cout << get_sum(0, -1) << endl;
  cout << get_sum(1, 1) << endl;
  cout << get_sum(-1, 0) << endl;
  cout << get_sum(5, -1) << endl;
  return 0;
}