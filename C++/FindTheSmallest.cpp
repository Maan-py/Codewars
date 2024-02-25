#include <vector>

using namespace std;

int findSmallest(vector<int> list)
{
  for(int i = 0; i < list.size(); i++) {
    if(list[0] > list[i]) {
      list[0] = list[i];
    }
  }
  return list[0];
}