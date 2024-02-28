#include <math.h>
#include <iostream>
long int findNextSquare(long int sq)
{
  long int hasil = 0;
  if (sqrt(sq) != (int)sqrt(sq))
  {
    hasil += -1;
  }
  else
  {
    hasil += pow((sqrt(sq) + 1), 2);
  }
  return hasil;
}
